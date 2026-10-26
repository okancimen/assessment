import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { slugToTag, getAllTagSlugs, getLocalePostsByTag } from '@/app/blog/tag-utils'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_ES, BLOG_POSTS)
  if (posts.length === 0) return {}
  const url = `${BASE_URL}/es/blog/tag/${tagSlug}`
  return {
    title: `Guías de ${tagName} | Blog de Eduentry`,
    description: `${posts.length} guías sobre ${tagName}.`,
    alternates: {
      canonical: url,
      languages: {
        es: url,
        'en-GB': `${BASE_URL}/blog/tag/${tagSlug}`,
        'x-default': `${BASE_URL}/blog/tag/${tagSlug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export default async function ESTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_ES, BLOG_POSTS)
  if (posts.length === 0) notFound()

  const url = `${BASE_URL}/es/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/es` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/es/blog` },
      { '@type': 'ListItem', position: 3, name: `Guías de ${tagName}`, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Guías de ${tagName}`,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/es/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="es" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/es" className="hover:text-gray-600">Inicio</Link>
          <span className="mx-2">›</span>
          <Link href="/es/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">Guías de {tagName}</h1>
          <p className="text-sm text-gray-500 mt-3">{posts.length} guías</p>
        </div>

        <div className="space-y-6">
          {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/es/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
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
          <Link href="/es/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            ← Todas las guías
          </Link>
        </div>
      </div>
    </main>
  )
}
