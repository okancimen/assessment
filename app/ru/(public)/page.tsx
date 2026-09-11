import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import TestimonialsCarouselRU from '@/components/landing/TestimonialsCarouselRU'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS } from '@/types'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Eduentry — Платформа академической оценки и готовности к стажировке',
  description:
    'Бесплатные адаптивные оценки для учеников на каждом этапе обучения — международный академический бенчмаркинг для детей 6–17 лет и оценка готовности к стажировке для старшеклассников от 14 лет.',
  keywords: [
    'бесплатная академическая оценка дети',
    'международный бенчмаркинг дети Великобритания',
    'стандартизированный балл процентиль',
    'адаптивная оценка PISA GCSE',
    'подготовка к 11+ бесплатный тест',
    'академический бенчмаркинг 6 17 лет',
    'оценка готовности к стажировке школьники',
    'тест способностей для стажировки',
    'профориентационная оценка ученик',
    'бесплатный тест для детей',
    'вербальное невербальное мышление тест',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru`,
    languages: { ru: `${BASE_URL}/ru`, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, 'en-GB': BASE_URL, fr: `${BASE_URL}/fr`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: `${BASE_URL}/ru`,
    title: 'Eduentry — Платформа академической оценки и готовности к стажировке',
    description: 'Бесплатные адаптивные оценки на основе той же науки, что PISA, GCSE и SAT. Академический бенчмаркинг для детей 6–17 лет и оценка стажировки для учеников от 14 лет.',
    locale: 'ru_RU',
    images: [{ url: `${BASE_URL}/ru/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry — Платформа академической оценки и готовности к стажировке' }],
  },
}

const SUBJECT_LABELS_RU: Record<string, string> = {
  english:             'Английский',
  mathematics:         'Математика',
  verbal_reasoning:    'Вербальное мышление',
  nonverbal_reasoning: 'Невербальное мышление',
}

const SUBJECT_DESCRIPTIONS_RU: Record<string, string> = {
  english:             'Понимание прочитанного, грамматика, орфография и пунктуация',
  mathematics:         'Арифметика, алгебра, геометрия и работа с данными',
  verbal_reasoning:    'Решение задач со словами и критическое мышление',
  nonverbal_reasoning: 'Распознавание паттернов с использованием абстрактных фигур и визуальных элементов',
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:             { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:         { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:    { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning: { border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}

const BELL_SUBJECTS_RU = [
  { score: 103, label: 'Английский',    color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: 'Математика',    color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: 'Словесное',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: 'Не-Словесное',  color: '#DB2777', dotColor: '#DB2777' },
]

const FAQ_RU = [
  { q: 'Eduentry бесплатный?', a: 'Да, полностью бесплатный. Нет подписки, скрытых платежей или премиум-уровня. Создайте бесплатный аккаунт, добавьте профиль ребёнка и начните оценку бесплатно.' },
  { q: 'Какие предметы охватывает академическая оценка?', a: 'Английский (понимание прочитанного, грамматика, словарный запас), Математика (арифметика, алгебра, геометрия, решение задач), Вербальное мышление (аналогии, классификации, последовательности) и Невербальное мышление (паттерны, пространственное мышление, матрицы). По каждому предмету 15 адаптивных вопросов.' },
  { q: 'Что такое процентильный рейтинг?', a: 'Процентильный рейтинг показывает, как ваш ребёнок сравнивается со всеми детьми того же возраста. Балл на 80-м процентиле означает, что ваш ребёнок показал результат лучше 80% детей той же возрастной группы. Eduentry использует стандартизированную шкалу со средним значением 100 и стандартным отклонением 15 — ту же шкалу, что и PISA и большинство профессиональных оценок.' },
  { q: 'Что такое оценка стажировки?', a: 'Отдельная адаптивная оценка из 34 вопросов для старшеклассников от 14 лет. Измеряет общие способности, знания в области, рабочие навыки и профиль интересов по четырём направлениям: Технологии, Бизнес, Аналитика данных и Цифровой маркетинг. Результаты включают персонализированный отчёт о готовности и карьерные инсайты от ИИ.' },
  { q: 'Можно ли использовать Eduentry для подготовки к 11+?', a: 'Да. Четыре предмета — Английский, Математика, Вербальное и Невербальное мышление — напрямую отражают структуру экзамена 11+, используемого грамматическими школами в Великобритании. Eduentry даёт стандартизированный балл и процентильный рейтинг, чтобы вы точно знали, где стоит ваш ребёнок перед реальным экзаменом.' },
  { q: 'Какой балл считается хорошим?', a: '100 — это точная середина. 95–109 — средний диапазон, 110–119 — выше среднего, 120+ — исключительный. Для поступления в грамматическую школу через 11+ конкурентные баллы обычно составляют 115 и выше — но в более конкурентных районах, например в Лондоне, может потребоваться 127+.' },
  { q: 'Сколько времени занимает каждая оценка?', a: 'Академическая оценка содержит 60 вопросов по 4 предметам — большинство детей завершают её за 60–90 минут. Оценка стажировки содержит 34 вопроса — большинство учеников завершают её примерно за 35 минут. Прогресс сохраняется автоматически, поэтому обе оценки можно делать с паузами.' },
  { q: 'Как работает адаптивная технология?', a: 'Eduentry использует оценивание MAP с двухпараметрической логистической моделью (2PL) — ту же модель, что применяется в PISA, GCSE и SAT. После каждого ответа система обновляет оценку способностей ученика и выбирает следующий вопрос для максимизации точности измерения.' },
  { q: 'Можно ли добавить несколько детей?', a: 'Да. Один родительский аккаунт может содержать несколько профилей детей. У каждого ребёнка своя история оценок, баллы и персонализированные рекомендации. Количество детей, которых можно добавить, не ограничено.' },
]

const FAQ_SCHEMA_RU = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_RU.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

export default function RussianHomePage() {
  return (
    <main className="min-h-screen bg-white" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_RU) }} />

      {/* Hero */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] mb-6">
            Оценка для каждого этапа обучения
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            Правильная оценка,
            <br />
            <span className="text-[#4F46E5]">в нужное время.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#a1a1a7] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            Бесплатные адаптивные оценки на основе той же науки, что PISA, GCSE и SAT.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#a1a1a7] font-medium uppercase tracking-[0.12em] mb-6">
                Академическая оценка
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                Где ваш ребёнок в мировом масштабе?
              </h2>
              <p className="text-[#a1a1a7] text-sm leading-relaxed mb-8 flex-1">
                Сравнение со стандартами Великобритании, США, PISA и IB — стандартизированные баллы и
                процентильные рейтинги по английскому, математике, вербальному и невербальному мышлению.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a1a1a7] mb-8">
                <span>60 адаптивных вопросов</span>
                <span>·</span>
                <span>4 предмета</span>
                <span>·</span>
                <span>6–17 лет</span>
                <span>·</span>
                <span>Бесплатно</span>
              </div>
              <CtaLink
                href="/ru/auth/register"
                label="hero_academic_ru"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                Начать бесплатную оценку
              </CtaLink>
              <Link href="#akademicheskaya" className="text-center text-xs text-[#a1a1a7] hover:text-white transition-colors mt-4 py-4 block">
                Узнать больше ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  Оценка стажировки
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Новинка
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                Готов ли ваш ученик к работе?
              </h2>
              <p className="text-[#636366] text-sm leading-relaxed mb-8 flex-1">
                Адаптивная оценка из 34 вопросов по способностям, знаниям в области, рабочим навыкам и профилю интересов.
                Персонализированный отчёт о готовности и карьерные инсайты от ИИ.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#636366] mb-8">
                <span>34 адаптивных вопроса</span>
                <span>·</span>
                <span>4 карьерных направления</span>
                <span>·</span>
                <span>14 лет+</span>
                <span>·</span>
                <span>Бесплатно</span>
              </div>
              <a
                href="https://eduentry.ai/ru"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                Узнать о программе
              </a>
              <Link href="#stazhirovka" className="text-center text-xs text-[#4F46E5] hover:text-[#4338CA] transition-colors mt-4 py-4 block">
                Узнать больше ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Trust line */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#636366] tracking-wide">
          Та же наука, что PISA, GCSE &amp; SAT &nbsp;·&nbsp; Соответствие GDPR &nbsp;·&nbsp; Бесплатно
        </p>
      </section>

      {/* Social proof */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialsCarouselRU />
        </div>
      </section>

      {/* Academic section */}
      <section id="akademicheskaya" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            <div className="flex-1">
              <p className="text-xs font-semibold text-[#636366] uppercase tracking-widest mb-4">Академическая оценка · 6–17 лет</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                Узнайте международную<br />позицию вашего ребёнка.
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8 max-w-lg">
                Бесплатная адаптивная оценка, измеряющая английский, математику, вербальное и невербальное мышление
                в сравнении со стандартами Великобритании, США, PISA и IB. Результаты включают стандартизированный балл,
                процентильный рейтинг и рекомендации ИИ.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/ru/auth/register"
                  label="academic_section_ru"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  Начать бесплатную оценку
                </CtaLink>
                <Link href="/ru/metodologiya" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  Как работает оценивание →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider">Пример результата</p>
                    <p className="font-bold text-white mt-1">Эмма · 11 лет</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">Выше среднего</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Английский',  score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'Математика',  score: 119, color: '#0D9488', pct: 90 },
                    { label: 'Словесное',   score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'Не-Слов.',    score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#a1a1a7] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#a1a1a7]">Powered by</span>
                  <span className="text-[10px] font-semibold text-[#a1a1a7]">Claude AI · Anthropic</span>
                </div>
              </div>

              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve subjects={BELL_SUBJECTS_RU} hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Четыре предмета. Глобальная картина.
            </h2>
            <p className="text-[#636366] max-w-xl mx-auto text-lg">
              Четыре области, оцениваемые PISA, TIMSS и национальными программами Великобритании и США —
              каждая адаптируется к уровню ребёнка для максимальной точности измерения.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <div
                  key={subject}
                  className="rounded-3xl p-6 border"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: c.accent + '22' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS_RU[subject]}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{SUBJECT_DESCRIPTIONS_RU[subject]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="metodologiya" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">Наука за оцениванием</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Та же наука, что<br />международные оценки.
            </h2>
            <p className="text-[#636366] max-w-2xl mx-auto text-lg">
              Eduentry использует те же психометрические модели, что PISA, GCSE и SAT —
              поэтому результаты вашего ребёнка напрямую сопоставимы с международными стандартами.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Двухпараметрическая модель IRT', desc: 'Каждый вопрос имеет калиброванные значения сложности и различимости. Баллы отражают не просто количество правильных ответов, а сложность правильно отвеченных вопросов.', tag: 'Используется в PISA · SAT · GCSE', color: '#4F46E5' },
              { title: 'Адаптивный алгоритм в реальном времени', desc: 'Вопросы выбираются с использованием информации Фишера для максимизации точности измерения. Каждый ответ обновляет оценку способностей и выбирает оптимальный следующий вопрос.', tag: 'Компьютерное адаптивное тестирование', color: '#0D9488' },
              { title: 'Международное сравнение', desc: 'Баллы используют ту же шкалу среднее-100, СО-15, что и PISA. Результаты отображаются на Национальную программу Великобритании, уровни классов США, уровни компетенций PISA и программу IB.', tag: 'UK · USA · PISA · IB', color: '#7C3AED' },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">Что означает балл</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: 'Требуется помощь',    color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: 'Ниже среднего',       color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: 'Средний',             color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: 'Выше среднего',       color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: 'Исключительный',      color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#636366] text-center mt-4">
              68% детей набирают баллы от 85 до 115 (в пределах 1 стандартного отклонения от среднего)
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="kak-eto-rabotaet" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">Академическая оценка · Начать просто</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              От регистрации до результатов<br />менее чем за два часа.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Создайте бесплатный аккаунт', desc: 'Зарегистрируйтесь как родитель и добавьте имя и дату рождения ребёнка. Оценка автоматически адаптируется к точному возрасту.' },
              { step: '02', title: 'Ребёнок проходит 4 адаптивных теста', desc: '60 вопросов по четырём предметам, выполняемых дома в собственном темпе. Каждый вопрос адаптируется — сложнее при правильных ответах, проще при ошибках.' },
              { step: '03', title: 'Откройте глобальный контекст', desc: 'Стандартизированные баллы, международные бенчмарки для Великобритании, США, PISA и IB, рекомендации ИИ и печатаемый отчёт.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink href="/ru/auth/register" label="how_it_works_ru" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Начать бесплатную оценку →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Internship section */}
      <section id="stazhirovka" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              Оценка стажировки · Новинка
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              Узнай готовность к стажировке.
            </h2>
            <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
              Адаптивная оценка из 34 вопросов для старшеклассников от 14 лет. Узнай свои способности,
              сильные стороны по направлениям, рабочие навыки и наиболее подходящую область — с персонализированным отчётом ИИ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Создайте бесплатный студенческий аккаунт', desc: 'Зарегистрируйтесь самостоятельно или примите приглашение родителей. Укажите школу, класс, предпочтения по направлениям и краткое личное заявление о целях.' },
              { step: '02', title: 'Пройдите 4 этапа оценки', desc: 'Общие способности, знания в области, рабочие навыки (SJT) и профиль интересов — всего 34 адаптивных вопроса. Полностью прерывается, занимает около 35 минут.' },
              { step: '03', title: 'Получите отчёт о готовности', desc: 'Уровень готовности к стажировке, резюме сильных сторон от ИИ и персонализированные поэтапные инсайты по способностям, области и рабочим навыкам.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Технологии',          color: '#4F46E5' },
              { label: 'Бизнес',              color: '#0D9488' },
              { label: 'Аналитика данных',    color: '#7C3AED' },
              { label: 'Цифровой маркетинг',  color: '#DB2777' },
            ].map(({ label, color }) => (
              <span key={label} className="text-xs font-semibold px-4 py-2 rounded-full border" style={{ color, background: color + '12', borderColor: color + '33' }}>
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="https://eduentry.ai/ru" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Подать заявку на оценку стажировки →
            </a>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] text-center mb-14">Что вы получаете</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider mb-5">Академическая оценка</p>
              <ul className="space-y-3">
                {[
                  'Стандартизированный балл по шкале 85–130',
                  'Процентильный рейтинг по точному возрасту',
                  'Разбивка по предметам по 4 областям',
                  'Международные бенчмарки — UK, USA, PISA, IB',
                  'Рекомендации по учёбе от ИИ',
                  'Печатаемый полный отчёт',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a1a1a7]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/ru/auth/register" label="what_you_get_academic_ru" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  Начать бесплатно →
                </CtaLink>
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">Оценка стажировки</p>
              <ul className="space-y-3">
                {[
                  'Уровень готовности — Готов к стажировке / Развивается / Требует поддержки',
                  'Карьерный абзац-резюме от ИИ',
                  'Поэтапные инсайты — способности, область, рабочие навыки',
                  'Соответствие направлению по 4 карьерным областям',
                  'Персонализированные сильные стороны и зоны роста',
                  'Отчёт для использования в заявлениях в университет',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#636366]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <a href="https://eduentry.ai/ru" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  Подать заявку на оценку →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">Вопросы.</h2>
          </div>
          <div className="space-y-2">
            {FAQ_RU.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#636366] leading-relaxed border-t border-[#f5f5f7] pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#636366] mt-8">
            Хотите понять методологию оценивания?{' '}
            <Link href="/ru/metodologiya" className="text-[#4F46E5] hover:underline font-medium">
              Как работает Eduentry →
            </Link>
          </p>
        </div>
      </section>

      {/* Blog */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">Последние статьи блога</h2>
            <Link href="/ru/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">Все статьи →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS_RU.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/ru/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#636366]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-widest mb-4">Академическая оценка</p>
            <h2 className="text-2xl font-bold text-white mb-3">Узнайте глобальную позицию вашего ребёнка.</h2>
            <p className="text-[#a1a1a7] text-sm mb-8">Полный международный контекст менее чем за 2 часа.</p>
            <CtaLink href="/ru/auth/register" label="bottom_cta_academic_ru" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              Начать бесплатную оценку →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">Оценка стажировки</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Узнайте готовность вашего ученика к стажировке.</h2>
            <p className="text-[#636366] text-sm mb-8">Персонализированный отчёт и инсайты ИИ за 35 минут.</p>
            <a href="https://eduentry.ai/ru" className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors">
              Подать заявку на оценку →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
