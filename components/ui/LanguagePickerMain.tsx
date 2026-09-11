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

const EN_TO_TR: Record<string, string> = {
  '/': '/tr',
  '/internship': '/tr',
  '/blog': '/tr/blog',
  '/about': '/tr/hakkimizda',
  '/methodology': '/tr/metodoloji',
}

const TR_TO_EN: Record<string, string> = {
  '/tr': '/',
  '/tr/blog': '/blog',
  '/tr/hakkimizda': '/about',
  '/tr/metodoloji': '/methodology',
}

const ES_TO_TR: Record<string, string> = {
  '/es': '/tr',
  '/es/blog': '/tr/blog',
  '/es/sobre-nosotros': '/tr/hakkimizda',
  '/es/metodologia': '/tr/metodoloji',
}

const TR_TO_ES: Record<string, string> = {
  '/tr': '/es',
  '/tr/blog': '/es/blog',
  '/tr/hakkimizda': '/es/sobre-nosotros',
  '/tr/metodoloji': '/es/metodologia',
}

const EN_TO_FR: Record<string, string> = {
  '/': '/fr',
  '/internship': '/fr',
  '/blog': '/fr/blog',
  '/about': '/fr/a-propos',
  '/methodology': '/fr/methodologie',
}

const FR_TO_EN: Record<string, string> = {
  '/fr': '/',
  '/fr/blog': '/blog',
  '/fr/a-propos': '/about',
  '/fr/methodologie': '/methodology',
}

const ES_TO_FR: Record<string, string> = {
  '/es': '/fr',
  '/es/blog': '/fr/blog',
  '/es/sobre-nosotros': '/fr/a-propos',
  '/es/metodologia': '/fr/methodologie',
}

const FR_TO_ES: Record<string, string> = {
  '/fr': '/es',
  '/fr/blog': '/es/blog',
  '/fr/a-propos': '/es/sobre-nosotros',
  '/fr/methodologie': '/es/metodologia',
}

const TR_TO_FR: Record<string, string> = {
  '/tr': '/fr',
  '/tr/blog': '/fr/blog',
  '/tr/hakkimizda': '/fr/a-propos',
  '/tr/metodoloji': '/fr/methodologie',
}

const FR_TO_TR: Record<string, string> = {
  '/fr': '/tr',
  '/fr/blog': '/tr/blog',
  '/fr/a-propos': '/tr/hakkimizda',
  '/fr/methodologie': '/tr/metodoloji',
}

const EN_TO_AR: Record<string, string> = {
  '/': '/ar',
  '/internship': '/ar',
  '/blog': '/ar/blog',
  '/about': '/ar/hawlana',
  '/methodology': '/ar/manhajiyya',
}

const AR_TO_EN: Record<string, string> = {
  '/ar': '/',
  '/ar/blog': '/blog',
  '/ar/hawlana': '/about',
  '/ar/manhajiyya': '/methodology',
}

const ES_TO_AR: Record<string, string> = {
  '/es': '/ar',
  '/es/blog': '/ar/blog',
  '/es/sobre-nosotros': '/ar/hawlana',
  '/es/metodologia': '/ar/manhajiyya',
}

const AR_TO_ES: Record<string, string> = {
  '/ar': '/es',
  '/ar/blog': '/es/blog',
  '/ar/hawlana': '/es/sobre-nosotros',
  '/ar/manhajiyya': '/es/metodologia',
}

const TR_TO_AR: Record<string, string> = {
  '/tr': '/ar',
  '/tr/blog': '/ar/blog',
  '/tr/hakkimizda': '/ar/hawlana',
  '/tr/metodoloji': '/ar/manhajiyya',
}

const AR_TO_TR: Record<string, string> = {
  '/ar': '/tr',
  '/ar/blog': '/tr/blog',
  '/ar/hawlana': '/tr/hakkimizda',
  '/ar/manhajiyya': '/tr/metodoloji',
}

const FR_TO_AR: Record<string, string> = {
  '/fr': '/ar',
  '/fr/blog': '/ar/blog',
  '/fr/a-propos': '/ar/hawlana',
  '/fr/methodologie': '/ar/manhajiyya',
}

const AR_TO_FR: Record<string, string> = {
  '/ar': '/fr',
  '/ar/blog': '/fr/blog',
  '/ar/hawlana': '/fr/a-propos',
  '/ar/manhajiyya': '/fr/methodologie',
}

const EN_TO_RU: Record<string, string> = {
  '/': '/ru',
  '/internship': '/ru',
  '/blog': '/ru/blog',
  '/about': '/ru/o-nas',
  '/methodology': '/ru/metodologiya',
}

const RU_TO_EN: Record<string, string> = {
  '/ru': '/',
  '/ru/blog': '/blog',
  '/ru/o-nas': '/about',
  '/ru/metodologiya': '/methodology',
}

const ES_TO_RU: Record<string, string> = {
  '/es': '/ru',
  '/es/blog': '/ru/blog',
  '/es/sobre-nosotros': '/ru/o-nas',
  '/es/metodologia': '/ru/metodologiya',
}

const RU_TO_ES: Record<string, string> = {
  '/ru': '/es',
  '/ru/blog': '/es/blog',
  '/ru/o-nas': '/es/sobre-nosotros',
  '/ru/metodologiya': '/es/metodologia',
}

const TR_TO_RU: Record<string, string> = {
  '/tr': '/ru',
  '/tr/blog': '/ru/blog',
  '/tr/hakkimizda': '/ru/o-nas',
  '/tr/metodoloji': '/ru/metodologiya',
}

const RU_TO_TR: Record<string, string> = {
  '/ru': '/tr',
  '/ru/blog': '/tr/blog',
  '/ru/o-nas': '/tr/hakkimizda',
  '/ru/metodologiya': '/tr/metodoloji',
}

const FR_TO_RU: Record<string, string> = {
  '/fr': '/ru',
  '/fr/blog': '/ru/blog',
  '/fr/a-propos': '/ru/o-nas',
  '/fr/methodologie': '/ru/metodologiya',
}

const RU_TO_FR: Record<string, string> = {
  '/ru': '/fr',
  '/ru/blog': '/fr/blog',
  '/ru/o-nas': '/fr/a-propos',
  '/ru/metodologiya': '/fr/methodologie',
}

const AR_TO_RU: Record<string, string> = {
  '/ar': '/ru',
  '/ar/blog': '/ru/blog',
  '/ar/hawlana': '/ru/o-nas',
  '/ar/manhajiyya': '/ru/metodologiya',
}

const RU_TO_AR: Record<string, string> = {
  '/ru': '/ar',
  '/ru/blog': '/ar/blog',
  '/ru/o-nas': '/ar/hawlana',
  '/ru/metodologiya': '/ar/manhajiyya',
}

function getEsHref(pathname: string): string {
  if (pathname.startsWith('/es')) return pathname
  if (pathname.startsWith('/fr')) {
    if (FR_TO_ES[pathname]) return FR_TO_ES[pathname]
    if (pathname.startsWith('/fr/blog/')) return '/es/blog'
    return '/es'
  }
  if (pathname.startsWith('/tr')) {
    if (TR_TO_ES[pathname]) return TR_TO_ES[pathname]
    if (pathname.startsWith('/tr/blog/')) return '/es/blog'
    return '/es'
  }
  if (pathname.startsWith('/ar')) {
    if (AR_TO_ES[pathname]) return AR_TO_ES[pathname]
    if (pathname.startsWith('/ar/blog/')) return '/es/blog'
    return '/es'
  }
  if (pathname.startsWith('/ru')) {
    if (RU_TO_ES[pathname]) return RU_TO_ES[pathname]
    if (pathname.startsWith('/ru/blog/')) return '/es/blog'
    return '/es'
  }
  if (EN_TO_ES[pathname]) return EN_TO_ES[pathname]
  if (pathname.startsWith('/blog/')) return '/es/blog'
  return '/es'
}

function getTrHref(pathname: string): string {
  if (pathname.startsWith('/tr')) return pathname
  if (pathname.startsWith('/fr')) {
    if (FR_TO_TR[pathname]) return FR_TO_TR[pathname]
    if (pathname.startsWith('/fr/blog/')) return '/tr/blog'
    return '/tr'
  }
  if (pathname.startsWith('/es')) {
    if (ES_TO_TR[pathname]) return ES_TO_TR[pathname]
    if (pathname.startsWith('/es/blog/')) return '/tr/blog'
    return '/tr'
  }
  if (pathname.startsWith('/ar')) {
    if (AR_TO_TR[pathname]) return AR_TO_TR[pathname]
    if (pathname.startsWith('/ar/blog/')) return '/tr/blog'
    return '/tr'
  }
  if (pathname.startsWith('/ru')) {
    if (RU_TO_TR[pathname]) return RU_TO_TR[pathname]
    if (pathname.startsWith('/ru/blog/')) return '/tr/blog'
    return '/tr'
  }
  if (EN_TO_TR[pathname]) return EN_TO_TR[pathname]
  if (pathname.startsWith('/blog/')) return '/tr/blog'
  return '/tr'
}

function getEnHref(pathname: string): string {
  if (pathname.startsWith('/fr')) {
    if (FR_TO_EN[pathname]) return FR_TO_EN[pathname]
    if (pathname.startsWith('/fr/blog/')) return '/blog'
    return '/'
  }
  if (pathname.startsWith('/tr')) {
    if (TR_TO_EN[pathname]) return TR_TO_EN[pathname]
    if (pathname.startsWith('/tr/blog/')) return '/blog'
    return '/'
  }
  if (pathname.startsWith('/ar')) {
    if (AR_TO_EN[pathname]) return AR_TO_EN[pathname]
    if (pathname.startsWith('/ar/blog/')) return '/blog'
    return '/'
  }
  if (pathname.startsWith('/ru')) {
    if (RU_TO_EN[pathname]) return RU_TO_EN[pathname]
    if (pathname.startsWith('/ru/blog/')) return '/blog'
    return '/'
  }
  if (!pathname.startsWith('/es')) return pathname === '/' ? '/' : pathname
  if (ES_TO_EN[pathname]) return ES_TO_EN[pathname]
  if (pathname.startsWith('/es/blog/')) return '/blog'
  return '/'
}

function getFrHref(pathname: string): string {
  if (pathname.startsWith('/fr')) return pathname
  if (pathname.startsWith('/es')) {
    if (ES_TO_FR[pathname]) return ES_TO_FR[pathname]
    if (pathname.startsWith('/es/blog/')) return '/fr/blog'
    return '/fr'
  }
  if (pathname.startsWith('/tr')) {
    if (TR_TO_FR[pathname]) return TR_TO_FR[pathname]
    if (pathname.startsWith('/tr/blog/')) return '/fr/blog'
    return '/fr'
  }
  if (pathname.startsWith('/ar')) {
    if (AR_TO_FR[pathname]) return AR_TO_FR[pathname]
    if (pathname.startsWith('/ar/blog/')) return '/fr/blog'
    return '/fr'
  }
  if (pathname.startsWith('/ru')) {
    if (RU_TO_FR[pathname]) return RU_TO_FR[pathname]
    if (pathname.startsWith('/ru/blog/')) return '/fr/blog'
    return '/fr'
  }
  if (EN_TO_FR[pathname]) return EN_TO_FR[pathname]
  if (pathname.startsWith('/blog/')) return '/fr/blog'
  return '/fr'
}

function getArHref(pathname: string): string {
  if (pathname.startsWith('/ar')) return pathname
  if (pathname.startsWith('/es')) {
    if (ES_TO_AR[pathname]) return ES_TO_AR[pathname]
    if (pathname.startsWith('/es/blog/')) return '/ar/blog'
    return '/ar'
  }
  if (pathname.startsWith('/tr')) {
    if (TR_TO_AR[pathname]) return TR_TO_AR[pathname]
    if (pathname.startsWith('/tr/blog/')) return '/ar/blog'
    return '/ar'
  }
  if (pathname.startsWith('/fr')) {
    if (FR_TO_AR[pathname]) return FR_TO_AR[pathname]
    if (pathname.startsWith('/fr/blog/')) return '/ar/blog'
    return '/ar'
  }
  if (pathname.startsWith('/ru')) {
    if (RU_TO_AR[pathname]) return RU_TO_AR[pathname]
    if (pathname.startsWith('/ru/blog/')) return '/ar/blog'
    return '/ar'
  }
  if (EN_TO_AR[pathname]) return EN_TO_AR[pathname]
  if (pathname.startsWith('/blog/')) return '/ar/blog'
  return '/ar'
}

function getRuHref(pathname: string): string {
  if (pathname.startsWith('/ru')) return pathname
  if (pathname.startsWith('/es')) {
    if (ES_TO_RU[pathname]) return ES_TO_RU[pathname]
    if (pathname.startsWith('/es/blog/')) return '/ru/blog'
    return '/ru'
  }
  if (pathname.startsWith('/tr')) {
    if (TR_TO_RU[pathname]) return TR_TO_RU[pathname]
    if (pathname.startsWith('/tr/blog/')) return '/ru/blog'
    return '/ru'
  }
  if (pathname.startsWith('/fr')) {
    if (FR_TO_RU[pathname]) return FR_TO_RU[pathname]
    if (pathname.startsWith('/fr/blog/')) return '/ru/blog'
    return '/ru'
  }
  if (pathname.startsWith('/ar')) {
    if (AR_TO_RU[pathname]) return AR_TO_RU[pathname]
    if (pathname.startsWith('/ar/blog/')) return '/ru/blog'
    return '/ru'
  }
  if (EN_TO_RU[pathname]) return EN_TO_RU[pathname]
  if (pathname.startsWith('/blog/')) return '/ru/blog'
  return '/ru'
}

function detectLang(pathname: string): 'EN' | 'ES' | 'TR' | 'FR' | 'AR' | 'RU' {
  if (pathname.startsWith('/es')) return 'ES'
  if (pathname.startsWith('/tr')) return 'TR'
  if (pathname.startsWith('/fr')) return 'FR'
  if (pathname.startsWith('/ar')) return 'AR'
  if (pathname.startsWith('/ru')) return 'RU'
  return 'EN'
}

const LANG_META = {
  EN: { flag: '🇬🇧', label: 'English' },
  ES: { flag: '🇪🇸', label: 'Español' },
  TR: { flag: '🇹🇷', label: 'Türkçe' },
  FR: { flag: '🇫🇷', label: 'Français' },
  AR: { flag: '🇸🇦', label: 'العربية' },
  RU: { flag: '🇷🇺', label: 'Русский' },
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
    { code: 'TR' as const, href: getTrHref(pathname) },
    { code: 'FR' as const, href: getFrHref(pathname) },
    { code: 'AR' as const, href: getArHref(pathname) },
    { code: 'RU' as const, href: getRuHref(pathname) },
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
                  onClick={() => {
                    document.cookie = `lang_pref=${code.toLowerCase()}; path=/; max-age=31536000; SameSite=Lax`
                    setOpen(false)
                  }}
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
