interface TraitDelta {
  trait: string
  label: string
  score: number
  avg: number
  delta: number
}

function DeltaBar({ score, avg }: { score: number; avg: number }) {
  const scorePct = Math.min((score / 5) * 100, 100)
  const avgPct   = Math.min((avg   / 5) * 100, 100)
  const above    = score >= avg

  return (
    <div className="relative h-2 bg-[#f0f0f2] rounded-full overflow-visible flex-1">
      {/* Child's fill */}
      <div
        className={`absolute inset-y-0 left-0 rounded-full transition-all ${above ? 'bg-emerald-400' : 'bg-rose-400'}`}
        style={{ width: `${scorePct}%` }}
      />
      {/* Peer average marker — a small notch */}
      <div
        className="absolute -top-1 -bottom-1 w-0.5 bg-[#94a3b8] rounded-full z-10"
        style={{ left: `${avgPct}%` }}
      />
    </div>
  )
}

function TraitRow({ item, peerAvgLabel, dir }: { item: TraitDelta; peerAvgLabel: string; dir: 'ltr' | 'rtl' }) {
  const above   = item.delta >= 0
  const sign    = above ? '+' : ''
  const badgeColor = above
    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
    : 'bg-rose-50   text-rose-700   border border-rose-200'

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-[#f5f5f7] last:border-0">
      <span className="text-xs font-medium text-[#1d1d1f] w-32 flex-shrink-0 truncate">{item.label}</span>

      <DeltaBar score={item.score} avg={item.avg} />

      <div className={`flex items-center gap-1.5 flex-shrink-0 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
        <span className="text-[10px] text-[#6e6e73] tabular-nums hidden sm:block">
          {item.score.toFixed(1)} / {item.avg.toFixed(1)}
        </span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tabular-nums ${badgeColor}`}>
          {sign}{item.delta.toFixed(1)}
        </span>
      </div>
    </div>
  )
}

export default function PeerComparison({
  childName,
  traitScores,
  peerAvgScores,
  peerCount,
  ageRange,
  traitLabels,
  dir,
  t,
}: {
  childName: string
  traitScores: Record<string, number>
  peerAvgScores: Record<string, number>
  peerCount: number
  ageRange: string
  traitLabels: Record<string, string>
  dir: 'ltr' | 'rtl'
  t: {
    peerTitle: (name: string) => string
    peerSubtitle: (count: number, range: string) => string
    peerAbove: string
    peerBelow: string
    peerAvgLabel: string
  }
}) {
  const deltas: TraitDelta[] = Object.entries(traitScores)
    .filter(([trait]) => peerAvgScores[trait] != null)
    .map(([trait, score]) => ({
      trait,
      label: traitLabels[trait] ?? trait,
      score,
      avg:   peerAvgScores[trait],
      delta: score - peerAvgScores[trait],
    }))
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))

  const above = deltas.filter((d) => d.delta >=  0.25).slice(0, 5)
  const below = deltas.filter((d) => d.delta <= -0.25).slice(0, 5)

  if (above.length === 0 && below.length === 0) return null

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-5" dir={dir}>
      {/* Header */}
      <div>
        <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.peerTitle(childName)}</h2>
        <p className="text-xs text-[#6e6e73] mt-0.5">{t.peerSubtitle(peerCount, ageRange)}</p>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 text-[10px] text-[#6e6e73]">
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-1.5 rounded-full bg-emerald-400 inline-block" />
          <span>{childName}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-0.5 h-3 rounded-full bg-[#94a3b8] inline-block" />
          <span>{t.peerAvgLabel}</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
        {/* Above peers */}
        {above.length > 0 && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 mb-1">{t.peerAbove}</p>
            {above.map((item) => (
              <TraitRow key={item.trait} item={item} peerAvgLabel={t.peerAvgLabel} dir={dir} />
            ))}
          </div>
        )}

        {/* Below peers */}
        {below.length > 0 && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wide text-rose-500 mb-1">{t.peerBelow}</p>
            {below.map((item) => (
              <TraitRow key={item.trait} item={item} peerAvgLabel={t.peerAvgLabel} dir={dir} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
