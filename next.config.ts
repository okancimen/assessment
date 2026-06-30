import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/internship/assessment/:id/question',
        destination: '/assessment/:id/question',
        permanent: true,
      },
      {
        source: '/internship/assessment/:id/complete',
        destination: '/assessment/:id/complete',
        permanent: true,
      },
      {
        source: '/internship/results/:id',
        destination: '/assessment/:id/results',
        permanent: true,
      },
    ]
  },
  compress: true,
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://xronkbdtsnjibwhuelni.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_ZBLYeo0O_2chDEH7eZJ97A_wc236K0P',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
