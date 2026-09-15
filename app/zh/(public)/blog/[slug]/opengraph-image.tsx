import { ImageResponse } from 'next/og'
import { getChinesePostBySlug } from '@/app/blog/posts-zh'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getChinesePostBySlug(slug)
  const title = post?.shortTitle ?? '博客文章'

  return new ImageResponse(
    (
      <div style={{ background: '#1d1d1f', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', fontFamily: 'system-ui, sans-serif', padding: '60px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ position: 'absolute', top: 52, left: 60, fontSize: 16, color: '#86868b', fontWeight: 600, display: 'flex' }}>EDUENTRY 博客</div>
        <div style={{ fontSize: 52, fontWeight: 800, color: '#f5f5f7', lineHeight: 1.2, marginBottom: 28, maxWidth: 900, display: 'flex' }}>
          {title}
        </div>
        {post?.tags && (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {post.tags.slice(0, 3).map((tag: string) => (
              <div key={tag} style={{ background: '#4f46e522', border: '1px solid #4f46e544', borderRadius: 100, padding: '6px 14px', fontSize: 14, color: '#a5b4fc', fontWeight: 600, display: 'flex' }}>
                {tag}
              </div>
            ))}
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 16, color: '#6e6e73', display: 'flex' }}>eduentry.com/zh/blog</div>
      </div>
    ),
    { ...size }
  )
}
