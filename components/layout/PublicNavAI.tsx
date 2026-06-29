import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const TRACKS = [
  { href: '/tech',              label: 'Technology',       desc: 'Coding · Algorithms · Cybersecurity' },
  { href: '/business',          label: 'Business',         desc: 'Strategy · Finance · Operations' },
  { href: '/data-analytics',    label: 'Data Analytics',   desc: 'Charts · SQL · Insights' },
  { href: '/digital-marketing', label: 'Digital Marketing', desc: 'SEO · Social · Campaigns' },
]

export default function PublicNavAI() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(255,255,255,0.82)] backdrop-blur-2xl border-b border-black/[0.08]">
      <div className="max-w-[1024px] mx-auto px-6 h-11 flex items-center justify-between relative">
        <Logo href="/" size="sm" />

        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-xs text-[#1d1d1f]">
          <Link href="/#how-it-works" className="hover:opacity-50 transition-opacity">How it works</Link>

          {/* Tracks dropdown — CSS-only, no JS */}
          <div className="relative group/tracks">
            <span className="flex items-center gap-1 cursor-default hover:opacity-50 transition-opacity select-none">
              Tracks
              <svg className="w-2 h-2 mt-px" viewBox="0 0 8 5" fill="currentColor" aria-hidden="true">
                <path d="M0 0l4 5 4-5z" />
              </svg>
            </span>
            <div className="invisible opacity-0 group-hover/tracks:visible group-hover/tracks:opacity-100 transition-all duration-150 absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-none group-hover/tracks:pointer-events-auto">
              <div className="bg-white rounded-2xl border border-[#d2d2d7] shadow-xl shadow-black/[0.08] p-2 w-56">
                {TRACKS.map(({ href, label, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-3 py-2.5 rounded-xl hover:bg-[#f5f5f7] transition-colors"
                  >
                    <div className="font-semibold text-[#1d1d1f] text-xs mb-0.5">{label}</div>
                    <div className="text-[10px] text-[#6e6e73]">{desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog"           className="hover:opacity-50 transition-opacity">Blog</Link>
          <Link href="/#organisations" className="hover:opacity-50 transition-opacity">For Organisations</Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/auth/login" className="text-xs text-[#1d1d1f] hover:opacity-50 transition-opacity hidden sm:block">Sign in</Link>
          <Link href="/apply" prefetch={false} className="text-xs font-medium text-[#4F46E5] hover:opacity-70 transition-opacity">Apply free</Link>
        </div>
      </div>
    </nav>
  )
}
