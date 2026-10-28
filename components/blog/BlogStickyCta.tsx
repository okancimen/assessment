'use client'

import { useEffect, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

// Dismissible sticky CTA for long articles — appears once the reader has
// scrolled past the fold, so there's a conversion path without reaching the
// bottom-of-page CTA. Locale-agnostic: all copy comes in via props.
export default function BlogStickyCta({
  href,
  label,
  note,
}: {
  href: string
  label: string
  note: string
}) {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (dismissed || !show) return null

  return (
    <div className="fixed bottom-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none print:hidden">
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-600/20 pl-4 sm:pl-5 pr-2 py-2 max-w-full">
        <span className="text-xs sm:text-sm font-medium hidden sm:inline whitespace-nowrap">{note}</span>
        <a
          href={href}
          onClick={() => trackEvent('blog_sticky_cta', { href })}
          className="bg-white text-indigo-600 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full hover:bg-indigo-50 transition-colors whitespace-nowrap"
        >
          {label} →
        </a>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="text-white/70 hover:text-white w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors shrink-0"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
