import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'إنشاء حساب | Eduentry',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
