'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
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
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border-b border-[#d2d2d7]/60">
      <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <Logo href="/" size="sm" />
          <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-[#1d1d1f]">
            <Link href="/dashboard" className="hover:text-[#4F46E5] transition-colors">Dashboard</Link>
            <Link href="/children/new" className="hover:text-[#4F46E5] transition-colors">Add child</Link>
          </div>
        </div>
        <button
          onClick={handleSignOut}
          className="text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors px-3 py-1.5 rounded-full hover:bg-[#f5f5f7]"
        >
          Sign out
        </button>
      </div>
    </nav>
  )
}
