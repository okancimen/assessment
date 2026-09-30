"""
Google Search Console Indexing API — submit URLs for fast indexing.

Setup:
  1. Go to Google Search Console → Settings → Users and Permissions → add your service account email.
  2. Also go to Google Search Console → Settings → Ownership Verification and make sure
     your service account email has "Full" access to the property.
  3. Enable the "Indexing API" in Google Cloud Console for your project.
  4. Download the service account JSON key and set SERVICE_ACCOUNT_FILE below.

Usage:
  python3 indexing_api.py
"""

import json
from google.oauth2 import service_account
from googleapiclient.discovery import build

# ── Config ────────────────────────────────────────────────────────────────────
SERVICE_ACCOUNT_FILE = "service_account.json"   # path to your JSON key file
SCOPES = ["https://www.googleapis.com/auth/indexing"]
BASE_URL = "https://eduentry.com"
# ─────────────────────────────────────────────────────────────────────────────

URLS_TO_SUBMIT = [
    # New blog post — all 7 locales
    f"{BASE_URL}/blog/discover-school-age-childs-hidden-strengths",
    f"{BASE_URL}/tr/blog/cocugunuzun-gizli-guclerini-kesfetmek-yeni-nesil-veli-rehberi",
    f"{BASE_URL}/es/blog/descubrir-fortalezas-ocultas-hijo-guia-moderna-padres",
    f"{BASE_URL}/fr/blog/decouvrir-forces-cachees-enfant-guide-parents-moderne",
    f"{BASE_URL}/ar/blog/iktishaf-mawahib-tiflak-dalil-walidain-jadid",
    f"{BASE_URL}/ru/blog/obnaruzhit-skrytye-talenty-rebyonka-rukovodstvo-roditelej",
    f"{BASE_URL}/zh/blog/faxian-xueling-haizi-yincang-qianli-jiachang-zhinan",
    # OECD posts (previously published, still worth resubmitting after link changes)
    f"{BASE_URL}/blog/oecd-teenage-work-experience-career-outcomes",
    f"{BASE_URL}/blog/oecd-teenage-part-time-work-benefits",
    f"{BASE_URL}/tr/blog/oecd-ergen-is-deneyimi-kariyer-sonuclari",
    f"{BASE_URL}/tr/blog/oecd-ergen-yari-zamanli-calisma-faydalari",
]


def submit_urls():
    try:
        credentials = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=SCOPES
        )
    except FileNotFoundError:
        print(f"ERROR: Service account file not found: {SERVICE_ACCOUNT_FILE}")
        print("Download your service account JSON key from Google Cloud Console and")
        print(f"save it as '{SERVICE_ACCOUNT_FILE}' in this directory.")
        return

    service = build("indexing", "v3", credentials=credentials)

    print(f"Submitting {len(URLS_TO_SUBMIT)} URLs to Google Indexing API...\n")
    ok, failed = 0, 0

    for url in URLS_TO_SUBMIT:
        try:
            response = service.urlNotifications().publish(
                body={"url": url, "type": "URL_UPDATED"}
            ).execute()
            notify_time = response.get("urlNotificationMetadata", {}).get(
                "latestUpdate", {}
            ).get("notifyTime", "–")
            print(f"  ✓  {url}")
            print(f"       notifyTime: {notify_time}")
            ok += 1
        except Exception as e:
            print(f"  ✗  {url}")
            print(f"       error: {e}")
            failed += 1

    print(f"\nDone — {ok} submitted, {failed} failed.")


if __name__ == "__main__":
    submit_urls()
