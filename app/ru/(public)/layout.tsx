import PublicNavRU from '@/components/layout/PublicNavRU'
import PublicFooterRU from '@/components/layout/PublicFooterRU'

export default function RuPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavRU />
      {children}
      <PublicFooterRU />
    </div>
  )
}
