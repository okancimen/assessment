import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Методология оценивания — Как работает Eduentry',
  description: 'Как Eduentry использует двухпараметрическую теорию ответов на задания и оценивание MAP для получения международно сопоставимых стандартизированных академических баллов для детей 6–17 лет.',
  keywords: 'теория ответов на задания дети, адаптивный тест IRT, стандартизированный балл дети, оценивание MAP, методология образовательной оценки, адаптивный тест',
  alternates: {
    canonical: `${BASE_URL}/ru/metodologiya`,
    languages: { ru: `${BASE_URL}/ru/metodologiya`, tr: `${BASE_URL}/tr/metodoloji`, es: `${BASE_URL}/es/metodologia`, 'en-GB': `${BASE_URL}/methodology`, fr: `${BASE_URL}/fr/methodologie`, 'x-default': `${BASE_URL}/methodology` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Как работает Eduentry — Методология адаптивной IRT оценки',
    description: 'Двухпараметрическая IRT, оценивание MAP, стандартизированный балл (среднее 100, СО 15) и международное сравнение с программой Великобритании, PISA, США и IB.',
    url: `${BASE_URL}/ru/metodologiya`,
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Как работает Eduentry — Методология адаптивной IRT оценки',
    description: 'Двухпараметрическая IRT, оценивание MAP, стандартизированный балл (среднее 100, СО 15) и международное сравнение с программой Великобритании, PISA, США и IB.',
    images: [`${BASE_URL}/ru/metodologiya/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE_URL}/ru` },
    { '@type': 'ListItem', position: 2, name: 'Методология', item: `${BASE_URL}/ru/metodologiya` },
  ],
}

export default function MetodologiyaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="ru">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-10">
        <Link href="/ru" className="hover:text-[#1d1d1f]">Главная</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">Методология</span>
      </nav>

      <div className="mb-12">
        <p className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wide mb-3">Методология</p>
        <h1 className="text-4xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Как работает адаптивная оценка Eduentry</h1>
        <p className="text-xl text-[#6e6e73] leading-relaxed">
          Eduentry использует ту же психометрическую методологию, что профессиональные когнитивные оценки —
          теорию ответов на задания с адаптивными вопросами — для получения точных и международно сопоставимых
          баллов для детей 6–17 лет.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">

        {/* Adaptive Testing */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Адаптивное оценивание</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            В отличие от фиксированного теста, где все дети отвечают на одни и те же вопросы, Eduentry адаптируется в реальном времени.
            После каждого ответа система обновляет свою оценку уровня способностей ребёнка и
            выбирает следующий вопрос, который максимизирует точность измерения на этом уровне.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Это означает, что ребёнок, отвечающий правильно, получает более сложные вопросы, а затрудняющийся — более лёгкие.
            Результат: для достижения той же точности измерения нужно меньше вопросов, чем в традиционном тесте фиксированной длины.
          </p>
          <div className="bg-[#eef2ff] border border-[#c7d2fe] rounded-2xl p-6">
            <p className="text-sm font-semibold text-[#4F46E5] mb-2">Ключевое преимущество</p>
            <p className="text-[#1d1d1f] text-sm leading-relaxed">
              Адаптивный тест из 15 вопросов может соответствовать по точности фиксированному тесту из 100 вопросов,
              поскольку каждый вопрос выбирается как наиболее информативный именно для этого конкретного ребёнка.
            </p>
          </div>
        </section>

        {/* IRT */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Теория ответов на задания (IRT)</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-4">
            Eduentry использует <strong className="text-[#1d1d1f]">двухпараметрическую логистическую модель (2PL IRT)</strong> — ту же модель,
            что применяется в PISA, крупномасштабных стандартизированных оценках и профессиональными образовательными психологами.
          </p>
          <p className="text-[#6e6e73] leading-relaxed mb-4">Каждый вопрос имеет два параметра:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Сложность (b)</strong> — уровень способностей, при котором у ребёнка 50% вероятность дать правильный ответ.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 rounded-full bg-[#4F46E5] mt-2 flex-shrink-0" />
              <span className="text-[#6e6e73]"><strong className="text-[#1d1d1f]">Различимость (a)</strong> — насколько хорошо вопрос разделяет детей чуть ниже и чуть выше порога сложности.</span>
            </li>
          </ul>
          <p className="text-[#6e6e73] leading-relaxed">
            Оценка способностей использует <strong className="text-[#1d1d1f]">оценивание Максимального апостериорного (MAP) распределения</strong> со стандартным нормальным априорным распределением.
            После каждого ответа апостериорное распределение по способностям обновляется с помощью теоремы Байеса, и MAP-оценка
            принимается как текущая оценка способностей.
          </p>
        </section>

        {/* Scoring Scale */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Шкала оценивания</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Необработанные оценки способностей IRT (θ) преобразуются в стандартизированную шкалу
            <strong className="text-[#1d1d1f]"> со средним значением 100 и стандартным отклонением 15</strong> —
            ту же шкалу, что используют CAT4, стандартизированные тесты 11+ и профессиональные когнитивные оценки типа WISC и WASI.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Диапазон баллов</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Полоса</th>
                  <th className="text-left py-3 px-4 font-semibold text-[#1d1d1f]">Процентиль</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f5f5f7]">
                <tr className="bg-emerald-50">
                  <td className="py-3 px-4 font-semibold text-emerald-700">120+</td>
                  <td className="py-3 px-4 text-emerald-700">Исключительный</td>
                  <td className="py-3 px-4 text-[#6e6e73]">90-й процентиль и выше</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-blue-700">110–119</td>
                  <td className="py-3 px-4 text-blue-700">Выше среднего</td>
                  <td className="py-3 px-4 text-[#6e6e73]">75–90-й процентиль</td>
                </tr>
                <tr className="bg-[#eef2ff]">
                  <td className="py-3 px-4 font-semibold text-[#4F46E5]">95–109</td>
                  <td className="py-3 px-4 text-[#4F46E5]">Средний</td>
                  <td className="py-3 px-4 text-[#6e6e73]">37–73-й процентиль</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="py-3 px-4 font-semibold text-amber-700">85–94</td>
                  <td className="py-3 px-4 text-amber-700">Ниже среднего</td>
                  <td className="py-3 px-4 text-[#6e6e73]">16–37-й процентиль</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="py-3 px-4 font-semibold text-red-700">Ниже 85</td>
                  <td className="py-3 px-4 text-red-700">Требуется поддержка</td>
                  <td className="py-3 px-4 text-[#6e6e73]">Ниже 16-го процентиля</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6e6e73] mt-3">
            68% детей набирают баллы от 85 до 115 (в пределах ±1 стандартного отклонения от среднего).
          </p>
        </section>

        {/* International Benchmarks */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Международные бенчмарки</h2>
          <p className="text-[#6e6e73] leading-relaxed mb-6">
            Eduentry соотносит каждую полосу баллов с четырьмя международно признанными образовательными рамками,
            предоставляя семьям глобальный контекст для понимания успеваемости ребёнка.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                flag: '🇬🇧',
                name: 'Национальная программа Великобритании',
                detail: 'Баллы соотносятся с категориями: ниже ожидаемого / приближается / достигает / выше / высокоспособный. Конкурентные баллы для поступления в грамматическую школу обычно 115 и выше.',
                color: 'border-blue-100 bg-blue-50',
              },
              {
                flag: '🇺🇸',
                name: 'Уровни классов США',
                detail: 'Баллы соотносятся с: ниже уровня класса / приближается / на уровне / выше / значительно выше; в соответствии с определениями компетентности Common Core и NAEP.',
                color: 'border-violet-100 bg-violet-50',
              },
              {
                flag: '🌍',
                name: 'PISA (OECD)',
                detail: 'Баллы соотносятся с уровнями компетентности PISA 1–6. Средний результат OECD соответствует примерно Уровню 3; стандартизированный балл около 100.',
                color: 'border-emerald-100 bg-emerald-50',
              },
              {
                flag: '🎓',
                name: 'Программа IB',
                detail: 'Баллы указывают на готовность к Программе среднего звена IB, Дипломной программе IB стандартного уровня или курсам повышенного уровня.',
                color: 'border-amber-100 bg-amber-50',
              },
            ].map(({ flag, name, detail, color }) => (
              <div key={name} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{flag}</span>
                  <span className="font-semibold text-[#1d1d1f] text-sm">{name}</span>
                </div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What you learn */}
        <section>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">Что вы узнаёте из результатов</h2>
          <ul className="space-y-4 mb-6">
            {[
              { title: 'Стандартизированный балл и категория успеваемости', desc: 'Балл по шкале среднее-100, СО-15; отнесённый к одной из пяти полос: Требуется поддержка (70–84), Ниже среднего (85–94), Средний (95–109), Выше среднего (110–119) или Исключительный (120+).' },
              { title: 'Глобальный процентильный рейтинг', desc: 'Как ученик выступает по сравнению со сверстниками того же возраста со всего мира, выраженное в процентиле (например, топ-10%, топ-25%).' },
              { title: 'Разбивка по предметам', desc: 'Отдельные баллы и полосы успеваемости по английскому, математике, вербальному и невербальному мышлению.' },
              { title: 'Международное сравнение', desc: 'Балл, соотнесённый с уровнями Национальной программы Великобритании, эквивалентами классов США, уровнями компетентности PISA и готовностью к программе IB.' },
              { title: 'Персонализированные рекомендации от ИИ', desc: 'Индивидуальные рекомендации по учёбе на основе профиля успеваемости ученика; фокус на областях, которые с наибольшей вероятностью улучшат общий балл.' },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#eef2ff] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5] block" />
                </span>
                <span className="text-[#6e6e73] leading-relaxed">
                  <strong className="text-[#1d1d1f]">{title}</strong> — {desc}
                </span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Blog links */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-6">Из блога</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/ru/blog/kak-vash-rebyonok-sravnivaetsya-globalno', label: 'Как ваш ребёнок выглядит в мировом масштабе?', desc: 'Руководство для родителей по бенчмаркам PISA, Великобритании и IB.' },
            { href: '/ru/blog/preimushchestva-stazha-v-shkole', label: 'Преимущества стажировки в старшей школе', desc: 'Как стандартизированные баллы пересекаются с опытом работы в школе.' },
          ].map(({ href, label, desc }) => (
            <Link key={href} href={href} className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col">
              <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors">{label}</div>
              <div className="text-xs text-[#6e6e73] leading-relaxed">{desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-[#eef2ff] rounded-2xl border border-[#c7d2fe] p-10">
        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Узнайте процентиль вашего ребёнка</h2>
        <p className="text-[#6e6e73] mb-6">Бесплатная оценка · 6–17 лет · Результаты за 90 минут</p>
        <Link href="/ru/auth/register" className="inline-block bg-[#4F46E5] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
          Начать бесплатную оценку
        </Link>
      </div>
    </main>
  )
}
