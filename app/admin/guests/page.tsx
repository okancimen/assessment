import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isAdminEmail } from '@/lib/admin'
import { redirect } from 'next/navigation'
import GuestAssessmentsTable from '@/components/admin/GuestAssessmentsTable'

export const dynamic = 'force-dynamic'

type GuestRow = {
  id: string
  guest_name: string | null
  guest_age: number | null
  guest_country: string | null
  guest_city: string | null
  assessment_type: string
  status: string
  created_at: string
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
      .select('id, guest_name, guest_age, guest_country, guest_city, status, created_at')
      .not('guest_token', 'is', null)
      .is('child_id', null)
      .order('created_at', { ascending: false })
      .limit(500),
  ])

  const academicGuests: GuestRow[] = (guestAssessmentsResult.data ?? []).map((g) => ({
    id: g.id,
    guest_name: g.guest_name,
    guest_age: g.guest_age,
    guest_country: g.guest_country,
    guest_city: g.guest_city,
    assessment_type: g.assessment_type ?? 'academic',
    status: g.status,
    created_at: g.created_at,
  }))

  const personalityGuests: GuestRow[] = (guestPersonalityResult.data ?? []).map((g) => ({
    id: g.id,
    guest_name: g.guest_name,
    guest_age: g.guest_age,
    guest_country: g.guest_country,
    guest_city: g.guest_city,
    assessment_type: 'personality',
    status: g.status,
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
