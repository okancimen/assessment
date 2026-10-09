import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import { TRAIT_LABELS, TRAIT_DESCRIPTIONS, Trait } from '@/lib/personality-questions'
import { getPersonalityI18n } from '@/lib/personality-i18n'
import { getAge } from '@/lib/utils'
import StrengthsRadarChart from './StrengthsRadarChart'
import PrintButton from './PrintButton'
import Link from 'next/link'

const VIRTUE_COLORS: Record<string, string> = {
  Wisdom:        'bg-blue-100 text-blue-700',
  Courage:       'bg-orange-100 text-orange-700',
  Humanity:      'bg-pink-100 text-pink-700',
  Justice:       'bg-teal-100 text-teal-700',
  Temperance:    'bg-purple-100 text-purple-700',
  Transcendence: 'bg-amber-100 text-amber-700',
}

const TRAIT_VIRTUE: Record<Trait, string> = {
  curiosity: 'Wisdom', creativity: 'Wisdom', love_of_learning: 'Wisdom',
  perspective: 'Wisdom', judgment: 'Wisdom',
  bravery: 'Courage', perseverance: 'Courage', honesty: 'Courage', zest: 'Courage',
  love: 'Humanity', kindness: 'Humanity', social_intelligence: 'Humanity',
  teamwork: 'Justice', fairness: 'Justice', leadership: 'Justice',
  forgiveness: 'Temperance', humility: 'Temperance', prudence: 'Temperance', self_regulation: 'Temperance',
  appreciation_of_beauty: 'Transcendence', gratitude: 'Transcendence',
  hope: 'Transcendence', humor: 'Transcendence', spirituality: 'Transcendence',
}

export default async function StrengthsResultsPage({
  params,
  searchParams,
}: {
  params: Promise<{ assessmentId: string }>
  searchParams?: Promise<{ locale?: string }>
}) {
  const { assessmentId } = await params
  const sp = await searchParams
  const locale = sp?.locale ?? 'en'
  const t = getPersonalityI18n(locale)

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: result } = await supabase
    .from('personality_results')
    .select('*, personality_assessments(parent_id, age_tier, children(name, date_of_birth))')
    .eq('assessment_id', assessmentId)
    .single()

  if (!result) notFound()

  const pa = result.personality_assessments as unknown as {
    parent_id: string
    age_tier: number
    children: { name: string; date_of_birth: string }
  }
  if (pa.parent_id !== user.id) redirect('/dashboard')

  const child = pa.children
  const age = getAge(child.date_of_birth)
  const traitScores = result.trait_scores as Record<Trait, number>
  const topStrengths = result.top_strengths as Trait[]
  const growthAreas = result.growth_areas as Trait[]

  const sortedTraits = (Object.entries(traitScores) as [Trait, number][])
    .sort((a, b) => b[1] - a[1])

  const radarData = sortedTraits.map(([trait, score]) => ({
    trait: TRAIT_LABELS[trait],
    score,
    fullMark: 5,
  }))

  const dashHref = locale === 'en' ? '/dashboard' : `/${locale}/dashboard`

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col" dir={t.dir}>
      <Navbar locale={locale} />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8" id="print-area">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{t.resultsTitle(child.name)}</h1>
            <p className="text-sm text-[#6e6e73] mt-0.5">Age {age} · {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          <div className="flex items-center gap-3">
            <PrintButton label={t.printBtn} />
            <Link href={dashHref} className="text-sm text-[#4F46E5] font-medium hover:underline whitespace-nowrap">
              {t.backToDashboard}
            </Link>
          </div>
        </div>

        {/* Top strengths */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.topStrengthsTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {topStrengths.map((trait, i) => {
              const virtue = TRAIT_VIRTUE[trait]
              const colorClass = VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
              return (
                <div key={trait} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass}`}>{virtue}</span>
                    <span className="text-xs font-semibold text-[#4F46E5]">#{i + 1}</span>
                  </div>
                  <p className="font-bold text-[#1d1d1f]">{TRAIT_LABELS[trait]}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{TRAIT_DESCRIPTIONS[trait]}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`w-5 h-5 rounded-full border text-[10px] flex items-center justify-center font-bold ${
                          n <= Math.round(traitScores[trait])
                            ? 'bg-[#4F46E5] border-[#4F46E5] text-white'
                            : 'border-[#d2d2d7] text-[#d2d2d7]'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-[#6e6e73] ml-1">{traitScores[trait].toFixed(1)}/5</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Radar chart */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6">
          <h2 className="text-sm font-semibold text-[#1d1d1f] mb-4">{t.strengthsSection}</h2>
          <StrengthsRadarChart data={radarData} />
        </div>

        {/* Growth areas */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.growthAreasTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {growthAreas.map((trait) => {
              const virtue = TRAIT_VIRTUE[trait]
              const colorClass = VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
              return (
                <div key={trait} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5 space-y-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass}`}>{virtue}</span>
                  <p className="font-semibold text-[#1d1d1f]">{TRAIT_LABELS[trait]}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{TRAIT_DESCRIPTIONS[trait]}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* AI Summary */}
        {result.ai_summary && (
          <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-3">
            <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.aiSummaryTitle}</h2>
            <div className="text-sm text-[#3d3d3f] leading-relaxed space-y-3">
              {result.ai_summary.split('\n\n').map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* All traits table */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#f5f5f7]">
            <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.strengthsSection}</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#f5f5f7]">
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide">Trait</th>
                <th className="text-left px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide hidden sm:table-cell">Virtue</th>
                <th className="text-right px-5 py-3 text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wide">{t.traitScore}</th>
              </tr>
            </thead>
            <tbody>
              {sortedTraits.map(([trait, score]) => {
                const virtue = TRAIT_VIRTUE[trait]
                const colorClass = VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
                return (
                  <tr key={trait} className="border-b border-[#f5f5f7] last:border-0">
                    <td className="px-5 py-3 font-medium text-[#1d1d1f] text-xs">{TRAIT_LABELS[trait]}</td>
                    <td className="px-5 py-3 hidden sm:table-cell">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colorClass}`}>{virtue}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((n) => (
                            <div
                              key={n}
                              className={`w-3 h-3 rounded-full ${n <= Math.round(score) ? 'bg-[#4F46E5]' : 'bg-[#e5e7eb]'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs tabular-nums font-semibold text-[#1d1d1f] w-6">{score.toFixed(1)}</span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

      </main>
      <PublicFooter />
    </div>
  )
}
