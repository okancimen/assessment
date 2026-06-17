import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS, getPostBySlug } from '../posts'
import { getBlogContent } from '../content'

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/blog/${slug}`
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: url, languages: { 'en-GB': url, 'x-default': url } },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      images: [{ url: `/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/blog/${slug}/opengraph-image`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/blog/${slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.shortTitle, item: url },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: `${BASE_URL}/blog/${slug}/opengraph-image`,
    author: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Eduentry',
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <PublicNav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{post.shortTitle}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>Eduentry Research Team</span>
          </div>
        </div>

        <article className="prose prose-gray max-w-none space-y-12">
          {getBlogContent(slug)}
        </article>

        {/* Internal links */}
        <section className="mt-14 mb-14">
          <Link href="/methodology" className="flex items-center justify-between bg-indigo-50 border border-indigo-100 rounded-xl px-6 py-4 hover:bg-indigo-100/60 transition-colors group">
            <div>
              <div className="font-semibold text-indigo-900 mb-0.5">How does Eduentry calculate standardised scores?</div>
              <div className="text-sm text-indigo-600">Read the full scoring methodology and international benchmarks →</div>
            </div>
            <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </section>

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">See where your child stands today</h2>
          <p className="text-indigo-200 mb-8">Free adaptive assessment with an instant standardised score and percentile ranking.</p>
          <Link href="/auth/register" prefetch={false} className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            Start free assessment
          </Link>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
