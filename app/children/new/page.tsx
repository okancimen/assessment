'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Navbar from '@/components/dashboard/Navbar'

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
    if (age < 7 || age > 16) {
      setError('Child must be between 7 and 16 years old')
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
  const minDate = new Date(Date.now() - 16 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const maxDate = new Date(Date.now() - 7 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-lg mx-auto px-6 py-10">
        <div className="mb-6">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Add a child</h1>
          <p className="text-sm text-gray-500 mb-6">Children must be aged 7–16 to take the assessment.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Child&apos;s name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                placeholder="e.g. Emma"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Date of birth
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                min={minDate}
                max={maxDate}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900"
              />
              <p className="text-xs text-gray-400 mt-1">Ages 7–16 only</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" loading={loading}>
              Add child
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
