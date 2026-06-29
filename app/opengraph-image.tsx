import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Eduentry — Academic Assessment & Internship Readiness Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#1d1d1f', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', padding: '60px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />

        <div style={{ fontSize: 22, color: '#86868b', fontWeight: 700, marginBottom: 24, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Assessments for every stage of learning
        </div>

        <div style={{ fontSize: 56, fontWeight: 800, color: '#f5f5f7', textAlign: 'center', lineHeight: 1.15, marginBottom: 16, maxWidth: 900 }}>
          The right assessment,
        </div>
        <div style={{ fontSize: 56, fontWeight: 800, color: '#4f46e5', textAlign: 'center', lineHeight: 1.15, marginBottom: 40 }}>
          at the right stage.
        </div>

        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ background: '#2d2d2f', border: '1px solid #424245', borderRadius: 20, padding: '18px 32px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 280 }}>
            <div style={{ fontSize: 11, color: '#86868b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex' }}>Academic Assessment</div>
            <div style={{ fontSize: 18, color: '#f5f5f7', fontWeight: 600, display: 'flex' }}>Ages 6–17 · International benchmark</div>
          </div>
          <div style={{ background: '#eef2ff', border: '1px solid #c7d2fe', borderRadius: 20, padding: '18px 32px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 280 }}>
            <div style={{ fontSize: 11, color: '#4f46e5', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex' }}>Internship Assessment</div>
            <div style={{ fontSize: 18, color: '#1d1d1f', fontWeight: 600, display: 'flex' }}>Ages 14+ · Workplace readiness</div>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 32, fontSize: 20, color: '#6e6e73' }}>eduentry.com</div>
      </div>
    ),
    { ...size }
  )
}
