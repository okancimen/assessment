'use client'

import { useState, useEffect, useRef } from 'react'
import { Question } from '@/types'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const QUESTION_TIME_LIMIT = 120

interface FeedbackData {
  isCorrect: boolean
  correctAnswer: string
  explanation: string | null
  selectedAnswer: string
}

interface QuestionCardProps {
  question: Question
  onAnswer: (answerId: string, timeTaken: number) => Promise<FeedbackData | null>
  onNext: () => void
  onBack?: () => void
  questionNumber: number
  totalQuestions: number
}

export default function QuestionCard({ question, onAnswer, onNext, onBack, questionNumber, totalQuestions }: QuestionCardProps) {
  const [selected, setSelected]     = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback]     = useState<FeedbackData | null>(null)
  const [timeLeft, setTimeLeft]     = useState(QUESTION_TIME_LIMIT)
  const timerRef      = useRef<ReturnType<typeof setInterval> | null>(null)
  const selectedRef   = useRef<string | null>(null)
  const submittingRef = useRef(false)
  selectedRef.current   = selected
  submittingRef.current = submitting

  const autoSubmitRef = useRef<() => void>(() => {})
  autoSubmitRef.current = async () => {
    if (submittingRef.current) return
    const answer = selectedRef.current ?? question.options[0].id
    submittingRef.current = true
    setSubmitting(true)
    const result = await onAnswer(answer, QUESTION_TIME_LIMIT)
    setSubmitting(false)
    if (result) {
      setFeedback(result)
      // Auto-advance after 3 s when time ran out
      setTimeout(onNext, 3000)
    }
  }

  useEffect(() => {
    setSelected(null)
    setSubmitting(false)
    setFeedback(null)
    setTimeLeft(QUESTION_TIME_LIMIT)
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timerRef.current!); autoSubmitRef.current(); return 0 }
        return t - 1
      })
    }, 1000)

    return () => { if (timerRef.current) clearInterval(timerRef.current!) }
  }, [question.id])

  async function handleSubmit() {
    if (!selected || submitting || feedback) return
    if (timerRef.current) clearInterval(timerRef.current)
    setSubmitting(true)
    const timeTaken = QUESTION_TIME_LIMIT - timeLeft
    const result = await onAnswer(selected, timeTaken)
    setSubmitting(false)
    if (result) setFeedback(result)
  }

  // ── Feedback view ──────────────────────────────────────────────────────────
  if (feedback) {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6e6e73]">Question {questionNumber} of {totalQuestions}</span>
          <span className={cn(
            'flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full',
            feedback.isCorrect ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600',
          )}>
            {feedback.isCorrect ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            )}
            {feedback.isCorrect ? 'Correct!' : 'Incorrect'}
          </span>
        </div>

        <p className="text-base sm:text-lg font-medium text-[#1d1d1f] leading-relaxed">{question.question_text}</p>

        <div className="space-y-2.5">
          {question.options.map((option) => {
            const isSelected = option.id === feedback.selectedAnswer
            const isCorrect  = option.id === feedback.correctAnswer
            return (
              <div
                key={option.id}
                className={cn(
                  'w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border-2 font-medium text-sm sm:text-base',
                  isCorrect  ? 'border-emerald-500 bg-emerald-50 text-emerald-800' :
                  isSelected ? 'border-red-400 bg-red-50 text-red-700' :
                               'border-[#d2d2d7] text-[#86868b]',
                )}
              >
                <span className="flex items-center gap-3">
                  <span className={cn(
                    'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                    isCorrect  ? 'bg-emerald-500 text-white' :
                    isSelected ? 'bg-red-400 text-white' :
                                 'bg-[#f5f5f7] text-[#86868b]',
                  )}>
                    {option.id}
                  </span>
                  {option.text}
                </span>
              </div>
            )
          })}
        </div>

        {feedback.explanation && (
          <div className="bg-[#f5f5f7] border border-[#d2d2d7] rounded-2xl px-4 py-3 text-sm text-[#6e6e73] leading-relaxed">
            <span className="font-semibold text-[#1d1d1f]">Explanation: </span>{feedback.explanation}
          </div>
        )}

        <div className="flex gap-3">
          {onBack && questionNumber > 1 && (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#d2d2d7] text-sm font-semibold text-[#6e6e73] hover:border-[#1d1d1f] hover:text-[#1d1d1f] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back
            </button>
          )}
          <Button onClick={onNext} className="flex-1 bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg">
            {questionNumber === totalQuestions ? 'Finish subject' : 'Next question'}
            <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Button>
        </div>
      </div>
    )
  }

  // ── Question view ──────────────────────────────────────────────────────────
  const minutes   = Math.floor(timeLeft / 60)
  const seconds   = timeLeft % 60
  const isWarning  = timeLeft <= 30
  const isCritical = timeLeft <= 10
  const timerPct   = (timeLeft / QUESTION_TIME_LIMIT) * 100

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#6e6e73]">Question {questionNumber} of {totalQuestions}</span>
          <div className="flex items-center gap-1.5">
            <div className="relative w-5 h-5">
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="none" stroke="#e5e7eb" strokeWidth="2.5" />
                <circle
                  cx="10" cy="10" r="8" fill="none"
                  stroke={isCritical ? '#dc2626' : isWarning ? '#d97706' : '#6366f1'}
                  strokeWidth="2.5"
                  strokeDasharray={`${2 * Math.PI * 8}`}
                  strokeDashoffset={`${2 * Math.PI * 8 * (1 - timerPct / 100)}`}
                  className="transition-all duration-1000"
                />
              </svg>
            </div>
            <span className={cn(
              'text-sm font-mono font-semibold tabular-nums',
              isCritical ? 'text-red-600 animate-pulse' : isWarning ? 'text-amber-600' : 'text-[#6e6e73]',
            )}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <span className="inline-block text-xs bg-[#f5f5f7] rounded-full px-3 py-1 capitalize text-[#6e6e73]">
          {question.topic.replace(/_/g, ' ')}
        </span>
      </div>

      <p className="text-base sm:text-lg font-medium text-[#1d1d1f] leading-relaxed">{question.question_text}</p>

      <div className="space-y-2.5">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !submitting && setSelected(option.id)}
            disabled={submitting}
            className={cn(
              'w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border-2 transition-all duration-150 font-medium text-sm sm:text-base',
              selected === option.id
                ? 'border-[#4F46E5] bg-indigo-50 text-indigo-800'
                : 'border-[#d2d2d7] text-[#1d1d1f] hover:border-[#4F46E5] hover:bg-indigo-50/50',
            )}
          >
            <span className="flex items-center gap-3">
              <span className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                selected === option.id ? 'bg-[#4F46E5] text-white' : 'bg-[#f5f5f7] text-[#6e6e73]',
              )}>
                {option.id}
              </span>
              {option.text}
            </span>
          </button>
        ))}
      </div>

      <Button onClick={handleSubmit} disabled={!selected} loading={submitting} className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg">
        Submit Answer
      </Button>
    </div>
  )
}
