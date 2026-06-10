import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import CompleteClient from './CompleteClient'

export default async function CompletePage({
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
    .select('*, children(parent_id, name)')
    .eq('id', id)
    .single()

  if (!assessment) notFound()

  const child = assessment.children as { parent_id: string; name: string }
  if (child.parent_id !== user.id) redirect('/dashboard')

  return <CompleteClient assessmentId={id} childName={child.name} />
}
