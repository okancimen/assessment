import type { Metadata } from 'next'
import Link from 'next/link'
import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'

export const metadata: Metadata = {
  title: 'Terms of Service — Eduentry',
  description: 'Terms and conditions for using Eduentry\'s free academic assessment platform. Read about eligibility, acceptable use, intellectual property, and your rights.',
  keywords: 'Eduentry terms of service, assessment platform terms, children assessment terms and conditions',
  alternates: { canonical: 'https://eduentry.com/terms', languages: { 'en-GB': 'https://eduentry.com/terms', 'x-default': 'https://eduentry.com/terms' } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Terms of Service — Eduentry',
    description: 'Terms and conditions for using Eduentry\'s free academic assessment platform.',
    url: 'https://eduentry.com/terms',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service — Eduentry',
    description: 'Terms and conditions for using Eduentry\'s free academic assessment platform.',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNav />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: 13 June 2026</p>

        <div className="space-y-10">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Acceptance</h2>
            <p className="text-gray-600 leading-relaxed">
              By registering for or using Eduentry (&ldquo;the Service&rdquo;), you agree to these Terms of Service. If you do not agree, please do not use the Service. These terms are governed by the laws of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. The Service</h2>
            <p className="text-gray-600 leading-relaxed">
              Eduentry provides an AI-powered adaptive academic assessment platform for children aged 6–17. The Service generates standardised scores and percentile rankings across English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning, benchmarked against UK National Curriculum, PISA, and IB standards.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Assessment results are provided for informational and educational purposes only. They do not constitute a formal educational report, diagnosis, or professional recommendation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Eligibility</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>You must be at least 18 years old to create an account.</li>
              <li>Accounts may only be created by parents or legal guardians on behalf of children.</li>
              <li>Children must not create their own accounts without parental consent and supervision.</li>
              <li>By registering, you confirm that you are a parent or guardian of the child profiles you create.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Account responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You are responsible for all activity that occurs under your account.</li>
              <li>You must notify us immediately at <a href="mailto:support@eduentry.com" className="text-indigo-600 hover:underline">support@eduentry.com</a> if you suspect unauthorised access.</li>
              <li>You may not share your account with other families or use it for commercial purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Acceptable use</h2>
            <p className="text-gray-600 leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, scrape, or copy any part of the platform</li>
              <li>Submit false information about a child&rsquo;s age to manipulate assessment results</li>
              <li>Use automated tools to interact with the assessment system</li>
              <li>Interfere with or disrupt the Service or its servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Intellectual property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content, including but not limited to assessment questions, scoring algorithms, software, and design, is the intellectual property of Eduentry and is protected by copyright law. You may not reproduce, distribute, or create derivative works without written permission.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Your child&rsquo;s assessment results and scores belong to you and are accessible only through your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Disclaimers</h2>
            <p className="text-gray-600 leading-relaxed">
              The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the Service will be uninterrupted, error-free, or that assessment results will be accurate in every case. AI-generated questions are reviewed statistically but individual questions may occasionally be imperfect.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Standardised scores are statistical estimates based on Item Response Theory models. They are not a substitute for professional educational assessment, psychological evaluation, or school-based testing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Limitation of liability</h2>
            <p className="text-gray-600 leading-relaxed">
              To the fullest extent permitted by law, Eduentry shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service, including reliance on assessment scores for educational decisions. Our total liability for any claim shall not exceed the amount you paid us in the 12 months preceding the claim (or £50 if the Service was used free of charge).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              You may delete your account at any time. We reserve the right to suspend or terminate accounts that violate these Terms. Upon termination, your right to use the Service ceases immediately. We will delete your personal data in accordance with our <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Changes to these terms</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms at any time. We will notify you by email of material changes. Continued use of the Service after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Governing law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these Terms, contact us at <a href="mailto:support@eduentry.com" className="text-indigo-600 hover:underline">support@eduentry.com</a>.
            </p>
          </section>

        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
