import { ImageResponse } from 'next/og'
import { getPostBySlug } from '../posts'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Eduentry Blog'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const title = post?.shortTitle ?? 'Eduentry Blog'
  const tag = post?.tags[0] ?? 'Eduentry Research'

  return new ImageResponse(
    (
      <div style={{ background: '#eef2ff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 24 }}>Eduentry Blog</div>
        <div style={{ fontSize: 52, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 28, maxWidth: 980 }}>
          {title}
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ background: '#e0e7ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600, display: 'flex' }}>{tag}</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#9ca3af' }}>eduentry.com</div>
      </div>
    ),
    { ...size }
  )
}
