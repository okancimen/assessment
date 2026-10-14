'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { trackEvent } from '@/lib/analytics'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    trackEvent('login', { method: 'email' })
    const redirectTo = searchParams.get('redirect') ?? '/dashboard'
    router.push(redirectTo)
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-mono text-[10px] text-white/40 uppercase tracking-[0.12em] mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block font-mono text-[10px] text-white/40 uppercase tracking-[0.12em] mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#818CF8]/60 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors"
          placeholder="••••••••"
        />
      </div>

      {error && (
        <div className="rounded-xl px-4 py-3 text-xs bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.25)] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {loading ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Signing in…
          </>
        ) : 'Sign in'}
      </button>
    </form>
  )
}

export default function AILoginPage() {
  return (
    <div className="relative bg-[#050505] flex items-center justify-center px-6 py-20 min-h-[calc(100vh-44px)]">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[110px]" />

      <div className="relative z-10 w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-white/40 px-3 py-1.5 rounded-full tracking-[0.1em] uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
            Secure sign-in
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back</h1>
          <p className="text-sm text-white/40">Sign in to access your assessment dashboard</p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>

        {/* Footer link */}
        <p className="text-center text-xs text-white/30 mt-6">
          Don&apos;t have an account?{' '}
          <Link
            href="/auth/register"
            className="text-[#818CF8] hover:text-[#A78BFA] transition-colors font-semibold"
          >
            Create one free
          </Link>
        </p>
      </div>
    </div>
  )
}
