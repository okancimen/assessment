import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/en'

export const metadata = buildSampleReportMetadata(content)

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
    { '@type': 'ListItem', position: 2, name: 'Sample Report', item: 'https://eduentry.com/sample-report' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: content.faq.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function SampleReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <PublicNav />

      {/* Context-setting intro */}
      <div className="bg-white border-b border-gray-100 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 rounded-full px-3 py-1 text-xs font-semibold mb-5">
            Sample report · fictional child
          </div>
          <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 lg:items-end mb-8">
            <div>
              <p className="text-sm text-indigo-600 font-semibold mb-2">Eduentry — free adaptive assessment for ages 6–17</p>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">This is the report your child gets — from a free, 45-minute online assessment</h1>
              <p className="text-gray-500 leading-relaxed max-w-xl">
                Eduentry measures English, Maths, Verbal Reasoning, and Non-Verbal Reasoning, then produces a standardised score benchmarked against international peers. Below is a sample — Alex is fictional, but the format and depth are exactly what you receive after the real test.
              </p>
            </div>
            <CtaLink href="/academic-assessment" label="sample_report_intro_cta" className="mt-6 lg:mt-0 shrink-0 inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm">
              Start free assessment →
            </CtaLink>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                n: '1',
                title: 'Overall score & percentile',
                body: 'Your child\'s standardised score (mean 100, SD 15) and how they rank against international peers. A score of 100 is exactly average for their age group.',
              },
              {
                n: '2',
                title: 'Four subjects, scored independently',
                body: 'English, Maths, Verbal Reasoning, and Non-Verbal Reasoning are each measured separately — so you can see exactly which areas are strong and which need work.',
              },
              {
                n: '3',
                title: 'Personalised action plan',
                body: 'For each subject, the report includes 3 specific practice steps based on your child\'s exact topic scores — not generic advice.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{n}</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SampleReport content={content} />
      <PublicFooter />
    </div>
  )
}
