import { NextRequest, NextResponse } from 'next/server'
import { sendGuestResumeReminderEmail } from '@/lib/email'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  const { email, assessmentId, guestToken } = await req.json()

  if (!email || !assessmentId || !guestToken) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const supabase = await createClient()
  const { data: assessment } = await supabase
    .from('assessments')
    .select('id, guest_name, guest_token')
    .eq('id', assessmentId)
    .eq('guest_token', guestToken)
    .single()

  if (!assessment) {
    return NextResponse.json({ error: 'Assessment not found' }, { status: 404 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'
  const resumeUrl = `${siteUrl}/assessment/${assessmentId}/question`
  const claimUrl = `${siteUrl}/auth/register?redirect=${encodeURIComponent(`/api/assessment/claim?assessmentId=${assessmentId}&token=${guestToken}`)}`

  await sendGuestResumeReminderEmail({
    to: email,
    guestName: assessment.guest_name ?? 'your child',
    resumeUrl,
    claimUrl,
  })

  return NextResponse.json({ ok: true })
}
