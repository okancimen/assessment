import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/ru/auth/register`

export const metadata: Metadata = {
  title: 'Оценка личности ребёнка | Тест сильных сторон VIA — Eduentry',
  description:
    'Откройте уникальные сильные стороны характера вашего ребёнка с помощью нашей научно обоснованной оценки личности на базе ИИ. Возраст 6–20 лет. Бесплатный опросник для родителей. Мгновенный персональный отчёт о развитии.',
  keywords: [
    'оценка личности ребёнка',
    'тест сильных сторон VIA',
    'сильные и слабые стороны ребёнка',
    'бесплатный тест личности ребёнка',
    'сильные стороны VIA для детей',
    'оценка характера ребёнка онлайн',
    'инструменты воспитания личность',
    'тест позитивной психологии для детей',
    'оценка развития ребёнка',
    'отчёт ИИ о личности ребёнка',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru/otsenka-lichnosti`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/ru/otsenka-lichnosti`,
    siteName: 'Eduentry',
    title: 'Оценка личности ребёнка | Тест сильных сторон VIA — Eduentry',
    description: 'Откройте уникальные сильные стороны характера вашего ребёнка с помощью ИИ-оценки. Возраст 6–20 лет.',
    locale: 'ru_RU',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Оценка личности ребёнка — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Оценка личности ребёнка | Тест сильных сторон VIA — Eduentry',
    description: 'Откройте уникальные сильные стороны характера вашего ребёнка с помощью ИИ-оценки. Возраст 6–20 лет.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'Почему тест проходит родитель, а не сам ребёнок?',
    a: 'Самовосприятие детей меняется быстро, а младшие дети легко отвлекаются или неправильно понимают форматы опросников. Как родитель, ваши ежедневные наблюдения за реальным поведением ребёнка обеспечивают наиболее стабильную и точную основу для оценки.',
  },
  {
    q: 'Что если мой ребёнок находится ровно на границе возрастной группы?',
    a: 'Наша система рассчитывает точный возраст до дня с помощью даты рождения. Вопросы математически оптимизированы для этого конкретного уровня развития. Доверяйте группе, которую назначает система!',
  },
  {
    q: 'Как часто следует повторять эту оценку для моего ребёнка?',
    a: 'Мы рекомендуем повторять тест раз в 6–12 месяцев или при переходе в новую возрастную группу. Это позволяет отслеживать, как сильные стороны его характера растут и развиваются со временем.',
  },
  {
    q: 'Имеет ли эта оценка научное обоснование?',
    a: 'Да. Наши вопросы адаптированы из системы Сильных Сторон Характера VIA — одного из наиболее тщательно рецензируемых инструментов позитивной психологии в мире. Он проверен в разных культурах и используется в исследованиях, опубликованных в ведущих психологических журналах.',
  },
  {
    q: 'Как защищена конфиденциальность моего ребёнка?',
    a: 'Мы никогда не передаём и не продаём данные вашего ребёнка. Ответы хранятся в безопасности и используются исключительно для создания персонального отчёта. Никакие данные не передаются третьим сторонам, рекламодателям или академическим учреждениям.',
  },
  {
    q: 'Что делать после того, как я увижу результаты?',
    a: 'Начните с 3 главных упражнений, рекомендованных ИИ в отчёте. Попробуйте одно из них в течение недели и отметьте любые изменения в уверенности или вовлечённости вашего ребёнка. Возвращайтесь к отчёту, когда вам нужны свежие идеи — упражнения разработаны так, чтобы органично вписываться в ежедневный семейный распорядок.',
  },
]

const VIRTUES = [
  {
    label: 'Мудрость',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['Любознательность', 'Творчество', 'Любовь к обучению', 'Перспектива', 'Суждение'],
  },
  {
    label: 'Смелость',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['Храбрость', 'Настойчивость', 'Честность', 'Жизненная сила'],
  },
  {
    label: 'Гуманность',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['Любовь', 'Доброта', 'Социальный интеллект'],
  },
  {
    label: 'Справедливость',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ['Командная работа', 'Справедливость', 'Лидерство'],
  },
  {
    label: 'Умеренность',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['Прощение', 'Скромность', 'Благоразумие', 'Самоконтроль'],
  },
  {
    label: 'Трансцендентность',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['Восхищение красотой', 'Благодарность', 'Надежда', 'Юмор', 'Духовность'],
  },
]

const TIERS = [
  { label: 'Младший', age: '6–9 лет', traits: '12 базовых черт', questions: '24 вопроса', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: 'Средний', age: '10–13 лет', traits: '15 черт', questions: '30 вопросов', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: 'Подросток', age: '14–17 лет', traits: '20 черт', questions: '40 вопросов', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: 'Молодой взрослый', age: '18–20 лет', traits: 'Все 24 черты', questions: '48 вопросов', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function OtsenkaLichnostiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Сильные стороны VIA · Возраст 6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Откройте Уникальные Сильные<br />
            <span className="text-[#4F46E5]">Стороны Вашего Ребёнка</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            Оценка характера на базе ИИ, научно обоснованная и идеально адаптированная к возрасту вашего ребёнка.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Начать бесплатную оценку
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            Уже есть аккаунт?{' '}
            <Link href="/ru/auth/login" className="text-[#4F46E5] hover:underline font-medium">Войти</Link>
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Почему Характер Важнее Оценок</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            Как родители, мы часто целиком сосредотачиваемся на школьных оценках. Но академические результаты рассказывают лишь часть истории. Истинный успех и устойчивость исходят из характера ребёнка, его эмоциональных привычек и сильных сторон личности. Наша оценка помогает вам смотреть дальше оценок и видеть, кем становится ваш ребёнок — выявляя его &ldquo;Ключевые Сильные Стороны&rdquo; и точно определяя &ldquo;Зоны Роста&rdquo;.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Как это работает</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Умное определение возраста 🗓️',
                desc: 'При регистрации просто введите дату рождения вашего ребёнка. Наша система автоматически рассчитает его уровень развития и назначит правильный уровень оценки.',
              },
              {
                step: '2',
                title: '5-минутный опрос для родителей ⭐',
                desc: 'Вы ответите на серию быстрых вопросов, основанных на наблюдении, с оценкой от 1 до 5 звёзд — о поведении, которое вы видите каждый день. Никаких догадок, никакого стресса для ребёнка.',
              },
              {
                step: '3',
                title: 'Отчёт о росте на базе ИИ 🤖',
                desc: 'Наш продвинутый ИИ анализирует ваши ответы на основе глобально признанной психологической модели и создаёт индивидуальную подробную дорожную карту с практическими упражнениями для родителей.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">Основан на Золотом Стандарте Позитивной Психологии</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            Наша платформа адаптирует всемирно признанную систему Сильных Сторон Характера VIA, разработанную психологами-пионерами доктором Мартином Селигманом и доктором Нилом Майерсоном. Используемая в более чем 190 странах исследователями и педагогами, эта модель выявляет 24 универсальные черты, сгруппированные под 6 основных добродетелей: Мудрость, Смелость, Гуманность, Справедливость, Умеренность и Трансцендентность.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Точно Откалиброван для Каждого Этапа Детства</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Что вы получаете</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Топ-5 Ключевых Сильных Сторон', desc: 'Области, где ваш ребёнок естественно блистает.' },
              { icon: '🌱', title: 'Нижние 3 Столпа Роста', desc: 'Мягкие insights о их слепых зонах или текущих слабостях.' },
              { icon: '🤖', title: 'Практический Инструментарий ИИ', desc: 'Индивидуальные, реальные упражнения, которые вы можете практиковать дома, чтобы помочь им процветать.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Часто задаваемые вопросы</h2>
          <div className="flex flex-col divide-y divide-[#d2d2d7]">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-[#1d1d1f] leading-snug">{q}</span>
                  <svg className="w-5 h-5 text-[#4F46E5] shrink-0 mt-0.5 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Готовы узнать, кем на самом деле является ваш ребёнок?</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            Начать бесплатную оценку
          </Link>
        </div>
      </section>
    </>
  )
}
