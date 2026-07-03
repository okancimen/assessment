import type { Metadata } from 'next'
import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS } from '@/app/blog/posts'

const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipPosts = BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).slice(0, 2)

const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/data-analytics`

export const metadata: Metadata = {
  title: 'Data Analytics Internship Assessment — Get Your Data Readiness Report',
  description:
    'Free AI-powered assessment for students aged 14–18 pursuing data analytics internships in the UK. Tests chart reading, statistics, spreadsheet logic, SQL basics, and data storytelling. Get placed in a real data internship.',
  keywords: [
    'data analytics internship students UK',
    'data science internship high school',
    'data analyst work experience assessment',
    'data internship year 12 13',
    'data analytics assessment students UK',
    'data internship for students',
    'data literacy assessment high school',
    'junior data analyst internship UK',
    'data work experience students',
    'business intelligence internship students',
  ],
  alternates: { canonical: TRACK_URL, languages: { 'en-GB': TRACK_URL, 'x-default': TRACK_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Data Analytics Internship Assessment for Students — Eduentry.ai',
    description: 'Free 34-question adaptive assessment for high school students seeking data analytics internships. AI-scored. Personalised readiness report in 35 minutes.',
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Analytics Internship Assessment — Eduentry.ai',
    description: 'Free adaptive assessment for students aged 14–18 seeking data analytics internships in the UK.',
  },
}

const OTHER_TRACKS = [
  { href: '/tech', label: 'Technology', desc: 'Coding, algorithms, cybersecurity' },
  { href: '/business', label: 'Business', desc: 'Strategy, finance, operations' },
  { href: '/digital-marketing', label: 'Digital Marketing', desc: 'SEO, social, campaigns' },
]

const ROLES = [
  { title: 'Junior Data Analyst', skills: 'SQL, Excel, Python basics, data cleaning, dashboard creation, stakeholder reporting', salary: '£28k–£45k' },
  { title: 'Business Intelligence Analyst', skills: 'Power BI, Tableau, data modelling, KPI tracking, executive dashboards', salary: '£32k–£52k' },
  { title: 'Market Research Analyst', skills: 'Survey design, data collection, segmentation, competitive benchmarking', salary: '£26k–£40k' },
  { title: 'Reporting Analyst', skills: 'Automated reporting, Excel/Google Sheets, data reconciliation, SLA tracking', salary: '£24k–£38k' },
  { title: 'Data Quality Analyst', skills: 'Data validation, anomaly detection, master data management, documentation', salary: '£26k–£42k' },
  { title: 'Graduate Data Scientist (pathway)', skills: 'Statistical modelling, Python/R, ML pipelines, experimentation design', salary: '£40k–£70k' },
]

const DOMAIN_TOPICS = [
  { n: '01', topic: 'Chart & Graph Reading', detail: 'Interpret bar charts, line graphs, scatter plots, and heatmaps — extract the key insight quickly and accurately.' },
  { n: '02', topic: 'Descriptive Statistics', detail: 'Work with mean, median, mode, range, and outliers — understand what each tells you and when each misleads.' },
  { n: '03', topic: 'Data Quality & Errors', detail: 'Spot the incorrect row in a dataset, identify missing values, and evaluate the impact of data quality issues.' },
  { n: '04', topic: 'Spreadsheet Reasoning', detail: 'Trace the logic of IF functions, VLOOKUP, and SUMIF formulas — predict what output they produce.' },
  { n: '05', topic: 'SQL Fundamentals', detail: 'Read and interpret SELECT queries with WHERE, GROUP BY, and JOIN — determine what data a query returns.' },
  { n: '06', topic: 'Data Ethics & Privacy', detail: 'Apply GDPR principles, identify consent and anonymisation issues, and spot datasets that create unfair bias.' },
  { n: '07', topic: 'Visualisation Design', detail: 'Choose the right chart type for a given dataset and communication goal — and explain why others would mislead.' },
  { n: '08', topic: 'Statistical Inference', detail: 'Distinguish correlation from causation, identify confounding variables, and evaluate conclusions from a study.' },
  { n: '09', topic: 'Business Insight from Data', detail: 'Given a dataset summary, identify the key business finding and translate it into a recommendation.' },
  { n: '10', topic: 'Data Storytelling', detail: 'Structure a data narrative — choose what to lead with, what to cut, and what visualisation best tells the story.' },
]

const FAQS = [
  {
    q: 'Do I need to know Python or SQL to take the Data Analytics track?',
    a: 'Not at the level you might think. The SQL questions ask you to read and interpret queries — not write them from scratch. Python doesn\'t appear in the domain section. If you\'ve used Excel seriously, worked with Google Sheets formulas, or done any data work at school, you\'re well-prepared.',
  },
  {
    q: 'What companies hire student data interns in the UK?',
    a: 'Data roles exist across every sector — retailers like Tesco and ASOS, banks like HSBC and Barclays, NHS trusts, HMRC, and technology companies all run data internship programmes for students. Many SMEs also take on student data interns for project-based work. The shortage of data-literate candidates means even a high school student with proven skills stands out.',
  },
  {
    q: 'How is data analytics different from just using Excel?',
    a: 'Excel is a tool — data analytics is a way of thinking. The domain tests your ability to ask the right question of a dataset, spot errors, choose the right visualisation, and communicate what the data actually means. Those skills apply whether you\'re using Excel, Python, Power BI, or any other tool.',
  },
  {
    q: 'Will the readiness report help me get into a Data Science or Statistics degree?',
    a: 'Mathematics, Statistics, and Data Science programmes increasingly look for evidence of analytical thinking beyond exam results. A verified assessment score demonstrating strong data reasoning and statistical inference skills gives your UCAS application a concrete evidence point to reference.',
  },
  {
    q: 'What is the difference between the Data Analytics and Technology tracks?',
    a: 'Data Analytics focuses on interpreting, visualising, and communicating insights from structured data — closer to the analyst and BI side of the industry. Technology focuses on coding logic, software development, cybersecurity, and system design. If you are drawn to both, choose the one that describes your ideal day: working with datasets and dashboards, or building software and systems.',
  },
]

export default function DataAnalyticsTrackPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Data Analytics Track', item: TRACK_URL },
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
    name: 'Data Analytics Internship Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking data analytics internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
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
    name: 'Data Analytics Internship Readiness Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking data analytics internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Data Analytics Internship Readiness Report',
      credentialCategory: 'certificate',
    },
    occupationalCategory: 'Data Analytics',
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
          <span className="text-[#1d1d1f]">Data Analytics Track</span>
        </nav>

        <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-sm font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#4F46E5] rounded-full inline-block" />
          Data Analytics Track
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight leading-[1.05] mb-6 max-w-3xl">
          Prove you can turn data into decisions.
        </h1>

        <p className="text-xl text-[#6e6e73] leading-relaxed max-w-2xl mb-10">
          Data analyst roles grew 40% in the UK between 2022 and 2024 — yet 82% of companies say they can't find candidates with the right skills. Our free assessment measures your data literacy, statistical reasoning, and insight communication, and produces a report employers can act on.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <CtaLink
            href="/apply"
            label="data_hero_cta"
            className="bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg text-center"
          >
            Apply free — Data Analytics track →
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
            { stat: '40%', label: 'growth in data analyst roles in the UK 2022–2024' },
            { stat: '2.7M', label: 'data jobs expected in the UK by 2028' },
            { stat: '82%', label: 'of companies struggle to find data-literate candidates' },
            { stat: '£55k', label: 'average senior data analyst salary in London' },
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
            What the Data Analytics domain tests.
          </h2>
          <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
            10 scenario-based questions covering every skill a junior data analyst uses in their first week — from reading charts to writing SQL logic to communicating a finding to a non-technical stakeholder.
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
              Where a Data Analytics internship leads.
            </h2>
            <p className="text-xl text-[#6e6e73] max-w-2xl leading-relaxed">
              Data literacy is the most transferable skill in the modern economy. These are the roles our top Data Analytics track candidates pursue — across sectors, not just tech.
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
              label="data_roles_cta"
              className="inline-block bg-[#4F46E5] text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-lg"
            >
              Start your Data Analytics assessment →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
          Who the Data Analytics track is for.
        </h2>
        <p className="text-xl text-[#6e6e73] mb-14 max-w-2xl leading-relaxed">
          You don't need to be a mathematician — you need to be someone who asks "what does this data actually tell us?" If that's your natural instinct, this track is your competitive advantage.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'The numbers-curious student',
              body: 'You naturally look for patterns in information. You\'ve used Excel beyond the basics, you notice when a statistic in an article doesn\'t add up, and you find yourself asking "how do they know that?" This assessment validates that instinct with a verified score.',
            },
            {
              title: 'The Maths or Science student',
              body: 'You\'re strong in Maths, Statistics, Physics, or Biology and you\'re looking for a career path that applies those skills in a business context. Data analytics is that bridge — and employers are actively looking for analytical students with real-world exposure.',
            },
            {
              title: 'The spreadsheet power user',
              body: 'You\'ve used Google Sheets or Excel seriously — building models, tracking data, creating charts for a project or enterprise. You have practical data instincts that the assessment is specifically designed to reward.',
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
            The adaptive engine learns your level as you progress, so every question is calibrated to push you accurately — not just recycle easy items.
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
                  { phase: 'General Aptitude', q: 10, measure: 'Verbal reasoning, numerical reasoning, logical inference' },
                  { phase: 'Data Analytics Domain', q: 10, measure: 'Charts, statistics, SQL, visualisation, data ethics' },
                  { phase: 'Workplace Skills', q: 8, measure: 'Situational judgement, stakeholder communication, accuracy under pressure' },
                  { phase: 'Interest Profile', q: 6, measure: 'Track alignment, preferred data tools, working style' },
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
              label="data_phases_cta"
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
          Your data internship starts here.
        </h2>
        <p className="text-xl text-[#6e6e73] mb-10 max-w-xl mx-auto leading-relaxed">
          Free 34-question assessment. AI readiness report. Real placement opportunities. No CV required to start.
        </p>
        <CtaLink
          href="/apply"
          label="data_final_cta"
          className="inline-block bg-[#4F46E5] text-white px-10 py-5 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-xl"
        >
          Apply free — Data Analytics track →
        </CtaLink>
        <p className="mt-6 text-sm text-[#6e6e73]">Free for all students aged 14–18 · Takes 35 minutes · Instant results</p>
      </section>
    </main>
  )
}
