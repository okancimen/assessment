'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

export default function UsersTable({ users: initialUsers }: { users: AdminUser[] }) {
  const router = useRouter()
  const [users, setUsers] = useState(initialUsers)
  const [confirmId, setConfirmId] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function handleDelete(userId: string) {
    setDeletingId(userId)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      })
      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u.id !== userId))
      }
    } finally {
      setDeletingId(null)
      setConfirmId(null)
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#f5f5f7]">
            {['Name', 'Registered', 'Location', 'Assessment', 'Children', 'Completed', ''].map((h, i) => (
              <th key={i} className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              onClick={() => router.push(`/admin/users/${u.id}`)}
              className="border-b border-[#f5f5f7] last:border-0 hover:bg-[#f5f5f7] transition-colors cursor-pointer"
            >
              <td className="px-5 py-3 font-medium text-[#1d1d1f] text-xs whitespace-nowrap">
                {u.full_name || <span className="text-[#d2d2d7]">—</span>}
              </td>
              <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">
                {new Date(u.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </td>
              <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">
                {u.location?.city && u.location?.country
                  ? `${u.location.city}, ${u.location.country}`
                  : u.location?.country ?? <span className="text-[#d2d2d7]">—</span>}
              </td>
              <td className="px-5 py-3">
                <div className="flex flex-wrap gap-1">
                  {u.assessmentTypes.length === 0 ? (
                    <span className="text-[#d2d2d7] text-xs">—</span>
                  ) : u.assessmentTypes.map((t) => (
                    <span key={t} className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      t === 'internship'   ? 'bg-purple-100 text-purple-700' :
                      t === 'personality'  ? 'bg-emerald-100 text-emerald-700' :
                      'bg-[#eef2ff] text-[#4F46E5]'
                    }`}>
                      {t === 'internship' ? 'Internship' : t === 'personality' ? 'Personality' : 'Academic'}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-5 py-3 text-xs tabular-nums text-[#1d1d1f] text-center">
                {u.children > 0 ? u.children : <span className="text-[#d2d2d7]">0</span>}
              </td>
              <td className="px-5 py-3 text-xs tabular-nums text-center">
                {u.completed > 0
                  ? <span className="font-semibold text-[#22C55E]">{u.completed}</span>
                  : <span className="text-[#d2d2d7]">0</span>}
              </td>
              <td className="px-5 py-3 text-right" onClick={(e) => e.stopPropagation()}>
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
                      className="text-[10px] font-semibold text-[#6e6e73] hover:text-[#1d1d1f] px-2.5 py-1 rounded-full border border-[#d2d2d7] transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmId(u.id)}
                    className="text-[#d2d2d7] hover:text-red-500 transition-colors p-1 rounded"
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
          {users.length === 0 && (
            <tr>
              <td colSpan={7} className="px-5 py-10 text-center text-xs text-[#6e6e73]">No users registered yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
