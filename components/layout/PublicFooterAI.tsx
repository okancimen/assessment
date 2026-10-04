'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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

const TRACKS: Record<Locale, { href: string; label: string }[]> = {
  en: [
    { href: '/tech',               label: 'Technology' },
    { href: '/business',           label: 'Business' },
    { href: '/data-analytics',     label: 'Data Analytics' },
    { href: '/digital-marketing',  label: 'Digital Marketing' },
  ],
  tr: [
    { href: '/tr/teknoloji',          label: 'Teknoloji' },
    { href: '/tr/is-dunyasi',         label: 'İş Dünyası' },
    { href: '/tr/veri-analitigi',     label: 'Veri Analitiği' },
    { href: '/tr/dijital-pazarlama',  label: 'Dijital Pazarlama' },
  ],
  es: [
    { href: '/es/tecnologia',         label: 'Tecnología' },
    { href: '/es/empresa',            label: 'Empresa' },
    { href: '/es/analisis-de-datos',  label: 'Análisis de datos' },
    { href: '/es/marketing-digital',  label: 'Marketing digital' },
  ],
  fr: [
    { href: '/fr/technologie',        label: 'Technologie' },
    { href: '/fr/entreprise',         label: 'Entreprise' },
    { href: '/fr/analyse-de-donnees', label: 'Analyse de données' },
    { href: '/fr/marketing-digital',  label: 'Marketing digital' },
  ],
  ar: [
    { href: '/ar/taqniya', label: 'التقنية' },
    { href: '/ar/aamal',   label: 'الأعمال' },
    { href: '/ar/bayanat', label: 'تحليل البيانات' },
    { href: '/ar/tawiq',   label: 'التسويق الرقمي' },
  ],
  ru: [
    { href: '/ru/tekhnologii',         label: 'Технологии' },
    { href: '/ru/biznes',              label: 'Бизнес' },
    { href: '/ru/analiz-dannykh',      label: 'Анализ данных' },
    { href: '/ru/tsifrovoy-marketing', label: 'Цифровой маркетинг' },
  ],
  zh: [
    { href: '/zh/keji',     label: '科技' },
    { href: '/zh/shangye',  label: '商业' },
    { href: '/zh/shuju',    label: '数据分析' },
    { href: '/zh/yingxiao', label: '数字营销' },
  ],
}

const LABELS: Record<Locale, {
  tracks: string; learn: string; account: string; legal: string
  howItWorks: string; blog: string; signIn: string; applyFree: string
  privacy: string; terms: string; copyright: string
}> = {
  en: {
    tracks: 'Tracks', learn: 'Learn', account: 'Account', legal: 'Legal',
    howItWorks: 'How it works', blog: 'Blog', signIn: 'Sign in', applyFree: 'Apply free',
    privacy: 'Privacy', terms: 'Terms', copyright: '© 2026 Eduentry. All rights reserved.',
  },
  tr: {
    tracks: 'Alanlar', learn: 'Keşfet', account: 'Hesap', legal: 'Hukuki',
    howItWorks: 'Nasıl çalışır', blog: 'Blog', signIn: 'Giriş yap', applyFree: 'Ücretsiz başvur',
    privacy: 'Gizlilik', terms: 'Kullanım şartları', copyright: '© 2026 Eduentry. Tüm hakları saklıdır.',
  },
  es: {
    tracks: 'Áreas', learn: 'Explorar', account: 'Cuenta', legal: 'Legal',
    howItWorks: 'Cómo funciona', blog: 'Blog', signIn: 'Iniciar sesión', applyFree: 'Solicitar gratis',
    privacy: 'Privacidad', terms: 'Términos de uso', copyright: '© 2026 Eduentry. Todos los derechos reservados.',
  },
  fr: {
    tracks: 'Filières', learn: 'Apprendre', account: 'Compte', legal: 'Mentions légales',
    howItWorks: 'Comment ça marche', blog: 'Blog', signIn: 'Se connecter', applyFree: 'Postuler gratuitement',
    privacy: 'Confidentialité', terms: "Conditions d'utilisation", copyright: '© 2026 Eduentry. Tous droits réservés.',
  },
  ar: {
    tracks: 'المسارات', learn: 'تعلم', account: 'الحساب', legal: 'قانوني',
    howItWorks: 'كيف يعمل', blog: 'المدونة', signIn: 'تسجيل الدخول', applyFree: 'التقديم مجاناً',
    privacy: 'الخصوصية', terms: 'الشروط والأحكام', copyright: '© 2026 Eduentry. جميع الحقوق محفوظة.',
  },
  ru: {
    tracks: 'Направления', learn: 'Узнать больше', account: 'Аккаунт', legal: 'Правовые',
    howItWorks: 'Как это работает', blog: 'Блог', signIn: 'Войти', applyFree: 'Подать заявку',
    privacy: 'Конфиденциальность', terms: 'Условия использования', copyright: '© 2026 Eduentry. Все права защищены.',
  },
  zh: {
    tracks: '方向', learn: '了解更多', account: '账户', legal: '法律',
    howItWorks: '工作原理', blog: '博客', signIn: '登录', applyFree: '免费申请',
    privacy: '隐私政策', terms: '使用条款', copyright: '© 2026 Eduentry. 版权所有。',
  },
}

const HOME: Record<Locale, string> = { en: '/', tr: '/tr', es: '/es', fr: '/fr', ar: '/ar', ru: '/ru', zh: '/zh' }
const BLOG: Record<Locale, string> = { en: 'https://eduentry.com/blog', tr: 'https://eduentry.com/tr/blog', es: 'https://eduentry.com/es/blog', fr: 'https://eduentry.com/fr/blog', ar: 'https://eduentry.com/ar/blog', ru: 'https://eduentry.com/ru/blog', zh: 'https://eduentry.com/zh/blog' }
const HOW: Record<Locale, string>  = { en: '/#how-it-works', tr: '/tr#how-it-works', es: '/es#how-it-works', fr: '/fr#how-it-works', ar: '/ar#how-it-works', ru: '/ru#how-it-works', zh: '/zh#how-it-works' }

export default function PublicFooterAI() {
  const pathname = usePathname()
  const locale = detectLocale(pathname)
  const L = LABELS[locale]
  const tracks = TRACKS[locale]
  const isRTL = locale === 'ar'

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]" dir={isRTL ? 'rtl' : undefined}>
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
              <li><Link href={HOW[locale]}  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.howItWorks}</Link></li>
              <li><Link href={BLOG[locale]} className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.blog}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider mb-3">{L.account}</p>
            <ul className="space-y-2">
              <li><Link href="/auth/login" className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.signIn}</Link></li>
              <li><Link href="/apply"      className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{L.applyFree}</Link></li>
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
          <Link href={HOME[locale]}>
            <Image src="/logo-ai.png" alt="Eduentry.ai" width={48} height={48} className="object-contain" />
          </Link>
          <p className="text-xs text-[#6e6e73]">{L.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
