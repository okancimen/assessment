import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CogAtScoreLookup from '@/components/tools/CogAtScoreLookup'

const URL = 'https://eduentry.com/tools/cogat-score-lookup'

export const metadata: Metadata = {
  title: "CogAT Score Percentile Lookup 2026 — What Does My Child's SAS Mean?",
  description:
    "Free CogAT score lookup: enter your child's Composite SAS to instantly see the national percentile band and whether it meets gifted-programme thresholds. Based on CogAT standard age norms (mean 100, SD 16).",
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    url: URL,
    title: "CogAT Score Percentile Lookup — What Does My Child's SAS Mean?",
    description: "Enter a Composite SAS to see the exact national percentile band and gifted-screening context. Free, instant, based on CogAT age norms.",
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CogAT Score Percentile Lookup — What Does My Child's SAS Mean?",
    description: "Enter a Composite SAS to see the exact national percentile band and gifted-screening context. Free, instant, based on CogAT age norms.",
    images: ['/opengraph-image'],
  },
}

const FAQ = [
  {
    q: 'What is a good CogAT score?',
    a: 'The national average Composite SAS is 100. A score of 110–120 is above average (roughly the 73rd–90th percentile). Most US gifted and talented programmes begin screening at the 95th percentile, which corresponds to a Composite SAS of approximately 125. Highly selective programmes may require SAS 130+ (97th percentile).',
  },
  {
    q: 'What is a CogAT SAS score?',
    a: 'SAS stands for Standard Age Score — the main composite score reported on the CogAT. It is age-normed with a mean of 100 and a standard deviation of 16, which means the same SAS has the same meaning regardless of grade. A child scoring 125 is at approximately the 95th percentile whether they are in Grade 2 or Grade 7.',
  },
  {
    q: 'What CogAT score is needed for gifted programmes?',
    a: 'Most districts that use CogAT for gifted identification screen at the 95th–98th percentile, corresponding to a Composite SAS of roughly 125–132. However, CogAT is typically just one input — many programmes also require a MAP Growth score, NNAT result, achievement test, or teacher recommendation. Exact criteria vary significantly by district and programme selectivity.',
  },
  {
    q: 'What is the difference between CogAT Verbal, Quantitative, and Non-Verbal scores?',
    a: 'CogAT reports three battery scores alongside the Composite. Verbal measures word knowledge, sentence completion, and verbal analogies. Quantitative measures number series, equation building, and number analogies. Non-Verbal (Spatial) measures figure classification, figure analogies, and paper folding. Each battery is also reported as an SAS with mean 100, SD 16. A large gap between batteries (10+ SAS points) may indicate a learning profile worth exploring with an educational psychologist.',
  },
  {
    q: 'Is a CogAT score the same as an IQ score?',
    a: 'No, but they are correlated. CogAT measures reasoning and problem-solving abilities across verbal, quantitative, and non-verbal domains — similar in structure to IQ tests like the WISC-V. However, CogAT is a group-administered screening tool, not a full individual IQ assessment. A high CogAT score is a strong indicator of reasoning ability but cannot substitute for a comprehensive psychoeducational evaluation when formal identification is needed.',
  },
  {
    q: 'What if my child\'s Composite SAS is average but their Non-Verbal score is very high?',
    a: 'Battery score discrepancies are common and informative. A child with a low Verbal SAS but a high Non-Verbal SAS may be a strong visual-spatial thinker or may have a language processing difference. Some gifted programmes accept a single high battery score for domain-specific identification. A large discrepancy (12+ SAS points) is worth discussing with a school counsellor.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
    { '@type': 'ListItem', position: 2, name: 'CogAT Score Percentile Lookup', item: URL },
  ],
}

const WEB_APP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'CogAT Score Percentile Lookup',
  description:
    'Free tool to look up the national percentile band for any CogAT Composite SAS score, including gifted-screening eligibility context. Based on CogAT standard age norms (mean 100, SD 16).',
  url: URL,
  applicationCategory: 'EducationApplication',
  operatingSystem: 'Any',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: 'CogAT SAS percentile lookup, gifted-screening eligibility, Composite and battery score context, Grades K–8',
  provider: { '@type': 'Organization', name: 'Eduentry', url: 'https://eduentry.com' },
}

export default function CogAtScoreLookupPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <PublicNav />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">CogAT Score Percentile Lookup</h1>
          <p className="text-[#6e6e73] mt-2 leading-relaxed">
            Enter your child&rsquo;s Composite SAS and grade to see the exact national percentile band —
            and whether it reaches the range used for gifted programme screening.
          </p>
        </header>

        <CogAtScoreLookup />

        {/* How SAS works */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-lg font-bold text-[#1d1d1f]">How the CogAT SAS works</h2>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            The <strong>Standard Age Score (SAS)</strong> is the main composite result reported on the CogAT.
            It is <em>age-normed</em> with a mean of 100 and standard deviation of 16 — meaning the same SAS
            represents the same level of reasoning ability regardless of grade. This makes it useful for
            comparing students across different grades.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            CogAT also reports three separate battery scores (Verbal, Quantitative, Non-Verbal) each on
            the same SAS scale. A large gap between battery scores — 10 or more SAS points — often
            reveals an uneven reasoning profile worth exploring further.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            For the full score chart and gifted identification context, see{' '}
            <Link href="/blog/cogat-scores-explained" className="text-[#4F46E5] hover:underline font-medium">
              CogAT Scores Explained: SAS, Percentile, Stanine & Gifted Cut-offs
            </Link>.
          </p>
        </section>

        {/* SAS vs MAP comparison */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-lg font-bold text-[#1d1d1f]">CogAT vs. MAP: how they relate</h2>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            CogAT and MAP Growth measure different things. MAP measures academic achievement —
            what a student has already learned in Math, Reading, and Language. CogAT measures
            reasoning aptitude — the underlying cognitive processes that drive learning.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            Many gifted programmes require both: a CogAT Composite SAS above a threshold <em>and</em> a
            MAP Growth score above the 90th percentile. For the MAP side of this equation, use the{' '}
            <Link href="/tools/map-percentile-calculator" className="text-[#4F46E5] hover:underline font-medium">
              NWEA MAP Percentile Calculator
            </Link>.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-5">
          <h2 className="text-lg font-bold text-[#1d1d1f]">Frequently asked questions</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">{q}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{a}</p>
            </div>
          ))}
        </section>

        {/* Related guides */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-lg font-bold text-[#1d1d1f]">Related CogAT and gifted-testing guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/blog/cogat-scores-explained', label: 'CogAT Scores Explained: SAS, Percentile & Stanine', tag: 'Guide' },
              { href: '/blog/cogat-vs-nwea-map-gifted', label: 'CogAT vs. NWEA MAP for Gifted Identification', tag: 'Comparison' },
              { href: '/blog/gifted-program-testing-guide', label: 'Gifted Program Testing: Complete Parent Guide', tag: 'Guide' },
              { href: '/tools/map-percentile-calculator', label: 'NWEA MAP Percentile Calculator', tag: 'Tool' },
            ].map(({ href, label, tag }) => (
              <Link key={href} href={href} className="flex flex-col gap-1 rounded-2xl border border-[#d2d2d7] p-4 hover:border-[#4F46E5] transition-colors">
                <span className="text-xs font-semibold text-[#4F46E5]">{tag}</span>
                <span className="text-sm font-medium text-[#1d1d1f] leading-snug">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-base font-bold text-[#1d1d1f]">How does your child compare internationally?</h2>
            <p className="text-sm text-[#6e6e73] mt-1">
              Free adaptive benchmark across English, Maths, Verbal &amp; Non-Verbal Reasoning — standardised
              score and percentile in about 45 minutes. No account needed to start.
            </p>
          </div>
          <Link
            href="/academic-assessment"
            className="shrink-0 bg-[#4F46E5] hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors text-center"
          >
            Start free assessment →
          </Link>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
