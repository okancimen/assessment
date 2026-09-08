import PublicNavTR from '@/components/layout/PublicNavTR'
import PublicFooterTR from '@/components/layout/PublicFooterTR'

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavTR />
      {children}
      <PublicFooterTR />
    </div>
  )
}
