import type { Metadata } from 'next'
import AdminSidebar from '@/components/admin/AdminSidebar'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F4F5F7' }}>
      <AdminSidebar />
      <div className="flex-1 min-w-0 overflow-auto">{children}</div>
    </div>
  )
}
