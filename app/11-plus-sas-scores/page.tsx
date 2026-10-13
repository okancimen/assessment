import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

const URL = 'https://eduentry.com/11-plus-sas-scores'

export const metadata: Metadata = {
  title: '11+ SAS Scores Explained 2026: What a Standardised Score Means',
  description:
    'What is a standardised age score (SAS) in the 11+? How the mean-100 scale works, the SAS-to-percentile table, what score grammar schools need, and why scores differ between GL and CEM.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    url: URL,
    title: '11+ SAS Scores Explained: What a Standardised Score Means',
    description: 'How the mean-100 SAS scale works, SAS-to-percentile table, and what grammar schools typically require.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

// SAS → percentile is defined by the normal distribution (mean 100, SD 15).
// These are the standard reference values, not school-specific figures.
const SAS_TABLE: { sas: string; percentile: string; band: string }[] = [
  { sas: '140+', percentile: '99.6th+', band: 'Very high' },
  { sas: '130', percentile: '98th', band: 'Very high' },
  { sas: '125', percentile: '95th', band: 'Well above average' },
  { sas: '120', percentile: '91st', band: 'Well above average' },
  { sas: '115', percentile: '84th', band: 'Above average' },
  { sas: '110', percentile: '75th', band: 'Above average' },
  { sas: '100', percentile: '50th', band: 'Average' },
  { sas: '90', percentile: '25th', band: 'Below average' },
  { sas: '85', percentile: '16th', band: 'Below average' },
  { sas: '70', percentile: '2nd', band: 'Low' },
]

const FAQ = [
  {
    q: 'What is a standardised age score (SAS) in the 11+?',
    a: 'A standardised age score (SAS) converts a raw test mark onto a common scale with a mean of 100 and a standard deviation of 15, adjusted for the child\'s exact age in years and months. This "age standardisation" means a younger child is not disadvantaged against an older child in the same year group — everyone is compared fairly to children of the same age.',
  },
  {
    q: 'What SAS score do you need for grammar school?',
    a: 'Most grammar schools set a qualifying standardised score of around 111 to 121 (roughly the top 10–25% nationally), but the exact pass mark varies by school, region, and year, and often depends on how many children apply and the available places. Super-selective schools can require 125+. Always check the specific school\'s admissions criteria for the year of entry.',
  },
  {
    q: 'Is an 11+ SAS score of 121 good?',
    a: 'Yes. On the standard mean-100, SD-15 scale, a SAS of 121 is roughly the 91st percentile — your child scored higher than about 91% of children their age. That is above the qualifying mark for most grammar schools, though super-selective schools may expect more.',
  },
  {
    q: 'Why is my child\'s score over 140 (e.g. 221 or 335)?',
    a: 'A score in the 200s or 300s is not a standardised age score — it is usually a total or combined raw score across papers, or a different provider\'s scale. The standard SAS scale typically runs from about 69 to 141. Check whether the number is a per-subject SAS, a combined total, or a weighted score, as schools differ in how they report and combine results.',
  },
  {
    q: 'Do GL and CEM use the same SAS scale?',
    a: 'Both GL Assessment and CEM (and most UK cognitive tests) report age-standardised scores on the familiar mean-100, SD-15 scale, so a SAS of 115 means the same ability level on either. What differs is the content, timing, and how boards weight and combine subjects into a final qualifying score.',
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
    { '@type': 'ListItem', position: 2, name: '11+ SAS Scores Explained', item: URL },
  ],
}

export default function ElevenPlusSasScoresPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <PublicNav />

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-14 space-y-10">
        <header>
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/11-plus" className="hover:text-gray-700">11+</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-700">SAS Scores</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">11+ SAS Scores Explained</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A <strong>standardised age score (SAS)</strong> is how 11+ results are reported — a score on a
            common scale with a <strong>mean of 100</strong> and a <strong>standard deviation of 15</strong>,
            adjusted for your child&rsquo;s exact age. This guide explains what the number means, how it maps to
            a percentile, and what grammar schools typically require.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">How the SAS scale works</h2>
          <p className="text-gray-700 leading-relaxed">
            Two things make a SAS different from a simple percentage. First, it is <strong>age-standardised</strong>:
            a child born in August is compared to other August-born children, not penalised against an older
            classmate born the previous September. Second, it is placed on a <strong>normal distribution</strong>,
            so 100 is always exactly average, and most children (about two-thirds) score between 85 and 115.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">SAS to percentile table</h2>
          <p className="text-gray-700 leading-relaxed">
            Because the SAS sits on a fixed mean-100, SD-15 scale, each score maps to a percentile — the
            percentage of same-age children scoring at or below it.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Standardised score (SAS)</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Percentile</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Band</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {SAS_TABLE.map((r) => (
                  <tr key={r.sas} className="hover:bg-gray-50/50">
                    <td className="p-4 font-semibold text-gray-800 tabular-nums">{r.sas}</td>
                    <td className="p-4 text-gray-600 tabular-nums">{r.percentile}</td>
                    <td className="p-4 text-gray-600">{r.band}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Percentiles are derived from the standard normal distribution (mean 100, SD 15) and are approximate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">What score does a grammar school need?</h2>
          <p className="text-gray-700 leading-relaxed">
            Most grammar schools set a qualifying SAS of roughly <strong>111–121</strong> (about the top
            10–25% nationally). Super-selective schools can require <strong>125 and above</strong>. The exact
            pass mark <strong>varies by school, region and year</strong> — it often moves with the number of
            applicants and places available, so there is no single national cut-off. Always check the specific
            school&rsquo;s admissions criteria for your child&rsquo;s year of entry.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          {FAQ.map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-base font-semibold text-gray-900 mb-1">{q}</h3>
              <p className="text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">See your child&rsquo;s SAS before the real 11+</h2>
          <p className="text-indigo-100 mb-6 text-sm leading-relaxed max-w-md mx-auto">
            A free adaptive assessment across Verbal Reasoning, Non-Verbal Reasoning, English and Maths — with an
            instant standardised score and percentile. No account needed.
          </p>
          <Link href="/academic-assessment" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
            Start free assessment →
          </Link>
          <p className="mt-5 text-sm">
            <Link href="/11-plus" className="text-indigo-100 underline underline-offset-2 hover:text-white">More on 11+ preparation →</Link>
          </p>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
