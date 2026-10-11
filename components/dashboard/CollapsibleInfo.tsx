'use client'

import { useState } from 'react'

export default function CollapsibleInfo({
  description,
  label,
}: {
  description: string
  label: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-[11px] font-medium transition-colors"
        style={{ color: '#94A3B8' }}
        onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748B')}
        onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = '#94A3B8')}
      >
        <svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {label}
      </button>
      {open && (
        <p className="mt-2 text-[11px] leading-relaxed" style={{ color: '#64748B' }}>
          {description}
        </p>
      )}
    </div>
  )
}
