'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import Button from '@/components/ui/Button'
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
    // API routes need a full browser navigation so server-side cookies are sent correctly.
    // Client-side router.push fetches API routes as XHR and won't follow server redirects.
    if (redirectTo.startsWith('/api/')) {
      window.location.href = redirectTo
    } else {
      router.push(redirectTo)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">Full name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-[#f5f5f7]"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-[#f5f5f7]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-[#f5f5f7]"
          placeholder="Min. 8 characters"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 text-xs text-red-600">
          {error}
        </div>
      )}

      <Button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg" loading={loading}>
        Create account
      </Button>
    </form>
  )
}

export default function RegisterPage() {
  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#1d1d1f] mb-1 tracking-tight">Create your account</h1>
        <p className="text-sm text-[#6e6e73]">Register as a parent — it&apos;s completely free</p>
      </div>

      <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8">
        <Suspense fallback={null}>
          <RegisterForm />
        </Suspense>
      </div>

      <p className="text-center text-xs text-[#6e6e73] mt-6">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-[#4F46E5] font-semibold hover:underline">
          Sign in
        </Link>
      </p>

      <p className="text-center text-xs text-[#6e6e73] mt-3">
        Want to see what you&apos;ll get first?{' '}
        <Link href="/sample-report" className="text-[#4F46E5] font-semibold hover:underline">
          View a sample report →
        </Link>
      </p>
    </div>
  )
}
