import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS_AR, getArabicPostBySlug } from '@/app/blog/posts-ar'
import { getArabicBlogContent } from '@/app/blog/content-ar'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const esByContentSlug = new Map(BLOG_POSTS_ES.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const trByContentSlug = new Map(BLOG_POSTS_TR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const frByContentSlug = new Map(BLOG_POSTS_FR.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))
const ruByContentSlug = new Map(BLOG_POSTS_RU.filter(p => p.contentSlug).map(p => [p.contentSlug!, p.slug]))

const BASE_URL = 'https://eduentry.com'

export function generateStaticParams() {
  return BLOG_POSTS_AR.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getArabicPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/ar/blog/${slug}`
  const enSlug = post.contentSlug ?? slug
  const esSlug = esByContentSlug.get(enSlug)
  const trSlug = trByContentSlug.get(enSlug)
  const frSlug = frByContentSlug.get(enSlug)
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: {
        ar: url,
        'en-GB': `${BASE_URL}/blog/${enSlug}`,
        ...(esByContentSlug.has(enSlug) ? { es: `${BASE_URL}/es/blog/${esByContentSlug.get(enSlug)}` } : {}),
        ...(trByContentSlug.has(enSlug) ? { tr: `${BASE_URL}/tr/blog/${trByContentSlug.get(enSlug)}` } : {}),
        ...(frByContentSlug.has(enSlug) ? { fr: `${BASE_URL}/fr/blog/${frByContentSlug.get(enSlug)}` } : {}),
        ...(ruByContentSlug.has(enSlug) ? { ru: `${BASE_URL}/ru/blog/${ruByContentSlug.get(enSlug)}` } : {}),
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
      modifiedTime: post.dateModified ?? post.date,
      locale: 'ar_AE',
      alternateLocale: ['en_GB'],
      images: [{ url: `${BASE_URL}/ar/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${BASE_URL}/ar/blog/${slug}/opengraph-image`],
    },
  }
}

export default async function ARBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getArabicPostBySlug(slug)
  if (!post) notFound()

  const url = `${BASE_URL}/ar/blog/${slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/ar` },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${BASE_URL}/ar/blog` },
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
    inLanguage: 'ar',
    author: { '@id': 'https://eduentry.com/#organization' },
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

  const related = BLOG_POSTS_AR
    .filter((p) => p.slug !== slug)
    .map((p) => ({ post: p, score: p.tags.filter((t: string) => post.tags.includes(t)).length }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.post)

  return (
    <main lang="ar" dir="rtl" className="max-w-3xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <nav className="text-sm text-[#6e6e73] mb-8">
        <Link href="/ar" className="hover:text-[#1d1d1f]">الرئيسية</Link>
        <span className="mx-2">›</span>
        <Link href="/ar/blog" className="hover:text-[#1d1d1f]">المدونة</Link>
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
            {new Date(post.date).toLocaleDateString('ar-AE', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>فريق تحرير Eduentry</span>
        </div>
      </div>

      <article className="prose prose-gray max-w-none space-y-12">
        {getArabicBlogContent(post.contentSlug ?? slug)}
      </article>

      {/* Internal service links */}
      <section className="mt-12 border border-[#d2d2d7] rounded-2xl p-6 bg-[#f5f5f7]/50">
        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-4">من Eduentry</p>
        <div className="space-y-4">
          {[
            { href: 'https://eduentry.ai/ar', title: 'تقييم الاستعداد للتدريب', desc: 'اختبار تكيفي مجاني من 34 سؤالاً لطلاب الثانوية فوق 14 عاماً. تقرير شخصي ورؤى مهنية بالذكاء الاصطناعي.' },
            { href: '/ar/manhajiyya', title: 'منهجية التقييم لدينا', desc: 'تقييم IRT تكيفي على نفس مقياس 100 نقطة المستخدم في PISA وGCSE.' },
            { href: '/ar', title: 'التقييم الأكاديمي', desc: 'من الرياضيات إلى الإنجليزية، من الاستدلال اللفظي إلى غير اللفظي — اختبار تكيفي مجاني للأعمار 6-17.' },
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
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-6">مقالات ذات صلة</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/ar/blog/${p.slug}`}
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
        <h2 className="text-3xl font-bold mb-4">{post.cta?.heading ?? 'اكتشف مستوى استعدادك'}</h2>
        <p className="text-indigo-200 mb-8">{post.cta?.body ?? 'تقييم تكيفي مجاني لطلاب الثانوية فوق 14 عاماً.'}</p>
        <a
          href={post.cta?.href ?? 'https://eduentry.ai/ar'}
          className="inline-block bg-white text-[#4F46E5] px-8 py-4 rounded-xl font-semibold hover:bg-[#eef2ff] transition-colors text-lg"
        >
          {post.cta?.label ?? 'ابدأ التقييم المجاني'}
        </a>
      </section>
    </main>
  )
}
