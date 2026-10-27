import type { Metadata } from 'next'
import { brandedTitle } from '@/lib/seo'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from '../../posts'
import { slugToTag, getPostsByTag, getAllTagSlugs, TAG_META } from '../../tag-utils'
import { notFound } from 'next/navigation'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const meta = TAG_META[tagName]
  const title = meta?.title ?? `${tagName} Guides`
  const description = meta?.description ?? `Guides and articles about ${tagName}.`
  const url = `${BASE_URL}/blog/tag/${tagSlug}`
  return {
    title: brandedTitle(title),
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: { title: `${title} | Eduentry Blog`, description, url, images: [`${BASE_URL}/blog/opengraph-image`] },
    twitter: { card: 'summary_large_image', title: `${title} | Eduentry Blog`, description, images: [`${BASE_URL}/blog/opengraph-image`] },
  }
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()

  const posts = getPostsByTag(tagName, BLOG_POSTS).sort((a, b) => b.date.localeCompare(a.date))
  if (posts.length === 0) notFound()

  const meta = TAG_META[tagName]
  const url = `${BASE_URL}/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: meta?.title ?? tagName, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: meta?.title ?? tagName,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
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
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{meta?.title ?? tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {meta?.title ?? `${tagName} Guides`}
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
            {meta?.description ?? `Guides and articles about ${tagName}.`}
          </p>
          <p className="text-sm text-gray-500 mt-3">{posts.length} {posts.length === 1 ? 'guide' : 'guides'}</p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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

        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← All guides
          </Link>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
