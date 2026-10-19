'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const TABS = [
  { href: '/admin',        label: 'Overview'      },
  { href: '/admin/active', label: 'Active users'  },
]

export default function AdminTabs() {
  const path = usePathname()
  return (
    <div className="flex gap-1 border-b" style={{ borderColor: '#E2E6EF' }}>
      {TABS.map(({ href, label }) => {
        const active = href === '/admin' ? path === '/admin' : path.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            className="relative px-4 py-2.5 text-sm font-medium transition-colors"
            style={{ color: active ? '#0F172A' : '#94A3B8' }}
          >
            {label}
            {active && (
              <span
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-t"
                style={{ backgroundColor: '#C9883A' }}
              />
            )}
          </Link>
        )
      })}
    </div>
  )
}
