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

RECENT = ('2026-10-07', '2026-11-03')

# 1. All pages with 'personality' or 'kisilik' or 'karakter' in URL
print('━' * 100)
print('1. PERSONALITY-RELATED PAGES — last 28 days')
print('━' * 100)
all_pages = query(['page'], *RECENT, limit=500)
personality_pages = [r for r in all_pages if any(k in r['keys'][0] for k in [
    'personality', 'kisilik', 'karakter', 'character', 'strengths', 'guclu', 'via-'
])]
personality_pages.sort(key=lambda x: -x['impressions'])
print(f'\n{"Page":<70} {"Impr":>6}  {"Pos":>5}  {"CTR":>5}  {"Clicks":>6}')
print('-' * 95)
for r in personality_pages:
    page = r['keys'][0].replace('https://eduentry.com', '')
    print(f'{page:<70} {r["impressions"]:>6}  {r["position"]:>5.1f}  {r["ctr"]*100:>4.1f}%  {r["clicks"]:>6}')

# 2. Top queries for personality/character pages
print('\n' + '━' * 100)
print('2. TOP QUERIES for personality/character pages — last 28 days')
print('━' * 100)
page_filter = [{'dimension': 'page', 'operator': 'contains', 'expression': 'personality'}]
queries = query(['query'], *RECENT, filters=page_filter, limit=50)
queries.sort(key=lambda x: -x['impressions'])
print(f'\n{"Query":<55} {"Impr":>6}  {"Pos":>5}  {"CTR":>5}  {"Clicks":>6}')
print('-' * 85)
for r in queries[:20]:
    print(f'{r["keys"][0]:<55} {r["impressions"]:>6}  {r["position"]:>5.1f}  {r["ctr"]*100:>4.1f}%  {r["clicks"]:>6}')

# 3. Sitewide queries containing personality/character keywords
print('\n' + '━' * 100)
print('3. SITEWIDE QUERIES containing personality/character/strengths — last 28 days')
print('━' * 100)
all_queries = query(['query'], *RECENT, limit=500)
kw_queries = [r for r in all_queries if any(k in r['keys'][0].lower() for k in [
    'personality', 'character strength', 'karakter', 'kişilik', 'via ', 'strengths test'
])]
kw_queries.sort(key=lambda x: -x['impressions'])
print(f'\n{"Query":<55} {"Impr":>6}  {"Pos":>5}  {"CTR":>5}  {"Clicks":>6}')
print('-' * 85)
for r in kw_queries[:25]:
    print(f'{r["keys"][0]:<55} {r["impressions"]:>6}  {r["position"]:>5.1f}  {r["ctr"]*100:>4.1f}%  {r["clicks"]:>6}')
