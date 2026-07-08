/**
 * Deletes all auth users registered before CUTOFF, except KEEP_EMAIL.
 * Cascades: profiles, children, assessments, sessions, questions, results,
 * internship_profiles — all via FK ON DELETE CASCADE.
 * Exception: children.student_user_id has no cascade, so we NULL it first.
 *
 * Usage:
 *   npx tsx scripts/delete-old-users.ts           → dry run (safe, no changes)
 *   npx tsx scripts/delete-old-users.ts --execute → actually deletes
 */

import { createClient } from '@supabase/supabase-js'

const CUTOFF     = '2026-06-26T00:00:00.000Z'
const KEEP_EMAIL = 'c.o@mgnnetworks.com'
const DRY_RUN    = !process.argv.includes('--execute')

const db = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } },
)

async function main() {
  // Fetch all users (paginate in case > 1000)
  const allUsers: { id: string; email?: string; created_at: string }[] = []
  let page = 1
  while (true) {
    const { data, error } = await db.auth.admin.listUsers({ page, perPage: 1000 })
    if (error) throw new Error(`listUsers failed: ${error.message}`)
    allUsers.push(...data.users)
    if (data.users.length < 1000) break
    page++
  }

  const toDelete = allUsers.filter(
    u =>
      u.created_at < CUTOFF &&
      u.email?.toLowerCase() !== KEEP_EMAIL.toLowerCase(),
  )

  console.log(`\nTotal users fetched : ${allUsers.length}`)
  console.log(`Registered before   : ${CUTOFF}`)
  console.log(`Keeping             : ${KEEP_EMAIL}`)
  console.log(`To delete           : ${toDelete.length}\n`)

  if (toDelete.length === 0) {
    console.log('Nothing to delete.')
    return
  }

  toDelete.forEach(u => {
    console.log(`  ${(u.email ?? '(no email)').padEnd(45)} registered ${u.created_at}`)
  })

  if (DRY_RUN) {
    console.log('\n[DRY RUN] No changes made.')
    console.log('Run with --execute to permanently delete these users and all their data.')
    return
  }

  console.log('\nStep 1 — NULL out children.student_user_id for student accounts...')
  const ids = toDelete.map(u => u.id)
  const { error: nullError } = await db
    .from('children')
    .update({ student_user_id: null })
    .in('student_user_id', ids)
  if (nullError) throw new Error(`Failed to NULL student_user_id: ${nullError.message}`)
  console.log('  done.\n')

  console.log('Step 2 — Deleting auth users (cascades all related data)...')
  let deleted = 0
  let failed  = 0
  for (const u of toDelete) {
    const { error } = await db.auth.admin.deleteUser(u.id)
    if (error) {
      console.error(`  FAIL  ${u.email ?? u.id}: ${error.message}`)
      failed++
    } else {
      console.log(`  ✓     ${u.email ?? u.id}`)
      deleted++
    }
  }

  console.log(`\nDone. ${deleted} deleted, ${failed} failed.`)
}

main().catch(err => {
  console.error('\nFatal:', err)
  process.exit(1)
})
