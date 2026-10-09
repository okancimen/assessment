'use client'

import { useState } from 'react'

declare function gtag(...args: unknown[]): void

export default function ExpandableAISummary({
  summary,
  assessmentId,
  title,
  showMoreLabel,
}: {
  summary: string
  assessmentId: string
  title: string
  showMoreLabel: string
}) {
  const [expanded, setExpanded] = useState(false)

  function handleExpand() {
    setExpanded(true)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'expand_personality_summary', { assessment_id: assessmentId })
    }
  }

  const needsGate = summary.length > 250

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-3">
      <h2 className="text-sm font-semibold text-[#1d1d1f]">{title}</h2>
      {expanded || !needsGate ? (
        <div className="text-sm text-[#3d3d3f] leading-relaxed space-y-3">
          {summary.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            {summary.slice(0, 250)}…
          </p>
          <div className="relative mt-2 overflow-hidden" style={{ maxHeight: '56px' }}>
            <p className="text-sm text-[#3d3d3f] leading-relaxed blur-sm select-none pointer-events-none">
              {summary.slice(250)}
            </p>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          </div>
          <div className="mt-4 pt-3 border-t border-[#f5f5f7] flex justify-center">
            <button
              onClick={handleExpand}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4F46E5] hover:opacity-70 transition-opacity"
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
