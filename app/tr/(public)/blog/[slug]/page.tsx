import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS_TR, getTurkishPostBySlug } from '@/app/blog/posts-tr'
import { getTurkishBlogContent } from '@/app/blog/content-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const esByContentSlug = new Map(BLOG_POSTS_ES.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return BLOG_POSTS_TR.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getTurkishPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/tr/blog/${slug}`
  const enSlug = post.contentSlug ?? slug
  const esSlug = esByContentSlug.get(enSlug)
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: {
        tr: url,
        'en-GB': `${BASE_URL}/blog/${enSlug}`,
        ...(esSlug ? { es: `${BASE_URL}/es/blog/${esSlug}` } : {}),
        'x-default': `${BASE_URL}/blog/${enSlug}`,
      },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      locale: 'tr_TR',
      alternateLocale: ['en_GB'],
      images: [{ url: `${BASE_URL}/tr/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/tr/blog/${slug}/opengraph-image`],
    },
  }
}

export default async function TRBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getTurkishPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/tr/blog/${slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${BASE_URL}/tr` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/tr/blog` },
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
    inLanguage: 'tr',
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

  const related = BLOG_POSTS_TR
    .filter((p) => p.slug !== slug)
    .map((p) => ({ post: p, score: p.tags.filter((t: string) => post.tags.includes(t)).length }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.post)

  return (
    <main lang="tr" className="max-w-3xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <nav className="text-sm text-[#6e6e73] mb-8">
        <Link href="/tr" className="hover:text-[#1d1d1f]">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <Link href="/tr/blog" className="hover:text-[#1d1d1f]">Blog</Link>
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
            {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <a href="https://edualist.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f] transition-colors">
            Ozlem Cimen
          </a>
          <span>·</span>
          <span>Education Professional</span>
        </div>
      </div>

      <article className="prose prose-gray max-w-none space-y-12">
        {getTurkishBlogContent(post.contentSlug ?? slug)}
      </article>

      {/* Internal service links */}
      <section className="mt-12 border border-[#d2d2d7] rounded-2xl p-6 bg-[#f5f5f7]/50">
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-4">Eduentry&apos;den</p>
        <div className="space-y-4">
          {[
            { href: 'https://eduentry.ai/tr', title: 'Staj Hazırlık Değerlendirmesi', desc: '14 yaş üstü lise öğrencileri için ücretsiz 34 soruluk adaptif test. Kişiselleştirilmiş rapor ve yapay zeka kariyer içgörüleri.' },
            { href: '/tr/metodoloji', title: 'Değerlendirme Metodolojimiz', desc: 'PISA, GCSE ve CAT4 ile aynı 100 puanlık ölçekte adaptif IRT puanlaması.' },
            { href: '/tr', title: 'Akademik Değerlendirme', desc: 'Matematikten İngilizceye, sözlü akıldan sayısal akıla — 6-17 yaş arası için ücretsiz adaptif test.' },
          ].map((link) => (
            <a key={link.href} href={link.href} className="flex items-start gap-3 group">
              <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
              <div>
                <div className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#4F46E5] transition-colors">{link.title}</div>
                <div className="text-xs text-[#6e6e73] mt-0.5">{link.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-16 mb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">İlgili yazılar</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/tr/blog/${p.slug}`}
                className="group border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 hover:bg-[#eef2ff]/40 transition-colors flex flex-col"
              >
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.slice(0, 2).map((tag: string) => (
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

      <section className="mt-16 mb-8 bg-[#4F46E5] rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{post.cta?.heading ?? 'Staj hazırlığını keşfet'}</h2>
        <p className="text-indigo-200 mb-8">{post.cta?.body ?? '14 yaş üstü lise öğrencileri için ücretsiz uyarlanabilir değerlendirme.'}</p>
        <a
          href={post.cta?.href ?? 'https://eduentry.ai/tr'}
          className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg"
        >
          {post.cta?.label ?? 'Ücretsiz değerlendirmeyi başlat'}
        </a>
      </section>
    </main>
  )
}
