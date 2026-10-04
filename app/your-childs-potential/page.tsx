import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = `${BASE_URL}/auth/register`

export const metadata: Metadata = {
  title: "Your Child's Strengths & Weaknesses: Free Test",
  description:
    "Find your child's strengths and gaps in 35 minutes. Free adaptive assessment benchmarked against PISA, SAT and GCSE, with an instant AI report.",
  keywords: [
    "what are my child's strengths and weaknesses",
    "my child's strengths",
    "my child's weaknesses",
    'child cognitive assessment',
    'free child test',
    'PISA assessment child',
    "child's potential test",
    'cognitive ability test free',
    'child academic assessment',
    'verbal reasoning test child',
    'adaptive test child',
    'child IQ test free',
    'international norm benchmark',
    'child school report analysis',
  ],
  alternates: {
    canonical: `${BASE_URL}/your-childs-potential`,
    languages: {
      'en-GB': `${BASE_URL}/your-childs-potential`,
      es: `${BASE_URL}/es/potencial-de-tu-hijo`,
      fr: `${BASE_URL}/fr/potentiel-de-votre-enfant`,
      tr: `${BASE_URL}/tr/cocugunuzun-potansiyeli`,
      ar: `${BASE_URL}/ar/imkaniyat-tiflik`,
      ru: `${BASE_URL}/ru/potentsial-vashego-rebyonka`,
      zh: `${BASE_URL}/zh/haizi-de-qianli`,
      'x-default': `${BASE_URL}/your-childs-potential`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/your-childs-potential`,
    siteName: 'Eduentry',
    title: "What Are My Child's Strengths and Weaknesses? — Free Cognitive Test",
    description:
      "Discover your child's strengths and weaknesses in 35 minutes. Free adaptive cognitive assessment benchmarked against PISA, SAT and GCSE standards.",
    locale: 'en_GB',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Your Child's Cognitive Assessment — Eduentry" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Are My Child's Strengths and Weaknesses? — Free Cognitive Test",
    description:
      "Discover your child's strengths and weaknesses in 35 minutes. Free adaptive cognitive assessment benchmarked against PISA, SAT and GCSE standards.",
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const DOMAINS = [
  {
    icon: '📖',
    title: 'Reading & Literacy',
    desc: 'Reading comprehension, grammar, vocabulary, analysis and inference.',
  },
  {
    icon: '📐',
    title: 'Maths & Numerical Reasoning',
    desc: 'Arithmetic, algebra, geometry and data interpretation. Curriculum-independent numerical reasoning.',
  },
  {
    icon: '🧠',
    title: 'Verbal Reasoning',
    desc: 'Analogies, classifications and verbal logic. Capacity to think through language and draw relationships.',
  },
  {
    icon: '🔷',
    title: 'Non-Verbal Spatial Reasoning',
    desc: 'Pattern recognition, spatial reasoning and abstract matrices. Most critical domain for STEM.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'Computer Adaptive Testing (CAT)',
    desc: 'Each question is selected in real-time based on the previous answer. Correct → harder question. Wrong → recalibration. The system determines your child\'s true ability level with high precision in 25–35 questions.',
  },
  {
    title: '2-Parameter Logistic IRT Model (2PL)',
    desc: 'Each question is calibrated using 2PL Item Response Theory and Fisher Information, producing an ability estimate (theta) with a known confidence interval. Results are statistically reliable ability measurements — not raw scores.',
  },
  {
    title: 'Global Standard Scale',
    desc: 'Mean = 100, SD = 15 standard scale. Benchmarked against international norms aligned with UK 11+/GCSE, US Grade Expectations, PISA Levels and IB Programme Readiness.',
  },
]

const FAQS = [
  {
    q: "What are my child's academic strengths and weaknesses?",
    a: "Your child's academic strengths and weaknesses are measured across three independent cognitive domains: verbal reasoning (language comprehension and analogies), numerical reasoning (pattern recognition and mathematical logic), and visual-spatial thinking (shape analysis and 3D relationships). The free adaptive test produces a separate percentile score for each domain based on international age norms.",
  },
  {
    q: "Do school grades show my child's real potential?",
    a: 'No. School grades measure crystallized intelligence — learned and reproduced knowledge. Many intelligent children excel in fluid intelligence: reasoning, pattern recognition, and problem-solving that school exams rarely measure. This is why a significant proportion of high-potential children can have poor grades.',
  },
  {
    q: 'Is the assessment free?',
    a: 'Yes, completely free. Registration is required but there is no fee, subscription, or hidden cost. Upon test completion, an instant four-domain cognitive profile report is generated.',
  },
  {
    q: 'How long does the test take?',
    a: 'About 35 minutes. The adaptive format makes fewer but more accurate measurements than standard multiple-choice tests. The test can be saved — your child can continue from where they left off.',
  },
  {
    q: 'What age group is it suitable for?',
    a: 'Suitable for children aged 6–17. The system automatically calibrates for each age group; questions adapt to the child\'s level.',
  },
  {
    q: 'What does the report tell me?',
    a: 'The report includes: percentile scores in four cognitive domains against international age norms, strongest domain, priority development area, and AI-generated parent insights for each domain. Provides a concrete guide for everything from school selection to targeted support decisions.',
  },
  {
    q: 'How is this different from school tests?',
    a: "School tests measure knowledge in a specific curriculum. This test measures cognitive potential — how the child thinks — independent of curriculum knowledge. Allows fair comparison of children from different countries or school systems.",
  },
  {
    q: 'My child has high spatial intelligence but poor grades. Is that normal?',
    a: "Yes, very common. High spatial intelligence is often undervalued by standard academic tests. According to OECD data, students in the top quartile of fluid reasoning but in the bottom half of school achievement represent 12–18% of all students — a group chronically underestimated by school systems.",
  },
  {
    q: 'Can I share the results with the school?',
    a: 'Yes. A report from a standardised assessment transforms parent-teacher meetings and guidance counselling sessions. "97th percentile in spatial reasoning" is a much more powerful advocacy tool than "seems intelligent but scattered."',
  },
  {
    q: 'Does it identify giftedness or special talents?',
    a: 'Yes. Children scoring above the 90th percentile in all three domains show strong indication for gifted programme candidacy. The test also catches inconsistencies in score patterns, directing towards specialist assessment for conditions like dyslexia, dyscalculia, or twice-exceptionality.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/your-childs-potential#webpage`,
  url: `${BASE_URL}/your-childs-potential`,
  name: "What Are My Child's Strengths and Weaknesses? — Free Cognitive Test",
  description: "Discover your child's strengths and weaknesses in 35 minutes. Free adaptive cognitive assessment benchmarked against PISA, SAT and GCSE standards.",
  inLanguage: 'en',
  isPartOf: { '@id': `${BASE_URL}/#website` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/your-childs-potential#service`,
  name: "Child Cognitive Assessment",
  description: 'Free adaptive cognitive assessment for children aged 6–17. Benchmarks verbal, numerical and spatial reasoning against PISA, SAT and GCSE standards.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/your-childs-potential`,
  inLanguage: 'en',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}` },
    { '@type': 'ListItem', position: 2, name: "Your Child's Potential", item: `${BASE_URL}/your-childs-potential` },
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
  { href: '/blog/discover-child-strengths-free-academic-test', tag: 'Assessment', title: "Free Academic Test: Discover Your Child's Strengths & Weaknesses in 35 Minutes" },
  { href: '/blog/smart-child-bad-grades', tag: 'Guide', title: "Smart Child, Bad Grades: A Parent's Guide" },
  { href: '/blog/discover-school-age-childs-hidden-strengths', tag: 'Guide', title: "Discover Your School-Age Child's Hidden Strengths: A Modern Parent's Guide" },
]

export default function YourChildsPotentialPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      <div className="bg-[#0a0a0a] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span className="opacity-60">Powered by</span>{' '}
        <span className="font-semibold">Magenta Networks Pte Ltd</span>
        <span className="opacity-60"> (Singapore)</span>
      </div>

      <section className="bg-gradient-to-b from-[#f5f3ff] to-white pt-20 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider">Free Cognitive Assessment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover Your Child&apos;s True<br />
            <span className="text-indigo-600">Cognitive Strengths &amp; Weaknesses</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Benchmark cognitive ability and academic readiness against international <strong>PISA, SAT and GCSE</strong> standards in 35 minutes. Reveal the real potential that school grades cannot show.
          </p>

          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
          >
            Assess Cognitive Potential (Free)
          </Link>

          <p className="mt-4 text-xs text-gray-500">
            Free International Benchmark &nbsp;•&nbsp; 100% Private &nbsp;•&nbsp; Instant AI-Powered Cognitive Profile PDF
          </p>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '📊', label: 'PISA, SAT & GCSE', sub: 'Standard IRT Models' },
            { icon: '🇸🇬', label: 'Magenta Networks', sub: 'Singapore Registered Entity' },
            { icon: '🤖', label: 'Claude AI (Anthropic)', sub: 'Adaptive Testing Engine' },
            { icon: '🔒', label: 'GDPR Compliant', sub: 'Student Data Privacy' },
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are My Child&apos;s Strengths and Weaknesses?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Your child&apos;s academic strengths and weaknesses are measured across three independent cognitive domains:</strong> verbal reasoning (language comprehension and analogies), numerical reasoning (pattern recognition and mathematical logic), and visual-spatial thinking (shape analysis and 3D relationships). The free adaptive test produces a separate percentile score for each domain based on international age norms — clearly showing where they truly excel and where targeted support will make the greatest difference.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            School grades cannot answer this question — they measure knowledge from a specific curriculum taught by a specific teacher at a specific school. They do not measure cognitive potential by international standards. According to OECD data, students in the top quartile of fluid reasoning but in the bottom half of school achievement represent <strong>12–18%</strong> of all students — a group chronically underestimated by school systems. John Hattie&apos;s meta-analysis of over 900 studies sets the effect size of diagnostic assessment at 0.67 — among the highest-impact interventions in education.
          </p>
          <Link
            href={REGISTER_URL}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Start free assessment →
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Do We Assess?</h2>
            <p className="text-gray-500 text-base">Four independent cognitive domains — each measured with a separate international percentile score.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The Science Behind Eduentry</h2>
            <p className="text-gray-500 text-base">Why is this different from ordinary tests and questionnaires?</p>
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
            The same test architecture is used in standardised assessments applied to more than 10 million students worldwide, such as <strong>NWEA MAP</strong> and <strong>CAT4</strong>. John Hattie&apos;s meta-analysis spanning over 900 studies places the effect size of diagnostic assessment at 0.67 — among the highest-impact interventions in education.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f9f8ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Sample Report: Global Ability Profile</h2>
          <p className="text-gray-500 text-base mb-10">When the test is complete, parents receive a detailed report showing percentile rankings across four domains along with strengths and development areas.</p>

          <Link href="/sample-report" className="block group">
            <div className="border-2 border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:border-indigo-300 transition-all bg-gradient-to-br from-indigo-50 to-white">
              <div className="bg-indigo-600 px-6 py-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Global Ability Profile</p>
                    <p className="text-indigo-200 text-xs mt-0.5">Eduentry · Cognitive Assessment Report</p>
                  </div>
                  <div className="bg-white/20 rounded-lg px-3 py-1">
                    <p className="text-white text-xs font-semibold">PDF</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'English & Literacy', score: '87', pct: '82nd Percentile' },
                    { label: 'Maths & Numerical', score: '94', pct: '91st Percentile' },
                    { label: 'Verbal Reasoning', score: '79', pct: '74th Percentile' },
                    { label: 'Spatial Reasoning', score: '112', pct: '97th Percentile' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white border border-gray-100 rounded-xl p-4 text-left shadow-sm">
                      <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-2xl font-extrabold text-indigo-600">{item.score}</p>
                      <p className="text-[11px] font-semibold text-green-600 mt-0.5">{item.pct}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 rounded-xl p-4 text-left">
                  <p className="text-xs font-bold text-indigo-900 mb-1">🏆 Strongest Domain: Spatial Reasoning</p>
                  <p className="text-xs text-indigo-700 leading-relaxed">Child performs significantly above international age norm in pattern recognition and spatial reasoning. This area has strong correlation with STEM, engineering, and design.</p>
                </div>
                <p className="text-indigo-600 text-sm font-semibold mt-4 group-hover:underline">View full sample report →</p>
              </div>
            </div>
          </Link>

          <div className="mt-10">
            <Link
              href={REGISTER_URL}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200"
            >
              Assess Cognitive Potential (Free)
            </Link>
            <p className="mt-3 text-xs text-gray-500">Free International Benchmark &nbsp;•&nbsp; 100% Private &nbsp;•&nbsp; Instant AI-Powered Cognitive Profile PDF</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">Related Guides</h2>
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
          Start free assessment →
        </Link>
      </div>

      <PublicFooter />
    </div>
  )
}
