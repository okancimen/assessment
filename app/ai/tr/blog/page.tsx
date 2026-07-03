import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: 'Staj ve Kariyer Rehberleri — Eduentry Blog',
  description:
    'Staj hazırlığı, lise iş deneyimi ve üniversite kabulü üzerine araştırma ve analizler — Eduentry ekibinden. Teknoloji, iş dünyası, veri ve pazarlama alanlarında rehberler.',
  keywords: [
    'staj rehberi Türkiye',
    'lise stajı nasıl bulunur',
    'üniversite öncesi iş deneyimi',
    'teknoloji stajı öğrenci',
    'kariyer gelişimi lise',
    'iş deneyimi üniversite kabulü',
    'staj hazırlık rehberi',
    'İngiltere staj rehberi',
  ],
  alternates: {
    canonical: `${BASE_URL}/tr/blog`,
    languages: {
      tr: `${BASE_URL}/tr/blog`,
      'en-GB': `${BASE_URL}/blog`,
      es: `${BASE_URL}/es/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Staj ve Kariyer Rehberleri — Eduentry Blog',
    description: 'Staj hazırlığı, lise iş deneyimi ve üniversite kabulü üzerine araştırma ve analizler.',
    url: `${BASE_URL}/tr/blog`,
    siteName: 'Eduentry.ai',
    locale: 'tr_TR',
    alternateLocale: ['en_GB', 'es_ES'],
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai Blog — Staj ve Kariyer Rehberleri' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staj ve Kariyer Rehberleri — Eduentry Blog',
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
    name: 'Staj ve Kariyer Rehberleri — Eduentry Blog',
    url: `${BASE_URL}/tr/blog`,
    inLanguage: 'tr',
    numberOfItems: BLOG_POSTS_TR.length,
    itemListElement: BLOG_POSTS_TR.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/tr/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="tr" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/tr" className="hover:text-[#1d1d1f]">Ana Sayfa</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            Staj &amp; Kariyer Rehberleri
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            Lise öğrencileri için erken iş deneyimi, kariyer gelişimi ve üniversite kabulü üzerine kanıta dayalı rehberler.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS_TR.map((post) => (
            <Link
              key={post.slug}
              href={`/tr/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-snug">{post.title}</h2>
              <p className="text-[#6e6e73] leading-relaxed mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
