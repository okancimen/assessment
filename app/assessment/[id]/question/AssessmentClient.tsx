'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, SUBJECT_LABELS, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import ProgressBar from '@/components/assessment/ProgressBar'
import QuestionCard from '@/components/assessment/QuestionCard'
import Button from '@/components/ui/Button'

// ── Loading screen (between questions) ────────────────────────────────────────

const LOADING_FACTS = [
  'Did you know? Adaptive testing adjusts difficulty in real-time based on your answers, so every question is personally calibrated to challenge you at exactly the right level.',
  'Fun fact: The IRT model used here is the same one behind many national standardised tests, including PISA, which measures academic ability across more than 80 countries.',
  'Tip: Read each question carefully — there\'s no time pressure, so accuracy matters far more than speed. A thoughtful wrong answer still helps calibrate your score.',
  'Did you know? Your brain consolidates learning best after short breaks. Even a few seconds of pause between questions can improve recall and focus.',
  'Fun fact: Verbal reasoning scores are strong predictors of academic potential and are used by grammar schools and independent schools as a key entry criterion.',
  'Tip: For non-verbal questions, look for the rule governing the pattern before you guess. Common rules include rotation, reflection, size change, and number of sides.',
  'Did you know? A score of 100 is exactly average for your age group. Scores above 115 place a child in the top 16%, and above 130 in the top 2%.',
  'Fun fact: The difficulty range spans 10 levels — most students land between 4 and 7. Reaching level 8 or above puts you well ahead of your peers nationally.',
  'Tip: If you\'re unsure between two answers, trust your first instinct. Research shows that initial responses are correct more often than second-guessed ones.',
  'Did you know? This assessment covers four subjects — English, Maths, Verbal Reasoning, and Non-Verbal Reasoning — the same four tested in most 11+ and grammar school exams.',
  'Fun fact: Standardised scores stay comparable across different age groups, so a score of 110 means the same thing whether you\'re 8 or 14 years old.',
  'Tip: Non-verbal reasoning is the one subject where extra practice makes the biggest difference in a short time. Pattern recognition improves quickly with repetition.',
]

function LoadingQuestion() {
  const [factIndex, setFactIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setFade(false)
      setTimeout(() => { setFactIndex((i) => (i + 1) % LOADING_FACTS.length); setFade(true) }, 400)
    }, 5000)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-sm">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-[#e0e7ff]" />
          <div className="absolute inset-0 rounded-full border-4 border-[#4F46E5] border-t-transparent animate-spin" />
          <div className="absolute inset-2 rounded-full border-2 border-[#a5b4fc] border-b-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
        </div>
        <div className="space-y-1.5">
          <p className="text-[#1d1d1f] font-semibold text-base">Crafting your next question</p>
          <p className="text-[#6e6e73] text-sm leading-relaxed">
            AI is analysing your performance and generating<br />
            a personalised question calibrated to your level.
          </p>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-bounce [animation-delay:0ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-bounce [animation-delay:150ms]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-bounce [animation-delay:300ms]" />
        </div>
        <div
          className="bg-white border border-[#d2d2d7] rounded-2xl px-5 py-3.5 text-sm text-[#6e6e73] leading-relaxed transition-opacity duration-400"
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
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-xs">
        <div className="relative w-28 h-28 mx-auto">
          <svg className="w-28 h-28 -rotate-90 absolute inset-0" viewBox="0 0 112 112">
            <circle cx="56" cy="56" r="50" fill="none" stroke="#e0e7ff" strokeWidth="6" />
            <circle
              cx="56" cy="56" r="50" fill="none"
              stroke="#4F46E5" strokeWidth="6"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (count / 4)}`}
              className="transition-all duration-700"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              key={count}
              className="text-5xl font-bold text-[#4F46E5] animate-in zoom-in-50 duration-300"
            >
              {count > 0 ? count : '🚀'}
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold text-[#1d1d1f]">
            {count > 0 ? 'Get ready!' : "Let's go!"}
          </p>
          <p className="text-sm text-[#6e6e73]">
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
  const [warmupCount, setWarmupCount] = useState(4)
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

    // 2. Run 4-3-2-1 countdown
    let count = 4
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
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-center space-y-4 max-w-sm">
          <p className="text-red-600 text-sm">{error}</p>
          <Button onClick={fetchNextQuestion}>Try again</Button>
        </div>
      </div>
    )
  }

  if (phase === 'break' && subjectBreak) {
    const subjectIndex = SUBJECTS.indexOf(subjectBreak)
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Subject complete!</h2>
            <p className="text-[#6e6e73] text-sm">
              Take a short break before continuing to{' '}
              <strong className="text-[#1d1d1f]">{SUBJECT_LABELS[subjectBreak]}</strong>
              {' '}(subject {subjectIndex + 1} of {SUBJECTS.length}).
            </p>
          </div>
          <div className="bg-[#f5f5f7] rounded-2xl p-4 text-sm text-[#6e6e73]">
            Stretch, have some water, and come back when you&apos;re ready.
          </div>
          <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg" onClick={fetchNextQuestion}>
            Continue to {SUBJECT_LABELS[subjectBreak]}
          </Button>
        </div>
      </div>
    )
  }

  if (!question || !session) return null

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-4">
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-5">
          <ProgressBar
            subjectIndex={session.subject_index}
            questionIndex={session.question_index}
            currentSubject={session.current_subject}
            completedSubjects={session.completed_subjects}
          />
        </div>
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
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
