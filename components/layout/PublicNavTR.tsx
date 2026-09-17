
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

export default function PublicNavTR() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/tr" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-[14px] font-medium text-[#1d1d1f]">
          <Link href="/tr/staj"        className="hover:text-[#4F46E5] transition-colors">Staj</Link>
          <Link href="/tr/hakkimizda"  className="hover:text-[#4F46E5] transition-colors">Hakkımızda</Link>
          <Link href="/tr/metodoloji"  className="hover:text-[#4F46E5] transition-colors">Metodoloji</Link>
          <Link href="/tr/blog"        className="hover:text-[#4F46E5] transition-colors flex items-center gap-1.5">
            Blog
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {BLOG_POSTS_TR.length}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/tr/auth/login"    className="text-xs text-[#1d1d1f] hover:text-[#4F46E5] transition-colors hidden sm:block">Giriş yap</Link>
          <Link href="/tr/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Ücretsiz başla</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
