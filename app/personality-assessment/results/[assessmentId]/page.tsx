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
          {/* Blurred preview */}
          <div className="p-6 space-y-3 blur-sm select-none pointer-events-none" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7] p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#d2d2d7] shrink-0" />
                <div className="space-y-1.5 flex-1">
                  <div className="h-3 bg-[#d2d2d7] rounded-full w-1/3" />
                  <div className="h-2 bg-[#e5e7eb] rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/85 backdrop-blur-[2px] px-6 text-center gap-4">
            <p className="text-base font-bold text-[#1d1d1f]">{t.unlockTitle(totalTraits)}</p>
            <p className="text-sm text-[#6e6e73] max-w-xs">{t.unlockDesc}</p>
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

      </main>
      <PublicFooter locale={locale} />
    </div>
  )
}
