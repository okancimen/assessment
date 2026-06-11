import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import PrintButton from './PrintButton'
import { SUBJECT_LABELS, SUBJECTS, Subject } from '@/types'
import { getScoreLabel, getScoreColor, getScoreBgColor } from '@/lib/assessment/adaptive'
import { formatDate } from '@/lib/utils'
import type { Recommendation } from '@/lib/claude/recommendations'
import RegenRecommendations from './RegenRecommendations'
import Confetti from './Confetti'

export default async function ResultsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const [{ data: result }, { data: session }] = await Promise.all([
    supabase
      .from('results')
      .select('*, assessments(*, children(*))')
      .eq('assessment_id', id)
      .single(),
    supabase
      .from('assessment_sessions')
      .select('subject_scores')
      .eq('assessment_id', id)
      .single(),
  ])

  if (!result) notFound()

  const assessment = result.assessments as {
    children: { name: string; parent_id: string; date_of_birth: string }
    completed_at: string
  }

  if (assessment.children.parent_id !== user.id) redirect('/dashboard')

  const child = assessment.children
  const subjectScores = result.subject_scores as Record<string, {
    raw_score: number
    standardized_score: number
    percentage: number
    topics: Record<string, { correct: number; total: number; percentage: number }>
  }>

  const sessionScores = (session?.subject_scores ?? {}) as Record<string, {
    difficulty_sum: number
    total: number
  }>

  const overallLabel = getScoreLabel(result.standardized_score)

  const recommendations = result.recommendations as Recommendation[] | null

  return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, .no-print { display: none !important; }
          body { background: white; }
          .shadow-sm { box-shadow: none !important; }
          main { padding: 16px !important; }
          h1 { font-size: 18px !important; }
          .rounded-2xl { border-radius: 8px !important; }
          @page { margin: 1cm; }
        }
      `}} />
      <Confetti />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div>
          <Link href={`/dashboard`} className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{child.name}&apos;s Results</h1>
              <p className="text-gray-500 text-sm mt-1">
                Completed {assessment.completed_at ? formatDate(assessment.completed_at) : ''}
              </p>
            </div>
            <div className={`rounded-2xl border px-6 py-4 text-center ${getScoreBgColor(result.standardized_score)}`}>
              <div className={`text-3xl font-bold ${getScoreColor(result.standardized_score)}`}>
                {result.standardized_score}
              </div>
              <div className="text-xs font-medium text-gray-500 mt-0.5">Overall score</div>
              <div className={`text-sm font-semibold mt-1 ${getScoreColor(result.standardized_score)}`}>
                {overallLabel}
              </div>
            </div>
          </div>

          {/* Score bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>70</span>
              <span>85</span>
              <span>100</span>
              <span>115</span>
              <span>130</span>
            </div>
            <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="flex-1 bg-red-100" />
                <div className="flex-1 bg-amber-100" />
                <div className="flex-1 bg-indigo-100" />
                <div className="flex-1 bg-blue-100" />
                <div className="flex-1 bg-emerald-100" />
              </div>
              <div
                className="absolute top-0 h-full w-1.5 bg-gray-800 rounded-full transform -translate-x-1/2 transition-all"
                style={{ left: `${((result.standardized_score - 70) / 60) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Needs Support</span>
              <span>Below Avg</span>
              <span>Average</span>
              <span>Above Avg</span>
              <span>Exceptional</span>
            </div>
          </div>
        </div>

        {/* Subject scores */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject scores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBJECTS.map((subject) => {
              const score = subjectScores[subject]
              if (!score) return null
              const ss = sessionScores[subject]
              const avgDifficulty = ss?.total > 0
                ? (ss.difficulty_sum / ss.total).toFixed(1)
                : null
              const totalQuestions = Object.values(score.topics).reduce((a, t) => a + t.total, 0)
              return (
                <div key={subject} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{SUBJECT_LABELS[subject]}</h3>
                    <span className={`text-xl font-bold ${getScoreColor(score.standardized_score)}`}>
                      {score.standardized_score}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>{score.raw_score} correct of {totalQuestions || '—'}</span>
                      <span>{score.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          score.percentage >= 80 ? 'bg-emerald-500' :
                          score.percentage >= 60 ? 'bg-blue-500' :
                          score.percentage >= 40 ? 'bg-amber-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${score.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Topic breakdown */}
                  {Object.entries(score.topics).length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Topics</p>
                      {Object.entries(score.topics).map(([topic, topicScore]) => (
                        <div key={topic} className="flex items-center gap-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between text-xs text-gray-600 mb-0.5">
                              <span className="truncate capitalize">{topic.replace(/_/g, ' ')}</span>
                              <span className="flex-shrink-0 ml-2">{topicScore.correct}/{topicScore.total}</span>
                            </div>
                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  topicScore.percentage >= 80 ? 'bg-emerald-400' :
                                  topicScore.percentage >= 60 ? 'bg-blue-400' :
                                  topicScore.percentage >= 40 ? 'bg-amber-400' :
                                  'bg-red-400'
                                }`}
                                style={{ width: `${topicScore.percentage}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className={`text-sm font-medium ${getScoreColor(score.standardized_score)}`}>
                      {getScoreLabel(score.standardized_score)}
                    </span>
                    {avgDifficulty && (
                      <span className="text-xs text-gray-400">
                        avg difficulty {avgDifficulty}/10
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* AI Recommendations */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personalised recommendations</h2>
          {recommendations && recommendations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendations.map((rec, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                      {SUBJECT_LABELS[rec.subject as Subject] ?? rec.subject}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{rec.tip}</p>
                </div>
              ))}
            </div>
          ) : (
            <RegenRecommendations assessmentId={id} />
          )}
        </section>

        {/* Score legend */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Score guide</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { range: '70–84', label: 'Needs Support', color: 'text-red-600', bg: 'bg-red-50' },
              { range: '85–94', label: 'Below Average', color: 'text-amber-600', bg: 'bg-amber-50' },
              { range: '95–109', label: 'Average', color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { range: '110–119', label: 'Above Average', color: 'text-blue-600', bg: 'bg-blue-50' },
              { range: '120–130', label: 'Exceptional', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            ].map(({ range, label, color, bg }) => (
              <div key={range} className={`${bg} rounded-xl p-3 text-center`}>
                <div className={`text-sm font-bold ${color}`}>{range}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap no-print">
          <Link href="/dashboard" className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
            Back to dashboard
          </Link>
          <PrintButton />
        </div>

        {/* Methodology disclaimer */}
        <div className="border-t border-gray-100 pt-6 text-xs text-gray-400 space-y-1.5 leading-relaxed">
          <p className="font-medium text-gray-500">About this assessment</p>
          <p>
            Scores are calculated using a{' '}
            <a href="https://en.wikipedia.org/wiki/Item_response_theory" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              2-Parameter Logistic (2PL) Item Response Theory
            </a>{' '}
            model with{' '}
            <a href="https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              Maximum A Posteriori (MAP) estimation
            </a>
            . Each question is adaptively selected to maximise measurement precision at the child&apos;s
            estimated ability level using the{' '}
            <a href="https://en.wikipedia.org/wiki/Fisher_information" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              Fisher information criterion
            </a>
            .
          </p>
          <p>
            The standardised score scale has a mean of <strong className="text-gray-500">100</strong> and{' '}
            <a href="https://en.wikipedia.org/wiki/Standard_deviation" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              standard deviation
            </a>{' '}
            of <strong className="text-gray-500">15</strong>, consistent with established{' '}
            <a href="https://en.wikipedia.org/wiki/Cognitive_test" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              cognitive assessment norms
            </a>
            . Scores are clamped to the 70–130 range.
            Questions are generated by{' '}
            <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              Claude AI (Anthropic)
            </a>{' '}
            and the item parameters (difficulty, discrimination) are based on theoretical estimates rather
            than empirical calibration data — results should be interpreted as indicative, not diagnostic.
          </p>
          <p>
            This tool is designed to identify relative strengths and areas for development across four cognitive domains.
            It does not constitute a clinical or{' '}
            <a href="https://www.bps.org.uk/psychologist/what-educational-psychology" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">
              educational psychology assessment
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
