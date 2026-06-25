import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, INTERNSHIP_TRACK_DESCRIPTIONS } from '@/types'

const TRACK_ICONS: Record<string, string> = {
  tech: '💻',
  business: '📈',
  data_analytics: '📊',
  digital_marketing: '📣',
}

const PHASES = [
  { label: 'General Aptitude', desc: '10 questions · Verbal & numerical reasoning', icon: '🧠' },
  { label: 'Domain Knowledge', desc: '10 questions · Track-specific applied knowledge', icon: '📚' },
  { label: 'Workplace Skills', desc: '8 questions · Real workplace scenarios (SJT)', icon: '🤝' },
  { label: 'Interest Profile', desc: '6 questions · Work style & preference mapping', icon: '🎯' },
]

export default function InternshipLandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            Internship Assessment Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-5 leading-tight">
            Discover your internship<br />readiness
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto mb-8 leading-relaxed">
            A 34-question adaptive assessment designed for high school students aged 14 and above. Takes around 35 minutes and generates a personalised readiness report.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/internship/apply"
              className="bg-[#4F46E5] text-white px-8 py-3.5 rounded-full font-semibold text-base hover:bg-[#4338CA] transition-colors"
            >
              Apply now — it&apos;s free
            </Link>
            <Link
              href="/auth/login?redirect=/internship/apply"
              className="text-[#4F46E5] font-semibold text-base hover:underline"
            >
              Already registered? Sign in
            </Link>
          </div>
        </section>

        {/* Tracks */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">Available tracks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTERNSHIP_TRACKS.map((track) => (
              <div key={track} className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
                <div className="text-3xl mb-3">{TRACK_ICONS[track]}</div>
                <h3 className="font-semibold text-[#1d1d1f] text-base mb-1">{INTERNSHIP_TRACK_LABELS[track]}</h3>
                <p className="text-sm text-[#6e6e73] leading-relaxed">{INTERNSHIP_TRACK_DESCRIPTIONS[track]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Assessment phases */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-xl font-bold text-[#1d1d1f] mb-5 tracking-tight">What to expect</h2>
          <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className={`flex items-start gap-5 p-6 ${i < PHASES.length - 1 ? 'border-b border-[#f5f5f7]' : ''}`}
              >
                <div className="w-10 h-10 rounded-2xl bg-[#eef2ff] flex items-center justify-center text-xl flex-shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <div className="font-semibold text-[#1d1d1f] text-sm">{phase.label}</div>
                  <div className="text-xs text-[#6e6e73] mt-0.5">{phase.desc}</div>
                </div>
                <div className="ml-auto flex-shrink-0 text-xs text-[#d2d2d7] font-medium pt-0.5">
                  Phase {i + 1}
                </div>
              </div>
            ))}
            <div className="border-t border-[#f5f5f7] bg-[#f5f5f7] px-6 py-3">
              <span className="text-xs text-[#6e6e73]">Total: 34 questions · ~35 minutes · Fully resumable</span>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  )
}
