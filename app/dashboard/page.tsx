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
import CollapsibleInfo from '@/components/dashboard/CollapsibleInfo'
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
  const latestAcademicStatus: Record<string, { status: string; score: number | null; id: string }> = {}
  for (const a of (assessments || []) as AssessmentWithResult[]) {
    assessmentCounts[a.child_id] = (assessmentCounts[a.child_id] || 0) + 1
    if (a.status === 'completed' && a.results && !latestScores[a.child_id]) {
      latestScores[a.child_id] = { score: a.results.standardized_score, assessmentId: a.id }
    }
    if (!latestAcademicStatus[a.child_id]) {
      latestAcademicStatus[a.child_id] = {
        status: a.status,
        score: a.results?.standardized_score ?? null,
        id: a.id,
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

  const eligibleIds = (children || []).filter((c: Child) => getAge(c.date_of_birth) >= 14).map((c: Child) => c.id)

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

  const firstName = (profile?.full_name || user.user_metadata?.full_name)?.split(' ')[0] || ''

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F8FA' }} dir={t.dir}>
      <Navbar locale={locale} pendingCount={pendingCount} />
      <Suspense><ToastFromUrl /></Suspense>
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-10">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#1E293B' }}>
              {t.hello}{firstName ? `, ${firstName}` : ''}
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

        {/* Children + assessment clusters */}
        {!hasChildren ? (
          <div className="bg-white rounded-2xl border border-dashed p-14 text-center" style={{ borderColor: '#CBD5E1' }}>
            <p className="text-sm mb-4" style={{ color: '#64748B' }}>{t.noChildrenYet}</p>
            <Link href={`/children/new${locale ? `?locale=${locale}` : ''}`} className="text-[#4F46E5] font-semibold text-sm hover:underline">
              {t.addFirstChild}
            </Link>
          </div>
        ) : (
          <div className="space-y-10">
            {(children as Child[]).map((child) => {
              const age = getAge(child.date_of_birth)
              const avatar = getAvatarColor(child.name)
              const latest = latestScores[child.id]
              const as_ = latestAcademicStatus[child.id]
              const sa = strengthsMap[child.id]
              const ia = internshipMap[child.id]
              const isPersonalityEligible = age >= 6 && age <= 20
              const isInternshipEligible = age >= 14
              const canDelete = !latest && sa?.status !== 'completed' && ia?.status !== 'completed'
              const clusterCount = 1 + (isPersonalityEligible ? 1 : 0) + (isInternshipEligible ? 1 : 0)

              return (
                <div key={child.id} className="space-y-4">

                  {/* Child info card */}
                  <div className="bg-white rounded-2xl border flex items-center justify-between px-5 py-4 gap-4" style={{ borderColor: '#E8ECF2' }}>
                    <div className="flex items-center gap-4 min-w-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
                        style={{ background: avatar.bg, color: avatar.text }}
                      >
                        {child.name[0].toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <Link
                          href={`/children/${child.id}`}
                          className="font-semibold text-base hover:underline truncate block"
                          style={{ color: '#1E293B' }}
                        >
                          {child.name}
                        </Link>
                        <p className="text-xs mt-0.5" style={{ color: '#94A3B8' }}>
                          {t.age} {age} · {t.born} {formatDate(child.date_of_birth)}
                        </p>
                      </div>
                    </div>
                    {canDelete && (
                      <div className="flex-shrink-0">
                        <DeleteChildButton childId={child.id} childName={child.name} locale={locale} />
                      </div>
                    )}
                  </div>

                  {/* Assessment clusters */}
                  <div className={`grid grid-cols-1 gap-4 ${clusterCount === 3 ? 'sm:grid-cols-3' : clusterCount === 2 ? 'sm:grid-cols-2' : ''}`}>

                    {/* Academic */}
                    <div className="bg-white rounded-2xl border flex flex-col gap-4 p-5" style={{ borderColor: '#E8ECF2', borderTopWidth: '3px', borderTopColor: '#4F46E5' }}>
                      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#4F46E5' }}>{t.academicLabel}</p>

                      <div className="flex-1 flex flex-col gap-2">
                        {as_?.status === 'completed' && as_.score != null ? (
                          <div className="flex items-center gap-3">
                            <ScoreRing score={as_.score} />
                            <div>
                              <p className={`text-sm font-bold ${getScoreColor(as_.score)}`}>{as_.score}</p>
                              <p className="text-xs" style={{ color: '#64748B' }}>{getScoreLabel(as_.score)}</p>
                            </div>
                          </div>
                        ) : as_?.status === 'in_progress' ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                            {t.academicStatusInProgress}
                          </span>
                        ) : (
                          <p className="text-xs" style={{ color: '#94A3B8' }}>{t.academicStatusNone}</p>
                        )}

                        <CollapsibleInfo description={`${t.howItWorksDesc} ${t.globalStandingDesc}`} label={t.whatIsThis} />
                      </div>

                      <div className="mt-auto">
                        {as_?.status === 'completed' && latest ? (
                          <Link
                            href={`/assessment/${latest.assessmentId}/results`}
                            className="inline-flex items-center justify-center w-full border text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#eef2ff] transition-colors"
                            style={{ borderColor: '#4F46E5', color: '#4F46E5' }}
                          >
                            {t.viewResults}
                          </Link>
                        ) : as_?.status === 'in_progress' && as_.id ? (
                          <Link
                            href={`/assessment/${as_.id}/question`}
                            className="inline-flex items-center justify-center w-full bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                          >
                            {t.continueAction}
                          </Link>
                        ) : (
                          <StartAssessmentButton childId={child.id} size="sm" className="w-full" locale={locale} />
                        )}
                      </div>
                    </div>

                    {/* Personality */}
                    {isPersonalityEligible && (
                      <div className="bg-white rounded-2xl border flex flex-col gap-4 p-5" style={{ borderColor: '#E8ECF2', borderTopWidth: '3px', borderTopColor: '#0D9488' }}>
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#0D9488' }}>{t.strengthsTitle}</p>

                        <div className="flex-1 flex flex-col gap-2">
                          {sa?.status === 'completed' ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                              Completed
                            </span>
                          ) : sa?.status === 'in_progress' ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                              {t.strengthsInProgress}
                            </span>
                          ) : (
                            <p className="text-xs" style={{ color: '#94A3B8' }}>{t.academicStatusNone}</p>
                          )}

                          <CollapsibleInfo description={t.personalityInfoDesc} label={t.whatIsThis} />
                        </div>

                        <div className="mt-auto">
                          {sa?.status === 'completed' ? (
                            <Link
                              href={`/strengths/${sa.id}/results${locale ? `?locale=${locale}` : ''}`}
                              className="inline-flex items-center justify-center w-full border text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#f0fdfa] transition-colors"
                              style={{ borderColor: '#0D9488', color: '#0D9488' }}
                            >
                              {t.viewResults}
                            </Link>
                          ) : sa?.status === 'in_progress' ? (
                            <Link
                              href={`/strengths/${sa.id}/question${locale ? `?locale=${locale}` : ''}`}
                              className="inline-flex items-center justify-center w-full bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                            >
                              {t.resumeStrengths}
                            </Link>
                          ) : (
                            <Link
                              href={`/strengths/${child.id}/start${locale ? `?locale=${locale}` : ''}`}
                              className="inline-flex items-center justify-center w-full text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors bg-[#0D9488] hover:bg-[#0F766E]"
                            >
                              {t.startStrengths}
                            </Link>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Internship */}
                    {isInternshipEligible && (
                      <div className="bg-white rounded-2xl border flex flex-col gap-4 p-5" style={{ borderColor: '#E8ECF2', borderTopWidth: '3px', borderTopColor: '#7C3AED' }}>
                        <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#7C3AED' }}>{t.internshipProgramme}</p>

                        <div className="flex-1 flex flex-col gap-2">
                          {!ia ? (
                            <p className="text-xs" style={{ color: '#94A3B8' }}>{t.notAppliedYet}</p>
                          ) : ia.status === 'completed' && ia.overall != null ? (
                            <p className={`text-sm font-bold ${ia.overall >= 70 ? 'text-emerald-600' : ia.overall >= 45 ? 'text-amber-600' : 'text-red-600'}`}>
                              {ia.overall >= 70 ? t.internshipReady : ia.overall >= 45 ? t.developing : t.needsSupport}
                            </p>
                          ) : ia.status === 'in_progress' ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                              {t.assessmentInProgress}
                            </span>
                          ) : (
                            <p className="text-xs" style={{ color: '#94A3B8' }}>{t.assessmentPending}</p>
                          )}

                          <CollapsibleInfo description={t.internshipInfoDesc} label={t.whatIsThis} />
                        </div>

                        <div className="mt-auto space-y-2">
                          {!ia ? (
                            <Link
                              href="/internship/apply"
                              className="inline-flex items-center justify-center w-full bg-[#7C3AED] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#6D28D9] transition-colors"
                            >
                              {t.applyNow}
                            </Link>
                          ) : ia.status === 'completed' ? (
                            <Link
                              href={`/assessment/${ia.id}/results`}
                              className="inline-flex items-center justify-center w-full border text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#f5f3ff] transition-colors"
                              style={{ borderColor: '#7C3AED', color: '#7C3AED' }}
                            >
                              {t.viewReport}
                            </Link>
                          ) : ia.status === 'in_progress' ? (
                            <Link
                              href={`/assessment/${ia.id}/question`}
                              className="inline-flex items-center justify-center w-full bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors"
                            >
                              {t.continueAction}
                            </Link>
                          ) : (
                            <Link
                              href={`/assessment/${ia.id}/question`}
                              className="inline-flex items-center justify-center w-full bg-[#7C3AED] text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#6D28D9] transition-colors"
                            >
                              {t.startAssessment}
                            </Link>
                          )}
                          <InviteInternshipButton locale={locale} />
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Recent assessments — only when there are academic assessments */}
        {hasChildren && hasAssessments && (
          <section>
            <div className="flex items-center gap-2.5 mb-4">
              <h2 className="text-base font-semibold" style={{ color: '#1E293B' }}>{t.recentAssessments}</h2>
            </div>
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
                            <span style={{ color: '#d2d2d7' }}>—</span>
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
