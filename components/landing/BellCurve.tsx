// Server component — all maths run at render time, pure static SVG

export interface BellCurveSubject {
  score: number
  label: string
  color: string
  dotColor: string
}

interface BellCurveProps {
  subjects?: BellCurveSubject[]
  title?: string
}

const SAMPLE_SUBJECTS: BellCurveSubject[] = [
  { score: 103, label: 'English',    color: '#3b82f6', dotColor: '#2563eb' },
  { score: 119, label: 'Maths',      color: '#8b5cf6', dotColor: '#7c3aed' },
  { score: 113, label: 'Verbal',     color: '#10b981', dotColor: '#059669' },
  { score:  91, label: 'Non-Verbal', color: '#f59e0b', dotColor: '#d97706' },
]

const ZONE_LABELS = [
  { from: 62,  to: 85,  label: 'Needs Support', clr: '#ef4444' },
  { from: 85,  to: 95,  label: 'Below Avg',     clr: '#d97706' },
  { from: 95,  to: 110, label: 'Average',        clr: '#6366f1' },
  { from: 110, to: 120, label: 'Above Avg',      clr: '#3b82f6' },
  { from: 120, to: 138, label: 'Exceptional',    clr: '#059669' },
]

const MEAN = 100, SD = 15
const X_MIN = 62, X_MAX = 138
const W = 420, H = 228
const PAD_L = 10, PAD_R = 10, PAD_T = 40, PAD_B = 52
const CW = W - PAD_L - PAD_R
const CH = H - PAD_T - PAD_B
const baseY = PAD_T + CH

function pdf(x: number) {
  return Math.exp(-0.5 * ((x - MEAN) / SD) ** 2)
}

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

function sx(x: number) {
  return PAD_L + ((x - X_MIN) / (X_MAX - X_MIN)) * CW
}
function sy(ratio: number) {
  return PAD_T + CH - ratio * CH
}

const STEP = 0.4

const curvePoints = (() => {
  const pts: string[] = []
  for (let x = X_MIN; x <= X_MAX; x += STEP) {
    pts.push(`${sx(x).toFixed(1)},${sy(pdf(x)).toFixed(1)}`)
  }
  return pts.join(' ')
})()

const ZONES = [
  { from: X_MIN, to: 85,    fill: '#fca5a5', opacity: 0.25 },
  { from: 85,    to: 95,    fill: '#fcd34d', opacity: 0.25 },
  { from: 95,    to: 110,   fill: '#a5b4fc', opacity: 0.25 },
  { from: 110,   to: 120,   fill: '#93c5fd', opacity: 0.30 },
  { from: 120,   to: X_MAX, fill: '#6ee7b7', opacity: 0.30 },
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

const centerX = sx(MEAN)

export default function BellCurve({ subjects, title }: BellCurveProps) {
  const displaySubjects = subjects ?? SAMPLE_SUBJECTS
  const cardTitle = title ?? 'Score distribution · Sample'

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        {cardTitle}
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
        <line x1={centerX} y1={PAD_T} x2={centerX} y2={baseY} stroke="#c7d2fe" strokeWidth="1" strokeDasharray="4 3" />

        {/* Zone labels above curve */}
        {ZONE_LABELS.map(({ from, to, label, clr }) => (
          <text
            key={label}
            x={sx((from + to) / 2)}
            y={22}
            textAnchor="middle"
            fontSize="8"
            fill={clr}
            fontWeight="700"
          >
            {label}
          </text>
        ))}

        {/* Subject markers */}
        {displaySubjects.map(({ score, label, color, dotColor }) => {
          const mx  = sx(score)
          const my  = sy(pdf(score))
          const pct = Math.round(cdf(score) * 100)

          return (
            <g key={label}>
              <line x1={mx} y1={my + 5} x2={mx} y2={baseY} stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.7" />
              <circle cx={mx} cy={my} r="4" fill="white" stroke={dotColor} strokeWidth="2" />

              <text x={mx} y={baseY + 12} textAnchor="middle" fontSize="8.5" fill={color} fontWeight="700">
                {label}
              </text>
              <text x={mx} y={baseY + 23} textAnchor="middle" fontSize="8" fill="#6b7280">
                {score}
              </text>
              <text x={mx} y={baseY + 34} textAnchor="middle" fontSize="8" fill={dotColor} fontWeight="600">
                {pct}th%
              </text>
            </g>
          )
        })}

        {/* Axis extremes */}
        <text x={sx(X_MIN + 3)} y={baseY + 12} textAnchor="start" fontSize="7.5" fill="#e5e7eb">70</text>
        <text x={sx(X_MAX - 3)} y={baseY + 12} textAnchor="end"   fontSize="7.5" fill="#e5e7eb">130</text>
      </svg>
    </div>
  )
}
