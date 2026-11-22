import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isAdminEmail } from '@/lib/admin'
import { redirect } from 'next/navigation'
import GuestAssessmentsTable from '@/components/admin/GuestAssessmentsTable'
import { AdminGuestDailyChart, AdminGuestFunnelChart } from '@/components/admin/AdminCharts'
import { SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import { getQuestions, Tier } from '@/lib/personality-questions'
import type { DailyPoint } from '@/components/admin/GrowthLineChart'

export const dynamic = 'force-dynamic'

const ACADEMIC_TOTAL = SUBJECTS.length * QUESTIONS_PER_SUBJECT

type GuestRow = {
  id: string
  guest_name: string | null
  guest_age: number | null
  guest_country: string | null
  guest_city: string | null
  guest_email: string | null
  reminder_sent_at: string | null
  assessment_type: string
  status: string
  progress: number
  created_at: string
}

function academicPct(
  status: string,
  session: { completed_subjects: string[] | null; question_index: number | null } | undefined,
): number {
  if (status === 'completed') return 100
  if (!session || status === 'pending') return 0
  const done = (session.completed_subjects?.length ?? 0) * QUESTIONS_PER_SUBJECT + (session.question_index ?? 0)
  return Math.min(100, Math.round((done / ACADEMIC_TOTAL) * 100))
}

function personalityPct(status: string, tier: Tier, answerCount: number): number {
  if (status === 'completed') return 100
  const total = getQuestions(tier).length
  if (!total) return 0
  return Math.min(100, Math.round((answerCount / total) * 100))
}

export default async function AdminGuestsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')
  if (!isAdminEmail(user.email)) redirect('/dashboard')

  const db = createAdminClient()

  const [guestAssessmentsResult, guestPersonalityResult, guestAcademicAll, guestPersonalityAll] = await Promise.all([
    db.from('assessments')
      .select('id, guest_name, guest_age, guest_country, guest_city, guest_email, reminder_sent_at, assessment_type, status, created_at')
      .not('guest_token', 'is', null)
      .is('child_id', null)
      .order('created_at', { ascending: false })
      .limit(500),
    db.from('personality_assessments')
      .select('id, guest_name, guest_age, guest_country, guest_city, age_tier, status, created_at')
      .not('guest_token', 'is', null)
      .is('child_id', null)
      .order('created_at', { ascending: false })
      .limit(500),
    // All-time academic guests (including claimed) for funnel + daily chart
    db.from('assessments')
      .select('status, child_id, guest_email, created_at')
      .not('guest_name', 'is', null)
      .order('created_at', { ascending: true }),
    // All-time personality guests (including claimed)
    db.from('personality_assessments')
      .select('status, child_id, created_at')
      .not('guest_name', 'is', null)
      .order('created_at', { ascending: true }),
  ])

  const academicRows = guestAssessmentsResult.data ?? []
  const personalityRows = guestPersonalityResult.data ?? []
  const academicIds = academicRows.map((g) => g.id)
  const personalityIds = personalityRows.map((g) => g.id)

  // Live progress: academic from assessment_sessions, personality from answer counts.
  const [sessionsResult, answersResult] = await Promise.all([
    academicIds.length
      ? db.from('assessment_sessions').select('assessment_id, completed_subjects, question_index').in('assessment_id', academicIds)
      : Promise.resolve({ data: [] as { assessment_id: string; completed_subjects: string[] | null; question_index: number | null }[] }),
    personalityIds.length
      ? db.from('personality_answers').select('assessment_id').in('assessment_id', personalityIds)
      : Promise.resolve({ data: [] as { assessment_id: string }[] }),
  ])

  const sessionByAssessment = new Map(
    (sessionsResult.data ?? []).map((s) => [s.assessment_id, s]),
  )
  const answerCountByAssessment = new Map<string, number>()
  for (const a of answersResult.data ?? []) {
    answerCountByAssessment.set(a.assessment_id, (answerCountByAssessment.get(a.assessment_id) ?? 0) + 1)
  }

  const academicGuests: GuestRow[] = academicRows.map((g) => ({
    id: g.id,
    guest_name: g.guest_name,
    guest_age: g.guest_age,
    guest_country: g.guest_country,
    guest_city: g.guest_city,
    guest_email: (g as Record<string, unknown>).guest_email as string | null ?? null,
    reminder_sent_at: (g as Record<string, unknown>).reminder_sent_at as string | null ?? null,
    assessment_type: g.assessment_type ?? 'academic',
    status: g.status,
    progress: academicPct(g.status, sessionByAssessment.get(g.id)),
    created_at: g.created_at,
  }))

  const personalityGuests: GuestRow[] = personalityRows.map((g) => ({
    id: g.id,
    guest_name: g.guest_name,
    guest_age: g.guest_age,
    guest_country: g.guest_country,
    guest_city: g.guest_city,
    guest_email: null,
    reminder_sent_at: null,
    assessment_type: 'personality',
    status: g.status,
    progress: personalityPct(g.status, g.age_tier as Tier, answerCountByAssessment.get(g.id) ?? 0),
    created_at: g.created_at,
  }))

  const guestAssessments = [...academicGuests, ...personalityGuests].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )

  // ── All-time guest funnel ─────────────────────────────────────────────────
  type GuestAllRow = { status: string; child_id: string | null; guest_email?: string | null; created_at: string }
  const allGuestRows: GuestAllRow[] = [
    ...((guestAcademicAll.data ?? []) as GuestAllRow[]),
    ...((guestPersonalityAll.data ?? []) as GuestAllRow[]),
  ]
  const guestTotalStarted       = allGuestRows.length
  const guestTotalCompleted     = allGuestRows.filter((r) => r.status === 'completed').length
  const guestTotalEmailCaptured = (guestAcademicAll.data ?? []).filter((r) => (r as GuestAllRow).guest_email != null).length
  const guestTotalClaimed       = allGuestRows.filter((r) => r.child_id != null).length

  const guestFunnelSteps = [
    { label: 'Started',              count: guestTotalStarted,       color: '#4F46E5' },
    { label: 'Completed',            count: guestTotalCompleted,     color: '#7C3AED' },
    { label: 'Email captured',       count: guestTotalEmailCaptured, color: '#0D9488' },
    { label: 'Claimed (→ account)',  count: guestTotalClaimed,       color: '#22C55E' },
  ]

  // ── Daily guest chart (last 30 days) ─────────────────────────────────────
  const now     = new Date()
  const cutoff  = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  const startedByDay:   Record<string, number> = {}
  const completedByDay: Record<string, number> = {}
  for (const row of allGuestRows) {
    const day = row.created_at.slice(0, 10)
    if (new Date(day + 'T00:00:00Z') >= cutoff) {
      startedByDay[day]   = (startedByDay[day]   ?? 0) + 1
      if (row.status === 'completed')
        completedByDay[day] = (completedByDay[day] ?? 0) + 1
    }
  }
  const guestDailyData: DailyPoint[] = []
  const cursor = new Date(cutoff)
  cursor.setUTCHours(0, 0, 0, 0)
  const end = new Date()
  end.setUTCHours(0, 0, 0, 0)
  while (cursor <= end) {
    const dateStr = cursor.toISOString().slice(0, 10)
    guestDailyData.push({
      date: dateStr,
      label: new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }),
      users: 0,
      started:   startedByDay[dateStr]   ?? 0,
      completed: completedByDay[dateStr] ?? 0,
    })
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }

  return (
    <main className="px-8 py-10 space-y-6">
      <div>
        <h1 className="text-xl font-semibold" style={{ color: '#0F172A' }}>Guest assessments</h1>
        <p className="text-sm mt-0.5" style={{ color: '#64748B' }}>
          Assessments started without an account — all time
        </p>
      </div>

      {/* Daily guests chart + conversion funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-xl border p-6" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold mb-1" style={{ color: '#0F172A' }}>Daily guests</h2>
          <p className="text-xs mb-5" style={{ color: '#64748B' }}>Started vs completed · last 30 days</p>
          <AdminGuestDailyChart data={guestDailyData} />
        </div>
        <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold mb-1" style={{ color: '#0F172A' }}>Conversion funnel</h2>
          <p className="text-xs mb-5" style={{ color: '#64748B' }}>Guest assessments · all time</p>
          <AdminGuestFunnelChart steps={guestFunnelSteps} />
        </div>
      </div>

      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E2E6EF' }}>
        <div className="px-6 py-5 border-b" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold" style={{ color: '#0F172A' }}>All guests</h2>
          <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{guestAssessments.length.toLocaleString()} total</p>
        </div>
        <GuestAssessmentsTable assessments={guestAssessments} />
      </div>
    </main>
  )
}
