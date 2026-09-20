'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ForceCompleteButton({ assessmentId }: { assessmentId: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  async function handleForceComplete() {
    if (!confirm('Force-complete this assessment? This will compute and save results from the answered questions.')) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/assessment/${assessmentId}/complete`, { method: 'POST' })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Failed')
        setLoading(false)
        return
      }
      setDone(true)
      router.refresh()
    } catch {
      setError('Network error')
      setLoading(false)
    }
  }

  if (done) return <span className="text-[10px] text-emerald-600 font-semibold">Completed ✓</span>

  return (
    <div className="flex flex-col items-end gap-0.5">
      <button
        onClick={handleForceComplete}
        disabled={loading}
        className="text-[10px] text-amber-600 font-semibold hover:underline disabled:opacity-50"
      >
        {loading ? 'Processing…' : 'Force complete'}
      </button>
      {error && <span className="text-[9px] text-red-500">{error}</span>}
    </div>
  )
}
