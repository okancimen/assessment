'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import Logo from '@/components/ui/Logo'
import { getDashboardI18n } from '@/lib/dashboard-i18n'

function avatarHue(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360
  return h
}

function initials(name: string | null, email: string) {
  if (name) return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  return email[0].toUpperCase()
}

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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [user, setUser] = useState<{ name: string | null; email: string } | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user: u } }) => {
      if (!u) return
      setUser({
        name: (u.user_metadata?.full_name as string | undefined) ?? null,
        email: u.email ?? '',
      })
    })
  }, [])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [dropdownOpen])

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    setMenuOpen(false)
    setDropdownOpen(false)
    router.push(t.homeHref)
    router.refresh()
  }

  function active(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  const navLinks = [
    { href: t.dashboardHref, label: t.navDashboard, badge: pendingCount },
    { href: '/children/new', label: t.navAddChild },
    ...(isAdmin ? [{ href: '/admin', label: t.navAdmin }] : []),
  ]

  const hue = user ? avatarHue(user.email) : 200
  const ini = user ? initials(user.name, user.email) : '?'

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: '#1E293B', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between" style={{ height: '52px' }}>

        {/* Logo + links */}
        <div className="flex items-center gap-7">
          <Logo href={t.homeHref} size="sm" className="[&_span]:!text-white" />
          <div className="hidden sm:flex items-center gap-0.5">
            {navLinks.map(({ href, label, badge }) => {
              const isActive = active(href)
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: isActive ? '#F8FAFC' : '#94A3B8',
                  }}
                  onMouseOver={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#CBD5E1' }}
                  onMouseOut={(e) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = '#94A3B8' }}
                >
                  {label}
                  {badge != null && badge > 0 && (
                    <span className="inline-flex items-center justify-center bg-amber-500 text-white text-[9px] font-bold min-w-[14px] h-3.5 px-0.5 rounded-full leading-none">
                      {badge > 9 ? '9+' : badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Avatar dropdown (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-2">

          {user && (
            <div className="relative hidden sm:block" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((o) => !o)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ backgroundColor: `hsl(${hue}, 45%, 42%)` }}
                aria-label="Account menu"
                aria-expanded={dropdownOpen}
              >
                {ini}
              </button>

              {dropdownOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-52 rounded-xl border shadow-lg overflow-hidden z-50"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8ECF2' }}
                >
                  <div className="px-4 py-3 border-b" style={{ borderColor: '#E8ECF2' }}>
                    {user.name && (
                      <p className="text-xs font-semibold truncate" style={{ color: '#1E293B' }}>{user.name}</p>
                    )}
                    <p className="text-xs truncate mt-0.5" style={{ color: '#64748B' }}>{user.email}</p>
                  </div>
                  <div className="p-1.5">
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left text-xs font-medium px-3 py-2 rounded-lg transition-colors hover:bg-[#F8FAFC]"
                      style={{ color: '#64748B' }}
                    >
                      {t.navSignOut}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden w-8 h-8 flex items-center justify-center rounded-lg transition-colors"
            style={{
              color: '#94A3B8',
              backgroundColor: menuOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
            }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
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

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="sm:hidden border-t"
          style={{ backgroundColor: '#1E293B', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {user && (
            <div
              className="flex items-center gap-3 px-5 py-4 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: `hsl(${hue}, 45%, 42%)` }}
              >
                {ini}
              </div>
              <div className="min-w-0">
                {user.name && (
                  <p className="text-sm font-semibold truncate" style={{ color: '#F1F5F9' }}>{user.name}</p>
                )}
                <p className="text-xs truncate" style={{ color: '#64748B' }}>{user.email}</p>
              </div>
            </div>
          )}

          <div className="px-3 py-3 space-y-0.5">
            {navLinks.map(({ href, label, badge }) => {
              const isActive = active(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: isActive ? '#F8FAFC' : '#94A3B8',
                  }}
                >
                  <span>{label}</span>
                  {badge != null && badge > 0 && (
                    <span className="inline-flex items-center justify-center bg-amber-500 text-white text-[9px] font-bold min-w-[14px] h-3.5 px-0.5 rounded-full leading-none">
                      {badge > 9 ? '9+' : badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="px-3 pb-4 border-t pt-2" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            <button
              onClick={handleSignOut}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ color: '#64748B' }}
              onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = '#94A3B8')}
              onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = '#64748B')}
            >
              {t.navSignOut}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
