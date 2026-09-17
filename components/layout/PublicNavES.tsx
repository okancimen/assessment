
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

export default function PublicNavES() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/es" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-[14px] font-medium text-[#1d1d1f]">
          <Link href="/es/practicas"     className="hover:text-[#4F46E5] transition-colors">Prácticas</Link>
          <Link href="/es/sobre-nosotros" className="hover:text-[#4F46E5] transition-colors">Sobre nosotros</Link>
          <Link href="/es/metodologia"    className="hover:text-[#4F46E5] transition-colors">Metodología</Link>
          <Link href="/es/blog"           className="hover:text-[#4F46E5] transition-colors flex items-center gap-1.5">
            Blog
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {BLOG_POSTS_ES.length}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/es/auth/login"    className="text-xs text-[#1d1d1f] hover:text-[#4F46E5] transition-colors hidden sm:block">Iniciar sesión</Link>
          <Link href="/es/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Empezar gratis</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
