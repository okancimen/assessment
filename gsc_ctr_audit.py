from googleapiclient.discovery import build
from google.oauth2 import service_account

KEY_FILE = 'service_account.json'
SITE_URL = 'sc-domain:eduentry.com'

creds = service_account.Credentials.from_service_account_file(
    KEY_FILE,
    scopes=['https://www.googleapis.com/auth/webmasters.readonly']
)
service = build('searchconsole', 'v1', credentials=creds)

# Last 28 days
r = service.searchanalytics().query(
    siteUrl=SITE_URL,
    body={
        'startDate': '2026-10-22',
        'endDate':   '2026-11-18',
        'dimensions': ['page'],
        'rowLimit': 500,
    }
).execute()

rows = r.get('rows', [])

pages = []
for row in rows:
    page = row['keys'][0].replace('https://eduentry.com', '')
    impr   = row.get('impressions', 0)
    clicks = row.get('clicks', 0)
    ctr    = row.get('ctr', 0) * 100
    pos    = row.get('position', 0)
    pages.append((impr, clicks, ctr, pos, page))

# Sort by impressions desc
pages.sort(reverse=True)

# --- Section 1: High impressions, low CTR, good position (1-20) ---
# These are ranking but not getting clicks — title/meta fix opportunity
candidates = [
    (impr, clicks, ctr, pos, page)
    for impr, clicks, ctr, pos, page in pages
    if impr >= 100 and ctr < 3.0 and pos <= 20
]

print(f'\n=== HIGH IMPR / LOW CTR / POSITION ≤20  (Oct 22–Nov 18) ===')
print(f'{"Page":<60} {"Impr":>6} {"Clicks":>7} {"CTR%":>6} {"Pos":>5}')
print('-' * 90)
for impr, clicks, ctr, pos, page in candidates:
    print(f'{page:<60} {impr:>6} {clicks:>7} {ctr:>5.1f}% {pos:>5.1f}')

print(f'\n{len(candidates)} pages')

# --- Section 2: Position 11–20 with decent impressions (close to page 1) ---
p2 = [
    (impr, clicks, ctr, pos, page)
    for impr, clicks, ctr, pos, page in pages
    if impr >= 50 and 10 < pos <= 20
]
p2.sort(key=lambda x: x[0], reverse=True)

print(f'\n=== NEAR PAGE-1 OPPORTUNITIES (position 11–20, impr ≥50) ===')
print(f'{"Page":<60} {"Impr":>6} {"Clicks":>7} {"CTR%":>6} {"Pos":>5}')
print('-' * 90)
for impr, clicks, ctr, pos, page in p2:
    print(f'{page:<60} {impr:>6} {clicks:>7} {ctr:>5.1f}% {pos:>5.1f}')

print(f'\n{len(p2)} pages')

# --- Section 3: Good CTR but low impressions — ranking well, needs visibility ---
p3 = [
    (impr, clicks, ctr, pos, page)
    for impr, clicks, ctr, pos, page in pages
    if impr >= 20 and ctr >= 5.0 and pos <= 10
]
p3.sort(key=lambda x: x[0], reverse=True)

print(f'\n=== STRONG CTR / LOW IMPRESSIONS (ctr≥5%, pos≤10, impr≥20) ===')
print(f'{"Page":<60} {"Impr":>6} {"Clicks":>7} {"CTR%":>6} {"Pos":>5}')
print('-' * 90)
for impr, clicks, ctr, pos, page in p3:
    print(f'{page:<60} {impr:>6} {clicks:>7} {ctr:>5.1f}% {pos:>5.1f}')

print(f'\n{len(p3)} pages')
