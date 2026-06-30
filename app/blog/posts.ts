export interface Faq {
  q: string
  a: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  shortTitle: string
  description: string
  date: string
  dateModified?: string
  readTime: string
  tags: string[]
  faqs?: Faq[]
  cta?: { heading: string; body: string; label: string; href: string }
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'early-internship-child-development-career',
    title: 'Why Internships at Early Ages Matter: Child Development, Maturity, and the Career Advantage That Compounds',
    shortTitle: 'Internships at Early Age: Development & Career Benefits',
    description:
      'The developmental and career case for professional experience at 14–16, not 17–18. Neuroscience, university admissions data, and labour market research show early internship experience produces measurably better outcomes — and the gap widens over time.',
    date: '2026-06-29',
    readTime: '10 min read',
    tags: ['Internship', 'Career Development', 'Child Development', 'University Admissions', 'Work Experience'],
    faqs: [
      {
        q: 'What age is best to start an internship?',
        a: 'Developmental research consistently identifies 14–16 as the optimal window for a first structured professional placement. Starting at this age gives students time to reflect on the experience, build on it, and arrive at their university application with a developed professional narrative. A first internship at 17 or 18 is still valuable — but leaves less time to compound the benefit before UCAS applications close.',
      },
      {
        q: 'How do internships help child development?',
        a: 'Structured work experience during secondary school builds executive function (planning, impulse control, goal-setting), social maturity (professional communication, managing hierarchy, conflict navigation), and self-efficacy (the belief in one\'s own capability). These are not taught effectively in classroom settings — they require the productive discomfort of a real professional environment with real consequences.',
      },
      {
        q: 'Do internships really improve university acceptance chances?',
        a: 'Yes. Russell Group universities explicitly reference work experience in admissions guidance for competitive courses. Medicine, law, and technology programmes treat relevant placement experience as a near-requirement. A personal statement written by a student with genuine work experience contains specific observations and reflections — evidence, not assertion — which admissions readers are trained to recognise and reward.',
      },
      {
        q: 'How does early internship experience affect job search outcomes?',
        a: 'Significantly. NACE\'s 2023 survey found that 83% of employers consider internship experience "somewhat" or "very" important when hiring new graduates. Students with prior internship experience receive job offers at a 70% higher rate before graduation than those without (NACE, 2020). The advantage is greatest for students who started building professional experience early — their networks, references, and track record are more developed than peers who waited until final year.',
      },
    ],
    cta: {
      heading: 'Is your student ready for a first internship?',
      body: 'Free adaptive assessment for high school students aged 14+. Discover readiness across aptitude, domain knowledge, and workplace skills — with a personalised AI report.',
      label: 'Take the free assessment',
      href: '/internship',
    },
  },
  {
    slug: 'high-school-internship-benefits-university',
    title: 'Why High School Internships Matter: Personality, Readiness, and University Acceptance',
    shortTitle: 'High School Internship Benefits',
    description:
      'The evidence-based case for high school internships — how structured work experience at 14–18 builds self-efficacy, resilience, and professional identity, and measurably improves university application outcomes.',
    date: '2026-06-25',
    readTime: '9 min read',
    tags: ['Internship', 'University Admissions', 'Career Development', 'High School', 'Work Experience'],
    faqs: [
      {
        q: 'Do high school internships really help with university admissions?',
        a: 'Yes. Russell Group universities explicitly cite relevant work experience in admissions guidance for competitive courses. Medicine, law, and technology programmes treat it as a near-requirement. Admissions teams use work experience to distinguish between academically equal applicants — students who can describe specific professional experience in their personal statement have a structural advantage over those who cannot.',
      },
      {
        q: 'What personality traits does a high school internship develop?',
        a: 'Research consistently identifies four areas: self-efficacy (belief in your own capability, built through real mastery experiences), resilience (developed through the productive discomfort of an unpredictable workplace), professional communication (writing emails, presenting work, navigating hierarchy), and career clarity (knowing from direct experience whether a field suits you — reducing the risk of a costly degree change at 19).',
      },
      {
        q: 'At what age should a student do their first internship?',
        a: 'The developmental research points to 14–16 as the optimal window for a first structured placement. This gives students time to reflect on the experience, deepen relevant knowledge, and potentially complete a second placement in a different area — arriving at their UCAS application with a developed professional narrative rather than a blank page. Starting at 17 or 18 is still valuable but leaves less time to compound the benefit.',
      },
      {
        q: 'How does work experience improve a university personal statement?',
        a: 'A personal statement written by a student with real work experience contains specific observations, contributions, and reflections — evidence, not assertion. Admissions readers are trained to distinguish between a student who describes what they hope a career will be like versus one who describes what they actually observed and learned. The latter is considerably more persuasive, particularly for competitive courses receiving 10+ applications per place.',
      },
    ],
    cta: {
      heading: 'Is your student internship-ready?',
      body: 'Free adaptive assessment for high school students aged 14+. Get a personalised readiness report across aptitude, domain knowledge, and workplace skills.',
      label: 'Take the free assessment',
      href: '/internship',
    },
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: 'Business Work Experience at High School in the UK: What It Is, How to Get It, and Why It Matters',
    shortTitle: 'Business Work Experience at High School UK',
    description:
      'Everything UK secondary school students need to know about business work experience — what it involves, where to find placements, how to secure one, and why a verified assessment score strengthens every application.',
    date: '2026-06-30',
    readTime: '10 min read',
    tags: ['Internship', 'Career Development', 'Work Experience', 'Business'],
    faqs: [
      {
        q: 'What age can you do business work experience in the UK?',
        a: 'There is no legal minimum for work experience in the UK beyond general child employment rules. Most formal business work experience programmes accept students from Year 10 (age 14–15) upward. Many FTSE 100 companies run dedicated Spring Insight and Summer work experience schemes for Year 12 and Year 13 students specifically. Starting at 14–15 gives you more time to reflect on the experience and build on it before your UCAS application.',
      },
      {
        q: 'What do you actually do on a business work experience placement?',
        a: 'It depends on the organisation and role, but typically: shadow team members across different functions, attend team meetings and take notes, complete a defined project or analysis task, present findings to a manager or team, and ask questions about how the business operates. The most valuable placements give you a structured brief with a real deliverable — not just observation. This is why organisations that use prior assessment data to match students to placements tend to produce better outcomes.',
      },
      {
        q: 'Do you need business A-levels to get business work experience?',
        a: 'No. Most organisations value curiosity, commercial awareness, and communication skills over specific qualifications. Many students who complete successful business placements are studying GCSE or A-level subjects that are not explicitly "business" — history, mathematics, and English are all common. What matters is the ability to engage professionally and demonstrate genuine interest in how organisations work.',
      },
      {
        q: 'How do I find business work experience as a student?',
        a: 'Four main channels: direct applications to local businesses (particularly effective for SMEs, which often take students informally), structured programmes run by large organisations (Barclays, KPMG, Deloitte, and similar run dedicated schemes — dates are usually announced 3–6 months in advance), school career advisor referrals (many schools have employer relationships that students underuse), and platforms like Springpod, Bright Network, and Virtual Work Experience. For competitive placements at large firms, applying early and having an assessment report to support your application gives you a structural advantage.',
      },
      {
        q: 'How does business work experience help university applications?',
        a: 'In three ways: it gives your personal statement specific, evidence-based content instead of generic assertions about interest in business; it demonstrates commercial maturity — the ability to operate in a professional environment — which admissions teams value for competitive business, economics, law, and finance courses; and it reduces your risk of choosing the wrong course, since you will know from direct experience whether a business environment suits you before committing to a three-year degree.',
      },
    ],
    cta: {
      heading: 'Ready to prove your business readiness?',
      body: 'Free 34-question adaptive assessment for students aged 14+. Get a personalised readiness report — and something concrete to reference in every application.',
      label: 'Apply free — Business track',
      href: '/business',
    },
  },
  {
    slug: 'how-to-get-tech-internship-before-university',
    title: 'How to Get a Tech Internship Before University: A Complete Guide for UK Students',
    shortTitle: 'How to Get a Tech Internship Before University',
    description:
      'A practical guide for UK secondary school students on securing a technology internship or work experience placement before starting university — covering where to look, how to apply without a portfolio, and what actually gets you shortlisted.',
    date: '2026-06-30',
    readTime: '11 min read',
    tags: ['Internship', 'Career Development', 'Work Experience'],
    faqs: [
      {
        q: 'Do I need to know how to code to get a tech internship at school?',
        a: 'No — but it helps to understand computational thinking. The tech industry covers a wide range of roles: not just software development, but UX design, cybersecurity, IT support, product management, data analysis, and QA testing. Many of these roles value problem-solving and logical reasoning more than programming fluency. If you can demonstrate you think clearly about systems and problems, and you have genuine curiosity about how technology works, you are competitive for a wide range of technology placements.',
      },
      {
        q: 'What year should I apply for a tech internship?',
        a: 'Applications for competitive tech schemes typically open in September–November for the following summer. Year 10 students (age 14–15) are eligible for many open work experience programmes; Year 12 students (age 16–17) have access to formal Spring Insight weeks and Summer internship programmes at larger technology companies. The earlier you start, the more options you have — a Year 10 placement gives you material for your personal statement and a second chance to deepen your experience in Year 12.',
      },
      {
        q: 'What tech companies offer internships to school students in the UK?',
        a: 'Larger organisations with formal schemes include Google, Microsoft, Amazon, IBM, BT Group, Sky, and the BBC\'s technology division. KPMG, Deloitte, PwC, and EY all have technology-specific student programmes. Beyond these household names, thousands of UK tech scale-ups and SMEs take on student interns — often with more hands-on responsibility and better learning outcomes than large corporates. The most effective route for smaller firms is a direct, personalised approach.',
      },
      {
        q: 'How does an assessment score help a tech internship application?',
        a: 'A credible third-party assessment score solves the experience paradox — you need experience to get experience, but you need an opportunity to build experience in the first place. An Eduentry readiness report gives employers verifiable evidence of your computational thinking, problem-solving ability, and domain knowledge before they have met you. It replaces the absence of a GitHub portfolio or prior internship with measured aptitude data that organisations can act on.',
      },
      {
        q: 'What should I do during a tech internship to get the most out of it?',
        a: 'Four things: arrive with specific questions prepared for each person you shadow (people remember interns who are curious, not passive); ask for a defined deliverable on day one — a report, a presentation, a small piece of code, anything with a deadline; seek feedback actively, not just at the end; and document what you learned as you go, not retrospectively. The students who walk away with the strongest reference and the best personal statement material are almost always those who treated the placement as a performance, not a holiday.',
      },
    ],
    cta: {
      heading: 'Ready to apply for a tech internship?',
      body: 'Free 34-question adaptive assessment. Get your Technology readiness report and something concrete to put in every application.',
      label: 'Apply free — Technology track',
      href: '/tech',
    },
  },
  {
    slug: 'global-academic-benchmarks-report-2026',
    title: 'Global Academic Benchmarks Report: 2026 International Scoring and Assessment Trends',
    shortTitle: 'Global Academic Benchmarks Report 2026',
    description:
      'A 2026 breakdown of international standardised testing trends — SAS scores, PISA/TIMSS benchmarks, Digital SAT adaptive testing, and the percentile thresholds families need to track for selective admissions.',
    date: '2026-06-16',
    readTime: '9 min read',
    tags: ['Standardised Testing', 'International Benchmarks', '11+', 'Digital SAT', 'PISA'],
    faqs: [
      {
        q: 'What is a good standardised score for UK grammar school entry?',
        a: 'For most grammar schools in England, a Standardised Age Score (SAS) of 115 or above places a child in the selective range. The most competitive schools in London (such as Queen Elizabeth\'s Boys and The Henrietta Barnett School) require scores of 127–132, which corresponds to the 97th–99th percentile.',
      },
      {
        q: 'How does the UK 11+ compare to international academic standards?',
        a: 'The UK 11+ SAS scale (mean 100, SD 15) is directly comparable to international cognitive assessments including CAT4, CogAT, and WISC-V. An SAS of 115 corresponds roughly to the 84th percentile — competitive in most English grammar school areas and equivalent to the "above average" band on international benchmarks.',
      },
      {
        q: 'What is the average PISA score for the UK?',
        a: 'The UK typically scores around 495–510 in PISA Mathematics, above the OECD average of 472 but below top-performing countries such as Singapore (575), Japan (536), and South Korea (527). In Reading, the UK scores approximately 494, broadly in line with the OECD average.',
      },
    ],
    cta: {
      heading: 'See where your child stands internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'When should I start preparing my child for the 11+?',
        a: 'Most families begin structured 11+ preparation 12–18 months before the exam, which is typically taken in September or October of Year 6. Starting in Year 4 or early Year 5 is ideal — it allows time to build skills gradually without creating exam anxiety. The first step is a diagnostic assessment to identify current strengths and gaps.',
      },
      {
        q: 'Is it possible to prepare for the 11+ at home without a tutor?',
        a: 'Yes. Many children successfully prepare for the 11+ entirely at home using practice books, free online resources, and adaptive assessments like Eduentry. The key is consistency — 20–30 minutes of focused practice per day is more effective than occasional intensive sessions. A structured plan covering all four subjects (English, Maths, Verbal Reasoning, Non-Verbal Reasoning) is essential.',
      },
      {
        q: 'What subjects are covered in the 11+ exam?',
        a: 'The 11+ typically covers four subjects: English (reading comprehension, grammar, vocabulary), Mathematics (arithmetic, algebra, geometry), Verbal Reasoning (word analogies, sequences, codes), and Non-Verbal Reasoning (shape patterns, matrices, spatial reasoning). Which subjects are tested depends on the exam board — GL Assessment tests all four, while CEM combines verbal and numerical reasoning into a blended format.',
      },
      {
        q: 'How many hours a week should my child practise for the 11+?',
        a: 'In the early preparation phase (12–18 months out), 3–4 hours per week spread across 5–6 short daily sessions is sufficient. In the final 3 months, this can increase to 5–7 hours per week. More than 10 hours per week is counterproductive and increases anxiety without meaningful score improvement.',
      },
    ],
    cta: {
      heading: 'Get your child\'s 11+ benchmark today',
      body: 'Free adaptive assessment across English, Maths, Verbal and Non-Verbal Reasoning — with a standardised score, percentile ranking, and AI-generated recommendations.',
      label: 'Start free 11+ practice test',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is a standardised score?',
        a: 'A standardised score transforms a raw score (number of questions correct) into a number that accounts for age and test difficulty. The standard scale has a mean of 100 and a standard deviation of 15. A score of 100 means exactly average for age; 115 means one standard deviation above average (84th percentile); 130 means two standard deviations above average (98th percentile).',
      },
      {
        q: 'What is a good standardised score for grammar school?',
        a: 'For most grammar schools in England, a Standardised Age Score (SAS) of 111 or above places a child on the selective register. A score of 115–120 is competitive for most areas outside London. The most oversubscribed London schools require 125–132. A score of 121 corresponds approximately to the 92nd percentile.',
      },
      {
        q: 'What is the difference between a standardised score and a percentile?',
        a: 'A standardised score (like SAS or IQ) is an absolute number on a fixed scale (mean 100, SD 15). A percentile is a relative rank — it tells you what percentage of children scored below your child. They are related: SAS 115 = 84th percentile, SAS 130 = 98th percentile. Percentiles are more intuitive; standardised scores are more precise for tracking progress over time.',
      },
      {
        q: 'What does a standardised score of 115 mean?',
        a: 'A standardised score of 115 means your child scored better than approximately 84% of children their age on that assessment. It sits one standard deviation above the mean of 100, which is described as "above average" on most cognitive and academic assessments. For grammar school purposes, 115 is within the competitive range for most areas outside London.',
      },
    ],
    cta: {
      heading: 'Get your child\'s standardised score',
      body: 'Free adaptive assessment on the same mean-100, SD-15 scale used by PISA, GL Assessment, and professional cognitive tests.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is verbal reasoning in the 11+?',
        a: 'Verbal reasoning in the 11+ tests logical thinking using words — not reading ability or writing skill. Question types include word analogies (HOT is to COLD as FAST is to ?), word codes, hidden words, odd one out, sequences, synonyms and antonyms. The skill is pattern recognition and logical deduction applied to language.',
      },
      {
        q: 'How do I improve my child\'s verbal reasoning for the 11+?',
        a: 'The most effective approach is wide reading (builds vocabulary, the foundation of verbal reasoning), systematic practice of each question type in isolation until fluent, and regular timed practice under exam conditions. Vocabulary games like Scrabble, word puzzles, and a daily "word of the day" notebook supplement formal practice effectively.',
      },
      {
        q: 'Which exam board sets the 11+ verbal reasoning paper?',
        a: 'GL Assessment is the most widely used exam board for 11+ verbal reasoning, covering Kent, Essex, Hertfordshire, and many individual schools. CEM (Durham University) covers Buckinghamshire and some other areas — their format blends verbal and numerical reasoning without labelling questions by type, which many children find harder to prepare for.',
      },
      {
        q: 'Is verbal reasoning harder than maths in the 11+?',
        a: 'For most children, verbal reasoning is more challenging than maths in the 11+ because it is an unfamiliar skill. Children who are strong at English sometimes underperform initially because verbal reasoning is logic-based, not literacy-based. The good news is that verbal reasoning is highly learnable — the question types are finite and respond well to systematic practice.',
      },
    ],
    cta: {
      heading: 'Test your child\'s verbal reasoning today',
      body: 'Free adaptive assessment across Verbal Reasoning, Non-Verbal Reasoning, English and Maths — with a standardised score and percentile ranking.',
      label: 'Start free 11+ practice test',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What SAS score do you need to get into grammar school in 2026?',
        a: 'The pass mark varies by area. In Kent and Essex, a SAS of around 111–113 typically places a child on the selective register. In Buckinghamshire (CEM), the equivalent threshold is around 118. For the most competitive London schools (Barnet, Sutton), children need 121–132 to realistically receive an offer, as these schools are heavily oversubscribed even at high scores.',
      },
      {
        q: 'What is the difference between passing the 11+ and getting a grammar school place?',
        a: 'Passing the 11+ (achieving the selective register pass mark) is necessary but not sufficient at oversubscribed schools. Schools rank selective applicants by secondary criteria — typically siblings, then proximity to school. At the most competitive London grammar schools, children who score 125 may not receive an offer because children who scored 128 and live closer take priority.',
      },
      {
        q: 'How many grammar schools are there in England?',
        a: 'There are approximately 163 grammar schools in England, educating around 5% of secondary school pupils. They are concentrated in specific areas: Kent (32 schools), Buckinghamshire (13), Birmingham (5), Essex (4), and several London boroughs including Barnet and Sutton. There are no grammar schools in London boroughs other than Barnet and Sutton.',
      },
      {
        q: 'What happens if my child fails the 11+?',
        a: 'Children who do not pass the 11+ attend non-selective state secondary schools, which educate the vast majority of children and include many outstanding schools. Some areas allow appeals if a child\'s score is in the borderline band or if there were extenuating circumstances on the test day. Children who narrowly miss a grammar school place can also reapply at 13+ where schools offer it.',
      },
    ],
    cta: {
      heading: 'Know your child\'s grammar school chances',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — the same scale used by grammar school entrance exams across England.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  // US
  {
    slug: 'gifted-program-testing-guide',
    title: 'Gifted Program Testing Guide: How US Gifted Identification Works and How to Prepare',
    shortTitle: 'US Gifted Program Testing Guide',
    description:
      'How US gifted and talented programs identify students — CogAT, WISC-V, NWEA MAP, and OLSAT explained, with score thresholds by program type and a practical preparation guide for families.',
    date: '2026-06-17',
    readTime: '9 min read',
    tags: ['Gifted Testing', 'CogAT', 'WISC', 'US Education', 'Gifted Programs'],
    faqs: [
      {
        q: 'What IQ score is needed for a gifted program in the US?',
        a: 'Most US gifted programs require an IQ of 130 or above (98th+ percentile) for formal identification, though thresholds vary. Pull-out enrichment programs typically require the 90th–95th percentile; competitive magnet GT schools often require the 97th–99th percentile. New York City\'s citywide Gifted & Talented program has historically required the 99th percentile.',
      },
      {
        q: 'What tests are used for gifted identification in the US?',
        a: 'The most common tests are the CogAT (Cognitive Abilities Test) for group screening, the WISC-V (Wechsler Intelligence Scale for Children) for individual IQ assessment, NWEA MAP Growth for achievement-based identification, and the OLSAT (Otis-Lennon School Ability Test) used primarily in New York City. Which test your district uses depends on state and district policy.',
      },
      {
        q: 'How do I request gifted testing for my child?',
        a: 'Contact your child\'s school principal or the district\'s gifted coordinator to initiate a referral. Most districts have a formal referral window, typically in the fall. If the school is unresponsive, parents can request evaluation in writing — in many states, the district must respond within a set timeframe. You can also commission a private psychological assessment independently.',
      },
      {
        q: 'Is gifted education available in all US states?',
        a: 'Gifted education is not federally mandated in the United States. Each state sets its own policies, and provision varies dramatically. Some states (like Texas and Georgia) have strong mandated gifted programs; others provide minimal or no funding. Even within states, individual school districts differ significantly in the quality and availability of gifted services.',
      },
    ],
    cta: {
      heading: 'See how your child compares internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — the same scale used by cognitive assessments internationally.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is a RIT score on the NWEA MAP test?',
        a: 'A RIT (Rasch Unit) score is a position on a continuous equal-interval scale that spans the entire K–12 curriculum. Unlike a percentage, the same RIT score means the same level of knowledge regardless of grade. A typical kindergartner starts around RIT 140–150 in Math; the average Grade 5 student is around 205–210. RIT scores grow year over year as students learn.',
      },
      {
        q: 'What is a good MAP score for my child\'s grade?',
        a: 'Average fall MAP Math RIT scores by grade: Grade 3 ≈ 188, Grade 4 ≈ 197, Grade 5 ≈ 205, Grade 6 ≈ 211, Grade 7 ≈ 215. A score 10+ points above the grade average (roughly the 75th percentile) is strong. A score 15+ points above average (around the 90th percentile) is often enough to trigger a gifted evaluation referral in many districts.',
      },
      {
        q: 'What MAP score qualifies a child for gifted programs?',
        a: 'Most districts that use MAP for gifted referrals trigger evaluation at the 90th or 95th percentile for the child\'s grade. The exact RIT that corresponds to these percentiles changes by grade. For example, a Grade 4 student scoring Math RIT 215 is approximately at the 90th percentile. Check your district\'s specific policy — thresholds vary significantly.',
      },
      {
        q: 'How often is the NWEA MAP test given?',
        a: 'Most schools administer MAP Growth two or three times per year — typically in fall, winter, and spring. This allows teachers and parents to track growth over time, not just current achievement level. The growth trajectory (how many RIT points a student gains per year) is often as important as the absolute score when identifying academically advanced students.',
      },
    ],
    cta: {
      heading: 'See how your child compares internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — the same scale used by cognitive assessments internationally.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is the difference between the ISEE and SSAT?',
        a: 'The key practical differences: the ISEE has no guessing penalty (answer every question) while the SSAT deducts ¼ point per wrong answer. The ISEE can only be taken once per testing season (max 3 times per year); the SSAT has no retake limit. The SSAT verbal section uses analogies, which many students find harder than the ISEE\'s synonyms and sentence completion format.',
      },
      {
        q: 'What is a good ISEE score for private school admission?',
        a: 'ISEE scores are reported as stanines from 1–9, where 5 is average among independent school applicants. Competitive schools typically look for stanines of 6–7; highly selective schools expect stanines of 7–9. Note that the comparison group is other private school applicants — a stanine 5 on the ISEE is already above the average of the general student population.',
      },
      {
        q: 'How many times can you take the ISEE?',
        a: 'Students can take the ISEE once per testing season. There are three seasons per year (Fall, Winter, Spring), so the maximum is three times in a 12-month period. This makes the ISEE less forgiving of a bad test day than the SSAT, which has no retake restrictions. Families who want flexibility often prefer the SSAT for this reason.',
      },
      {
        q: 'Do all US private schools require the ISEE or SSAT?',
        a: 'Most academically selective independent schools require either the ISEE or SSAT, particularly for middle and upper school admission. However, some schools — especially at the elementary level or those that do not select primarily on academic ability — use school-designed assessments or no formal test. Always check your specific target school\'s requirements.',
      },
    ],
    cta: {
      heading: 'See how your child compares internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'Can you prepare for a gifted test?',
        a: 'It depends on the test. Individually administered IQ tests like the WISC-V are not meaningfully preparation-responsive — they measure underlying cognitive ability, and there are no effective study materials. Group-administered reasoning tests like the CogAT, NNAT, and OLSAT are more preparation-responsive: familiarity with question formats, practice with matrix reasoning, and vocabulary building all produce genuine improvement.',
      },
      {
        q: 'What is the best way to prepare for the CogAT?',
        a: 'For the CogAT verbal battery: wide reading and deliberate vocabulary building. For the quantitative battery: number series practice and number puzzle books (KenKen, Sudoku). For the nonverbal battery: figure matrix and figure classification practice using IQ-style reasoning books. Start 6–12 months before the test for meaningful results — cramming in the final few weeks produces minimal improvement.',
      },
      {
        q: 'At what age do children take gifted tests in the US?',
        a: 'Gifted identification typically begins in Kindergarten or Grade 1 (ages 5–7) with group-administered screening tests. Individual IQ testing usually follows for children who screen above the threshold, often in Grade 2 or 3 (ages 7–9). Some districts re-evaluate children in Grade 5–6 as a second identification opportunity, which benefits late bloomers.',
      },
      {
        q: 'How long should you prepare for a gifted test?',
        a: 'For preparation-responsive tests like the CogAT or NNAT, a 6–12 month horizon of consistent skill-building produces the best results. This includes daily reading, weekly reasoning puzzles, and monthly timed practice sessions. For IQ tests like the WISC-V, focus on reducing anxiety and familiarising your child with the testing environment rather than content preparation.',
      },
    ],
    cta: {
      heading: 'See how your child compares internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — the same benchmarks used in gifted identification worldwide.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What replaced the Cito toets in the Netherlands?',
        a: 'The Doorstroomtoets replaced the Cito Eindtoets Basisonderwijs from 2024. The key changes are: the test is now taken in February (earlier than before), the schooladvies is issued before the test result, and multiple test providers are approved (Cito, IEP, Route 8, DIA). All providers are calibrated to the same national standard.',
      },
      {
        q: 'What Cito score do you need for VWO?',
        a: 'On the Cito scale (501–550), a score of approximately 545–550 indicates a VWO level. However, the Doorstroomtoets result confirms — not determines — the school advice (schooladvies). A child needs both a VWO or HAVO/VWO schooladvies from their teacher AND a Doorstroomtoets score in the VWO range to be placed in VWO.',
      },
      {
        q: 'Can the Doorstroomtoets change the schooladvies?',
        a: 'The Doorstroomtoets can only raise the schooladvies, never lower it. If a child scores higher than their teacher\'s advice level, the school must formally reconsider (heroverweging) and may revise the advice upward. If the score is lower than the advice, the advice stands. This means the test is a safety net for children who are under-advised.',
      },
      {
        q: 'What does the Doorstroomtoets measure?',
        a: 'The Doorstroomtoets measures Taal (language — reading comprehension, vocabulary, spelling), Rekenen (mathematics — operations, fractions, percentages, applied problems), and in some versions Lezen (reading fluency). It does not test history, geography, science, or creative subjects. It is an achievement test measuring curriculum knowledge, not an ability or IQ test.',
      },
    ],
    cta: {
      heading: 'Benchmark your child internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — directly comparable to Cito and international PISA and IB benchmarks.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is the difference between VWO and Gymnasium in the Netherlands?',
        a: 'Both are 6-year pre-university tracks leading to the VWO eindexamen and direct university access. Gymnasium adds compulsory Latin and Ancient Greek to the curriculum. Gymnasium is generally more selective, with fewer places available, and is associated with a more traditional academic culture. Both qualifications give identical university access.',
      },
      {
        q: 'What percentage of Dutch students go to VWO?',
        a: 'Approximately 17–20% of Dutch students enter the VWO stream each year. Gymnasium, as a subset of VWO, educates approximately 5–7% of students. The majority of Dutch students attend HAVO (30–35%) or VMBO (40–45%), with HAVO giving access to HBO (Universities of Applied Sciences) and VMBO leading to vocational pathways.',
      },
      {
        q: 'What is Tweetalig VWO (TTO) in the Netherlands?',
        a: 'Tweetalig VWO (TTO) is a bilingual programme where approximately 50% of teaching is in English in the first three years, with ongoing CLIL (Content and Language Integrated Learning) throughout. Schools must earn the official TTO keurmerk quality mark. TTO is an excellent option for international families and students aiming for English-medium higher education.',
      },
      {
        q: 'How does the schooladvies determine VWO entry?',
        a: 'The schooladvies is the primary factor for VWO entry. A child with a VWO or HAVO/VWO schooladvies from their group 8 teacher, confirmed by a Doorstroomtoets score in the VWO range (Cito 545+), can apply to VWO. The most prestigious schools (Gymnasium, TTO programmes) may also run additional entrance procedures including an intake interview.',
      },
    ],
    cta: {
      heading: 'Benchmark your child internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What IQ score is considered hoogbegaafd in the Netherlands?',
        a: 'In the Dutch educational context, hoogbegaafd (gifted) typically refers to children with a WISC-V NL Full Scale IQ of 130 or above — the 98th+ percentile. Some Dutch psychologists use 125 as a working threshold for educational planning. Children scoring 120–129 are sometimes described as being in the grijsgebied (grey zone) — significantly above average but below the formal gifted threshold.',
      },
      {
        q: 'What is a plusklas in Dutch schools?',
        a: 'A plusklas is a pull-out enrichment group at a Dutch primary school (basisschool) for high-ability children. Students typically attend the plusklas for 1–2 half-days per week alongside their regular class, engaging in deeper or more challenging projects. The quality and depth of plusklas provision varies significantly between schools.',
      },
      {
        q: 'What are Leonardoscholen in the Netherlands?',
        a: 'Leonardoscholen are dedicated primary schools in the Netherlands for children with an IQ of 130 or above. Entry requires a formal psychodiagnostisch assessment confirming giftedness. The most well-known are in Amsterdam, and the Leonardo network has expanded to other cities. They provide a full-time gifted curriculum rather than pull-out enrichment.',
      },
      {
        q: 'How is giftedness identified in Dutch primary schools?',
        a: 'There is no universal screening in the Netherlands. Identification happens through teacher referral, parent referral, or school-based screening using tools like the NSCCT. A formal diagnosis requires a private or school-arranged psychodiagnostisch onderzoek (WISC-V NL) administered by an orthopedagoog or psycholoog. Wait times for school-arranged assessments can be long; private assessments are faster.',
      },
    ],
    cta: {
      heading: 'Benchmark your child internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What entrance test do international schools in the Netherlands use?',
        a: 'Most British-curriculum international schools in the Netherlands use the CAT4 (Cognitive Abilities Test 4) by GL Assessment for admissions screening and internal setting. IB schools typically use previous school reports and teacher references at primary level; some use the CAT4 or a bespoke assessment at secondary entry. American-curriculum schools may use ERB assessments.',
      },
      {
        q: 'How long are waiting lists for international schools in Amsterdam?',
        a: 'Waiting lists at popular international schools in Amsterdam — such as the International School of Amsterdam (ISA) and the British School in the Netherlands (BSN) — can extend 12–18 months or longer. Families should register their interest as soon as they know they are relocating to the Netherlands, regardless of how far off the move date is.',
      },
      {
        q: 'What is the CAT4 test and why do international schools use it?',
        a: 'The CAT4 (Cognitive Abilities Test 4) measures reasoning across four batteries: verbal, quantitative, nonverbal, and spatial. Schools use it because it assesses learning potential independent of curriculum background — useful for international pupils from different educational systems. Results help schools with admissions decisions and internal setting (ability grouping).',
      },
      {
        q: 'Are international schools in the Netherlands free?',
        a: 'No. International schools in the Netherlands are private fee-paying institutions. Annual fees typically range from €10,000–€25,000 for IB and British curriculum schools. Some multinational employers provide school fee allowances as part of expat packages. There are also international streams within some Dutch state schools (ISK programmes) that are free.',
      },
    ],
    cta: {
      heading: 'Benchmark your child internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is the CAT4 test used in UAE schools?',
        a: 'The CAT4 (Cognitive Abilities Test 4) by GL Assessment measures reasoning ability across four batteries: verbal (word analogies and classification), quantitative (number series and analogies), nonverbal (figure matrices and classification), and spatial (paper folding and figure recognition). It is the most widely used cognitive assessment in British-curriculum international schools in the UAE and across the Middle East.',
      },
      {
        q: 'What is a good CAT4 score in UAE schools?',
        a: 'CAT4 reports Standard Age Scores (SAS) on a scale with mean 100 and SD 15. A mean SAS of 100 is exactly average; 112–118 (stanine 7) is above average; 119–126 (stanine 8) is high; 127+ (stanine 9) is very high. For gifted identification in UAE international schools, a mean SAS of 112+ typically triggers consideration. Top sets at selective schools generally require SAS 115+.',
      },
      {
        q: 'How do UAE schools use CAT4 results?',
        a: 'UAE British-curriculum schools use CAT4 in three main ways: admissions screening (assessing whether a child can access the curriculum), internal setting (grouping students by ability in core subjects), and identifying underachievement (where a high CAT4 score combined with low academic results flags a potential learning difference or wellbeing issue). KHDA inspection reports also reference CAT4 data.',
      },
      {
        q: 'Is CAT4 the same as an IQ test?',
        a: 'CAT4 and IQ tests like the WISC-V both measure cognitive reasoning, but they are not identical. CAT4 is a group-administered screening tool that takes about 2.5 hours and covers four specific reasoning batteries. The WISC-V is individually administered by a psychologist, takes 60–90 minutes, and produces a comprehensive IQ profile including working memory and processing speed. CAT4 SAS scores are comparable in scale to WISC-V IQ scores.',
      },
    ],
    cta: {
      heading: 'How does your child compare internationally?',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — directly comparable to the CAT4 scale used in UAE international schools.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What are the best British curriculum schools in Dubai?',
        a: 'The most sought-after British-curriculum schools in Dubai include Dubai College (selective, secondary only), GEMS Wellington Academy (multiple campuses), Jumeirah English Speaking School (JESS), and Dubai British School. In Abu Dhabi, British School Al Khubairat (BSAK) is the most established. All are rated Outstanding or Very Good by the KHDA.',
      },
      {
        q: 'How long is the waiting list for British schools in Dubai?',
        a: 'Waiting lists at the most popular British schools in Dubai — JESS, GEMS Wellington, Dubai British School — can extend 12–24 months or longer at the primary level. Families relocating to the UAE should contact their target schools and register interest as early as possible, ideally before confirming the move.',
      },
      {
        q: 'What is the KHDA and why does it matter for school choice?',
        a: 'The KHDA (Knowledge and Human Development Authority) is the government body that oversees private schools in Dubai. It inspects schools and rates them Outstanding, Very Good, Good, Acceptable, or Weak. KHDA Outstanding is the highest rating and is associated with the most academically strong and well-resourced schools. KHDA inspection reports are publicly available and give a detailed picture of each school\'s strengths.',
      },
      {
        q: 'What assessment do British schools in Dubai use for admissions?',
        a: 'Most British-curriculum schools in Dubai use the CAT4 (Cognitive Abilities Test 4) as part of their admissions process, alongside previous school reports and a writing sample. Some schools also administer the PiRA (reading) and PUMA (mathematics) standardised assessments. At secondary level, a taster day or interview is common. Dubai College uses its own selective admissions test.',
      },
    ],
    cta: {
      heading: 'How does your child compare internationally?',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — directly comparable to the CAT4 scale used in UAE international schools.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'How are gifted students identified in UAE international schools?',
        a: 'UAE international schools typically identify gifted and more-able students using CAT4 scores (stanine 7+ or SAS 112+), academic performance in the top 10–15% of year group, and teacher nominations endorsed by multiple subject teachers. Some schools also accept external IQ assessment reports (WISC-V) from licensed psychologists as supporting evidence.',
      },
      {
        q: 'What is Al Mawhiba in the UAE?',
        a: 'Al Mawhiba is the UAE\'s National Programme for Gifted Students, run by the Ministry of Education. It identifies and supports academically gifted Emirati students from Year 5 onwards through national assessments, scholarships, enrichment camps, and international competition preparation (Mathematics and Science Olympiads). Al Mawhiba is primarily for UAE-national students; expat families at international schools should focus on their school\'s internal gifted programme.',
      },
      {
        q: 'What CAT4 score is needed for gifted identification in UAE schools?',
        a: 'Most UAE international schools use a mean SAS of 112 or above (stanine 7+) as the initial CAT4 threshold for gifted or more-able designation. Schools that follow KHDA Outstanding practices often use a stanine 8+ (SAS 119+) for their highest-tier enrichment. A single battery score of 119+ can also trigger identification even if the mean SAS is lower.',
      },
      {
        q: 'What gifted provision is available in Dubai schools?',
        a: 'Gifted provision in Dubai international schools includes differentiated classroom instruction, ability grouping (setting) in core subjects, subject acceleration (early GCSE), enrichment clubs and competitions (Maths Olympiad, STEM clubs), and in some schools a formal gifted register with a personalised enrichment plan. The KHDA inspection framework requires schools to demonstrate that high-ability students are stretched and making strong progress.',
      },
    ],
    cta: {
      heading: 'How does your child compare internationally?',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — directly comparable to the CAT4 scale used in UAE international schools.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What entrance exam do international schools in the UAE use?',
        a: 'It depends on the curriculum. British-curriculum schools predominantly use the CAT4 (GL Assessment) for cognitive screening, often alongside PiRA and PUMA for reading and maths. American-curriculum schools may use ISEE or SSAT. IB schools vary — primary IB schools often rely on school reports; secondary IB may use CAT4 or school-designed assessments. Indian curriculum (CBSE/ICSE) schools typically use their own subject tests.',
      },
      {
        q: 'Do all private schools in Dubai require an entrance test?',
        a: 'Not all. Many schools — particularly at Foundation Stage (Kindergarten/Reception) level — admit without a formal test, relying on previous nursery reports and a brief observation session. Formal cognitive assessments like CAT4 are more common from Year 3 upwards, and are most consistently applied at Year 7 secondary entry, which is the most competitive entry point across all curricula.',
      },
      {
        q: 'Which curriculum is best for international schools in the UAE?',
        a: 'The best curriculum depends on your family\'s circumstances. British curriculum (IGCSEs + A-levels) is most widely available and familiar to UK expat families; IB Diploma offers the broadest international university recognition; American curriculum suits families planning to return to the US. Indian curriculum (CBSE/ICSE) is most affordable and suits families with long-term ties to India.',
      },
      {
        q: 'Can I sit the ISEE or SSAT in the UAE?',
        a: 'Yes. Both the ISEE and SSAT have registered test centres in Dubai and Abu Dhabi. The ISEE can be sat at American-curriculum schools with Flex testing arrangements or at official ERB test centres. The SSAT has test centres at several international schools in the UAE. Check the ISEE and SSAT official websites for current UAE test dates and centre locations.',
      },
    ],
    cta: {
      heading: 'How does your child compare internationally?',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'How is a child identified as gifted in Canada?',
        a: 'The process varies by province. Generally: a teacher or parent makes a referral, the school may administer a group screening test (like the CCAT), and a school board psychologist then administers a full individual IQ assessment (usually WISC-V). A placement committee reviews the results and makes an identification decision. In Ontario, this is formalised as an IPRC (Identification, Placement, and Review Committee).',
      },
      {
        q: 'What IQ score is needed for gifted programs in Canada?',
        a: 'Most Canadian provinces use an IQ of 130 or above (98th+ percentile on the WISC-V) as the primary threshold for gifted identification. Some provinces use multi-criteria models where IQ 125+ combined with strong academic performance and teacher ratings can qualify. British Columbia and Alberta use 130 as a threshold; Ontario formally uses "two standard deviations above the mean" (IQ 130+).',
      },
      {
        q: 'How long does gifted identification take in Canada?',
        a: 'In Ontario, the wait for a board-administered psychological assessment can be 12–24 months in some districts due to high demand. BC and Alberta have similar delays. Families who cannot wait can commission a private psychological assessment (WISC-V) from a registered psychologist, which typically takes 2–4 weeks to arrange and costs CAD $2,500–$4,000.',
      },
      {
        q: 'Is gifted education available in all Canadian provinces?',
        a: 'Gifted education exists in all Canadian provinces, but provision varies enormously. Ontario has the most formalised system, with gifted as a legal exceptionality and self-contained Gifted classes in many school boards. Other provinces offer pull-out enrichment, in-class differentiation, or itinerant gifted teacher support. Some rural school boards have minimal gifted-specific provision.',
      },
    ],
    cta: {
      heading: 'Benchmark your child against international standards',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What is the IPRC process for gifted in Ontario?',
        a: 'The IPRC (Identification, Placement, and Review Committee) is the formal body under Ontario\'s Education Act that determines whether a student has an exceptionality (including Gifted). The committee includes the school principal, teachers, and the parents. It reviews psychological assessment data, academic performance, and teacher input, then makes a binding identification decision. Parents can appeal to a Special Education Appeal Board.',
      },
      {
        q: 'What IQ score is needed for gifted in Ontario?',
        a: 'Ontario\'s definition requires an IQ of 130 or above (two standard deviations above the mean on the WISC-V or equivalent), corresponding to the 98th+ percentile. Some school boards have slightly different interpretations of "two standard deviations," but 130 FSIQ is the standard working threshold across most Ontario boards.',
      },
      {
        q: 'How do I request a gifted assessment in Ontario?',
        a: 'Contact your child\'s school principal in writing to formally request an IPRC referral for gifted identification. Under the Education Act, the school must convene an IPRC meeting within 30 days of a parent\'s written request. The school board will then arrange a psychological assessment. If the wait is too long, you can commission a private WISC-V assessment and submit it to the board.',
      },
      {
        q: 'What are self-contained Gifted classes in Ontario?',
        a: 'Self-contained Gifted classes are dedicated classrooms where identified Gifted students spend the majority of their school day together, following an accelerated and enriched curriculum. The Toronto District School Board (TDSB) operates these from Grade 4 at designated schools across the city. Students must be formally identified as Gifted through the IPRC process to access these placements.',
      },
    ],
    cta: {
      heading: 'Benchmark your child against international standards',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'What entrance exam do Canadian private schools use?',
        a: 'Most academically selective Canadian independent schools use the ISEE (Independent School Entrance Exam) or SSAT (Secondary School Admission Test) — the same tests used by US independent schools. Some schools, particularly at the junior level, use school-designed assessments instead. Always check your specific target school\'s requirements, as a small number of schools require no formal test.',
      },
      {
        q: 'What is a competitive ISEE score for top Canadian private schools?',
        a: 'For the most selective Canadian independent schools such as Upper Canada College and Havergal College, applicants typically need ISEE stanines of 7–9 (75th–99th percentile among independent school applicants). For moderately selective schools, stanines of 5–6 may suffice. Remember that the ISEE comparison group is other independent school applicants — already an academically above-average pool.',
      },
      {
        q: 'Can Canadian students take the ISEE or SSAT in Canada?',
        a: 'Yes. ISEE test centres exist in major Canadian cities including Toronto, Vancouver, Calgary, and Ottawa. SSAT test centres are similarly available across Canada. Some independent schools also offer ISEE Flex testing on their own premises. Check the official ISEE and SSAT websites for current Canadian test centre locations and registration dates.',
      },
      {
        q: 'When should I apply to Canadian private schools?',
        a: 'Most Canadian independent schools follow a similar timeline: open houses in September–November, applications and ISEE/SSAT testing from October–January, student interviews in January–February, and offers issued in February–March for September entry. The most competitive schools fill quickly — begin researching and attending open houses a full year before your desired entry date.',
      },
    ],
    cta: {
      heading: 'Benchmark your child against international standards',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
    faqs: [
      {
        q: 'Is French Immersion selective in Canada?',
        a: 'No. French Immersion is a publicly funded programme open to all students regardless of academic ability. Admission is first-come-first-served (with sibling priority at most boards). However, the programme is self-selecting in practice — families who register tend to be more educationally motivated, so FI classes often have a higher proportion of academically strong students.',
      },
      {
        q: 'What is the difference between Early and Late French Immersion in Canada?',
        a: 'Early French Immersion (EFI) begins in Kindergarten or Grade 1, with most or all instruction in French initially. Late French Immersion (LFI) begins in Grade 4, 5, or 6 depending on the province. EFI produces stronger French proficiency outcomes. Both streams are publicly funded and follow the provincial curriculum.',
      },
      {
        q: 'Can a child be in French Immersion and a gifted program in Ontario?',
        a: 'Yes. In Ontario, a child can be enrolled in French Immersion and also be formally identified as Gifted through the IPRC process. The school board is then required to provide appropriate gifted programming within or alongside the Immersion pathway. In practice, this may mean the child attends a Gifted FI class at a designated school if one exists in the board.',
      },
      {
        q: 'Are there IB programmes in Canadian public schools?',
        a: 'Yes. The International Baccalaureate Diploma Programme (IBDP) is offered at many Canadian public secondary schools at no additional cost beyond regular school fees. Admission is typically based on strong Grade 9–10 marks rather than a separate entrance test. Public IB programmes exist in Toronto (TDSB), Vancouver (VSB), Ottawa (OCDSB), and most other major cities.',
      },
    ],
    cta: {
      heading: 'Benchmark your child against international standards',
      body: 'Free adaptive assessment with a standardised score and percentile ranking against UK, US, PISA and IB standards.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  // Australia
  {
    slug: 'australia-acer-scholarship-exam',
    title: 'ACER Scholarship Exam Guide: How It Works, Scores and How to Prepare',
    shortTitle: 'ACER Scholarship Exam Guide',
    description:
      'A complete guide to the ACER Scholarship Examination — how Australia\'s most widely used independent school entrance test works, how scores are reported, and how to prepare across all three components.',
    date: '2026-06-17',
    readTime: '9 min read',
    tags: ['Australia', 'ACER', 'Scholarship Exam', 'Private Schools', 'Independent Schools'],
    faqs: [
      {
        q: 'What is the ACER Scholarship Examination?',
        a: 'The ACER Scholarship Examination is a standardised test run by the Australian Council for Educational Research (ACER), used by over 700 independent and Catholic schools across Australia to award scholarships and assess general academic aptitude for entry. It measures reasoning ability through Written Expression, Humanities (reading and verbal reasoning), and Mathematics (numerical reasoning).',
      },
      {
        q: 'What is a good score on the ACER Scholarship Exam?',
        a: 'ACER scores range from 0–100 with a mean of 50. A score of 68–74 (95th–98th percentile) makes a child a strong scholarship candidate at most schools. Scores of 75+ are scholarship-competitive at top independent schools. The comparison group is other independent school applicants — already an academically above-average pool.',
      },
      {
        q: 'When is the ACER Scholarship Exam held?',
        a: 'The main ACER Scholarship Exam for Year 7 entry is held in June of the preceding year — so a child entering Year 7 in 2027 would sit the exam in June 2026 while in Year 6. Applications open from March and close in May. Registration is through individual schools, not through ACER directly.',
      },
      {
        q: 'How long should you prepare for the ACER Scholarship Exam?',
        a: 'For meaningful score improvement, start ACER preparation 12–18 months before the exam. The last 8–10 weeks before the exam should include full timed practice tests under exam conditions. The Written Expression component benefits most from structured weekly writing practice over an extended period.',
      },
    ],
    cta: {
      heading: 'See where your child stands internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — benchmarked against UK, US, PISA and IB standards for international context.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  {
    slug: 'australia-oc-test-guide',
    title: 'NSW Opportunity Class (OC) Test Guide: How It Works and How to Prepare',
    shortTitle: 'NSW OC Test Guide',
    description:
      'A complete guide to the NSW Opportunity Class Placement Test — what OC classes are, how the test works, how offers are made, score thresholds, and how to prepare your Year 4 child for selection.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Australia', 'NSW', 'Opportunity Class', 'OC Test', 'Gifted Education'],
    faqs: [
      {
        q: 'What is an Opportunity Class (OC) in NSW?',
        a: 'An Opportunity Class is a selective Year 5–6 gifted education setting within a mainstream NSW government primary school. OC classes follow an accelerated and enriched curriculum and draw students from a wide geographic catchment. There are approximately 76 OC schools across NSW with 30 places each, and around 14,000 students apply annually for roughly 2,100 places.',
      },
      {
        q: 'What does the OC Placement Test measure?',
        a: 'The OC Placement Test has three components: Reading (27.5%), Mathematical Reasoning (27.5%), and Thinking Skills (45%). Thinking Skills — the largest component — covers verbal reasoning, abstract reasoning, and logical sequences. It is an "IQ-style" component that most Year 4 students have never encountered at school, making specific preparation highly valuable.',
      },
      {
        q: 'When do children sit the OC test?',
        a: 'The OC Placement Test is sat in July of Year 4. Applications open in Term 1 (February–March) and close in mid-March. Results and offers are released in October of Year 4, and the OC programme begins in February of Year 5. The entire process runs approximately 12 months before the child starts their OC class.',
      },
      {
        q: 'What score do you need to get into an OC class?',
        a: 'NSW Education does not publish minimum score thresholds. The effective threshold varies by school — popular inner-city OC schools (such as those in Chatswood or Epping) are more competitive than regional OC schools. Preparation and performance in Thinking Skills (the highest-weighted component) has the most impact on placement score.',
      },
    ],
    cta: {
      heading: 'See where your child stands internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — benchmarked against UK, US, PISA and IB standards for international context.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  {
    slug: 'australia-gate-gifted-program',
    title: 'GATE Western Australia: How the Gifted and Talented Programme Works',
    shortTitle: 'Western Australia GATE Programme Guide',
    description:
      'Everything WA families need to know about GATE — Western Australia\'s Gifted and Talented Education programme. How the two-stage assessment works, PEAC, Perth Modern School, and how to prepare.',
    date: '2026-06-17',
    readTime: '8 min read',
    tags: ['Australia', 'Western Australia', 'GATE', 'Gifted Education', 'Perth Modern'],
    faqs: [
      {
        q: 'What is the GATE programme in Western Australia?',
        a: 'GATE (Gifted and Talented Education) is WA\'s state government programme identifying students with high intellectual ability and placing them in enriched programmes at designated GATE schools. Unlike NSW\'s competitive ranked system, WA GATE identifies all students who meet an ability threshold (approximately the 98th percentile) and places them at GATE schools based on preference and proximity.',
      },
      {
        q: 'How does the GATE assessment work in WA?',
        a: 'The GATE assessment has two stages. Stage 1 is a group-administered reasoning test at the child\'s school covering verbal, numerical, and abstract reasoning. Students who pass Stage 1 proceed to Stage 2, an individually administered cognitive assessment providing a comprehensive measure of intellectual ability. Final GATE eligibility is determined from Stage 2 results.',
      },
      {
        q: 'What is Perth Modern School?',
        a: 'Perth Modern School is the most selective GATE school in Western Australia — it admits only GATE-eligible students and is routinely ranked the highest-performing government school in Australia. Demand exceeds places; proximity is a tiebreaker. It is located in Subiaco, Perth, and draws GATE-identified students from across the metropolitan area.',
      },
      {
        q: 'Can you prepare for the WA GATE assessment?',
        a: 'Stage 1 is moderately preparation-responsive. Practising abstract reasoning, verbal reasoning, and numerical reasoning question formats 6–9 months before the test removes the disadvantage of unfamiliarity and genuinely improves Stage 1 scores. Stage 2 is an individually administered assessment and is substantially less preparation-responsive — focus on reducing anxiety and ensuring your child is well-rested.',
      },
    ],
    cta: {
      heading: 'See where your child stands internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — benchmarked against UK, US, PISA and IB standards for international context.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  {
    slug: 'australia-naplan-guide',
    title: 'NAPLAN Guide for Parents: What It Is, How Scores Work and What to Do With the Results',
    shortTitle: 'NAPLAN Guide for Parents',
    description:
      'A complete parent\'s guide to NAPLAN — Australia\'s national literacy and numeracy assessment for Years 3, 5, 7 and 9. How the band scoring works, what results mean, and how to use them.',
    date: '2026-06-18',
    readTime: '7 min read',
    tags: ['Australia', 'NAPLAN', 'Literacy', 'Numeracy', 'National Assessment'],
    faqs: [
      {
        q: 'What is NAPLAN?',
        a: 'NAPLAN (National Assessment Program — Literacy and Numeracy) is Australia\'s national standardised assessment sat by all students in Years 3, 5, 7, and 9 at government and most non-government schools. It tests Reading, Writing, Language Conventions (spelling, grammar, punctuation), and Numeracy. It is administered online each year in March.',
      },
      {
        q: 'What do NAPLAN scores mean?',
        a: 'NAPLAN results are reported on a proficiency scale with four levels: Needs Additional Support, Developing, Strong, and Exceeding. Results show whether a student is meeting national minimum standards and how they compare to students nationally. The national average sits in the Strong band for most year levels.',
      },
      {
        q: 'Can my child opt out of NAPLAN?',
        a: 'Yes. Parents can withdraw their child from NAPLAN by notifying the school in writing before the test window. Withdrawal is a parental right and will not negatively affect the child\'s school standing. However, the child will receive no result, which removes a useful data point for tracking progress over time.',
      },
      {
        q: 'Do selective schools use NAPLAN results?',
        a: 'Some selective government high schools and independent schools consider NAPLAN results as part of their admissions process, particularly for Year 7 entry. However, NAPLAN is not a selective entry test — it is a broad national assessment. For competitive selective entry (NSW Selective, ACER Scholarship, WA GATE), purpose-built preparation is more effective than NAPLAN practice.',
      },
    ],
    cta: {
      heading: 'See where your child stands internationally',
      body: 'Free adaptive assessment with a standardised score and percentile ranking — benchmarked against UK, US, PISA and IB standards for international context.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
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
