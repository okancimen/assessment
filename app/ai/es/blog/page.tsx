import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: 'Blog — Guías de prácticas y desarrollo profesional',
  description:
    'Investigación y análisis sobre preparación para prácticas, experiencia laboral en el instituto y acceso a la universidad — del equipo de Eduentry.',
  keywords: [
    'guía de prácticas',
    'experiencia laboral instituto',
    'prácticas antes de la universidad',
    'prácticas tecnológicas estudiantes',
    'desarrollo profesional jóvenes',
    'acceso universitario experiencia laboral',
  ],
  alternates: {
    canonical: `${BASE_URL}/es/blog`,
    languages: { es: `${BASE_URL}/es/blog`, 'x-default': `${BASE_URL}/blog` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Eduentry Blog — Guías de prácticas y desarrollo profesional',
    description: 'Investigación y análisis sobre preparación para prácticas, experiencia laboral en el instituto y acceso a la universidad.',
    url: `${BASE_URL}/es/blog`,
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eduentry Blog — Guías de prácticas y desarrollo profesional',
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
    name: 'Eduentry Blog — Guías de prácticas y desarrollo profesional',
    url: `${BASE_URL}/es/blog`,
    numberOfItems: BLOG_POSTS_ES.length,
    itemListElement: BLOG_POSTS_ES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${BASE_URL}/es/blog/${p.slug}`,
      name: p.title,
    })),
  }

  return (
    <main lang="es" className="max-w-4xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/es" className="hover:text-gray-600">Inicio</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Blog</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Eduentry Blog
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
          Investigación y análisis sobre preparación para prácticas, experiencia laboral en el instituto y desarrollo profesional.
        </p>
      </div>

      <div className="space-y-6">
        {BLOG_POSTS_ES.map((post) => (
          <Link
            key={post.slug}
            href={`/es/blog/${post.slug}`}
            className="block border border-gray-100 rounded-2xl p-6 sm:p-8 hover:border-indigo-200 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">{post.title}</h2>
            <p className="text-gray-500 leading-relaxed mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
