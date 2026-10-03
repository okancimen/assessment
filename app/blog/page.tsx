import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from './posts'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '11+ Preparation, Grammar Schools & Gifted Testing Guides | Eduentry Blog',
  description: 'Practical guides for UK parents and students on 11+ exam preparation, grammar school admissions, GCSE revision, gifted child testing, and work experience for secondary school students.',
  keywords: [
    '11+ preparation guide',
    'grammar school admissions 2026',
    'GCSE revision tips',
    'gifted child testing UK',
    'how to prepare for 11 plus',
    'work experience for students',
    'standardised score explained',
    'free 11 plus practice test',
  ],
  alternates: { canonical: `${BASE_URL}/blog`, languages: { 'en-GB': `${BASE_URL}/blog`, es: `${BASE_URL}/es/blog`, tr: `${BASE_URL}/tr/blog`, fr: `${BASE_URL}/fr/blog`, ar: `${BASE_URL}/ar/blog`, ru: `${BASE_URL}/ru/blog`, zh: `${BASE_URL}/zh/blog`, 'x-default': `${BASE_URL}/blog` } },
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
    images: [`${BASE_URL}/blog/opengraph-image`],
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

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Eduentry Blog — Academic Assessment Guides',
    url: `${BASE_URL}/blog`,
    numberOfItems: BLOG_POSTS.length,
    itemListElement: BLOG_POSTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <PublicNav />

      <main className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Guides for Ambitious Students and Parents
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-3">
            Practical guides on 11+ exam preparation, grammar school admissions, GCSE revision, gifted child testing, and work experience for secondary school students.
          </p>
          <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
            Also covering gifted and selective programmes in the US, Canada, Australia, Netherlands and UAE — benchmarked with standardised scores and international percentile data.
          </p>
        </div>

        <div className="space-y-6">
          {[...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
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
