import { createClient as createAuthClient } from '@/lib/supabase/server'
import { createClient } from '@supabase/supabase-js'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import DateRangePicker from '@/components/admin/DateRangePicker'
import UsersTable from '@/components/admin/UsersTable'
import AdminTabs from '@/components/admin/AdminTabs'

export const dynamic = 'force-dynamic'

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

export default async function ActiveUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; to?: string }>
}) {
  const authClient = await createAuthClient()
  const { data: { user } } = await authClient.auth.getUser()
  if (!user) redirect('/auth/login')

  const allowed = (process.env.ADMIN_EMAIL ?? '').split(',').map((e) => e.trim().toLowerCase())
  if (!allowed.includes(user.email?.toLowerCase() ?? '')) redirect('/dashboard')

  const params = await searchParams
  const def = defaultRange()
  const from = params.from ?? def.from
  const to   = params.to   ?? def.to
  const fromISO = from + 'T00:00:00.000Z'
  const toISO   = to   + 'T23:59:59.999Z'

  const db = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )

  const [
    allProfiles,
    activeAssessmentsInRange,
    allAssessmentDates,
    allPersonalityAssessments,
    allChildren,
    allResults,
    allAssessmentTypes,
    allLocationProfiles,
    guestAssessmentsInRange,
    guestPersonalityInRange,
  ] = await Promise.all([
    db.auth.admin.listUsers({ perPage: 1000 }),
    // Assessments started in range, non-guest
    db.from('assessments')
      .select('children(parent_id, student_user_id)')
      .gte('created_at', fromISO)
      .lte('created_at', toISO)
      .not('child_id', 'is', null),
    // All-time assessment dates per parent/student (for last active)
    db.from('assessments')
      .select('created_at, children(parent_id, student_user_id)')
      .not('child_id', 'is', null),
    db.from('personality_assessments').select('parent_id, status, created_at'),
    db.from('children').select('parent_id, student_user_id'),
    db.from('results').select('children(parent_id)'),
    db.from('assessments').select('assessment_type, children(parent_id, student_user_id)'),
    db.from('profiles').select('id, country, city'),
    // Guest assessments in range
    db.from('assessments')
      .select('id, guest_name, guest_token, status, created_at, assessment_type')
      .gte('created_at', fromISO)
      .lte('created_at', toISO)
      .not('guest_token', 'is', null)
      .is('child_id', null),
    db.from('personality_assessments')
      .select('id, guest_name, guest_token, status, created_at')
      .gte('created_at', fromISO)
      .lte('created_at', toISO)
      .not('guest_token', 'is', null)
      .is('child_id', null),
  ])

  const allAuthUsers = (allProfiles as Awaited<ReturnType<typeof db.auth.admin.listUsers>>).data?.users ?? []

  // ── Active user IDs in range ───────────────────────────────────────────────
  const personalityInRange = (allPersonalityAssessments.data ?? []).filter(
    (pa) => pa.created_at >= fromISO && pa.created_at <= toISO,
  )

  const activeUserIdsInRange = new Set<string>()
  for (const a of activeAssessmentsInRange.data ?? []) {
    const child = a.children as unknown as { parent_id: string | null; student_user_id: string | null } | null
    if (child?.parent_id) activeUserIdsInRange.add(child.parent_id)
    if (child?.student_user_id) activeUserIdsInRange.add(child.student_user_id)
  }
  for (const pa of personalityInRange) {
    if (pa.parent_id) activeUserIdsInRange.add(pa.parent_id as string)
  }

  // ── Last assessment date per user (all-time) ───────────────────────────────
  const lastAssessmentDate: Record<string, string> = {}
  for (const a of allAssessmentDates.data ?? []) {
    const child = a.children as unknown as { parent_id: string | null; student_user_id: string | null } | null
    const date = a.created_at as string
    if (!date) continue
    for (const uid of [child?.parent_id, child?.student_user_id].filter(Boolean) as string[]) {
      if (!lastAssessmentDate[uid] || date > lastAssessmentDate[uid]) {
        lastAssessmentDate[uid] = date
      }
    }
  }
  for (const pa of allPersonalityAssessments.data ?? []) {
    const uid = pa.parent_id as string | null
    const date = pa.created_at as string
    if (!uid || !date) continue
    if (!lastAssessmentDate[uid] || date > lastAssessmentDate[uid]) {
      lastAssessmentDate[uid] = date
    }
  }

  // ── Supporting lookups (same pattern as overview) ─────────────────────────
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

  const locationMap: Record<string, { country: string | null; city: string | null }> = {}
  for (const p of allLocationProfiles.data ?? []) {
    locationMap[p.id as string] = { country: p.country as string | null, city: p.city as string | null }
  }

  const assessmentTypesByUser: Record<string, Set<string>> = {}
  for (const a of allAssessmentTypes.data ?? []) {
    const child = a.children as unknown as { parent_id: string | null; student_user_id: string | null } | null
    const type = (a.assessment_type as string) || 'academic'
    for (const uid of [child?.parent_id, child?.student_user_id].filter(Boolean) as string[]) {
      if (!assessmentTypesByUser[uid]) assessmentTypesByUser[uid] = new Set()
      assessmentTypesByUser[uid].add(type)
    }
  }
  for (const pa of allPersonalityAssessments.data ?? []) {
    const pid = pa.parent_id as string | null
    if (!pid) continue
    if (!assessmentTypesByUser[pid]) assessmentTypesByUser[pid] = new Set()
    assessmentTypesByUser[pid].add('personality')
    if (pa.status === 'completed') {
      completedByParent[pid] = (completedByParent[pid] ?? 0) + 1
    }
  }

  // ── Build registered active users ─────────────────────────────────────────
  const registeredActiveUsers = allAuthUsers
    .filter((u) => activeUserIdsInRange.has(u.id))
    .map((u) => {
      const lastAssessment = lastAssessmentDate[u.id]
      const lastSignIn = (u as { last_sign_in_at?: string }).last_sign_in_at ?? null
      const lastActive = [lastAssessment, lastSignIn].filter(Boolean).sort().at(-1) ?? u.created_at
      return {
        id:              u.id,
        email:           u.email ?? '',
        full_name:       (u.user_metadata?.full_name as string | undefined) ?? null,
        created_at:      u.created_at,
        last_active_at:  lastActive,
        children:        childrenByParent[u.id] ?? 0,
        completed:       completedByParent[u.id] ?? 0,
        assessmentTypes: Array.from(assessmentTypesByUser[u.id] ?? []),
        location:        locationMap[u.id] ?? null,
        role: (parentIds.has(u.id) && studentIds.has(u.id)
          ? 'both'
          : parentIds.has(u.id) ? 'parent'
          : studentIds.has(u.id) ? 'student'
          : 'none') as 'parent' | 'student' | 'both' | 'none',
      }
    })

  // ── Build guest rows ───────────────────────────────────────────────────────
  type GuestRow = { id: string; guest_name: string | null; guest_token: string | null; status: string; created_at: string; assessment_type?: string }
  const allGuestRows: GuestRow[] = [
    ...((guestAssessmentsInRange.data ?? []) as GuestRow[]),
    ...((guestPersonalityInRange.data ?? []).map((r) => ({ ...r, assessment_type: 'personality' })) as GuestRow[]),
  ]

  const guestUsers = allGuestRows.map((g) => ({
    id:              g.id,
    email:           '',
    full_name:       g.guest_name ?? null,
    created_at:      g.created_at,
    last_active_at:  g.created_at,
    children:        0,
    completed:       g.status === 'completed' ? 1 : 0,
    assessmentTypes: [g.assessment_type ?? 'academic'],
    location:        null,
    role:            'guest' as const,
  }))

  // ── Merge and sort ─────────────────────────────────────────────────────────
  const activeUsers = [...registeredActiveUsers, ...guestUsers]
    .sort((a, b) => (b.last_active_at ?? '').localeCompare(a.last_active_at ?? ''))

  const periodLabel = `${new Date(fromISO).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })} – ${new Date(toISO).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })}`

  const guestCount = guestUsers.length
  const completedInRange = activeUsers.filter((u) => u.completed > 0).length

  return (
    <main className="px-8 py-10 space-y-6">

      {/* Header + date picker */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold" style={{ color: '#0F172A' }}>Active users</h1>
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
            { label: 'Active users',      value: activeUsers.length,              primary: true  },
            { label: 'Registered',        value: registeredActiveUsers.length,    primary: false },
            { label: 'Guests',            value: guestCount,                      primary: false },
            { label: 'Completed',         value: completedInRange,                primary: false },
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
              <div className="text-[40px] font-extrabold tabular-nums leading-none tracking-tight" style={{ color: '#0F172A' }}>
                {value.toLocaleString()}
              </div>
              <div className="text-xs mt-2 font-medium" style={{ color: '#64748B' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Active users table */}
      <div className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: '#E2E6EF' }}>
        <div className="px-6 py-5 border-b" style={{ borderColor: '#E2E6EF' }}>
          <h2 className="text-sm font-semibold" style={{ color: '#0F172A' }}>Active users</h2>
          <p className="text-xs mt-0.5" style={{ color: '#64748B' }}>
            {activeUsers.length.toLocaleString()} users started an assessment in {periodLabel} · includes guests · sorted by last active
          </p>
        </div>
        <UsersTable
          key={`active-${from}-${to}`}
          users={activeUsers}
          emptyMessage="No assessments started in this period"
        />
      </div>

    </main>
  )
}
