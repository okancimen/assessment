'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo href="/dashboard" size="sm" />
          <div className="hidden sm:flex items-center gap-5 text-sm text-gray-500">
            <Link href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</Link>
            <Link href="/children/new" className="hover:text-gray-900 transition-colors">Add child</Link>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </nav>
  )
}
