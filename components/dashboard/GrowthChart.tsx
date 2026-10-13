'use client'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, ResponsiveContainer, Legend,
} from 'recharts'

export interface GrowthPoint {
  date: string            // short label, e.g. "12 Mar"
  overall: number
  english?: number | null
  mathematics?: number | null
  verbal_reasoning?: number | null
  nonverbal_reasoning?: number | null
}

const SERIES: { key: keyof GrowthPoint; label: string; color: string; width: number }[] = [
  { key: 'overall', label: 'Overall', color: '#4F46E5', width: 3 },
  { key: 'english', label: 'English', color: '#0D9488', width: 1.5 },
  { key: 'mathematics', label: 'Maths', color: '#EA580C', width: 1.5 },
  { key: 'verbal_reasoning', label: 'Verbal', color: '#7C3AED', width: 1.5 },
  { key: 'nonverbal_reasoning', label: 'Non-Verbal', color: '#DB2777', width: 1.5 },
]

export default function GrowthChart({ data }: { data: GrowthPoint[] }) {
  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
      <h2 className="text-base font-semibold text-[#1d1d1f] mb-1">Progress over time</h2>
      <p className="text-xs text-[#6e6e73] mb-4">Standardised score (mean 100) across each completed assessment.</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 8, right: 12, bottom: 4, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={{ stroke: '#e5e7eb' }} />
          <YAxis domain={[70, 145]} ticks={[70, 85, 100, 115, 130, 145]} tick={{ fontSize: 11, fill: '#6e6e73' }} tickLine={false} axisLine={false} width={34} />
          <ReferenceLine y={100} stroke="#94a3b8" strokeDasharray="4 3" label={{ value: 'Avg 100', position: 'right', fontSize: 9, fill: '#94a3b8' }} />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: '1px solid #d2d2d7', fontSize: 12 }}
            labelStyle={{ color: '#1d1d1f', fontWeight: 600 }}
          />
          <Legend wrapperStyle={{ fontSize: 11 }} iconType="plainline" />
          {SERIES.map((s) => (
            <Line
              key={s.key}
              type="monotone"
              dataKey={s.key}
              name={s.label}
              stroke={s.color}
              strokeWidth={s.width}
              dot={{ r: s.key === 'overall' ? 3 : 2 }}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
