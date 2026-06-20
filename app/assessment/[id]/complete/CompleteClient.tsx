'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

interface CompleteClientProps {
  assessmentId: string
  childName: string
}

export default function CompleteClient({ assessmentId, childName }: CompleteClientProps) {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function finalize() {
      setSubmitting(true)
      const res = await fetch(`/api/assessments/${assessmentId}/complete`, {
        method: 'POST',
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to compute results')
        setSubmitting(false)
        return
      }

      const data = await res.json()
      trackEvent('assessment_complete', { assessment_id: assessmentId, standardized_score: data.standardized_score })
      router.push(`/results/${assessmentId}`)
    }

    finalize()
  }, [assessmentId, router])

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8 text-center space-y-6">
        {submitting && !error ? (
          <>
            <div className="relative w-16 h-16 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-[#e0e7ff]" />
              <div className="absolute inset-0 rounded-full border-4 border-[#4F46E5] border-t-transparent animate-spin" />
              <div className="absolute inset-2 rounded-full border-2 border-[#a5b4fc] border-b-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-[#1d1d1f] font-semibold text-base tracking-tight">Computing your results</h2>
              <p className="text-[#6e6e73] text-sm leading-relaxed">
                Applying Item Response Theory to {childName}&apos;s answers<br />
                and calculating standardised scores across all subjects.
              </p>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] animate-bounce [animation-delay:300ms]" />
            </div>
          </>
        ) : (
          <>
            <div className="text-red-600 text-sm">{error}</div>
            <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white" onClick={() => router.push('/dashboard')}>Back to dashboard</Button>
          </>
        )}
      </div>
    </div>
  )
}
