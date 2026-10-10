'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { getDashboardI18n } from '@/lib/dashboard-i18n'

export default function DeleteChildButton({
  childId,
  childName,
  locale,
}: {
  childId: string
  childName: string
  locale?: string
}) {
  const router = useRouter()
  const t = getDashboardI18n(locale)
  const [confirming, setConfirming] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleDelete() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/children/${childId}`, { method: 'DELETE' })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error ? t.deleteChildError : t.deleteChildNetworkError)
        setLoading(false)
        setConfirming(false)
        return
      }
      router.refresh()
    } catch {
      setError(t.deleteChildNetworkError)
      setLoading(false)
      setConfirming(false)
    }
  }

  if (confirming) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-3 flex flex-col gap-2">
        <p className="text-xs font-semibold text-red-700">{t.deleteChildConfirmTitle(childName)}</p>
        <p className="text-xs text-red-600">{t.deleteChildConfirmDesc}</p>
        <div className="flex gap-2 mt-0.5">
          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 text-xs font-semibold bg-red-600 text-white rounded-full py-1.5 hover:bg-red-700 disabled:opacity-50 transition-colors"
          >
            {loading ? '…' : t.deleteChildConfirm}
          </button>
          <button
            onClick={() => { setConfirming(false); setError('') }}
            disabled={loading}
            className="flex-1 text-xs font-semibold border border-[#d2d2d7] text-[#1d1d1f] rounded-full py-1.5 hover:bg-[#f5f5f7] disabled:opacity-50 transition-colors"
          >
            {t.deleteChildCancel}
          </button>
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={() => setConfirming(true)}
        className="text-xs text-[#6e6e73] hover:text-red-600 transition-colors text-center w-full py-1"
      >
        {t.deleteChildBtn}
      </button>
      {error && <p className="text-xs text-red-600 text-center">{error}</p>}
    </div>
  )
}
