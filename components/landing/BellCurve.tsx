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
  { score: 103, label: 'English',    color: '#3b82f6', dotColor: '#2563eb' },
  { score: 119, label: 'Maths',      color: '#8b5cf6', dotColor: '#7c3aed' },
  { score: 113, label: 'Verbal',     color: '#10b981', dotColor: '#059669' },
  { score:  91, label: 'Non-Verbal', color: '#f59e0b', dotColor: '#d97706' },
]

const ZONE_LABELS = [
  { from: 70,  to: 85,  label: 'Needs Support', clr: '#ef4444' },
  { from: 85,  to: 95,  label: 'Below Avg',     clr: '#d97706' },
  { from: 95,  to: 110, label: 'Average',        clr: '#6366f1' },
  { from: 110, to: 120, label: 'Above Avg',      clr: '#3b82f6' },
  { from: 120, to: 130, label: 'Exceptional',    clr: '#059669' },
]

const MEAN = 100, SD = 15
const X_MIN = 55, X_MAX = 145  // ±3σ so tails reach near-zero within the visible range
const W = 420
// CH and PAD_T are fixed — they define the curve shape and never change.
// SVG total height is computed dynamically inside the component.
const PAD_L = 10, PAD_R = 10, PAD_T = 40, CH = 136
const CW = W - PAD_L - PAD_R
const baseY = PAD_T + CH  // = 176, always fixed

// Labels: 3 lines per subject, compact row spacing
const LINE_H = 9   // px between text lines within a row
const ROW_GAP = 14 // extra gap between row 0 and row 1
const ROW0_Y1 = baseY + 11
const ROW1_Y1 = ROW0_Y1 + 3 * LINE_H + ROW_GAP  // = baseY + 11 + 27 + 14 = baseY + 52
const PAD_B_ONE = 3 * LINE_H + 14  // single row needs: baseY + 11 + 27 + 5 margin
const PAD_B_TWO = 3 * LINE_H + ROW_GAP + 3 * LINE_H + 8  // two rows

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

// Horizontal inset so score bar's 70 and 130 sit directly above sx(70)/sx(130) on the curve
const BAR_L = `${(sx(70)  / W * 100).toFixed(3)}%`  // ≈ 18.254%
const BAR_R = `${((W - sx(130)) / W * 100).toFixed(3)}%`

const STEP = 0.4

// Pre-computed at module load — depends only on fixed CH/PAD_T
const curvePoints = (() => {
  const pts: string[] = []
  for (let x = X_MIN; x <= X_MAX; x += STEP) {
    pts.push(`${sx(x).toFixed(1)},${sy(pdf(x)).toFixed(1)}`)
  }
  return pts.join(' ')
})()

const ZONES = [
  { from: 70,  to: 85,  fill: '#fca5a5', opacity: 0.25 },
  { from: 85,  to: 95,  fill: '#fcd34d', opacity: 0.25 },
  { from: 95,  to: 110, fill: '#a5b4fc', opacity: 0.25 },
  { from: 110, to: 120, fill: '#93c5fd', opacity: 0.30 },
  { from: 120, to: 130, fill: '#6ee7b7', opacity: 0.30 },
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

/** Greedy 2-row assignment: sort by x, try row 0 first, spill to row 1 */
function assignRows(subjects: BellCurveSubject[]): number[] {
  const rows = new Array<number>(subjects.length).fill(0)
  const lastX: number[] = [-Infinity, -Infinity]

  // Work in sorted order so adjacency checks are meaningful
  const order = subjects
    .map((s, i) => ({ i, x: sx(s.score) }))
    .sort((a, b) => a.x - b.x)

  for (const { i, x } of order) {
    if (x - lastX[0] >= MIN_LABEL_GAP) {
      rows[i] = 0
      lastX[0] = x
    } else if (x - lastX[1] >= MIN_LABEL_GAP) {
      rows[i] = 1
      lastX[1] = x
    } else {
      // Both rows are tight — push to row 1 (accepts minor overlap as last resort)
      rows[i] = 1
      lastX[1] = x
    }
  }
  return rows
}

const centerX = sx(MEAN)

export default function BellCurve({ subjects, title, overallScore, hideScores }: BellCurveProps) {
  const displaySubjects = subjects ?? SAMPLE_SUBJECTS
  const cardTitle = title ?? 'Score distribution · Sample'

  const rows = assignRows(displaySubjects)
  const needsTwoRows = rows.some(r => r === 1)
  const PAD_B = needsTwoRows ? PAD_B_TWO : PAD_B_ONE
  const H = PAD_T + CH + PAD_B

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-5">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        {cardTitle}
      </p>

      {overallScore !== undefined && (
        <div className="mb-4" style={{ paddingLeft: BAR_L, paddingRight: BAR_R }}>
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            {['70','85','100','115','130'].map(n => <span key={n}>{n}</span>)}
          </div>
          {/* Segment widths are proportional to zone size within the 70–130 range */}
          <div className="relative h-3 rounded-full overflow-hidden flex">
            <div style={{ width: '25%' }}    className="bg-red-100" />
            <div style={{ width: '16.67%' }} className="bg-amber-100" />
            <div style={{ width: '25%' }}    className="bg-indigo-100" />
            <div style={{ width: '16.67%' }} className="bg-blue-100" />
            <div style={{ width: '16.66%' }} className="bg-emerald-100" />
            <div
              className="absolute top-0 h-full w-1.5 bg-gray-700 rounded-full -translate-x-1/2"
              style={{ left: `${((overallScore - 70) / 60) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            {['Needs Support','Below Avg','Average','Above Avg','Exceptional'].map(l => <span key={l}>{l}</span>)}
          </div>
        </div>
      )}

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

        {/* Zone labels above curve — only when no score bar carries them */}
        {overallScore === undefined && ZONE_LABELS.map(({ from, to, label, clr }) => (
          <text key={label} x={sx((from + to) / 2)} y={22}
            textAnchor="middle" fontSize="8" fill={clr} fontWeight="700">
            {label}
          </text>
        ))}

        {/* Subject markers */}
        {displaySubjects.map(({ score, label, color, dotColor }, i) => {
          const mx  = sx(score)
          const my  = sy(pdf(score))
          const pct = Math.round(cdf(score) * 100)
          const row = rows[i]
          const y1  = row === 0 ? ROW0_Y1 : ROW1_Y1

          return (
            <g key={label}>
              {/* Dashed line from circle down to baseline */}
              <line x1={mx} y1={my + 5} x2={mx} y2={baseY}
                stroke={color} strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.7" />

              {/* For row-1 labels: extend a thin line below the baseline */}
              {row === 1 && (
                <line x1={mx} y1={baseY + 1} x2={mx} y2={y1 - 4}
                  stroke={color} strokeWidth="0.8" strokeOpacity="0.35" />
              )}

              {/* Circle on curve */}
              <circle cx={mx} cy={my} r="4" fill="white" stroke={dotColor} strokeWidth="2" />

              {/* label block */}
              <text x={mx} y={y1}                                  textAnchor="middle" fontSize="8.5" fill={color}    fontWeight="700">{label}</text>
              {!hideScores && <text x={mx} y={y1 + LINE_H}         textAnchor="middle" fontSize="8"   fill="#6b7280"              >{score}</text>}
              <text x={mx} y={y1 + (hideScores ? LINE_H : LINE_H * 2)} textAnchor="middle" fontSize="8"   fill={dotColor} fontWeight="600">{pct}th%</text>
            </g>
          )
        })}

        {/* Score range anchors at the clamped extremes (70 and 130) */}
        <text x={sx(70)}  y={ROW0_Y1} textAnchor="middle" fontSize="7.5" fill="#d1d5db">70</text>
        <text x={sx(130)} y={ROW0_Y1} textAnchor="middle" fontSize="7.5" fill="#d1d5db">130</text>
      </svg>
    </div>
  )
}
