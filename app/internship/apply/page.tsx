'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { INTERNSHIP_TRACKS, INTERNSHIP_TRACK_LABELS, InternshipTrack } from '@/types'

const YEAR_GROUPS = ['Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13 / Sixth Form']


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

  // Restore from sessionStorage set during registration
  useEffect(() => {
    const storedDob = sessionStorage.getItem('intern_dob')
    const storedName = sessionStorage.getItem('intern_name')
    const storedParent = sessionStorage.getItem('intern_parent_email')
    if (storedDob) setDob(storedDob)
    if (storedName) setFullName(storedName)
    if (storedParent) setParentEmail(storedParent)
  }, [])

  // Verify logged in
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
      // Get signed upload URL
      const res = await fetch('/api/internship/cv-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ file_name: file.name, file_size: file.size, mime_type: file.type }),
      })
      const { upload_url, path, error: uploadErr } = await res.json()
      if (uploadErr) throw new Error(uploadErr)
      // Upload to Supabase Storage directly
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
      sessionStorage.removeItem('intern_dob')
      sessionStorage.removeItem('intern_name')
      sessionStorage.removeItem('intern_parent_email')
      router.push(`/internship/assessment/${data.assessment_id}/question`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed')
    } finally {
      setSubmitting(false)
    }
  }

  const wc = wordCount(statement)
  const wcOk = statement.trim() === '' || (wc >= 50 && wc <= 300)

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Internship Application</h1>
          <p className="text-sm text-[#6e6e73] mt-1">Complete your profile to start the assessment.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[#d2d2d7] p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Full name</label>
            <input
              required value={fullName} onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Date of birth</label>
            <input
              type="date" required value={dob} onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
            />
          </div>

          {/* School */}
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">School name</label>
            <input
              required value={school} onChange={(e) => setSchool(e.target.value)}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
              placeholder="Your school"
            />
          </div>

          {/* Year group */}
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">Year group</label>
            <select
              required value={yearGroup} onChange={(e) => setYearGroup(e.target.value)}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent bg-white"
            >
              <option value="">Select year group</option>
              {YEAR_GROUPS.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          {/* Track preferences */}
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
              Track preferences <span className="text-[#6e6e73] font-normal">(select up to 3, in order)</span>
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
                    className={`relative flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left ${
                      selected
                        ? 'bg-[#eef2ff] border-[#4F46E5] text-[#4F46E5]'
                        : 'bg-white border-[#d2d2d7] text-[#1d1d1f] hover:border-[#4F46E5]'
                    }`}
                  >
                    {INTERNSHIP_TRACK_LABELS[track]}
                    {rank && (
                      <span className="ml-2 text-xs font-bold bg-[#4F46E5] text-white px-1.5 py-0.5 rounded-full">
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
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
              Personal statement <span className="text-[#6e6e73] font-normal">(optional, 50–300 words)</span>
            </label>
            <textarea
              rows={5}
              value={statement}
              onChange={(e) => setStatement(e.target.value)}
              className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent resize-none"
              placeholder="Tell us why you'd like an internship and what you hope to learn…"
            />
            <p className={`text-xs mt-1 ${!wcOk ? 'text-red-500' : 'text-[#6e6e73]'}`}>
              {statement.trim() ? `${wc} word${wc !== 1 ? 's' : ''}` : '0 words'} — aim for 50–300
            </p>
          </div>

          {/* CV upload */}
          <div>
            <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">
              CV <span className="text-[#6e6e73] font-normal">(optional — PDF or DOCX, max 5 MB)</span>
            </label>
            <input ref={fileInputRef} type="file" accept=".pdf,.docx" onChange={handleCvChange} className="hidden" />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-[#d2d2d7] rounded-xl px-4 py-4 text-sm text-[#6e6e73] hover:border-[#4F46E5] hover:text-[#4F46E5] transition-colors flex items-center justify-center gap-2"
            >
              {cvUploading ? 'Uploading…' : cvFile ? `✓ ${cvFile.name}` : 'Click to upload your CV'}
            </button>
          </div>

          {/* GDPR consent for under-16 */}
          {needsConsent && (
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
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
            type="submit"
            disabled={submitting || cvUploading}
            className="w-full bg-[#4F46E5] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
          >
            {submitting ? 'Submitting…' : 'Submit application & start assessment'}
          </button>
        </form>
      </div>
    </div>
  )
}
