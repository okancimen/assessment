'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, SUBJECT_LABELS, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import ProgressBar from '@/components/assessment/ProgressBar'
import QuestionCard from '@/components/assessment/QuestionCard'
import Button from '@/components/ui/Button'

// ── Loading screen (between questions) ────────────────────────────────────────

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
      setTimeout(() => { setFactIndex((i) => (i + 1) % LOADING_FACTS.length); setFade(true) }, 400)
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

// ── Warmup countdown (first question only) ────────────────────────────────────

function WarmupCountdown({ count }: { count: number }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-xs">
        <div className="relative w-28 h-28 mx-auto">
          {/* Animated ring */}
          <svg className="w-28 h-28 -rotate-90 absolute inset-0" viewBox="0 0 112 112">
            <circle cx="56" cy="56" r="50" fill="none" stroke="#e0e7ff" strokeWidth="6" />
            <circle
              cx="56" cy="56" r="50" fill="none"
              stroke="#6366f1" strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (count / 3)}`}
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              key={count}
              className="text-5xl font-bold text-indigo-600 animate-in zoom-in-50 duration-300"
            >
              {count > 0 ? count : '🚀'}
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold text-gray-800">
            {count > 0 ? 'Get ready!' : "Let's go!"}
          </p>
          <p className="text-sm text-gray-400">
            {count > 0
              ? 'Your first question is being prepared…'
              : 'Loading your question…'}
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface SessionState {
  current_subject: Subject
  subject_index: number
  question_index: number
  difficulty_level: number
  completed_subjects: Subject[]
}

type FetchResult =
  | { type: 'question'; question: Question; session: SessionState }
  | { type: 'break'; nextSubject: Subject }
  | { type: 'complete' }
  | { type: 'error'; message: string }

// ── Main component ────────────────────────────────────────────────────────────

export default function AssessmentClient({ assessmentId }: { assessmentId: string }) {
  const router = useRouter()

  type Phase = 'warmup' | 'loading' | 'question' | 'break' | 'error'
  const [phase, setPhase] = useState<Phase>('warmup')
  const [warmupCount, setWarmupCount] = useState(3)
  const [question, setQuestion] = useState<Question | null>(null)
  const [session, setSession] = useState<SessionState | null>(null)
  const [subjectBreak, setSubjectBreak] = useState<Subject | null>(null)
  const [error, setError] = useState('')

  // Stores fetch result while warmup countdown is still running
  const pendingRef = useRef<FetchResult | null>(null)
  const isFirstRef = useRef(true)

  // Apply a fetch result to component state
  function applyResult(result: FetchResult) {
    if (result.type === 'complete') {
      router.push(`/assessment/${assessmentId}/complete`)
    } else if (result.type === 'error') {
      setError(result.message)
      setPhase('error')
    } else if (result.type === 'break') {
      setSubjectBreak(result.nextSubject)
      setPhase('break')
    } else {
      setQuestion(result.question)
      setSession(result.session)
      setPhase('question')
    }
  }

  // Fetch question from API
  async function doFetch(): Promise<FetchResult> {
    try {
      const res = await fetch(`/api/assessments/${assessmentId}/question`)
      const data = await res.json()
      if (!res.ok) return { type: 'error', message: data.error || 'Failed to load question' }
      if (data.completed) return { type: 'complete' }
      if (data.subject_break) return { type: 'break', nextSubject: data.next_subject }
      return { type: 'question', question: data.question, session: data.session }
    } catch {
      return { type: 'error', message: 'Network error. Please try again.' }
    }
  }

  // Subsequent question fetches (normal loading screen)
  async function fetchNextQuestion() {
    setPhase('loading')
    setQuestion(null)
    setSubjectBreak(null)
    const result = await doFetch()
    applyResult(result)
  }

  // On mount: start background fetch + countdown simultaneously
  useEffect(() => {
    let countdownDone = false

    // 1. Kick off the API call immediately
    doFetch().then((result) => {
      if (countdownDone) {
        // Countdown already finished — apply right away
        applyResult(result)
      } else {
        // Still counting down — hold it
        pendingRef.current = result
      }
    })

    // 2. Run 3-2-1 countdown
    let count = 3
    const interval = setInterval(() => {
      count -= 1
      setWarmupCount(count)
      if (count <= 0) {
        clearInterval(interval)
        countdownDone = true
        isFirstRef.current = false
        if (pendingRef.current) {
          // Fetch already done — apply immediately
          applyResult(pendingRef.current)
        } else {
          // Fetch still in progress — show loading screen
          setPhase('loading')
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Prefetch next question whenever a new question is displayed
  useEffect(() => {
    if (!question) return
    fetch(`/api/assessments/${assessmentId}/prefetch`, { method: 'POST' }).catch(() => {})
  }, [question?.id, assessmentId])

  async function handleAnswer(selectedAnswer: string, timeTaken: number) {
    if (!question) return null
    const res = await fetch(`/api/assessments/${assessmentId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question_id: question.id, selected_answer: selectedAnswer, time_taken_seconds: timeTaken }),
    })
    const data = await res.json()
    if (data.all_complete) {
      router.push(`/assessment/${assessmentId}/complete`)
      return null
    }
    return {
      isCorrect: data.is_correct as boolean,
      correctAnswer: data.correct_answer as string,
      explanation: (data.explanation ?? null) as string | null,
      selectedAnswer,
    }
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  if (phase === 'warmup') return <WarmupCountdown count={warmupCount} />
  if (phase === 'loading') return <LoadingQuestion />

  if (phase === 'error') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm">
          <p className="text-red-600">{error}</p>
          <Button onClick={fetchNextQuestion}>Try again</Button>
        </div>
      </div>
    )
  }

  if (phase === 'break' && subjectBreak) {
    const subjectIndex = SUBJECTS.indexOf(subjectBreak)
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
              <strong className="text-gray-700">{SUBJECT_LABELS[subjectBreak]}</strong>
              {' '}(subject {subjectIndex + 1} of {SUBJECTS.length}).
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
            Stretch, have some water, and come back when you&apos;re ready.
          </div>
          <Button className="w-full" size="lg" onClick={fetchNextQuestion}>
            Continue to {SUBJECT_LABELS[subjectBreak]}
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
            onNext={fetchNextQuestion}
            questionNumber={session.question_index + 1}
            totalQuestions={QUESTIONS_PER_SUBJECT}
          />
        </div>
      </div>
    </div>
  )
}
