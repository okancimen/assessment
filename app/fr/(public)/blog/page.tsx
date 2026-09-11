import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Guides de stage & carrière — Blog Eduentry',
  description:
    'Recherches et analyses sur la préparation aux stages, l\'expérience professionnelle au lycée et l\'accès à l\'université — par l\'équipe Eduentry. Guides pour la technologie, l\'entreprise, les données et le marketing.',
  keywords: [
    'guide de stage',
    'expérience professionnelle lycée',
    'stage avant l\'université',
    'stage technologique lycéens',
    'développement professionnel jeunes',
    'accès universitaire expérience professionnelle',
    'guide orientation professionnelle',
  ],
  alternates: {
    canonical: `${BASE_URL}/fr/blog`,
    languages: {
      fr: `${BASE_URL}/fr/blog`,
      'en-GB': `${BASE_URL}/blog`,
      tr: `${BASE_URL}/tr/blog`,
      es: `${BASE_URL}/es/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Guides de stage & carrière — Blog Eduentry',
    description: 'Recherches et analyses sur la préparation aux stages, l\'expérience professionnelle au lycée et l\'accès à l\'université.',
    url: `${BASE_URL}/fr/blog`,
    siteName: 'Eduentry',
    locale: 'fr_FR',
    alternateLocale: ['en_GB', 'tr_TR', 'es_ES'],
    images: [{ url: `${BASE_URL}/fr/blog/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry Blog — Guides de Stage & Carrière' }],
  },
}

export default function FRBlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE_URL}/fr` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/fr/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Guides de Stage et Développement Professionnel',
    url: `${BASE_URL}/fr/blog`,
    itemListElement: BLOG_POSTS_FR.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.title,
      url: `${BASE_URL}/fr/blog/${p.slug}`,
    })),
  }

  return (
    <main lang="fr" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/fr" className="hover:text-[#1d1d1f]">Accueil</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            Guides de Stage &amp; Carrière
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            Guides fondés sur des données sur l&apos;expérience professionnelle précoce, le développement de carrière et l&apos;accès à l&apos;université pour les lycéens.
          </p>
        </div>

        <div className="space-y-6">
          {[...BLOG_POSTS_FR].sort((a, b) => b.date.localeCompare(a.date)).map((post) => (
            <Link
              key={post.slug}
              href={`/fr/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
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
