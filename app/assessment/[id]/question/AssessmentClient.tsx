'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, SUBJECT_LABELS, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import ProgressBar from '@/components/assessment/ProgressBar'
import QuestionCard from '@/components/assessment/QuestionCard'
import Button from '@/components/ui/Button'

interface SessionState {
  current_subject: Subject
  subject_index: number
  question_index: number
  difficulty_level: number
  completed_subjects: Subject[]
}

export default function AssessmentClient({ assessmentId }: { assessmentId: string }) {
  const router = useRouter()
  const [question, setQuestion] = useState<Question | null>(null)
  const [session, setSession] = useState<SessionState | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [subjectBreak, setSubjectBreak] = useState<{ nextSubject: Subject } | null>(null)

  const fetchQuestion = useCallback(async () => {
    setLoading(true)
    setError('')
    setQuestion(null)
    setSubjectBreak(null)

    try {
      const res = await fetch(`/api/assessments/${assessmentId}/question`)
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to load question')
        setLoading(false)
        return
      }

      if (data.completed) {
        router.push(`/assessment/${assessmentId}/complete`)
        return
      }

      if (data.subject_break) {
        setSubjectBreak({ nextSubject: data.next_subject })
        setLoading(false)
        return
      }

      setQuestion(data.question)
      setSession(data.session)
    } catch {
      setError('Network error. Please try again.')
    }

    setLoading(false)
  }, [assessmentId, router])

  useEffect(() => {
    fetchQuestion()
  }, [fetchQuestion])

  async function handleAnswer(selectedAnswer: string, timeTaken: number) {
    if (!question) return

    const res = await fetch(`/api/assessments/${assessmentId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question_id: question.id,
        selected_answer: selectedAnswer,
        time_taken_seconds: timeTaken,
      }),
    })

    const data = await res.json()

    if (data.all_complete) {
      router.push(`/assessment/${assessmentId}/complete`)
      return
    }

    // Auto-advance to next question
    fetchQuestion()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-500 text-sm">Loading next question...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm">
          <p className="text-red-600">{error}</p>
          <Button onClick={fetchQuestion}>Try again</Button>
        </div>
      </div>
    )
  }

  if (subjectBreak) {
    const subjectIndex = SUBJECTS.indexOf(subjectBreak.nextSubject)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Subject complete!</h2>
            <p className="text-gray-500 text-sm">
              Take a short break before continuing to{' '}
              <strong className="text-gray-700">{SUBJECT_LABELS[subjectBreak.nextSubject]}</strong>
              {' '}(subject {subjectIndex + 1} of {SUBJECTS.length}).
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
            Stretch, have some water, and come back when you&apos;re ready.
          </div>
          <Button className="w-full" size="lg" onClick={fetchQuestion}>
            Continue to {SUBJECT_LABELS[subjectBreak.nextSubject]}
          </Button>
        </div>
      </div>
    )
  }

  if (!question || !session) return null

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <ProgressBar
            subjectIndex={session.subject_index}
            questionIndex={session.question_index}
            currentSubject={session.current_subject}
            completedSubjects={session.completed_subjects}
          />
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <QuestionCard
            question={question}
            onAnswer={handleAnswer}
            questionNumber={session.question_index + 1}
            totalQuestions={QUESTIONS_PER_SUBJECT}
          />
        </div>
      </div>
    </div>
  )
}
