import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import getSitemap from '@/app/sitemap'

const INDEXNOW_KEY = '668f5830837348c9b10a615b5d3ee411'
const INDEXNOW_HOST = 'eduentry.com'
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
    await logCron({ submitted: 0, total: 0, failed: 0, duration_ms: 0, is_sunday: isSunday })
    return NextResponse.json({ submitted: 0, message: 'No recently modified URLs' })
  }

  const start = Date.now()
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })
  const duration_ms = Date.now() - start

  const ok = res.ok
  const failed = ok ? 0 : 1
  if (!ok) {
    console.error(`[cron/indexnow] failed status=${res.status}`)
  }
  console.log(`[cron/indexnow] submitted=${ok ? urls.length : 0}/${urls.length} status=${res.status} sunday=${isSunday}`)

  await logCron({ submitted: ok ? urls.length : 0, total: urls.length, failed, duration_ms, is_sunday: isSunday })

  return NextResponse.json({
    submitted: ok ? urls.length : 0,
    total: urls.length,
    failed,
    status: res.status,
  })
}

async function logCron(data: {
  submitted: number
  total: number
  failed: number
  duration_ms: number
  is_sunday: boolean
}) {
  try {
    const supabase = createAdminClient()
    await supabase.from('cron_logs').insert({
      job: 'indexnow',
      submitted: data.submitted,
      total: data.total,
      failed: data.failed,
      errors: null,
      duration_ms: data.duration_ms,
      is_sunday: data.is_sunday,
    })
  } catch (err) {
    console.error('[cron/indexnow] failed to write log', err)
  }
}
