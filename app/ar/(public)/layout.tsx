import { Cairo } from 'next/font/google'
import PublicNavAR from '@/components/layout/PublicNavAR'
import PublicFooterAR from '@/components/layout/PublicFooterAR'

const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '600', '700', '800'], variable: '--font-cairo' })

export default function ArPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen bg-white flex flex-col ${cairo.variable}`} dir="rtl" style={{ fontFamily: 'var(--font-cairo), system-ui' }}>
      <PublicNavAR />
      {children}
      <PublicFooterAR />
    </div>
  )
}
