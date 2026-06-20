'use client'

import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

interface CtaLinkProps {
  href: string
  label: string
  className?: string
  children: React.ReactNode
}

export default function CtaLink({ href, label, className, children }: CtaLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent('cta_click', { label })}
    >
      {children}
    </Link>
  )
}
