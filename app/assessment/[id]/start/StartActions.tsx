'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function StartActions({ assessmentId }: { assessmentId: string }) {
  const router = useRouter()

  // Kick off first-question prefetch as soon as user lands on the start page.
  // By the time they finish reading and click "Begin", the question is ready.
  useEffect(() => {
    fetch(`/api/assessments/${assessmentId}/prefetch`, { method: 'POST' }).catch(() => {})
    // Preload the question page route in the background
    router.prefetch(`/assessment/${assessmentId}/question`)
  }, [assessmentId, router])

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href="/dashboard"
        className="flex-1 text-center px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
      >
        Back to dashboard
      </Link>
      <Link
        href={`/assessment/${assessmentId}/question`}
        className="flex-1 text-center bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
      >
        Begin assessment
      </Link>
    </div>
  )
}
