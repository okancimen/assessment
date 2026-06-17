'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  subject: string
  color: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

const QUESTIONS: Question[] = [
  {
    subject: 'English',
    color: 'rose',
    question: 'Which word is closest in meaning to "elated"?',
    options: ['Miserable', 'Delighted', 'Confused', 'Exhausted'],
    correctIndex: 1,
    explanation: '"Elated" means extremely happy or joyful. The closest synonym is "delighted". "Miserable" is its opposite, while "confused" and "exhausted" describe different states entirely.',
  },
  {
    subject: 'Mathematics',
    color: 'amber',
    question: 'A train travels 240 km in 3 hours. How far does it travel in 45 minutes?',
    options: ['60 km', '80 km', '90 km', '120 km'],
    correctIndex: 0,
    explanation: 'Speed = 240 ÷ 3 = 80 km/h. 45 minutes = ¾ of an hour. Distance = 80 × ¾ = 60 km.',
  },
  {
    subject: 'Verbal Reasoning',
    color: 'indigo',
    question: 'Complete the analogy: HOT is to COLD as FAST is to ___',
    options: ['Quick', 'Rapid', 'Slow', 'Speed'],
    correctIndex: 2,
    explanation: 'HOT and COLD are opposites (antonyms). Applying the same relationship: FAST and SLOW are also opposites. "Quick" and "Rapid" are synonyms of FAST, not its opposite.',
  },
  {
    subject: 'Non-Verbal Reasoning',
    color: 'emerald',
    question: 'Which shape comes next in the sequence: ▲ ■ ● ▲ ■ ___?',
    options: ['▲', '■', '●', '◆'],
    correctIndex: 2,
    explanation: 'The sequence repeats the pattern ▲ ■ ● in a cycle. After ▲ ■, the next shape in the pattern is ●. The pattern has completed two full cycles (▲ ■ ● ▲ ■) and is beginning its third.',
  },
]

const colorMap: Record<string, { badge: string; ring: string; correct: string; wrong: string; explain: string }> = {
  rose: {
    badge: 'bg-rose-50 text-rose-700 border-rose-100',
    ring: 'ring-rose-500',
    correct: 'bg-emerald-50 border-emerald-300 text-emerald-800',
    wrong: 'bg-rose-50 border-rose-300 text-rose-800',
    explain: 'bg-rose-50 border-rose-100',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    ring: 'ring-amber-500',
    correct: 'bg-emerald-50 border-emerald-300 text-emerald-800',
    wrong: 'bg-rose-50 border-rose-300 text-rose-800',
    explain: 'bg-amber-50 border-amber-100',
  },
  indigo: {
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    ring: 'ring-indigo-500',
    correct: 'bg-emerald-50 border-emerald-300 text-emerald-800',
    wrong: 'bg-rose-50 border-rose-300 text-rose-800',
    explain: 'bg-indigo-50 border-indigo-100',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    ring: 'ring-emerald-500',
    correct: 'bg-emerald-50 border-emerald-300 text-emerald-800',
    wrong: 'bg-rose-50 border-rose-300 text-rose-800',
    explain: 'bg-emerald-50 border-emerald-100',
  },
}

export default function DemoQuiz() {
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const answered = Object.keys(answers).length
  const correct = Object.entries(answers).filter(([i, a]) => a === QUESTIONS[Number(i)].correctIndex).length

  function pick(qIdx: number, optIdx: number) {
    if (answers[qIdx] !== undefined) return
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
  }

  return (
    <div>
      <div className="space-y-8 mb-12">
        {QUESTIONS.map((q, qi) => {
          const c = colorMap[q.color]
          const chosen = answers[qi]
          const revealed = chosen !== undefined

          return (
            <div key={qi} className="border border-gray-100 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${c.badge}`}>{q.subject}</span>
                <span className="text-xs text-gray-400">Question {qi + 1} of {QUESTIONS.length}</span>
              </div>

              <p className="text-gray-900 font-medium text-lg mb-5 leading-snug">{q.question}</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {q.options.map((opt, oi) => {
                  let cls = 'border border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50 cursor-pointer'
                  if (revealed) {
                    if (oi === q.correctIndex) cls = `border-2 ${c.correct} font-semibold`
                    else if (oi === chosen) cls = `border-2 ${c.wrong}`
                    else cls = 'border border-gray-100 text-gray-400 cursor-default'
                  }
                  return (
                    <button
                      key={oi}
                      onClick={() => pick(qi, oi)}
                      disabled={revealed}
                      className={`text-left px-4 py-3 rounded-xl text-sm transition-colors ${cls}`}
                    >
                      <span className="font-mono text-xs mr-2 opacity-60">{String.fromCharCode(65 + oi)}.</span>
                      {opt}
                      {revealed && oi === q.correctIndex && (
                        <span className="ml-2 text-emerald-600">✓</span>
                      )}
                      {revealed && oi === chosen && oi !== q.correctIndex && (
                        <span className="ml-2 text-rose-500">✗</span>
                      )}
                    </button>
                  )
                })}
              </div>

              {revealed && (
                <div className={`rounded-xl border p-4 ${c.explain}`}>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Explanation</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {answered > 0 && (
        <div className="text-center bg-indigo-600 rounded-2xl p-10 text-white">
          <div className="text-5xl font-bold mb-2">{correct}/{answered}</div>
          <p className="text-indigo-200 mb-2">
            {answered < QUESTIONS.length
              ? `${QUESTIONS.length - answered} question${QUESTIONS.length - answered > 1 ? 's' : ''} remaining — scroll up to answer them all`
              : correct === QUESTIONS.length
              ? 'Perfect score! You got every sample question right.'
              : `Well done — ${correct} out of ${QUESTIONS.length} correct on the sample questions.`}
          </p>
          {answered === QUESTIONS.length && (
            <>
              <p className="text-indigo-200 mb-8 text-sm">
                The full assessment has 100 questions across all four subjects and produces a standardised score
                benchmarked against international standards.
              </p>
              <Link
                href="/auth/register"
                prefetch={false}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg inline-block"
              >
                Start the full free assessment
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}
