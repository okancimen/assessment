'use client'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

export interface DailyPoint {
  date: string
  label: string
  users: number
  started: number
  completed: number
}

export default function GrowthLineChart({ data }: { data: DailyPoint[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
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
          formatter={(v) => [v, 'New users']}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#4F46E5"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4, fill: '#4F46E5' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
