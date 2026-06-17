import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { GRAMMAR_AREAS, getAreaBySlug } from '../data'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return GRAMMAR_AREAS.map((a) => ({ area: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area: slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) return {}
  const url = `${BASE_URL}/grammar-schools/${slug}`
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: url, languages: { 'en-GB': url, 'x-default': url } },
    keywords: `grammar schools ${area.name}, 11 plus ${area.name}, ${area.name} 11+ entry requirements, grammar school ${area.name} score`,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: { title: area.metaTitle, description: area.metaDescription, url },
    twitter: { card: 'summary_large_image', title: area.metaTitle, description: area.metaDescription },
  }
}

export default async function GrammarAreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params
  const area = getAreaBySlug(slug)
  if (!area) notFound()

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Grammar Schools', item: `${BASE_URL}/grammar-schools` },
      { '@type': 'ListItem', position: 3, name: area.name, item: `${BASE_URL}/grammar-schools/${slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How many grammar schools are there in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `There are ${area.schoolCount} grammar school${area.schoolCount > 1 ? 's' : ''} in ${area.name}. ${area.description}` },
      },
      {
        '@type': 'Question',
        name: `What score do you need for grammar school in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `The indicative competitive Standardised Age Score (SAS) range for grammar schools in ${area.name} is ${area.targetSAS}. Individual school cut-offs vary — always check directly with your target school. The exam is set by ${area.examBoard}.` },
      },
      {
        '@type': 'Question',
        name: `When should I register for the 11+ in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: area.registrationNote },
      },
      {
        '@type': 'Question',
        name: `Which exam board sets the 11+ in ${area.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `The 11+ in ${area.name} is set by ${area.examBoard}. The subjects tested include: ${area.subjects.join(', ')}.` },
      },
    ],
  }

  const otherAreas = GRAMMAR_AREAS.filter((a) => a.slug !== slug).slice(0, 4)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PublicNav />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/grammar-schools" className="hover:text-gray-600">Grammar Schools</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{area.name}</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border bg-indigo-50 text-indigo-700 border-indigo-100">
            {area.schoolCount} grammar school{area.schoolCount > 1 ? 's' : ''} · {area.examBoard.split(' ')[0]}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Grammar schools in {area.name}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            Entry requirements, score benchmarks and how to prepare for the 11+ in {area.name}.
          </p>
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Schools', value: String(area.schoolCount) },
            { label: 'Target SAS', value: area.targetSAS },
            { label: 'Exam board', value: area.examBoard.split('(')[0].trim() },
            { label: 'Subjects tested', value: String(area.subjects.length) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-indigo-700 mb-1">{value}</div>
              <div className="text-xs text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{area.description}</p>
        </section>

        {/* Schools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Grammar schools in {area.name}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {area.schools.map((school) => (
              <div key={school.name} className="border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{school.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{school.type}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Entry requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry requirements</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Subjects tested</h3>
              <ul className="space-y-2">
                {area.subjects.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Score target</h3>
              <div className="text-3xl font-bold text-indigo-700 mb-1">SAS {area.targetSAS}</div>
              <p className="text-sm text-gray-500">
                Indicative competitive range. Individual school cut-offs vary — always check directly with your target school.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-6 sm:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-2">Registration</h3>
              <p className="text-sm text-gray-600">{area.registrationNote}</p>
            </div>
          </div>
        </section>

        {/* Score context */}
        <section className="mb-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to benchmark your child now</h2>
          <p className="text-gray-600 mb-4">
            Eduentry uses the same standardised scale as {area.examBoard.split('(')[0].trim()} — mean 100, standard deviation 15.
            A score of {area.targetSAS.split('–')[0]} on Eduentry corresponds to the competitive entry range for grammar schools in {area.name}.
          </p>
          <p className="text-gray-600 mb-6">
            Take a free assessment today to see where your child currently stands, which subjects need the most work,
            and track progress as you prepare.
          </p>
          <Link
            href="/auth/register"
            prefetch={false}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get a free standardised score
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>

        {/* Related reading */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related reading</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/grammar-school-entry-requirements-2026" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-1">Article</div>
              <div className="font-semibold text-gray-900 text-sm">Grammar School Entry Requirements 2026</div>
            </Link>
            <Link href="/blog/how-to-prepare-for-11-plus" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-1">Article</div>
              <div className="font-semibold text-gray-900 text-sm">How to Prepare for the 11+ at Home</div>
            </Link>
            <Link href="/blog/what-is-a-standardised-score" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-1">Article</div>
              <div className="font-semibold text-gray-900 text-sm">What Is a Standardised Score?</div>
            </Link>
            <Link href="/11-plus" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-1">Guide</div>
              <div className="font-semibold text-gray-900 text-sm">11+ Preparation Overview</div>
            </Link>
          </div>
        </section>

        {/* Other areas */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-5">Other areas</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherAreas.map((a) => (
              <Link key={a.slug} href={`/grammar-schools/${a.slug}`} className="border border-gray-100 rounded-xl p-4 hover:border-indigo-200 transition-colors">
                <div className="font-semibold text-gray-900 text-sm mb-0.5">{a.name}</div>
                <div className="text-xs text-gray-500">Target SAS {a.targetSAS} · {a.schoolCount} schools</div>
              </Link>
            ))}
          </div>
          <Link href="/grammar-schools" className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline mt-4">
            View all areas →
          </Link>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
