'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function TrackResultsView({ assessmentId, standardizedScore }: { assessmentId: string; standardizedScore: number }) {
  useEffect(() => {
    trackEvent('results_view', { assessment_id: assessmentId, standardized_score: standardizedScore })
  }, [assessmentId, standardizedScore])

  return null
}
