import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '关于我们 — 免费儿童学术评估平台',
  description: 'Eduentry是面向6–17岁学生的免费自适应评估平台。标准化分数与英国国家课程、PISA和IB标准对标，帮助家庭了解孩子的真实国际学术位置。',
  keywords: ['Eduentry简介', '免费儿童评估平台', '国际学术基准', '自适应儿童测试', '6至17岁学术评估', '实习准备评估'],
  alternates: {
    canonical: `${BASE_URL}/zh/guanyu-women`,
    languages: {
      zh: `${BASE_URL}/zh/guanyu-women`,
      tr: `${BASE_URL}/tr/hakkimizda`,
      es: `${BASE_URL}/es/sobre-nosotros`,
      'en-GB': `${BASE_URL}/about`,
      fr: `${BASE_URL}/fr/a-propos`,
      ru: `${BASE_URL}/ru/o-nas`,
      'x-default': `${BASE_URL}/about`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: '关于我们 — 免费儿童学术评估平台',
    description: '免费自适应学术评估，与英国、PISA和IB标准对标。标准化分数和国际百分位排名。',
    url: `${BASE_URL}/zh/guanyu-women`,
    locale: 'zh_CN',
    images: [{ url: `${BASE_URL}/zh/guanyu-women/opengraph-image`, width: 1200, height: 630, alt: '关于Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '关于我们 — 免费儿童学术评估平台',
    description: '免费自适应学术评估，与英国、PISA和IB标准对标。标准化分数和国际百分位排名。',
    images: [`${BASE_URL}/zh/guanyu-women/opengraph-image`],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
    { '@type': 'ListItem', position: 2, name: '关于我们', item: `${BASE_URL}/zh/guanyu-women` },
  ],
}

export default function GuanyuWomenPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16" lang="zh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <nav className="text-sm text-[#6e6e73] mb-8">
        <Link href="/zh" className="hover:text-[#1d1d1f]">首页</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">关于我们</span>
      </nav>

      <div className="mb-14">
        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] mb-5 leading-tight tracking-tight">
          关于Eduentry
        </h1>
        <p className="text-xl text-[#636366] leading-relaxed max-w-2xl">
          Eduentry的使命是让每个孩子都能获得国际级别的学术基准测评——完全免费。
        </p>
      </div>

      <div className="space-y-16">

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">我们的使命</h2>
          <p className="text-[#636366] leading-relaxed mb-4">
            大多数家庭只了解孩子在班级中的相对位置，却不知道他们在全球同龄人中处于何种水平。竞争性学校、奖学金委员会和顶尖大学都以国际标准衡量学生——而家长通常直到申请截止日期临近才意识到这一点。
          </p>
          <p className="text-[#636366] leading-relaxed">
            Eduentry的成立旨在消除这一信息差距。我们提供与PISA、GCSE和SAT使用相同心理测量科学的免费自适应评估，让任何家庭都能了解孩子真实的国际学术位置。
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">我们的评估体系</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: '学术评估', desc: '面向6–17岁儿童的60题自适应评估，测量英语、数学、语言推理和非语言推理。提供标准化分数（均值100，标准差15）、百分位排名及AI学习建议。', color: '#4F46E5' },
              { title: '实习评估', desc: '面向14岁以上高中生的34题自适应评估，测量通用能力、领域知识、工作技能和兴趣档案，覆盖技术、商业、数据分析和数字营销四个方向。', color: '#0D9488' },
            ].map(({ title, desc, color }) => (
              <div key={title} className="bg-[#f5f5f7] rounded-3xl p-7 border border-[#d2d2d7]">
                <h3 className="font-bold text-[#1d1d1f] mb-3" style={{ color }}>{title}</h3>
                <p className="text-sm text-[#636366] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">科学基础</h2>
          <p className="text-[#636366] leading-relaxed mb-4">
            Eduentry使用两参数逻辑模型（2PL）的项目反应理论（IRT）——与PISA、GCSE和SAT使用的模型相同。这意味着每道题目都经过难度和区分度参数的校准，系统在每次回答后实时更新学生的能力估计。
          </p>
          <p className="text-[#636366] leading-relaxed">
            结果使用均值100、标准差15的标准化量表——这一量表与PISA相同，可直接与国际学术标准进行比较。
          </p>
          <div className="mt-5">
            <Link href="/zh/fangfalun" className="text-[#4F46E5] font-semibold hover:underline text-sm">
              阅读完整方法论 →
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#1d1d1f] mb-5 tracking-tight">永久免费</h2>
          <p className="text-[#636366] leading-relaxed">
            Eduentry对家庭永久免费。没有订阅费，没有高级套餐，也没有在报告后显示的付费墙。我们相信每个家庭都应该有权获得关于孩子学术水平的清晰、诚实的信息。
          </p>
        </section>

      </div>

      <div className="mt-20 border-t border-[#d2d2d7] pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-[#1d1d1f] mb-1">准备好了解孩子的真实水平了吗？</p>
          <p className="text-sm text-[#636366]">免费开始——无需信用卡。</p>
        </div>
        <Link href="/zh/auth/register" className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors shrink-0">
          开始免费评估 →
        </Link>
      </div>
    </main>
  )
}
