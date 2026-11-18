"""
Identify the 20 worst-performing stale blog posts in the last 30 days.

"Stale" = post's most recent date (dateModified > date) is older than STALE_DAYS ago.
Scoring = impressions × (1 - normalised CTR) with a position bonus for pos 5-30.
"""

import re
from datetime import datetime, timedelta, timezone
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

KEY_FILE   = 'service_account.json'
SITE       = 'sc-domain:eduentry.com'
STALE_DAYS = 60   # post is "stale" if no dateModified and date older than this

REPO_ROOT = Path(__file__).parent

# ── Date range ────────────────────────────────────────────────────────────────
today    = datetime.now(timezone.utc).date()
end_dt   = today - timedelta(days=3)
start_dt = end_dt - timedelta(days=29)
START, END = str(start_dt), str(end_dt)
stale_cutoff = today - timedelta(days=STALE_DAYS)

# ── Auth ──────────────────────────────────────────────────────────────────────
creds = service_account.Credentials.from_service_account_file(
    KEY_FILE, scopes=['https://www.googleapis.com/auth/webmasters.readonly'])
svc = build('searchconsole', 'v1', credentials=creds)


def gsc_query(dims, start, end, filters=None, limit=1000):
    body = {'startDate': start, 'endDate': end, 'dimensions': dims, 'rowLimit': limit}
    if filters:
        body['dimensionFilterGroups'] = [{'filters': filters}]
    return svc.searchanalytics().query(siteUrl=SITE, body=body).execute().get('rows', [])


# ── Load post dates from all posts-*.ts files ─────────────────────────────────
# slug -> most recent date (dateModified preferred, falls back to date)
LOCALE_POSTS = {
    '':   'app/blog/posts.ts',
    'tr': 'app/blog/posts-tr.ts',
    'fr': 'app/blog/posts-fr.ts',
    'es': 'app/blog/posts-es.ts',
    'ar': 'app/blog/posts-ar.ts',
    'ru': 'app/blog/posts-ru.ts',
    'zh': 'app/blog/posts-zh.ts',
}

slug_dates: dict[tuple[str, str], datetime.date] = {}  # (locale, slug) -> date

for locale, rel_path in LOCALE_POSTS.items():
    try:
        text = (REPO_ROOT / rel_path).read_text(encoding='utf-8')
    except FileNotFoundError:
        continue
    for m in re.finditer(r"slug:\s*['\"]([^'\"]+)['\"]", text):
        slug = m.group(1)
        snippet = text[m.start(): m.start() + 900]
        dm = re.search(r"dateModified:\s*['\"](\d{4}-\d{2}-\d{2})['\"]", snippet)
        d  = re.search(r"\bdate:\s*['\"](\d{4}-\d{2}-\d{2})['\"]", snippet)
        best = dm or d
        if best:
            try:
                dt = datetime.strptime(best.group(1), '%Y-%m-%d').date()
                slug_dates[(locale, slug)] = dt
            except ValueError:
                pass

print(f'Loaded {len(slug_dates)} (locale, slug) dates from posts-*.ts files.')
print(f'Stale cutoff: {stale_cutoff}  ({STALE_DAYS} days ago)\n')


def parse_url(url: str):
    """Return (locale, slug) or None for non-blog-post URLs."""
    path = url.replace('https://eduentry.com', '').replace('https://eduentry.ai', '')
    parts = [p for p in path.strip('/').split('/') if p]
    if 'blog' not in parts or 'tag' in parts:
        return None
    idx = parts.index('blog')
    slug   = parts[idx + 1] if idx + 1 < len(parts) else ''
    locale = parts[idx - 1] if idx > 0 else ''
    if not slug:
        return None
    return locale, slug


def is_stale(locale: str, slug: str) -> bool:
    dt = slug_dates.get((locale, slug)) or slug_dates.get(('', slug))
    if dt is None:
        return True  # unknown post = treat as stale
    return dt <= stale_cutoff


# ── Fetch GSC page data ───────────────────────────────────────────────────────
print(f'Fetching GSC data  {START} → {END} ...')
page_rows = gsc_query(['page'], START, END, limit=1000)
print(f'  {len(page_rows)} pages with impressions.\n')

# ── Filter: blog posts only, stale only, ≥10 impressions ─────────────────────
candidates = []
for row in page_rows:
    url    = row['keys'][0]
    parsed = parse_url(url)
    if not parsed:
        continue
    locale, slug = parsed
    if not is_stale(locale, slug):
        continue
    impr   = row.get('impressions', 0)
    if impr < 5:
        continue
    clicks = row.get('clicks', 0)
    ctr    = row.get('ctr', 0.0)
    pos    = row.get('position', 99.0)
    post_date = slug_dates.get((locale, slug)) or slug_dates.get(('', slug))
    candidates.append((url, locale, slug, impr, clicks, ctr, pos, post_date))

print(f'Stale blog posts with ≥5 impressions: {len(candidates)}\n')


def score(impr, ctr, pos):
    base       = impr * max(0.0, 1.0 - ctr * 40)
    pos_bonus  = 1.5 if 5 <= pos <= 30 else 1.0
    return base * pos_bonus


scored = sorted(candidates,
                key=lambda x: score(x[3], x[5], x[6]),
                reverse=True)
worst20 = scored[:20]

# ── Print ─────────────────────────────────────────────────────────────────────
print('━' * 125)
print(f'20 WORST-PERFORMING STALE BLOG POSTS  ({START} → {END})')
print(f'  Stale = last date in posts-*.ts ≤ {stale_cutoff}')
print('━' * 125)
print(f'\n{"#":>2}  {"Page path":<72}  {"Post date":>10}  {"Impr":>6}  {"Clicks":>6}  {"CTR":>5}  {"Pos":>5}')
print('─' * 125)
for i, (url, locale, slug, impr, clicks, ctr, pos, post_date) in enumerate(worst20, 1):
    path = url.replace('https://eduentry.com', '') or '/'
    pd   = str(post_date) if post_date else '?'
    print(f'{i:>2}  {path:<72}  {pd:>10}  {impr:>6}  {clicks:>6}  {ctr*100:>4.1f}%  {pos:>5.1f}')

# ── Query breakdown for top 10 ─────────────────────────────────────────────────
print('\n\n' + '━' * 125)
print('QUERY BREAKDOWN — top queries driving impressions for each of the 10 worst pages')
print('━' * 125)
for url, locale, slug, impr, clicks, ctr, pos, post_date in worst20[:10]:
    path = url.replace('https://eduentry.com', '') or '/'
    rows = gsc_query(
        ['query'], START, END,
        filters=[{'dimension': 'page', 'operator': 'equals', 'expression': url}],
        limit=15,
    )
    rows.sort(key=lambda r: -r['impressions'])
    print(f'\n  {path}')
    print(f'  post date={post_date}  impr={impr}  clicks={clicks}  ctr={round(ctr*100,1)}%  pos={round(pos,1)}')
    if rows:
        print(f'  {"Query":<65}  {"Impr":>5}  {"Pos":>5}  {"CTR":>5}  {"Clicks":>6}')
        for r in rows[:6]:
            q = r['keys'][0]
            print(f'  {q:<65}  {r["impressions"]:>5}  {r["position"]:>5.1f}  {r["ctr"]*100:>4.1f}%  {r["clicks"]:>6}')
    else:
        print('  (no query data)')
