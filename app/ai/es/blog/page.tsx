import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: 'Guías de prácticas y desarrollo profesional — Blog de Eduentry',
  description:
    'Investigación y análisis sobre preparación para prácticas, experiencia laboral en el instituto y acceso a la universidad — del equipo de Eduentry. Guías para tecnología, empresa, datos y marketing.',
  keywords: [
    'guía de prácticas',
    'experiencia laboral instituto',
    'prácticas antes de la universidad',
    'prácticas tecnológicas estudiantes',
    'desarrollo profesional jóvenes',
    'acceso universitario experiencia laboral',
    'guía orientación profesional',
    'prácticas Reino Unido guía',
  ],
  alternates: {
    canonical: `${BASE_URL}/es/blog`,
    languages: {
      es: `${BASE_URL}/es/blog`,
      'en-GB': `${BASE_URL}/blog`,
      tr: `${BASE_URL}/tr/blog`,
      'x-default': `${BASE_URL}/blog`,
    },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Guías de prácticas y desarrollo profesional — Blog de Eduentry',
    description: 'Investigación y análisis sobre preparación para prácticas, experiencia laboral en el instituto y acceso a la universidad.',
    url: `${BASE_URL}/es/blog`,
    siteName: 'Eduentry.ai',
    locale: 'es_ES',
    alternateLocale: ['en_GB', 'tr_TR'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guías de prácticas y desarrollo profesional — Blog de Eduentry',
    description: 'Investigación y análisis sobre preparación para prácticas, experiencia laboral en el instituto y acceso a la universidad.',
  },
}

export default function ESBlogIndexPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${BASE_URL}/es` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/es/blog` },
    ],
  }

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Guías de prácticas y desarrollo profesional — Blog de Eduentry',
    url: `${BASE_URL}/es/blog`,
    inLanguage: 'es',
    numberOfItems: BLOG_POSTS_ES.length,
    itemListElement: BLOG_POSTS_ES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/es/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="es" className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="text-sm text-[#6e6e73] mb-8">
          <Link href="/es" className="hover:text-[#1d1d1f]">Inicio</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">Blog</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
            Guías de Prácticas &amp; Carrera
          </h1>
          <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl">
            Guías basadas en evidencia sobre experiencia laboral temprana, desarrollo profesional y acceso a la universidad para estudiantes de instituto.
          </p>
        </div>

        <div className="space-y-6">
          {BLOG_POSTS_ES.map((post) => (
            <Link
              key={post.slug}
              href={`/es/blog/${post.slug}`}
              className="block border border-[#d2d2d7] rounded-2xl p-6 sm:p-8 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
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
