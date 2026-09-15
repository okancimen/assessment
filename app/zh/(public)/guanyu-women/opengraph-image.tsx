import { ImageResponse } from 'next/og'

export const alt = 'Eduentry — 关于我们'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#1d1d1f', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', padding: '60px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 18, color: '#86868b', fontWeight: 600, marginBottom: 20, display: 'flex' }}>EDUENTRY</div>
        <div style={{ fontSize: 64, fontWeight: 800, color: '#f5f5f7', textAlign: 'center', lineHeight: 1.15, marginBottom: 20, display: 'flex' }}>关于我们</div>
        <div style={{ fontSize: 22, color: '#a1a1a7', textAlign: 'center', maxWidth: 700, display: 'flex' }}>
          免费自适应学术评估，面向6–17岁儿童及14岁以上高中生实习准备测评。
        </div>
        <div style={{ position: 'absolute', bottom: 32, fontSize: 18, color: '#6e6e73', display: 'flex' }}>eduentry.com/zh/guanyu-women</div>
      </div>
    ),
    { ...size }
  )
}
