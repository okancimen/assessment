'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LanguagePicker from '@/components/ui/LanguagePicker'

type Locale = 'en' | 'tr' | 'es' | 'fr' | 'ar' | 'ru' | 'zh'

function detectLocale(pathname: string): Locale {
  if (pathname === '/tr' || pathname.startsWith('/tr/')) return 'tr'
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
  if (pathname === '/fr' || pathname.startsWith('/fr/')) return 'fr'
  if (pathname === '/ar' || pathname.startsWith('/ar/')) return 'ar'
  if (pathname === '/ru' || pathname.startsWith('/ru/')) return 'ru'
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh'
  return 'en'
}

const TRACKS: Record<Locale, { href: string; label: string; desc: string }[]> = {
  en: [
    { href: '/tech',               label: 'Technology',        desc: 'Coding · Algorithms · Cybersecurity' },
    { href: '/business',           label: 'Business',          desc: 'Strategy · Finance · Operations' },
    { href: '/data-analytics',     label: 'Data Analytics',    desc: 'Charts · SQL · Insights' },
    { href: '/digital-marketing',  label: 'Digital Marketing', desc: 'SEO · Social · Campaigns' },
  ],
  tr: [
    { href: '/tr/teknoloji',         label: 'Teknoloji',         desc: 'Kodlama · Algoritmalar · Siber Güvenlik' },
    { href: '/tr/is-dunyasi',        label: 'İş Dünyası',        desc: 'Strateji · Finans · Operasyon' },
    { href: '/tr/veri-analitigi',    label: 'Veri Analitiği',    desc: 'Grafikler · SQL · İçgörüler' },
    { href: '/tr/dijital-pazarlama', label: 'Dijital Pazarlama', desc: 'SEO · Sosyal Medya · Kampanyalar' },
  ],
  es: [
    { href: '/es/tecnologia',        label: 'Tecnología',        desc: 'Programación · Algoritmos · Ciberseguridad' },
    { href: '/es/empresa',           label: 'Empresa',           desc: 'Estrategia · Finanzas · Operaciones' },
    { href: '/es/analisis-de-datos', label: 'Análisis de datos', desc: 'Gráficos · SQL · Insights' },
    { href: '/es/marketing-digital', label: 'Marketing digital', desc: 'SEO · Redes sociales · Campañas' },
  ],
  fr: [
    { href: '/fr/technologie',        label: 'Technologie',       desc: 'Programmation · Algorithmes · Cybersécurité' },
    { href: '/fr/entreprise',         label: 'Entreprise',        desc: 'Stratégie · Finance · Opérations' },
    { href: '/fr/analyse-de-donnees', label: 'Analyse de données',desc: 'Graphiques · SQL · Insights' },
    { href: '/fr/marketing-digital',  label: 'Marketing digital', desc: 'SEO · Réseaux sociaux · Campagnes' },
  ],
  ar: [
    { href: '/ar/taqniya', label: 'التقنية',         desc: 'البرمجة · الخوارزميات · الأمن السيبراني' },
    { href: '/ar/aamal',   label: 'الأعمال',         desc: 'الاستراتيجية · المالية · العمليات' },
    { href: '/ar/bayanat', label: 'تحليل البيانات',  desc: 'الرسوم البيانية · SQL · الرؤى' },
    { href: '/ar/tawiq',   label: 'التسويق الرقمي',  desc: 'SEO · التواصل الاجتماعي · الحملات' },
  ],
  ru: [
    { href: '/ru/tekhnologii',       label: 'Технологии',         desc: 'Программирование · Алгоритмы · Кибербезопасность' },
    { href: '/ru/biznes',            label: 'Бизнес',             desc: 'Стратегия · Финансы · Операции' },
    { href: '/ru/analiz-dannykh',    label: 'Анализ данных',      desc: 'Графики · SQL · Аналитика' },
    { href: '/ru/tsifrovoy-marketing', label: 'Цифровой маркетинг', desc: 'SEO · Соцсети · Кампании' },
  ],
  zh: [
    { href: '/zh/keji',    label: '科技',     desc: '编程 · 算法 · 网络安全' },
    { href: '/zh/shangye', label: '商业',     desc: '战略 · 金融 · 运营' },
    { href: '/zh/shuju',   label: '数据分析', desc: '图表 · SQL · 洞察' },
    { href: '/zh/yingxiao',label: '数字营销', desc: 'SEO · 社交媒体 · 营销活动' },
  ],
}

const NAV: Record<Locale, { howItWorks: string; tracks: string; signIn: string; applyFree: string }> = {
  en: { howItWorks: 'How it works',        tracks: 'Tracks',       signIn: 'Sign in',         applyFree: 'Apply free' },
  tr: { howItWorks: 'Nasıl çalışır',       tracks: 'Alanlar',      signIn: 'Giriş yap',       applyFree: 'Ücretsiz başvur' },
  es: { howItWorks: 'Cómo funciona',       tracks: 'Áreas',        signIn: 'Iniciar sesión',   applyFree: 'Solicitar gratis' },
  fr: { howItWorks: 'Comment ça marche',   tracks: 'Filières',     signIn: 'Se connecter',     applyFree: 'Postuler gratuitement' },
  ar: { howItWorks: 'كيف يعمل',            tracks: 'المسارات',     signIn: 'تسجيل الدخول',    applyFree: 'التقديم مجاناً' },
  ru: { howItWorks: 'Как это работает',    tracks: 'Направления',  signIn: 'Войти',            applyFree: 'Подать заявку' },
  zh: { howItWorks: '工作原理',             tracks: '方向',          signIn: '登录',             applyFree: '免费申请' },
}

const HOME: Record<Locale, string>       = { en: '/', tr: '/tr', es: '/es', fr: '/fr', ar: '/ar', ru: '/ru', zh: '/zh' }
const BLOG: Record<Locale, string>       = { en: 'https://eduentry.com/blog', tr: 'https://eduentry.com/tr/blog', es: 'https://eduentry.com/es/blog', fr: 'https://eduentry.com/fr/blog', ar: 'https://eduentry.com/ar/blog', ru: 'https://eduentry.com/ru/blog', zh: 'https://eduentry.com/zh/blog' }
const HOW: Record<Locale, string>        = { en: '/#how-it-works', tr: '/tr#how-it-works', es: '/es#how-it-works', fr: '/fr#how-it-works', ar: '/ar#how-it-works', ru: '/ru#how-it-works', zh: '/zh#how-it-works' }

export default function PublicNavAI() {
  const pathname = usePathname()
  const locale = detectLocale(pathname)
  const nav = NAV[locale]
  const tracks = TRACKS[locale]
  const isRTL = locale === 'ar'

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative" dir={isRTL ? 'rtl' : undefined}>
        <Link href={HOME[locale]} aria-label="Eduentry.ai — Home">
          <Image src="/logo-ai.png" alt="Eduentry.ai" width={64} height={64} className="object-contain" priority />
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href={HOW[locale]} className="hover:opacity-50 transition-opacity">
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

          <Link href={BLOG[locale]} className="hover:opacity-50 transition-opacity">Blog</Link>
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
