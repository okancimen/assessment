'use client'

import { useState } from 'react'
import { NWEA_MATH_FALL, classifyRit } from '@/lib/nwea-rit-data'

export default function NweaRitCalculator() {
  const [grade, setGrade] = useState(5)
  const [rit, setRit] = useState('')

  const row = NWEA_MATH_FALL.find((r) => r.grade === grade)!
  const ritNum = Number.parseInt(rit, 10)
  const valid = Number.isFinite(ritNum) && ritNum >= 100 && ritNum <= 320
  const band = valid ? classifyRit(ritNum, row) : null

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-[#1d1d1f]">Grade</span>
          <select
            value={grade}
            onChange={(e) => setGrade(Number(e.target.value))}
            className="mt-1.5 w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#4F46E5]"
          >
            {NWEA_MATH_FALL.map((r) => (
              <option key={r.grade} value={r.grade}>Grade {r.grade}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-[#1d1d1f]">Fall Math RIT score</span>
          <input
            type="number"
            inputMode="numeric"
            value={rit}
            onChange={(e) => setRit(e.target.value)}
            placeholder="e.g. 212"
            className="mt-1.5 w-full rounded-xl border border-[#d2d2d7] bg-white px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#4F46E5]"
          />
        </label>
      </div>

      {/* Result */}
      {band ? (
        <div className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5">
          <p className="text-xs text-[#6e6e73] mb-1">A RIT of <strong className="text-[#1d1d1f]">{ritNum}</strong> in Grade {grade} (Fall, Math) is</p>
          <p className={`text-xl font-bold ${band.color}`}>{band.range}</p>
          <p className="text-sm text-[#3d3d3f] mt-1.5 leading-relaxed">{band.verdict}</p>
        </div>
      ) : (
        <p className="text-sm text-[#6e6e73]">Enter a RIT score (roughly 100–320) to see where it falls.</p>
      )}

      {/* Benchmark reference for the selected grade */}
      <div>
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">Grade {grade} benchmarks · Fall · Math</p>
        <div className="grid grid-cols-5 gap-2 text-center">
          {([['50th', row.p50], ['75th', row.p75], ['90th', row.p90], ['95th', row.p95], ['99th', row.p99]] as [string, number][]).map(([pct, v]) => (
            <div key={pct} className="rounded-xl bg-[#f5f5f7] border border-[#d2d2d7] py-2">
              <div className="text-[10px] text-[#6e6e73]">{pct}</div>
              <div className="text-sm font-bold text-[#1d1d1f] tabular-nums">{v}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-[#94A3B8] leading-relaxed">
        Approximate, based on NWEA national norms (Fall · MAP Growth · Mathematics). Reading, Language and
        other terms follow similar patterns with different absolute values. For exact, official figures see the
        NWEA 2020 Norms Study. This tool is for guidance, not placement decisions.
      </p>
    </div>
  )
}
