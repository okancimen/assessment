import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '@/app/blog/posts'
import { getBlogContent } from '@/app/blog/content'

const BASE_URL = 'https://eduentry.ai'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']

const internshipSlugs = new Set(
  BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).map(p => p.slug)
)

export function generateStaticParams() {
  return Array.from(internshipSlugs).map(slug => ({ slug }))
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

export default async function AIBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post || !internshipSlugs.has(slug)) notFound()

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
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    url,
    author: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  }

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null

  const related = getRelatedPosts(slug).filter(p => internshipSlugs.has(p.slug))

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="max-w-3xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-[#1d1d1f]">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">{post.shortTitle}</span>
        </nav>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-[#6e6e73]">
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

        {related.length > 0 && (
          <section className="mt-16 mb-12">
            <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">Related articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 transition-colors flex flex-col"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <div className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-2 group-hover:text-[#4F46E5] transition-colors flex-1">
                    {p.shortTitle}
                  </div>
                  <div className="text-xs text-[#6e6e73]">{p.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="text-center bg-[#4F46E5] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{post.cta?.heading ?? 'Ready for your first internship?'}</h2>
          <p className="text-indigo-200 mb-8">{post.cta?.body ?? 'Free 34-question adaptive assessment. Get your personalised readiness report in 35 minutes.'}</p>
          <CtaLink href={post.cta?.href ?? '/apply'} label="ai_blog_cta" className="bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            {post.cta?.label ?? 'Apply free →'}
          </CtaLink>
        </section>
      </div>
    </main>
  )
}
