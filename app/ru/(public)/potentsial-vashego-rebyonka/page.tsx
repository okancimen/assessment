import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/ru/auth/register`

export const metadata: Metadata = {
  title: 'Каковы сильные и слабые стороны ребёнка?',
  description:
    'Узнайте сильные и слабые стороны ребёнка менее чем за час. Бесплатная когнитивная оценка по стандартам PISA, SAT и GCSE — ИИ-отчёт мгновенно.',
  keywords: [
    'каковы сильные и слабые стороны моего ребёнка',
    'сильные стороны ребёнка',
    'слабые стороны ребёнка',
    'когнитивная оценка ребёнка',
    'бесплатный тест для детей',
    'PISA оценка ребёнок',
    'тест потенциала ребёнка',
    'тест когнитивных способностей бесплатно',
    'академическая оценка ребёнка',
    'тест словесного мышления ребёнок',
    'адаптивный тест ребёнок',
    'бесплатный IQ тест ребёнок',
    'международные нормы сравнения',
    'анализ успеваемости ребёнка',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru/potentsial-vashego-rebyonka`,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/ru/potentsial-vashego-rebyonka`,
    siteName: 'Eduentry',
    title: 'Каковы Сильные и Слабые Стороны Моего Ребёнка? — Бесплатный Когнитивный Тест',
    description: 'Узнайте сильные и слабые стороны вашего ребёнка менее чем за час. Бесплатная адаптивная когнитивная оценка по стандартам PISA, SAT и GCSE.',
    locale: 'ru_RU',
    images: [{ url: `${BASE_URL}/ru/opengraph-image`, width: 1200, height: 630, alt: 'Когнитивная оценка вашего ребёнка — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Каковы Сильные и Слабые Стороны Моего Ребёнка? — Бесплатный Когнитивный Тест',
    description: 'Узнайте сильные и слабые стороны вашего ребёнка менее чем за час. Бесплатная адаптивная когнитивная оценка по стандартам PISA, SAT и GCSE.',
    images: [`${BASE_URL}/ru/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: 'Чтение и Грамотность',
    desc: 'Понимание прочитанного, грамматика и словарный запас. Умение анализировать тексты и делать умозаключения.',
  },
  {
    icon: '📐',
    title: 'Математика и Числовое Мышление',
    desc: 'Арифметика, алгебра, геометрия и интерпретация данных. Числовое мышление, не зависящее от школьной программы.',
  },
  {
    icon: '🧠',
    title: 'Вербальное Мышление',
    desc: 'Аналогии, классификации и вербальная логика. Способность мыслить через язык и устанавливать связи.',
  },
  {
    icon: '🔷',
    title: 'Невербальное Пространственное Мышление',
    desc: 'Распознавание закономерностей, пространственное мышление и абстрактные матрицы. Наиболее критически важная когнитивная область для STEM.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'Компьютерное Адаптивное Тестирование (CAT)',
    desc: 'Каждый вопрос выбирается в реальном времени на основе предыдущего ответа. Правильный ответ → более сложный вопрос. Неправильный ответ → рекалибровка. Система определяет реальный уровень способностей ребёнка с высокой точностью за 25–35 вопросов.',
  },
  {
    title: 'Двухпараметрическая Логистическая Модель IRT (2PL)',
    desc: 'Каждый вопрос калибруется с использованием двухпараметрической теории ответа на задание и информации Фишера, что даёт оценку способности (тета) с известным доверительным интервалом. Результаты — не сырые баллы, а статистически надёжное измерение способностей.',
  },
  {
    title: 'Глобальная Стандартная Шкала',
    desc: 'Стандартная шкала: среднее = 100, СО = 15. Сравнение с международными нормами, согласованными с PISA, GCSE, SAT и программой IB.',
  },
]

const FAQS = [
  {
    q: 'Каковы академические сильные и слабые стороны моего ребёнка?',
    a: 'Академические сильные и слабые стороны вашего ребёнка измеряются в трёх независимых когнитивных областях: вербальное мышление (понимание языка и аналогии), числовое мышление (распознавание закономерностей и математическая логика) и визуально-пространственное мышление (анализ фигур и трёхмерные связи). Бесплатный адаптивный тест даёт отдельный процентильный балл для каждой области относительно международных возрастных норм.',
  },
  {
    q: 'Отражают ли школьные оценки реальный потенциал ребёнка?',
    a: 'Нет. Школьные оценки измеряют кристаллизованный интеллект — выученные и воспроизводимые знания. При этом многие способные дети превосходят других в подвижном интеллекте — мышлении, распознавании закономерностей и решении проблем, которые школьные экзамены редко измеряют.',
  },
  {
    q: 'Является ли оценка бесплатной?',
    a: 'Да, полностью бесплатной. Требуется регистрация, но никаких сборов, подписок или скрытых платежей нет. По завершении теста мгновенно генерируется отчёт с когнитивным профилем по четырём областям.',
  },
  {
    q: 'Сколько времени занимает тест?',
    a: 'Не более часа. Адаптивный формат обеспечивает более точное измерение при меньшем количестве вопросов по сравнению со стандартными тестами с множественным выбором. Тест можно сохранить — ребёнок может продолжить в любое время.',
  },
  {
    q: 'Для какой возрастной группы предназначен тест?',
    a: 'Предназначен для детей в возрасте 6–17 лет. Система автоматически калибруется для каждой возрастной группы; вопросы адаптируются к уровню ребёнка.',
  },
  {
    q: 'Что показывает отчёт?',
    a: 'Отчёт включает процентильные баллы по международным возрастным нормам для четырёх когнитивных областей, наиболее сильную область, приоритетную область для развития и инсайты для родителей, сгенерированные ИИ по каждой области. Это конкретное руководство — от выбора школы до принятия решений о целевой поддержке.',
  },
  {
    q: 'Чем этот тест отличается от школьных экзаменов?',
    a: 'Школьные экзамены измеряют знания по конкретной программе. Этот тест измеряет когнитивный потенциал — то, как ребёнок мыслит, — независимо от знания учебной программы. Это позволяет справедливо сравнивать детей из разных стран или из разных систем образования.',
  },
  {
    q: 'У ребёнка высокий пространственный IQ, но плохие оценки — это нормально?',
    a: 'Да, это очень распространено. Высокий пространственный интеллект часто недооценивается стандартными академическими тестами. По данным ОЭСР, учащиеся с подвижным мышлением в верхнем квартиле, но с успеваемостью в нижней половине составляют 12–18% всех учащихся — группа, хронически недооцениваемая системами образования.',
  },
  {
    q: 'Могу ли я поделиться результатами со школой?',
    a: 'Да. Отчёт из стандартизированной оценки преображает встречи с учителями и консультации по ориентации. «97-й процентиль по пространственному мышлению» — это гораздо более весомый аргумент, чем размытые слова «кажется умным, но несобранным».',
  },
  {
    q: 'Выявляет ли тест одарённость или особые таланты?',
    a: 'Да. Дети, набирающие выше 90-го процентиля во всех трёх областях, демонстрируют сильный показатель кандидатуры для программ для одарённых. Тест также выявляет несоответствия в паттернах баллов, направляя к специалистам при дислексии, дискалькулии или состоянии дважды исключительности.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/ru/potentsial-vashego-rebyonka#webpage`,
  url: `${BASE_URL}/ru/potentsial-vashego-rebyonka`,
  name: 'Каковы Сильные и Слабые Стороны Моего Ребёнка? — Бесплатный Когнитивный Тест',
  description: 'Узнайте сильные и слабые стороны вашего ребёнка менее чем за час. Бесплатная адаптивная когнитивная оценка по стандартам PISA, SAT и GCSE.',
  inLanguage: 'ru',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/ru/potentsial-vashego-rebyonka#service`,
  name: 'Когнитивная Оценка Ребёнка',
  description: 'Бесплатная адаптивная когнитивная оценка для детей 6–17 лет. Сравнивает вербальное, числовое и пространственное мышление по стандартам PISA, SAT и GCSE.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/ru/potentsial-vashego-rebyonka`,
  inLanguage: 'ru',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE_URL}/ru` },
    { '@type': 'ListItem', position: 2, name: 'Потенциал Вашего Ребёнка', item: `${BASE_URL}/ru/potentsial-vashego-rebyonka` },
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

const RELATED_POSTS = [
  { href: '/ru/blog/besplatny-akademichesky-test-silnye-slabye-storony-rebenka', tag: 'Оценка', title: 'Бесплатный Академический Тест: Сильные и Слабые Стороны Ребёнка Менее чем за Час' },
  { href: '/ru/blog/obnaruzhit-skrytye-talenty-rebyonka-rukovodstvo-roditelej', tag: 'Руководство', title: 'Обнаружить Скрытые Таланты Ребёнка: Современное Руководство для Родителей' },
  { href: '/ru/blog/silnye-slabye-storony-rebenka-podgotovka-k-sredney-shkole', tag: 'Руководство', title: 'Сильные и Слабые Стороны Ребёнка: Подготовка к Средней Школе' },
]

export default function PotentsialVashegoRebyonkaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="opacity-60">Работает на</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60"> (Сингапур)</span>
      </div>

      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Бесплатная Когнитивная Оценка</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Откройте Истинные Когнитивные<br />
            <span className="text-indigo-600">Сильные и Слабые Стороны</span><br />
            Вашего Ребёнка
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Сравните когнитивные способности и академическую готовность по международным стандартам <strong>PISA, SAT и GCSE</strong> менее чем за час. Раскройте реальный потенциал, который не видно в оценках.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Оценить Когнитивный Потенциал (Бесплатно)
          </Link>

          <p className="mt-4 text-xs text-gray-500">
            Бесплатное Международное Сравнение &nbsp;•&nbsp; 100% Конфиденциально &nbsp;•&nbsp; Мгновенный PDF-Отчёт
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: 'Стандартные IRT-модели' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: 'Зарегистрирован в Сингапуре' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: 'Адаптивный механизм тестирования' },
            { icon: '🔒', label: 'Соответствие GDPR', sub: 'Конфиденциальность данных учащихся' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs font-semibold text-gray-900">{b.label}</span>
              <span className="text-[11px] text-gray-500">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Каковы сильные и слабые стороны моего ребёнка?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Академические сильные и слабые стороны вашего ребёнка измеряются в трёх независимых когнитивных областях:</strong> вербальное мышление (понимание языка и аналогии), числовое мышление (распознавание закономерностей и математическая логика) и визуально-пространственное мышление (анализ фигур и трёхмерные связи). Бесплатный адаптивный тест даёт отдельный процентильный балл по каждой области относительно международных возрастных норм — чётко показывая, где ребёнок действительно силён, а где целенаправленная поддержка даст наибольший эффект.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Школьные оценки не могут ответить на этот вопрос — они измеряют знания конкретной программы в конкретной школе у конкретного учителя. Они не измеряют когнитивный потенциал по международным стандартам. По данным ОЭСР, учащиеся с подвижным мышлением в верхнем квартиле, но с успеваемостью в нижней половине составляют <strong>12–18%</strong> всех учащихся — группа, хронически недооцениваемая системами образования.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Начать бесплатную оценку →
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Что мы оцениваем?</h2>
            <p className="text-gray-500 text-base">Четыре независимые когнитивные области — каждая измеряется с отдельным международным процентильным баллом.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 bg-white rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Научная основа Eduentry</h2>
            <p className="text-gray-500 text-base">Почему это отличается от обычных тестов и анкет?</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-[#f9f8ff] rounded-2xl border border-indigo-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            Та же архитектура тестирования используется в стандартных оценках, таких как <strong>NWEA MAP</strong> и <strong>CAT4</strong>, применяемых более чем к 10 миллионам учащихся по всему миру. Мета-анализ Джона Хэтти, охвативший более 900 исследований, определил величину эффекта диагностической оценки как 0,67 — среди наиболее эффективных вмешательств в образовании.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Пример Отчёта: Глобальный Профиль Способностей</h2>
          <p className="text-gray-500 text-base mb-10">По завершении теста родители получают подробный отчёт с процентильными рейтингами по четырём областям и указанием сильных сторон и областей для развития.</p>

          <Link href="/sample-report" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Глобальный Профиль Способностей</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · Отчёт о Когнитивной Оценке</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Чтение и Грамотность', score: '87', pct: '82-й Процентиль' },
                    { label: 'Математика и Числовое', score: '94', pct: '91-й Процентиль' },
                    { label: 'Вербальное Мышление', score: '79', pct: '74-й Процентиль' },
                    { label: 'Пространственное Мышление', score: '112', pct: '97-й Процентиль' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-left shadow-sm">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 Наиболее Сильная Область: Пространственное Мышление</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">Ваш ребёнок демонстрирует результаты значительно выше международной возрастной нормы в распознавании закономерностей и пространственном мышлении. Эта область тесно коррелирует с STEM, инженерией и дизайном.</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline">Посмотреть полный пример отчёта →</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              Оценить Когнитивный Потенциал (Бесплатно)
            </Link>
            <p className="mt-3 text-xs text-gray-500">Бесплатное Международное Сравнение &nbsp;•&nbsp; 100% Конфиденциально &nbsp;•&nbsp; Мгновенный PDF-Отчёт</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Часто Задаваемые Вопросы</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{q}</span>
                  <span className="text-indigo-400 text-lg leading-none mt-0.5 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Связанные Руководства</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] text-white py-6 px-6 text-center">
        <p className="text-xs text-white/50 mb-1">Magenta Networks Pte Ltd (Singapore)</p>
        <Link href={REGISTER_URL} className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
          Начать бесплатную оценку →
        </Link>
      </div>
    </>
  )
}
