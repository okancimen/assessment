import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from '../posts'
import { getBlogContent } from '../content'
import { BLOG_POSTS_TR } from '../posts-tr'
import { BLOG_POSTS_ES } from '../posts-es'

const BASE_URL = 'https://eduentry.com'

const SERVICE_LINKS = [
  {
    tags: ['Internship', 'Work Experience', 'Career Development'],
    href: '/internship',
    title: 'Internship Readiness Assessment',
    desc: 'Free 34-question adaptive test for students aged 14+. Personalised readiness report and AI career insights.',
  },
  {
    tags: ['11+', 'Verbal Reasoning', 'Non-Verbal Reasoning'],
    href: '/11-plus',
    title: 'Free 11+ Practice Assessment',
    desc: 'Adaptive 11+ test covering English, Maths, Verbal and Non-Verbal Reasoning. Standardised scores and percentile rankings.',
  },
  {
    tags: ['Grammar Schools', 'Entry Requirements'],
    href: '/grammar-schools',
    title: 'Grammar School Guides by Area',
    desc: 'Entry requirements, pass marks, and preparation guides for grammar schools across England.',
  },
  {
    tags: ['Standardised Testing', 'International Benchmarks', 'PISA', 'Scores', 'Percentile'],
    href: '/methodology',
    title: 'Our Assessment Methodology',
    desc: 'Adaptive IRT scoring on the same 100-point scale used by PISA, GCSE, and CAT4.',
  },
  {
    tags: ['CogAT', 'NWEA MAP', 'ISEE', 'SSAT', 'Gifted Testing', 'Netherlands', 'UAE', 'Canada', 'Australia'],
    href: '/subjects',
    title: 'Academic Subjects Covered',
    desc: 'English, Maths, Verbal Reasoning and Non-Verbal Reasoning — sample questions and what each subject tests.',
  },
]

function getServiceLinks(tags: string[]) {
  return SERVICE_LINKS.filter((s) => s.tags.some((t) => tags.includes(t))).slice(0, 3)
}

const trByContentSlug = new Map(BLOG_POSTS_TR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const esByContentSlug = new Map(BLOG_POSTS_ES.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))

const COUNTRY_LANG: Record<string, string> = {
  'netherlands-': 'en-NL',
  'uae-':         'en-AE',
  'canada-':      'en-CA',
  'australia-':   'en-AU',
}

function getCountryLang(slug: string): string | null {
  for (const [prefix, lang] of Object.entries(COUNTRY_LANG)) {
    if (slug.startsWith(prefix)) return lang
  }
  return null
}

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
    alternates: {
      canonical: url,
      languages: {
        'en-GB': url,
        ...(trByContentSlug.has(slug) ? { tr: `${BASE_URL}/tr/blog/${trByContentSlug.get(slug)}` } : {}),
        ...(esByContentSlug.has(slug) ? { es: `${BASE_URL}/es/blog/${esByContentSlug.get(slug)}` } : {}),
        'x-default': url,
        ...(getCountryLang(slug) ? { [getCountryLang(slug)!]: url } : {}),
      },
    },
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
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description,
    keywords: post.tags.join(', '),
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    url,
    image: `${BASE_URL}/blog/${slug}/opengraph-image`,
    author: { '@id': 'https://eduentry.com/#organization' },
    publisher: { '@id': 'https://eduentry.com/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': 'https://eduentry.com/#website' },
  }

  const related = getRelatedPosts(slug)

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

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

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
            <span>Eduentry Editorial</span>
          </div>
        </div>

        {/* Cross-locale links */}
        {(trByContentSlug.has(slug) || esByContentSlug.has(slug)) && (
          <div className="mb-10 flex items-center gap-2 text-xs text-gray-400 flex-wrap">
            <span>Also available in:</span>
            {esByContentSlug.has(slug) && (
              <Link href={`/es/blog/${esByContentSlug.get(slug)}`} className="inline-flex items-center gap-1 text-indigo-500 hover:text-indigo-700 font-medium">
                <span>🇪🇸</span> Español
              </Link>
            )}
            {trByContentSlug.has(slug) && esByContentSlug.has(slug) && <span>·</span>}
            {trByContentSlug.has(slug) && (
              <Link href={`/tr/blog/${trByContentSlug.get(slug)}`} className="inline-flex items-center gap-1 text-indigo-500 hover:text-indigo-700 font-medium">
                <span>🇹🇷</span> Türkçe
              </Link>
            )}
          </div>
        )}

        <article className="prose prose-gray max-w-none space-y-12">
          {getBlogContent(slug)}
        </article>

        {/* Internal service links */}
        {(() => {
          const links = getServiceLinks(post.tags)
          if (!links.length) return null
          return (
            <section className="mt-12 border border-gray-100 rounded-2xl p-6 bg-gray-50/50">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">From Eduentry</p>
              <div className="space-y-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-start gap-3 group">
                    <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{link.title}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{link.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })()}

        {/* Related articles */}
        {related.length > 0 && (
          <section className="mt-16 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related articles</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:bg-indigo-50/40 transition-colors flex flex-col"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm leading-snug mb-2 group-hover:text-indigo-700 transition-colors flex-1">
                    {p.shortTitle}
                  </div>
                  <div className="text-xs text-gray-400">{p.readTime}</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">{post.cta?.heading ?? 'See what your child\'s report looks like'}</h2>
          <p className="text-indigo-200 mb-8">{post.cta?.body ?? 'View a sample report — standardised score, subject breakdown and personalised recommendations. No account needed.'}</p>
          <CtaLink href={post.cta?.href ?? '/sample-report'} label="blog_cta" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
            {post.cta?.label ?? 'See a sample report'}
          </CtaLink>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
