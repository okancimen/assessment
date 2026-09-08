'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const EN_TO_ES: Record<string, string> = {
  '/': '/es',
  '/internship': '/es',
  '/blog': '/es/blog',
  '/about': '/es/sobre-nosotros',
  '/methodology': '/es/metodologia',
}

const ES_TO_EN: Record<string, string> = {
  '/es': '/',
  '/es/blog': '/blog',
  '/es/sobre-nosotros': '/about',
  '/es/metodologia': '/methodology',
}

function getEsHref(pathname: string): string {
  if (pathname.startsWith('/es')) return pathname
  if (EN_TO_ES[pathname]) return EN_TO_ES[pathname]
  if (pathname.startsWith('/blog/')) return '/es/blog'
  return '/es'
}

function getEnHref(pathname: string): string {
  if (!pathname.startsWith('/es')) return pathname === '/' ? '/' : pathname
  if (ES_TO_EN[pathname]) return ES_TO_EN[pathname]
  if (pathname.startsWith('/es/blog/')) return '/blog'
  return '/'
}

function detectLang(pathname: string): 'EN' | 'ES' | 'TR' {
  if (pathname.startsWith('/es')) return 'ES'
  if (pathname.startsWith('/tr')) return 'TR'
  return 'EN'
}

const LANG_META = {
  EN: { flag: '🇬🇧', label: 'English' },
  ES: { flag: '🇪🇸', label: 'Español' },
  TR: { flag: '🇹🇷', label: 'Türkçe' },
}

export default function LanguagePickerMain() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const activeLang = detectLang(pathname)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const languages = [
    { code: 'EN' as const, href: getEnHref(pathname) },
    { code: 'ES' as const, href: getEsHref(pathname) },
    { code: 'TR' as const, href: 'https://eduentry.ai/tr' },
  ]

  const active = LANG_META[activeLang]

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-xs text-[#1d1d1f] hover:opacity-60 transition-opacity select-none"
        aria-label="Select language"
      >
        <span>{active.flag}</span>
        <span className="font-medium">{activeLang}</span>
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
            {languages.map(({ code, href }) => {
              const meta = LANG_META[code]
              const isActive = code === activeLang
              return (
                <a
                  key={code}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{meta.flag}</span>
                    <span className="text-xs text-[#1d1d1f]">{meta.label}</span>
                  </span>
                  {isActive && (
                    <svg className="w-3 h-3 text-[#4F46E5]" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 5l3.5 3.5L11 1" />
                    </svg>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
