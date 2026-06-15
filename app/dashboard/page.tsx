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

interface AssessmentWithResult extends Omit<Assessment, 'children'> {
  children: { name: string }
  results: { standardized_score: number } | null
}

const AVATAR_COLORS = [
  { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  { bg: 'bg-emerald-100', text: 'text-emerald-600' },
  { bg: 'bg-violet-100', text: 'text-violet-600' },
  { bg: 'bg-amber-100', text: 'text-amber-600' },
]

function getAvatarColor(name: string) {
  const idx = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length
  return AVATAR_COLORS[idx]
}

function scoreRingColor(score: number) {
  if (score >= 120) return '#10b981'
  if (score >= 110) return '#3b82f6'
  if (score >= 95) return '#6366f1'
  if (score >= 85) return '#f59e0b'
  return '#ef4444'
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
        <circle
          cx={cx} cy={cx} r={r}
          fill="none"
          stroke={color}
          strokeWidth={3.5}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0">
        <span className="text-xs font-bold leading-none" style={{ color }}>{score}</span>
      </div>
    </div>
  )
}

export default async function DashboardPage() {
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

  // Latest completed score per child
  const latestScores: Record<string, { score: number; assessmentId: string }> = {}
  // Assessment count per child
  const assessmentCounts: Record<string, number> = {}
  for (const a of (assessments || []) as AssessmentWithResult[]) {
    assessmentCounts[a.child_id] = (assessmentCounts[a.child_id] || 0) + 1
    if (a.status === 'completed' && a.results && !latestScores[a.child_id]) {
      latestScores[a.child_id] = { score: a.results.standardized_score, assessmentId: a.id }
    }
  }

  const hasChildren = children && children.length > 0
  const hasAssessments = assessments && assessments.length > 0

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <Suspense><ToastFromUrl /></Suspense>
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hello, {(profile?.full_name || user.user_metadata?.full_name)?.split(' ')[0] || 'there'}
            </h1>
            <p className="text-gray-500 mt-1">Manage your children&apos;s assessments</p>
          </div>
          <Link
            href="/children/new"
            className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            + Add child
          </Link>
        </div>

        {/* Children */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Children</h2>
          {!hasChildren ? (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-12 text-center">
              <p className="text-gray-400 mb-4">No children added yet</p>
              <Link href="/children/new" className="text-indigo-600 font-medium text-sm hover:underline">
                Add your first child
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(children as Child[]).map((child) => {
                const latest = latestScores[child.id]
                const count = assessmentCounts[child.id] || 0
                const avatar = getAvatarColor(child.name)
                return (
                  <div key={child.id} className="bg-white rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all flex flex-col">
                    <Link href={`/children/${child.id}`} className="p-5 flex-1 block">
                      <div className="flex items-start justify-between mb-3">
                        <div className={`w-10 h-10 rounded-full ${avatar.bg} flex items-center justify-center ${avatar.text} font-bold text-lg`}>
                          {child.name[0].toUpperCase()}
                        </div>
                        {latest ? (
                          <ScoreRing score={latest.score} />
                        ) : null}
                      </div>
                      <h3 className="font-semibold text-gray-900">{child.name}</h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        Age {getAge(child.date_of_birth)} · Born {formatDate(child.date_of_birth)}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        {count > 0 ? (
                          <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-500 text-xs font-medium px-2 py-0.5 rounded-full">
                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                              <rect x="9" y="3" width="6" height="4" rx="1" />
                            </svg>
                            {count} assessment{count !== 1 ? 's' : ''}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-400">No assessments yet</span>
                        )}
                        {latest && (
                          <span className="text-xs text-gray-400">{getScoreLabel(latest.score)}</span>
                        )}
                      </div>
                    </Link>
                    <div className="px-5 pb-5">
                      <StartAssessmentButton childId={child.id} size="sm" className="w-full" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* Recent assessments */}
        {hasChildren && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent assessments</h2>
            {hasAssessments ? (
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left px-5 py-3 text-gray-500 font-medium">Child</th>
                      <th className="text-left px-5 py-3 text-gray-500 font-medium hidden sm:table-cell">Date</th>
                      <th className="text-right px-5 py-3 text-gray-500 font-medium hidden sm:table-cell">Score</th>
                      <th className="text-left px-5 py-3 text-gray-500 font-medium">Status</th>
                      <th className="text-right px-5 py-3 text-gray-500 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(assessments as AssessmentWithResult[]).map((a) => (
                      <tr key={a.id} className="border-b border-gray-50 last:border-0">
                        <td className="px-5 py-3 font-medium text-gray-900">{a.children?.name}</td>
                        <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{formatDate(a.created_at)}</td>
                        <td className="px-5 py-3 text-right hidden sm:table-cell">
                          {a.results ? (
                            <span className={`font-bold ${getScoreColor(a.results.standardized_score)}`}>
                              {a.results.standardized_score}
                            </span>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                        <td className="px-5 py-3">
                          {a.status === 'completed' ? (
                            <span title="Completed" className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100">
                              <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                          ) : a.status === 'in_progress' ? (
                            <span title="In progress" className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100">
                              <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <polyline points="12 7 12 12 15 15" />
                              </svg>
                            </span>
                          ) : (
                            <span title="Pending" className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                              <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-3 text-right">
                          {a.status === 'completed' ? (
                            <Link href={`/results/${a.id}`} className="text-indigo-600 hover:underline text-xs font-medium">
                              View results
                            </Link>
                          ) : a.status === 'in_progress' ? (
                            <Link href={`/assessment/${a.id}/question`} className="text-indigo-600 hover:underline text-xs font-medium">
                              Continue
                            </Link>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="13" y2="16" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium mb-1">No assessments yet</p>
                <p className="text-sm text-gray-400 mb-5">Start an assessment from any child card above to see results here.</p>
              </div>
            )}
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  )
}
