import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: 'Руководства по стажировке и карьере — Блог Eduentry',
  description:
    'Исследования и анализ в области подготовки к стажировке, опыта работы в старшей школе и поступления в университет — от команды Eduentry. Руководства по технологиям, бизнесу, данным и маркетингу.',
  keywords: [
    'руководство по стажировке',
    'опыт работы старшая школа',
    'стажировка до университета',
    'стажировка в IT для школьников',
    'карьерное развитие подростки',
    'поступление в университет опыт работы',
    'профориентация руководство',
    'стажировка школьники руководство',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru/blog`,
    languages: {
      ru: `${BASE_URL}/ru/blog`,
      'en-GB': `${BASE_URL}/blog`,
      tr: `${BASE_URL}/tr/blog`,
      es: `${BASE_URL}/es/blog`,
      fr: `${BASE_URL}/fr/blog`,
      ar: `${BASE_URL}/ar/blog`,
      zh: `${BASE_URL}/zh/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Руководства по стажировке и карьере — Блог Eduentry',
    description: 'Исследования и анализ в области подготовки к стажировке, опыта работы в старшей школе и поступления в университет.',
    url: `${BASE_URL}/ru/blog`,
    siteName: 'Eduentry.ai',
    locale: 'ru_RU',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES', 'fr_FR', 'ar_AE', 'zh_CN'],
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai Блог — Руководства по стажировке и карьере' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Руководства по стажировке и карьере — Блог Eduentry',
    description: 'Исследования и анализ в области подготовки к стажировке, опыта работы в старшей школе и поступления в университет.',
  },
}

export default function RUBlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE_URL}/ru` },
      { '@type': 'ListItem', position: 2, name: 'Блог', item: `${BASE_URL}/ru/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Руководства по стажировке и карьере — Блог Eduentry',
    url: `${BASE_URL}/ru/blog`,
    inLanguage: 'ru',
    numberOfItems: BLOG_POSTS_RU.length,
    itemListElement: BLOG_POSTS_RU.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/ru/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="ru" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/ru" className="hover:text-[#1d1d1f]">Главная</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">Блог</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            Стажировка &amp; Карьера
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            Руководства, основанные на данных, по раннему профессиональному опыту, развитию карьеры и поступлению в университет для старшеклассников.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS_RU.map((post) => (
            <Link
              key={post.slug}
              href={`/ru/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
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
