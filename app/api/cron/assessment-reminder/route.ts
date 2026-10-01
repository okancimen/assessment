import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { sendAcademicReminderEmail, sendInternshipReminderEmail, sendNoChildReminderEmail } from '@/lib/email'

// Supabase admin client — bypasses RLS to read all in-progress assessments
function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}

function daysBetween(a: string, b: Date): number {
  return Math.floor((b.getTime() - new Date(a).getTime()) / (1000 * 60 * 60 * 24))
}

export async function GET(req: NextRequest) {
  // Verify cron secret — accept via Authorization header or ?secret= query param
  const authHeader = req.headers.get('authorization')
  const querySecret = req.nextUrl.searchParams.get('secret')
  const cronSecret = process.env.CRON_SECRET
  const valid = cronSecret && (
    authHeader === `Bearer ${cronSecret}` ||
    querySecret === cronSecret
  )
  if (!valid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = adminClient()
  const now = new Date()

  // Fetch all in-progress assessments that haven't hit the 3-reminder cap
  const { data: assessments, error } = await supabase
    .from('assessments')
    .select(`
      id, assessment_type, child_id, started_at,
      reminder_sent_at, reminder_count,
      children (
        name, parent_id,
        student_user_id
      )
    `)
    .eq('status', 'in_progress')
    .lt('reminder_count', 3)

  if (error) {
    console.error('[cron/assessment-reminder] fetch error', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  let sent = 0
  let skipped = 0

  for (const a of assessments ?? []) {
    const daysSinceStart    = daysBetween(a.started_at, now)
    const daysSinceReminder = a.reminder_sent_at ? daysBetween(a.reminder_sent_at, now) : null
    const count: number     = a.reminder_count ?? 0

    // Determine if this assessment is due a reminder
    // Reminder 1: 1+ day after start, never reminded
    // Reminder 2: 7+ days since last reminder
    // Reminder 3: 15+ days since last reminder (but reminder 2 must have been sent first)
    const isDue =
      (count === 0 && daysSinceStart >= 1) ||
      (count === 1 && daysSinceReminder !== null && daysSinceReminder >= 7) ||
      (count === 2 && daysSinceReminder !== null && daysSinceReminder >= 8) // 7+8 = 15 days from reminder 2

    if (!isDue) { skipped++; continue }

    const nextCount = (count + 1) as 1 | 2 | 3
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const child = (a.children as unknown) as { name: string; parent_id: string; student_user_id: string | null }

    try {
      if (a.assessment_type === 'internship') {
        // For internship: email the student directly (student_user_id) if self-registered,
        // otherwise fall back to parent
        const recipientId = child.student_user_id ?? child.parent_id
        const { data: userData } = await supabase.auth.admin.getUserById(recipientId)
        const email = userData?.user?.email
        const name  = userData?.user?.user_metadata?.full_name?.split(' ')[0]
                   ?? userData?.user?.email?.split('@')[0]
                   ?? 'there'
        if (!email) { skipped++; continue }

        await sendInternshipReminderEmail({
          to: email,
          name,
          assessmentId: a.id,
          reminderNumber: nextCount,
        })
      } else {
        // Academic: email the parent
        const { data: userData } = await supabase.auth.admin.getUserById(child.parent_id)
        const email      = userData?.user?.email
        const parentName = userData?.user?.user_metadata?.full_name?.split(' ')[0]
                        ?? userData?.user?.email?.split('@')[0]
                        ?? 'there'
        if (!email) { skipped++; continue }

        await sendAcademicReminderEmail({
          to: email,
          parentName,
          childName: child.name,
          assessmentId: a.id,
          reminderNumber: nextCount,
        })
      }

      // Update reminder tracking
      await supabase
        .from('assessments')
        .update({
          reminder_sent_at: now.toISOString(),
          reminder_count:   nextCount,
        })
        .eq('id', a.id)

      sent++
    } catch (err) {
      console.error(`[cron/assessment-reminder] failed for ${a.id}`, err)
      skipped++
    }
  }

  // ── No-child onboarding reminder ──────────────────────────────────────────
  // Users who registered > 24h ago and never added a child get one email nudge.
  let noChildSent = 0

  const cutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString()

  const { data: newProfiles } = await supabase
    .from('profiles')
    .select('id, email, full_name')
    .is('no_child_reminder_sent_at', null)
    .lt('created_at', cutoff)

  for (const profile of newProfiles ?? []) {
    if (!profile.email) continue

    const { count } = await supabase
      .from('children')
      .select('id', { count: 'exact', head: true })
      .eq('parent_id', profile.id)

    if (count && count > 0) continue

    const name = profile.full_name?.split(' ')[0] ?? 'there'
    try {
      await sendNoChildReminderEmail({ to: profile.email, name })
      await supabase
        .from('profiles')
        .update({ no_child_reminder_sent_at: now.toISOString() })
        .eq('id', profile.id)
      noChildSent++
    } catch (err) {
      console.error(`[cron/assessment-reminder] no-child email failed for ${profile.id}`, err)
    }
  }

  console.log(`[cron/assessment-reminder] sent=${sent} skipped=${skipped} noChildSent=${noChildSent}`)
  return NextResponse.json({ sent, skipped, noChildSent })
}
