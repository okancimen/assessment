'use client'

import { useState } from 'react'
import Link from 'next/link'

const SAMPLE_QUESTIONS = [
  {
    id: 1,
    phase: 'General Aptitude',
    phaseColor: '#818CF8',
    question: 'A startup has 12 employees. After a funding round, headcount grows by 25%. How many employees are there now?',
    options: ['13', '14', '15', '16'],
    correct: 2,
    explanation: 'Correct. 12 × 1.25 = 15. Percentage growth questions appear throughout the assessment.',
  },
  {
    id: 2,
    phase: 'Workplace Skills',
    phaseColor: '#A78BFA',
    question: 'A colleague sends you a file ten minutes before a client presentation — you notice it has formatting errors. What do you do first?',
    options: [
      'Fix the errors yourself quickly and send the updated file',
      'Tell your colleague about the errors and ask them to fix it',
      'Tell the client the file is not ready yet',
      'Present the file as-is to avoid conflict',
    ],
    correct: 0,
    explanation: 'Taking ownership and acting quickly shows the workplace initiative employers look for.',
  },
  {
    id: 3,
    phase: 'Domain Knowledge · Tech',
    phaseColor: '#6366F1',
    question: 'Which of the following best describes what a "bug" is in software development?',
    options: [
      'A feature not yet implemented',
      'An error in the code that causes unexpected behaviour',
      'A comment left by a developer',
      'A slow internet connection',
    ],
    correct: 1,
    explanation: 'A bug is any unintended error in code. Domain questions adapt to your chosen track.',
  },
]

export default function InternshipGuestPreview() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [answeredCount, setAnsweredCount] = useState(0)

  const q = SAMPLE_QUESTIONS[currentQ]
  const isLast = currentQ === SAMPLE_QUESTIONS.length - 1

  function handleSelect(i: number) {
    if (revealed) return
    setSelected(i)
    setRevealed(true)
  }

  function handleNext() {
    if (isLast) return
    setCurrentQ(c => c + 1)
    setSelected(null)
    setRevealed(false)
    setAnsweredCount(c => c + 1)
  }

  return (
    <section className="py-24 border-t border-white/[0.04] bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Try it now</p>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left — heading + progress */}
          <div className="lg:w-80 flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
              Answer a question right here.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              3 sample questions from the real assessment. No account needed — just pick an answer and see how the AI scoring works.
            </p>
            {/* Progress dots */}
            <div className="flex gap-2 mb-8">
              {SAMPLE_QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-full transition-all duration-300"
                  style={{
                    background: i < answeredCount + (revealed ? 1 : 0)
                      ? 'linear-gradient(90deg, #818CF8, #A78BFA)'
                      : 'rgba(255,255,255,0.08)',
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-white/20 font-mono">
              {answeredCount + (revealed ? 1 : 0)} / {SAMPLE_QUESTIONS.length} answered
            </p>
          </div>

          {/* Right — question card */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden">
              {/* Phase tag */}
              <div className="px-6 pt-5 pb-4 border-b border-white/[0.06] flex items-center gap-2">
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                  style={{ color: q.phaseColor, borderColor: `${q.phaseColor}33`, background: `${q.phaseColor}11` }}
                >
                  {q.phase}
                </span>
                <span className="text-[10px] text-white/20 font-mono ml-auto">Q{currentQ + 1} of {SAMPLE_QUESTIONS.length}</span>
              </div>

              {/* Question */}
              <div className="px-6 py-5">
                <p className="text-white/90 text-base leading-relaxed mb-5">{q.question}</p>

                {/* Options */}
                <div className="space-y-2.5">
                  {q.options.map((opt, i) => {
                    let state: 'default' | 'correct' | 'wrong' | 'neutral' = 'default'
                    if (revealed) {
                      if (i === q.correct) state = 'correct'
                      else if (i === selected) state = 'wrong'
                      else state = 'neutral'
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        disabled={revealed}
                        className={[
                          'w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200',
                          state === 'default' ? 'border-white/[0.08] hover:border-white/[0.2] hover:bg-white/[0.04] text-white/70 cursor-pointer' : '',
                          state === 'correct' ? 'border-[#4ade80]/40 bg-[#4ade80]/10 text-[#4ade80]' : '',
                          state === 'wrong' ? 'border-red-500/40 bg-red-500/10 text-red-400' : '',
                          state === 'neutral' ? 'border-white/[0.04] text-white/20 cursor-default' : '',
                        ].join(' ')}
                      >
                        <span className="text-white/30 text-xs mr-2">{String.fromCharCode(65 + i)}.</span>
                        {opt}
                      </button>
                    )
                  })}
                </div>

                {/* Explanation + next */}
                {revealed && (
                  <div className="mt-5 space-y-4">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <p className="text-[11px] text-white/40 leading-relaxed">{q.explanation}</p>
                    </div>
                    {isLast ? (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link
                          href="/apply"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(99,102,241,0.25)]"
                        >
                          Take the full 34-question assessment →
                        </Link>
                      </div>
                    ) : (
                      <button
                        onClick={handleNext}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/[0.08] transition-all"
                      >
                        Next question
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
