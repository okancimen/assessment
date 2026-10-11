import type { Metadata } from 'next'
import Link from 'next/link'
import { ElevenPlusGuideLinks, GrammarAreaLinks } from '@/app/grammar-schools/cluster'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'

export const metadata: Metadata = {
  title: 'Free 11+ Practice Tests with Instant SAS Scores',
  description: 'Free adaptive 11+ practice tests in verbal and non-verbal reasoning, English and maths, with instant standardised scores on the GL Assessment scale.',
  keywords: '11 plus practice test free, 11+ verbal reasoning test, 11+ non-verbal reasoning free, free 11 plus test online, grammar school entrance test free, 11+ preparation UK, 11+ standardised score',
  alternates: { canonical: 'https://eduentry.com/11-plus', languages: { 'en-GB': 'https://eduentry.com/11-plus', 'x-default': 'https://eduentry.com/11-plus' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free 11+ Practice Tests 2026: Standardised Scores for Grammar School Prep',
    description: 'Adaptive 11+ practice tests with instant GL Assessment-scale standardised scores. Verbal reasoning, non-verbal reasoning, English and maths — free, no subscription.',
    url: 'https://eduentry.com/11-plus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 11+ Practice Tests 2026: Standardised Scores for Grammar School Prep',
    description: 'Adaptive 11+ practice tests with instant GL Assessment-scale standardised scores. Free — no subscription required.',
    images: ['https://eduentry.com/11-plus/opengraph-image'],
  },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
    { '@type': 'ListItem', position: 2, name: '11+ Preparation', item: 'https://eduentry.com/11-plus' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the 11+ exam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 11+ is a selective entrance examination taken by children in Year 6 (age 10–11) in England. It is used by grammar schools and some independent schools to assess academic ability. The exam typically covers verbal reasoning, non-verbal reasoning, English, and mathematics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this 11+ practice test free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Eduentry is completely free. Create a parent account, add your child\'s profile, and start the assessment immediately. There are no subscriptions, no hidden fees, and no payment required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Eduentry 11+ test cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eduentry assesses four subjects: Verbal Reasoning (analogies, codes, word relationships), Non-Verbal Reasoning (patterns, matrices, spatial reasoning), English (comprehension, grammar, spelling), and Mathematics (number, algebra, geometry). These match the content of GL Assessment and CEM 11+ papers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Eduentry different from other 11+ practice tests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eduentry uses adaptive testing powered by Item Response Theory (IRT) — the same methodology used in professional assessments like the Cognitive Abilities Test (CAT4). Questions automatically adjust in difficulty based on your child\'s responses, giving a more accurate measure of ability in fewer questions. You receive a standardised score (mean 100, SD 15) and a percentile ranking rather than just a pass/fail percentage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What age is the 11+ test for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 11+ exam is taken by children aged 10–11 (Year 6), but preparation typically starts in Year 4 or 5 (ages 8–10). Eduentry supports children aged 6–17, so you can start building verbal and non-verbal reasoning skills well before Year 6.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good score on the 11+?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most grammar schools require a standardised score of 111–121 or above (roughly the top 10–25% nationally), though this varies by school and region. On the Eduentry scale (mean 100, SD 15), a score of 115+ corresponds to approximately the 84th percentile or above.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which grammar school regions does Eduentry cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eduentry\'s content is aligned to the GL Assessment and CEM 11+ frameworks used across England, including Kent, Buckinghamshire, Lincolnshire, Trafford, Birmingham, Gloucestershire, and Wirral. It also covers content relevant to independent school Pre-Tests (ISEB).',
      },
    },
  ],
}

const COURSE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: '11+ Practice Test — Verbal & Non-Verbal Reasoning',
  description: 'Free adaptive 11+ practice tests covering verbal reasoning, non-verbal reasoning, English and mathematics. Standardised scores and percentile rankings for grammar school preparation.',
  url: 'https://eduentry.com/11-plus',
  provider: { '@type': 'EducationalOrganization', name: 'Eduentry', url: 'https://eduentry.com' },
  educationalLevel: 'Ages 9–11',
  isAccessibleForFree: true,
  courseMode: 'online',
  availableLanguage: 'English',
  about: { '@type': 'Thing', name: '11+ Grammar School Entrance Examination' },
}

const WEB_APP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Eduentry 11+ Practice Test',
  description: 'Free adaptive 11+ practice test covering verbal reasoning, non-verbal reasoning, English and maths — with standardised scores and percentile rankings on the GL Assessment scale.',
  url: 'https://eduentry.com/11-plus',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requires JavaScript. Compatible with all modern browsers.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
  },
  featureList: 'Adaptive testing, Standardised scores (mean 100 SD 15), Percentile rankings, Verbal reasoning, Non-verbal reasoning, English, Mathematics',
  inLanguage: 'en-GB',
}

const REGIONS = [
  'Kent', 'Buckinghamshire', 'Lincolnshire', 'Trafford', 'Birmingham',
  'Gloucestershire', 'Wirral', 'Sutton', 'Walsall', 'Wolverhampton',
]

const SUBJECTS = [
  {
    slug: 'verbal-reasoning',
    label: 'Verbal Reasoning',
    color: 'bg-indigo-50 border-indigo-100',
    accent: 'text-indigo-600',
    dot: 'bg-indigo-400',
    weight: 'Core 11+ subject',
    desc: 'Analogies, word codes, classifications, sequences, and logic. Tests the ability to think with words and identify relationships — a primary focus in GL Assessment and CEM papers.',
    skills: ['Word analogies', 'Letter and number codes', 'Odd word out', 'Word sequences', 'Logical deduction'],
  },
  {
    slug: 'non-verbal-reasoning',
    label: 'Non-Verbal Reasoning',
    color: 'bg-emerald-50 border-emerald-100',
    accent: 'text-emerald-600',
    dot: 'bg-emerald-400',
    weight: 'Core 11+ subject',
    desc: 'Pattern recognition, matrix completion, shape sequences, and spatial rotation. Measures abstract thinking independent of language — strongly weighted in CAT4 and most grammar school papers.',
    skills: ['Pattern completion', 'Matrix puzzles', 'Figure series', 'Spatial rotation', 'Shape codes'],
  },
  {
    slug: 'english',
    label: 'English',
    color: 'bg-rose-50 border-rose-100',
    accent: 'text-rose-600',
    dot: 'bg-rose-400',
    weight: 'Used in many 11+ papers',
    desc: 'Comprehension, grammar, spelling and punctuation. Assessed in most GL Assessment 11+ papers and all independent school pre-tests.',
    skills: ['Reading comprehension', 'Grammar', 'Spelling', 'Punctuation', 'Vocabulary'],
  },
  {
    slug: 'maths',
    label: 'Mathematics',
    color: 'bg-amber-50 border-amber-100',
    accent: 'text-amber-600',
    dot: 'bg-amber-400',
    weight: 'Used in many 11+ papers',
    desc: 'Number operations, algebra, fractions, geometry and data handling at KS2 level. Tested in GL Assessment, CEM, and ISEB pre-tests.',
    skills: ['Mental arithmetic', 'Fractions & percentages', 'Algebra', 'Geometry', 'Word problems'],
  },
]

const PREP_STAGES = [
  {
    year: 'Year 4',
    age: 'Ages 8–9',
    label: 'Build foundations',
    tip: 'No pressure yet. Focus on reading widely and mental arithmetic. Run Eduentry to get a baseline — understanding where your child naturally sits early removes last-minute panic.',
    color: 'border-gray-200 bg-white',
    dot: 'bg-gray-300',
  },
  {
    year: 'Year 5',
    age: 'Ages 9–10',
    label: 'Start targeted practice',
    tip: 'Introduce verbal and non-verbal reasoning as distinct skills. Use Eduentry to track progress across subjects and identify which areas need the most work.',
    color: 'border-indigo-100 bg-indigo-50/50',
    dot: 'bg-indigo-300',
  },
  {
    year: 'Year 6',
    age: 'Ages 10–11',
    label: 'Full preparation',
    tip: 'Timed practice, full papers, and regular standardised scores. Many grammar schools sit their 11+ in September–October — registration typically opens in the spring of Year 5.',
    color: 'border-indigo-200 bg-indigo-50',
    dot: 'bg-indigo-500',
  },
  {
    year: '11+ Exam',
    age: 'Sep–Oct, Year 6',
    label: 'The exam',
    tip: 'GL Assessment and CEM papers are typically sat in September or October of Year 6. Results arrive in October–November. Know your area\'s registration deadline.',
    color: 'border-indigo-300 bg-indigo-100',
    dot: 'bg-indigo-700',
  },
]

export default function ElevenPlusPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COURSE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">11+ Preparation</span>
        </nav>

        {/* Hero */}
        <section className="mb-20 lg:grid lg:grid-cols-[1fr_320px] lg:gap-12 lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-7 border border-indigo-100">
              Free · No subscription · Ages 9–11
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Find out exactly where your child stands —{' '}
              <span className="text-indigo-600">before the 11+ does</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Most practice tests give you a percentage. Eduentry gives you a standardised score on the same scale as GL Assessment and CAT4 — so you know whether your child is actually on track for grammar school entry.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <CtaLink href="/auth/register" label="11plus_hero_cta" className="bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100">
                Start free 11+ test
              </CtaLink>
              <Link href="/sample-report" className="text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-50 transition-colors border border-indigo-200">
                See sample report
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-400">
              <span>4 subjects covered</span>
              <span className="hidden sm:inline">·</span>
              <span>15 adaptive questions each</span>
              <span className="hidden sm:inline">·</span>
              <span>Results in under 45 min</span>
            </div>
          </div>

          {/* Score preview card */}
          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="bg-indigo-600 px-5 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Example result</span>
                <span className="flex items-center gap-1.5 text-xs text-indigo-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Instant · after test completion
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4">
                  <div className="text-xs font-medium text-indigo-600 mb-1">Verbal Reasoning</div>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-5xl font-bold text-gray-900 tabular-nums">118</span>
                    <div>
                      <div className="text-xs text-gray-400 leading-tight">standardised</div>
                      <div className="text-xs text-gray-400 leading-tight">score</div>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400">Score distribution</span>
                    <span className="font-semibold text-indigo-600">Top 12% nationally</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600" style={{ width: '79%' }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-300 mt-1.5">
                    <span>70</span>
                    <span>100 (avg)</span>
                    <span>130+</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                    <div className="text-xs text-emerald-600 font-medium mb-0.5">Grammar school</div>
                    <div className="text-sm font-bold text-emerald-800">✓ On track</div>
                  </div>
                  <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3">
                    <div className="text-xs text-indigo-600 font-medium mb-0.5">Percentile</div>
                    <div className="text-sm font-bold text-indigo-800">88th</div>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <div className="text-xs text-gray-400 mb-2 font-medium">Subject breakdown</div>
                  {[
                    { label: 'Analogies', pct: 85 },
                    { label: 'Word codes', pct: 70 },
                    { label: 'Sequences', pct: 92 },
                  ].map(({ label, pct }) => (
                    <div key={label} className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-gray-500 w-24 flex-shrink-0">{label}</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-300 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-gray-400 w-8 text-right">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-center text-gray-400 mt-2.5">
              GL Assessment scale · mean 100 · SD 15
            </p>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Not just a practice paper — a diagnostic</h2>
          <p className="text-gray-500 mb-8">The difference isn&rsquo;t free vs. paid. It&rsquo;s in what the score actually tells you.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 text-gray-400 font-medium bg-gray-50 border-b border-gray-100 w-[40%]" />
                  <th className="text-left p-4 text-gray-500 font-medium bg-gray-50 border-b border-gray-100">Typical online test</th>
                  <th className="text-left p-4 text-indigo-700 font-semibold bg-indigo-50 border-b border-indigo-100">Eduentry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ['Score format', '% correct only', 'Standardised score (mean 100, SD 15)'],
                  ['Difficulty', 'Fixed for every child', 'Adapts in real time using IRT'],
                  ['National context', '—', 'Percentile rank vs. peers nationally'],
                  ['Time per subject', '45–60 min full paper', '~10–15 min · 15 adaptive questions'],
                  ['Cost', 'Free to £15/month', 'Free, always — no subscription'],
                ].map(([feature, generic, ours]) => (
                  <tr key={feature} className="hover:bg-gray-50/50">
                    <td className="p-4 font-medium text-gray-700">{feature}</td>
                    <td className="p-4 text-gray-400">{generic}</td>
                    <td className="p-4 text-indigo-700 font-semibold bg-indigo-50/40">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What's covered */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Four subjects, one adaptive assessment</h2>
          <p className="text-gray-500 mb-8">Covers all four components tested in GL Assessment, CEM, and ISEB pre-tests.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {SUBJECTS.map(({ slug, label, color, accent, dot, weight, desc, skills }) => (
              <div key={slug} className={`rounded-2xl border p-6 ${color}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{label}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/70 border border-white ${accent}`}>{weight}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1 mb-4">
                  {skills.map(s => (
                    <li key={s} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href={`/subjects/${slug}`} className={`text-xs font-medium hover:underline ${accent}`}>
                  Full {label} guide →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Score guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What score does your child need?</h2>
          <p className="text-gray-500 mb-6">Grammar schools typically require scores in the top 10–25% nationally. On the Eduentry scale:</p>
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Eduentry score</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Percentile</th>
                  <th className="text-left p-4 font-semibold text-gray-700">11+ indication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {(([
                  ['125+', 'Top 5%', 'Highly competitive — strong selective school candidate', true],
                  ['115–124', 'Top 16%', 'Grammar school range in most areas', true],
                  ['110–114', 'Top 25%', 'Borderline — depends on school and region', false],
                  ['100–109', '37th–63rd', 'Average — continued preparation recommended', false],
                  ['<100', 'Below 37th', 'Focus on core skills before 11+ entry', false],
                ] as [string, string, string, boolean][])).map(([score, pct, note, highlight]) => (
                  <tr key={score} className={highlight ? 'bg-emerald-50/60 hover:bg-emerald-50' : 'hover:bg-gray-50/50'}>
                    <td className={`p-4 font-mono font-bold ${highlight ? 'text-emerald-700' : 'text-gray-900'}`}>{score}</td>
                    <td className={`p-4 ${highlight ? 'text-emerald-600 font-medium' : 'text-gray-600'}`}>{pct}</td>
                    <td className={`p-4 ${highlight ? 'text-emerald-700' : 'text-gray-500'}`}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Score thresholds vary by grammar school, year, and region. Always check your target school&rsquo;s pass mark.</p>
        </section>

        {/* Prep timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">When should you start preparing?</h2>
          <p className="text-gray-500 mb-8">Most families start too late. Here&rsquo;s what each year of preparation looks like.</p>
          <div className="relative">
            <div className="hidden sm:block absolute top-6 left-6 right-6 h-px bg-gray-200" />
            <div className="grid sm:grid-cols-4 gap-4">
              {PREP_STAGES.map(({ year, age, label, tip, color, dot }, i) => (
                <div key={year} className={`relative rounded-2xl border p-5 ${color}`}>
                  <div className={`w-3 h-3 rounded-full mb-4 ${dot} ring-4 ring-white`} />
                  <div className="text-xs text-gray-400 mb-0.5">{age}</div>
                  <div className="font-bold text-gray-900 mb-1">{year}</div>
                  <div className={`text-xs font-semibold mb-3 ${i >= 2 ? 'text-indigo-600' : 'text-gray-500'}`}>{label}</div>
                  <p className="text-xs text-gray-500 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Grammar school regions covered</h2>
          <p className="text-gray-500 mb-5">Content is aligned to GL Assessment and CEM 11+ frameworks used across England:</p>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map(r => (
              <span key={r} className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 text-sm">{r}</span>
            ))}
            <span className="bg-gray-100 text-gray-500 rounded-lg px-3 py-1.5 text-sm italic">+ all other grammar school areas</span>
          </div>
        </section>

        {/* FAQ — accordion */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-2">
            {FAQ_SCHEMA.mainEntity.map(({ name, acceptedAnswer }) => (
              <details key={name} className="group border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{name}</span>
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                  <p className="text-sm text-gray-500 leading-relaxed">{acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 11+ guides */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">11+ guides</h2>
          <ElevenPlusGuideLinks />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Grammar schools by area</h2>
          <p className="text-sm text-gray-600 mb-5">
            Target scores differ by area. See the <Link href="/grammar-schools" className="text-indigo-600 underline">grammar schools hub</Link> or pick your area:
          </p>
          <GrammarAreaLinks />
        </section>

        {/* CTA */}
        <section className="bg-indigo-600 rounded-2xl p-10 sm:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-white mb-3">Start your child&rsquo;s free 11+ practice test</h2>
            <p className="text-indigo-200 mb-8 text-lg leading-relaxed">
              Verbal reasoning, non-verbal reasoning, English and maths. Get a standardised score and percentile ranking in under 45 minutes — free, no subscription.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaLink href="/auth/register" label="11plus_bottom_cta" className="bg-white text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                Start free 11+ test
              </CtaLink>
              <Link href="/methodology" className="text-indigo-200 px-7 py-3.5 rounded-xl font-semibold hover:text-white hover:bg-indigo-700 transition-colors border border-indigo-500">
                How scoring works
              </Link>
            </div>
          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  )
}
