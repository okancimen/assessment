import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '评估方法论 — Eduentry如何工作',
  description: 'Eduentry使用与PISA、GCSE和SAT相同的两参数IRT自适应测试模型。了解自适应评估如何工作，以及标准化分数意味着什么。',
  keywords: ['自适应测试方法论', 'IRT项目反应理论', 'PISA评估标准', '标准化分数量表', '2PL模型儿童评估'],
  alternates: {
    canonical: `${BASE_URL}/zh/fangfalun`,
    languages: {
      zh: `${BASE_URL}/zh/fangfalun`,
      tr: `${BASE_URL}/tr/metodoloji`,
      es: `${BASE_URL}/es/metodologia`,
      'en-GB': `${BASE_URL}/methodology`,
      fr: `${BASE_URL}/fr/methodologie`,
      ru: `${BASE_URL}/ru/metodologiya`,
      'x-default': `${BASE_URL}/methodology`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: '评估方法论 — Eduentry如何工作',
    description: '与PISA、GCSE和SAT相同的心理测量科学——两参数IRT自适应评估。',
    url: `${BASE_URL}/zh/fangfalun`,
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/zh/fangfalun/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry评估方法论' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '评估方法论 — Eduentry如何工作',
    description: '与PISA、GCSE和SAT相同的心理测量科学——两参数IRT自适应评估。',
    images: [`${BASE_URL}/zh/fangfalun/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
    { '@type': 'ListItem', position: 2, name: '方法论', item: `${BASE_URL}/zh/fangfalun` },
  ],
}

export default function FangfalunPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="zh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-8">
        <Link href="/zh" className="hover:text-[#1d1d1f]">首页</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">方法论</span>
      </nav>

      <div className="mb-14">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-5 leading-tight tracking-tight">
          Eduentry如何工作
        </h1>
        <p className="text-xl text-[#636366] leading-relaxed max-w-2xl">
          与PISA、GCSE和SAT使用相同科学体系的自适应评估——确保结果直接可与国际标准对标。
        </p>
      </div>

      <div className="space-y-16">

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">自适应测试：核心原理</h2>
          <p className="text-[#636366] leading-relaxed mb-4">
            传统测试对所有学生使用相同的题目。自适应测试会根据每位学生的表现实时调整题目选择——答对则下一题更难，答错则下一题更容易。
          </p>
          <p className="text-[#636366] leading-relaxed">
            这使评估更高效（相同精度所需题目更少）也更准确（通过消除地板效应和天花板效应），同时对学生更公平（因为他们始终面对匹配其实际水平的题目）。
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">两参数逻辑模型（2PL IRT）</h2>
          <p className="text-[#636366] leading-relaxed mb-4">
            Eduentry使用两参数逻辑模型（2PL），这是项目反应理论（IRT）的一种形式——与PISA、GCSE和SAT使用的模型相同。
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { title: '难度参数（b）', desc: '反映题目难易程度的校准值。难度高的题目可以更好地区分高能力学生；难度低的题目对评估低能力学生更有价值。' },
              { title: '区分度参数（a）', desc: '反映题目在区分不同能力水平学生方面有效性的校准值。区分度高的题目能精确指出学生能力的分界点。' },
              { title: 'Fisher信息量', desc: '系统使用Fisher信息量选择下一道题——即在当前能力估计附近提供最大信息量的题目，从而使每次作答都最大化测量精度。' },
              { title: '能力估计更新', desc: '每次作答后，系统更新学生的能力（θ）估计。评估越深入，估计越精确——这就是为什么完成更多题目能得到更可靠的分数。' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-[#f5f5f7] rounded-3xl p-6 border border-[#d2d2d7]">
                <h3 className="font-bold text-[#1d1d1f] mb-2 text-sm">{title}</h3>
                <p className="text-xs text-[#636366] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">标准化量表</h2>
          <p className="text-[#636366] leading-relaxed mb-6">
            Eduentry使用均值100、标准差15的标准化量表——与PISA相同的量表。这意味着：
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
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
          <p className="text-sm text-[#636366]">
            68%的学生分数在85至115之间。这一量表直接可与PISA分数、英国CAT4和大多数专业认知评估进行比较。
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">国际基准对标</h2>
          <p className="text-[#636366] leading-relaxed mb-4">
            Eduentry分数对标四个主要国际框架：
          </p>
          <ul className="space-y-3">
            {[
              { framework: '英国国家课程', desc: '分数对应关键阶段2、3和4的预期年级水平。' },
              { framework: 'PISA能力等级', desc: '分数对应PISA六级能力框架，直接可与OECD基准对标。' },
              { framework: '美国年级水平', desc: '分数对应美国常见核心标准和年级水平预期。' },
              { framework: 'IB课程', desc: '分数对应国际文凭课程的知识和技能预期。' },
            ].map(({ framework, desc }) => (
              <li key={framework} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#636366] text-sm"><strong className="text-[#1d1d1f]">{framework}：</strong>{desc}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      <div className="mt-20 border-t border-[#d2d2d7] pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-[#1d1d1f] mb-1">准备开始评估了吗？</p>
          <p className="text-sm text-[#636366]">免费 · 60分钟 · 国际对标</p>
        </div>
        <Link href="/zh/auth/register" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors shrink-0">
          开始免费评估 →
        </Link>
      </div>
    </main>
  )
}
