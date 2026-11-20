'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'

interface CompleteClientProps {
  assessmentId: string
  childName: string
}

export default function CompleteClient({ assessmentId, childName }: CompleteClientProps) {
  const router = useRouter()
  const [phase, setPhase] = useState<'computing' | 'done' | 'error'>('computing')
  const [error, setError] = useState('')
  const [guestToken, setGuestToken] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(6)

  useEffect(() => {
    async function finalize() {
      const token = typeof window !== 'undefined'
        ? localStorage.getItem(`guestToken_${assessmentId}`) ?? undefined
        : undefined

      const res = await fetch(`/api/assessment/${assessmentId}/complete`, {
        method: 'POST',
        headers: token ? { 'X-Guest-Token': token } : {},
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Failed to compute results')
        setPhase('error')
        return
      }

      const data = await res.json()
      trackEvent('assessment_complete', { assessment_id: assessmentId, standardized_score: data.standardized_score })

      if (token) {
        setGuestToken(token)
        setPhase('done')
      } else {
        router.push(`/assessment/${assessmentId}/results`)
      }
    }

    finalize()
  }, [assessmentId, router])

  // Auto-redirect countdown for guests
  useEffect(() => {
    if (phase !== 'done') return
    if (countdown <= 0) {
      router.push(`/assessment/${assessmentId}/results`)
      return
    }
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, countdown, assessmentId, router])

  const claimUrl = guestToken
    ? `/auth/register?redirect=${encodeURIComponent(`/api/assessment/claim?assessmentId=${assessmentId}&token=${guestToken}`)}`
    : '/auth/register'

  if (phase === 'error') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-[#d2d2d7] p-8 text-center space-y-5">
          <div className="text-red-600 text-sm">{error}</div>
          <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white" onClick={() => router.push('/dashboard')}>Back to dashboard</Button>
        </div>
      </div>
    )
  }

  if (phase === 'computing') {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8 text-center space-y-6">
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
        </div>
      </div>
    )
  }

  // phase === 'done' — guest celebration + registration CTA
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-6 sm:p-8 space-y-6">
        {/* Celebration */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1d1d1f] tracking-tight">{childName} finished all 4 subjects!</h2>
            <p className="text-sm text-[#6e6e73] mt-1">The full academic report is ready.</p>
          </div>
        </div>

        {/* Registration pitch */}
        <div className="rounded-2xl bg-[#eef2ff] border border-[#c7d2fe] p-5 space-y-3">
          <p className="text-sm font-semibold text-[#1d1d1f]">Save {childName}&apos;s results permanently</p>
          <ul className="space-y-1.5">
            {[
              'Topic-by-topic breakdown — exact weak areas per subject',
              'AI action plan — specific next steps for each subject',
              'Track progress with a retest in 3 months',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#3730a3]">
                <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href={claimUrl}
            className="block w-full text-sm font-semibold text-center bg-[#4F46E5] text-white rounded-xl py-3.5 hover:bg-[#4338CA] transition-colors"
          >
            Create free account →
          </Link>
        </div>

        {/* See results with countdown */}
        <button
          onClick={() => router.push(`/assessment/${assessmentId}/results`)}
          className="w-full text-sm text-[#6e6e73] hover:text-[#1d1d1f] py-2 transition-colors"
        >
          See results now{countdown > 0 ? ` (${countdown})` : ''}
        </button>
      </div>
    </div>
  )
}
