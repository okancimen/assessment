'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

interface Props {
  initialName: string
  email: string
}

export default function ProfileForm({ initialName, email }: Props) {
  const router = useRouter()
  const supabase = createClient()

  const [name, setName] = useState(initialName)
  const [nameSaving, setNameSaving] = useState(false)
  const [nameMsg, setNameMsg] = useState<{ ok: boolean; text: string } | null>(null)

  const [currentPw, setCurrentPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [pwSaving, setPwSaving] = useState(false)
  const [pwMsg, setPwMsg] = useState<{ ok: boolean; text: string } | null>(null)

  async function saveName(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    setNameSaving(true)
    setNameMsg(null)

    const trimmed = name.trim()
    const { error: authErr } = await supabase.auth.updateUser({ data: { full_name: trimmed } })
    if (authErr) {
      setNameMsg({ ok: false, text: authErr.message })
      setNameSaving(false)
      return
    }
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await supabase.from('profiles').upsert({ id: user.id, full_name: trimmed, email }, { onConflict: 'id' })
    }
    setNameMsg({ ok: true, text: 'Name updated.' })
    setNameSaving(false)
    router.refresh()
  }

  async function savePassword(e: React.FormEvent) {
    e.preventDefault()
    setPwMsg(null)
    if (newPw.length < 8) {
      setPwMsg({ ok: false, text: 'Password must be at least 8 characters.' })
      return
    }
    if (newPw !== confirmPw) {
      setPwMsg({ ok: false, text: 'Passwords do not match.' })
      return
    }
    setPwSaving(true)

    // Re-authenticate with current password first
    const { error: signInErr } = await supabase.auth.signInWithPassword({ email, password: currentPw })
    if (signInErr) {
      setPwMsg({ ok: false, text: 'Current password is incorrect.' })
      setPwSaving(false)
      return
    }

    const { error } = await supabase.auth.updateUser({ password: newPw })
    if (error) {
      setPwMsg({ ok: false, text: error.message })
    } else {
      setPwMsg({ ok: true, text: 'Password updated.' })
      setCurrentPw('')
      setNewPw('')
      setConfirmPw('')
    }
    setPwSaving(false)
  }

  return (
    <div className="space-y-6">

      {/* Name */}
      <form onSubmit={saveName} className="bg-white rounded-2xl border p-6 space-y-4" style={{ borderColor: '#E8ECF2' }}>
        <h2 className="text-sm font-semibold" style={{ color: '#1E293B' }}>Display name</h2>
        <div className="space-y-1.5">
          <label className="text-xs font-medium" style={{ color: '#64748B' }}>Full name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
            style={{ borderColor: '#CBD5E1', color: '#1E293B' }}
          />
        </div>
        <div className="flex items-center justify-between">
          {nameMsg && (
            <p className={`text-xs font-medium ${nameMsg.ok ? 'text-emerald-600' : 'text-red-600'}`}>{nameMsg.text}</p>
          )}
          <div className="ml-auto">
            <button
              type="submit"
              disabled={nameSaving || !name.trim()}
              className="bg-[#4F46E5] text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-[#4338CA] disabled:opacity-50 transition-colors"
            >
              {nameSaving ? 'Saving…' : 'Save name'}
            </button>
          </div>
        </div>
      </form>

      {/* Email (read-only) */}
      <div className="bg-white rounded-2xl border p-6 space-y-4" style={{ borderColor: '#E8ECF2' }}>
        <h2 className="text-sm font-semibold" style={{ color: '#1E293B' }}>Email address</h2>
        <div className="space-y-1.5">
          <label className="text-xs font-medium" style={{ color: '#64748B' }}>Email</label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full border rounded-xl px-3.5 py-2.5 text-sm bg-[#F8FAFC] cursor-not-allowed"
            style={{ borderColor: '#E2E8F0', color: '#94A3B8' }}
          />
        </div>
        <p className="text-xs" style={{ color: '#94A3B8' }}>Email changes require contacting support.</p>
      </div>

      {/* Password */}
      <form onSubmit={savePassword} className="bg-white rounded-2xl border p-6 space-y-4" style={{ borderColor: '#E8ECF2' }}>
        <h2 className="text-sm font-semibold" style={{ color: '#1E293B' }}>Change password</h2>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium" style={{ color: '#64748B' }}>Current password</label>
            <input
              type="password"
              value={currentPw}
              onChange={e => setCurrentPw(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
              style={{ borderColor: '#CBD5E1', color: '#1E293B' }}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium" style={{ color: '#64748B' }}>New password</label>
            <input
              type="password"
              value={newPw}
              onChange={e => setNewPw(e.target.value)}
              required
              minLength={8}
              autoComplete="new-password"
              className="w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
              style={{ borderColor: '#CBD5E1', color: '#1E293B' }}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium" style={{ color: '#64748B' }}>Confirm new password</label>
            <input
              type="password"
              value={confirmPw}
              onChange={e => setConfirmPw(e.target.value)}
              required
              autoComplete="new-password"
              className="w-full border rounded-xl px-3.5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent transition-all"
              style={{ borderColor: '#CBD5E1', color: '#1E293B' }}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {pwMsg && (
            <p className={`text-xs font-medium ${pwMsg.ok ? 'text-emerald-600' : 'text-red-600'}`}>{pwMsg.text}</p>
          )}
          <div className="ml-auto">
            <button
              type="submit"
              disabled={pwSaving || !currentPw || !newPw || !confirmPw}
              className="bg-[#1E293B] text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-[#0F172A] disabled:opacity-50 transition-colors"
            >
              {pwSaving ? 'Updating…' : 'Update password'}
            </button>
          </div>
        </div>
      </form>

    </div>
  )
}
