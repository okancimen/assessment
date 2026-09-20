'use client'

import dynamic from 'next/dynamic'
import type { DailyPoint } from './GrowthLineChart'

interface FunnelStep { label: string; count: number; color: string }

const GrowthLineChart = dynamic(() => import('./GrowthLineChart'), { ssr: false })
const AssessmentsBarChart = dynamic(() => import('./AssessmentsBarChart'), { ssr: false })
const FunnelChart = dynamic(() => import('./FunnelChart'), { ssr: false })

export function AdminGrowthChart({ data }: { data: DailyPoint[] }) {
  return <GrowthLineChart data={data} />
}

export function AdminAssessmentsChart({ data }: { data: DailyPoint[] }) {
  return <AssessmentsBarChart data={data} />
}

export function AdminFunnelChart({ steps }: { steps: FunnelStep[] }) {
  return <FunnelChart steps={steps} />
}
