import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const ALLOWED_MIME = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const MAX_BYTES = 5 * 1024 * 1024 // 5 MB

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { file_name, file_size, mime_type } = await request.json()

    if (!ALLOWED_MIME.includes(mime_type)) {
      return NextResponse.json({ error: 'Only PDF and DOCX files are accepted' }, { status: 400 })
    }
    if (file_size > MAX_BYTES) {
      return NextResponse.json({ error: 'File must be under 5 MB' }, { status: 400 })
    }

    const ext = mime_type === 'application/pdf' ? 'pdf' : 'docx'
    const path = `${user.id}/${Date.now()}.${ext}`

    const { data, error } = await supabase.storage
      .from('internship-cvs')
      .createSignedUploadUrl(path)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ upload_url: data.signedUrl, path, token: data.token })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
