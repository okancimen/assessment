import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Eduentry.ai — İş Dünyası Stajı Değerlendirmesi'

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#1d1d1f', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '72px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 18, color: '#86868b', fontWeight: 600, marginBottom: 20, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex' }}>
          Eduentry.ai · İş Dünyası Alanı
        </div>
        <div style={{ display: 'flex', marginBottom: 28 }}>
          <div style={{ background: '#312e81', border: '1px solid #4f46e5', borderRadius: 100, padding: '8px 20px', fontSize: 16, color: '#a5b4fc', fontWeight: 600, display: 'flex' }}>
            📈 İş Dünyası Stajı Değerlendirmesi
          </div>
        </div>
        <div style={{ fontSize: 52, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, maxWidth: 900, display: 'flex', flexWrap: 'wrap', marginBottom: 24 }}>
          İş dünyası stajına hazır olduğunu kanıtla.
        </div>
        <div style={{ fontSize: 22, color: '#86868b', display: 'flex', gap: 24 }}>
          <span>Strateji</span>
          <span style={{ color: '#424245' }}>·</span>
          <span>Finans</span>
          <span style={{ color: '#424245' }}>·</span>
          <span>Operasyon</span>
          <span style={{ color: '#424245' }}>·</span>
          <span>Liderlik</span>
        </div>
        <div style={{ position: 'absolute', bottom: 40, right: 72, fontSize: 16, color: '#424245', display: 'flex' }}>
          eduentry.ai/tr/is-dunyasi
        </div>
      </div>
    ),
    { ...size }
  )
}
