'use client'

import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote: '我们在女儿参加11+考试前使用了Eduentry。语言推理得分精准指出了需要更多练习的地方——她顺利进入了第一志愿文法学校。',
    name: '李明华',
    role: '妈妈，伦敦',
    product: '学术评估',
  },
  {
    quote: '我不知道我儿子的数学水平与国际同龄人相比如何。百分位排名提供了真实的对比背景，这是学校成绩从未给过我们的。',
    name: '张建国',
    role: '爸爸，曼彻斯特',
    product: '学术评估',
  },
  {
    quote: '实习评估报告显示我在数据分析方面的能力更强——我以前从未想到这一点。我朝这个方向提交了申请并被录取了。',
    name: '王晓雯',
    role: '高中生，伯明翰',
    product: '实习评估',
  },
  {
    quote: '我儿子才9岁，但我们想在升入中学前了解他的国际水平。与PISA的比较正是我们需要的：清晰、易懂，而且完全免费。',
    name: '陈伟明',
    role: '爸爸，爱丁堡',
    product: '学术评估',
  },
  {
    quote: '非语言推理得分是最大的惊喜。我女儿从未接受过正式的空间思维评估——看到她位于第88百分位，在选择学校时帮助很大。',
    name: '刘秀芳',
    role: '妈妈，布里斯托尔',
    product: '学术评估',
  },
]

export default function TestimonialsCarouselZH() {
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
        <button onClick={prev} aria-label="上一个" className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`评价 ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === index ? 'w-5 h-2 bg-[#4F46E5]' : 'w-2 h-2 bg-[#d2d2d7] hover:bg-[#86868b]'}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="下一个" className="w-9 h-9 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] transition-colors flex items-center justify-center">
          <svg className="w-4 h-4 text-[#1d1d1f]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
