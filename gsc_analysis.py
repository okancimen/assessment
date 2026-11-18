from googleapiclient.discovery import build
from google.oauth2 import service_account

KEY_FILE = 'service_account.json'
SITE = 'sc-domain:eduentry.com'

creds = service_account.Credentials.from_service_account_file(
    KEY_FILE, scopes=['https://www.googleapis.com/auth/webmasters.readonly'])
svc = build('searchconsole', 'v1', credentials=creds)

def query(dims, start, end, filters=None, limit=200):
    body = {'startDate': start, 'endDate': end, 'dimensions': dims, 'rowLimit': limit}
    if filters:
        body['dimensionFilterGroups'] = [{'filters': filters}]
    r = svc.searchanalytics().query(siteUrl=SITE, body=body).execute()
    return r.get('rows', [])

RECENT = ('2026-10-06', '2026-11-02')
PRIOR  = ('2026-09-08', '2026-10-05')

def page_map(start, end):
    rows = query(['page'], start, end, limit=500)
    return {r['keys'][0].replace('https://eduentry.com', '') or '/': r for r in rows}

recent_pages = page_map(*RECENT)
prior_pages  = page_map(*PRIOR)
all_pages    = set(recent_pages) | set(prior_pages)

# ── 1. WINNERS & LOSERS by impressions ──────────────────────────────────────
print('━' * 110)
print('1. BIGGEST MOVERS (pages with ≥50 impressions in either period)')
print('━' * 110)
movers = []
for p in all_pages:
    r = recent_pages.get(p, {})
    pr = prior_pages.get(p, {})
    ri, pi = r.get('impressions', 0), pr.get('impressions', 0)
    rc, pc = r.get('clicks', 0), pr.get('clicks', 0)
    rp, pp = r.get('position', 0), pr.get('position', 0)
    if max(ri, pi) >= 50:
        delta = ri - pi
        movers.append((delta, p, pi, ri, pc, rc, pp, rp))

movers.sort(reverse=True)
print(f'\n{"Page":<58} {"Δimpr":>7}  {"Prior→Recent impr":>18}  {"Prior→Recent clk":>16}  {"Pos Δ":>6}')
print('-' * 110)
for delta, p, pi, ri, pc, rc, pp, rp in movers:
    pos_delta = f'{rp-pp:+.1f}' if pp and rp else 'new' if not pp else 'gone'
    arrow = '▲' if delta > 0 else '▼'
    print(f'{p:<58} {arrow}{abs(delta):>6}  {pi:>8} → {ri:<8}  {pc:>7} → {rc:<7}  {pos_delta:>6}')

# ── 2. HIGH IMPRESSIONS, LOW CTR (opportunity pages) ────────────────────────
print('\n' + '━' * 110)
print('2. HIGH IMPRESSIONS / LOW CTR — title or position improvement needed')
print('━' * 110)
opps = [(r['impressions'], p, round(r['position'],1), round(r['ctr']*100,2), r['clicks'])
        for p, r in recent_pages.items() if r['impressions'] >= 100 and r['ctr'] < 0.02]
opps.sort(reverse=True)
print(f'\n{"Page":<58} {"Impr":>6}  {"Pos":>5}  {"CTR":>5}  {"Clicks":>6}')
print('-' * 80)
for impr, p, pos, ctr, clk in opps:
    print(f'{p:<58} {impr:>6}  {pos:>5}  {ctr:>4}%  {clk:>6}')

# ── 3. TOP QUERIES sitewide ──────────────────────────────────────────────────
print('\n' + '━' * 110)
print('3. TOP QUERIES — recent 28 days (by impressions)')
print('━' * 110)
queries_r = query(['query'], *RECENT, limit=50)
queries_p = {r['keys'][0]: r for r in query(['query'], *PRIOR, limit=200)}
print(f'\n{"Query":<55} {"Impr":>6}  {"Pos":>5}  {"CTR":>5}  {"Clicks":>6}  {"Δimpr":>7}')
print('-' * 95)
for row in sorted(queries_r, key=lambda x: -x['impressions'])[:30]:
    q = row['keys'][0]
    prev = queries_p.get(q, {})
    di = row['impressions'] - prev.get('impressions', 0)
    arrow = f'+{di}' if di >= 0 else str(di)
    print(f'{q:<55} {row["impressions"]:>6}  {row["position"]:>5.1f}  {row["ctr"]*100:>4.1f}%  {row["clicks"]:>6}  {arrow:>7}')

# ── 4. DROPPED QUERIES (were in top 50, now gone or halved) ─────────────────
print('\n' + '━' * 110)
print('4. DROPPED QUERIES (≥100 impressions in prior period, now significantly lower)')
print('━' * 110)
queries_r_map = {r['keys'][0]: r for r in query(['query'], *RECENT, limit=500)}
queries_p_all = query(['query'], *PRIOR, limit=500)
dropped_q = []
for row in queries_p_all:
    q = row['keys'][0]
    pi = row['impressions']
    if pi < 80:
        continue
    ri = queries_r_map.get(q, {}).get('impressions', 0)
    if ri < pi * 0.5:
        dropped_q.append((pi - ri, q, pi, ri,
                          row['clicks'], queries_r_map.get(q, {}).get('clicks', 0),
                          row['position'], queries_r_map.get(q, {}).get('position', 0)))
dropped_q.sort(reverse=True)
print(f'\n{"Query":<55} {"Prior impr":>10}  {"Recent impr":>11}  {"Δ":>5}  {"Prior pos":>9}  {"Recent pos":>10}')
print('-' * 110)
for delta, q, pi, ri, pc, rc, pp, rp in dropped_q[:25]:
    rp_str = f'{rp:.1f}' if rp else '—'
    print(f'{q:<55} {pi:>10}  {ri:>11}  {-delta:>5}  {pp:>9.1f}  {rp_str:>10}')

# ── 5. COUNTRY BREAKDOWN (recent) ───────────────────────────────────────────
print('\n' + '━' * 110)
print('5. TRAFFIC BY COUNTRY — recent 28 days')
print('━' * 110)
countries = query(['country'], *RECENT, limit=30)
countries.sort(key=lambda x: -x['impressions'])
print(f'\n{"Country":<20} {"Impr":>8}  {"Clicks":>7}  {"CTR":>5}  {"Pos":>5}')
print('-' * 50)
for row in countries[:20]:
    c = row['keys'][0].upper()
    print(f'{c:<20} {row["impressions"]:>8}  {row["clicks"]:>7}  {row["ctr"]*100:>4.1f}%  {row["position"]:>5.1f}')

# ── 6. NEW PAGES gaining traction ───────────────────────────────────────────
print('\n' + '━' * 110)
print('6. NEW PAGES (no prior impressions, ≥20 impressions in recent period)')
print('━' * 110)
new_pages = [(r['impressions'], p, round(r['position'],1), r['clicks'])
             for p, r in recent_pages.items()
             if p not in prior_pages and r['impressions'] >= 20]
new_pages.sort(reverse=True)
print(f'\n{"Page":<62} {"Impr":>6}  {"Pos":>5}  {"Clicks":>6}')
print('-' * 85)
for impr, p, pos, clk in new_pages:
    print(f'{p:<62} {impr:>6}  {pos:>5}  {clk:>6}')
