'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, GraduationCap, Briefcase, ClipboardList } from 'lucide-react'

const NAV = [
  { href: '/admin',            label: 'Dashboard',         icon: LayoutDashboard, exact: true  },
  { href: '/admin/guests',     label: 'Guest assessments', icon: ClipboardList,   exact: false },
  { href: '/admin/cohorts',    label: 'Cohorts',           icon: GraduationCap,   exact: false },
  { href: '/admin/internship', label: 'Internship',        icon: Briefcase,       exact: false },
]

export default function AdminSidebar() {
  const path = usePathname()
  return (
    <aside
      className="w-[220px] min-h-screen flex-shrink-0 flex flex-col"
      style={{ backgroundColor: '#19243A' }}
    >
      <div
        className="px-5 py-[22px] flex items-center gap-2.5 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <span className="text-sm font-semibold text-white tracking-tight">Eduentry</span>
        <span
          className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
          style={{ backgroundColor: '#C9883A', color: '#fff' }}
        >
          admin
        </span>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-0.5">
        {NAV.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? path === href : path.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                backgroundColor: active ? 'rgba(255,255,255,0.07)' : 'transparent',
                color: active ? '#F1F5F9' : '#64748B',
              }}
            >
              <Icon size={15} strokeWidth={1.75} />
              <span>{label}</span>
              {active && (
                <span
                  className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#C9883A' }}
                />
              )}
            </Link>
          )
        })}
      </nav>

      <div className="px-5 pb-6 text-[11px]" style={{ color: '#334155' }}>
        Platform admin
      </div>
    </aside>
  )
}
