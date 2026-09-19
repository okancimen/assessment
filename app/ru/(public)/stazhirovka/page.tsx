import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Бесплатная оценка готовности к стажировке — Eduentry',
  description:
    'Бесплатная адаптивная оценка из 34 вопросов для школьников от 14 лет. Узнай своё идеальное направление — технологии, бизнес, аналитика или digital-маркетинг — за 35 минут. Персональный отчёт сразу.',
  keywords: [
    'стажировка школьники',
    'стажировка старшеклассники',
    'оценка готовности к стажировке',
    'как найти стажировку',
    'летняя стажировка школьники',
    'IT стажировка для школьников',
    'профориентация старшеклассники',
    'первый опыт работы школьники',
    'стажировка цифровой маркетинг',
    'оценка профнавыков онлайн',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru/stazhirovka`,
    languages: {
      ru: `${BASE_URL}/ru/stazhirovka`,
      'en-GB': `${BASE_URL}/internship`,
      tr: `${BASE_URL}/tr/staj`,
      fr: `${BASE_URL}/fr/stage`,
      es: `${BASE_URL}/es/practicas`,
      ar: `${BASE_URL}/ar/tadrib`,
      zh: `${BASE_URL}/zh/shixi`,
      'x-default': `${BASE_URL}/internship`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Бесплатная оценка готовности к стажировке — Eduentry',
    description: 'Бесплатная оценка из 34 вопросов для школьников от 14 лет. Персональный отчёт за 35 минут.',
    url: `${BASE_URL}/ru/stazhirovka`,
    locale: 'ru_RU',
    images: [{ url: `${BASE_URL}/ru/stazhirovka/opengraph-image`, width: 1200, height: 630, alt: 'Оценка готовности к стажировке — Eduentry' }],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/ru/stazhirovka#service`,
  name: 'Оценка готовности к стажировке — Eduentry',
  description: 'Бесплатная адаптивная оценка из 34 вопросов для школьников от 14 лет. Измеряет общие способности, специальные знания, профессиональные навыки и профиль интересов. Персональный отчёт сразу после прохождения.',
  url: `${BASE_URL}/ru/stazhirovka`,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: { '@type': 'Country', name: 'Russia' },
  audience: { '@type': 'Audience', audienceType: 'Школьники от 14 лет' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE_URL}/ru` },
    { '@type': 'ListItem', position: 2, name: 'Стажировка', item: `${BASE_URL}/ru/stazhirovka` },
  ],
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/ru/stazhirovka#webpage`,
  url: `${BASE_URL}/ru/stazhirovka`,
  name: 'Бесплатная оценка готовности к стажировке — Eduentry',
  description: 'Бесплатная адаптивная оценка из 34 вопросов для школьников от 14 лет. Узнай своё идеальное направление за 35 минут.',
  inLanguage: 'ru',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/ru/stazhirovka#service` },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Оценка действительно бесплатная?', acceptedAnswer: { '@type': 'Answer', text: 'Да, полностью бесплатно. Никаких подписок, скрытых платежей или платных уровней. Создай бесплатный аккаунт и начни прямо сейчас.' } },
    { '@type': 'Question', name: 'С какого возраста можно попасть на стажировку?', acceptedAnswer: { '@type': 'Answer', text: 'Многие компании принимают стажёров-школьников от 14 до 18 лет, особенно на летние программы. Минимальный возраст варьируется от компании к компании; стартапы и IT-компании, как правило, более гибкие.' } },
    { '@type': 'Question', name: 'Как найти стажировку без связей?', acceptedAnswer: { '@type': 'Answer', text: 'Самые эффективные способы: (1) прямая рассылка по небольшим компаниям — короткое персонализированное письмо часто получает ответ; (2) через карьерного консультанта в школе; (3) через родителей или родственников; (4) на профессиональных мероприятиях и хакатонах; (5) через LinkedIn.' } },
    { '@type': 'Question', name: 'Какое направление мне подходит?', acceptedAnswer: { '@type': 'Answer', text: 'Оценка Eduentry помогает определить твоё идеальное направление из четырёх: технологии, бизнес, аналитика данных и digital-маркетинг. Она измеряет способности, специальные знания и профессиональные навыки, чтобы объективно указать на подходящую область.' } },
    { '@type': 'Question', name: 'Сколько длится оценка?', acceptedAnswer: { '@type': 'Answer', text: 'Оценка состоит из 34 адаптивных вопросов в 4 этапах и занимает около 35 минут. Можно ставить на паузу и возобновлять в любой момент — без необходимости начинать заново.' } },
    { '@type': 'Question', name: 'Что включает отчёт о готовности?', acceptedAnswer: { '@type': 'Answer', text: 'Персональный отчёт включает: уровень готовности (готов к стажировке, в процессе развития или требует поддержки), резюме с анализом результатов, сгенерированное ИИ, и разбор по каждому этапу с сильными сторонами и зонами роста.' } },
    { '@type': 'Question', name: 'Помогает ли стажировка при поступлении в вуз?', acceptedAnswer: { '@type': 'Answer', text: 'Да. Задокументированный опыт работы значительно усиливает портфолио абитуриента, особенно для бизнес-, технических и медиаспециальностей. Он демонстрирует инициативность и профессиональную зрелость — качества, которые сложно подтвердить только академическими оценками.' } },
    { '@type': 'Question', name: 'Когда подавать заявку на летнюю стажировку?', acceptedAnswer: { '@type': 'Answer', text: 'Крупные компании открывают приём заявок с января по март — места заполняются быстро. Малые и средние компании принимают заявки круглый год, с пиком активности с февраля по май. Лучше подавать за 3–6 месяцев.' } },
  ],
}

const TRACKS = [
  { key: 'tech', icon: '💻', label: 'Технологии', desc: 'Разработка ПО, системное мышление и решение технических задач.' },
  { key: 'business', icon: '📈', label: 'Бизнес', desc: 'Коммерческое мышление, стратегическое планирование и корпоративные коммуникации.' },
  { key: 'data', icon: '📊', label: 'Аналитика данных', desc: 'Количественное мышление, интерпретация данных и принятие решений на основе фактов.' },
  { key: 'marketing', icon: '📣', label: 'Digital-маркетинг', desc: 'Анализ аудитории, стратегия контента и управление цифровыми каналами.' },
]

const PHASES = [
  { label: 'Общие способности', desc: '10 вопросов · Вербальное и количественное мышление', icon: '🧠' },
  { label: 'Специальные знания', desc: '10 вопросов · Прикладные знания в области', icon: '📚' },
  { label: 'Профессиональные навыки', desc: '8 вопросов · Реальные рабочие ситуации', icon: '🤝' },
  { label: 'Профиль интересов', desc: '6 вопросов · Стиль работы и карта предпочтений', icon: '🎯' },
]

const TYPES_STAZHIROVKA = [
  { icon: '☀️', title: 'Летняя стажировка', desc: 'Стажировка во время летних каникул, обычно 2–8 недель. Наиболее доступный вариант для школьников. Отличный способ исследовать отрасль перед выбором специальности.', link: '/ru/blog/ranniy-stazh-razvitie-rebyonka-karera' },
  { icon: '💻', title: 'Удалённая стажировка', desc: 'Стажировка онлайн без необходимости присутствия в офисе. Широко распространена в IT, digital-маркетинге и аналитике данных. Открывает доступ к компаниям за пределами города или страны.', link: '/ru/blog/udalennaya-stazh-dlya-shkolnikov' },
  { icon: '🏢', title: 'IT-стажировка', desc: 'Стажировка в технологических компаниях и стартапах. Не всегда требует навыков программирования — есть много технических ролей без написания кода.', link: '/ru/blog/it-stazh-dlya-shkolnikov' },
  { icon: '📱', title: 'Digital-маркетинг', desc: 'Управление соцсетями, создание контента и SEO. Отрасль с высоким спросом на молодых специалистов, разбирающихся в цифровой среде.', link: '/ru/blog/tsifrovoy-marketing-stazh-shkola' },
  { icon: '📊', title: 'Аналитика данных', desc: 'Сбор, анализ и визуализация данных. Не требует продвинутого программирования — Excel и Google Sheets достаточно для старта.', link: null },
  { icon: '🚀', title: 'Стажировка в стартапе', desc: 'Широкие обязанности, быстрое обучение и прямой контакт с основателями. Стартапы чаще принимают молодых стажёров без опыта.', link: '/ru/blog/startap-stazh-shkolniki' },
]

const GUIDE_SLUGS = [
  'kak-napisat-rezyume-dlya-stazha',
  'kak-napisat-soprovoditelnoe-pismo-dlya-stazha',
  'kak-proyti-sobesedovanie-na-stazh',
  'it-stazh-dlya-shkolnikov',
  'tsifrovoy-marketing-stazh-shkola',
  'kak-nayti-stazh-bez-svyazey',
]
const GUIDES = BLOG_POSTS_RU.filter(p => GUIDE_SLUGS.includes(p.slug))
  .sort((a, b) => GUIDE_SLUGS.indexOf(a.slug) - GUIDE_SLUGS.indexOf(b.slug))

export default function RUStagzhirovkaLandingPage() {
  return (
    <div className="bg-[#f5f5f7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Платформа оценки готовности к стажировке
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            Узнай свою готовность<br />к стажировке
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            Адаптивная оценка из 34 вопросов для школьников от 14 лет. Около 35 минут для получения персонального отчёта о готовности и выбора идеального направления.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/ru/auth/register"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Начать бесплатно
            </Link>
            <Link href="/ru/auth/login" className="text-[#4F46E5] font-semibold text-base hover:underline">
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: 'снижение риска безработицы в 19 лет у молодёжи, которая до 16 лет имела 4+ контакта с работодателями', source: 'Education and Employers, 2018' },
              { stat: '73%', desc: 'работодателей считают предыдущий опыт работы важнейшим критерием при отборе на собеседование', source: 'Prospects, 2022' },
              { stat: '70%', desc: 'вероятнее студенты с опытом стажировки получают оффер до окончания учёбы', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-2">
                <div className="text-3xl font-bold text-[#4F46E5]">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Направления оценки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRACKS.map((track) => (
              <div key={track.key} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{track.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{track.label}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why early */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Почему ранняя стажировка важна?</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Данные лонгитюдных исследований о влиянии раннего профессионального опыта.</p>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                Ведущие университеты — в России, Великобритании и других странах — высоко ценят задокументированный опыт работы в приёмных документах. Абитуриент с сильными академическими результатами и практическим опытом выделяется объективно — так, как это невозможно сделать только с помощью оценок.
              </p>
              <Link href="/ru/blog/ranniy-stazh-razvitie-rebyonka-karera" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                Читать полный анализ →
              </Link>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Виды стажировок</h2>
          <p className="text-sm text-[#6e6e73] mb-5">От летней до удалённой — у каждого варианта свои особенности.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TYPES_STAZHIROVKA.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col gap-3">
                <div className="text-2xl">{t.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm">{t.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed flex-1">{t.desc}</p>
                {t.link && (
                  <Link href={t.link} className="text-xs font-semibold text-[#4F46E5] hover:underline">
                    Подробнее →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Как проходит оценка?</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-[#1d1d1f] text-sm mb-0.5">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  Этап {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">Итого: 34 вопроса · ~35 минут · можно ставить на паузу и возобновлять</span>
            </div>
          </div>
        </section>

        {/* Guides */}
        {GUIDES.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Гиды по стажировкам для школьников</h2>
            <p className="text-sm text-[#6e6e73] mb-5">От резюме до собеседования, от IT до digital-маркетинга — всё, что нужно знать.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDES.map((post) => (
                <Link
                  key={post.slug}
                  href={`/ru/blog/${post.slug}`}
                  className="group bg-white border border-[#d2d2d7] rounded-2xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/30 transition-colors flex flex-col"
                >
                  <div className="text-xs font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5 self-start mb-3">{post.tags[0]}</div>
                  <div className="font-semibold text-[#1d1d1f] text-sm leading-snug group-hover:text-[#4F46E5] transition-colors flex-1">{post.shortTitle}</div>
                  <div className="text-xs text-[#6e6e73] mt-2">{post.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Часто задаваемые вопросы</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden divide-y divide-[#f5f5f7]">
            {[
              { q: 'Оценка действительно бесплатная?', a: 'Да, полностью бесплатно. Никаких подписок, скрытых платежей или платных уровней. Создай бесплатный аккаунт и начни прямо сейчас.' },
              { q: 'С какого возраста можно попасть на стажировку?', a: 'Многие компании принимают стажёров-школьников от 14 до 18 лет, особенно на летние программы. Стартапы, как правило, более гибкие в требованиях к возрасту.' },
              { q: 'Какое направление мне подходит?', a: 'Подумай, какие задачи тебя привлекают: технические и логические → технологии; цифры и решения → аналитика; коммуникации и творчество → digital-маркетинг; организация и стратегия → бизнес. Оценка подтверждает твою склонность объективными данными.' },
              { q: 'Как найти стажировку без связей?', a: 'Самые эффективные способы: прямая рассылка по небольшим компаниям, через карьерного консультанта в школе, через родителей или родственников, а также через профессиональные мероприятия.' },
              { q: 'Сколько длится оценка?', a: 'Около 35 минут для 34 вопросов в 4 этапах. Можно ставить на паузу и возобновлять в любой момент — без необходимости начинать заново.' },
              { q: 'Что включает отчёт о готовности?', a: 'Уровень готовности (готов к стажировке, в процессе развития или требует поддержки), резюме с анализом результатов, сгенерированное ИИ, и разбор по каждому этапу с сильными сторонами и зонами роста.' },
              { q: 'Помогает ли стажировка при поступлении в вуз?', a: 'Да. Задокументированный опыт работы значительно усиливает портфолио абитуриента, особенно для технических и бизнес-специальностей. Он демонстрирует инициативность, которую сложно подтвердить только оценками.' },
              { q: 'Когда подавать заявку на летнюю стажировку?', a: 'Крупные компании открывают приём заявок с января по март. Малые и средние компании принимают заявки круглый год, с пиком с февраля по май. Лучше подавать за 3–6 месяцев.' },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                  <span className="font-medium text-sm text-[#1d1d1f]">{q}</span>
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <div className="bg-[#4F46E5] rounded-3xl px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Оцени свою готовность к стажировке сегодня</h2>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              34 вопроса · 35 минут · Персональный отчёт сразу. Полностью бесплатно.
            </p>
            <Link
              href="/ru/auth/register"
              className="inline-block bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
            >
              Начать бесплатную оценку
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
