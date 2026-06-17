import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import DemoQuiz from './DemoQuiz'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Try a Free Sample Assessment — See How Eduentry Works',
  description: 'Try four sample questions — one from each subject (English, Maths, Verbal Reasoning, Non-Verbal Reasoning). No account needed. See exactly what the Eduentry assessment looks like before you register.',
  alternates: { canonical: `${BASE_URL}/demo`, languages: { 'en-GB': `${BASE_URL}/demo`, 'x-default': `${BASE_URL}/demo` } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Try a Free Sample Assessment — Eduentry',
    description: 'Four sample questions — one per subject. No account needed. See Eduentry in action before you register.',
    url: `${BASE_URL}/demo`,
  },
}

export default function DemoPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Try a Sample', item: `${BASE_URL}/demo` },
    ],
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PublicNav />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Try a Sample</span>
        </nav>

        <div className="mb-12">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 border bg-indigo-50 text-indigo-700 border-indigo-100">
            No account needed · 4 questions · Instant feedback
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Try a sample question from each subject
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Answer the questions below to see exactly how Eduentry works — including the adaptive format,
            instant feedback, and explanations. The full assessment covers 100 questions and produces a
            standardised score benchmarked against international standards.
          </p>
        </div>

        <DemoQuiz />

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <Link href="/subjects/english" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
            <div className="font-semibold text-gray-900 mb-1">English</div>
            <div className="text-sm text-gray-500">Comprehension, grammar, vocabulary</div>
          </Link>
          <Link href="/subjects/verbal-reasoning" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
            <div className="font-semibold text-gray-900 mb-1">Verbal Reasoning</div>
            <div className="text-sm text-gray-500">Analogies, codes, classification</div>
          </Link>
          <Link href="/subjects/non-verbal-reasoning" className="border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors">
            <div className="font-semibold text-gray-900 mb-1">Non-Verbal Reasoning</div>
            <div className="text-sm text-gray-500">Patterns, matrices, sequences</div>
          </Link>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
