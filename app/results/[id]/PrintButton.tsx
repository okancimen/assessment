'use client'

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
    >
      Print / Save PDF
    </button>
  )
}
