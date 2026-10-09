'use client'

export default function PrintButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 border border-[#d2d2d7] text-[#1d1d1f] text-xs font-semibold px-4 py-2 rounded-full hover:bg-[#f5f5f7] transition-colors"
    >
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
        <rect x="6" y="14" width="12" height="8"/>
      </svg>
      {label}
    </button>
  )
}
