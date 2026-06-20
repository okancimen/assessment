'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

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
        className="flex-1 text-center px-6 py-3 rounded-full border border-[#d2d2d7] text-sm font-medium text-[#6e6e73] hover:bg-[#f5f5f7] hover:text-[#1d1d1f] transition-colors"
      >
        Back to dashboard
      </Link>
      <Link
        href={`/assessment/${assessmentId}/question`}
        className="flex-1 text-center bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
        onClick={() => trackEvent('assessment_begin', { assessment_id: assessmentId })}
      >
        Begin assessment
      </Link>
    </div>
  )
}
