import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Free 11+ Practice Test — Verbal & Non-Verbal Reasoning'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 20 }}>Eduentry · 11+ Preparation</div>
        <div style={{ fontSize: 54, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 24, maxWidth: 950 }}>
          Free 11+ Practice Test
        </div>
        <div style={{ fontSize: 28, color: '#6b7280', marginBottom: 44, maxWidth: 800 }}>
          Verbal & Non-Verbal Reasoning · English · Maths · Standardised scores
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>Verbal Reasoning</div>
          <div style={{ background: '#ecfdf5', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#059669', fontWeight: 600 }}>Non-Verbal Reasoning</div>
          <div style={{ background: '#fff1f2', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#e11d48', fontWeight: 600 }}>English</div>
          <div style={{ background: '#fffbeb', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#d97706', fontWeight: 600 }}>Maths</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#9ca3af' }}>eduentry.com/11-plus</div>
      </div>
    ),
    { ...size }
  )
}
