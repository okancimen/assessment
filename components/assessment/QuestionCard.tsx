'use client'

import { useState, useEffect, useRef } from 'react'
import { Question, Subject } from '@/types'
import { cn } from '@/lib/utils'

// ── Helpers ───────────────────────────────────────────────────────────────────

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
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
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

// ── Topic labels ──────────────────────────────────────────────────────────────

const TOPIC_DISPLAY: Record<string, string> = {
  number_operations: 'Numbers',
  data_handling: 'Data',
}

function topicLabel(topic: string): string {
  return TOPIC_DISPLAY[topic] ?? topic.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

// ── Subject colour palette ────────────────────────────────────────────────────

const SUBJECT_COLORS: Record<Subject, {
  badge: string
  dot: string
  selectedBtn: string
  selectedCircle: string
  hoverBtn: string
}> = {
  english: {
    badge:          'bg-indigo-50 text-indigo-700',
    dot:            'bg-indigo-400',
    selectedBtn:    'border-indigo-500 bg-indigo-50 text-indigo-900',
    selectedCircle: 'bg-indigo-500 text-white',
    hoverBtn:       'hover:border-indigo-400 hover:bg-indigo-50/50',
  },
  mathematics: {
    badge:          'bg-emerald-50 text-emerald-700',
    dot:            'bg-emerald-400',
    selectedBtn:    'border-emerald-500 bg-emerald-50 text-emerald-900',
    selectedCircle: 'bg-emerald-500 text-white',
    hoverBtn:       'hover:border-emerald-400 hover:bg-emerald-50/50',
  },
  verbal_reasoning: {
    badge:          'bg-purple-50 text-purple-700',
    dot:            'bg-purple-400',
    selectedBtn:    'border-purple-500 bg-purple-50 text-purple-900',
    selectedCircle: 'bg-purple-500 text-white',
    hoverBtn:       'hover:border-purple-400 hover:bg-purple-50/50',
  },
  nonverbal_reasoning: {
    badge:          'bg-amber-50 text-amber-700',
    dot:            'bg-amber-400',
    selectedBtn:    'border-amber-500 bg-amber-50 text-amber-900',
    selectedCircle: 'bg-amber-500 text-white',
    hoverBtn:       'hover:border-amber-400 hover:bg-amber-50/50',
  },
}

// ── Milestone messages ────────────────────────────────────────────────────────

const MILESTONE_MESSAGES: Record<number, string> = {
  5:  "A third of the way through — solid focus!",
  10: "10 down, 5 to go — you're on a great run!",
}

// ── Types ─────────────────────────────────────────────────────────────────────

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

// ── Component ─────────────────────────────────────────────────────────────────

export default function QuestionCard({ question, onAnswer, onNext, onBack, questionNumber, totalQuestions }: QuestionCardProps) {
  const [selected, setSelected]   = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [feedback, setFeedback]   = useState<FeedbackData | null>(null)
  const startTimeRef = useRef(Date.now())

  useEffect(() => {
    setSelected(null)
    setSubmitting(false)
    setFeedback(null)
    startTimeRef.current = Date.now()
  }, [question.id])

  async function handleOptionClick(optionId: string) {
    if (submitting) return
    setSelected(optionId)
    setSubmitting(true)
    const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000)
    const result = await onAnswer(optionId, timeTaken)
    if (result) {
      setFeedback(result)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
    onNext()
  }

  const colors  = SUBJECT_COLORS[question.subject] ?? SUBJECT_COLORS.english
  const milestone = !feedback ? MILESTONE_MESSAGES[questionNumber] : null

  function optionBtnClass(optionId: string): string {
    if (feedback) {
      if (feedback.isCorrect && optionId === feedback.correctAnswer)     return 'border-green-500 bg-green-50 text-green-900'
      if (!feedback.isCorrect && optionId === feedback.selectedAnswer)   return 'border-red-400 bg-red-50 text-red-900'
      return 'border-[#d2d2d7] text-[#aeaeb2] opacity-40'
    }
    if (selected === optionId) return colors.selectedBtn
    return `border-[#d2d2d7] text-[#1d1d1f] ${colors.hoverBtn} disabled:opacity-50`
  }

  function circleBadgeClass(optionId: string): string {
    if (feedback) {
      if (feedback.isCorrect && optionId === feedback.correctAnswer)     return 'bg-green-500 text-white'
      if (!feedback.isCorrect && optionId === feedback.selectedAnswer)   return 'bg-red-400 text-white'
      return 'bg-[#f5f5f7] text-[#aeaeb2]'
    }
    return selected === optionId ? colors.selectedCircle : 'bg-[#f5f5f7] text-[#6e6e73]'
  }

  function circleLabel(optionId: string): string {
    if (feedback) {
      if (feedback.isCorrect && optionId === feedback.correctAnswer)     return '✓'
      if (!feedback.isCorrect && optionId === feedback.selectedAnswer)   return '✗'
    }
    return optionId
  }

  return (
    <div className="space-y-5">

      {/* Milestone banner */}
      {milestone && (
        <div className={cn('flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium border', colors.badge, 'border-current/20')}>
          <span aria-hidden>🎯</span>
          <span>{milestone}</span>
        </div>
      )}

      {/* Header: back + counter + topic badge */}
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
        <span className={cn('inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full', colors.badge)}>
          <span className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', colors.dot)} />
          {topicLabel(question.topic)}
        </span>
      </div>

      <QuestionText text={question.question_text} />

      {/* Answer options */}
      <div className="space-y-2.5">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            disabled={submitting}
            className={cn(
              'w-full text-left px-4 py-3.5 sm:px-5 sm:py-4 rounded-xl border-2 transition-all duration-150 font-medium text-sm sm:text-base',
              optionBtnClass(option.id),
            )}
          >
            <span className="flex items-center gap-3">
              <span className={cn(
                'w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors duration-150',
                circleBadgeClass(option.id),
              )}>
                {circleLabel(option.id)}
              </span>
              {option.text}
            </span>
          </button>
        ))}
      </div>

      {/* Feedback panel */}
      {feedback && (
        <div className={cn(
          'rounded-xl px-4 py-3 text-sm leading-relaxed border',
          feedback.isCorrect
            ? 'bg-green-50 border-green-200 text-green-800'
            : 'bg-red-50 border-red-200 text-red-800',
        )}>
          <p className="font-semibold">
            {feedback.isCorrect ? '✓ Correct!' : '✗ Not quite'}
          </p>
        </div>
      )}

    </div>
  )
}
