import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterTR() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">

        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-16 mb-10">

          {/* Brand block */}
          <div className="mb-10 lg:mb-0">
            <Logo href="/tr" size="sm" />
            <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">
              Notların ötesinde çocuğunuzu tanıyın.
            </p>
            <Link
              href="/tr/auth/register"
              className="mt-4 inline-block bg-[#4F46E5] text-white text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Ücretsiz Değerlendirmeyi Başlat →
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Staj</p>
              <ul className="space-y-2.5">
                <li><Link href="https://eduentry.ai/tr" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Staj Değerlendirmesi</Link></li>
                <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Hemen başvur</Link></li>
                <li><Link href="/tr/blog" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Platform</p>
              <ul className="space-y-2.5">
                <li><Link href="/tr/hakkimizda" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Hakkımızda</Link></li>
                <li><Link href="/tr/metodoloji" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Metodoloji</Link></li>
                <li><Link href="/tr/ornek-rapor" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Örnek Rapor</Link></li>
                <li><Link href="/tr/kisilik-degerlendirmesi" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Kişilik Değerlendirmesi</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Hesap</p>
              <ul className="space-y-2.5">
                <li><Link href="/tr/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Giriş yap</Link></li>
                <li><Link href="/tr/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Hesap oluştur</Link></li>
                <li><Link href="/dashboard" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Kontrol paneli</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#1d1d1f] mb-3">Hukuki</p>
              <ul className="space-y-2.5">
                <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Gizlilik</Link></li>
                <li><Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Koşullar</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d2d2d7] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-[#6e6e73]">© 2026 Eduentry. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Gizlilik</Link>
            <Link href="/terms" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Koşullar</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
