import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'
import { slugToTag, getAllTagSlugs, getLocalePostsByTag, TAG_META } from '@/app/blog/tag-utils'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_RU, BLOG_POSTS)
  if (posts.length === 0) return {}
  const url = `${BASE_URL}/ru/blog/tag/${tagSlug}`
  const meta = TAG_META[tagName]
  const ogTitle = meta?.title ?? `${tagName} Guides`
  const ogDesc = meta?.description ?? `Guides and articles about ${tagName}.`
  return {
    title: `Руководства по ${tagName} | Блог Eduentry`,
    description: `${posts.length} руководств по теме ${tagName}.`,
    alternates: {
      canonical: url,
      languages: {
        ru: url,
        'en-GB': `${BASE_URL}/blog/tag/${tagSlug}`,
        'x-default': `${BASE_URL}/blog/tag/${tagSlug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: { title: `${ogTitle} | Eduentry Blog`, description: ogDesc, url, images: [`${BASE_URL}/blog/opengraph-image`] },
    twitter: { card: 'summary_large_image', title: `${ogTitle} | Eduentry Blog`, description: ogDesc, images: [`${BASE_URL}/blog/opengraph-image`] },
  }
}

export default async function RUTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_RU, BLOG_POSTS)
  if (posts.length === 0) notFound()

  const url = `${BASE_URL}/ru/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE_URL}/ru` },
      { '@type': 'ListItem', position: 2, name: 'Блог', item: `${BASE_URL}/ru/blog` },
      { '@type': 'ListItem', position: 3, name: `Руководства по ${tagName}`, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Руководства по ${tagName}`,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/ru/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="ru" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/ru" className="hover:text-gray-600">Главная</Link>
          <span className="mx-2">›</span>
          <Link href="/ru/blog" className="hover:text-gray-600">Блог</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">Руководства по {tagName}</h1>
          <p className="text-sm text-gray-500 mt-3">{posts.length} руководств</p>
        </div>

        <div className="space-y-6">
          {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/ru/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('ru', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
              <p className="text-gray-500 leading-relaxed">{post.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/ru/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← Все руководства
          </Link>
        </div>
      </div>
    </main>
  )
}
