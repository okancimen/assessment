import type { Metadata } from 'next'
import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS } from '@/app/blog/posts'

const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipPosts = BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).slice(0, 2)

const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/digital-marketing`

export const metadata: Metadata = {
  title: 'Digital Marketing Internship Assessment — Get Your Marketing Readiness Report',
  description:
    'Free AI-powered assessment for students aged 14–18 pursuing digital marketing internships in the UK. Tests SEO, social media strategy, content marketing, analytics, and campaign planning. Get placed in a real marketing internship.',
  keywords: [
    'digital marketing internship students UK',
    'social media internship high school',
    'marketing work experience assessment',
    'digital marketing year 12 assessment',
    'marketing internship assessment students UK',
    'SEO internship students',
    'content marketing internship high school',
    'digital marketing work experience UK',
    'social media manager internship students',
    'online marketing internship readiness',
  ],
  alternates: { canonical: TRACK_URL, languages: { 'en-GB': TRACK_URL, tr: `${BASE_URL}/tr/dijital-pazarlama`, es: `${BASE_URL}/es/marketing-digital`, fr: `${BASE_URL}/fr/marketing-digital`, ar: `${BASE_URL}/ar/tawiq`, ru: `${BASE_URL}/ru/tsifrovoy-marketing`, zh: `${BASE_URL}/zh/yingxiao`, 'x-default': TRACK_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Digital Marketing Internship Assessment for Students — Eduentry.ai',
    description: 'Free 34-question adaptive assessment for high school students seeking digital marketing internships. AI-scored. Personalised readiness report in 20 minutes.',
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Internship Assessment — Eduentry.ai',
    description: 'Free adaptive assessment for students aged 14–18 seeking digital marketing internships in the UK.',
  },
}

const OTHER_TRACKS = [
  { href: '/tech', label: 'Technology', desc: 'Coding, algorithms, cybersecurity' },
  { href: '/business', label: 'Business', desc: 'Strategy, finance, operations' },
  { href: '/data-analytics', label: 'Data Analytics', desc: 'Data, statistics, insights' },
]

const ROLES = [
  { title: 'Social Media Manager', skills: 'Platform strategy, content scheduling, community management, paid social, analytics', salary: '£25k–£42k' },
  { title: 'Content Creator / Writer', skills: 'SEO copywriting, blog strategy, email newsletters, video scripts, brand voice', salary: '£22k–£38k' },
  { title: 'SEO Analyst', skills: 'Keyword research, on-page optimisation, technical SEO, link building, GA4/GSC', salary: '£26k–£45k' },
  { title: 'Digital Marketing Executive', skills: 'Multi-channel campaigns, performance tracking, A/B testing, CRM integration', salary: '£24k–£38k' },
  { title: 'PPC / Paid Media Analyst', skills: 'Google Ads, Meta Ads, audience targeting, bidding strategy, ROAS optimisation', salary: '£28k–£48k' },
  { title: 'Email Marketing Coordinator', skills: 'Segmentation, automated flows, A/B testing subject lines, deliverability, Klaviyo', salary: '£24k–£36k' },
]

const DOMAIN_TOPICS = [
  { n: '01', topic: 'SEO Fundamentals', detail: "Identify which on-page and technical factors most affect a page's search ranking — and which common assumptions are myths." },
  { n: '02', topic: 'Social Media Strategy', detail: 'Choose the right platform and content format for a given audience, brand, and campaign objective.' },
  { n: '03', topic: 'Content Marketing', detail: "Evaluate whether a piece of content will serve its stated goal — and diagnose why it won't." },
  { n: '04', topic: 'Email Marketing', detail: 'Interpret open rates, click-through rates, and unsubscribe trends — identify what the metrics signal about campaign health.' },
  { n: '05', topic: 'Paid Advertising', detail: 'Understand cost-per-click, conversion rate, ROAS, and audience targeting — make a spend allocation decision.' },
  { n: '06', topic: 'Analytics & KPIs', detail: 'Read a Google Analytics dashboard and identify the key insight — sessions vs users, bounce rate, goal completions.' },
  { n: '07', topic: 'Brand Consistency & Messaging', detail: 'Identify which ad copy, visual, or post breaks brand guidelines — and reframe it to align with the brand voice.' },
  { n: '08', topic: 'Copywriting & Tone of Voice', detail: 'Rewrite a weak headline or CTA to be more compelling for the specific audience and channel described.' },
  { n: '09', topic: 'Campaign Planning', detail: 'Sequence a product launch campaign across channels, allocate budget across phases, and identify dependencies.' },
  { n: '10', topic: 'Digital Ethics & Compliance', detail: 'Apply GDPR, ASA guidelines, and influencer disclosure rules — identify which content or data practice is non-compliant.' },
]

const FAQS = [
  {
    q: 'Do I need a large social media following to do well on this track?',
    a: 'Absolutely not. The assessment measures strategic thinking about digital marketing — why certain decisions work, what metrics signal success, how to plan a campaign. Having your own social accounts helps build intuition, but 100k followers is not a substitute for understanding why a content strategy works.',
  },
  {
    q: 'What types of companies offer digital marketing internships to students?',
    a: 'Almost every business now has digital marketing needs — e-commerce brands, agencies, SaaS companies, retailers, charities, and local businesses all run student work experience. Digital marketing agencies often take on students for defined project weeks, which gives you exposure across multiple client industries simultaneously.',
  },
  {
    q: "How does the assessment test SEO if I haven't used Google Search Console?",
    a: "The SEO questions are conceptual — they test whether you understand what affects search rankings, not whether you can operate a specific tool. If you've ever researched why one website ranks above another, or read about SEO out of curiosity, you have the foundation. Tool-specific knowledge is trainable on the job.",
  },
  {
    q: 'Will my readiness report help me get into a marketing degree or apprenticeship?',
    a: 'Both. Marketing and media degrees increasingly value demonstrated digital literacy over predicted grades alone. Degree apprenticeships at agencies and in-house marketing teams specifically look for candidates who can show applied commercial awareness — your Eduentry report provides exactly that evidence.',
  },
  {
    q: 'Is Digital Marketing the right track if I enjoy writing and creativity?',
    a: "Yes — but with a commercial edge. The best digital marketers combine creative instinct with analytical rigour. The domain tests both: copywriting and tone of voice questions reward creative judgement, while analytics and KPI questions reward your ability to measure whether the creativity worked. If you're strong in only one, the report will show exactly where to develop.",
  },
]

export default function DigitalMarketingTrackPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Digital Marketing Track', item: TRACK_URL },
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
    name: 'Digital Marketing Internship Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking digital marketing internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    areaServed: 'Worldwide',
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
    name: 'Digital Marketing Internship Readiness Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking digital marketing internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Digital Marketing Internship Readiness Report',
      credentialCategory: 'certificate',
    },
    occupationalCategory: 'Digital Marketing',
    timeToComplete: 'PT20M',
    educationalProgramMode: 'online',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free for all students aged 14–18' },
    programPrerequisites: 'Secondary school student aged 14–18',
  }

  return (
    <main className="flex-1 bg-[#050505] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#8B5CF6] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="text-sm text-white/40 mb-12">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Digital Marketing Track</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
              Digital Marketing Track
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Prove you can grow an audience and drive results.
          </h1>

          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mb-10">
            UK digital ad spend hit £29.6 billion in 2023 — and every pound of it needs people who understand channels, audiences, and measurement. Our free assessment proves you&apos;re one of them, with a report employers can act on before they&apos;ve even met you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <CtaLink
              href="/apply"
              label="dm_hero_cta"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Apply free — Digital Marketing track →
            </CtaLink>
            <Link
              href="https://eduentry.com/blog"
              className="border border-white/[0.12] bg-white/[0.04] text-white/80 px-8 py-4 rounded-xl font-semibold hover:bg-white/[0.08] hover:border-white/[0.2] transition-all text-lg text-center"
            >
              Read internship guides
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <span>✓ Free for all students</span>
            <span>✓ Ages 14–18</span>
            <span>✓ 20 minutes</span>
            <span>✓ AI-scored instantly</span>
            <span>✓ Personalised readiness report</span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: '£29.6B', label: 'UK digital ad spend in 2023 (IAB)' },
            { stat: '32%', label: 'growth in digital marketing roles 2021–2024' },
            { stat: '77%', label: 'of marketing hirers struggle to find digitally-skilled candidates' },
            { stat: 'Top 5', label: 'fastest-growing job titles: Social Media Manager (LinkedIn UK)' },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <div className="text-4xl font-bold text-white mb-2">{stat}</div>
              <div className="text-white/40 text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What we assess */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              What the Digital Marketing domain tests.
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              10 scenario-based questions spanning every major digital channel — from organic search to paid social to email. Each question puts you in a real marketing decision and asks you to make the right call.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {DOMAIN_TOPICS.map(({ n, topic, detail }) => (
              <div key={n} className="border border-white/[0.08] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-colors">
                <div className="text-xs font-mono text-[#A78BFA] font-semibold mb-3">{n}</div>
                <h3 className="font-semibold text-white mb-2">{topic}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-white/40 mt-8">
            Plus 24 questions across General Aptitude (verbal + numerical reasoning), Workplace Skills (situational judgement), and an Interest Profile to confirm your track fit.{' '}
            <Link href="/" className="text-[#A78BFA] hover:underline">See the full assessment breakdown →</Link>
          </p>
        </div>
      </section>

      {/* Career paths */}
      <section className="py-24 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Where a Digital Marketing internship leads.
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Digital marketing is a broad field with clear specialisation paths. Start with an internship that exposes you to multiple channels — then double down on the one you&apos;re best at.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROLES.map(({ title, skills, salary }) => (
              <div key={title} className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/[0.08]">
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{skills}</p>
                <div className="text-sm font-semibold text-[#A78BFA]">{salary}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CtaLink
              href="/apply"
              label="dm_roles_cta"
              className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Start your Digital Marketing assessment →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Who the Digital Marketing track is for.
          </h2>
          <p className="text-xl text-white/50 mb-14 max-w-2xl leading-relaxed">
            The best digital marketers combine creative instinct with analytical thinking. If you&apos;re drawn to both sides, this track rewards exactly that combination.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'The content-first creator',
                body: "You've built a YouTube channel, run a TikTok account, written a blog, or created content for a school or community project. You understand intuitively what makes people stop and engage. This assessment gives that creative instinct a commercial score.",
              },
              {
                title: 'The analytically-minded marketer',
                body: "You're drawn to the data behind marketing — why some campaigns outperform others, how ad spend translates into revenue, what engagement metrics actually signal. You want a role where you measure results, not just produce them.",
              },
              {
                title: 'The all-rounder student',
                body: "You're strong across English, Media Studies, or Business, and you want a career that blends writing, strategy, and technology. Digital marketing is one of the few fields where all three matter equally — and where breadth is rewarded, not penalised.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-t-2 border-[#7C3AED] pt-6">
                <h3 className="font-bold text-white mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full assessment phases */}
      <section className="py-24 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            All 34 questions, broken down.
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl leading-relaxed">
            Adaptive difficulty means the assessment calibrates to your level in real time — so your readiness report reflects genuine performance, not luck.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-4 pr-8 font-semibold text-white">Phase</th>
                  <th className="text-left py-4 pr-8 font-semibold text-white">Questions</th>
                  <th className="text-left py-4 font-semibold text-white">What we measure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {[
                  { phase: 'General Aptitude', q: 10, measure: 'Verbal reasoning, numerical reasoning, reading comprehension' },
                  { phase: 'Digital Marketing Domain', q: 10, measure: 'SEO, social media, content, analytics, paid media, ethics' },
                  { phase: 'Workplace Skills', q: 8, measure: 'Situational judgement, client communication, deadline management' },
                  { phase: 'Interest Profile', q: 6, measure: 'Channel preference, creative vs analytical balance, role fit' },
                ].map(({ phase, q, measure }) => (
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
              label="dm_phases_cta"
              className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Take the assessment free →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Frequently asked questions.
          </h2>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
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
      {internshipPosts.length > 0 && (
        <section className="py-16 px-6 border-t border-white/[0.04]">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">Further reading</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {internshipPosts.map(post => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/blog/${post.slug}`}
                  className="border border-white/[0.08] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-xs font-medium text-[#A78BFA] bg-[#7C3AED]/10 rounded-full px-2.5 py-0.5">{tag}</span>
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
          <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-6">Other internship tracks</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {OTHER_TRACKS.map(({ href, label, desc }) => (
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

      {/* University Fellowship backlink */}
      <section className="py-12 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-1">UNIVERSITY STUDENTS</p>
            <p className="text-white font-semibold">Ready for a 3-month fellowship on live Singapore growth deliverables?</p>
            <p className="text-sm text-white/40 mt-1">Top 10% of scorers get selected for a paid-equivalent, remote-first fellowship via Magenta Networks.</p>
          </div>
          <a href="/work-experience" className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold border border-[#A78BFA]/30 text-[#A78BFA] hover:bg-[#A78BFA]/10 transition-colors whitespace-nowrap">
            View Fellowship →
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Your digital marketing internship starts here.
          </h2>
          <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Free 34-question assessment. AI readiness report. Real placement opportunities. No CV required to start.
          </p>
          <CtaLink
            href="/apply"
            label="dm_final_cta"
            className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-xl shadow-[0_0_24px_rgba(99,102,241,0.3)]"
          >
            Apply free — Digital Marketing track →
          </CtaLink>
          <p className="mt-6 text-sm text-white/40">Free for all students aged 14–18 · Takes 20 minutes · Instant results</p>
        </div>
      </section>
    </main>
  )
}
