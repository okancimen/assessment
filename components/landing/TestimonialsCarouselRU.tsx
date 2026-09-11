'use client'

import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Мы использовали Eduentry перед экзаменом дочери в 11+. Балл по вербальному мышлению точно указал, где нужно больше практики — она поступила в грамматическую школу первого выбора.',
    name: 'Rachel T.',
    role: 'Мама, Лондон',
    product: 'Академическая оценка',
  },
  {
    quote: 'Я не знал, насколько силён мой сын в математике по сравнению с международными сверстниками. Процентильный рейтинг дал реальный контекст, которого никогда не давали школьные отметки.',
    name: 'Marcus O.',
    role: 'Папа, Манчестер',
    product: 'Академическая оценка',
  },
  {
    quote: 'Отчёт о стажировке показал, что мои способности сильнее в аналитике данных — я никогда об этом не думала. Я подала заявку в этом направлении и была принята.',
    name: 'Aisha P.',
    role: 'Ученица 11-го класса, Бирмингем',
    product: 'Оценка стажировки',
  },
  {
    quote: 'Моему сыну всего 9 лет, но мы хотели узнать, где он стоит на международном уровне перед средней школой. Сравнение с PISA — именно то, что нам было нужно: ясно, понятно и совершенно бесплатно.',
    name: 'Daniel F.',
    role: 'Папа, Эдинбург',
    product: 'Академическая оценка',
  },
  {
    quote: 'Балл по невербальному мышлению стал самым большим сюрпризом. Моя дочь никогда не проходила официальную оценку пространственного мышления — увидеть, что она на 88-м процентиле, очень помогло нам при выборе школы.',
    name: 'Priya K.',
    role: 'Мама, Бристоль',
    product: 'Академическая оценка',
  },
  {
    quote: 'Я использовал оценку стажировки как часть подготовки к университету. Резюме от ИИ дало мне конкретные формулировки для личного заявления — мой консультант сказал, что это одно из сильнейших заявлений, которые он видел.',
    name: 'Tom W.',
    role: 'Ученик 11-го класса, Лидс',
    product: 'Оценка стажировки',
  },
]

export default function TestimonialsCarouselRU() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = TESTIMONIALS.length

  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 4500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, index])

  const getCard = (offset: number) => TESTIMONIALS[(index + offset + total) % total]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div className="flex gap-5 transition-all duration-500">
          {[0, 1, 2].map(offset => {
            const t = getCard(offset)
            return (
              <div
                key={offset}
                className="flex-none w-full md:w-[calc(33.333%-14px)] bg-[#f5f5f7] rounded-3xl p-7 flex flex-col gap-5"
              >
                <svg className="w-6 h-6 text-[#4F46E5] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm text-[#1d1d1f] leading-relaxed flex-1">{t.quote}</p>
                <div>
                  <p className="text-sm font-semibold text-[#1d1d1f]">{t.name}</p>
                  <p className="text-xs text-[#636366]">{t.role}</p>
                  <span className="inline-block mt-2 text-[10px] font-semibold text-[#4F46E5] bg-[#eef2ff] px-2 py-0.5 rounded-full">
                    {t.product}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button onClick={prev} aria-label="Назад" className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Отзыв ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-5 h-2 bg-[#4F46E5]' : 'w-2 h-2 bg-[#d2d2d7] hover:bg-[#86868b]'}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Вперёд" className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
