import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS_ZH, getChinesePostBySlug } from '@/app/blog/posts-zh'
import { getChineseBlogContent } from '@/app/blog/content-zh'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const trByContentSlug = new Map(BLOG_POSTS_TR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const esByContentSlug = new Map(BLOG_POSTS_ES.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const frByContentSlug = new Map(BLOG_POSTS_FR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const ruByContentSlug = new Map(BLOG_POSTS_RU.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return BLOG_POSTS_ZH.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getChinesePostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/zh/blog/${slug}`
  const enSlug = post.contentSlug
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: {
        zh: url,
        ...(enSlug ? { 'en-GB': `${BASE_URL}/blog/${enSlug}` } : {}),
        ...(enSlug && trByContentSlug.has(enSlug) ? { tr: `${BASE_URL}/tr/blog/${trByContentSlug.get(enSlug)}` } : {}),
        ...(enSlug && esByContentSlug.has(enSlug) ? { es: `${BASE_URL}/es/blog/${esByContentSlug.get(enSlug)}` } : {}),
        ...(enSlug && frByContentSlug.has(enSlug) ? { fr: `${BASE_URL}/fr/blog/${frByContentSlug.get(enSlug)}` } : {}),
        ...(enSlug && ruByContentSlug.has(enSlug) ? { ru: `${BASE_URL}/ru/blog/${ruByContentSlug.get(enSlug)}` } : {}),
        'x-default': enSlug ? `${BASE_URL}/blog/${enSlug}` : url,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.dateModified ?? post.date,
      locale: 'zh_CN',
      alternateLocale: ['en_GB'],
      images: [{ url: `${BASE_URL}/zh/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/zh/blog/${slug}/opengraph-image`],
    },
  }
}

export default async function ZHBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getChinesePostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/zh/blog/${slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: `${BASE_URL}/zh` },
      { '@type': 'ListItem', position: 2, name: '博客', item: `${BASE_URL}/zh/blog` },
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
    inLanguage: 'zh',
    author: {
      '@type': 'Person',
      '@id': 'https://edualist.com/#ozlem-cimen',
      name: 'Ozlem Cimen',
      jobTitle: 'Education Professional, co-founder of Edualist.com',
      url: 'https://edualist.com',
    },
    publisher: { '@id': 'https://eduentry.com/#organization' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': 'https://eduentry.com/#website' },
  }

  const faqSchema = post.faqs && post.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map(({ q, a }: { q: string; a: string }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null

  const related = BLOG_POSTS_ZH
    .filter((p) => p.slug !== slug)
    .map((p) => ({ post: p, score: p.tags.filter((t: string) => post.tags.includes(t)).length }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.post)

  return (
    <main lang="zh" className="max-w-3xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <nav className="text-sm text-[#6e6e73] mb-8">
        <Link href="/zh" className="hover:text-[#1d1d1f]">首页</Link>
        <span className="mx-2">›</span>
        <Link href="/zh/blog" className="hover:text-[#1d1d1f]">博客</Link>
        <span className="mx-2">›</span>
        <span className="text-[#1d1d1f]">{post.shortTitle}</span>
      </nav>

      <div className="mb-12">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1d1d1f] mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-[#6e6e73]">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('zh-CN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <a href="https://edualist.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">
            Ozlem Cimen
          </a>
        </div>
      </div>

      <article className="prose prose-gray max-w-none space-y-12">
        {getChineseBlogContent(post.contentSlug ?? slug)}
      </article>

      {/* Internal service links */}
      <section className="mt-12 border border-[#d2d2d7] rounded-2xl p-6 bg-[#f5f5f7]/50">
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-4">来自Eduentry</p>
        <div className="space-y-4">
          {[
            { href: 'https://eduentry.ai/zh', title: '实习准备评估', desc: '面向14岁以上高中生的免费34题自适应评估。个性化报告和AI职业洞察。' },
            { href: '/zh/fangfalun', title: '我们的评估方法论', desc: '使用与PISA、GCSE和CAT4相同100分量表的自适应IRT评估。' },
            { href: '/zh', title: '学术评估', desc: '从数学到英语，从语言推理到非语言推理——面向6–17岁儿童的免费自适应评估。' },
          ].map((link) => (
            <a key={link.href} href={link.href} className="flex items-start gap-3 group">
              <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div>
                <p className="text-sm font-medium text-[#1d1d1f] group-hover:text-[#4F46E5] transition-colors">{link.title}</p>
                <p className="text-xs text-[#6e6e73] mt-0.5">{link.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      {post.cta && (
        <div className="mt-10 bg-[#eef2ff] border border-[#c7d2fe] rounded-3xl p-8">
          <h3 className="font-bold text-[#1d1d1f] text-lg mb-2">{post.cta.heading}</h3>
          <p className="text-sm text-[#636366] leading-relaxed mb-5">{post.cta.body}</p>
          <a href={post.cta.href} className="inline-block bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors">
            {post.cta.label} →
          </a>
        </div>
      )}

      {/* FAQ */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5">常见问题</h2>
          <div className="space-y-2">
            {post.faqs.map(({ q, a }: { q: string; a: string }) => (
              <details key={q} className="group bg-[#f5f5f7] border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-3.5 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#636366] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#636366] leading-relaxed border-t border-[#e5e5ea] pt-3">{a}</div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related posts */}
      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5">相关文章</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((p) => (
              <Link key={p.slug} href={`/zh/blog/${p.slug}`} className="group border border-[#d2d2d7] rounded-2xl p-5 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all">
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug group-hover:text-[#4F46E5] transition-colors mb-2">
                  {p.shortTitle}
                </h3>
                <div className="text-xs text-[#6e6e73]">{p.readTime}</div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
