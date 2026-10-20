import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import MapPercentileCalculator from '@/components/tools/MapPercentileCalculator'

const URL = 'https://eduentry.com/tools/map-percentile-calculator'

export const metadata: Metadata = {
  title: 'NWEA MAP Percentile Calculator 2026 — Math & Reading by Grade',
  description:
    'Free MAP score percentile calculator: enter your child\'s grade, subject (Math or Reading), and Fall RIT score to instantly see the percentile band and gifted eligibility range. Based on NWEA 2020 norms.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    url: URL,
    title: 'NWEA MAP Percentile Calculator — Math & Reading by Grade',
    description: 'Enter grade + RIT score to see the exact percentile band for Math or Reading. Includes gifted screening context.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const FAQ = [
  {
    q: 'What percentile is a good MAP score?',
    a: 'The 50th percentile is the national average. Scores at the 75th–90th percentile are above average; the 90th–95th range is strong; and 95th–99th is where most gifted and talented programmes begin to screen. What counts as "good" depends on your goal — average is fine for most students, and high percentile scores simply mean more comparison options.',
  },
  {
    q: 'What is a good MAP Reading RIT score by grade?',
    a: 'For Fall testing, approximate national averages are: Grade 3 ≈ 196, Grade 4 ≈ 207, Grade 5 ≈ 214, Grade 6 ≈ 218, Grade 7 ≈ 221, Grade 8 ≈ 223. A score 10–15 points above the average for the grade is typically above the 75th percentile. Use the calculator above for exact bands.',
  },
  {
    q: 'What is a good MAP Math RIT score by grade?',
    a: 'For Fall testing, approximate national averages are: Grade 3 ≈ 188, Grade 4 ≈ 197, Grade 5 ≈ 205, Grade 6 ≈ 211, Grade 7 ≈ 215, Grade 8 ≈ 218. A score 10+ points above average is typically in the 75th–90th percentile range.',
  },
  {
    q: 'What MAP score is needed for gifted programmes?',
    a: 'Most US districts screen gifted candidates at the 95th–99th percentile on MAP Growth. For example, a Grade 5 student would typically need a Math RIT of around 227+ (95th) or 237+ (99th). However, MAP is usually just one input — cognitive tests like CogAT or NNAT and teacher recommendations are also required. Check your district\'s specific criteria.',
  },
  {
    q: 'Is the Fall MAP score different from Winter or Spring?',
    a: 'Yes — students are expected to grow throughout the year, so the same RIT translates to a higher percentile in Fall than Spring. This calculator uses Fall norms. If your child\'s score is from a Winter or Spring test, their percentile will be slightly lower than what this tool shows for the same RIT.',
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
    { '@type': 'ListItem', position: 2, name: 'MAP Percentile Calculator', item: URL },
  ],
}

export default function MapPercentileCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <PublicNav />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">NWEA MAP Percentile Calculator</h1>
          <p className="text-[#6e6e73] mt-2 leading-relaxed">
            Enter your child&rsquo;s grade, subject, and Fall RIT score to see the exact percentile band —
            and whether it meets the threshold used for gifted screening.
          </p>
        </header>

        <MapPercentileCalculator />

        {/* How to read section */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-lg font-bold text-[#1d1d1f]">How MAP percentiles work</h2>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            A MAP Growth RIT score is compared to a national norm group of students in the same grade
            and testing term. The 50th percentile is the national midpoint — half of students score higher,
            half score lower. Percentile bands (75th, 90th, etc.) show where a score ranks within that
            comparison group.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            Because RIT is an <strong>equal-interval scale</strong>, the same RIT has the same meaning
            across grades. This makes it useful for tracking a single child&rsquo;s growth over time —
            a gain of 6 RIT points means the same thing in Grade 3 as it does in Grade 7.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            For prep strategies and a full grade-by-grade table, read{' '}
            <Link href="/blog/nwea-map-test-prep" className="text-[#4F46E5] hover:underline font-medium">
              NWEA MAP Test Prep: What Actually Works
            </Link>{' '}
            and{' '}
            <Link href="/blog/nwea-map-scores-explained" className="text-[#4F46E5] hover:underline font-medium">
              NWEA MAP Scores Explained
            </Link>.
          </p>
        </section>

        {/* Math vs Reading comparison */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-lg font-bold text-[#1d1d1f]">Math vs Reading: what to expect</h2>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            Reading RIT scores are generally higher in absolute terms than Math scores at the same grade
            and percentile — this is normal. A Grade 5 student at the 50th percentile scores roughly
            205 in Math and 214 in Reading. Always compare a score against its subject&rsquo;s own norms,
            not across subjects.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            Reading growth tends to slow after Grade 5 as students move from learning to read toward
            reading to learn. Math growth stays more linear through Grade 8. If your child&rsquo;s Math
            score is pulling ahead of Reading, targeted Lexile-level reading practice is usually the
            most effective lever.
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
