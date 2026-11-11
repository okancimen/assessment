import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Eduentry',
  description: 'How Eduentry collects and protects your personal data and your internship assessment results. GDPR and UK GDPR compliant.',
  alternates: { canonical: 'https://eduentry.ai/privacy' },
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.20]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <Link href="/" className="text-sm text-white/30 hover:text-white/60 transition-colors font-mono">← eduentry.ai</Link>
        </div>

        <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-white/40 mb-12 font-mono">Last updated: 22 September 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Who we are</h2>
            <p>
              Eduentry (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates two assessment products: an <strong className="text-white">academic benchmarking assessment</strong> for children aged 6–17 and a <strong className="text-white">free internship readiness assessment</strong> for students aged 14 and above. We can be reached at{' '}
              <a href="mailto:privacy@eduentry.com" className="text-[#818CF8] hover:underline">privacy@eduentry.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Data we collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-white/90 mb-1">Account registration</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Email address and password (hashed — never stored in plain text)</li>
                  <li>Full name, account creation date, and last login</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white/90 mb-1">Internship readiness assessment</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Selected internship track (Technology, Business, Data Analytics, or Digital Marketing)</li>
                  <li>University name and year group</li>
                  <li>Assessment responses across four phases</li>
                  <li>Readiness tier, phase scores, and AI-generated report text</li>
                  <li>CV file (optional, PDF only, stored securely)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-white/90 mb-1">Usage data</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pages visited and session duration (Google Analytics 4, IP anonymised)</li>
                  <li>Heatmaps and session replays (Microsoft Clarity, anonymised)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How we use your data</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To create and manage your account</li>
              <li>To deliver adaptive assessments and generate personalised reports</li>
              <li>To calculate readiness tiers and AI-powered report summaries</li>
              <li>To improve assessment accuracy</li>
              <li>To send essential service emails (password reset, assessment completion)</li>
            </ul>
            <p className="mt-3">We do <strong className="text-white">not</strong> sell your data, use it for advertising, or share individual-level data with any third party except as described in Section 5.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Minimum age</h2>
            <p>The internship readiness assessment is available to students aged 14 and above. Users under 18 are encouraged to inform a parent or guardian before registering. We do not knowingly allow anyone under 14 to register. If you believe a child under 14 has registered, contact <a href="mailto:privacy@eduentry.com" className="text-[#818CF8] hover:underline">privacy@eduentry.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Third parties</h2>
            <div className="space-y-3">
              <p><strong className="text-white">Supabase</strong> — database and authentication. EU-region servers. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">Privacy Policy</a>.</p>
              <p><strong className="text-white">Anthropic Claude API</strong> — generates AI report summaries. Only anonymised performance data (scores and track) is sent — no names or email addresses. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">Privacy Policy</a>.</p>
              <p><strong className="text-white">Google Analytics 4</strong> — anonymised usage analytics. IP addresses anonymised before storage. <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">Opt out</a>.</p>
              <p><strong className="text-white">Microsoft Clarity</strong> — anonymised heatmaps. All input fields masked; no keystrokes recorded. <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">Privacy Statement</a>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Legal basis (UK / EU GDPR)</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong className="text-white">Contract performance</strong> — to provide the assessment service you signed up for</li>
              <li><strong className="text-white">Legitimate interests</strong> — improving our platform and preventing fraud</li>
              <li><strong className="text-white">Consent</strong> — analytics cookies (may be withdrawn at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Your rights</h2>
            <p className="mb-3">Under UK and EU GDPR, you have the right to access, rectify, erase, port, restrict, or object to processing of your personal data. Email <a href="mailto:privacy@eduentry.com" className="text-[#818CF8] hover:underline">privacy@eduentry.com</a> — we respond within 30 days. You may also complain to the <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#818CF8] hover:underline">ICO (UK)</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Data retention</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Account data: retained while your account is active</li>
              <li>Assessment scores: retained for 3 years after last login</li>
              <li>Analytics data: 14 months (Google Analytics default)</li>
              <li>Deleted accounts: all personal data removed within 30 days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Security</h2>
            <p>All data is transmitted over HTTPS. Passwords are hashed using bcrypt. Database access is restricted to authenticated server-side requests only.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Contact</h2>
            <p>Email <a href="mailto:privacy@eduentry.com" className="text-[#818CF8] hover:underline">privacy@eduentry.com</a> for any privacy-related questions.</p>
          </section>

        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.06] flex gap-4">
          <Link href="/" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Home</Link>
          <Link href="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors font-mono">Terms</Link>
        </div>
      </div>
    </main>
  )
}
