import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'أدلة التدريب والمهنة — مدونة Eduentry',
  description:
    'أبحاث وتحليلات حول الاستعداد للتدريب والخبرة المهنية في المرحلة الثانوية والوصول إلى الجامعة — من فريق Eduentry. أدلة للتكنولوجيا والأعمال والبيانات والتسويق.',
  keywords: [
    'دليل التدريب',
    'خبرة مهنية ثانوية',
    'تدريب قبل الجامعة',
    'تدريب تكنولوجيا الإمارات',
    'تطوير مهني شباب',
    'قبول جامعي خبرة عمل',
    'دليل توجيه مهني',
  ],
  alternates: {
    canonical: `${BASE_URL}/ar/blog`,
    languages: {
      ar: `${BASE_URL}/ar/blog`,
      'en-GB': `${BASE_URL}/blog`,
      tr: `${BASE_URL}/tr/blog`,
      es: `${BASE_URL}/es/blog`,
      fr: `${BASE_URL}/fr/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'أدلة التدريب والمهنة — مدونة Eduentry',
    description: 'أبحاث وتحليلات حول الاستعداد للتدريب والخبرة المهنية في المرحلة الثانوية والوصول إلى الجامعة.',
    url: `${BASE_URL}/ar/blog`,
    siteName: 'Eduentry',
    locale: 'ar_AE',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'fr_FR'],
    images: [{ url: `${BASE_URL}/ar/blog/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry Blog — أدلة التدريب والمهنة' }],
  },
}

export default function ARBlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: `${BASE_URL}/ar` },
      { '@type': 'ListItem', position: 2, name: 'المدونة', item: `${BASE_URL}/ar/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'أدلة التدريب والتطوير المهني',
    url: `${BASE_URL}/ar/blog`,
    itemListElement: BLOG_POSTS_AR.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${BASE_URL}/ar/blog/${p.slug}`,
    })),
  }

  return (
    <main lang="ar" dir="rtl" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/ar" className="hover:text-[#1d1d1f]">الرئيسية</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">المدونة</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            المدونة
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            أدلة مبنية على البيانات حول الخبرة المهنية المبكرة والتطوير المهني والوصول إلى الجامعة لطلاب الثانوية في الإمارات والمنطقة العربية.
          </p>
        </div>

        <div className="space-y-6">
          {[...BLOG_POSTS_AR].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/ar/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('ar-AE', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-snug">{post.title}</h2>
              <p className="text-[#6e6e73] leading-relaxed mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
