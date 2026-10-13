import { getPersonalityI18n } from '@/lib/personality-i18n'
import type { SampleLocale } from '@/lib/sample-personality-i18n'
import {
  SAMPLE_TRAIT_SCORES, SAMPLE_PEER_AVG, SAMPLE_TOP_STRENGTHS, SAMPLE_CHILD_NAME, SAMPLE_CHILD_AGE,
} from '@/lib/sample-personality'
import type { Trait } from '@/lib/personality-questions'

// ── Radar geometry (24 traits, shared sample data) ───────────────────────────
const TRAITS = Object.keys(SAMPLE_TRAIT_SCORES) as Trait[]
const CX = 120
const CY = 120
const R = 92
function point(i: number, value: number): [number, number] {
  const angle = (-90 + i * (360 / TRAITS.length)) * (Math.PI / 180)
  const r = (value / 5) * R
  return [CX + r * Math.cos(angle), CY + r * Math.sin(angle)]
}
function polygon(values: number[]): string {
  return values.map((v, i) => point(i, v).map((n) => n.toFixed(1)).join(',')).join(' ')
}
const SCORE_PTS = polygon(TRAITS.map((t) => SAMPLE_TRAIT_SCORES[t]))
const AVG_PTS = polygon(TRAITS.map((t) => SAMPLE_PEER_AVG[t]))
const AXES = TRAITS.map((_, i) => point(i, 5))

// Every trait gets a small label on the web; hover enlarges + highlights it.
function labelFor(i: number) {
  const angle = (-90 + i * (360 / TRAITS.length)) * (Math.PI / 180)
  const lr = R + 10
  const cos = Math.cos(angle)
  return {
    x: CX + lr * cos,
    y: CY + lr * Math.sin(angle),
    anchor: Math.abs(cos) < 0.3 ? 'middle' : cos > 0 ? 'start' : 'end',
  } as const
}

// ── Card chrome strings per locale ────────────────────────────────────────────
interface CardStrings {
  sampleReport: string
  profileTitle: string
  childLegend: string
  avgLegend: string
}
const CARD: Record<SampleLocale, CardStrings> = {
  en: { sampleReport: 'Sample report', profileTitle: 'Character profile · 24 traits', childLegend: 'Your child', avgLegend: 'Age average' },
  tr: { sampleReport: 'Örnek rapor', profileTitle: 'Karakter profili · 24 özellik', childLegend: 'Çocuğunuz', avgLegend: 'Yaş ortalaması' },
  es: { sampleReport: 'Informe de ejemplo', profileTitle: 'Perfil de carácter · 24 rasgos', childLegend: 'Tu hijo/a', avgLegend: 'Media de edad' },
  fr: { sampleReport: 'Rapport exemple', profileTitle: 'Profil de caractère · 24 traits', childLegend: 'Votre enfant', avgLegend: 'Moyenne d’âge' },
  ar: { sampleReport: 'تقرير نموذجي', profileTitle: 'ملف الشخصية · 24 سمة', childLegend: 'طفلك', avgLegend: 'متوسط العمر' },
  ru: { sampleReport: 'Пример отчёта', profileTitle: 'Профиль характера · 24 черты', childLegend: 'Ваш ребёнок', avgLegend: 'Средний по возрасту' },
  zh: { sampleReport: '示例报告', profileTitle: '性格画像 · 24项特质', childLegend: '您的孩子', avgLegend: '同龄平均' },
}

export default function HeroRadarCard({ locale }: { locale: SampleLocale }) {
  const t = getPersonalityI18n(locale)
  const c = CARD[locale]
  const initial = SAMPLE_CHILD_NAME.charAt(0)

  return (
    <div className="hidden lg:block" dir={t.dir}>
      <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600 shrink-0">{initial}</div>
          <div>
            <p className="text-sm font-semibold text-[#1d1d1f]">{SAMPLE_CHILD_NAME} · {t.ageLabel(SAMPLE_CHILD_AGE)}</p>
            <p className="text-xs text-[#6e6e73]">{c.sampleReport}</p>
          </div>
        </div>

        <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-1">{c.profileTitle}</p>

        {/* 24-trait radar */}
        <svg viewBox="-52 -30 344 300" className="w-full" role="img" aria-label={c.profileTitle}>
          {[0.25, 0.5, 0.75, 1].map((f) => (
            <circle key={f} cx={CX} cy={CY} r={R * f} fill="none" stroke="#e5e7eb" strokeWidth="1" />
          ))}
          <g stroke="#eef2ff" strokeWidth="1">
            {AXES.map(([x, y], i) => (
              <line key={i} x1={CX} y1={CY} x2={x.toFixed(1)} y2={y.toFixed(1)} />
            ))}
          </g>
          {/* age average — dotted */}
          <polygon points={AVG_PTS} fill="none" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 2" strokeLinejoin="round" />
          {/* child's sample profile — solid */}
          <polygon points={SCORE_PTS} fill="rgba(79,70,229,0.15)" stroke="#4F46E5" strokeWidth="2" strokeLinejoin="round" />
          {/* all 24 trait labels — grow + highlight on hover (CSS only) */}
          <g>
            {TRAITS.map((trait, i) => {
              const { x, y, anchor } = labelFor(i)
              return (
                <text
                  key={trait}
                  x={x.toFixed(1)}
                  y={y.toFixed(1)}
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  className="fill-[#94a3b8] [font-size:6px] font-medium transition-all duration-150 hover:fill-[#4F46E5] hover:[font-size:11px] hover:font-semibold cursor-default"
                >
                  {t.traitLabels[trait]}
                </text>
              )
            })}
          </g>
        </svg>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-1 text-[10px] text-[#6e6e73]">
          <span className="flex items-center gap-1.5">
            <span className="block w-4 h-0.5 rounded-full bg-[#4F46E5]" /> {c.childLegend}
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="2" viewBox="0 0 16 2"><line x1="0" y1="1" x2="16" y2="1" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4 2" /></svg>
            {c.avgLegend}
          </span>
        </div>

        {/* Top-3 strength chips */}
        <div className="flex flex-wrap gap-1.5 justify-center mt-3">
          {SAMPLE_TOP_STRENGTHS.map((trait) => (
            <span key={trait} className="text-[10px] font-medium text-[#4338CA] bg-indigo-50 rounded-full px-2 py-0.5">
              {t.traitLabels[trait]} {Math.round((SAMPLE_TRAIT_SCORES[trait] / 5) * 100)}%
            </span>
          ))}
        </div>

        {/* VIA tags */}
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          <span className="text-xs bg-indigo-50 text-indigo-600 rounded-full px-3 py-1 font-medium">VIA</span>
          <span className="text-xs bg-green-50 text-green-600 rounded-full px-3 py-1 font-medium">24</span>
        </div>
      </div>
    </div>
  )
}
