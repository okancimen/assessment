'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import type { DailyPoint } from './GrowthLineChart'

export default function AssessmentsBarChart({ data }: { data: DailyPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }} barCategoryGap="30%">
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 10, fill: '#6e6e73' }}
          axisLine={false}
          tickLine={false}
          interval="preserveStartEnd"
        />
        <YAxis
          tick={{ fontSize: 10, fill: '#6e6e73' }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #d2d2d7', boxShadow: 'none' }}
          labelStyle={{ color: '#1d1d1f', fontWeight: 600 }}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: '#6e6e73', paddingTop: 8 }}
          formatter={(v) => v === 'started' ? 'Started' : 'Completed'}
        />
        <Bar dataKey="started" fill="#7C3AED" radius={[3, 3, 0, 0]} />
        <Bar dataKey="completed" fill="#22C55E" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
