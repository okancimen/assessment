'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const TRACKS_EN = [
  { href: '/tech',               label: 'Technology' },
  { href: '/business',           label: 'Business' },
  { href: '/data-analytics',     label: 'Data Analytics' },
  { href: '/digital-marketing',  label: 'Digital Marketing' },
]

const TRACKS_TR = [
  { href: '/tech',               label: 'Teknoloji' },
  { href: '/business',           label: 'İş Dünyası' },
  { href: '/data-analytics',     label: 'Veri Analitiği' },
  { href: '/digital-marketing',  label: 'Dijital Pazarlama' },
]

const LABELS_EN = {
  tracks:     'Tracks',
  learn:      'Learn',
  account:    'Account',
  legal:      'Legal',
  howItWorks: 'How it works',
  blog:       'Blog',
  signIn:     'Sign in',
  applyFree:  'Apply free',
  privacy:    'Privacy',
  terms:      'Terms',
  copyright:  '© 2026 Eduentry. All rights reserved.',
}

const TRACKS_ES = [
  { href: '/tech',               label: 'Tecnología' },
  { href: '/business',           label: 'Empresa' },
  { href: '/data-analytics',     label: 'Análisis de datos' },
  { href: '/digital-marketing',  label: 'Marketing digital' },
]

const LABELS_TR = {
  tracks:     'Alanlar',
  learn:      'Keşfet',
  account:    'Hesap',
  legal:      'Hukuki',
  howItWorks: 'Nasıl çalışır',
  blog:       'Blog',
  signIn:     'Giriş yap',
  applyFree:  'Ücretsiz başvur',
  privacy:    'Gizlilik',
  terms:      'Kullanım şartları',
  copyright:  '© 2026 Eduentry. Tüm hakları saklıdır.',
}

const LABELS_ES = {
  tracks:     'Áreas',
  learn:      'Explorar',
  account:    'Cuenta',
  legal:      'Legal',
  howItWorks: 'Cómo funciona',
  blog:       'Blog',
  signIn:     'Iniciar sesión',
  applyFree:  'Solicitar gratis',
  privacy:    'Privacidad',
  terms:      'Términos de uso',
  copyright:  '© 2026 Eduentry. Todos los derechos reservados.',
}

export default function PublicFooterAI() {
  const pathname = usePathname()
  const isTR = pathname === '/tr' || pathname.startsWith('/tr/')
  const isES = pathname === '/es' || pathname.startsWith('/es/')
  const L = isTR ? LABELS_TR : isES ? LABELS_ES : LABELS_EN
  const tracks = isTR ? TRACKS_TR : isES ? TRACKS_ES : TRACKS_EN
  const home = isTR ? '/tr' : isES ? '/es' : '/'
  const blog = isTR ? '/tr/blog' : isES ? '/es/blog' : '/blog'
  const howItWorks = isTR ? '/tr#how-it-works' : isES ? '/es#how-it-works' : '/#how-it-works'

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">{L.tracks}</p>
            <ul className="space-y-2">
              {tracks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">{L.learn}</p>
            <ul className="space-y-2">
              <li><Link href={howItWorks} className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.howItWorks}</Link></li>
              <li><Link href={blog} className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.blog}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">{L.account}</p>
            <ul className="space-y-2">
              <li><Link href="/auth/login"    className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.signIn}</Link></li>
              <li><Link href="/apply"         className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.applyFree}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">{L.legal}</p>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.privacy}</Link></li>
              <li><Link href="/terms"   className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.terms}</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#d2d2d7] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <Link href={home}>
            <Image src="/logo-ai.png" alt="Eduentry.ai" width={48} height={48} className="object-contain" />
          </Link>
          <p className="text-xs text-[#6e6e73]">{L.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
