import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Eduentry collects, uses, and protects your personal data and your child\'s assessment information. GDPR compliant.',
  alternates: { canonical: 'https://eduentry.com/privacy', languages: { 'en-GB': 'https://eduentry.com/privacy', 'x-default': 'https://eduentry.com/privacy' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: 13 June 2026</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Who we are</h2>
            <p className="text-gray-600 leading-relaxed">
              Eduentry (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an online academic assessment platform for children aged 6–17. We are operated by the Eduentry team and can be reached at{' '}
              <a href="mailto:privacy@eduentry.com" className="text-indigo-600 hover:underline">privacy@eduentry.com</a>.
              This policy explains what personal data we collect, why, and how you can exercise your rights under the UK GDPR and EU GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Data we collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Parent / guardian account</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Email address and password (hashed)</li>
                  <li>Full name (provided at registration)</li>
                  <li>Account creation date and last login</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Child profiles</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Child&rsquo;s first name and date of birth (to calculate age-appropriate questions)</li>
                  <li>Assessment responses, standardised scores, and percentile rankings</li>
                  <li>Subject-level performance data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Usage data</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Pages visited, session duration, browser type (via Google Analytics)</li>
                  <li>IP address (anonymised after 14 days by Google Analytics)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How we use your data</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>To create and manage your account and child profiles</li>
              <li>To generate adaptive questions appropriate for your child&rsquo;s age and ability</li>
              <li>To calculate standardised scores and percentile rankings</li>
              <li>To improve the accuracy of our Item Response Theory models</li>
              <li>To send essential service emails (password reset, assessment completion)</li>
              <li>To analyse aggregate usage patterns and improve the platform</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              We do <strong>not</strong> sell your data to third parties, use it for advertising, or share individual-level data with any third party except as described in Section 5.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Children&rsquo;s data</h2>
            <p className="text-gray-600 leading-relaxed">
              Eduentry is designed for use by parents and guardians on behalf of their children. We do not knowingly allow children to create their own accounts. All child profiles must be created and managed by a verified parent or guardian aged 18 or over.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Assessment responses and scores are linked to the child&rsquo;s profile and are accessible only to the parent or guardian account holder. We retain this data for as long as the parent account is active, or for 3 years after the last login — whichever comes first.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third parties</h2>
            <div className="space-y-3 text-gray-600">
              <p><strong className="text-gray-800">Supabase</strong> — our database and authentication provider. Data is stored on EU-region servers. <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Supabase Privacy Policy</a>.</p>
              <p><strong className="text-gray-800">Anthropic Claude API</strong> — used to generate assessment questions. Question prompts include the child&rsquo;s age and subject only — no names or personally identifiable information are sent. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Anthropic Privacy Policy</a>.</p>
              <p><strong className="text-gray-800">Google Analytics 4</strong> — anonymised usage analytics. IP addresses are anonymised. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Google&rsquo;s opt-out browser add-on</a>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Legal basis (UK / EU GDPR)</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Contract performance</strong> — to provide the assessment service you signed up for</li>
              <li><strong>Legitimate interests</strong> — improving our platform and preventing fraud</li>
              <li><strong>Consent</strong> — analytics cookies (you may withdraw consent at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Your rights</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Under UK and EU GDPR, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li><strong>Access</strong> — request a copy of your personal data</li>
              <li><strong>Rectification</strong> — correct inaccurate data</li>
              <li><strong>Erasure</strong> — request deletion of your account and all associated data</li>
              <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
              <li><strong>Objection</strong> — object to processing based on legitimate interests</li>
              <li><strong>Restriction</strong> — request that we limit how we process your data</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              To exercise any of these rights, email <a href="mailto:privacy@eduentry.com" className="text-indigo-600 hover:underline">privacy@eduentry.com</a>. We will respond within 30 days. You also have the right to lodge a complaint with the{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">ICO (UK)</a> or your local supervisory authority.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Data retention</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Account data: retained while your account is active</li>
              <li>Assessment scores: retained for 3 years after last login</li>
              <li>Analytics data: retained for 14 months (Google Analytics default)</li>
              <li>Deleted accounts: all personal data removed within 30 days of deletion request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Security</h2>
            <p className="text-gray-600 leading-relaxed">
              All data is transmitted over HTTPS. Passwords are hashed using bcrypt. Database access is restricted to authenticated server-side requests only. We conduct regular security reviews of our infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to this policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy from time to time. We will notify you by email if we make material changes. The &ldquo;Last updated&rdquo; date at the top of this page always reflects the most recent version.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For any privacy-related questions, contact us at{' '}
              <a href="mailto:privacy@eduentry.com" className="text-indigo-600 hover:underline">privacy@eduentry.com</a>.
            </p>
          </section>

        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
