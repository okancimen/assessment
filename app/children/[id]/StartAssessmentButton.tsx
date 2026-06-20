'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

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

  async function handleStart() {
    setLoading(true)
    const res = await fetch('/api/assessments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ child_id: childId }),
    })

    if (!res.ok) {
      setLoading(false)
      return
    }

    const assessment = await res.json()
    router.push(`/assessment/${assessment.id}/start`)
  }

  return (
    <Button onClick={handleStart} loading={loading} size={size} className={`bg-[#4F46E5] hover:bg-[#4338CA] text-white ${className ?? ''}`}>
      Start assessment
    </Button>
  )
}
