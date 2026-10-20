'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Question, Subject, SUBJECT_LABELS, SUBJECTS, QUESTIONS_PER_SUBJECT } from '@/types'
import ProgressBar from '@/components/assessment/ProgressBar'
import QuestionCard from '@/components/assessment/QuestionCard'
import Button from '@/components/ui/Button'
import { getScoreLabel, getScoreColor } from '@/lib/assessment/adaptive'


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
  const [factIndex] = useState(() => Math.floor(Math.random() * LOADING_FACTS.length))

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-8 text-center space-y-6">
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
            className="border border-[#d2d2d7] rounded-2xl px-5 py-3.5 text-sm text-[#6e6e73] leading-relaxed bg-[#f5f5f7]"
          >
            {LOADING_FACTS[factIndex]}
          </div>
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

function formatElapsed(secs: number) {
  const m = Math.floor(secs / 60)
  return m < 1 ? '< 1 min' : `${m} min`
}

// ── Break screen helpers ──────────────────────────────────────────────────────

function standardizedToPercentile(score: number): number {
  const z = (score - 100) / 15
  const t = 1 / (1 + 0.2316419 * Math.abs(z))
  const poly = t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))))
  const cdf = 1 - (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z) * poly
  const p = z >= 0 ? cdf : 1 - cdf
  return Math.round(Math.max(1, Math.min(99, p * 100)))
}

const SUBJECT_INSIGHTS: Record<string, Record<string, string>> = {
  english: {
    exceptional: 'Reading comprehension and language skills are exceptional — well beyond what most same-age kids demonstrate.',
    above:  'Strong vocabulary and comprehension compared to same-age kids — a real advantage for essay writing, exams, and independent reading.',
    average: 'Solid English foundations, in line with most same-age kids. Consistent reading at slightly above their current level will push this score up.',
    below:  'English is behind most same-age kids right now. Daily reading aloud for 15 minutes typically produces the fastest gains.',
  },
  mathematics: {
    exceptional: 'Numeracy is exceptional — working confidently well ahead of most same-age kids on problem-solving and reasoning.',
    above:  'Strong number skills and mathematical thinking ahead of most same-age kids. Fraction fluency and word problems are the usual next lever.',
    average: 'Steady maths foundations, on par with most same-age kids. Targeted work on the one or two topics where marks are dropped pays off quickly.',
    below:  'Maths is behind most same-age kids right now. Fraction and decimal fluency are usually the highest-impact focus area.',
  },
  verbal_reasoning: {
    exceptional: 'Verbal logic is outstanding compared to same-age kids — one of the highest-weighted skills in 11+ and grammar school selection.',
    above:  'Sharp verbal reasoning, ahead of most same-age kids — a strong predictor of 11+ and selective school success.',
    average: 'Good verbal reasoning base, in line with same-age kids. Practice with analogy and sequence question types tends to lift scores fast.',
    below:  'Verbal reasoning is behind most same-age kids right now, but responds well to practice — four weeks of targeted work typically shifts scores noticeably.',
  },
  nonverbal_reasoning: {
    exceptional: 'Pattern recognition is exceptional — a rare spatial intelligence score amongst same-age kids.',
    above:  'Strong spatial and pattern skills compared to same-age kids — also a solid foundation for STEM subjects as they progress.',
    average: 'Solid non-verbal reasoning, on par with most same-age kids. This subject improves fastest with repetition of question types.',
    below:  'Non-verbal reasoning is behind most same-age kids right now, but it responds most quickly to practice — improvement within weeks is common.',
  },
}

function getSubjectInsight(subject: Subject, score: number): string {
  const band = score >= 130 ? 'exceptional' : score >= 115 ? 'above' : score >= 95 ? 'average' : 'below'
  return (SUBJECT_INSIGHTS[subject] ?? SUBJECT_INSIGHTS.english)[band]
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface SessionState {
  current_subject: Subject
  subject_index: number
  question_index: number
  difficulty_level: number
  completed_subjects: Subject[]
}

interface BreakScore {
  completedSubject: Subject
  standardized: number
  percentage: number
}

type FetchResult =
  | { type: 'question'; question: Question; session: SessionState }
  | { type: 'break'; nextSubject: Subject; score: BreakScore | null }
  | { type: 'complete' }
  | { type: 'error'; message: string }

// ── Main component ────────────────────────────────────────────────────────────

export default function AssessmentClient({ assessmentId }: { assessmentId: string }) {
  const router = useRouter()

  function guestHeaders(): HeadersInit {
    const token = typeof window !== 'undefined'
      ? localStorage.getItem(`guestToken_${assessmentId}`) ?? undefined
      : undefined
    return token ? { 'X-Guest-Token': token } : {}
  }


  type Phase = 'warmup' | 'loading' | 'question' | 'break' | 'error'
  const [phase, setPhase]               = useState<Phase>('warmup')
  const [warmupCount, setWarmupCount]   = useState(4)
  const [question, setQuestion]         = useState<Question | null>(null)
  const [session, setSession]           = useState<SessionState | null>(null)
  const [subjectBreak, setSubjectBreak] = useState<Subject | null>(null)
  const [breakScore, setBreakScore]     = useState<BreakScore | null>(null)
  const [error, setError]               = useState('')
  const [copiedLink, setCopiedLink]     = useState(false)

  // Section elapsed timer
  const [sectionTimeElapsed, setSectionTimeElapsed] = useState(0)
  const prevSubjectRef = useRef<string | null>(null)

  // Reset elapsed timer when subject changes
  useEffect(() => {
    if (!session) return
    if (prevSubjectRef.current !== session.current_subject) {
      prevSubjectRef.current = session.current_subject
      setSectionTimeElapsed(0)
    }
  }, [session?.current_subject])

  // Count up elapsed time while actively answering (question + loading phases)
  useEffect(() => {
    if (phase !== 'question' && phase !== 'loading') return
    const interval = setInterval(() => {
      setSectionTimeElapsed((t) => t + 1)
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
      setBreakScore(result.score)
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
        // Server classifies the failure; only transient "overloaded" is worth retrying.
        if (data.code === 'overloaded' && retries > 0) {
          await new Promise((r) => setTimeout(r, 3000))
          return doFetch(retries - 1)
        }
        return { type: 'error', message: data.error || 'Failed to load question' }
      }
      if (data.completed) return { type: 'complete' }
      if (data.subject_break) {
        const score: BreakScore | null = data.completed_subject
          ? {
              completedSubject: data.completed_subject,
              standardized: data.subject_standardized,
              percentage: data.subject_percentage,
            }
          : null
        return { type: 'break', nextSubject: data.next_subject, score }
      }
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
    // The API advances to the next subject before the break, so the next
    // subject's index equals the number of subjects already completed.
    const doneCount  = SUBJECTS.indexOf(subjectBreak)
    const total      = SUBJECTS.length
    const remaining  = total - doneCount
    const isLastLeg  = remaining === 1
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-6 sm:p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-1 tracking-tight">
              {doneCount} of {total} subjects done
            </h2>
            <p className="text-[#6e6e73] text-sm">
              {isLastLeg
                ? 'Just one subject to go — finish it to unlock the full report.'
                : `Great progress. Next up: ${SUBJECT_LABELS[subjectBreak]}.`}
            </p>
          </div>

          {/* Subject result teaser */}
          {breakScore && (() => {
            const pct = standardizedToPercentile(breakScore.standardized)
            const topPct = Math.max(1, 100 - pct)
            const insight = getSubjectInsight(breakScore.completedSubject, breakScore.standardized)
            const color = getScoreColor(breakScore.standardized)
            return (
              <div className="rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] p-5 text-left space-y-3">
                <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider">
                  {SUBJECT_LABELS[breakScore.completedSubject]} result
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold tabular-nums" style={{ color }}>
                      {breakScore.standardized}
                    </span>
                    <span className="text-sm font-semibold" style={{ color }}>
                      {getScoreLabel(breakScore.standardized)}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-[#1d1d1f]">Top {topPct}%</p>
                    <p className="text-[11px] text-[#6e6e73]">amongst same-age kids</p>
                  </div>
                </div>
                <p className="text-sm text-[#3d3d3f] leading-relaxed">{insight}</p>
              </div>
            )
          })()}

          {/* Subject progress segments */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <div
                key={i}
                className="flex-1 h-2 rounded-full transition-colors"
                style={{ backgroundColor: i < doneCount ? '#22C55E' : '#E5E7EB' }}
              />
            ))}
          </div>

          <div
            className="rounded-2xl p-4 text-sm"
            style={isLastLeg
              ? { backgroundColor: '#ecfdf5', color: '#047857' }
              : { backgroundColor: '#f5f5f7', color: '#6e6e73' }}
          >
            {isLastLeg
              ? 'Your full standardised report and AI recommendations unlock the moment you finish.'
              : 'Your progress is saved — you can pause and come back anytime.'}
          </div>

          <Button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg" onClick={fetchNextQuestion}>
            {isLastLeg ? `Finish with ${SUBJECT_LABELS[subjectBreak]}` : `Continue to ${SUBJECT_LABELS[subjectBreak]}`}
          </Button>

          {!isLastLeg && (
            <button
              onClick={async () => {
                const isGuest = typeof window !== 'undefined' && localStorage.getItem(`guestToken_${assessmentId}`)
                if (isGuest) {
                  await navigator.clipboard.writeText(window.location.href)
                  setCopiedLink(true)
                  setTimeout(() => setCopiedLink(false), 3000)
                } else {
                  router.push('/dashboard')
                }
              }}
              className="w-full text-sm text-[#6e6e73] hover:text-[#1d1d1f] py-2 transition-colors"
            >
              {copiedLink ? '✓ Link copied — paste it to resume later' : 'Finish another time →'}
            </button>
          )}
        </div>
      </div>
    )
  }

  if (!question || !session) return null

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto px-4 py-5 sm:py-8 space-y-4">
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-5">
          <ProgressBar
            subjectIndex={session.subject_index}
            questionIndex={session.question_index}
            currentSubject={session.current_subject}
            completedSubjects={session.completed_subjects}
          />
          {/* Section elapsed time */}
          <div className="mt-3 pt-3 border-t border-[#f5f5f7] flex items-center justify-between">
            <span className="text-xs text-[#6e6e73]">Section time</span>
            <span className="text-xs text-[#6e6e73] tabular-nums">
              {formatElapsed(sectionTimeElapsed)}
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
