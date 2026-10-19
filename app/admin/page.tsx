import { createClient as createAuthClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import DateRangePicker from '@/components/admin/DateRangePicker'
import UsersTable from '@/components/admin/UsersTable'
import AdminTabs from '@/components/admin/AdminTabs'
import { AdminGrowthChart, AdminAssessmentsChart, AdminFunnelChart } from '@/components/admin/AdminCharts'
import type { DailyPoint } from '@/components/admin/GrowthLineChart'

export const dynamic = 'force-dynamic'

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
    allProfiles,
    childrenRange,
    assessmentsRange,
    resultsRange,
    funnelChildrenRows,
    funnelStartedRows,
    funnelCompletedRows,
    allChildren,
    allResults,
    allAssessmentTypes,
    allLocationProfiles,
    allPersonalityAssessments,
    guestAcademicConv,
    guestPersonalityConv,
    activeAssessmentsInRange,
  ] = await Promise.all([
    // All users from auth.users (used for both stats and table)
    db.auth.admin.listUsers({ perPage: 1000 }),
    db.from('children').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('assessments').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('results').select('created_at').gte('created_at', fromISO).lte('created_at', toISO),
    // Funnel: distinct parent counts
    db.from('children').select('parent_id').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('assessments').select('children(parent_id)').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('results').select('children(parent_id)').gte('created_at', fromISO).lte('created_at', toISO),
    db.from('children').select('parent_id, student_user_id'),
    db.from('results').select('children(parent_id)'),
    // Assessment types per parent
    db.from('assessments').select('assessment_type, children(parent_id, student_user_id)'),
    db.from('profiles').select('id, country, city'),
    // Personality assessments
    db.from('personality_assessments').select('parent_id, status, created_at'),
    // Guest-conversion funnel (all-time). A guest row keeps guest_name even after
    // it's claimed; claimed = child_id set (token nulled). Guest-only = guest_token present.
    db.from('assessments')
      .select('status, guest_token, child_id, guest_name')
      .not('guest_name', 'is', null),
    db.from('personality_assessments')
      .select('status, guest_token, child_id, guest_name')
      .not('guest_name', 'is', null),
    // Active registered users: assessments started in range, excluding guests
    db.from('assessments')
      .select('children(parent_id, student_user_id)')
      .gte('created_at', fromISO)
      .lte('created_at', toISO)
      .not('child_id', 'is', null),
  ])

  // Filter auth users by date range for stats
  const allAuthUsers = (allProfiles as Awaited<ReturnType<typeof db.auth.admin.listUsers>>).data?.users ?? []
  const usersInRange = allAuthUsers.filter((u) => u.created_at >= fromISO && u.created_at <= toISO)

  // Growth totals
  const personalityInRange = (allPersonalityAssessments.data ?? []).filter(
    (pa) => pa.created_at >= fromISO && pa.created_at <= toISO,
  )
  const newUsers      = usersInRange.length
  const newChildren   = childrenRange.data?.length ?? 0
  const newStarted    = (assessmentsRange.data?.length ?? 0) + personalityInRange.length
  const newCompleted  = (resultsRange.data?.length ?? 0) + personalityInRange.filter((pa) => pa.status === 'completed').length

  // Daily chart data (users from auth.users)
  const usersByDay      = groupByDay(usersInRange.map((u) => ({ created_at: u.created_at })))
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
  // Location map from profiles
  const locationMap: Record<string, { country: string | null; city: string | null }> = {}
  for (const p of (allLocationProfiles.data ?? [])) {
    locationMap[p.id as string] = { country: p.country as string | null, city: p.city as string | null }
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
  for (const pa of (allPersonalityAssessments.data ?? [])) {
    const pid = pa.parent_id as string | null
    if (!pid) continue
    if (!assessmentTypesByUser[pid]) assessmentTypesByUser[pid] = new Set()
    assessmentTypesByUser[pid].add('personality')
    if (pa.status === 'completed') {
      completedByParent[pid] = (completedByParent[pid] ?? 0) + 1
    }
  }

  const registeredUsers = usersInRange
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((u) => ({
      id:           u.id,
      email:        u.email ?? '',
      full_name:    (u.user_metadata?.full_name as string | undefined) ?? null,
      created_at:   u.created_at,
      children:     childrenByParent[u.id] ?? 0,
      completed:    completedByParent[u.id] ?? 0,
      assessmentTypes: Array.from(assessmentTypesByUser[u.id] ?? []),
      location: locationMap[u.id] ?? null,
      role: (parentIds.has(u.id) && studentIds.has(u.id)
        ? 'both'
        : parentIds.has(u.id) ? 'parent'
        : studentIds.has(u.id) ? 'student'
        : 'none') as 'parent' | 'student' | 'both' | 'none',
    }))

  // ── Active users (started an assessment in range, any signup date) ────────
  const activeUserIdsInRange = new Set<string>()
  for (const a of activeAssessmentsInRange.data ?? []) {
    const child = a.children as unknown as { parent_id: string | null; student_user_id: string | null } | null
    if (child?.parent_id) activeUserIdsInRange.add(child.parent_id)
    if (child?.student_user_id) activeUserIdsInRange.add(child.student_user_id)
  }
  for (const pa of personalityInRange) {
    if (pa.parent_id) activeUserIdsInRange.add(pa.parent_id as string)
  }

  const activeUsers = allAuthUsers
    .filter((u) => activeUserIdsInRange.has(u.id))
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((u) => ({
      id:           u.id,
      email:        u.email ?? '',
      full_name:    (u.user_metadata?.full_name as string | undefined) ?? null,
      created_at:   u.created_at,
      children:     childrenByParent[u.id] ?? 0,
      completed:    completedByParent[u.id] ?? 0,
      assessmentTypes: Array.from(assessmentTypesByUser[u.id] ?? []),
      location: locationMap[u.id] ?? null,
      role: (parentIds.has(u.id) && studentIds.has(u.id)
        ? 'both'
        : parentIds.has(u.id) ? 'parent'
        : studentIds.has(u.id) ? 'student'
        : 'none') as 'parent' | 'student' | 'both' | 'none',
    }))

  // ── Guest-conversion funnel (all-time) ─────────────────────────────────────
  type GuestConvRow = { status: string; guest_token: string | null; child_id: string | null; guest_name: string | null }
  const guestRows: GuestConvRow[] = [
    ...((guestAcademicConv.data ?? []) as GuestConvRow[]),
    ...((guestPersonalityConv.data ?? []) as GuestConvRow[]),
  ]
  const guestStarted   = guestRows.length
  const guestCompleted = guestRows.filter((r) => r.status === 'completed').length
  const guestClaimed   = guestRows.filter((r) => r.child_id != null).length // claimed → account
  const guestConvRate  = guestStarted > 0 ? Math.round((guestClaimed / guestStarted) * 100) : 0

  const periodLabel =`${new Date(fromISO).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })} – ${new Date(toISO).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}`

  return (
    <main className="px-8 py-10 space-y-6">

      {/* Header + date picker */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold" style={{ color: '#0F172A' }}>Overview</h1>
          <p className="text-sm mt-0.5" style={{ color: '#64748B' }}>{periodLabel}</p>
        </div>
        <Suspense>
          <DateRangePicker from={from} to={to} />
        </Suspense>
      </div>

      <AdminTabs />

      {/* Metrics strip */}
      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E2E6EF' }}>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {[
            { label: 'New registrations',    value: newUsers,     primary: true  },
            { label: 'Children added',        value: newChildren,  primary: false },
            { label: 'Assessments started',   value: newStarted,   primary: false },
            { label: 'Assessments completed', value: newCompleted, primary: false },
          ].map(({ label, value, primary }, i) => (
            <div
              key={label}
              className={[
                'px-6 py-5 relative',
                i < 3 ? 'border-r border-[#E2E6EF]' : '',
                i < 2 ? 'border-b border-[#E2E6EF] sm:border-b-0' : '',
              ].filter(Boolean).join(' ')}
            >
              {primary && (
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#C9883A' }} />
              )}
              <div
                className="text-[40px] font-extrabold tabular-nums leading-none tracking-tight"
                style={{ color: '#0F172A' }}
              >
                {value.toLocaleString()}
              </div>
              <div className="text-xs mt-2 font-medium" style={{ color: '#64748B' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest-conversion funnel (all-time) */}
      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E2E6EF' }}>
        <div className="px-6 py-5 border-b flex items-center justify-between gap-4" style={{ borderColor: '#E2E6EF' }}>
          <div>
            <h2 className="text-sm font-semibold" style={{ color: '#0F172A' }}>Guest conversion</h2>
            <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>No-account assessments → registered account · all time</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold tabular-nums" style={{ color: '#C9883A' }}>{guestConvRate}%</div>
            <div className="text-[11px]" style={{ color: '#64748B' }}>claim rate</div>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x" style={{ borderColor: '#E2E6EF' }}>
          {[
            { label: 'Guests started', value: guestStarted },
            { label: 'Completed', value: guestCompleted },
            { label: 'Claimed (→ account)', value: guestClaimed },
          ].map(({ label, value }) => (
            <div key={label} className="px-6 py-4">
              <div className="text-xl font-bold tabular-nums" style={{ color: '#0F172A' }}>{value.toLocaleString()}</div>
              <div className="text-xs mt-1" style={{ color: '#64748B' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Growth chart + funnel side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-xl border p-6" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold mb-4" style={{ color: '#0F172A' }}>Daily registrations</h2>
          <AdminGrowthChart data={dailyData} />
        </div>
        <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold mb-1" style={{ color: '#0F172A' }}>Conversion funnel</h2>
          <p className="text-xs mb-5" style={{ color: '#64748B' }}>Unique users at each step, within period</p>
          <AdminFunnelChart steps={funnelSteps} />
        </div>
      </div>

      {/* Assessments chart */}
      <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#E2E6EF' }}>
        <h2 className="text-sm font-semibold mb-4" style={{ color: '#0F172A' }}>Assessments — started vs completed</h2>
        <AdminAssessmentsChart data={dailyData} />
      </div>

      {/* New registrations table */}
      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E2E6EF' }}>
        <div className="px-6 py-5 border-b" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold" style={{ color: '#0F172A' }}>New registrations</h2>
          <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>{registeredUsers.length.toLocaleString()} registered in {periodLabel}</p>
        </div>
        <UsersTable key={`reg-${from}-${to}`} users={registeredUsers} />
      </div>


    </main>
  )
}
