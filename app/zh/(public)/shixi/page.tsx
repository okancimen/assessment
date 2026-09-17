import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '免费实习准备度评估 — Eduentry',
  description:
    '免费34题自适应评估，面向14岁以上高中生。发现你的最佳赛道——技术、商业、数据分析或数字营销——35分钟获得个性化报告。',
  keywords: [
    '高中生实习',
    '实习准备评估',
    '如何找实习',
    '学生暑期实习',
    '职业测评高中生',
    '技术实习学生',
    '数字营销实习',
    '数据分析实习',
    '职场准备度测试',
    '实习申请指南',
  ],
  alternates: {
    canonical: `${BASE_URL}/zh/shixi`,
    languages: {
      zh: `${BASE_URL}/zh/shixi`,
      'en-GB': `${BASE_URL}/internship`,
      tr: `${BASE_URL}/tr/staj`,
      fr: `${BASE_URL}/fr/stage`,
      es: `${BASE_URL}/es/practicas`,
      ar: `${BASE_URL}/ar/tadrib`,
      'x-default': `${BASE_URL}/internship`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: '免费实习准备度评估 — Eduentry',
    description: '免费34题自适应评估，面向14岁以上高中生。35分钟获得个性化实习准备报告。',
    url: `${BASE_URL}/zh/shixi`,
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/zh/shixi/opengraph-image`, width: 1200, height: 630, alt: '实习准备度评估 — Eduentry' }],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/zh/shixi#service`,
  name: '实习准备度评估 — Eduentry',
  description: '免费34题自适应评估，面向14岁以上高中生。测量综合能力、专业知识、职场技能和兴趣画像。立即获得个性化报告。',
  url: `${BASE_URL}/zh/shixi`,
  provider: { '@id': `${BASE_URL}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'China' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  audience: { '@type': 'Audience', audienceType: '14岁以上高中生' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
    { '@type': 'ListItem', position: 2, name: '实习评估', item: `${BASE_URL}/zh/shixi` },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '评估真的免费吗？', acceptedAnswer: { '@type': 'Answer', text: '完全免费。没有订阅费、隐藏费用或付费等级。注册免费账户，立即开始。' } },
    { '@type': 'Question', name: '几岁可以参加实习？', acceptedAnswer: { '@type': 'Answer', text: '许多公司接受14至18岁的高中生实习，尤其是暑期项目。不同公司的最低年龄要求不同；创业公司和科技公司通常比大型企业更灵活。' } },
    { '@type': 'Question', name: '高中生如何找到实习机会？', acceptedAnswer: { '@type': 'Answer', text: '最有效的方式：(1) 直接发邮件给中小企业——简短、个性化的邮件往往能收到回复；(2) 通过学校的职业顾问；(3) 请求家长或亲戚介绍；(4) 参加行业活动和黑客马拉松；(5) 在LinkedIn上主动联系。' } },
    { '@type': 'Question', name: '我适合哪个赛道？', acceptedAnswer: { '@type': 'Answer', text: 'Eduentry评估帮助你在四个赛道中找到最适合的方向：技术、商业、数据分析和数字营销。评估测量你的能力、专业知识和职场技能，为你提供客观的方向指引。' } },
    { '@type': 'Question', name: '评估需要多长时间？', acceptedAnswer: { '@type': 'Answer', text: '评估包含34道自适应题目，分4个阶段，约需35分钟。可随时暂停和继续，无需重新开始。' } },
    { '@type': 'Question', name: '准备度报告包含哪些内容？', acceptedAnswer: { '@type': 'Answer', text: '个性化报告包括：准备度等级（实习就绪、发展中或需要支持）、AI生成的表现摘要，以及每个阶段的优势和提升空间分析。' } },
    { '@type': 'Question', name: '实习经历有助于大学申请吗？', acceptedAnswer: { '@type': 'Answer', text: '是的。有据可查的工作经验能显著增强大学申请材料，尤其是商科、理工科和传媒专业。它证明你的主动性和职业成熟度——这些是单纯的学业成绩无法体现的品质。' } },
    { '@type': 'Question', name: '什么时候申请暑期实习？', acceptedAnswer: { '@type': 'Answer', text: '大型企业通常在1月至3月开放申请，名额迅速告满。中小企业全年接受申请，集中在2月至5月。最好提前3至6个月申请。' } },
  ],
}

const TRACKS = [
  { key: 'tech', icon: '💻', label: '技术', desc: '软件开发、系统思维和技术问题解决。' },
  { key: 'business', icon: '📈', label: '商业', desc: '商业思维、战略规划和企业沟通。' },
  { key: 'data', icon: '📊', label: '数据分析', desc: '定量推理、数据解读和循证决策。' },
  { key: 'marketing', icon: '📣', label: '数字营销', desc: '受众分析、内容策略和数字渠道管理。' },
]

const PHASES = [
  { label: '综合能力', desc: '10题 · 语言推理与数量推理', icon: '🧠' },
  { label: '专业知识', desc: '10题 · 领域应用知识', icon: '📚' },
  { label: '职场技能', desc: '8题 · 真实职场情境判断', icon: '🤝' },
  { label: '兴趣画像', desc: '6题 · 工作风格与偏好图谱', icon: '🎯' },
]

const TYPES_SHIXI = [
  { icon: '☀️', title: '暑期实习', desc: '暑假期间的实习，通常2至8周。对高中生最为普遍。在选择大学专业前探索某个行业的绝佳方式。', link: '/zh/blog/gaozhong-shixi-ruhe-xunzhao' },
  { icon: '💻', title: '远程实习', desc: '在线完成的实习，无需到场。在技术、数字营销和数据领域非常普遍。可接触到城市或国家以外的公司。', link: '/zh/blog/yuancheng-zaixian-shixi-zhinan' },
  { icon: '🏢', title: '技术实习', desc: '科技公司和创业公司的实习。不一定需要编程能力——许多技术岗位不需要写代码。', link: '/zh/blog/IT-keji-shixi-gaoxiao' },
  { icon: '🏦', title: '金融实习', desc: '会计、财务分析和银行服务。中小企业和金融科技公司需求旺盛。进入高薪行业的入门途径。', link: '/zh/blog/jinrong-shixi-rumen' },
  { icon: '📱', title: '数字营销实习', desc: '社交媒体管理、内容创作和SEO。这是对数字原生代需求最大的领域之一。', link: '/zh/blog/shuzi-yingxiao-shixi-rumen' },
  { icon: '📊', title: '数据分析实习', desc: '数据收集、分析和可视化。不需要高级编程——Excel和Google表格就够了。', link: '/zh/blog/shuju-fenxi-shixi-gaoxiaosheng' },
]

const GUIDE_SLUGS = [
  'gaozhong-shixi-ruhe-xunzhao',
  'shixi-jianlixie-zhinan',
  'shixi-mianshi-zhunbei-jiqiao',
  'IT-keji-shixi-gaoxiao',
  'shuzi-yingxiao-shixi-rumen',
  'ruhe-zhai-15-sui-tuocying',
]
const ALL_GUIDE_SLUGS = [
  'gaozhong-shixi-ruhe-xunzhao',
  'shixi-jianlixie-zhinan',
  'shixi-mianshi-zhunbei-jiqiao',
  'IT-keji-shixi-gaoxiao',
  'shuzi-yingxiao-shixi-rumen',
  'ruhe-zai-15-sui-tuocying',
]
const GUIDES = BLOG_POSTS_ZH.filter(p => ALL_GUIDE_SLUGS.includes(p.slug))
  .sort((a, b) => ALL_GUIDE_SLUGS.indexOf(a.slug) - ALL_GUIDE_SLUGS.indexOf(b.slug))

export default function ZHShixiLandingPage() {
  return (
    <div className="bg-[#f5f5f7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            实习准备度评估平台
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            发现你的实习准备度
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            面向14岁以上高中生的34题自适应评估。约35分钟，获得个性化准备度报告，找到最适合你的赛道。
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/zh/auth/register"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              免费开始
            </Link>
            <Link href="/zh/auth/login" className="text-[#4F46E5] font-semibold text-base hover:underline">
              已有账户？登录
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: '16岁前有4次以上雇主接触经历的年轻人，19岁时失业风险降低5倍', source: 'Education and Employers, 2018' },
              { stat: '73%', desc: '的雇主认为过往工作经验是面试中最重要的标准', source: 'Prospects, 2022' },
              { stat: '70%', desc: '有实习经历的学生在毕业前获得工作邀约的可能性提高70%', source: 'NACE, 2020' },
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
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">评估赛道</h2>
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
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">为什么早期实习很重要？</h2>
          <p className="text-sm text-[#6e6e73] mb-5">来自纵向研究的证据，关于早期职业经历的影响。</p>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                顶尖大学——无论是在英国、美国还是中国——都高度重视招生档案中有据可查的工作经验。学业优秀同时具备实际工作经历的学生，能以单纯学业成绩无法企及的方式脱颖而出。
              </p>
              <Link href="/zh/blog/gaozhong-shixi-ruhe-xunzhao" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                阅读完整指南 →
              </Link>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">实习类型</h2>
          <p className="text-sm text-[#6e6e73] mb-5">从暑期实习到远程实习——每种类型各有特点。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TYPES_SHIXI.map((t) => (
              <div key={t.title} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 flex flex-col gap-3">
                <div className="text-2xl">{t.icon}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm">{t.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed flex-1">{t.desc}</p>
                {t.link && (
                  <Link href={t.link} className="text-xs font-semibold text-[#4F46E5] hover:underline">
                    了解更多 →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">评估如何进行？</h2>
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
                  第{i + 1}阶段
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">共34题 · 约35分钟 · 可随时暂停和继续</span>
            </div>
          </div>
        </section>

        {/* Guides */}
        {GUIDES.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">学生实习指南</h2>
            <p className="text-sm text-[#6e6e73] mb-5">从简历到面试，从暑期实习到数字营销——你需要知道的一切。</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GUIDES.map((post) => (
                <Link
                  key={post.slug}
                  href={`/zh/blog/${post.slug}`}
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
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">常见问题</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden divide-y divide-[#f5f5f7]">
            {[
              { q: '评估真的免费吗？', a: '完全免费。没有订阅费、隐藏费用或付费等级。注册免费账户，立即开始。' },
              { q: '几岁可以参加实习？', a: '许多公司接受14至18岁的高中生实习，尤其是暑期项目。不同公司的最低年龄要求不同；创业公司通常比大型企业更灵活。' },
              { q: '我适合哪个赛道？', a: '想想你喜欢解决什么类型的问题：技术和逻辑→技术；数字和决策→数据分析；沟通和创意→数字营销；组织和战略→商业。评估用客观数据帮你确认方向。' },
              { q: '高中生如何找到实习机会？', a: '最有效的方式：直接发邮件给中小企业、通过学校职业顾问、请求家人介绍，以及参加行业活动。' },
              { q: '评估需要多长时间？', a: '约35分钟完成34道4阶段题目。可随时暂停和继续，无需重新开始。' },
              { q: '准备度报告包含哪些内容？', a: '准备度等级（实习就绪、发展中或需要支持）、AI生成的表现摘要，以及每个阶段的优势和提升空间分析。' },
              { q: '实习经历有助于大学申请吗？', a: '是的。有据可查的工作经验能显著增强大学申请材料，尤其是商科、理工科和传媒专业。' },
              { q: '什么时候申请暑期实习？', a: '大型企业通常在1月至3月开放申请。中小企业全年接受申请，集中在2月至5月。最好提前3至6个月申请。' },
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
            <h2 className="text-2xl font-bold text-white mb-3">立即评估你的实习准备度</h2>
            <p className="text-indigo-200 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              34题 · 35分钟 · 即时个性化报告。完全免费。
            </p>
            <Link
              href="/zh/auth/register"
              className="inline-block bg-white text-[#4F46E5] font-semibold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors"
            >
              免费开始评估
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
