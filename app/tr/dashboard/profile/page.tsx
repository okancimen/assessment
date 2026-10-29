import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import ProfileForm from '@/components/dashboard/ProfileForm'
import Link from 'next/link'

export const metadata = { title: 'Profil ayarları', robots: { index: false, follow: false } }

function avatarHue(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360
  return h
}

function initials(name: string | null, email: string) {
  if (name) return name.split(' ').map((w: string) => w[0]).slice(0, 2).join('').toUpperCase()
  return email[0].toUpperCase()
}

export default async function TrProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/tr/auth/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single()

  const fullName = profile?.full_name || (user.user_metadata?.full_name as string | undefined) || ''
  const email = user.email ?? ''
  const hue = avatarHue(email)
  const ini = initials(fullName || null, email)

  const memberSince = new Date(user.created_at).toLocaleDateString('tr-TR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F7F8FA' }}>
      <Navbar locale="tr" />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 sm:px-6 py-10 space-y-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs" style={{ color: '#94A3B8' }}>
          <Link href="/tr/dashboard" className="hover:underline">Panel</Link>
          <span>/</span>
          <span style={{ color: '#1E293B' }}>Profil ayarları</span>
        </div>

        {/* Avatar + summary */}
        <div className="bg-white rounded-2xl border p-6 flex items-center gap-5" style={{ borderColor: '#E8ECF2' }}>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
            style={{ backgroundColor: `hsl(${hue}, 45%, 42%)` }}
          >
            {ini}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-base truncate" style={{ color: '#1E293B' }}>
              {fullName || email}
            </p>
            <p className="text-xs mt-0.5 truncate" style={{ color: '#64748B' }}>{email}</p>
            <p className="text-xs mt-1" style={{ color: '#94A3B8' }}>Üyelik başlangıcı: {memberSince}</p>
          </div>
        </div>

        {/* Forms */}
        <ProfileForm initialName={fullName} email={email} />

      </main>
      <PublicFooter />
    </div>
  )
}
