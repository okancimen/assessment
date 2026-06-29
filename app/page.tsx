import type { Metadata } from 'next'
import Link from 'next/link'
import { SUBJECT_LABELS, SUBJECT_DESCRIPTIONS, SUBJECTS } from '@/types'
import BellCurve from '@/components/landing/BellCurve'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import { BLOG_POSTS } from '@/app/blog/posts'
import CtaLink from '@/components/ui/CtaLink'

export const metadata: Metadata = {
  title: 'Eduentry — Academic Assessment & Internship Readiness Platform',
  description:
    'Free adaptive assessments for students at every stage — international academic benchmarking for ages 6–17, and internship readiness assessment for high school students 14+.',
  alternates: { canonical: 'https://eduentry.com', languages: { 'en-GB': 'https://eduentry.com', 'x-default': 'https://eduentry.com' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    url: 'https://eduentry.com',
    title: 'Eduentry — Academic Assessment & Internship Readiness Platform',
    description:
      'Free adaptive assessments built on the same science as PISA, GCSE and SAT. Academic benchmarking for ages 6–17 and internship readiness for high school students 14+.',
  },
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Eduentry free to use?', acceptedAnswer: { '@type': 'Answer', text: "Yes, Eduentry is completely free. There are no subscriptions, hidden fees, or premium tiers." } },
    { '@type': 'Question', name: 'What subjects does the assessment cover?', acceptedAnswer: { '@type': 'Answer', text: "English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning. Each subject has 15 adaptive questions." } },
    { '@type': 'Question', name: 'What is a percentile ranking?', acceptedAnswer: { '@type': 'Answer', text: "A percentile ranking shows how your child compares to all other children of the same age." } },
    { '@type': 'Question', name: 'How long does the assessment take?', acceptedAnswer: { '@type': 'Answer', text: "The full assessment is 60 questions across 4 subjects. Most children complete it in 60–90 minutes." } },
  ],
}

const SOFTWARE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  description: 'Free AI-powered adaptive assessments for students aged 6 and above.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free — no subscription required' },
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eduentry.com/#website',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  publisher: { '@id': 'https://eduentry.com/#organization' },
  potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: 'https://eduentry.com/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://eduentry.com/#organization',
  name: 'Eduentry',
  url: 'https://eduentry.com',
  logo: { '@type': 'ImageObject', url: 'https://eduentry.com/logo.png', width: 200, height: 60 },
  foundingDate: '2026',
  sameAs: [],
  contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: 'support@eduentry.com' },
}

const subjectColors: Record<string, { border: string; accent: string; bg: string }> = {
  english:            { border: '#c7d2fe', accent: '#4F46E5', bg: '#eef2ff' },
  mathematics:        { border: '#99f6e4', accent: '#0D9488', bg: '#f0fdfa' },
  verbal_reasoning:   { border: '#ddd6fe', accent: '#7C3AED', bg: '#f5f3ff' },
  nonverbal_reasoning:{ border: '#fbcfe8', accent: '#DB2777', bg: '#fce7f3' },
}

const subjectSlugs: Record<string, string> = {
  english: 'english',
  mathematics: 'maths',
  verbal_reasoning: 'verbal-reasoning',
  nonverbal_reasoning: 'non-verbal-reasoning',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <PublicNav />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          <p className="text-xs font-semibold text-[#86868b] uppercase tracking-widest mb-5">
            Assessments for every stage of learning
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl mx-auto">
            The right assessment,
            <br />
            <span className="text-[#4F46E5]">at the right stage.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#86868b] max-w-2xl mx-auto mb-14 leading-relaxed">
            Free adaptive assessments built on the same psychometric science as PISA, GCSE and SAT.
            Choose the assessment that fits where your student is today.
          </p>

          {/* Two product cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">

            {/* Academic card */}
            <div className="bg-[#2d2d2f] rounded-3xl border border-[#424245] p-8 flex flex-col">
              <p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider mb-5">
                Academic Assessment
              </p>
              <h2 className="text-2xl font-bold text-white mb-3 leading-snug">
                How does your child compare globally?
              </h2>
              <p className="text-[#86868b] text-sm leading-relaxed mb-6 flex-1">
                Benchmarked against UK, US, PISA and IB standards — standardised scores and percentile
                rankings across English, Maths, Verbal and Non-Verbal Reasoning.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#6e6e73] mb-7">
                <span>60 adaptive questions</span>
                <span>·</span>
                <span>4 subjects</span>
                <span>·</span>
                <span>Ages 6–17</span>
                <span>·</span>
                <span>Free</span>
              </div>
              <CtaLink
                href="/auth/register"
                label="hero_academic"
                className="bg-[#4F46E5] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors text-center"
              >
                Start free assessment
              </CtaLink>
            </div>

            {/* Internship card */}
            <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-wider">
                  Internship Assessment
                </p>
                <span className="text-[10px] bg-[#4F46E5] text-white font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  New
                </span>
              </div>
              <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-snug">
                Is your student ready for the workplace?
              </h2>
              <p className="text-[#6e6e73] text-sm leading-relaxed mb-6 flex-1">
                A 34-question adaptive assessment across aptitude, domain knowledge, workplace skills,
                and interest profile. Personalised readiness report and AI career insights. For students aged 14+.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#6e6e73] mb-7">
                <span>34 adaptive questions</span>
                <span>·</span>
                <span>4 career tracks</span>
                <span>·</span>
                <span>Ages 14+</span>
                <span>·</span>
                <span>Free</span>
              </div>
              <Link
                href="/internship"
                className="bg-[#1d1d1f] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors text-center"
              >
                Learn about the programme →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust strip ───────────────────────────────────────────────────── */}
      <section className="border-b border-[#d2d2d7] bg-[#f5f5f7] py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-2.5 text-xs text-[#6e6e73]">
          {[
            { icon: '🌍', text: 'Benchmarked against UK, US, PISA & IB' },
            { icon: '🏛️', text: 'IRT methodology used in PISA, GCSE & SAT' },
            { icon: '🤖', text: 'Questions generated by Claude AI' },
            { icon: '🔒', text: 'GDPR-compliant · Data never sold' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Academic section header + sample result ───────────────────── */}
      <section id="academic" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

            {/* Text */}
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">Academic Assessment · Ages 6–17</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
                See where your child<br />stands internationally.
              </h2>
              <p className="text-[#6e6e73] text-lg leading-relaxed mb-8 max-w-lg">
                A free adaptive benchmark measuring English, Maths, Verbal and Non-Verbal Reasoning
                against UK, US, PISA and IB standards. Results include a standardised score,
                percentile ranking, and AI-generated recommendations.
              </p>
              <div className="flex flex-wrap gap-4">
                <CtaLink
                  href="/auth/register"
                  label="academic_section_cta"
                  className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
                >
                  Start free assessment
                </CtaLink>
                <Link href="/methodology" className="text-sm font-semibold text-[#4F46E5] hover:underline flex items-center gap-1.5 px-2">
                  How scoring works →
                </Link>
              </div>
            </div>

            {/* Sample result visual */}
            <div className="flex-shrink-0 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-[300px_1fr] lg:grid-cols-1 xl:grid-cols-[300px_1fr] gap-4">
              {/* Score card */}
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] p-6 w-full lg:w-[300px]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-wider">Sample result</p>
                    <p className="font-bold text-white mt-1">Emma · Age 11</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#4F46E5]">109</div>
                    <div className="text-[11px] text-[#0D9488] font-semibold">Above Average</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'English',              score: 103, color: '#4F46E5', pct: 58 },
                    { label: 'Mathematics',          score: 119, color: '#0D9488', pct: 90 },
                    { label: 'Verbal Reasoning',     score: 113, color: '#7C3AED', pct: 79 },
                    { label: 'Non-Verbal Reasoning', score:  91, color: '#DB2777', pct: 27 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs text-[#86868b] mb-1">
                        <span>{s.label}</span>
                        <span className="font-semibold text-white">{s.score}</span>
                      </div>
                      <div className="h-1.5 bg-[#424245] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-[#424245] flex items-center gap-2">
                  <span className="text-[10px] text-[#6e6e73]">Powered by</span>
                  <span className="text-[10px] font-semibold text-[#86868b]">Claude AI · Anthropic</span>
                </div>
              </div>

              {/* Bell curve */}
              <div className="bg-[#1d1d1f] rounded-3xl border border-[#424245] overflow-hidden w-full lg:w-[300px] xl:w-auto min-h-[200px]">
                <BellCurve hideScores />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Subjects ──────────────────────────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Four subjects. One global picture.
            </h2>
            <p className="text-[#6e6e73] max-w-xl mx-auto text-lg">
              The four domains tested by PISA, TIMSS, and the UK and US national curricula —
              each adapting in difficulty to pinpoint your child&apos;s exact level.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SUBJECTS.map((subject) => {
              const c = subjectColors[subject]
              return (
                <Link
                  key={subject}
                  href={`/subjects/${subjectSlugs[subject]}`}
                  className="rounded-3xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: c.bg, borderColor: c.border }}
                >
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: c.accent + '22' }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={c.accent} strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1d1d1f] mb-2">{SUBJECT_LABELS[subject]}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{SUBJECT_DESCRIPTIONS[subject]}</p>
                  <span className="text-xs font-semibold mt-4 block" style={{ color: c.accent }}>Learn more →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Methodology ───────────────────────────────────────────────────── */}
      <section id="methodology" className="bg-[#f5f5f7] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">The science behind the score</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              Built on the same science as
              <br />international assessments.
            </h2>
            <p className="text-[#6e6e73] max-w-2xl mx-auto text-lg">
              Eduentry uses the same psychometric models that power PISA, GCSE and SAT —
              so your child&apos;s results are directly comparable to international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: '2-Parameter IRT Model',
                desc: 'Each question has a calibrated difficulty and discrimination value. Scores reflect the difficulty of questions answered correctly — not just the raw count.',
                tag: 'Used in PISA · SAT · GCSE',
                color: '#4F46E5',
              },
              {
                title: 'Real-time Adaptive Algorithm',
                desc: 'Questions are selected using Fisher Information to maximise measurement precision. Each answer updates the ability estimate and selects the optimal next question.',
                tag: 'Computerised Adaptive Testing',
                color: '#0D9488',
              },
              {
                title: 'International Benchmarking',
                desc: "Scores use the same mean-100, SD-15 scale as PISA. Results are mapped to UK National Curriculum, US grade expectations, PISA proficiency tiers, and IB readiness.",
                tag: 'UK · US · PISA · IB',
                color: '#7C3AED',
              },
            ].map(({ title, desc, tag, color }) => (
              <div key={title} className="bg-white rounded-3xl border border-[#d2d2d7] p-7">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5" style={{ background: color + '18' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1d1d1f] mb-3">{title}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed mb-5">{desc}</p>
                <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full" style={{ color, background: color + '18' }}>
                  {tag}
                </span>
              </div>
            ))}
          </div>

          {/* Score guide */}
          <div className="mt-6 bg-white rounded-3xl border border-[#d2d2d7] p-7">
            <h3 className="font-bold text-[#1d1d1f] mb-6 text-center text-lg">What the score means</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { range: '70–84',   label: 'Needs Support',  color: '#EF4444', bg: '#fef2f2' },
                { range: '85–94',   label: 'Below Average',  color: '#F97316', bg: '#fff7ed' },
                { range: '95–109',  label: 'Average',        color: '#EAB308', bg: '#fefce8' },
                { range: '110–119', label: 'Above Average',  color: '#22C55E', bg: '#f0fdf4' },
                { range: '120–130', label: 'Exceptional',    color: '#3B82F6', bg: '#eff6ff' },
              ].map(({ range, label, color, bg }) => (
                <div key={range} className="rounded-2xl p-3 text-center" style={{ background: bg }}>
                  <div className="text-sm font-bold" style={{ color }}>{range}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#6e6e73] text-center mt-4">
              68% of children score between 85–115 (within 1 standard deviation of the mean)
            </p>
          </div>
        </div>
      </section>

      {/* ── Technology strip ─────────────────────────────────────────────── */}
      <section className="py-16 border-b border-[#d2d2d7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-[11px] font-semibold text-[#6e6e73] uppercase tracking-widest mb-10">Powered by</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {[
              { label: 'Claude AI', sub: 'by Anthropic', icon: (
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M12 2L2 19.5h20L12 2z" fill="#D97706" />
                </svg>
              )},
              { label: '2PL IRT', sub: 'Psychometric model', icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#4F46E5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )},
              { label: 'MAP Estimation', sub: 'Bayesian scoring', icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="#0D9488" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )},
              { label: 'Supabase', sub: 'Secure storage', icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#22C55E">
                  <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.09 12.888.917 14.05 1.932 13.8l9.94-2.483a.972.972 0 00.734-.94L11.9 1.036zM12.1 22.964c.015.986 1.26 1.41 1.874.637l9.262-11.651c.673-.838-.154-2-.169-1.75l-9.94 2.483a.972.972 0 00-.734.94L12.1 22.964z" />
                </svg>
              )},
            ].map(({ label, sub, icon }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl border border-[#d2d2d7] flex items-center justify-center">
                  {icon}
                </div>
                <div className="text-sm font-semibold text-[#1d1d1f]">{label}</div>
                <div className="text-xs text-[#6e6e73]">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-4">Academic Assessment · Simple to start</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">
              From signup to results
              <br />in under two hours.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Create a free account',
                desc: "Register as a parent and add your child's name and date of birth. The assessment automatically adapts to their exact age.",
              },
              {
                step: '02',
                title: 'Your child takes 4 adaptive tests',
                desc: '60 questions across four subjects, taken at home at their own pace. Each question adapts — harder for correct answers, easier for wrong ones.',
              },
              {
                step: '03',
                title: 'See the global context',
                desc: 'Standardised scores, international benchmarks across UK, US, PISA and IB frameworks, AI-generated recommendations, and a printable report.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#f5f5f7] rounded-3xl p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaLink
              href="/auth/register"
              label="how_it_works_cta"
              className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Start free assessment →
            </CtaLink>
          </div>
        </div>
      </section>

      {/* ── Internship section ───────────────────────────────────────────── */}
      <section id="internship" className="bg-[#f5f5f7] py-24">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-[#4F46E5] uppercase tracking-widest bg-[#eef2ff] border border-[#c7d2fe] px-3 py-1.5 rounded-full mb-5">
              Internship Assessment · New
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
              Find your internship readiness.
            </h2>
            <p className="text-[#6e6e73] text-lg max-w-2xl mx-auto leading-relaxed">
              A 34-question adaptive assessment for high school students aged 14+. Discover your aptitude,
              domain strengths, workplace skills, and ideal career track — with a personalised AI report.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Create a free student account',
                desc: 'Register yourself or accept a parent invite. Fill in your school, year group, career track preferences, and a short personal statement about your goals.',
              },
              {
                step: '02',
                title: 'Complete 4 assessment phases',
                desc: 'General aptitude, domain knowledge, workplace skills (SJT), and interest profile — 34 adaptive questions in total. Fully resumable, takes around 35 minutes.',
              },
              {
                step: '03',
                title: 'Receive your readiness report',
                desc: 'Get your internship-ready tier, an AI-generated summary of your strengths, and personalised phase insights across aptitude, domain, and workplace skills.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
                <div className="text-5xl font-bold text-[#d2d2d7] leading-none mb-5 select-none">{step}</div>
                <h3 className="font-bold text-[#1d1d1f] text-lg mb-3">{title}</h3>
                <p className="text-[#6e6e73] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Track pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { label: 'Technology', color: '#4F46E5' },
              { label: 'Business', color: '#0D9488' },
              { label: 'Data Analytics', color: '#7C3AED' },
              { label: 'Digital Marketing', color: '#DB2777' },
            ].map(({ label, color }) => (
              <span
                key={label}
                className="text-xs font-semibold px-4 py-2 rounded-full border"
                style={{ color, background: color + '12', borderColor: color + '33' }}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/internship"
              className="inline-block bg-[#4F46E5] text-white px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Learn about the programme →
            </Link>
          </div>

        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '2',     label: 'Assessment types' },
            { value: '60+',   label: 'Adaptive questions' },
            { value: '4',     label: 'International frameworks' },
            { value: '6+',    label: 'Starting age' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-5xl font-bold text-white mb-2">{value}</div>
              <div className="text-sm text-[#86868b]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f5f5f7]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">Frequently asked questions</h2>
          </div>
          <div className="space-y-2">
            {[
              { q: 'Is Eduentry free to use?', a: "Yes, Eduentry is completely free. There are no subscriptions, hidden fees, or premium tiers. Create a free account, add your child's profile, and start the assessment at no cost." },
              { q: 'What subjects does the academic assessment cover?', a: "English (reading comprehension, grammar, vocabulary), Mathematics (arithmetic, algebra, geometry, problem-solving), Verbal Reasoning (analogies, classifications, sequences), and Non-Verbal Reasoning (patterns, spatial reasoning, matrices). Each subject has 15 adaptive questions." },
              { q: 'What is a percentile ranking?', a: "A percentile ranking shows how your child compares to all other children of the same age. A score in the 80th percentile means your child performed better than 80% of children at that age level. Eduentry uses a standardised scale with mean 100 and standard deviation 15." },
              { q: 'How does the score compare internationally?', a: "Every score is mapped against four frameworks: UK National Curriculum (including 11+ and GCSE readiness), US grade-level expectations, PISA proficiency levels, and IB programme readiness." },
              { q: 'How is this different from a school test?', a: "School tests give every child the same questions and grade against a local cohort. Eduentry adapts in real time and benchmarks results against international standards." },
              { q: 'How is Eduentry different from CAT4 or GL Assessment?', a: "CAT4 and GL Assessment are professionally normed tests administered in schools. Eduentry uses the same IRT methodology and scoring scale, but questions are AI-generated. Eduentry is free and available to any family instantly." },
              { q: 'What is the internship assessment?', a: "The internship assessment is a separate 34-question adaptive assessment for high school students aged 14 and above. It evaluates general aptitude, domain knowledge, workplace skills, and interest profile across four career tracks: Technology, Business, Data Analytics, and Digital Marketing. Results are a personalised readiness report with AI-generated insights." },
              { q: 'How does the adaptive technology work?', a: "Eduentry uses 2-Parameter Logistic (2PL) Item Response Theory with MAP estimation. After each answer, the system updates its estimate of the student's ability and selects the next question to maximise measurement precision." },
              { q: 'What score is considered good?', a: "Below 85 is Needs Support, 85–94 is Below Average, 95–109 is Average, 110–119 is Above Average, and 120+ is Exceptional. A score of 100 is exactly average. For 11+ grammar school entry, competitive scores are typically 115 and above." },
              { q: 'Can I use Eduentry to prepare for the 11+ exam?', a: "Yes. The four subjects — English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning — directly mirror the 11+ exam structure used by grammar schools in England." },
              { q: 'How long does the assessment take?', a: "The academic assessment is 60 questions across 4 subjects — most children complete it in 60–90 minutes. The internship assessment is 34 questions — most students complete it in around 35 minutes. Progress is automatically saved so both can be paused and resumed." },
              { q: "Is my child's data private?", a: "Yes. Data is stored securely via Supabase with row-level security — only you can see your child's results. We do not sell or share data with third parties." },
              { q: 'Can I add more than one child?', a: "Yes. A single parent account supports multiple child profiles. Each child has their own assessment history, scores, and personalised recommendations." },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-white border border-[#d2d2d7] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-[#1d1d1f] text-sm select-none list-none">
                  {q}
                  <svg className="w-4 h-4 text-[#6e6e73] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-[#6e6e73] leading-relaxed border-t border-[#f5f5f7] pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
          <p className="text-center text-xs text-[#6e6e73] mt-8">
            Want to understand the scoring methodology?{' '}
            <Link href="/methodology" className="text-[#4F46E5] hover:underline font-medium">
              Read how Eduentry works →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Blog ─────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">Latest from the blog</h2>
            <Link href="/blog" className="text-xs font-semibold text-[#4F46E5] hover:underline">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-[#d2d2d7] rounded-3xl p-6 hover:border-[#4F46E5] hover:shadow-sm transition-all flex flex-col bg-white"
              >
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#4F46E5] bg-[#eef2ff] rounded-full px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#1d1d1f] text-sm leading-snug mb-3 group-hover:text-[#4F46E5] transition-colors flex-1">
                  {post.shortTitle}
                </h3>
                <div className="text-xs text-[#6e6e73]">{post.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#1d1d1f] py-28 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center bg-[#2d2d2f] rounded-3xl border border-[#424245] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#86868b] font-semibold uppercase tracking-widest mb-4">Academic Assessment</p>
            <h2 className="text-2xl font-bold text-white mb-3">Discover where your child stands — globally.</h2>
            <p className="text-[#86868b] text-sm mb-8">Full international context in under 2 hours.</p>
            <CtaLink
              href="/auth/register"
              label="bottom_cta_academic"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] transition-colors"
            >
              Start free assessment →
            </CtaLink>
          </div>
          <div className="text-center bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-10 flex flex-col items-center">
            <p className="text-[10px] text-[#4F46E5] font-semibold uppercase tracking-widest mb-4">Internship Assessment</p>
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Find your student&apos;s internship readiness.</h2>
            <p className="text-[#6e6e73] text-sm mb-8">Personalised report and AI insights in 35 minutes.</p>
            <Link
              href="/internship"
              className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#2d2d2f] transition-colors"
            >
              Learn about the programme →
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
