import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'

export default function PublicNavAR() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between gap-3 lg:gap-6 relative" dir="rtl">
        <Logo href="/ar" size="sm" />

        <div className="hidden lg:flex flex-1 min-w-0 justify-center items-center gap-5 xl:gap-8 whitespace-nowrap text-[14px] font-medium text-[#1d1d1f]">
          <Link href="https://eduentry.ai/ar"          className="hover:text-[#4F46E5] transition-colors">التدريب</Link>
          <Link href="/ar/imkaniyat-tiflik" className="hover:text-[#4F46E5] transition-colors">إمكانيات طفلك</Link>
          <Link href="/ar/hawlana"          className="hover:text-[#4F46E5] transition-colors">من نحن</Link>
          <Link href="/ar/manhajiyya" className="hover:text-[#4F46E5] transition-colors">المنهجية</Link>
          <Link href="/ar/blog"       className="hover:text-[#4F46E5] transition-colors flex items-center gap-1.5">
            المدونة
            <span className="inline-flex items-center justify-center bg-[#4F46E5] text-white text-[9px] font-bold rounded-full min-w-[16px] h-4 px-1 leading-none">
              {BLOG_POSTS_AR.length}
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 shrink-0 whitespace-nowrap">
          <Link href="/ar/auth/login"    className="text-xs text-[#1d1d1f] hover:text-[#4F46E5] transition-colors hidden sm:block">تسجيل الدخول</Link>
          <Link href="/ar/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">ابدأ مجاناً</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
