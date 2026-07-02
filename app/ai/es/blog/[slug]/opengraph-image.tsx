import { ImageResponse } from 'next/og'
import { getSpanishPostBySlug } from '@/app/blog/posts-es'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Eduentry.ai Blog'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getSpanishPostBySlug(slug)
  const title = post?.shortTitle ?? 'Prácticas e Investigación Profesional'
  const tag = post?.tags[0] ?? 'Prácticas'

  return new ImageResponse(
    (
      <div style={{ background: '#1d1d1f', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: '#4f46e5', display: 'flex' }} />

        <div style={{ fontSize: 18, color: '#86868b', fontWeight: 600, marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex' }}>
          Eduentry.ai · Investigación
        </div>

        <div style={{ display: 'flex', marginBottom: 28 }}>
          <div style={{ background: '#312e81', border: '1px solid #4f46e5', borderRadius: 100, padding: '8px 20px', fontSize: 16, color: '#a5b4fc', fontWeight: 600, display: 'flex' }}>
            {tag}
          </div>
        </div>

        <div style={{ fontSize: 50, fontWeight: 800, color: '#ffffff', lineHeight: 1.15, maxWidth: 980, display: 'flex', flexWrap: 'wrap' }}>
          {title}
        </div>

        <div style={{ position: 'absolute', bottom: 40, right: 72, fontSize: 18, color: '#424245', display: 'flex' }}>
          eduentry.ai/es
        </div>
      </div>
    ),
    { ...size }
  )
}
