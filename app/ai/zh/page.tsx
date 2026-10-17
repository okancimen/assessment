import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS } from '@/types'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/zh`

export const metadata: Metadata = {
  title: { absolute: '实习准备评估 — 免费AI报告 | Eduentry.ai' },
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
    languages: { 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar`, ru: `${BASE_URL}/ru`, zh: PAGE_URL, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'zh_CN',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'fr_FR', 'ar_AE', 'ru_RU'],
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

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/zh/keji',
  business: '/zh/shangye',
  data_analytics: '/zh/shuju',
  digital_marketing: '/zh/yingxiao',
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
  { n: '01', label: '综合能力', qs: 10, desc: '语言推理与数字推理',           tag: '认知' },
  { n: '02', label: '专业知识', qs: 10, desc: '特定领域的应用知识',           tag: '技术' },
  { n: '03', label: '职场技能', qs: 8,  desc: '真实工作场景情境判断（SJT）', tag: '行为' },
  { n: '04', label: '兴趣画像', qs: 6,  desc: '工作风格与偏好匹配',          tag: '个性' },
]

const FAQS = [
  { q: '评估是免费的吗？',           a: '是的——对学生永久免费。没有隐藏费用、订阅或付费层级。' },
  { q: '适合哪些人？',               a: '适合14至18岁（高一至高三）希望通过实习获得职业经验的高中生。' },
  { q: '需要多长时间？',             a: '34道题分四个阶段，约20分钟。评估完全可恢复——你可以随时暂停并在方便时继续。' },
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
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何通过Eduentry.ai获得实习机会',
  description: '面向14至18岁高中生的34道题免费自适应评估。从注册到实习分配，共四步。',
  inLanguage: 'zh',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: '创建账户', text: '不到一分钟即可免费创建Eduentry.ai账户——无需填写付款信息。' },
    { '@type': 'HowToStep', position: 2, name: '提交申请', text: '告诉我们你是谁、你就读的学校，以及你对科技、商业、数据分析或数字营销的偏好方向。' },
    { '@type': 'HowToStep', position: 3, name: '完成评估', text: '34道自适应题目分四个阶段：综合能力、专业知识、职场技能和兴趣画像。约20分钟，随时可恢复。' },
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
    <main className="flex-1 bg-[#050505] text-white" lang="zh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-0 sm:blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              个性化 · 完全免费 · 20分钟
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">获得真实的</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">职场经验。</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            专为14岁以上高中生设计的34道自适应评估。发现你在四大职业方向的准备度，获得个性化报告。
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              免费申请 →
            </Link>
            <a
              href="https://eduentry.com/sample-report"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              查看示例报告
            </a>
          </div>

          <div className="max-w-md mx-auto text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
                <div className="text-white/30">
                  <span className="text-[#818CF8]">❯</span>
                  {' '}eduentry assess --track tech --age 16
                </div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">General Aptitude</span>
                    <span className="text-[#4ade80]">87 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Domain Knowledge</span>
                    <span className="text-[#4ade80]">74 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Workplace Skills</span>
                    <span className="text-[#4ade80]">91 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Interest Profile</span>
                    <span className="text-[#4ade80]">88 / 100</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">示例结果 — 你的结果将是个性化的</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 可选方向</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              四条赛道。<br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">一次评估。</span>
            </h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              比较所有方向 →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link
                  key={track}
                  href={TRACK_SLUGS[track]}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{TRACK_LABELS_ZH[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{TRACK_DESCRIPTIONS_ZH[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>
                      探索 →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 流程</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
            三步完成申请。
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: '注册并申请', desc: '创建免费账户。告诉我们你的情况、学校和方向偏好。' },
              { n: '02', title: '完成评估',   desc: '34道自适应题分四个阶段。随时可暂停恢复——没有时间压力。' },
              { n: '03', title: '获取报告',   desc: 'AI撰写的准备报告，含评分、洞察和实习匹配结果。' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 评估结构</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            考什么。
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0">{phase.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{phase.label}</h3>
                    <span className="font-mono text-[10px] border border-white/[0.08] text-white/30 px-2 py-0.5 rounded-full">{phase.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">道题</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">共34道题 · 约20分钟 · 随时可恢复</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 报告内容</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                你的报告。<br />
                <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">即刻生成。</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                完成最后一道题的瞬间，AI评分立即运行。无需等待，无需邮件。完整报告在几秒内出现在你的账户中。
              </p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                开始评估
                <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { icon: '◆', text: '准备度评级 — 实习就绪、成长中或需要支持' },
                { icon: '◆', text: 'AI撰写的个性化总结段落' },
                { icon: '◆', text: '每阶段洞察卡片，展示优势与成长空间' },
                { icon: '◆', text: '方向适配分析，显示你在哪个领域得分最高' },
                { icon: '◆', text: '可分享的报告链接，用于申请材料和求职信' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 数据支持</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            为什么早起步很重要。
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×',  desc: '在16岁前有4次以上雇主接触经历的学生，19岁时成为NEET的可能性低5倍', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: '的雇主表示实习经验在招聘应届毕业生时很重要', source: 'NACE, 2023' },
              { stat: '70%', desc: '有实习经验的学生在毕业前获得工作邀约的比率更高', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 研究</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">博客最新内容。</h2>
              <Link href="https://eduentry.com/zh/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">
                查看全部 →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/zh/blog/${post.slug}`}
                  className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('zh-CN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// 常见问题</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">问答。</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            学生免费 · 无需信用卡
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            立即申请。<br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">完全免费。</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            34道题。20分钟。个性化AI报告，迈向真实职场经验的第一步。
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            开始申请
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
