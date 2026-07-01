import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: 'Blog — Staj ve Kariyer Rehberleri',
  description:
    'Staj hazırlığı, lise iş deneyimi ve üniversite kabulü üzerine araştırma ve analizler — Eduentry ekibinden.',
  keywords: [
    'staj rehberi Türkiye',
    'lise stajı nasıl bulunur',
    'üniversite öncesi iş deneyimi',
    'teknoloji stajı öğrenci',
    'kariyer gelişimi lise',
    'iş deneyimi üniversite kabulü',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/blog`,
    languages: { tr: `${BASE_URL}/tr/blog`, 'x-default': `${BASE_URL}/blog` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Eduentry Blog — Staj ve Kariyer Rehberleri',
    description: 'Staj hazırlığı, lise iş deneyimi ve üniversite kabulü üzerine araştırma ve analizler.',
    url: `${BASE_URL}/tr/blog`,
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry Blog — Staj ve Kariyer Rehberleri',
    description: 'Staj hazırlığı, lise iş deneyimi ve üniversite kabulü üzerine araştırma ve analizler.',
  },
}

export default function TRBlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/tr` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/tr/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Eduentry Blog — Staj ve Kariyer Rehberleri',
    url: `${BASE_URL}/tr/blog`,
    numberOfItems: BLOG_POSTS_TR.length,
    itemListElement: BLOG_POSTS_TR.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/tr/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="tr" className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/tr" className="hover:text-gray-600">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Blog</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Eduentry Blog
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
          Staj hazırlığı, lise iş deneyimi ve kariyer gelişimi üzerine araştırma ve analizler.
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS_TR.map((post) => (
          <Link
            key={post.slug}
            href={`/tr/blog/${post.slug}`}
            className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
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
  )
}
