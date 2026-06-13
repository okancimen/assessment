import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://xronkbdtsnjibwhuelni.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_ZBLYeo0O_2chDEH7eZJ97A_wc236K0P',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
