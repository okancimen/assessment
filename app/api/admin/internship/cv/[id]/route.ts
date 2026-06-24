import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { isAdminEmail } = await import('@/lib/admin')
    if (!isAdminEmail(user.email)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    // id is assessment_id
    const { data: internProfile } = await supabase
      .from('internship_profiles')
      .select('cv_url')
      .eq('assessment_id', id)
      .single()

    if (!internProfile?.cv_url) return NextResponse.json({ error: 'No CV on file' }, { status: 404 })

    const { data, error } = await supabase.storage
      .from('internship-cvs')
      .createSignedUrl(internProfile.cv_url, 300) // 5-minute signed URL

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ url: data.signedUrl })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
