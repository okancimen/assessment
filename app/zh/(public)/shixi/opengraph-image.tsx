import { ImageResponse } from 'next/og'

export const alt = '实习准备度评估 — Eduentry'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '60px',
        }}
      >
        <div style={{ color: '#a5b4fc', fontSize: 18, fontWeight: 600, marginBottom: 24, letterSpacing: 1 }}>
          Eduentry · 实习准备度评估平台
        </div>
        <div style={{ color: '#ffffff', fontSize: 52, fontWeight: 800, textAlign: 'center', lineHeight: 1.2, marginBottom: 28, maxWidth: 800 }}>
          发现你的实习准备度
        </div>
        <div style={{ color: '#c7d2fe', fontSize: 22, textAlign: 'center', marginBottom: 48, maxWidth: 640, lineHeight: 1.5 }}>
          免费34题 · 35分钟 · 即时个性化报告
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['💻 技术', '📈 商业', '📊 数据分析', '📣 数字营销'].map((track) => (
            <div
              key={track}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 12,
                padding: '10px 20px',
                color: '#e0e7ff',
                fontSize: 15,
                fontWeight: 600,
              }}
            >
              {track}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
