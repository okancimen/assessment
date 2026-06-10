import Link from 'next/link'
import { SUBJECT_LABELS, SUBJECT_DESCRIPTIONS, SUBJECTS } from '@/types'

const subjectIcons: Record<string, string> = {
  english: '📚',
  mathematics: '🔢',
  verbal_reasoning: '💬',
  nonverbal_reasoning: '🔷',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600 tracking-tight">AcademIQ</span>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm text-gray-600 hover:text-gray-900 font-medium">
              Sign in
            </Link>
            <Link
              href="/auth/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-indigo-500 rounded-full inline-block" />
          Adaptive assessment for ages 7–16
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
          Understand your child&apos;s{' '}
          <span className="text-indigo-600">academic potential</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          A data-driven cognitive assessment that adapts to your child&apos;s level in real time,
          benchmarking their English, Mathematics, and Reasoning skills against their age group.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/auth/register"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100"
          >
            Start Assessment
          </Link>
          <Link
            href="#how-it-works"
            className="text-gray-600 px-8 py-4 rounded-xl text-base font-semibold hover:text-gray-900 hover:bg-gray-50 transition-colors border border-gray-200"
          >
            How it works
          </Link>
        </div>
      </section>

      {/* What we test */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Four core skill areas</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Each test adapts in difficulty based on your child&apos;s answers, giving a precise
              picture of ability at every topic level.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUBJECTS.map((subject) => (
              <div key={subject} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{subjectIcons[subject]}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{SUBJECT_LABELS[subject]}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{SUBJECT_DESCRIPTIONS[subject]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: '01',
              title: 'Register & add your child',
              desc: "Create a parent account and add your child's profile. The assessment adapts to their exact age.",
            },
            {
              step: '02',
              title: 'Complete 4 adaptive tests',
              desc: 'Your child takes four 15-question tests at home. Questions adjust in difficulty as they go — harder for correct answers, easier for wrong ones.',
            },
            {
              step: '03',
              title: 'Get detailed results',
              desc: 'Receive standardized scores benchmarked against children the same age, with a topic-by-topic breakdown of strengths and gaps.',
            },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-5">
              <div className="text-4xl font-bold text-indigo-100 leading-none flex-shrink-0">{step}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: '60', label: 'Questions total' },
            { value: '1–2h', label: 'Completion time' },
            { value: '7–16', label: 'Age range' },
            { value: '4', label: 'Subject areas' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-4xl font-bold mb-1">{value}</div>
              <div className="text-indigo-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-8">Create your account and begin your child&apos;s assessment today.</p>
        <Link
          href="/auth/register"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-100 inline-block"
        >
          Create free account
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-gray-400">
          <span className="font-semibold text-gray-600">AcademIQ</span>
          <span>Adaptive academic assessment for children</span>
        </div>
      </footer>
    </div>
  )
}
