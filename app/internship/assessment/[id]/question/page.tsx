import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import InternshipClient from './InternshipClient'

export default async function InternshipQuestionPage({
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
    .select('status, children(parent_id, student_user_id)')
    .eq('id', id)
    .eq('assessment_type', 'internship')
    .single()

  if (!assessment) redirect('/dashboard')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const child = (assessment.children as any) as { parent_id: string; student_user_id: string | null } | null
  if (!child || (child.parent_id !== user.id && child.student_user_id !== user.id)) {
    redirect('/dashboard')
  }

  if (assessment.status === 'completed') {
    redirect(`/internship/results/${id}`)
  }

  return <InternshipClient assessmentId={id} />
}
