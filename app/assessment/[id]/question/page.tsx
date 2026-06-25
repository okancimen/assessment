import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import AssessmentClient from './AssessmentClient'
import InternshipClient from './InternshipClient'

export default async function QuestionPage({
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
    .select('status, assessment_type, children(parent_id, student_user_id)')
    .eq('id', id)
    .single()

  if (!assessment) notFound()

  const child = assessment.children as unknown as { parent_id: string; student_user_id: string | null }
  const isInternship = assessment.assessment_type === 'internship'

  const authorized = isInternship
    ? child.parent_id === user.id || child.student_user_id === user.id
    : child.parent_id === user.id

  if (!authorized) redirect('/dashboard')

  if (assessment.status === 'completed') redirect(`/assessment/${id}/results`)

  if (isInternship) return <InternshipClient assessmentId={id} />
  return <AssessmentClient assessmentId={id} />
}
