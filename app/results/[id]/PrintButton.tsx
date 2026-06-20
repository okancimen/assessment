'use client'

import { trackEvent } from '@/lib/analytics'

export default function PrintButton() {
  function handlePrint() {
    trackEvent('print_results')
    window.print()
  }

  return (
    <button
      onClick={handlePrint}
      className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
    >
      Print / Save PDF
    </button>
  )
}
