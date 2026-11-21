"""
IndexNow — instantly notify Bing/Yandex/other IndexNow-supporting engines of URL changes.

No daily quota limit (unlike Google Indexing API). All recently changed URLs are
submitted in a single batch request.

Usage:
  python3 indexnow.py          # submit all recently changed URLs
"""

import json
import urllib.request

# Re-use the URL list + recent-filter logic from the Google Indexing API script
from indexing_api import URLS_TO_SUBMIT, _all_blog_urls, filter_recent

HOST        = "eduentry.com"
KEY         = "fb555a6e825b4c729eb70c08c060e069"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"
ENDPOINT    = "https://www.bing.com/indexnow"


def submit():
    combined = list(dict.fromkeys(_all_blog_urls() + URLS_TO_SUBMIT))
    urls = filter_recent(combined)

    if not urls:
        print("No recently changed URLs to submit.")
        return

    # IndexNow accepts only URLs from the declared host (eduentry.com)
    urls = [u for u in urls if u.startswith(f"https://{HOST}")]
    print(f"Submitting {len(urls)} URLs to IndexNow...\n")

    payload = json.dumps({
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }).encode("utf-8")

    req = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            status = resp.status
            body   = resp.read().decode("utf-8", errors="replace")
    except urllib.error.HTTPError as e:
        status = e.code
        body   = e.read().decode("utf-8", errors="replace")

    if status in (200, 202):
        print(f"✓  IndexNow accepted {len(urls)} URLs  (HTTP {status})")
    else:
        print(f"✗  HTTP {status}: {body}")


if __name__ == "__main__":
    submit()
