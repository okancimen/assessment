'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'lucide-react'

export interface AdminUser {
  id: string
  email: string
  full_name: string | null
  created_at: string
  children: number
  completed: number
  assessmentTypes: string[]
  location: { country: string | null; city: string | null } | null
  role: 'parent' | 'student' | 'both' | 'none'
}

function Avatar({ name, email }: { name: string | null; email: string }) {
  const initials = name
    ? name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
    : email[0].toUpperCase()
  let h = 0
  for (let i = 0; i < email.length; i++) h = (h * 31 + email.charCodeAt(i)) % 360
  return (
    <div
      className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
      style={{ backgroundColor: `hsl(${h}, 45%, 40%)` }}
    >
      {initials}
    </div>
  )
}

export default function UsersTable({ users: initialUsers, emptyMessage = 'No users registered yet' }: { users: AdminUser[]; emptyMessage?: string }) {
  const router = useRouter()
  const [users, setUsers] = useState(initialUsers)
  const [query, setQuery] = useState('')
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const filtered = query.trim()
    ? users.filter((u) =>
        u.email.toLowerCase().includes(query.toLowerCase()) ||
        (u.full_name ?? '').toLowerCase().includes(query.toLowerCase()),
      )
    : users

  async function handleDelete(userId: string) {
    setDeletingId(userId)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      })
      if (res.ok) setUsers((prev) => prev.filter((u) => u.id !== userId))
    } finally {
      setDeletingId(null)
      setConfirmId(null)
    }
  }

  return (
    <div>
      {/* Search */}
      <div className="px-5 py-3 border-b" style={{ borderColor: '#E2E6EF' }}>
        <div className="relative max-w-xs">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#94A3B8' }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or email"
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border outline-none"
            style={{ borderColor: '#E2E6EF', backgroundColor: '#F8FAFC', color: '#0F172A' }}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: '#E2E6EF' }}>
              {['User', 'Registered', 'Location', 'Assessment types', 'Children', 'Completed', ''].map((h, i) => (
                <th
                  key={i}
                  className="text-left px-5 py-3 text-xs font-medium whitespace-nowrap"
                  style={{ color: '#64748B' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr
                key={u.id}
                onClick={() => router.push(`/admin/users/${u.id}`)}
                className="border-b last:border-0 cursor-pointer transition-colors"
                style={{ borderColor: '#E2E6EF' }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#F8FAFC')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '')}
              >
                <td className="px-5 py-3.5 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <Avatar name={u.full_name} email={u.email} />
                    <div>
                      <div className="text-xs font-medium" style={{ color: '#0F172A' }}>
                        {u.full_name || <span style={{ color: '#CBD5E1' }}>No name</span>}
                      </div>
                      <div className="text-[11px] mt-0.5" style={{ color: '#94A3B8' }}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-xs whitespace-nowrap" style={{ color: '#64748B' }}>
                  {new Date(u.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-5 py-3.5 text-xs whitespace-nowrap" style={{ color: '#64748B' }}>
                  {u.location?.city && u.location?.country
                    ? `${u.location.city}, ${u.location.country}`
                    : u.location?.country ?? <span style={{ color: '#CBD5E1' }}>—</span>}
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex flex-wrap gap-1">
                    {u.assessmentTypes.length === 0 ? (
                      <span className="text-xs" style={{ color: '#CBD5E1' }}>—</span>
                    ) : u.assessmentTypes.map((t) => (
                      <span
                        key={t}
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                          t === 'internship'  ? 'bg-purple-50 text-purple-600' :
                          t === 'personality' ? 'bg-emerald-50 text-emerald-600' :
                          'bg-blue-50 text-blue-600'
                        }`}
                      >
                        {t === 'internship' ? 'Internship' : t === 'personality' ? 'Personality' : 'Academic'}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-5 py-3.5 text-xs tabular-nums text-center" style={{ color: '#0F172A' }}>
                  {u.children > 0 ? u.children : <span style={{ color: '#CBD5E1' }}>0</span>}
                </td>
                <td className="px-5 py-3.5 text-xs tabular-nums text-center">
                  {u.completed > 0
                    ? <span className="font-semibold" style={{ color: '#16A34A' }}>{u.completed}</span>
                    : <span style={{ color: '#CBD5E1' }}>0</span>}
                </td>
                <td className="px-5 py-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                  {confirmId === u.id ? (
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDelete(u.id)}
                        disabled={deletingId === u.id}
                        className="text-[10px] font-semibold text-white bg-red-500 hover:bg-red-600 px-2.5 py-1 rounded-full transition-colors disabled:opacity-50"
                      >
                        {deletingId === u.id ? 'Deleting…' : 'Confirm'}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="text-[10px] font-semibold hover:opacity-70 px-2.5 py-1 rounded-full border transition-colors"
                        style={{ color: '#64748B', borderColor: '#E2E6EF' }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmId(u.id)}
                      className="p-1 rounded transition-colors"
                      style={{ color: '#CBD5E1' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = '#EF4444')}
                      onMouseOut={(e) => (e.currentTarget.style.color = '#CBD5E1')}
                      title="Delete user"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                        <path d="M10 11v6M14 11v6"/>
                        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                      </svg>
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-xs" style={{ color: '#94A3B8' }}>
                  {query ? `No users match "${query}"` : emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
