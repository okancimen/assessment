import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'О нас — Бесплатная академическая оценка для детей',
  description: 'Eduentry — бесплатная адаптивная платформа оценки для учеников 6–17 лет. Стандартизированные баллы сравниваются со стандартами Национальной программы Великобритании, PISA и IB.',
  keywords: ['о Eduentry', 'бесплатная платформа оценки для детей', 'международный академический бенчмаркинг', 'адаптивный тест для детей', 'академическая оценка 6 17 лет', 'оценка готовности к стажировке'],
  alternates: {
    canonical: `${BASE_URL}/ru/o-nas`,
    languages: { ru: `${BASE_URL}/ru/o-nas`, tr: `${BASE_URL}/tr/hakkimizda`, es: `${BASE_URL}/es/sobre-nosotros`, 'en-GB': `${BASE_URL}/about`, fr: `${BASE_URL}/fr/a-propos`, 'x-default': `${BASE_URL}/about` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'О нас — Бесплатная академическая оценка для детей',
    description: 'Бесплатные адаптивные академические оценки, сравниваемые со стандартами Великобритании, PISA и IB. Стандартизированные баллы и международные процентильные рейтинги.',
    url: `${BASE_URL}/ru/o-nas`,
    locale: 'ru_RU',
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://eduentry.com/ru' },
    { '@type': 'ListItem', position: 2, name: 'О нас', item: 'https://eduentry.com/ru/o-nas' },
  ],
}

export default function ONasPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/ru" className="hover:text-[#1d1d1f]">Главная</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">О нас</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          Бесплатно для всех семей
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-6 leading-tight tracking-tight">
          Бесплатная академическая оценка<br />
          <span className="text-[#4F46E5]">для всех детей мира</span>
        </h1>
        <p className="text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
          Eduentry предоставляет родителям чёткое, международно сопоставимое представление об академическом уровне их ребёнка — бесплатно, менее чем за 30 минут.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16 bg-[#f5f5f7] rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Наша миссия</h2>
        <p className="text-[#6e6e73] leading-relaxed text-lg">
          Каждый ребёнок заслуживает знать, где он стоит — не только среди одноклассников, но и по сравнению с детьми по всей стране и миру. Профессиональные стандартизированные оценки традиционно были дорогостоящими и недоступными. Eduentry делает это сравнение бесплатным, мгновенным и доступным для каждой семьи с доступом в интернет.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Как это работает</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Адаптивные вопросы',
              body: 'Наш ИИ генерирует вопросы, откалиброванные по возрасту ученика, и в реальном времени регулирует сложность в зависимости от ответов — тот же подход, что используется в оценках PISA и MAP.',
            },
            {
              step: '02',
              title: 'IRT-оценивание',
              body: 'Мы используем двухпараметрическую теорию ответов на задания (IRT) для получения стандартизированных баллов (среднее 100, СО 15) — статистически сопоставимых по возрастным группам и сессиям.',
            },
            {
              step: '03',
              title: 'Международные бенчмарки',
              body: 'Баллы отображаются на процентили, основанные на Национальной программе Великобритании, PISA, общей программе США и рамках IB — чтобы точно увидеть, где глобально стоит ученик.',
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="space-y-3">
              <div className="text-3xl font-bold text-[#c7d2fe]">{step}</div>
              <h3 className="font-semibold text-[#1d1d1f]">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-8">Четыре предмета, полная картина</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { label: 'Английский', desc: 'Понимание прочитанного, грамматика, орфография, пунктуация и словарный запас — соответствует KS1–KS4 Великобритании и Cambridge IGCSE.' },
            { label: 'Математика', desc: 'Арифметика, алгебра, геометрия, дроби и работа с данными — сравнение с числовыми показателями PISA.' },
            { label: 'Вербальное мышление', desc: 'Аналогии, словесные связи, последовательности и логика — навыки, оцениваемые на экзаменах 11+, грамматических школах и частных школах.' },
            { label: 'Невербальное мышление', desc: 'Распознавание паттернов, матрицы, последовательности и пространственное мышление — оценивает решение задач, независимо от языка.' },
          ].map(({ label, desc }) => (
            <div key={label} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{label}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Основано на проверенной науке</h2>
        <div className="space-y-4 text-[#6e6e73] leading-relaxed">
          <p>
            Вопросы для оценки генерируются <strong className="text-[#1d1d1f]">Claude AI</strong> (Anthropic) с ограничениями по точной теме, уровню сложности и возрастному диапазону, определёнными нашим движком IRT. Каждый вопрос калибруется в реальном времени — когда ученик отвечает правильно, следующий вопрос становится сложнее; когда ошибается, легче.
          </p>
          <p>
            Этот адаптивный подход обеспечивает более высокую статистическую точность за меньшее время тестирования. Типичная оценка Eduentry занимает 20–30 минут по четырём предметам и даёт баллы, сопоставимые по надёжности с 90-минутным тестом фиксированного формата.
          </p>
          <p>
            Подробнее о методологии оценивания читайте на нашей <Link href="/ru/metodologiya" className="text-[#4F46E5] hover:underline">странице методологии</Link>.
          </p>
        </div>
      </section>

      {/* Ages */}
      <section className="mb-16 border border-[#d2d2d7] rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Для детей от 6 до 17 лет</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          Eduentry адаптируется к детям и подросткам всех классов начальной и средней школы. Вопросы генерируются по уровню ключевого этапа Великобритании или эквивалентному международному школьному году:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            { range: '6–7 лет',   label: 'KS1 / Year 1–2' },
            { range: '8–10 лет',  label: 'KS2 / Year 3–5' },
            { range: '11–13 лет', label: 'KS3 / Year 7–9' },
            { range: '14–16 лет', label: 'KS4 / Year 10–11' },
          ].map(({ range, label }) => (
            <div key={range} className="bg-[#f5f5f7] rounded-xl p-4 text-center">
              <div className="font-semibold text-[#1d1d1f]">{range}</div>
              <div className="text-[#6e6e73] mt-1 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Internship section */}
      <section className="mb-16 bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Оценка стажировки — для учеников от 14 лет</h2>
        <p className="text-[#6e6e73] leading-relaxed mb-6">
          В дополнение к академической оценке Eduentry предлагает адаптивную оценку готовности к стажировке из 34 вопросов для старшеклассников от 14 лет. Охватывает общие способности, знания в области, рабочие навыки и профиль интересов по четырём направлениям: Технологии, Бизнес, Аналитика данных и Цифровой маркетинг.
        </p>
        <Link href="/ru" className="inline-block bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
          Подробнее об оценке стажировки →
        </Link>
      </section>

      {/* Blog links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Из блога</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/ru/blog/kak-vash-rebyonok-sravnivaetsya-globalno', label: 'Как ваш ребёнок выглядит в мировом масштабе?', desc: 'Руководство для родителей по международному бенчмаркингу согласно PISA, программе Великобритании и стандартам IB.' },
            { href: '/ru/blog/preimushchestva-stazha-v-shkole', label: 'Преимущества стажировки в старшей школе', desc: 'Влияние опыта работы на поступление в университет и карьерное развитие.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-[#4F46E5] rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Начните бесплатную оценку вашего ребёнка</h2>
        <p className="text-indigo-200 mb-8 text-lg">20–30 минут. Бесплатно. Мгновенные результаты.</p>
        <Link href="/ru/auth/register" className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg">
          Начать бесплатно
        </Link>
      </section>

    </main>
  )
}
