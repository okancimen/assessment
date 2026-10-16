"""
Google Search Console Indexing API — submit eduentry.ai URLs for fast indexing.

Setup:
  Same service_account.json used for eduentry.com. Make sure the service account
  email has Owner access to the eduentry.ai GSC property as well.

Usage:
  python3 indexing_api_ai.py        # submits all URLs (< 200 total)

Note: Google Indexing API limit is 200 URL_UPDATED requests per day per service account.
"""

import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build

# ── Config ────────────────────────────────────────────────────────────────────
SERVICE_ACCOUNT_FILE = "service_account.json"
SCOPES = ["https://www.googleapis.com/auth/indexing"]
BASE = "https://eduentry.ai"
DAILY_LIMIT = 200
# ─────────────────────────────────────────────────────────────────────────────

URLS_TO_SUBMIT = [
    # ── Static pages ──────────────────────────────────────────────────────────
    BASE,
    f"{BASE}/about",
    f"{BASE}/insights",
    f"{BASE}/work-experience",
    f"{BASE}/work-experience/apply",
    f"{BASE}/tech",
    f"{BASE}/business",
    f"{BASE}/data-analytics",
    f"{BASE}/digital-marketing",
    # ── TR static pages ───────────────────────────────────────────────────────
    f"{BASE}/tr",
    f"{BASE}/tr/insights",
    f"{BASE}/tr/work-experience",
    f"{BASE}/tr/work-experience/apply",
    f"{BASE}/tr/teknoloji",
    f"{BASE}/tr/is-dunyasi",
    f"{BASE}/tr/veri-analitigi",
    f"{BASE}/tr/dijital-pazarlama",
    # ── ES static pages ───────────────────────────────────────────────────────
    f"{BASE}/es",
    f"{BASE}/es/tecnologia",
    f"{BASE}/es/empresa",
    f"{BASE}/es/analisis-de-datos",
    f"{BASE}/es/marketing-digital",
    # ── FR static pages ───────────────────────────────────────────────────────
    f"{BASE}/fr",
    f"{BASE}/fr/technologie",
    f"{BASE}/fr/entreprise",
    f"{BASE}/fr/analyse-de-donnees",
    f"{BASE}/fr/marketing-digital",
    # ── AR static pages ───────────────────────────────────────────────────────
    f"{BASE}/ar",
    f"{BASE}/ar/taqniya",
    f"{BASE}/ar/aamal",
    f"{BASE}/ar/bayanat",
    f"{BASE}/ar/tawiq",
    # ── ZH static pages ───────────────────────────────────────────────────────
    f"{BASE}/zh",
    f"{BASE}/zh/keji",
    f"{BASE}/zh/shangye",
    f"{BASE}/zh/shuju",
    f"{BASE}/zh/yingxiao",
    # ── RU static pages ───────────────────────────────────────────────────────
    f"{BASE}/ru",
    f"{BASE}/ru/tekhnologii",
    f"{BASE}/ru/biznes",
    f"{BASE}/ru/analiz-dannykh",
    f"{BASE}/ru/tsifrovoy-marketing",
    # ── EN insights ───────────────────────────────────────────────────────────
    f"{BASE}/insights/high-school-internship-benefits-university",
    f"{BASE}/insights/how-to-get-tech-internship-before-university",
    f"{BASE}/insights/business-work-experience-high-school-uk",
    f"{BASE}/insights/digital-marketing-work-experience-student-reviews",
    f"{BASE}/insights/how-to-get-internship-no-experience-high-school",
    f"{BASE}/insights/how-to-differentiate-yourself-at-15",
    f"{BASE}/insights/oecd-teenage-work-experience-career-outcomes",
    f"{BASE}/insights/pisa-2025-work-experience-student-readiness",
    f"{BASE}/insights/how-to-find-internship-as-student",
    f"{BASE}/insights/oecd-teenage-part-time-work-benefits",
    # ── TR insights ───────────────────────────────────────────────────────────
    f"{BASE}/tr/insights/high-school-internship-benefits-university",
    f"{BASE}/tr/insights/how-to-get-tech-internship-before-university",
    f"{BASE}/tr/insights/business-work-experience-high-school-uk",
    f"{BASE}/tr/insights/digital-marketing-work-experience-student-reviews",
    f"{BASE}/tr/insights/how-to-get-internship-no-experience-high-school",
    f"{BASE}/tr/insights/how-to-differentiate-yourself-at-15",
    f"{BASE}/tr/insights/oecd-teenage-work-experience-career-outcomes",
    f"{BASE}/tr/insights/pisa-2025-work-experience-student-readiness",
    f"{BASE}/tr/insights/how-to-find-internship-as-student",
    f"{BASE}/tr/insights/oecd-teenage-part-time-work-benefits",
    f"{BASE}/tr/insights/uluslararasi-staj-programi-2026",
    f"{BASE}/tr/insights/ulusal-staj-programi-rehberi",
]


def submit_urls(start: int = 0):
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

    batch = URLS_TO_SUBMIT[start : start + DAILY_LIMIT]
    total = len(URLS_TO_SUBMIT)
    end = min(start + DAILY_LIMIT, total)

    print(f"Total URLs: {total}")
    print(f"Submitting {len(batch)} URLs (index {start}–{end - 1})...\n")
    ok, failed = 0, 0

    for url in batch:
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
    if end < total:
        print(f"\nRemaining: {total - end} URLs. Run tomorrow with:")
        print(f"  python3 indexing_api_ai.py {end}")


if __name__ == "__main__":
    start_index = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    submit_urls(start_index)
