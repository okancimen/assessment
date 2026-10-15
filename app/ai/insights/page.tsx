import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://eduentry.ai'
const PAGE_URL = `${BASE_URL}/insights`

export const metadata: Metadata = {
  title: { absolute: 'Insights — Internship & Fellowship Research | Eduentry.ai' },
  description:
    'Research, data, and practical guides on internship readiness, work experience, and career development for students and university fellows.',
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

const POSTS = [
  {
    slug: 'oecd-teenage-work-experience-career-outcomes',
    title: 'OECD Research: The Hidden Power of Teenage Work Experience on Career Outcomes',
    desc: 'What decades of OECD data say about long-term earnings and career trajectory for students who gained structured work experience before 20.',
    tag: 'Research',
    color: '#A78BFA',
  },
  {
    slug: 'pisa-2025-work-experience-student-readiness',
    title: "PISA 2025 Says Grades Are Falling — Here's Why Work Experience Is the Missing Answer",
    desc: 'Global academic performance is declining. The data points to a structural gap that classroom learning alone cannot close.',
    tag: 'Research',
    color: '#A78BFA',
  },
  {
    slug: 'how-to-get-tech-internship-before-university',
    title: 'How to Get a Tech Internship Before University: A Complete Guide',
    desc: 'Step-by-step guide for students who want real tech experience before their first year — including what selectors actually look for.',
    tag: 'Guide',
    color: '#60A5FA',
  },
  {
    slug: 'how-to-find-internship-as-student',
    title: 'How to Find an Internship as a Student: The Complete Guide',
    desc: 'Practical playbook covering applications, outreach, and the signals that separate candidates who land placements from those who don\'t.',
    tag: 'Guide',
    color: '#60A5FA',
  },
  {
    slug: 'early-internship-child-development-career',
    title: 'Why Internships at Early Ages Matter: Child Development and the Career Advantage That Compounds',
    desc: 'Research on why starting work experience earlier leads to compounding career advantages — and what parents and students should know.',
    tag: 'Research',
    color: '#A78BFA',
  },
  {
    slug: 'high-school-internship-benefits-university',
    title: 'Why High School Internships Matter: Personality, Readiness, and University Acceptance',
    desc: 'How early internship experience shapes university outcomes — from admissions to first-year performance.',
    tag: 'Research',
    color: '#A78BFA',
  },
  {
    slug: 'how-to-get-internship-no-experience-high-school',
    title: 'How to Get an Internship with No Experience: The High School Playbook',
    desc: 'Practical steps for students with no prior experience — what to say, where to look, and how to stand out.',
    tag: 'Guide',
    color: '#60A5FA',
  },
  {
    slug: 'how-to-differentiate-yourself-at-15',
    title: 'How to Differentiate Yourself at 15: What Actually Moves the Needle',
    desc: 'A data-backed look at what separates students who build early career advantage from those who wait until it\'s too late.',
    tag: 'Strategy',
    color: '#34D399',
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: 'Business Work Experience at High School in the UK: What It Is and How to Get It',
    desc: 'Everything UK students need to know about finding, preparing for, and getting the most out of a business placement.',
    tag: 'Guide',
    color: '#60A5FA',
  },
  {
    slug: 'digital-marketing-work-experience-student-reviews',
    title: 'Digital Marketing Work Experience: Student Reviews and What to Expect',
    desc: 'Real student accounts of digital marketing placements — what the work actually looked like and what they wish they had known.',
    tag: 'Experience',
    color: '#F59E0B',
  },
  {
    slug: 'business-work-experience-year-12',
    title: 'Business Work Experience in Year 12: The Complete UK Guide by Age',
    desc: 'Track-by-track guide for Year 12 students in the UK covering timing, approach, and how to turn a placement into a reference.',
    tag: 'Guide',
    color: '#60A5FA',
  },
  {
    slug: 'how-to-start-business-at-16',
    title: 'How to Start a Business at 16: What Actually Works',
    desc: 'Practical advice for young entrepreneurs — from validating an idea to building something university admissions teams notice.',
    tag: 'Strategy',
    color: '#34D399',
  },
]

const TAG_ORDER = ['Research', 'Guide', 'Strategy', 'Experience']

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
            Evidence-based research and practical guides on internship readiness, work experience, and building early career advantage.
          </p>
        </div>
      </section>

      {/* Filter tags */}
      <section className="px-6 pb-10">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 justify-center">
          {TAG_ORDER.map((tag) => {
            const color = POSTS.find(p => p.tag === tag)?.color ?? '#fff'
            return (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full border"
                style={{ color, borderColor: `${color}40`, background: `${color}10` }}
              >
                {tag}
              </span>
            )
          })}
        </div>
      </section>

      {/* Posts grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POSTS.map((post) => (
            <a
              key={post.slug}
              href={`https://eduentry.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all"
            >
              <div>
                <span
                  className="inline-block text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-full mb-4 border"
                  style={{ color: post.color, borderColor: `${post.color}40`, background: `${post.color}12` }}
                >
                  {post.tag}
                </span>
                <h2 className="text-white font-semibold text-sm leading-snug mb-3 group-hover:text-white/90">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-500 leading-relaxed">{post.desc}</p>
              </div>
              <p className="mt-5 text-xs font-medium group-hover:underline" style={{ color: post.color }}>
                Read →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 border-t border-white/[0.04] bg-[#050505] text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-mono tracking-widest text-[#A78BFA] mb-3">READY TO APPLY?</p>
          <h2 className="text-2xl font-bold text-white mb-4">Turn research into real experience</h2>
          <p className="text-gray-400 text-sm mb-8">Take the 20-minute assessment. Top 10% are selected for a 3-month fellowship on live Singapore tech deliverables.</p>
          <Link
            href="/work-experience"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-black text-sm transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)', boxShadow: '0 0 24px rgba(167,139,250,0.2)' }}
          >
            View Fellowship →
          </Link>
        </div>
      </section>
    </main>
  )
}
