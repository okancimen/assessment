import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/zh/auth/register`

export const metadata: Metadata = {
  title: '儿童性格评估 | VIA性格优势测试 — Eduentry',
  description:
    '通过我们由人工智能驱动的科学性格评估，发现您孩子独特的性格优势。适用年龄6–20岁。免费家长评分问卷。即时个性化成长报告。',
  keywords: [
    '儿童性格评估',
    'VIA性格优势测试',
    '儿童优势与劣势',
    '免费儿童性格测试',
    '儿童VIA性格优势',
    '在线儿童性格评估',
    '家长育儿性格工具',
    '儿童积极心理学测试',
    '儿童发展评估',
    '人工智能儿童性格报告',
  ],
  alternates: {
    canonical: `${BASE_URL}/zh/xingge-pinggu`,
    languages: {
      'en-GB': `${BASE_URL}/personality-assessment`,
      fr: `${BASE_URL}/fr/evaluation-de-personnalite`,
      es: `${BASE_URL}/es/evaluacion-de-personalidad`,
      ar: `${BASE_URL}/ar/taqyim-al-shakhsiya`,
      tr: `${BASE_URL}/tr/kisilik-degerlendirmesi`,
      ru: `${BASE_URL}/ru/otsenka-lichnosti`,
      zh: `${BASE_URL}/zh/xingge-pinggu`,
      'x-default': `${BASE_URL}/personality-assessment`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/zh/xingge-pinggu`,
    siteName: 'Eduentry',
    title: '儿童性格评估 | VIA性格优势测试 — Eduentry',
    description: '通过我们的人工智能性格评估，发现您孩子独特的性格优势。适用年龄6–20岁。',
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: '儿童性格评估 — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '儿童性格评估 | VIA性格优势测试 — Eduentry',
    description: '通过我们的人工智能性格评估，发现您孩子独特的性格优势。适用年龄6–20岁。',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const FAQS = [
  {
    q: '为什么这是由家长评分的测试，而不是孩子自己完成的测试？',
    a: '孩子的自我认知变化迅速，年幼的孩子很容易分心或误解问卷格式。作为家长，您对他们日常真实行为的观察为评估提供了最稳定、最准确的基准。',
  },
  {
    q: '如果我的孩子恰好处于年龄段的边界怎么办？',
    a: '我们的系统通过出生日期精确计算年龄到具体日期。问题针对该精确发育阶段进行了数学优化。请信任系统分配的年龄段！',
  },
  {
    q: '我应该多久为我的孩子重新进行一次评估？',
    a: '我们建议每6至12个月重新进行一次测试，或在孩子过渡到新的年龄段时进行。这让您能够追踪他们的性格优势如何随时间成长和演变。',
  },
]

const VIRTUES = [
  {
    label: '智慧',
    badge: 'bg-blue-100 text-blue-800',
    border: 'border-blue-200',
    traits: ['好奇心', '创造力', '热爱学习', '洞察力', '判断力'],
  },
  {
    label: '勇气',
    badge: 'bg-orange-100 text-orange-800',
    border: 'border-orange-200',
    traits: ['勇敢', '坚持不懈', '诚实', '活力'],
  },
  {
    label: '人道',
    badge: 'bg-pink-100 text-pink-800',
    border: 'border-pink-200',
    traits: ['爱', '仁慈', '社交智慧'],
  },
  {
    label: '公正',
    badge: 'bg-teal-100 text-teal-800',
    border: 'border-teal-200',
    traits: ['团队合作', '公平', '领导力'],
  },
  {
    label: '节制',
    badge: 'bg-purple-100 text-purple-800',
    border: 'border-purple-200',
    traits: ['宽恕', '谦逊', '谨慎', '自律'],
  },
  {
    label: '超越',
    badge: 'bg-amber-100 text-amber-800',
    border: 'border-amber-200',
    traits: ['欣赏美', '感恩', '希望', '幽默', '灵性'],
  },
]

const TIERS = [
  { label: '初级', age: '6–9岁', traits: '12个基础特质', questions: '24个问题', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { label: '中级', age: '10–13岁', traits: '15个特质', questions: '30个问题', color: 'bg-green-50 border-green-200 text-green-700' },
  { label: '青少年', age: '14–17岁', traits: '20个特质', questions: '40个问题', color: 'bg-purple-50 border-purple-200 text-purple-700' },
  { label: '青年成人', age: '18–20岁', traits: '全部24个特质', questions: '48个问题', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function XinggePingguPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">VIA性格优势 · 适用年龄6–20</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] leading-tight mb-4">
            发现您孩子独特的<br />
            <span className="text-[#4F46E5]">优势与成长领域</span>
          </h1>
          <p className="text-lg text-[#6e6e73] mb-8 leading-relaxed">
            一项由人工智能驱动的科学性格评估，完美适配您孩子的发育阶段。
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            开始免费评估
          </Link>
          <p className="mt-4 text-sm text-[#6e6e73]">
            已有账户？{' '}
            <Link href="/zh/auth/login" className="text-[#4F46E5] hover:underline font-medium">登录</Link>
          </p>
        </div>
      </section>

      {/* Why Character Matters */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">为什么性格比成绩更重要</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed">
            作为父母，我们往往完全专注于学校成绩或成绩单。但学业分数只讲述了故事的一部分。真正的成功和韧性来自孩子的性格、情感习惯和个性优势。我们的评估帮助您超越成绩来看待孩子正在成为的人——突显他们天生擅长的领域（&ldquo;标志性优势&rdquo;），并精确指出需要额外指导的地方（&ldquo;成长领域&rdquo;）。
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">如何运作</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: '智能年龄分组 🗓️',
                desc: '注册时只需输入孩子的出生日期。我们的系统自动计算他们的发育阶段，并将其分配到正确的评估层级。',
              },
              {
                step: '2',
                title: '5分钟家长问卷 ⭐',
                desc: '您将回答一系列简短的观察性问题，对您每天看到的行为进行1至5星评分。无需猜测，无需让孩子承受压力测试。',
              },
              {
                step: '3',
                title: 'AI驱动的成长报告 🤖',
                desc: '我们先进的人工智能根据全球公认的心理学模型分析您的输入，生成一份定制的、深度个性化的路线图，充满可操作的育儿练习。',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm mb-4">{s.step}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{s.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-6">建立在积极心理学的黄金标准之上</h2>
          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            我们的平台采用由先驱心理学家马丁·塞利格曼博士和尼尔·迈尔森博士开发的全球知名VIA性格优势框架。该模型被190多个国家的研究人员和教育工作者使用，识别24种普遍特质，分为6大核心美德：智慧、勇气、人道、公正、节制和超越。
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            {VIRTUES.map((v) => (
              <div key={v.label} className={`rounded-2xl border ${v.border} bg-white p-5`}>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${v.badge}`}>
                  {v.label}
                </span>
                <ul className="space-y-1.5">
                  {v.traits.map((trait) => (
                    <li key={trait} className="flex items-center gap-2 text-sm text-[#3d3d3f]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d2d2d7] shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Tiers */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">精准校准儿童成长的每个阶段</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <div key={t.label} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-3 ${t.color}`}>{t.age}</span>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{t.label}</h3>
                <p className="text-sm text-[#6e6e73]">{t.traits}</p>
                <p className="text-sm text-[#6e6e73]">{t.questions}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Get */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-10 text-center">您将获得什么</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: '前5大标志性优势', desc: '您的孩子天生闪耀的领域。' },
              { icon: '🌱', title: '后3大成长支柱', desc: '对他们盲点或当前弱点的温和洞察。' },
              { icon: '🤖', title: '可操作的AI工具包', desc: '您可以在家中练习的量身定制、真实世界练习，帮助他们茁壮成长。' },
            ].map((item) => (
              <div key={item.title} className="bg-[#f5f5f7] rounded-3xl border border-[#d2d2d7] p-6 sm:p-8">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5f5f7]">
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

      {/* CTA Strip */}
      <section className="py-16 px-6 bg-[#4F46E5] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">准备好发现您的孩子真正是谁了吗？</h2>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-white text-[#4F46E5] hover:bg-indigo-50 font-bold text-base px-8 py-4 rounded-xl transition-colors"
          >
            开始免费评估
          </Link>
        </div>
      </section>
    </>
  )
}
