import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from './posts'
import BlogPostCard from './BlogPostCard'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: '11+, Grammar School & Gifted Testing Guides',
  description: 'Practical guides for UK parents on 11+ preparation, grammar school admissions, GCSE revision, gifted testing and work experience for teenagers.',
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
    title: '11+ Preparation, Grammar Schools & Gifted Testing Guides | Eduentry Blog',
    description: 'Practical guides for UK parents on 11+ preparation, grammar school admissions, GCSE revision, gifted testing and work experience for teenagers.',
    url: `${BASE_URL}/blog`,
  },
  twitter: {
    card: 'summary_large_image',
    title: '11+ Preparation, Grammar Schools & Gifted Testing Guides | Eduentry Blog',
    description: 'Practical guides for UK parents on 11+ preparation, grammar school admissions, GCSE revision, gifted testing and work experience for teenagers.',
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

  const sortedPosts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Eduentry Blog — Academic Assessment Guides',
    url: `${BASE_URL}/blog`,
    numberOfItems: sortedPosts.length,
    itemListElement: sortedPosts.map((p, i) => ({
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
        <nav className="text-sm text-gray-500 mb-8">
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
          <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
            Also covering gifted and selective programmes in the US, Canada, Australia, Netherlands and UAE — benchmarked with standardised scores and international percentile data.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/11-plus" className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-full px-4 py-2 transition-colors">
              Free 11+ practice test →
            </Link>
            <Link href="/grammar-schools" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full px-4 py-2 transition-colors">
              Grammar school guides →
            </Link>
            <Link href="/sample-report" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full px-4 py-2 transition-colors">
              Sample assessment report →
            </Link>
          </div>
        </div>

        {/* Featured posts */}
        <div className="mb-10">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Featured guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'how-to-prepare-for-11-plus',
              'grammar-school-entry-requirements-2026',
              'how-to-prepare-for-gcse',
              'gifted-program-testing-guide',
              'high-school-internship-benefits-university',
            ].map((slug) => {
              const post = BLOG_POSTS.find((p) => p.slug === slug)
              if (!post) return null
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-gray-100 rounded-2xl p-5 hover:border-indigo-200 hover:shadow-sm transition-all"
                >
                  <div className="text-xs font-semibold text-indigo-600 mb-2">Featured</div>
                  <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2">{post.shortTitle}</h2>
                  <p className="text-xs text-gray-500">{post.readTime}</p>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-100 mb-10" />

        {/* All posts */}
        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
