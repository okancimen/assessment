import type { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard — Eduentry',
  robots: { index: false, follow: false },
}

const TRACK_LABELS: Record<string, string> = {
  tech:              'AI & Software Engineering',
  data_analytics:    'Data Analytics & Engineering',
  digital_marketing: 'Digital Growth & Marketing',
  business:          'Business Development & Tech Research',
}

const TRACK_COLORS: Record<string, string> = {
  tech:              '#A78BFA',
  data_analytics:    '#60A5FA',
  digital_marketing: '#34D399',
  business:          '#F59E0B',
}

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡', data_analytics: '◉', digital_marketing: '◇', business: '◈',
}

type AssessmentRow = {
  id: string
  status: string
  created_at: string
  university_profiles: { track_preference: string; university_name: string; year_group: string } | null
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const db = createAdminClient()

  const { data: child } = await db
    .from('children')
    .select('id, name')
    .eq('student_user_id', user.id)
    .is('parent_id', null)
    .maybeSingle()

  let assessments: AssessmentRow[] = []
  if (child) {
    const { data } = await db
      .from('assessments')
      .select('id, status, created_at, university_profiles(track_preference, university_name, year_group)')
      .eq('child_id', child.id)
      .eq('assessment_type', 'internship_university')
      .order('created_at', { ascending: false })
    assessments = (data ?? []) as unknown as AssessmentRow[]
  }

  const firstName = child?.name?.split(' ')[0] ?? user.email?.split('@')[0] ?? 'there'

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Dot grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.25]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#4F46E5] opacity-[0.06] blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/" className="text-sm text-white/30 hover:text-white/60 transition-colors font-mono">
              ← eduentry.ai
            </Link>
            <h1 className="text-3xl font-bold mt-3">
              Welcome back, <span className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">{firstName}</span>.
            </h1>
            <p className="text-white/40 text-sm mt-1 font-mono">{user.email}</p>
          </div>
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono border border-white/[0.08] px-3 py-1.5 rounded-lg hover:border-white/20"
            >
              Sign out
            </button>
          </form>
        </div>

        {/* Assessments */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-mono text-white/40 uppercase tracking-[0.15em]">Your Assessments</h2>
            <Link
              href="/work-experience/apply"
              className="text-xs text-[#818CF8] hover:text-[#A78BFA] transition-colors font-mono"
            >
              + New application
            </Link>
          </div>

          {assessments.length === 0 ? (
            <div className="border border-white/[0.08] rounded-2xl p-10 text-center bg-white/[0.02]">
              <p className="text-white/40 text-sm mb-6">No assessments yet.</p>
              <Link
                href="/work-experience/apply"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)]"
              >
                Apply for the fellowship →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {assessments.map((a) => {
                const profile = a.university_profiles
                const track = profile?.track_preference ?? ''
                const color = TRACK_COLORS[track] ?? '#818CF8'
                const icon = TRACK_ICONS[track] ?? '◎'
                const label = TRACK_LABELS[track] ?? track

                return (
                  <div
                    key={a.id}
                    className="border border-white/[0.08] rounded-2xl p-6 bg-white/[0.02] flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <span className="text-2xl flex-shrink-0" style={{ color }}>{icon}</span>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-white truncate">{label || 'Internship Assessment'}</p>
                        {profile && (
                          <p className="text-xs text-white/40 font-mono mt-0.5">
                            {profile.university_name} · {profile.year_group}
                          </p>
                        )}
                        <p className="text-xs text-white/25 font-mono mt-0.5">
                          {new Date(a.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      {a.status === 'completed' ? (
                        <Link
                          href={`/assessment/${a.id}/results`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          View report →
                        </Link>
                      ) : (
                        <Link
                          href={`/assessment/${a.id}/question`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg border border-[#818CF8]/30 text-[#818CF8] hover:bg-[#818CF8]/10 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] animate-pulse" />
                          {a.status === 'in_progress' ? 'Continue →' : 'Start →'}
                        </Link>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {/* Footer links */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex gap-4">
          <Link href="/work-experience" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Fellowship</Link>
          <Link href="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Privacy</Link>
          <Link href="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Terms</Link>
        </div>
      </div>
    </main>
  )
}
