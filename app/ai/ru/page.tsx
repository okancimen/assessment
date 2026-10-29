import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/ru`

export const metadata: Metadata = {
  title: { absolute: 'Оценка готовности к стажировке — Бесплатный ИИ-отчёт | Eduentry.ai' },
  description:
    'Бесплатная ИИ-оценка для старшеклассников 14–18 лет. 34 адаптивных вопроса по технологиям, бизнесу, данным и маркетингу. Персонализированный отчёт сразу после прохождения.',
  keywords: [
    'оценка стажировки старшеклассник',
    'стажировка бесплатно школьники ИИ',
    'отчёт подготовка к стажировке',
    'стажировка технологии школьники',
    'стажировка бизнес 14 15 16 17 18 лет',
    'стажировка анализ данных школа',
    'стажировка маркетинг старшеклассник',
    'адаптивная оценка профориентация',
    'тест способностей школьник бесплатно',
    'опыт работы старшая школа',
    'летняя стажировка школьник',
    'сопроводительное письмо стажировка',
    'персонализированный ИИ-отчёт подготовка к стажировке',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar`, ru: PAGE_URL, zh: `${BASE_URL}/zh`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'ru_RU',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'fr_FR', 'ar_AE', 'zh_CN'],
    title: 'Оценка готовности к стажировке — Бесплатный ИИ-отчёт | Eduentry.ai',
    description: 'Бесплатная ИИ-оценка для старшеклассников 14–18 лет. 34 адаптивных вопроса в 4 областях. Персонализированный отчёт сразу.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — Оценка готовности к стажировке' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оценка готовности к стажировке — Бесплатный ИИ-отчёт | Eduentry.ai',
    description: 'Бесплатная ИИ-оценка для старшеклассников 14–18 лет. 34 вопроса, персонализированный отчёт сразу.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/ru/tekhnologii',
  business: '/ru/biznes',
  data_analytics: '/ru/analiz-dannykh',
  digital_marketing: '/ru/tsifrovoy-marketing',
}

const TRACK_LABELS_RU: Record<string, string> = {
  tech: 'Технологии',
  business: 'Бизнес',
  data_analytics: 'Анализ данных',
  digital_marketing: 'Цифровой маркетинг',
}

const TRACK_DESCRIPTIONS_RU: Record<string, string> = {
  tech: 'Логика программирования, алгоритмы, кибербезопасность, UX-дизайн и разработка ПО',
  business: 'Анализ рынка, финансовая грамотность, разбор кейсов и бизнес-стратегия',
  data_analytics: 'Чтение графиков, статистика, работа с таблицами, основы SQL и интерпретация данных',
  digital_marketing: 'SEO, стратегия в соцсетях, контент-маркетинг и планирование кампаний',
}

const PHASES = [
  { n: '01', label: 'Общие способности',           qs: 10, desc: 'Вербальное и числовое мышление',          tag: 'Когнитивный' },
  { n: '02', label: 'Знания в предметной области',  qs: 10, desc: 'Прикладные отраслевые знания',            tag: 'Технический' },
  { n: '03', label: 'Профессиональные навыки',      qs: 8,  desc: 'Реальные рабочие сценарии (SJT)',         tag: 'Поведенческий' },
  { n: '04', label: 'Профиль интересов',            qs: 6,  desc: 'Стиль работы и предпочтения',             tag: 'Личность' },
]

const FAQS = [
  { q: 'Оценка бесплатна?',                   a: 'Да — всегда бесплатна для школьников. Никаких скрытых платежей, подписок или платных уровней.' },
  { q: 'Для кого она предназначена?',          a: 'Для учеников 14–18 лет, которые хотят получить профессиональный опыт через стажировку.' },
  { q: 'Сколько времени это занимает?',        a: '34 вопроса в четырёх фазах, около 20 минут. Оценку можно прервать и продолжить в любое время.' },
  { q: 'Какую область выбрать?',               a: 'При подаче заявки можно указать до трёх предпочтительных областей. Фаза «Профиль интересов» также помогает определить, где вы проявляете себя лучше всего — это отражается в отчёте.' },
  { q: 'Когда я получу отчёт?',               a: 'Сразу после прохождения. После завершения всех 34 вопросов ИИ-оценка рассчитывается мгновенно и отчёт становится доступен в вашем аккаунте — без ожидания.' },
  { q: 'Можно ли упомянуть оценку в резюме?', a: 'Да. Отчёт о готовности включает измеримый балл и разбивку навыков по областям, которые можно напрямую использовать в заявлениях о приёме на работу. Многие школьники включают это в сопроводительные письма и рассказывают на собеседованиях.' },
  { q: 'Нужно ли проживать в Великобритании?', a: 'Оценка доступна любому школьнику 14–18 лет. Стажировки проходят в Великобритании, поэтому для самого трудоустройства нужна возможность работать там — но сама оценка и отчёт доступны из любой точки мира.' },
]

const internshipPosts = BLOG_POSTS_RU.slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  url: BASE_URL,
  foundingDate: '2026',
  sameAs: ['https://eduentry.com'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'ru',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: 'Оценка готовности к стажировке — Бесплатный ИИ-отчёт | Eduentry.ai',
  description: 'Бесплатная ИИ-оценка для старшеклассников 14–18 лет. 34 адаптивных вопроса в 4 областях. Персонализированный отчёт сразу.',
  inLanguage: 'ru',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'Оценка готовности к стажировке',
  url: PAGE_URL,
  description: 'Бесплатная адаптивная ИИ-оценка из 34 вопросов для старшеклассников 14–18 лет. Оценивает способности, знания в предметной области, профессиональные навыки и профиль интересов в четырёх областях: технологии, бизнес, анализ данных и цифровой маркетинг.',
  inLanguage: 'ru',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: 'Старшеклассники 14–18 лет' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Образовательная оценка',
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как получить стажировку с Eduentry.ai',
  description: 'Бесплатная адаптивная оценка из 34 вопросов для старшеклассников 14–18 лет. Четыре шага от регистрации до получения стажировки.',
  inLanguage: 'ru',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Создайте аккаунт', text: 'Создайте бесплатный аккаунт Eduentry.ai менее чем за минуту — без платёжных данных.' },
    { '@type': 'HowToStep', position: 2, name: 'Подайте заявку', text: 'Расскажите нам о себе, своей школе и предпочтительных областях: технологии, бизнес, анализ данных или цифровой маркетинг.' },
    { '@type': 'HowToStep', position: 3, name: 'Пройдите оценку', text: '34 адаптивных вопроса в четырёх фазах: общие способности, знания в предметной области, профессиональные навыки и профиль интересов. Около 20 минут. Можно прервать и продолжить в любое время.' },
    { '@type': 'HowToStep', position: 4, name: 'Получите отчёт', text: 'Получите персонализированный ИИ-отчёт о готовности с уровнем подготовки, разбивкой по фазам и назначением стажировки.' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function RussianHomePage() {
  return (
    <main className="flex-1 bg-[#050505] text-white" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-0 sm:blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              Бесплатно · 20 минут · Прогресс сохраняется автоматически
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">Получи реальный</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">опыт работы.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Адаптивная оценка из 34 вопросов для старшеклассников от 14 лет. Узнай свой уровень готовности в четырёх профессиональных областях и получи персонализированный отчёт.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Начать оценку бесплатно — 20 мин
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://eduentry.com/sample-report"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              Смотреть пример отчёта
            </a>
          </div>

          <div className="max-w-md mx-auto text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
                <div className="text-white/30">
                  <span className="text-[#818CF8]">❯</span>
                  {' '}eduentry assess --track tech --age 16
                </div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">General Aptitude</span>
                    <span className="text-[#4ade80]">87 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Domain Knowledge</span>
                    <span className="text-[#4ade80]">74 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Workplace Skills</span>
                    <span className="text-[#4ade80]">91 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Interest Profile</span>
                    <span className="text-[#4ade80]">88 / 100</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">Пример результата — твои будут персонализированы</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Доступные направления</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Четыре пути.<br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Одна оценка.</span>
            </h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              Сравнить все направления →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link
                  key={track}
                  href={TRACK_SLUGS[track]}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{TRACK_LABELS_RU[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{TRACK_DESCRIPTIONS_RU[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>
                      Изучить →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Процесс</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
            Три шага к стажировке.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: 'Зарегистрируйся и подай заявку', desc: 'Создай бесплатный аккаунт. Расскажи о себе, своей школе и предпочтительных направлениях.' },
              { n: '02', title: 'Пройди оценку',                   desc: '34 адаптивных вопроса в четырёх фазах. Прерывай и продолжай в любое время — без временного давления.' },
              { n: '03', title: 'Получи отчёт',                    desc: 'ИИ-отчёт о готовности с баллами, инсайтами и назначением стажировки.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Структура оценки</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Что вас ждёт.
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0">{phase.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{phase.label}</h3>
                    <span className="font-mono text-[10px] border border-white/[0.08] text-white/30 px-2 py-0.5 rounded-full">{phase.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">вопросов</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">Итого: 34 вопроса · ~20 минут · Полностью возобновляемая</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Результаты отчёта</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Твой отчёт.<br />
                <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Мгновенно.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Как только ты заканчиваешь последний вопрос, ИИ-оценка рассчитывается. Без ожидания. Без писем. Полный отчёт доступен в аккаунте в течение нескольких секунд.
              </p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Начать оценку
                <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { icon: '◆', text: 'Уровень готовности — Готов к стажировке, Развивается или Требует поддержки' },
                { icon: '◆', text: 'Персонализированный резюме-абзац, написанный ИИ' },
                { icon: '◆', text: 'Карточки с инсайтами по фазам с сильными сторонами и зонами роста' },
                { icon: '◆', text: 'Профиль соответствия направлению с указанием лучших результатов' },
                { icon: '◆', text: 'Ссылка на отчёт для резюме и сопроводительных писем' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Доказательства</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Почему ранний опыт важен.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×',  desc: 'меньше шансов оказаться NEET в 19 лет у школьников с 4+ встречами с работодателями до 16 лет', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'работодателей считают опыт стажировки важным при найме выпускников', source: 'NACE, 2023' },
              { stat: '70%', desc: 'более высокий процент получения предложений о работе до окончания учёбы у студентов со стажировкой', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Исследования</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Последние публикации.</h2>
              <Link href="https://eduentry.com/ru/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">
                Смотреть все →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/ru/blog/${post.slug}`}
                  className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Вопросы.</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            Бесплатно для школьников · Карта не нужна
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Подай заявку сейчас.<br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">Это бесплатно.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            34 вопроса. 20 минут. Персонализированный ИИ-отчёт и первый шаг к реальной стажировке.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            Начать оценку бесплатно →
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
