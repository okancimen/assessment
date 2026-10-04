
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'

export default function PublicNavFR() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between gap-3 lg:gap-6 relative">
        <Logo href="/fr" size="sm" />

        <div className="hidden lg:flex flex-1 min-w-0 justify-center items-center gap-5 xl:gap-8 whitespace-nowrap text-[14px] font-medium text-[#1d1d1f]">
          <Link href="https://eduentry.ai/fr"                       className="hover:text-[#4F46E5] transition-colors">Stages</Link>
          <Link href="/fr/potentiel-de-votre-enfant" className="hover:text-[#4F46E5] transition-colors">Potentiel</Link>
          <Link href="/fr/a-propos"                   className="hover:text-[#4F46E5] transition-colors">À propos</Link>
          <Link href="/fr/methodologie" className="hover:text-[#4F46E5] transition-colors">Méthodologie</Link>
          <Link href="/fr/blog"         className="hover:text-[#4F46E5] transition-colors flex items-center gap-1.5">
            Blog
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {BLOG_POSTS_FR.length}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 shrink-0 whitespace-nowrap">
          <Link href="/fr/auth/login"    className="text-xs text-[#1d1d1f] hover:text-[#4F46E5] transition-colors hidden sm:block">Se connecter</Link>
          <Link href="/fr/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Commencer gratuitement</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
