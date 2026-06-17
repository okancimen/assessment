import { ImageResponse } from 'next/og'
import { getAreaBySlug } from '../data'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params
  const area = getAreaBySlug(slug)
  const name = area?.name ?? 'Grammar Schools'
  const targetSAS = area?.targetSAS ?? '115+'
  const schoolCount = area?.schoolCount ?? 0
  const examBoard = area?.examBoard?.split('(')[0].trim() ?? 'GL Assessment'

  return new ImageResponse(
    (
      <div style={{ background: 'white', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: '#4f46e5', display: 'flex' }} />
        <div style={{ fontSize: 22, color: '#4f46e5', fontWeight: 700, marginBottom: 20 }}>Eduentry · Grammar Schools</div>
        <div style={{ fontSize: 54, fontWeight: 800, color: '#111827', lineHeight: 1.15, marginBottom: 24, maxWidth: 950 }}>
          Grammar Schools in {name}
        </div>
        <div style={{ fontSize: 26, color: '#6b7280', marginBottom: 48, maxWidth: 800 }}>
          Entry requirements, SAS target and 11+ preparation
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>{schoolCount} schools</div>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>Target SAS {targetSAS}</div>
          <div style={{ background: '#eef2ff', borderRadius: 12, padding: '10px 22px', fontSize: 18, color: '#4f46e5', fontWeight: 600 }}>{examBoard}</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#9ca3af' }}>eduentry.com/grammar-schools</div>
      </div>
    ),
    { ...size }
  )
}
