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
  overallScore?: number
  hideScores?: boolean
}

const SAMPLE_SUBJECTS: BellCurveSubject[] = [
  { score: 103, label: 'English',    color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: 'Maths',      color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: 'Verbal',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: 'Non-Verbal', color: '#DB2777', dotColor: '#DB2777' },
]

const ZONE_LABELS = [
  { from: 70,  to: 85,  label: 'Needs Support', clr: '#EF4444' },
  { from: 85,  to: 95,  label: 'Below Avg',     clr: '#F97316' },
  { from: 95,  to: 110, label: 'Average',        clr: '#EAB308' },
  { from: 110, to: 120, label: 'Above Avg',      clr: '#22C55E' },
  { from: 120, to: 130, label: 'Exceptional',    clr: '#3B82F6' },
]

const MEAN = 100, SD = 15
const X_MIN = 55, X_MAX = 145
const W = 420
const PAD_L = 10, PAD_R = 10, PAD_T = 44, CH = 136
const CW = W - PAD_L - PAD_R
const baseY = PAD_T + CH

// Label geometry
const LINE_H = 8
const ROW_GAP = 6
const ROW0_Y1 = baseY + 14

// Minimum pixel gap between adjacent label centers to avoid overlap
const MIN_LABEL_GAP = 58

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

const BAR_L = `${(sx(70)  / W * 100).toFixed(3)}%`
const BAR_R = `${((W - sx(130)) / W * 100).toFixed(3)}%`

const STEP = 0.4

const curvePoints = (() => {
  const pts: string[] = []
  for (let x = X_MIN; x <= X_MAX; x += STEP) {
    pts.push(`${sx(x).toFixed(1)},${sy(pdf(x)).toFixed(1)}`)
  }
  return pts.join(' ')
})()

const ZONES = [
  { from: 70,  to: 85,  fill: '#EF4444', opacity: 0.12 },
  { from: 85,  to: 95,  fill: '#F97316', opacity: 0.12 },
  { from: 95,  to: 110, fill: '#EAB308', opacity: 0.10 },
  { from: 110, to: 120, fill: '#22C55E', opacity: 0.13 },
  { from: 120, to: 130, fill: '#3B82F6', opacity: 0.13 },
]

// X-axis reference ticks
const X_TICKS = [70, 85, 100, 115, 130]

function zonePath(from: number, to: number) {
  const pts: string[] = [`${sx(from).toFixed(1)},${sy(0).toFixed(1)}`]
  for (let x = from; x <= to + STEP; x += STEP) {
    const cx = Math.min(x, to)
    pts.push(`${sx(cx).toFixed(1)},${sy(pdf(cx)).toFixed(1)}`)
  }
  pts.push(`${sx(to).toFixed(1)},${sy(0).toFixed(1)}`)
  return `M ${pts.join(' L ')} Z`
}

function assignRows(subjects: BellCurveSubject[]): number[] {
  const rows = new Array<number>(subjects.length).fill(0)
  const lastX: number[] = []

  const order = subjects
    .map((s, i) => ({ i, x: sx(s.score) }))
    .sort((a, b) => a.x - b.x)

  for (const { i, x } of order) {
    let placed = false
    for (let r = 0; r < lastX.length; r++) {
      if (x - lastX[r] >= MIN_LABEL_GAP) {
        rows[i] = r
        lastX[r] = x
        placed = true
        break
      }
    }
    if (!placed) {
      rows[i] = lastX.length
      lastX.push(x)
    }
  }
  return rows
}

const centerX = sx(MEAN)

export default function BellCurve({ subjects, title, overallScore, hideScores }: BellCurveProps) {
  const displaySubjects = subjects ?? SAMPLE_SUBJECTS
  const cardTitle = title ?? 'Score distribution · Sample'

  const rows = assignRows(displaySubjects)
  const numRows = displaySubjects.length > 0 ? Math.max(...rows) + 1 : 1
  const PAD_B = numRows * 2 * LINE_H + (numRows - 1) * ROW_GAP + 20
  const H = PAD_T + CH + PAD_B

  // Overall score bar marker position (0–100%)
  const overallPct = overallScore !== undefined
    ? ((overallScore - 70) / 60) * 100
    : null

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        {cardTitle}
      </p>

      {overallScore !== undefined && (
        <div className="mb-5" style={{ paddingLeft: BAR_L, paddingRight: BAR_R }}>
          {/* Score value callout */}
          <div className="relative mb-1.5" style={{ height: '20px' }}>
            <div
              className="absolute -translate-x-1/2"
              style={{ left: `${overallPct}%` }}
            >
              <span className="inline-block bg-gray-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                {overallScore}
              </span>
            </div>
          </div>
          {/* Bar */}
          <div className="relative h-3.5 rounded-full overflow-hidden flex">
            <div style={{ width: '25%' }}    className="bg-red-200" />
            <div style={{ width: '16.67%' }} className="bg-orange-200" />
            <div style={{ width: '25%' }}    className="bg-yellow-200" />
            <div style={{ width: '16.67%' }} className="bg-green-200" />
            <div style={{ width: '16.66%' }} className="bg-blue-200" />
            <div
              className="absolute top-0 h-full w-2 bg-gray-800 rounded-full -translate-x-1/2 shadow"
              style={{ left: `${overallPct}%` }}
            />
          </div>
          {/* Zone name ticks */}
          <div className="flex justify-between mt-1">
            {['Needs Support','Below Avg','Average','Above Avg','Exceptional'].map((l, i) => (
              <span key={l} style={{ width: i === 0 ? '25%' : i === 2 ? '25%' : '16.67%' }}
                className="text-[9px] text-gray-400 text-center leading-tight">
                {l}
              </span>
            ))}
          </div>
        </div>
      )}

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Bell curve showing score distribution">

        {/* Gradient defs */}
        <defs>
          <linearGradient id="curveGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#818cf8" />
            <stop offset="50%"  stopColor="#6366f1" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Zone fills */}
        {ZONES.map((z) => (
          <path key={z.from} d={zonePath(z.from, z.to)} fill={z.fill} fillOpacity={z.opacity} />
        ))}

        {/* Subtle vertical grid lines at zone boundaries */}
        {[85, 95, 110, 120].map((v) => (
          <line key={v}
            x1={sx(v)} y1={PAD_T + 8} x2={sx(v)} y2={baseY}
            stroke="#e5e7eb" strokeWidth="0.75" strokeDasharray="3 3" />
        ))}

        {/* Bell curve with gradient stroke */}
        <polyline points={curvePoints} fill="none" stroke="url(#curveGrad)" strokeWidth="2.5" strokeLinejoin="round" />

        {/* Baseline */}
        <line x1={sx(X_MIN)} y1={baseY} x2={sx(X_MAX)} y2={baseY} stroke="#e5e7eb" strokeWidth="1" />

        {/* Mean dashed centre line */}
        <line x1={centerX} y1={PAD_T + 4} x2={centerX} y2={baseY}
          stroke="#c7d2fe" strokeWidth="1.2" strokeDasharray="4 3" />

        {/* Zone labels — staggered, only when no score bar (score bar already lists them) */}
        {overallScore === undefined && ZONE_LABELS.map(({ from, to, label, clr }, idx) => (
          <text key={label} x={sx((from + to) / 2)} y={idx % 2 === 0 ? 13 : 25}
            textAnchor="middle" fontSize="7.5" fill={clr} fontWeight="700" letterSpacing="0.2">
            {label}
          </text>
        ))}

        {/* X-axis scale ticks */}
        {X_TICKS.map((v) => (
          <g key={v}>
            <line x1={sx(v)} y1={baseY} x2={sx(v)} y2={baseY + 4} stroke="#d1d5db" strokeWidth="1" />
            <text x={sx(v)} y={baseY + 11} textAnchor="middle" fontSize="7.5" fill="#9ca3af">{v}</text>
          </g>
        ))}

        {/* Subject markers */}
        {displaySubjects.map(({ score, label, color, dotColor }, i) => {
          const mx  = sx(score)
          const my  = sy(pdf(score))
          const pct = Math.round(cdf(score) * 100)
          const row = rows[i]
          const y1  = ROW0_Y1 + row * (2 * LINE_H + ROW_GAP) + 14

          // Background pill for label group
          const pillH = 2 * LINE_H + 6
          const pillW = 50

          return (
            <g key={label}>
              {/* Dashed drop line from dot to baseline */}
              <line x1={mx} y1={my + 7} x2={mx} y2={baseY}
                stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.6" />

              {/* Extension below baseline to pill */}
              {row >= 1 && (
                <line x1={mx} y1={baseY + 1} x2={mx} y2={y1 - 8}
                  stroke={color} strokeWidth="0.8" strokeOpacity="0.3" />
              )}

              {/* Dot on curve — filled with color, white ring */}
              <circle cx={mx} cy={my} r="5.5" fill="white" />
              <circle cx={mx} cy={my} r="5.5" fill={dotColor} fillOpacity="0.15" />
              <circle cx={mx} cy={my} r="4" fill={dotColor} filter="url(#dotShadow)" />
              <circle cx={mx} cy={my} r="1.8" fill="white" />

              {/* Label pill background */}
              <rect
                x={mx - pillW / 2} y={y1 - LINE_H - 1}
                width={pillW} height={pillH}
                rx="5" ry="5"
                fill={dotColor} fillOpacity="0.08"
                stroke={dotColor} strokeOpacity="0.2" strokeWidth="0.8"
              />

              {/* Subject name */}
              <text x={mx} y={y1} textAnchor="middle" fontSize="9" fill={color} fontWeight="700">
                {label}
              </text>
              {/* Percentile */}
              <text x={mx} y={y1 + LINE_H} textAnchor="middle" fontSize="8" fill={dotColor} fontWeight="700">
                {pct}th%
              </text>
            </g>
          )
        })}

      </svg>
    </div>
  )
}
