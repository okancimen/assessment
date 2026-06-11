import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import StartAssessmentButton from './StartAssessmentButton'
import { getAge, formatDate } from '@/lib/utils'
import { Assessment } from '@/types'
import { getScoreLabel, getScoreColor } from '@/lib/assessment/adaptive'

interface AssessmentWithResult extends Assessment {
  results: { overall_score: number; standardized_score: number } | null
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

  function getTrend(a: AssessmentWithResult): 'up' | 'down' | 'same' | null {
    const idx = completed.findIndex((x) => x.id === a.id)
    if (idx <= 0) return null
    const prev = completed[idx - 1].results!.standardized_score
    const curr = a.results!.standardized_score
    if (curr > prev + 2) return 'up'
    if (curr < prev - 2) return 'down'
    return 'same'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <div>
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to dashboard
          </Link>
        </div>

        {/* Child header */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl">
              {child.name[0].toUpperCase()}
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{child.name}</h1>
              <p className="text-gray-500 text-sm">
                Age {getAge(child.date_of_birth)} · Born {formatDate(child.date_of_birth)}
              </p>
            </div>
          </div>
          {inProgress ? (
            <Link
              href={`/assessment/${inProgress.id}/question`}
              className="bg-amber-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-amber-600 transition-colors"
            >
              Continue assessment
            </Link>
          ) : (
            <StartAssessmentButton childId={child.id} />
          )}
        </div>

        {/* Assessment history */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment history</h2>
          {typedAssessments.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-10 text-center">
              <p className="text-gray-400 text-sm">No assessments yet.</p>
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
    </div>
  )
}
