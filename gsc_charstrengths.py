"""
Investigate why /zh/blog/xingge-youshi-yu-xueyechengjiu and
/es/blog/fortalezas-de-caracter-exito-escolar have ~242 impressions
each at positions 2.6 / 6.6 but zero clicks.
"""
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

PAGES = {
    'ZH': 'https://eduentry.com/zh/blog/xingge-youshi-yu-xueyechengjiu',
    'ES': 'https://eduentry.com/es/blog/fortalezas-de-caracter-exito-escolar',
}

START, END = '2026-10-06', '2026-11-12'

for lang, page in PAGES.items():
    page_filter = [{'dimension': 'page', 'operator': 'equals', 'expression': page}]

    print(f'\n{"━"*90}')
    print(f'{lang}: {page.replace("https://eduentry.com", "")}')
    print(f'{"━"*90}')

    # Top queries by impressions
    rows = query(['query'], START, END, filters=page_filter, limit=25)
    if not rows:
        print('  No data found.')
        continue

    print(f'  {"Query":<55} {"Impr":>6}  {"Clk":>5}  {"Pos":>6}  {"CTR":>6}')
    print(f'  {"-"*80}')
    for r in rows:
        q_text = r['keys'][0][:54]
        impr  = r.get('impressions', 0)
        clk   = r.get('clicks', 0)
        pos   = r.get('position', 0)
        ctr   = clk / impr * 100 if impr else 0
        print(f'  {q_text:<55} {impr:>6}  {clk:>5}  {pos:>6.1f}  {ctr:>5.1f}%')

    # Weekly impression trend
    print(f'\n  Weekly impression trend:')
    weeks = [
        ('2026-10-06','2026-10-12'), ('2026-10-13','2026-10-19'),
        ('2026-10-20','2026-10-26'), ('2026-10-27','2026-11-02'),
        ('2026-11-03','2026-11-09'),
    ]
    for s, e in weeks:
        rows2 = query(['page'], s, e, filters=page_filter)
        if rows2:
            r = rows2[0]
            bar = '█' * int(r['impressions'] / 5)
            print(f'    {s}  impr={r["impressions"]:>4}  pos={r["position"]:>5.1f}  clk={r["clicks"]:>2}  {bar}')
        else:
            print(f'    {s}  impr=   0  pos=    —  clk= 0')
