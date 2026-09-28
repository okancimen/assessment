'use client'

import { useState } from 'react'
import { getDashboardI18n } from '@/lib/dashboard-i18n'

export default function InviteInternshipButton({ locale }: { locale?: string }) {
  const t = getDashboardI18n(locale)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)

  function reset() {
    setName(''); setEmail(''); setDob(''); setResult(null)
  }

  function close() {
    setOpen(false); reset()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch('/api/internship/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ student_name: name, student_email: email, date_of_birth: dob }),
      })
      const data = await res.json()
      if (!res.ok) {
        setResult({ ok: false, message: data.error ?? t.inviteError })
      } else if (data.already_existed) {
        setResult({ ok: true, message: t.inviteAlreadyLinked })
      } else if (data.linked) {
        setResult({ ok: true, message: t.inviteLinked(name) })
      } else {
        setResult({ ok: true, message: t.inviteSent(email) })
      }
    } catch {
      setResult({ ok: false, message: t.inviteNetworkError })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-sm text-[#4F46E5] font-semibold border border-[#4F46E5] px-4 py-2 rounded-full hover:bg-[#eef2ff] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        {t.inviteBtn}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 space-y-5" dir={t.dir}>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-bold text-[#1d1d1f]">{t.inviteTitle}</h2>
                <p className="text-xs text-[#6e6e73] mt-1">{t.inviteSubtitle}</p>
              </div>
              <button onClick={close} className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors p-1 -mt-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {result ? (
              <div className="space-y-4">
                <div className={`rounded-2xl p-4 text-sm ${result.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-600'}`}>
                  {result.message}
                </div>
                <div className="flex gap-3">
                  {result.ok ? (
                    <button onClick={close} className="flex-1 bg-[#4F46E5] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                      {t.inviteDone}
                    </button>
                  ) : (
                    <>
                      <button onClick={() => setResult(null)} className="flex-1 bg-[#4F46E5] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#4338CA] transition-colors">
                        {t.inviteTryAgain}
                      </button>
                      <button onClick={close} className="flex-1 border border-[#d2d2d7] text-[#6e6e73] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f5f5f7] transition-colors">
                        {t.inviteCancel}
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">{t.inviteNameLabel}</label>
                  <input
                    required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder={t.inviteNamePlaceholder}
                    className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">{t.inviteEmailLabel}</label>
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.inviteEmailPlaceholder}
                    className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-1.5">{t.inviteDobLabel}</label>
                  <input
                    type="date" required value={dob} onChange={(e) => setDob(e.target.value)}
                    className="w-full border border-[#d2d2d7] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
                  />
                </div>
                <div className="flex gap-3 pt-1">
                  <button
                    type="submit" disabled={loading}
                    className="flex-1 bg-[#4F46E5] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#4338CA] disabled:opacity-60 transition-colors"
                  >
                    {loading ? t.inviteSending : t.inviteSend}
                  </button>
                  <button type="button" onClick={close} className="flex-1 border border-[#d2d2d7] text-[#6e6e73] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#f5f5f7] transition-colors">
                    {t.inviteCancel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
