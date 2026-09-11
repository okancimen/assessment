import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import BellCurve from '@/components/landing/BellCurve'
import CtaLink from '@/components/ui/CtaLink'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Sample Assessment Report — See What Your Child Gets',
  description: 'See a real example of an Eduentry assessment report — standardised score, percentile ranking, subject breakdown, topic analysis and personalised recommendations. No account needed.',
  alternates: { canonical: `${BASE_URL}/sample-report`, languages: { 'en-GB': `${BASE_URL}/sample-report`, 'x-default': `${BASE_URL}/sample-report` } },
  keywords: ['sample assessment report', 'what does eduentry report look like', 'free 11 plus results example', 'child assessment report example', 'standardised score report'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Sample Assessment Report — Eduentry',
    description: 'See exactly what your child\'s report looks like — standardised score, percentile, subject breakdown and recommendations.',
    url: `${BASE_URL}/sample-report`,
  },
}

// ── Fake data ─────────────────────────────────────────────────────────────────

const CHILD_NAME = 'Alex'
const CHILD_AGE = 10
const COMPLETED_DATE = '14 September 2026'
const OVERALL_SAS = 116

const SUBJECTS = [
  {
    key: 'english',
    label: 'English',
    sas: 109,
    raw: 21,
    total: 30,
    pct: 70,
    label_score: 'Average',
    color: 'text-yellow-500',
    bar: 'bg-blue-500',
    avgDifficulty: '5.8',
    topics: [
      { name: 'Comprehension', correct: 8, total: 10, pct: 80 },
      { name: 'Grammar & punctuation', correct: 7, total: 10, pct: 70 },
      { name: 'Vocabulary', correct: 6, total: 10, pct: 60 },
    ],
  },
  {
    key: 'mathematics',
    label: 'Mathematics',
    sas: 118,
    raw: 24,
    total: 30,
    pct: 80,
    label_score: 'Above Average',
    color: 'text-green-500',
    bar: 'bg-emerald-500',
    avgDifficulty: '6.4',
    topics: [
      { name: 'Arithmetic & number', correct: 9, total: 10, pct: 90 },
      { name: 'Fractions & decimals', correct: 7, total: 10, pct: 70 },
      { name: 'Word problems', correct: 8, total: 10, pct: 80 },
    ],
  },
  {
    key: 'verbal_reasoning',
    label: 'Verbal Reasoning',
    sas: 122,
    raw: 23,
    total: 30,
    pct: 77,
    label_score: 'Exceptional',
    color: 'text-blue-500',
    bar: 'bg-emerald-500',
    avgDifficulty: '7.1',
    topics: [
      { name: 'Word analogies', correct: 8, total: 10, pct: 80 },
      { name: 'Letter sequences', correct: 7, total: 10, pct: 70 },
      { name: 'Word relationships', correct: 8, total: 10, pct: 80 },
    ],
  },
  {
    key: 'nonverbal_reasoning',
    label: 'Non-Verbal Reasoning',
    sas: 114,
    raw: 21,
    total: 30,
    pct: 70,
    label_score: 'Above Average',
    color: 'text-green-500',
    bar: 'bg-emerald-500',
    avgDifficulty: '6.2',
    topics: [
      { name: 'Figure matrices', correct: 7, total: 10, pct: 70 },
      { name: 'Series & sequences', correct: 8, total: 10, pct: 80 },
      { name: 'Figure analogies', correct: 6, total: 10, pct: 60 },
    ],
  },
]

const BELL_SUBJECTS = [
  { score: 109, label: 'English',    color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 118, label: 'Maths',      color: '#0D9488', dotColor: '#0D9488' },
  { score: 122, label: 'Verbal',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score: 114, label: 'Non-Verbal', color: '#DB2777', dotColor: '#DB2777' },
]

const RECOMMENDATIONS = [
  { subject: 'English', tip: 'Focus on vocabulary building — read a variety of non-fiction texts (newspapers, science articles) to expand word range in context.' },
  { subject: 'Non-Verbal Reasoning', tip: 'Practise figure analogy questions specifically. Spend 10 minutes daily on pattern recognition puzzles to improve spatial reasoning.' },
  { subject: 'Mathematics', tip: 'Strong foundation — extend to multi-step word problems and mixed fractions to push towards the Exceptional band.' },
]

const INTL = {
  uk:   'Working above the expected standard. Likely competitive for grammar school or selective independent school entry.',
  us:   'Above grade level by approximately one year; top 15–20% nationally.',
  pisa: 'PISA Level 4–5 — strong performer, above the OECD average.',
  ib:   'Good candidate for the IB Diploma Programme including Higher Level subjects.',
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SampleReportPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNav />

      {/* Sample banner */}
      <div className="bg-indigo-600 text-white text-center text-sm font-medium py-2.5 px-4">
        This is a sample report for a fictional child — so you can see exactly what you&apos;ll get.{' '}
        <CtaLink href="/auth/register" label="sample_report_banner" className="underline underline-offset-2 hover:no-underline">
          Get your child&apos;s real report →
        </CtaLink>
      </div>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-10 space-y-8 w-full">

        <nav className="text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Sample Report</span>
        </nav>

        {/* Header card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 mb-3">
                Sample report · {CHILD_NAME}, age {CHILD_AGE}
              </div>
              <h1 className="text-2xl font-bold text-gray-900">{CHILD_NAME}&apos;s Assessment Results</h1>
              <p className="text-gray-500 text-sm mt-1">Completed {COMPLETED_DATE}</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-2xl px-6 py-4 text-center">
              <div className="text-3xl font-bold text-green-500">{OVERALL_SAS}</div>
              <div className="text-xs font-medium text-gray-500 mt-0.5">Overall score</div>
              <div className="text-sm font-semibold mt-1 text-green-500">Above Average</div>
            </div>
          </div>
        </div>

        {/* Bell curve */}
        <BellCurve subjects={BELL_SUBJECTS} title="Score distribution · Percentile ranking" hideScores />

        {/* International context */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">International context</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { flag: '🇬🇧', system: 'UK National Curriculum', text: INTL.uk,   color: 'border-blue-100 bg-blue-50' },
              { flag: '🇺🇸', system: 'US Grade Level',         text: INTL.us,   color: 'border-violet-100 bg-violet-50' },
              { flag: '🌍',  system: 'PISA (OECD)',            text: INTL.pisa, color: 'border-emerald-100 bg-emerald-50' },
              { flag: '🎓',  system: 'IB Programme',           text: INTL.ib,   color: 'border-amber-100 bg-amber-50' },
            ].map(({ flag, system, text, color }) => (
              <div key={system} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{flag}</span>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">{system}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Based on overall standardised score of {OVERALL_SAS} · indicative, not diagnostic
          </p>
        </section>

        {/* Subject scores */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject scores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBJECTS.map((s) => (
              <div key={s.key} className="bg-white rounded-2xl border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{s.label}</h3>
                  <span className={`text-xl font-bold ${s.color}`}>{s.sas}</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>{s.raw} correct of {s.total}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${s.bar}`} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Topics</p>
                  {s.topics.map((t) => (
                    <div key={t.name} className="flex items-center gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between text-xs text-gray-600 mb-0.5">
                          <span className="truncate capitalize">{t.name}</span>
                          <span className="flex-shrink-0 ml-2">{t.correct}/{t.total}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${t.pct >= 80 ? 'bg-emerald-400' : t.pct >= 60 ? 'bg-blue-400' : 'bg-amber-400'}`}
                            style={{ width: `${t.pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className={`text-sm font-medium ${s.color}`}>{s.label_score}</span>
                  <span className="text-xs text-gray-400">avg difficulty {s.avgDifficulty}/10</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Personalised recommendations</h2>
          <div className="space-y-3">
            {RECOMMENDATIONS.map((r) => (
              <div key={r.subject} className="bg-white rounded-2xl border border-gray-100 p-5 flex gap-4">
                <div className="w-2 rounded-full bg-indigo-200 flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">{r.subject}</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{r.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Score legend */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Score guide</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { range: '70–84',   label: 'Needs Support',  color: 'text-red-600',    bg: 'bg-red-50'    },
              { range: '85–94',   label: 'Below Average',  color: 'text-amber-600',  bg: 'bg-amber-50'  },
              { range: '95–109',  label: 'Average',        color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { range: '110–119', label: 'Above Average',  color: 'text-blue-600',   bg: 'bg-blue-50'   },
              { range: '120–130', label: 'Exceptional',    color: 'text-emerald-600',bg: 'bg-emerald-50'},
            ].map(({ range, label, color, bg }) => (
              <div key={range} className={`${bg} rounded-xl p-3 text-center`}>
                <div className={`text-sm font-bold ${color}`}>{range}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-2xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Get your child&apos;s real report — free</h2>
          <p className="text-indigo-200 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            This sample shows you the format — your child&apos;s report will have their actual scores,
            real topic breakdowns, and personalised recommendations based on their specific answers.
            Takes 60–90 minutes. No payment, ever.
          </p>
          <CtaLink
            href="/auth/register"
            label="sample_report_cta"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-base"
          >
            Start free assessment
          </CtaLink>
          <p className="text-indigo-300 text-xs mt-4">Free · No credit card · Results in 90 minutes</p>
        </div>

        {/* Methodology note */}
        <div className="border-t border-gray-100 pt-6 text-xs text-gray-400 space-y-1.5 leading-relaxed">
          <p className="font-medium text-gray-500">About this assessment</p>
          <p>
            Scores use a 2-Parameter Logistic IRT model with MAP estimation. The standardised score scale has a mean of 100 and standard deviation of 15, consistent with GL Assessment and CAT4 norms. Scores are clamped to 70–130. Results are indicative, not diagnostic.
          </p>
        </div>

      </main>

      <PublicFooter />
    </div>
  )
}
