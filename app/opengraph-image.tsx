import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eduentry — Free Academic Assessment for Children'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          padding: '60px',
        }}
      >
        {/* Top colour strip */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 8, background: '#4f46e5', display: 'flex' }} />

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <div style={{ fontSize: 64, fontWeight: 800, color: '#4f46e5', letterSpacing: '-2px' }}>
            Eduentry
          </div>
        </div>

        {/* Headline */}
        <div style={{ fontSize: 42, fontWeight: 700, color: '#111827', textAlign: 'center', lineHeight: 1.25, marginBottom: 24, maxWidth: 900 }}>
          Free Academic Assessment for Children
        </div>

        {/* Sub */}
        <div style={{ fontSize: 26, color: '#6b7280', textAlign: 'center', marginBottom: 48 }}>
          AI-powered adaptive testing · Ages 6–17 · Standardised scores
        </div>

        {/* Pillars */}
        <div style={{ display: 'flex', gap: 20 }}>
          {['English', 'Mathematics', 'Verbal Reasoning', 'Non-Verbal Reasoning'].map((s) => (
            <div key={s} style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 20px', fontSize: 20, color: '#4f46e5', fontWeight: 600 }}>
              {s}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: 'absolute', bottom: 32, fontSize: 22, color: '#9ca3af' }}>
          eduentry.com
        </div>
      </div>
    ),
    { ...size }
  )
}
