import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/zh/auth/register`

export const metadata: Metadata = {
  title: '孩子的优势和劣势是什么？— 免费认知测评',
  description:
    '35分钟了解孩子的优势和劣势。按照PISA、SAT和GCSE标准进行免费自适应认知评估——即时AI报告，无隐藏费用。',
  keywords: [
    '孩子的优势和劣势是什么',
    '孩子的优势',
    '孩子的劣势',
    '儿童认知评估',
    '免费儿童测试',
    'PISA儿童评估',
    '儿童潜力测试',
    '免费认知能力测试',
    '儿童学业评估',
    '儿童语言推理测试',
    '自适应测试儿童',
    '免费儿童智商测试',
    '国际规范比较',
    '儿童成绩分析',
  ],
  alternates: {
    canonical: `${BASE_URL}/zh/haizi-de-qianli`,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/zh/haizi-de-qianli`,
    siteName: 'Eduentry',
    title: '孩子的优势和劣势是什么？— 免费认知测评',
    description: '35分钟了解孩子的优势和劣势。按照PISA、SAT和GCSE标准进行免费自适应认知评估。',
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/zh/opengraph-image`, width: 1200, height: 630, alt: '您孩子的认知评估 — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '孩子的优势和劣势是什么？— 免费认知测评',
    description: '35分钟了解孩子的优势和劣势。按照PISA、SAT和GCSE标准进行免费自适应认知评估。',
    images: [`${BASE_URL}/zh/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: '阅读与语言能力',
    desc: '阅读理解、语法和词汇量。分析文章并进行推断的能力。',
  },
  {
    icon: '📐',
    title: '数学与数字推理',
    desc: '算术、代数、几何和数据解释。与课程无关的数字推理能力。',
  },
  {
    icon: '🧠',
    title: '语言推理',
    desc: '类比、分类和语言逻辑。通过语言思考并建立联系的能力。',
  },
  {
    icon: '🔷',
    title: '非语言空间推理',
    desc: '模式识别、空间推理和抽象矩阵。对STEM领域最为关键的认知领域。',
  },
]

const SCIENCE_POINTS = [
  {
    title: '计算机自适应测试（CAT）',
    desc: '每道题根据前一个答案实时选择。答对→更难的题目，答错→重新校准。系统以25–35道题的高精度确定孩子的真实能力水平。',
  },
  {
    title: '双参数逻辑斯蒂IRT模型（2PL）',
    desc: '每道题使用双参数项目反应理论和费雪信息进行校准，产生具有已知置信区间的能力估计值（theta）。结果不是原始分数，而是统计上可靠的能力测量。',
  },
  {
    title: '全球标准量表',
    desc: '标准量表：均值=100，标准差=15。与PISA、GCSE、SAT和IB项目对齐的国际规范进行比较。',
  },
]

const FAQS = [
  {
    q: '孩子的学业优势和劣势是什么？',
    a: '您孩子的学业优势和劣势在三个独立的认知领域进行测量：语言推理（语言理解和类比）、数字推理（模式识别和数学逻辑）以及视觉空间思维（图形分析和三维关系）。免费自适应测试根据国际年龄规范为每个领域提供单独的百分位分数。',
  },
  {
    q: '学校成绩能反映孩子的真实潜力吗？',
    a: '不能。学校成绩衡量的是晶体智力——已学习和可再现的知识。然而，许多有潜力的孩子在流体智力方面表现出色，包括推理、模式识别和问题解决——这些是学校考试很少衡量的能力。',
  },
  {
    q: '评估是免费的吗？',
    a: '是的，完全免费。需要注册，但没有费用、订阅或隐藏费用。测试完成后，立即生成四个领域的认知档案报告。',
  },
  {
    q: '测试需要多长时间？',
    a: '约35分钟。与标准多选题测试相比，自适应格式以更少的题目实现更精确的测量。测试可以保存——孩子可以随时从上次离开的地方继续。',
  },
  {
    q: '适合哪个年龄段？',
    a: '适合6–17岁的儿童。系统自动为每个年龄段进行校准；问题会适应孩子的水平。',
  },
  {
    q: '报告告诉我什么？',
    a: '报告包括四个认知领域相对于国际年龄规范的百分位分数、最强的领域、优先发展领域以及AI为每个领域生成的家长见解。这是从学校选择到有针对性支持决策的具体指南。',
  },
  {
    q: '这个测试与学校考试有何不同？',
    a: '学校考试衡量特定课程的知识。这个测试衡量的是独立于课程知识的认知潜力——孩子如何思考。这允许公平地比较来自不同国家或不同学校体系的孩子。',
  },
  {
    q: '孩子的空间IQ高但成绩差——这正常吗？',
    a: '是的，这非常普遍。高空间智力通常被标准学业测试低估。根据OECD的数据，流体推理在前四分之一但学业成绩在后一半的学生占所有学生的12–18%——这是被教育系统长期低估的群体。',
  },
  {
    q: '我可以与学校分享结果吗？',
    a: '可以。来自标准化评估的报告能够改变家长会和辅导咨询的对话。"空间推理第97百分位"比模糊的"看起来聪明但散漫"要有力得多。',
  },
  {
    q: '测试能识别天赋或特殊才能吗？',
    a: '能。在所有三个领域均超过第90百分位的孩子显示出天才项目候选资格的强烈指标。测试还能发现分数模式中的不一致，针对阅读障碍、计算障碍或双重特殊性情况进行专家评估转介。',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/zh/haizi-de-qianli#webpage`,
  url: `${BASE_URL}/zh/haizi-de-qianli`,
  name: '孩子的优势和劣势是什么？— 免费认知测评',
  description: '35分钟了解孩子的优势和劣势。按照PISA、SAT和GCSE标准进行免费自适应认知评估。',
  inLanguage: 'zh',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/zh/haizi-de-qianli#service`,
  name: '儿童认知评估',
  description: '为6–17岁儿童提供的免费自适应认知评估。根据PISA、SAT和GCSE标准比较语言、数字和空间推理能力。',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/zh/haizi-de-qianli`,
  inLanguage: 'zh',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
    { '@type': 'ListItem', position: 2, name: '孩子的潜力', item: `${BASE_URL}/zh/haizi-de-qianli` },
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

const RELATED_POSTS = [
  { href: '/zh/blog/mianfei-xueshu-ceshi-haizi-youshi-ruodian', tag: '评估', title: '免费学术测试：35分钟发现孩子的优势和劣势' },
  { href: '/zh/blog/congming-haizi-chengji-cha', tag: '指南', title: '聪明孩子成绩差：家长指南' },
  { href: '/zh/blog/faxian-xueling-haizi-yincang-qianli-jiachang-zhinan', tag: '指南', title: '发现孩子的隐藏潜力：现代家长指南' },
]

export default function HaiziDeQianliPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="opacity-60">由</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60">（新加坡）提供支持</span>
      </div>

      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">免费认知评估</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            发现孩子真正的<br />
            <span className="text-indigo-600">认知优势与劣势</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            按照国际 <strong>PISA、SAT和GCSE</strong> 标准，35分钟比较认知能力和学业准备情况。揭示成绩单看不到的真实潜力。
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            免费评估认知潜力
          </Link>

          <p className="mt-4 text-xs text-gray-500">
            免费国际比较 &nbsp;•&nbsp; 100%保密 &nbsp;•&nbsp; 即时AI认知档案PDF报告
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: '标准IRT模型' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: '新加坡注册实体' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: '自适应测试引擎' },
            { icon: '🔒', label: '符合GDPR', sub: '学生数据隐私保护' },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-1 p-3">
              <span className="text-2xl">{b.icon}</span>
              <span className="text-xs font-semibold text-gray-900">{b.label}</span>
              <span className="text-[11px] text-gray-500">{b.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">孩子的优势和劣势是什么？</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>您孩子的学业优势和劣势在三个独立的认知领域进行测量：</strong>语言推理（语言理解和类比）、数字推理（模式识别和数学逻辑）以及视觉空间思维（图形分析和三维关系）。免费自适应测试根据国际年龄规范为每个领域提供单独的百分位分数——清楚地显示孩子真正擅长的地方，以及有针对性的支持能产生最大影响的地方。
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            学校成绩无法回答这个问题——它们衡量的是特定学校特定老师所教的特定课程知识，而不是按国际标准衡量的认知潜力。根据OECD的数据，流体推理在前四分之一但学业成绩在后一半的学生占所有学生的 <strong>12–18%</strong>——这是被教育系统长期低估的群体。
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            开始免费评估 →
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">我们评估什么？</h2>
            <p className="text-gray-500 text-base">四个独立认知领域——每个领域都有单独的国际百分位分数。</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {DOMAINS.map((d) => (
              <div key={d.title} className="border border-gray-100 bg-white rounded-2xl p-6 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Eduentry的科学基础</h2>
            <p className="text-gray-500 text-base">为什么与普通测试和问卷不同？</p>
          </div>
          <div className="flex flex-col gap-6">
            {SCIENCE_POINTS.map((s) => (
              <div key={s.title} className="bg-[#f9f8ff] rounded-2xl border border-indigo-50 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8 leading-relaxed">
            同样的测试架构被用于标准评估，如 <strong>NWEA MAP</strong> 和 <strong>CAT4</strong>，在全球已有超过1000万名学生使用。约翰·哈蒂涵盖900多项研究的元分析将诊断性评估的效应量确定为0.67——是教育中效果最显著的干预措施之一。
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">示例报告：全球能力档案</h2>
          <p className="text-gray-500 text-base mb-10">测试完成后，家长会收到一份详细报告，显示四个领域的百分位排名以及优势和发展领域。</p>

          <Link href="/sample-report" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">全球能力档案</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · 认知评估报告</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: '阅读与语言能力', score: '87', pct: '第82百分位' },
                    { label: '数学与数字推理', score: '94', pct: '第91百分位' },
                    { label: '语言推理', score: '79', pct: '第74百分位' },
                    { label: '空间推理', score: '112', pct: '第97百分位' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-left shadow-sm">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 最强领域：空间推理</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">您的孩子在模式识别和空间推理方面的表现远超国际年龄规范。这一领域与STEM、工程和设计有很强的相关性。</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline">查看完整示例报告 →</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              免费评估认知潜力
            </Link>
            <p className="mt-3 text-xs text-gray-500">免费国际比较 &nbsp;•&nbsp; 100%保密 &nbsp;•&nbsp; 即时AI认知档案PDF报告</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">常见问题</h2>
          <div className="flex flex-col divide-y divide-gray-100">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{q}</span>
                  <span className="text-indigo-400 text-lg leading-none mt-0.5 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">相关指南</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0a0a0a] text-white py-6 px-6 text-center">
        <p className="text-xs text-white/50 mb-1">Magenta Networks Pte Ltd (Singapore)</p>
        <Link href={REGISTER_URL} className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors">
          开始免费评估 →
        </Link>
      </div>
    </>
  )
}
