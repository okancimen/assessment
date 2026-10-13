// Fall MAP Math RIT benchmarks by grade and percentile, reused verbatim from
// eduentry's own vetted guide (/blog/nwea-map-scores-explained) so the
// interactive tool and the article never disagree. Figures are approximate,
// based on NWEA national norms; exact percentiles vary by term/subject —
// always defer to the official NWEA norms for precise values.

export interface RitRow {
  grade: number
  p50: number
  p75: number
  p90: number
  p95: number
  p99: number
}

// Fall · MAP Growth · Mathematics
export const NWEA_MATH_FALL: RitRow[] = [
  { grade: 3, p50: 188, p75: 197, p90: 204, p95: 208, p99: 218 },
  { grade: 4, p50: 197, p75: 206, p90: 214, p95: 218, p99: 228 },
  { grade: 5, p50: 205, p75: 214, p90: 222, p95: 227, p99: 237 },
  { grade: 6, p50: 211, p75: 220, p90: 228, p95: 233, p99: 243 },
  { grade: 7, p50: 215, p75: 224, p90: 232, p95: 237, p99: 247 },
  { grade: 8, p50: 218, p75: 228, p90: 236, p95: 241, p99: 251 },
]

export type RitBandKey = 'below' | 'p50' | 'p75' | 'p90' | 'p95' | 'p99'

export interface RitBand {
  key: RitBandKey
  /** percentile range label, e.g. "90th–95th" */
  range: string
  /** short verdict */
  verdict: string
  /** tailwind text color */
  color: string
}

// Classify a RIT against a grade row. Band = the highest percentile threshold met.
export function classifyRit(rit: number, row: RitRow): RitBand {
  if (rit >= row.p99) return { key: 'p99', range: '99th percentile and above', verdict: 'Top 1% nationally — typical of the range used for gifted identification.', color: 'text-emerald-700' }
  if (rit >= row.p95) return { key: 'p95', range: '95th–99th percentile', verdict: 'Top 5% nationally — well above average.', color: 'text-emerald-700' }
  if (rit >= row.p90) return { key: 'p90', range: '90th–95th percentile', verdict: 'Top 10% nationally — above average.', color: 'text-emerald-600' }
  if (rit >= row.p75) return { key: 'p75', range: '75th–90th percentile', verdict: 'Above the national average for the grade.', color: 'text-blue-600' }
  if (rit >= row.p50) return { key: 'p50', range: '50th–75th percentile', verdict: 'Around to just above the national average.', color: 'text-blue-600' }
  return { key: 'below', range: 'below the 50th percentile', verdict: 'Below the national average for the grade — a focus area, not a verdict on ability.', color: 'text-amber-600' }
}
