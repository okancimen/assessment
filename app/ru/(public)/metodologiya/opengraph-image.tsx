import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Metodologiya ocenivaniya — Kak rabotaet Eduentry'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#eef2ff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 20 }}>Eduentry · Metodologiya</div>
        <div style={{ fontSize: 54, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 24, maxWidth: 950 }}>
          Metodologiya adaptivnoy ocenki
        </div>
        <div style={{ fontSize: 26, color: '#4338ca', marginBottom: 48, maxWidth: 800 }}>
          2-param. IRT · MAP ocenivanie · Standartizirovannye bally
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: '#e0e7ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600, display: 'flex' }}>Ta zhe nauka chto PISA</div>
          <div style={{ background: '#e0e7ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600, display: 'flex' }}>Srednee 100, SO 15</div>
          <div style={{ background: '#e0e7ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600, display: 'flex' }}>Besplatno</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#6b7280' }}>eduentry.com/ru/metodologiya</div>
      </div>
    ),
    { ...size }
  )
}
