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
  avg?: number | null
  fullMark: number
}

function CustomTooltip({ active, payload, scoreLabel, avgLabel }: {
  active?: boolean
  payload?: { name: string; value: number; color: string }[]
  scoreLabel: string
  avgLabel: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-[#d2d2d7] rounded-2xl px-4 py-3 shadow-sm text-xs space-y-1.5">
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: entry.color }} />
          <span className="text-[#6e6e73]">{entry.name === 'score' ? scoreLabel : avgLabel}</span>
          <span className="font-semibold text-[#1d1d1f] ml-auto pl-3">{Number(entry.value).toFixed(1)}/5</span>
        </div>
      ))}
    </div>
  )
}

export default function StrengthsRadarChart({
  data,
  showAvg = false,
  scoreLabel = 'Score',
  avgLabel = 'Average',
}: {
  data: DataPoint[]
  showAvg?: boolean
  scoreLabel?: string
  avgLabel?: string
}) {
  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={360}>
        <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis
            dataKey="trait"
            tick={{ fontSize: 10, fill: '#6e6e73', fontWeight: 500 }}
          />
          {showAvg && (
            <Radar
              name="avg"
              dataKey="avg"
              stroke="#94a3b8"
              fill="#94a3b8"
              fillOpacity={0.06}
              strokeWidth={1.5}
              strokeDasharray="5 3"
              dot={false}
            />
          )}
          <Radar
            name="score"
            dataKey="score"
            stroke="#4F46E5"
            fill="#4F46E5"
            fillOpacity={0.18}
            strokeWidth={2}
            dot={{ r: 3, fill: '#4F46E5' }}
          />
          <Tooltip
            content={<CustomTooltip scoreLabel={scoreLabel} avgLabel={avgLabel} />}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Legend */}
      {showAvg && (
        <div className="flex items-center justify-center gap-6 text-xs text-[#6e6e73]">
          <div className="flex items-center gap-2">
            <span className="block w-5 h-0.5 bg-[#4F46E5] rounded-full" />
            <span>{scoreLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="20" height="2" viewBox="0 0 20 2" className="flex-shrink-0">
              <line x1="0" y1="1" x2="20" y2="1" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" />
            </svg>
            <span>{avgLabel}</span>
          </div>
        </div>
      )}
    </div>
  )
}
