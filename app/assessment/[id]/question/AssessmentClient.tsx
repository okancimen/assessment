'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, SUBJECT_LABELS, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import ProgressBar from '@/components/assessment/ProgressBar'
import QuestionCard from '@/components/assessment/QuestionCard'
import Button from '@/components/ui/Button'

const LOADING_FACTS = [
  'Did you know? Adaptive testing adjusts difficulty in real-time based on your answers.',
  'Fun fact: The IRT model used here is the same one behind many national standardised tests.',
  'Tip: Read each question carefully — there\'s no time pressure, accuracy matters more.',
  'Did you know? Your brain consolidates learning best after short breaks.',
  'Fun fact: Verbal reasoning scores are strong predictors of academic potential.',
  'Tip: For non-verbal questions, look for the rule in the pattern before guessing.',
  'Did you know? A score of 100 is exactly average for your age group.',
  'Fun fact: The difficulty range spans 10 levels — most students land between 4 and 7.',
]

function LoadingQuestion() {
  const [factIndex, setFactIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setFactIndex((i) => (i + 1) % LOADING_FACTS.length)
        setFade(true)
      }, 400)
    }, 4000)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
          <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-indigo-300 border-b-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
        </div>
        <div className="space-y-1.5">
          <p className="text-gray-800 font-semibold text-base">Crafting your next question</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            AI is analysing your performance and generating<br />
            a personalised question calibrated to your level.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:300ms]" />
        </div>
        <div
          className="bg-white border border-gray-100 rounded-xl px-5 py-3.5 text-sm text-gray-500 leading-relaxed transition-opacity duration-400"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {LOADING_FACTS[factIndex]}
        </div>
      </div>
    </div>
  )
}

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

  // Fire-and-forget prefetch as soon as a question is displayed
  useEffect(() => {
    if (!question || !session) return
    fetch(`/api/assessments/${assessmentId}/prefetch`, { method: 'POST' }).catch(() => {})
  }, [question?.id, assessmentId])

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
    return <LoadingQuestion />
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
