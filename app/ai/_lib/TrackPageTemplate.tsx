import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'
import { TRACK_I18N, type TrackId, type Locale } from './track-i18n'

interface Props {
  track: TrackId
  locale: Locale
}

const LOCALE_SLUGS: Record<Locale, Record<TrackId, string>> = {
  tr: {
    tech: 'teknoloji',
    business: 'is-dunyasi',
    'data-analytics': 'veri-analitigi',
    'digital-marketing': 'dijital-pazarlama',
  },
  es: {
    tech: 'tecnologia',
    business: 'empresa',
    'data-analytics': 'analisis-de-datos',
    'digital-marketing': 'marketing-digital',
  },
  fr: {
    tech: 'technologie',
    business: 'entreprise',
    'data-analytics': 'analyse-de-donnees',
    'digital-marketing': 'marketing-digital',
  },
  ar: {
    tech: 'taqniya',
    business: 'aamal',
    'data-analytics': 'bayanat',
    'digital-marketing': 'tawiq',
  },
  zh: {
    tech: 'keji',
    business: 'shangye',
    'data-analytics': 'shuju',
    'digital-marketing': 'yingxiao',
  },
  ru: {
    tech: 'tekhnologii',
    business: 'biznes',
    'data-analytics': 'analiz-dannykh',
    'digital-marketing': 'tsifrovoy-marketing',
  },
}

export default function TrackPageTemplate({ track, locale }: Props) {
  const d = TRACK_I18N[locale][track]
  const BASE_URL = 'https://eduentry.ai'
  const TRACK_URL = `${BASE_URL}/${locale}/${LOCALE_SLUGS[locale][track]}`
  const EN_URL = `${BASE_URL}/${track}`
  const BLOG_POSTS_BY_LOCALE: Record<string, typeof BLOG_POSTS_TR> = {
    tr: BLOG_POSTS_TR,
    es: BLOG_POSTS_ES,
    fr: BLOG_POSTS_FR,
    ar: BLOG_POSTS_AR,
    zh: BLOG_POSTS_ZH,
    ru: BLOG_POSTS_RU,
  }
  const posts = (BLOG_POSTS_BY_LOCALE[locale] ?? BLOG_POSTS_TR).slice(0, 2)
  const ctaLabel = `${locale}_${track}_cta`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: d.breadcrumb.home, item: `${BASE_URL}/${locale}` },
      { '@type': 'ListItem', position: 2, name: d.breadcrumb.track, item: TRACK_URL },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.faq.list.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    areaServed: 'Worldwide',
    audience: { '@type': 'Audience', audienceType: d.ui.audience },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
  }

  const PROGRAM_NAMES: Record<TrackId, { en: string; credential: string; occupation: string }> = {
    tech:               { en: 'Technology Internship Readiness Assessment',       credential: 'Technology Internship Readiness Report',       occupation: 'Technology' },
    business:           { en: 'Business Internship Readiness Assessment',          credential: 'Business Internship Readiness Report',          occupation: 'Business' },
    'data-analytics':   { en: 'Data Analytics Internship Readiness Assessment',   credential: 'Data Analytics Internship Readiness Report',   occupation: 'Data Analytics' },
    'digital-marketing':{ en: 'Digital Marketing Internship Readiness Assessment', credential: 'Digital Marketing Internship Readiness Report', occupation: 'Digital Marketing' },
  }

  const programSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: d.meta.title,
    description: d.meta.description,
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: PROGRAM_NAMES[track].credential,
      credentialCategory: 'certificate',
    },
    occupationalCategory: PROGRAM_NAMES[track].occupation,
    timeToComplete: 'PT20M',
    educationalProgramMode: 'online',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: d.ui.offerDesc },
    programPrerequisites: d.ui.prerequisite,
  }

  const homePath = `/${locale}`
  const blogPath = `https://eduentry.com/${locale}/blog`

  return (
    <main className="flex-1 bg-[#050505] text-white" lang={locale} dir={locale === 'ar' ? 'rtl' : undefined}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />

      {/* hreflang */}
      <link rel="alternate" hrefLang={locale} href={TRACK_URL} />
      <link rel="alternate" hrefLang="en" href={EN_URL} />
      <link rel="alternate" hrefLang="x-default" href={EN_URL} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[120px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="text-sm text-white/40 mb-12">
            <Link href={homePath} className="hover:text-white transition-colors">{d.breadcrumb.home}</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{d.breadcrumb.track}</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
              {d.hero.badge}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-3xl">
            {d.hero.h1}
          </h1>

          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mb-10">
            {d.hero.p}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <CtaLink
              href="/apply"
              label={ctaLabel}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              {d.hero.cta}
            </CtaLink>
            <Link
              href={blogPath}
              className="border border-white/[0.12] bg-white/[0.04] text-white/80 px-8 py-4 rounded-xl font-semibold hover:bg-white/[0.08] hover:border-white/[0.2] transition-all text-lg text-center"
            >
              {d.hero.blogLink}
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            {d.hero.trust.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {d.stats.map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-4xl font-bold text-white mb-2">{stat}</div>
              <div className="text-white/40 text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Domain */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              {d.domain.heading}
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">{d.domain.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {d.domain.topics.map(({ n, topic, detail }) => (
              <div key={n} className="border border-white/[0.08] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-colors">
                <div className="text-xs font-mono text-[#818CF8] font-semibold mb-3">{n}</div>
                <h3 className="font-semibold text-white mb-2">{topic}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career paths */}
      <section className="py-24 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              {d.roles.heading}
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">{d.roles.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {d.roles.list.map(({ title, skills, salary }) => (
              <div key={title} className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/[0.08]">
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{skills}</p>
                <div className="text-sm font-semibold text-[#818CF8]">{salary}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaLink
              href="/apply"
              label={`${ctaLabel}_roles`}
              className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              {d.hero.cta}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            {d.whoFor.heading}
          </h2>
          <p className="text-xl text-white/50 mb-14 max-w-2xl leading-relaxed">{d.whoFor.intro}</p>

          <div className="grid sm:grid-cols-3 gap-6">
            {d.whoFor.profiles.map(({ title, body }) => (
              <div key={title} className="border-t-2 border-[#4F46E5] pt-6">
                <h3 className="font-bold text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases table */}
      <section className="py-24 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            {d.phases.heading}
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">{d.phases.intro}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-4 pr-8 font-semibold text-white">
                    {d.ui.phaseLabel}
                  </th>
                  <th className="text-left py-4 pr-8 font-semibold text-white">
                    {d.ui.questionsLabel}
                  </th>
                  <th className="text-left py-4 font-semibold text-white">
                    {d.ui.measuresLabel}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {d.phases.rows.map(({ phase, q, measure }) => (
                  <tr key={phase}>
                    <td className="py-4 pr-8 font-medium text-white">{phase}</td>
                    <td className="py-4 pr-8 text-white/50">{q}</td>
                    <td className="py-4 text-white/50">{measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <CtaLink
              href="/apply"
              label={`${ctaLabel}_phases`}
              className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              {d.ui.startCta}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            {d.faq.heading}
          </h2>
          <div className="space-y-4">
            {d.faq.list.map(({ q, a }) => (
              <details key={q} className="border border-white/[0.08] rounded-xl group">
                <summary className="cursor-pointer px-6 py-5 font-semibold text-white list-none flex items-center justify-between">
                  {q}
                  <span className="ml-4 text-white/40 text-lg transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-5 text-white/50 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blog reading */}
      {posts.length > 0 && (
        <section className="py-16 px-6 border-t border-white/[0.04]">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">
              {d.blog.heading}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`${blogPath}/${post.slug}`}
                  className="border border-white/[0.08] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs font-medium text-[#818CF8] bg-[#4F46E5]/10 rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-bold text-white leading-snug mb-2 text-sm">{post.shortTitle}</h3>
                  <p className="text-xs text-white/50 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other tracks */}
      <section className="py-16 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">
            {d.otherTracks.heading}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {d.otherTracks.list.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:border-[#4F46E5]/50 transition-colors"
              >
                <div className="font-semibold text-white mb-1">{label}</div>
                <div className="text-sm text-white/50">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            {d.finalCta.h2}
          </h2>
          <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            {d.finalCta.p}
          </p>
          <CtaLink
            href="/apply"
            label={`${ctaLabel}_final`}
            className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-xl shadow-[0_0_24px_rgba(99,102,241,0.3)]"
          >
            {d.finalCta.btn}
          </CtaLink>
          <p className="mt-6 text-sm text-white/40">{d.finalCta.footnote}</p>
        </div>
      </section>
    </main>
  )
}
