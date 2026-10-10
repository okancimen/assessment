import { NextRequest, NextResponse } from 'next/server'
import { notifyUrls } from '@/lib/google-indexing'
import { createAdminClient } from '@/lib/supabase/admin'
import getSitemap from '@/app/sitemap'

// Quota: 200 URL notifications per day per Google Cloud project.
// This cron runs daily and submits URLs modified in the last WINDOW_DAYS days.
// On Sundays it submits everything to keep stale pages fresh.
const WINDOW_DAYS = 3

function isRecent(lastModified: string | Date | undefined): boolean {
  if (!lastModified) return false
  const cutoff = Date.now() - WINDOW_DAYS * 24 * 60 * 60 * 1000
  return new Date(lastModified).getTime() >= cutoff
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const querySecret = req.nextUrl.searchParams.get('secret')
  const cronSecret = process.env.CRON_SECRET
  const valid = cronSecret && (
    authHeader === `Bearer ${cronSecret}` ||
    querySecret === cronSecret
  )
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const isSunday = new Date().getDay() === 0
  const allEntries = getSitemap()

  const urls = isSunday
    ? allEntries.map(e => e.url)
    : allEntries.filter(e => isRecent(e.lastModified)).map(e => e.url)

  if (urls.length === 0) {
    await logCron({ job: 'index-urls', submitted: 0, total: 0, failed: 0, duration_ms: 0, is_sunday: isSunday })
    return NextResponse.json({ submitted: 0, message: 'No recently modified URLs' })
  }

  const start = Date.now()
  const results = await notifyUrls(urls)
  const duration_ms = Date.now() - start
  const ok = results.filter(r => r.ok).length
  const failed = results.filter(r => !r.ok)

  if (failed.length > 0) {
    console.error('[cron/index-urls] failures', failed)
  }
  console.log(`[cron/index-urls] submitted=${ok}/${urls.length} sunday=${isSunday}`)

  await logCron({ job: 'index-urls', submitted: ok, total: urls.length, failed: failed.length, errors: failed, duration_ms, is_sunday: isSunday })

  return NextResponse.json({ submitted: ok, total: urls.length, failed: failed.length, errors: failed.slice(0, 3) })
}

async function logCron(data: {
  job: string
  submitted: number
  total: number
  failed: number
  errors?: { url: string; ok: boolean; error?: string }[]
  duration_ms: number
  is_sunday: boolean
}) {
  try {
    const supabase = createAdminClient()
    await supabase.from('cron_logs').insert({
      job: data.job,
      submitted: data.submitted,
      total: data.total,
      failed: data.failed,
      errors: data.errors?.length ? data.errors : null,
      duration_ms: data.duration_ms,
      is_sunday: data.is_sunday,
    })
  } catch (err) {
    console.error('[cron/index-urls] failed to write log', err)
  }
}
