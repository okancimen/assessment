import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import { SUBJECTS, type Slug } from '../data'

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
