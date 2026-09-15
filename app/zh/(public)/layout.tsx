import PublicNavZH from '@/components/layout/PublicNavZH'
import PublicFooterZH from '@/components/layout/PublicFooterZH'

export default function ZhPublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavZH />
      {children}
      <PublicFooterZH />
    </div>
  )
}
