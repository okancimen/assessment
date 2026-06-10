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
            <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Computing results...</h2>
              <p className="text-gray-500 text-sm">
                Calculating {childName}&apos;s standardized scores and topic breakdown.
              </p>
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
