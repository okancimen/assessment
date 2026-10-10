'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import Logo from '@/components/ui/Logo'
import { getDashboardI18n } from '@/lib/dashboard-i18n'

export default function Navbar({
  locale,
  isAdmin,
  pendingCount,
}: {
  locale?: string
  isAdmin?: boolean
  pendingCount?: number
}) {
  const router = useRouter()
  const pathname = usePathname()
  const t = getDashboardI18n(locale)
  const [menuOpen, setMenuOpen] = useState(false)
  const [displayName, setDisplayName] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return
      const name =
        (user.user_metadata?.full_name as string | undefined)?.split(' ')[0] ||
        user.email?.split('@')[0] ||
        null
      setDisplayName(name)
    })
  }, [])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setMenuOpen(false)
    router.push(t.homeHref)
    router.refresh()
  }

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  function linkCls(href: string) {
    return `transition-colors ${
      isActive(href)
        ? 'text-[#4F46E5] font-semibold'
        : 'text-[#1d1d1f] hover:text-[#4F46E5]'
    }`
  }

  const navLinks = (
    <>
      <Link
        href={t.dashboardHref}
        className={`relative inline-flex items-center ${linkCls(t.dashboardHref)}`}
        onClick={() => setMenuOpen(false)}
      >
        {t.navDashboard}
        {pendingCount != null && pendingCount > 0 && (
          <span className="ml-1 inline-flex items-center justify-center bg-amber-500 text-white text-[9px] font-bold min-w-[14px] h-3.5 px-0.5 rounded-full leading-none">
            {pendingCount > 9 ? '9+' : pendingCount}
          </span>
        )}
      </Link>
      <Link
        href="/children/new"
        className={linkCls('/children/new')}
        onClick={() => setMenuOpen(false)}
      >
        {t.navAddChild}
      </Link>
      {isAdmin && (
        <Link
          href="/admin"
          className={linkCls('/admin')}
          onClick={() => setMenuOpen(false)}
        >
          {t.navAdmin}
        </Link>
      )}
    </>
  )

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-[#d2d2d7]/60">
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Logo href={t.homeHref} size="sm" />
          <div className="hidden sm:flex items-center gap-6 text-xs font-medium">
            {navLinks}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {displayName && (
            <span className="hidden sm:block text-xs text-[#6e6e73] mr-1">{displayName}</span>
          )}
          <button
            onClick={handleSignOut}
            className="text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors px-3 py-1.5 rounded-full hover:bg-[#f5f5f7]"
          >
            {t.navSignOut}
          </button>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden p-1.5 rounded-lg hover:bg-[#f5f5f7] transition-colors text-[#1d1d1f]"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 5h12M2 8h12M2 11h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden border-t border-[#d2d2d7]/60 bg-[rgba(255,255,255,0.97)] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {displayName && (
            <span className="text-xs text-[#6e6e73] pb-2 border-b border-[#f5f5f7]">{displayName}</span>
          )}
          {navLinks}
        </div>
      )}
    </nav>
  )
}
