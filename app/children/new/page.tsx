'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'

export default function AddChildPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate age range
    const age = Math.floor(
      (Date.now() - new Date(dateOfBirth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    )
    if (age < 6 || age > 17) {
      setError('Child must be between 6 and 17 years old')
      setLoading(false)
      return
    }

    const res = await fetch('/api/children', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, date_of_birth: dateOfBirth }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Something went wrong')
      setLoading(false)
      return
    }

    await res.json()
    router.push('/dashboard?success=child-added')
  }

  const today = new Date().toISOString().split('T')[0]
  const minDate = new Date(Date.now() - 17 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const maxDate = new Date(Date.now() - 6 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="max-w-sm mx-auto px-6 py-10 w-full">
        <div className="mb-6">
          <Link href="/dashboard" className="text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
            ← Back to dashboard
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8">
          <h1 className="text-xl font-bold text-[#1d1d1f] mb-1 tracking-tight">Add a child</h1>
          <p className="text-xs text-[#6e6e73] mb-6">Children must be aged 6–17 to take the assessment.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">
                Child&apos;s name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-[#f5f5f7]"
                placeholder="e.g. Emma"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">
                Date of birth
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                min={minDate}
                max={maxDate}
                className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] text-sm bg-[#f5f5f7]"
              />
              <p className="text-xs text-[#6e6e73] mt-1.5">Ages 6–17 only</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 text-xs text-red-600">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg" loading={loading}>
              Add child
            </Button>
          </form>
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
