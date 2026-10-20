'use client'

import { useState, useEffect, useRef } from 'react'
import { Question } from '@/types'
import { cn } from '@/lib/utils'

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((p, i) =>
    i % 2 === 1 ? <strong key={i}>{p}</strong> : p
  )
}

function QuestionText({ text }: { text: string }) {
  const lines = text.split('\n')
  const result: React.ReactNode[] = []
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    if (line.trim().startsWith('|')) {
      // Collect all consecutive table lines
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      // Parse: first row = header, second row = separator, rest = body
      const rows = tableLines
        .filter(l => !/^\s*\|[-\s|:]+\|\s*$/.test(l))
        .map(l => l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim()))
      const [header, ...body] = rows
      result.push(
        <div key={`table-${i}`} className="overflow-x-auto my-3">
          <table className="text-sm border-collapse w-full">
            <thead>
              <tr>
                {header.map((cell, ci) => (
                  <th key={ci} className="border border-[#d2d2d7] bg-[#f5f5f7] px-3 py-1.5 text-left font-semibold text-[#1d1d1f]">
                    {renderInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? '' : 'bg-[#fafafa]'}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-[#d2d2d7] px-3 py-1.5 text-[#1d1d1f]">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    } else {
      if (line.trim()) {
        result.push(
          <p key={`p-${i}`} className="text-base sm:text-lg font-medium text-[#1d1d1f] leading-relaxed">
            {renderInline(line)}
          </p>
        )
      }
      i++
    }
  }
  return <>{result}</>
}

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
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    setSelected(null)
    setSubmitting(false)
    startTimeRef.current = Date.now()
  }, [question.id])

  async function handleOptionClick(optionId: string) {
    if (submitting) return
    setSelected(optionId)
    setSubmitting(true)
    const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000)
    await onAnswer(optionId, timeTaken)
    onNext()
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {onBack && questionNumber > 1 && (
            <button
              onClick={onBack}
              disabled={submitting}
              className="flex items-center gap-1 text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors disabled:opacity-40"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
          <span className="text-sm text-[#6e6e73]">Question {questionNumber} of {totalQuestions}</span>
        </div>
        <span className="inline-block text-xs bg-[#f5f5f7] rounded-full px-3 py-1 capitalize text-[#6e6e73]">
          {question.topic.replace(/_/g, ' ')}
        </span>
      </div>

      <QuestionText text={question.question_text} />

      <div className="space-y-2.5">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            disabled={submitting}
            className={cn(
              'w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border-2 transition-all duration-150 font-medium text-sm sm:text-base',
              selected === option.id
                ? 'border-[#4F46E5] bg-indigo-50 text-indigo-800'
                : 'border-[#d2d2d7] text-[#1d1d1f] hover:border-[#4F46E5] hover:bg-indigo-50/50 disabled:opacity-50',
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
    </div>
  )
}
