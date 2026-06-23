import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS, type Slug } from './data'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Free Assessments by Subject — Eduentry',
  description: 'Free adaptive assessments for children aged 6–17 across English, Maths, Verbal Reasoning, and Non-Verbal Reasoning. Standardised scores benchmarked internationally.',
  alternates: { canonical: `${BASE_URL}/subjects`, languages: { 'en-GB': `${BASE_URL}/subjects`, 'x-default': `${BASE_URL}/subjects` } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Free Assessments by Subject — Eduentry',
    description: 'Free adaptive assessments for children aged 6–17 across English, Maths, Verbal Reasoning, and Non-Verbal Reasoning.',
    url: `${BASE_URL}/subjects`,
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Free Assessments by Subject — Eduentry',
    description: 'Free adaptive assessments for children aged 6–17 across English, Maths, Verbal Reasoning, and Non-Verbal Reasoning.',
  },
}

export default function SubjectsIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Subjects', item: `${BASE_URL}/subjects` },
    ],
  }

  const slugs = Object.keys(SUBJECTS) as Slug[]

  const subjectSlugs: Record<string, string> = {
    english: 'english',
    mathematics: 'maths',
    verbal_reasoning: 'verbal-reasoning',
    nonverbal_reasoning: 'non-verbal-reasoning',
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Adaptive Assessments by Subject — Eduentry',
    url: `${BASE_URL}/subjects`,
    numberOfItems: slugs.length,
    itemListElement: slugs.map((slug, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/subjects/${subjectSlugs[slug] ?? slug}`,
      name: SUBJECTS[slug].headline,
    })),
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <PublicNav />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Subjects</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Free assessments by subject
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            Adaptive tests for children aged 6–17, with standardised scores benchmarked against UK and international frameworks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {slugs.map((slug) => {
            const subject = SUBJECTS[slug]
            return (
              <Link
                key={slug}
                href={`/subjects/${slug}`}
                className="border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors"
              >
                <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium mb-4 border ${subject.color}`}>
                  Free assessment
                </div>
                <div className="font-bold text-gray-900 text-xl mb-2">{subject.headline}</div>
                <div className="text-sm text-gray-500">{subject.tagline}</div>
              </Link>
            )
          })}
        </div>

        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Try a free assessment today</h2>
          <p className="text-indigo-200 mb-8">Takes 5–8 minutes per subject. Instant standardised score and percentile ranking.</p>
          <CtaLink href="/auth/register" label="subjects_index_cta" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Start free assessment
          </CtaLink>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
