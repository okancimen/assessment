import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/zh`

export const metadata: Metadata = {
  title: '实习准备评估 — 免费AI报告 | Eduentry.ai',
  description:
    '面向14至18岁高中生的免费AI自适应评估，共34道题，涵盖科技、商业、数据与营销四大方向，即时生成个性化报告。',
  keywords: [
    '高中生实习评估',
    '实习准备免费AI报告',
    '科技实习高中生',
    '商业实习14岁15岁16岁',
    '数据分析实习高中',
    '数字营销实习',
    '自适应职业评估',
    '高中生职业能力测试',
    '实习求职个性化报告',
    '高中实习经验',
    '暑期实习高中生',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: { zh: PAGE_URL, 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'zh_CN',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'fr_FR', 'ar_AE'],
    title: '实习准备评估 — 免费AI报告 | Eduentry.ai',
    description: '面向14至18岁高中生的免费AI评估，34道自适应题目，4个专业方向，即时生成个性化报告。',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — 实习准备评估' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '实习准备评估 — 免费AI报告 | Eduentry.ai',
    description: '面向14至18岁高中生的免费AI评估，34道题，即时生成个性化报告。',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_IMAGES: Record<string, string> = {
  tech: '/tracks/tech.jpg',
  business: '/tracks/business.jpg',
  data_analytics: '/tracks/data-analytics.jpg',
  digital_marketing: '/tracks/digital-marketing.jpg',
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/tech',
  business: '/business',
  data_analytics: '/data-analytics',
  digital_marketing: '/digital-marketing',
}

const TRACK_LABELS_ZH: Record<string, string> = {
  tech: '科技',
  business: '商业',
  data_analytics: '数据分析',
  digital_marketing: '数字营销',
}

const TRACK_DESCRIPTIONS_ZH: Record<string, string> = {
  tech: '编程逻辑、算法、网络安全、UX设计与软件开发',
  business: '市场分析、财务素养、商业案例与企业战略',
  data_analytics: '图表解读、统计学、数据推理、SQL基础与数据解释',
  digital_marketing: 'SEO、社交媒体策略、内容营销与广告活动规划',
}

const PHASES = [
  { label: '综合能力',     qs: 10, desc: '语言推理与数字推理',               img: '/phases/general-aptitude.jpg' },
  { label: '专业知识',     qs: 10, desc: '特定领域的应用知识',               img: '/phases/domain-knowledge.jpg' },
  { label: '职场技能',     qs: 8,  desc: '真实工作场景情境判断（SJT）',      img: '/phases/workplace-skills.jpg' },
  { label: '兴趣画像',     qs: 6,  desc: '工作风格与偏好匹配',               img: '/phases/interest-profile.jpg' },
]

const FAQS = [
  { q: '评估是免费的吗？',           a: '是的——对学生永久免费。没有隐藏费用、订阅或付费层级。' },
  { q: '适合哪些人？',               a: '适合14至18岁（高一至高三）希望通过实习获得职业经验的高中生。' },
  { q: '需要多长时间？',             a: '34道题分四个阶段，约35分钟。评估完全可恢复——你可以随时暂停并在方便时继续。' },
  { q: '应该选哪个方向？',           a: '申请时，你最多可以按优先级排列三个方向偏好。兴趣画像阶段也会帮助识别你最适合的方向——报告中会体现出来。' },
  { q: '何时能收到报告？',           a: '完成后立即获得。一旦完成34道题，AI即刻计算分数，报告在你的账户中立即可查——无需等待。' },
  { q: '可以在简历中提到这份评估吗？', a: '可以。你的准备报告包含可量化的分数和按方向细分的技能概览，可以直接在求职申请中提及。许多学生将其写入求职信和面试材料。' },
  { q: '必须在英国才能参加吗？',      a: '评估对所有14至18岁的学生开放。实习目前在英国进行，因此实际参与需要能够在英国工作——但评估和报告向所有人开放。' },
]

const internshipPosts = BLOG_POSTS_ZH.slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  url: BASE_URL,
  foundingDate: '2026',
  sameAs: ['https://eduentry.com'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'zh',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}/#webpage`,
  url: PAGE_URL,
  name: '实习准备评估 — 免费AI报告 | Eduentry.ai',
  description: '面向14至18岁高中生的免费AI评估，34道自适应题目，4个专业方向，即时生成个性化报告。',
  inLanguage: 'zh',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: '实习准备评估',
  url: PAGE_URL,
  description: '面向14至18岁高中生的34道题免费AI自适应评估。评估综合能力、专业知识、职场技能和兴趣画像，涵盖科技、商业、数据分析和数字营销四大方向。',
  inLanguage: 'zh',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: '14至18岁高中生' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: '教育评估',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何通过Eduentry.ai获得实习机会',
  description: '面向14至18岁高中生的34道题免费自适应评估。从注册到实习分配，共四步。',
  inLanguage: 'zh',
  totalTime: 'PT35M',
  step: [
    { '@type': 'HowToStep', position: 1, name: '创建账户', text: '不到一分钟即可免费创建Eduentry.ai账户——无需填写付款信息。' },
    { '@type': 'HowToStep', position: 2, name: '提交申请', text: '告诉我们你是谁、你就读的学校，以及你对科技、商业、数据分析或数字营销的偏好方向。' },
    { '@type': 'HowToStep', position: 3, name: '完成评估', text: '34道自适应题目分四个阶段：综合能力、专业知识、职场技能和兴趣画像。约35分钟，随时可恢复。' },
    { '@type': 'HowToStep', position: 4, name: '获取报告', text: '获得AI生成的个性化准备报告，包含你的准备度评级、各阶段详情和实习匹配结果。' },
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

export default function ChineseHomePage() {
  return (
    <main className="flex-1" lang="zh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            AI驱动 · 完全免费 · 35分钟
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            获得真实<br />实习机会。
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            专为14岁以上高中生设计的34道自适应题目评估。探索你在四大职业方向的准备度，即时获得AI个性化报告。
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              免费申请 →
            </Link>
          </div>
          <p className="text-xs text-[#6e6e73] mt-6">学生完全免费 · 无需信用卡 · 35分钟获得结果</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">可选方向</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8 leading-tight">
            四大方向。<br />一次评估。
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {INTERNSHIP_TRACKS.map((track, i) => (
              <Link
                key={track}
                href={TRACK_SLUGS[track]}
                className="group bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
              >
                <div className="flex justify-center pt-6 pb-2">
                  <div className="relative w-24 h-24">
                    <Image
                      src={TRACK_IMAGES[track]}
                      alt={TRACK_LABELS_ZH[track]}
                      fill
                      className="object-contain"
                      sizes="96px"
                      priority={i < 2}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1d1d1f] text-base mb-1.5 group-hover:text-[#4F46E5] transition-colors">{TRACK_LABELS_ZH[track]}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{TRACK_DESCRIPTIONS_ZH[track]}</p>
                  <span className="text-xs font-semibold text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">了解更多 →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">流程</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            三步获得实习。
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: '01', title: '注册并申请',   desc: '免费创建账户，告诉我们你的基本信息、学校和方向偏好。' },
              { n: '02', title: '完成评估',     desc: '34道自适应题目，分四个阶段。随时暂停恢复。' },
              { n: '03', title: '获取报告',     desc: '获得AI个性化准备报告和实习匹配结果。' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">评估内容</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            评估的具体内容。
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image src={phase.img} alt={phase.label} width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">道题</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">共34道题 · 约35分钟 · 可在多次会话中恢复</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">你将获得</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            报告包含什么。
          </h2>
          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            <ul className="space-y-4">
              {[
                '准备度评级——实习就绪、发展中或需要支持',
                'AI生成的个性化总结段落',
                '每个阶段的洞察卡，包含优势和待提升方向',
                '按方向的适配度画像，展示你得分最高的领域',
                '可分享的报告链接，用于实习申请和求职信',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                  <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">数据说话</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
            为什么早开始很重要。
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×',  desc: '16岁前有4次以上雇主接触经验的学生，19岁时陷入待业或未升学状态的可能性降低5倍', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: '83%的雇主在招聘应届毕业生时认为实习经验非常重要', source: 'NACE, 2023' },
              { stat: '70%', desc: '有实习经验的学生在毕业前收到工作邀约的比例高出70%', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">研究与指南</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">
              最新博客文章。
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/zh/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/zh/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                查看所有实习文章 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-8">常见问题。</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            立即申请。<br />完全免费。
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34道题。35分钟。AI个性化报告，迈出获得真实实习的第一步。
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            开始申请 →
          </Link>
        </div>
      </section>
    </main>
  )
}
