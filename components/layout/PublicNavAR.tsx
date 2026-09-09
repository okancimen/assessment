import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import LanguagePickerMain from '@/components/ui/LanguagePickerMain'

export default function PublicNavAR() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative" dir="rtl">
        <Logo href="/ar" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/ar"              className="hover:opacity-50 transition-opacity">التدريب</Link>
          <Link href="/ar/hawlana"      className="hover:opacity-50 transition-opacity">من نحن</Link>
          <Link href="/ar/manhajiyya"   className="hover:opacity-50 transition-opacity">المنهجية</Link>
          <Link href="/ar/blog"         className="hover:opacity-50 transition-opacity">المدونة</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/ar/auth/login"    className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">تسجيل الدخول</Link>
          <Link href="/ar/auth/register" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">ابدأ مجاناً</Link>
          <LanguagePickerMain />
        </div>
      </div>
    </nav>
  )
}
