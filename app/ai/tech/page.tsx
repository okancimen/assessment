import type { Metadata } from 'next'
import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { BLOG_POSTS } from '@/app/blog/posts'
import { TECH_EMPLOYER_BRIEF, TECH_PREP_GUIDE } from '@/app/ai/track-prose-content'
import InternshipGuestPreview from '@/components/ai/InternshipGuestPreview'

const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipPosts = BLOG_POSTS.filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t))).slice(0, 2)

const BASE_URL = 'https://eduentry.ai'
const TRACK_URL = `${BASE_URL}/tech`

export const metadata: Metadata = {
  title: 'Technology Internship Assessment — Get Your Tech Readiness Report',
  description:
    'Free AI-powered assessment for students aged 14–18 pursuing tech internships in the UK. Tests coding logic, algorithms, cybersecurity, UX, and software skills. Get placed in a real technology internship.',
  keywords: [
    'tech internship assessment UK',
    'technology internship high school students',
    'software internship year 11 year 12',
    'coding internship assessment students',
    'IT internship for students UK',
    'technology work experience assessment',
    'computer science internship students',
    'software developer internship UK',
    'tech work experience students',
    'technology internship readiness',
  ],
  alternates: { canonical: TRACK_URL, languages: { 'en-GB': TRACK_URL, tr: `${BASE_URL}/tr/teknoloji`, es: `${BASE_URL}/es/tecnologia`, fr: `${BASE_URL}/fr/technologie`, ar: `${BASE_URL}/ar/taqniya`, ru: `${BASE_URL}/ru/tekhnologii`, zh: `${BASE_URL}/zh/keji`, 'x-default': TRACK_URL } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    title: 'Technology Internship Assessment for Students — Eduentry.ai',
    description: 'Free 34-question adaptive assessment for high school students seeking tech internships. AI-scored. Get your personalised readiness report in 20 minutes.',
    url: TRACK_URL,
    siteName: 'Eduentry.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Internship Assessment — Eduentry.ai',
    description: 'Free adaptive assessment for students aged 14–18 seeking technology internships in the UK.',
  },
}

const OTHER_TRACKS = [
  { href: '/business', label: 'Business', desc: 'Strategy, finance, operations' },
  { href: '/data-analytics', label: 'Data Analytics', desc: 'Data, statistics, insights' },
  { href: '/digital-marketing', label: 'Digital Marketing', desc: 'SEO, social, campaigns' },
]

const ROLES = [
  { title: 'Junior Software Developer', skills: 'Python, JavaScript, version control, code review', salary: '£28k–£45k' },
  { title: 'IT Support Analyst', skills: 'Troubleshooting, networking, ticketing systems, end-user support', salary: '£22k–£32k' },
  { title: 'Cybersecurity Analyst', skills: 'Threat detection, SIEM tools, vulnerability scanning, incident response', salary: '£35k–£60k' },
  { title: 'UX / UI Designer', skills: 'Figma, user research, wireframing, accessibility, design systems', salary: '£30k–£55k' },
  { title: 'Data Engineer', skills: 'SQL, ETL pipelines, cloud infrastructure, data modelling', salary: '£40k–£70k' },
  { title: 'QA / Test Engineer', skills: 'Test automation, bug reporting, Selenium, regression testing', salary: '£28k–£48k' },
]

const DOMAIN_TOPICS = [
  { n: '01', topic: 'Algorithm & Computational Thinking', detail: 'Trace code paths, predict output, evaluate efficiency of different approaches.' },
  { n: '02', topic: 'Data Types & Variables', detail: 'Understand how integers, strings, booleans, and arrays behave in real scenarios.' },
  { n: '03', topic: 'Loops & Conditionals', detail: 'Read for/while loops and if/else branches — predict what the code outputs.' },
  { n: '04', topic: 'Debugging & Error Analysis', detail: 'Identify the logic error or syntax mistake in a short code snippet.' },
  { n: '05', topic: 'Software Development Lifecycle', detail: 'Match tasks (user stories, QA, deployment) to the correct SDLC phase.' },
  { n: '06', topic: 'Cybersecurity Fundamentals', detail: 'Identify phishing, SQL injection, and other common threat patterns.' },
  { n: '07', topic: 'Networking Basics', detail: 'Understand DNS, HTTP, IP addresses, and how data travels the internet.' },
  { n: '08', topic: 'UX & Interface Design', detail: 'Evaluate mockup decisions — which layout better serves the user goal.' },
  { n: '09', topic: 'Technology Tool Selection', detail: 'Choose the right tool (database, framework, service) for a described problem.' },
  { n: '10', topic: 'Tech Ethics & Digital Citizenship', detail: 'Navigate GDPR, AI bias, accessibility requirements, and digital wellbeing.' },
]

const FAQS = [
  {
    q: 'Do I need to know how to code to take the Technology track?',
    a: 'No — the assessment tests computational thinking and logical reasoning, not programming syntax. Students with no coding experience regularly score in the top tier. That said, if you have written any code before, the domain questions will feel more familiar.',
  },
  {
    q: 'What types of tech companies offer internships to students aged 14–18?',
    a: 'Thousands of UK companies run structured work experience and internship schemes for secondary school students — from global firms like Google, Microsoft, and Amazon through to funded schemes run by local tech start-ups and scale-ups. Many specifically seek students with assessment data to back their application.',
  },
  {
    q: 'How does the Technology domain section compare to GCSE Computer Science?',
    a: 'The domain questions draw on similar concepts (algorithms, data, networks) but are scenario-based rather than exam-style. You apply the concept to a real work situation. Students who have not studied GCSE CS can still perform well — the scenarios are designed to be approachable.',
  },
  {
    q: 'Will my Eduentry readiness report help with a university CS application?',
    a: 'Evidence of structured work experience and measurable skills is increasingly valued by CS admissions teams, especially at post-92 and Russell Group universities. Your readiness report gives you a concrete artefact to reference in personal statements and interviews.',
  },
  {
    q: 'Can I retake the assessment if I want a better score?',
    a: 'Each account receives one full assessment. This ensures your report reflects genuine performance — which is what employers value. If you are not ready, our blog has targeted preparation guides for the Technology track.',
  },
]

export default function TechTrackPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Technology Track', item: TRACK_URL },
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
    name: 'Technology Internship Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking technology internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
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
    name: 'Technology Internship Readiness Assessment',
    description: 'AI-powered adaptive assessment for high school students aged 14–18 seeking technology internships in the UK. 34 questions across 4 phases, AI-scored, personalised readiness report.',
    url: TRACK_URL,
    provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Technology Internship Readiness Report',
      credentialCategory: 'certificate',
    },
    occupationalCategory: 'Technology',
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
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-0 sm:blur-[120px]" />
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="text-sm text-white/40 mb-12">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Technology Track</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8]" />
              Technology Track
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6 max-w-3xl">
            Prove you&apos;re ready for a tech internship.
          </h1>

          <p className="text-xl text-white/50 leading-relaxed max-w-2xl mb-10">
            The UK tech sector employs 1.7 million people — and employers are desperate for junior talent they can trust. Our free 34-question assessment gives you a measurable readiness score and a personalised AI report to back every application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <CtaLink
              href="/apply"
              label="tech_hero_cta"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Start free assessment — Technology track →
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
            <span>✓ Progress saves automatically</span>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { stat: '1.7M', label: 'tech jobs in the UK' },
            { stat: '72%', label: 'of employers report skills shortages' },
            { stat: '£45k+', label: 'avg software developer salary' },
            { stat: '10×', label: 'years of consecutive growth in tech hiring' },
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
              What the Technology domain tests.
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              10 scenario-based questions covering the core topics any technology intern encounters on day one — and the logical thinking that separates candidates who flounder from those who thrive.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {DOMAIN_TOPICS.map(({ n, topic, detail }) => (
              <div key={n} className="border border-white/[0.08] rounded-2xl p-6 hover:border-[#4F46E5]/50 transition-colors">
                <div className="text-xs font-mono text-[#818CF8] font-semibold mb-3">{n}</div>
                <h3 className="font-semibold text-white mb-2">{topic}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-white/40 mt-8">
            Plus 24 questions across General Aptitude (verbal + numerical reasoning), Workplace Skills (situational judgement), and an Interest Profile to confirm your track fit.{' '}
            <Link href="/" className="text-[#818CF8] hover:underline">See the full assessment breakdown →</Link>
          </p>
        </div>
      </section>

      {/* Career paths */}
      <section className="py-24 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Where a Technology internship leads.
            </h2>
            <p className="text-xl text-white/50 max-w-2xl leading-relaxed">
              Your first tech internship is a launchpad. These are the roles our top Technology track candidates go on to secure — either directly or as a graduate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROLES.map(({ title, skills, salary }) => (
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
              label="tech_roles_cta"
              className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Start your Technology assessment →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Who the Technology track is for.
          </h2>
          <p className="text-xl text-white/50 mb-14 max-w-2xl leading-relaxed">
            You don&apos;t need a CV full of competitions. You need to demonstrate you can think like a technologist — and that&apos;s exactly what this assessment measures.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'The self-taught coder',
                body: "You've built things on your own — Scratch, Python tutorials, game mods, websites. You've never had a formal internship but you know how to solve problems with technology. This assessment gives that self-taught ability a credible, verifiable score.",
              },
              {
                title: 'The GCSE Computer Science student',
                body: "You're studying (or about to study) Computer Science at GCSE and you want real work experience to complement the theory. The domain questions are pitched at the same conceptual level — scenario-based, not rote recall.",
              },
              {
                title: 'The curious problem-solver',
                body: "You haven't studied computing formally but you're naturally analytical — you enjoy puzzles, logic games, figuring out how things work. The general aptitude phases were designed with you in mind. Curiosity and reasoning matter here.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="border-t-2 border-[#4F46E5] pt-6">
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
            Our adaptive assessment adjusts question difficulty in real time. You&apos;ll be challenged appropriately at every step — and your report reflects exactly where you excelled.
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
                  { phase: 'General Aptitude', q: 10, measure: 'Verbal reasoning, numerical reasoning, pattern recognition' },
                  { phase: 'Technology Domain', q: 10, measure: 'Coding logic, cybersecurity, UX, networking, ethics' },
                  { phase: 'Workplace Skills', q: 8, measure: 'Situational judgement, communication, teamwork under pressure' },
                  { phase: 'Interest Profile', q: 6, measure: 'Track alignment, motivation, learning style, role fit' },
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
              label="tech_phases_cta"
              className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity text-lg shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Take the assessment free →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Employer brief */}
      <section className="py-24 px-6 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10">{TECH_EMPLOYER_BRIEF.heading}</h2>
          <div className="space-y-6">
            {TECH_EMPLOYER_BRIEF.paragraphs.map((p, i) => (
              <p key={i} className="text-white/50 leading-relaxed text-[15px]">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Prep guide */}
      <section className="py-24 px-6 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-10">{TECH_PREP_GUIDE.heading}</h2>
          <div className="space-y-6">
            {TECH_PREP_GUIDE.paragraphs.map((p, i) => (
              <p key={i} className="text-white/50 leading-relaxed text-[15px]">{p}</p>
            ))}
          </div>
        </div>
      </section>

      <InternshipGuestPreview />

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
            <p className="text-white font-semibold">Ready for a 3-month fellowship on live Singapore tech deliverables?</p>
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
            Your tech internship starts here.
          </h2>
          <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto leading-relaxed">
            Free 34-question assessment. AI readiness report. Real placement opportunities. No CV required to start.
          </p>
          <CtaLink
            href="/apply"
            label="tech_final_cta"
            className="inline-block bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-5 rounded-xl font-semibold hover:opacity-90 transition-opacity text-xl shadow-[0_0_24px_rgba(99,102,241,0.3)]"
          >
            Apply free — Technology track →
          </CtaLink>
          <p className="mt-6 text-sm text-white/40">Free for all students aged 14–18 · Takes 20 minutes · Instant results</p>
        </div>
      </section>
    </main>
  )
}
