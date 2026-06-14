import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

const SUBJECTS = {
  english: {
    title: 'Free English Assessment for Children',
    headline: 'English',
    tagline: 'Comprehension, grammar, spelling and vocabulary — benchmarked internationally',
    description: 'Free adaptive English assessment for children aged 6–17. Covers comprehension, grammar, spelling, punctuation, and vocabulary. Standardised scores benchmarked to UK National Curriculum and Cambridge IGCSE.',
    color: 'bg-rose-50 text-rose-700 border-rose-100',
    accent: 'text-rose-600',
    skills: [
      { name: 'Reading comprehension', detail: 'Understanding and interpreting written passages across fiction and non-fiction genres' },
      { name: 'Grammar', detail: 'Parts of speech, sentence structure, tenses, and clause types' },
      { name: 'Spelling', detail: 'Common and complex spelling patterns, homophones, prefixes and suffixes' },
      { name: 'Punctuation', detail: 'Commas, apostrophes, speech marks, colons, and semicolons' },
      { name: 'Vocabulary', detail: 'Word meanings, synonyms, antonyms, and contextual usage' },
    ],
    benchmarks: ['UK National Curriculum KS1–KS4', 'Cambridge IGCSE English', 'PISA reading literacy', 'IB English Language & Literature'],
    ageGroups: [
      { range: 'Ages 6–7 (KS1)', focus: 'Phonics, simple sentences, basic punctuation' },
      { range: 'Ages 8–11 (KS2)', focus: 'Reading comprehension, paragraphing, complex punctuation' },
      { range: 'Ages 11–14 (KS3)', focus: 'Literary analysis, formal writing, advanced grammar' },
      { range: 'Ages 14–17 (KS4)', focus: 'Critical analysis, rhetoric, GCSE-level language skills' },
    ],
    longTailKeywords: 'free English test for children UK, English comprehension test for kids, KS2 English assessment free',
  },
  maths: {
    title: 'Free Maths Assessment for Children',
    headline: 'Mathematics',
    tagline: 'Number, algebra, geometry and data handling — from KS1 to GCSE level',
    description: 'Free adaptive maths assessment for children aged 6–17. Covers number operations, algebra, geometry, fractions, and data handling. Standardised scores benchmarked to UK National Curriculum and PISA numeracy.',
    color: 'bg-amber-50 text-amber-700 border-amber-100',
    accent: 'text-amber-600',
    skills: [
      { name: 'Number operations', detail: 'Addition, subtraction, multiplication, division, order of operations' },
      { name: 'Algebra', detail: 'Equations, expressions, sequences, functions, and simultaneous equations' },
      { name: 'Geometry', detail: 'Shape properties, angles, area, perimeter, volume, and transformations' },
      { name: 'Fractions & percentages', detail: 'Equivalent fractions, operations with fractions, decimals, and percentages' },
      { name: 'Data handling', detail: 'Mean, median, mode, probability, charts, and statistical interpretation' },
    ],
    benchmarks: ['UK National Curriculum KS1–KS4', 'PISA mathematical literacy', 'US Common Core Mathematics', 'IB Mathematics'],
    ageGroups: [
      { range: 'Ages 6–7 (KS1)', focus: 'Counting, basic addition and subtraction, simple shapes' },
      { range: 'Ages 8–11 (KS2)', focus: 'Times tables, fractions, written methods, basic algebra' },
      { range: 'Ages 11–14 (KS3)', focus: 'Algebra, ratio, geometry, statistics, negative numbers' },
      { range: 'Ages 14–17 (KS4)', focus: 'Quadratics, trigonometry, probability, GCSE-level problem solving' },
    ],
    longTailKeywords: 'free maths test for children UK, KS2 maths assessment, free numeracy test for kids',
  },
  'verbal-reasoning': {
    title: 'Free Verbal Reasoning Test for Children',
    headline: 'Verbal Reasoning',
    tagline: 'Problem-solving with words — essential for 11+, grammar school, and independent school entry',
    description: 'Free adaptive verbal reasoning test for children aged 7–16. Covers analogies, word relationships, sequencing, classification, and logic. Used in 11+ and grammar school entrance examinations across the UK.',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    accent: 'text-indigo-600',
    skills: [
      { name: 'Word analogies', detail: 'Identifying relationships between pairs of words (e.g. hot : cold :: up : __)' },
      { name: 'Classification', detail: 'Identifying the odd word out from a group based on meaning or category' },
      { name: 'Word sequences', detail: 'Completing sequences of words following a logical pattern' },
      { name: 'Codes', detail: 'Decoding letter and number codes based on given examples' },
      { name: 'Logic and deduction', detail: 'Drawing conclusions from sets of statements' },
    ],
    benchmarks: ['GL Assessment 11+', 'CEM 11+ (Durham University)', 'Independent school entrance exams (ISEB)', 'Cognitive Abilities Test (CAT4)'],
    ageGroups: [
      { range: 'Ages 7–8', focus: 'Simple word relationships, basic analogies' },
      { range: 'Ages 9–10', focus: 'Word codes, classification, sequences' },
      { range: 'Ages 11–12', focus: 'Full 11+ verbal reasoning — analogies, codes, logic' },
      { range: 'Ages 13–16', focus: 'Advanced logic, abstract verbal reasoning, CAT4 level' },
    ],
    longTailKeywords: 'free verbal reasoning test 11+ UK, verbal reasoning practice test children, free 11+ verbal reasoning',
  },
  'non-verbal-reasoning': {
    title: 'Free Non-Verbal Reasoning Test for Children',
    headline: 'Non-Verbal Reasoning',
    tagline: 'Pattern recognition, spatial reasoning, and abstract thinking — language-independent',
    description: 'Free adaptive non-verbal reasoning test for children aged 7–16. Covers pattern recognition, matrices, sequences, and spatial reasoning. Assesses cognitive ability independently of language skills.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    accent: 'text-emerald-600',
    skills: [
      { name: 'Pattern completion', detail: 'Identifying and continuing visual patterns using shapes and symbols' },
      { name: 'Matrix reasoning', detail: 'Completing a 3×3 grid of shapes where one piece is missing' },
      { name: 'Sequences', detail: 'Identifying the next shape in a visual sequence' },
      { name: 'Spatial reasoning', detail: 'Mental rotation and folding of 2D and 3D shapes' },
      { name: 'Figure series', detail: 'Identifying which shape or figure does not fit a series' },
    ],
    benchmarks: ['GL Assessment 11+', 'Cognitive Abilities Test (CAT4)', 'ISEB Common Pre-Test', 'Cognitive Abilities Test (NFER)'],
    ageGroups: [
      { range: 'Ages 7–8', focus: 'Simple pattern matching, basic shape sequences' },
      { range: 'Ages 9–10', focus: 'Matrix puzzles, rotation, figure series' },
      { range: 'Ages 11–12', focus: 'Full 11+ non-verbal reasoning standard' },
      { range: 'Ages 13–16', focus: 'Advanced spatial reasoning and abstract matrices (CAT4 level)' },
    ],
    longTailKeywords: 'free non-verbal reasoning test children, 11+ non-verbal reasoning practice, spatial reasoning test kids UK',
  },
} as const

type Slug = keyof typeof SUBJECTS

export function generateStaticParams() {
  return Object.keys(SUBJECTS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const subject = SUBJECTS[slug as Slug]
  if (!subject) return {}
  return {
    title: subject.title,
    description: subject.description,
    alternates: { canonical: `https://eduentry.com/subjects/${slug}`, languages: { 'en-GB': `https://eduentry.com/subjects/${slug}`, 'x-default': `https://eduentry.com/subjects/${slug}` } },
    keywords: subject.longTailKeywords,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: subject.title,
      description: subject.description,
      url: `https://eduentry.com/subjects/${slug}`,
    },
  }
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = SUBJECTS[slug as Slug]
  if (!subject) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
      { '@type': 'ListItem', position: 2, name: 'Subjects', item: 'https://eduentry.com/about' },
      { '@type': 'ListItem', position: 3, name: subject.headline, item: `https://eduentry.com/subjects/${slug}` },
    ],
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `${subject.headline} — Eduentry Assessment`,
    description: subject.description,
    url: `https://eduentry.com/subjects/${slug}`,
    provider: { '@type': 'EducationalOrganization', name: 'Eduentry', url: 'https://eduentry.com' },
    educationalLevel: 'Ages 6–17',
    isAccessibleForFree: true,
    courseMode: 'online',
    availableLanguage: 'English',
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/about" className="hover:text-gray-600">Subjects</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{subject.headline}</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border ${subject.color}`}>
            Free assessment · Ages 6–17
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {subject.title}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">{subject.tagline}</p>
        </div>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What is assessed</h2>
          <div className="space-y-4">
            {subject.skills.map(({ name, detail }) => (
              <div key={name} className="flex gap-4 p-5 rounded-xl border border-gray-100">
                <div className={`w-2 rounded-full flex-shrink-0 ${subject.color.replace('border-', 'bg-').split(' ').find(c => c.startsWith('bg-')) ?? 'bg-indigo-200'}`} />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{name}</div>
                  <div className="text-sm text-gray-500">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Age groups */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">By age group</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {subject.ageGroups.map(({ range, focus }) => (
              <div key={range} className="border border-gray-100 rounded-xl p-5">
                <div className={`font-semibold mb-2 ${subject.accent}`}>{range}</div>
                <div className="text-sm text-gray-500">{focus}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benchmarks */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">International benchmarks</h2>
          <p className="text-gray-600 mb-5">Scores are mapped against the following frameworks:</p>
          <ul className="space-y-2">
            {subject.benchmarks.map((b) => (
              <li key={b} className="flex items-center gap-3 text-gray-700">
                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${subject.color.replace('border-', 'bg-').split(' ').find(c => c.startsWith('bg-')) ?? 'bg-indigo-400'}`} />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-gray-500">
            Read the full methodology on the <Link href="/methodology" className="text-indigo-600 hover:underline">Methodology page</Link>.
          </p>
        </section>

        {/* Score table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How scores work</h2>
          <p className="text-gray-600 mb-5">
            Eduentry uses a standardised scale with a mean of 100 and standard deviation of 15 — the same scale used by Wechsler, NFER, and most UK standardised assessments.
          </p>
          <div className="rounded-xl border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Score range</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Classification</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Percentile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ['120+', 'Exceptional', 'Top 9%'],
                  ['110–119', 'Above Average', '75th–91st'],
                  ['95–109', 'Average', '37th–63rd'],
                  ['85–94', 'Below Average', '16th–36th'],
                  ['<85', 'Needs Support', 'Below 16th'],
                ].map(([range, label, pct]) => (
                  <tr key={range} className="hover:bg-gray-50/50">
                    <td className="p-4 font-mono font-semibold text-gray-900">{range}</td>
                    <td className="p-4 text-gray-700">{label}</td>
                    <td className="p-4 text-gray-500">{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Other subjects */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other subjects</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {(Object.keys(SUBJECTS) as Slug[]).filter(s => s !== slug).map((s) => (
              <Link key={s} href={`/subjects/${s}`} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
                <div className="font-semibold text-gray-900 mb-1">{SUBJECTS[s].headline}</div>
                <div className="text-xs text-gray-500">{SUBJECTS[s].tagline.split('—')[0].trim()}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Try the free {subject.headline} assessment</h2>
          <p className="text-indigo-200 mb-8">Takes 5–8 minutes per subject. Instant standardised score and percentile ranking.</p>
          <Link href="/auth/register" prefetch={false} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Start free assessment
          </Link>
        </section>

      </main>

      <PublicFooter />
    </div>
  )
}
