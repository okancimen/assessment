import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'About Eduentry'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#eef2ff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 24 }}>Eduentry</div>
        <div style={{ fontSize: 56, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 28, maxWidth: 980 }}>
          About Us
        </div>
        <div style={{ fontSize: 24, color: '#6b7280', lineHeight: 1.5, maxWidth: 780 }}>
          Free academic assessment for every child, everywhere
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#9ca3af' }}>eduentry.com/ar/hawlana</div>
      </div>
    ),
    { ...size }
  )
}
