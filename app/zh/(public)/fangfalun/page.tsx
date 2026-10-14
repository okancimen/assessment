import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '评估方法论：IRT与VIA',
  description: '两参数IRT自适应学业测试与VIA品格优势框架性格评估——针对6–17岁儿童的两种独立方法论。',
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

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '什么是自适应测试？', acceptedAnswer: { '@type': 'Answer', text: '自适应测试是一种根据孩子之前的答题情况实时调整每道题目的技术。与传统的固定题目测试不同，该方法会根据每位学生的实际表现动态调整题目难度。' } },
    { '@type': 'Question', name: '什么是题目反应理论（IRT）？', acceptedAnswer: { '@type': 'Answer', text: '题目反应理论（IRT）是一种测量理论，它根据每道题目的统计特性（难度、区分度和猜测因子）进行建模。Eduentry的测评基于IRT，能够提供精准的能力估计，并与国际基准进行比较。' } },
    { '@type': 'Question', name: 'Eduentry的方法论是如何运作的？', acceptedAnswer: { '@type': 'Answer', text: '每当孩子回答一道题，系统会即时更新能力估计值，并据此调整下一道题的难度。这使得测评结果比标准测试更加精准，且所需题目数量大幅减少。' } },
    { '@type': 'Question', name: '测评结果是否与国际标准对标？', acceptedAnswer: { '@type': 'Answer', text: '是的。Eduentry的测评结果旨在与PISA、英国国家课程及IB等国际标准进行比较。系统提供标准化分数及全球百分位排名。' } },
    { '@type': 'Question', name: '什么是VIA品格优势框架？', acceptedAnswer: { '@type': 'Answer', text: 'VIA品格优势框架由积极心理学先驱马丁·塞利格曼博士和尼尔·梅耶森博士开发。该框架识别出24项普世性格特征，归纳于6大核心美德：智慧、勇气、人性、公正、节制与超越。已在不同文化中获得验证，被190多个国家的研究人员使用。' } },
    { '@type': 'Question', name: '为什么性格评估由家长而非孩子填写？', acceptedAnswer: { '@type': 'Answer', text: '儿童的自我认知——尤其是6至13岁——变化迅速且可能前后不一致。家长观察反映了每天陪伴孩子的人的客观视角，能产生更稳定、准确的性格档案。' } },
  ],
}

export default function FangfalunPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="zh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-8">
        <Link href="/zh" className="hover:text-[#1d1d1f]">首页</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">方法论</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-5 leading-tight tracking-tight">
          Eduentry如何工作
        </h1>
        <p className="text-xl text-[#636366] leading-relaxed max-w-2xl">
          Eduentry采用两种独立方法论：基于<strong className="text-[#1d1d1f]">题目反应理论</strong>的自适应评估测量学业能力；基于<strong className="text-[#1d1d1f]">VIA品格优势框架</strong>的家长观察问卷评估性格特征。两者各回答不同的问题。
        </p>
      </div>

      {/* Methodology switcher cards */}
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        <div className="rounded-2xl border-2 border-[#4F46E5] bg-[#eef2ff] p-6">
          <p className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider mb-2">方法论 1</p>
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">IRT学业评估</h2>
          <p className="text-sm text-[#636366] leading-relaxed">通过自适应题目与2PL IRT得出标准化学业分数——均值100、标准差15量表，附国际对标。</p>
        </div>
        <div className="rounded-2xl border-2 border-violet-300 bg-violet-50 p-6">
          <p className="text-xs font-bold text-violet-600 uppercase tracking-wider mb-2">方法论 2</p>
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-2">VIA品格优势评估</h2>
          <p className="text-sm text-[#636366] leading-relaxed">通过家长观察问卷对24项普世性格特征进行画像——输出优势排名而非单一分数。</p>
        </div>
      </div>

      <div className="space-y-16">

        {/* ── METHODOLOGY 1 ── */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider bg-[#eef2ff] border border-[#c7d2fe] rounded-full px-3 py-1">方法论 1 — IRT学业评估</span>
        </div>

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
          <p className="text-sm text-[#636366] mt-3">
            想看看这些分数在实际报告中如何呈现？{' '}
            <Link href="/zh/yangben-baogao" className="text-[#4F46E5] hover:underline font-medium">查看报告样本 →</Link>
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

        {/* 评估科目 */}
        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">评估科目</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: '英语', icon: '📚', detail: '阅读理解、语法、词汇、拼写及书面语言规范。' },
              { name: '数学', icon: '🔢', detail: '算术、代数、几何、统计及数学解题。' },
              { name: '语言推理', icon: '💬', detail: '词语类比、分类、逻辑系列及基于语言的问题解决。' },
              { name: '非语言推理', icon: '🔷', detail: '图形规律识别、空间推理、矩阵填充及视觉逻辑。' },
            ].map(({ name, icon, detail }) => (
              <div key={name} className="bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7] p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{icon}</span>
                  <h3 className="font-semibold text-[#1d1d1f]">{name}</h3>
                </div>
                <p className="text-sm text-[#636366] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── METHODOLOGY 2 ── */}
        <div className="flex items-center gap-3 pt-4">
          <span className="text-xs font-bold text-violet-600 uppercase tracking-wider bg-violet-50 border border-violet-200 rounded-full px-3 py-1">方法论 2 — VIA品格优势评估</span>
        </div>

        {/* 性格评估方法论 */}
        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">性格评估方法论</h2>
          <p className="text-[#636366] leading-relaxed mb-4">
            性格优势评估采用与IRT学业评估截然不同的方法。它不是测量知识和推理能力，而是通过<strong className="text-[#1d1d1f]">家长观察问卷</strong>来量化孩子的性格特征——由每天陪伴孩子的成年人填写。
          </p>

          <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 mt-6">VIA品格优势框架</h3>
          <p className="text-[#636366] leading-relaxed mb-4">
            评估基于VIA品格优势框架，由积极心理学先驱马丁·塞利格曼博士和尼尔·梅耶森博士开发。该框架识别出24项普世性格特征，归纳于6大核心美德：智慧、勇气、人性、公正、节制与超越。已在不同文化中获得验证，被190多个国家的研究人员使用。
          </p>

          <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 mt-6">家长评定问卷设计</h3>
          <p className="text-[#636366] leading-relaxed mb-4">
            家长完成一份简短的观察问卷，对每天在孩子身上看到的行为进行1至5星评分。孩子不直接参与。这一设计是有意为之：儿童的自我认知变化迅速，而家长的观察能提供更稳定、准确的基准——尤其适用于6至13岁儿童。
          </p>
          <p className="text-[#636366] leading-relaxed mb-4">
            问题根据孩子的发展阶段进行校准。四个年龄层次确保词汇量和评估特征与各阶段性格发展规律相匹配：
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {([
              { tier: '初级', age: '6–9岁', traits: '12项特征', questions: '24题', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { tier: '中级', age: '10–13岁', traits: '15项特征', questions: '30题', color: 'bg-green-50 border-green-200 text-green-700' },
              { tier: '青少年', age: '14–17岁', traits: '20项特征', questions: '40题', color: 'bg-purple-50 border-purple-200 text-purple-700' },
              { tier: '青年', age: '18–20岁', traits: '全部24项', questions: '48题', color: 'bg-orange-50 border-orange-200 text-orange-700' },
            ] as const).map((t) => (
              <div key={t.tier} className={`rounded-xl border p-3 text-center ${t.color}`}>
                <p className="font-bold text-sm mb-0.5">{t.tier}</p>
                <p className="text-xs opacity-80">{t.age}</p>
                <p className="text-xs mt-1">{t.traits}</p>
                <p className="text-xs">{t.questions}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 mt-6">报告产出内容</h3>
          <p className="text-[#636366] leading-relaxed mb-4">
            与学业评估不同，性格报告不产生单一标准化分数。它将特征相互排名并生成：
          </p>
          <ul className="space-y-3 mb-4">
            {([
              { title: '前5项标志性优势', desc: '孩子得分最高的特征，代表其天然的卓越领域。' },
              { title: '3个成长领域', desc: '最具发展潜力的特征，以建设性方式呈现，而非聚焦于不足。' },
              { title: 'AI生成练习计划', desc: '针对孩子独特优势档案量身定制的实用活动，可在家中进行。' },
            ] as const).map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#636366] text-sm"><strong className="text-[#1d1d1f]">{title}：</strong>{desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-[#636366]">
            想了解孩子的性格档案是什么样的？{' '}
            <Link href="/zh/xingge-pinggu" className="text-[#4F46E5] hover:underline font-medium">开始免费性格评估 →</Link>
          </p>
        </section>

        {/* 透明度 */}
        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">透明度</h2>
          <div className="space-y-4">
            <p className="text-[#636366] leading-relaxed">
              Eduentry提供强大的自适应评估方案，能精准反映每位学生的学业能力。
            </p>
            <p className="text-[#636366] leading-relaxed">
              传统评估通常受限于固定题目集，导致结果可能反映的是试卷难度而非学生的真实能力。Eduentry通过AI驱动的自适应引擎消除了这一局限——该引擎根据每位学生的作答持续调整题目难度。因此，结果反映的是学生的真实潜力，而非试卷结构。
            </p>
            <p className="text-[#636366] leading-relaxed">
              虽然Eduentry的方法论与CAT4、GL Assessment和WISC有所不同，但其结果为教育规划和决策提供了可靠且可操作的依据。当需要正式诊断性评估时，Eduentry能有效补充成熟的心理测量工具。
            </p>
          </div>
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
