'use client'

import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote: "We used Eduentry before my daughter's 11+ exam. The verbal reasoning score flagged exactly where she needed more practice — she got into her first choice grammar school.",
    name: 'Rachel T.',
    role: 'Parent, London',
    product: 'Academic Assessment',
  },
  {
    quote: "I didn't realise how strong my son was at maths relative to his international peers. The percentile ranking gave us real context that school grades simply don't provide.",
    name: 'Marcus O.',
    role: 'Parent, Manchester',
    product: 'Academic Assessment',
  },
  {
    quote: "The internship report told me my aptitude was strongest in Data Analytics, which I'd never really considered. I applied for a placement in that track and got it.",
    name: 'Aisha P.',
    role: 'Year 12 Student, Birmingham',
    product: 'Internship Assessment',
  },
  {
    quote: "My son is only 9 but I wanted to know where he stood internationally before secondary school. The PISA benchmarking was exactly what I needed — clear, no-nonsense, and completely free.",
    name: 'Daniel F.',
    role: 'Parent, Edinburgh',
    product: 'Academic Assessment',
  },
  {
    quote: "The non-verbal reasoning score was the biggest surprise. My daughter had never been formally tested on spatial reasoning — seeing she was in the 88th percentile gave us real confidence going into school selection.",
    name: 'Priya K.',
    role: 'Parent, Bristol',
    product: 'Academic Assessment',
  },
  {
    quote: "I used the internship assessment as part of my UCAS prep. The AI summary gave me specific language for my personal statement — my school counsellor said it was one of the strongest she'd seen.",
    name: 'Tom W.',
    role: 'Year 13 Student, Leeds',
    product: 'Internship Assessment',
  },
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const total = TESTIMONIALS.length
  // Show 3 on desktop, 1 on mobile — we handle via CSS widths
  const visibleCount = 3

  const prev = () => setIndex(i => (i - 1 + total) % total)
  const next = () => setIndex(i => (i + 1) % total)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 4500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, index])

  // Build the visible window: we clone-wrap for seamless loop feel
  const getCard = (offset: number) => TESTIMONIALS[(index + offset + total) % total]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Cards row */}
      <div className="overflow-hidden">
        <div
          className="flex gap-5 transition-all duration-500"
        >
          {/* Mobile: show 1, md: show 3 via width trick */}
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
                  <p className="text-xs text-[#6e6e73]">{t.role}</p>
                  <span className="inline-block mt-2 text-[10px] font-semibold text-[#4F46E5] bg-[#eef2ff] px-2 py-0.5 rounded-full">
                    {t.product}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={prev}
          aria-label="Previous"
          className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] transition-colors flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-5 h-2 bg-[#4F46E5]'
                  : 'w-2 h-2 bg-[#d2d2d7] hover:bg-[#86868b]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] transition-colors flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
