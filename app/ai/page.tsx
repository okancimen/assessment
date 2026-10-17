import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, INTERNSHIP_TRACK_DESCRIPTIONS } from '@/types'
import { BLOG_POSTS } from '@/app/blog/posts'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: { absolute: 'Internship Readiness Assessment UK — Free AI Report | Eduentry.ai' },
  description:
    'Free AI-powered internship assessment for high school students aged 14–18 in the UK. 34 adaptive questions across Tech, Business, Data and Marketing. Instant personalised readiness report.',
  keywords: [
    'internship readiness assessment UK',
    'free internship assessment high school students',
    'work experience assessment students UK',
    'AI internship readiness report',
    'tech internship year 10 11 12 13',
    'business internship sixth form students',
    'data analytics internship high school UK',
    'digital marketing internship students UK',
    'internship for 14 15 16 17 18 year olds',
    'career readiness assessment year 9 10 11 12 13',
    'UCAS work experience personal statement',
    'free aptitude test students UK',
    'high school internship placement UK',
    'adaptive assessment students career',
    'summer internship school leavers UK',
  ],
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-GB': BASE_URL, tr: `${BASE_URL}/tr`, es: `${BASE_URL}/es`, fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar`, ru: `${BASE_URL}/ru`, zh: `${BASE_URL}/zh`, 'x-default': BASE_URL },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Eduentry.ai',
    locale: 'en_GB',
    alternateLocale: ['tr_TR', 'es_ES', 'fr_FR', 'ar_AE', 'ru_RU', 'zh_CN'],
    title: 'Internship Readiness Assessment UK — Free AI Report | Eduentry.ai',
    description: 'Free AI-powered internship assessment for high school students aged 14–18. 34 adaptive questions across Tech, Business, Data Analytics, and Digital Marketing. Instant personalised report.',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'Eduentry.ai — Internship Readiness Assessment' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internship Readiness Assessment UK — Free AI Report | Eduentry.ai',
    description: 'Free AI-powered internship readiness assessment for students aged 14–18. 34 questions, instant personalised report.',
    images: [`${BASE_URL}/opengraph-image`],
  },
}

const TRACK_SLUGS: Record<string, string> = {
  tech: '/tech',
  business: '/business',
  data_analytics: '/data-analytics',
  digital_marketing: '/digital-marketing',
}

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

const TRACK_COLORS: Record<string, { border: string; glow: string; label: string }> = {
  tech:              { border: 'group-hover:border-[#4F46E5]/50', glow: 'from-[#4F46E5]/10', label: 'text-[#818CF8]' },
  business:          { border: 'group-hover:border-[#7C3AED]/50', glow: 'from-[#7C3AED]/10', label: 'text-[#A78BFA]' },
  data_analytics:    { border: 'group-hover:border-[#6366F1]/50', glow: 'from-[#6366F1]/10', label: 'text-[#818CF8]' },
  digital_marketing: { border: 'group-hover:border-[#8B5CF6]/50', glow: 'from-[#8B5CF6]/10', label: 'text-[#A78BFA]' },
}

const PHASES = [
  { n: '01', label: 'General Aptitude',  qs: 10, desc: 'Verbal & numerical reasoning',      tag: 'Cognitive' },
  { n: '02', label: 'Domain Knowledge',  qs: 10, desc: 'Track-specific applied knowledge',   tag: 'Technical' },
  { n: '03', label: 'Workplace Skills',  qs: 8,  desc: 'Real workplace scenarios (SJT)',     tag: 'Behavioural' },
  { n: '04', label: 'Interest Profile',  qs: 6,  desc: 'Work style & preference mapping',    tag: 'Personality' },
]

const FAQS = [
  { q: 'Is the assessment free?',              a: 'Yes — always free for students. There are no hidden fees, subscriptions, or paid tiers.' },
  { q: 'Who is it for?',                       a: 'High school students aged 14–18 (Year 9 to Sixth Form) who want to gain professional experience.' },
  { q: 'How long does it take?',               a: 'Around 20 minutes across 34 questions in four phases. The assessment is fully resumable — you can stop and continue later.' },
  { q: 'What track should I choose?',          a: 'You rank up to three track preferences when you apply. The Interest Profile phase also helps identify where you fit best — your report reflects this.' },
  { q: 'When do I get my readiness report?',   a: 'Immediately after you finish. Once you complete all 34 questions, the AI scoring runs instantly and your report is ready in your account — no waiting.' },
  { q: 'Can I use my assessment in my CV?',    a: 'Yes. Your readiness report includes a measurable score and a skill breakdown by track that you can reference directly in applications. Many of our students carry it into personal statements and job interviews.' },
  { q: 'Do I need to be a UK resident?',       a: 'The assessment is open to any student aged 14–18. Internship placements are currently UK-based, so you will need to be able to work in the UK for the placement itself — but the assessment and report are available to everyone.' },
]

const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipPosts = BLOG_POSTS
  .filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t)))
  .slice(0, 3)

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Eduentry',
  description: 'Eduentry.ai provides a free AI-powered internship readiness assessment for high school students aged 14–18. 34 adaptive questions across Technology, Business, Data Analytics, and Digital Marketing tracks. Instant personalised readiness report.',
  url: BASE_URL,
  foundingDate: '2026',
  knowsAbout: ['internship readiness assessment','career readiness','work experience','adaptive assessment','high school internships','aptitude testing','situational judgement','university admissions work experience'],
  sameAs: ['https://eduentry.com','https://www.linkedin.com/company/eduentry','https://x.com/eduentrycom','https://www.youtube.com/@eduentrycom','https://www.instagram.com/eduentrycom'],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Eduentry.ai',
  url: BASE_URL,
  inLanguage: 'en-GB',
  publisher: { '@id': `${BASE_URL}/#organization` },
}

const WEBPAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: 'Internship Readiness Assessment UK — Free AI Report | Eduentry.ai',
  description: 'Free AI-powered internship assessment for high school students aged 14–18. 34 adaptive questions. Instant personalised readiness report.',
  inLanguage: 'en-GB',
  isPartOf: { '@id': `${BASE_URL}/#website` },
  about: { '@id': `${BASE_URL}/#service` },
}

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/#service`,
  name: 'Internship Readiness Assessment',
  url: BASE_URL,
  description: 'Free AI-powered 34-question adaptive assessment for high school students aged 14–18. Evaluates aptitude, domain knowledge, workplace skills, and interest profile across Tech, Business, Data Analytics, and Digital Marketing tracks.',
  inLanguage: 'en-GB',
  provider: { '@id': `${BASE_URL}/#organization` },
  audience: { '@type': 'EducationalAudience', audienceType: 'High school students aged 14–18' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
  serviceType: 'Educational Assessment',
  areaServed: 'Worldwide',
}

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to get placed in a UK internship with Eduentry.ai',
  description: 'Free 34-question adaptive assessment for high school students aged 14–18. Three steps from registration to internship placement match.',
  inLanguage: 'en-GB',
  totalTime: 'PT20M',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Register & apply', text: 'Create your free Eduentry.ai account and tell us about yourself, your school year, and your track preferences across Technology, Business, Data Analytics, or Digital Marketing.' },
    { '@type': 'HowToStep', position: 2, name: 'Take the assessment', text: '34 adaptive questions across four phases: General Aptitude, Domain Knowledge, Workplace Skills, and Interest Profile. Takes approximately 20 minutes. Resume any time.' },
    { '@type': 'HowToStep', position: 3, name: 'Get your report', text: 'Receive an AI-written personalised readiness report with a readiness tier, phase-by-phase breakdown, and internship placement match.' },
  ],
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function AIHomePage() {
  return (
    <main className="flex-1 bg-[#050505] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Indigo + violet glow — CSS radial gradient avoids GPU-expensive blur filters */}
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 700px 400px at 50% 33%, rgba(79,70,229,0.07) 0%, transparent 70%), radial-gradient(ellipse 400px 300px at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
              Personalised · Free · 20 Minutes
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            <span className="text-white">Get placed in a</span>
            <br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">real work life.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/50 max-w-[43rem] mx-auto mb-10 leading-relaxed">
            A free 34-question adaptive assessment for high school and university students. Measure your aptitude, domain knowledge, and workplace skills across 4 professional areas — and get placed in a real internship.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-12">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
            >
              Apply free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="https://eduentry.com/sample-report"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-white/80 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/[0.08] hover:border-white/[0.2] transition-all"
            >
              See a sample report
            </a>
          </div>

          {/* Terminal card */}
          <div className="max-w-md mx-auto text-left">
            <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — assessment report</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
                <div className="text-white/30">
                  <span className="text-[#818CF8]">❯</span>
                  {' '}eduentry assess --track tech --age 16
                </div>
                <div className="text-white/20 text-[11px] py-1">Running 34-question adaptive assessment...</div>
                <div className="space-y-0.5 pt-1">
                  <div className="flex justify-between">
                    <span className="text-white/40">General Aptitude</span>
                    <span className="text-[#4ade80]">87 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Domain Knowledge</span>
                    <span className="text-[#4ade80]">74 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Workplace Skills</span>
                    <span className="text-[#4ade80]">91 / 100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Interest Profile</span>
                    <span className="text-[#4ade80]">88 / 100</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.06] pt-2 mt-2 flex justify-between items-center">
                  <span className="text-white/40">Readiness tier</span>
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold">Internship Ready ✦</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-white/20 text-center mt-3 font-mono">Sample output — your results are personalised</p>
          </div>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Available tracks</p>
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Four paths.<br />
              <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">One assessment.</span>
            </h2>
            <Link href="/apply" className="text-sm font-medium text-white/40 hover:text-white/80 transition-colors whitespace-nowrap">
              Compare all tracks →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {INTERNSHIP_TRACKS.map((track) => {
              const c = TRACK_COLORS[track]
              return (
                <Link
                  key={track}
                  href={TRACK_SLUGS[track]}
                  className={`group relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 transition-all overflow-hidden ${c.border}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className={`font-mono text-2xl mb-4 ${c.label}`}>{TRACK_ICONS[track]}</div>
                    <h3 className="font-bold text-white text-sm mb-2 leading-snug">{INTERNSHIP_TRACK_LABELS[track]}</h3>
                    <p className="text-xs text-white/40 leading-relaxed mb-4">{INTERNSHIP_TRACK_DESCRIPTIONS[track]}</p>
                    <span className={`text-xs font-mono font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${c.label}`}>
                      Explore →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Process</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-16">
            Three steps to placement.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden sm:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-gradient-to-r from-[#4F46E5]/40 via-[#7C3AED]/40 to-[#4F46E5]/10" />
            {[
              { n: '01', title: 'Register & apply',    desc: 'Create your free account. Tell us about yourself, your school year, and track preferences.' },
              { n: '02', title: 'Take the assessment', desc: '34 adaptive questions across four phases. Resume any time — no time pressure.' },
              { n: '03', title: 'Get your report',     desc: 'AI-written readiness report with scores, insights, and your internship placement match.' },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative">
                <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/10 flex items-center justify-center mb-6">
                  <span className="font-mono text-sm font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{n}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Assessment structure</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            What to expect.
          </h2>
          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-center gap-6 px-7 py-5 ${i < PHASES.length - 1 ? 'border-b border-white/[0.04]' : ''} hover:bg-white/[0.02] transition-colors`}
              >
                <div className="font-mono text-sm text-white/20 w-8 flex-shrink-0">{phase.n}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-white text-sm">{phase.label}</h3>
                    <span className="font-mono text-[10px] border border-white/[0.08] text-white/30 px-2 py-0.5 rounded-full">{phase.tag}</span>
                  </div>
                  <p className="text-xs text-white/40">{phase.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-mono text-2xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{phase.qs}</div>
                  <div className="font-mono text-[10px] text-white/20">questions</div>
                </div>
              </div>
            ))}
            <div className="px-7 py-3.5 bg-white/[0.02] border-t border-white/[0.04]">
              <span className="font-mono text-[11px] text-white/25">Total: 34 questions · ~20 minutes · Fully resumable</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Report output</p>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                Your report.<br />
                <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">Instant.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                The moment you finish your final question, the AI scoring runs. No waiting. No email. Your full report is live in your account within seconds.
              </p>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Start the assessment
                <svg className="w-4 h-4 text-[#7C3AED]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              {[
                { icon: '◆', text: 'Readiness tier — Internship Ready, Developing, or Needs Support' },
                { icon: '◆', text: 'AI-written personalised summary paragraph' },
                { icon: '◆', text: 'Per-phase insight cards with strengths and growth areas' },
                { icon: '◆', text: 'Track fit profile showing where you score strongest' },
                { icon: '◆', text: 'Shareable report link for applications and personal statements' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08] transition-colors">
                  <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent text-xs mt-0.5 flex-shrink-0">{icon}</span>
                  <span className="text-sm text-white/60 leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Evidence</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">
            Why early experience matters.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: '5×', desc: 'less likely to be NEET at 19 for students with 4+ employer encounters before age 16', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'of employers say internship experience is important when hiring new graduates', source: 'NACE, 2023' },
              { stat: '70%', desc: 'higher job offer rate before graduation for students with internship experience', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 bg-white/[0.01]">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F46E5]/40 to-transparent" />
                <div className="font-mono text-5xl font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent mb-3">{stat}</div>
                <p className="text-sm text-white/60 leading-snug mb-3">{desc}</p>
                <p className="font-mono text-[10px] text-white/20">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-24 border-t border-white/[0.04] bg-[#080808]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// Research</p>
            <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Latest from the blog.</h2>
              <Link href="https://eduentry.com/blog" className="text-sm font-medium text-white/40 hover:text-white/70 transition-colors whitespace-nowrap">
                View all →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`https://eduentry.com/blog/${post.slug}`}
                  className="group flex flex-col border border-white/[0.06] rounded-2xl p-6 bg-white/[0.01] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all"
                >
                  <div className="flex items-center gap-2 text-[11px] font-mono text-white/25 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-white/80 text-sm leading-snug mb-2 group-hover:text-white transition-colors flex-1">{post.title}</h3>
                  <p className="text-xs text-white/30 leading-relaxed line-clamp-2">{post.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-mono text-[11px] text-[#818CF8] uppercase tracking-[0.2em] mb-4">// FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-12">Questions.</h2>
          <div className="space-y-px rounded-2xl overflow-hidden border border-white/[0.06]">
            {FAQS.map(({ q, a }, i) => (
              <details
                key={q}
                className={`group bg-[#080808] ${i > 0 ? 'border-t border-white/[0.04]' : ''}`}
              >
                <summary className="flex items-center justify-between gap-6 px-7 py-5 cursor-pointer list-none font-medium text-white/70 hover:text-white transition-colors text-sm">
                  {q}
                  <svg className="w-4 h-4 text-white/30 flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-7 pb-5 text-sm text-white/40 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden border-t border-white/[0.04]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4F46E5]/10 via-transparent to-[#7C3AED]/10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3.5 py-1.5 rounded-full tracking-[0.1em] uppercase mb-8">
            Free for students · No card required
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
            Apply now.<br />
            <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">It&apos;s free.</span>
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            34 questions. 20 minutes. A personalised AI report and your first step toward a real internship.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-10 py-4 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-[0_0_40px_rgba(99,102,241,0.25)]"
          >
            Start your application
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
