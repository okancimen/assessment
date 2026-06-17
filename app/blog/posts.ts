export interface BlogPostMeta {
  slug: string
  title: string
  shortTitle: string
  description: string
  date: string
  readTime: string
  tags: string[]
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'global-academic-benchmarks-report-2026',
    title: 'Global Academic Benchmarks Report: 2026 International Scoring and Assessment Trends',
    shortTitle: 'Global Academic Benchmarks Report 2026',
    description:
      'A 2026 breakdown of international standardised testing trends — SAS scores, PISA/TIMSS benchmarks, Digital SAT adaptive testing, and the percentile thresholds families need to track for selective admissions.',
    date: '2026-06-16',
    readTime: '9 min read',
    tags: ['Standardised Testing', 'International Benchmarks', '11+', 'Digital SAT', 'PISA'],
  },
  {
    slug: 'how-to-prepare-for-11-plus',
    title: 'How to Prepare for the 11+ at Home: A Complete Parent\'s Guide',
    shortTitle: 'How to Prepare for the 11+ at Home',
    description:
      'A practical guide for parents on preparing children for the 11+ exam at home — covering verbal reasoning, non-verbal reasoning, maths and English, with a recommended 18-month practice timeline.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['11+', 'Grammar Schools', 'Preparation', 'Parent Guide'],
  },
  {
    slug: 'what-is-a-standardised-score',
    title: 'What Is a Standardised Score? A Clear Guide for Parents',
    shortTitle: 'What Is a Standardised Score?',
    description:
      'Standardised scores, percentile rankings and Standardised Age Scores (SAS) explained in plain language — what the numbers mean, what counts as a good score, and how Eduentry uses the same scale as professional assessments.',
    date: '2026-06-17',
    readTime: '6 min read',
    tags: ['Standardised Testing', 'Scores', 'Percentile', 'Parent Guide'],
  },
  {
    slug: 'verbal-reasoning-11-plus-guide',
    title: 'Verbal Reasoning for the 11+: Question Types, Examples and Practice Tips',
    shortTitle: 'Verbal Reasoning for the 11+',
    description:
      'A complete guide to the verbal reasoning questions your child will face in the 11+ — covering all major question types with worked examples, common mistakes to avoid, and tips for effective home practice.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Verbal Reasoning', '11+', 'Practice', 'Question Types'],
  },
  {
    slug: 'grammar-school-entry-requirements-2026',
    title: 'Grammar School Entry Requirements 2026: Scores, Percentiles and How to Qualify',
    shortTitle: 'Grammar School Entry Requirements 2026',
    description:
      'What score does your child need for a grammar school place in 2026? This guide covers the SAS thresholds, percentile benchmarks and entry requirements across England\'s key grammar school areas.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Grammar Schools', '11+', 'Entry Requirements', '2026'],
  },
  {
    slug: 'gifted-program-testing-guide',
    title: 'Gifted Program Testing Guide: How US Gifted Identification Works and How to Prepare',
    shortTitle: 'US Gifted Program Testing Guide',
    description:
      'How US gifted and talented programs identify students — CogAT, WISC-V, NWEA MAP, and OLSAT explained, with score thresholds by program type and a practical preparation guide for families.',
    date: '2026-06-17',
    readTime: '9 min read',
    tags: ['Gifted Testing', 'CogAT', 'WISC', 'US Education', 'Gifted Programs'],
  },
  {
    slug: 'nwea-map-scores-explained',
    title: 'NWEA MAP Scores Explained: What RIT Scores Mean and How to Interpret Your Child\'s Results',
    shortTitle: 'NWEA MAP Scores Explained',
    description:
      'A complete parent\'s guide to NWEA MAP Growth scores — what RIT scores mean, grade-level benchmarks, percentile comparison, growth norms, and how high MAP scores relate to gifted identification.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['NWEA MAP', 'RIT Scores', 'US Education', 'Gifted Programs', 'Assessment'],
  },
  {
    slug: 'isee-ssat-private-school-guide',
    title: 'ISEE vs SSAT: The Complete Guide to Private School Entrance Exams in the US',
    shortTitle: 'ISEE vs SSAT Private School Guide',
    description:
      'Everything you need to know about the ISEE and SSAT — how each test works, score reporting, key differences, which to choose for your target schools, and how to prepare effectively.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['ISEE', 'SSAT', 'Private School', 'US Education', 'Entrance Exam'],
  },
  {
    slug: 'how-to-prepare-gifted-test',
    title: 'How to Prepare Your Child for a Gifted Test: A Practical Guide for US Families',
    shortTitle: 'How to Prepare for a Gifted Test',
    description:
      'A practical, evidence-based guide for US families preparing for gifted identification testing — what each test measures, what is and isn\'t preparation-responsive, and how to build the right skills over time.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Gifted Testing', 'CogAT', 'NNAT', 'US Education', 'Preparation'],
  },
  // Netherlands
  {
    slug: 'netherlands-cito-toets-guide',
    title: 'Cito Toets & Doorstroomtoets Guide: What Dutch Primary School Scores Mean',
    shortTitle: 'Netherlands Cito / Doorstroomtoets Guide',
    description:
      'A complete guide for parents to the Dutch Doorstroomtoets (formerly Cito toets) — how scores work, what they mean for secondary school placement, and how to support your child through group 8.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Netherlands', 'Cito', 'Doorstroomtoets', 'Dutch Education', 'VWO'],
  },
  {
    slug: 'netherlands-vwo-gymnasium-guide',
    title: 'VWO and Gymnasium in the Netherlands: Entry Requirements and How to Qualify',
    shortTitle: 'Netherlands VWO & Gymnasium Guide',
    description:
      'Everything parents need to know about VWO and Gymnasium in the Netherlands — the highest level of Dutch secondary education, how entry works, and how Tweetalig VWO programmes compare.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Netherlands', 'VWO', 'Gymnasium', 'Dutch Education', 'Secondary School'],
  },
  {
    slug: 'netherlands-gifted-education-hoogbegaafd',
    title: 'Gifted Education in the Netherlands: Hoogbegaafdheid, WISC-V and What Schools Offer',
    shortTitle: 'Gifted Education in the Netherlands',
    description:
      'How giftedness (hoogbegaafdheid) is identified and supported in Dutch schools — WISC-V assessment, plusklas provision, Leonardoscholen, and what to do if your child is underachieving.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Netherlands', 'Gifted Education', 'Hoogbegaafd', 'WISC-V', 'Dutch Schools'],
  },
  {
    slug: 'netherlands-international-school-admissions',
    title: 'International School Admissions in the Netherlands: CAT4, IB and How Entry Works',
    shortTitle: 'Netherlands International School Admissions',
    description:
      'A guide for expat families to international school admissions in the Netherlands — CAT4 assessment, IB vs British curriculum schools, EAL considerations, and how to navigate waiting lists.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Netherlands', 'International Schools', 'CAT4', 'Expat', 'Amsterdam'],
  },
  // UAE
  {
    slug: 'uae-cat4-test-guide',
    title: 'CAT4 Test Guide for UAE Parents: What the Test Measures and How Scores Work',
    shortTitle: 'UAE CAT4 Test Guide',
    description:
      'A complete guide to the CAT4 cognitive abilities test for parents at British-curriculum schools in Dubai and Abu Dhabi — four batteries explained, SAS scoring, stanines, and how UAE schools use results.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['UAE', 'CAT4', 'Dubai', 'British Curriculum', 'Cognitive Testing'],
  },
  {
    slug: 'uae-british-curriculum-school-admissions',
    title: 'British Curriculum School Admissions in Dubai and Abu Dhabi: A Complete Guide',
    shortTitle: 'UAE British School Admissions Guide',
    description:
      'How admissions work at the most sought-after British-curriculum schools in the UAE — GEMS Wellington, JESS, Dubai College, BSAK — including waiting lists, assessment process, and KHDA ratings.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['UAE', 'Dubai', 'British Schools', 'Admissions', 'KHDA'],
  },
  {
    slug: 'uae-gifted-programs-guide',
    title: 'Gifted Education in the UAE: How International Schools Identify and Support High-Ability Students',
    shortTitle: 'UAE Gifted Programs Guide',
    description:
      'How gifted and more-able students are identified and supported in UAE international schools — CAT4 thresholds, KHDA expectations, Al Mawhiba programme, and what to do when school provision falls short.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['UAE', 'Gifted Education', 'CAT4', 'KHDA', 'Dubai Schools'],
  },
  {
    slug: 'uae-international-school-entrance-exams',
    title: 'UAE International School Entrance Exams: CAT4, ISEE, IB and What Each Curriculum Uses',
    shortTitle: 'UAE International School Entrance Exams',
    description:
      'A curriculum-by-curriculum guide to entrance assessments at international schools in the UAE — British (CAT4), American (ISEE/SSAT), IB, and Indian (CBSE/ICSE) school admissions explained.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['UAE', 'Entrance Exams', 'CAT4', 'ISEE', 'International Schools'],
  },
  // Canada
  {
    slug: 'canada-gifted-program-identification',
    title: 'Gifted Program Identification in Canada: A Province-by-Province Guide',
    shortTitle: 'Canada Gifted Program Identification',
    description:
      'How gifted education works across Canadian provinces — different identification processes, WISC-V assessment, CCAT screening, wait times, and what happens when families move between provinces.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Canada', 'Gifted Education', 'WISC-V', 'Ontario', 'Provincial Education'],
  },
  {
    slug: 'canada-ontario-gifted-testing-guide',
    title: 'Ontario Gifted Testing Guide: IPRC, WISC-V and How the Identification Process Works',
    shortTitle: 'Ontario Gifted Testing Guide',
    description:
      'A detailed guide to Ontario\'s formal Gifted exceptionality process — WISC-V assessment, the IPRC committee, CCAT screening, self-contained Gifted classes, and parent rights under the Education Act.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Canada', 'Ontario', 'Gifted', 'IPRC', 'WISC-V'],
  },
  {
    slug: 'canada-private-school-entrance-exams',
    title: 'Canadian Private School Entrance Exams: ISEE, SSAT and How Top Schools Select Students',
    shortTitle: 'Canada Private School Entrance Exams',
    description:
      'How admissions work at Canada\'s top independent schools — Upper Canada College, Havergal, Ridley — including ISEE and SSAT requirements, competitive score ranges, and the full application timeline.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Canada', 'Private Schools', 'ISEE', 'SSAT', 'Independent Schools'],
  },
  {
    slug: 'canada-french-immersion-selective-programs',
    title: 'French Immersion and Selective Public Programs in Canada: What Families Need to Know',
    shortTitle: 'Canada French Immersion & Selective Programs',
    description:
      'A guide to French Immersion, magnet schools, IB public programmes, and other selective pathways in Canadian public education — how each works, how to access them, and how to combine them.',
    date: '2026-06-17',
    readTime: '7 min read',
    tags: ['Canada', 'French Immersion', 'Public Schools', 'IB', 'Gifted'],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3): BlogPostMeta[] {
  const post = getPostBySlug(slug)
  if (!post) return []
  const others = BLOG_POSTS.filter((p) => p.slug !== slug)
  return others
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.post)
}
