'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SUBJECT_LABELS } from '@/types'

type SubjectResult = {
  standardized_score: number
  percentage: number
  topics: Record<string, { correct: number; total: number }>
}

interface Props {
  assessmentId: string
  guestToken: string
  childName: string
  claimUrl: string
  subjectScores?: Record<string, SubjectResult>
}

const SUBJECTS = ['english', 'mathematics', 'verbal_reasoning', 'nonverbal_reasoning'] as const

export default function GuestResultsGate({ assessmentId, guestToken, childName, claimUrl, subjectScores }: Props) {
  const [email, setEmail]     = useState('')
  const [state, setState]     = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setState('sending')
    try {
      const res = await fetch('/api/assessment/guest-results-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, assessmentId, guestToken }),
      })
      setState(res.ok ? 'sent' : 'error')
    } catch {
      setState('error')
    }
  }

  return (
    <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden relative">
      {/* Blurred preview — real topic data */}
      <div className="p-6 space-y-4 blur-sm select-none pointer-events-none" aria-hidden="true">
        <p className="text-sm font-semibold text-[#1d1d1f]">Topic Breakdown</p>
        {SUBJECTS.map((subject) => {
          const s = subjectScores?.[subject]
          const topics = s?.topics ? Object.entries(s.topics).slice(0, 4) : []
          if (topics.length === 0) {
            return (
              <div key={subject} className="rounded-xl bg-[#f5f5f7] border border-[#d2d2d7] p-3 space-y-2">
                <p className="text-xs font-semibold text-[#1d1d1f]">{SUBJECT_LABELS[subject]}</p>
                <div className="space-y-2">
                  {[70, 55, 85].map((w, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-28 h-2.5 bg-[#d2d2d7] rounded-full" />
                      <div className="flex-1 h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                        <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: `${w}%` }} />
                      </div>
                      <span className="text-xs tabular-nums text-[#6e6e73] w-9 text-right">{w}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <div key={subject} className="rounded-xl bg-[#f5f5f7] border border-[#d2d2d7] p-3 space-y-2">
              <p className="text-xs font-semibold text-[#1d1d1f]">{SUBJECT_LABELS[subject]}</p>
              <div className="space-y-2">
                {topics.map(([topic, data]) => {
                  const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
                  return (
                    <div key={topic} className="flex items-center gap-2">
                      <span className="text-xs text-[#6e6e73] w-28 shrink-0 capitalize truncate">
                        {topic.replace(/_/g, ' ')}
                      </span>
                      <div className="flex-1 h-1.5 bg-[#e5e7eb] rounded-full overflow-hidden">
                        <div className="h-full bg-[#4F46E5] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs font-medium tabular-nums text-[#6e6e73] w-9 text-right">{pct}%</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* AI plan placeholder */}
        <div className="rounded-xl bg-[#eef2ff] border border-[#c7d2fe] p-4 space-y-2">
          <p className="text-xs font-semibold text-[#4F46E5]">AI Action Plan</p>
          <p className="text-sm text-[#3730a3] leading-relaxed">
            Focus on Comprehension inference questions — your child is selecting plausible but surface-level answers. Practice asking &ldquo;what does the author mean, not just say?&rdquo; after each passage.
          </p>
          <p className="text-sm text-[#3730a3] leading-relaxed">
            For Fractions, the error pattern suggests procedural gaps rather than conceptual ones. Fifteen minutes of mixed-denominator addition daily for two weeks should produce a measurable shift.
          </p>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/85 backdrop-blur-[2px] px-6 py-6 text-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#eef2ff] flex items-center justify-center mx-auto">
          <svg className="w-5 h-5 text-[#4F46E5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <div>
          <p className="text-base font-bold text-[#1d1d1f]">Save {childName}&apos;s full report — free</p>
          <p className="text-xs text-[#6e6e73] mt-1">Guest results are stored for 30 days, then deleted.</p>
        </div>

        <ul className="text-sm text-[#3d3d3f] space-y-1.5 text-left max-w-xs w-full">
          {[
            'Topic-by-topic breakdown — exact weak areas by subject',
            'AI action plan — specific next steps for each subject',
            'Percentile ranking + UK, US, PISA & IB context',
            `Retest ${childName} in 3 months and track improvement`,
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
          <Link
            href={`/auth/register?redirect=${encodeURIComponent(claimUrl)}`}
            className="flex-1 bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors text-center"
          >
            Create Free Account
          </Link>
          <Link
            href={`/auth/login?redirect=${encodeURIComponent(claimUrl)}`}
            className="flex-1 border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#f5f5f7] transition-colors text-center"
          >
            Sign In
          </Link>
        </div>

        <div className="w-full max-w-xs">
          <div className="flex items-center gap-2 my-1">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <span className="text-xs text-[#9ca3af]">or</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>

          {state === 'sent' ? (
            <p className="text-sm text-emerald-700 font-semibold text-center py-2">
              ✓ Report sent — check your inbox
            </p>
          ) : (
            <form onSubmit={handleEmail} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email this report to yourself"
                className="flex-1 min-w-0 text-sm border border-[#d2d2d7] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="shrink-0 bg-[#f5f5f7] hover:bg-[#e5e7eb] text-[#1d1d1f] font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors disabled:opacity-60 border border-[#d2d2d7]"
              >
                {state === 'sending' ? '…' : 'Send'}
              </button>
            </form>
          )}
          {state === 'error' && (
            <p className="text-xs text-red-600 mt-1 text-center">Something went wrong — please try again.</p>
          )}
        </div>
      </div>
    </div>
  )
}
