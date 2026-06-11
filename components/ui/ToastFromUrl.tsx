'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

const MESSAGES: Record<string, string> = {
  'child-added': 'Child added successfully',
}

export default function ToastFromUrl() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const success = searchParams.get('success')
    if (!success) return
    const msg = MESSAGES[success] ?? success
    setMessage(msg)
    setVisible(true)
    // Remove query param from URL without re-render
    router.replace(pathname, { scroll: false })
    const t = setTimeout(() => setVisible(false), 3000)
    return () => clearTimeout(t)
  }, [searchParams, router, pathname])

  if (!visible || !message) return null

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-gray-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg flex items-center gap-2">
        <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        {message}
      </div>
    </div>
  )
}
