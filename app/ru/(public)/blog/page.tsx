import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Руководства по стажировке и карьере — Блог Eduentry',
  description:
    'Доказательные руководства по раннему опыту работы, карьерному развитию и поступлению в университет — от команды Eduentry. Для старшеклассников в области технологий, бизнеса, данных и маркетинга.',
  keywords: [
    'руководство по стажировке',
    'опыт работы в школе',
    'стажировка до университета',
    'стажировка в технологиях для студентов',
    'карьерное развитие молодёжи',
    'поступление в университет опыт работы',
    'карьерный путеводитель',
  ],
  alternates: {
    canonical: `${BASE_URL}/ru/blog`,
    languages: {
      ru: `${BASE_URL}/ru/blog`,
      tr: `${BASE_URL}/tr/blog`,
      es: `${BASE_URL}/es/blog`,
      'en-GB': `${BASE_URL}/blog`,
      fr: `${BASE_URL}/fr/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Руководства по стажировке и карьере — Блог Eduentry',
    description: 'Доказательные руководства по раннему опыту работы, карьерному развитию и поступлению в университет.',
    url: `${BASE_URL}/ru/blog`,
    siteName: 'Eduentry',
    locale: 'ru_RU',
    alternateLocale: ['en_GB', 'tr_TR'],
    images: [{ url: `${BASE_URL}/ru/blog/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry Blog — Руководства по стажировке и карьере' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Руководства по стажировке и карьере — Блог Eduentry',
    description: 'Доказательные руководства по раннему опыту работы, карьерному развитию и поступлению в университет.',
    images: [`${BASE_URL}/ru/blog/opengraph-image`],
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
    name: 'Руководства по стажировке и карьере',
    url: `${BASE_URL}/ru/blog`,
    itemListElement: BLOG_POSTS_RU.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${BASE_URL}/ru/blog/${p.slug}`,
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
            Стажировка &amp; Карьерные руководства
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            Доказательные руководства по раннему опыту работы, карьерному развитию и поступлению в университет — для старшеклассников.
          </p>
        </div>

        <div className="space-y-6">
          {[...BLOG_POSTS_RU].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
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
