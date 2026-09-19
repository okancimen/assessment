import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/ru`

export const metadata: Metadata = {
  title: 'Оценка готовности к стажировке — Бесплатный ИИ-отчёт | Eduentry.ai',
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

const TRACK_IMAGES: Record<string, string> = {
  tech: '/tracks/tech.jpg',
  business: '/tracks/business.jpg',
  data_analytics: '/tracks/data-analytics.jpg',
  digital_marketing: '/tracks/digital-marketing.jpg',
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
  { label: 'Общие способности',       qs: 10, desc: 'Вербальное и числовое мышление',                        img: '/phases/general-aptitude.jpg' },
  { label: 'Знания в предметной области', qs: 10, desc: 'Прикладные отраслевые знания',                    img: '/phases/domain-knowledge.jpg' },
  { label: 'Профессиональные навыки', qs: 8, desc: 'Реальные рабочие сценарии (SJT)',                         img: '/phases/workplace-skills.jpg' },
  { label: 'Профиль интересов',       qs: 6,  desc: 'Стиль работы и предпочтения',                           img: '/phases/interest-profile.jpg' },
]

const FAQS = [
  { q: 'Оценка бесплатна?',                   a: 'Да — всегда бесплатна для школьников. Никаких скрытых платежей, подписок или платных уровней.' },
  { q: 'Для кого она предназначена?',          a: 'Для учеников 14–18 лет, которые хотят получить профессиональный опыт через стажировку.' },
  { q: 'Сколько времени это занимает?',        a: '34 вопроса в четырёх фазах, около 35 минут. Оценку можно прервать и продолжить в любое время.' },
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
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Как получить стажировку с Eduentry.ai',
  description: 'Бесплатная адаптивная оценка из 34 вопросов для старшеклассников 14–18 лет. Четыре шага от регистрации до получения стажировки.',
  inLanguage: 'ru',
  totalTime: 'PT35M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Создайте аккаунт', text: 'Создайте бесплатный аккаунт Eduentry.ai менее чем за минуту — без платёжных данных.' },
    { '@type': 'HowToStep', position: 2, name: 'Подайте заявку', text: 'Расскажите нам о себе, своей школе и предпочтительных областях: технологии, бизнес, анализ данных или цифровой маркетинг.' },
    { '@type': 'HowToStep', position: 3, name: 'Пройдите оценку', text: '34 адаптивных вопроса в четырёх фазах: общие способности, знания в предметной области, профессиональные навыки и профиль интересов. Около 35 минут. Можно прервать и продолжить в любое время.' },
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
    <main className="flex-1" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            ИИ · Бесплатно · 35 минут
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            Получи реальную<br />стажировку.
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            34 адаптивных вопроса для старшеклассников от 14 лет. Узнай свой уровень готовности в четырёх профессиональных областях и получи персонализированный ИИ-отчёт.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Подать заявку бесплатно →
            </Link>
          </div>
          <p className="text-xs text-[#6e6e73] mt-6">Бесплатно для школьников · Без карты · Результаты за 35 минут</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Доступные направления</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8 leading-tight">
            Четыре пути.<br />Одна оценка.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INTERNSHIP_TRACKS.map((track, i) => (
              <Link
                key={track}
                href={TRACK_SLUGS[track]}
                className="group bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="flex justify-center pt-6 pb-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src={TRACK_IMAGES[track]}
                      alt={TRACK_LABELS_RU[track]}
                      fill
                      className="object-contain"
                      sizes="96px"
                      priority={i < 2}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-1.5 group-hover:text-[#4F46E5] transition-colors">{TRACK_LABELS_RU[track]}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{TRACK_DESCRIPTIONS_RU[track]}</p>
                  <span className="text-xs font-semibold text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">Узнать больше →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Процесс</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Три шага к стажировке.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: '01', title: 'Зарегистрируйся и подай заявку', desc: 'Создай бесплатный аккаунт и расскажи о себе, своей школе и предпочтительных областях.' },
              { n: '02', title: 'Пройди оценку',                  desc: '34 адаптивных вопроса в четырёх фазах. Останови и продолжи в любое время.' },
              { n: '03', title: 'Получи отчёт',                   desc: 'Получи персонализированный ИИ-отчёт о готовности и назначение стажировки.' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Оценка</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Что тебя ждёт.
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={phase.img} alt={phase.label} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">вопросов</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">Итого: 34 вопроса · ~35 минут · Полностью возобновляемая оценка</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Результаты</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Что ты получишь.
          </h2>
          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            <ul className="space-y-4">
              {[
                'Уровень готовности — Готов к стажировке, В процессе развития или Требует поддержки',
                'Персонализированный резюмирующий абзац, написанный ИИ',
                'Карточки анализа с сильными сторонами и точками роста по каждой фазе',
                'Профиль совместимости по направлениям, показывающий, где ты набираешь лучшие баллы',
                'Ссылка на отчёт, которой можно поделиться, для использования в заявлениях и сопроводительных письмах',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                  <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Статистика</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            Почему важно начать рано.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×',  desc: 'Школьники, имеющие 4 работодателя до 16 лет, в 5 раз реже оказываются без работы и образования в 19 лет', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: '83% работодателей считают опыт стажировки важным при найме молодых специалистов', source: 'NACE, 2023' },
              { stat: '70%', desc: 'Студенты, прошедшие стажировку, получают предложения о работе до окончания учёбы на 70% чаще', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Блог</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
              Последние статьи.
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/ru/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/ru/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                Все статьи о стажировках →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">Частые вопросы.</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            Подай заявку сейчас.<br />Это бесплатно.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34 вопроса. 35 минут. Персонализированный ИИ-отчёт и первый шаг к реальной стажировке.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            Начать заявку →
          </Link>
        </div>
      </section>
    </main>
  )
}
