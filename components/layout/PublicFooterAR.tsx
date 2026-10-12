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
            <div className="mt-4 flex items-center gap-3">
              <a href="https://x.com/eduentrycom" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.2 2.25h6.967l4.255 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
              </a>
              <a href="https://www.youtube.com/@eduentrycom" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/eduentrycom" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
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
