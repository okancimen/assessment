import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add new child',
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
