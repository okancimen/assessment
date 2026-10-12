import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isAdminEmail } from '@/lib/admin'
import { redirect } from 'next/navigation'
import GuestAssessmentsTable from '@/components/admin/GuestAssessmentsTable'
import { SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import { getQuestions, Tier } from '@/lib/personality-questions'

export const dynamic = 'force-dynamic'

const ACADEMIC_TOTAL = SUBJECTS.length * QUESTIONS_PER_SUBJECT

type GuestRow = {
  id: string
  guest_name: string | null
  guest_age: number | null
  guest_country: string | null
  guest_city: string | null
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

  const [guestAssessmentsResult, guestPersonalityResult] = await Promise.all([
    db.from('assessments')
      .select('id, guest_name, guest_age, guest_country, guest_city, assessment_type, status, created_at')
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
    assessment_type: 'personality',
    status: g.status,
    progress: personalityPct(g.status, g.age_tier as Tier, answerCountByAssessment.get(g.id) ?? 0),
    created_at: g.created_at,
  }))

  const guestAssessments = [...academicGuests, ...personalityGuests].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )

  return (
    <main className="px-8 py-10 space-y-6">
      <div>
        <h1 className="text-xl font-semibold" style={{ color: '#0F172A' }}>Guest assessments</h1>
        <p className="text-sm mt-0.5" style={{ color: '#64748B' }}>
          Assessments started without an account — all time
        </p>
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
