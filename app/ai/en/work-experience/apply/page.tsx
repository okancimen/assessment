'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

const TRACKS = [
  { id: 'tech',              label: 'AI & Software Engineering',           icon: '⬡', color: '#A78BFA' },
  { id: 'data_analytics',   label: 'Data Analytics & Engineering',         icon: '◉', color: '#60A5FA' },
  { id: 'digital_marketing',label: 'Digital Growth & Marketing',           icon: '◇', color: '#34D399' },
  { id: 'business',         label: 'Business Development & Tech Research', icon: '◈', color: '#F59E0B' },
]

const YEAR_GROUPS = ['Year 1', 'Year 2', 'Placement Year', 'Final Year']

export default function WorkExperienceApplyPage() {
  const router = useRouter()
  const [step, setStep] = useState<'auth' | 'details'>('auth')

  // Auth fields
  const [fullName, setFullName] = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup')

  // Application fields
  const [university, setUniversity]   = useState('')
  const [yearGroup, setYearGroup]     = useState('')
  const [track, setTrack]             = useState('')
  const [statement, setStatement]     = useState('')

  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const supabase = createClient()

      if (authMode === 'signup') {
        if (!fullName.trim()) { setError('Full name is required'); setLoading(false); return }
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },
        })
        if (signUpError) { setError(signUpError.message); setLoading(false); return }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })
        if (signInError) { setError(signInError.message); setLoading(false); return }
      }

      setStep('details')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!university.trim()) { setError('University name is required'); return }
    if (!yearGroup)          { setError('Year group is required'); return }
    if (!track)              { setError('Please select a career track'); return }

    setLoading(true)
    try {
      const res = await fetch('/api/work-experience/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName || email.split('@')[0],
          university_name: university,
          year_group: yearGroup,
          track_preference: track,
          personal_statement: statement,
        }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Application failed'); setLoading(false); return }
      router.push(`/assessment/${data.assessment_id}/question`)
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      {/* Glow */}
      <div className="pointer-events-none fixed left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.08] blur-[120px]" style={{ background: '#A78BFA' }} />

      <div className="relative w-full max-w-md">
        {/* Logo / back */}
        <div className="mb-8">
          <Link href="/en/work-experience" className="text-sm text-white/40 hover:text-white/70 transition-colors">
            ← Back to Fellowship
          </Link>
        </div>

        <div className="border border-white/[0.08] rounded-2xl p-8 bg-white/[0.02] backdrop-blur-sm">

          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-8">
            {['Account', 'Application'].map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && <div className="w-8 h-px bg-white/10" />}
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors"
                    style={
                      (i === 0 && (step === 'auth' || step === 'details')) || (i === 1 && step === 'details')
                        ? { background: '#A78BFA', color: '#000' }
                        : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }
                    }
                  >
                    {i === 0 && step === 'details' ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs ${(i === 0 && step === 'auth') || (i === 1 && step === 'details') ? 'text-white' : 'text-white/40'}`}>
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Step 1: Auth ── */}
          {step === 'auth' && (
            <form onSubmit={handleAuth} className="space-y-5">
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Create your account</h1>
                <p className="text-sm text-gray-400">Start your fellowship application.</p>
              </div>

              {/* Toggle */}
              <div className="flex rounded-lg border border-white/[0.08] p-1 gap-1">
                {(['signup', 'signin'] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setAuthMode(mode)}
                    className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      authMode === mode ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'
                    }`}
                  >
                    {mode === 'signup' ? 'New account' : 'Sign in'}
                  </button>
                ))}
              </div>

              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Full name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A78BFA]/50 transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs text-white/50 mb-1.5">University email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@university.ac.uk"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A78BFA]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  required
                  minLength={8}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A78BFA]/50 transition-colors"
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-black text-sm transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)', boxShadow: '0 0 24px rgba(167,139,250,0.25)' }}
              >
                {loading ? 'Please wait…' : authMode === 'signup' ? 'Create account & continue' : 'Sign in & continue'}
              </button>
            </form>
          )}

          {/* ── Step 2: Application details ── */}
          {step === 'details' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h1 className="text-xl font-bold text-white mb-1">Your application</h1>
                <p className="text-sm text-gray-400">Takes 2 minutes to complete.</p>
              </div>

              {/* University */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">University name</label>
                <input
                  type="text"
                  value={university}
                  onChange={e => setUniversity(e.target.value)}
                  placeholder="e.g. University of Edinburgh"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A78BFA]/50 transition-colors"
                />
              </div>

              {/* Year group */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Year group</label>
                <div className="grid grid-cols-2 gap-2">
                  {YEAR_GROUPS.map(y => (
                    <button
                      key={y}
                      type="button"
                      onClick={() => setYearGroup(y)}
                      className={`py-2.5 px-3 rounded-lg text-sm font-medium border transition-colors ${
                        yearGroup === y
                          ? 'border-[#A78BFA]/60 bg-[#A78BFA]/10 text-[#A78BFA]'
                          : 'border-white/[0.08] bg-white/[0.02] text-white/50 hover:border-white/20 hover:text-white/80'
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              </div>

              {/* Track */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Career track</label>
                <div className="space-y-2">
                  {TRACKS.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTrack(t.id)}
                      className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg text-sm border transition-colors text-left ${
                        track === t.id
                          ? 'border-white/20 bg-white/[0.06] text-white'
                          : 'border-white/[0.06] bg-white/[0.02] text-white/50 hover:border-white/[0.12] hover:text-white/70'
                      }`}
                    >
                      <span style={{ color: t.color }}>{t.icon}</span>
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional statement */}
              <div>
                <label className="block text-xs text-white/50 mb-1.5">
                  Personal statement <span className="text-white/25">(optional · 50–300 words)</span>
                </label>
                <textarea
                  value={statement}
                  onChange={e => setStatement(e.target.value)}
                  rows={4}
                  placeholder="Why are you interested in this fellowship? What do you hope to build?"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#A78BFA]/50 transition-colors resize-none"
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-black text-sm transition-all hover:opacity-90 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)', boxShadow: '0 0 24px rgba(167,139,250,0.25)' }}
              >
                {loading ? 'Starting assessment…' : 'Start 20-Minute Assessment →'}
              </button>

              <p className="text-xs text-center text-white/25">
                Free · No payment required · Results in 20 minutes
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
