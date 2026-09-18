import type { Metadata } from 'next'
import Link from 'next/link'
import BellCurve from '@/components/landing/BellCurve'
import TestimonialsCarouselZH from '@/components/landing/TestimonialsCarouselZH'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS } from '@/types'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Eduentry — 学术评估与实习准备平台',
  description:
    '面向各学习阶段学生的免费自适应评估——为6–17岁儿童提供国际学术基准比较，为14岁以上高中生提供实习准备测评。',
  keywords: [
    '免费儿童学术评估',
    '国际学术基准英国',
    '标准化分数百分位',
    '自适应评估PISA',
    '11+备考免费测试',
    '6至17岁学业评估',
    '实习准备评估高中生',
    '职业能力测试',
    '免费学生测试',
    '语言推理非语言推理测试',
  ],
  alternates: {
    canonical: `${BASE_URL}/zh`,
    languages: {
      zh: `${BASE_URL}/zh`,
      tr: `${BASE_URL}/tr`,
      es: `${BASE_URL}/es`,
      'en-GB': BASE_URL,
      fr: `${BASE_URL}/fr`,
      ar: `${BASE_URL}/ar`,
      ru: `${BASE_URL}/ru`,
      'x-default': BASE_URL,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: `${BASE_URL}/zh`,
    siteName: 'Eduentry',
    title: 'Eduentry — 学术评估与实习准备平台',
    description: '基于与PISA、GCSE和SAT相同科学的免费自适应评估。面向6–17岁儿童的学术基准测评与14岁以上学生的实习准备评估。',
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/zh/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry — 学术评估与实习准备平台' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry — 学术评估与实习准备平台',
    description: '基于与PISA、GCSE和SAT相同科学的免费自适应评估。面向6–17岁儿童的学术基准测评与14岁以上学生的实习准备评估。',
    images: [`${BASE_URL}/zh/opengraph-image`],
  },
}

const SUBJECT_LABELS_ZH: Record<string, string> = {
  english:             '英语',
  mathematics:         '数学',
  verbal_reasoning:    '语言推理',
  nonverbal_reasoning: '非语言推理',
}

const SUBJECT_DESCRIPTIONS_ZH: Record<string, string> = {
  english:             '阅读理解、语法、拼写和标点符号',
  mathematics:         '算术、代数、几何和数据处理',
  verbal_reasoning:    '文字问题解决与批判性思维',
  nonverbal_reasoning: '使用抽象图形和视觉元素进行模式识别',
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:             { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:         { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:    { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning: { border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}

const BELL_SUBJECTS_ZH = [
  { score: 103, label: '英语',     color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 119, label: '数学',     color: '#0D9488', dotColor: '#0D9488' },
  { score: 113, label: '语言推理', color: '#7C3AED', dotColor: '#7C3AED' },
  { score:  91, label: '非语言',   color: '#DB2777', dotColor: '#DB2777' },
]

const FAQ_ZH = [
  { q: 'Eduentry是免费的吗？', a: '是的，完全免费。没有订阅费、隐藏收费或高级套餐。创建免费账户，添加孩子的档案，即可免费开始评估。' },
  { q: '学术评估涵盖哪些科目？', a: '英语（阅读理解、语法、词汇）、数学（算术、代数、几何、解题）、语言推理（类比、分类、序列）和非语言推理（图形、空间思维、矩阵）。每个科目15道自适应题目。' },
  { q: '什么是百分位排名？', a: '百分位排名显示您的孩子与同龄人相比的位置。位于第80百分位意味着孩子的表现超过了同年龄组80%的儿童。Eduentry使用均值100、标准差15的标准化量表——与PISA和大多数专业评估使用的量表相同。' },
  { q: '什么是实习评估？', a: '这是针对14岁以上高中生的独立34题自适应评估，分别测量能力、领域知识、工作技能和兴趣档案，覆盖四个方向：技术、商业、数据分析和数字营销。结果包括个性化的准备情况报告和AI生成的职业洞察。' },
  { q: '可以用Eduentry准备11+考试吗？', a: '可以。四个科目——英语、数学、语言推理和非语言推理——与英国文法学校使用的11+考试结构完全对应。Eduentry提供标准化分数和百分位排名，让您在正式考试前准确了解孩子的位置。' },
  { q: '什么分数算是好成绩？', a: '100是中间值。95–109属于平均范围，110–119高于平均，120+属于卓越水平。英国文法学校11+入学竞争分数通常在115分以上——在伦敦等竞争激烈地区可能需要127+。' },
  { q: '每项评估需要多长时间？', a: '学术评估包含4个科目60道题——大多数儿童在60–90分钟内完成。实习评估包含34道题——大多数学生约35分钟完成。进度自动保存，两项评估均可分次完成。' },
  { q: '自适应技术如何工作？', a: 'Eduentry使用两参数逻辑模型（2PL）的MAP评估——与PISA、GCSE和SAT使用的模型相同。每次回答后，系统更新学生的能力估计，并选择下一道题以最大化测量精度。' },
  { q: '可以添加多个孩子吗？', a: '可以。一个家长账户可以包含多个孩子的档案。每个孩子都有自己的评估历史、分数和个性化建议。可添加的孩子数量没有限制。' },
]

const FAQ_SCHEMA_ZH = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ZH.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

const SOFTWARE_SCHEMA_ZH = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  description: '免费AI自适应评估平台，适合6岁及以上学生。',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: '免费 — 无需订阅' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: 5.0, reviewCount: 6, bestRating: 5, worstRating: 1 },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rachel T.' }, reviewBody: '我们在女儿参加11+考试前使用了Eduentry。语言推理评分准确指出了她需要加强练习的地方——她考入了第一志愿的文法学校。', reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Marcus O.' }, reviewBody: '我没有意识到儿子在数学上相比国际同龄人有多出色。百分位排名给了我们学校成绩无法提供的真实参照。', reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Aisha P.' }, reviewBody: '实习报告告诉我，我在数据分析方面的能力最强——这是我从未认真考虑过的方向。我申请了该领域的实习岗位，并成功获录。', reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Daniel F.' }, reviewBody: '儿子才9岁，但我想在他升入中学前了解他的国际水平。PISA标准测评正是我需要的——清晰、直接、完全免费。', reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya K.' }, reviewBody: '非语言推理得分是最大的惊喜。女儿从未接受过正式的空间推理测试——看到她处于第88百分位，在选校过程中给了我们真正的信心。', reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Tom W.' }, reviewBody: '我在准备大学申请时使用了实习评估。AI摘要为我的个人陈述提供了具体的表达语言——学校辅导员说这是她见过的最优秀的陈述之一。', reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 } },
  ],
}

export default function ChineseHomePage() {
  return (
    <main className="min-h-screen bg-white" lang="zh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA_ZH) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_ZH) }} />

      {/* Hero */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] mb-6">
            适合每个学习阶段的评估
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-7 max-w-5xl mx-auto">
            在正确的时间，
            <br />
            <span className="text-[#4F46E5]">正确的评估。</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#a1a1a7] max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            基于与PISA、GCSE和SAT相同科学的免费自适应评估。
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-[28px] border border-[#424245] p-10 flex flex-col">
              <p className="text-[11px] text-[#a1a1a7] font-medium uppercase tracking-[0.12em] mb-6">
                学术评估
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 leading-snug tracking-tight">
                您的孩子在全球处于什么水平？
              </h2>
              <p className="text-[#a1a1a7] text-sm leading-relaxed mb-8 flex-1">
                与英国、美国、PISA和IB标准对标——按英语、数学、语言推理和非语言推理提供标准化分数和百分位排名。
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#a1a1a7] mb-8">
                <span>60道自适应题目</span>
                <span>·</span>
                <span>4个科目</span>
                <span>·</span>
                <span>6–17岁</span>
                <span>·</span>
                <span>免费</span>
              </div>
              <CtaLink
                href="/zh/auth/register"
                label="hero_academic_zh"
                className="bg-[#4F46E5] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#4338CA] transition-colors text-center"
              >
                开始免费评估
              </CtaLink>
              <Link href="#xueshu-pinggu" className="text-center text-xs text-[#a1a1a7] hover:text-white transition-colors mt-4 py-4 block">
                了解更多 ↓
              </Link>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-[28px] border border-[#c7d2fe] p-10 flex flex-col">
              <div className="flex items-center gap-2.5 mb-6">
                <p className="text-[11px] text-[#4F46E5] font-medium uppercase tracking-[0.12em]">
                  实习评估
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  全新
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#1d1d1f] mb-4 leading-snug tracking-tight">
                学生准备好就业了吗？
              </h2>
              <p className="text-[#636366] text-sm leading-relaxed mb-8 flex-1">
                34题自适应评估，测量能力、领域知识、工作技能和兴趣档案。提供个性化准备情况报告和AI职业洞察。
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#636366] mb-8">
                <span>34道自适应题目</span>
                <span>·</span>
                <span>4个职业方向</span>
                <span>·</span>
                <span>14岁以上</span>
                <span>·</span>
                <span>免费</span>
              </div>
              <a
                href="https://eduentry.ai/"
                className="bg-[#1d1d1f] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d2f] transition-colors text-center"
              >
                了解项目详情
              </a>
              <Link href="/zh/shixi" className="text-center text-xs text-[#4F46E5] hover:text-[#4338CA] transition-colors mt-4 py-4 block">
                了解更多 ↓
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Trust line */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-3">
        <p className="text-center text-[11px] text-[#636366] tracking-wide">
          与PISA、GCSE &amp; SAT相同科学体系 &nbsp;·&nbsp; 符合GDPR &nbsp;·&nbsp; 永久免费
        </p>
      </section>

      {/* Social proof */}
      <section className="py-24 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6">
          <TestimonialsCarouselZH />
        </div>
      </section>

      {/* Academic section */}
      <section id="xueshu-pinggu" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            <div className="flex-1">
              <p className="text-xs font-semibold text-[#636366] uppercase tracking-widest mb-4">学术评估 · 6–17岁</p>
              <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                了解孩子的<br />国际学术位置。
              </h2>
              <p className="text-[#636366] text-lg leading-relaxed mb-8 max-w-lg">
                免费自适应评估，测量英语、数学、语言推理和非语言推理，与英国、美国、PISA和IB标准对标。结果包含标准化分数、百分位排名和AI建议。
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/zh/auth/register"
                  label="academic_section_zh"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  开始免费评估
                </CtaLink>
                <Link href="/zh/fangfalun" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  了解评估原理 →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider">示例结果</p>
                    <p className="font-bold text-white mt-1">Emma · 11岁</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">高于平均</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: '英语',   score: 103, color: '#4F46E5', pct: 58 },
                    { label: '数学',   score: 119, color: '#0D9488', pct: 90 },
                    { label: '语言推理', score: 113, color: '#7C3AED', pct: 79 },
                    { label: '非语言', score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#a1a1a7] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#a1a1a7]">Powered by</span>
                  <span className="text-[10px] font-semibold text-[#a1a1a7]">Claude AI · Anthropic</span>
                </div>
              </div>

              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve subjects={BELL_SUBJECTS_ZH} hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-white pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              四个科目。全球视野。
            </h2>
            <p className="text-[#636366] max-w-xl mx-auto text-lg">
              PISA、TIMSS以及英美国家课程评估的四个核心领域——每项均根据孩子的水平自适应调整以最大化测量精度。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <div
                  key={subject}
                  className="rounded-3xl p-6 border"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4" style={{ background: c.accent + '22' }}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS_ZH[subject]}</h3>
                  <p className="text-sm text-[#636366] leading-relaxed">{SUBJECT_DESCRIPTIONS_ZH[subject]}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">评估背后的科学</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              与国际评估<br />相同的科学体系。
            </h2>
            <p className="text-[#636366] max-w-2xl mx-auto text-lg">
              Eduentry使用与PISA、GCSE和SAT相同的心理测量模型——因此您孩子的结果可以直接与国际标准进行比较。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: '双参数IRT模型', desc: '每道题目都有经过校准的难度和区分度参数。分数反映的不只是答对题数，还有所答题目的难度。', tag: '用于PISA · SAT · GCSE', color: '#4F46E5' },
              { title: '实时自适应算法', desc: '使用Fisher信息量选题以最大化测量精度。每次回答都会更新能力估计并选出最优下一题。', tag: '计算机自适应测试', color: '#0D9488' },
              { title: '国际对标', desc: '分数使用与PISA相同的均值100、标准差15量表。结果对应英国国家课程、美国年级水平、PISA能力等级和IB课程。', tag: '英国 · 美国 · PISA · IB', color: '#7C3AED' },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>{tag}</span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">分数含义解读</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: '需要帮助',  color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: '低于平均',  color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: '平均水平',  color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: '高于平均',  color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: '卓越表现',  color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#636366] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#636366] text-center mt-4">
              68%的儿童分数在85至115之间（均值1个标准差范围内）
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-medium text-[#636366] uppercase tracking-[0.15em] mb-5">学术评估 · 开始很简单</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              从注册到结果<br />不到两小时。
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: '创建免费账户', desc: '以家长身份注册，添加孩子的姓名和出生日期。评估会自动适应孩子的精确年龄。' },
              { step: '02', title: '孩子完成4项自适应测试', desc: '4个科目共60道题，在家按自己的节奏完成。答对则题目变难，答错则题目变易，持续自适应调整。' },
              { step: '03', title: '获取全球参照结果', desc: '标准化分数、英美PISA和IB国际基准对标、AI学习建议和可打印报告。' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink href="/zh/auth/register" label="how_it_works_zh" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              开始免费评估 →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Internship section */}
      <section id="shixi-pinggu" className="bg-[#f5f5f7] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-medium text-[#4F46E5] uppercase tracking-[0.15em] bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              实习评估 · 全新推出
            </span>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              了解实习准备度。
            </h2>
            <p className="text-[#636366] text-lg max-w-2xl mx-auto leading-relaxed">
              面向14岁以上高中生的34题自适应评估。了解能力水平、各方向优势、工作技能及最适合的领域——附个性化AI报告。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: '创建免费学生账户', desc: '自行注册或接受家长邀请。填写学校、年级、方向偏好及简短的个人目标陈述。' },
              { step: '02', title: '完成4个评估阶段', desc: '通用能力、领域知识、工作技能（情境判断）和兴趣档案——共34道自适应题目。可分次完成，约35分钟。' },
              { step: '03', title: '获取准备情况报告', desc: '实习准备等级、AI生成的优势摘要，以及按能力、领域和工作技能分类的个性化洞察。' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#636366] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: '技术',     color: '#4F46E5' },
              { label: '商业',     color: '#0D9488' },
              { label: '数据分析', color: '#7C3AED' },
              { label: '数字营销', color: '#DB2777' },
            ].map(({ label, color }) => (
              <span key={label} className="text-xs font-semibold px-4 py-2 rounded-full border" style={{ color, background: color + '12', borderColor: color + '33' }}>
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a href="https://eduentry.ai/" className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              申请实习评估 →
            </a>
            <Link href="/zh/shixi" className="text-sm font-semibold text-[#4F46E5] hover:underline">
              了解更多 →
            </Link>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#1d1d1f] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-medium text-[#a1a1a7] uppercase tracking-[0.15em] text-center mb-14">您将获得什么</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8">
              <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-wider mb-5">学术评估</p>
              <ul className="space-y-3">
                {[
                  '85–130量表的标准化分数',
                  '按精确年龄的百分位排名',
                  '4个领域的科目分项成绩',
                  '国际基准对标——英国、美国、PISA、IB',
                  'AI生成的学习建议',
                  '可打印完整报告',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#a1a1a7]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#424245]">
                <CtaLink href="/zh/auth/register" label="what_you_get_academic_zh" className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                  免费开始 →
                </CtaLink>
              </div>
            </div>

            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8">
              <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider mb-5">实习评估</p>
              <ul className="space-y-3">
                {[
                  '准备等级——实习就绪 / 发展中 / 需要支持',
                  'AI生成的职业段落摘要',
                  '分步洞察——能力、领域、工作技能',
                  '4个职业方向的匹配度分析',
                  '个性化优势与成长空间',
                  '可用于大学申请的报告',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#636366]">
                    <svg className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 pt-6 border-t border-[#c7d2fe]">
                <a href="https://eduentry.ai/" className="bg-[#1d1d1f] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors inline-block">
                  申请评估 →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight">常见问题。</h2>
          </div>
          <div className="space-y-2">
            {FAQ_ZH.map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#636366] leading-relaxed border-t border-[#f5f5f7] pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#636366] mt-8">
            想了解评估方法论？{' '}
            <Link href="/zh/fangfalun" className="text-[#4F46E5] hover:underline font-medium">
              Eduentry如何工作 →
            </Link>
          </p>
        </div>
      </section>

      {/* Blog */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight">最新博客文章</h2>
            <Link href="/zh/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">所有文章 →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS_ZH.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/zh/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#636366]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1d1d1f] py-32 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#a1a1a7] font-semibold uppercase tracking-widest mb-4">学术评估</p>
            <h2 className="text-2xl font-bold text-white mb-3">了解孩子的全球学术位置。</h2>
            <p className="text-[#a1a1a7] text-sm mb-8">不到2小时获得完整国际参照结果。</p>
            <CtaLink href="/zh/auth/register" label="bottom_cta_academic_zh" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
              开始免费评估 →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">实习评估</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">了解学生的实习准备度。</h2>
            <p className="text-[#636366] text-sm mb-8">35分钟获取个性化报告和AI洞察。</p>
            <a href="https://eduentry.ai/" className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors">
              申请评估 →
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
