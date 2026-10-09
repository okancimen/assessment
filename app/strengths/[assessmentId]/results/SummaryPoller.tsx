'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SummaryPoller({ hasSummary }: { hasSummary: boolean }) {
  const router = useRouter()
  useEffect(() => {
    if (hasSummary) return
    const timer = setInterval(() => router.refresh(), 4000)
    return () => clearInterval(timer)
  }, [hasSummary, router])
  return null
}
