import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/insights`

export const metadata: Metadata = {
  title: { absolute: 'Insights — Internship & Fellowship Research | Eduentry.ai' },
  description:
    'Research, data, and practical guides on internship readiness for high school students and university fellowship applicants.',
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Insights — Internship & Fellowship Research | Eduentry.ai',
    description: 'Evidence-based guides and research on internship readiness and work experience for students.',
    url: PAGE_URL,
    siteName: 'Eduentry.ai',
  },
}

const HIGH_SCHOOL_POSTS = [
  {
    slug: 'high-school-internship-benefits-university',
    title: 'Why High School Internships Matter: Personality, Readiness, and University Acceptance',
    desc: 'How early internship experience shapes university outcomes — from admissions to first-year performance.',
  },
  {
    slug: 'how-to-get-tech-internship-before-university',
    title: 'How to Get a Tech Internship Before University',
    desc: 'Step-by-step guide for students who want real tech experience — including what selectors actually look for.',
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: 'Business Work Experience at High School in the UK',
    desc: 'Everything UK students need to know about finding and getting the most out of a business placement.',
  },
  {
    slug: 'digital-marketing-work-experience-student-reviews',
    title: 'Digital Marketing Work Experience: Student Reviews',
    desc: 'Real student accounts of digital marketing placements — what the work actually looked like.',
  },
  {
    slug: 'how-to-get-internship-no-experience-high-school',
    title: 'How to Get an Internship with No Experience in High School',
    desc: 'What to say, where to look, and how to stand out when you have no prior experience.',
  },
  {
    slug: 'how-to-differentiate-yourself-at-15',
    title: 'Grades Are No Longer Enough: How Students Differentiate Themselves at 15',
    desc: 'A data-backed look at what separates students who build early career advantage from those who wait.',
  },
]

const FELLOWSHIP_POSTS = [
  {
    slug: 'oecd-teenage-work-experience-career-outcomes',
    title: 'OECD Research: The Hidden Power of Teenage Work Experience on Career Outcomes',
    desc: 'What decades of OECD data say about long-term earnings for students who gained structured work experience before 20.',
  },
  {
    slug: 'pisa-2025-work-experience-student-readiness',
    title: "PISA 2025: Why Work Experience Is the Missing Answer",
    desc: 'Global academic performance is declining. The data points to a structural gap classroom learning cannot close.',
  },
  {
    slug: 'how-to-find-internship-as-student',
    title: 'How to Find an Internship as a Student: The Complete Guide',
    desc: 'Practical playbook covering applications, outreach, and the signals that separate candidates who land placements.',
  },
  {
    slug: 'oecd-teenage-part-time-work-benefits',
    title: 'Part-Time Jobs for Teenagers: The OECD-Backed Benefits',
    desc: 'What the research says about structured early work experience and how to maximise its impact on your career.',
  },
]

const BLOG_POSTS = [
  { slug: 'early-internship-child-development-career',     title: 'Why Internships at Early Ages Matter',                          tag: 'Research' },
  { slug: 'business-work-experience-year-12',              title: 'Business Work Experience in Year 12: UK Guide',                 tag: 'Guide'    },
  { slug: 'how-to-start-business-at-16',                   title: 'How to Start Business Life at 16',                             tag: 'Strategy' },
  { slug: 'summer-activities-ambitious-children',          title: 'Summer Activities for Academically Ambitious Children',        tag: 'Guide'    },
  { slug: 'habits-to-avoid-future-unemployment',           title: '8 Habits Students Should Build Now to Avoid Future Unemployment', tag: 'Research' },
  { slug: 'high-school-internship-benefits-university',    title: 'Why High School Internships Matter',                           tag: 'Research' },
  { slug: 'how-to-get-tech-internship-before-university',  title: 'How to Get a Tech Internship Before University',               tag: 'Guide'    },
  { slug: 'business-work-experience-high-school-uk',       title: 'Business Work Experience at High School in the UK',            tag: 'Guide'    },
  { slug: 'digital-marketing-work-experience-student-reviews', title: 'Digital Marketing Work Experience: Student Reviews',       tag: 'Experience'},
  { slug: 'how-to-get-internship-no-experience-high-school', title: 'How to Get an Internship with No Experience',                tag: 'Guide'    },
  { slug: 'how-to-differentiate-yourself-at-15',          title: 'How Students Differentiate Themselves at 15',                  tag: 'Strategy' },
  { slug: 'oecd-teenage-work-experience-career-outcomes',  title: 'OECD Research: Hidden Power of Teenage Work Experience',       tag: 'Research' },
  { slug: 'pisa-2025-work-experience-student-readiness',   title: 'PISA 2025: Why Work Experience Is the Missing Answer',         tag: 'Research' },
  { slug: 'how-to-find-internship-as-student',             title: 'How to Find an Internship as a Student',                      tag: 'Guide'    },
  { slug: 'oecd-teenage-part-time-work-benefits',          title: 'Part-Time Jobs for Teenagers: OECD-Backed Benefits',          tag: 'Research' },
]

const TAG_COLORS: Record<string, string> = {
  Research:   '#A78BFA',
  Guide:      '#60A5FA',
  Strategy:   '#34D399',
  Experience: '#F59E0B',
}

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-[140px]" style={{ background: '#A78BFA' }} />

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 text-center relative">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-4">INSIGHTS</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Research & Guides
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            Evidence-based research and practical guides for high school internship applicants and university fellowship candidates.
          </p>
        </div>
      </section>

      {/* ── Section 1: High School Internship ────────────────────────────── */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#60A5FA] mb-2">SECTION 1</p>
              <h2 className="text-2xl font-bold text-white">High School Internship</h2>
              <p className="mt-2 text-sm text-gray-400 max-w-lg">Guides and research for students aged 14–18 looking to gain real work experience.</p>
            </div>
            <Link href="/apply" className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/[0.06] transition-colors whitespace-nowrap">
              Apply for Internship →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIGH_SCHOOL_POSTS.map((post) => (
              <a
                key={post.slug}
                href={`https://eduentry.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#60A5FA]/30 transition-all"
              >
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#60A5FA] group-hover:underline">Read →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: University Fellowship ─────────────────────────────── */}
      <section className="px-6 py-16 border-t border-white/[0.04] bg-[#050505]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-2">SECTION 2</p>
              <h2 className="text-2xl font-bold text-white">University Fellowship</h2>
              <p className="mt-2 text-sm text-gray-400 max-w-lg">Research and strategy for university students applying for the 3-month Magenta Networks fellowship.</p>
            </div>
            <Link href="/work-experience" className="shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold border border-[#A78BFA]/30 text-[#A78BFA] hover:bg-[#A78BFA]/10 transition-colors whitespace-nowrap">
              View Fellowship →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {FELLOWSHIP_POSTS.map((post) => (
              <a
                key={post.slug}
                href={`https://eduentry.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#A78BFA]/30 transition-all"
              >
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
                </div>
                <p className="mt-4 text-xs font-medium text-[#A78BFA] group-hover:underline">Read →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: From the Blog ─────────────────────────────────────── */}
      <section className="px-6 py-16 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono tracking-widest text-white/30 mb-2">SECTION 3</p>
            <h2 className="text-2xl font-bold text-white">From the Blog</h2>
            <p className="mt-2 text-sm text-gray-400">All internship and career development articles on Eduentry.com.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_POSTS.map((post) => {
              const color = TAG_COLORS[post.tag] ?? '#fff'
              return (
                <a
                  key={post.slug}
                  href={`https://eduentry.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl p-5 border border-white/[0.06] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all"
                >
                  <div>
                    <span
                      className="inline-block text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full mb-3 border"
                      style={{ color, borderColor: `${color}40`, background: `${color}10` }}
                    >
                      {post.tag}
                    </span>
                    <h3 className="text-white/80 font-medium text-sm leading-snug group-hover:text-white transition-colors">{post.title}</h3>
                  </div>
                  <p className="mt-4 text-xs font-medium group-hover:underline" style={{ color }}>
                    Read on Eduentry.com →
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
