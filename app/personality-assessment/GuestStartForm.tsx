'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GuestStartForm() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const res = await fetch('/api/personality/guest-start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), age: Number(age) }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      setError(data.error ?? 'Something went wrong. Please try again.')
      setLoading(false)
      return
    }
    router.push(`/personality-assessment/question/${data.assessmentId}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Child's first name"
          className="flex-1 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-white"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min={6}
          max={20}
          placeholder="Age"
          className="w-full sm:w-24 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-white"
        />
      </div>
      {error && <p className="text-xs text-red-500 text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200 disabled:opacity-60"
      >
        {loading ? 'Starting…' : 'Start Free Assessment'}
      </button>
      <p className="text-xs text-[#6e6e73]">No account needed · Takes ~5 minutes</p>
    </form>
  )
}
