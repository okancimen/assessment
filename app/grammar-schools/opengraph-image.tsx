import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Grammar Schools in England — Entry Requirements & 11+ Guide'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 20 }}>Eduentry · Grammar Schools</div>
        <div style={{ fontSize: 54, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 24, maxWidth: 950 }}>
          Grammar Schools in England
        </div>
        <div style={{ fontSize: 26, color: '#6b7280', marginBottom: 48, maxWidth: 800 }}>
          Entry requirements, SAS score benchmarks and 11+ preparation by area
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>Kent</div>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>Buckinghamshire</div>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>London</div>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>Birmingham</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#9ca3af' }}>eduentry.com/grammar-schools</div>
      </div>
    ),
    { ...size }
  )
}
