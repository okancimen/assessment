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

  const payload = JSON.stringify({
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  })
  const headers = { 'Content-Type': 'application/json; charset=utf-8' }

  const start = Date.now()
  const [bingRes, yandexRes] = await Promise.allSettled([
    fetch('https://www.bing.com/indexnow', { method: 'POST', headers, body: payload }),
    fetch('https://yandex.com/indexnow', { method: 'POST', headers, body: payload }),
  ])
  const duration_ms = Date.now() - start

  const bingOk = bingRes.status === 'fulfilled' && bingRes.value.ok
  const yandexOk = yandexRes.status === 'fulfilled' && yandexRes.value.ok
  const bingStatus = bingRes.status === 'fulfilled' ? bingRes.value.status : 0
  const yandexStatus = yandexRes.status === 'fulfilled' ? yandexRes.value.status : 0

  console.log(`[cron/indexnow] bing=${bingStatus} yandex=${yandexStatus} urls=${urls.length} sunday=${isSunday}`)

  await logCron({ submitted: urls.length, total: urls.length, failed: 0, duration_ms, is_sunday: isSunday })

  return NextResponse.json({
    total: urls.length,
    bing: { ok: bingOk, status: bingStatus },
    yandex: { ok: yandexOk, status: yandexStatus },
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
