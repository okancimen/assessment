import type { NextConfig } from "next";
import { BLOG_POSTS_TR } from './app/blog/posts-tr'
import { BLOG_POSTS_ES } from './app/blog/posts-es'
import { BLOG_POSTS_FR } from './app/blog/posts-fr'
import { BLOG_POSTS_AR } from './app/blog/posts-ar'
import { BLOG_POSTS_RU } from './app/blog/posts-ru'
import { BLOG_POSTS_ZH } from './app/blog/posts-zh'

const nextConfig: NextConfig = {
  experimental: {},
  turbopack: {
    rules: {
      // All features in polyfill-module.js (trimStart/End, Array.flat/flatMap/at,
      // Object.fromEntries/hasOwn, Promise.finally, URL.canParse) have been
      // baseline in Chrome 111+ / Safari 16.4+ / Firefox 111+ since 2021-2022.
      // Replacing with empty output removes 13 KiB of dead code from every page.
      '**/next/dist/build/polyfills/polyfill-module.js': {
        loaders: [{ loader: './lib/empty-loader.cjs' }],
        as: '*.js',
      },
    },
  },
  async redirects() {
    const localeSlugRedirects = [
      ...BLOG_POSTS_TR.map(p => ({ source: `/blog/${p.slug}`, destination: `/tr/blog/${p.slug}`, permanent: true })),
      ...BLOG_POSTS_ES.map(p => ({ source: `/blog/${p.slug}`, destination: `/es/blog/${p.slug}`, permanent: true })),
      ...BLOG_POSTS_FR.map(p => ({ source: `/blog/${p.slug}`, destination: `/fr/blog/${p.slug}`, permanent: true })),
      ...BLOG_POSTS_AR.map(p => ({ source: `/blog/${p.slug}`, destination: `/ar/blog/${p.slug}`, permanent: true })),
      ...BLOG_POSTS_RU.map(p => ({ source: `/blog/${p.slug}`, destination: `/ru/blog/${p.slug}`, permanent: true })),
      ...BLOG_POSTS_ZH.map(p => ({ source: `/blog/${p.slug}`, destination: `/zh/blog/${p.slug}`, permanent: true })),
    ]
    return [
      { source: '/internship/assessment/:id/question', destination: '/assessment/:id/question', permanent: true },
      { source: '/internship/assessment/:id/complete', destination: '/assessment/:id/complete', permanent: true },
      { source: '/internship/results/:id',             destination: '/assessment/:id/results',  permanent: true },
      // TR locale track slug redirects (old English slugs → Turkish slugs)
      { source: '/tr/tech',              destination: '/tr/teknoloji',         permanent: true },
      { source: '/tr/business',          destination: '/tr/is-dunyasi',        permanent: true },
      { source: '/tr/data-analytics',    destination: '/tr/veri-analitigi',    permanent: true },
      { source: '/tr/digital-marketing', destination: '/tr/dijital-pazarlama', permanent: true },
      // ES locale track slug redirects (old English slugs → Spanish slugs)
      { source: '/es/tech',              destination: '/es/tecnologia',         permanent: true },
      { source: '/es/business',          destination: '/es/empresa',            permanent: true },
      { source: '/es/data-analytics',    destination: '/es/analisis-de-datos',  permanent: true },
      { source: '/es/digital-marketing', destination: '/es/marketing-digital',  permanent: true },
      // TR blog post slug redirects (old English slugs → Turkish slugs)
      { source: '/tr/blog/early-internship-child-development-career',  destination: '/tr/blog/erken-yas-staj-cocuk-gelisimi-kariyer',    permanent: true },
      { source: '/tr/blog/high-school-internship-benefits-university', destination: '/tr/blog/lise-staji-faydalari-universite',           permanent: true },
      { source: '/tr/blog/business-work-experience-high-school-uk',    destination: '/tr/blog/is-deneyimi-lise-ingiltere',               permanent: true },
      { source: '/tr/blog/how-to-get-tech-internship-before-university', destination: '/tr/blog/universiteden-once-teknoloji-staji',     permanent: true },
      { source: '/tr/blog/how-does-your-child-compare-globally',       destination: '/tr/blog/cocugunuz-dunyada-nerede-duruyor',         permanent: true },
      // ES blog post slug redirects (old English slugs → Spanish slugs)
      { source: '/es/blog/early-internship-child-development-career',  destination: '/es/blog/practicas-tempranas-desarrollo-infantil-carrera', permanent: true },
      { source: '/es/blog/high-school-internship-benefits-university', destination: '/es/blog/practicas-instituto-beneficios-universidad',       permanent: true },
      { source: '/es/blog/business-work-experience-high-school-uk',    destination: '/es/blog/experiencia-empresarial-instituto-reino-unido',    permanent: true },
      { source: '/es/blog/how-to-get-tech-internship-before-university', destination: '/es/blog/practicas-tecnologia-antes-universidad',         permanent: true },
      { source: '/es/blog/how-does-your-child-compare-globally',       destination: '/es/blog/como-se-compara-tu-hijo-a-nivel-mundial',          permanent: true },
      // Duplicate NSW OC posts — consolidate into the newer, better-optimised post
      { source: '/blog/australia-oc-test-guide', destination: '/blog/nsw-opportunity-class-test-guide', permanent: true },
      // Locale blog slugs — redirect /blog/[locale-slug] → /[locale]/blog/[locale-slug]
      ...localeSlugRedirects,
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
};

export default nextConfig;
