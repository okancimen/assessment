import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eduentry Assessment Methodology — How It Works'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0f172a', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#818cf8', fontWeight: 600, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Eduentry · Methodology</div>
        <div style={{ fontSize: 52, fontWeight: 800, color: '#f8fafc', lineHeight: 1.15, marginBottom: 28, maxWidth: 900 }}>
          How Eduentry Works
        </div>
        <div style={{ fontSize: 26, color: '#94a3b8', marginBottom: 48, maxWidth: 800 }}>
          2PL Item Response Theory · MAP estimation · Standardised scoring (mean 100, SD 15)
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: '#1e293b', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#818cf8', fontWeight: 600 }}>IRT Adaptive</div>
          <div style={{ background: '#1e293b', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#818cf8', fontWeight: 600 }}>UK · PISA · IB</div>
          <div style={{ background: '#1e293b', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#818cf8', fontWeight: 600 }}>Ages 6–17</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#475569' }}>eduentry.com/methodology</div>
      </div>
    ),
    { ...size }
  )
}
