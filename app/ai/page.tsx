import type { Metadata } from 'next'
import Link from 'next/link'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, INTERNSHIP_TRACK_DESCRIPTIONS } from '@/types'
import { BLOG_POSTS } from '@/app/blog/posts'

const BASE_URL = 'https://eduentry.ai'

export const metadata: Metadata = {
  title: 'Get Placed in a Real Internship — Free Readiness Assessment',
  description:
    'Free AI-powered internship readiness assessment for high school students aged 14+. 34 questions, 35 minutes. Tech, Business, Data Analytics, and Digital Marketing tracks.',
  alternates: { canonical: BASE_URL },
  openGraph: { url: BASE_URL, title: 'Get Placed in a Real Internship — Eduentry.ai' },
}

const TRACK_ICONS: Record<string, string> = {
  tech: '💻',
  business: '📈',
  data_analytics: '📊',
  digital_marketing: '📣',
}

const PHASES = [
  { label: 'General Aptitude',  qs: 10, desc: 'Verbal & numerical reasoning',        icon: '🧠' },
  { label: 'Domain Knowledge',  qs: 10, desc: 'Track-specific applied knowledge',     icon: '📚' },
  { label: 'Workplace Skills',  qs: 8,  desc: 'Real workplace scenarios (SJT)',       icon: '🤝' },
  { label: 'Interest Profile',  qs: 6,  desc: 'Work style & preference mapping',      icon: '🎯' },
]

const FAQS = [
  { q: 'Is the assessment free?',              a: 'Yes — always free for students. There are no hidden fees, subscriptions, or paid tiers.' },
  { q: 'Who is it for?',                       a: 'High school students aged 14–18 (Year 9 to Sixth Form) who want to gain professional experience.' },
  { q: 'How long does it take?',               a: 'Around 35 minutes across 34 questions in four phases. The assessment is fully resumable — you can stop and continue later.' },
  { q: 'What track should I choose?',          a: 'You rank up to three track preferences when you apply. The Interest Profile phase also helps identify where you fit best — your report reflects this.' },
  { q: 'How do schools and employers start?',  a: 'Contact us at partnerships@eduentry.ai. We handle assessment, shortlisting, and reporting for your cohort.' },
]

const INTERNSHIP_TAGS = ['Internship', 'Career Development', 'Work Experience']
const internshipPosts = BLOG_POSTS
  .filter(p => p.tags.some(t => INTERNSHIP_TAGS.includes(t)))
  .slice(0, 3)

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Internship Readiness Assessment',
  url: BASE_URL,
  description: 'Free AI-powered 34-question adaptive assessment for high school students aged 14+.',
  provider: { '@type': 'Organization', name: 'Eduentry', url: BASE_URL },
  audience: { '@type': 'EducationalAudience', audienceType: 'High school students aged 14 and above' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
}

export default function AIHomePage() {
  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-[0.1em] uppercase">
            AI-Powered · Free · 35 Minutes
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold text-[#1d1d1f] tracking-tight mb-6 leading-tight">
            Get placed in a<br />real internship.
          </h1>
          <p className="text-xl text-[#6e6e73] max-w-xl mx-auto mb-10 leading-relaxed">
            A 34-question adaptive assessment designed for high school students aged 14+. Discover your readiness across four professional tracks and receive a personalised AI report.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/apply"
              className="bg-[#4F46E5] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Apply free →
            </Link>
            <Link
              href="/#organisations"
              className="text-[#1d1d1f] font-semibold text-base hover:opacity-60 transition-opacity"
            >
              Partner with us
            </Link>
          </div>
          <p className="text-xs text-[#86868b] mt-6">Free for students · No card required · Results in 35 min</p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────────────────────────────── */}
      <section id="tracks" className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Available tracks</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16 leading-tight">
            Four paths.<br />One assessment.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {INTERNSHIP_TRACKS.map((track) => (
              <div key={track} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-4xl mb-4">{TRACK_ICONS[track]}</div>
                <h3 className="font-bold text-[#1d1d1f] text-xl mb-2">{INTERNSHIP_TRACK_LABELS[track]}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{INTERNSHIP_TRACK_DESCRIPTIONS[track]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Process</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Four steps to placement.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Register',          desc: 'Create your free account in under a minute.' },
              { n: '02', title: 'Apply',             desc: 'Tell us about yourself, your school, and your track preferences.' },
              { n: '03', title: 'Take the assessment', desc: '34 adaptive questions across four phases. Resume any time.' },
              { n: '04', title: 'Get your report',   desc: 'Receive an AI-written readiness report and placement match.' },
            ].map(({ n, title, desc }) => (
              <div key={n}>
                <div className="text-4xl font-bold text-[#d2d2d7] mb-4">{n}</div>
                <div className="font-bold text-[#1d1d1f] mb-2">{title}</div>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment breakdown ──────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Assessment</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            What to expect.
          </h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div key={phase.label} className={`flex items-center gap-6 p-7 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-2xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-[#1d1d1f]">{phase.label}</div>
                  <div className="text-sm text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-[#4F46E5]">{phase.qs}</div>
                  <div className="text-xs text-[#6e6e73]">questions</div>
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-7 py-4">
              <span className="text-xs text-[#6e6e73]">Total: 34 questions · ~35 minutes · Fully resumable across sessions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Results</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            What you get.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f5f7] rounded-3xl p-8">
              <div className="text-xs font-semibold text-[#4F46E5] tracking-wider uppercase mb-6">For students</div>
              <ul className="space-y-4">
                {[
                  'Readiness tier — Internship Ready, Developing, or Needs Support',
                  'AI-written personalised summary paragraph',
                  'Per-phase insight cards with strengths and growth areas',
                  'Track fit profile showing where you score strongest',
                  'Shareable report link for applications and personal statements',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#1d1d1f] leading-relaxed">
                    <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1d1d1f] rounded-3xl p-8 text-white">
              <div className="text-xs font-semibold text-[#86868b] tracking-wider uppercase mb-6">For schools &amp; employers</div>
              <ul className="space-y-4">
                {[
                  'Full numeric scores across all four assessment phases',
                  'Track fit percentage for each internship track',
                  'Candidate shortlist sorted by overall readiness score',
                  'CV download and full application profile per candidate',
                  'Cohort management — assign tracks, manage groups',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#f5f5f7] leading-relaxed">
                    <svg className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Evidence</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
            Why early experience matters.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: '5×', desc: 'less likely to be NEET at 19 for students with 4+ employer encounters before age 16', source: 'Education and Employers, 2018' },
              { stat: '83%', desc: 'of employers say internship experience is important when hiring new graduates', source: 'NACE, 2023' },
              { stat: '70%', desc: 'higher job offer rate before graduation for students with internship experience', source: 'NACE, 2020' },
            ].map(({ stat, desc, source }) => (
              <div key={stat} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#4F46E5] mb-3">{stat}</div>
                <p className="text-sm text-[#1d1d1f] leading-snug mb-2">{desc}</p>
                <p className="text-xs text-[#6e6e73]">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog preview ─────────────────────────────────────────────────── */}
      {internshipPosts.length > 0 && (
        <section className="py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs font-medium tracking-[0.15em] text-[#6e6e73] uppercase mb-5">Research</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">
              Latest from the blog.
            </h2>
            <div className="space-y-5">
              {internshipPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-[#d2d2d7] rounded-2xl p-7 hover:border-[#4F46E5]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 text-xs text-[#6e6e73] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-2 leading-snug">{post.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{post.description}</p>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/blog" className="text-sm font-semibold text-[#4F46E5] hover:underline">
                View all internship articles →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── For organisations ────────────────────────────────────────────── */}
      <section id="organisations" className="py-32 bg-[#1d1d1f]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.15em] text-[#86868b] uppercase mb-5">For schools &amp; employers</p>
            <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              Bring your students.<br />We handle the rest.
            </h2>
            <p className="text-lg text-[#86868b] leading-relaxed mb-10">
              We assess your cohort, shortlist candidates by track and readiness, and give you a full scoring dashboard. No setup fee. No per-student charge. Contact us to get started.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:partnerships@eduentry.ai"
                className="bg-white text-[#1d1d1f] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#f5f5f7] transition-colors"
              >
                Contact us →
              </a>
              <Link
                href="/apply"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-white/40 transition-colors"
              >
                Student? Apply free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-32 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-16">Questions.</h2>
          <div className="space-y-px">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group bg-white first:rounded-t-3xl last:rounded-b-3xl border-b border-[#f5f5f7] last:border-0">
                <summary className="flex items-center justify-between gap-6 px-8 py-6 cursor-pointer list-none font-semibold text-[#1d1d1f]">
                  {q}
                  <svg className="w-5 h-5 text-[#6e6e73] flex-shrink-0 rotate-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-8 pb-6 text-sm text-[#6e6e73] leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-bold text-[#1d1d1f] tracking-tight mb-6">
            Apply now.<br />It&apos;s free.
          </h2>
          <p className="text-lg text-[#6e6e73] mb-10">
            34 questions. 35 minutes. A personalised AI report and your first step toward a real internship.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#4338CA] transition-colors"
          >
            Start your application →
          </Link>
        </div>
      </section>
    </main>
  )
}
