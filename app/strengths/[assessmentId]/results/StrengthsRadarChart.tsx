'use client'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

interface DataPoint {
  trait: string
  score: number
  fullMark: number
}

export default function StrengthsRadarChart({ data }: { data: DataPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={360}>
      <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis
          dataKey="trait"
          tick={{ fontSize: 10, fill: '#6e6e73', fontWeight: 500 }}
        />
        <Radar
          name="Score"
          dataKey="score"
          stroke="#4F46E5"
          fill="#4F46E5"
          fillOpacity={0.18}
          strokeWidth={2}
          dot={{ r: 3, fill: '#4F46E5' }}
        />
        <Tooltip
          formatter={(value) => [`${value}/5`, 'Score']}
          contentStyle={{ borderRadius: 12, border: '1px solid #d2d2d7', fontSize: 12 }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
