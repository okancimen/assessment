'use client'

import Link from 'next/link'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl border border-[#d2d2d7] p-8 max-w-xl w-full space-y-4">
        <h1 className="text-xl font-bold text-red-600">Admin page error</h1>
        <p className="text-sm text-[#6e6e73]">An error occurred loading this admin page.</p>
        <pre className="bg-[#f5f5f7] rounded-xl p-4 text-xs text-red-800 overflow-auto whitespace-pre-wrap break-all">
          {error?.message ?? 'Unknown error'}
          {error?.digest ? `\n\nDigest: ${error.digest}` : ''}
        </pre>
        <div className="flex gap-3">
          <button
            onClick={reset}
            className="px-4 py-2 bg-[#4F46E5] text-white rounded-xl text-sm font-semibold hover:bg-[#4338CA] transition-colors"
          >
            Try again
          </button>
          <Link href="/dashboard" className="px-4 py-2 bg-[#f5f5f7] text-[#1d1d1f] rounded-xl text-sm font-semibold hover:bg-[#e5e5ea] transition-colors">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
