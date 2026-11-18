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
    return svc.searchanalytics().query(siteUrl=SITE, body=body).execute().get('rows', [])

PISA_PAGES = [
    'https://eduentry.com/tr/blog/pisa-nedir-cocugunuz-nasil-hazirlanir',
    'https://eduentry.com/tr/blog/pisa-nedir-is-hayatini-sekillendiren-sinav',
    'https://eduentry.com/tr/blog/pisa-2025-kuresel-egitim-krizi-ebeveynlerin-bilmesi-gerekenler',
]

# Weekly breakdown — 10 weeks back to see the exact inflection point
print('━' * 100)
print('1. WEEKLY IMPRESSIONS — each PISA TR page (week by week)')
print('━' * 100)

weeks = [
    ('2026-08-25', '2026-08-31'),
    ('2026-09-01', '2026-09-07'),
    ('2026-09-08', '2026-09-14'),
    ('2026-09-15', '2026-09-21'),
    ('2026-09-22', '2026-09-28'),
    ('2026-09-29', '2026-10-05'),
    ('2026-10-06', '2026-10-12'),
    ('2026-10-13', '2026-10-19'),
    ('2026-10-20', '2026-10-26'),
    ('2026-10-27', '2026-11-02'),
]

for page in PISA_PAGES:
    slug = page.split('/')[-1]
    print(f'\n  {slug}')
    for start, end in weeks:
        rows = query(['page'], start, end,
                     filters=[{'dimension': 'page', 'operator': 'equals', 'expression': page}])
        if rows:
            r = rows[0]
            bar = '█' * int(r['impressions'] / 20)
            print(f'    {start}  impr={r["impressions"]:>5}  pos={r["position"]:>5.1f}  clk={r["clicks"]:>3}  {bar}')
        else:
            print(f'    {start}  impr=    0  pos=    —  clk=  0')

# Per-query breakdown for the main post, both periods
print('\n' + '━' * 100)
print('2. QUERIES driving pisa-nedir-cocugunuz-nasil-hazirlanir — prior vs recent')
print('━' * 100)

PAGE = 'https://eduentry.com/tr/blog/pisa-nedir-cocugunuz-nasil-hazirlanir'
page_filter = [{'dimension': 'page', 'operator': 'equals', 'expression': PAGE}]

prior_q  = {r['keys'][0]: r for r in query(['query'], '2026-09-08', '2026-10-05', page_filter, 100)}
recent_q = {r['keys'][0]: r for r in query(['query'], '2026-10-06', '2026-11-02', page_filter, 100)}
all_q    = set(prior_q) | set(recent_q)

rows = []
for q in all_q:
    p = prior_q.get(q, {})
    r = recent_q.get(q, {})
    rows.append((p.get('impressions', 0), q,
                 p.get('impressions', 0), r.get('impressions', 0),
                 p.get('position', 0), r.get('position', 0),
                 p.get('clicks', 0), r.get('clicks', 0)))
rows.sort(reverse=True)

print(f'\n{"Query":<45} {"Prior impr":>10}  {"Recent impr":>11}  {"Prior pos":>9}  {"Recent pos":>10}')
print('-' * 100)
for _, q, pi, ri, pp, rp, pc, rc in rows[:30]:
    rp_s = f'{rp:.1f}' if rp else '—'
    pp_s = f'{pp:.1f}' if pp else '—'
    delta = ri - pi
    arrow = f'+{delta}' if delta >= 0 else str(delta)
    print(f'{q:<45} {pi:>10}  {ri:>11}  {pp_s:>9}  {rp_s:>10}  {arrow}')

# Device + country breakdown
print('\n' + '━' * 100)
print('3. DEVICE breakdown — pisa-nedir post (recent vs prior)')
print('━' * 100)
for label, start, end in [('Prior (Sep 8–Oct 5)', '2026-09-08', '2026-10-05'),
                           ('Recent (Oct 6–Nov 2)', '2026-10-06', '2026-11-02')]:
    rows = query(['device'], start, end, page_filter)
    print(f'\n  {label}')
    for r in sorted(rows, key=lambda x: -x['impressions']):
        print(f'    {r["keys"][0]:<12}  impr={r["impressions"]:>5}  pos={r["position"]:>5.1f}  clk={r["clicks"]}')

print('\n' + '━' * 100)
print('4. COUNTRY breakdown — pisa-nedir post (recent vs prior)')
print('━' * 100)
for label, start, end in [('Prior (Sep 8–Oct 5)', '2026-09-08', '2026-10-05'),
                           ('Recent (Oct 6–Nov 2)', '2026-10-06', '2026-11-02')]:
    rows = query(['country'], start, end, page_filter, 20)
    print(f'\n  {label}')
    for r in sorted(rows, key=lambda x: -x['impressions'])[:10]:
        print(f'    {r["keys"][0].upper():<8}  impr={r["impressions"]:>5}  pos={r["position"]:>5.1f}  clk={r["clicks"]}')
