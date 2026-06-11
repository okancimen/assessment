'use client'

import { useState } from 'react'

export default function RegenRecommendations({ assessmentId }: { assessmentId: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleRegen() {
    setLoading(true)
    setError('')
    const res = await fetch(`/api/assessments/${assessmentId}/recommendations`, { method: 'POST' })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error ?? 'Failed')
      setLoading(false)
      return
    }
    window.location.reload()
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
        className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors disabled:opacity-60"
      >
        {loading ? 'Generating…' : 'Generate now'}
      </button>
    </div>
  )
}
