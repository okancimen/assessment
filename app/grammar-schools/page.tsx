import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import { GRAMMAR_AREAS } from './data'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Grammar Schools in England: Entry Requirements & 11+ Preparation by Area',
  description: 'Entry requirements, SAS score benchmarks and 11+ preparation advice for grammar schools across England — Kent, Buckinghamshire, Birmingham, London, Essex, Hertfordshire and more.',
  alternates: { canonical: `${BASE_URL}/grammar-schools`, languages: { 'en-GB': `${BASE_URL}/grammar-schools`, 'x-default': `${BASE_URL}/grammar-schools` } },
  keywords: 'grammar schools England, 11 plus entry requirements, grammar school score, SAS score grammar school, 11+ preparation',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Grammar Schools in England: Entry Requirements by Area',
    description: 'SAS score benchmarks and 11+ entry requirements for grammar schools across England.',
    url: `${BASE_URL}/grammar-schools`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grammar Schools in England: Entry Requirements by Area',
    description: 'SAS score benchmarks and 11+ entry requirements for grammar schools across England.',
  },
}

export default function GrammarSchoolsIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Grammar Schools', item: `${BASE_URL}/grammar-schools` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Grammar Schools in England by Area',
    url: `${BASE_URL}/grammar-schools`,
    numberOfItems: GRAMMAR_AREAS.length,
    itemListElement: GRAMMAR_AREAS.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/grammar-schools/${a.slug}`,
      name: `Grammar Schools in ${a.name}`,
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
          <span className="text-gray-700">Grammar Schools</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Grammar school entry requirements by area
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            SAS score benchmarks, exam board details and entry advice for grammar schools across England.
            Select your area to see school-specific information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {GRAMMAR_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/grammar-schools/${area.slug}`}
              className="border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="font-bold text-gray-900 text-lg">{area.name}</div>
                <div className="text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 flex-shrink-0 ml-3">
                  Target SAS {area.targetSAS}
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-3">{area.keyFact}</div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{area.schoolCount} school{area.schoolCount > 1 ? 's' : ''}</span>
                <span>·</span>
                <span>{area.examBoard.split(' ')[0]}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Not sure what score your child needs?</h2>
          <p className="text-gray-600 mb-5">
            Take Eduentry&apos;s free adaptive assessment to get a standardised score on the same scale (mean 100, SD 15)
            used by GL Assessment in the 11+. Instantly see where your child stands relative to grammar school entry benchmarks.
          </p>
          <CtaLink
            href="/auth/register"
            label="grammar_schools_cta"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get a free baseline score
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </CtaLink>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/blog/grammar-school-entry-requirements-2026" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
            <div className="text-xs font-semibold text-indigo-600 mb-2">Blog</div>
            <div className="font-semibold text-gray-900 text-sm">Grammar School Entry Requirements 2026</div>
          </Link>
          <Link href="/blog/how-to-prepare-for-11-plus" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
            <div className="text-xs font-semibold text-indigo-600 mb-2">Blog</div>
            <div className="font-semibold text-gray-900 text-sm">How to Prepare for the 11+ at Home</div>
          </Link>
          <Link href="/11-plus" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
            <div className="text-xs font-semibold text-indigo-600 mb-2">Guide</div>
            <div className="font-semibold text-gray-900 text-sm">11+ Preparation Overview</div>
          </Link>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
