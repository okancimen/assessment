import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { INSIGHT_POSTS_TR, INSIGHT_SLUGS_TR } from '../content'
import { INSIGHT_SLUGS } from '../../../insights/content'

function renderInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/80">$1</strong>')
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-white/60 underline decoration-white/20 hover:text-white hover:decoration-white/50 transition-colors">$1</a>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-white/60 underline decoration-white/20 hover:text-white hover:decoration-white/50 transition-colors">$1</a>')
}

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return INSIGHT_SLUGS_TR.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = INSIGHT_POSTS_TR.find(p => p.slug === slug)
  if (!post) return {}
  const url = `https://eduentry.ai/tr/insights/${slug}`
  const hasEN = INSIGHT_SLUGS.includes(slug)
  return {
    title: { absolute: `${post.title} | Eduentry.ai` },
    description: post.description,
    alternates: {
      canonical: url,
      ...(hasEN && {
        languages: {
          tr: url,
          en: `https://eduentry.ai/insights/${slug}`,
          'x-default': `https://eduentry.ai/insights/${slug}`,
        },
      }),
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      siteName: 'Eduentry.ai',
      images: [{ url: 'https://eduentry.ai/opengraph-image', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@eduentrycom',
      creator: '@eduentrycom',
      title: post.title,
      description: post.description,
      images: ['https://eduentry.ai/opengraph-image'],
    },
  }
}

const TAG_COLOR: Record<string, string> = {
  'Lise Stajı': '#60A5FA',
  'Üniversite Burs Programı': '#A78BFA',
  'Kariyer Rehberi': '#34D399',
}

export default async function InsightPostTRPage({ params }: Props) {
  const { slug } = await params
  const post = INSIGHT_POSTS_TR.find(p => p.slug === slug)
  if (!post) notFound()

  const color = TAG_COLOR[post.tag] ?? '#fff'
  const url = `https://eduentry.ai/tr/insights/${slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    datePublished: '2026-10-15',
    dateModified: '2026-10-15',
    inLanguage: 'tr',
    author: { '@type': 'Organization', name: 'Eduentry', url: 'https://eduentry.ai' },
    publisher: {
      '@type': 'Organization',
      name: 'Eduentry',
      url: 'https://eduentry.ai',
      logo: { '@type': 'ImageObject', url: 'https://eduentry.ai/logo-ai-long.png' },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa',  item: 'https://eduentry.ai/tr' },
        { '@type': 'ListItem', position: 2, name: 'Görüşler',   item: 'https://eduentry.ai/tr/insights' },
        { '@type': 'ListItem', position: 3, name: post.title,   item: url },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div
        className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 w-[700px] h-[360px] rounded-full opacity-[0.05] blur-0 sm:blur-[120px]"
        style={{ background: color }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/tr/insights"
          className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors"
        >
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M8 2L4 6l4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          İçgörülere Dön
        </Link>
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full border"
            style={{ color, borderColor: `${color}40`, background: `${color}10` }}
          >
            {post.tag.toUpperCase()}
          </span>
          <span className="text-xs text-white/30">{post.readTime} okuma</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
          {post.title}
        </h1>
        <p className="text-base text-gray-400 leading-relaxed">{post.description}</p>
      </header>

      <article className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
        <hr className="border-white/[0.06]" />

        {post.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-lg font-semibold text-white mb-4">{section.heading}</h2>
            <div className="text-gray-400 leading-relaxed text-sm space-y-4">
              {section.body.split('\n\n').map((para, j) => {
                if (para.startsWith('|') || para.includes('\n|')) {
                  const rows = para.split('\n').filter(l => l.trim().startsWith('|') && !l.match(/^\|[-\s|]+\|$/))
                  const [header, ...body] = rows
                  const cols = header.split('|').filter(Boolean).map(c => c.trim())
                  return (
                    <div key={j} className="overflow-x-auto rounded-xl border border-white/[0.08] mt-2">
                      <table className="w-full text-xs border-collapse">
                        <thead>
                          <tr style={{ background: `${color}12` }}>
                            {cols.map((c, ci) => (
                              <th key={ci} className="px-4 py-3 text-left font-semibold text-white/80 border-b border-white/[0.08] whitespace-nowrap">{c}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {body.map((row, ri) => {
                            const cells = row.split('|').filter(Boolean).map(c => c.trim())
                            return (
                              <tr key={ri} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                                {cells.map((cell, ci) => (
                                  <td key={ci} className={`px-4 py-3 leading-relaxed ${ci === 0 ? 'text-white/60 font-medium' : 'text-gray-500'}`}
                                    dangerouslySetInnerHTML={{ __html: cell.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white/70">$1</strong>') }} />
                                ))}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  )
                }
                if (para.startsWith('- ') || para.includes('\n- ')) {
                  const items = para.split('\n').filter(Boolean)
                  return (
                    <ul key={j} className="space-y-2 ml-1">
                      {items.map((item, k) => (
                        <li key={k} className="flex gap-2">
                          <span style={{ color }} className="mt-0.5 shrink-0">·</span>
                          <span dangerouslySetInnerHTML={{ __html: renderInline(item.replace(/^-\s*/, '')) }} />
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (para.match(/^\d+\./m)) {
                  const items = para.split('\n').filter(Boolean)
                  return (
                    <ol key={j} className="space-y-2 ml-1 list-none">
                      {items.map((item, k) => (
                        <li key={k} className="flex gap-2">
                          <span style={{ color }} className="shrink-0 font-mono text-xs mt-0.5">{k + 1}.</span>
                          <span dangerouslySetInnerHTML={{ __html: renderInline(item.replace(/^\d+\.\s*/, '')) }} />
                        </li>
                      ))}
                    </ol>
                  )
                }
                return (
                  <p key={j} dangerouslySetInnerHTML={{ __html: renderInline(para) }} />
                )
              })}
            </div>
          </section>
        ))}

        <div
          className="rounded-2xl border p-8 text-center"
          style={{ borderColor: `${color}30`, background: `${color}08` }}
        >
          <p className="text-sm text-white/60 mb-4">Bir sonraki adımı atmaya hazır mısın?</p>
          <Link
            href={post.cta.href}
            className="inline-block px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
            style={{ background: `${color}25`, border: `1px solid ${color}50` }}
          >
            {post.cta.label}
          </Link>
        </div>
      </article>

      <RelatedPostsTR currentSlug={slug} tag={post.tag} />
    </main>
  )
}

function RelatedPostsTR({ currentSlug, tag }: { currentSlug: string; tag: string }) {
  const related = INSIGHT_POSTS_TR.filter(p => p.slug !== currentSlug && p.tag === tag).slice(0, 3)
  if (related.length === 0) return null
  const color = TAG_COLOR[tag] ?? '#fff'

  return (
    <section className="border-t border-white/[0.04] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-mono tracking-widest mb-6" style={{ color }}>{tag.toUpperCase()} ALANINDA DAHA FAZLA</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map(post => (
            <Link
              key={post.slug}
              href={`/tr/insights/${post.slug}`}
              className="group rounded-2xl p-5 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] transition-all"
            >
              <h3 className="text-white/80 font-medium text-sm leading-snug mb-2 group-hover:text-white transition-colors">{post.title}</h3>
              <p className="text-xs mt-3 font-medium group-hover:underline" style={{ color }}>Oku →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
