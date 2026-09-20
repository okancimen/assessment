'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

export default function StartAssessmentButton({
  childId,
  size = 'md',
  className,
}: {
  childId: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleStart() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ child_id: childId }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      const assessment = await res.json()
      trackEvent('assessment_start', { child_id: childId, assessment_id: assessment.id })
      router.push(`/assessment/${assessment.id}/start`)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Button onClick={handleStart} loading={loading} size={size} className={`bg-[#4F46E5] hover:bg-[#4338CA] text-white ${className ?? ''}`}>
        Start assessment
      </Button>
      {error && (
        <p className="text-xs text-red-600 text-center">{error}</p>
      )}
    </div>
  )
}
