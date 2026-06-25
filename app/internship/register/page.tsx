'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Suspense } from 'react'

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

  // Check for existing session (magic link invite flow)
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

  // Invited student: complete profile + link child record
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

      // Set password and name
      const { error: updateError } = await supabase.auth.updateUser({
        password: form.password,
        data: { full_name: form.full_name },
      })
      if (updateError) throw updateError

      // Link child record to this user
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

  // Self-registration: create new account
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

  if (!sessionReady) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
            {isInvited ? 'Complete your registration' : 'Create your account'}
          </h1>
          {isInvited ? (
            <p className="text-sm text-[#6e6e73] mt-1.5">
              Your parent has invited you. Set a password to activate your account.
            </p>
          ) : (
            <p className="text-sm text-[#6e6e73] mt-1.5">
              Already have an account?{' '}
              <Link href="/auth/login?redirect=/internship/apply" className="text-[#4F46E5] font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          )}
        </div>

        <form
          onSubmit={isInvited ? handleInviteSubmit : handleSignUpSubmit}
          className="bg-white rounded-3xl border border-[#d2d2d7] p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Full name</label>
            <input
              type="text" required value={form.full_name} onChange={(e) => set('full_name', e.target.value)}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          {!isInvited && (
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Email address</label>
              <input
                type="email" required value={form.email} onChange={(e) => set('email', e.target.value)}
                className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
          )}

          {isInvited && (
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Email address</label>
              <input
                type="email" disabled value={form.email}
                className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm bg-[#f5f5f7] text-[#6e6e73]"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
              {isInvited ? 'Set a password' : 'Password'}
            </label>
            <input
              type="password" required minLength={8} value={form.password} onChange={(e) => set('password', e.target.value)}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Date of birth</label>
            <input
              type="date" required value={form.date_of_birth} onChange={(e) => set('date_of_birth', e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
            />
          </div>

          {!isInvited && (
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                Parent / guardian email <span className="text-[#6e6e73] font-normal">(optional)</span>
              </label>
              <input
                type="email" value={form.parent_email} onChange={(e) => set('parent_email', e.target.value)}
                className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                placeholder="parent@example.com"
              />
              <p className="text-xs text-[#6e6e73] mt-1">
                If provided, your parent will be able to view your results.
              </p>
            </div>
          )}

          {needsConsent && (
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox" checked={form.gdpr_consent} onChange={(e) => set('gdpr_consent', e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#4F46E5] flex-shrink-0"
              />
              <span className="text-sm text-[#6e6e73] leading-relaxed">
                I confirm that a parent or guardian has given consent for me to use this service.
              </span>
            </label>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit" disabled={loading}
            className="w-full bg-[#4F46E5] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
          >
            {loading
              ? (isInvited ? 'Activating…' : 'Creating account…')
              : (isInvited ? 'Activate account & continue' : 'Create account & continue')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function InternshipRegisterPage() {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  )
}
