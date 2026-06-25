import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Internship Readiness Assessment — Eduentry'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#eef2ff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          Eduentry · Internship Assessment
        </div>
        <div style={{ fontSize: 54, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 28, maxWidth: 960 }}>
          Discover your internship readiness
        </div>
        <div style={{ fontSize: 26, color: '#6b7280', marginBottom: 40, lineHeight: 1.4, maxWidth: 840 }}>
          Free 34-question adaptive assessment for high school students aged 14+
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Technology', 'Business', 'Data Analytics', 'Digital Marketing'].map((track) => (
            <div key={track} style={{ background: '#e0e7ff', borderRadius: 12, padding: '10px 20px', fontSize: 18, color: '#4f46e5', fontWeight: 600, display: 'flex' }}>
              {track}
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 64, fontSize: 20, color: '#9ca3af' }}>eduentry.com/internship</div>
      </div>
    ),
    { ...size }
  )
}
