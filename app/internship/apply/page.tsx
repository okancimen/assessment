'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { trackEvent } from '@/lib/analytics'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, InternshipTrack } from '@/types'

const YEAR_GROUPS = ['Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13 / Sixth Form']

const TRACK_ICONS: Record<string, string> = {
  tech: '⬡',
  business: '◈',
  data_analytics: '◉',
  digital_marketing: '◇',
}

function wordCount(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length
}

export default function InternshipApplyPage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [fullName, setFullName] = useState('')
  const [dob, setDob] = useState('')
  const [parentEmail, setParentEmail] = useState('')
  const [school, setSchool] = useState('')
  const [yearGroup, setYearGroup] = useState('')
  const [statement, setStatement] = useState('')
  const [trackPrefs, setTrackPrefs] = useState<InternshipTrack[]>([])
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [cvUrl, setCvUrl] = useState('')
  const [cvUploading, setCvUploading] = useState(false)
  const [gdprConsent, setGdprConsent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const age = dob
    ? Math.floor((Date.now() - new Date(dob).getTime()) / (365.25 * 24 * 60 * 60 * 1000))
    : null
  const needsConsent = age !== null && age < 16

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const storedDob = params.get('dob') || sessionStorage.getItem('intern_dob')
    const storedName = params.get('name') || sessionStorage.getItem('intern_name')
    const storedParent = params.get('parent_email') || sessionStorage.getItem('intern_parent_email')
    if (storedDob) setDob(storedDob)
    if (storedName) setFullName(storedName)
    if (storedParent) setParentEmail(storedParent)
  }, [])

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/internship/register')
    })
  }, [router])

  function toggleTrack(track: InternshipTrack) {
    setTrackPrefs((prev) => {
      if (prev.includes(track)) return prev.filter((t) => t !== track)
      if (prev.length >= 3) return prev
      return [...prev, track]
    })
  }

  function rankLabel(track: InternshipTrack) {
    const idx = trackPrefs.indexOf(track)
    if (idx === -1) return null
    return idx === 0 ? '1st' : idx === 1 ? '2nd' : '3rd'
  }

  async function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const allowed = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowed.includes(file.type)) { setError('Only PDF and DOCX files are accepted.'); return }
    if (file.size > 5 * 1024 * 1024) { setError('CV must be under 5 MB.'); return }
    setError('')
    setCvFile(file)
    setCvUploading(true)
    try {
      const res = await fetch('/api/internship/cv-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_name: file.name, file_size: file.size, mime_type: file.type }),
      })
      const { upload_url, path, error: uploadErr } = await res.json()
      if (uploadErr) throw new Error(uploadErr)
      await fetch(upload_url, {
        method: 'PUT',
        headers: { 'Content-Type': file.type },
        body: file,
      })
      setCvUrl(path)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'CV upload failed')
      setCvFile(null)
    } finally {
      setCvUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const wc = wordCount(statement)
    if (statement.trim() && (wc < 50 || wc > 300)) {
      setError(`Personal statement must be 50–300 words. Currently ${wc} words.`)
      return
    }
    if (trackPrefs.length === 0) { setError('Please select at least one track preference.'); return }
    if (needsConsent && !gdprConsent) { setError('Parental consent is required for under-16s.'); return }

    setSubmitting(true)
    try {
      const res = await fetch('/api/internship/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName,
          date_of_birth: dob,
          school_name: school,
          year_group: yearGroup,
          personal_statement: statement || null,
          cv_url: cvUrl || null,
          track_preferences: trackPrefs,
          parent_email: parentEmail || null,
          gdpr_consent: gdprConsent,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Application failed')
      trackEvent('internship_apply', { track_count: trackPrefs.length, year_group: yearGroup })
      sessionStorage.removeItem('intern_dob')
      sessionStorage.removeItem('intern_name')
      sessionStorage.removeItem('intern_parent_email')
      router.push(`/assessment/${data.assessment_id}/question`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed')
    } finally {
      setSubmitting(false)
    }
  }

  const wc = wordCount(statement)
  const wcOk = statement.trim() === '' || (wc >= 50 && wc <= 300)

  const inputCls = 'w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 text-sm font-mono focus:outline-none focus:border-[#818CF8]/50 focus:ring-1 focus:ring-[#818CF8]/20 transition-colors'
  const labelCls = 'block font-mono text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2'

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
            Step 2 of 3 · Your profile
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          <span className="text-white">Your</span>
          <br />
          <span className="bg-gradient-to-r from-[#818CF8] via-[#6366F1] to-[#A78BFA] bg-clip-text text-transparent">application.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-lg mx-auto leading-relaxed">
          Tell us about yourself and rank your track preferences. The assessment begins immediately after.
        </p>
      </div>

      {/* Form card */}
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="rounded-xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)]">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto font-mono text-[10px] text-white/20">eduentry — internship application</span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Name */}
            <div>
              <label className={labelCls}>Full name</label>
              <input
                required value={fullName} onChange={(e) => setFullName(e.target.value)}
                className={inputCls}
                placeholder="Your full name"
              />
            </div>

            {/* DOB */}
            <div>
              <label className={labelCls}>Date of birth</label>
              <input
                type="date" required value={dob} onChange={(e) => setDob(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                style={{ colorScheme: 'dark' }}
                className={inputCls}
              />
            </div>

            {/* School */}
            <div>
              <label className={labelCls}>School name</label>
              <input
                required value={school} onChange={(e) => setSchool(e.target.value)}
                className={inputCls}
                placeholder="Your school"
              />
            </div>

            {/* Year group */}
            <div>
              <label className={labelCls}>Year group</label>
              <select
                required value={yearGroup} onChange={(e) => setYearGroup(e.target.value)}
                style={{ colorScheme: 'dark' }}
                className={inputCls}
              >
                <option value="" className="bg-[#0a0a0a]">Select year group</option>
                {YEAR_GROUPS.map((y) => <option key={y} value={y} className="bg-[#0a0a0a]">{y}</option>)}
              </select>
            </div>

            {/* Track preferences */}
            <div>
              <label className={labelCls}>
                Track preferences
                <span className="text-white/20 normal-case tracking-normal ml-1">(select up to 3, in order)</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {INTERNSHIP_TRACKS.map((track) => {
                  const selected = trackPrefs.includes(track)
                  const rank = rankLabel(track)
                  return (
                    <button
                      key={track}
                      type="button"
                      onClick={() => toggleTrack(track)}
                      className={`relative flex items-center justify-between px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left ${
                        selected
                          ? 'bg-[#4F46E5]/10 border-[#818CF8]/40 text-[#818CF8]'
                          : 'bg-white/[0.03] border-white/[0.08] text-white/60 hover:border-white/[0.2] hover:text-white/80'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-base opacity-60">{TRACK_ICONS[track]}</span>
                        <span className="text-xs">{INTERNSHIP_TRACK_LABELS[track]}</span>
                      </span>
                      {rank && (
                        <span className="ml-2 font-mono text-[10px] font-bold bg-gradient-to-r from-[#818CF8] to-[#A78BFA] bg-clip-text text-transparent">
                          {rank}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Personal statement */}
            <div>
              <label className={labelCls}>
                Personal statement
                <span className="text-white/20 normal-case tracking-normal ml-1">(optional, 50–300 words)</span>
              </label>
              <textarea
                rows={5}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                className={`${inputCls} resize-none`}
                placeholder="Tell us why you'd like an internship and what you hope to learn…"
              />
              <p className={`font-mono text-[10px] mt-1.5 ${!wcOk ? 'text-red-400' : 'text-white/20'}`}>
                {statement.trim() ? `${wc} word${wc !== 1 ? 's' : ''}` : '0 words'} — aim for 50–300
              </p>
            </div>

            {/* CV upload */}
            <div>
              <label className={labelCls}>
                CV
                <span className="text-white/20 normal-case tracking-normal ml-1">(optional — PDF or DOCX, max 5 MB)</span>
              </label>
              <input ref={fileInputRef} type="file" accept=".pdf,.docx" onChange={handleCvChange} className="hidden" />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className={`w-full border-2 border-dashed rounded-lg px-4 py-4 text-sm font-mono transition-colors flex items-center justify-center gap-2 ${
                  cvFile
                    ? 'border-[#818CF8]/40 text-[#818CF8] bg-[#4F46E5]/5'
                    : 'border-white/[0.08] text-white/30 hover:border-white/[0.2] hover:text-white/50'
                }`}
              >
                {cvUploading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Uploading…
                  </>
                ) : cvFile ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {cvFile.name}
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Click to upload your CV
                  </>
                )}
              </button>
            </div>

            {/* GDPR consent for under-16 */}
            {needsConsent && (
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={gdprConsent}
                    onChange={(e) => setGdprConsent(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border transition-colors ${gdprConsent ? 'bg-[#4F46E5] border-[#4F46E5]' : 'bg-white/[0.04] border-white/[0.15]'}`}>
                    {gdprConsent && (
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
              type="submit"
              disabled={submitting || cvUploading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity shadow-[0_0_24px_rgba(99,102,241,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting…
                </>
              ) : (
                <>
                  Submit application &amp; start assessment
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center font-mono text-[11px] text-white/20 mt-4">
          Step 2 of 3 — assessment begins immediately after submission
        </p>
      </div>
    </section>
  )
}
