import { createClient as createAuthClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import Navbar from '@/components/dashboard/Navbar'
import DateRangePicker from '@/components/admin/DateRangePicker'
import GrowthLineChart from '@/components/admin/GrowthLineChart'
import AssessmentsBarChart from '@/components/admin/AssessmentsBarChart'
import FunnelChart from '@/components/admin/FunnelChart'
import type { DailyPoint } from '@/components/admin/GrowthLineChart'

// ── Helpers ────────────────────────────────────────────────────────────────

function toDateStr(d: Date) {
  return d.toISOString().slice(0, 10)
}

function defaultRange() {
  const now = new Date()
  return {
    to: toDateStr(now),
    from: toDateStr(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)),
  }
}

function groupByDay(rows: { created_at: string }[]): Record<string, number> {
  const counts: Record<string, number> = {}
  for (const row of rows) {
    const day = row.created_at.slice(0, 10)
    counts[day] = (counts[day] || 0) + 1
  }
  return counts
}

function buildDailyData(
  from: string,
  to: string,
  usersByDay: Record<string, number>,
  startedByDay: Record<string, number>,
  completedByDay: Record<string, number>,
): DailyPoint[] {
  const result: DailyPoint[] = []
  const cursor = new Date(from + 'T00:00:00Z')
  const end    = new Date(to   + 'T00:00:00Z')
  while (cursor <= end) {
    const dateStr = cursor.toISOString().slice(0, 10)
    const d = new Date(dateStr)
    const label = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' })
    result.push({
      date: dateStr,
      label,
      users: usersByDay[dateStr] ?? 0,
      started: startedByDay[dateStr] ?? 0,
      completed: completedByDay[dateStr] ?? 0,
    })
    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }
  return result
}

function distinctCount(rows: { parent_id?: string | null }[]) {
  const ids = new Set(rows.map((r) => r.parent_id).filter(Boolean))
  return ids.size
}

// ── Page ──────────────────────────────────────────────────────────────────

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>
}) {
  // Auth check — regular Supabase client (uses session cookie)
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) redirect('/auth/login')

  const allowed = (process.env.ADMIN_EMAIL ?? '').split(',').map((e) => e.trim().toLowerCase())
  if (!allowed.includes(user.email?.toLowerCase() ?? '')) redirect('/dashboard')

  // Date range
  const params = await searchParams
  const def = defaultRange()
  const from = params.from ?? def.from
  const to   = params.to   ?? def.to
  const fromISO = from + 'T00:00:00.000Z'
  const toISO   = to   + 'T23:59:59.999Z'

  // Service-role client — bypasses RLS for cross-user queries
  const db = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )

  // Fetch all data in parallel
  const [
    profilesRange,
    childrenRange,
    assessmentsRange,
    resultsRange,
    funnelChildrenRows,
    funnelStartedRows,
    funnelCompletedRows,
    allProfiles,
    allChildren,
    allResults,
    allAssessmentTypes,
  ] = await Promise.all([
    // Daily breakdown rows (for charts)
    db.from('profiles').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('children').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('assessments').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('results').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    // Funnel: distinct parent counts
    db.from('children').select('parent_id').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('assessments').select('children(parent_id)').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('results').select('children(parent_id)').gte('created_at', fromISO).lte('created_at', toISO),
    // Registered users table (all-time, from auth.users directly)
    db.auth.admin.listUsers({ perPage: 1000 }),
    db.from('children').select('parent_id, student_user_id'),
    db.from('results').select('children(parent_id)'),
    // Assessment types per parent
    db.from('assessments').select('assessment_type, children(parent_id, student_user_id)'),
  ])

  // Growth totals
  const newUsers      = profilesRange.data?.length ?? 0
  const newChildren   = childrenRange.data?.length ?? 0
  const newStarted    = assessmentsRange.data?.length ?? 0
  const newCompleted  = resultsRange.data?.length ?? 0

  // Daily chart data
  const usersByDay      = groupByDay(profilesRange.data    ?? [])
  const startedByDay    = groupByDay(assessmentsRange.data ?? [])
  const completedByDay  = groupByDay(resultsRange.data     ?? [])
  const dailyData = buildDailyData(from, to, usersByDay, startedByDay, completedByDay)

  // Funnel distinct parent counts
  const funnelRegistered  = newUsers
  const funnelAddedChild  = distinctCount(funnelChildrenRows.data ?? [])
  const funnelStartedF    = distinctCount(
    (funnelStartedRows.data ?? []).map((r) => ({
      parent_id: ((r.children as unknown as { parent_id: string } | null)?.parent_id) ?? null,
    })),
  )
  const funnelCompletedF  = distinctCount(
    (funnelCompletedRows.data ?? []).map((r) => ({
      parent_id: ((r.children as unknown as { parent_id: string } | null)?.parent_id) ?? null,
    })),
  )

  const funnelSteps = [
    { label: 'Registered',          count: funnelRegistered, color: '#4F46E5' },
    { label: 'Added a child',        count: funnelAddedChild, color: '#0D9488' },
    { label: 'Started assessment',   count: funnelStartedF,   color: '#7C3AED' },
    { label: 'Completed assessment', count: funnelCompletedF, color: '#22C55E' },
  ]

  // Registered users table data
  const childrenByParent: Record<string, number> = {}
  const parentIds = new Set<string>()
  const studentIds = new Set<string>()
  for (const c of allChildren.data ?? []) {
    const pid = c.parent_id as string
    childrenByParent[pid] = (childrenByParent[pid] ?? 0) + 1
    if (pid) parentIds.add(pid)
    if (c.student_user_id) studentIds.add(c.student_user_id as string)
  }
  const completedByParent: Record<string, number> = {}
  for (const r of allResults.data ?? []) {
    const pid = ((r.children as unknown as { parent_id: string } | null)?.parent_id)
    if (pid) completedByParent[pid] = (completedByParent[pid] ?? 0) + 1
  }
  // Assessment types per user (parent or self-registered student)
  const assessmentTypesByUser: Record<string, Set<string>> = {}
  for (const a of (allAssessmentTypes.data ?? [])) {
    const child = a.children as unknown as { parent_id: string | null; student_user_id: string | null } | null
    const type = (a.assessment_type as string) || 'academic'
    const uids = [child?.parent_id, child?.student_user_id].filter(Boolean) as string[]
    for (const uid of uids) {
      if (!assessmentTypesByUser[uid]) assessmentTypesByUser[uid] = new Set()
      assessmentTypesByUser[uid].add(type)
    }
  }

  const authUsers = (allProfiles as Awaited<ReturnType<typeof db.auth.admin.listUsers>>).data?.users ?? []
  const registeredUsers = authUsers
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((u) => ({
      id:           u.id,
      email:        u.email ?? '',
      full_name:    (u.user_metadata?.full_name as string | undefined) ?? null,
      created_at:   u.created_at,
      children:     childrenByParent[u.id] ?? 0,
      completed:    completedByParent[u.id] ?? 0,
      assessmentTypes: Array.from(assessmentTypesByUser[u.id] ?? []),
      role: parentIds.has(u.id) && studentIds.has(u.id)
        ? 'both'
        : parentIds.has(u.id) ? 'parent'
        : studentIds.has(u.id) ? 'student'
        : 'none',
    }))

  const periodLabel = `${new Date(fromISO).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })} – ${new Date(toISO).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}`

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Platform statistics</h1>
            <p className="text-sm text-[#6e6e73] mt-0.5">{periodLabel}</p>
          </div>
        </div>

        {/* Date picker */}
        <Suspense>
          <DateRangePicker from={from} to={to} />
        </Suspense>

        {/* Growth summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'New registrations', value: newUsers,     color: '#4F46E5' },
            { label: 'Children added',    value: newChildren,  color: '#0D9488' },
            { label: 'Assessments started',  value: newStarted,   color: '#7C3AED' },
            { label: 'Assessments completed',value: newCompleted, color: '#22C55E' },
          ].map(({ label, value, color }) => (
            <div key={label} className="bg-white rounded-3xl border border-[#d2d2d7] p-5">
              <div className="text-3xl font-extrabold tabular-nums" style={{ color }}>
                {value.toLocaleString()}
              </div>
              <div className="text-xs text-[#6e6e73] mt-1 font-medium leading-tight">{label}</div>
            </div>
          ))}
        </div>

        {/* Line chart — daily new users */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
          <h2 className="text-sm font-semibold text-[#1d1d1f] mb-4">Daily new registrations</h2>
          <GrowthLineChart data={dailyData} />
        </div>

        {/* Bar chart — assessments */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
          <h2 className="text-sm font-semibold text-[#1d1d1f] mb-4">Daily assessments — started vs completed</h2>
          <AssessmentsBarChart data={dailyData} />
        </div>

        {/* Funnel */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
          <h2 className="text-sm font-semibold text-[#1d1d1f] mb-1">Conversion funnel</h2>
          <p className="text-xs text-[#6e6e73] mb-5">Unique users at each step within the selected period</p>
          <FunnelChart steps={funnelSteps} />
        </div>

        {/* Registered users */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#f5f5f7]">
            <h2 className="text-sm font-semibold text-[#1d1d1f]">Registered users</h2>
            <p className="text-xs text-[#6e6e73] mt-0.5">{registeredUsers.length.toLocaleString()} total — all time</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#f5f5f7]">
                  {['Name', 'Email', 'Registered', 'Role', 'Assessment', 'Children', 'Completed'].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {registeredUsers.map((u) => (
                  <tr key={u.id} className="border-b border-[#f5f5f7] last:border-0 hover:bg-[#f5f5f7] transition-colors">
                    <td className="px-5 py-3 font-medium text-[#1d1d1f] text-xs whitespace-nowrap">
                      {u.full_name || <span className="text-[#d2d2d7]">—</span>}
                    </td>
                    <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">{u.email}</td>
                    <td className="px-5 py-3 text-xs text-[#6e6e73] whitespace-nowrap">
                      {new Date(u.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
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
                            t === 'internship'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-[#eef2ff] text-[#4F46E5]'
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
                {registeredUsers.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-5 py-10 text-center text-xs text-[#6e6e73]">No users registered yet</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}
