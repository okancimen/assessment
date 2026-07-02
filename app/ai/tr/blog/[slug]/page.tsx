import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS_TR, getTurkishPostBySlug } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS } from '@/app/blog/posts'
import { getTurkishBlogContent } from '@/app/blog/content-tr'

const BASE_URL = 'https://eduentry.ai'
const COM_URL = 'https://eduentry.com'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipSlugs = new Set(BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).map(p => p.slug))
const esSlugs = new Set(BLOG_POSTS_ES.map(p => p.slug))

export function generateStaticParams() {
  return BLOG_POSTS_TR.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getTurkishPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/tr/blog/${slug}`
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: {
        tr: url,
        en: internshipSlugs.has(slug) ? `${BASE_URL}/blog/${slug}` : `${COM_URL}/blog/${slug}`,
        ...(esSlugs.has(slug) ? { es: `${BASE_URL}/es/blog/${slug}` } : {}),
        'x-default': internshipSlugs.has(slug) ? `${BASE_URL}/blog/${slug}` : `${COM_URL}/blog/${slug}`,
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
      alternateLocale: ['en_GB', 'es_ES'],
      images: [{ url: `/tr/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/tr/blog/${slug}/opengraph-image`],
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
    url,
    inLanguage: 'tr',
    author: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Eduentry',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo-ai.png`, width: 200, height: 60 },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    isPartOf: { '@id': `${BASE_URL}/#website` },
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

  const related = BLOG_POSTS_TR.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main lang="tr" className="max-w-3xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/tr" className="hover:text-gray-600">Ana Sayfa</Link>
        <span className="mx-2">›</span>
        <Link href="/tr/blog" className="hover:text-gray-600">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">{post.shortTitle}</span>
      </nav>

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
            {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>Eduentry Araştırma Ekibi</span>
        </div>
      </div>

      <article className="prose prose-gray max-w-none space-y-12">
        {getTurkishBlogContent(slug)}
      </article>

      {related.length > 0 && (
        <section className="mt-16 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">İlgili makaleler</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/tr/blog/${p.slug}`}
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

      <section className="mt-16 mb-8 border border-gray-100 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Başlamaya hazır mısın? Alanını seç.</h2>
        <p className="text-sm text-gray-400 mb-6">Ücretsiz 34 soruluk değerlendirme — 35 dakika sürer. Devam edebileceğin bir alan seç.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: '/tr/tech',              icon: '💻', label: 'Teknoloji',         desc: 'Kodlama · Algoritmalar · Siber Güvenlik' },
            { href: '/tr/business',          icon: '📈', label: 'İş Dünyası',        desc: 'Strateji · Finans · Operasyon' },
            { href: '/tr/data-analytics',    icon: '📊', label: 'Veri Analitiği',    desc: 'Grafikler · SQL · İçgörüler' },
            { href: '/tr/digital-marketing', icon: '📣', label: 'Dijital Pazarlama', desc: 'SEO · Sosyal Medya · Kampanyalar' },
          ].map(({ href, icon, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all"
            >
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <div className="font-semibold text-gray-900 text-sm group-hover:text-indigo-700 transition-colors">{label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center bg-indigo-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">{post.cta?.heading ?? 'Staj hazırlığını keşfet'}</h2>
        <p className="text-indigo-200 mb-8">{post.cta?.body ?? '14 yaş üstü lise öğrencileri için ücretsiz uyarlanabilir değerlendirme.'}</p>
        <CtaLink href={post.cta?.href ?? '/apply'} label="tr_blog_cta" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
          {post.cta?.label ?? 'Ücretsiz değerlendirmeyi başlat'}
        </CtaLink>
      </section>
    </main>
  )
}
