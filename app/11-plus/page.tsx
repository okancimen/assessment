import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export const metadata: Metadata = {
  title: 'Free 11+ Practice Test — Verbal & Non-Verbal Reasoning for Children',
  description: 'Free 11+ practice tests for verbal reasoning, non-verbal reasoning, English and maths. Adaptive questions, standardised scores, and percentile rankings. Used by UK families preparing for grammar school and independent school entry.',
  keywords: '11 plus practice test free, 11+ verbal reasoning test, 11+ non-verbal reasoning free, free 11 plus test online, grammar school entrance test free, 11+ preparation UK',
  alternates: { canonical: 'https://eduentry.com/11-plus', languages: { 'en-GB': 'https://eduentry.com/11-plus', 'x-default': 'https://eduentry.com/11-plus' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free 11+ Practice Test — Verbal & Non-Verbal Reasoning',
    description: 'Adaptive 11+ practice tests with standardised scores and percentile rankings. Verbal reasoning, non-verbal reasoning, English and maths. Free — no subscription required.',
    url: 'https://eduentry.com/11-plus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 11+ Practice Test — Verbal & Non-Verbal Reasoning',
    description: 'Adaptive 11+ practice tests with standardised scores and percentile rankings. Free — no subscription required.',
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

const REGIONS = [
  'Kent', 'Buckinghamshire', 'Lincolnshire', 'Trafford', 'Birmingham',
  'Gloucestershire', 'Wirral', 'Sutton', 'Walsall', 'Wolverhampton',
]

const SUBJECTS = [
  {
    slug: 'verbal-reasoning',
    label: 'Verbal Reasoning',
    color: 'bg-indigo-50 border-indigo-100 text-indigo-700',
    accent: 'text-indigo-600',
    weight: 'Core 11+ subject',
    desc: 'Analogies, word codes, classifications, sequences, and logic. Tests the ability to think with words and identify relationships — a primary focus in GL Assessment and CEM papers.',
    skills: ['Word analogies', 'Letter and number codes', 'Odd word out', 'Word sequences', 'Logical deduction'],
  },
  {
    slug: 'non-verbal-reasoning',
    label: 'Non-Verbal Reasoning',
    color: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    accent: 'text-emerald-600',
    weight: 'Core 11+ subject',
    desc: 'Pattern recognition, matrix completion, shape sequences, and spatial rotation. Measures abstract thinking independent of language — strongly weighted in CAT4 and most grammar school papers.',
    skills: ['Pattern completion', 'Matrix puzzles', 'Figure series', 'Spatial rotation', 'Shape codes'],
  },
  {
    slug: 'english',
    label: 'English',
    color: 'bg-rose-50 border-rose-100 text-rose-700',
    accent: 'text-rose-600',
    weight: 'Used in many 11+ papers',
    desc: 'Comprehension, grammar, spelling and punctuation. Assessed in most GL Assessment 11+ papers and all independent school pre-tests.',
    skills: ['Reading comprehension', 'Grammar', 'Spelling', 'Punctuation', 'Vocabulary'],
  },
  {
    slug: 'maths',
    label: 'Mathematics',
    color: 'bg-amber-50 border-amber-100 text-amber-700',
    accent: 'text-amber-600',
    weight: 'Used in many 11+ papers',
    desc: 'Number operations, algebra, fractions, geometry and data handling at KS2 level. Tested in GL Assessment, CEM, and ISEB pre-tests.',
    skills: ['Mental arithmetic', 'Fractions & percentages', 'Algebra', 'Geometry', 'Word problems'],
  },
]

export default function ElevenPlusPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(COURSE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">11+ Preparation</span>
        </nav>

        {/* Hero */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-indigo-100">
            Free · No registration required to try · Ages 9–11
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Free 11+ practice test —<br />
            <span className="text-indigo-600">verbal & non-verbal reasoning</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-8">
            Adaptive 11+ practice tests for verbal reasoning, non-verbal reasoning, English, and maths. Get a standardised score and percentile ranking — not just a percentage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/auth/register" prefetch={false} className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg shadow-md shadow-indigo-100">
              Start free 11+ test
            </Link>
            <Link href="/methodology" className="text-gray-600 px-8 py-4 rounded-xl font-semibold hover:text-gray-900 hover:bg-gray-50 transition-colors border border-gray-200 text-lg">
              How scoring works
            </Link>
          </div>
        </div>

        {/* What's covered */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What does the Eduentry 11+ test cover?</h2>
          <p className="text-gray-500 mb-8">All four subjects tested in GL Assessment, CEM, and ISEB pre-tests.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {SUBJECTS.map(({ slug, label, color, accent, weight, desc, skills }) => (
              <div key={slug} className={`rounded-2xl border p-6 ${color.split(' ').slice(0, 2).join(' ')} border-opacity-60`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 text-lg">{label}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/60 ${accent}`}>{weight}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1">
                  {skills.map(s => (
                    <li key={s} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent.replace('text-', 'bg-')}`} />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link href={`/subjects/${slug}`} className={`text-xs font-medium mt-4 block hover:underline ${accent}`}>
                  Full {label} guide →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Why adaptive */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why adaptive testing is better for 11+ prep</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { title: 'Accurate ability estimate', body: 'Questions adjust to your child\'s level in real time, pinpointing their exact ability — not just whether they pass or fail a fixed paper.' },
              { title: 'Standardised score', body: 'You get a score on the same scale (mean 100, SD 15) used by CAT4, NFER, and most grammar schools — so you know exactly where your child stands.' },
              { title: 'Percentile ranking', body: 'See which percentile your child is in nationally and internationally — so you know if they\'re on track for selective school entry.' },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Score guide */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">What score do you need for grammar school?</h2>
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
                {[
                  ['125+', 'Top 5%', 'Highly competitive — strong selective school candidate'],
                  ['115–124', 'Top 16%', 'Grammar school range in most areas'],
                  ['110–114', 'Top 25%', 'Borderline — depends on school and region'],
                  ['100–109', '37th–63rd', 'Average — continued preparation recommended'],
                  ['<100', 'Below 37th', 'Focus on core skills before 11+ entry'],
                ].map(([score, pct, note]) => (
                  <tr key={score} className="hover:bg-gray-50/50">
                    <td className="p-4 font-mono font-semibold text-gray-900">{score}</td>
                    <td className="p-4 text-gray-600">{pct}</td>
                    <td className="p-4 text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Score thresholds vary by grammar school, year, and region. Always check your target school&rsquo;s pass mark.</p>
        </section>

        {/* Regions */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Grammar school regions covered</h2>
          <p className="text-gray-500 mb-5">Content is aligned to GL Assessment and CEM 11+ frameworks used across England:</p>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map(r => (
              <span key={r} className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1.5 text-sm">{r}</span>
            ))}
            <span className="bg-gray-100 text-gray-500 rounded-lg px-3 py-1.5 text-sm italic">+ all other grammar school areas</span>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {FAQ_SCHEMA.mainEntity.map(({ name, acceptedAnswer }) => (
              <div key={name} className="border-b border-gray-100 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Start your child&rsquo;s free 11+ practice test</h2>
          <p className="text-indigo-200 mb-8 text-lg">Verbal reasoning, non-verbal reasoning, English and maths. Instant standardised score.</p>
          <Link href="/auth/register" prefetch={false} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Start free 11+ test
          </Link>
        </section>

      </main>

      <PublicFooter />
    </div>
  )
}
