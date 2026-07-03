import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/about`

export const metadata: Metadata = {
  title: 'About Eduentry.ai — Internship Readiness Assessment for Students',
  description:
    'Eduentry.ai is a free adaptive internship assessment platform for UK secondary school students aged 14–18. We measure aptitude, domain knowledge, and workplace skills — then match students to real internship opportunities.',
  keywords: [
    'about Eduentry',
    'internship assessment platform UK',
    'who is Eduentry',
    'student internship readiness',
    'free internship test UK',
  ],
  alternates: { canonical: PAGE_URL, languages: { 'en-GB': PAGE_URL, 'x-default': PAGE_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'About Eduentry.ai',
    description: 'Free adaptive internship assessment for UK students aged 14–18. We measure what matters — then match students to real opportunities.',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    locale: 'en_GB',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — About' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Eduentry.ai',
    description: 'Free adaptive internship assessment for UK students aged 14–18. We measure what matters — then match students to real opportunities.',
  },
}

export default function AboutPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: PAGE_URL },
    ],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Eduentry',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    description:
      'Eduentry builds adaptive assessment tools for students. Eduentry.ai provides free internship readiness assessment for UK secondary school students aged 14–18, measuring aptitude, domain knowledge, and workplace skills across four career tracks.',
    foundingDate: '2026',
    sameAs: ['https://eduentry.com'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'partnerships',
        email: 'partnerships@eduentry.ai',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
    ],
  }

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': PAGE_URL,
    name: 'About Eduentry.ai',
    url: PAGE_URL,
    description: 'About Eduentry.ai — free adaptive internship assessment for UK students aged 14–18.',
    publisher: { '@id': `${BASE_URL}/#organization` },
  }

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />

      <div className="max-w-3xl mx-auto px-6 py-24">
        <nav className="text-sm text-[#6e6e73] mb-12">
          <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">About</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight leading-tight mb-8">
          About Eduentry.ai
        </h1>

        <div className="space-y-12 text-[#1d1d1f]">

          <section>
            <h2 className="text-2xl font-bold mb-4">What we do</h2>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              Eduentry.ai is a free adaptive assessment platform for UK secondary school students aged 14–18. We measure internship readiness across four career tracks — Technology, Business, Data Analytics, and Digital Marketing — and produce a personalised AI report that students can use to support internship applications, university personal statements, and career conversations.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              The assessment consists of 34 questions across four phases: General Aptitude (verbal and numerical reasoning), Domain Knowledge (track-specific applied skills), Workplace Skills (situational judgement), and an Interest Profile (track alignment and working style). It is fully adaptive — question difficulty adjusts in real time based on each student&apos;s responses — and takes approximately 35 minutes to complete. Results are scored instantly and the readiness report is available immediately on completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why we built it</h2>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              Access to quality internship experience is heavily skewed by background. Students from higher-income families benefit from informal networks — parental contacts, alumni connections, fee-paying school relationships with employers — that are structurally unavailable to the majority of UK secondary school students. The students who most need a verifiable track record of professional readiness are precisely those least likely to have one.
            </p>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              At the same time, employers running internship and work experience programmes face the opposite problem: a high volume of undifferentiated applications with no reliable signal of candidate readiness. CVs written by 15-year-olds do not carry useful information. School references are not standardised. Interview processes at scale are expensive and slow.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              Eduentry.ai was built to close both gaps simultaneously. A free, standardised assessment gives every student — regardless of background — a credible, third-party measurement of their readiness to contribute to a professional environment. And it gives employers and schools a shortlisting tool that works on evidence rather than proxy signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our assessment methodology</h2>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              The assessment is built on item response theory (IRT), the same psychometric framework used in professional aptitude testing, university admissions tests, and national standardised assessments. Adaptive delivery means each student receives a sequence of questions calibrated to their demonstrated ability — harder questions when a student is performing well, adjusted questions when they are not. This produces more accurate ability estimates in fewer questions than fixed-format tests.
            </p>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              The General Aptitude phase measures fluid reasoning — the ability to identify patterns, draw inferences, and process new information — which research consistently identifies as the strongest predictor of performance in unfamiliar professional environments. The Domain Knowledge phase tests applied understanding of track-specific concepts through scenario-based questions that mirror real workplace decisions. The Workplace Skills phase uses a situational judgement format, presenting students with professional scenarios and asking them to evaluate the effectiveness of different responses. The Interest Profile maps stated preferences against validated work style dimensions to assess track alignment.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              The AI-written readiness report synthesises scores across all four phases into a personalised narrative. It identifies where a student performed strongest, where development would have the greatest impact, and what their profile suggests about their readiness for different types of professional environment. The report is written in plain English and designed to be shared directly with employers and career advisors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The four tracks</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: '/tech',              label: 'Technology',        desc: 'Coding logic, algorithms, cybersecurity, UX design, and software development concepts.' },
                { href: '/business',          label: 'Business',          desc: 'Market analysis, financial literacy, business case reasoning, and commercial strategy.' },
                { href: '/data-analytics',    label: 'Data Analytics',    desc: 'Chart reading, statistics, spreadsheet logic, SQL fundamentals, and data storytelling.' },
                { href: '/digital-marketing', label: 'Digital Marketing', desc: 'SEO, social media strategy, content marketing, analytics, and campaign planning.' },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="border border-[#d2d2d7] rounded-xl p-5 hover:border-[#4F46E5]/40 transition-colors"
                >
                  <div className="font-semibold text-[#1d1d1f] mb-1">{label} →</div>
                  <div className="text-sm text-[#6e6e73]">{desc}</div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy and data</h2>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              Student data is processed in accordance with UK GDPR. Assessment responses and readiness reports are stored securely and are not shared with third parties without explicit student consent. Students control their own reports — employers and schools see only what students choose to share with them. We do not sell student data.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              For schools and employers accessing cohort-level data through a partnership arrangement, aggregated dashboard data is provided under a data processing agreement. Individual student reports remain under student control at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Who is behind Eduentry</h2>
            <p className="text-[#6e6e73] leading-relaxed mb-4">
              Eduentry.ai is operated by Eduentry, the same organisation behind{' '}
              <a href="https://eduentry.com" className="text-[#4F46E5] hover:underline">eduentry.com</a>
              {' '}— an adaptive assessment platform used by families and schools for academic testing and university admissions preparation across the UK, the Netherlands, the UAE, Canada, and Australia.
            </p>
            <p className="text-[#6e6e73] leading-relaxed">
              Eduentry.ai extends this expertise into the internship and early careers space, applying the same adaptive assessment methodology to a new problem: measuring and communicating the professional readiness of secondary school students to employers and schools at scale.
            </p>
          </section>

          <section className="border-t border-[#d2d2d7] pt-12">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="space-y-2 text-[#6e6e73]">
              <p>
                <strong className="text-[#1d1d1f]">Partnerships and schools:</strong>{' '}
                <a href="mailto:partnerships@eduentry.ai" className="text-[#4F46E5] hover:underline">
                  partnerships@eduentry.ai
                </a>
              </p>
              <p>
                <strong className="text-[#1d1d1f]">Students:</strong>{' '}
                <Link href="/apply" className="text-[#4F46E5] hover:underline">Apply free →</Link>
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
