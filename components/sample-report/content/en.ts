import type { SampleReportContent } from '../types'

const content: SampleReportContent = {
  locale: 'en',
  path: '/sample-report',
  inLanguage: 'en-GB',
  ogLocale: 'en_GB',
  meta: {
    title: 'Sample Assessment Report: See What You Get',
    description: 'See a real Eduentry assessment report — standardised score, percentile ranking, subject breakdown, topic analysis and personalised recommendations.',
    keywords: ['sample assessment report', 'what does eduentry report look like', 'free 11 plus results example', 'child assessment report example', 'standardised score report'],
    ogTitle: 'Sample Assessment Report — Eduentry',
    ogDescription: 'See exactly what your child\'s report looks like — standardised score, subject breakdown and personalised recommendations.',
  },
  childName: 'Alex',
  completedDate: '14 September 2026',

  banner: 'Sample report for a fictional child — so you can see exactly what you\'ll get.',
  bannerCta: 'Get your child\'s real report →',
  breadcrumbHome: 'Home',
  breadcrumbCurrent: 'Sample Report',

  sampleBadge: 'Sample report · {name}, age {age}',
  heading: '{name}\'s Assessment Results',
  completedLine: 'Completed {date} · 60 questions · 4 subjects',
  overall: 'Overall',
  topPercent: 'Top {pct}% for age {age}',

  subjects: {
    english:             { label: 'English',              shortLabel: 'English',    topics: ['Comprehension', 'Grammar & punctuation', 'Vocabulary'] },
    mathematics:         { label: 'Mathematics',          shortLabel: 'Maths',      topics: ['Arithmetic & number', 'Fractions & decimals', 'Word problems'] },
    verbal_reasoning:    { label: 'Verbal Reasoning',     shortLabel: 'Verbal',     topics: ['Word analogies', 'Letter sequences', 'Word relationships'] },
    nonverbal_reasoning: { label: 'Non-Verbal Reasoning', shortLabel: 'Non-Verbal', topics: ['Figure matrices', 'Series & sequences', 'Figure analogies'] },
  },
  bands: ['Needs Support', 'Below Average', 'Average', 'Above Average', 'Exceptional'],
  bellBands: ['Needs Support', 'Below Avg', 'Average', 'Above Avg', 'Exceptional'],
  percentileFormat: '{n}th%',

  insights: [
    { label: 'Mixed profile', text: 'Strong Verbal Reasoning (122) lifts the overall score, but Maths (84) is pulling it down — the profile shows clear highs and lows.' },
    { label: 'Clear strength: Verbal', text: 'SAS 122 in Verbal Reasoning places Alex in the top 8% nationally for age 10.' },
    { label: 'Maths needs attention', text: 'SAS 84 in Mathematics is in the Needs Support band. Fractions and word problems scored 40% — focused daily practice can close this gap.' },
  ],
  bellTitle: 'Score distribution · Percentile ranking',

  intlHeading: 'International context',
  intl: {
    uk:   ['UK National Curriculum', 'Working at the expected standard overall, with a notably uneven profile — Verbal at grammar-school level, Maths below expected for age.'],
    us:   ['US Grade Level', 'Broadly on grade level; top 30–35% nationally, with significant variation across subjects.'],
    pisa: ['PISA (OECD)', 'PISA Level 3 — solid performer in most areas, with specific gaps to address.'],
    ib:   ['IB Programme', 'Likely suitable for IB, but Maths foundations would need strengthening before selecting Higher Level Mathematics.'],
  },
  intlFootnote: 'Based on overall standardised score of {score} · indicative, not diagnostic',

  subjectsHeading: 'Subject scores',
  correctOf: '{raw} correct of {total}',
  topicsLabel: 'Topics',
  avgDifficulty: 'avg difficulty {d}/10',

  recsHeading: 'Personalised recommendations',
  recsSub: 'Based on topic-level performance',
  recsTarget: 'target with focused practice',
  actionPlan: 'Action plan',
  recommendations: {
    english: {
      priority: 'Focus Area',
      scorePotential: '+5–7 SAS',
      headline: 'Build vocabulary through wide reading',
      rationale: 'Vocabulary is the weakest topic at 60% — it\'s dragging the English score below its potential. Comprehension and grammar are solid; this is a targeted gap.',
      actions: [
        'Read one non-fiction article daily (BBC Bitesize, The Week Junior) — unfamiliar words in context stick better than lists',
        'Keep a vocabulary notebook: 5 new words per week with definitions and one sentence each',
        'Practice inference-style comprehension questions — not just "find the answer" but "what does the author imply"',
      ],
    },
    verbal_reasoning: {
      priority: 'Maintain & Extend',
      scorePotential: '+3–5 SAS',
      headline: 'Channel this strength into competitive reading and puzzles',
      rationale: 'SAS 122 is already Exceptional and in the top 8% nationally. The goal here is not remediation but extension — keeping the skill sharp under pressure and stretching toward the very top of the scale.',
      actions: [
        'Enter a school or national word puzzle competition (e.g. UK Junior Vocabulary Challenge) — competitive pressure sharpens performance beyond normal practice',
        'Read books one or two years above age level — this forces genuine vocabulary inference rather than comfortable recognition',
        'Try timed verbal reasoning papers with a 10% time reduction to build the speed margin that separates SAS 122 from SAS 126+',
      ],
    },
    nonverbal_reasoning: {
      priority: 'Quick Win',
      scorePotential: '+5–8 SAS',
      headline: 'Fix figure analogies — one weak spot, big impact',
      rationale: 'Figure analogies scored 60% while matrices and series scored 70–80%. This single question type is the bottleneck. Targeting it specifically can push Non-Verbal Reasoning into the Exceptional band.',
      actions: [
        'Practise figure analogy questions in isolation for 10 minutes daily — not mixed NVR drills',
        'For each question, describe the transformation in words before looking at the options ("it rotated 90° and gained a dot")',
        'Use physical spatial puzzles — Tangrams or pattern blocks — to build intuitive spatial reasoning',
      ],
    },
    mathematics: {
      priority: 'Focus Area',
      scorePotential: '+8–12 SAS',
      headline: 'Build number foundations before moving to harder topics',
      rationale: 'All three topics are below 60% — fractions and word problems at 40% show that gaps in core number sense are blocking progress. The priority is strengthening fundamentals, not drilling harder questions.',
      actions: [
        'Spend 15 minutes daily on times tables and mental arithmetic until all facts to 12×12 are instant — this unlocks fractions and word problems',
        'Use visual fraction models (fraction bars, pizza diagrams) before introducing written procedures — the concept must come before the algorithm',
        'Solve one word problem daily: circle the numbers, underline what is being asked, draw a picture before writing any calculation',
      ],
    },
  },

  scoreGuide: 'Score guide',
  faqHeading: 'Frequently Asked Questions',
  faq: [
    {
      q: 'What does the Eduentry assessment report show?',
      a: "The Eduentry assessment report shows your child's standardised score (mean 100, SD 15), percentile ranking against international peers, individual subject scores across English, Maths, Verbal Reasoning and Non-Verbal Reasoning, topic-level breakdowns, and personalised AI-generated recommendations for improvement.",
    },
    {
      q: 'What is a standardised score?',
      a: 'A standardised score (SAS) adjusts raw marks to account for the difficulty of the questions a child received, allowing fair comparison across different sittings. Eduentry uses a scale with a mean of 100 and a standard deviation of 15, consistent with widely used assessments such as GL Assessment and CAT4. A score of 100 means the child performed exactly at the average for their age group.',
    },
    {
      q: 'What does the percentile ranking mean in the report?',
      a: "The percentile ranking tells you what proportion of children the same age scored below your child. For example, a 68th percentile means your child scored higher than 68% of peers. Percentiles are derived from Eduentry's international norming data and give a clearer picture of relative performance than a raw percentage score alone.",
    },
    {
      q: "How do I interpret my child's subject scores?",
      a: 'Each subject score sits in one of five bands: Needs Support (70–84), Below Average (85–94), Average (95–109), Above Average (110–119), and Exceptional (120–130). The report also shows topic-level breakdowns within each subject, so you can see exactly which areas are strong and which need targeted practice.',
    },
    {
      q: 'What age range is the assessment designed for?',
      a: "Eduentry's assessment is designed for children aged 7 to 14, covering primary and early secondary school years. The questions, difficulty calibration, and norming data are all age-adjusted so the standardised score fairly reflects performance for your child's specific age in years and months.",
    },
    {
      q: "Can I share the report with my child's teacher or school?",
      a: "Yes. Once you have your child's report you can download it as a PDF or share a link with a teacher, tutor, or school admissions team. The report is designed to be readable by educators who are familiar with standardised assessments, as well as by parents who are not.",
    },
    {
      q: 'How long does the assessment take to complete?',
      a: 'The full assessment consists of 60 questions across four subjects and typically takes between 40 and 60 minutes. Children can pause and return to the assessment if needed. The report is generated automatically once all questions are submitted, and results are usually ready within 90 minutes.',
    },
    {
      q: 'Is the assessment really free?',
      a: 'Yes, the core assessment and full report are completely free. No credit card is required at sign-up. Eduentry offers the free report so parents can understand their child\'s academic profile before deciding whether to explore any optional coaching or practice resources.',
    },
    {
      q: 'What should I do after receiving the report?',
      a: "Start by reading the personalised recommendations section, which prioritises the areas with the highest improvement potential based on your child's specific topic scores. Focus first on any subject in the Needs Support band before addressing Average or Above Average subjects. Share the report with your child's teacher or tutor so they can align classroom or tutoring activities with the identified gaps.",
    },
    {
      q: 'How accurate is this online assessment compared to a professional psychometric test?',
      a: 'Eduentry uses Item Response Theory (2-Parameter Logistic model with MAP estimation) — the same statistical framework used in professional adaptive assessments. It is well-suited for identifying relative strengths and weaknesses across subjects. However, it is an indicative screening tool, not a clinical or educational-psychologist-administered diagnostic. For decisions such as special educational needs support, a formal assessment by a qualified professional is recommended.',
    },
  ],

  ctaBadge: 'Free · No credit card · Results in an hour',
  ctaHeading: 'Get your child\'s real report — free',
  ctaText: 'This sample shows you the format. Your child\'s report will have their actual scores, real topic breakdowns, and specific recommendations based on their answers.',
  ctaButton: 'Start free assessment →',

  aboutHeading: 'About this assessment',
  aboutText: 'Scores use a 2-Parameter Logistic IRT model with MAP estimation. The standardised score scale has a mean of 100 and standard deviation of 15, consistent with GL Assessment and CAT4 norms. Scores are clamped to 70–130. Results are indicative, not diagnostic.',
}

export default content
