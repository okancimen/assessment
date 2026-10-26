import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isAdminEmail } from '@/lib/admin'
import { cookies } from 'next/headers'
import { redirect, notFound } from 'next/navigation'
import { Trait } from '@/lib/personality-questions'
import { getPersonalityI18n } from '@/lib/personality-i18n'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

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

function ageToDob(age: number): string {
  const d = new Date()
  d.setFullYear(d.getFullYear() - age)
  return d.toISOString().slice(0, 10)
}

// Localised academic-assessment landing slugs
const ACADEMIC_HREF: Record<string, string> = {
  en: '/academic-assessment',
  tr: '/tr/akademik-degerlendirme',
  fr: '/fr/evaluation-academique',
  es: '/es/evaluacion-academica',
  ar: '/ar/taqyim-acadimi',
  ru: '/ru/akademicheskaya-otsenka',
  zh: '/zh/xueshu-pinggu',
}

export default async function GuestResultsPage({
  params,
  searchParams,
}: {
  params: Promise<{ assessmentId: string }>
  searchParams?: Promise<{ locale?: string }>
}) {
  const { assessmentId } = await params
  const { locale = 'en' } = (await searchParams) ?? {}

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const cookieStore = await cookies()
  const guestToken = cookieStore.get('pg_tok')?.value
  const admin = createAdminClient()

  const isAdmin = isAdminEmail(user?.email)

  if (user && !isAdmin) {
    // If pg_tok present and matches this assessment → claim it inline
    if (guestToken) {
      const { data: guestAssessment } = await admin
        .from('personality_assessments')
        .select('id, guest_name, guest_age')
        .eq('id', assessmentId)
        .eq('guest_token', guestToken)
        .single()
      if (guestAssessment) {
        const approxDob = ageToDob(guestAssessment.guest_age ?? 10)
        const { data: child } = await admin
          .from('children')
          .insert({
            name: guestAssessment.guest_name ?? 'Child',
            date_of_birth: approxDob,
            parent_id: user.id,
          })
          .select('id')
          .single()
        if (child) {
          await admin
            .from('personality_assessments')
            .update({ child_id: child.id, parent_id: user.id, guest_token: null })
            .eq('id', assessmentId)
        }
        redirect(`/strengths/${assessmentId}/results${locale !== 'en' ? `?locale=${locale}` : ''}`)
      }
    }
    // Already owned by this user → full results
    const { data: owned } = await admin
      .from('personality_assessments')
      .select('id')
      .eq('id', assessmentId)
      .eq('parent_id', user.id)
      .single()
    if (owned) redirect(`/strengths/${assessmentId}/results`)
    redirect('/personality-assessment')
  }

  // Admins can view any guest result by id; guests need a matching token.
  let assessment
  if (isAdmin) {
    const { data } = await admin
      .from('personality_assessments')
      .select('id, status, guest_name, guest_token')
      .eq('id', assessmentId)
      .single()
    if (!data) notFound()
    assessment = data
  } else {
    if (!guestToken) redirect('/personality-assessment')
    const { data } = await admin
      .from('personality_assessments')
      .select('id, status, guest_name, guest_token')
      .eq('id', assessmentId)
      .eq('guest_token', guestToken)
      .single()
    if (!data) redirect('/personality-assessment')
    assessment = data
  }

  if (assessment.status !== 'completed') {
    if (isAdmin) notFound()
    redirect(`/personality-assessment/question/${assessmentId}`)
  }

  const { data: result } = await admin
    .from('personality_results')
    .select('top_strengths, trait_scores')
    .eq('assessment_id', assessmentId)
    .single()

  if (!result) notFound()

  const t = getPersonalityI18n(locale)
  const traitScores = result.trait_scores as Record<Trait, number>
  const topStrengths = (result.top_strengths as Trait[]).slice(0, 3)
  const childName = assessment.guest_name ?? 'Your child'
  const totalTraits = Object.keys(traitScores).length

  const lockedTraits = (Object.entries(traitScores) as [Trait, number][])
    .sort(([, a], [, b]) => b - a)
    .map(([trait]) => trait)
    .filter((trait) => !topStrengths.includes(trait))
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <PublicNav locale={locale} />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10 space-y-6">

        <div>
          <h1 className="text-2xl font-bold text-[#1d1d1f]">{t.guestResultsTitle(childName)}</h1>
          <p className="text-sm text-[#6e6e73] mt-1">{t.viaFrameworkSubtitle}</p>
        </div>

        {/* Top 3 — free */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-4">
          <h2 className="text-sm font-semibold text-[#1d1d1f]">{t.topStrengthsTitle}</h2>
          <div className="grid gap-4">
            {topStrengths.map((trait, i) => {
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
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          n <= Math.round(traitScores[trait])
                            ? 'bg-[#4F46E5] border-[#4F46E5]'
                            : 'border-[#d2d2d7]'
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

        {/* Login gate — blurred preview + CTA */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] overflow-hidden relative">
          {/* Blurred preview — real trait data so user sees what they're missing */}
          <div className="p-6 space-y-3 blur-sm select-none pointer-events-none" aria-hidden="true">
            {lockedTraits.map((trait, i) => {
              const virtue = TRAIT_VIRTUE[trait]
              const colorClass = VIRTUE_COLORS[virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
              return (
                <div key={i} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colorClass}`}>{virtue}</span>
                    <span className="text-xs font-semibold text-[#4F46E5]">#{i + 4}</span>
                  </div>
                  <p className="font-bold text-sm text-[#1d1d1f]">{t.traitLabels[trait] ?? trait}</p>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`w-4 h-4 rounded-full border ${
                          n <= Math.round(traitScores[trait])
                            ? 'bg-[#4F46E5] border-[#4F46E5]'
                            : 'border-[#d2d2d7]'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-[#6e6e73] ml-1">{traitScores[trait].toFixed(1)}/5</span>
                  </div>
                </div>
              )
            })}
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/85 backdrop-blur-[2px] px-6 text-center gap-4">
            {/* #4 strength teaser */}
            {lockedTraits[0] && (() => {
              const t4 = lockedTraits[0]
              const t4Virtue = TRAIT_VIRTUE[t4]
              const t4Color = VIRTUE_COLORS[t4Virtue] ?? 'bg-[#eef2ff] text-[#4F46E5]'
              return (
                <div className="bg-white rounded-2xl border border-[#d2d2d7] px-4 py-3 w-full max-w-xs space-y-1.5">
                  <p className="text-[10px] font-semibold text-[#6e6e73] uppercase tracking-wider">Your child's #4 strength</p>
                  <p className="font-bold text-[#1d1d1f]">{t.traitLabels[t4]}</p>
                  <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${t4Color}`}>
                    {t.virtueNames[t4Virtue] ?? t4Virtue}
                  </span>
                  <div className="flex items-center gap-1 justify-center pt-0.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div
                        key={n}
                        className={`w-3.5 h-3.5 rounded-full ${n <= Math.round(traitScores[t4]) ? 'bg-[#4F46E5]' : 'border border-[#d2d2d7]'}`}
                      />
                    ))}
                  </div>
                </div>
              )
            })()}
            <p className="text-base font-bold text-[#1d1d1f]">{t.unlockTitle(totalTraits)}</p>
            <ul className="text-sm text-[#3d3d3f] space-y-2 text-start max-w-xs w-full">
              {t.unlockBullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-[#4F46E5] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
              <Link
                href={`${locale !== 'en' ? `/${locale}` : ''}/auth/register?redirect=${encodeURIComponent(`/personality-assessment/results/${assessmentId}${locale !== 'en' ? `?locale=${locale}` : ''}`)}`}
                className="flex-1 bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors text-center"
              >
                {t.createAccountBtn}
              </Link>
              <Link
                href={`${locale !== 'en' ? `/${locale}` : ''}/auth/login?redirect=${encodeURIComponent(`/personality-assessment/results/${assessmentId}${locale !== 'en' ? `?locale=${locale}` : ''}`)}`}
                className="flex-1 border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#f5f5f7] transition-colors text-center"
              >
                {t.signInBtn}
              </Link>
            </div>
          </div>
        </div>

        {/* Cross-sell: academic assessment */}
        <div className="bg-[#eef2ff] rounded-3xl border border-[#c7d2fe] p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-[#4F46E5] uppercase tracking-wider mb-1">{t.crossSellEyebrow}</p>
            <h2 className="text-base font-bold text-[#1d1d1f]">{t.crossSellTitle(childName)}</h2>
            <p className="text-sm text-[#6e6e73] mt-1">{t.crossSellDesc}</p>
          </div>
          <Link
            href={ACADEMIC_HREF[locale] ?? '/academic-assessment'}
            className="shrink-0 bg-[#4F46E5] hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors text-center"
          >
            {t.crossSellCta}
          </Link>
        </div>

      </main>
      <PublicFooter locale={locale} />
    </div>
  )
}
