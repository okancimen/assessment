import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import { SUBJECTS, SUBJECT_LABELS, SUBJECT_DESCRIPTIONS, QUESTIONS_PER_SUBJECT } from '@/types'
import { getAge } from '@/lib/utils'

const subjectIcons: Record<string, string> = {
  english: '📚',
  mathematics: '🔢',
  verbal_reasoning: '💬',
  nonverbal_reasoning: '🔷',
}

export default async function AssessmentStartPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: assessment } = await supabase
    .from('assessments')
    .select('*, children(*)')
    .eq('id', id)
    .single()

  if (!assessment) notFound()

  const child = assessment.children as { name: string; date_of_birth: string; parent_id: string }
  if (child.parent_id !== user.id) redirect('/dashboard')

  if (assessment.status === 'completed') redirect(`/results/${id}`)
  if (assessment.status === 'in_progress') redirect(`/assessment/${id}/question`)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-2xl mx-auto mb-4">
              {child.name[0].toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {child.name}&apos;s Assessment
            </h1>
            <p className="text-gray-500">
              Age {getAge(child.date_of_birth)} · Adaptive difficulty
            </p>
          </div>

          {/* What to expect */}
          <div className="bg-indigo-50 rounded-xl p-5 space-y-3">
            <h2 className="font-semibold text-indigo-900">What to expect</h2>
            <ul className="space-y-2 text-sm text-indigo-800">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span><strong>{SUBJECTS.length} subjects</strong>, {QUESTIONS_PER_SUBJECT} questions each — {SUBJECTS.length * QUESTIONS_PER_SUBJECT} questions total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Questions <strong>adapt in difficulty</strong> based on each answer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Takes approximately <strong>60–90 minutes</strong> with breaks between subjects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✓</span>
                <span>Find a <strong>quiet space</strong> and ensure a stable internet connection</span>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-3">Subjects covered</h2>
            <div className="grid grid-cols-2 gap-3">
              {SUBJECTS.map((subject, i) => (
                <div key={subject} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                  <span className="text-xl">{subjectIcons[subject]}</span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-gray-400">{i + 1}</span>
                      <span className="text-sm font-semibold text-gray-800">{SUBJECT_LABELS[subject]}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{SUBJECT_DESCRIPTIONS[subject]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard" className="flex-1 text-center px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
              Back to dashboard
            </Link>
            <Link
              href={`/assessment/${id}/question`}
              className="flex-1 text-center bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Begin assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
