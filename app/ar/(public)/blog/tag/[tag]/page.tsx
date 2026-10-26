import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import { slugToTag, getAllTagSlugs, getLocalePostsByTag } from '@/app/blog/tag-utils'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return getAllTagSlugs().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) return {}
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_AR, BLOG_POSTS)
  if (posts.length === 0) return {}
  const url = `${BASE_URL}/ar/blog/tag/${tagSlug}`
  return {
    title: `أدلة ${tagName} | مدونة Eduentry`,
    description: `${posts.length} أدلة حول ${tagName}.`,
    alternates: {
      canonical: url,
      languages: {
        ar: url,
        'en-GB': `${BASE_URL}/blog/tag/${tagSlug}`,
        'x-default': `${BASE_URL}/blog/tag/${tagSlug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export default async function ARTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params
  const tagName = slugToTag(tagSlug)
  if (!tagName) notFound()
  const posts = getLocalePostsByTag(tagName, BLOG_POSTS_AR, BLOG_POSTS)
  if (posts.length === 0) notFound()

  const url = `${BASE_URL}/ar/blog/tag/${tagSlug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/ar` },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${BASE_URL}/ar/blog` },
      { '@type': 'ListItem', position: 3, name: `أدلة ${tagName}`, item: url },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `أدلة ${tagName}`,
    url,
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/ar/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="ar" dir="rtl" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/ar" className="hover:text-gray-600">الرئيسية</Link>
          <span className="mx-2">›</span>
          <Link href="/ar/blog" className="hover:text-gray-600">المدونة</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{tagName}</span>
        </nav>

        <div className="mb-12">
          <div className="text-xs font-semibold text-indigo-600 mb-3 uppercase tracking-wide">{tagName}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">أدلة {tagName}</h1>
          <p className="text-sm text-gray-500 mt-3">{posts.length} دليل</p>
        </div>

        <div className="space-y-6">
          {posts.sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/ar/blog/${post.slug}`}
              className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('ar', { day: 'numeric', month: 'long', year: 'numeric' })}
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
          <Link href="/ar/blog" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
            جميع الأدلة ←
          </Link>
        </div>
      </div>
    </main>
  )
}
