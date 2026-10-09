import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Navbar from '@/components/dashboard/Navbar'
import StartStrengthsButton from './StartStrengthsButton'
import { getTier, getQuestions, TRAIT_LABELS, TRAITS_BY_TIER } from '@/lib/personality-questions'
import { getPersonalityI18n } from '@/lib/personality-i18n'
import { getAge } from '@/lib/utils'

export default async function StrengthsStartPage({
  params,
  searchParams,
}: {
  params: Promise<{ assessmentId: string }>
  searchParams?: Promise<{ locale?: string }>
}) {
  const { assessmentId: childId } = await params
  const sp = await searchParams
  const locale = sp?.locale ?? 'en'
  const t = getPersonalityI18n(locale)

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: child } = await supabase
    .from('children')
    .select('id, name, date_of_birth, parent_id')
    .eq('id', childId)
    .eq('parent_id', user.id)
    .single()

  if (!child) notFound()

  const age = getAge(child.date_of_birth)
  if (age < 6 || age > 20) redirect('/dashboard')

  const tier = getTier(child.date_of_birth)
  const questions = getQuestions(tier)
  const traits = TRAITS_BY_TIER[tier]

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col" dir={t.dir}>
      <Navbar locale={locale} />
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8 space-y-8">

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#4F46E5] font-bold text-xl mx-auto">
              {child.name[0].toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">{t.startTitle(child.name)}</h1>
            <p className="text-sm text-[#6e6e73]">{t.startSubtitle(age)}</p>
          </div>

          {/* What it measures */}
          <div className="bg-[#eef2ff] rounded-2xl p-5 space-y-3">
            <p className="font-semibold text-[#1d1d1f] text-sm">{t.startWhatTitle}</p>
            <p className="text-sm text-[#4338CA] leading-relaxed">{t.startWhatDesc}</p>
            <ul className="space-y-1.5 text-sm text-[#4338CA]">
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] mt-0.5">✓</span>
                <span><strong>{questions.length} statements</strong> · rate each 1–5 circles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] mt-0.5">✓</span>
                <span><strong>15–20 minutes</strong> · you can pause any time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4F46E5] mt-0.5">✓</span>
                <span>Get a <strong>full character profile</strong> with AI summary at the end</span>
              </li>
            </ul>
          </div>

          {/* Traits covered */}
          <div>
            <p className="font-semibold text-[#1d1d1f] text-sm mb-3">
              {t.startTraitsTitle} · {t.startTierLabel(tier)}
            </p>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span key={trait} className="bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] text-xs font-medium px-3 py-1 rounded-full">
                  {TRAIT_LABELS[trait]}
                </span>
              ))}
            </div>
          </div>

          <StartStrengthsButton childId={childId} locale={locale} label={t.startBtn} />
        </div>
      </main>
    </div>
  )
}
