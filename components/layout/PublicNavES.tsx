'use client'

import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'

export default function PublicNavES() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/es" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/es"                  className="hover:opacity-50 transition-opacity">Prácticas</Link>
          <Link href="/es/sobre-nosotros"   className="hover:opacity-50 transition-opacity">Sobre nosotros</Link>
          <Link href="/es/metodologia"      className="hover:opacity-50 transition-opacity">Metodología</Link>
          <Link href="/es/blog"             className="hover:opacity-50 transition-opacity">Blog</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/auth/login"          className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">Iniciar sesión</Link>
          <Link href="/internship/apply" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Empezar gratis</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
