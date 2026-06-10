'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

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

      const { result_id } = await res.json()
      router.push(`/results/${assessmentId}`)
    }

    finalize()
  }, [assessmentId, router])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center space-y-6">
        {submitting && !error ? (
          <>
            <div className="relative w-16 h-16 mx-auto">
              <div className="absolute inset-0 rounded-full border-4 border-indigo-100" />
              <div className="absolute inset-0 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin" />
              <div className="absolute inset-2 rounded-full border-2 border-indigo-300 border-b-transparent animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-gray-800 font-semibold text-base">Computing your results</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Applying Item Response Theory to {childName}&apos;s answers<br />
                and calculating standardised scores across all subjects.
              </p>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:300ms]" />
            </div>
          </>
        ) : (
          <>
            <div className="text-red-600">{error}</div>
            <Button onClick={() => router.push('/dashboard')}>Back to dashboard</Button>
          </>
        )}
      </div>
    </div>
  )
}
