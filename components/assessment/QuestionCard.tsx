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
  questionNumber: number
  totalQuestions: number
}

export default function QuestionCard({ question, onAnswer, onNext, questionNumber, totalQuestions }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const selectedRef = useRef<string | null>(null)
  const submittingRef = useRef(false)
  selectedRef.current = selected
  submittingRef.current = submitting

  const autoSubmitRef = useRef<() => void>(() => {})
  autoSubmitRef.current = async () => {
    if (submittingRef.current) return
    const answer = selectedRef.current ?? question.options[0].id
    submittingRef.current = true
    setSubmitting(true)
    await onAnswer(answer, QUESTION_TIME_LIMIT)
    onNext()
  }

  useEffect(() => {
    setSelected(null)
    setSubmitting(false)
    setTimeLeft(QUESTION_TIME_LIMIT)
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timerRef.current!); autoSubmitRef.current(); return 0 }
        return t - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current!)
    }
  }, [question.id])

  async function handleSubmit() {
    if (!selected || submitting) return
    if (timerRef.current) clearInterval(timerRef.current)
    setSubmitting(true)
    const timeTaken = QUESTION_TIME_LIMIT - timeLeft
    await onAnswer(selected, timeTaken)
    onNext()
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isWarning = timeLeft <= 30
  const isCritical = timeLeft <= 10
  const timerPct = (timeLeft / QUESTION_TIME_LIMIT) * 100

  // ── Question view ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-5">
      {/* Header — stacked on mobile */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Question {questionNumber} of {totalQuestions}</span>
          {/* Timer */}
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
              isCritical ? 'text-red-600 animate-pulse' : isWarning ? 'text-amber-600' : 'text-gray-500',
            )}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>
        <span className="inline-block text-xs bg-gray-100 rounded-full px-3 py-1 capitalize text-gray-500">
          {question.topic.replace(/_/g, ' ')}
        </span>
      </div>

      <p className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">{question.question_text}</p>

      <div className="space-y-2.5">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !submitting && setSelected(option.id)}
            disabled={submitting}
            className={cn(
              'w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border-2 transition-all duration-150 font-medium text-sm sm:text-base',
              selected === option.id
                ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                : 'border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50',
            )}
          >
            <span className="flex items-center gap-3">
              <span className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                selected === option.id ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-500',
              )}>
                {option.id}
              </span>
              {option.text}
            </span>
          </button>
        ))}
      </div>

      <Button onClick={handleSubmit} disabled={!selected} loading={submitting} className="w-full" size="lg">
        Submit Answer
      </Button>
    </div>
  )
}
