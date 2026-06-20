'use client'

interface FunnelStep {
  label: string
  count: number
  color: string
}

function pct(n: number, total: number) {
  if (total === 0) return '—'
  return Math.round((n / total) * 100) + '%'
}

export default function FunnelChart({ steps }: { steps: FunnelStep[] }) {
  const max = steps[0]?.count ?? 0

  return (
    <div className="space-y-3">
      {steps.map((step, i) => {
        const barPct = max > 0 ? (step.count / max) * 100 : 0
        const convPct = i === 0 ? null : pct(step.count, steps[i - 1].count)
        return (
          <div key={step.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-[#1d1d1f]">{step.label}</span>
              <div className="flex items-center gap-2">
                {convPct && (
                  <span className="text-[10px] font-semibold text-[#6e6e73] bg-[#f5f5f7] px-2 py-0.5 rounded-full">
                    {convPct} of prev
                  </span>
                )}
                <span className="text-xs font-bold text-[#1d1d1f] min-w-[2.5rem] text-right tabular-nums">
                  {step.count.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="h-2 bg-[#f5f5f7] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${barPct}%`, backgroundColor: step.color }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
