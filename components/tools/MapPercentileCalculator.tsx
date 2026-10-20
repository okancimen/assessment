'use client'

import { useState } from 'react'
import { NWEA_MATH_FALL, NWEA_READING_FALL, classifyRit } from '@/lib/nwea-rit-data'

type Subject = 'math' | 'reading'

export default function MapPercentileCalculator() {
  const [subject, setSubject] = useState<Subject>('math')
  const [grade, setGrade] = useState(5)
  const [rit, setRit] = useState('')

  const data = subject === 'math' ? NWEA_MATH_FALL : NWEA_READING_FALL
  const row = data.find((r) => r.grade === grade)!
  const ritNum = Number.parseInt(rit, 10)
  const valid = Number.isFinite(ritNum) && ritNum >= 100 && ritNum <= 320
  const band = valid ? classifyRit(ritNum, row) : null

  const subjectLabel = subject === 'math' ? 'Math' : 'Reading'

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8 space-y-6">
      {/* Subject toggle */}
      <div className="flex gap-2 p-1 bg-[#f5f5f7] rounded-xl w-fit">
        {(['math', 'reading'] as Subject[]).map((s) => (
          <button
            key={s}
            onClick={() => { setSubject(s); setRit('') }}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              subject === s
                ? 'bg-white text-[#4F46E5] shadow-sm'
                : 'text-[#6e6e73] hover:text-[#1d1d1f]'
            }`}
          >
            {s === 'math' ? 'Math' : 'Reading'}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-[#1d1d1f]">Grade</span>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#4F46E5]"
          >
            {data.map((r) => (
              <option key={r.grade} value={r.grade}>Grade {r.grade}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-[#1d1d1f]">Fall {subjectLabel} RIT score</span>
          <input
            type="number"
            inputMode="numeric"
            value={rit}
            onChange={(e) => setRit(e.target.value)}
            placeholder="e.g. 215"
            className="mt-1.5 w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#4F46E5]"
          />
        </label>
      </div>

      {/* Result */}
      {band ? (
        <div className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5">
          <p className="text-xs text-[#6e6e73] mb-1">
            A RIT of <strong className="text-[#1d1d1f]">{ritNum}</strong> in Grade {grade} (Fall, {subjectLabel}) is
          </p>
          <p className={`text-xl font-bold ${band.color}`}>{band.range}</p>
          <p className="text-sm text-[#3d3d3f] mt-1.5 leading-relaxed">{band.verdict}</p>
        </div>
      ) : (
        <p className="text-sm text-[#6e6e73]">Enter a RIT score (roughly 100–320) to see where it falls.</p>
      )}

      {/* Benchmark reference grid */}
      <div>
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">
          Grade {grade} benchmarks · Fall · {subjectLabel}
        </p>
        <div className="grid grid-cols-5 gap-2 text-center">
          {([['50th', row.p50], ['75th', row.p75], ['90th', row.p90], ['95th', row.p95], ['99th', row.p99]] as [string, number][]).map(([pct, v]) => (
            <div
              key={pct}
              className={`rounded-xl py-2 border transition-colors ${
                valid && ritNum >= v
                  ? 'bg-[#eef2ff] border-[#c7d2fe]'
                  : 'bg-[#f5f5f7] border-[#d2d2d7]'
              }`}
            >
              <div className="text-[10px] text-[#6e6e73]">{pct}</div>
              <div className="text-sm font-bold text-[#1d1d1f] tabular-nums">{v}</div>
            </div>
          ))}
        </div>
        {valid && (
          <p className="text-[11px] text-[#94A3B8] mt-2">Highlighted columns = percentiles your child meets or exceeds.</p>
        )}
      </div>

      {/* Gifted note when in upper band */}
      {band && (band.key === 'p95' || band.key === 'p99') && (
        <div className="rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] p-4">
          <p className="text-sm font-semibold text-emerald-800 mb-1">Gifted screening range</p>
          <p className="text-sm text-emerald-700 leading-relaxed">
            Most US gifted and talented programmes begin screening at the 95th–99th percentile on MAP Growth.
            A high MAP score is typically one input alongside a cognitive test (CogAT, NNAT) and teacher
            observations — criteria vary by district.
          </p>
        </div>
      )}

      <p className="text-[11px] text-[#94A3B8] leading-relaxed">
        Approximate, based on NWEA national norms (Fall · MAP Growth · {subjectLabel}). Exact percentiles vary
        by test term and district. For official figures see the NWEA 2020 Norms Study. Not intended for
        placement decisions.
      </p>
    </div>
  )
}
