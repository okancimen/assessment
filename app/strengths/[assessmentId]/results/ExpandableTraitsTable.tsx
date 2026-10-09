'use client'

import { useState } from 'react'

declare function gtag(...args: unknown[]): void

export interface TraitRow {
  trait: string
  label: string
  score: number
  virtueLabel: string
  virtueColor: string
}

function TraitRowEl({ row }: { row: TraitRow }) {
  return (
    <tr className="border-b border-[#f5f5f7] last:border-0">
      <td className="px-5 py-3 font-medium text-[#1d1d1f] text-xs">{row.label}</td>
      <td className="px-5 py-3 hidden sm:table-cell">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${row.virtueColor}`}>
          {row.virtueLabel}
        </span>
      </td>
      <td className="px-5 py-3 text-right">
        <div className="flex items-center justify-end gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className={`w-3 h-3 rounded-full ${n <= Math.round(row.score) ? 'bg-[#4F46E5]' : 'bg-[#e5e7eb]'}`}
              />
            ))}
          </div>
          <span className="text-xs tabular-nums font-semibold text-[#1d1d1f] w-6">{row.score.toFixed(1)}</span>
        </div>
      </td>
    </tr>
  )
}

export default function ExpandableTraitsTable({
  rows,
  assessmentId,
  title,
  traitHeader,
  virtueHeader,
  traitScore,
  showMoreLabel,
}: {
  rows: TraitRow[]
  assessmentId: string
  title: string
  traitHeader: string
  virtueHeader: string
  traitScore: string
  showMoreLabel: string
}) {
  const [expanded, setExpanded] = useState(false)

  function handleExpand() {
    setExpanded(true)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'expand_personality_traits', { assessment_id: assessmentId })
    }
  }

  const visible = rows.slice(0, 3)
  const hidden  = rows.slice(3)
  const needsGate = hidden.length > 0

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
      <div className="px-6 py-4 border-b border-[#f5f5f7]">
        <h2 className="text-sm font-semibold text-[#1d1d1f]">{title}</h2>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#f5f5f7]">
            <th className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide">{traitHeader}</th>
            <th className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">{virtueHeader}</th>
            <th className="text-right px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide">{traitScore}</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((row) => <TraitRowEl key={row.trait} row={row} />)}
          {expanded && hidden.map((row) => <TraitRowEl key={row.trait} row={row} />)}
        </tbody>
      </table>

      {needsGate && !expanded && (
        <div className="relative">
          <table className="w-full text-sm blur-sm select-none pointer-events-none" aria-hidden="true">
            <tbody>
              {hidden.map((row) => <TraitRowEl key={row.trait} row={row} />)}
            </tbody>
          </table>
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={handleExpand}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] transition-colors px-4 py-2 rounded-full shadow-sm"
            >
              {showMoreLabel}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
