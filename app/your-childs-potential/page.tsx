import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'

const BASE_URL = 'https://eduentry.com'
const REGISTER_URL = '/academic-assessment'

export const metadata: Metadata = {
  title: "Your Child's True Cognitive Status: Free Assessment",
  description:
    "Find your child's true cognitive status within an hour. Free adaptive assessment benchmarked against PISA, SAT and GCSE — see exactly how they compare to peers worldwide.",
  keywords: [
    "what is my child's cognitive status",
    "child cognitive standing among peers",
    "child academic status test",
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
    title: "What Is My Child's Cognitive Status? — Free Academic Assessment",
    description:
      "Discover your child's true cognitive status within an hour. Free adaptive assessment benchmarked against PISA, SAT and GCSE — see how they compare to peers worldwide.",
    locale: 'en_GB',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Your Child's Cognitive Assessment — Eduentry" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "What Is My Child's Cognitive Status? — Free Academic Assessment",
    description:
      "Discover your child's true cognitive status within an hour. Free adaptive assessment benchmarked against PISA, SAT and GCSE — see how they compare to peers worldwide.",
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const DOMAINS = [
  {
    label: 'English & Literacy',
    color: 'bg-rose-50 border-rose-100',
    accent: 'text-rose-600',
    bar: 'bg-rose-400',
    desc: 'Reading comprehension, grammar, vocabulary, analysis and inference.',
  },
  {
    label: 'Maths & Numerical Reasoning',
    color: 'bg-amber-50 border-amber-100',
    accent: 'text-amber-600',
    bar: 'bg-amber-400',
    desc: 'Arithmetic, algebra, geometry and data interpretation, independent of curriculum.',
  },
  {
    label: 'Verbal Reasoning',
    color: 'bg-indigo-50 border-indigo-100',
    accent: 'text-indigo-600',
    bar: 'bg-indigo-400',
    desc: 'Analogies, classifications and verbal logic — capacity to think through language.',
  },
  {
    label: 'Non-Verbal Spatial Reasoning',
    color: 'bg-emerald-50 border-emerald-100',
    accent: 'text-emerald-600',
    bar: 'bg-emerald-400',
    desc: 'Pattern recognition, spatial reasoning and abstract matrices — most predictive of STEM.',
  },
]

const STEPS = [
  {
    n: '1',
    title: 'Create a free account',
    body: 'Add your child\'s age and name. Takes under two minutes — no payment, no subscription.',
  },
  {
    n: '2',
    title: 'Your child takes the adaptive test',
    body: 'Questions adjust to your child\'s level in real time. Four subjects — see a result after each one (~10 min each). Can be paused and resumed.',
  },
  {
    n: '3',
    title: 'Get the full report instantly',
    body: 'A standardised score, international percentile ranking, and AI-generated insights for each subject — delivered immediately after the test.',
  },
]

const SCIENCE_POINTS = [
  {
    title: 'Adapts to your child\'s level in real time',
    body: 'Each question is selected based on the previous answer. Correct → harder. Wrong → recalibrated. The result is a precise ability estimate, not a raw count of right answers.',
  },
  {
    title: 'Statistically reliable — not just a percentage',
    body: 'Scoring uses Item Response Theory — the same method behind NWEA MAP and CAT4. You get a standardised score with a known confidence interval, comparable across different test sittings.',
  },
  {
    title: 'International benchmark scale',
    body: 'Mean 100, SD 15 — the same scale used by GL Assessment, NFER, and most UK standardised tests. A score of 115 means your child is in the top 16% internationally.',
  },
]

const FAQS = [
  {
    q: "What does my child's assessment show?",
    a: "The assessment shows your child's current standing across four independent domains: English & Literacy, Maths & Numerical Reasoning, Verbal Reasoning, and Non-Verbal Spatial Reasoning. Each domain produces a separate standardised score and percentile against international age norms — showing exactly where they stand among peers worldwide.",
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
    a: 'Around 10 minutes per subject — your child sees a score after each one. The full report unlocks after all four subjects (~40 min total). The adaptive format makes fewer but more accurate measurements than standard multiple-choice tests, and the test can be saved and resumed across multiple sessions.',
  },
  {
    q: 'What age group is it suitable for?',
    a: 'Suitable for children aged 6–17. The system automatically calibrates for each age group; questions adapt to the child\'s level.',
  },
  {
    q: 'What does the report tell me?',
    a: 'The report includes: standardised scores and percentile rankings in four domains against international age norms, your child\'s strongest domain, priority development area, and AI-generated insights for each subject. It gives a concrete guide for school selection, selective entry preparation, and targeted support decisions.',
  },
  {
    q: 'How is this different from school tests?',
    a: "School tests measure knowledge in a specific curriculum. This test measures cognitive ability — how the child thinks — independent of curriculum knowledge. It allows fair comparison of children from different countries or school systems.",
  },
  {
    q: 'My child has high spatial scores but poor grades. Is that normal?',
    a: "Yes, very common. High spatial reasoning is often undervalued by standard academic tests. According to OECD data, students in the top quartile of fluid reasoning but in the bottom half of school achievement represent 12–18% of all students — a group chronically underestimated by school systems.",
  },
  {
    q: 'Can I share the results with the school?',
    a: 'Yes. A report from a standardised assessment transforms parent-teacher meetings. "97th percentile in spatial reasoning" is a much more powerful advocacy tool than "seems intelligent but scattered."',
  },
  {
    q: 'Does it identify giftedness or special talents?',
    a: 'Yes. Children scoring above the 90th percentile in all four domains show strong indication for gifted programme candidacy. The test also catches inconsistencies in score patterns, which can point towards specialist assessment for conditions like dyslexia, dyscalculia, or twice-exceptionality.',
  },
]

const PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/your-childs-potential#webpage`,
  url: `${BASE_URL}/your-childs-potential`,
  name: "What Is My Child's Cognitive Status? — Free Academic Assessment",
  description: "Discover your child's true cognitive status within an hour. Free adaptive assessment benchmarked against PISA, SAT and GCSE — see how they compare to peers worldwide.",
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
  { href: '/blog/discover-child-strengths-free-academic-test', tag: 'Assessment', title: "Free Academic Test: Discover Your Child's True Cognitive Status Within an Hour" },
  { href: '/blog/smart-child-bad-grades', tag: 'Guide', title: "Smart Child, Bad Grades: A Parent's Guide" },
  { href: '/blog/discover-school-age-childs-hidden-strengths', tag: 'Guide', title: "Discover Your School-Age Child's Hidden Strengths: A Modern Parent's Guide" },
]

export default function YourChildsPotentialPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 lg:grid lg:grid-cols-[1fr_340px] lg:gap-12 lg:items-start">
        <div>
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-700">Free · Ages 6–17 · Instant results</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Find out exactly where your child<br className="hidden sm:block" />
            <span className="text-indigo-600"> stands — internationally</span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
            School reports tell you how your child compares to their classmates. This tells you how they compare to peers worldwide — with a standardised score on the same scale as GL Assessment, NWEA MAP and CAT4.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <CtaLink href={REGISTER_URL} label="ycp_hero_cta" className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100">
              Start free assessment
            </CtaLink>
            <Link href="/sample-report" className="text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-50 transition-colors border border-indigo-200">
              See sample report
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-gray-400">
            <span>4 subjects</span>
            <span>·</span>
            <span>first results in ~10 min</span>
            <span>·</span>
            <span>Standardised score + percentile</span>
            <span>·</span>
            <span>Free, no subscription</span>
          </div>
        </div>

        {/* Report preview card */}
        <div className="mt-12 lg:mt-0">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="bg-indigo-600 px-5 py-3 flex items-center justify-between">
              <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Example report</span>
              <span className="flex items-center gap-1.5 text-xs text-indigo-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Delivered instantly
              </span>
            </div>
            <div className="p-5">
              <div className="space-y-3 mb-4">
                {[
                  { label: 'English & Literacy', score: 105, pct: '63rd', bar: 'bg-rose-400', w: '63%' },
                  { label: 'Maths & Numerical', score: 112, pct: '79th', bar: 'bg-amber-400', w: '79%' },
                  { label: 'Verbal Reasoning', score: 118, pct: '88th', bar: 'bg-indigo-400', w: '88%' },
                  { label: 'Non-Verbal Reasoning', score: 124, pct: '95th', bar: 'bg-emerald-400', w: '95%' },
                ].map(({ label, score, pct, bar, w }) => (
                  <div key={label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600 font-medium">{label}</span>
                      <span className="text-gray-400"><span className="font-bold text-gray-700">{score}</span> · {pct} %ile</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${bar}`} style={{ width: w }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                  <div className="text-xs text-emerald-600 font-medium mb-0.5">Strongest</div>
                  <div className="text-sm font-bold text-emerald-800">Non-Verbal</div>
                </div>
                <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
                  <div className="text-xs text-indigo-600 font-medium mb-0.5">Overall</div>
                  <div className="text-sm font-bold text-indigo-800">Top 16%</div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <span className="font-semibold">AI insight:</span> Strong pattern recognition suggests STEM aptitude. English & Literacy is the area most likely to respond to targeted practice.
                </p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-gray-400 mt-2.5">
            GL Assessment scale · mean 100 · SD 15
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-gray-100 bg-gray-50 py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2">
          {[
            'Same scale as GL Assessment, NWEA MAP & CAT4',
            'Item Response Theory (IRT) methodology',
            'GDPR compliant · Student data private',
            'Free — no subscription, no hidden fees',
          ].map((t) => (
            <span key={t} className="text-xs text-gray-500 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* What you get */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What the report shows</h2>
        <p className="text-gray-500 mb-10">Four subjects, each scored independently against international age norms.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {DOMAINS.map(({ label, color, accent, desc }) => (
            <div key={label} className={`rounded-2xl border p-6 ${color}`}>
              <h3 className={`font-bold text-gray-900 mb-2 ${accent}`}>{label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-y border-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {STEPS.map(({ n, title, body }) => (
              <div key={n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  {n}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink href={REGISTER_URL} label="ycp_steps_cta" className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-block">
              Start free assessment
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Why this score means something */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Why this score is more useful than a school report</h2>
        <p className="text-gray-500 mb-10">School grades measure what was taught. This measures how your child thinks.</p>
        <div className="space-y-5">
          {SCIENCE_POINTS.map(({ title, body }) => (
            <div key={title} className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-6 leading-relaxed">
          John Hattie&rsquo;s meta-analysis of over 900 studies places the effect size of diagnostic assessment at <strong className="text-gray-600">0.67</strong> — among the highest-impact interventions in education. The same adaptive test architecture is used in assessments taken by more than 10 million students worldwide, including NWEA MAP and CAT4.
        </p>
      </section>

      {/* Sample report link */}
      <section className="bg-indigo-50 border-y border-indigo-100 py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">See a full sample report before you start</h2>
          <p className="text-gray-500 mb-8">Exactly what parents receive after their child completes the assessment — standardised scores, percentile rankings, subject breakdown, and AI insights.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/sample-report" className="bg-white border border-indigo-200 text-indigo-700 font-semibold px-7 py-3.5 rounded-xl hover:bg-indigo-50 transition-colors">
              View sample report →
            </Link>
            <CtaLink href={REGISTER_URL} label="ycp_sample_cta" className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
              Start free assessment
            </CtaLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-2">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-900 pr-4 text-sm leading-snug">{q}</span>
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-gray-50 border-t border-gray-100 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Related guides</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {RELATED_POSTS.map((p) => (
              <Link key={p.href} href={p.href} className="border border-gray-100 bg-white rounded-xl p-5 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors">
                <div className="text-xs font-semibold text-indigo-600 mb-2">{p.tag}</div>
                <div className="font-semibold text-gray-900 text-sm leading-snug">{p.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-indigo-600 py-14 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-3">Find out exactly where your child stands</h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-8">
            Free adaptive assessment across four subjects. Standardised score, international percentile ranking, and AI-powered subject insights — delivered instantly after the test.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaLink href={REGISTER_URL} label="ycp_bottom_cta" className="bg-white text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
              Start free assessment
            </CtaLink>
            <Link href="/sample-report" className="text-indigo-200 px-7 py-3.5 rounded-xl font-semibold hover:text-white hover:bg-indigo-700 transition-colors border border-indigo-500">
              See sample report first
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
