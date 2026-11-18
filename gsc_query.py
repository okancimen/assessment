import json
from googleapiclient.discovery import build
from google.oauth2 import service_account

KEY_FILE = 'service_account.json'
SITE_URL = 'sc-domain:eduentry.com'

creds = service_account.Credentials.from_service_account_file(
    KEY_FILE,
    scopes=['https://www.googleapis.com/auth/webmasters.readonly']
)
service = build('searchconsole', 'v1', credentials=creds)

def fetch_pages(start, end, limit=200):
    r = service.searchanalytics().query(
        siteUrl=SITE_URL,
        body={
            'startDate': start,
            'endDate': end,
            'dimensions': ['page'],
            'rowLimit': limit,
        }
    ).execute()
    return {
        row['keys'][0].replace('https://eduentry.com', ''): row
        for row in r.get('rows', [])
    }

# Recent: last 28 days | Prior: 28 days before that
recent = fetch_pages('2026-10-06', '2026-11-02')
prior  = fetch_pages('2026-09-08', '2026-10-05')

all_pages = set(recent) | set(prior)

drops = []
for page in all_pages:
    r = recent.get(page, {})
    p = prior.get(page, {})
    r_impr = r.get('impressions', 0)
    p_impr = p.get('impressions', 0)
    r_clicks = r.get('clicks', 0)
    p_clicks = p.get('clicks', 0)
    impr_delta = r_impr - p_impr
    if p_impr >= 50 and impr_delta < -20:  # only meaningful drops
        pct = round(impr_delta / p_impr * 100)
        drops.append((pct, page, p_impr, r_impr, p_clicks, r_clicks))

drops.sort()

print(f'{"Page":<60} {"Prior impr":>10} {"Recent impr":>11} {"Δ%":>5}  {"Prior clk":>9} {"Recent clk":>10}')
print('-' * 115)
for pct, page, p_impr, r_impr, p_clicks, r_clicks in drops:
    print(f'{page:<60} {p_impr:>10} {r_impr:>11} {pct:>4}%  {p_clicks:>9} {r_clicks:>10}')
