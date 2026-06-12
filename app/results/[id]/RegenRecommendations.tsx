'use client'

import { useState } from 'react'
import { SUBJECT_LABELS, Subject } from '@/types'
import type { Recommendation } from '@/lib/claude/recommendations'

interface Props {
  assessmentId: string
  initialRecs?: Recommendation[] | null
}

export default function RegenRecommendations({ assessmentId, initialRecs }: Props) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recs, setRecs] = useState<Recommendation[] | null>(null)

  async function handleGenerate() {
    // If already stored, reveal without an API call
    if (initialRecs && initialRecs.length > 0) {
      setRecs(initialRecs)
      return
    }
    setLoading(true)
    setError('')
    const res = await fetch(`/api/assessments/${assessmentId}/recommendations`, { method: 'POST' })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error ?? 'Failed to generate')
      setLoading(false)
      return
    }
    setRecs(data.recommendations)
    setLoading(false)
  }

  if (recs && recs.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {recs.map((rec, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold flex-shrink-0">
                {i + 1}
              </span>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                {SUBJECT_LABELS[rec.subject as Subject] ?? rec.subject}
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{rec.tip}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-gray-800">
          AI-powered personalised study recommendations
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          Based on your child&apos;s scores across all four subjects
        </p>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="flex-shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
          </>
        ) : (
          <>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Generate recommendations
          </>
        )}
      </button>
    </div>
  )
}
