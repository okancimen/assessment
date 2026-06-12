import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import PrintButton from './PrintButton'
import { SUBJECT_LABELS, SUBJECTS } from '@/types'
import { getScoreLabel, getScoreColor, getScoreBgColor } from '@/lib/assessment/adaptive'
import { formatDate } from '@/lib/utils'
import RegenRecommendations from './RegenRecommendations'
import Confetti from './Confetti'
import BellCurve, { type BellCurveSubject } from '@/components/landing/BellCurve'

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

  const recommendations = result.recommendations as { subject: string; tip: string }[] | null

  function getBand(score: number) {
    if (score < 85) return 0
    if (score < 95) return 1
    if (score < 110) return 2
    if (score < 120) return 3
    return 4
  }

  const INTL_CONTEXT = [
    {
      uk: 'Below the expected standard for the year group. Additional learning support is recommended.',
      us: 'Below grade level. May benefit from targeted intervention or support programmes.',
      pisa: 'Below PISA Level 2 — foundational skills not yet fully consolidated.',
      ib: 'Foundation coursework is recommended before pursuing IB Standard Level subjects.',
    },
    {
      uk: 'Approaching the expected standard, working just below the national average for their age.',
      us: 'Approaching grade level — in the lower quartile nationally.',
      pisa: 'Around PISA Level 2 — meets basic proficiency, comparable to the OECD average in many countries.',
      ib: 'Suitable for IB Middle Years Programme; IB Standard Level achievable with focused support.',
    },
    {
      uk: 'Meeting national curriculum expectations, in line with the national average.',
      us: 'At grade level, consistent with average performance across US school districts.',
      pisa: 'PISA Level 3–4 — performing at or above the OECD international average.',
      ib: 'Well-suited for IB Middle Years Programme; IB Standard Level courses achievable.',
    },
    {
      uk: 'Working above the expected standard. Likely competitive for grammar school or selective independent school entry.',
      us: 'Above grade level by approximately one year; top 15–20% nationally.',
      pisa: 'PISA Level 4–5 — strong performer, above the OECD average.',
      ib: 'Good candidate for the IB Diploma Programme including Higher Level subjects.',
    },
    {
      uk: 'Highly able. At the level typically associated with grammar school and top independent school entry.',
      us: 'Significantly above grade level (1–2+ years ahead); top 5–10% nationally.',
      pisa: 'PISA Level 5–6 — top performer internationally.',
      ib: 'Strong IB Diploma candidate; well-suited for Higher Level subjects across multiple disciplines.',
    },
  ]

  const intlBand = getBand(result.standardized_score)
  const intl = INTL_CONTEXT[intlBand]

  const SUBJECT_CURVE_COLORS: Record<string, { color: string; dotColor: string; displayLabel: string }> = {
    english:             { color: '#3b82f6', dotColor: '#2563eb', displayLabel: 'English'    },
    mathematics:         { color: '#8b5cf6', dotColor: '#7c3aed', displayLabel: 'Maths'      },
    verbal_reasoning:    { color: '#10b981', dotColor: '#059669', displayLabel: 'Verbal'     },
    nonverbal_reasoning: { color: '#f59e0b', dotColor: '#d97706', displayLabel: 'Non-Verbal' },
  }

  const bellCurveSubjects: BellCurveSubject[] = SUBJECTS
    .filter((s) => subjectScores[s]?.standardized_score)
    .map((s) => ({
      score:    subjectScores[s].standardized_score,
      label:    SUBJECT_CURVE_COLORS[s]?.displayLabel ?? SUBJECT_LABELS[s],
      color:    SUBJECT_CURVE_COLORS[s]?.color    ?? '#6366f1',
      dotColor: SUBJECT_CURVE_COLORS[s]?.dotColor ?? '#4f46e5',
    }))

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

        </div>

        {/* Percentile bell curve */}
        {bellCurveSubjects.length > 0 && (
          <BellCurve subjects={bellCurveSubjects} title="Score distribution · Percentile ranking" overallScore={result.standardized_score} />
        )}

        {/* International context */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">International context</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { flag: '🇬🇧', system: 'UK National Curriculum', text: intl.uk, color: 'border-blue-100 bg-blue-50' },
              { flag: '🇺🇸', system: 'US Grade Level',         text: intl.us, color: 'border-violet-100 bg-violet-50' },
              { flag: '🌍', system: 'PISA (OECD)',             text: intl.pisa, color: 'border-emerald-100 bg-emerald-50' },
              { flag: '🎓', system: 'IB Programme',            text: intl.ib, color: 'border-amber-100 bg-amber-50' },
            ].map(({ flag, system, text, color }) => (
              <div key={system} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{flag}</span>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{system}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Based on overall standardised score of {result.standardized_score} · indicative, not diagnostic
          </p>
        </section>

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
          <RegenRecommendations assessmentId={id} initialRecs={recommendations} />
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
