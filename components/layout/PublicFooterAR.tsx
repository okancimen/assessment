import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterAR() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]" dir="rtl">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/ar" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              تعرّف على طفلك أبعد من الدرجات.
            </p>
            <Link
              href="/ar/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              ← ابدأ التقييم المجاني
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">التدريب</p>
              <ul className="space-y-2.5">
                <li><Link href="https://eduentry.ai/ar" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">تقييم التدريب</Link></li>
                <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">تقديم طلب</Link></li>
                <li><Link href="/ar/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">المدونة</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">المنصة</p>
              <ul className="space-y-2.5">
                <li><Link href="/ar/hawlana" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">من نحن</Link></li>
                <li><Link href="/ar/manhajiyya" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">المنهجية</Link></li>
                <li><Link href="/ar/taqrir-namudhaji" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">تقرير نموذجي</Link></li>
                <li><Link href="/ar/taqyim-al-shakhsiya" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">تقييم الشخصية</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">الحساب</p>
              <ul className="space-y-2.5">
                <li><Link href="/ar/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">تسجيل الدخول</Link></li>
                <li><Link href="/ar/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">إنشاء حساب</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">لوحة التحكم</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">قانوني</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">الخصوصية</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">الشروط</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">الخصوصية</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">الشروط</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
