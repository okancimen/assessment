import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'
import { slugToTag, getAllTagSlugs, getLocalePostsByTag, TAG_META } from '@/app/blog/tag-utils'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_ZH, BLOG_POSTS)
  if (posts.length === 0) return {}
  const url = `${BASE_URL}/zh/blog/tag/${tagSlug}`
  const meta = TAG_META[tagName]
  const ogTitle = meta?.title ?? `${tagName} Guides`
  const ogDesc = meta?.description ?? `Guides and articles about ${tagName}.`
  return {
    title: `${tagName} 指南 | Eduentry 博客`,
    description: `共 ${posts.length} 篇关于 ${tagName} 的指南。`,
    alternates: {
      canonical: url,
      languages: {
        zh: url,
        'en-GB': `${BASE_URL}/blog/tag/${tagSlug}`,
        'x-default': `${BASE_URL}/blog/tag/${tagSlug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: { title: `${ogTitle} | Eduentry Blog`, description: ogDesc, url, images: [`${BASE_URL}/blog/opengraph-image`] },
    twitter: { card: 'summary_large_image', title: `${ogTitle} | Eduentry Blog`, description: ogDesc, images: [`${BASE_URL}/blog/opengraph-image`] },
  }
}

export default async function ZHTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_ZH, BLOG_POSTS)
  if (posts.length === 0) notFound()

  const url = `${BASE_URL}/zh/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
      { '@type': 'ListItem', position: 2, name: '博客', item: `${BASE_URL}/zh/blog` },
      { '@type': 'ListItem', position: 3, name: `${tagName} 指南`, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${tagName} 指南`,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/zh/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="zh" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/zh" className="hover:text-gray-600">首页</Link>
          <span className="mx-2">›</span>
          <Link href="/zh/blog" className="hover:text-gray-600">博客</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">{tagName} 指南</h1>
          <p className="text-sm text-gray-500 mt-3">{posts.length} 篇指南</p>
        </div>

        <div className="space-y-6">
          {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/zh/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
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
          <Link href="/zh/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← 所有指南
          </Link>
        </div>
      </div>
    </main>
  )
}
