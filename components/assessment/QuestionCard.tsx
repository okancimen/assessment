'use client'

import { useState } from 'react'
import { Question } from '@/types'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

interface QuestionCardProps {
  question: Question
  onAnswer: (answerId: string, timeTaken: number) => Promise<void>
  questionNumber: number
  totalQuestions: number
}

export default function QuestionCard({ question, onAnswer, questionNumber, totalQuestions }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [startTime] = useState(Date.now())

  async function handleSubmit() {
    if (!selected || submitting) return
    setSubmitting(true)
    const timeTaken = Math.round((Date.now() - startTime) / 1000)
    await onAnswer(selected, timeTaken)
    // Parent fetches next question — no local state update needed
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Question {questionNumber} of {totalQuestions}</span>
        <span className="text-xs bg-gray-100 rounded-full px-3 py-1 capitalize">
          {question.topic.replace(/_/g, ' ')}
        </span>
      </div>

      <p className="text-lg font-medium text-gray-900 leading-relaxed">{question.question_text}</p>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !submitting && setSelected(option.id)}
            disabled={submitting}
            className={cn(
              'w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 font-medium',
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

      <Button
        onClick={handleSubmit}
        disabled={!selected}
        loading={submitting}
        className="w-full"
        size="lg"
      >
        Submit Answer
      </Button>
    </div>
  )
}
