import type { Metadata } from 'next'
import Link from 'next/link'
import GuestAcademicStartForm from '@/app/academic-assessment/GuestAcademicStartForm'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '免费儿童学业测评 | AI自适应测试 — Eduentry',
  description:
    '通过英语、数学、语言推理和非语言推理四大科目全面评估孩子的学业能力。适合6–20岁。无需注册。即时出结果。',
  keywords: [
    '儿童学业测评',
    '免费儿童学业测试',
    'AI自适应学业测试',
    '儿童数学英语测试',
    '语言推理测试儿童',
    '非语言推理测试',
    '小学学业评估',
    '儿童学习能力测试',
    '儿童认知评估在线',
    '免费学校水平测试',
  ],
  alternates: {
    canonical: `${BASE_URL}/zh/xueshu-pinggu`,
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
    url: `${BASE_URL}/zh/xueshu-pinggu`,
    siteName: 'Eduentry',
    title: '免费儿童学业测评 | AI自适应测试 — Eduentry',
    description: '4大科目全面评估孩子的学业能力。6–20岁。无需注册。',
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: '儿童学业测评 — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '免费儿童学业测评 | AI自适应测试 — Eduentry',
    description: '4大科目全面评估孩子的学业能力。6–20岁。无需注册。',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: '测评涵盖哪些科目？',
    a: '测评涵盖四大核心科目：英语（阅读理解、语法、拼写）、数学（运算、代数、几何、数据处理）、语言推理和非语言推理。',
  },
  {
    q: '自适应难度是如何运作的？',
    a: '我们的AI采用项目反应理论（IRT），根据孩子的答题情况实时调整题目难度，比固定试卷能更精准地评估真实能力水平。',
  },
  {
    q: '测评需要多长时间？',
    a: '每个科目15道题，共60道题。大多数孩子可在25–35分钟内完成。',
  },
  {
    q: '开始测评需要注册账号吗？',
    a: '不需要。只需填写孩子的姓名和年龄即可立即开始。测评结束后可查看综合分数摘要。注册免费账号可解锁完整的科目分析和AI个性化建议。',
  },
]

export default function ZhXueshuPingguPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#eef2ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">AI自适应 · 4大科目 · 6–20岁</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            了解孩子真实的<br />
            <span className="text-[#4F46E5]">学业能力水平</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            一项自适应测评，涵盖英语、数学、语言推理与非语言推理——采用英国精英学校相同的标准化评分体系。无需账户，进度会自动保存。
          </p>
          <GuestAcademicStartForm locale="zh" />
          <p className="mt-3 text-sm text-[#6e6e73]">
            无需注册即可开始 · 随时暂停和继续
          </p>
          <p className="mt-1 text-sm text-[#6e6e73]">
            已有账号？{' '}
            <Link href="/auth/login" className="text-[#4F46E5] hover:underline font-medium">立即登录</Link>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">测评流程</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: '输入姓名和年龄', desc: '无需注册账号，只需填写孩子的姓名和年龄即可开始。' },
              { step: '2', title: '自适应题目', desc: 'AI利用IRT实时调整题目难度，精准定位孩子的真实能力水平。' },
              { step: '3', title: '即时结果', desc: '立即查看综合分数和各科目得分。注册免费账号可解锁完整分析。' },
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
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">常见问题</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">准备好了解孩子的学业基础了吗？</h2>
          <Link href="/zh/xueshu-pinggu" className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors">
            开始免费测评
          </Link>
        </div>
      </section>

    </>
  )
}
