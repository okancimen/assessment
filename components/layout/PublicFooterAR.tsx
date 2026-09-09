import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterAR() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">التدريب</p>
            <ul>
              <li><Link href="/ar"               className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">تقييم التدريب</Link></li>
              <li><Link href="/internship/apply"  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">تقديم طلب</Link></li>
              <li><Link href="/ar/blog"           className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">المدونة</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">المنصة</p>
            <ul>
              <li><Link href="/ar/hawlana"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">من نحن</Link></li>
              <li><Link href="/ar/manhajiyya" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">المنهجية</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">الحساب</p>
            <ul>
              <li><Link href="/ar/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">تسجيل الدخول</Link></li>
              <li><Link href="/ar/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">إنشاء حساب</Link></li>
              <li><Link href="/dashboard"        className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">لوحة التحكم</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">قانوني</p>
            <ul>
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">الخصوصية</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">الشروط</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/ar" size="sm" />
          <p className="text-xs text-[#6e6e73]">حقوق النشر © 2026 Eduentry. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
