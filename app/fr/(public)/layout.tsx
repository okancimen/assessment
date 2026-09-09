import PublicNavFR from '@/components/layout/PublicNavFR'
import PublicFooterFR from '@/components/layout/PublicFooterFR'

export default function FrPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavFR />
      {children}
      <PublicFooterFR />
    </div>
  )
}
