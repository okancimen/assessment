// Server component — all maths run at build time, pure static SVG output

interface Subject {
  score: number
  label: string
  shortLabel: string
  color: string
  dotColor: string
}

const SAMPLE_SUBJECTS: Subject[] = [
  { score: 103, label: 'English',           shortLabel: 'EN', color: '#3b82f6', dotColor: '#2563eb' },
  { score: 119, label: 'Mathematics',       shortLabel: 'MA', color: '#8b5cf6', dotColor: '#7c3aed' },
  { score: 113, label: 'Verbal Reasoning',  shortLabel: 'VR', color: '#10b981', dotColor: '#059669' },
  { score:  91, label: 'Non-Verbal',        shortLabel: 'NV', color: '#f59e0b', dotColor: '#d97706' },
]

const MEAN = 100
const SD   = 15

// Normal PDF, normalised so peak = 1
function pdf(x: number) {
  return Math.exp(-0.5 * ((x - MEAN) / SD) ** 2)
}

// Approximate normal CDF (Abramowitz & Stegun 26.2.17)
function cdf(x: number) {
  const z = (x - MEAN) / SD
  const t = 1 / (1 + 0.2316419 * Math.abs(z))
  const poly =
    t * (0.319381530 +
    t * (-0.356563782 +
    t * (1.781477937 +
    t * (-1.821255978 +
    t * 1.330274429))))
  const phi = Math.exp(-0.5 * z * z) / Math.sqrt(2 * Math.PI)
  const p = 1 - phi * poly
  return z >= 0 ? p : 1 - p
}

const X_MIN = 62, X_MAX = 138
const W = 420, H = 210
const PAD_L = 10, PAD_R = 10, PAD_T = 28, PAD_B = 52
const CW = W - PAD_L - PAD_R
const CH = H - PAD_T - PAD_B

function sx(x: number) {
  return PAD_L + ((x - X_MIN) / (X_MAX - X_MIN)) * CW
}
function sy(ratio: number) {
  return PAD_T + CH - ratio * CH
}

const STEP = 0.4

// Full curve polyline
const curvePoints = (() => {
  const pts: string[] = []
  for (let x = X_MIN; x <= X_MAX; x += STEP) {
    pts.push(`${sx(x).toFixed(1)},${sy(pdf(x)).toFixed(1)}`)
  }
  return pts.join(' ')
})()

// Colour-zone fills (one closed path per zone)
const ZONES = [
  { from: X_MIN, to: 85,  fill: '#fca5a5', opacity: 0.25 }, // red
  { from: 85,    to: 95,  fill: '#fcd34d', opacity: 0.25 }, // amber
  { from: 95,    to: 110, fill: '#a5b4fc', opacity: 0.25 }, // indigo
  { from: 110,   to: 120, fill: '#93c5fd', opacity: 0.30 }, // blue
  { from: 120,   to: X_MAX, fill: '#6ee7b7', opacity: 0.30 }, // emerald
]

function zonePath(from: number, to: number) {
  const pts: string[] = [`${sx(from).toFixed(1)},${sy(0).toFixed(1)}`]
  for (let x = from; x <= to + STEP; x += STEP) {
    const cx = Math.min(x, to)
    pts.push(`${sx(cx).toFixed(1)},${sy(pdf(cx)).toFixed(1)}`)
  }
  pts.push(`${sx(to).toFixed(1)},${sy(0).toFixed(1)}`)
  return `M ${pts.join(' L ')} Z`
}

const baseY    = sy(0)
const centerX  = sx(MEAN)

export default function BellCurve() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Score distribution · Sample
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Bell curve showing score distribution">

        {/* Zone fills */}
        {ZONES.map((z) => (
          <path key={z.from} d={zonePath(z.from, z.to)} fill={z.fill} fillOpacity={z.opacity} />
        ))}

        {/* Bell curve */}
        <polyline points={curvePoints} fill="none" stroke="#6366f1" strokeWidth="2" strokeLinejoin="round" />

        {/* Baseline */}
        <line x1={sx(X_MIN)} y1={baseY} x2={sx(X_MAX)} y2={baseY} stroke="#e5e7eb" strokeWidth="1" />

        {/* Mean dashed line */}
        <line x1={centerX} y1={sy(1) - 4} x2={centerX} y2={baseY} stroke="#c7d2fe" strokeWidth="1" strokeDasharray="4 3" />
        <text x={centerX} y={sy(1) - 8} textAnchor="middle" fontSize="9" fill="#a5b4fc" fontWeight="600">avg</text>

        {/* Subject markers */}
        {SAMPLE_SUBJECTS.map(({ score, shortLabel, color, dotColor }) => {
          const mx  = sx(score)
          const my  = sy(pdf(score))
          const pct = Math.round(cdf(score) * 100)

          return (
            <g key={shortLabel}>
              {/* Vertical dashed line from dot to baseline */}
              <line x1={mx} y1={my + 5} x2={mx} y2={baseY} stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.7" />

              {/* Dot on the bell curve */}
              <circle cx={mx} cy={my} r="4" fill="white" stroke={dotColor} strokeWidth="2" />

              {/* Labels below the baseline: abbreviation / score / percentile */}
              <text x={mx} y={baseY + 12} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">
                {shortLabel}
              </text>
              <text x={mx} y={baseY + 22} textAnchor="middle" fontSize="8" fill="#6b7280">
                {score}
              </text>
              <text x={mx} y={baseY + 33} textAnchor="middle" fontSize="8" fill={dotColor} fontWeight="600">
                {pct}th%
              </text>
            </g>
          )
        })}

        {/* Axis: just the extremes for context */}
        <text x={sx(X_MIN + 3)} y={baseY + 12} textAnchor="start" fontSize="7.5" fill="#d1d5db">70</text>
        <text x={sx(X_MAX - 3)} y={baseY + 12} textAnchor="end"   fontSize="7.5" fill="#d1d5db">130</text>
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
        {SAMPLE_SUBJECTS.map(({ label, shortLabel, color, score }) => {
          const pct = Math.round(cdf(score) * 100)
          return (
            <div key={shortLabel} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
              <span className="text-xs text-gray-500">{label}</span>
              <span className="text-xs font-bold" style={{ color }}>{score}</span>
              <span className="text-xs text-gray-400">({pct}th)</span>
            </div>
          )
        })}
      </div>

      {/* Zone legend */}
      <div className="flex justify-between mt-3 text-center">
        {[
          { label: 'Needs\nSupport', color: 'text-red-400' },
          { label: 'Below\nAvg', color: 'text-amber-400' },
          { label: 'Average', color: 'text-indigo-400' },
          { label: 'Above\nAvg', color: 'text-blue-400' },
          { label: 'Exceptional', color: 'text-emerald-400' },
        ].map(({ label, color }) => (
          <span key={label} className={`text-[9px] font-medium leading-tight ${color} whitespace-pre-line`}>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
