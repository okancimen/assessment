// CogAT Composite SAS → percentile conversion.
// CogAT Standard Age Score (SAS): mean=100, SD=16, age-normed (not grade-normed).
// Percentiles derived from normal distribution; approximate — always defer to
// official Riverside Insights norms for placement decisions.

export interface SasBand {
  key: 'low' | 'avg' | 'above' | 'p75' | 'p90' | 'p95' | 'p97' | 'p99' | 'p99p'
  range: string
  verdict: string
  color: string
}

// Lookup table: [sas_min, sas_max, percentile_label, percentile_mid]
const BANDS: { min: number; max: number; band: SasBand }[] = [
  {
    min: 136, max: 999,
    band: { key: 'p99p', range: '99th percentile and above', verdict: 'Top 1% — profoundly gifted range, well above most selective gifted programme thresholds.', color: 'text-emerald-700' },
  },
  {
    min: 128, max: 135,
    band: { key: 'p99', range: '97th–99th percentile', verdict: 'Top 3% nationally — typically above the threshold used for selective gifted identification.', color: 'text-emerald-700' },
  },
  {
    min: 125, max: 127,
    band: { key: 'p97', range: '95th–97th percentile', verdict: "Top 5% nationally — most gifted programmes begin screening in this range.", color: 'text-emerald-600' },
  },
  {
    min: 121, max: 124,
    band: { key: 'p95', range: '90th–95th percentile', verdict: 'Top 10% nationally — well above average; many enrichment programmes screen at this level.', color: 'text-emerald-600' },
  },
  {
    min: 111, max: 120,
    band: { key: 'p90', range: '75th–90th percentile', verdict: 'Above average nationally.', color: 'text-blue-600' },
  },
  {
    min: 100, max: 110,
    band: { key: 'p75', range: '50th–75th percentile', verdict: 'Around to slightly above the national average.', color: 'text-blue-600' },
  },
  {
    min: 1, max: 99,
    band: { key: 'avg', range: 'below the 50th percentile', verdict: 'Below the national average — a focus area, not a verdict on ability or potential.', color: 'text-amber-600' },
  },
]

export function classifySas(sas: number): SasBand | null {
  if (!Number.isInteger(sas) || sas < 50 || sas > 160) return null
  const match = BANDS.find((b) => sas >= b.min && sas <= b.max)
  return match?.band ?? null
}

// Fixed benchmarks (age-normed, same across all grades)
export const SAS_BENCHMARKS = [
  { label: '50th', sas: 100 },
  { label: '75th', sas: 111 },
  { label: '90th', sas: 121 },
  { label: '95th', sas: 125 },
  { label: '99th', sas: 136 },
]
