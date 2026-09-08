import Link from 'next/link'
import Logo from '@/components/ui/Logo'

export default function PublicFooterTR() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Staj</p>
            <ul>
              <li><Link href="/tr"              className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Staj Değerlendirmesi</Link></li>
              <li><Link href="/internship/apply" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Hemen başvur</Link></li>
              <li><Link href="/tr/blog"         className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Blog</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Platform</p>
            <ul>
              <li><Link href="/tr/hakkimizda"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Hakkımızda</Link></li>
              <li><Link href="/tr/metodoloji"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Metodoloji</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Hesap</p>
            <ul>
              <li><Link href="/tr/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Giriş yap</Link></li>
              <li><Link href="/tr/auth/register" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Hesap oluştur</Link></li>
              <li><Link href="/dashboard"     className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Kontrol paneli</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-1">Hukuki</p>
            <ul>
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Gizlilik</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors block py-3">Koşullar</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Logo href="/tr" size="sm" />
          <p className="text-xs text-[#6e6e73]">Copyright © 2026 Eduentry. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
