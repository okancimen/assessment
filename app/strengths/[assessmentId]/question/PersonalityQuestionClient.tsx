'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { PQuestion } from '@/lib/personality-questions'
import { getPersonalityI18n } from '@/lib/personality-i18n'

function CircleRating({
  value,
  onChange,
  labels,
}: {
  value: number | null
  onChange: (v: number) => void
  labels: [string, string, string, string, string]
}) {
  const [hovered, setHovered] = useState<number | null>(null)
  const active = hovered ?? value

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3 sm:gap-4">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(null)}
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all ${
              active !== null && n <= active
                ? 'bg-[#4F46E5] border-[#4F46E5] text-white scale-105'
                : 'bg-white border-[#d2d2d7] text-[#6e6e73] hover:border-[#4F46E5] hover:text-[#4F46E5]'
            }`}
            aria-label={`${n} — ${labels[n - 1]}`}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between w-full max-w-[280px] sm:max-w-[320px]">
        <span className="text-[10px] text-[#6e6e73]">{labels[0]}</span>
        <span className="text-[10px] text-[#6e6e73]">{labels[4]}</span>
      </div>
    </div>
  )
}

export default function PersonalityQuestionClient({
  assessmentId,
  childName,
  questions,
  savedAnswers,
  locale,
}: {
  assessmentId: string
  childName: string
  questions: PQuestion[]
  savedAnswers: Record<string, number>
  locale: string
}) {
  const t = getPersonalityI18n(locale)
  const router = useRouter()
  const [answers, setAnswers] = useState<Record<string, number>>(savedAnswers)
  const [index, setIndex] = useState(() => {
    // Resume at first unanswered question
    const firstUnanswered = questions.findIndex((q) => !(q.key in savedAnswers))
    return firstUnanswered === -1 ? questions.length - 1 : firstUnanswered
  })
  const [submitting, setSubmitting] = useState(false)
  const [saving, setSaving] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const current = questions[index]
  const currentScore = answers[current.key] ?? null
  const isLast = index === questions.length - 1
  const answeredCount = Object.keys(answers).length
  const pct = Math.round((answeredCount / questions.length) * 100)

  async function saveAnswer(questionKey: string, score: number) {
    setSaving(true)
    await fetch(`/api/personality/${assessmentId}/answer`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionKey, score }),
    }).catch(() => {})
    setSaving(false)
  }

  function handleRate(score: number) {
    const newAnswers = { ...answers, [current.key]: score }
    setAnswers(newAnswers)
    saveAnswer(current.key, score)
  }

  function handleNext() {
    if (!isLast) setIndex((i) => i + 1)
  }

  function handleBack() {
    if (index > 0) setIndex((i) => i - 1)
  }

  async function handleSubmit() {
    setSubmitting(true)
    setSubmitError(null)
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 90_000)
    try {
      const res = await fetch(`/api/personality/${assessmentId}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale }),
        signal: controller.signal,
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setSubmitError(data.error ?? 'Something went wrong. Please try again.')
        return
      }
      router.push(`/strengths/${assessmentId}/results?locale=${locale}`)
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // Timed out — results may still be saved, go check
        router.push(`/strengths/${assessmentId}/results?locale=${locale}`)
      } else {
        setSubmitError('Network error. Please try again.')
      }
    } finally {
      clearTimeout(timeout)
      setSubmitting(false)
    }
  }

  const allAnswered = questions.every((q) => q.key in answers)

  return (
    <div className="min-h-screen bg-[#f5f5f7]" dir={t.dir}>
      <div className="max-w-xl mx-auto px-4 py-8 space-y-4">

        {/* Progress */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-[#6e6e73]">
            <span className="font-medium text-[#1d1d1f]">{t.progressTitle(childName)}</span>
            <span className="tabular-nums">{t.questionOf(index + 1, questions.length)}</span>
          </div>
          <div className="h-1.5 bg-[#f5f5f7] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F46E5] rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <p className="text-[10px] text-[#6e6e73]">
            {t.answeredOf(answeredCount, questions.length)}
            {saving && <span className="ml-2 opacity-60">· {t.savingText}</span>}
          </p>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-8 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-semibold text-[#4F46E5] uppercase tracking-wide">
              {t.traitLabels[current.trait]}
            </span>
            <p className="text-lg font-semibold text-[#1d1d1f] leading-snug">{current.text.replace(t.myChild, childName)}</p>

          </div>

          <CircleRating
            value={currentScore}
            onChange={handleRate}
            labels={t.ratingLabels}
          />

          {/* Navigation */}
          <div className="flex items-center gap-3 pt-2">
            {index > 0 && (
              <button
                onClick={handleBack}
                className="px-5 py-2.5 rounded-full border border-[#d2d2d7] text-sm font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                {t.backBtn}
              </button>
            )}
            <div className="flex-1" />
            {isLast ? (
              <div className="flex flex-col items-end gap-2">
                {submitError && (
                  <p className="text-xs text-red-500 text-right max-w-xs">{submitError}</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={!allAnswered || submitting}
                  className="px-6 py-2.5 rounded-full bg-[#4F46E5] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors disabled:opacity-50"
                >
                  {submitting ? t.generatingText : t.submitBtn}
                </button>
              </div>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentScore === null}
                className="px-6 py-2.5 rounded-full bg-[#4F46E5] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors disabled:opacity-50"
              >
                {t.nextBtn}
              </button>
            )}
          </div>
        </div>

        {/* Quick nav dots */}
        <div className="flex flex-wrap justify-center gap-1 px-2">
          {questions.map((q, i) => (
            <button
              key={q.key}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index
                  ? 'bg-[#4F46E5]'
                  : q.key in answers
                  ? 'bg-[#22C55E]'
                  : 'bg-[#d2d2d7]'
              }`}
              title={`Question ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
