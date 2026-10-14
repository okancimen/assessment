'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const childId = searchParams.get('child_id')

  const [sessionReady, setSessionReady] = useState(false)
  const [isInvited, setIsInvited] = useState(false)
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
    date_of_birth: '',
    parent_email: '',
    gdpr_consent: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function set(key: string, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const dob = form.date_of_birth ? new Date(form.date_of_birth) : null
  const age = dob ? Math.floor((Date.now() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000)) : null
  const needsConsent = age !== null && age < 16

  useEffect(() => {
    if (!childId) { setSessionReady(true); return }
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setIsInvited(true)
        setForm((f) => ({ ...f, email: session.user.email ?? '', full_name: session.user.user_metadata?.full_name ?? '' }))
      }
      setSessionReady(true)
    })
  }, [childId])

  async function handleInviteSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (needsConsent && !form.gdpr_consent) {
      setError('Please confirm parental consent to continue.')
      return
    }
    setLoading(true)
    try {
      const supabase = createClient()
      const { error: updateError } = await supabase.auth.updateUser({
        password: form.password,
        data: { full_name: form.full_name },
      })
      if (updateError) throw updateError
      const res = await fetch('/api/internship/complete-invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ child_id: childId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      sessionStorage.setItem('intern_dob', form.date_of_birth)
      sessionStorage.setItem('intern_name', form.full_name)
      void fetch('/api/user/update-location', { method: 'POST' })
      router.push('/internship/apply')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  async function handleSignUpSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (needsConsent && !form.gdpr_consent) {
      setError('Please confirm parental consent to continue.')
      return
    }
    setLoading(true)
    try {
      const supabase = createClient()
      const { error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: { data: { full_name: form.full_name } },
      })
      if (signUpError) throw signUpError
      sessionStorage.setItem('intern_dob', form.date_of_birth)
      sessionStorage.setItem('intern_name', form.full_name)
      if (form.parent_email) sessionStorage.setItem('intern_parent_email', form.parent_email)
      void fetch('/api/user/update-location', { method: 'POST' })
      router.push('/internship/apply')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm font-mono focus:outline-none focus:border-[#818CF8]/50 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors'
  const labelCls = 'block font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2'

  if (!sessionReady) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#818CF8] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 bg-[#050505]">
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      {/* Indigo glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#4F46E5] opacity-[0.07] blur-[120px]" />
      {/* Violet glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center mb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.04] text-[11px] font-mono text-white/60 px-3.5 py-1.5 rounded-full tracking-[0.12em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80] animate-pulse" />
            {isInvited ? 'Step 1 of 3 · Invited student' : 'Step 1 of 3 · Free account'}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          {isInvited ? (
            <>
              <span className="text-white">Complete your</span>
              <br />
              <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">registration.</span>
            </>
          ) : (
            <>
              <span className="text-white">Create your</span>
              <br />
              <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">account.</span>
            </>
          )}
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-md mx-auto leading-relaxed">
          {isInvited
            ? 'Your parent has invited you. Set a password to activate your account and continue to the assessment.'
            : <>Already have an account?{' '}<Link href="/auth/login?redirect=/internship/apply" className="bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity">Sign in →</Link></>
          }
        </p>
      </div>

      {/* Form card */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[10px] text-white/20">
              {isInvited ? 'eduentry — activate account' : 'eduentry — create account'}
            </span>
          </div>

          <form
            onSubmit={isInvited ? handleInviteSubmit : handleSignUpSubmit}
            className="p-6 space-y-5"
          >
            {/* Full name */}
            <div>
              <label className={labelCls}>Full name</label>
              <input
                type="text" required value={form.full_name} onChange={(e) => set('full_name', e.target.value)}
                className={inputCls}
                placeholder="Your full name"
              />
            </div>

            {/* Email — editable for self-reg, read-only for invited */}
            {!isInvited ? (
              <div>
                <label className={labelCls}>Email address</label>
                <input
                  type="email" required value={form.email} onChange={(e) => set('email', e.target.value)}
                  className={inputCls}
                  placeholder="you@example.com"
                />
              </div>
            ) : (
              <div>
                <label className={labelCls}>Email address</label>
                <input
                  type="email" disabled value={form.email}
                  className={`${inputCls} opacity-40 cursor-not-allowed`}
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label className={labelCls}>{isInvited ? 'Set a password' : 'Password'}</label>
              <input
                type="password" required minLength={8} value={form.password} onChange={(e) => set('password', e.target.value)}
                className={inputCls}
                placeholder="At least 8 characters"
              />
            </div>

            {/* Date of birth */}
            <div>
              <label className={labelCls}>Date of birth</label>
              <input
                type="date" required value={form.date_of_birth} onChange={(e) => set('date_of_birth', e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                style={{ colorScheme: 'dark' }}
                className={inputCls}
              />
            </div>

            {/* Parent email (self-reg only) */}
            {!isInvited && (
              <div>
                <label className={labelCls}>
                  Parent / guardian email
                  <span className="text-white/20 normal-case tracking-normal ml-1">(optional)</span>
                </label>
                <input
                  type="email" value={form.parent_email} onChange={(e) => set('parent_email', e.target.value)}
                  className={inputCls}
                  placeholder="parent@example.com"
                />
                <p className="font-mono text-[10px] text-white/20 mt-1.5">
                  If provided, your parent can view your results.
                </p>
              </div>
            )}

            {/* GDPR consent for under-16 */}
            {needsConsent && (
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox" checked={form.gdpr_consent} onChange={(e) => set('gdpr_consent', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border transition-colors ${form.gdpr_consent ? 'bg-[#4F46E5] border-[#4F46E5]' : 'bg-white/[0.04] border-white/[0.15]'}`}>
                    {form.gdpr_consent && (
                      <svg className="w-3 h-3 text-white m-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-white/40 leading-relaxed">
                  I confirm that a parent or guardian has given consent for me to use this service.
                </span>
              </label>
            )}

            {error && (
              <div className="rounded-lg px-4 py-3 text-xs font-mono bg-red-500/10 border border-red-500/20 text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit" disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {isInvited ? 'Activating…' : 'Creating account…'}
                </>
              ) : (
                <>
                  {isInvited ? 'Activate account & continue' : 'Create account & continue'}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center font-mono text-[11px] text-white/20 mt-4">
          Step 1 of 3 — apply and then take the assessment
        </p>
      </div>
    </section>
  )
}

export default function InternshipRegisterPage() {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  )
}
