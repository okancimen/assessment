'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

export default function LoginPage() {
  const router = useRouter()
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

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Logo size="lg" className="justify-center" />
          <h1 className="text-2xl font-bold text-[#1d1d1f] mt-7 mb-1 tracking-tight">Welcome back</h1>
          <p className="text-sm text-[#6e6e73]">Sign in to your parent account</p>
        </div>

        <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 text-xs text-red-600">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg" loading={loading}>
              Sign in
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-[#6e6e73] mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/auth/register" className="text-[#4F46E5] font-semibold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
