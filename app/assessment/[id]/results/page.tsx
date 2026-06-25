'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ReadinessTier } from '@/types'

// ── Internship results ────────────────────────────────────────────────────────

interface InternshipData {
  assessment_type: 'internship'
  tier: ReadinessTier
  ai_summary: string
  phase_insights: Record<string, { title: string; bullets: string[] }> | null
  child_name: string
  child_initials: string
  is_owner: boolean
}

function TierBadge({ tier }: { tier: ReadinessTier }) {
  const colors: Record<ReadinessTier, string> = {
    'Internship Ready': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'Developing': 'bg-amber-100 text-amber-700 border-amber-200',
    'Needs Support': 'bg-red-100 text-red-700 border-red-200',
  }
  const icons: Record<ReadinessTier, string> = {
    'Internship Ready': '✓', 'Developing': '◎', 'Needs Support': '○',
  }
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-semibold text-sm ${colors[tier]}`}>
      <span>{icons[tier]}</span> {tier}
    </div>
  )
}

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-semibold text-[#1d1d1f]">{part}</strong> : part
  )
}

function AISummary({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean)
  return (
    <div className="space-y-3">
      {paragraphs.map((para, i) => {
        const isHeading = para.startsWith('**') && para.endsWith('**')
        return (
          <p key={i} className={`leading-relaxed ${isHeading ? 'text-base font-semibold text-[#1d1d1f]' : 'text-sm text-[#1d1d1f]'}`}>
            {renderBold(para)}
          </p>
        )
      })}
    </div>
  )
}

function PhaseCard({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-[#d2d2d7] p-5">
      <h3 className="font-semibold text-[#1d1d1f] text-sm mb-3">{title}</h3>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#6e6e73]">
            <span className="text-[#4F46E5] mt-0.5 flex-shrink-0">•</span>{b}
          </li>
        ))}
      </ul>
    </div>
  )
}

function InternshipResults({ id, data: initial }: { id: string; data: InternshipData }) {
  const [data] = useState(initial)
  const [insightLoading, setInsightLoading] = useState(false)
  const [insights, setInsights] = useState(initial.phase_insights)
  const [copied, setCopied] = useState(false)

  async function handleGetInsights() {
    setInsightLoading(true)
    try {
      const res = await fetch(`/api/internship/${id}/insights`, { method: 'POST' })
      const d = await res.json()
      if (d.insights) setInsights(d.insights)
    } catch { /* silent */ } finally { setInsightLoading(false) }
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">
        <div className="text-center space-y-3">
          <div className="text-sm text-[#6e6e73]">Internship Readiness Report</div>
          <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">
            {data.is_owner ? data.child_name : data.child_initials}
          </h1>
        </div>

        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#eef2ff] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-[#4F46E5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-[#4F46E5] uppercase tracking-wider">AI-generated summary</span>
          </div>
          <AISummary text={data.ai_summary} />
        </div>

        {insights ? (
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#1d1d1f]">Phase insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.values(insights).map((card) => (
                <PhaseCard key={card.title} title={card.title} bullets={card.bullets} />
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">
              <svg className="w-6 h-6 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[#1d1d1f] mb-1">Get personalised phase insights</h2>
              <p className="text-xs text-[#6e6e73]">AI will analyse each phase and highlight your strengths and one growth area per section.</p>
            </div>
            <button
              onClick={handleGetInsights} disabled={insightLoading}
              className="bg-[#4F46E5] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
            >
              {insightLoading ? 'Generating…' : 'Get personalised insights'}
            </button>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <Link href="/dashboard" className="text-sm text-[#4F46E5] hover:underline font-medium">← Back to dashboard</Link>
          <button onClick={handleCopyLink} className="flex items-center gap-2 text-sm text-[#6e6e73] hover:text-[#4F46E5] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied ? 'Link copied!' : 'Share report'}
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Page shell — fetches data, dispatches to type-specific view ───────────────

export default function AssessmentResultsPage() {
  const { id } = useParams<{ id: string }>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`/api/assessment/${id}/results`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) { setError(d.error); return }
        setData(d)
      })
      .catch(() => setError('Failed to load results'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#4F46E5] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-red-600 text-sm">{error || 'Results not found'}</p>
          <Link href="/dashboard" className="text-[#4F46E5] text-sm hover:underline">Back to dashboard</Link>
        </div>
      </div>
    )
  }

  if (data.assessment_type === 'internship') {
    return <InternshipResults id={id} data={data as InternshipData} />
  }

  // Academic: redirect to the existing full results page (server component)
  // We use window.location to avoid importing the heavy server-only results page
  if (typeof window !== 'undefined') {
    window.location.replace(`/results/${id}`)
  }
  return null
}
