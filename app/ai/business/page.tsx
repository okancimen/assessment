import type { Metadata } from 'next'
import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS } from '@/app/blog/posts'

const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipPosts = BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).slice(0, 2)

const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/business`

export const metadata: Metadata = {
  title: 'Business Internship Assessment — Get Your Business Readiness Report',
  description:
    'Free AI-powered assessment for students aged 14–18 pursuing business internships in the UK. Tests market analysis, financial literacy, business case reasoning, and strategy. Get placed in a real business internship.',
  keywords: [
    'business internship high school students UK',
    'business internship assessment year 12',
    'finance internship students UK',
    'business work experience assessment',
    'management internship for students',
    'business analyst internship UK',
    'FTSE 100 internship students',
    'business work experience year 10 11',
    'commercial awareness assessment students',
    'business internship readiness',
  ],
  alternates: { canonical: TRACK_URL, languages: { 'en-GB': TRACK_URL, 'x-default': TRACK_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Business Internship Assessment for Students — Eduentry.ai',
    description: 'Free 34-question adaptive assessment for high school students seeking business internships. AI-scored. Personalised readiness report in 35 minutes.',
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Internship Assessment — Eduentry.ai',
    description: 'Free adaptive assessment for students aged 14–18 seeking business internships in the UK.',
  },
}

const OTHER_TRACKS = [
  { href: '/tech', label: 'Technology', desc: 'Coding, algorithms, cybersecurity' },
  { href: '/data-analytics', label: 'Data Analytics', desc: 'Data, statistics, insights' },
  { href: '/digital-marketing', label: 'Digital Marketing', desc: 'SEO, social, campaigns' },
]

const ROLES = [
  { title: 'Business Analyst', skills: 'Requirements gathering, process mapping, stakeholder communication, Excel modelling', salary: '£28k–£42k' },
  { title: 'Junior Financial Analyst', skills: 'Financial modelling, variance analysis, forecasting, reporting', salary: '£30k–£48k' },
  { title: 'Operations Coordinator', skills: 'Logistics, supplier management, process optimisation, scheduling', salary: '£24k–£35k' },
  { title: 'Strategy & Planning Analyst', skills: 'Market research, competitive analysis, scenario planning, presentations', salary: '£32k–£50k' },
  { title: 'HR Administrator', skills: 'Recruitment coordination, employee relations, policy compliance, HRIS systems', salary: '£22k–£32k' },
  { title: 'Management Consultant Analyst', skills: 'Problem structuring, client communication, data synthesis, slide decks', salary: '£38k–£60k' },
]

const DOMAIN_TOPICS = [
  { n: '01', topic: 'Market Analysis', detail: 'Interpret market size data, growth rates, and competitive landscapes to draw business conclusions.' },
  { n: '02', topic: 'Financial Literacy', detail: 'Read a basic P&L statement, understand gross margin vs net profit, and interpret cash flow scenarios.' },
  { n: '03', topic: 'Business Case Reasoning', detail: 'Evaluate two competing options using ROI, risk, and strategic fit — choose the better recommendation.' },
  { n: '04', topic: 'SWOT & Competitive Analysis', detail: 'Identify strengths, weaknesses, opportunities, and threats from a given scenario; spot competitor advantages.' },
  { n: '05', topic: 'Customer & Stakeholder Thinking', detail: 'Identify who the real stakeholder is in a scenario and what outcome matters most to them.' },
  { n: '06', topic: 'Operations & Supply Chain', detail: 'Understand bottlenecks, inventory management, and operational efficiency in simple process flows.' },
  { n: '07', topic: 'Business Communication', detail: 'Choose the correct channel, tone, and format for communicating across different business audiences.' },
  { n: '08', topic: 'Entrepreneurship & Innovation', detail: 'Evaluate a new product idea for feasibility, market demand, and competitive advantage.' },
  { n: '09', topic: 'Risk Management', detail: 'Identify the primary risk in a business scenario and select the most appropriate mitigation.' },
  { n: '10', topic: 'Presenting Business Insights', detail: 'Decide how to structure and present findings from a brief — audience, format, key message.' },
]

const FAQS = [
  {
    q: 'Do I need business or economics A-levels to take the Business track?',
    a: 'Not at all. The Business domain is built around commercial awareness and reasoning — skills you develop through reading the news, understanding how companies work, and thinking about decisions analytically. A-level economics helps, but students without it regularly score in the top tier.',
  },
  {
    q: 'What kinds of companies offer business internships to students aged 14–18?',
    a: 'All FTSE 100 companies run formal work experience programmes, and most have dedicated student pathways. Beyond those, law firms, consulting practices, banks, insurance companies, retailers, and SMEs across every sector place students via structured schemes. Eduentry matches you to employers aligned with your assessment performance.',
  },
  {
    q: 'How does commercial awareness factor into the assessment?',
    a: 'Commercial awareness is tested through scenario-based questions rather than factual recall. You\'ll be given a situation — a company facing a decision, a market shift, a customer complaint — and asked to reason through it. Reading a quality newspaper once a week is better preparation than memorising business vocabulary.',
  },
  {
    q: 'Can I use my Eduentry report for a finance or law firm application?',
    a: 'Yes. Spring insight programmes and work experience weeks at major finance and law firms increasingly ask for evidence of assessed readiness. Your Eduentry report provides a credible third-party measurement of your aptitude and domain knowledge, supplementing your personal statement.',
  },
  {
    q: 'How is the Business track different from the Data Analytics track?',
    a: 'Business focuses on strategy, finance, operations, and stakeholder thinking — qualitative reasoning with quantitative support. Data Analytics emphasises reading charts, statistical inference, and deriving insights from datasets. If you\'re drawn to both, the Interest Profile phase will help clarify your primary fit.',
  },
]

export default function BusinessTrackPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Business Track', item: TRACK_URL },
    ],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eduentry',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    sameAs: ['https://eduentry.com'],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Internship Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking business internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'Audience', audienceType: 'High school students aged 14–18' },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free for all students' },
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

  const programSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: 'Business Internship Readiness Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking business internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Business Internship Readiness Report',
      credentialCategory: 'certificate',
    },
    occupationalCategory: 'Business',
    timeToComplete: 'PT35M',
    educationalProgramMode: 'online',
    inLanguage: 'en-GB',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free for all students aged 14–18' },
    programPrerequisites: 'Secondary school student aged 14–18',
  }

  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
        <nav className="text-sm text-[#6e6e73] mb-12">
          <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-[#1d1d1f]">Business Track</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#4F46E5] rounded-full inline-block" />
          Business Track
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6 max-w-3xl">
          Prove you're commercially ready.
        </h1>

        <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl mb-10">
          Business management is the most popular degree subject in the UK — which means competition for internships is fierce. Our assessment measures the commercial awareness and analytical thinking that sets strong candidates apart, and gives you a credible report to prove it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <CtaLink
            href="/apply"
            label="business_hero_cta"
            className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg text-center"
          >
            Apply free — Business track →
          </CtaLink>
          <Link
            href="/blog"
            className="border border-[#d2d2d7] text-[#1d1d1f] px-8 py-4 rounded-xl font-semibold hover:border-[#4F46E5]/50 transition-colors text-lg text-center"
          >
            Read internship guides
          </Link>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[#6e6e73]">
          <span>✓ Free for all students</span>
          <span>✓ Ages 14–18</span>
          <span>✓ 35 minutes</span>
          <span>✓ AI-scored instantly</span>
          <span>✓ Personalised readiness report</span>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#1d1d1f] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: '68%', label: 'of employers rate work experience as their top hiring factor (CBI)' },
            { stat: '100%', label: 'of FTSE 100 companies run formal student programmes' },
            { stat: '85k', label: 'business degrees awarded in the UK each year — most of any subject' },
            { stat: '£38k', label: 'average business analyst starting salary in London' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-4xl font-bold text-white mb-2">{stat}</div>
              <div className="text-[#86868b] text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we assess */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            What the Business domain tests.
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
            10 scenario-based questions covering the commercial reasoning, financial literacy, and strategic thinking that every business intern needs — from day one in the office.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {DOMAIN_TOPICS.map(({ n, topic, detail }) => (
            <div key={n} className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#4F46E5]/40 transition-colors">
              <div className="text-xs font-mono text-[#4F46E5] font-semibold mb-3">{n}</div>
              <h3 className="font-semibold text-[#1d1d1f] mb-2">{topic}</h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-[#6e6e73] mt-8">
          Plus 24 questions across General Aptitude (verbal + numerical reasoning), Workplace Skills (situational judgement), and an Interest Profile to confirm your track fit.{' '}
          <Link href="/" className="text-[#4F46E5] hover:underline">See the full assessment breakdown →</Link>
        </p>
      </section>

      {/* Career paths */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Where a Business internship leads.
            </h2>
            <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
              A business internship early in your academic career signals commercial maturity. These are the roles our top Business track candidates go on to pursue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROLES.map(({ title, skills, salary }) => (
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
              label="business_roles_cta"
              className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              Start your Business assessment →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
          Who the Business track is for.
        </h2>
        <p className="text-xl text-[#6e6e73] mb-14 max-w-2xl leading-relaxed">
          Commercial awareness isn't taught in classrooms — it's built by paying attention to how the world works. If that describes you, this track was made for you.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'The current affairs reader',
              body: 'You read the Financial Times, BBC Business, or The Economist and find yourself thinking about why companies make the decisions they do. You already have commercial intuition — this assessment gives it a credible, verified score.',
            },
            {
              title: 'The Economics or Business studies student',
              body: 'You\'re studying Economics, Business Studies, or Accounting at GCSE or A-level and you want real work experience to give your theoretical knowledge context. The domain questions are pitched to challenge and reward exactly what you\'ve been learning.',
            },
            {
              title: 'The entrepreneurial student',
              body: 'You\'ve run a school enterprise, sold something online, or organised events. You understand what it means to deliver results. This assessment gives that practical experience a measurable score that employers can act on.',
            },
          ].map(({ title, body }) => (
            <div key={title} className="border-t-2 border-[#4F46E5] pt-6">
              <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
              <p className="text-[#6e6e73] text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full assessment phases */}
      <section className="bg-[#f5f5f7] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
            All 34 questions, broken down.
          </h2>
          <p className="text-xl text-[#6e6e73] mb-12 max-w-2xl leading-relaxed">
            Our adaptive engine adjusts question difficulty in real time. The result is a report that accurately reflects your ceiling — not just your average.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#d2d2d7]">
                  <th className="text-left py-4 pr-8 font-semibold text-[#1d1d1f]">Phase</th>
                  <th className="text-left py-4 pr-8 font-semibold text-[#1d1d1f]">Questions</th>
                  <th className="text-left py-4 font-semibold text-[#1d1d1f]">What we measure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d2d2d7]">
                {[
                  { phase: 'General Aptitude', q: 10, measure: 'Verbal reasoning, numerical reasoning, data interpretation' },
                  { phase: 'Business Domain', q: 10, measure: 'Market analysis, financial literacy, strategy, operations' },
                  { phase: 'Workplace Skills', q: 8, measure: 'Situational judgement, professional communication, prioritisation' },
                  { phase: 'Interest Profile', q: 6, measure: 'Track alignment, career motivation, preferred working style' },
                ].map(({ phase, q, measure }) => (
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
              label="business_phases_cta"
              className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              Take the assessment free →
            </CtaLink>
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

      {/* Blog reading */}
      {internshipPosts.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">Further reading</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {internshipPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
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
          <p className="text-sm font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">Other internship tracks</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {OTHER_TRACKS.map(({ href, label, desc }) => (
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
          Your business internship starts here.
        </h2>
        <p className="text-xl text-[#6e6e73] mb-10 max-w-xl mx-auto leading-relaxed">
          Free 34-question assessment. AI readiness report. Real placement opportunities. No CV required to start.
        </p>
        <CtaLink
          href="/apply"
          label="business_final_cta"
          className="inline-block bg-[#4F46E5] text-white px-10 py-5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-xl"
        >
          Apply free — Business track →
        </CtaLink>
        <p className="mt-6 text-sm text-[#6e6e73]">Free for all students aged 14–18 · Takes 35 minutes · Instant results</p>
      </section>
    </main>
  )
}
