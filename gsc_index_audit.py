"""
gsc_index_audit.py

Surfaces the actual URLs behind each GSC "Coverage" problem category:
  - 404 Not Found
  - Redirects (chains / final target)
  - noindex meta tag
  - robots.txt blocked
  - 5xx / 403

Approach:
  1. Pull every URL that ever appeared in GSC search analytics (90-day window)
  2. Download and parse the live sitemap for currently-submitted URLs
  3. HTTP-check each URL (follows redirects, reads <meta name="robots"> on 200s)
  4. Print a categorised report + save gsc_audit_results.json

Usage:
  python3 gsc_index_audit.py
  python3 gsc_index_audit.py --limit 300   # cap HTTP checks (default: all)
"""

import json
import time
import argparse
import urllib.request
import urllib.error
from urllib.parse import urlparse
from xml.etree import ElementTree
from collections import defaultdict
from googleapiclient.discovery import build
from google.oauth2 import service_account

# ── config ──────────────────────────────────────────────────────────────────
KEY_FILE = 'service_account.json'
SITE     = 'sc-domain:eduentry.com'
BASE_URL = 'https://eduentry.com'
SITEMAP  = 'https://eduentry.com/sitemap.xml'

HEADERS  = {
    'User-Agent': 'Mozilla/5.0 (compatible; EduEntryAudit/1.0)',
    'Accept-Language': 'en-US,en;q=0.9',
}

# ── GSC auth ─────────────────────────────────────────────────────────────────
creds = service_account.Credentials.from_service_account_file(
    KEY_FILE, scopes=['https://www.googleapis.com/auth/webmasters.readonly'])
svc = build('searchconsole', 'v1', credentials=creds)

# ── helpers ───────────────────────────────────────────────────────────────────

def gsc_pages(start, end, limit=2000):
    """Return set of page URLs seen in GSC analytics."""
    rows = svc.searchanalytics().query(
        siteUrl=SITE,
        body={'startDate': start, 'endDate': end,
              'dimensions': ['page'], 'rowLimit': limit}
    ).execute().get('rows', [])
    return {r['keys'][0] for r in rows}

def sitemap_urls(sitemap_url, seen=None):
    """Recursively expand a sitemap or sitemap index, return all <loc> URLs."""
    if seen is None:
        seen = set()
    if sitemap_url in seen:
        return set()
    seen.add(sitemap_url)
    urls = set()
    try:
        req = urllib.request.Request(sitemap_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            tree = ElementTree.parse(resp)
    except Exception as e:
        print(f'  [warn] sitemap fetch failed: {sitemap_url} — {e}')
        return urls
    ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    root = tree.getroot()
    # sitemap index
    for s in root.findall('.//sm:sitemap/sm:loc', ns):
        urls |= sitemap_urls(s.text.strip(), seen)
    # url set
    for u in root.findall('.//sm:url/sm:loc', ns):
        urls.add(u.text.strip())
    return urls

class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    """Opener that captures the redirect status code instead of following it."""
    def http_error_301(self, req, fp, code, msg, headers):
        raise urllib.error.HTTPError(req.full_url, code, msg, headers, fp)
    http_error_302 = http_error_303 = http_error_307 = http_error_308 = http_error_301

_no_redir_opener = urllib.request.build_opener(NoRedirectHandler)

def fetch_url(url):
    """
    Returns (final_url, status_code, redirect_to, has_noindex, error).
    Does NOT auto-follow redirects so 3xx codes are captured directly.
    For 200 responses reads first 8 kB to check for noindex meta tag.
    """
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with _no_redir_opener.open(req, timeout=12) as resp:
            code = resp.status
            body = resp.read(8192).decode('utf-8', errors='ignore')
            noindex = (
                'noindex' in body.lower() and
                'name="robots"' in body.lower()
            )
            return url, code, None, noindex, None
    except urllib.error.HTTPError as e:
        location = e.headers.get('Location', '') if e.headers else ''
        return url, e.code, location or None, False, None
    except urllib.error.URLError as e:
        return url, 0, None, False, str(e.reason)
    except Exception as e:
        return url, 0, None, False, str(e)

# ── main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--limit', type=int, default=0,
                        help='Max URLs to HTTP-check (0 = all)')
    args = parser.parse_args()

    print('━' * 90)
    print('Step 1 — collecting URLs from GSC analytics (last 90 days)')
    print('━' * 90)
    gsc = gsc_pages('2026-08-10', '2026-11-07', limit=2000)
    print(f'  GSC analytics pages: {len(gsc)}')

    print('\nStep 2 — parsing sitemap')
    sitemap = sitemap_urls(SITEMAP)
    print(f'  Sitemap URLs: {len(sitemap)}')

    all_urls = gsc | sitemap
    print(f'  Combined unique URLs: {len(all_urls)}')

    if args.limit:
        all_urls = set(list(all_urls)[:args.limit])
        print(f'  (capped at {args.limit})')

    print('\nStep 3 — HTTP-checking each URL (this may take a few minutes…)')
    # known-blocked paths from robots.txt (we check these but still record them)
    ROBOTS_BLOCKED_PREFIXES = (
        '/admin/', '/dashboard/', '/results/', '/auth/', '/api/', '/_next/',
    )

    results = {}
    cats = defaultdict(list)
    total = len(all_urls)

    for i, url in enumerate(sorted(all_urls), 1):
        if i % 25 == 0 or i == total:
            print(f'  {i}/{total}', end='\r', flush=True)

        _, code, redirect_to, noindex, err = fetch_url(url)

        # classify
        path = urlparse(url).path
        if err or code == 0:
            cat = 'error'
        elif code == 404:
            cat = 'not_found'
        elif code in (301, 302, 307, 308):
            # only flag as "bad redirect" if the URL is in sitemap
            # (pages that should be canonical but redirect)
            if url in sitemap:
                cat = 'redirect_in_sitemap'
            else:
                cat = 'redirect'
        elif 500 <= code < 600:
            cat = '5xx'
        elif code == 403:
            # expected for blocked paths
            if any(path.startswith(p) for p in ROBOTS_BLOCKED_PREFIXES):
                cat = 'robots_blocked_ok'
            else:
                cat = '403'
        elif noindex:
            cat = 'noindex'
        elif code == 200:
            cat = 'ok'
        else:
            cat = f'other_{code}'

        results[url] = {
            'cat': cat, 'code': code,
            'redirect_to': redirect_to,
            'noindex': noindex, 'error': err,
            'in_sitemap': url in sitemap,
        }
        cats[cat].append(url)
        time.sleep(0.04)  # be polite

    print(f'  Done — {total} URLs checked.          ')

    # ── report ───────────────────────────────────────────────────────────────
    order = ['not_found', 'redirect_in_sitemap', 'redirect', 'noindex',
             '5xx', '403', 'error', 'ok', 'robots_blocked_ok']
    labels = {
        'not_found':            '404 NOT FOUND  ← fix or redirect',
        'redirect_in_sitemap':  'REDIRECT (URL in sitemap — update sitemap to final URL)',
        'redirect':             'REDIRECT (not in sitemap)',
        'noindex':              'NOINDEX META TAG  ← check if intentional',
        '5xx':                  '5XX SERVER ERROR',
        '403':                  '403 FORBIDDEN (unexpected)',
        'error':                'NETWORK/OTHER ERROR',
        'ok':                   'OK (200, indexable)',
        'robots_blocked_ok':    '403/blocked (expected — robots.txt path)',
    }

    print('\n' + '━' * 90)
    print('RESULTS SUMMARY')
    print('━' * 90)
    for cat in order:
        n = len(cats.get(cat, []))
        label = labels.get(cat, cat)
        marker = '✗' if cat not in ('ok', 'robots_blocked_ok') else '✓'
        print(f'  {marker} {label:<55} {n:>4} URLs')
    for cat, urls in cats.items():
        if cat not in order:
            print(f'    {cat:<55} {len(urls):>4} URLs')

    for cat in [c for c in order if c not in ('ok', 'robots_blocked_ok')]:
        urls_in_cat = cats.get(cat, [])
        if not urls_in_cat:
            continue
        print(f'\n{"━"*90}')
        print(f'{labels.get(cat, cat)} ({len(urls_in_cat)})')
        print('━' * 90)
        for url in sorted(urls_in_cat):
            path = url.replace(BASE_URL, '')
            r = results[url]
            suffix = ''
            if r.get('redirect_to'):
                redir = r['redirect_to'].replace(BASE_URL, '') if BASE_URL in r['redirect_to'] else r['redirect_to']
                suffix = f'  → {redir}'
            elif r.get('error'):
                suffix = f'  [{r["error"]}]'
            sitemap_flag = ' [in sitemap]' if r.get('in_sitemap') else ''
            print(f'  {path}{sitemap_flag}{suffix}')

    # save JSON for further processing
    out_file = 'gsc_audit_results.json'
    with open(out_file, 'w') as f:
        json.dump({'summary': {k: len(v) for k, v in cats.items()},
                   'urls': results}, f, indent=2)
    print(f'\nFull results saved to {out_file}')

if __name__ == '__main__':
    main()
