import { createClient as createAuthClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'

const GOAL_LABELS: Record<string, string> = {
  '11plus': '11+ / Grammar school',
  'private_school': 'Private school entrance',
  'benchmark': 'Benchmark globally',
  'internship': 'Internship / work readiness',
}

const SUBJECT_LABELS: Record<string, string> = {
  maths: 'Maths', english: 'English', science: 'Science',
  history: 'History', languages: 'Languages', computing: 'Computing', business: 'Business',
}

function Badge({ children, color = 'gray' }: { children: React.ReactNode; color?: 'blue' | 'emerald' | 'amber' | 'purple' | 'indigo' | 'gray' }) {
  const styles = {
    blue: 'bg-blue-100 text-blue-700',
    emerald: 'bg-emerald-100 text-emerald-700',
    amber: 'bg-amber-100 text-amber-700',
    purple: 'bg-purple-100 text-purple-700',
    indigo: 'bg-[#eef2ff] text-[#4F46E5]',
    gray: 'bg-[#f5f5f7] text-[#6e6e73]',
  }
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${styles[color]}`}>
      {children}
    </span>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#f5f5f7]">
        <h2 className="text-sm font-semibold text-[#1d1d1f]">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 py-2.5 border-b border-[#f5f5f7] last:border-0">
      <span className="text-xs text-[#6e6e73] w-36 flex-shrink-0">{label}</span>
      <span className="text-xs text-[#1d1d1f] font-medium">{value || <span className="text-[#d2d2d7]">—</span>}</span>
    </div>
  )
}

export default async function AdminUserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const authClient = await createAuthClient()
  const { data: { user: adminUser } } = await authClient.auth.getUser()
  if (!adminUser) redirect('/auth/login')

  const allowed = (process.env.ADMIN_EMAIL ?? '').split(',').map((e) => e.trim().toLowerCase())
  if (!allowed.includes(adminUser.email?.toLowerCase() ?? '')) redirect('/dashboard')

  const db = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )

  const [authResult, profileResult, childrenResult] = await Promise.all([
    db.auth.admin.getUserById(id),
    db.from('profiles').select('country, city, is_admin').eq('id', id).single(),
    db.from('children')
      .select('id, name, date_of_birth, goals, subjects, outcome_goal, created_at')
      .or(`parent_id.eq.${id},student_user_id.eq.${id}`)
      .order('created_at', { ascending: true }),
  ])

  const targetUser = authResult.data?.user
  if (!targetUser) notFound()

  const profile = profileResult.data
  const children = childrenResult.data ?? []

  // Fetch assessments for all children
  const childIds = children.map((c) => c.id)
  const assessmentsResult = childIds.length > 0
    ? await db.from('assessments')
        .select('id, child_id, assessment_type, status, created_at, completed_at, results(overall_score, subject_scores)')
        .in('child_id', childIds)
        .order('created_at', { ascending: false })
    : { data: [] as { id: string; child_id: string; assessment_type: string; status: string; created_at: string; completed_at: string | null; results: { overall_score: number | null; subject_scores: Record<string, number> | null }[] }[] }

  const assessmentsByChild: Record<string, typeof assessmentsResult.data> = {}
  for (const a of assessmentsResult.data ?? []) {
    const cid = a.child_id as string
    if (!assessmentsByChild[cid]) assessmentsByChild[cid] = []
    assessmentsByChild[cid]!.push(a)
  }

  const inProgressIds = (assessmentsResult.data ?? [])
    .filter((a) => a.status === 'in_progress')
    .map((a) => a.id as string)

  const sessionsResult = inProgressIds.length > 0
    ? await db.from('assessment_sessions')
        .select('assessment_id, subject_index, question_index')
        .in('assessment_id', inProgressIds)
    : { data: [] as { assessment_id: string; subject_index: number; question_index: number }[] }

  const sessionsByAssessment: Record<string, { subject_index: number; question_index: number }> = {}
  for (const s of sessionsResult.data ?? []) {
    sessionsByAssessment[s.assessment_id] = s
  }

  const fullName = (targetUser.user_metadata?.full_name as string | undefined) ?? null

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="max-w-3xl mx-auto w-full px-4 sm:px-6 py-10 space-y-6">

        <div className="flex items-center gap-3 mb-2">
          <Link href="/admin" className="text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
            ← Back to admin
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#4F46E5] font-bold text-lg">
            {(fullName ?? targetUser.email ?? '?')[0].toUpperCase()}
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#1d1d1f] tracking-tight">{fullName ?? 'No name'}</h1>
            <p className="text-sm text-[#6e6e73]">{targetUser.email}</p>
          </div>
          {profile?.is_admin && <Badge color="amber">Admin</Badge>}
        </div>

        {/* Account info */}
        <Section title="Account">
          <Row label="User ID" value={<span className="font-mono text-[10px]">{targetUser.id}</span>} />
          <Row label="Email" value={targetUser.email} />
          <Row label="Full name" value={fullName} />
          <Row label="Registered" value={new Date(targetUser.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })} />
          <Row label="Last sign in" value={targetUser.last_sign_in_at ? new Date(targetUser.last_sign_in_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : null} />
          <Row label="Location" value={[profile?.city, profile?.country].filter(Boolean).join(', ') || null} />
          <Row label="Provider" value={targetUser.app_metadata?.provider as string ?? 'email'} />
        </Section>

        {/* Children */}
        {children.length > 0 ? (
          <Section title={`Children (${children.length})`}>
            <div className="space-y-6">
              {children.map((child) => {
                const age = Math.floor((Date.now() - new Date(child.date_of_birth as string).getTime()) / (365.25 * 24 * 60 * 60 * 1000))
                const childAssessments = assessmentsByChild[child.id] ?? []
                return (
                  <div key={child.id} className="border border-[#f5f5f7] rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-[#1d1d1f]">{child.name as string}</p>
                        <p className="text-xs text-[#6e6e73]">Age {age} · DOB {new Date(child.date_of_birth as string).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                      </div>
                    </div>

                    {/* Goals */}
                    {(child.goals as string[] | null)?.length ? (
                      <div>
                        <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Preparing for</p>
                        <div className="flex flex-wrap gap-1.5">
                          {(child.goals as string[]).map((g) => (
                            <Badge key={g} color="indigo">{GOAL_LABELS[g] ?? g}</Badge>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Subjects */}
                    {(child.subjects as string[] | null)?.length ? (
                      <div>
                        <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Enjoys</p>
                        <div className="flex flex-wrap gap-1.5">
                          {(child.subjects as string[]).map((s) => (
                            <Badge key={s} color="gray">{SUBJECT_LABELS[s] ?? s}</Badge>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Outcome goal */}
                    {child.outcome_goal ? (
                      <div>
                        <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-1">What a great outcome looks like</p>
                        <p className="text-xs text-[#1d1d1f] leading-relaxed">{child.outcome_goal as string}</p>
                      </div>
                    ) : null}

                    {/* Assessments */}
                    {childAssessments.length > 0 && (
                      <div>
                        <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Assessments</p>
                        <div className="space-y-2">
                          {childAssessments.map((a) => {
                            const scores = (a.results as { overall_score?: number; subject_scores?: Record<string, number> }[] | null)?.[0]
                            const overall = scores?.overall_score
                            const isInternship = a.assessment_type === 'internship'
                            const session = a.status === 'in_progress' ? sessionsByAssessment[a.id as string] : null
                            const INTERNSHIP_CUMULATIVE = [0, 5, 10, 20, 28, 34]
                            const progressText = session
                              ? isInternship
                                ? `${(INTERNSHIP_CUMULATIVE[session.subject_index] ?? 0) + session.question_index} / 34`
                                : `${session.subject_index * 15 + session.question_index} / 60`
                              : null
                            return (
                              <div key={a.id as string} className="flex items-center justify-between bg-[#f5f5f7] rounded-xl px-4 py-2.5">
                                <div className="flex items-center gap-2">
                                  <Badge color={isInternship ? 'purple' : 'indigo'}>
                                    {isInternship ? 'Internship' : 'Academic'}
                                  </Badge>
                                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                    a.status === 'completed' ? 'bg-emerald-100 text-emerald-700'
                                    : a.status === 'in_progress' ? 'bg-amber-100 text-amber-700'
                                    : 'bg-[#e5e5ea] text-[#6e6e73]'
                                  }`}>
                                    {(a.status as string).replace('_', ' ')}
                                  </span>
                                  {progressText && (
                                    <span className="text-[10px] text-[#6e6e73] font-medium">{progressText} questions</span>
                                  )}
                                </div>
                                <div className="flex items-center gap-3">
                                  {overall != null && (
                                    <span className="text-xs font-bold text-[#1d1d1f]">{overall}/100</span>
                                  )}
                                  {a.status === 'completed' && (
                                    <Link
                                      href={`/assessment/${a.id}/results`}
                                      className="text-[10px] text-[#4F46E5] font-semibold hover:underline"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      View report →
                                    </Link>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </Section>
        ) : (
          <Section title="Children">
            <p className="text-xs text-[#6e6e73]">No children added yet.</p>
          </Section>
        )}

      </main>
    </div>
  )
}
