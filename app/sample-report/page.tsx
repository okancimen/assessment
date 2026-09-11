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
    description: 'See exactly what your child\'s report looks like — standardised score, subject breakdown and personalised recommendations.',
    url: `${BASE_URL}/sample-report`,
  },
}

// ── Data ──────────────────────────────────────────────────────────────────────

const CHILD_NAME = 'Alex'
const CHILD_AGE  = 10
const COMPLETED_DATE = '14 September 2026'
const OVERALL_SAS    = 116
const PERCENTILE     = 86

const SUBJECTS = [
  {
    key: 'english',
    label: 'English',
    sas: 109,
    raw: 21,
    total: 30,
    pct: 70,
    labelScore: 'Average',
    scoreColor: 'text-yellow-600',
    borderColor: 'border-t-indigo-400',
    dotColor: 'bg-indigo-400',
    avgDifficulty: '5.8',
    topics: [
      { name: 'Comprehension',       correct: 8, total: 10, pct: 80 },
      { name: 'Grammar & punctuation', correct: 7, total: 10, pct: 70 },
      { name: 'Vocabulary',          correct: 6, total: 10, pct: 60 },
    ],
  },
  {
    key: 'mathematics',
    label: 'Mathematics',
    sas: 84,
    raw: 14,
    total: 30,
    pct: 47,
    labelScore: 'Needs Support',
    scoreColor: 'text-red-600',
    borderColor: 'border-t-teal-400',
    dotColor: 'bg-teal-400',
    avgDifficulty: '5.2',
    topics: [
      { name: 'Arithmetic & number', correct: 6, total: 10, pct: 60 },
      { name: 'Fractions & decimals', correct: 4, total: 10, pct: 40 },
      { name: 'Word problems',        correct: 4, total: 10, pct: 40 },
    ],
  },
  {
    key: 'verbal_reasoning',
    label: 'Verbal Reasoning',
    sas: 122,
    raw: 23,
    total: 30,
    pct: 77,
    labelScore: 'Exceptional',
    scoreColor: 'text-violet-600',
    borderColor: 'border-t-violet-400',
    dotColor: 'bg-violet-400',
    avgDifficulty: '7.1',
    topics: [
      { name: 'Word analogies',       correct: 8, total: 10, pct: 80 },
      { name: 'Letter sequences',     correct: 7, total: 10, pct: 70 },
      { name: 'Word relationships',   correct: 8, total: 10, pct: 80 },
    ],
  },
  {
    key: 'nonverbal_reasoning',
    label: 'Non-Verbal Reasoning',
    sas: 114,
    raw: 21,
    total: 30,
    pct: 70,
    labelScore: 'Above Average',
    scoreColor: 'text-emerald-600',
    borderColor: 'border-t-pink-400',
    dotColor: 'bg-pink-400',
    avgDifficulty: '6.2',
    topics: [
      { name: 'Figure matrices',  correct: 7, total: 10, pct: 70 },
      { name: 'Series & sequences', correct: 8, total: 10, pct: 80 },
      { name: 'Figure analogies', correct: 6, total: 10, pct: 60 },
    ],
  },
]

const BELL_SUBJECTS = [
  { score: 109, label: 'English',    color: '#4F46E5', dotColor: '#4F46E5' },
  { score: 84,  label: 'Maths',      color: '#0D9488', dotColor: '#0D9488' },
  { score: 122, label: 'Verbal',     color: '#7C3AED', dotColor: '#7C3AED' },
  { score: 114, label: 'Non-Verbal', color: '#DB2777', dotColor: '#DB2777' },
]

const RECOMMENDATIONS = [
  {
    subject: 'English',
    subjectColor: 'text-indigo-700',
    subjectBg: 'bg-indigo-50',
    priority: 'Focus Area',
    priorityColor: 'text-amber-700 bg-amber-50 border border-amber-200',
    currentSAS: 109,
    targetSAS: 115,
    scorePotential: '+5–7 SAS',
    headline: 'Build vocabulary through wide reading',
    rationale: 'Vocabulary is the weakest topic at 60% — it\'s dragging the English score below its potential. Comprehension and grammar are solid; this is a targeted gap.',
    actions: [
      'Read one non-fiction article daily (BBC Bitesize, The Week Junior) — unfamiliar words in context stick better than lists',
      'Keep a vocabulary notebook: 5 new words per week with definitions and one sentence each',
      'Practice inference-style comprehension questions — not just "find the answer" but "what does the author imply"',
    ],
  },
  {
    subject: 'Non-Verbal Reasoning',
    subjectColor: 'text-pink-700',
    subjectBg: 'bg-pink-50',
    priority: 'Quick Win',
    priorityColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200',
    currentSAS: 114,
    targetSAS: 121,
    scorePotential: '+5–8 SAS',
    headline: 'Fix figure analogies — one weak spot, big impact',
    rationale: 'Figure analogies scored 60% while matrices and series scored 70–80%. This single question type is the bottleneck. Targeting it specifically can push Non-Verbal Reasoning into the Exceptional band.',
    actions: [
      'Practise figure analogy questions in isolation for 10 minutes daily — not mixed NVR drills',
      'For each question, describe the transformation in words before looking at the options ("it rotated 90° and gained a dot")',
      'Use physical spatial puzzles — Tangrams or pattern blocks — to build intuitive spatial reasoning',
    ],
  },
  {
    subject: 'Mathematics',
    subjectColor: 'text-teal-700',
    subjectBg: 'bg-teal-50',
    priority: 'Focus Area',
    priorityColor: 'text-red-700 bg-red-50 border border-red-200',
    currentSAS: 84,
    targetSAS: 95,
    scorePotential: '+8–12 SAS',
    headline: 'Build number foundations before moving to harder topics',
    rationale: 'All three topics are below 60% — fractions and word problems at 40% show that gaps in core number sense are blocking progress. The priority is strengthening fundamentals, not drilling harder questions.',
    actions: [
      'Spend 15 minutes daily on times tables and mental arithmetic until all facts to 12×12 are instant — this unlocks fractions and word problems',
      'Use visual fraction models (fraction bars, pizza diagrams) before introducing written procedures — the concept must come before the algorithm',
      'Solve one word problem daily: circle the numbers, underline what is being asked, draw a picture before writing any calculation',
    ],
  },
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PublicNav />

      {/* Sample banner */}
      <div className="bg-indigo-600 text-white text-center text-sm font-medium py-2.5 px-4">
        Sample report for a fictional child — so you can see exactly what you&apos;ll get.{' '}
        <CtaLink href="/auth/register" label="sample_report_banner" className="underline underline-offset-2 hover:no-underline font-semibold">
          Get your child&apos;s real report →
        </CtaLink>
      </div>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-6 w-full">

        <nav className="text-sm text-gray-400">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Sample Report</span>
        </nav>

        {/* ── Hero header ── */}
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500" />
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between flex-wrap gap-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-3 py-1 mb-4">
                  Sample report · {CHILD_NAME}, age {CHILD_AGE}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{CHILD_NAME}&apos;s Assessment Results</h1>
                <p className="text-gray-400 text-sm mt-1.5">Completed {COMPLETED_DATE} · 60 questions · 4 subjects</p>

                {/* Quick stats row */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {[
                    { label: 'Verbal Reasoning', value: '122', note: 'Exceptional', color: 'text-violet-600' },
                    { label: 'Mathematics',      value: '84',  note: 'Needs Support', color: 'text-red-600'  },
                    { label: 'Non-Verbal',        value: '114', note: 'Above Average', color: 'text-emerald-600' },
                    { label: 'English',           value: '109', note: 'Average',       color: 'text-indigo-600' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overall score circle */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28">
                  <svg className="w-28 h-28 -rotate-90" viewBox="0 0 112 112">
                    <circle cx="56" cy="56" r="48" fill="none" stroke="#f0fdf4" strokeWidth="8" />
                    <circle cx="56" cy="56" r="48" fill="none" stroke="#22c55e" strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 48}`}
                      strokeDashoffset={`${2 * Math.PI * 48 * (1 - (OVERALL_SAS - 70) / 60)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{OVERALL_SAS}</span>
                    <span className="text-xs text-gray-400 mt-0.5">Overall</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-emerald-600">Above Average</div>
                  <div className="text-xs text-gray-400">Top {100 - PERCENTILE}% for age {CHILD_AGE}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Key insights ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: '🎯',
              label: 'Grammar school ready',
              text: 'Score of 116 exceeds the SAS 111 threshold for most grammar school areas in England.',
              bg: 'bg-emerald-50 border-emerald-100',
            },
            {
              icon: '⚡',
              label: 'Clear strength: Verbal',
              text: 'SAS 122 in Verbal Reasoning places Alex in the top 8% nationally for age 10.',
              bg: 'bg-violet-50 border-violet-100',
            },
            {
              icon: '⚠️',
              label: 'Maths needs attention',
              text: 'SAS 84 in Mathematics is in the Needs Support band. Fractions and word problems scored 40% — focused daily practice can close this gap.',
              bg: 'bg-red-50 border-red-100',
            },
          ].map((c) => (
            <div key={c.label} className={`rounded-2xl border p-5 ${c.bg}`}>
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-sm font-semibold text-gray-900 mb-1">{c.label}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>

        {/* ── Bell curve ── */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6">
            <BellCurve subjects={BELL_SUBJECTS} title="Score distribution · Percentile ranking" overallScore={OVERALL_SAS} />
          </div>
        </div>

        {/* ── International context ── */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">International context</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { flag: '🇬🇧', system: 'UK National Curriculum', text: INTL.uk,   color: 'border-blue-100 bg-blue-50' },
              { flag: '🇺🇸', system: 'US Grade Level',          text: INTL.us,   color: 'border-violet-100 bg-violet-50' },
              { flag: '🌍',  system: 'PISA (OECD)',             text: INTL.pisa, color: 'border-emerald-100 bg-emerald-50' },
              { flag: '🎓',  system: 'IB Programme',            text: INTL.ib,   color: 'border-amber-100 bg-amber-50' },
            ].map(({ flag, system, text, color }) => (
              <div key={system} className={`rounded-2xl border p-5 ${color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{flag}</span>
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

        {/* ── Subject scores ── */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Subject scores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBJECTS.map((s) => (
              <div key={s.key} className={`bg-white rounded-2xl border-t-4 border border-gray-100 ${s.borderColor} p-5 shadow-sm`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${s.dotColor}`} />
                    <h3 className="font-semibold text-gray-900">{s.label}</h3>
                  </div>
                  <span className={`text-2xl font-bold ${s.scoreColor}`}>{s.sas}</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                    <span>{s.raw} correct of {s.total}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${s.pct >= 80 ? 'bg-emerald-400' : s.pct >= 65 ? 'bg-blue-400' : 'bg-amber-400'}`}
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Topics</p>
                  {s.topics.map((t) => (
                    <div key={t.name}>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span className="capitalize">{t.name}</span>
                        <span className="font-medium">{t.correct}/{t.total}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${t.pct >= 80 ? 'bg-emerald-400' : t.pct >= 60 ? 'bg-blue-400' : 'bg-amber-400'}`}
                          style={{ width: `${t.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className={`text-sm font-semibold ${s.scoreColor}`}>{s.labelScore}</span>
                  <span className="text-xs text-gray-400">avg difficulty {s.avgDifficulty}/10</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Personalised recommendations ── */}
        <section>
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Personalised recommendations</h2>
            <span className="text-xs text-gray-400">Based on topic-level performance</span>
          </div>
          <div className="space-y-4">
            {RECOMMENDATIONS.map((r, i) => (
              <div key={r.subject} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Card header */}
                <div className={`px-6 pt-5 pb-4 ${r.subjectBg}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">#{i + 1}</span>
                        <span className={`text-xs font-bold uppercase tracking-widest ${r.subjectColor}`}>{r.subject}</span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900">{r.headline}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${r.priorityColor}`}>
                        {r.priority}
                      </span>
                      <span className="text-xs font-semibold text-gray-500 bg-white border border-gray-200 px-2.5 py-1 rounded-full">
                        {r.scorePotential}
                      </span>
                    </div>
                  </div>
                  {/* Score arrow */}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-sm font-bold text-gray-500">SAS {r.currentSAS}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <span className="text-sm font-bold text-emerald-600">SAS {r.targetSAS}</span>
                    <span className="text-xs text-gray-400">target with focused practice</span>
                  </div>
                </div>

                {/* Rationale */}
                <div className="px-6 pt-4 pb-2">
                  <p className="text-sm text-gray-600 leading-relaxed">{r.rationale}</p>
                </div>

                {/* Action steps */}
                <div className="px-6 pb-5 pt-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Action plan</p>
                  <ul className="space-y-2.5">
                    {r.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[10px] font-bold text-gray-500">{j + 1}</span>
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Score legend ── */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-semibold text-gray-900 mb-4">Score guide</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { range: '70–84',   label: 'Needs Support',  color: 'text-red-600',     bg: 'bg-red-50'     },
              { range: '85–94',   label: 'Below Average',  color: 'text-amber-600',   bg: 'bg-amber-50'   },
              { range: '95–109',  label: 'Average',        color: 'text-indigo-600',  bg: 'bg-indigo-50'  },
              { range: '110–119', label: 'Above Average',  color: 'text-blue-600',    bg: 'bg-blue-50'    },
              { range: '120–130', label: 'Exceptional',    color: 'text-emerald-600', bg: 'bg-emerald-50' },
            ].map(({ range, label, color, bg }) => (
              <div key={range} className={`${bg} rounded-xl p-3 text-center`}>
                <div className={`text-sm font-bold ${color}`}>{range}</div>
                <div className="text-xs text-gray-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="bg-indigo-600 rounded-3xl p-10 sm:p-12 text-center text-white">
          <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 rounded-full px-4 py-1.5 mb-5">
            Free · No credit card · Results in 90 minutes
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Get your child&apos;s real report — free</h2>
          <p className="text-indigo-200 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            This sample shows you the format. Your child&apos;s report will have their actual scores,
            real topic breakdowns, and specific recommendations based on their answers.
          </p>
          <CtaLink
            href="/auth/register"
            label="sample_report_cta"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors text-base"
          >
            Start free assessment →
          </CtaLink>
        </div>

        {/* ── Methodology ── */}
        <div className="border-t border-gray-200 pt-6 text-xs text-gray-400 space-y-1.5 leading-relaxed">
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
