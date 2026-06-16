import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from './posts'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Blog — Academic Benchmarks & Assessment Insights',
  description:
    'Research and analysis on international academic benchmarks, standardised testing trends, and adaptive assessment — from the team behind Eduentry.',
  keywords: [
    'academic benchmarks blog',
    'standardised testing trends',
    'international assessment research',
    'PISA TIMSS benchmarks',
    '11+ exam trends',
    'adaptive testing research',
  ],
  alternates: { canonical: `${BASE_URL}/blog`, languages: { 'en-GB': `${BASE_URL}/blog`, 'x-default': `${BASE_URL}/blog` } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Eduentry Blog — Academic Benchmarks & Assessment Insights',
    description: 'Research and analysis on international academic benchmarks and adaptive assessment trends.',
    url: `${BASE_URL}/blog`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry Blog — Academic Benchmarks & Assessment Insights',
    description: 'Research and analysis on international academic benchmarks and adaptive assessment trends.',
  },
}

export default function BlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Eduentry Blog
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            Research and analysis on international academic benchmarks, standardised testing trends, and adaptive assessment.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
