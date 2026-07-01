'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguagePicker from '@/components/ui/LanguagePicker'

const TRACKS_EN = [
  { href: '/tech',              label: 'Technology',        desc: 'Coding · Algorithms · Cybersecurity' },
  { href: '/business',         label: 'Business',          desc: 'Strategy · Finance · Operations' },
  { href: '/data-analytics',   label: 'Data Analytics',    desc: 'Charts · SQL · Insights' },
  { href: '/digital-marketing',label: 'Digital Marketing', desc: 'SEO · Social · Campaigns' },
]

const TRACKS_TR = [
  { href: '/tr/tech',              label: 'Teknoloji',         desc: 'Kodlama · Algoritmalar · Siber Güvenlik' },
  { href: '/tr/business',         label: 'İş Dünyası',        desc: 'Strateji · Finans · Operasyon' },
  { href: '/tr/data-analytics',   label: 'Veri Analitiği',    desc: 'Grafikler · SQL · İçgörüler' },
  { href: '/tr/digital-marketing',label: 'Dijital Pazarlama', desc: 'SEO · Sosyal Medya · Kampanyalar' },
]

const TRACKS_ES = [
  { href: '/es/tech',              label: 'Tecnología',        desc: 'Programación · Algoritmos · Ciberseguridad' },
  { href: '/es/business',         label: 'Empresa',           desc: 'Estrategia · Finanzas · Operaciones' },
  { href: '/es/data-analytics',   label: 'Análisis de datos', desc: 'Gráficos · SQL · Insights' },
  { href: '/es/digital-marketing',label: 'Marketing digital', desc: 'SEO · Redes sociales · Campañas' },
]

const NAV_TR = {
  howItWorks: 'Nasıl çalışır',
  tracks: 'Alanlar',
  signIn: 'Giriş yap',
  applyFree: 'Ücretsiz başvur',
}

const NAV_ES = {
  howItWorks: 'Cómo funciona',
  tracks: 'Áreas',
  signIn: 'Iniciar sesión',
  applyFree: 'Solicitar gratis',
}

const NAV_EN = {
  howItWorks: 'How it works',
  tracks: 'Tracks',
  signIn: 'Sign in',
  applyFree: 'Apply free',
}

export default function PublicNavAI() {
  const pathname = usePathname()
  const isTR = pathname === '/tr' || pathname.startsWith('/tr/')
  const isES = pathname === '/es' || pathname.startsWith('/es/')
  const nav = isTR ? NAV_TR : isES ? NAV_ES : NAV_EN
  const tracks = isTR ? TRACKS_TR : isES ? TRACKS_ES : TRACKS_EN

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Link href={isTR ? '/tr' : isES ? '/es' : '/'}>
          <Image src="/logo-ai.png" alt="Eduentry.ai" width={64} height={64} className="object-contain" priority />
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href={isTR ? '/tr#how-it-works' : isES ? '/es#how-it-works' : '/#how-it-works'} className="hover:opacity-50 transition-opacity">
            {nav.howItWorks}
          </Link>

          {/* Tracks dropdown — CSS-only, no JS */}
          <div className="relative group/tracks">
            <span className="flex items-center gap-1 cursor-default hover:opacity-50 transition-opacity select-none">
              {nav.tracks}
              <svg className="w-2 h-2 mt-px" viewBox="0 0 8 5" fill="currentColor" aria-hidden="true">
                <path d="M0 0l4 5 4-5z" />
              </svg>
            </span>
            <div className="invisible opacity-0 group-hover/tracks:visible group-hover/tracks:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-none group-hover/tracks:pointer-events-auto">
              <div className="bg-white rounded-2xl border border-[#d2d2d7] shadow-xl shadow-black/[0.08] p-2 w-56">
                {tracks.map(({ href, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                  >
                    <div className="font-semibold text-[#1d1d1f] text-xs mb-0.5">{label}</div>
                    <div className="text-[10px] text-[#6e6e73]">{desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href={isTR ? '/tr/blog' : isES ? '/es/blog' : '/blog'} className="hover:opacity-50 transition-opacity">Blog</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/auth/login" className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">
            {nav.signIn}
          </Link>
          <Link href="/apply" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">
            {nav.applyFree}
          </Link>
          <LanguagePicker />
        </div>
      </div>
    </nav>
  )
}
