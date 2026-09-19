import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS_AR, getArabicPostBySlug } from '@/app/blog/posts-ar'
import { BLOG_POSTS } from '@/app/blog/posts'
import { getArabicBlogContent } from '@/app/blog/content-ar'

const BASE_URL = 'https://eduentry.ai'
const COM_URL = 'https://eduentry.com'
const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipSlugs = new Set(BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).map(p => p.slug))

export function generateStaticParams() {
  return BLOG_POSTS_AR.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getArabicPostBySlug(slug)
  if (!post) return {}
  const url = `${BASE_URL}/ar/blog/${slug}`
  const enSlug = post.contentSlug ?? slug
  const enUrl = internshipSlugs.has(enSlug) ? `${BASE_URL}/blog/${enSlug}` : `${COM_URL}/blog/${enSlug}`
  return {
    title: post.shortTitle,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: { ar: url, en: enUrl, 'x-default': enUrl },
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      locale: 'ar_AE',
      alternateLocale: ['en_GB'],
      images: [{ url: `/ar/blog/${slug}/opengraph-image`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`/ar/blog/${slug}/opengraph-image`],
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
      { '@type': 'ListItem', position: 1, name: 'الصفحة الرئيسية', item: `${BASE_URL}/ar` },
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
    image: { '@type': 'ImageObject', url: `${url}/opengraph-image`, width: 1200, height: 630 },
    url,
    inLanguage: 'ar',
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

  const related = BLOG_POSTS_AR.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <main lang="ar" dir="rtl" className="max-w-3xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/ar" className="hover:text-gray-600">الصفحة الرئيسية</Link>
        <span className="mx-2">›</span>
        <Link href="/ar/blog" className="hover:text-gray-600">المدونة</Link>
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
            {new Date(post.date).toLocaleDateString('ar-AE', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime}</span>
          <span>·</span>
          <span>فريق أبحاث Eduentry</span>
        </div>
      </div>

      <article className="prose prose-gray max-w-none space-y-12">
        {getArabicBlogContent(post.contentSlug ?? slug)}
      </article>

      {related.length > 0 && (
        <section className="mt-16 mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/ar/blog/${p.slug}`}
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
        <h2 className="text-xl font-bold text-gray-900 mb-2">جاهز للبدء؟ اختر مجالك.</h2>
        <p className="text-sm text-gray-400 mb-6">تقييم مجاني من 34 سؤالاً — 35 دقيقة. اختر المجال الذي تريد تطويره.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: '/tech',              icon: '💻', label: 'التكنولوجيا',      desc: 'البرمجة · الخوارزميات · الأمن السيبراني' },
            { href: '/business',          icon: '📈', label: 'الأعمال',          desc: 'الاستراتيجية · المالية · العمليات' },
            { href: '/data-analytics',    icon: '📊', label: 'تحليل البيانات',   desc: 'الرسوم البيانية · SQL · الرؤى' },
            { href: '/digital-marketing', icon: '📣', label: 'التسويق الرقمي',   desc: 'SEO · وسائل التواصل · الحملات' },
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
        <h2 className="text-3xl font-bold mb-4">{post.cta?.heading ?? 'اكتشف مستوى جاهزيتك'}</h2>
        <p className="text-indigo-200 mb-8">{post.cta?.body ?? 'تقييم تكيفي مجاني لطلاب الثانوية فوق 14 عاماً.'}</p>
        <CtaLink href={post.cta?.href ?? '/apply'} label="ar_blog_cta" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors text-lg">
          {post.cta?.label ?? 'ابدأ التقييم المجاني'}
        </CtaLink>
      </section>
    </main>
  )
}
