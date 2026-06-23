import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS, type Slug } from '../data'
import { BLOG_POSTS } from '@/app/blog/posts'

const SUBJECT_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  english: [
    { q: 'Is the English assessment free?', a: 'Yes, completely free for all families — no subscriptions, hidden charges, or premium tiers. Every family receives the full adaptive assessment and standardised score report at no cost.' },
    { q: 'What English skills does the assessment cover?', a: 'The assessment covers reading comprehension, grammar, spelling, punctuation, and vocabulary. Questions are adaptively calibrated to your child\'s age and level using Item Response Theory.' },
    { q: 'How long does the English assessment take?', a: 'The English section contains 15 adaptive questions with a 30-minute total section time limit (2 minutes per question). Most children complete the section in 20–25 minutes.' },
    { q: 'What score will my child receive?', a: 'Your child receives a standardised score with a mean of 100 and standard deviation of 15 — the same scale used by NFER, GL Assessment, and CAT4. A score of 115 places your child in the top 16%; 130 in the top 2%.' },
  ],
  maths: [
    { q: 'Is the Maths assessment free?', a: 'Yes, completely free for all families. Every family receives the full adaptive Maths assessment and standardised score report at no cost.' },
    { q: 'What maths topics does the assessment cover?', a: 'The assessment covers number operations, algebra, geometry, fractions and percentages, and data handling. Questions span KS1 to GCSE level and are adaptively calibrated to your child\'s age and current ability.' },
    { q: 'How long does the Maths assessment take?', a: 'The Maths section contains 15 adaptive questions with a 30-minute total section time limit. Most children complete it in 20–25 minutes.' },
    { q: 'How does the Maths score relate to the 11+?', a: 'Eduentry\'s standardised score (mean 100, SD 15) is directly comparable to GL Assessment SAS scores used in the 11+. A score of 111+ is broadly equivalent to the selective register threshold in most 11+ areas.' },
  ],
  'verbal-reasoning': [
    { q: 'Is the Verbal Reasoning assessment free?', a: 'Yes, completely free. The full adaptive test and standardised score report with topic-level breakdown are included at no cost.' },
    { q: 'Is verbal reasoning the same as English?', a: 'No. Verbal reasoning tests logical thinking using words — not reading comprehension or writing. Questions involve analogies, word codes, sequencing, and classification. Strong English helps, but verbal reasoning requires separate practice.' },
    { q: 'How long does the Verbal Reasoning assessment take?', a: 'The Verbal Reasoning section contains 15 adaptive questions with a 30-minute total section time limit. Most children complete it in 20–25 minutes.' },
    { q: 'Can verbal reasoning be improved with practice?', a: 'Yes — verbal reasoning is highly practice-responsive. The question types are finite (analogies, codes, classification, sequences, logic), and systematic practice produces genuine improvement. Wide reading to build vocabulary provides the strongest foundation.' },
  ],
  'non-verbal-reasoning': [
    { q: 'Is the Non-Verbal Reasoning assessment free?', a: 'Yes, completely free for all families. The full adaptive test and standardised score report are included at no cost.' },
    { q: 'What is non-verbal reasoning and why does it matter?', a: 'Non-verbal reasoning tests pattern recognition and abstract thinking using shapes — no reading required. It is included in most 11+ exams, the CAT4, and gifted identification tests because it measures cognitive ability independently of language background, making it fair for multilingual children.' },
    { q: 'How long does the Non-Verbal Reasoning assessment take?', a: 'The Non-Verbal Reasoning section contains 15 adaptive questions with a 30-minute total section time limit. Most children complete it in 15–25 minutes.' },
    { q: 'Which exams test non-verbal reasoning?', a: 'Non-verbal reasoning appears in GL Assessment 11+ papers, the CEM 11+, CAT4, ISEB Common Pre-Test, and US gifted tests including the NNAT and CogAT Nonverbal battery. It is also a significant component of independent school entrance exams.' },
  ],
}

const SUBJECT_BLOG_TAGS: Record<string, string[]> = {
  english:              ['Standardised Testing', 'Scores', 'Parent Guide', 'Grammar Schools'],
  maths:                ['Standardised Testing', 'PISA', '11+'],
  'verbal-reasoning':   ['Verbal Reasoning', '11+', 'Grammar Schools', 'Preparation'],
  'non-verbal-reasoning': ['11+', 'Grammar Schools', 'Preparation', 'Entry Requirements'],
}

const COUNTRY_TAGS = ['Netherlands', 'UAE', 'Canada', 'Australia', 'US Education', 'Dutch Education', 'Dutch Schools', 'ISEE', 'SSAT', 'Private School']

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
    twitter: {
      card: 'summary_large_image' as const,
      title: subject.title,
      description: subject.description,
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
      { '@type': 'ListItem', position: 2, name: 'Subjects', item: 'https://eduentry.com/subjects' },
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

  const subjectFaqs = SUBJECT_FAQS[slug] ?? []
  const faqSchema = subjectFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: subjectFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null

  const subjectBlogTags = SUBJECT_BLOG_TAGS[slug] ?? []
  const relatedPosts = BLOG_POSTS
    .filter(p =>
      p.tags.some(t => subjectBlogTags.includes(t)) &&
      !p.tags.some(t => COUNTRY_TAGS.includes(t))
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/subjects" className="hover:text-gray-600">Subjects</Link>
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
        <section className="mb-8">
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

        {/* 11+ link */}
        <section className="mb-14">
          <Link href="/11-plus" className="flex items-center justify-between bg-indigo-50 border border-indigo-100 rounded-xl px-6 py-4 hover:bg-indigo-100/60 transition-colors group">
            <div>
              <div className="font-semibold text-indigo-900 mb-0.5">Preparing for the 11+?</div>
              <div className="text-sm text-indigo-600">See how {subject.headline} fits into the full 11+ practice test →</div>
            </div>
            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </section>

        {/* Related blog posts */}
        {relatedPosts.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related reading</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors flex flex-col"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-indigo-700 transition-colors flex-1">
                    {p.shortTitle}
                  </div>
                  <div className="text-xs text-gray-400">{p.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        {subjectFaqs.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {subjectFaqs.map(({ q, a }) => (
                <div key={q} className="border border-gray-100 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Try the free {subject.headline} assessment</h2>
          <p className="text-indigo-200 mb-8">Takes 5–8 minutes per subject. Instant standardised score and percentile ranking.</p>
          <CtaLink href="/auth/register" label="subject_detail_cta" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Start free assessment
          </CtaLink>
        </section>

      </main>

      <PublicFooter />
    </div>
  )
}
