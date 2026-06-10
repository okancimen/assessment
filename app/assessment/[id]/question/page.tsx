import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import AssessmentClient from './AssessmentClient'

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
    .select('*, children(parent_id)')
    .eq('id', id)
    .single()

  if (!assessment) notFound()

  const child = assessment.children as { parent_id: string }
  if (child.parent_id !== user.id) redirect('/dashboard')

  if (assessment.status === 'completed') redirect(`/results/${id}`)

  return <AssessmentClient assessmentId={id} />
}
