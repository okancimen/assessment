"""
Google Search Console Indexing API — submit URLs for fast indexing.

Setup:
  1. Go to Google Search Console → Settings → Users and Permissions → add your service account email.
  2. Also go to Google Search Console → Settings → Ownership Verification and make sure
     your service account email has "Full" access to the property.
  3. Enable the "Indexing API" in Google Cloud Console for your project.
  4. Download the service account JSON key and set SERVICE_ACCOUNT_FILE below.

Usage:
  python3 indexing_api.py           # auto-advances through queue using indexing_state.json
  python3 indexing_api.py 200       # override: start at index 200 (also saves state)

The script persists its position in indexing_state.json. Each cron run advances by
DAILY_LIMIT URLs; after the queue is exhausted it wraps back to 0 on the next run.

Note: Google Indexing API limit is 200 URL_UPDATED requests per day per service account.
"""

import json
import re
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build

# ── Config ────────────────────────────────────────────────────────────────────
SERVICE_ACCOUNT_FILE = "service_account.json"   # path to your JSON key file
SCOPES = ["https://www.googleapis.com/auth/indexing"]
BASE_URL = "https://eduentry.com"
DAILY_LIMIT = 200
RECENT_DAYS = 20          # only submit pages changed within this window
# ─────────────────────────────────────────────────────────────────────────────

# ── Recent-filter helpers ─────────────────────────────────────────────────────

REPO_ROOT = Path(__file__).parent
SUBMITTED_FILE = REPO_ROOT / "indexing_submitted.json"  # URLs submitted this cycle


def _load_submitted() -> set:
    try:
        return set(json.loads(SUBMITTED_FILE.read_text()))
    except (FileNotFoundError, ValueError, json.JSONDecodeError):
        return set()


def _save_submitted(submitted: set) -> None:
    SUBMITTED_FILE.write_text(json.dumps(sorted(submitted)))

_LOCALE_POSTS = {
    "":   "app/blog/posts.ts",
    "tr": "app/blog/posts-tr.ts",
    "fr": "app/blog/posts-fr.ts",
    "es": "app/blog/posts-es.ts",
    "ar": "app/blog/posts-ar.ts",
    "ru": "app/blog/posts-ru.ts",
    "zh": "app/blog/posts-zh.ts",
}

def _recent_git_files():
    """Set of repo-relative file paths touched in the last RECENT_DAYS days."""
    r = subprocess.run(
        ["git", "log", f"--since={RECENT_DAYS} days ago", "--name-only", "--pretty=format:"],
        cwd=REPO_ROOT, capture_output=True, text=True,
    )
    return {line.strip() for line in r.stdout.splitlines() if line.strip()}


def _slug_dates():
    """Dict of (locale, slug) -> most-recent date parsed from every posts-*.ts file.

    Prefers dateModified over date so only genuinely updated posts are re-submitted.
    Falls back to date (publication date) so newly created posts without dateModified
    are still included.  Posts that have neither field are excluded (unknown = False).
    """
    cutoff = datetime.now(timezone.utc) - timedelta(days=RECENT_DAYS)
    dates: dict[tuple[str, str], datetime] = {}
    for locale, rel_path in _LOCALE_POSTS.items():
        try:
            text = (REPO_ROOT / rel_path).read_text(encoding="utf-8")
        except FileNotFoundError:
            continue
        for m in re.finditer(r"slug:\s*['\"]([^'\"]+)['\"]", text):
            slug = m.group(1)
            snippet = text[m.start(): m.start() + 900]
            dm = re.search(r"dateModified:\s*['\"](\d{4}-\d{2}-\d{2})['\"]", snippet)
            d  = re.search(r"\bdate:\s*['\"](\d{4}-\d{2}-\d{2})['\"]", snippet)
            best = dm or d  # prefer dateModified; fall back to date
            if best:
                try:
                    dates[(locale, slug)] = datetime.strptime(best.group(1), "%Y-%m-%d").replace(tzinfo=timezone.utc)
                except ValueError:
                    pass
    return dates, cutoff


def _is_recent(url: str, dates: dict, cutoff: datetime, git_files: set[str]) -> bool:
    """Return True if the URL represents content changed within RECENT_DAYS."""
    is_ai = url.startswith("https://eduentry.ai")
    path = url.replace("https://eduentry.com", "").replace("https://eduentry.ai", "")
    parts = [p for p in path.strip("/").split("/") if p]

    # ── Blog posts (/blog/{slug} or /{locale}/blog/{slug}) ────────────────────
    if "blog" in parts and "tag" not in parts and len(parts) >= 2:
        blog_idx = parts.index("blog")
        locale = parts[blog_idx - 1] if blog_idx > 0 else ""
        if blog_idx + 1 < len(parts):
            slug = parts[blog_idx + 1]
            dt = dates.get((locale, slug)) or dates.get(("", slug))
            if dt is not None:
                return dt >= cutoff
            # Slug not found in any posts-*.ts file → exclude (stale or deleted post)
            return False

    # ── eduentry.ai → check app/ai/ source files ──────────────────────────────
    if is_ai:
        ai_prefix = ("app/ai/" + path.lstrip("/")).rstrip("/")
        return any(f == ai_prefix + "/page.tsx" or f.startswith(ai_prefix + "/") or f == ai_prefix for f in git_files)

    # ── Blog tag pages → check the shared tag page source ─────────────────────
    if "blog" in parts and "tag" in parts:
        return any("blog/tag" in f for f in git_files)

    # ── Grammar school area pages ─────────────────────────────────────────────
    if parts and parts[0] == "grammar-schools":
        return any("grammar-schools" in f for f in git_files)

    # ── Subject pages ─────────────────────────────────────────────────────────
    if parts and parts[0] == "subjects":
        return any("subjects" in f for f in git_files)

    # ── Tools ─────────────────────────────────────────────────────────────────
    if parts and parts[0] == "tools":
        tool_path = "app/tools/" + "/".join(parts[1:])
        return any(f.startswith(tool_path) for f in git_files)

    # ── Locale static pages (/tr, /fr/xxx, etc.) ──────────────────────────────
    if parts and parts[0] in _LOCALE_POSTS and len(parts) == 1:
        return any(f"app/{parts[0]}" in f for f in git_files)

    # ── Everything else: check if the specific page source file changed ──────
    # Empty path = homepage: only re-submit if app/page.tsx itself changed,
    # not on every blog-post commit (which also touches app/ files).
    if not parts:
        return any(f in {"app/page.tsx", "app/layout.tsx"} for f in git_files)
    app_path = "app/" + "/".join(parts)
    return any(f.startswith(app_path) for f in git_files)


def _all_blog_urls() -> list[str]:
    """Auto-generate blog post URLs from every posts-*.ts file."""
    locale_base = {
        "":   f"{BASE_URL}/blog",
        "tr": f"{BASE_URL}/tr/blog",
        "fr": f"{BASE_URL}/fr/blog",
        "es": f"{BASE_URL}/es/blog",
        "ar": f"{BASE_URL}/ar/blog",
        "ru": f"{BASE_URL}/ru/blog",
        "zh": f"{BASE_URL}/zh/blog",
    }
    urls: list[str] = []
    for locale, rel_path in _LOCALE_POSTS.items():
        base = locale_base[locale]
        try:
            text = (REPO_ROOT / rel_path).read_text(encoding="utf-8")
        except FileNotFoundError:
            continue
        for slug in re.findall(r"slug:\s*['\"]([^'\"]+)['\"]", text):
            urls.append(f"{base}/{slug}")
    return urls


def filter_recent(urls: list[str]) -> list[str]:
    dates, cutoff = _slug_dates()
    git_files = _recent_git_files()
    kept = [u for u in urls if _is_recent(u, dates, cutoff, git_files)]
    removed = len(urls) - len(kept)
    print(f"Recent filter ({RECENT_DAYS}d): {len(urls)} → {len(kept)} URLs ({removed} removed as unchanged)\n")
    return kept

# Blog post URLs are auto-generated from posts-*.ts files at runtime (see _all_blog_urls).
# Only add non-blog URLs here: static pages, tools, grammar schools, tag pages, eduentry.ai.
URLS_TO_SUBMIT = [
    # ── Arabic (AR) ───────────────────────────────────────────────────────────
    f"{BASE_URL}/ar/blog/ma-hiya-al-daraja-al-miayriya",
    f"{BASE_URL}/ar/blog/madaris-mawhubin-dubai-2026",
    f"{BASE_URL}/ar/blog/nwea-map-sharh-shaml",
    f"{BASE_URL}/ar/blog/daraja-nwea-map-infadat",
    f"{BASE_URL}/ar/blog/tahsin-daraja-map-qiraah",
    f"{BASE_URL}/ar/blog/tahsin-daraja-map-riyadiyyat",
    f"{BASE_URL}/ar/blog/kayfa-tahdar-ikhtibar-mawhubin-dalil",
    f"{BASE_URL}/ar/blog/taqrir-measayir-akademiyya-2026",
    f"{BASE_URL}/ar/blog/fahm-quwat-dauf-tiflik-qabl-al-thanawiya",
    f"{BASE_URL}/ar/blog/65-wazifa-amina-min-altamtil-bildhaka-alaishtinai",
    f"{BASE_URL}/ar/blog/oecd-khubra-amaliyya-mubakkira-nataij-mihniyya",
    f"{BASE_URL}/ar/blog/oecd-amal-juzyi-lilmurahiqin-fawayd",
    f"{BASE_URL}/ar/blog/iktishaf-mawahib-tiflak-dalil-walidain-jadid",
    f"{BASE_URL}/ar/blog/qalaq-alimtihan-lada-alatfal-nuqat-alquwwa",
    f"{BASE_URL}/ar/blog/quwat-al-shakhsiya-wa-al-tafawwuq-al-dirasi",
    # ── Russian (RU) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/ru/blog/otsenki-wisc-v-obyasnenie",
    f"{BASE_URL}/ru/blog/cogat-vs-nwea-map-odarennost",
    f"{BASE_URL}/ru/blog/ranniy-stazh-razvitie-rebyonka-karera",
    f"{BASE_URL}/ru/blog/preimushchestva-stazha-v-shkole",
    f"{BASE_URL}/ru/blog/rabochiy-opyt-starshaya-shkola-uk",
    f"{BASE_URL}/ru/blog/finansovaya-praktika-shestoy-klass-uk",
    f"{BASE_URL}/ru/blog/kak-pomoch-rebyonku-poluchit-opyt-raboty",
    f"{BASE_URL}/ru/blog/kak-vash-rebyonok-sravnivaetsya-globalno",
    f"{BASE_URL}/ru/blog/kak-vydelytsya-v-15-let",
    f"{BASE_URL}/ru/blog/kak-nachat-biznes-v-16-let",
    f"{BASE_URL}/ru/blog/pisa-2025-globalnyy-obrazovatelnyy-krizis",
    f"{BASE_URL}/ru/blog/pisa-2025-rabochiy-opyt-gotovnost-uchashchikhsya",
    f"{BASE_URL}/ru/blog/kak-napisat-rezyume-dlya-stazha",
    f"{BASE_URL}/ru/blog/kak-proyti-sobesedovanie-na-stazh",
    f"{BASE_URL}/ru/blog/tsifrovoy-marketing-stazh-shkola",
    f"{BASE_URL}/ru/blog/kak-nayti-stazh-bez-svyazey",
    f"{BASE_URL}/ru/blog/kak-napisat-soprovoditelnoe-pismo-dlya-stazha",
    f"{BASE_URL}/ru/blog/udalennaya-stazh-dlya-shkolnikov",
    f"{BASE_URL}/ru/blog/it-stazh-dlya-shkolnikov",
    f"{BASE_URL}/ru/blog/pervyy-den-na-stazhirovke",
    f"{BASE_URL}/ru/blog/kak-poluchit-rekomendatelnoe-pismo-posle-stazha",
    f"{BASE_URL}/ru/blog/startap-stazh-shkolniki",
    f"{BASE_URL}/ru/blog/chto-takoe-pisa-rezultaty-2025-uspekh-v-karrere",
    f"{BASE_URL}/ru/blog/chto-takoe-standartizirovanny-ball",
    f"{BASE_URL}/ru/blog/podgotovka-k-11-plius",
    f"{BASE_URL}/ru/blog/trebovaniya-grammaticheskikh-shkol-2026",
    f"{BASE_URL}/ru/blog/test-cat4-polny-gid",
    f"{BASE_URL}/ru/blog/bally-nwea-map-razyasneniye",
    f"{BASE_URL}/ru/blog/ball-nwea-map-upal",
    f"{BASE_URL}/ru/blog/kak-uluchshit-ball-map-chteniye",
    f"{BASE_URL}/ru/blog/kak-uluchshit-ball-map-matematika",
    f"{BASE_URL}/ru/blog/65-professiy-zashchishchennykh-ot-ii",
    f"{BASE_URL}/ru/blog/silnye-slabye-storony-rebenka-podgotovka-k-sredney-shkole",
    f"{BASE_URL}/ru/blog/oecd-podrostkovaya-praktika-rezultaty-kariery",
    f"{BASE_URL}/ru/blog/oecd-podrostkovaya-podrabotka-preimushchestva",
    f"{BASE_URL}/ru/blog/obnaruzhit-skrytye-talenty-rebyonka-rukovodstvo-roditelej",
    f"{BASE_URL}/ru/blog/sily-kharaktera-i-akademicheskiy-uspekh",
    f"{BASE_URL}/ru/blog/trevoga-pered-ekzamenami-u-detey-silnye-storony",
    # ── Chinese (ZH) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/zh/blog/wisc-v-fenshu-jiexi",
    f"{BASE_URL}/zh/blog/cogat-vs-nwea-map-caisheng",
    f"{BASE_URL}/zh/blog/pisa-2025-zhongguo-jiazhang-zhinan",
    f"{BASE_URL}/zh/blog/haizi-xueshu-shuiping-ruhe-celiang",
    f"{BASE_URL}/zh/blog/gaozhong-shixi-ruhe-xunzhao",
    f"{BASE_URL}/zh/blog/uk-caiwu-shixi-liuzhong",
    f"{BASE_URL}/zh/blog/bang-haizi-zhao-shixi-jizhang",
    f"{BASE_URL}/zh/blog/shixi-jianlixie-zhinan",
    f"{BASE_URL}/zh/blog/shixi-mianshi-zhunbei-jiqiao",
    f"{BASE_URL}/zh/blog/shuzi-yingxiao-shixi-rumen",
    f"{BASE_URL}/zh/blog/shuju-fenxi-shixi-gaoxiaosheng",
    f"{BASE_URL}/zh/blog/ruhe-zai-15-sui-tuocying",
    f"{BASE_URL}/zh/blog/ruhe-zhaodao-shixi-mei-you-guanxi",
    f"{BASE_URL}/zh/blog/shixi-qiuzhixin-xiezuo-zhinan",
    f"{BASE_URL}/zh/blog/yuancheng-zaixian-shixi-zhinan",
    f"{BASE_URL}/zh/blog/IT-keji-shixi-gaoxiao",
    f"{BASE_URL}/zh/blog/jinrong-shixi-rumen",
    f"{BASE_URL}/zh/blog/sheji-chuangyi-shixi",
    f"{BASE_URL}/zh/blog/chuangye-gongsi-shixi",
    f"{BASE_URL}/zh/blog/tuijianxin-zenme-yao",
    f"{BASE_URL}/zh/blog/shixi-di-yi-tian",
    f"{BASE_URL}/zh/blog/shixi-vs-jianzhang",
    f"{BASE_URL}/zh/blog/pisa-shi-shenme-2025-chengji-yu-zhiye-fazhan",
    f"{BASE_URL}/zh/blog/shenme-shi-biaozhunhua-fenshu",
    f"{BASE_URL}/zh/blog/xinnanwei-jizhong-ban-kaoshi-zhinan",
    f"{BASE_URL}/zh/blog/nwea-map-chengji-jiexi",
    f"{BASE_URL}/zh/blog/nwea-map-chengji-xiangla",
    f"{BASE_URL}/zh/blog/tigao-nwea-map-yuedu-chengji",
    f"{BASE_URL}/zh/blog/tigao-nwea-map-shuxue-chengji",
    f"{BASE_URL}/zh/blog/yingguo-wenfa-xuexiao-2026",
    f"{BASE_URL}/zh/blog/dubai-maoli-xuexiao-2026",
    f"{BASE_URL}/zh/blog/liaojie-haizi-youshi-ruodian-zhongxue-zhunbei",
    f"{BASE_URL}/zh/blog/65-ge-ai-wu-fa-zidong-hua-de-zhiye",
    f"{BASE_URL}/zh/blog/oecd-qingshaonian-gongzuo-jingyan-zhiye-chengguo",
    f"{BASE_URL}/zh/blog/oecd-qingshaonian-jianzhi-gongzuo-yichu",
    f"{BASE_URL}/zh/blog/faxian-xueling-haizi-yincang-qianli-jiachang-zhinan",
    f"{BASE_URL}/zh/blog/xingge-youshi-yu-xueyechengjiu",
    f"{BASE_URL}/zh/blog/ertong-kaoshi-jiaolu-xingge-youshi",
    # Free academic test post — all 7 locales
    f"{BASE_URL}/blog/discover-child-strengths-free-academic-test",
    f"{BASE_URL}/tr/blog/cocugunuzun-guclu-yonlerini-ucretsiz-test-ile-kesfet",
    f"{BASE_URL}/es/blog/test-academico-gratuito-fortalezas-debilidades-hijo",
    f"{BASE_URL}/fr/blog/test-academique-gratuit-forces-faiblesses-enfant",
    f"{BASE_URL}/ar/blog/ikhtibar-akademi-majani-quwat-duaf-tiflak",
    f"{BASE_URL}/ru/blog/besplatny-akademichesky-test-silnye-slabye-storony-rebenka",
    f"{BASE_URL}/zh/blog/mianfei-xueshu-ceshi-haizi-youshi-ruodian",
    # Smart child bad grades — all 7 locales
    f"{BASE_URL}/blog/smart-child-bad-grades",
    f"{BASE_URL}/tr/blog/zeki-cocuk-neden-basarisiz-olur",
    f"{BASE_URL}/es/blog/hijo-inteligente-malas-notas",
    f"{BASE_URL}/fr/blog/enfant-intelligent-mauvaises-notes",
    f"{BASE_URL}/ar/blog/tifl-dhaki-darajat-saiya",
    f"{BASE_URL}/ru/blog/umny-rebyonok-plokhie-otsenki",
    f"{BASE_URL}/zh/blog/congming-haizi-chengji-cha",
    # How to find internship as student — all 7 locales
    f"{BASE_URL}/blog/how-to-find-internship-as-student",
    f"{BASE_URL}/tr/blog/ogrenciyken-staj-bulmanin-yeni-nesil-yolu",
    f"{BASE_URL}/es/blog/como-encontrar-practicas-siendo-estudiante",
    f"{BASE_URL}/fr/blog/comment-trouver-un-stage-etudiant",
    f"{BASE_URL}/ar/blog/kayfa-tajid-tadrib-ka-talib",
    f"{BASE_URL}/ru/blog/kak-nayti-stazhirovku-buduchi-studentom",
    f"{BASE_URL}/zh/blog/xuesheng-ru-he-zhao-dao-shixi",
    # Child cognitive potential page — all 7 locales
    f"{BASE_URL}/your-childs-potential",
    f"{BASE_URL}/tr/cocugunuzun-potansiyeli",
    f"{BASE_URL}/es/potencial-de-tu-hijo",
    f"{BASE_URL}/fr/potentiel-de-votre-enfant",
    f"{BASE_URL}/ar/imkaniyat-tiflik",
    f"{BASE_URL}/ru/potentsial-vashego-rebyonka",
    f"{BASE_URL}/zh/haizi-de-qianli",
    # GCSE post — EN
    f"{BASE_URL}/blog/how-to-prepare-for-gcse",
    # TR: 4 new posts
    f"{BASE_URL}/tr/blog/standart-puan-nedir",
    f"{BASE_URL}/tr/blog/nwea-map-puanlari-aciklamasi",
    f"{BASE_URL}/tr/blog/nwea-map-puani-dustu",
    f"{BASE_URL}/tr/blog/nwea-map-okuma-puani-nasil-yukseltilir",
    f"{BASE_URL}/tr/blog/nwea-map-matematik-puani-nasil-yukseltilir",
    f"{BASE_URL}/tr/blog/gramer-okulu-giris-sartlari-2026",
    f"{BASE_URL}/tr/blog/11-plus-sinavina-hazirlik-rehberi",
    # AR: 4 new posts
    f"{BASE_URL}/ar/blog/mutatalabat-madaris-al-qawaid-2026",
    f"{BASE_URL}/ar/blog/fawaeid-tadreeb-lise-lil-jami",
    f"{BASE_URL}/ar/blog/khibra-amal-tijaria-lise-uk",
    f"{BASE_URL}/ar/blog/kaifa-tahdar-imtihan-11-plus",
    # ZH: 3 new posts
    f"{BASE_URL}/zh/blog/gaozhong-shixi-youshi-daxue",
    f"{BASE_URL}/zh/blog/gaozhong-shangwu-shixi-yingguo",
    f"{BASE_URL}/zh/blog/ruhe-zhunbei-11-plus-kaoshi",
    # ES: 2 new posts
    f"{BASE_URL}/es/blog/como-prepararse-para-el-11-plus",
    f"{BASE_URL}/es/blog/razonamiento-verbal-11-plus-guia",
    # FR: 2 new posts
    f"{BASE_URL}/fr/blog/comment-preparer-examen-11-plus",
    f"{BASE_URL}/fr/blog/raisonnement-verbal-11-plus-guide",
    # RU: 1 new post
    f"{BASE_URL}/ru/blog/verbalnoye-rassuzhdenie-11-plus-rukovodstvo",
    # Global academic benchmarks report 2026 — missing 5 locales (EN + AR already indexed)
    f"{BASE_URL}/tr/blog/kuresel-akademik-kiyaslama-raporu-2026",
    f"{BASE_URL}/es/blog/informe-referencias-academicas-globales-2026",
    f"{BASE_URL}/fr/blog/rapport-references-academiques-mondiales-2026",
    f"{BASE_URL}/ru/blog/globalnyy-doklad-akademicheskikh-standartov-2026",
    f"{BASE_URL}/zh/blog/2026-nian-quanqiu-xueshu-biaozhun-baogao",
    # Habits to avoid future unemployment — all 7 locales
    f"{BASE_URL}/blog/habits-to-avoid-future-unemployment",
    f"{BASE_URL}/tr/blog/gelecekte-issiz-kalmamak-icin-aliskanliklar",
    f"{BASE_URL}/ar/blog/adawat-tifl-litajannub-batalat-mustaqbal",
    f"{BASE_URL}/es/blog/habitos-evitar-desempleo-futuro",
    f"{BASE_URL}/fr/blog/habitudes-eviter-chomage-futur",
    f"{BASE_URL}/ru/blog/privychki-dlya-zanyatosti-budushchego",
    f"{BASE_URL}/zh/blog/haizi-wei-lai-jiu-ye-xiguan",
    # Previously skipped — index 200 gap + summer activities (7 locales)
    f"{BASE_URL}/zh/blog/shuzi-yingxiao-shixi-rumen",
    f"{BASE_URL}/blog/summer-activities-ambitious-children",
    f"{BASE_URL}/tr/blog/yaz-tatili-akademik-cocuk-aktiviteleri",
    f"{BASE_URL}/ar/blog/anshita-sayfiya-atfal-mutamihin-akademiyan",
    f"{BASE_URL}/es/blog/actividades-verano-ninos-academicamente-ambiciosos",
    f"{BASE_URL}/fr/blog/activites-ete-enfants-academiquement-ambitieux",
    f"{BASE_URL}/ru/blog/letnie-zanyatiya-dlya-akademicheski-ambitsioznykh-detey",
    f"{BASE_URL}/zh/blog/shuqi-xueye-jingjin-haizi-huodong",
    # No-experience internship — all 7 locales
    f"{BASE_URL}/blog/how-to-get-internship-no-experience-high-school",
    f"{BASE_URL}/tr/blog/deneyimsiz-lisede-staj-ve-is-tecrubesi",
    f"{BASE_URL}/es/blog/practicas-sin-experiencia-instituto",
    f"{BASE_URL}/fr/blog/stage-lyceen-sans-experience",
    f"{BASE_URL}/ar/blog/kayfa-tajid-staj-bila-khibra-thanawy",
    f"{BASE_URL}/ru/blog/kak-nayti-stazh-bez-opyta-shkolnik",
    f"{BASE_URL}/zh/blog/gaozhong-wu-jingyan-shixi-zhinan",
    # How to find internship as a student — all 7 locales
    f"{BASE_URL}/blog/how-to-find-internship-as-a-student",
    f"{BASE_URL}/tr/blog/ogrenci-staj-nasil-bulunur",
    f"{BASE_URL}/es/blog/como-encontrar-practicas-estudiante",
    f"{BASE_URL}/fr/blog/comment-trouver-stage-etudiant",
    f"{BASE_URL}/ar/blog/kayfa-tajid-tadreeb-li-tullab",
    f"{BASE_URL}/ru/blog/kak-nayti-stazhirovku-studentu",
    f"{BASE_URL}/zh/blog/xuesheng-ruhe-zhao-shixi",
    # 11+ exam complete guide — all 7 locales
    f"{BASE_URL}/blog/what-is-the-11-plus-exam-complete-guide",
    f"{BASE_URL}/tr/blog/11-plus-sinavi-nedir-tam-rehber",
    f"{BASE_URL}/es/blog/que-es-el-examen-11-plus-guia-completa",
    f"{BASE_URL}/fr/blog/quest-ce-que-lexamen-11-plus-guide-complet",
    f"{BASE_URL}/ar/blog/ma-hwa-imtihan-11-plus-dalil-shamil",
    f"{BASE_URL}/ru/blog/chto-takoe-ekzamen-11-plus-polnoye-rukovodstvo",
    f"{BASE_URL}/zh/blog/11-plus-kaoshi-wanzheng-zhinan",
    # 6 globally-relevant TR translations
    f"{BASE_URL}/tr/blog/pisa-2025-global-egitim-krizi-ebeveyn-rehberi",
    f"{BASE_URL}/tr/blog/isee-ssat-ozel-okul-sinavi-rehberi",
    f"{BASE_URL}/tr/blog/abd-ust-zeka-programi-test-rehberi",
    f"{BASE_URL}/tr/blog/ust-zeka-testine-nasil-hazirlanilir",
    f"{BASE_URL}/tr/blog/dijital-pazarlama-is-deneyimi-ogrenci-yorumlari",
    f"{BASE_URL}/tr/blog/16-yasinda-is-hayatina-nasil-baslanir",
    # ── Static pages (EN) ─────────────────────────────────────────────────────
    BASE_URL,
    f"{BASE_URL}/11-plus",
    f"{BASE_URL}/grammar-schools",
    f"{BASE_URL}/subjects",
    f"{BASE_URL}/about",
    f"{BASE_URL}/methodology",
    f"{BASE_URL}/internship",
    f"{BASE_URL}/demo",
    f"{BASE_URL}/sample-report",
    f"{BASE_URL}/blog",
    f"{BASE_URL}/privacy",
    f"{BASE_URL}/terms",
    # ── Static pages (TR) ─────────────────────────────────────────────────────
    f"{BASE_URL}/tr",
    f"{BASE_URL}/tr/blog",
    f"{BASE_URL}/tr/hakkimizda",
    f"{BASE_URL}/tr/metodoloji",
    f"{BASE_URL}/tr/staj",
    # ── Static pages (ES) ─────────────────────────────────────────────────────
    f"{BASE_URL}/es",
    f"{BASE_URL}/es/blog",
    f"{BASE_URL}/es/sobre-nosotros",
    f"{BASE_URL}/es/metodologia",
    f"{BASE_URL}/es/practicas",
    # ── Static pages (FR) ─────────────────────────────────────────────────────
    f"{BASE_URL}/fr",
    f"{BASE_URL}/fr/blog",
    f"{BASE_URL}/fr/a-propos",
    f"{BASE_URL}/fr/methodologie",
    f"{BASE_URL}/fr/stage",
    # ── Static pages (AR) ─────────────────────────────────────────────────────
    f"{BASE_URL}/ar",
    f"{BASE_URL}/ar/blog",
    f"{BASE_URL}/ar/hawlana",
    f"{BASE_URL}/ar/manhajiyya",
    f"{BASE_URL}/ar/tadrib",
    # ── Static pages (RU) ─────────────────────────────────────────────────────
    f"{BASE_URL}/ru",
    f"{BASE_URL}/ru/blog",
    f"{BASE_URL}/ru/o-nas",
    f"{BASE_URL}/ru/metodologiya",
    f"{BASE_URL}/ru/stazhirovka",
    # ── Static pages (ZH) ─────────────────────────────────────────────────────
    f"{BASE_URL}/zh",
    f"{BASE_URL}/zh/blog",
    f"{BASE_URL}/zh/guanyu-women",
    f"{BASE_URL}/zh/fangfalun",
    f"{BASE_URL}/zh/shixi",
    # ── Subject pages ─────────────────────────────────────────────────────────
    f"{BASE_URL}/subjects/english",
    f"{BASE_URL}/subjects/maths",
    f"{BASE_URL}/subjects/verbal-reasoning",
    f"{BASE_URL}/subjects/non-verbal-reasoning",
    # ── Grammar school area pages ─────────────────────────────────────────────
    f"{BASE_URL}/grammar-schools/kent",
    f"{BASE_URL}/grammar-schools/buckinghamshire",
    f"{BASE_URL}/grammar-schools/birmingham",
    f"{BASE_URL}/grammar-schools/london-barnet",
    f"{BASE_URL}/grammar-schools/london-sutton",
    f"{BASE_URL}/grammar-schools/hertfordshire",
    f"{BASE_URL}/grammar-schools/essex",
    f"{BASE_URL}/grammar-schools/gloucestershire",
    f"{BASE_URL}/grammar-schools/berkshire",
    f"{BASE_URL}/grammar-schools/trafford",
    f"{BASE_URL}/grammar-schools/wiltshire",
    # ── Blog tag pages ────────────────────────────────────────────────────────
    f"{BASE_URL}/blog/tag/11-plus",
    f"{BASE_URL}/blog/tag/academic-assessment",
    f"{BASE_URL}/blog/tag/australia",
    f"{BASE_URL}/blog/tag/canada",
    f"{BASE_URL}/blog/tag/career-development",
    f"{BASE_URL}/blog/tag/cat4",
    f"{BASE_URL}/blog/tag/character-strengths",
    f"{BASE_URL}/blog/tag/child-development",
    f"{BASE_URL}/blog/tag/cogat",
    f"{BASE_URL}/blog/tag/gifted-education",
    f"{BASE_URL}/blog/tag/gifted-programs",
    f"{BASE_URL}/blog/tag/gifted-testing",
    f"{BASE_URL}/blog/tag/grammar-schools",
    f"{BASE_URL}/blog/tag/internship",
    f"{BASE_URL}/blog/tag/netherlands",
    f"{BASE_URL}/blog/tag/nwea-map",
    f"{BASE_URL}/blog/tag/parent-guide",
    f"{BASE_URL}/blog/tag/personality-assessment",
    f"{BASE_URL}/blog/tag/uae",
    f"{BASE_URL}/blog/tag/uk-education",
    f"{BASE_URL}/blog/tag/university-admissions",
    f"{BASE_URL}/blog/tag/us-education",
    f"{BASE_URL}/blog/tag/via-strengths",
    f"{BASE_URL}/blog/tag/wellbeing",
    f"{BASE_URL}/blog/tag/wisc-v",
    f"{BASE_URL}/blog/tag/work-experience",
    # ── Locale blog tag pages (tr) ────────────────────────────────────────────
    f"{BASE_URL}/tr/blog/tag/11-plus",
    f"{BASE_URL}/tr/blog/tag/academic-assessment",
    f"{BASE_URL}/tr/blog/tag/australia",
    f"{BASE_URL}/tr/blog/tag/canada",
    f"{BASE_URL}/tr/blog/tag/career-development",
    f"{BASE_URL}/tr/blog/tag/cat4",
    f"{BASE_URL}/tr/blog/tag/character-strengths",
    f"{BASE_URL}/tr/blog/tag/child-development",
    f"{BASE_URL}/tr/blog/tag/cogat",
    f"{BASE_URL}/tr/blog/tag/gifted-education",
    f"{BASE_URL}/tr/blog/tag/gifted-programs",
    f"{BASE_URL}/tr/blog/tag/gifted-testing",
    f"{BASE_URL}/tr/blog/tag/grammar-schools",
    f"{BASE_URL}/tr/blog/tag/internship",
    f"{BASE_URL}/tr/blog/tag/netherlands",
    f"{BASE_URL}/tr/blog/tag/nwea-map",
    f"{BASE_URL}/tr/blog/tag/parent-guide",
    f"{BASE_URL}/tr/blog/tag/personality-assessment",
    f"{BASE_URL}/tr/blog/tag/uae",
    f"{BASE_URL}/tr/blog/tag/uk-education",
    f"{BASE_URL}/tr/blog/tag/university-admissions",
    f"{BASE_URL}/tr/blog/tag/us-education",
    f"{BASE_URL}/tr/blog/tag/via-strengths",
    f"{BASE_URL}/tr/blog/tag/wellbeing",
    f"{BASE_URL}/tr/blog/tag/wisc-v",
    f"{BASE_URL}/tr/blog/tag/work-experience",
    # ── Locale blog tag pages (es) ────────────────────────────────────────────
    f"{BASE_URL}/es/blog/tag/11-plus",
    f"{BASE_URL}/es/blog/tag/academic-assessment",
    f"{BASE_URL}/es/blog/tag/australia",
    f"{BASE_URL}/es/blog/tag/canada",
    f"{BASE_URL}/es/blog/tag/career-development",
    f"{BASE_URL}/es/blog/tag/cat4",
    f"{BASE_URL}/es/blog/tag/child-development",
    f"{BASE_URL}/es/blog/tag/gifted-education",
    f"{BASE_URL}/es/blog/tag/grammar-schools",
    f"{BASE_URL}/es/blog/tag/internship",
    f"{BASE_URL}/es/blog/tag/netherlands",
    f"{BASE_URL}/es/blog/tag/parent-guide",
    f"{BASE_URL}/es/blog/tag/uae",
    f"{BASE_URL}/es/blog/tag/uk-education",
    f"{BASE_URL}/es/blog/tag/university-admissions",
    f"{BASE_URL}/es/blog/tag/us-education",
    f"{BASE_URL}/es/blog/tag/character-strengths",
    f"{BASE_URL}/es/blog/tag/cogat",
    f"{BASE_URL}/es/blog/tag/gifted-programs",
    f"{BASE_URL}/es/blog/tag/gifted-testing",
    f"{BASE_URL}/es/blog/tag/nwea-map",
    f"{BASE_URL}/es/blog/tag/personality-assessment",
    f"{BASE_URL}/es/blog/tag/via-strengths",
    f"{BASE_URL}/es/blog/tag/wellbeing",
    f"{BASE_URL}/es/blog/tag/wisc-v",
    f"{BASE_URL}/es/blog/tag/work-experience",
    # ── Locale blog tag pages (fr) ────────────────────────────────────────────
    f"{BASE_URL}/fr/blog/tag/11-plus",
    f"{BASE_URL}/fr/blog/tag/academic-assessment",
    f"{BASE_URL}/fr/blog/tag/australia",
    f"{BASE_URL}/fr/blog/tag/canada",
    f"{BASE_URL}/fr/blog/tag/career-development",
    f"{BASE_URL}/fr/blog/tag/cat4",
    f"{BASE_URL}/fr/blog/tag/child-development",
    f"{BASE_URL}/fr/blog/tag/gifted-education",
    f"{BASE_URL}/fr/blog/tag/grammar-schools",
    f"{BASE_URL}/fr/blog/tag/internship",
    f"{BASE_URL}/fr/blog/tag/netherlands",
    f"{BASE_URL}/fr/blog/tag/parent-guide",
    f"{BASE_URL}/fr/blog/tag/uae",
    f"{BASE_URL}/fr/blog/tag/uk-education",
    f"{BASE_URL}/fr/blog/tag/university-admissions",
    f"{BASE_URL}/fr/blog/tag/us-education",
    f"{BASE_URL}/fr/blog/tag/character-strengths",
    f"{BASE_URL}/fr/blog/tag/cogat",
    f"{BASE_URL}/fr/blog/tag/gifted-programs",
    f"{BASE_URL}/fr/blog/tag/gifted-testing",
    f"{BASE_URL}/fr/blog/tag/nwea-map",
    f"{BASE_URL}/fr/blog/tag/personality-assessment",
    f"{BASE_URL}/fr/blog/tag/via-strengths",
    f"{BASE_URL}/fr/blog/tag/wellbeing",
    f"{BASE_URL}/fr/blog/tag/wisc-v",
    f"{BASE_URL}/fr/blog/tag/work-experience",
    # ── Locale blog tag pages (ar) ────────────────────────────────────────────
    f"{BASE_URL}/ar/blog/tag/11-plus",
    f"{BASE_URL}/ar/blog/tag/academic-assessment",
    f"{BASE_URL}/ar/blog/tag/australia",
    f"{BASE_URL}/ar/blog/tag/canada",
    f"{BASE_URL}/ar/blog/tag/career-development",
    f"{BASE_URL}/ar/blog/tag/cat4",
    f"{BASE_URL}/ar/blog/tag/child-development",
    f"{BASE_URL}/ar/blog/tag/gifted-education",
    f"{BASE_URL}/ar/blog/tag/grammar-schools",
    f"{BASE_URL}/ar/blog/tag/internship",
    f"{BASE_URL}/ar/blog/tag/netherlands",
    f"{BASE_URL}/ar/blog/tag/parent-guide",
    f"{BASE_URL}/ar/blog/tag/uae",
    f"{BASE_URL}/ar/blog/tag/uk-education",
    f"{BASE_URL}/ar/blog/tag/university-admissions",
    f"{BASE_URL}/ar/blog/tag/us-education",
    f"{BASE_URL}/ar/blog/tag/character-strengths",
    f"{BASE_URL}/ar/blog/tag/cogat",
    f"{BASE_URL}/ar/blog/tag/gifted-programs",
    f"{BASE_URL}/ar/blog/tag/gifted-testing",
    f"{BASE_URL}/ar/blog/tag/nwea-map",
    f"{BASE_URL}/ar/blog/tag/personality-assessment",
    f"{BASE_URL}/ar/blog/tag/via-strengths",
    f"{BASE_URL}/ar/blog/tag/wellbeing",
    f"{BASE_URL}/ar/blog/tag/wisc-v",
    f"{BASE_URL}/ar/blog/tag/work-experience",
    # ── Locale blog tag pages (ru) ────────────────────────────────────────────
    f"{BASE_URL}/ru/blog/tag/11-plus",
    f"{BASE_URL}/ru/blog/tag/academic-assessment",
    f"{BASE_URL}/ru/blog/tag/australia",
    f"{BASE_URL}/ru/blog/tag/canada",
    f"{BASE_URL}/ru/blog/tag/career-development",
    f"{BASE_URL}/ru/blog/tag/cat4",
    f"{BASE_URL}/ru/blog/tag/child-development",
    f"{BASE_URL}/ru/blog/tag/gifted-education",
    f"{BASE_URL}/ru/blog/tag/grammar-schools",
    f"{BASE_URL}/ru/blog/tag/internship",
    f"{BASE_URL}/ru/blog/tag/netherlands",
    f"{BASE_URL}/ru/blog/tag/parent-guide",
    f"{BASE_URL}/ru/blog/tag/uae",
    f"{BASE_URL}/ru/blog/tag/uk-education",
    f"{BASE_URL}/ru/blog/tag/university-admissions",
    f"{BASE_URL}/ru/blog/tag/us-education",
    f"{BASE_URL}/ru/blog/tag/character-strengths",
    f"{BASE_URL}/ru/blog/tag/cogat",
    f"{BASE_URL}/ru/blog/tag/gifted-programs",
    f"{BASE_URL}/ru/blog/tag/gifted-testing",
    f"{BASE_URL}/ru/blog/tag/nwea-map",
    f"{BASE_URL}/ru/blog/tag/personality-assessment",
    f"{BASE_URL}/ru/blog/tag/via-strengths",
    f"{BASE_URL}/ru/blog/tag/wellbeing",
    f"{BASE_URL}/ru/blog/tag/wisc-v",
    f"{BASE_URL}/ru/blog/tag/work-experience",
    # ── Locale blog tag pages (zh) ────────────────────────────────────────────
    f"{BASE_URL}/zh/blog/tag/11-plus",
    f"{BASE_URL}/zh/blog/tag/academic-assessment",
    f"{BASE_URL}/zh/blog/tag/australia",
    f"{BASE_URL}/zh/blog/tag/canada",
    f"{BASE_URL}/zh/blog/tag/career-development",
    f"{BASE_URL}/zh/blog/tag/cat4",
    f"{BASE_URL}/zh/blog/tag/child-development",
    f"{BASE_URL}/zh/blog/tag/gifted-education",
    f"{BASE_URL}/zh/blog/tag/grammar-schools",
    f"{BASE_URL}/zh/blog/tag/internship",
    f"{BASE_URL}/zh/blog/tag/netherlands",
    f"{BASE_URL}/zh/blog/tag/parent-guide",
    f"{BASE_URL}/zh/blog/tag/uae",
    f"{BASE_URL}/zh/blog/tag/uk-education",
    f"{BASE_URL}/zh/blog/tag/university-admissions",
    f"{BASE_URL}/zh/blog/tag/us-education",
    f"{BASE_URL}/zh/blog/tag/character-strengths",
    f"{BASE_URL}/zh/blog/tag/cogat",
    f"{BASE_URL}/zh/blog/tag/gifted-programs",
    f"{BASE_URL}/zh/blog/tag/gifted-testing",
    f"{BASE_URL}/zh/blog/tag/nwea-map",
    f"{BASE_URL}/zh/blog/tag/personality-assessment",
    f"{BASE_URL}/zh/blog/tag/via-strengths",
    f"{BASE_URL}/zh/blog/tag/wellbeing",
    f"{BASE_URL}/zh/blog/tag/wisc-v",
    f"{BASE_URL}/zh/blog/tag/work-experience",
    # ── Tools ─────────────────────────────────────────────────────────────────
    f"{BASE_URL}/tools/map-percentile-calculator",
    f"{BASE_URL}/tools/nwea-rit-calculator",
    # ── Recent blog posts ─────────────────────────────────────────────────────
    f"{BASE_URL}/blog/nwea-map-test-prep",
    f"{BASE_URL}/blog/singapore-gep-test-guide",
    # ── Missing static pages ──────────────────────────────────────────────────
    f"{BASE_URL}/11-plus-sas-scores",
    f"{BASE_URL}/personality-assessment",
    f"{BASE_URL}/sample-report/personality",
    f"{BASE_URL}/es/evaluacion-de-personalidad",
    f"{BASE_URL}/es/evaluacion-academica",
    f"{BASE_URL}/es/informe-de-ejemplo-personalidad",
    f"{BASE_URL}/tr/kisilik-degerlendirmesi",
    f"{BASE_URL}/tr/akademik-degerlendirme",
    f"{BASE_URL}/tr/kisilik-ornek-rapor",
    f"{BASE_URL}/fr/evaluation-de-personnalite",
    f"{BASE_URL}/fr/evaluation-academique",
    f"{BASE_URL}/fr/exemple-rapport-personnalite",
    f"{BASE_URL}/ar/taqyim-al-shakhsiya",
    f"{BASE_URL}/ar/taqyim-acadimi",
    f"{BASE_URL}/ar/namudhaj-taqrir-shakhsiya",
    f"{BASE_URL}/ru/otsenka-lichnosti",
    f"{BASE_URL}/ru/akademicheskaya-otsenka",
    f"{BASE_URL}/ru/primer-otcheta-lichnosti",
    f"{BASE_URL}/zh/xingge-pinggu",
    f"{BASE_URL}/zh/xueshu-pinggu",
    f"{BASE_URL}/zh/xingge-yangben-baogao",
    # ── personality assessment blog posts (Oct–Nov 2026) ─────────────────────
    f"{BASE_URL}/blog/personality-vs-aptitude-test",
    f"{BASE_URL}/tr/blog/kisilik-testi-vs-yetenek-testi",
    f"{BASE_URL}/es/blog/test-personalidad-vs-test-aptitud",
    f"{BASE_URL}/fr/blog/test-personnalite-vs-test-aptitude",
    f"{BASE_URL}/ar/blog/ikhtibarat-shakhsiya-muqabil-ikhtibarat-qudrat",
    f"{BASE_URL}/ru/blog/test-lichnosti-vs-test-sposobnostey",
    f"{BASE_URL}/zh/blog/xingge-ceshi-vs-nengli-ceshi",
    f"{BASE_URL}/blog/child-personality-assessment-guide",
    f"{BASE_URL}/blog/how-to-use-child-character-strengths-report",
    f"{BASE_URL}/tr/blog/cocuk-kisilik-degerlendirmesi-rehberi",
    f"{BASE_URL}/tr/blog/cocugun-karakter-guclerini-nasil-kullanirsin",
    f"{BASE_URL}/tr/blog/stajyer-maasi-ne-kadar",
    f"{BASE_URL}/tr/blog/yaz-staji-lise-ogrencisi",
    f"{BASE_URL}/es/blog/guia-evaluacion-personalidad-infantil",
    f"{BASE_URL}/es/blog/como-usar-informe-fortalezas-caracter",
    f"{BASE_URL}/fr/blog/guide-evaluation-personnalite-enfant",
    f"{BASE_URL}/fr/blog/comment-utiliser-rapport-forces-caractere",
    f"{BASE_URL}/ar/blog/dalil-taqyim-shakhsiya-atfal",
    f"{BASE_URL}/ar/blog/kayfa-tastakhdem-taqrir-quwat-shakhsiya",
    f"{BASE_URL}/ru/blog/rukovodstvo-po-otsenke-lichnosti-rebyonka",
    f"{BASE_URL}/ru/blog/kak-ispolzovat-otchet-sily-kharaktera",
    f"{BASE_URL}/zh/blog/ertong-xingge-pinggu-zhinan",
    f"{BASE_URL}/zh/blog/ruhe-shiyong-xingge-youshi-baogao",
    # ── eduentry.ai ───────────────────────────────────────────────────────────
    "https://eduentry.ai",
    "https://eduentry.ai/about",
    "https://eduentry.ai/insights",
    "https://eduentry.ai/work-experience",
    "https://eduentry.ai/work-experience/apply",
    "https://eduentry.ai/tech",
    "https://eduentry.ai/business",
    "https://eduentry.ai/data-analytics",
    "https://eduentry.ai/digital-marketing",
    "https://eduentry.ai/insights/high-school-internship-benefits-university",
    "https://eduentry.ai/insights/how-to-get-tech-internship-before-university",
    "https://eduentry.ai/insights/business-work-experience-high-school-uk",
    "https://eduentry.ai/insights/digital-marketing-work-experience-student-reviews",
    "https://eduentry.ai/insights/how-to-get-internship-no-experience-high-school",
    "https://eduentry.ai/insights/how-to-differentiate-yourself-at-15",
    "https://eduentry.ai/insights/oecd-teenage-work-experience-career-outcomes",
    "https://eduentry.ai/insights/pisa-2025-work-experience-student-readiness",
    "https://eduentry.ai/insights/how-to-find-internship-as-student",
    "https://eduentry.ai/insights/oecd-teenage-part-time-work-benefits",
    "https://eduentry.ai/tr",
    "https://eduentry.ai/tr/insights",
    "https://eduentry.ai/tr/work-experience",
    "https://eduentry.ai/tr/work-experience/apply",
    "https://eduentry.ai/tr/teknoloji",
    "https://eduentry.ai/tr/is-dunyasi",
    "https://eduentry.ai/tr/veri-analitigi",
    "https://eduentry.ai/tr/dijital-pazarlama",
    "https://eduentry.ai/tr/insights/high-school-internship-benefits-university",
    "https://eduentry.ai/tr/insights/how-to-get-tech-internship-before-university",
    "https://eduentry.ai/tr/insights/business-work-experience-high-school-uk",
    "https://eduentry.ai/tr/insights/digital-marketing-work-experience-student-reviews",
    "https://eduentry.ai/tr/insights/how-to-get-internship-no-experience-high-school",
    "https://eduentry.ai/tr/insights/how-to-differentiate-yourself-at-15",
    "https://eduentry.ai/tr/insights/oecd-teenage-work-experience-career-outcomes",
    "https://eduentry.ai/tr/insights/pisa-2025-work-experience-student-readiness",
    "https://eduentry.ai/tr/insights/how-to-find-internship-as-student",
    "https://eduentry.ai/tr/insights/oecd-teenage-part-time-work-benefits",
    "https://eduentry.ai/tr/insights/uluslararasi-staj-programi-2026",
    "https://eduentry.ai/tr/insights/ulusal-staj-programi-rehberi",
    "https://eduentry.ai/es",
    "https://eduentry.ai/es/tecnologia",
    "https://eduentry.ai/es/empresa",
    "https://eduentry.ai/es/analisis-de-datos",
    "https://eduentry.ai/es/marketing-digital",
    "https://eduentry.ai/fr",
    "https://eduentry.ai/fr/technologie",
    "https://eduentry.ai/fr/entreprise",
    "https://eduentry.ai/fr/analyse-de-donnees",
    "https://eduentry.ai/fr/marketing-digital",
    "https://eduentry.ai/ar",
    "https://eduentry.ai/ar/taqniya",
    "https://eduentry.ai/ar/aamal",
    "https://eduentry.ai/ar/bayanat",
    "https://eduentry.ai/ar/tawiq",
    "https://eduentry.ai/ru",
    "https://eduentry.ai/ru/tekhnologii",
    "https://eduentry.ai/ru/biznes",
    "https://eduentry.ai/ru/analiz-dannykh",
    "https://eduentry.ai/ru/tsifrovoy-marketing",
    "https://eduentry.ai/zh",
    "https://eduentry.ai/zh/keji",
    "https://eduentry.ai/zh/shangye",
    "https://eduentry.ai/zh/shuju",
    "https://eduentry.ai/zh/yingxiao",
]


def submit_urls(start: int | None = None):
    """Submit up to DAILY_LIMIT URLs, prioritising unsubmitted URLs first.

    Successfully submitted URLs are tracked in SUBMITTED_FILE. Each run builds
    the queue as [not yet submitted] + [already submitted this cycle], so new or
    unindexed URLs always get priority. When every URL in the queue has been
    submitted, the submitted set is cleared and the next cycle starts fresh.
    """
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

    # Merge auto-generated blog URLs with manually listed non-blog URLs, deduplicated
    combined = list(dict.fromkeys(_all_blog_urls() + URLS_TO_SUBMIT))
    urls = filter_recent(combined)
    total = len(urls)

    # Sort: unsubmitted URLs first, already-submitted ones at the end
    submitted = _load_submitted()
    urls = [u for u in urls if u not in submitted] + [u for u in urls if u in submitted]

    unsubmitted_count = sum(1 for u in urls if u not in submitted)
    print(f"Total after filter: {total}  |  unsubmitted: {unsubmitted_count}  |  already submitted this cycle: {total - unsubmitted_count}\n")

    # Manual override: honour explicit start index (python3 indexing_api.py 50)
    if start is not None:
        batch = urls[start : start + DAILY_LIMIT]
        print(f"Manual override — submitting {len(batch)} URLs (index {start}–{start + len(batch) - 1})...\n")
    else:
        batch = urls[:DAILY_LIMIT]
        print(f"Submitting {len(batch)} URLs...\n")

    ok_urls, failed = [], 0

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
            ok_urls.append(url)
        except Exception as e:
            print(f"  ✗  {url}")
            print(f"       error: {e}")
            failed += 1

    # Update submitted set
    submitted.update(ok_urls)
    all_done = all(u in submitted for u in urls)
    if all_done:
        print(f"\nFull cycle complete — resetting submitted list for next cycle.")
        _save_submitted(set())
    else:
        _save_submitted(submitted)
        remaining = sum(1 for u in urls if u not in submitted)
        print(f"\nRemaining this cycle: {remaining} URLs.")
        print(f"  (cron will handle it automatically, or: python3 indexing_api.py)")

    print(f"\nDone — {len(ok_urls)} submitted, {failed} failed.")


if __name__ == "__main__":
    override = int(sys.argv[1]) if len(sys.argv) > 1 else None
    submit_urls(override)
