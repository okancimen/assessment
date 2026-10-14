'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { trackEvent } from '@/lib/analytics'

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirect') ?? '/dashboard'
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      setLoading(false)
      return
    }

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    trackEvent('sign_up', { method: 'email' })
    void fetch('/api/user/update-location', { method: 'POST' })
    router.push(redirectTo)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">
          Full name
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm font-mono focus:outline-none focus:border-[#818CF8]/50 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm font-mono focus:outline-none focus:border-[#818CF8]/50 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm font-mono focus:outline-none focus:border-[#818CF8]/50 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors"
          placeholder="Min. 8 characters"
        />
      </div>

      {error && (
        <div className="rounded-lg px-4 py-3 text-xs font-mono bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed mt-1"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Creating account…
          </>
        ) : (
          <>
            Create account
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}

export default function AIRegisterPage() {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex flex-col items-center justify-center px-6 pt-20 pb-24 bg-[#050505]">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Indigo glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[120px]" />
      {/* Violet glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
            Free · No card required
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          <span className="text-white">Start your</span>
          <br />
          <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">journey.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-md mx-auto mb-12 leading-relaxed">
          Create your free account and take the 34-question internship readiness assessment in 20 minutes.
        </p>

        {/* Terminal-style form card */}
        <div className="max-w-md mx-auto text-left">
          <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — create account</span>
            </div>
            {/* Form body */}
            <div className="p-6">
              <Suspense fallback={null}>
                <RegisterForm />
              </Suspense>
            </div>
          </div>

          <p className="text-center text-xs text-white/30 mt-5 font-mono">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity"
            >
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
