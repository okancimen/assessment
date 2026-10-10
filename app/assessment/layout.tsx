import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Assessment',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://xronkbdtsnjibwhuelni.supabase.co" />
      {children}
    </>
  )
}
