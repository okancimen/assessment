import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  // ── eduentry.ai hostname routing ──────────────────────────────────────
  const hostname = request.headers.get('host') ?? ''
  const isAI = hostname === 'eduentry.ai' || hostname === 'www.eduentry.ai'

  if (isAI) {
    const { pathname } = request.nextUrl
    // Marketing, blog, track pages, sitemap, robots → /ai/*
    if (
      pathname === '/' ||
      pathname.startsWith('/blog') ||
      pathname === '/tech' ||
      pathname === '/business' ||
      pathname === '/data-analytics' ||
      pathname === '/digital-marketing' ||
      pathname === '/sitemap.xml' ||
      pathname === '/robots.txt'
    ) {
      return NextResponse.rewrite(new URL(`/ai${pathname}`, request.url))
    }
    // Functional routes → reuse existing internship/shared pages
    const rewrites: [string, string][] = [
      ['/register', '/internship/register'],
      ['/apply',    '/internship/apply'],
    ]
    for (const [from, to] of rewrites) {
      if (pathname === from || pathname.startsWith(from + '/')) {
        return NextResponse.rewrite(new URL(to + pathname.slice(from.length), request.url))
      }
    }
    // /assessment/*, /auth/*, /dashboard, /admin/*, /api/* pass through
  }
  // ─────────────────────────────────────────────────────────────────────

  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const isAuthRoute = request.nextUrl.pathname.startsWith('/auth')
  const isPublicRoute =
    request.nextUrl.pathname === '/' ||
    isAuthRoute ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/methodology') ||
    request.nextUrl.pathname.startsWith('/about') ||
    request.nextUrl.pathname.startsWith('/11-plus') ||
    request.nextUrl.pathname.startsWith('/subjects') ||
    request.nextUrl.pathname.startsWith('/blog') ||
    request.nextUrl.pathname.startsWith('/demo') ||
    request.nextUrl.pathname.startsWith('/grammar-schools') ||
    request.nextUrl.pathname.startsWith('/privacy') ||
    request.nextUrl.pathname.startsWith('/terms') ||
    request.nextUrl.pathname.startsWith('/search') ||
    request.nextUrl.pathname.startsWith('/internship') ||
    request.nextUrl.pathname.startsWith('/ai') ||
    request.nextUrl.pathname === '/robots.txt' ||
    request.nextUrl.pathname === '/sitemap.xml'

  if (!user && !isPublicRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    return NextResponse.redirect(url)
  }

  if (user && isAuthRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
