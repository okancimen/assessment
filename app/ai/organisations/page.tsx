import type { Metadata } from 'next'
import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/organisations`
const EMAIL = 'partnerships@eduentry.ai'

export const metadata: Metadata = {
  title: 'For Schools & Employers — Partner with Eduentry.ai',
  description:
    'Bring Eduentry.ai to your school or organisation. We assess your students or candidates, shortlist by track and readiness, and give you a full scoring dashboard. Free for students. No setup fee.',
  keywords: [
    'internship programme for schools UK',
    'employer student assessment partner',
    'work experience programme schools UK',
    'student internship readiness assessment employer',
    'school career programme UK',
    'work experience placement employer',
    'student assessment platform schools',
    'internship shortlisting schools UK',
    'employer partner student placement UK',
    'career assessment schools UK',
  ],
  alternates: { canonical: PAGE_URL, languages: { 'en-GB': PAGE_URL, 'x-default': PAGE_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'For Schools & Employers — Eduentry.ai',
    description: 'Assess your student cohort, shortlist by track and readiness tier, and receive a full scoring dashboard. Free for students. Contact us to get started.',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Schools & Employers — Eduentry.ai',
    description: 'We assess your students or candidates, shortlist by readiness tier, and give you a full scoring dashboard.',
  },
}

const SCHOOL_BENEFITS = [
  { title: 'Cohort dashboard', desc: 'See every student\'s readiness score, track fit, and phase breakdown in one place. Filter by readiness tier, sort by domain, export to CSV.' },
  { title: 'Group assignment', desc: 'Assign students to tracks individually or as a cohort. Set a deadline and monitor completion progress in real time.' },
  { title: 'Track fit analysis', desc: 'Understand where your cohort\'s strengths lie across Technology, Business, Data Analytics, and Digital Marketing — useful for career guidance conversations.' },
  { title: 'Employer-ready reports', desc: 'Each student receives an AI-written readiness report they can share directly with prospective employers — reducing the burden on staff to write individual references.' },
]

const EMPLOYER_BENEFITS = [
  { title: 'Pre-screened candidates', desc: 'Receive a shortlist of assessed candidates matched to your track — with scores, readiness tiers, and AI-written summaries — before you commit any interview time.' },
  { title: 'Standardised comparison', desc: 'Compare candidates on a common scale. No more CVs that are impossible to compare. Every candidate is measured on the same 34-question adaptive assessment.' },
  { title: 'Track-specific filtering', desc: 'Filter applicants by technology, business, data analytics, or digital marketing domain score — so you see only the candidates matched to your actual placement needs.' },
  { title: 'Reduced dropout risk', desc: 'Candidates who score well on the Interest Profile phase have confirmed alignment between their internship track and their working style. Placements with assessed candidates have lower early-dropout rates.' },
]

const STEPS = [
  { n: '01', title: 'Contact us', desc: 'Email partnerships@eduentry.ai with your organisation name, number of students or candidates, and your target timeline. We set up your cohort within 24 hours.' },
  { n: '02', title: 'Students register', desc: 'We provide a cohort link. Students register free, complete their application, and take the 34-question assessment at their own pace — no supervision required.' },
  { n: '03', title: 'You access the dashboard', desc: 'As students complete the assessment, your dashboard populates in real time with scores, readiness tiers, and track fit data.' },
  { n: '04', title: 'Act on the data', desc: 'Schools use the data for career guidance and employer matching. Employers use it to shortlist, interview, and place — with confidence.' },
]

const FAQS = [
  {
    q: 'How much does it cost for schools and employers?',
    a: 'The assessment is always free for students. There is no per-student fee and no setup cost for schools running cohorts of up to 100 students. For larger cohorts, enterprise partnerships, or custom reporting requirements, contact us at partnerships@eduentry.ai to discuss the right arrangement.',
  },
  {
    q: 'Can we white-label the assessment or add our own branding?',
    a: 'Yes. Partners can have a branded assessment experience with their organisation\'s name, logo, and welcome message. This is available for employer partners running named internship programmes. Contact us to discuss requirements.',
  },
  {
    q: 'How long does it take for a student to complete the assessment?',
    a: 'Approximately 35 minutes for all four phases. Students can pause and resume — there is no time limit per session. Most students complete in one sitting. The assessment is fully adaptive, so question difficulty adjusts based on each student\'s responses.',
  },
  {
    q: 'Can employers see individual student reports without student consent?',
    a: 'No. Students control their reports and choose to share them with specific employers. Organisations using Eduentry for cohort assessment receive aggregated dashboard data; individual reports are shared only with the student\'s explicit permission. This is consistent with GDPR requirements for educational data.',
  },
  {
    q: 'We are a small employer — do we need a large cohort to partner with Eduentry?',
    a: 'Not at all. Some of our most effective employer partnerships are with companies placing two or three students per year. The dashboard and shortlisting tools are useful regardless of cohort size. Contact us and we will find the arrangement that makes sense for your scale.',
  },
]

export default function OrganisationsPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'For Organisations', item: PAGE_URL },
    ],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eduentry',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    sameAs: ['https://eduentry.com'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'partnerships',
      email: EMAIL,
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Internship Cohort Assessment for Schools and Employers',
    description: 'Eduentry.ai provides adaptive internship readiness assessment for student cohorts, with a scoring dashboard, track-fit analysis, and shortlisting tools for schools and employers.',
    url: PAGE_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'Audience', audienceType: 'Schools, employers, and internship programme coordinators' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free for student cohorts up to 100' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <nav className="text-sm text-[#6e6e73] mb-12">
          <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">For Organisations</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#4F46E5] rounded-full inline-block" />
          Schools &amp; Employers
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6 max-w-3xl">
          Assessment and shortlisting for your student cohort.
        </h1>

        <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl mb-10">
          We assess your students or candidates across aptitude, domain knowledge, workplace skills, and track fit. You get a real-time scoring dashboard, readiness tiers, and a shortlist you can act on — without writing a single question yourself.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={`mailto:${EMAIL}`}
            className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg text-center"
          >
            Contact us to get started →
          </a>
          <Link
            href="/"
            className="border border-[#d2d2d7] text-[#1d1d1f] px-8 py-4 rounded-xl font-semibold hover:border-[#4F46E5]/50 transition-colors text-lg text-center"
          >
            See how the assessment works
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[#6e6e73]">
          <span>✓ Free for students</span>
          <span>✓ No setup fee</span>
          <span>✓ Live cohort dashboard</span>
          <span>✓ GDPR compliant</span>
          <span>✓ Setup within 24 hours</span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#1d1d1f] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: '68%', label: 'of employers say work experience is their top hiring factor (CBI)' },
            { stat: '34', label: 'adaptive questions across 4 phases — takes 35 minutes' },
            { stat: '4', label: 'career tracks: Tech, Business, Data Analytics, Digital Marketing' },
            { stat: '0', label: 'cost for students and schools up to 100 students' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-4xl font-bold text-white mb-2">{stat}</div>
              <div className="text-[#86868b] text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What you get — schools */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">For schools</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Give your students an edge before they apply.
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
            Career advisors and heads of year use Eduentry to understand cohort readiness, identify high-potential students for competitive placements, and give every student a credible artefact to support their internship and university applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {SCHOOL_BENEFITS.map(({ title, desc }) => (
            <div key={title} className="border border-[#d2d2d7] rounded-2xl p-6">
              <h3 className="font-bold text-[#1d1d1f] mb-2">{title}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get — employers */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">For employers</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Shortlist on data, not intuition.
            </h2>
            <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
              Stop sifting through CVs that tell you nothing. Receive a pre-screened shortlist of assessed candidates — with scores, readiness tiers, and AI-written summaries — matched to your track and your timeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {EMPLOYER_BENEFITS.map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#d2d2d7] p-6">
                <h3 className="font-bold text-[#1d1d1f] mb-2">{title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            How it works for your organisation.
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
            From first contact to live dashboard in 24 hours. No procurement process, no IT integration, no per-student invoicing.
          </p>
        </div>

        <div className="grid sm:grid-cols-4 gap-8">
          {STEPS.map(({ n, title, desc }) => (
            <div key={n}>
              <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
              <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
          >
            Contact us — {EMAIL} →
          </a>
        </div>
      </section>

      {/* Who we work with */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            Who we work with.
          </h2>
          <p className="text-xl text-[#6e6e73] mb-14 max-w-2xl leading-relaxed">
            Eduentry works with organisations at every scale — from single sixth-form colleges running 20-student cohorts to multi-site academy trusts and employers placing 50+ interns each year.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Secondary schools & sixth-form colleges',
                body: 'Use Eduentry as part of your Year 10–13 careers programme. Assign tracks to cohorts, monitor readiness in real time, and give every student a credible assessment report to use in applications and interviews.',
              },
              {
                title: 'Academy trusts & MATs',
                body: 'Run a consistent careers assessment programme across all schools in your trust. Compare readiness data across sites, identify students ready for competitive placements, and report on work experience outcomes systematically.',
              },
              {
                title: 'Employers running student internship programmes',
                body: 'Replace unstructured CV screening with assessed shortlisting. Define your track, set your cohort link live, and receive a ranked shortlist of candidates who have demonstrated readiness — before you spend a single hour interviewing.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-t-2 border-[#4F46E5] pt-6">
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-12">
          Frequently asked questions.
        </h2>
        <div className="space-y-4">
          {FAQS.map(({ q, a }) => (
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

      {/* Final CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-6">
          Ready to bring Eduentry to your organisation?
        </h2>
        <p className="text-xl text-[#6e6e73] mb-10 max-w-xl mx-auto leading-relaxed">
          Email us and we will have your cohort set up within 24 hours. No contracts, no setup fees, no per-student billing for standard cohorts.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-block bg-[#4F46E5] text-white px-10 py-5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-xl"
        >
          {EMAIL} →
        </a>
        <p className="mt-6 text-sm text-[#6e6e73]">Or <Link href="/apply" className="text-[#4F46E5] hover:underline">send your students to apply free</Link> — they can share their reports with you directly.</p>
      </section>
    </main>
  )
}
