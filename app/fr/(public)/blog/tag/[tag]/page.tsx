import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { slugToTag, getAllTagSlugs, getLocalePostsByTag, TAG_META } from '@/app/blog/tag-utils'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_FR, BLOG_POSTS)
  if (posts.length === 0) return {}
  const url = `${BASE_URL}/fr/blog/tag/${tagSlug}`
  const meta = TAG_META[tagName]
  const ogTitle = meta?.title ?? `${tagName} Guides`
  const ogDesc = meta?.description ?? `Guides and articles about ${tagName}.`
  return {
    title: `Guides ${tagName} | Blog Eduentry`,
    description: `${posts.length} guides sur ${tagName}.`,
    alternates: {
      canonical: url,
      languages: {
        fr: url,
        'en-GB': `${BASE_URL}/blog/tag/${tagSlug}`,
        'x-default': `${BASE_URL}/blog/tag/${tagSlug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: { title: `${ogTitle} | Eduentry Blog`, description: ogDesc, url, images: [`${BASE_URL}/blog/opengraph-image`] },
    twitter: { card: 'summary_large_image', title: `${ogTitle} | Eduentry Blog`, description: ogDesc, images: [`${BASE_URL}/blog/opengraph-image`] },
  }
}

export default async function FRTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_FR, BLOG_POSTS)
  if (posts.length === 0) notFound()

  const url = `${BASE_URL}/fr/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/fr` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/fr/blog` },
      { '@type': 'ListItem', position: 3, name: `Guides ${tagName}`, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Guides ${tagName}`,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/fr/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="fr" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/fr" className="hover:text-gray-600">Accueil</Link>
          <span className="mx-2">›</span>
          <Link href="/fr/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">Guides {tagName}</h1>
          <p className="text-sm text-gray-500 mt-3">{posts.length} guides</p>
        </div>

        <div className="space-y-6">
          {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/fr/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
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
          <Link href="/fr/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← Tous les guides
          </Link>
        </div>
      </div>
    </main>
  )
}
