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
  const [feedback, setFeedback] = useState<FeedbackData | null>(null)
  const [countdown, setCountdown] = useState(0)
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const cdRef = useRef<ReturnType<typeof setInterval> | null>(null)
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
    const result = await onAnswer(answer, QUESTION_TIME_LIMIT)
    if (result) showFeedback(result)
  }

  useEffect(() => {
    setSelected(null)
    setSubmitting(false)
    setFeedback(null)
    setTimeLeft(QUESTION_TIME_LIMIT)
    if (timerRef.current) clearInterval(timerRef.current)
    if (cdRef.current) clearInterval(cdRef.current)

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timerRef.current!); autoSubmitRef.current(); return 0 }
        return t - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current!)
      if (cdRef.current) clearInterval(cdRef.current!)
    }
  }, [question.id])

  function showFeedback(data: FeedbackData) {
    setFeedback(data)
    const delay = data.isCorrect ? 2 : 3
    setCountdown(delay)
    cdRef.current = setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) { clearInterval(cdRef.current!); onNext(); return 0 }
        return c - 1
      })
    }, 1000)
  }

  async function handleSubmit() {
    if (!selected || submitting || feedback) return
    if (timerRef.current) clearInterval(timerRef.current)
    setSubmitting(true)
    const timeTaken = QUESTION_TIME_LIMIT - timeLeft
    const result = await onAnswer(selected, timeTaken)
    if (result) showFeedback(result)
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isWarning = timeLeft <= 30
  const isCritical = timeLeft <= 10
  const timerPct = (timeLeft / QUESTION_TIME_LIMIT) * 100

  // ── Feedback overlay ─────────────────────────────────────────────────────────
  if (feedback) {
    return (
      <div className="space-y-5">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Question {questionNumber} of {totalQuestions}</span>
        </div>

        <p className="text-lg font-medium text-gray-900 leading-relaxed">{question.question_text}</p>

        <div className="space-y-2.5">
          {question.options.map((option) => {
            const isSelected = option.id === feedback.selectedAnswer
            const isCorrect = option.id === feedback.correctAnswer
            return (
              <div key={option.id} className={cn(
                'w-full px-4 py-3.5 rounded-xl border-2 flex items-center gap-3 font-medium text-sm sm:text-base',
                isCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-800' :
                isSelected ? 'border-red-400 bg-red-50 text-red-800' :
                'border-gray-100 text-gray-400',
              )}>
                <span className={cn(
                  'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                  isCorrect ? 'bg-emerald-500 text-white' :
                  isSelected ? 'bg-red-400 text-white' :
                  'bg-gray-100 text-gray-400',
                )}>
                  {isCorrect ? '✓' : isSelected ? '✗' : option.id}
                </span>
                {option.text}
              </div>
            )
          })}
        </div>

        <div className={cn(
          'rounded-xl p-4 space-y-1',
          feedback.isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-amber-50 border border-amber-200',
        )}>
          <p className={cn('font-semibold text-sm', feedback.isCorrect ? 'text-emerald-700' : 'text-amber-700')}>
            {feedback.isCorrect ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          {feedback.explanation && (
            <p className="text-sm text-gray-600 leading-relaxed">{feedback.explanation}</p>
          )}
        </div>

        <button
          onClick={() => { if (cdRef.current) clearInterval(cdRef.current); onNext() }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
        >
          Next question
          <span className="text-indigo-300 text-xs font-normal">({countdown}s)</span>
        </button>
      </div>
    )
  }

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
