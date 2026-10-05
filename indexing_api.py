"""
Google Search Console Indexing API — submit URLs for fast indexing.

Setup:
  1. Go to Google Search Console → Settings → Users and Permissions → add your service account email.
  2. Also go to Google Search Console → Settings → Ownership Verification and make sure
     your service account email has "Full" access to the property.
  3. Enable the "Indexing API" in Google Cloud Console for your project.
  4. Download the service account JSON key and set SERVICE_ACCOUNT_FILE below.

Usage:
  python3 indexing_api.py           # submits first 200 URLs (day 1)
  python3 indexing_api.py 200       # submits from index 200 onward (day 2)

Note: Google Indexing API limit is 200 URL_UPDATED requests per day per service account.
"""

import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build

# ── Config ────────────────────────────────────────────────────────────────────
SERVICE_ACCOUNT_FILE = "service_account.json"   # path to your JSON key file
SCOPES = ["https://www.googleapis.com/auth/indexing"]
BASE_URL = "https://eduentry.com"
DAILY_LIMIT = 200
# ─────────────────────────────────────────────────────────────────────────────

URLS_TO_SUBMIT = [
    # ── English (EN) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/blog/early-internship-child-development-career",
    f"{BASE_URL}/blog/high-school-internship-benefits-university",
    f"{BASE_URL}/blog/business-work-experience-high-school-uk",
    f"{BASE_URL}/blog/how-to-get-tech-internship-before-university",
    f"{BASE_URL}/blog/global-academic-benchmarks-report-2026",
    f"{BASE_URL}/blog/how-to-prepare-for-11-plus",
    f"{BASE_URL}/blog/what-is-a-standardised-score",
    f"{BASE_URL}/blog/verbal-reasoning-11-plus-guide",
    f"{BASE_URL}/blog/grammar-school-entry-requirements-2026",
    f"{BASE_URL}/blog/gifted-program-testing-guide",
    f"{BASE_URL}/blog/nwea-map-scores-explained",
    f"{BASE_URL}/blog/isee-ssat-private-school-guide",
    f"{BASE_URL}/blog/how-to-prepare-gifted-test",
    f"{BASE_URL}/blog/netherlands-cito-toets-guide",
    f"{BASE_URL}/blog/netherlands-vwo-gymnasium-guide",
    f"{BASE_URL}/blog/netherlands-gifted-education-hoogbegaafd",
    f"{BASE_URL}/blog/netherlands-international-school-admissions",
    f"{BASE_URL}/blog/uae-cat4-test-guide",
    f"{BASE_URL}/blog/uae-british-curriculum-school-admissions",
    f"{BASE_URL}/blog/uae-gifted-programs-guide",
    f"{BASE_URL}/blog/uae-international-school-entrance-exams",
    f"{BASE_URL}/blog/dubai-gifted-schools-2026",
    f"{BASE_URL}/blog/canada-gifted-program-identification",
    f"{BASE_URL}/blog/canada-ontario-gifted-testing-guide",
    f"{BASE_URL}/blog/canada-private-school-entrance-exams",
    f"{BASE_URL}/blog/canada-french-immersion-selective-programs",
    f"{BASE_URL}/blog/australia-acer-scholarship-exam",
    f"{BASE_URL}/blog/australia-oc-test-guide",
    f"{BASE_URL}/blog/australia-gate-gifted-program",
    f"{BASE_URL}/blog/australia-naplan-guide",
    f"{BASE_URL}/blog/digital-marketing-work-experience-student-reviews",
    f"{BASE_URL}/blog/business-work-experience-year-12",
    f"{BASE_URL}/blog/how-to-differentiate-yourself-at-15",
    f"{BASE_URL}/blog/how-to-start-business-at-16",
    f"{BASE_URL}/blog/pisa-2025-global-education-crisis-what-parents-need-to-know",
    f"{BASE_URL}/blog/how-does-your-child-compare-globally",
    f"{BASE_URL}/blog/nsw-opportunity-class-test-guide",
    f"{BASE_URL}/blog/non-verbal-reasoning-11-plus-guide",
    f"{BASE_URL}/blog/free-11-plus-practice-test-online",
    f"{BASE_URL}/blog/11-plus-maths-guide",
    f"{BASE_URL}/blog/understanding-child-strengths-weaknesses-high-school",
    f"{BASE_URL}/blog/pisa-2025-work-experience-student-readiness",
    f"{BASE_URL}/blog/65-jobs-ai-cannot-automate",
    f"{BASE_URL}/blog/oecd-teenage-work-experience-career-outcomes",
    f"{BASE_URL}/blog/oecd-teenage-part-time-work-benefits",
    f"{BASE_URL}/blog/discover-school-age-childs-hidden-strengths",
    # ── Turkish (TR) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/tr/blog/erken-yas-staj-cocuk-gelisimi-kariyer",
    f"{BASE_URL}/tr/blog/lise-staji-faydalari-universite",
    f"{BASE_URL}/tr/blog/is-deneyimi-lise-ingiltere",
    f"{BASE_URL}/tr/blog/universiteden-once-teknoloji-staji",
    f"{BASE_URL}/tr/blog/en-iyi-okul-hayat-okuludur",
    f"{BASE_URL}/tr/blog/siber-guvenlik-staji-nasil-bulunur",
    f"{BASE_URL}/tr/blog/a-level-programlari-nedir",
    f"{BASE_URL}/tr/blog/dubai-egitim-sistemi-rehberi",
    f"{BASE_URL}/tr/blog/cocugunuz-dunyada-nerede-duruyor",
    f"{BASE_URL}/tr/blog/notlar-artik-yeterli-degil",
    f"{BASE_URL}/tr/blog/12-sinifta-is-deneyimi",
    f"{BASE_URL}/tr/blog/dijital-pazarlama-staji-nasil-bulunur",
    f"{BASE_URL}/tr/blog/veri-analitigi-kariyer-rehberi",
    f"{BASE_URL}/tr/blog/staj-icin-cv-nasil-yazilir",
    f"{BASE_URL}/tr/blog/staj-mulakati-hazirlik-rehberi",
    f"{BASE_URL}/tr/blog/pisa-2025-kuresel-egitim-krizi-ebeveynlerin-bilmesi-gerekenler",
    f"{BASE_URL}/tr/blog/is-deneyimine-nasil-hazirlanilir",
    f"{BASE_URL}/tr/blog/is-hayatina-hazir-misin",
    f"{BASE_URL}/tr/blog/pisa-nedir-cocugunuz-nasil-hazirlanir",
    f"{BASE_URL}/tr/blog/lise-staji-nasil-bulunur",
    f"{BASE_URL}/tr/blog/cocugunuzun-akademik-seviyesi-nasil-olculur",
    f"{BASE_URL}/tr/blog/pisa-2025-is-deneyimi-ogrenci-hazirliginin-anahtari",
    f"{BASE_URL}/tr/blog/erken-yasta-is-tecrubesi-kazanmak",
    f"{BASE_URL}/tr/blog/stajyer-maasi-ne-kadar",
    f"{BASE_URL}/tr/blog/staj-defteri-nasil-doldurulur",
    f"{BASE_URL}/tr/blog/staj-sigortasi-nedir",
    f"{BASE_URL}/tr/blog/staj-nasil-bulunur",
    f"{BASE_URL}/tr/blog/yaz-staji-lise-ogrencisi",
    f"{BASE_URL}/tr/blog/pisa-nedir-is-hayatini-sekillendiren-sinav",
    f"{BASE_URL}/tr/blog/staja-hazirlik-guclu-yonlerini-bul",
    f"{BASE_URL}/tr/blog/uluslararasi-staj-programlari",
    f"{BASE_URL}/tr/blog/cocugunuzun-guclu-zayif-yonleri-liseye-hazirlik",
    f"{BASE_URL}/tr/blog/yapay-zekanin-alamayacagi-65-meslek",
    f"{BASE_URL}/tr/blog/oecd-ergen-is-deneyimi-kariyer-sonuclari",
    f"{BASE_URL}/tr/blog/oecd-ergen-yari-zamanli-calisma-faydalari",
    f"{BASE_URL}/tr/blog/cocugunuzun-gizli-guclerini-kesfetmek-yeni-nesil-veli-rehberi",
    # ── Spanish (ES) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/es/blog/practicas-tempranas-desarrollo-infantil-carrera",
    f"{BASE_URL}/es/blog/practicas-instituto-beneficios-universidad",
    f"{BASE_URL}/es/blog/experiencia-empresarial-instituto-reino-unido",
    f"{BASE_URL}/es/blog/practicas-tecnologia-antes-universidad",
    f"{BASE_URL}/es/blog/como-se-compara-tu-hijo-a-nivel-mundial",
    f"{BASE_URL}/es/blog/las-notas-ya-no-son-suficientes",
    f"{BASE_URL}/es/blog/experiencia-laboral-empresarial-guia-completa",
    f"{BASE_URL}/es/blog/practicas-marketing-digital-instituto",
    f"{BASE_URL}/es/blog/practicas-analitica-datos-estudiantes",
    f"{BASE_URL}/es/blog/cv-para-practicas-con-16-anos",
    f"{BASE_URL}/es/blog/como-superar-entrevista-practicas",
    f"{BASE_URL}/es/blog/practicas-verano-reino-unido-estudiantes",
    f"{BASE_URL}/es/blog/inteligencia-artificial-futuro-trabajo-jovenes",
    f"{BASE_URL}/es/blog/emprender-con-16-anos",
    f"{BASE_URL}/es/blog/practicas-finanzas-banca-instituto",
    f"{BASE_URL}/es/blog/pisa-2025-crisis-educativa-mundial-que-deben-saber-los-padres",
    f"{BASE_URL}/es/blog/pisa-que-es-resultados-2025-exito-profesional",
    f"{BASE_URL}/es/blog/pisa-2025-experiencia-laboral-preparacion-estudiantes",
    f"{BASE_URL}/es/blog/que-es-una-puntuacion-estandarizada",
    f"{BASE_URL}/es/blog/puntuaciones-nwea-map-explicadas",
    f"{BASE_URL}/es/blog/guia-evaluacion-programas-superdotados",
    f"{BASE_URL}/es/blog/requisitos-escuelas-selectivas-uk-2026",
    f"{BASE_URL}/es/blog/como-preparar-prueba-superdotados",
    f"{BASE_URL}/es/blog/65-empleos-que-la-ia-no-puede-automatizar",
    f"{BASE_URL}/es/blog/comprender-fortalezas-debilidades-hijo-bachillerato",
    f"{BASE_URL}/es/blog/oecd-experiencia-laboral-adolescentes-resultados-carrera",
    f"{BASE_URL}/es/blog/oecd-trabajo-parcial-adolescentes-beneficios",
    f"{BASE_URL}/es/blog/descubrir-fortalezas-ocultas-hijo-guia-moderna-padres",
    # ── French (FR) ───────────────────────────────────────────────────────────
    f"{BASE_URL}/fr/blog/stages-lycee-avantages-universite",
    f"{BASE_URL}/fr/blog/stage-experience-professionnelle-lycee",
    f"{BASE_URL}/fr/blog/se-demarquer-a-15-ans",
    f"{BASE_URL}/fr/blog/creer-son-entreprise-a-16-ans",
    f"{BASE_URL}/fr/blog/comment-se-compare-votre-enfant",
    f"{BASE_URL}/fr/blog/stage-lyceen-france-comment-trouver",
    f"{BASE_URL}/fr/blog/cv-stage-lyceen-16-ans",
    f"{BASE_URL}/fr/blog/entretien-stage-lyceen-conseils",
    f"{BASE_URL}/fr/blog/stage-marketing-digital-lyceen",
    f"{BASE_URL}/fr/blog/stage-data-analyse-lyceen",
    f"{BASE_URL}/fr/blog/intelligence-artificielle-futur-emploi-jeunes",
    f"{BASE_URL}/fr/blog/stage-ete-france-lyceen",
    f"{BASE_URL}/fr/blog/stage-finance-banque-lyceen",
    f"{BASE_URL}/fr/blog/score-pisa-france-analyse",
    f"{BASE_URL}/fr/blog/grandes-ecoles-orientation-lyceen",
    f"{BASE_URL}/fr/blog/pisa-2025-experience-professionnelle-etudiants",
    f"{BASE_URL}/fr/blog/pisa-2025-crise-education-mondiale-ce-que-les-parents-doivent-savoir",
    f"{BASE_URL}/fr/blog/pisa-c-est-quoi-resultats-2025-reussite-professionnelle",
    f"{BASE_URL}/fr/blog/qu-est-ce-qu-un-score-standardise",
    f"{BASE_URL}/fr/blog/scores-nwea-map-expliques",
    f"{BASE_URL}/fr/blog/guide-evaluation-programmes-surdoues",
    f"{BASE_URL}/fr/blog/ecoles-selectionnees-uk-2026",
    f"{BASE_URL}/fr/blog/test-cat4-guide-complet",
    f"{BASE_URL}/fr/blog/comprendre-forces-faiblesses-enfant-lycee",
    f"{BASE_URL}/fr/blog/65-metiers-a-labri-de-l-ia",
    f"{BASE_URL}/fr/blog/oecd-experience-professionnelle-adolescents-resultats-carriere",
    f"{BASE_URL}/fr/blog/oecd-travail-partiel-adolescents-avantages",
    f"{BASE_URL}/fr/blog/decouvrir-forces-cachees-enfant-guide-parents-moderne",
    # ── Arabic (AR) ───────────────────────────────────────────────────────────
    f"{BASE_URL}/ar/blog/cat4-dalil-shamil",
    f"{BASE_URL}/ar/blog/madaras-britaniya-dubai-abu-dhabi",
    f"{BASE_URL}/ar/blog/baramij-mawhubin-imarat",
    f"{BASE_URL}/ar/blog/imtihanat-qabul-madaras-dawliyya",
    f"{BASE_URL}/ar/blog/staj-mubakir-tatawwur-mahni",
    f"{BASE_URL}/ar/blog/kayfa-tajid-staj-dubai",
    f"{BASE_URL}/ar/blog/sirat-dhatiyya-staj-16",
    f"{BASE_URL}/ar/blog/muqabala-staj-nasayih",
    f"{BASE_URL}/ar/blog/staj-taqniya-imarat",
    f"{BASE_URL}/ar/blog/staj-tamwil-imarat",
    f"{BASE_URL}/ar/blog/dhakaa-istinai-mustaqbal-amal",
    f"{BASE_URL}/ar/blog/staj-sayf-imarat",
    f"{BASE_URL}/ar/blog/staj-tadwiq-raqmi",
    f"{BASE_URL}/ar/blog/staj-tahlil-bayanat",
    f"{BASE_URL}/ar/blog/mashruik-tijarik-16",
    f"{BASE_URL}/ar/blog/pisa-2025-khibra-amaliya-istidad-talab",
    f"{BASE_URL}/ar/blog/ma-huwa-pisa-natayij-2025-al-hayat-al-mihniyya",
    f"{BASE_URL}/ar/blog/pisa-2025-azmat-talim-alami-ma-yahtaj-marifatuh-awaliyaa-al-umur",
    f"{BASE_URL}/ar/blog/ma-hiya-al-daraja-al-miayriya",
    f"{BASE_URL}/ar/blog/madaris-mawhubin-dubai-2026",
    f"{BASE_URL}/ar/blog/nwea-map-sharh-shaml",
    f"{BASE_URL}/ar/blog/kayfa-tahdar-ikhtibar-mawhubin-dalil",
    f"{BASE_URL}/ar/blog/taqrir-measayir-akademiyya-2026",
    f"{BASE_URL}/ar/blog/fahm-quwat-dauf-tiflik-qabl-al-thanawiya",
    f"{BASE_URL}/ar/blog/65-wazifa-amina-min-altamtil-bildhaka-alaishtinai",
    f"{BASE_URL}/ar/blog/oecd-khubra-amaliyya-mubakkira-nataij-mihniyya",
    f"{BASE_URL}/ar/blog/oecd-amal-juzyi-lilmurahiqin-fawayd",
    f"{BASE_URL}/ar/blog/iktishaf-mawahib-tiflak-dalil-walidain-jadid",
    # ── Russian (RU) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/ru/blog/ranniy-stazh-razvitie-rebyonka-karera",
    f"{BASE_URL}/ru/blog/preimushchestva-stazha-v-shkole",
    f"{BASE_URL}/ru/blog/rabochiy-opyt-starshaya-shkola-uk",
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
    f"{BASE_URL}/ru/blog/65-professiy-zashchishchennykh-ot-ii",
    f"{BASE_URL}/ru/blog/silnye-slabye-storony-rebenka-podgotovka-k-sredney-shkole",
    f"{BASE_URL}/ru/blog/oecd-podrostkovaya-praktika-rezultaty-kariery",
    f"{BASE_URL}/ru/blog/oecd-podrostkovaya-podrabotka-preimushchestva",
    f"{BASE_URL}/ru/blog/obnaruzhit-skrytye-talenty-rebyonka-rukovodstvo-roditelej",
    # ── Chinese (ZH) ──────────────────────────────────────────────────────────
    f"{BASE_URL}/zh/blog/pisa-2025-zhongguo-jiazhang-zhinan",
    f"{BASE_URL}/zh/blog/haizi-xueshu-shuiping-ruhe-celiang",
    f"{BASE_URL}/zh/blog/gaozhong-shixi-ruhe-xunzhao",
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
    f"{BASE_URL}/zh/blog/yingguo-wenfa-xuexiao-2026",
    f"{BASE_URL}/zh/blog/dubai-maoli-xuexiao-2026",
    f"{BASE_URL}/zh/blog/liaojie-haizi-youshi-ruodian-zhongxue-zhunbei",
    f"{BASE_URL}/zh/blog/65-ge-ai-wu-fa-zidong-hua-de-zhiye",
    f"{BASE_URL}/zh/blog/oecd-qingshaonian-gongzuo-jingyan-zhiye-chengguo",
    f"{BASE_URL}/zh/blog/oecd-qingshaonian-jianzhi-gongzuo-yichu",
    f"{BASE_URL}/zh/blog/faxian-xueling-haizi-yincang-qianli-jiachang-zhinan",
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
    f"{BASE_URL}/blog/tag/child-development",
    f"{BASE_URL}/blog/tag/gifted-education",
    f"{BASE_URL}/blog/tag/grammar-schools",
    f"{BASE_URL}/blog/tag/internship",
    f"{BASE_URL}/blog/tag/netherlands",
    f"{BASE_URL}/blog/tag/parent-guide",
    f"{BASE_URL}/blog/tag/uae",
    f"{BASE_URL}/blog/tag/uk-education",
    f"{BASE_URL}/blog/tag/university-admissions",
    f"{BASE_URL}/blog/tag/us-education",
    f"{BASE_URL}/blog/tag/work-experience",
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
        print(f"  python3 indexing_api.py {end}")


if __name__ == "__main__":
    start_index = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    submit_urls(start_index)
