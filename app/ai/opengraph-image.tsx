import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eduentry.ai — Internship Readiness Assessment'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#1d1d1f', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: '#4f46e5', display: 'flex' }} />

        <div style={{ fontSize: 20, color: '#86868b', fontWeight: 600, marginBottom: 24, letterSpacing: '0.12em', textTransform: 'uppercase', display: 'flex' }}>
          Eduentry.ai · AI-Powered · Free
        </div>

        <div style={{ fontSize: 58, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: 24, maxWidth: 900, display: 'flex', flexWrap: 'wrap' }}>
          Get placed in a real internship.
        </div>

        <div style={{ fontSize: 24, color: '#86868b', marginBottom: 48, lineHeight: 1.4, maxWidth: 800, display: 'flex' }}>
          Free 34-question adaptive assessment for high school students aged 14+
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {['Technology', 'Business', 'Data Analytics', 'Digital Marketing'].map((track) => (
            <div key={track} style={{ background: '#2d2d2f', border: '1px solid #424245', borderRadius: 100, padding: '10px 22px', fontSize: 16, color: '#a3a3a3', fontWeight: 600, display: 'flex' }}>
              {track}
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 40, right: 72, fontSize: 18, color: '#424245', display: 'flex' }}>
          eduentry.ai
        </div>
      </div>
    ),
    { ...size }
  )
}
