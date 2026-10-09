import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import { getPersonalityI18n } from '@/lib/personality-i18n'
import { TRAIT_LABELS, TRAIT_DESCRIPTIONS } from '@/lib/personality-questions'

export default async function StrengthsLandingPage({ locale }: { locale?: string }) {
  const t = getPersonalityI18n(locale)
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const exampleTraits = ['curiosity', 'kindness', 'perseverance', 'leadership', 'bravery', 'gratitude'] as const

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col" dir={t.dir}>
      <Navbar locale={locale} />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-16 space-y-16">

        {/* Hero */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#eef2ff] text-[#4F46E5] text-xs font-semibold px-3 py-1.5 rounded-full">
            VIA Character Strengths · Ages 6–20
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d1d1f] tracking-tight leading-tight">
            {t.landingTitle}
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
            {t.landingSubtitle}
          </p>
          {user ? (
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center bg-[#4F46E5] text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-[#4338CA] transition-colors"
            >
              {t.landingCta}
            </Link>
          ) : (
            <Link
              href="/auth/register"
              className="inline-flex items-center justify-center bg-[#4F46E5] text-white font-semibold px-8 py-3.5 rounded-full text-base hover:bg-[#4338CA] transition-colors"
            >
              {t.loginFirst}
            </Link>
          )}
        </div>

        {/* Example traits */}
        <div className="bg-white rounded-3xl border border-[#d2d2d7] p-8">
          <h2 className="text-lg font-bold text-[#1d1d1f] mb-6 tracking-tight">Sample traits measured</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {exampleTraits.map((trait) => (
              <div key={trait} className="p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]">
                <p className="font-semibold text-[#1d1d1f] text-sm">{TRAIT_LABELS[trait]}</p>
                <p className="text-xs text-[#6e6e73] mt-1 leading-relaxed">{TRAIT_DESCRIPTIONS[trait]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Add your child', desc: 'Enter their date of birth — the assessment adapts to their age automatically.' },
            { step: '2', title: 'Rate 24–48 statements', desc: 'Score each statement from 1 to 5 circles based on what you observe every day.' },
            { step: '3', title: 'Get the full profile', desc: 'A radar chart, top strengths, growth areas, and an AI-generated personality summary.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-white rounded-3xl border border-[#d2d2d7] p-6 space-y-3">
              <div className="w-9 h-9 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-sm">{step}</div>
              <p className="font-semibold text-[#1d1d1f]">{title}</p>
              <p className="text-sm text-[#6e6e73] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </main>
      <PublicFooter />
    </div>
  )
}
