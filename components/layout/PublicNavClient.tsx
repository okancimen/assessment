'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'
import { createClient } from '@/lib/supabase/client'

type Locale = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

interface DropdownItem { href: string; label: string }
interface NavLink {
  href: string
  label: string
  external?: boolean
  dropdown?: DropdownItem[]
}
interface LocaleConfig {
  dir: 'ltr' | 'rtl'
  logoHref: string
  links: NavLink[]
  blogHref: string
  blogLabel: string
  signIn: string
  signInHref: string
  getStarted: string
  getStartedHref: string
  dashboard: string
  dashboardHref: string
}

const CONFIGS: Record<Locale, LocaleConfig> = {
  en: {
    dir: 'ltr',
    logoHref: '/',
    links: [
      {
        href: '/11-plus',
        label: '11+ & Grammar',
        dropdown: [
          { href: '/11-plus', label: '11+ Prep' },
          { href: '/grammar-schools', label: 'Grammar Schools' },
        ],
      },
      { href: '/subjects', label: 'Subjects' },
      { href: 'https://eduentry.ai/en', label: 'Internship', external: true },
      { href: '/personality-assessment', label: 'Character Strengths' },
      { href: '/your-childs-potential', label: "Child's Potential" },
    ],
    blogHref: '/blog',
    blogLabel: 'Blog',
    signIn: 'Sign in',
    signInHref: '/auth/login',
    getStarted: 'Get started',
    getStartedHref: '/auth/register',
    dashboard: 'Dashboard',
    dashboardHref: '/dashboard',
  },
  tr: {
    dir: 'ltr',
    logoHref: '/tr',
    links: [
      { href: 'https://eduentry.ai/tr', label: 'Staj', external: true },
      { href: '/tr/kisilik-degerlendirmesi', label: 'Güçlü Yönleri' },
      { href: '/tr/cocugunuzun-potansiyeli', label: 'Akademik Potansiyeli' },
      { href: '/tr/hakkimizda', label: 'Hakkımızda' },
      { href: '/tr/metodoloji', label: 'Metodoloji' },
    ],
    blogHref: '/tr/blog',
    blogLabel: 'Blog',
    signIn: 'Giriş yap',
    signInHref: '/tr/auth/login',
    getStarted: 'Ücretsiz başla',
    getStartedHref: '/tr/auth/register',
    dashboard: 'Panel',
    dashboardHref: '/tr/dashboard',
  },
  es: {
    dir: 'ltr',
    logoHref: '/es',
    links: [
      { href: 'https://eduentry.ai/es', label: 'Prácticas', external: true },
      { href: '/es/evaluacion-de-personalidad', label: 'Evaluación de Personalidad' },
      { href: '/es/potencial-de-tu-hijo', label: 'Potencial' },
      { href: '/es/sobre-nosotros', label: 'Sobre nosotros' },
      { href: '/es/metodologia', label: 'Metodología' },
    ],
    blogHref: '/es/blog',
    blogLabel: 'Blog',
    signIn: 'Iniciar sesión',
    signInHref: '/es/auth/login',
    getStarted: 'Empezar gratis',
    getStartedHref: '/es/auth/register',
    dashboard: 'Panel',
    dashboardHref: '/es/dashboard',
  },
  fr: {
    dir: 'ltr',
    logoHref: '/fr',
    links: [
      { href: 'https://eduentry.ai/fr', label: 'Stages', external: true },
      { href: '/fr/evaluation-de-personnalite', label: 'Évaluation de Personnalité' },
      { href: '/fr/potentiel-de-votre-enfant', label: 'Potentiel' },
      { href: '/fr/a-propos', label: 'À propos' },
      { href: '/fr/methodologie', label: 'Méthodologie' },
    ],
    blogHref: '/fr/blog',
    blogLabel: 'Blog',
    signIn: 'Se connecter',
    signInHref: '/fr/auth/login',
    getStarted: 'Commencer gratuitement',
    getStartedHref: '/fr/auth/register',
    dashboard: 'Tableau de bord',
    dashboardHref: '/fr/dashboard',
  },
  ar: {
    dir: 'rtl',
    logoHref: '/ar',
    links: [
      { href: 'https://eduentry.ai/ar', label: 'التدريب', external: true },
      { href: '/ar/taqyim-al-shakhsiya', label: 'تقييم الشخصية' },
      { href: '/ar/imkaniyat-tiflik', label: 'إمكانيات طفلك' },
      { href: '/ar/hawlana', label: 'من نحن' },
      { href: '/ar/manhajiyya', label: 'المنهجية' },
    ],
    blogHref: '/ar/blog',
    blogLabel: 'المدونة',
    signIn: 'تسجيل الدخول',
    signInHref: '/ar/auth/login',
    getStarted: 'ابدأ مجاناً',
    getStartedHref: '/ar/auth/register',
    dashboard: 'لوحة التحكم',
    dashboardHref: '/ar/dashboard',
  },
  ru: {
    dir: 'ltr',
    logoHref: '/ru',
    links: [
      { href: 'https://eduentry.ai/ru', label: 'Стажировка', external: true },
      { href: '/ru/otsenka-lichnosti', label: 'Оценка личности' },
      { href: '/ru/potentsial-vashego-rebyonka', label: 'Потенциал' },
      { href: '/ru/o-nas', label: 'О нас' },
      { href: '/ru/metodologiya', label: 'Методология' },
    ],
    blogHref: '/ru/blog',
    blogLabel: 'Блог',
    signIn: 'Войти',
    signInHref: '/ru/auth/login',
    getStarted: 'Начать бесплатно',
    getStartedHref: '/ru/auth/register',
    dashboard: 'Панель',
    dashboardHref: '/ru/dashboard',
  },
  zh: {
    dir: 'ltr',
    logoHref: '/zh',
    links: [
      { href: 'https://eduentry.ai/zh', label: '实习评估', external: true },
      { href: '/zh/xingge-pinggu', label: '性格评估' },
      { href: '/zh/haizi-de-qianli', label: '孩子潜力' },
      { href: '/zh/guanyu-women', label: '关于我们' },
      { href: '/zh/fangfalun', label: '方法论' },
    ],
    blogHref: '/zh/blog',
    blogLabel: '博客',
    signIn: '登录',
    signInHref: '/zh/auth/login',
    getStarted: '免费开始',
    getStartedHref: '/zh/auth/register',
    dashboard: '控制台',
    dashboardHref: '/zh/dashboard',
  },
}

export default function PublicNavClient({
  locale,
  blogCount,
}: {
  locale: Locale
  blogCount: number
}) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [authed, setAuthed] = useState(false)
  const cfg = CONFIGS[locale]

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > 8)
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthed(!!session)
    })
  }, [])

  function isActive(href: string): boolean {
    if (href.startsWith('http')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  function isLinkActive(link: NavLink): boolean {
    if (link.dropdown) return link.dropdown.some((d) => isActive(d.href))
    return isActive(link.href)
  }

  function linkCls(active: boolean) {
    return `transition-colors ${active ? 'text-[#4F46E5]' : 'text-[#1d1d1f] hover:text-[#4F46E5]'}`
  }

  const blogActive = isActive(cfg.blogHref)

  return (
    <nav
      dir={cfg.dir}
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-black/[0.08]'
          : 'bg-transparent border-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between gap-3 lg:gap-6 relative">
        <Logo href={cfg.logoHref} size="sm" />

        {/* Desktop links */}
        <div className="hidden lg:flex flex-1 min-w-0 justify-center items-center gap-5 xl:gap-8 whitespace-nowrap text-[14px] font-medium">
          {cfg.links.map((link) => {
            const active = isLinkActive(link)
            if (link.dropdown) {
              const isOpen = openDropdown === link.href
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenDropdown(null)
                    }
                  }}
                >
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : link.href)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setOpenDropdown(null)
                      if (e.key === 'ArrowDown') {
                        e.preventDefault()
                        setOpenDropdown(link.href)
                        // focus first item on next tick
                        setTimeout(() => {
                          const panel = e.currentTarget.nextElementSibling
                          const first = panel?.querySelector<HTMLElement>('a')
                          first?.focus()
                        }, 0)
                      }
                    }}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`flex items-center gap-1 select-none ${linkCls(active)}`}
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 opacity-60 transition-transform ${isOpen ? 'rotate-180' : 'group-hover:rotate-180'}`}
                      viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 ${isOpen ? 'block' : 'hidden group-hover:block'}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setOpenDropdown(null)
                    }}
                  >
                    <div className="bg-white rounded-2xl border border-[#d2d2d7] shadow-lg py-2 min-w-[160px]">
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            const items = (e.currentTarget.closest('[role]')?.querySelectorAll('a') ??
                              e.currentTarget.parentElement?.querySelectorAll('a')) as NodeListOf<HTMLElement>
                            if (e.key === 'ArrowDown') { e.preventDefault(); items[i + 1]?.focus() }
                            if (e.key === 'ArrowUp')   { e.preventDefault(); i === 0 ? setOpenDropdown(null) : items[i - 1]?.focus() }
                          }}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2 text-[13px] font-medium hover:bg-[#f5f5f7] transition-colors rounded-xl mx-1 ${isActive(item.href) ? 'text-[#4F46E5]' : 'text-[#1d1d1f] hover:text-[#4F46E5]'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            if (link.external) {
              return (
                <a key={link.href} href={link.href} className={linkCls(false)}>
                  {link.label}
                </a>
              )
            }
            return (
              <Link key={link.href} href={link.href} className={linkCls(active)}>
                {link.label}
              </Link>
            )
          })}
          <Link href={cfg.blogHref} className={`flex items-center gap-1.5 ${linkCls(blogActive)}`}>
            {cfg.blogLabel}
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {blogCount}
            </span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0 whitespace-nowrap">
          {authed ? (
            <Link
              href={cfg.dashboardHref}
              className="text-xs font-semibold bg-[#4F46E5] text-white px-3.5 py-1.5 rounded-full hover:bg-[#4338CA] transition-colors"
            >
              {cfg.dashboard} →
            </Link>
          ) : (
            <>
              <Link
                href={cfg.signInHref}
                className="text-xs text-[#1d1d1f] hover:text-[#4F46E5] transition-colors hidden sm:block"
              >
                {cfg.signIn}
              </Link>
              <Link
                href={cfg.getStartedHref}
                prefetch={false}
                className="text-xs font-semibold bg-[#4F46E5] text-white px-3.5 py-1.5 rounded-full hover:bg-[#4338CA] transition-colors"
              >
                {cfg.getStarted}
              </Link>
            </>
          )}
          <LanguagePickerMain />
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-black/[0.06] transition-colors text-[#1d1d1f]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M2.5 5.5h13M2.5 9h13M2.5 12.5h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-black/[0.08] bg-white/[0.97] backdrop-blur-xl px-6 py-4 flex flex-col">
          {cfg.links.map((link) => {
            if (link.dropdown) {
              return link.dropdown.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 text-sm font-medium transition-colors border-b border-[#f5f5f7] last:border-0 ${isActive(item.href) ? 'text-[#4F46E5]' : 'text-[#1d1d1f] hover:text-[#4F46E5]'}`}
                >
                  {item.label}
                </Link>
              ))
            }
            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-[#1d1d1f] hover:text-[#4F46E5] transition-colors border-b border-[#f5f5f7]"
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-2.5 text-sm font-medium transition-colors border-b border-[#f5f5f7] ${isActive(link.href) ? 'text-[#4F46E5]' : 'text-[#1d1d1f] hover:text-[#4F46E5]'}`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href={cfg.blogHref}
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 py-2.5 text-sm font-medium transition-colors border-b border-[#f5f5f7] ${blogActive ? 'text-[#4F46E5]' : 'text-[#1d1d1f] hover:text-[#4F46E5]'}`}
          >
            {cfg.blogLabel}
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {blogCount}
            </span>
          </Link>
          <div className="pt-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {authed ? (
                <Link
                  href={cfg.dashboardHref}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold bg-[#4F46E5] text-white px-4 py-1.5 rounded-full hover:bg-[#4338CA] transition-colors"
                >
                  {cfg.dashboard} →
                </Link>
              ) : (
                <>
                  <Link
                    href={cfg.signInHref}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-[#1d1d1f] hover:text-[#4F46E5] transition-colors"
                  >
                    {cfg.signIn}
                  </Link>
                  <Link
                    href={cfg.getStartedHref}
                    prefetch={false}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold bg-[#4F46E5] text-white px-4 py-1.5 rounded-full hover:bg-[#4338CA] transition-colors"
                  >
                    {cfg.getStarted}
                  </Link>
                </>
              )}
            </div>
            <LanguagePickerMain />
          </div>
        </div>
      )}
    </nav>
  )
}
