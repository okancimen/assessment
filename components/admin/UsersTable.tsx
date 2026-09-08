'use client'

import { useRouter } from 'next/navigation'

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

export default function UsersTable({ users }: { users: AdminUser[] }) {
  const router = useRouter()

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#f5f5f7]">
            {['Name', 'Email', 'Registered', 'Location', 'Role', 'Assessment', 'Children', 'Completed'].map((h) => (
              <th key={h} className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide whitespace-nowrap">
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
              <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">{u.email}</td>
              <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">
                {new Date(u.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </td>
              <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">
                {u.location?.city && u.location?.country
                  ? `${u.location.city}, ${u.location.country}`
                  : u.location?.country ?? <span className="text-[#d2d2d7]">—</span>}
              </td>
              <td className="px-5 py-3">
                {u.role === 'parent' && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 text-blue-700">Parent</span>}
                {u.role === 'student' && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">Student</span>}
                {u.role === 'both' && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700">Both</span>}
                {u.role === 'none' && <span className="text-[#d2d2d7] text-xs">—</span>}
              </td>
              <td className="px-5 py-3">
                <div className="flex flex-wrap gap-1">
                  {u.assessmentTypes.length === 0 ? (
                    <span className="text-[#d2d2d7] text-xs">—</span>
                  ) : u.assessmentTypes.map((t) => (
                    <span key={t} className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                      t === 'internship' ? 'bg-purple-100 text-purple-700' : 'bg-[#eef2ff] text-[#4F46E5]'
                    }`}>
                      {t === 'internship' ? 'Internship' : 'Academic'}
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
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan={8} className="px-5 py-10 text-center text-xs text-[#6e6e73]">No users registered yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
