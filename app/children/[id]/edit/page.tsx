import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import EditChildForm from './EditChildForm'

interface ChildRow {
  id: string
  name: string
  date_of_birth: string
  goals: string[]
  subjects: string[]
  outcome_goal: string | null
}

export default async function EditChildPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ locale?: string }>
}) {
  const { id } = await params
  const { locale } = await searchParams

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: child } = await supabase
    .from('children')
    .select('id, name, date_of_birth, goals, subjects, outcome_goal')
    .eq('id', id)
    .eq('parent_id', user.id)
    .single()

  if (!child) notFound()

  return <EditChildForm child={child as ChildRow} locale={locale ?? 'en'} />
}
