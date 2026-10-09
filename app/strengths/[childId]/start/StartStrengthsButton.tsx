'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function StartStrengthsButton({
  childId,
  locale,
  label,
}: {
  childId: string
  locale: string
  label: string
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleStart() {
    setLoading(true)
    try {
      const res = await fetch('/api/personality/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ childId }),
      })
      const data = await res.json()
      if (data.assessmentId) {
        router.push(`/strengths/${data.assessmentId}/question?locale=${locale}`)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleStart}
      disabled={loading}
      className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold py-3.5 rounded-full transition-colors disabled:opacity-60 text-base"
    >
      {loading ? 'Starting…' : label}
    </button>
  )
}
