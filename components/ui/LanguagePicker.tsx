'use client'

import { useState, useRef, useEffect } from 'react'

const LANGUAGES = [
  { code: 'EN', label: 'English',  flag: '🇬🇧', href: '/' },
  { code: 'TR', label: 'Türkçe',   flag: '🇹🇷', href: '#' },
  { code: 'AR', label: 'العربية',  flag: '🇸🇦', href: '#' },
  { code: 'ZH', label: '中文',     flag: '🇨🇳', href: '#' },
]

export default function LanguagePicker({ current = 'EN' }: { current?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const active = LANGUAGES.find(l => l.code === current) ?? LANGUAGES[0]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity select-none"
        aria-label="Select language"
      >
        <span>{active.flag}</span>
        <span className="font-medium">{active.code}</span>
        <svg
          className={`w-2 h-2 mt-px transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 8 5" fill="currentColor" aria-hidden="true"
        >
          <path d="M0 0l4 5 4-5z" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full right-0 pt-3 z-50">
          <div className="bg-white rounded-2xl border border-[#d2d2d7] shadow-xl shadow-black/[0.08] p-1.5 w-40">
            {LANGUAGES.map(({ code, label, flag, href }) => (
              <a
                key={code}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#f5f5f7] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{flag}</span>
                  <span className="text-xs text-[#1d1d1f]">{label}</span>
                </span>
                {code === current && (
                  <svg className="w-3 h-3 text-[#4F46E5]" viewBox="0 0 12 10" fill="currentColor">
                    <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
