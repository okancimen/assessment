'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'

export default function StartAssessmentButton({ childId }: { childId: string }) {
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
    <Button onClick={handleStart} loading={loading}>
      Start new assessment
    </Button>
  )
}
