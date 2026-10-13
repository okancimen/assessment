import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import NweaRitCalculator from '@/components/tools/NweaRitCalculator'

const URL = 'https://eduentry.com/tools/nwea-rit-calculator'

export const metadata: Metadata = {
  title: 'NWEA MAP RIT Score Calculator 2026 — Is My Child’s Score Good by Grade?',
  description:
    'Free NWEA MAP RIT calculator: enter your child’s grade and Fall Math RIT score to see the percentile band (50th–99th) and whether it’s above or below the national average. Based on NWEA norms.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    url: URL,
    title: 'NWEA MAP RIT Score Calculator — Is My Child’s Score Good?',
    description: 'Enter grade + Fall Math RIT to see the percentile band and whether it’s above or below the national average.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const FAQ = [
  {
    q: 'What is a good NWEA MAP RIT score by grade?',
    a: 'A RIT at the 50th percentile is the national average for the grade (for example, about 188 in Grade 3 Fall Math, rising to about 218 by Grade 8). Scores at the 90th percentile and above are considered well above average, and the 95th–99th percentile range is where many gifted programmes screen.',
  },
  {
    q: 'What does a RIT score actually mean?',
    a: 'RIT (Rasch Unit) is a stable, equal-interval scale spanning the whole K–12 curriculum, so the same RIT score means the same level of knowledge regardless of grade. That lets you track growth year over year, not just rank within a grade.',
  },
  {
    q: 'Is my child gifted if they score in the 95th percentile?',
    a: 'A single MAP score is a screen, not a diagnosis. Many gifted programmes look for the 95th–99th percentile, but criteria vary by district and most combine MAP with a cognitive test (CogAT, NNAT) and teacher input.',
  },
  {
    q: 'How accurate are these numbers?',
    a: 'The benchmarks are approximate, based on NWEA national norms for Fall MAP Growth Mathematics. Exact percentiles vary by test term (Fall/Winter/Spring) and subject. For official figures, consult the NWEA 2020 Norms Study.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
    { '@type': 'ListItem', position: 2, name: 'NWEA MAP RIT Calculator', item: URL },
  ],
}

export default function NweaRitCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <PublicNav />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">NWEA MAP RIT Score Calculator</h1>
          <p className="text-[#6e6e73] mt-2 leading-relaxed">
            Enter your child&rsquo;s grade and Fall Math RIT score to see which percentile band it falls in and
            whether it&rsquo;s above or below the national average for the grade.
          </p>
        </header>

        <NweaRitCalculator />

        {/* Explainer */}
        <section className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-3">
          <h2 className="text-lg font-bold text-[#1d1d1f]">How to read a RIT score</h2>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            A RIT score is a position on a continuous, equal-interval scale — not a percentage correct. The
            national average sits at the 50th percentile for each grade; the 75th–90th range is above average,
            and 95th–99th is where gifted screening typically begins. Because the scale is stable across grades,
            the most useful signal is often <strong>growth</strong> over time rather than a single number.
          </p>
          <p className="text-sm text-[#3d3d3f] leading-relaxed">
            For the full breakdown by grade and percentile, read{' '}
            <Link href="/blog/nwea-map-scores-explained" className="text-[#4F46E5] hover:underline font-medium">
              NWEA MAP Scores Explained
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

        {/* CTA */}
        <section className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-base font-bold text-[#1d1d1f]">See how your child compares internationally</h2>
            <p className="text-sm text-[#6e6e73] mt-1">
              A free adaptive benchmark across English, Maths, Verbal &amp; Non-Verbal Reasoning — standardised
              score and percentile in about 45 minutes. No account needed.
            </p>
          </div>
          <Link href="/academic-assessment" className="shrink-0 bg-[#4F46E5] hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors text-center">
            Start free assessment →
          </Link>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
