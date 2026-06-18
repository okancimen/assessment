import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Free Academic Assessment for Children — Eduentry'

const SUBJECTS: Record<string, { label: string; tagline: string; bg: string; accent: string; pillBg: string; pills: string[] }> = {
  english: {
    label: 'English',
    tagline: 'Comprehension · Grammar · Spelling · Vocabulary',
    bg: '#eef2ff',
    accent: '#4F46E5',
    pillBg: '#e0e7ff',
    pills: ['KS1–KS4', 'Cambridge IGCSE', 'PISA Reading'],
  },
  maths: {
    label: 'Mathematics',
    tagline: 'Number · Algebra · Geometry · Data Handling',
    bg: '#f0fdfa',
    accent: '#0D9488',
    pillBg: '#ccfbf1',
    pills: ['KS1–KS4', 'PISA Numeracy', 'US Common Core'],
  },
  'verbal-reasoning': {
    label: 'Verbal Reasoning',
    tagline: 'Analogies · Word Codes · Classification · Logic',
    bg: '#f5f3ff',
    accent: '#7C3AED',
    pillBg: '#ede9fe',
    pills: ['GL Assessment 11+', 'CEM 11+', 'CAT4'],
  },
  'non-verbal-reasoning': {
    label: 'Non-Verbal Reasoning',
    tagline: 'Patterns · Matrices · Sequences · Spatial Reasoning',
    bg: '#fce7f3',
    accent: '#DB2777',
    pillBg: '#fbcfe8',
    pills: ['GL Assessment 11+', 'CAT4', 'ISEB Pre-Test'],
  },
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = SUBJECTS[slug] ?? SUBJECTS['english']

  return new ImageResponse(
    (
      <div style={{ background: subject.bg, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: subject.accent, display: 'flex' }} />
        <div style={{ fontSize: 22, color: subject.accent, fontWeight: 700, marginBottom: 20 }}>Eduentry · Free Assessment</div>
        <div style={{ fontSize: 62, fontWeight: 800, color: '#111827', lineHeight: 1.1, marginBottom: 24 }}>
          {subject.label}
        </div>
        <div style={{ fontSize: 26, color: '#6b7280', marginBottom: 48, maxWidth: 800 }}>
          {subject.tagline} · Ages 6–17 · Standardised scores
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ background: subject.pillBg, borderRadius: 12, padding: '10px 22px', fontSize: 18, color: subject.accent, fontWeight: 600 }}>{subject.pills[0]}</div>
          <div style={{ background: subject.pillBg, borderRadius: 12, padding: '10px 22px', fontSize: 18, color: subject.accent, fontWeight: 600 }}>{subject.pills[1]}</div>
          <div style={{ background: subject.pillBg, borderRadius: 12, padding: '10px 22px', fontSize: 18, color: subject.accent, fontWeight: 600 }}>{subject.pills[2]}</div>
        </div>
        <div style={{ position: 'absolute', bottom: 32, right: 60, fontSize: 20, color: '#9ca3af' }}>eduentry.com</div>
      </div>
    ),
    { ...size }
  )
}
