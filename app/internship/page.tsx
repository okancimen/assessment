import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, INTERNSHIP_TRACK_DESCRIPTIONS } from '@/types'

const BASE_URL = 'https://eduentry.com'

export const metadata: Metadata = {
  title: 'Internship Readiness Assessment for High School Students',
  description:
    'Free 34-question adaptive assessment for high school students aged 14+. Discover your readiness for a tech, business, data analytics or digital marketing internship — results in 35 minutes.',
  keywords: [
    'internship readiness assessment',
    'high school internship',
    'work experience assessment',
    'internship aptitude test',
    'career readiness test high school',
    'tech internship readiness',
    'business internship assessment',
    'digital marketing internship test',
    'data analytics internship',
    'year 9 10 11 12 13 internship UK',
    'adaptive internship assessment',
    'university admissions work experience',
    'free internship assessment',
    'student internship placement test',
  ],
  alternates: {
    canonical: `${BASE_URL}/internship`,
    languages: { 'en-GB': `${BASE_URL}/internship`, 'x-default': `${BASE_URL}/internship` },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: `${BASE_URL}/internship`,
    siteName: 'Eduentry',
    title: 'Internship Readiness Assessment — Eduentry',
    description:
      'Free adaptive assessment for high school students aged 14+. Measure aptitude, domain knowledge, and workplace skills across tech, business, data analytics, and digital marketing tracks.',
    images: [{ url: `${BASE_URL}/internship/opengraph-image`, width: 1200, height: 630, alt: 'Internship Readiness Assessment — Eduentry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internship Readiness Assessment — Eduentry',
    description: 'Free 34-question adaptive assessment for high school students aged 14+. Find your internship track in 35 minutes.',
    images: [`${BASE_URL}/internship/opengraph-image`],
  },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/internship#service`,
  name: 'Internship Readiness Assessment',
  description:
    'A free 34-question adaptive assessment for high school students aged 14 and above. Evaluates general aptitude, domain knowledge, workplace skills, and interest profile across four internship tracks: Technology, Business, Data Analytics, and Digital Marketing.',
  provider: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'Eduentry', url: BASE_URL },
  url: `${BASE_URL}/internship`,
  audience: { '@type': 'EducationalAudience', audienceType: 'High school students aged 14 and above' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
}

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Internship Assessment', item: `${BASE_URL}/internship` },
  ],
}

const TRACK_ICONS: Record<string, string> = {
  tech: '💻',
  business: '📈',
  data_analytics: '📊',
  digital_marketing: '📣',
}

const PHASES = [
  { label: 'General Aptitude', desc: '10 questions · Verbal & numerical reasoning', icon: '🧠' },
  { label: 'Domain Knowledge', desc: '10 questions · Track-specific applied knowledge', icon: '📚' },
  { label: 'Workplace Skills', desc: '8 questions · Real workplace scenarios (SJT)', icon: '🤝' },
  { label: 'Interest Profile', desc: '6 questions · Work style & preference mapping', icon: '🎯' },
]

export default function InternshipLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <PublicNav />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Internship Assessment Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            Discover your internship<br />readiness
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            A 34-question adaptive assessment designed for high school students aged 14 and above. Takes around 35 minutes and generates a personalised readiness report.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/internship/apply"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Apply now — it&apos;s free
            </Link>
            <Link
              href="/auth/login?redirect=/internship/apply"
              className="text-[#4F46E5] font-semibold text-base hover:underline"
            >
              Already registered? Sign in
            </Link>
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Available tracks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTERNSHIP_TRACKS.map((track) => (
              <div key={track} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{TRACK_ICONS[track]}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{INTERNSHIP_TRACK_LABELS[track]}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{INTERNSHIP_TRACK_DESCRIPTIONS[track]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-2 tracking-tight">Why it matters</h2>
          <p className="text-sm text-[#6e6e73] mb-5">Evidence from longitudinal research on early work experience.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              { stat: '5×', desc: 'less likely to be NEET at 19 for students with 4+ employer encounters before age 16', source: 'Education and Employers, 2018' },
              { stat: '73%', desc: 'of UK graduate recruiters rate prior work experience as the top factor at interview', source: 'Prospects, 2022' },
              { stat: '70%', desc: 'higher rate of receiving a job offer before graduation for students with internship experience', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-2">
                <div className="text-3xl font-bold text-[#4F46E5]">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div>
              <p className="text-sm text-[#1d1d1f] leading-relaxed">
                Russell Group universities explicitly cite work experience in admissions guidance for competitive courses. For medicine, law, and technology programmes it is treated as a near-requirement — not a nice-to-have.
              </p>
              <Link href="/blog/high-school-internship-benefits-university" className="text-xs font-semibold text-[#4F46E5] hover:underline mt-2 inline-block">
                Read the full research breakdown →
              </Link>
            </div>
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">What to expect</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <div className="font-semibold text-[#1d1d1f] text-sm">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  Phase {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">Total: 34 questions · ~35 minutes · Fully resumable</span>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
