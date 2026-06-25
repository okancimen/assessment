import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { InternshipTrack, INTERNSHIP_TRACKS } from '@/types'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { isAdminEmail } = await import('@/lib/admin')
    if (!isAdminEmail(user.email)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { track } = await request.json()
    if (track !== null && !INTERNSHIP_TRACKS.includes(track as InternshipTrack)) {
      return NextResponse.json({ error: 'Invalid track' }, { status: 400 })
    }

    const { createAdminClient } = await import('@/lib/supabase/admin')
    const { error } = await createAdminClient()
      .from('internship_profiles')
      .update({ admin_assigned_track: track })
      .eq('assessment_id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
