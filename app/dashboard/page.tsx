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
import DeleteChildButton from '@/components/dashboard/DeleteChildButton'
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
  const latestAcademicStatus: Record<string, { status: string; score: number | null }> = {}
  for (const a of (assessments || []) as AssessmentWithResult[]) {
    assessmentCounts[a.child_id] = (assessmentCounts[a.child_id] || 0) + 1
    if (a.status === 'completed' && a.results && !latestScores[a.child_id]) {
      latestScores[a.child_id] = { score: a.results.standardized_score, assessmentId: a.id }
    }
    if (!latestAcademicStatus[a.child_id]) {
      latestAcademicStatus[a.child_id] = {
        status: a.status,
        score: a.results?.standardized_score ?? null,
      }
    }
  }

  const hasChildren = children && children.length > 0
  const hasAssessments = assessments && assessments.length > 0
  const pendingCount = (assessments || []).filter((a: AssessmentWithResult) => a.status === 'in_progress').length

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
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F8FA' }} dir={t.dir}>
      <Navbar locale={locale} pendingCount={pendingCount} />
      <Suspense><ToastFromUrl /></Suspense>
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
              {t.hello}, {(profile?.full_name || user.user_metadata?.full_name)?.split(' ')[0] || ''}
            </h1>
            <p className="text-sm mt-1" style={{ color: '#64748B' }}>{t.subtitle}</p>
          </div>
          <Link
            href={`/children/new${locale ? `?locale=${locale}` : ''}`}
            className="bg-[#4F46E5] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
          >
            {t.addChild}
          </Link>
        </div>

        {/* Academic Assessment section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#4F46E5' }} />
              <h2 className="text-base font-semibold" style={{ color: '#1E293B' }}>{t.childrenSection}</h2>
            </div>
          </div>

          {/* Academic info box */}
          <div
            className="bg-white rounded-xl border p-5 mb-5 space-y-3"
            style={{ borderColor: '#E8ECF2', borderLeftWidth: '4px', borderLeftColor: '#4F46E5' }}
          >
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: '#4F46E5' }}>{t.howItWorksTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{t.howItWorksDesc}</p>
            </div>
            <div className="border-t pt-3" style={{ borderColor: '#E8ECF2' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#1E293B' }}>{t.globalStandingTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                {t.globalStandingDesc}{' '}
                <Link href="https://eduentry.com/sample-report" className="font-medium hover:underline" style={{ color: '#4F46E5' }}>
                  {t.seeReport}
                </Link>
              </p>
            </div>
          </div>
          {!hasChildren ? (
            <div className="bg-white rounded-2xl border border-dashed p-14 text-center" style={{ borderColor: '#CBD5E1' }}>
              <p className="text-sm mb-4" style={{ color: '#64748B' }}>{t.noChildrenYet}</p>
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
                const canDelete =
                  !latest &&
                  strengthsMap[child.id]?.status !== 'completed' &&
                  internshipMap[child.id]?.status !== 'completed'
                return (
                  <div key={child.id} className="bg-white rounded-2xl border hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col" style={{ borderColor: '#E8ECF2' }}>
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
                      <div className="mt-3">
                        <p className="text-xs font-semibold text-[#1d1d1f] mb-0.5">{t.academicStatus}</p>
                        {(() => {
                          const as = latestAcademicStatus[child.id]
                          if (!as) return <p className="text-xs text-[#6e6e73]">{t.academicStatusNone}</p>
                          if (as.status === 'completed' && as.score != null) {
                            return <p className={`text-xs font-medium ${getScoreColor(as.score)}`}>{t.academicStatusCompleted(as.score, getScoreLabel(as.score))}</p>
                          }
                          if (as.status === 'in_progress') return <p className="text-xs text-amber-600">{t.academicStatusInProgress}</p>
                          return <p className="text-xs text-[#6e6e73]">{t.academicStatusPending}</p>
                        })()}
                      </div>
                    </Link>
                    <div className="px-5 pb-5 flex flex-col gap-2">
                      <StartAssessmentButton childId={child.id} size="sm" className="w-full" locale={locale} />
                      {canDelete && (
                        <DeleteChildButton childId={child.id} childName={child.name} locale={locale} />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* Personality Assessment — for children aged 6–20 */}
        {strengthsEligible.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#0D9488' }} />
                <h2 className="text-base font-semibold" style={{ color: '#1E293B' }}>{t.strengthsTitle}</h2>
                <span className="text-sm" style={{ color: '#64748B' }}>{t.strengthsSubtitle}</span>
              </div>
              <Link href={`/strengths${locale ? `?locale=${locale}` : ''}`} className="text-sm font-semibold hover:underline whitespace-nowrap" style={{ color: '#0D9488' }}>
                {t.strengthsLearnMore}
              </Link>
            </div>

            {/* Personality info box */}
            <div
              className="bg-white rounded-xl border p-5 mb-5"
              style={{ borderColor: '#E8ECF2', borderLeftWidth: '4px', borderLeftColor: '#0D9488' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: '#0D9488' }}>{t.personalityInfoTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{t.personalityInfoDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {strengthsEligible.map((child: Child) => {
                const sa = strengthsMap[child.id]
                const avatar = getAvatarColor(child.name)
                return (
                  <div key={child.id} className="bg-white rounded-2xl border p-5 flex flex-col gap-3" style={{ borderColor: '#E8ECF2' }}>
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
                        <p className="text-xs font-medium" style={{ color: '#D97706' }}>{t.strengthsInProgress}</p>
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
                        className="inline-flex items-center justify-center text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors bg-[#0D9488] hover:bg-[#0F766E]"
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
            <div className="flex items-center justify-between mb-4 gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#7C3AED' }} />
                <h2 className="text-base font-semibold" style={{ color: '#1E293B' }}>{t.internshipProgramme}</h2>
                <span className="text-sm hidden sm:block" style={{ color: '#64748B' }}>{t.internshipSubtitle}</span>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <InviteInternshipButton locale={locale} />
                <Link href="https://eduentry.ai/en" className="text-sm font-semibold hover:underline whitespace-nowrap" style={{ color: '#7C3AED' }}>
                  {t.learnMore}
                </Link>
              </div>
            </div>

            {/* Internship info box */}
            <div
              className="bg-white rounded-xl border p-5 mb-5"
              style={{ borderColor: '#E8ECF2', borderLeftWidth: '4px', borderLeftColor: '#7C3AED' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: '#7C3AED' }}>{t.internshipInfoTitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{t.internshipInfoDesc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {eligibleChildren.map((child: Child) => {
                const ia = internshipMap[child.id]
                const avatar = getAvatarColor(child.name)
                return (
                  <div key={child.id} className="bg-white rounded-2xl border p-5 flex flex-col gap-3" style={{ borderColor: '#E8ECF2' }}>
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
            <div className="flex items-center gap-2.5 mb-4">
              <h2 className="text-base font-semibold" style={{ color: '#1E293B' }}>{t.recentAssessments}</h2>
            </div>
            {hasAssessments ? (
              <div className="bg-white rounded-2xl border overflow-hidden" style={{ borderColor: '#E8ECF2' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b" style={{ borderColor: '#E8ECF2' }}>
                      <th className="text-left px-5 py-3 text-xs font-medium" style={{ color: '#64748B' }}>{t.tableChild}</th>
                      <th className="text-left px-5 py-3 text-xs font-medium hidden sm:table-cell" style={{ color: '#64748B' }}>{t.tableDate}</th>
                      <th className="text-right px-5 py-3 text-xs font-medium hidden sm:table-cell" style={{ color: '#64748B' }}>{t.tableScore}</th>
                      <th className="text-left px-5 py-3 text-xs font-medium" style={{ color: '#64748B' }}>{t.tableStatus}</th>
                      <th className="text-right px-5 py-3 text-xs font-medium" style={{ color: '#64748B' }}>{t.tableAction}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(assessments as AssessmentWithResult[]).map((a) => (
                      <tr key={a.id} className="border-b last:border-0 transition-colors hover:bg-[#F8FAFC]" style={{ borderColor: '#E8ECF2' }}>
                        <td className="px-5 py-3.5 font-medium text-sm" style={{ color: '#1E293B' }}>{a.children?.name}</td>
                        <td className="px-5 py-3.5 text-xs hidden sm:table-cell" style={{ color: '#64748B' }}>{formatDate(a.created_at)}</td>
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
              <div className="bg-white rounded-2xl border border-dashed p-12 text-center" style={{ borderColor: '#CBD5E1' }}>
                <p className="font-medium text-sm mb-1" style={{ color: '#1E293B' }}>{t.noAssessmentsEmpty}</p>
                <p className="text-xs" style={{ color: '#64748B' }}>{t.noAssessmentsEmptyDesc}</p>
              </div>
            )}
          </section>
        )}

        {/* Self-registered student: own internship status */}
        {selfChild && (
          <section>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#7C3AED' }} />
              <h2 className="text-base font-semibold" style={{ color: '#1E293B' }}>{t.yourInternship}</h2>
            </div>
            <div className="bg-white rounded-2xl border p-5 flex items-center justify-between gap-4" style={{ borderColor: '#E8ECF2' }}>
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
