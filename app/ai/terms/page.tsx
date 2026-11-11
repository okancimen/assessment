import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Eduentry',
  description: 'Terms and conditions for using the Eduentry internship readiness assessment platform.',
  alternates: { canonical: 'https://eduentry.ai/terms' },
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.20]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <Link href="/" className="text-sm text-white/30 hover:text-white/60 transition-colors font-mono">← eduentry.ai</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-sm text-white/40 mb-12 font-mono">Last updated: 13 June 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance</h2>
            <p>By registering for or using Eduentry (&ldquo;the Service&rdquo;), you agree to these Terms of Service. If you do not agree, please do not use the Service. These terms are governed by the laws of England and Wales.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. The Service</h2>
            <p>Eduentry provides an AI-powered internship readiness assessment for students aged 14 and above. The Service generates a readiness tier, phase scores, and an AI-written report across four assessment phases. Results are for informational and educational purposes only and do not constitute a formal qualification, diagnosis, or professional recommendation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Eligibility</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be at least 14 years old to use this Service.</li>
              <li>Users under 18 are encouraged to inform a parent or guardian before registering.</li>
              <li>By registering, you confirm that the information you provide is accurate.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Account responsibilities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>Notify us immediately at <a href="mailto:support@eduentry.com" className="text-[#818CF8] hover:underline">support@eduentry.com</a> if you suspect unauthorised access.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Acceptable use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Attempt to circumvent, reverse-engineer, or exploit any part of the platform</li>
              <li>Submit false information to manipulate assessment results</li>
              <li>Use the Service for any unlawful purpose</li>
              <li>Share your account credentials with others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Intellectual property</h2>
            <p>All assessment content, questions, scoring models, and report text are the intellectual property of Eduentry. You may not reproduce, distribute, or create derivative works from any part of the Service without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. AI-generated content</h2>
            <p>Assessment reports include AI-generated text produced by the Anthropic Claude API. This content is generated based on your anonymised assessment performance. Eduentry does not guarantee the accuracy or completeness of AI-generated summaries. They should not be used as the sole basis for career or academic decisions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Free Service and pricing</h2>
            <p>The internship readiness assessment is currently provided free of charge. We reserve the right to introduce paid tiers in the future, with reasonable notice to existing users.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Eduentry shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service. Assessment results are informational only and do not guarantee employment outcomes.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Changes to these terms</h2>
            <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms. We will notify registered users of material changes by email.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
            <p>Questions about these Terms? Email <a href="mailto:support@eduentry.com" className="text-[#818CF8] hover:underline">support@eduentry.com</a>.</p>
          </section>

        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.06] flex gap-4">
          <Link href="/" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Home</Link>
          <Link href="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Privacy</Link>
        </div>
      </div>
    </main>
  )
}
