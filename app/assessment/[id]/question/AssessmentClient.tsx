'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, SUBJECT_LABELS, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import ProgressBar from '@/components/assessment/ProgressBar'
import QuestionCard from '@/components/assessment/QuestionCard'
import Button from '@/components/ui/Button'

const SECTION_TIME = QUESTIONS_PER_SUBJECT * 120 // seconds per subject

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
  'Did you know? The highest possible standardised score is 141. Fewer than 0.1% of test-takers ever reach it — it represents performance roughly 2.7 standard deviations above the mean.',
  'Fun fact: English comprehension and mathematics are tested in every major international benchmark — PISA, TIMSS, PIRLS, and NAEP — making them the two most universally studied school subjects on the planet.',
  'Did you know? Working memory — your brain\'s ability to hold and manipulate information — is one of the strongest predictors of maths ability. It can be trained.',
  'Fun fact: The 11+ exam, used to select pupils for grammar schools in England, has existed in some form since 1944. Over 80 years later, verbal and non-verbal reasoning are still its core components.',
  'Tip: In maths questions, always check the units. Most errors come from mixing centimetres with metres, or grams with kilograms — not from getting the calculation wrong.',
  'Did you know? Children who read for pleasure for just 20 minutes a day are exposed to roughly 1.8 million words per year. That volume alone predicts vocabulary size more reliably than any teaching method.',
  'Fun fact: The concept of IQ — the original standardised score — was invented in 1905 by French psychologist Alfred Binet, who designed it specifically to identify children who needed extra school support, not to rank the general population.',
  'Did you know? Spatial reasoning and non-verbal reasoning share the same neural pathways. Children who are strong at building, drawing, or jigsaws almost always score well on non-verbal sections.',
  'Tip: When a reading comprehension question asks "what does the author imply?", the answer is never stated outright — look for tone and word choice rather than explicit statements.',
  'Fun fact: Singapore and South Korea consistently top the PISA mathematics rankings. Both systems prioritise deep problem-solving over rote calculation, which is exactly what adaptive tests measure.',
  'Did you know? Standardised scores were originally calibrated so that exactly 50% of children score below 100 and 50% above — but the real-world distribution is slightly skewed because high-achieving families are more likely to take assessments voluntarily.',
  'Fun fact: Non-verbal reasoning questions were first used in military selection during World War I, when psychologists needed a way to assess recruits who couldn\'t read or speak English.',
  'Tip: For sequence questions in maths, always check at least three steps before committing to a rule. A pattern that holds for two steps often breaks on the third.',
  'Did you know? Verbal reasoning tests include sub-skills such as analogies, odd-one-out, and code-breaking. Each sub-skill activates a different region of the left hemisphere — they\'re more varied than they appear.',
  'Fun fact: The average child\'s vocabulary grows by around 3,000 words per year between ages 6 and 12. By secondary school, vocabulary size predicts academic achievement across every subject, not just English.',
  'Did you know? Research from the University of Edinburgh tracked 70,000 children and found that reading ability at age 7 predicted occupational prestige and income at age 42 — independent of IQ and social class.',
  'Tip: In analogy questions ("A is to B as C is to ?"), always define the relationship between A and B in a precise sentence before looking at the options. Vague relationships lead to wrong answers.',
  'Fun fact: The human brain processes numerical quantity in the intraparietal sulcus — a region that is already active in newborn infants. Mathematical sense is not learned from scratch; it is refined.',
  'Did you know? A child who scores 115 on a standardised test has outperformed roughly 84% of their age group. A score of 125 puts them in the top 5%, and 130 in the top 2.3%.',
  'Fun fact: Pattern recognition — the core skill in non-verbal reasoning — is also the foundation of coding, chess strategy, musical sight-reading, and scientific hypothesis formation.',
  'Did you know? Timed and untimed versions of the same test often produce very different scores for different children. This assessment is untimed, which benefits deep thinkers who process carefully rather than quickly.',
  'Did you know? Albert Einstein failed the entrance exam to the Swiss Federal Polytechnic at age 15 — not in maths or physics, but in French and botany. He retook it a year later and was admitted. The lesson: a weak subject doesn\'t define you.',
  'Fun fact: Thomas Edison had just three months of formal schooling. His teachers described him as "addled" and said he was too slow to learn. His mother pulled him out and taught him at home. He went on to hold 1,093 patents.',
  'Did you know? Isaac Newton was considered an unremarkable student and was pulled out of school at 17 to run his family\'s farm. His uncle noticed his potential and sent him back. He later invented calculus.',
  'Fun fact: Charles Darwin\'s father told him: "You care for nothing but shooting, dogs, and rat-catching, and you will be a disgrace to yourself and all your family." Darwin went on to write one of the most important books in scientific history.',
  'Did you know? Winston Churchill finished near the bottom of his class at Harrow and failed the entrance exam to the Royal Military College twice. He later said school taught him one thing above all: never give up.',
  'Fun fact: Richard Branson\'s headmaster told him on his last day of school: "Congratulations, Branson — I predict you will either go to prison or become a millionaire." He left school at 16 with dyslexia and no qualifications. He became both famous and a billionaire.',
  'Did you know? Agatha Christie — the best-selling fiction writer of all time — could not read until she was eight years old and was considered a slow learner. She went on to write 66 detective novels, translated into 103 languages.',
  'Fun fact: Abraham Lincoln had less than twelve months of formal schooling in his entire life, taught himself to read by firelight, and walked miles to borrow books. He became a lawyer, then President, without ever attending school regularly.',
  'Did you know? Walt Disney was told by a newspaper editor that he "lacked imagination and had no good ideas." His art teacher agreed. He was fired from his first animation job. The studio he built became the most recognised entertainment brand on Earth.',
  'Fun fact: Michael Faraday — who discovered electromagnetic induction and invented the electric motor — left school at 13 with almost no education and became a bookbinder\'s apprentice. He taught himself chemistry and physics entirely from the books he was binding.',
]

function LoadingQuestion() {
  const [factIndex, setFactIndex] = useState(() => Math.floor(Math.random() * LOADING_FACTS.length))
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
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div
          className="bg-white rounded-3xl border border-[#d2d2d7] p-6 text-sm text-[#6e6e73] leading-relaxed transition-opacity duration-400"
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

// ── Section timer helper ──────────────────────────────────────────────────────

function formatSectionTime(secs: number) {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${s.toString().padStart(2, '0')}`
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

  function guestHeaders(): HeadersInit {
    const token = typeof window !== 'undefined'
      ? sessionStorage.getItem(`guestToken_${assessmentId}`) ?? undefined
      : undefined
    return token ? { 'X-Guest-Token': token } : {}
  }


  type Phase = 'warmup' | 'loading' | 'question' | 'break' | 'error'
  const [phase, setPhase]               = useState<Phase>('warmup')
  const [warmupCount, setWarmupCount]   = useState(4)
  const [question, setQuestion]         = useState<Question | null>(null)
  const [session, setSession]           = useState<SessionState | null>(null)
  const [subjectBreak, setSubjectBreak] = useState<Subject | null>(null)
  const [error, setError]               = useState('')

  // Section timer
  const [sectionTimeLeft, setSectionTimeLeft] = useState(SECTION_TIME)
  const prevSubjectRef = useRef<string | null>(null)

  // Reset section timer when subject changes
  useEffect(() => {
    if (!session) return
    if (prevSubjectRef.current !== session.current_subject) {
      prevSubjectRef.current = session.current_subject
      setSectionTimeLeft(SECTION_TIME)
    }
  }, [session?.current_subject])

  // Count down section timer while actively answering (question + loading phases)
  useEffect(() => {
    if (phase !== 'question' && phase !== 'loading') return
    const interval = setInterval(() => {
      setSectionTimeLeft((t) => Math.max(0, t - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [phase])

  const pendingRef  = useRef<FetchResult | null>(null)
  const isFirstRef  = useRef(true)

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

  async function doFetch(retries = 2): Promise<FetchResult> {
    try {
      const res = await fetch(`/api/assessment/${assessmentId}/question`, { headers: guestHeaders() })
      const data = await res.json()
      if (!res.ok) {
        const isOverloaded = typeof data.error === 'string' && data.error.includes('overloaded')
        if (isOverloaded && retries > 0) {
          await new Promise((r) => setTimeout(r, 3000))
          return doFetch(retries - 1)
        }
        const message = isOverloaded
          ? 'Our AI is very busy right now. Please wait a moment and try again.'
          : data.error || 'Failed to load question'
        return { type: 'error', message }
      }
      if (data.completed) return { type: 'complete' }
      if (data.subject_break) return { type: 'break', nextSubject: data.next_subject }
      return { type: 'question', question: data.question, session: data.session }
    } catch {
      return { type: 'error', message: 'Network error. Please try again.' }
    }
  }

  async function fetchNextQuestion() {
    setPhase('loading')
    setQuestion(null)
    setSubjectBreak(null)
    const result = await doFetch()
    applyResult(result)
  }

  // Back to previous question
  async function handleBack() {
    setPhase('loading')
    setQuestion(null)
    try {
      const res = await fetch(`/api/assessment/${assessmentId}/back`, { method: 'POST', headers: guestHeaders() })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Could not go back'); setPhase('error'); return }
      setQuestion(data.question)
      setSession(data.session)
      setPhase('question')
    } catch {
      setError('Network error. Please try again.')
      setPhase('error')
    }
  }

  useEffect(() => {
    let countdownDone = false

    doFetch().then((result) => {
      if (countdownDone) {
        applyResult(result)
      } else {
        pendingRef.current = result
      }
    })

    let count = 4
    const interval = setInterval(() => {
      count -= 1
      setWarmupCount(count)
      if (count <= 0) {
        clearInterval(interval)
        countdownDone = true
        isFirstRef.current = false
        if (pendingRef.current) {
          applyResult(pendingRef.current)
        } else {
          setPhase('loading')
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!question) return
    fetch(`/api/assessment/${assessmentId}/prefetch`, { method: 'POST', headers: guestHeaders() }).catch(() => {})
  }, [question?.id, assessmentId])

  async function handleAnswer(selectedAnswer: string, timeTaken: number) {
    if (!question) return null
    const res = await fetch(`/api/assessment/${assessmentId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...guestHeaders() },
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

  const sectionIsLow = sectionTimeLeft <= 300 // 5 min warning

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
          {/* Section timer */}
          <div className="mt-3 pt-3 border-t border-[#f5f5f7] flex items-center justify-between">
            <span className="text-xs text-[#6e6e73]">Section time remaining</span>
            <span className={`text-xs font-mono font-semibold tabular-nums ${sectionIsLow ? 'text-red-500 animate-pulse' : 'text-[#1d1d1f]'}`}>
              {formatSectionTime(sectionTimeLeft)}
            </span>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
          <QuestionCard
            question={question}
            onAnswer={handleAnswer}
            onNext={fetchNextQuestion}
            onBack={session.question_index > 0 ? handleBack : undefined}
            questionNumber={session.question_index + 1}
            totalQuestions={QUESTIONS_PER_SUBJECT}
          />
        </div>
      </div>
    </div>
  )
}
