import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardPage from '@/app/dashboard/page'

export default async function LocaleDashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/tr/auth/login')
  return <DashboardPage />
}
