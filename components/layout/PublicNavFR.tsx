
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'

export default function PublicNavFR() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/fr" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/fr"              className="hover:opacity-50 transition-opacity">Stages</Link>
          <Link href="/fr/a-propos"     className="hover:opacity-50 transition-opacity">À propos</Link>
          <Link href="/fr/methodologie" className="hover:opacity-50 transition-opacity">Méthodologie</Link>
          <Link href="/fr/blog"         className="hover:opacity-50 transition-opacity">Blog</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/fr/auth/login"    className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">Se connecter</Link>
          <Link href="/fr/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Commencer gratuitement</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
