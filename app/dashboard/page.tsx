import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import StartAssessmentButton from '@/app/children/[id]/StartAssessmentButton'
import { getAge, formatDate } from '@/lib/utils'
import { Child, Assessment } from '@/types'
import { getScoreLabel, getScoreColor } from '@/lib/assessment/adaptive'
import { Suspense } from 'react'
import ToastFromUrl from '@/components/ui/ToastFromUrl'
import InviteInternshipButton from '@/components/dashboard/InviteInternshipButton'
import { getDashboardI18n } from '@/lib/dashboard-i18n'

interface AssessmentWithResult extends Omit<Assessment, 'children'> {
  children: { name: string }
  results: { standardized_score: number } | null
}

const AVATAR_COLORS = [
  { bg: '#eef2ff', text: '#4F46E5' },
  { bg: '#f0fdfa', text: '#0D9488' },
  { bg: '#f5f3ff', text: '#7C3AED' },
  { bg: '#fff7ed', text: '#EA580C' },
]

function getAvatarColor(name: string) {
  const idx = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length
  return AVATAR_COLORS[idx]
}

function scoreRingColor(score: number) {
  if (score >= 120) return '#3B82F6'
  if (score >= 110) return '#22C55E'
  if (score >= 95)  return '#4F46E5'
  if (score >= 85)  return '#F97316'
  return '#EF4444'
}

function ScoreRing({ score }: { score: number }) {
  const size = 52
  const r = 20
  const cx = size / 2
  const circumference = 2 * Math.PI * r
  const progress = Math.min(Math.max((score - 70) / (145 - 70), 0), 1)
  const offset = circumference * (1 - progress)
  const color = scoreRingColor(score)

  return (
    <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="#e5e7eb" strokeWidth={3.5} />
        <circle cx={cx} cy={cx} r={r} fill="none" stroke={color} strokeWidth={3.5}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold leading-none" style={{ color }}>{score}</span>
      </div>
    </div>
  )
}

export default async function DashboardPage({ locale }: { locale?: string } = {}) {
  const t = getDashboardI18n(locale)
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: children } = await supabase
    .from('children')
    .select('*')
    .eq('parent_id', user.id)
    .order('created_at', { ascending: false })

  const childIds = (children || []).map((c: Child) => c.id)

  const { data: assessments } = childIds.length > 0
    ? await supabase
        .from('assessments')
        .select('*, children(name), results(standardized_score)')
        .in('child_id', childIds)
        .order('created_at', { ascending: false })
        .limit(20)
    : { data: [] }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single()

  const latestScores: Record<string, { score: number; assessmentId: string }> = {}
  const assessmentCounts: Record<string, number> = {}
  for (const a of (assessments || []) as AssessmentWithResult[]) {
    assessmentCounts[a.child_id] = (assessmentCounts[a.child_id] || 0) + 1
    if (a.status === 'completed' && a.results && !latestScores[a.child_id]) {
      latestScores[a.child_id] = { score: a.results.standardized_score, assessmentId: a.id }
    }
  }

  const hasChildren = children && children.length > 0
  const hasAssessments = assessments && assessments.length > 0

  const { data: selfChild } = await supabase
    .from('children')
    .select('*')
    .eq('student_user_id', user.id)
    .maybeSingle()

  const { data: selfInternship } = selfChild
    ? await supabase
        .from('assessments')
        .select('id, status, results(subject_scores)')
        .eq('child_id', selfChild.id)
        .eq('assessment_type', 'internship')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()
    : { data: null }

  const selfInternshipScores = (selfInternship?.results as { subject_scores?: Record<string, number> } | null)?.subject_scores
  const selfInternshipOverall = selfInternshipScores?.overall

  // Personality assessments per child (latest)
  const strengthsEligible = (children || []).filter((c: Child) => { const a = getAge(c.date_of_birth); return a >= 6 && a <= 20 })
  const strengthsIds = strengthsEligible.map((c: Child) => c.id)
  const { data: personalityAssessments } = strengthsIds.length > 0
    ? await supabase
        .from('personality_assessments')
        .select('id, status, child_id')
        .in('child_id', strengthsIds)
        .order('created_at', { ascending: false })
    : { data: [] }

  const strengthsMap: Record<string, { id: string; status: string }> = {}
  for (const pa of (personalityAssessments || [])) {
    if (!strengthsMap[pa.child_id]) strengthsMap[pa.child_id] = { id: pa.id, status: pa.status }
  }

  const eligibleChildren = (children || []).filter((c: Child) => getAge(c.date_of_birth) >= 14)
  const eligibleIds = eligibleChildren.map((c: Child) => c.id)

  const { data: internshipAssessments } = eligibleIds.length > 0
    ? await supabase
        .from('assessments')
        .select('id, status, child_id, results(subject_scores)')
        .in('child_id', eligibleIds)
        .eq('assessment_type', 'internship')
        .order('created_at', { ascending: false })
    : { data: [] }

  const internshipMap: Record<string, { id: string; status: string; overall?: number }> = {}
  for (const a of (internshipAssessments || [])) {
    if (!internshipMap[a.child_id]) {
      const scores = (a.results as { subject_scores?: Record<string, number> } | null)?.subject_scores
      internshipMap[a.child_id] = { id: a.id, status: a.status, overall: scores?.overall }
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col" dir={t.dir}>
      <Navbar locale={locale} />
      <Suspense><ToastFromUrl /></Suspense>
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
              {t.hello}, {(profile?.full_name || user.user_metadata?.full_name)?.split(' ')[0] || ''}
            </h1>
            <p className="text-sm text-[#6e6e73] mt-1">{t.subtitle}</p>
          </div>
          <Link
            href={`/children/new${locale ? `?locale=${locale}` : ''}`}
            className="bg-[#4F46E5] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
          >
            {t.addChild}
          </Link>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#eef2ff] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4.5 h-4.5 text-[#4F46E5]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-1">{t.howItWorksTitle}</p>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{t.howItWorksDesc}</p>
            </div>
          </div>
          <div className="border-t border-[#f5f5f7]" />
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#f0fdfa] flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4.5 h-4.5 text-teal-600" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1d1d1f] mb-1">{t.globalStandingTitle}</p>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                {t.globalStandingDesc}{' '}
                <Link href="https://eduentry.com/sample-report" className="text-[#4F46E5] font-medium hover:underline">
                  {t.seeReport}
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Children */}
        <section>
          <h2 className="text-base font-semibold text-[#1d1d1f] mb-4">{t.childrenSection}</h2>
          {!hasChildren ? (
            <div className="bg-white rounded-3xl border border-dashed border-[#d2d2d7] p-14 text-center">
              <p className="text-[#6e6e73] text-sm mb-4">{t.noChildrenYet}</p>
              <Link href={`/children/new${locale ? `?locale=${locale}` : ''}`} className="text-[#4F46E5] font-semibold text-sm hover:underline">
                {t.addFirstChild}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(children as Child[]).map((child) => {
                const latest = latestScores[child.id]
                const count = assessmentCounts[child.id] || 0
                const avatar = getAvatarColor(child.name)
                return (
                  <div key={child.id} className="bg-white rounded-3xl border border-[#d2d2d7] hover:border-[#4F46E5] hover:shadow-md transition-all flex flex-col">
                    <Link href={`/children/${child.id}`} className="p-5 flex-1 block">
                      <div className="flex items-start justify-between mb-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                          style={{ background: avatar.bg, color: avatar.text }}
                        >
                          {child.name[0].toUpperCase()}
                        </div>
                        {latest && <ScoreRing score={latest.score} />}
                      </div>
                      <h3 className="font-semibold text-[#1d1d1f]">{child.name}</h3>
                      <p className="text-xs text-[#6e6e73] mt-0.5">
                        {t.age} {getAge(child.date_of_birth)} · {t.born} {formatDate(child.date_of_birth)}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        {count > 0 ? (
                          <span className="inline-flex items-center gap-1 bg-[#f5f5f7] text-[#6e6e73] text-xs font-medium px-2.5 py-0.5 rounded-full border border-[#d2d2d7]">
                            {t.assessmentCount(count)}
                          </span>
                        ) : (
                          <span className="text-xs text-[#6e6e73]">{t.noAssessmentsChild}</span>
                        )}
                        {latest && (
                          <span className="text-xs text-[#6e6e73]">{getScoreLabel(latest.score)}</span>
                        )}
                      </div>
                    </Link>
                    <div className="px-5 pb-5">
                      <StartAssessmentButton childId={child.id} size="sm" className="w-full" locale={locale} />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* Strengths Assessment — for children aged 6–20 */}
        {strengthsEligible.length > 0 && (
          <section>
            <div className="flex items-start justify-between mb-4 gap-4">
              <div>
                <h2 className="text-base font-semibold text-[#1d1d1f]">{t.strengthsTitle}</h2>
                <p className="text-xs text-[#6e6e73] mt-0.5">{t.strengthsSubtitle}</p>
              </div>
              <Link href={`/strengths${locale ? `?locale=${locale}` : ''}`} className="text-sm text-[#4F46E5] font-semibold hover:underline whitespace-nowrap">
                {t.strengthsLearnMore}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengthsEligible.map((child: Child) => {
                const sa = strengthsMap[child.id]
                const avatar = getAvatarColor(child.name)
                return (
                  <div key={child.id} className="bg-white rounded-3xl border border-[#d2d2d7] p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ background: avatar.bg, color: avatar.text }}
                      >
                        {child.name[0].toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#1d1d1f] text-sm truncate">{child.name}</p>
                        <p className="text-xs text-[#6e6e73]">{t.age} {getAge(child.date_of_birth)}</p>
                      </div>
                    </div>
                    {sa?.status === 'completed' ? (
                      <Link
                        href={`/strengths/${sa.id}/results${locale ? `?locale=${locale}` : ''}`}
                        className="inline-flex items-center justify-center border border-[#4F46E5] text-[#4F46E5] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#eef2ff] transition-colors"
                      >
                        {t.viewStrengths}
                      </Link>
                    ) : sa?.status === 'in_progress' ? (
                      <>
                        <p className="text-xs text-amber-600 font-medium">{t.strengthsInProgress}</p>
                        <Link
                          href={`/strengths/${sa.id}/question${locale ? `?locale=${locale}` : ''}`}
                          className="inline-flex items-center justify-center bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                        >
                          {t.resumeStrengths}
                        </Link>
                      </>
                    ) : (
                      <Link
                        href={`/strengths/${child.id}/start${locale ? `?locale=${locale}` : ''}`}
                        className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#4338CA] transition-colors"
                      >
                        {t.startStrengths}
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Internship Programme — for children aged 14+ */}
        {eligibleChildren.length > 0 && (
          <section>
            <div className="flex items-start justify-between mb-4 gap-4">
              <div>
                <h2 className="text-base font-semibold text-[#1d1d1f]">{t.internshipProgramme}</h2>
                <p className="text-xs text-[#6e6e73] mt-0.5">{t.internshipSubtitle}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <InviteInternshipButton locale={locale} />
                <Link href="https://eduentry.ai/en" className="text-sm text-[#4F46E5] font-semibold hover:underline whitespace-nowrap">
                  {t.learnMore}
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {eligibleChildren.map((child: Child) => {
                const ia = internshipMap[child.id]
                const avatar = getAvatarColor(child.name)
                return (
                  <div key={child.id} className="bg-white rounded-3xl border border-[#d2d2d7] p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ background: avatar.bg, color: avatar.text }}
                      >
                        {child.name[0].toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#1d1d1f] text-sm truncate">{child.name}</p>
                        <p className="text-xs text-[#6e6e73]">{t.age} {getAge(child.date_of_birth)}</p>
                      </div>
                    </div>
                    {!ia ? (
                      <>
                        <p className="text-xs text-[#6e6e73]">{t.notAppliedYet}</p>
                        <Link
                          href="/internship/apply"
                          className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#4338CA] transition-colors"
                        >
                          {t.applyNow}
                        </Link>
                      </>
                    ) : ia.status === 'completed' && ia.overall != null ? (
                      <>
                        <p className={`text-sm font-semibold ${ia.overall >= 70 ? 'text-emerald-600' : ia.overall >= 45 ? 'text-amber-600' : 'text-red-600'}`}>
                          {ia.overall >= 70 ? t.internshipReady : ia.overall >= 45 ? t.developing : t.needsSupport}
                        </p>
                        <Link
                          href={`/assessment/${ia.id}/results`}
                          className="inline-flex items-center justify-center border border-[#4F46E5] text-[#4F46E5] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#eef2ff] transition-colors"
                        >
                          {t.viewReport}
                        </Link>
                      </>
                    ) : ia.status === 'in_progress' ? (
                      <>
                        <p className="text-xs text-amber-600 font-medium">{t.assessmentInProgress}</p>
                        <Link
                          href={`/assessment/${ia.id}/question`}
                          className="inline-flex items-center justify-center bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                        >
                          {t.continueAction}
                        </Link>
                      </>
                    ) : (
                      <>
                        <p className="text-xs text-[#6e6e73]">{t.assessmentPending}</p>
                        <Link
                          href={`/assessment/${ia.id}/question`}
                          className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#4338CA] transition-colors"
                        >
                          {t.startAssessment}
                        </Link>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Recent assessments */}
        {hasChildren && (
          <section>
            <h2 className="text-base font-semibold text-[#1d1d1f] mb-4">{t.recentAssessments}</h2>
            {hasAssessments ? (
              <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#f5f5f7]">
                      <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">{t.tableChild}</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">{t.tableDate}</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">{t.tableScore}</th>
                      <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">{t.tableStatus}</th>
                      <th className="text-right px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">{t.tableAction}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(assessments as AssessmentWithResult[]).map((a) => (
                      <tr key={a.id} className="border-b border-[#f5f5f7] last:border-0 hover:bg-[#f5f5f7] transition-colors">
                        <td className="px-5 py-3 font-medium text-[#1d1d1f] text-sm">{a.children?.name}</td>
                        <td className="px-5 py-3 text-xs text-[#6e6e73] hidden sm:table-cell">{formatDate(a.created_at)}</td>
                        <td className="px-5 py-3 text-right hidden sm:table-cell">
                          {a.results ? (
                            <span className={`font-bold text-sm ${getScoreColor(a.results.standardized_score)}`}>
                              {a.results.standardized_score}
                            </span>
                          ) : (
                            <span className="text-[#d2d2d7]">—</span>
                          )}
                        </td>
                        <td className="px-5 py-3">
                          {a.status === 'completed' ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                              <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                          ) : a.status === 'in_progress' ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100">
                              <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" />
                              </svg>
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
                              <svg className="w-3.5 h-3.5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" /><polyline points="12 8 12 12 14 14" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-3 text-right">
                          {a.status === 'completed' ? (
                            <Link href={`/assessment/${a.id}/results`} className="text-[#4F46E5] hover:underline text-xs font-semibold">
                              {t.viewResults}
                            </Link>
                          ) : (
                            <Link href={`/assessment/${a.id}/question`} className="text-[#4F46E5] hover:underline text-xs font-semibold">
                              {a.status === 'in_progress' ? t.continueAction : t.startAssessment}
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-dashed border-[#d2d2d7] p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#4F46E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" />
                  </svg>
                </div>
                <p className="text-[#1d1d1f] font-medium text-sm mb-1">{t.noAssessmentsEmpty}</p>
                <p className="text-xs text-[#6e6e73]">{t.noAssessmentsEmptyDesc}</p>
              </div>
            )}
          </section>
        )}

        {/* Self-registered student: own internship status */}
        {selfChild && (
          <section>
            <h2 className="text-base font-semibold text-[#1d1d1f] mb-4">{t.yourInternship}</h2>
            <div className="bg-white rounded-3xl border border-[#d2d2d7] p-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-[#1d1d1f]">{selfChild.name}</p>
                {!selfInternship ? (
                  <p className="text-xs text-[#6e6e73] mt-0.5">{t.notAppliedYet}</p>
                ) : selfInternship.status === 'completed' && selfInternshipOverall != null ? (
                  <p className={`text-sm font-semibold mt-0.5 ${selfInternshipOverall >= 70 ? 'text-emerald-600' : selfInternshipOverall >= 45 ? 'text-amber-600' : 'text-red-600'}`}>
                    {selfInternshipOverall >= 70 ? t.internshipReady : selfInternshipOverall >= 45 ? t.developing : t.needsSupport}
                  </p>
                ) : selfInternship.status === 'in_progress' ? (
                  <p className="text-xs text-amber-600 font-medium mt-0.5">{t.assessmentInProgress}</p>
                ) : (
                  <p className="text-xs text-[#6e6e73] mt-0.5">{t.assessmentPending}</p>
                )}
              </div>
              {!selfInternship ? (
                <Link href="/internship/apply" className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#4338CA] transition-colors flex-shrink-0">
                  {t.applyNow}
                </Link>
              ) : selfInternship.status === 'completed' ? (
                <Link href={`/assessment/${selfInternship.id}/results`} className="inline-flex items-center justify-center border border-[#4F46E5] text-[#4F46E5] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#eef2ff] transition-colors flex-shrink-0">
                  {t.viewReport}
                </Link>
              ) : selfInternship.status === 'in_progress' ? (
                <Link href={`/assessment/${selfInternship.id}/question`} className="inline-flex items-center justify-center bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors flex-shrink-0">
                  {t.continueAction}
                </Link>
              ) : (
                <Link href={`/assessment/${selfInternship.id}/question`} className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#4338CA] transition-colors flex-shrink-0">
                  {t.startAssessment}
                </Link>
              )}
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  )
}
