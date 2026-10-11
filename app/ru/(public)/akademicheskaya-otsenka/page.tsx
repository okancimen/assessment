import type { Metadata } from 'next'
import Link from 'next/link'
import GuestAcademicStartForm from '@/app/academic-assessment/GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Бесплатная академическая оценка детей | Адаптивный тест ИИ — Eduentry',
  description:
    'Измерьте академические способности вашего ребёнка по английскому языку, математике, вербальному и невербальному мышлению. Возраст 6–20 лет. Без регистрации. Мгновенные результаты.',
  keywords: [
    'академическая оценка детей',
    'бесплатный академический тест для детей',
    'адаптивный тест ИИ ребёнок',
    'тест по математике английскому для детей',
    'тест вербального мышления дети',
    'тест невербального мышления',
    'оценка начальной школы',
    'тест академических способностей ребёнка',
    'когнитивная оценка детей онлайн',
    'тест школьного уровня бесплатно',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru/akademicheskaya-otsenka`,
    languages: {
      'en-GB': `${BASE_URL}/academic-assessment`,
      fr: `${BASE_URL}/fr/evaluation-academique`,
      es: `${BASE_URL}/es/evaluacion-academica`,
      ar: `${BASE_URL}/ar/taqyim-acadimi`,
      tr: `${BASE_URL}/tr/akademik-degerlendirme`,
      ru: `${BASE_URL}/ru/akademicheskaya-otsenka`,
      zh: `${BASE_URL}/zh/xueshu-pinggu`,
      'x-default': `${BASE_URL}/academic-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/ru/akademicheskaya-otsenka`,
    siteName: 'Eduentry',
    title: 'Бесплатная академическая оценка детей | Адаптивный тест ИИ — Eduentry',
    description: 'Измерьте академические способности вашего ребёнка по 4 предметам. Возраст 6–20 лет. Без регистрации.',
    locale: 'ru_RU',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Академическая оценка детей — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бесплатная академическая оценка детей | Адаптивный тест ИИ — Eduentry',
    description: 'Измерьте академические способности вашего ребёнка по 4 предметам. Возраст 6–20 лет. Без регистрации.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: 'Какие предметы охватывает оценка?',
    a: 'Оценка охватывает четыре основных предмета: английский язык (понимание, грамматика, правописание), математика (арифметика, алгебра, геометрия), вербальное мышление и невербальное мышление.',
  },
  {
    q: 'Как работает адаптивная сложность?',
    a: 'Наш ИИ использует теорию ответа на задание (IRT) для регулировки сложности вопросов в реальном времени на основе ответов вашего ребёнка, обеспечивая более точную оценку способностей, чем фиксированный тест.',
  },
  {
    q: 'Сколько времени занимает оценка?',
    a: 'Каждый предмет содержит 15 вопросов, всего 60 вопросов. Большинство детей завершают оценку за 25–35 минут.',
  },
  {
    q: 'Нужно ли создавать аккаунт для начала?',
    a: 'Нет. Начните сразу, указав только имя и возраст вашего ребёнка. После оценки вы увидите итоговый балл. Создайте бесплатный аккаунт, чтобы получить полный анализ и рекомендации ИИ.',
  },
]

export default function RuAkademicheskayaOtsenkaPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Адаптивный ИИ · 4 Предмета · 6–20 Лет</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            Узнайте Реальный Академический<br />
            <span className="text-[#4F46E5]">Уровень Вашего Ребёнка</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            60 адаптивных вопросов по английскому языку, математике, вербальному и невербальному мышлению — с оценкой по той же стандартизированной шкале, что и в британских отборочных школах.
          </p>
          <GuestAcademicStartForm locale="ru" />
          <p className="mt-2 text-sm text-[#6e6e73]">
            Уже есть аккаунт?{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">Войти</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">Как это работает?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Введите имя и возраст', desc: 'Без аккаунта. Только имя и возраст вашего ребёнка.' },
              { step: '2', title: 'Адаптивные вопросы', desc: 'ИИ корректирует сложность в реальном времени с помощью IRT, точно определяя уровень вашего ребёнка.' },
              { step: '3', title: 'Мгновенные результаты', desc: 'Сразу посмотрите общий балл и результаты по предметам. Зарегистрируйтесь бесплатно для полного анализа.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
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

      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Готовы узнать академический уровень вашего ребёнка?</h2>
          <Link href="/ru/akademicheskaya-otsenka" className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors">
            Начать бесплатную оценку
          </Link>
        </div>
      </section>

    </>
  )
}
