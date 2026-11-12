'use client'

import { useState } from 'react'
import { classifySas, SAS_BENCHMARKS } from '@/lib/cogat-data'

export default function CogAtScoreLookup() {
  const [grade, setGrade] = useState(4)
  const [sas, setSas] = useState('')

  const sasNum = Number.parseInt(sas, 10)
  const valid = Number.isFinite(sasNum) && sasNum >= 50 && sasNum <= 160
  const band = valid ? classifySas(sasNum) : null

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8 space-y-6">
      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-[#1d1d1f]">Grade</span>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#4F46E5]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((g) => (
              <option key={g} value={g}>Grade {g}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-[#1d1d1f]">Composite SAS score</span>
          <input
            type="number"
            inputMode="numeric"
            value={sas}
            onChange={(e) => setSas(e.target.value)}
            placeholder="e.g. 118"
            className="mt-1.5 w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#4F46E5]"
          />
        </label>
      </div>

      {/* Result */}
      {band ? (
        <div className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5">
          <p className="text-xs text-[#6e6e73] mb-1">
            A Composite SAS of <strong className="text-[#1d1d1f]">{sasNum}</strong> in Grade {grade} is
          </p>
          <p className={`text-xl font-bold ${band.color}`}>{band.range}</p>
          <p className="text-sm text-[#3d3d3f] mt-1.5 leading-relaxed">{band.verdict}</p>
        </div>
      ) : (
        <p className="text-sm text-[#6e6e73]">Enter a Composite SAS (typically 72–148) to see the percentile band.</p>
      )}

      {/* Benchmark reference grid */}
      <div>
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">
          Composite SAS benchmarks · age-normed (all grades)
        </p>
        <div className="grid grid-cols-5 gap-2 text-center">
          {SAS_BENCHMARKS.map(({ label, sas: threshold }) => (
            <div
              key={label}
              className={`rounded-xl py-2 border transition-colors ${
                valid && sasNum >= threshold
                  ? 'bg-[#eef2ff] border-[#c7d2fe]'
                  : 'bg-[#f5f5f7] border-[#d2d2d7]'
              }`}
            >
              <div className="text-[10px] text-[#6e6e73]">{label}</div>
              <div className="text-sm font-bold text-[#1d1d1f] tabular-nums">{threshold}</div>
            </div>
          ))}
        </div>
        {valid && (
          <p className="text-[11px] text-[#94A3B8] mt-2">Highlighted columns = percentiles your child meets or exceeds.</p>
        )}
      </div>

      {/* Gifted note */}
      {band && (band.key === 'p97' || band.key === 'p99' || band.key === 'p99p') && (
        <div className="rounded-2xl bg-[#f0fdf4] border border-[#bbf7d0] p-4">
          <p className="text-sm font-semibold text-emerald-800 mb-1">Gifted programme range</p>
          <p className="text-sm text-emerald-700 leading-relaxed">
            Most US gifted and talented programmes use a Composite SAS of 125–130 as the screening threshold.
            CogAT is typically one input alongside MAP Growth or NNAT and teacher recommendations —
            criteria vary significantly by district.
          </p>
        </div>
      )}

      <p className="text-[11px] text-[#94A3B8] leading-relaxed">
        Approximate, based on the standard normal distribution (mean 100, SD 16). CogAT SAS is age-normed,
        not grade-normed — the same SAS has the same meaning across grades. For official norm tables see
        Riverside Insights. Not intended for placement decisions.
      </p>
    </div>
  )
}
