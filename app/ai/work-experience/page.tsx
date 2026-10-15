import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/work-experience`

export const metadata: Metadata = {
  title: { absolute: 'University Work Experience & Global Fellowship — Eduentry.ai' },
  description:
    'Take the 20-minute AI Internship Readiness Assessment. Top 10% of university students get selected for a 3-month hybrid fellowship working on live Singapore & UK tech deliverables via Magenta Networks.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'University Work Experience & Global Fellowship — Eduentry.ai',
    description: 'AI-powered career fellowship for university students. 20-min assessment → top 10% selected for 3-month hybrid fellowship with Singapore & UK tech leads.',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
    images: [{ url: `${BASE_URL}/opengraph-image`, width: 1200, height: 630 }],
  },
}

const TRACKS = [
  {
    icon: '⬡',
    title: 'AI & Software Engineering',
    desc: 'Code analysis, async git workflows, system design logic, and API integration problem solving.',
    color: '#A78BFA',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
  },
  {
    icon: '◉',
    title: 'Data Analytics & Engineering',
    desc: 'Python, SQL, data pipeline reasoning, chart interpretation, and statistical decision-making.',
    color: '#60A5FA',
    bg: 'rgba(96,165,250,0.08)',
    border: 'rgba(96,165,250,0.2)',
  },
  {
    icon: '◇',
    title: 'Digital Growth & Marketing',
    desc: 'SEO, AI content workflows, campaign analytics, funnel optimisation, and performance reporting.',
    color: '#34D399',
    bg: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.2)',
  },
  {
    icon: '◈',
    title: 'Business Development & Tech Research',
    desc: 'Market research, client communications, competitive analysis, and technical specification writing.',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
  },
]

const FAQS = [
  {
    q: 'Who is eligible to apply?',
    a: 'Any university student globally — Year 1 through Final Year and Placement Year — is eligible. There are no GPA requirements. The assessment is the only filter: top 10% of scorers are invited to the fellowship.',
  },
  {
    q: 'How much time does the fellowship require?',
    a: '10–15 hours per week across the 3-month programme. 80% is remote execution on live client deliverables (Jira, Slack, GitHub). 20% is weekly mentorship syncs and the Capstone Demo Day with Singapore and UK tech leads.',
  },
  {
    q: 'Is there a cost to apply or participate?',
    a: 'Cohort 1 is 100% free — both the AI assessment and the fellowship itself. Eduentry covers all participation costs. There is no fee at any stage.',
  },
  {
    q: 'What happens after the fellowship?',
    a: 'Fellows receive a verified Eduentry.ai Fellowship Certificate, a detailed skills report, and a Magenta Networks reference. High-performing fellows are prioritised for direct hiring conversations with Magenta Networks UK and Singapore teams.',
  },
  {
    q: 'What is the 48-hour micro-task?',
    a: 'Shortlisted candidates (top 10% of the AI assessment) receive a real Jira/GitHub task matching their chosen track. This is a practical, time-boxed exercise — not a test. It takes approximately 2–4 hours to complete.',
  },
  {
    q: 'When does Cohort 1 start?',
    a: 'Cohort 1 launches January 10, 2027. Applications are open now. Only 10 fellowship places are available for this cohort.',
  },
]

export default function WorkExperiencePage() {
  return (
    <main className="flex-1 bg-black text-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-screen flex flex-col justify-center px-6 pt-24 pb-20">
        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Lavender glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.12] blur-[140px]" style={{ background: '#A78BFA' }} />
        <div className="pointer-events-none absolute right-0 top-0 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[120px]" style={{ background: '#4141DD' }} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-widest mb-10"
            style={{
              border: '1px solid rgba(167,139,250,0.5)',
              background: 'rgba(167,139,250,0.08)',
              color: '#A78BFA',
              boxShadow: '0 0 24px rgba(167,139,250,0.15)',
            }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
            COHORT 1 — LAUNCHING JAN 10, 2027 &nbsp;·&nbsp; 10 EXCLUSIVE FELLOWSHIPS
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
            Bridge Your University Career<br />
            <span style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #4141DD 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              to Global Tech Hubs
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Take the 20-minute AI Internship Readiness Assessment. Top 10% get selected for a
            <strong className="text-white"> 3-Month Hybrid Fellowship</strong> working on live Singapore & UK
            tech deliverables via Magenta Networks.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link
              href="/work-experience/apply"
              className="px-8 py-4 rounded-xl font-semibold text-black text-base transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
                boxShadow: '0 0 32px rgba(167,139,250,0.35)',
              }}
            >
              Take Free AI Assessment (20 Min)
            </Link>
            <a
              href="#cohort"
              className="px-8 py-4 rounded-xl font-semibold text-white text-base border border-white/20 hover:bg-white/[0.06] transition-all"
            >
              View Cohort 1 Structure
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="text-xs text-white/30 uppercase tracking-widest font-mono">Trusted by</span>
            <div className="flex items-center gap-2">
              <Image src="/logos/magenta-networks.png" alt="Magenta Networks" width={28} height={28} className="rounded-sm opacity-90" style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.1))' }} />
              <span className="text-sm text-white/60 font-medium">Magenta Networks</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#A78BFA] text-sm">✦</span>
              <span className="text-sm text-white/60">Claude AI Adaptive Engine</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#60A5FA] text-sm">⬡</span>
              <span className="text-sm text-white/60">Jira & Slack Integration</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#34D399] text-sm">✓</span>
              <span className="text-sm text-white/60">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Tracks ────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">EVALUATION TRACKS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose Your Career Track</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Your assessment is calibrated to your track. Questions test real-world applied thinking, not memorisation.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {TRACKS.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl p-7 backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                style={{ background: t.bg, border: `1px solid ${t.border}` }}
              >
                <div className="text-3xl mb-4" style={{ color: t.color }}>{t.icon}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fellowship Model ─────────────────────────────────────────────── */}
      <section id="cohort" className="px-6 py-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">THE PROGRAMME</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">3-Month Hybrid Fellowship</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Remote-first, globally mentored, outcome-driven.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* 80% card */}
            <div className="rounded-2xl p-8 border border-[#A78BFA]/20 bg-[#A78BFA]/[0.04]">
              <div className="text-5xl font-black text-[#A78BFA] mb-4">80<span className="text-3xl">%</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Remote Execution</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Work on live client deliverables for real Magenta Networks engagements. Managed entirely through Jira, Slack, and GitHub — the same stack used by global tech teams.
              </p>
              <ul className="space-y-2">
                {['Live client projects', 'Jira task management', 'GitHub version control', 'Slack async comms'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1 h-1 rounded-full bg-[#A78BFA]" />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 20% card */}
            <div className="rounded-2xl p-8 border border-[#4141DD]/20 bg-[#4141DD]/[0.04]">
              <div className="text-5xl font-black text-[#818CF8] mb-4">20<span className="text-3xl">%</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Global Mentorship & Syncs</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Weekly code and strategy reviews with Singapore and UK tech leads. Culminates in a Capstone Demo Day where fellows present deliverables to Magenta Networks stakeholders.
              </p>
              <ul className="space-y-2">
                {['Weekly mentor reviews', 'Singapore & UK tech leads', 'Capstone Demo Day', 'Verified fellowship certificate'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                    <span className="w-1 h-1 rounded-full bg-[#818CF8]" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Evaluation Funnel ────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">SELECTION PROCESS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">2-Step Evaluation</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">Rigorous, fast, and fair. Total time investment under 5 hours.</p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden sm:block absolute left-[calc(50%-1px)] top-16 bottom-16 w-px bg-gradient-to-b from-[#A78BFA]/40 to-[#4141DD]/20" />

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative flex sm:flex-row flex-col gap-6">
                <div className="sm:w-1/2 sm:pr-10 sm:text-right">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] mb-2">
                    <span className="w-6 h-6 rounded-full border border-[#A78BFA]/50 flex items-center justify-center text-[10px] font-bold">01</span>
                    STEP ONE
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">20-Minute Adaptive AI Test</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Evaluates hard skills and soft skills using a 2PL Item Response Theory model. Four phases: General Aptitude, Domain Knowledge, Soft Skills (SJT), and Interest Profile.
                  </p>
                  <p className="mt-3 text-xs text-white/40">Free · No sign-in required to start</p>
                </div>
                <div className="hidden sm:flex sm:w-1/2 items-start justify-start sm:pl-10 pt-1">
                  <div className="rounded-xl px-4 py-2 text-xs font-mono border border-[#A78BFA]/20 bg-[#A78BFA]/[0.06] text-[#A78BFA]">
                    Instant AI Employability Report (PDF)
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex sm:flex-row flex-col gap-6">
                <div className="hidden sm:flex sm:w-1/2 items-start justify-end sm:pr-10 pt-1">
                  <div className="rounded-xl px-4 py-2 text-xs font-mono border border-[#4141DD]/30 bg-[#4141DD]/[0.06] text-[#818CF8]">
                    Top 10% invited only
                  </div>
                </div>
                <div className="sm:w-1/2 sm:pl-10">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#818CF8] mb-2">
                    <span className="w-6 h-6 rounded-full border border-[#818CF8]/50 flex items-center justify-center text-[10px] font-bold">02</span>
                    STEP TWO
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">48-Hour Practical Micro-Task</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Real Jira/GitHub task assigned to your track. Shortlisted candidates only. Takes 2–4 hours. Evaluators are Magenta Networks engineers and strategists.
                  </p>
                  <p className="mt-3 text-xs text-white/40">Result → Cohort Selection Eligibility</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/work-experience/apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-black text-base transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)', boxShadow: '0 0 32px rgba(167,139,250,0.3)' }}
            >
              Start Free Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-white">Common Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group border border-white/[0.08] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none select-none text-white font-medium hover:bg-white/[0.03] transition-colors">
                  {faq.q}
                  <span className="text-white/40 group-open:rotate-45 transition-transform duration-200 text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/[0.05] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] px-6 py-10 bg-black">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-tight">EDUENTRY.AI</span>
            <span className="text-white/20">×</span>
            <Image src="/logos/magenta-networks.png" alt="Magenta Networks" width={22} height={22} className="rounded-sm opacity-70" />
            <span className="text-sm text-white/40">Magenta Networks</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link href="/about" className="hover:text-white/70 transition-colors">About</Link>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <a href="https://magentanetworks.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Magenta Networks</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
