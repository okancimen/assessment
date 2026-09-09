import PublicNavES from '@/components/layout/PublicNavES'
import PublicFooterES from '@/components/layout/PublicFooterES'

export default function EsPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavES />
      {children}
      <PublicFooterES />
    </div>
  )
}
