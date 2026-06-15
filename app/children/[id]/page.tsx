import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import StartAssessmentButton from './StartAssessmentButton'
import { getAge, formatDate } from '@/lib/utils'
import { Assessment } from '@/types'
import { getScoreLabel, getScoreColor } from '@/lib/assessment/adaptive'

interface AssessmentWithResult extends Assessment {
  results: { overall_score: number; standardized_score: number } | null
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

function ScoreRing({ score, size = 56 }: { score: number; size?: number }) {
  const r = size * 0.38
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
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm font-bold leading-none" style={{ color }}>{score}</span>
      </div>
    </div>
  )
}

export default async function ChildPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: child } = await supabase
    .from('children')
    .select('*')
    .eq('id', id)
    .eq('parent_id', user.id)
    .single()

  if (!child) notFound()

  const { data: assessments } = await supabase
    .from('assessments')
    .select('*, results(overall_score, standardized_score)')
    .eq('child_id', id)
    .order('created_at', { ascending: false })

  const typedAssessments = (assessments ?? []) as AssessmentWithResult[]
  const inProgress = typedAssessments.find((a) => a.status === 'in_progress')

  // Completed assessments sorted oldest→newest for trend calculation
  const completed = typedAssessments
    .filter((a) => a.status === 'completed' && a.results)
    .slice()
    .reverse()

  const latestCompleted = completed[completed.length - 1]

  function getTrend(a: AssessmentWithResult): 'up' | 'down' | 'same' | null {
    const idx = completed.findIndex((x) => x.id === a.id)
    if (idx <= 0) return null
    const prev = completed[idx - 1].results!.standardized_score
    const curr = a.results!.standardized_score
    if (curr > prev + 2) return 'up'
    if (curr < prev - 2) return 'down'
    return 'same'
  }

  const avatar = getAvatarColor(child.name)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10 space-y-8">
        <div>
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to dashboard
          </Link>
        </div>

        {/* Child header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full ${avatar.bg} flex items-center justify-center ${avatar.text} font-bold text-2xl flex-shrink-0`}>
              {child.name[0].toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{child.name}</h1>
              <p className="text-gray-500 text-sm">
                Age {getAge(child.date_of_birth)} · Born {formatDate(child.date_of_birth)}
              </p>
              {latestCompleted?.results && (
                <p className="text-xs text-gray-400 mt-0.5">
                  Latest score: <span className={`font-semibold ${getScoreColor(latestCompleted.results.standardized_score)}`}>
                    {getScoreLabel(latestCompleted.results.standardized_score)}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {latestCompleted?.results && (
              <ScoreRing score={latestCompleted.results.standardized_score} size={60} />
            )}
            {inProgress ? (
              <Link
                href={`/assessment/${inProgress.id}/question`}
                className="bg-amber-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-600 transition-colors whitespace-nowrap"
              >
                Continue assessment
              </Link>
            ) : (
              <StartAssessmentButton childId={child.id} />
            )}
          </div>
        </div>

        {/* Assessment history */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment history</h2>
          {typedAssessments.length === 0 ? (
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
              <p className="text-sm text-gray-400">Use the button above to start {child.name}&apos;s first assessment.</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">Date</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">Status</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">Score</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {typedAssessments.map((a) => {
                    const trend = a.status === 'completed' ? getTrend(a) : null
                    return (
                      <tr key={a.id} className="border-b border-gray-50 last:border-0">
                        <td className="px-5 py-3 text-gray-700">{formatDate(a.created_at)}</td>
                        <td className="px-5 py-3">
                          <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            a.status === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                            a.status === 'in_progress' ? 'bg-amber-50 text-amber-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {a.status === 'in_progress' ? 'In progress' :
                             a.status === 'completed' ? 'Completed' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          {a.results ? (
                            <div className="flex items-center gap-1.5">
                              <span className={`font-bold text-base ${getScoreColor(a.results.standardized_score)}`}>
                                {a.results.standardized_score}
                              </span>
                              <span className="text-xs text-gray-400">
                                {getScoreLabel(a.results.standardized_score)}
                              </span>
                              {trend === 'up' && <span className="text-emerald-500 text-sm font-bold">↑</span>}
                              {trend === 'down' && <span className="text-red-500 text-sm font-bold">↓</span>}
                              {trend === 'same' && <span className="text-gray-400 text-sm">→</span>}
                            </div>
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                        <td className="px-5 py-3 text-right">
                          {a.status === 'completed' && (
                            <Link href={`/results/${a.id}`} className="text-indigo-600 hover:underline text-xs font-medium">
                              View results
                            </Link>
                          )}
                          {a.status === 'in_progress' && (
                            <Link href={`/assessment/${a.id}/question`} className="text-indigo-600 hover:underline text-xs font-medium">
                              Continue
                            </Link>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
