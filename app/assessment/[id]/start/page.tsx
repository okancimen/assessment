import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import { SUBJECTS, SUBJECT_LABELS, SUBJECT_DESCRIPTIONS, QUESTIONS_PER_SUBJECT } from '@/types'
import StartActions from './StartActions'
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

  if (assessment.status === 'completed') redirect(`/assessment/${id}/results`)
  if (assessment.status === 'in_progress') redirect(`/assessment/${id}/question`)

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8 space-y-8">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#4F46E5] font-bold text-2xl mx-auto mb-4">
              {child.name[0].toUpperCase()}
            </div>
            <h1 className="text-2xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
              {child.name}&apos;s Assessment
            </h1>
            <p className="text-sm text-[#6e6e73]">
              Age {getAge(child.date_of_birth)} · Adaptive difficulty
            </p>
          </div>

          {/* What to expect */}
          <div className="bg-[#eef2ff] rounded-2xl p-5 space-y-3">
            <h2 className="font-semibold text-[#1d1d1f] text-sm">What to expect</h2>
            <ul className="space-y-2 text-sm text-[#4338CA]">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#4F46E5]">✓</span>
                <span><strong>{SUBJECTS.length} subjects</strong>, {QUESTIONS_PER_SUBJECT} questions each — {SUBJECTS.length * QUESTIONS_PER_SUBJECT} questions total</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#4F46E5]">✓</span>
                <span>Questions <strong>adapt in difficulty</strong> based on each answer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#4F46E5]">✓</span>
                <span>Takes approximately <strong>60–90 minutes</strong> with breaks between subjects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-[#4F46E5]">✓</span>
                <span>Find a <strong>quiet space</strong> and ensure a stable internet connection</span>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h2 className="font-semibold text-[#1d1d1f] mb-3 text-sm">Subjects covered</h2>
            <div className="grid grid-cols-2 gap-3">
              {SUBJECTS.map((subject, i) => (
                <div key={subject} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]">
                  <span className="text-xl">{subjectIcons[subject]}</span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold text-[#6e6e73]">{i + 1}</span>
                      <span className="text-sm font-semibold text-[#1d1d1f]">{SUBJECT_LABELS[subject]}</span>
                    </div>
                    <p className="text-xs text-[#6e6e73] mt-0.5">{SUBJECT_DESCRIPTIONS[subject]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <StartActions assessmentId={id} />
        </div>
      </div>
    </div>
  )
}
