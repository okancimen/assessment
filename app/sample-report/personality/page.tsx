import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import CtaLink from '@/components/ui/CtaLink'
import { Trait } from '@/lib/personality-questions'
import { getPersonalityI18n } from '@/lib/personality-i18n'
import StrengthsRadarChart from '@/app/strengths/[assessmentId]/results/StrengthsRadarChart'
import ExpandableAISummary from '@/app/strengths/[assessmentId]/results/ExpandableAISummary'
import ExpandableTraitsTable, { type TraitRow } from '@/app/strengths/[assessmentId]/results/ExpandableTraitsTable'
import PeerComparison from '@/app/strengths/[assessmentId]/results/PeerComparison'
import {
  SAMPLE_CHILD_NAME, SAMPLE_CHILD_AGE, SAMPLE_AGE_RANGE, SAMPLE_PEER_COUNT,
  SAMPLE_TRAIT_SCORES, SAMPLE_TOP_STRENGTHS, SAMPLE_GROWTH_AREAS, SAMPLE_PEER_AVG, SAMPLE_AI_SUMMARY,
} from '@/lib/sample-personality'

const URL = 'https://eduentry.com/sample-report/personality'

export const metadata: Metadata = {
  title: 'Sample Personality Report — VIA Character Strengths | Eduentry',
  description:
    "See exactly what Eduentry's free character-strengths report looks like before you start. A fictional sample profile across all 24 VIA traits, 6 virtues, radar chart, peer comparison, and an AI-written summary.",
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    url: URL,
    title: 'Sample Personality Report — VIA Character Strengths',
    description: 'A full sample of the free character-strengths report: 24 traits, peer comparison, and an AI summary — see it before you start.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const VIRTUE_COLORS: Record<string, string> = {
  Wisdom: 'bg-blue-100 text-blue-700',
  Courage: 'bg-orange-100 text-orange-700',
  Humanity: 'bg-pink-100 text-pink-700',
  Justice: 'bg-teal-100 text-teal-700',
  Temperance: 'bg-purple-100 text-purple-700',
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

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eduentry.com' },
    { '@type': 'ListItem', position: 2, name: 'Sample Personality Report', item: URL },
  ],
}

export default function SamplePersonalityReportPage() {
  const t = getPersonalityI18n('en')
  const traitScores = SAMPLE_TRAIT_SCORES

  const sortedTraits = (Object.entries(traitScores) as [Trait, number][]).sort((a, b) => b[1] - a[1])

  const traitRows: TraitRow[] = sortedTraits.map(([trait, score]) => {
    const virtue = TRAIT_VIRTUE[trait]
    return {
      trait,
      label: t.traitLabels[trait],
      score,
      virtueLabel: t.virtueNames[virtue] ?? virtue,
      virtueColor: VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]',
    }
  })

  const radarData = sortedTraits.map(([trait, score]) => ({
    trait: t.traitLabels[trait],
    score,
    avg: null,
    peerAvg: SAMPLE_PEER_AVG[trait] ?? null,
    fullMark: 5,
  }))

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <PublicNav />

      {/* Sample banner + intro */}
      <div className="bg-white border-b border-[#e5e7eb] px-4 sm:px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 rounded-full px-3 py-1 text-xs font-semibold mb-5">
            Sample report · fictional child
          </div>
          <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-10 lg:items-end">
            <div>
              <h1 className="text-2xl font-bold text-[#1d1d1f] mb-3">This is what you&rsquo;ll get — before you start</h1>
              <p className="text-[#6e6e73] leading-relaxed max-w-xl">
                Maya is a fictional 11-year-old. We&rsquo;ve given her a deliberately mixed profile — standout curiosity, kindness and creativity, with self-regulation as an area to nurture — so you can see what the character-strengths report looks like across all 24 VIA traits. Your child&rsquo;s report will show their real scores.
              </p>
            </div>
            <CtaLink
              href="/personality-assessment"
              label="sample_personality_intro_cta"
              className="mt-6 lg:mt-0 shrink-0 inline-block bg-[#D97706] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#B45309] transition-colors text-sm text-center"
            >
              Start free — about 5 minutes →
            </CtaLink>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">

        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{t.resultsTitle(SAMPLE_CHILD_NAME)}</h2>
          <p className="text-sm text-[#6e6e73] mt-0.5">{t.ageLabel(SAMPLE_CHILD_AGE)} · Sample profile</p>
        </div>

        {/* Top strengths */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.topStrengthsTitle}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {SAMPLE_TOP_STRENGTHS.map((trait, i) => {
              const virtue = TRAIT_VIRTUE[trait]
              const colorClass = VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
              return (
                <div key={trait} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass}`}>{t.virtueNames[virtue] ?? virtue}</span>
                    <span className="text-xs font-semibold text-[#4F46E5]">#{i + 1}</span>
                  </div>
                  <p className="font-bold text-[#1d1d1f]">{t.traitLabels[trait]}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{t.traitDescriptions[trait]}</p>
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
          <StrengthsRadarChart
            data={radarData}
            showAvg={false}
            showPeerAvg={true}
            scoreLabel={t.traitScore}
            avgLabel={t.avgLabel}
            peerAvgLabel={t.peerAvgLabel}
          />
        </div>

        {/* Growth areas */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.growthAreasTitle}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SAMPLE_GROWTH_AREAS.map((trait) => {
              const virtue = TRAIT_VIRTUE[trait]
              const colorClass = VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
              return (
                <div key={trait} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-5 space-y-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass}`}>{t.virtueNames[virtue] ?? virtue}</span>
                  <p className="font-semibold text-[#1d1d1f]">{t.traitLabels[trait]}</p>
                  <p className="text-xs text-[#6e6e73] leading-relaxed">{t.traitDescriptions[trait]}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* AI Summary */}
        <ExpandableAISummary
          summary={SAMPLE_AI_SUMMARY}
          assessmentId="sample"
          title={t.aiSummaryTitle}
          showMoreLabel={t.showMore}
        />

        {/* Peer comparison */}
        <PeerComparison
          childName={SAMPLE_CHILD_NAME}
          traitScores={traitScores}
          peerAvgScores={SAMPLE_PEER_AVG}
          peerCount={SAMPLE_PEER_COUNT}
          ageRange={SAMPLE_AGE_RANGE}
          traitLabels={t.traitLabels}
          dir={t.dir}
          t={{
            peerTitle: t.peerTitle,
            peerSubtitle: t.peerSubtitle,
            peerAbove: t.peerAbove,
            peerBelow: t.peerBelow,
            peerAvgLabel: t.peerAvgLabel,
          }}
        />

        {/* All traits table */}
        <ExpandableTraitsTable
          rows={traitRows}
          assessmentId="sample"
          title={t.strengthsSection}
          traitHeader={t.traitHeader}
          virtueHeader={t.virtueHeader}
          traitScore={t.traitScore}
          showMoreLabel={t.showMore}
        />

        {/* Closing CTA */}
        <div className="bg-[#fffbeb] rounded-3xl border border-[#fde68a] p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-base font-bold text-[#1d1d1f]">Get your child&rsquo;s real strengths profile</h2>
            <p className="text-sm text-[#92400e] mt-1">Free, about 5 minutes, no account needed. You&rsquo;ll see their top strengths, growth areas, and a personalised AI summary.</p>
          </div>
          <Link
            href="/personality-assessment"
            className="shrink-0 bg-[#D97706] hover:bg-[#B45309] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors text-center"
          >
            Start free assessment →
          </Link>
        </div>

      </main>
      <PublicFooter />
    </div>
  )
}
