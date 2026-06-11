'use client'

import { useState } from 'react'
import { SUBJECT_LABELS, Subject } from '@/types'
import type { Recommendation } from '@/lib/claude/recommendations'

export default function RegenRecommendations({ assessmentId }: { assessmentId: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [recs, setRecs] = useState<Recommendation[] | null>(null)

  async function handleRegen() {
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

  // After generation: render recommendations inline (no reload needed)
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
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-amber-800">Personalised recommendations not yet generated</p>
        {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
      </div>
      <button
        onClick={handleRegen}
        disabled={loading}
        className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors disabled:opacity-60 min-w-[120px]"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:0ms]" />
            <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:150ms]" />
            <span className="w-1 h-1 rounded-full bg-white animate-bounce [animation-delay:300ms]" />
          </span>
        ) : 'Generate now'}
      </button>
    </div>
  )
}
