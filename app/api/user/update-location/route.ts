import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getClientIp, geolocateIp } from '@/lib/geo'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ ok: false })

    // Get IP from request headers (Plesk / Vercel / proxy)
    const ip = getClientIp(request.headers)
    const geo = await geolocateIp(ip)
    if (!geo) return NextResponse.json({ ok: false, reason: 'geo_failed' })

    await createAdminClient()
      .from('profiles')
      .upsert({ id: user.id, country: geo.country, city: geo.city }, { onConflict: 'id' })

    return NextResponse.json({ ok: true, country: geo.country, city: geo.city })
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) })
  }
}
