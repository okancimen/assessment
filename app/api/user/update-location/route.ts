import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ ok: false })

    // Get IP from request headers (Plesk / Vercel / proxy)
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') ?? ''

    if (!ip || ip === '127.0.0.1' || ip === '::1') {
      return NextResponse.json({ ok: false, reason: 'local' })
    }

    const geo = await fetch(`https://ipapi.co/${ip}/json/`, {
      headers: { 'User-Agent': 'eduentry-app/1.0' },
    }).then((r) => r.json()).catch(() => null)

    if (!geo || geo.error) return NextResponse.json({ ok: false, reason: 'geo_failed' })

    const country = geo.country_name as string | undefined
    const city = geo.city as string | undefined

    await createAdminClient()
      .from('profiles')
      .upsert({ id: user.id, country: country ?? null, city: city ?? null }, { onConflict: 'id' })

    return NextResponse.json({ ok: true, country, city })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) })
  }
}
