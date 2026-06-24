'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'

interface Cohort {
  id: string
  name: string
  start_date: string
  description: string | null
  candidate_count: number
}

export default function AdminCohortsPage() {
  const [cohorts, setCohorts] = useState<Cohort[]>([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [description, setDescription] = useState('')
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState('')

  async function load() {
    const res = await fetch('/api/admin/cohorts')
    const data = await res.json()
    setCohorts(data.cohorts ?? [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setCreating(true)
    try {
      const res = await fetch('/api/admin/cohorts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, start_date: startDate, description: description || null }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setName(''); setStartDate(''); setDescription('')
      await load()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create cohort')
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">
        <div className="flex items-center gap-3">
          <Link href="/admin/internship" className="text-sm text-[#4F46E5] hover:underline">← All candidates</Link>
          <span className="text-[#d2d2d7]">/</span>
          <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Cohorts</h1>
        </div>

        {/* Create form */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-base font-semibold text-[#1d1d1f]">New cohort</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Cohort name</label>
                <input
                  required value={name} onChange={(e) => setName(e.target.value)}
                  className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  placeholder="Summer 2026"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Start date</label>
                <input
                  type="date" required value={startDate} onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
                Description <span className="text-[#6e6e73] font-normal">(optional)</span>
              </label>
              <input
                value={description} onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                placeholder="e.g. 6-week summer placement, tech track only"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit" disabled={creating}
              className="px-5 py-2.5 bg-[#4F46E5] text-white rounded-xl text-sm font-semibold hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
            >
              {creating ? 'Creating…' : 'Create cohort'}
            </button>
          </form>
        </div>

        {/* Cohort list */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
          {loading ? (
            <div className="p-10 text-center"><div className="w-6 h-6 border-4 border-[#4F46E5] border-t-transparent rounded-full animate-spin mx-auto" /></div>
          ) : cohorts.length === 0 ? (
            <div className="p-14 text-center text-[#6e6e73] text-sm">No cohorts yet. Create the first one above.</div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f5f5f7]">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Name</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">Start date</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide hidden md:table-cell">Description</th>
                  <th className="text-right px-5 py-3 text-xs font-semibold text-[#6e6e73] uppercase tracking-wide">Candidates</th>
                </tr>
              </thead>
              <tbody>
                {cohorts.map((c) => (
                  <tr key={c.id} className="border-b border-[#f5f5f7] last:border-0">
                    <td className="px-5 py-3 font-medium text-[#1d1d1f]">{c.name}</td>
                    <td className="px-5 py-3 text-[#6e6e73] hidden sm:table-cell">
                      {new Date(c.start_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="px-5 py-3 text-[#6e6e73] hidden md:table-cell text-xs">{c.description ?? '—'}</td>
                    <td className="px-5 py-3 text-right font-medium text-[#1d1d1f]">{c.candidate_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}
