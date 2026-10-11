import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { cookies } from 'next/headers'
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
  const cookieStore = await cookies()
  const guestToken = cookieStore.get('ac_tok')?.value

  if (!user && !guestToken) redirect('/auth/login')

  const db = createAdminClient()
  const { data: assessment } = await db
    .from('assessments')
    .select('status, assessment_type, child_id, guest_token, children(parent_id, student_user_id)')
    .eq('id', id)
    .single()

  if (!assessment) notFound()

  const isGuest = !assessment.child_id && !!assessment.guest_token
  const isInternship = assessment.assessment_type === 'internship'

  if (isGuest) {
    if (!guestToken || assessment.guest_token !== guestToken) redirect('/academic-assessment')
  } else {
    if (!user) redirect('/auth/login')
    const child = assessment.children as unknown as { parent_id: string; student_user_id: string | null }
    const authorized = isInternship
      ? child.parent_id === user.id || child.student_user_id === user.id
      : child.parent_id === user.id
    if (!authorized) redirect('/dashboard')
  }

  if (assessment.status === 'completed') redirect(`/assessment/${id}/results`)

  if (isInternship) return <InternshipClient assessmentId={id} />
  return <AssessmentClient assessmentId={id} />
}
