import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
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
}

export default function TrackPageTemplate({ track, locale }: Props) {
  const d = TRACK_I18N[locale][track]
  const BASE_URL = 'https://eduentry.ai'
  const TRACK_URL = `${BASE_URL}/${locale}/${LOCALE_SLUGS[locale][track]}`
  const EN_URL = `${BASE_URL}/${track}`
  const posts = (locale === 'tr' ? BLOG_POSTS_TR : BLOG_POSTS_ES).slice(0, 2)
  const ctaLabel = `${locale}_${track}_cta`
  const lang = locale

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
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'Audience', audienceType: lang === 'tr' ? '14–18 yaş öğrenciler' : 'Estudiantes de 14 a 18 años' },
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
    timeToComplete: 'PT35M',
    educationalProgramMode: 'online',
    inLanguage: locale === 'tr' ? 'tr' : 'es',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: lang === 'tr' ? '14–18 yaş tüm öğrenciler için ücretsiz' : 'Gratis para todos los estudiantes de 14 a 18 años' },
    programPrerequisites: lang === 'tr' ? '14–18 yaş arası lise öğrencisi' : 'Estudiante de instituto de 14 a 18 años',
  }

  const homePath = `/${locale}`
  const blogPath = `/${locale}/blog`

  return (
    <main className="flex-1" lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />

      {/* hreflang */}
      <link rel="alternate" hrefLang={lang} href={TRACK_URL} />
      <link rel="alternate" hrefLang="en" href={EN_URL} />
      <link rel="alternate" hrefLang="x-default" href={EN_URL} />

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <nav className="text-sm text-[#6e6e73] mb-12">
          <Link href={homePath} className="hover:text-[#1d1d1f]">{d.breadcrumb.home}</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">{d.breadcrumb.track}</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#4F46E5] rounded-full inline-block" />
          {d.hero.badge}
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6 max-w-3xl">
          {d.hero.h1}
        </h1>

        <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl mb-10">
          {d.hero.p}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <CtaLink
            href="/apply"
            label={ctaLabel}
            className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg text-center"
          >
            {d.hero.cta}
          </CtaLink>
          <Link
            href={blogPath}
            className="border border-[#d2d2d7] text-[#1d1d1f] px-8 py-4 rounded-xl font-semibold hover:border-[#4F46E5]/50 transition-colors text-lg text-center"
          >
            {d.hero.blogLink}
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[#6e6e73]">
          {d.hero.trust.map(t => <span key={t}>{t}</span>)}
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#1d1d1f] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {d.stats.map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-4xl font-bold text-white mb-2">{stat}</div>
              <div className="text-[#a1a1a7] text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Domain */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            {d.domain.heading}
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">{d.domain.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {d.domain.topics.map(({ n, topic, detail }) => (
            <div key={n} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <div className="text-xs font-mono text-[#4F46E5] font-semibold mb-3">{n}</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{topic}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Career paths */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              {d.roles.heading}
            </h2>
            <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">{d.roles.intro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {d.roles.list.map(({ title, skills, salary }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-[#d2d2d7]">
                <h3 className="font-bold text-[#1d1d1f] mb-2">{title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-4">{skills}</p>
                <div className="text-sm font-semibold text-[#4F46E5]">{salary}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaLink
              href="/apply"
              label={`${ctaLabel}_roles`}
              className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              {d.hero.cta}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
          {d.whoFor.heading}
        </h2>
        <p className="text-xl text-[#6e6e73] mb-14 max-w-2xl leading-relaxed">{d.whoFor.intro}</p>

        <div className="grid sm:grid-cols-3 gap-6">
          {d.whoFor.profiles.map(({ title, body }) => (
            <div key={title} className="border-t-2 border-[#4F46E5] pt-6">
              <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Phases table */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            {d.phases.heading}
          </h2>
          <p className="text-xl text-[#6e6e73] mb-12 max-w-2xl leading-relaxed">{d.phases.intro}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-left py-4 pr-8 font-semibold text-[#1d1d1f]">
                    {lang === 'tr' ? 'Aşama' : 'Fase'}
                  </th>
                  <th className="text-left py-4 pr-8 font-semibold text-[#1d1d1f]">
                    {lang === 'tr' ? 'Soru' : 'Preguntas'}
                  </th>
                  <th className="text-left py-4 font-semibold text-[#1d1d1f]">
                    {lang === 'tr' ? 'Ne ölçüyoruz' : 'Qué evaluamos'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]">
                {d.phases.rows.map(({ phase, q, measure }) => (
                  <tr key={phase}>
                    <td className="py-4 pr-8 font-medium text-[#1d1d1f]">{phase}</td>
                    <td className="py-4 pr-8 text-[#6e6e73]">{q}</td>
                    <td className="py-4 text-[#6e6e73]">{measure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10">
            <CtaLink
              href="/apply"
              label={`${ctaLabel}_phases`}
              className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              {lang === 'tr' ? 'Ücretsiz değerlendirmeye başla →' : 'Hacer la evaluación gratis →'}
            </CtaLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-12">
          {d.faq.heading}
        </h2>
        <div className="space-y-4">
          {d.faq.list.map(({ q, a }) => (
            <details key={q} className="border border-[#d2d2d7] rounded-xl group">
              <summary className="cursor-pointer px-6 py-5 font-semibold text-[#1d1d1f] list-none flex items-center justify-between">
                {q}
                <span className="ml-4 text-[#6e6e73] text-lg transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="px-6 pb-5 text-[#6e6e73] leading-relaxed">{a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Blog reading */}
      {posts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">
              {d.blog.heading}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {posts.map(post => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs font-medium text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] leading-snug mb-2 text-sm">{post.shortTitle}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other tracks */}
      <section className="bg-[#f5f5f7] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">
            {d.otherTracks.heading}
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {d.otherTracks.list.map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="bg-white border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 transition-colors"
              >
                <div className="font-semibold text-[#1d1d1f] mb-1">{label}</div>
                <div className="text-sm text-[#6e6e73]">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6">
          {d.finalCta.h2}
        </h2>
        <p className="text-xl text-[#6e6e73] mb-10 max-w-xl mx-auto leading-relaxed">
          {d.finalCta.p}
        </p>
        <CtaLink
          href="/apply"
          label={`${ctaLabel}_final`}
          className="inline-block bg-[#4F46E5] text-white px-10 py-5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-xl"
        >
          {d.finalCta.btn}
        </CtaLink>
        <p className="mt-6 text-sm text-[#6e6e73]">{d.finalCta.footnote}</p>
      </section>
    </main>
  )
}
