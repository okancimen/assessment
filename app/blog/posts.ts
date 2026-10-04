export interface Faq {
  q: string
  a: string
}

export interface BlogPostMeta {
  slug: string
  contentSlug?: string
  title: string
  shortTitle: string
  description: string
  tldr?: string
  date: string
  dateModified?: string
  readTime: string
  tags: string[]
  faqs?: Faq[]
  cta?: { heading: string; body: string; label: string; href: string }
  howToSteps?: { name: string; text: string }[]
  aggregateRating?: { ratingValue: number; reviewCount: number }
}

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: 'early-internship-child-development-career',
    title: 'Why Internships at Early Ages Matter: Child Development, Maturity, and the Career Advantage That Compounds',
    shortTitle: 'Internships at Early Age: Development & Career Benefits',
    description:
      'Why professional experience at 14–16 produces better outcomes than at 17–18: neuroscience, university admissions data, and labour market research compared.',
    tldr: 'NACE\'s 2023 survey found 83% of employers consider internship experience \'somewhat\' or \'very\' important when hiring new graduates, and students with prior internship experience receive job offers at a 70% higher rate before graduation than peers without (NACE, 2020). Developmental research consistently identifies 14–16 as the optimal age for a first structured professional placement.',
    date: '2026-06-29',
    dateModified: '2026-09-10',
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
      href: 'https://eduentry.ai/en',
    },
  },
  {
    slug: 'high-school-internship-benefits-university',
    title: 'Why High School Internships Matter: Personality, Readiness, and University Acceptance',
    shortTitle: 'High School Internship Benefits',
    description:
      'High school internships at 14–18 build self-efficacy, resilience, and professional identity — with measurable impact on university application outcomes.',
    tldr: 'Russell Group universities explicitly cite relevant work experience in admissions guidance for competitive courses including medicine, law, and technology. Research identifies four areas work experience builds: self-efficacy, resilience, professional communication, and career clarity.',
    date: '2026-06-25',
    dateModified: '2026-09-10',
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
      href: 'https://eduentry.ai/en',
    },
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: 'Business Work Experience at High School in the UK: What It Is, How to Get It, and Why It Matters',
    shortTitle: 'UK Business Work Experience: How to Get a Placement',
    description:
      'How to find a business work placement in Year 10–13 in the UK — which sectors take under-18s, how to approach employers, and what makes a strong application.',
    tldr: 'Business work experience for UK school students typically means a one- or two-week placement or a structured employer programme. Most formal large-employer schemes start accepting students from Year 10 (age 14–15). FTSE 100 firms including Barclays, Goldman Sachs, KPMG, and Deloitte run dedicated Year 12 Spring Insight programmes, with application windows opening September–November.',
    date: '2026-06-30',
    dateModified: '2026-09-23',
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
      'How UK students can secure a tech internship before university — where to look, how to apply without a portfolio, and what actually gets you shortlisted.',
    tldr: 'UK students aged 14–18 can access technology work experience through formal programmes at Google, Microsoft, Amazon, IBM, BT, Sky, and BBC Technology, and via KPMG, Deloitte, PwC, and EY tech schemes. Smaller tech firms typically offer more hands-on responsibility and broader exposure than large corporates.',
    date: '2026-06-30',
    dateModified: '2026-09-10',
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
        a: 'A third-party aptitude or readiness assessment score solves the experience paradox — you need prior experience to get experience, but you need an opportunity to build experience in the first place. A credible score demonstrating computational thinking, problem-solving, and domain knowledge gives recruiters verifiable evidence before they meet you. For students without a GitHub portfolio or prior internship, measured aptitude data is the most concrete signal an employer can act on at the shortlisting stage.',
      },
      {
        q: 'What should I do during a tech internship to get the most out of it?',
        a: 'Four things: arrive with specific questions prepared for each person you shadow (people remember interns who are curious, not passive); ask for a defined deliverable on day one — a report, a presentation, a small piece of code, anything with a deadline; seek feedback actively, not just at the end; and document what you learned as you go, not retrospectively. The students who walk away with the strongest reference and the best personal statement material are almost always those who treated the placement as a performance, not a holiday.',
      },
    ],
    howToSteps: [
      { name: 'Identify your area of technology interest', text: 'The tech industry covers software development, UX design, data analysis, cybersecurity, IT support, and product management. Knowing which area interests you helps you target the right firms and speak credibly in applications.' },
      { name: 'Research available programmes by year group', text: 'Year 10 (age 14–15): many open work experience programmes and virtual schemes. Year 12 (age 16–17): formal Spring Insight weeks and summer programmes at Google, Microsoft, Amazon, IBM, BT, Sky, and the BBC. Scheme applications typically open September–November for the following summer.' },
      { name: 'Build your evidence base before applying', text: 'You don\'t need a portfolio — but evidence of computational thinking helps. This includes a free aptitude assessment score, a small personal project, an online course certificate (Codecademy, freeCodeCamp), or participation in a hackathon or coding club.' },
      { name: 'Prepare your application documents', text: 'Write a concise cover letter explaining which area of technology interests you. Be specific about one thing the company does. Attach your aptitude assessment score — a 34-question adaptive readiness report gives recruiters verifiable evidence of your potential.' },
      { name: 'Apply early and to a mix of firm sizes', text: 'Large firm applications (formal schemes) should be submitted September–November. For smaller tech firms, direct email applications can go year-round. Smaller firms typically offer more hands-on responsibility and broader exposure — apply to both categories.' },
      { name: 'Prepare for interviews and online assessments', text: 'Many tech schemes include a verbal/numerical reasoning assessment and a brief interview. Practise explaining how you approach problems step-by-step. Prepare 2–3 specific examples of logical thinking or problem-solving from outside school.' },
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
      'International standardised testing 2026: SAS scores, PISA/TIMSS benchmarks, Digital SAT adaptive testing, and percentile thresholds for selective admissions.',
    tldr: 'The OECD average PISA score across maths, reading, and science is approximately 472–476. The UK performs above the OECD average in reading and science and at or slightly above average in maths. Singapore leads globally in all three subjects, scoring 70–100 PISA points above the UK — a gap equivalent to approximately 2–3 years of schooling.',
    date: '2026-06-16',
    dateModified: '2026-09-10',
    readTime: '9 min read',
    tags: ['Standardised Testing', 'International Benchmarks', '11+', 'Digital SAT', 'PISA', 'Grammar Schools', 'Percentile', 'SAS', 'CAT4', 'IB'],
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
      {
        q: 'What is a good PISA score for a child?',
        a: 'PISA scores are reported on a scale where the OECD average is approximately 472–476. A score above 545 (Level 5) places a student in the top 8–10% globally and is considered excellent. Scores above 505 are above the OECD average. Singapore leads globally with a Mathematics score of 575, roughly 2–3 school years ahead of the OECD average.',
      },
      {
        q: 'What is a Standardised Age Score (SAS) and how is it calculated?',
        a: 'A Standardised Age Score (SAS) is a normalised score with a mean of 100 and a standard deviation of 15, adjusted for the child\'s precise age in months. GL Assessment\'s SAS formula compares each child only against peers born in the same month range, correcting for the developmental gap between autumn-born and summer-born children in the same school year.',
      },
      {
        q: 'How does Singapore compare to the UK in education standards?',
        a: 'Singapore consistently leads global PISA rankings, scoring approximately 575 in Mathematics versus the UK\'s 495–510 — a gap of roughly 70–80 points, equivalent to 2–3 years of schooling. Singapore achieves this through a highly structured national curriculum, intensive home tutoring culture, and a strong emphasis on mathematical problem-solving from primary school.',
      },
      {
        q: 'How does the Digital SAT work in 2026?',
        a: 'The Digital SAT uses Multi-Stage Adaptive Testing (MST): all students sit the same first module, and performance on that module determines which of two second modules they receive — harder or easier. A student who makes too many errors in Module 1 is routed to the easier second module, capping their maximum possible score at approximately 1350 regardless of how well they perform in Module 2.',
      },
      {
        q: 'What is the average IB diploma score worldwide?',
        a: 'The worldwide IB Diploma average score is approximately 29–30 points out of a maximum of 45. Students targeting elite UK universities (Oxford, Imperial, UCL) or Ivy League institutions typically need 40+ points with specific Higher Level requirements. The 40-point threshold places a student above the 90th percentile of the global IB cohort.',
      },
      {
        q: 'At what percentile does a child need to be for selective school entry?',
        a: 'For most UK grammar schools, a child needs to perform at or above the 84th percentile (SAS 115+). For the most competitive schools — QE Boys, Henrietta Barnett, Tiffin — the effective entry threshold is the 97th–99th percentile. For independent school scholarships and international selective admissions, the 90th percentile is generally the minimum competitive threshold.',
      },
      {
        q: 'How do I find out where my child stands against international benchmarks?',
        a: 'Eduentry\'s free adaptive assessment benchmarks your child against PISA, GCSE, SAT, and IB standards across four cognitive domains. It produces a standardised score (mean 100, SD 15) and international percentile rank — the same scale used by GL Assessment and CAT4 — so you can see exactly where your child stands globally, not just within their school or class.',
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
      'Parent guide to preparing for the 11+ at home — verbal and non-verbal reasoning, maths and English, with a recommended 18-month practice timeline.',
    tldr: 'Most families begin 11+ preparation 12–18 months before the exam, which is typically taken in September or October of Year 6. Effective preparation is 3–4 hours per week in the early phase (Year 4–5), rising to 5–7 hours per week in the final 3 months — spread across 20–30 minute daily sessions. The four subjects tested are English, Mathematics, Verbal Reasoning, and Non-Verbal Reasoning.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
    readTime: '8 min read',
    tags: ['11+', 'Grammar Schools', 'Preparation', 'Parent Guide'],
    faqs: [
      {
        q: 'When should I start preparing my child for the 11+?',
        a: 'Most families begin structured 11+ preparation 12–18 months before the exam, which is typically taken in September or October of Year 6. Starting in Year 4 or early Year 5 is ideal — it allows time to build skills gradually without creating exam anxiety. The first step is a diagnostic assessment to identify current strengths and gaps.',
      },
      {
        q: 'Is it possible to prepare for the 11+ at home without a tutor?',
        a: 'Yes. Many children successfully prepare for the 11+ entirely at home using practice books, free online resources, and online adaptive assessment platforms. The key is consistency — 20–30 minutes of focused practice per day is more effective than occasional intensive sessions. A structured plan covering all four subjects (English, Maths, Verbal Reasoning, Non-Verbal Reasoning) is essential.',
      },
      {
        q: 'What subjects are covered in the 11+ exam?',
        a: 'The 11+ typically covers four subjects: English (reading comprehension, grammar, vocabulary), Mathematics (arithmetic, algebra, geometry), Verbal Reasoning (word analogies, sequences, codes), and Non-Verbal Reasoning (shape patterns, matrices, spatial reasoning). Which subjects are tested depends on the exam board — GL Assessment tests all four, while CEM combines verbal and numerical reasoning into a blended format.',
      },
      {
        q: 'How many hours a week should my child practise for the 11+?',
        a: 'In the early preparation phase (12–18 months out), 3–4 hours per week spread across 5–6 short daily sessions is sufficient. In the final 3 months, this can increase to 5–7 hours per week. More than 10 hours per week is counterproductive and increases anxiety without meaningful score improvement.',
      },
      {
        q: 'What is the difference between GL Assessment and CEM for the 11+?',
        a: 'GL Assessment and CEM (Durham University) are the two main 11+ exam boards in England. GL Assessment tests each subject separately — English, Maths, Verbal Reasoning, and Non-Verbal Reasoning — with clearly labelled question types. CEM blends verbal and numerical reasoning into untimed-looking papers with no question-type labels, which many children find harder to prepare for. Knowing which board your target school uses is essential before starting preparation.',
      },
      {
        q: 'What score does my child need to pass the 11+?',
        a: 'The pass mark varies significantly by area and school. In Kent and Essex, a Standardised Age Score (SAS) of around 111–113 typically places a child on the selective register. In the most oversubscribed London boroughs (Barnet, Sutton), a SAS of 125+ may still not guarantee an offer if higher-scoring applicants live closer. Always check the published requirements for your specific target schools.',
      },
      {
        q: 'Can a child self-study for the 11+ without a tutor?',
        a: 'Yes — many children successfully prepare for the 11+ entirely through self-study and parental support. The key resources are a structured practice workbook series (Bond, CGP, or Schofield & Sims are widely used), an adaptive online assessment to track progress, and past papers from your specific exam board. A tutor adds value mainly for children who struggle to self-motivate or who have specific subject gaps.',
      },
      {
        q: 'Does the 11+ test knowledge or ability?',
        a: 'The 11+ tests a combination of both. The English and Maths papers test curriculum knowledge (KS2 content), while Verbal Reasoning and Non-Verbal Reasoning papers are designed to test underlying cognitive ability independent of school learning. In practice, all four components respond to targeted preparation — including the reasoning papers, which improve significantly with systematic practice on each question type.',
      },
      {
        q: 'What happens on 11+ exam day?',
        a: 'The 11+ is typically held in September of Year 6, with most counties running a single sitting at the child\'s own school or a designated test centre. Children sit one or two papers lasting 45–60 minutes each. Results are usually sent to parents in October, in time to include grammar school preferences on the secondary school application form (CAF), which is due in late October.',
      },
      {
        q: 'Should my child take a mock 11+ exam?',
        a: 'Yes — full mock exams under timed conditions are one of the most effective forms of preparation. They build exam stamina, reduce test anxiety, and reveal time-management weaknesses that are invisible during untimed practice. Aim for at least 3–4 full mocks in the 2–3 months before the real exam, with a review session after each one to understand where marks were lost.',
      },
    ],
    howToSteps: [
      { name: 'Take a diagnostic assessment', text: 'Start with a free adaptive practice test to establish your child\'s current standardised score and identify strengths and gaps across English, Maths, Verbal Reasoning, and Non-Verbal Reasoning.' },
      { name: 'Build an 18-month preparation plan', text: 'Work backwards from the September exam date. Aim to start in Year 4 or early Year 5 — most families begin 12–18 months before the 11+. Plan 3–4 hours per week in the early phase, rising to 5–7 hours in the final 3 months.' },
      { name: 'Practise Verbal Reasoning systematically', text: 'Cover all major question types: word analogies, letter codes, number codes, odd-word-out, and word sequences. GL Assessment and CEM both test these, though CEM presents them unlabelled.' },
      { name: 'Practise Non-Verbal Reasoning systematically', text: 'Work through pattern completion, matrix puzzles, figure series, and spatial rotation. These respond well to repeated exposure and show the fastest score improvement with consistent practice.' },
      { name: 'Consolidate English and Maths', text: 'Ensure KS2 English (reading comprehension, grammar, spelling, punctuation) and Maths (arithmetic, fractions, geometry, data) are secure. These are particularly important for GL Assessment papers.' },
      { name: 'Complete full mock exams under timed conditions', text: 'Aim for at least 3–4 full mock papers in the 2–3 months before the real exam. Time them accurately, simulate exam conditions, and review every incorrect answer after each mock.' },
      { name: 'Register and prepare for exam day', text: 'Check your target school\'s registration deadlines — typically spring/summer of Year 5 for a September Year 6 exam. On exam day, ensure your child has slept well, eaten breakfast, and arrives early to the exam centre.' },
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
    shortTitle: 'What Is a Standardised Score? SAS Bands Explained',
    description:
      'Standardised scores explained: 100 is average, 115 the 84th percentile, 130 the 98th. SAS bands, good scores and grammar school thresholds.',
    tldr: 'A standardised score of 100 is exactly average for age; 115 is the 84th percentile; 130 is the 98th percentile. For 11+ grammar school entry, most areas outside London require a Standardised Age Score (SAS) of 111–118; Barnet and Sutton selective schools require 121–132.',
    date: '2026-06-17',
    dateModified: '2026-09-24',
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
      {
        q: 'What is a Standardised Age Score (SAS)?',
        a: 'A Standardised Age Score (SAS) is the specific term used by GL Assessment for the standardised score reported on 11+ papers. It uses the same scale as other standardised scores — mean 100, SD 15 — but is explicitly adjusted for the child\'s age in years and months, so younger children in the year group are not disadvantaged. SAS is directly comparable to cognitive ability test scores like CAT4 and CogAT.',
      },
      {
        q: 'How does a standardised score differ from a National Curriculum level?',
        a: 'National Curriculum levels (and their successors — year group descriptors, teacher assessments, SATS levels) measure what a child has been taught and can demonstrate in school. A standardised score measures cognitive ability or achievement relative to all children of the same age — including those in other schools, other countries, and different year groups. Standardised scores are more useful for competitive admissions; curriculum levels are more useful for tracking school progress.',
      },
      {
        q: 'What standardised score qualifies a child for a gifted programme?',
        a: 'Most US and UK gifted programmes use a threshold of 130 (the 98th percentile) for formal gifted identification. UK schools typically use SAS 112–120+ (stanine 7–9) for internal setting and gifted-and-talented provision. New York City\'s Gifted & Talented program has historically required the 99th percentile. The specific threshold varies by programme, country, and school.',
      },
      {
        q: 'Can standardised scores improve over time?',
        a: 'Yes — standardised scores are not fixed measures of permanent ability. Research consistently shows that targeted preparation, particularly for reasoning assessments, raises scores by 8–15 points on average over 6–12 months. However, the most durable improvements come from genuine skill development (vocabulary building, reasoning practice, maths fluency) rather than test familiarity alone. A rising standardised score is the most reliable indicator that meaningful learning has occurred.',
      },
      {
        q: 'How are standardised scores calculated?',
        a: 'A raw score (number of correct answers) is first converted to a scaled score that adjusts for test difficulty. This scaled score is then norm-referenced against a large representative sample of children of the same age — which produces the standardised score on the mean-100, SD-15 scale. The norming process ensures the score means the same thing regardless of which version of the test was taken or which year the test was sat.',
      },
      {
        q: 'What is the difference between a standardised score and an IQ score?',
        a: 'Functionally, they use the same scale — both have a mean of 100 and a standard deviation of 15. An IQ score is specifically a measure of general cognitive ability (g factor), typically assessed by a psychologist using a comprehensive test like the WISC-V. A standardised score on an academic or reasoning assessment measures similar constructs but may be narrower in scope. For practical admissions purposes, a standardised score of 130 and an IQ of 130 carry equivalent weight.',
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
      'Complete guide to verbal reasoning for the 11+ — all major question types with worked examples, common mistakes to avoid, and tips for effective practice.',
    tldr: 'Verbal reasoning in the 11+ tests logical thinking using words — not reading ability or writing skill. Question types include word analogies (HOT:COLD as FAST:?), codes, sequences, hidden words, and synonyms. It is distinct from English comprehension and can be improved through targeted practice regardless of reading level.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
      {
        q: 'What are the most common verbal reasoning question types in the 11+?',
        a: 'The most common verbal reasoning question types include: word analogies (HOT:COLD as FAST:?), complete the sentence, letter series, number series in word format, find the hidden word, move a letter, word codes, odd one out, and word connections. GL Assessment papers typically contain 80 questions of mixed types in 50 minutes; CEM papers blend these into an unseparated format.',
      },
      {
        q: 'How many verbal reasoning questions are in the 11+?',
        a: 'A typical GL Assessment verbal reasoning paper contains 80 questions to be completed in 50 minutes — approximately 37 seconds per question. CEM papers vary but tend to run at a similar pace. This time pressure means speed and automaticity with each question type are just as important as accuracy.',
      },
      {
        q: 'What vocabulary level is needed for 11+ verbal reasoning?',
        a: 'A broad vocabulary significantly helps with synonym, antonym, and word analogy questions. Children preparing for the 11+ should be reading widely at or above age level — ideally including non-fiction and older literature that exposes them to less common words. A target vocabulary of 15,000–20,000 words is associated with strong verbal reasoning performance at age 10–11.',
      },
      {
        q: 'Is verbal reasoning tested by all 11+ exam boards?',
        a: 'Most grammar school areas test verbal reasoning, but the format varies by exam board. GL Assessment tests it as a standalone 80-question paper. CEM (used in Buckinghamshire and some other areas) blends verbal and numerical reasoning without separate question-type labels, making the style harder to prepare for. A small number of individual schools set their own papers, some of which do not include verbal reasoning at all.',
      },
      {
        q: 'How does verbal reasoning relate to English reading comprehension?',
        a: 'Verbal reasoning and reading comprehension are related but distinct skills. Reading comprehension measures whether a child understands what they read; verbal reasoning measures whether they can use logic and pattern recognition applied to words. A strong reader is not automatically a strong verbal reasoner — and vice versa. Both skills need targeted practice for the 11+.',
      },
      {
        q: 'What age should children start verbal reasoning practice?',
        a: 'Most families start verbal reasoning practice in Year 4 (age 8–9), around 18 months before the exam. Starting in Year 5 is still feasible if the child has strong foundations in English and maths. Beginning in Year 6 is late — verbal reasoning question types take time to internalise, and rushing preparation in the final months increases anxiety without proportionate score improvement.',
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
      'Grammar school entry requirements for 2026 — SAS thresholds, percentile benchmarks and entry criteria across England\'s key grammar school areas.',
    tldr: 'In Kent and Essex, the 11+ selective register pass mark is approximately SAS 111–113. In Buckinghamshire (CEM), the threshold is around SAS 118. The most competitive London schools in Barnet and Sutton require SAS 121–132 — and even children scoring 125 may not receive an offer if higher-scoring applicants living closer fill available places first.',

    date: '2026-06-17',
    dateModified: '2026-09-23',
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
      {
        q: 'What percentage of children pass the 11+ and get into grammar school?',
        a: 'Grammar schools educate approximately 5% of secondary school pupils in England. The pass rate for the 11+ varies by area — in Kent, around 25–30% of children who sit the exam achieve the selective register threshold. However, achieving the threshold does not guarantee a place; oversubscribed schools rank applicants by distance after siblings, meaning even children who pass comfortably may not receive an offer for their first-choice school.',
      },
      {
        q: 'Can you appeal a grammar school rejection?',
        a: 'Yes. Parents have the right to appeal a grammar school rejection if they believe the decision was made in error or if there were exceptional circumstances. Appeals must typically be submitted within 20 school days of the refusal. Appeals succeed most often when: the child\'s score was in the borderline band, there were verifiable extenuating circumstances on test day, or the admissions criteria were not applied correctly.',
      },
      {
        q: 'Are grammar school entry requirements the same in all areas of England?',
        a: 'No — entry requirements vary significantly by county and school. Kent operates a county-wide test with one shared pass mark; Buckinghamshire uses CEM and has different score thresholds; London boroughs like Barnet and Sutton each set their own standards and are far more competitive. Always research the specific entry requirements for your target school and area, not just national averages.',
      },
      {
        q: 'Does grammar school attendance affect A-level and university outcomes?',
        a: 'Research is mixed. Grammar school pupils do achieve better GCSE and A-level results on average, but much of this is explained by selection — they were already academically advanced before entry. A 2019 University of Bristol study found that grammar schools add little value over and above what equivalent pupils achieve at high-performing non-selective schools. The key determinant of outcomes is the child\'s cognitive ability and motivation, not the school type.',
      },
      {
        q: 'Is there a 13+ grammar school entry route?',
        a: 'A small number of grammar schools admit students at 13+ — notably in Kent and some individual schools — allowing a second entry point for children who narrowly missed at 11+. The 13+ test typically covers English, Maths, and Verbal Reasoning. Competition at 13+ is lower than at 11+ because fewer places are available, but the academic standard required is similar. Contact your target school directly to confirm whether a 13+ entry exists.',
      },
      {
        q: 'What is a super-selective grammar school?',
        a: 'Super-selective grammar schools are grammar schools that admit only the very highest-scoring applicants from across a wide geographical area, regardless of proximity. Examples include King Edward\'s School Birmingham and Nonsuch High School for Girls in Surrey. These schools typically require SAS scores of 125–135 and are significantly more competitive than local-intake grammar schools with the same legal name.',
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
    shortTitle: 'US Gifted Program Testing 2026: CogAT & WISC',
    description:
      'US gifted program identification: CogAT, WISC-V, NWEA MAP, and OLSAT explained, with score thresholds by program type and a practical preparation guide.',
    tldr: 'Most US gifted programs require an IQ of 130 or above (98th+ percentile) for formal identification. New York City\'s Gifted & Talented programme has historically required the 99th percentile. Pull-out enrichment programmes typically accept the 90th–95th percentile. The most common group screening test is the CogAT; the most common individual IQ test is the WISC-V.',
    date: '2026-06-17',
    dateModified: '2026-09-24',
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
      {
        q: 'What is the CogAT and how is it scored?',
        a: 'The CogAT (Cognitive Abilities Test) is a group-administered reasoning assessment used in most US school districts for gifted screening. It measures three batteries: Verbal (word analogies and classification), Quantitative (number series and equations), and Nonverbal (figure matrices and paper folding). Scores are reported as Standard Age Scores (mean 100, SD 16) and percentile ranks. Most districts use CogAT screening in Grades 2–3 as the first step in gifted identification.',
      },
      {
        q: 'What is the difference between gifted identification and a gifted program?',
        a: 'Gifted identification is the process of determining that a child meets the district\'s threshold for giftedness — typically based on a combination of test scores, teacher referrals, and portfolio evidence. A gifted program is the educational provision offered to identified students — which ranges from pull-out enrichment groups meeting once a week to full-time self-contained gifted classrooms. Identification is a gateway; the quality and type of program determines whether the identification translates into academic benefit.',
      },
      {
        q: 'Can a child be gifted in one area but not another?',
        a: 'Yes — this is called domain-specific giftedness and is actually more common than across-the-board giftedness. A child can score at the 99th percentile in verbal reasoning while being average in quantitative reasoning. The CogAT explicitly measures three separate batteries for this reason. Domain-specific gifted programs (e.g. gifted language arts, gifted maths) are common in districts that use multi-dimensional identification.',
      },
      {
        q: 'How early can giftedness be identified in a child?',
        a: 'Formal gifted identification is generally most reliable from age 6–7 onwards, when cognitive assessments become more stable predictors of long-term ability. Some districts screen as early as Kindergarten or Grade 1, but scores at this age have higher measurement error. Early signs — rapid vocabulary acquisition, strong memory, intense curiosity, early reading — are useful indicators but should be confirmed with a standardised assessment.',
      },
      {
        q: 'What is the difference between a high achiever and a gifted student?',
        a: 'High achievers perform well in school because they work hard, follow instructions, and respond well to praise. Gifted students have unusually high cognitive ability that often manifests as rapid understanding of complex concepts, unconventional thinking, and sometimes frustration with the pace of regular schooling. Many gifted students are not high achievers in school — they are bored, underserved, or twice-exceptional (gifted and also having a learning difference).',
      },
      {
        q: 'What should parents do if they suspect their child is gifted?',
        a: 'Start with a standardised cognitive assessment — either through the school district\'s referral process or via a private psychologist. Gather evidence of advanced ability across multiple areas (not just one subject). If the school is unresponsive, parents can commission an independent assessment with a licensed psychologist, which typically includes the WISC-V and costs $1,000–$3,000. Use the results to advocate for appropriate placement and challenge.',
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
    shortTitle: 'NWEA MAP Scores Explained (2026): RIT Ranges by Grade',
    description:
      'NWEA MAP RIT score benchmarks by grade for reading, math and science: 2025–26 norm percentiles, grade averages and gifted program cut-offs.',
    tldr: 'NWEA MAP Growth uses a RIT (Rasch Unit) scale — not percentage correct. The national average RIT score is approximately 200 in Grade 3 and 221 in Grade 8. A score at the 95th percentile in Grade 5 is approximately RIT 230; the 99th percentile is approximately RIT 240. Gifted identification programmes typically require the 95th–99th percentile depending on selectivity.',

    date: '2026-06-17',
    dateModified: '2026-09-24',
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
      {
        q: 'What is a typical RIT score growth per year?',
        a: 'According to NWEA national norms, students typically grow about 6–8 RIT points per year in the earlier grades (K–3) and this growth decelerates as they get older — around 3–5 points per year by Grade 6–7. A student who grows faster than projected is accelerating relative to peers; a student who grows slower than projected is falling behind in relative terms even if their absolute score is increasing.',
      },
      {
        q: 'Do MAP scores predict high school success?',
        a: 'Yes — longitudinal research by NWEA shows that MAP Growth scores in Grades 3–5 are strong predictors of high school readiness, ACT/SAT performance, and college readiness. A Grade 5 MAP Math score at the 90th percentile is associated with an 83% probability of high school maths readiness. Schools increasingly use MAP trajectory data for early intervention and gifted identification.',
      },
      {
        q: 'Can students prepare for the NWEA MAP test?',
        a: 'The MAP test is an adaptive assessment of curriculum knowledge — it adjusts to the student\'s level in real time. Targeted preparation in reading, maths, and science through regular schoolwork, practice reading, and problem-solving is the most effective preparation. Unlike aptitude tests, MAP directly measures curriculum content, so content-focused study (books, maths practice) directly improves scores.',
      },
      {
        q: 'What is the MAP Growth test compared to the MAP for Primary Grades (MPG)?',
        a: 'MAP Growth is designed for students in Grade 2 and above and uses the full adaptive RIT scale. MAP for Primary Grades (MPG) is a separate assessment for Kindergarten and Grade 1 that uses a different format including audio support, because young children cannot reliably read test questions independently. Both produce RIT scores on the same scale, allowing tracking from Kindergarten through Grade 12.',
      },
      {
        q: 'How do I access my child\'s MAP scores?',
        a: 'MAP scores are typically shared with parents through the school\'s parent portal (PowerSchool, Infinite Campus, or similar) or a printed report sent home after each testing window. NWEA also provides a family-facing report called the "Family Report" that translates RIT scores into grade-level context and growth projections. If you cannot access results, contact your child\'s teacher or the school testing coordinator.',
      },
      {
        q: 'What is the Lexile level and how does it relate to MAP Reading scores?',
        a: 'NWEA MAP Reading scores link directly to Lexile measures, which are used to match students to appropriately challenging books. A student with a MAP Reading RIT of 200 (approximately Grade 3 average) corresponds to roughly Lexile 500–600L. As MAP Reading scores increase, so does the Lexile range of books that are appropriate. Parents can use their child\'s Lexile range to select books that challenge without frustrating.',
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
      'ISEE vs SSAT: how each private school entrance test works, how scores are reported, key differences, which to choose and how to prepare.',
    tldr: 'The ISEE reports scores on a stanine scale (1–9); the SSAT reports a percentile rank. Most competitive US independent schools expect a stanine of 7–9 on the ISEE (the 77th–99th percentile range) or the 75th+ percentile on the SSAT. Some schools specify one test; others accept either.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
    shortTitle: 'How to Prepare for a Gifted Test 2026',
    description:
      'Can you prepare for a gifted test? This guide covers what\'s trainable for CogAT, OLSAT and NNAT, and how to build the specific skills that respond to practice.',
    tldr: 'Effective preparation for US gifted tests (CogAT, OLSAT) focuses on abstract reasoning rather than content memorisation, since these tests measure cognitive ability not learned knowledge. The most trainable components are matrix reasoning, spatial reasoning, and non-verbal pattern recognition — all of which respond to structured practice.',

    date: '2026-06-17',
    dateModified: '2026-09-23',
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
    shortTitle: 'Netherlands Doorstroomtoets 2026: Score Ranges',
    description:
      'Doorstroomtoets 2026 score ranges — what score gets a VWO, HAVO or VMBO advice? How the Dutch primary school exit test replaced the Cito toets.',
    tldr: 'The Dutch primary school placement test (Doorstroomtoets, formerly Cito Eindtoets) is taken in Group 8 (age 11–12) and scores pupils into secondary school levels: VMBO-B/K, VMBO-GT, HAVO, and VWO. A score supporting a VWO recommendation typically requires the top scoring range (approximately 544–550+).',
    date: '2026-06-17',
    dateModified: '2026-09-23',
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
      'VWO and Gymnasium explained for parents: the top level of Dutch secondary education, how entry works and how Tweetalig VWO compares.',
    tldr: 'VWO is the highest level of Dutch secondary education, spanning 6 years and qualifying students directly for university (wo). Gymnasium is a VWO variant with compulsory Latin and usually Ancient Greek. Entry requires a Cito/Doorstroomtoets score in the VWO band and a teacher recommendation.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
    shortTitle: 'Gifted Education Netherlands 2026',
    description:
      'Dutch schools identify giftedness via WISC-V (IQ 130+). Covers plusklas enrichment, leonardoscholen entry, and how to request a gifted assessment.',
    tldr: 'In the Netherlands, giftedness (hoogbegaafdheid) is identified through a WISC-V assessment (IQ 130+). State schools offer plusklas enrichment but are not legally required to. A growing number of dedicated gifted schools (leonardoscholen) operate independently. Parents can request assessment through the school or privately via an educational psychologist.',
    date: '2026-06-17',
    dateModified: '2026-09-23',
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
      'Expat guide to international school admissions in the Netherlands: CAT4 testing, IB vs British curriculum, EAL support and waiting lists.',
    tldr: 'Most international schools in the Netherlands use CAT4 for entry assessment. CAT4 produces an SAS score (mean 100, SD 15); schools typically expect 100–115 for standard admission. Popular schools including ISE, BSN, and AIS operate waiting lists — early registration (sometimes from birth) is standard practice.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
    shortTitle: 'UAE CAT4 Test Guide 2026: SAS Bands Explained',
    description:
      'CAT4 SAS bands and percentile thresholds for UAE British-curriculum schools — what score qualifies for gifted programmes and selective admissions in Dubai.',
    tldr: 'CAT4 (Cognitive Abilities Test 4) produces a Standardised Age Score (SAS) with mean 100 and SD 15. A score of 100 is average for age; 115 is the 84th percentile; 127 is the 96th percentile. UAE schools use CAT4 scores for setting, gifted identification, and in some cases admissions — a score of 110+ typically qualifies a student for advanced teaching sets.',
    date: '2026-06-17',
    dateModified: '2026-09-23',
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
      {
        q: 'What are the four batteries of the CAT4?',
        a: 'CAT4 has four batteries: Verbal Reasoning (word analogies and verbal classification), Quantitative Reasoning (number analogies and number series), Non-Verbal Reasoning (figure classification and figure matrices), and Spatial Ability (figure recognition and paper folding). Each battery produces a separate SAS score, giving a cognitive profile that highlights relative strengths and weaknesses across reasoning domains.',
      },
      {
        q: 'Can you prepare for the CAT4?',
        a: 'CAT4 is designed to measure underlying cognitive ability rather than taught knowledge, but targeted reasoning practice does raise scores. Non-verbal and spatial batteries in particular respond to systematic practice on figure matrices, paper folding, and pattern recognition. UK and UAE families typically see 5–10 SAS point improvements with 3–6 months of adaptive reasoning practice. Verbal and quantitative batteries also benefit from vocabulary building and number pattern work.',
      },
      {
        q: 'What is a CAT4 profile and why does it matter?',
        a: 'A CAT4 profile shows relative strengths and weaknesses across the four batteries, not just an overall mean SAS. A child with a high Verbal SAS but low Spatial SAS has a very different cognitive profile from one with balanced scores. Schools use profiles to identify underachievement (where academic results don\'t match reasoning ability), to tailor teaching approaches, and to guide subject choices at GCSE and A-level.',
      },
      {
        q: 'At what ages is the CAT4 administered in UAE schools?',
        a: 'UAE British-curriculum schools typically administer CAT4 at key transition points: Year 3 (age 7–8) for early cognitive baseline, Year 7 (age 11–12) on secondary school entry, and Year 9 (age 13–14) to inform GCSE subject choices. Some schools also administer it in Year 6 to support 11+ preparation. The test is re-normed for each age group, so SAS scores are age-adjusted.',
      },
      {
        q: 'How do I interpret my child\'s CAT4 report?',
        a: 'The CAT4 report shows an SAS and stanine for each battery (and an overall mean SAS). A stanine of 5–6 is average; 7–8 is above average; 9 is the top 4%. Look at the profile pattern: a high mean SAS with a low Quantitative battery suggests underachievement in maths worth investigating. A high Spatial but low Verbal SAS may indicate a child who excels in practical or visual subjects but needs support in language-heavy ones.',
      },
      {
        q: 'Does CAT4 predict academic performance at GCSE and A-level?',
        a: 'Yes — CAT4 is one of the strongest predictors of GCSE and A-level outcomes available. GL Assessment publishes CAT4-to-GCSE prediction matrices used by thousands of UK and international schools. A CAT4 mean SAS of 100 (average) predicts a Grade 4–5 range at GCSE; SAS 120 predicts Grade 7–8. These are probabilistic estimates — motivation, teaching quality, and study habits all influence final outcomes.',
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
      'How admissions work at top British-curriculum schools in the UAE — GEMS Wellington, JESS, Dubai College, BSAK: waiting lists, tests and KHDA ratings.',
    tldr: 'British-curriculum schools in Dubai and Abu Dhabi — GEMS Wellington, JESS, Dubai College, BSAK — are rated Outstanding or Very Good by KHDA. Waiting lists at the most popular schools extend 12–24 months or longer. CAT4 is used for admissions screening at most schools alongside previous school reports; Dubai College uses its own selective test.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
      'How UAE international schools identify and support gifted students: CAT4 thresholds, KHDA expectations, Al Mawhiba and what to do if provision falls short.',
    tldr: 'UAE international schools identify gifted students using CAT4 SAS 112+ (stanine 7+) as the primary threshold. The KHDA requires Outstanding-rated schools to demonstrate measurable progress for high-ability students. Al Mawhiba is the UAE national programme for gifted Emirati students; expat families should focus on their school\'s internal gifted provision.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
    shortTitle: 'UAE International School Entry Tests 2026',
    description:
      'Which test does your UAE school use? British-curriculum schools use CAT4, American schools use ISEE or SSAT. Admissions timelines for Dubai and Abu Dhabi.',
    tldr: 'UAE international school entry typically requires one of: CAT4 (used by most British curriculum schools), ISEE (American curriculum schools), or SSAT. CAT4 is administered at the school during the admissions appointment; ISEE and SSAT are taken at registered test centres, with results submitted to the school separately.',
    date: '2026-06-17',
    dateModified: '2026-09-23',
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
  {
    slug: 'dubai-gifted-schools-2026',
    title: 'Finding a School in Dubai for Gifted Children: Top Programs and How to Apply in 2026',
    shortTitle: 'Dubai Gifted Schools 2026: Programs and CAT4',
    description:
      'Top Dubai schools for gifted children — KHDA inspection ratings, CAT4 score requirements, British-curriculum and IB options, and the 2026 application process.',
    tldr: 'Dubai\'s most recognised schools for gifted students include Dubai College, JESS Arabia, GEMS Wellington International, Repton School Dubai and Kings\' School Dubai. All use CAT4 for admissions and academic monitoring. KHDA Outstanding-rated schools are required to demonstrate measurable progress for their highest-ability students. A CAT4 mean SAS of 112+ (stanine 7+) typically qualifies a child for the school\'s gifted register.',
    date: '2026-09-24',
    dateModified: '2026-09-24',
    readTime: '10 min read',
    tags: ['UAE', 'Dubai Schools', 'Gifted Education', 'CAT4', 'KHDA'],
    faqs: [
      {
        q: 'Which schools in Dubai are best for gifted children?',
        a: 'The Dubai schools most consistently recognised for strong gifted and high-ability provision — based on KHDA Outstanding ratings and academic outcomes — include Dubai College (Year 7 entry, extremely selective), JESS Arabia (Jumeirah English Speaking School), GEMS Wellington International School, Repton School Dubai, and Kings\' School Dubai. All are British-curriculum schools that use CAT4 for admissions screening and ongoing academic monitoring.',
      },
      {
        q: 'What CAT4 score does my child need for Dubai school admissions?',
        a: 'For most British-curriculum schools in Dubai, a CAT4 mean SAS of 100–110 is sufficient for standard admission. Selective schools including Dubai College require significantly higher scores — SAS 120+ across batteries. For gifted register placement within a school, the typical threshold is SAS 112+ (stanine 7+) on CAT4. Dubai College selects only the top ~2–3% of applicants; expect to need SAS 125+ to be competitive.',
      },
      {
        q: 'How do I check a Dubai school\'s gifted provision before applying?',
        a: 'The most reliable method is to read the school\'s most recent KHDA inspection report, available free on the KHDA website (khda.gov.ae). Look specifically for the rating given to provision for "more able" and "gifted and talented" students. An Outstanding school should show evidence of enrichment programmes, subject acceleration, differentiated planning, and measurable above-expected progress for its highest-ability students.',
      },
      {
        q: 'What is the school application timeline in Dubai?',
        a: 'Most Dubai international schools open applications for the following September in October–December of the preceding year, with offers made by January–March. Popular Outstanding-rated schools fill quickly. For September 2027 entry, begin researching and visiting schools in September 2026, submit applications by November 2026, and expect CAT4 testing appointments in November–January. Schools will not hold places: submit strong, complete applications early.',
      },
    ],
    cta: {
      heading: 'Benchmark your child before applying',
      body: 'Our free adaptive assessment gives your child a standardised score on the same mean-100, SD-15 scale as CAT4 — so you know exactly where they stand before the admissions round.',
      label: 'Start free assessment',
      href: '/tr#akademik',
    },
  },
  // Canada
  {
    slug: 'canada-gifted-program-identification',
    title: 'Gifted Program Identification in Canada: A Province-by-Province Guide',
    shortTitle: 'Canada Gifted Program Identification 2026',
    description:
      'Gifted program identification across Canadian provinces — Ontario IPRC, WISC-V and CCAT screening, IQ thresholds, and how to request an assessment.',
    tldr: 'Canadian gifted identification varies by province. Ontario uses the IPRC process with WISC-V or CAS2 (IQ 130+ threshold). Alberta and BC use district screening tests. Most provinces target approximately the 98th percentile. Parents can formally request an educational assessment through their child\'s school board.',
    date: '2026-06-17',
    dateModified: '2026-09-23',
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
    shortTitle: 'Ontario Gifted Testing 2026: IQ Score Requirements',
    description:
      'Ontario Gifted identification: WISC-V assessment, IPRC committee, CCAT screening, self-contained Gifted classes, and parent rights under the Education Act.',
    tldr: 'Ontario gifted identification uses the WISC-V (individual) or CCAT (group screening) and typically requires an IQ of 130 or above (98th percentile). The IPRC (Identification, Placement, and Review Committee) formally designates students as Exceptional — Gifted, unlocking placement in a self-contained Gifted class.',

    date: '2026-06-17',
    dateModified: '2026-09-23',
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
    shortTitle: 'Canada Private School Entrance Exams 2026',
    description:
      'How admissions work at Canada\'s top independent schools — including ISEE and SSAT requirements, competitive score ranges, and the full application timeline.',
    tldr: 'Most Canadian independent schools use the ISEE or SSAT for admissions. The ISEE reports stanine scores (1–9); competitive schools including Upper Canada College, Havergal, Bishop Strachan, and Ridley College typically expect stanine 7 or above. Most schools accept both tests; some have a stated preference.',

    date: '2026-06-17',
    dateModified: '2026-09-23',
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
    shortTitle: 'French Immersion Programs in Canada 2026',
    description:
      'French Immersion, public IB and gifted streams across Canadian provinces: when registration opens, which programmes are selective and what tests apply.',
    tldr: 'Early French Immersion (EFI) in most Canadian provinces starts in Kindergarten or Grade 1 and is first-come, first-served with no academic test. Late French Immersion (LFI) begins in Grade 4 or 6. Public IB programmes are selective — typically requiring a portfolio and minimum academic grades for Grade 6 or 9 entry.',
    date: '2026-06-17',
    dateModified: '2026-09-23',
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
      'A guide to the ACER Scholarship Exam — how this widely used Australian independent school entrance test works, how scores are reported, and how to prepare.',
    tldr: 'The ACER Scholarship Exam is used by most Australian independent schools to award merit scholarships and assess academic admissions. It tests written expression, humanities, and mathematics for Years 8–10 entry. Scores are school-specific rather than nationally standardised — each school sets its own scholarship threshold independently.',

    date: '2026-06-17',
    dateModified: '2026-09-10',
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
      'A complete guide to the NSW Opportunity Class Placement Test — what OC classes are, how the test works, score thresholds, and how to prepare your Year 4 child.',
    tldr: 'NSW Opportunity Classes run from Year 5 in public primary schools across NSW. The entry test is taken in Year 4 and covers three components: Reading, Mathematical Reasoning, and Thinking Skills. Placement is norm-referenced — there is no fixed pass mark; scores are ranked against all applicants within each placement group region.',
    date: '2026-06-17',
    dateModified: '2026-09-10',
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
    shortTitle: 'Western Australia GATE Program 2026',
    description:
      'Western Australia GATE testing 2026 — eligibility criteria, Year 4 and Year 7 entry, selective school score thresholds, and how the ability test is marked.',
    tldr: 'Western Australia GATE (Gifted and Talented Education) uses a two-stage selection process: school nomination followed by an ACER-administered test. Perth Modern School — the flagship full-time GATE school — is one of Australia most selective state schools, with entry typically requiring a GATE test score in the top 3–5%.',

    date: '2026-06-17',
    dateModified: '2026-09-23',
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
      'A parent\'s guide to NAPLAN, Australia\'s literacy and numeracy test for Years 3, 5, 7 and 9: how band scoring works and what results mean.',
    tldr: 'NAPLAN is taken by all Australian students in Years 3, 5, 7, and 9 and results are reported on a four-level proficiency scale: Exceeding, Strong, Developing, and Needs Additional Support. NAPLAN measures curriculum standards, not IQ or cognitive ability — it does not directly predict selective school entry or gifted programme eligibility.',

    date: '2026-06-18',
    dateModified: '2026-09-10',
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
  {
    slug: 'digital-marketing-work-experience-student-reviews',
    title: 'Digital Marketing Work Experience: Student Reviews and What to Expect',
    shortTitle: 'Digital Marketing Work Experience: Student Reviews',
    description:
      'What is digital marketing work experience really like? Students share what they did and what surprised them, plus how to find a UK placement.',
    tldr: 'Digital marketing work experience for school-age students typically involves writing social media copy, analysing Google Analytics or Meta Ads performance, competitor research, and email marketing assistance. Virtual work experience through Springpod and Forage offer structured digital marketing programmes from real employers.',

    date: '2026-07-09',
    dateModified: '2026-09-10',
    readTime: '9 min read',
    tags: ['Internship', 'Career Development', 'Work Experience', 'Digital Marketing'],
    faqs: [
      {
        q: 'What do you actually do on a digital marketing work experience placement?',
        a: 'Day-to-day tasks typically include writing social media copy, analysing campaign performance in Google Analytics or Meta Ads Manager, researching competitors, assisting with email marketing, sitting in on client or strategy meetings, and producing content for blogs or social channels. The most valuable placements give you a specific project — a content calendar, a campaign report, a keyword research document — with a real deadline and real feedback. Students consistently report that having a tangible deliverable made the experience far more useful for their CV and personal statement.',
      },
      {
        q: 'What do students say about digital marketing as a career after their placement?',
        a: 'Most students discover aspects they hadn\'t expected — the volume of data analysis, the pace of creative iteration, the importance of writing clearly and quickly. Students who enjoy problem-solving and seeing fast results tend to find digital marketing more compelling than they anticipated. Those hoping for purely creative work sometimes find the analytical side more dominant than expected. Both outcomes are valuable: knowing what a career actually involves before committing to a degree is exactly what work experience is for.',
      },
      {
        q: 'Is digital marketing work experience useful for university applications?',
        a: 'Yes — particularly for business, marketing, communications, and data science degrees. A personal statement written by a student who has run a real social media campaign, interpreted a Google Analytics report, or managed a content calendar contains specific, evidenced observations rather than generic interest claims. Admissions readers deal with hundreds of applications from students who assert they are "passionate about marketing" — far fewer who can describe what a CPM or bounce rate actually tells you.',
      },
      {
        q: 'How do I find digital marketing work experience as a student?',
        a: 'Four main routes: direct applications to digital marketing agencies (most accept school-age students for one- or two-week placements, particularly in summer), in-house marketing departments at larger companies, virtual work experience programmes (Springpod and Forage both offer structured digital marketing programmes from real employers), and platforms like Bright Network or RateMyPlacement. Agencies tend to offer the broadest exposure — a week at a small agency can involve SEO, paid media, content, and analytics in one placement.',
      },
    ],
    aggregateRating: { ratingValue: 4.2, reviewCount: 10 },
    cta: {
      heading: 'Ready for digital marketing work experience?',
      body: 'Free 34-question adaptive assessment. Get your Digital Marketing readiness report and something concrete to reference in every application.',
      label: 'Apply free — Digital Marketing track',
      href: '/digital-marketing',
    },
  },
  {
    slug: 'business-work-experience-year-12',
    title: 'Business Work Experience in Year 12: The Complete UK Guide by Age (12 to 18)',
    shortTitle: 'Business Work Experience: Year 12 Guide (Ages 12–18)',
    description:
      'Business work experience for UK students aged 12–18: what each year group can do, major employer schemes, how to apply and how to stand out.',
    tldr: 'FTSE 100 employers including Barclays, Goldman Sachs, KPMG, Deloitte, PwC, EY, McKinsey (Insight), and BCG run Year 12 Spring or Summer Insight schemes. Application windows typically open September–November for placements the following year. These programmes are competitive, with approximately 10–20 applications per place at the most selective firms.',

    date: '2026-07-09',
    dateModified: '2026-09-10',
    readTime: '10 min read',
    tags: ['Internship', 'Career Development', 'Work Experience', 'Business', 'University Admissions'],
    faqs: [
      {
        q: 'What is business work experience in Year 12?',
        a: 'Year 12 business work experience (age 16–17) typically involves a one- or two-week placement in a company, or a structured programme run by a large employer across several weeks in summer. Tasks range from shadowing across departments and completing an analytical project to attending team meetings and presenting findings. Many FTSE 100 companies run dedicated "Spring Insight" days and summer schemes specifically for Year 12 students, with application windows typically opening in September–November.',
      },
      {
        q: 'What year group should I start looking for business work experience?',
        a: 'The earlier the better. Year 10 (age 14–15) is the standard first entry point for formal schemes. Students who start in Year 12 (age 16–17) still have significant value to gain — particularly from large employer programmes designed specifically for that year group. The key difference is compounding: a Year 10 student who completes a placement and builds on it arrives at Year 12 applications with a developed professional story. A Year 12 student completing their first placement can still use it effectively in UCAS if they complete it in the autumn or spring term.',
      },
      {
        q: 'What large companies offer Year 12 business work experience?',
        a: 'Barclays, Goldman Sachs, KPMG, Deloitte, PwC, EY, McKinsey (Insight programme), BCG, and most major UK banks and professional services firms run Spring Insight or Summer Insight schemes specifically for Year 12. Applications typically open September–November for the following year. These programmes are competitive — often 10–20 applications per place — so a clear professional interest, a well-prepared application, and an assessment score demonstrating commercial aptitude all improve shortlisting odds.',
      },
      {
        q: 'Does business work experience help with UCAS applications?',
        a: 'Significantly. For competitive business, economics, finance, and law courses at Russell Group universities, work experience is treated as near-essential context. A personal statement that includes specific professional observations — what you noticed about how a team makes decisions, what a P&L statement actually measures — is structurally more persuasive than one that describes theoretical interest. The difference is between asserting interest and demonstrating it.',
      },
      {
        q: 'What should I do during business work experience to get the most from it?',
        a: 'Three things matter most: arrive with questions (specific questions for each person you shadow show curiosity; people remember interns who prepared), ask for a deliverable on day one — a report, a piece of analysis, anything with a deadline — and document what you learned each day rather than retrospectively. The most common student regret is not writing down observations in real time — the detail that makes a personal statement memorable fades quickly.',
      },
    ],
    cta: {
      heading: 'Strengthen your business work experience applications',
      body: 'Free 34-question adaptive assessment for students aged 14+. Get a personalised business readiness report — and something credible to put in every application.',
      label: 'Apply free — Business track',
      href: '/business',
    },
  },
  {
    slug: 'how-to-differentiate-yourself-at-15',
    title: 'Grades Are No Longer Enough: How Students Actually Differentiate Themselves at 15',
    shortTitle: 'How to Differentiate Yourself at 15',
    description:
      'Grades no longer differentiate competitive university applicants. Here is what actually separates strong applicants and why starting at 15 changes the outcome.',
    tldr: 'Grades no longer differentiate competitive university applicants — over 26% of A-level entries receive A or A*. The strongest differentiators for Russell Group courses are specific documented work experience, verified domain knowledge, and sustained personal projects with measurable outcomes. Students who start building this profile at 15 arrive at UCAS with two years of compounding evidence rather than two weeks.',
    date: '2026-09-08',
    dateModified: '2026-09-10',
    readTime: '11 min read',
    tags: ['Internship', 'Career Development', 'Work Experience', 'University Admissions'],
    faqs: [
      {
        q: 'Are grades still important for university applications?',
        a: 'Yes — grades are the floor, not the ceiling. A-level offers from competitive universities (typically AAA–A*AA) must be met or the place is withdrawn. The problem is not that grades stopped mattering; it is that they stopped differentiating. When 26–27% of all A-level entries receive A or A* grades, and the most oversubscribed courses at Russell Group universities receive 10–15 applications per place, grades become a filter rather than a selector. What selects between candidates who all meet the grade threshold is everything else.',
      },
      {
        q: 'Why is 15 the right age to start differentiating?',
        a: 'Year 10 and 11 (age 14–16) is the optimal window for two compounding reasons. First, it is the earliest point at which formal work experience placements are available and expected — most secondary schools run a Year 10 placement week, and many large employer schemes accept Year 10 students. Second, it is early enough to compound: a student who starts building a professional track record at 15 arrives at a UCAS application with two years of documented experience rather than two weeks. The same work done at 17 produces a weaker application because there is no time to build on it.',
      },
      {
        q: 'What actually differentiates a strong university applicant in 2026?',
        a: 'In order of impact, based on admissions data and employer research: (1) Specific, documented work experience in a relevant field — not generic, but evidenced with observations and outcomes; (2) Verified domain knowledge, particularly for STEM, law, and business programmes where aptitude assessment is increasingly common; (3) Sustained personal projects with a measurable output — a business, a portfolio, a publication, a competition result; (4) A professional network built through real placements, not LinkedIn connections; (5) Intellectual engagement beyond the syllabus — reading, competitions, online courses referenced with specific insight rather than title-dropping.',
      },
      {
        q: 'How much does work experience actually affect a personal statement?',
        a: 'Significantly — and the mechanism is structural, not impressionistic. Admissions readers at competitive universities assess personal statements for evidence of genuine engagement with a field. A student who describes specific professional observations (what they noticed about how a finance team makes budget decisions, what they learned about how a marketing campaign fails) is providing evidence. A student who describes theoretical interest is making an assertion. Admissions readers are trained to distinguish between the two, and at courses receiving thousands of applications, the ones that contain evidence get read twice.',
      },
    ],
    cta: {
      heading: 'Start building a profile that stands out.',
      body: 'Free 34-question adaptive assessment for students aged 14+. Get a verified readiness report across aptitude, domain knowledge, and workplace skills — the kind of evidence that strengthens every application.',
      label: 'Take the free assessment',
      href: '/apply',
    },
  },
  {
    slug: 'how-to-start-business-at-16',
    title: 'How to Start Business Life at 16: Platforms, Rates, and What Universities Think of It',
    shortTitle: 'How to Start Business Life at 16',
    description:
      'Can a 16-year-old run a business in the UK? Yes. Platforms, realistic earnings, and how early business experience strengthens university applications.',
    tldr: 'A 16-year-old in the UK can legally trade as a sole trader without incorporating. Accessible platforms include MyTutor, Tutorful, Etsy and Depop; earnings below the £12,570 personal allowance are tax-free. Running a real business — even part-time — is explicitly valued in Russell Group admissions for business, economics, and law programmes.',
    date: '2026-09-06',
    dateModified: '2026-09-10',
    readTime: '11 min read',
    tags: ['Internship', 'Career Development', 'Work Experience', 'Business'],
    faqs: [
      {
        q: 'Can a 16-year-old legally run a business in the UK?',
        a: 'Yes. There is no minimum age to start a business in the UK. A 16-year-old can register as a sole trader, open a business bank account with some providers, and earn income legally. However, under-18s cannot form a limited company as a director, cannot enter binding contracts without parental consent in certain situations, and earnings above the personal allowance (£12,570 for 2024/25) are subject to income tax. Most 16-year-old earners will stay well below the threshold. National Insurance contributions begin at £12,570 too, so most teenage freelancers owe nothing.',
      },
      {
        q: 'How much can a 16-year-old realistically earn from online tutoring?',
        a: 'On MyTutor, new tutors typically start at £18–22 per hour; experienced tutors with strong reviews reach £30–40 per hour. On Tutorful, rates are self-set — most student tutors price between £15–25 per hour. Tutoring 5 hours per week at £20 per hour generates approximately £400 per month, or £4,800 per year — meaningful income that stays well below the UK income tax threshold.',
      },
      {
        q: 'What platforms can a 16-year-old use to earn money online in the UK?',
        a: 'Tutoring: MyTutor (minimum age 18 to apply independently, but 16 with parental consent in some cases), Tutorful (16+), Superprof (16+). Freelancing: Fiverr (13+), PeoplePerHour (18+ — use with parental oversight), Upwork (18+). E-commerce: Etsy (18+ account, but parents can run the account on behalf of a minor), Depop (13+). Content: YouTube (13+), TikTok Creator Fund (18+). Most platforms have age-gating at 18 for payment processing — a parent can hold the account while the student does the work.',
      },
      {
        q: 'Does starting a business at 16 help university applications?',
        a: 'Significantly — particularly for business, economics, law, and entrepreneurship programmes. A personal statement that describes running a real business (managing clients, pricing services, handling feedback, tracking revenue) is categorically more persuasive than one describing theoretical interest. Russell Group admissions guides for competitive programmes explicitly value evidence of commercial initiative. The Young Enterprise Company Programme also provides a structured, school-endorsed version of this experience with formal recognition.',
      },
      {
        q: 'What is the Young Enterprise Company Programme?',
        a: 'Young Enterprise is a UK charity that runs the Company Programme in secondary schools — students form a real company, elect roles, raise share capital, produce and sell a product or service, and compete at regional and national levels. It is the most widely recognised school-age business programme in the UK, active in over 5,500 schools. Participation counts as documented entrepreneurial experience and is explicitly referenced in some Russell Group university admissions guidance as evidence of commercial initiative.',
      },
    ],
    cta: {
      heading: 'Ready to prove your business readiness?',
      body: 'Free 34-question adaptive assessment for students aged 14+. Get a personalised business readiness report — and something concrete to put in every university application.',
      label: 'Apply free — Business track',
      href: '/business',
    },
  },
  {
    slug: 'pisa-2025-global-education-crisis-what-parents-need-to-know',
    title: 'PISA 2025 Results: Global Education Is in Crisis — What Every Parent Needs to Know',
    shortTitle: 'PISA 2025 Results: What the Lowest Scores Mean',
    description: 'PISA 2025: the lowest maths, reading and science scores since 2000. What the results mean for UK and international families, and how to benchmark your child.',
    tldr: 'PISA 2025 recorded the lowest average OECD maths score since the programme began — 470 in maths, 474 in reading and 475 in science. The UK fell to 27th in maths and 13th in reading. Singapore, Japan and South Korea led all three domains. Post-pandemic recovery has stalled across most OECD countries.',
    date: '2026-09-10',
    dateModified: '2026-09-23',
    readTime: '14 min read',
    tags: ['PISA', 'Academic Benchmarking', 'Global Education', 'UK Education', 'Maths', 'Reading'],
    faqs: [
      { q: 'What is PISA and why does it matter?', a: 'PISA (Programme for International Student Assessment) tests 15-year-olds in 91 countries on maths, reading and science every three years. It is the world\'s largest standardised education benchmark and the most authoritative measure of how education systems compare globally.' },
      { q: 'How did UK students perform in PISA 2025?', a: 'The United Kingdom ranked in the top 10 globally in PISA 2025, making it one of only four OECD countries to improve its science score since 2022. However, UK students still saw declines in reading and mathematics, reflecting the global trend.' },
      { q: 'Why did maths and reading scores fall so much?', a: 'Researchers point to multiple factors: pandemic-related learning loss, increased digital distraction (28% of students say classmates disrupt science lessons with devices), and the rise of "hasty reading" — skimming content quickly without full comprehension. The hasty reading rate nearly doubled between 2018 and 2025.' },
      { q: 'How did Turkey, France, Spain and Saudi Arabia perform in PISA 2025?', a: 'PISA 2025 maths averages: Singapore 575, Japan 536, South Korea 524, UK 495, France 475, Spain 472, OECD average 472, Turkey 463, Saudi Arabia 394. Reading: Singapore 543, Japan 516, OECD average 476, Spain 488, France 479, Turkey 479, Saudi Arabia 404. Spain stands out with a reading score of 488 — well above the OECD average and higher than France. Turkey exceeded the OECD average in reading despite falling below it in maths. Saudi Arabia ranked significantly below average in both domains.' },
      { q: 'How can I find out if my child is on track internationally?', a: 'The most reliable method is a standardised adaptive assessment that benchmarks your child against a large national or international cohort. Look for one that reports a score on the mean-100, SD-15 scale used by PISA, GL Assessment, and CAT4 — this lets you compare results over time and across different tests. National school grades only show your child\'s position within their class; a standardised score shows their position in the wider distribution.' },
      { q: 'Does using AI for homework hurt my child\'s learning?', a: 'PISA 2025 found that students who use AI for specific tasks like summarising texts, drafting or research score around 20 points lower in science than peers who don\'t — equivalent to roughly one year of schooling. General AI use for learning purposes showed no negative effect when paired with AI literacy education.' },
    ],
    cta: {
      heading: 'Find out where your child stands — for free',
      body: 'Eduentry\'s adaptive assessment tests ages 6–17 across maths, English, verbal and non-verbal reasoning on the same international scale as PISA. Get a global percentile rank within an hour.',
      label: 'Start Free Assessment',
      href: 'https://eduentry.com',
    },
  },
  {
    slug: 'how-does-your-child-compare-globally',
    title: 'How Does Your Child Compare Globally? A Parent\'s Guide to International Academic Benchmarks',
    shortTitle: 'How Does Your Child Compare Globally?',
    description:
      'Selective schools think in global percentiles — not national grades. What the international data shows and what it means for your child\'s future.',
    tldr: 'The OECD average PISA maths score is 472. The UK national average is approximately 495–510 — above the OECD mean but approximately 65–80 points below Singapore (575) and 40 points below Japan (536). A difference of 40 PISA points equates to approximately one year of schooling.',

    date: '2026-07-02',
    dateModified: '2026-07-02',
    readTime: '10 min read',
    tags: ['International Benchmarks', 'PISA', 'Parent Guide', 'Standardised Testing', 'Child Development'],
    faqs: [
      {
        q: 'How can I find out where my child stands academically compared to students worldwide?',
        a: 'The most direct approach is a standardised assessment that produces a percentile score relative to a national or international cohort. PISA itself only tests 15-year-olds, but assessments aligned to the same mean-100, SD-15 scale — such as CAT4, CogAT, or adaptive benchmark platforms — give younger children a comparable global context. National school grades tell you where your child sits in their class or year group; a standardised score tells you where they sit in the broader distribution.',
      },
      {
        q: 'What is a "good" PISA score for my child\'s age?',
        a: 'PISA tests 15-year-olds specifically. The OECD average is 472 in Mathematics. A score above 500 puts a student above the OECD mean; above 550 places them in approximately the top 20% globally; above 600 is roughly top 5%. The UK national average sits at approximately 495–510, meaning a UK child scoring at their national average is already slightly above the OECD mean — but well behind top-performing countries like Singapore (575) and Japan (536).',
      },
      {
        q: 'Does my child\'s school ranking tell me how they compare globally?',
        a: 'School rankings are proxies, not measures. A child at a highly-ranked school in a well-resourced area can still be average on an internationally standardised test — because rankings reflect institutional resources, not individual achievement. The only reliable global comparison comes from a standardised assessment that uses the same measuring instrument across students regardless of school.',
      },
      {
        q: 'At what age should I start tracking my child\'s global academic position?',
        a: 'Meaningful benchmarking is possible from age 7–8 using cognitive assessments (CAT4, CogAT). The most policy-relevant window is age 10–16, when selective admissions decisions, scholarship applications, and GCSE choices are being made. Tracking global position from age 10 gives families enough time to intervene purposefully if needed — without the panic that comes from discovering a gap at 16.',
      },
      {
        q: 'How does the UK compare to other countries in global education rankings?',
        a: 'The UK performs above the OECD average in Reading and Science, and around or slightly above average in Mathematics. This sounds reassuring until you consider that the top-performing Asian education systems — Singapore, Hong Kong, South Korea, Japan — score 60–100 PISA points above the UK. In practical terms, a UK student at the national average in Maths is performing at roughly the same level as an average student in Japan or South Korea would score in their lowest quartile.',
      },
      {
        q: 'What is PISA and who runs it?',
        a: 'PISA (Programme for International Student Assessment) is a triennial assessment run by the OECD that tests 15-year-olds in Reading, Mathematics, and Science. It is the world\'s largest international education study — the 2022 round covered 690,000 students across 81 countries. PISA scores are reported on a scale centred at 500, with each 40-point difference equivalent to approximately one academic year of schooling.',
      },
      {
        q: 'Which country has the best education system in the world?',
        a: 'Singapore consistently ranks first in PISA Mathematics, with an average score of 575 — more than 100 points above the OECD mean. Japan, South Korea, Estonia, and Taiwan also consistently top the rankings across all three subjects. The highest-performing systems share common features: high teacher status, centralised curriculum quality, strong parental engagement, and consistent expectations across schools regardless of socio-economic area.',
      },
      {
        q: 'How do I compare my child to international standards at home?',
        a: 'Use a standardised assessment aligned to the same mean-100, SD-15 scale used by major international benchmarks (CAT4, CogAT, GL Assessment). This gives a percentile rank comparable across countries. Our free adaptive assessment covers verbal reasoning, numerical reasoning, and English — subjects directly tested by international assessments — and produces an instant standardised score and percentile ranking.',
      },
      {
        q: 'Why do Asian education systems consistently outperform Western countries?',
        a: 'PISA analysis identifies several contributing factors: higher instructional time in core subjects, more demanding curriculum expectations, stronger home learning support, higher cultural value placed on academic achievement, and more experienced and better-paid teachers. However, PISA 2022 also noted that wellbeing scores in top-performing East Asian countries are among the lowest — suggesting that academic performance can come at a cost to student mental health.',
      },
      {
        q: 'What is the average PISA score for the UK?',
        a: 'In PISA 2022, the UK scored approximately 489 in Mathematics, 494 in Reading, and 503 in Science — placing it above the OECD average of 472 in Maths. The UK ranks approximately 15th globally in Maths, 13th in Reading, and 12th in Science. While this is a strong performance relative to OECD peers, it is notably below Singapore (575), Japan (536), South Korea (527), and Estonia (510) in Mathematics.',
      },
    ],
    cta: {
      heading: 'Find out where your child actually stands',
      body: 'Eduentry\'s free adaptive assessment produces a standardised score and global percentile comparison — not a school grade. Understand your child\'s real position within an hour.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  {
    slug: 'nsw-opportunity-class-test-guide',
    title: 'NSW Opportunity Class Test: Complete Guide for Parents (2026)',
    shortTitle: 'NSW Opportunity Classes 2026: OC Test Guide',
    description: 'NSW Opportunity Classes are enriched Year 5–6 programs in public schools. Covers OC test format, score cutoffs, how places are ranked and how to prepare.',
    tldr: 'NSW Opportunity Classes run from Year 5 in public primary schools across NSW. The entry test is taken in Year 3 and covers two components: Thinking Skills and Reading. Offers are made on an ordered merit score combining both. Approximately 4,200 places are available annually across around 75 public schools.',
    date: '2026-09-11',
    dateModified: '2026-09-23',
    readTime: '11 min read',
    tags: ['NSW Education', 'OC Test', 'Selective Schools', 'Australia', 'Academic Assessment'],
    faqs: [
      {
        q: 'What is the NSW Opportunity Class Placement Test?',
        a: 'The Opportunity Class (OC) Placement Test is a selective assessment run by NSW Department of Education that determines entry into Opportunity Class programs — special academically enriched classes within regular primary schools for Years 5 and 6. Students sit the test in Year 3 (aged 8–9) for Year 5 entry.',
      },
      {
        q: 'What does the OC test assess?',
        a: 'The OC Placement Test has three components: Thinking Skills (abstract and spatial reasoning, pattern recognition), Reading (comprehension and vocabulary), and Mathematical Reasoning (applied maths and number sense). The test is designed to assess potential and learning ability rather than curriculum knowledge alone.',
      },
      {
        q: 'How is the OC test scored and what score do I need?',
        a: 'Each student receives a placement score based on their combined results across the three components. The Department of Education does not publish official cut-off scores as they vary by school and year. In general, high-demand schools in Sydney require scores in the top 5–10% of applicants. The test is norm-referenced, so your child\'s score is relative to all other applicants.',
      },
      {
        q: 'How is OC preparation different from 11+ preparation in the UK?',
        a: 'The two tests are closely related in structure. Both assess abstract reasoning, reading comprehension and mathematical reasoning — which is why adaptive assessment tools built on Item Response Theory methodology prepare students effectively for both. The main difference is timing: the OC test is sat in Year 3, whereas the UK 11+ is sat in Year 6. The earlier age means building foundational reasoning skills matters more than drilling test-specific formats.',
      },
      {
        q: 'How can I practise for the OC test?',
        a: 'The most effective preparation combines: adaptive reasoning practice that adjusts to your child\'s level, targeted reading comprehension with varied text types, and mathematical reasoning through word problems rather than rote arithmetic. Start 12–18 months before the test date for meaningful results. Focus on the weakest component first — use a benchmark assessment to identify gaps.',
      },
    ],
    cta: {
      heading: 'Benchmark your child\'s reasoning ability — free',
      body: 'Eduentry\'s adaptive assessment covers the same skills as the OC test — abstract reasoning, verbal reasoning and maths — for ages 6–17. Get a standardised score and percentile rank within an hour.',
      label: 'Start Free Assessment',
      href: 'https://eduentry.com',
    },
  },
  {
    slug: 'non-verbal-reasoning-11-plus-guide',
    title: 'Non-Verbal Reasoning for the 11+: Question Types, Techniques and Free Practice',
    shortTitle: 'Non-Verbal Reasoning 11+ Guide',
    description: 'Non-verbal reasoning for the 11+: question types (matrices, series, analogies, codes), techniques for each, common mistakes and free practice.',
    tldr: 'Non-verbal reasoning (NVR) in the 11+ tests logical thinking using shapes and patterns — independent of English language skill or curriculum knowledge. The main question types are figure matrices, series, analogies, codes, classification, and spatial rotation. NVR ability responds strongly to targeted practice: most children improve by 8–15 SAS points with 6–12 months of systematic preparation.',
    date: '2026-09-11',
    dateModified: '2026-09-11',
    readTime: '10 min read',
    tags: ['11 Plus', 'Non-Verbal Reasoning', 'Grammar Schools', 'UK Education', 'Academic Assessment'],
    faqs: [
      {
        q: 'What is non-verbal reasoning and why is it in the 11+?',
        a: 'Non-verbal reasoning (NVR) measures the ability to analyse visual information, recognise patterns, and solve problems using shapes and diagrams — without relying on language. It is included in the 11+ because it assesses underlying cognitive ability independently of English language proficiency or curriculum knowledge, making it a fairer measure of potential for children from diverse backgrounds.',
      },
      {
        q: 'What are the main question types in 11+ non-verbal reasoning?',
        a: 'The six main NVR question types are: figure matrices (complete a 2x2 or 3x3 grid), series (find the next shape in a sequence), analogies (shape A is to shape B as shape C is to ?), figure classification (find the odd one out), figure codes (decode a letter-shape system), and spatial rotation (identify a rotated or reflected shape). GL Assessment and CEM use slightly different mixes of these types.',
      },
      {
        q: 'How can I help my child improve at non-verbal reasoning?',
        a: 'The most effective approaches are: regular adaptive practice that adjusts to your child\'s level, deliberate focus on the specific question types they find hardest, and developing a systematic approach to each question type rather than guessing. Spatial reasoning can also be improved through everyday activities — puzzles, building games, origami and pattern-based games all build the underlying skills.',
      },
      {
        q: 'Is non-verbal reasoning something you can practise for, or is it innate?',
        a: 'NVR ability is partly innate but significantly trainable. Research consistently shows that children who practise NVR question types with systematic feedback improve substantially — typically by 8–15 standardised score points with dedicated preparation over 6–12 months. The key is adaptive practice (questions that adjust to the child\'s level) rather than working through fixed-difficulty papers.',
      },
      {
        q: 'What is a good non-verbal reasoning score for the 11+?',
        a: 'Most 11+ papers report NVR scores as standardised age scores (SAS) with a mean of 100 and standard deviation of 15. Grammar schools typically require SAS 111–120+ for competitive entry, with the most selective schools wanting 120+. A score of 100 is exactly average for age; 115 is approximately the 84th percentile; 130 is the 98th percentile.',
      },
      {
        q: 'How many questions are in the non-verbal reasoning 11+ paper?',
        a: 'GL Assessment NVR papers typically contain 80 questions to be completed in 45–50 minutes — approximately 33–37 seconds per question. CEM papers blend NVR with other reasoning types without separating them, so the number of explicitly NVR questions varies. Speed and accuracy are equally important: many children who understand the question types still drop marks due to time pressure.',
      },
      {
        q: 'Is non-verbal reasoning tested in both GL Assessment and CEM exams?',
        a: 'Yes — NVR is tested by both major exam boards, but in different formats. GL Assessment has a dedicated NVR paper with labelled question types. CEM blends figure-based reasoning questions into its Spatial Reasoning section without explicit labels, making preparation slightly harder because children cannot recognise the question type by name. Both respond to systematic practice on figure matrices, series, and analogies.',
      },
      {
        q: 'What everyday activities improve non-verbal reasoning?',
        a: 'Building games (LEGO, Meccano), jigsaw puzzles, chess, spatial video games, origami, and pattern-based crafts all develop the underlying spatial and pattern-recognition skills that NVR tests measure. These activities build visual-spatial working memory and the ability to mentally manipulate shapes — both directly relevant to figure rotation and paper-folding question types in the 11+ NVR paper.',
      },
      {
        q: 'Do children with dyslexia perform better in non-verbal reasoning than verbal reasoning?',
        a: 'Children with dyslexia often have stronger non-verbal and spatial reasoning scores than verbal reasoning scores, because NVR is language-independent. This is one reason grammar school entry tests include NVR — it gives children with language-based learning differences a route to demonstrate cognitive ability that isn\'t captured by English or verbal reasoning papers. A strong NVR score can offset a weaker verbal score in some admissions calculations.',
      },
      {
        q: 'How is 11+ non-verbal reasoning different from the non-verbal sections of IQ tests?',
        a: 'The 11+ NVR paper tests the same underlying skills as the non-verbal sections of IQ tests like the WISC-V Performance IQ or the CogAT Non-Verbal Battery — figure matrices, classification, analogy, and series completion. The key difference is format and timing: IQ tests are individually administered at the child\'s own pace with no strict time limit; the 11+ is a group test with severe time pressure. Children who do well on untimed IQ assessments may need specific timed practice to transfer that ability to the 11+ format.',
      },
    ],
    cta: {
      heading: 'Test your child\'s non-verbal reasoning — free',
      body: 'Eduentry\'s adaptive 11+ assessment includes non-verbal reasoning alongside verbal reasoning, maths and English. Get an instant standardised score showing exactly where your child stands.',
      label: 'Start Free 11+ Assessment',
      href: 'https://eduentry.com',
    },
  },
  {
    slug: 'free-11-plus-practice-test-online',
    title: 'Free 11+ Practice Test Online: Adaptive, Scored and Instant',
    shortTitle: 'Free 11+ Practice Test Online',
    description: 'Free adaptive 11+ practice test online in English, Maths, Verbal and Non-Verbal Reasoning, with an instant SAS showing grammar school readiness.',
    tldr: 'A free adaptive 11+ practice test covering all four subjects (English, Maths, Verbal Reasoning, Non-Verbal Reasoning) produces a Standardised Age Score (SAS) on the same mean-100, SD-15 scale as GL Assessment. Most grammar school entry thresholds are SAS 111–121+. Adaptive tests adjust question difficulty in real time, measuring ability more accurately than fixed-difficulty practice papers.',
    date: '2026-09-11',
    dateModified: '2026-09-11',
    readTime: '8 min read',
    tags: ['11 Plus', 'Practice Test', 'Grammar Schools', 'Free Assessment', 'UK Education'],
    faqs: [
      {
        q: 'Is there a genuinely free 11+ practice test online?',
        a: 'Yes — Eduentry offers a full adaptive 11+ practice test covering all four subjects (English, Maths, Verbal Reasoning and Non-Verbal Reasoning) completely free. The test produces a standardised age score (SAS) on the same scale as GL Assessment, so you can compare results directly to grammar school entry benchmarks. No payment, no trial period.',
      },
      {
        q: 'How is an adaptive 11+ test different from a standard practice paper?',
        a: 'A standard practice paper gives every child the same questions regardless of their ability level. An adaptive test adjusts question difficulty in real time based on each answer — harder questions when the child is doing well, easier ones when they struggle. This means the test is measuring ability more accurately at every level, rather than being too easy for strong students or too discouraging for those who need support.',
      },
      {
        q: 'What score does my child need to pass the 11+?',
        a: 'There is no single pass mark — it varies by area and school. Most grammar schools require a Standardised Age Score (SAS) of 111–121+. Highly selective schools in areas like Buckinghamshire or Kent often require 118+. Your child\'s SAS from the Eduentry practice test is on the same scale, so you can compare directly to the published benchmarks for your target school.',
      },
      {
        q: 'How long does the Eduentry 11+ practice test take?',
        a: 'The full assessment covers 60 questions across 4 subjects and is typically completed within an hour. Progress is automatically saved, so it can be paused and resumed at any time. Most children complete it in one sitting.',
      },
      {
        q: 'How often should my child take the practice test?',
        a: 'Once every 4–6 weeks during preparation is a good cadence. This gives enough time for meaningful improvement between tests, while tracking progress consistently. Avoid over-testing — daily practice on individual subjects is more effective than repeatedly sitting the full test.',
      },
      {
        q: 'What subjects does the 11+ practice test cover?',
        a: 'A full 11+ practice test covers four subjects: English (reading comprehension, vocabulary, grammar), Mathematics (arithmetic, fractions, algebra, geometry), Verbal Reasoning (word analogies, sequences, codes), and Non-Verbal Reasoning (figure matrices, series, analogies). The Eduentry adaptive test covers all four subjects and produces a separate standardised score for each, showing exactly where your child needs the most work.',
      },
      {
        q: 'What is a standardised age score (SAS) and is it the same as the real 11+ score?',
        a: 'A Standardised Age Score (SAS) is reported on a scale with mean 100 and standard deviation 15. It is exactly the same scale used by GL Assessment on the real 11+ exam. A practice test SAS of 115 is directly comparable to a real exam SAS of 115. This means you can use the practice test result to benchmark your child against the actual grammar school entry thresholds for your area.',
      },
      {
        q: 'Can a free online 11+ test accurately measure my child\'s ability?',
        a: 'An adaptive online test that uses Item Response Theory (IRT) to adjust question difficulty is genuinely accurate — it is the same methodology used by professional cognitive assessments. Fixed-difficulty practice papers are less accurate because they do not distinguish between a child who finds them too easy and one who finds them appropriately challenging. An adaptive test produces a more precise ability estimate across the full ability range.',
      },
      {
        q: 'What is the best free 11+ preparation resource?',
        a: 'The most effective free resources combine a standardised benchmark test (to identify gaps), adaptive online practice (which adjusts to your child\'s level), and subject-specific workbooks. A single one-off practice paper tells you a raw score but not what it means; an adaptive benchmark test gives a standardised score directly comparable to grammar school thresholds, which is far more actionable for guiding preparation.',
      },
      {
        q: 'Does my child need to create an account to take the free 11+ test?',
        a: 'On Eduentry, children can sample the test format without registering. A free account is required to complete the full assessment and receive the standardised score report — registration takes under two minutes. There is no payment required for the initial assessment. The account also saves progress so the test can be paused and resumed at any time.',
      },
    ],
    cta: {
      heading: 'Start your child\'s free 11+ practice test',
      body: 'Adaptive questions across all four subjects. Instant standardised score. No account needed to see a sample — register free to get your child\'s full results.',
      label: 'Start free 11+ test',
      href: '/auth/register',
    },
  },
  {
    slug: '11-plus-maths-guide',
    title: '11+ Maths: Topics, Question Types and How to Practise',
    shortTitle: '11+ Maths 2026: Topics and GL vs CEM Differences',
    description: '11+ Maths guide: every topic tested, question types for GL Assessment and CEM, common mistakes and how to practise for a top standardised score.',
    tldr: 'The 11+ maths paper tests KS2 curriculum content at higher speed and complexity than standard school work. Key topics include number and arithmetic, fractions, decimals, percentages, ratio, algebra, geometry, and data handling. Most successful candidates are working approximately one year ahead of their school year group in maths, with rapid mental arithmetic recall essential under time pressure.',
    date: '2026-09-11',
    dateModified: '2026-09-23',
    readTime: '10 min read',
    tags: ['11 Plus', 'Mathematics', 'Grammar Schools', 'UK Education', 'Academic Assessment'],
    faqs: [
      {
        q: 'What maths topics are in the 11+?',
        a: 'The 11+ maths paper covers: number and arithmetic (place value, times tables, factors, primes), fractions, decimals and percentages, ratio and proportion, algebra and sequences, geometry (area, perimeter, angles, properties of shapes), measurement and units, data handling (averages, charts, tables), and word problems. GL Assessment tends to include more arithmetic and number work; CEM integrates maths into a mental arithmetic-style paper.',
      },
      {
        q: 'What level of maths is needed for the 11+?',
        a: 'The 11+ maths paper tests KS2 curriculum content (Years 3–6) but at higher difficulty. Questions go beyond standard Year 6 curriculum in speed and complexity — children who have only covered the basic curriculum will struggle with the harder questions. Most successful candidates are working approximately one year ahead of their school year group in maths.',
      },
      {
        q: 'How is 11+ maths different from school maths?',
        a: 'Speed is the key difference. In school, children have time to work through problems carefully. In the 11+, they need to answer questions in 60–90 seconds on average under timed conditions. This requires fluency with mental maths, quick recall of times tables and number facts, and efficient problem-solving strategies — not just the ability to get the right answer eventually.',
      },
      {
        q: 'What are the most common mistakes in 11+ maths?',
        a: 'The four most common mistakes are: (1) not reading the question fully — misses the unit required or the specific calculation asked; (2) arithmetic errors under pressure — particularly with multiplication and fractions; (3) running out of time — spending too long on hard questions instead of moving on; (4) not checking answers — easy marks lost to simple errors that a 10-second check would catch.',
      },
      {
        q: 'How long should my child practise maths for the 11+?',
        a: 'Daily practice of 20–30 minutes is more effective than longer weekend sessions. Focus on the weakest topic for 2-3 weeks before moving on. Mental arithmetic drills (times tables, factor pairs, percentage calculations) should be done little and often — 5 minutes daily compounds over months into significant fluency gains.',
      },
    ],
    cta: {
      heading: 'See your child\'s 11+ Maths score — free',
      body: 'Eduentry\'s adaptive assessment includes a full 15-question Maths section with instant standardised scoring. Find out exactly where your child stands before the real test.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  {
    slug: 'understanding-child-strengths-weaknesses-high-school',
    contentSlug: 'understanding-child-strengths-weaknesses-high-school',
    title: 'Understanding Your Child\'s Strengths and Weaknesses Before High School',
    shortTitle: 'Child Strengths & Weaknesses: High School Preparation Guide',
    description:
      'Identify your child\'s cognitive profile before secondary school — verbal, numerical, and spatial abilities — to guide preparation and subject choices.',
    tldr: 'School grades measure performance relative to classmates — they don\'t reveal a child\'s underlying cognitive profile. Identifying strengths and weaknesses across verbal reasoning, numerical aptitude, working memory, and spatial ability before high school gives parents and teachers a targeted roadmap, not a vague report card.',
    date: '2026-09-27',
    dateModified: '2026-09-27',
    readTime: '12 min read',
    tags: ['Academic Assessment', 'Child Development', 'High School Preparation', 'Cognitive Profile'],
    faqs: [
      {
        q: 'How do I identify my child\'s learning strengths before secondary school?',
        a: 'The most reliable approach is a standardised cognitive assessment that measures multiple domains separately — verbal reasoning, numerical reasoning, and spatial ability. School grades indicate performance relative to classmates but not underlying ability profile. A standardised assessment benchmarks your child against a national norm, revealing which cognitive domains are genuinely strong and which are average or below, giving you an actionable roadmap rather than a general impression.',
      },
      {
        q: 'What cognitive skills predict success at secondary school?',
        a: 'Research consistently identifies four cognitive domains that predict secondary school outcomes: verbal reasoning (the ability to process and use language logically), numerical aptitude (pattern recognition and mathematical reasoning), working memory (the capacity to hold and manipulate information while thinking), and spatial reasoning (the ability to mentally manipulate shapes and visual information). Strong verbal and numerical reasoning are the most powerful predictors of GCSE grades; working memory predicts success under exam conditions.',
      },
      {
        q: 'What is the difference between school performance and cognitive ability?',
        a: 'School performance reflects what a child has been taught and whether they can reproduce it under standard classroom conditions. Cognitive ability reflects underlying reasoning capacity — the "hardware" that determines how quickly a child can learn new concepts. A child can perform below their ability level due to poor teaching, lack of motivation, anxiety, or an undiagnosed learning difference. A child can also perform above their apparent cognitive level through exceptional effort. Separating the two requires a standardised cognitive assessment.',
      },
      {
        q: 'How does adaptive assessment work for children?',
        a: 'Adaptive assessment uses Item Response Theory (IRT) to adjust question difficulty in real time based on each answer. When a child answers correctly, the next question is slightly harder; when they answer incorrectly, the next question is slightly easier. This process quickly homes in on the child\'s actual ability level with far fewer questions than a fixed-difficulty test requires. The result is a more accurate ability estimate, a shorter test duration, and a less frustrating experience for both high-ability and lower-ability children.',
      },
      {
        q: 'At what age should I assess my child\'s cognitive strengths?',
        a: 'Meaningful cognitive profiling is possible from age 7–8, but the most actionable window for secondary school preparation is age 9–12. This gives families enough time to act on the findings before GCSEs and secondary school subject choices. An assessment at age 10–11 (Year 5–6) informs 11+ preparation and secondary school choice; an assessment at 12–13 (Year 7–8) guides GCSE option choices and identifies subjects where targeted tutoring would have the highest impact.',
      },
      {
        q: 'Can a child have a strong academic record but hidden weaknesses?',
        a: 'Yes — this is a common finding in standardised assessments. A child who performs well in all school subjects may have an uneven cognitive profile beneath the surface. For example, a child with very strong verbal reasoning can compensate for weaker numerical reasoning in school, where most tasks have a language component. This hidden weakness only becomes apparent when the curriculum becomes more abstract and demanding — typically at GCSE or A-level. Early identification allows targeted support before the gap becomes a problem.',
      },
      {
        q: 'What is working memory and why does it matter for school?',
        a: 'Working memory is the ability to hold information in mind while simultaneously using it — for example, holding the beginning of a maths problem in memory while calculating the end. It is closely linked to reading comprehension, writing quality, and mental arithmetic. Children with weaker working memory often struggle to follow multi-step instructions, lose track of their reasoning midway through a problem, or perform inconsistently despite understanding the material. Working memory can be supported through structured teaching strategies even if its capacity itself is relatively fixed.',
      },
      {
        q: 'How does knowing my child\'s cognitive profile help with subject choice at GCSE?',
        a: 'GCSE subject choices lock in a child\'s academic direction at age 13–14. A cognitive profile helps parents and children choose subjects that align with genuine strengths — maximising the probability of achieving top grades — while ensuring core subjects in weaker domains receive targeted support. A child with high verbal reasoning and average numerical reasoning might thrive in humanities GCSEs while needing specific maths support. Making this decision based on cognitive data is more reliable than relying on school grades alone.',
      },
      {
        q: 'What is the difference between verbal reasoning and literacy?',
        a: 'Verbal reasoning is the ability to use logic and pattern recognition applied to language — solving word analogies, identifying codes, and reasoning about word relationships. Literacy is the ability to read, write, and communicate effectively. Both involve language, but they draw on different cognitive skills. A fluent reader can have weak verbal reasoning (understanding text without reasoning logically about word relationships), and a strong verbal reasoner can have poor spelling or writing mechanics. The 11+ tests verbal reasoning, not literacy.',
      },
      {
        q: 'How do I share my child\'s cognitive assessment results with their school?',
        a: 'Take the full standardised report to the first parents\' evening after the assessment. Present the data alongside your child\'s recent school grades and ask the teacher to help interpret discrepancies — where the cognitive score is significantly higher than school performance, there may be motivational, environmental, or specific learning factors worth investigating. Schools increasingly use standardised data (CAT4 in UK schools) for this purpose; an external assessment report on the same scale is a directly comparable and credible evidence base.',
      },
    ],
  },
  {
    slug: 'pisa-2025-work-experience-student-readiness',
    title: 'PISA 2025 Says Grades Are Falling — Here\'s Why Work Experience Is the Missing Answer',
    shortTitle: 'PISA 2025 Scores: Why Work Experience Matters',
    description: 'PISA 2025: lowest academic scores ever. Countries with strong work-based learning outperform — what OECD data shows about early work experience.',
    tldr: 'PISA 2025 assessed 690,000 15-year-olds across 91 countries. Countries with stronger work-based learning integration in secondary education (Germany, Switzerland, Austria) consistently score above OECD averages. PISA data shows a positive correlation between structured professional experience during secondary school and science and maths performance.',

    date: '2026-09-11',
    dateModified: '2026-09-23',
    readTime: '13 min read',
    tags: ['Work Experience', 'Internship', 'Student Skills', 'Future of Education', 'Career Development'],
    faqs: [
      {
        q: 'What did PISA 2025 find about student performance?',
        a: 'PISA 2025 tested over 760,000 students across 91 countries and found that OECD average scores in reading, maths and science are at their lowest levels ever recorded. Reading fell 28 points and maths fell 22 points between 2015 and 2025 across OECD countries. The report also found that students who use AI for schoolwork (summarising, researching) score around 20 points lower than those who do not — equivalent to one year of schooling.',
      },
      {
        q: 'Why is early work experience important for students?',
        a: 'Early work experience gives students the skills that PISA tests but schools increasingly struggle to teach: critical thinking, problem-solving, communication and real-world decision-making. Research consistently shows that students who gain professional exposure before the age of 16 develop stronger motivation, higher self-efficacy and better university and career outcomes than peers who start later. The skills compound — the earlier the exposure, the more time students have to build on it.',
      },
      {
        q: 'At what age should students start work experience?',
        a: 'Most research points to 14–16 as the optimal window for a first structured work experience or internship. This age is late enough for students to engage meaningfully with professional tasks, and early enough to leave time to reflect, repeat and build on the experience before university applications. Starting at 17 or 18 is still valuable, but gives much less time for the experience to compound into a clear professional narrative.',
      },
      {
        q: 'How can students do an internship while still at school?',
        a: 'Several routes are available to students still in secondary school. Direct applications to small and medium-sized businesses often yield one- or two-week summer placements. Large employers — particularly FTSE 100 companies in finance, consulting, and technology — run Year 10 and Year 12 insight programmes with structured tasks and mentoring. Virtual work experience through platforms like Springpod or Forage offers flexible, employer-led programmes that can be completed remotely around the school timetable. Internship readiness assessments also help students identify the right track and present credible aptitude evidence before applying.',
      },
    ],
    cta: {
      heading: 'Is your student ready for work experience?',
      body: 'Eduentry\'s free internship readiness assessment takes 25 minutes and gives students a personalised report — skills breakdown, readiness score, and matched opportunities.',
      label: 'Start internship assessment',
      href: 'https://eduentry.ai/en',
    },
  },
  {
    slug: '65-jobs-ai-cannot-automate',
    contentSlug: '65-jobs-ai-cannot-automate',
    title: '65 Jobs AI and Robots Cannot Automate — What Every Parent Should Know',
    shortTitle: '65 Jobs AI Cannot Automate',
    description: 'The WEF says 40% of jobs face AI disruption. Here are 65 professions with 0% automation probability and what they mean for your child\'s future.',
    tldr: 'Based on US Bureau of Labor Statistics employment data and automation probability scoring, 65 professions carry a 0.0% probability of automation. They share four traits AI cannot replicate: emotional intelligence, the ability to read a room, creative work, and high day-to-day task variability. Healthcare dominates the list, with nurse practitioners projected to grow 40% by 2034.',
    date: '2026-09-28',
    dateModified: '2026-09-28',
    readTime: '11 min read',
    tags: ['Future of Work', 'Career Planning', 'AI and Education', 'Future-Proof Careers', 'Child Development'],
    faqs: [
      {
        q: 'Which jobs are completely safe from AI automation?',
        a: 'According to US Bureau of Labor Statistics data and automation probability analysis, 65 professions score 0.0% probability of automation. These span healthcare (the largest group), education, creative and personal services, engineering and design, public safety, and management. What they share is reliance on emotional intelligence, physical judgment, creative decision-making, or human relationships that AI cannot replicate.',
      },
      {
        q: 'Is healthcare really safe from AI?',
        a: 'Healthcare is the single largest category of AI-resistant jobs. While AI assists with diagnostics, imaging analysis, and administrative tasks, the core of clinical practice — building trust with a patient, making nuanced judgement calls under pressure, interpreting ambiguous symptoms in a whole-person context, and the physical reality of hands-on care — remains irreplaceable by AI. Nurse practitioners are projected to grow 40% by 2034 and earn a median wage of $129,210.',
      },
      {
        q: 'Should I steer my child away from technology careers because of AI?',
        a: 'Not at all — in fact, the opposite is often true. AI engineers, biomedical engineers, and data scientists working alongside AI are among the fastest-growing and highest-paid careers. The risk is not in technology careers but in routine, predictable cognitive tasks across any sector — data entry, basic analysis, template-based writing. The engineers, designers, and scientists who shape what AI does are among the safest workers of all.',
      },
      {
        q: 'What school subjects should my child focus on for an AI-proof career?',
        a: 'The subjects that underpin AI-resistant careers are broader than many parents expect. Biology, chemistry, and psychology are gateways to the entire healthcare category. Art and design feed into interior design, set design, and architecture. Physical education underpins sports medicine and fitness careers. Maths and physics open engineering routes. The common thread is that subjects requiring genuine understanding — rather than pattern recognition or information retrieval — produce the skills AI cannot easily replicate.',
      },
    ],
    cta: {
      heading: 'How future-ready is your child?',
      body: 'Eduentry\'s free adaptive assessment benchmarks your child\'s verbal reasoning, numeracy, and problem-solving skills against peers internationally — and shows you exactly where their strengths lie for the careers that matter.',
      label: 'Start free assessment',
      href: '/#academic',
    },
  },
  {
    slug: 'oecd-teenage-work-experience-career-outcomes',
    title: 'OECD Research: The Hidden Power of Teenage Work Experience on Career Outcomes',
    shortTitle: 'Teenage Work Experience Benefits: What OECD Research Shows',
    description: 'Teenagers with work experience before 16 earn 5–10% more as adults (OECD, 47 studies). What skills it builds, who misses out, and what parents can do now.',
    tldr: '40 out of 47 longitudinal studies reviewed by the OECD showed better adult employment outcomes for students who had school-based work experience. Those with early work experience earn 5–10% more as adults. Yet around 50% of teenagers in Spain, Italy and Brazil have no work experience by age 15 — a gap driven more by family connections than by ability.',
    date: '2026-09-30',
    dateModified: '2026-10-03',
    readTime: '10 min read',
    tags: ['Work Experience', 'Internship', 'Career Development', 'OECD Research', 'Student Skills'],
    faqs: [
      {
        q: 'What does the OECD research say about teenage work experience?',
        a: '40 out of 47 longitudinal studies reviewed by the OECD found that students who participated in school-based work experience had better adult employment outcomes than those who did not. The same research shows a 5–10% earnings premium for those with early work experience — a gap that compounds over a career.',
      },
      {
        q: 'How many teenagers lack work experience before age 15?',
        a: 'The OECD found significant geographic variation. Around 50% of teenagers in Spain, Italy, and Brazil have no work experience by age 15. In Australia, Bulgaria, Lithuania, Poland, Serbia, and the Slovak Republic, roughly 25% lack any experience. Access is strongly correlated with family connections rather than individual ability or ambition.',
      },
      {
        q: 'Is there a gender gap in teenage work experience?',
        a: 'Yes. The OECD found that girls are significantly less likely than boys to engage in work experience. This gap is particularly notable because girls who do secure early experience show comparable or stronger outcomes — suggesting the barrier is access, not aptitude.',
      },
      {
        q: 'How can my child get work experience without family connections?',
        a: 'Schools and structured programmes close the access gap. Eduentry\'s free internship readiness assessment helps students identify their strongest career track, produces a personalised report they can share with employers, and gives them an objective credential that substitutes for the CV gaps that come from lacking connections.',
      },
      {
        q: 'What age should a teenager start work experience?',
        a: 'OECD data shows the strongest effects for students who begin structured work experience between ages 14 and 16. Earlier exposure — even a single week of meaningful work — is enough to shift career clarity and build professional skills that persist into adulthood.',
      },
      {
        q: 'What skills does work experience develop in teenagers?',
        a: 'According to OECD research, school-based work experience develops technical skills in real context, professional communication, teamwork under pressure, and career direction clarity — competencies that formal education rarely delivers. Students also gain CV evidence that employers value over self-reported qualities.',
      },
      {
        q: 'Does work experience help teenagers get into university?',
        a: 'Yes. Work experience strengthens university applications by demonstrating initiative, real-world skill, and career direction — qualities admissions teams at competitive universities actively look for beyond grades. It also helps students choose courses better aligned with genuine interests, reducing the chance of switching programmes later.',
      },
    ],
    cta: {
      heading: 'Is your child ready for work experience?',
      body: 'Eduentry\'s free internship readiness assessment takes 20 minutes and tells your child exactly where they stand — aptitude, domain knowledge, and professional skills — with a personalised report they can use in applications.',
      label: 'Start free assessment',
      href: 'https://eduentry.ai/en',
    },
  },
  {
    slug: 'oecd-teenage-part-time-work-benefits',
    title: 'Part-Time Jobs for Teenagers: The OECD-Backed Benefits and How to Maximise Them',
    shortTitle: 'Part-Time Jobs for Teenagers: Benefits Backed by OECD',
    description: 'OECD research: part-time work during school builds financial literacy and career confidence — with students who work moderately earning more as adults.',
    tldr: 'OECD research on teenage part-time working shows students who work up to around 15 hours per week develop stronger professional skills, higher career confidence, and greater financial literacy than those with no work experience. The key is supervision, career-relevance, and staying within productive hours ranges — all factors schools and parents can influence.',
    date: '2026-10-01',
    dateModified: '2026-10-03',
    readTime: '9 min read',
    tags: ['Part-Time Work', 'Teenager Jobs', 'Career Development', 'OECD Research', 'Student Skills'],
    faqs: [
      {
        q: 'What are the benefits of part-time work for teenagers?',
        a: 'OECD research identifies five core benefits: financial literacy from managing real money, career clarity before university choices, professional skills such as communication and punctuality, CV credibility through evidence employers trust, and confidence from functioning in adult professional environments. Students who work part-time during school consistently show stronger employment outcomes as adults.',
      },
      {
        q: 'How many hours should a teenager work per week?',
        a: 'OECD research points to around 1–15 hours per week as the productive range during school term. Students working in this range often show comparable or slightly better academic performance than non-working peers, partly due to improved time management and motivation. Consistently working 20 or more hours per week shows negative effects on grades and wellbeing.',
      },
      {
        q: 'Does part-time work affect a teenager\'s grades?',
        a: 'Moderate part-time work (up to ~15 hours per week) does not harm grades and in many studies correlates with slightly better academic engagement. Students who work are often more organised and motivated. The negative effects emerge at high hours (20+/week) or when work schedules conflict directly with school obligations.',
      },
      {
        q: 'What are the best part-time jobs for teenagers in terms of career development?',
        a: 'Jobs that are career-adjacent — related to a student\'s area of interest — show stronger development outcomes than unrelated service work. Supervised roles with clear responsibilities produce better skill development than casual or unstructured positions. Customer-facing roles build communication skills most effectively.',
      },
      {
        q: 'At what age should a teenager start part-time work?',
        a: 'OECD data shows that students who begin structured part-time work at 15–17 develop professional skills that persist into adulthood. The key is not age but structure: work that is supervised, career-relevant, and balanced with school commitments produces the strongest outcomes regardless of exact starting age.',
      },
      {
        q: 'Does part-time work help teenagers get into university?',
        a: 'Yes. Part-time work strengthens university applications by demonstrating responsibility, time management, and real-world competence — qualities competitive universities look for alongside academic results. It also helps students make more informed course choices, reducing the risk of switching programmes after enrolment.',
      },
      {
        q: 'How can parents help their teenager get the most from part-time work?',
        a: 'The most important factors are choosing career-relevant work when possible, maintaining a weekly hours limit during term time, ensuring work is supervised by a professional mentor, and using Eduentry\'s free internship readiness assessment to identify which career tracks best match your child\'s strengths before they commit to any specific role.',
      },
    ],
    cta: {
      heading: 'Which career track suits your child best?',
      body: 'Before choosing a part-time job, Eduentry\'s free assessment identifies your child\'s aptitude, domain knowledge, and professional skills — so they can aim for work that builds the right foundations, not just fill a Saturday shift.',
      label: 'Start free assessment',
      href: 'https://eduentry.ai/en',
    },
  },
  {
    slug: 'discover-school-age-childs-hidden-strengths',
    title: "Discover Your School-Age Child's Hidden Strengths and Development Areas: A Modern Parent's Guide",
    shortTitle: "Discover Your Child's Hidden Strengths: Parent's Guide",
    description:
      "School reports show grades, not potential. How adaptive assessment reveals strengths and gaps in reasoning, maths and English for ages 6–17.",
    tldr: "Eduentry's adaptive assessment uses AI to measure the four cognitive domains that predict school success and career outcomes: verbal reasoning, non-verbal reasoning, mathematical skills, and English proficiency. The system adjusts in real time to every answer, mapping a child's true ceiling and development areas without exam anxiety.",
    date: '2026-09-30',
    dateModified: '2026-09-30',
    readTime: '8 min read',
    tags: ['Academic Assessment', 'Child Development', 'Parent Guide', 'Cognitive Profile', 'Verbal Reasoning', 'Non-Verbal Reasoning'],
    faqs: [
      {
        q: "Why aren't school grades enough to understand my child's potential?",
        a: "School grades measure performance relative to classmates within a specific school, syllabus, and teacher — not the cognitive profile beneath. They cannot tell you whether a child earning a B is working at their ceiling or far below it, whether a strong reader has weak spatial reasoning that will surface in GCSE sciences, or whether a child struggling with written work has outstanding non-verbal reasoning that no teacher has yet identified. An adaptive cognitive assessment provides a class-independent measurement — where a child actually stands, and where focused investment will produce the greatest return.",
      },
      {
        q: "What is non-verbal reasoning and why does it matter?",
        a: "Non-verbal reasoning is the ability to identify patterns, relationships, and structures in shapes, diagrams, and visual sequences — without relying on language or prior knowledge. It measures fluid intelligence: the capacity to reason about genuinely new problems. Research consistently identifies it as the strongest predictor of success in STEM subjects, computing, engineering, and design. It is also the ability least likely to be identified through standard school work — a child with high non-verbal reasoning may never receive feedback reflecting this strength unless an adaptive assessment surfaces it.",
      },
      {
        q: "How does adaptive testing differ from a regular school test?",
        a: "A conventional test gives every child the same questions at the same difficulty, meaning many questions are either too easy or too hard for any given child. An adaptive test adjusts in real time: when a child answers correctly, the next question is harder; when they struggle, it recalibrates. The result is a measurement of a child's true performance level — not their performance on questions designed for a class average. It is faster, more accurate, and far less anxiety-inducing.",
      },
      {
        q: "At what age should I have my child assessed?",
        a: "Eduentry's assessment is designed for ages 6–17. The optimal moment is any time a parent wants concrete data — but the window before a major educational transition (primary to secondary, secondary to sixth form) is particularly valuable. Early assessment means early visibility: a weakness identified at age 8 rather than 13 leaves five more years for targeted support to compound.",
      },
      {
        q: "What can I do with the results?",
        a: "The report gives a standardised score for each of the four domains (calibrated to the same PISA 100-point scale) plus a composite score. Practically: strong verbal reasoning → invest in language-rich activities. High non-verbal reasoning → explore coding, robotics, or design. Mathematical skill below the norm → find targeted support before it compounds in secondary school. Each domain score is a decision-making input, not just a number.",
      },
    ],
    cta: {
      heading: "See your child's cognitive profile — free",
      body: "Adaptive assessment for ages 6–17. Verbal reasoning, non-verbal reasoning, maths, and English measured against international benchmarks — no registration required.",
      label: 'Start free assessment',
      href: '/#academic',
    },
  },
  {
    slug: 'discover-child-strengths-free-academic-test',
    title: "Free Academic Test for Children: Discover Your Child's Strengths and Weaknesses",
    shortTitle: "Free Academic Test: Discover Your Child's Strengths",
    description: "Grades don't show your child's true potential. Our free adaptive test measures verbal, numerical and spatial reasoning within an hour, with a report.",
    tldr: "A free adaptive test measuring verbal reasoning, numerical reasoning, and visual-spatial thinking independently — giving parents an international-percentile report within an hour. Built on Computer Adaptive Testing (CAT) and Item Response Theory, the same methodology behind CAT4 and NWEA MAP.",
    date: '2026-10-01',
    dateModified: '2026-10-01',
    readTime: '10 min read',
    tags: ['Free Academic Test', 'Child Strengths', 'Child Weaknesses', 'Cognitive Assessment', 'Adaptive Test', 'Parent Guide', 'CAT4', 'Child Development'],
    faqs: [
      {
        q: "What are my child's academic strengths and weaknesses?",
        a: "Academic strengths and weaknesses are best identified through a standardised cognitive assessment, not school grades alone. A free adaptive test measures verbal reasoning (language comprehension, analogies), numerical reasoning (pattern recognition, mathematical logic), and visual-spatial thinking (shape analysis, mental rotation) independently — producing a percentile score for each domain. This shows precisely where your child is strong, where they need support, and how they compare to age-matched peers internationally.",
      },
      {
        q: "How long does the free academic test take?",
        a: "Within an hour. The adaptive format means every question adjusts to the previous answer, reaching the same measurement accuracy as an 80-question test in far fewer questions.",
      },
      {
        q: "What age range is it designed for?",
        a: "The assessment is designed for children aged 6–16.",
      },
      {
        q: "When do results appear?",
        a: "Immediately after the test completes. The full report — including percentile ranks for each cognitive domain — is available straight away with no waiting period.",
      },
      {
        q: "How is this different from school grades?",
        a: "Grades measure past performance within a specific school, teacher, and curriculum — not the cognitive potential underneath. This test measures the underlying thinking skills that drive performance in any subject, independently of curriculum. A child can rank in the top 10% of their class and still have untapped potential that grades never surfaced.",
      },
      {
        q: "What is adaptive testing and how does it differ from a regular test?",
        a: "In a standard test, every child sees the same questions at the same difficulty. In a Computer Adaptive Test (CAT), every question is selected based on the previous answer: correct answer → harder question; struggle → easier question. The system triangulates the child's true ability level precisely in 25–35 questions. This is the same methodology behind CAT4, NWEA MAP, and the digital SAT.",
      },
      {
        q: "Is the test scientifically valid?",
        a: "Yes. Every question is calibrated using Item Response Theory (IRT), meaning each item's difficulty, discrimination, and guessing parameters are statistically known. Scores are converted to percentile ranks benchmarked against international norms aligned with CAT4, NWEA MAP, PISA, and Cogat scales.",
      },
      {
        q: "Can a free test show whether my child is gifted?",
        a: "Yes. An adaptive cognitive assessment measures the three domains most strongly associated with giftedness: verbal reasoning, numerical reasoning, and visual-spatial thinking. A child scoring above the 90th percentile across all three domains is a strong candidate for gifted programme consideration. The test takes under an hour and requires no registration.",
      },
      {
        q: "How accurate is a free online academic test compared to a professional assessment?",
        a: "Accuracy depends on methodology, not price. This test uses Computer Adaptive Testing (CAT) and Item Response Theory (IRT) — the same frameworks used in CAT4 and NWEA MAP, which are administered professionally in schools. Measurement precision is comparable. The difference is that professional assessments are delivered in a standardised, supervised environment.",
      },
      {
        q: "What does the test report tell me that school reports don't?",
        a: "School reports show grade-based performance relative to classmates. The cognitive assessment report shows three things a school report never can: (1) your child's ability level relative to age-matched peers internationally, not just their class; (2) the independent strength of each cognitive domain, so verbal and spatial strengths don't cancel each other out in an average; (3) which specific sub-skills within each domain to develop next.",
      },
    ],
    cta: {
      heading: "Find your child's strengths — free",
      body: "Adaptive assessment for ages 6–16. Verbal, numerical and spatial reasoning measured against international benchmarks — instant report, no registration.",
      label: 'Start free test',
      href: '/#academic',
    },
  },
  {
    slug: 'smart-child-bad-grades',
    title: 'My Child Is Smart But Gets Bad Grades: What Parents Should Know',
    shortTitle: 'Smart Child, Bad Grades: What Parents Should Know',
    description:
      'Why grades don\'t measure cognitive ability — and how to find your child\'s true academic ceiling across all four cognitive domains.',
    tldr: 'Smart children get bad grades when there is a mismatch between their cognitive profile and how school measures performance. School grades primarily measure crystallised intelligence — what has been memorised and reproduced — while many bright children have exceptional fluid intelligence: the ability to reason, spot patterns, and solve novel problems that standardised tests rarely capture.',
    date: '2026-10-01',
    dateModified: '2026-10-01',
    readTime: '9 min read',
    tags: ['Smart Child Bad Grades', 'Child Underperforming', 'Cognitive Assessment', 'Gifted Underachiever', 'Child Potential', 'Academic Performance', 'Working Memory', 'Parent Guide'],
    faqs: [
      {
        q: 'Why does my intelligent child get bad grades?',
        a: 'Intelligent children get bad grades when their cognitive strengths do not align with how school measures performance. School grades primarily test crystallised intelligence — memorised knowledge — while many bright children excel at fluid intelligence: reasoning, pattern recognition, and solving novel problems. A child may also struggle due to working memory challenges, test anxiety, boredom-driven disengagement, or a curriculum mismatch with their cognitive profile.',
      },
      {
        q: 'What is the difference between intelligence and academic performance?',
        a: 'Intelligence refers to cognitive ability — the capacity to reason, learn, and solve new problems. Academic performance measures how well a student has reproduced curriculum content under exam conditions. A child can have very high fluid intelligence (reasoning ability) while producing modest grades if their working memory is under strain, if they are disengaged, or if the exam format does not match their cognitive strengths.',
      },
      {
        q: 'Can a child be gifted but still struggle in school?',
        a: 'Yes. Research consistently shows that 12–18% of students in the top quartile for fluid reasoning score in the bottom half for school grades. Gifted underachievement is a well-documented phenomenon. Causes include boredom and disengagement in under-stimulating curricula, undiagnosed working memory challenges, twice-exceptional profiles (gifted with a co-occurring learning difference), and extreme cognitive profiles where one domain is very strong but another creates a bottleneck.',
      },
      {
        q: 'What are the signs my child is smarter than their grades show?',
        a: 'Key signs include: strong verbal reasoning in conversation but weak written output; quickly grasping new concepts but losing marks on multi-step tasks; excellent spatial or logical problem-solving outside school (Lego, puzzles, coding) but poor performance on text-heavy exams; boredom-related disengagement rather than confusion; and high performance on novel tasks but lower performance on revision-dependent tests.',
      },
      {
        q: 'Does working memory affect school grades?',
        a: 'Yes, significantly. Working memory is the cognitive system that holds and manipulates information during a task. Children with below-average working memory frequently lose marks on multi-step problems even when they understand each individual step. Working memory challenges are among the most common undiagnosed cognitive profiles in underperforming children — and they are entirely separate from intelligence. A child can have high fluid reasoning but low working memory, producing a confusing academic profile.',
      },
      {
        q: 'How do I find out my child\'s true academic potential?',
        a: 'A free adaptive cognitive assessment measures verbal reasoning, numerical reasoning, visual-spatial reasoning, and processing speed independently — producing a percentile score for each domain benchmarked against international norms. Unlike school grades, this separates what your child knows from what they are cognitively capable of. The Eduentry academic assessment takes under an hour and requires no prior preparation.',
      },
      {
        q: 'Should I get my child tested if they underperform at school?',
        a: 'If there is a consistent gap between your child\'s apparent capability and their grades, a cognitive assessment is a productive first step before any intervention. It identifies whether the gap is due to a domain-specific weakness, working memory load, curriculum mismatch, or broader disengagement. Starting with data rather than assumption saves time, money, and reduces the risk of mismatched tutoring or interventions.',
      },
      {
        q: 'Can stress and anxiety cause a smart child to get bad grades?',
        a: 'Yes. Test anxiety specifically impairs working memory during an exam — meaning a child can know the material thoroughly but underperform when the pressure is high. High-ability children are actually more susceptible to this mechanism because they are more aware of the stakes. If your child consistently performs better in low-stakes conditions than in formal exams, test anxiety is worth investigating alongside cognitive profiling.',
      },
      {
        q: 'What type of support helps underperforming gifted children most?',
        a: 'The most effective support starts with a cognitive profile, not a tutoring plan. Once you know which domain has the gap — verbal, numerical, spatial, or working memory — you can match support precisely. Domain-specific interventions consistently outperform general tutoring. If working memory is the bottleneck, strategy-based approaches (chunking, visual anchors) outperform more repetition. If the child is disengaged, enrichment and a change in learning environment may be more effective than any academic intervention.',
      },
      {
        q: 'How does an adaptive cognitive test differ from a school exam?',
        a: 'A school exam tests curriculum knowledge — what a student has been taught and can recall under pressure. An adaptive cognitive test measures underlying reasoning ability — the capacity to solve novel problems the child has never seen before. The adaptive format adjusts the difficulty of each question in real time based on previous answers, producing a precise ability estimate rather than a grade. This distinction is why a child can score highly on a cognitive test while producing poor school grades.',
      },
    ],
    cta: {
      heading: 'Find out your child\'s true cognitive profile — free',
      body: 'Adaptive assessment for ages 6–16. Verbal, numerical, spatial reasoning and working memory measured against international benchmarks — instant report, no registration.',
      label: 'Start free assessment',
      href: '/#academic',
    },
  },
  {
    slug: 'how-to-find-internship-as-student',
    title: 'How to Find an Internship as a Student: The Complete Guide',
    shortTitle: 'How to Find an Internship as a Student',
    description:
      'How high school and university students can find an internship with no experience — using an adaptive readiness assessment to build a talent profile.',
    tldr: 'Students with prior internship experience receive job offers at a 70% higher rate before graduation (NACE, 2020). The biggest barrier is the experience paradox — you need experience to get experience. An adaptive internship readiness assessment gives you a verifiable talent profile that lets employers see your potential before you have a track record.',
    date: '2026-10-01',
    dateModified: '2026-10-01',
    readTime: '8 min read',
    tags: ['Student Internship', 'How to Find Internship', 'Internship Readiness', 'High School Internship', 'No Experience Internship', 'Internship Tips', 'Adaptive Assessment', 'Career Development'],
    faqs: [
      {
        q: 'How do I find an internship with no experience?',
        a: 'The fastest route is to demonstrate measurable aptitude before you have a track record. Complete a free internship readiness assessment to generate a talent profile across technology, data analytics, business management, and digital marketing. Include this report in your application email and LinkedIn profile — it gives recruiters a concrete signal about your capabilities that your grades alone cannot convey.',
      },
      {
        q: 'What is an internship readiness assessment?',
        a: 'An internship readiness assessment is an adaptive test that measures your aptitude across the competency areas most relevant to professional environments — typically technology, data, business, and digital marketing. Using Computer Adaptive Testing (CAT) and Item Response Theory (IRT), it adjusts in real time to your ability level. The output is a calibrated talent report with percentile scores you can share with potential employers.',
      },
      {
        q: 'Can high school students aged 14+ do internships?',
        a: 'Yes. Many companies offer structured placements for students aged 14–18, particularly in technology, retail, creative industries, and SMEs. An internship readiness assessment is specifically designed for this age group — it benchmarks your strengths without requiring prior work experience, giving you a credible starting point for your first application.',
      },
      {
        q: 'How does the Eduentry assessment work?',
        a: 'The Eduentry internship readiness assessment uses adaptive testing: each question is selected based on your previous answer, so it calibrates to your real ability level rather than a fixed difficulty. It takes approximately 20 minutes and covers four sectors — technology, data analytics, business management, and digital marketing. At the end, you receive a detailed talent report with domain scores and a sector-fit profile.',
      },
      {
        q: 'Is the Eduentry assessment free?',
        a: 'Yes. The Eduentry internship readiness assessment is completely free for students aged 14 and above. No registration, no credit card, and no subscription is required. You receive your full talent report immediately after completing the test.',
      },
      {
        q: 'How do I add the internship readiness report to my CV or LinkedIn?',
        a: 'Download your talent report as a PDF and attach it to application emails as a supporting document. On LinkedIn, add it under "Licences & Certifications" — list Eduentry as the issuing organisation, include your domain scores, and link to the assessment page. Recruiters using keyword searches will find candidates who have demonstrated initiative and measurable aptitude.',
      },
      {
        q: 'What sectors does the Eduentry internship readiness assessment cover?',
        a: 'The assessment covers four sectors: Technology (problem-solving, computational thinking, digital tools), Data Analytics (pattern recognition, data interpretation, quantitative reasoning), Business Management (commercial awareness, communication, organisational thinking), and Digital Marketing (content strategy, audience analysis, creative reasoning). Your report shows which sectors match your natural strengths.',
      },
      {
        q: 'How long does the internship readiness assessment take?',
        a: 'Approximately 20 minutes. Because the test is adaptive, it reaches precise calibration faster than a fixed-format test of equivalent accuracy. You can complete it in one sitting — no account or prior preparation required.',
      },
      {
        q: 'What is the difference between a student internship and a graduate placement?',
        a: 'A student internship is a work placement undertaken during secondary school or undergraduate study — typically unpaid or nominally paid, lasting between one week and three months. A graduate placement (or graduate scheme) is a structured programme entered after degree completion, usually paid at a graduate salary with a formal development curriculum. Building your internship record while studying dramatically improves your graduate placement application outcomes.',
      },
      {
        q: 'How do I prepare for an internship interview?',
        a: 'Use your Eduentry talent report as interview preparation material. Identify your highest-scoring sector and prepare two examples of how you have applied that aptitude outside school. Research the company\'s product or service and connect it to one of your report\'s domain scores. Most internship interviews for students focus on attitude, curiosity, and self-awareness rather than technical depth — your assessment report demonstrates all three.',
      },
    ],
    howToSteps: [
      { name: 'Identify your strongest sectors', text: 'Complete a free internship readiness assessment to benchmark your aptitude across technology, data analytics, business management, and digital marketing. Your domain scores show which sectors match your natural strengths — start there.' },
      { name: 'Research formal schemes in your sector', text: 'For business: Barclays, Goldman Sachs, KPMG, Deloitte, PwC, EY Spring Insight programmes. For tech: Google, Microsoft, IBM, BT. For digital marketing: Springpod and Forage virtual programmes. Application windows typically open September–November.' },
      { name: 'Build your evidence base without prior experience', text: 'A third-party aptitude report gives employers a verifiable signal before you have a track record. Download your Eduentry talent report and include it in applications as a supporting document — it sidesteps the experience paradox.' },
      { name: 'Write targeted application emails to SMEs', text: 'For smaller companies, direct email outreach works year-round. Keep it concise: one sentence on why you want to work at that specific company, one sentence on what you can offer (your strongest domain from the assessment), and a brief request for a one-week placement.' },
      { name: 'Set up job alerts on internship platforms', text: 'Register on Bright Network, RateMyPlacement, Springpod, and Forage. Set alerts for your target sector and year group. Apply to roles within 24–48 hours of posting — many schemes fill before their stated deadline.' },
      { name: 'Prepare for online assessments and interviews', text: 'Most competitive internship applications include a verbal/numerical reasoning test and a brief competency interview. Practise timed numerical reasoning questions. For interviews, prepare examples of curiosity, initiative, and problem-solving — not prior work experience.' },
    ],
    cta: {
      heading: 'Find out if you\'re internship-ready',
      body: 'Free adaptive assessment for students 14+. Get your talent profile across tech, data, business and digital marketing in 20 minutes.',
      label: 'Start free assessment →',
      href: 'https://eduentry.ai/en',
    },
  },
  {
    slug: 'summer-activities-ambitious-children',
    title: 'Summer Activities for Academically Ambitious Children: 2026 Guide',
    shortTitle: 'Summer Activities for Academically Ambitious Children',
    description:
      'A research-backed summer plan for high-achieving 9–16 year olds: internships, assessments, enrichment and a 3-step way to match your child\'s strengths.',
    tldr: 'Unstructured summers widen the achievement gap — but the wrong structured summer kills intrinsic motivation. The answer is purposeful, varied, and matched to the child\'s cognitive profile. Start with a free assessment, done within an hour, to know which domain to build before you book anything.',
    date: '2026-10-01',
    dateModified: '2026-10-01',
    readTime: '10 min read',
    tags: ['Summer Activities', 'Gifted Child Summer', 'Summer Internship', 'Academic Enrichment', 'High School Student', 'Child Development', 'Summer Planning', 'Cognitive Assessment'],
    faqs: [
      {
        q: 'What should academically gifted children do during summer?',
        a: 'Academically gifted children benefit most from a combination of credential-building (cognitive assessment, internship for 14+, competition entry), skill-building matched to their strongest domain, and one genuinely enjoyable exploration that isn\'t pressure-loaded. The key is matching the activity to the child\'s actual cognitive profile — not defaulting to more of what they already do well at school.',
      },
      {
        q: 'Are summer internships suitable for high school students?',
        a: 'Yes. OECD research across 47 longitudinal studies shows students with structured work experience by age 16 have measurably better career outcomes — including higher employment rates and faster wage progression. Many companies offer structured placements for students aged 14–18, particularly in technology, retail, creative industries, and SMEs. An internship readiness assessment helps identify which sector fits before committing to a placement.',
      },
      {
        q: 'What summer activities help with university admissions?',
        a: 'University admissions committees look for three things: verified ability, genuine interest in a field, and evidence of initiative. Summer activities that help most are: a cognitive baseline assessment (produces a percentile report), a structured internship or work experience (produces a reference), and a subject-specific competition or enrichment programme (produces a placement or certificate). Online courses alone carry less weight.',
      },
      {
        q: 'How do I find a summer internship for my teenager?',
        a: 'Start with an internship readiness assessment to identify which sector matches your child\'s strengths — this prevents wasted applications. Then approach SMEs directly (they are more likely to take younger students than large corporates), use your school\'s careers department, and check sector-specific directories. Having an assessment report in the application significantly strengthens it compared to an empty CV.',
      },
      {
        q: 'Is it better to do a summer programme or an internship?',
        a: 'For students aged 14 and above, a structured internship or work experience typically delivers more cognitive and credential value than a summer academic programme, because it develops executive function, ambiguity tolerance, and professional communication — skills that academic programmes cannot replicate. For students under 14, structured enrichment (cognitive assessment + competition + project) is the better framework.',
      },
      {
        q: 'What cognitive skills can be developed over the summer?',
        a: 'The three cognitive domains most responsive to targeted summer investment are: verbal reasoning (developed through debate, structured writing, Model UN, and high-level reading), numerical reasoning (developed through competitive maths, pattern-based problem solving, and data projects), and visual-spatial reasoning (developed through engineering projects, coding, design, and spatial puzzles). A cognitive baseline assessment identifies which domain to prioritise.',
      },
      {
        q: "How do I know which summer activity suits my child's strengths?",
        a: "Take the free cognitive assessment (done within an hour) before booking anything. It produces verbal, numerical, and spatial percentile scores benchmarked internationally. A child with a strong verbal profile thrives in debate, writing, and Model UN. A numerical-spatial profile points toward coding, engineering projects, and competitive maths. Matching activity to profile prevents wasted summer investment.",
      },
      {
        q: 'Do summer activities improve school performance the following year?',
        a: 'Research consistently shows that targeted summer enrichment matched to a child\'s developmental level improves performance in the subsequent academic year — particularly in the domains addressed. The key word is targeted: generic tutoring shows weak effects, while domain-specific enrichment matched to a cognitive gap shows strong effects. This is why a cognitive baseline assessment before summer is valuable.',
      },
      {
        q: 'What age can a child start a work experience placement?',
        a: 'In the UK, the minimum age for formal work experience is typically 13–14, with structured placements most common from age 14 onwards. Many companies offering secondary school placements require students to be at least 14. In other countries, regulations vary but 14 is the most common minimum. An internship readiness assessment is designed specifically for this 14+ age group.',
      },
      {
        q: 'How does a summer assessment help with school planning in September?',
        a: 'A cognitive assessment taken in summer produces a verbal, numerical, and spatial percentile profile that identifies exactly which domain has a gap versus which is already strong. This tells you which subjects to invest in tutoring (the gap domain), which school activities to prioritise (the strong domain), and gives you objective data to share with teachers at the September parents\' evening — moving the conversation from vague impressions to specific, actionable information.',
      },
    ],
    cta: {
      heading: "Find your child's strengths before summer starts — free",
      body: "Adaptive assessment for ages 6–16. Verbal, numerical and spatial reasoning measured against international benchmarks — instant report, no registration.",
      label: 'Start free test',
      href: '/#academic',
    },
  },
  {
    slug: 'how-to-prepare-for-gcse',
    title: 'How to Prepare for GCSEs: Complete Revision Guide for Students and Parents (2026)',
    shortTitle: 'GCSE Revision Guide 2026: How to Prepare',
    description: 'A step-by-step GCSE guide: the 9–1 grading system, revision strategies, subject choices, mock exam timelines and the skills that predict success.',
    tldr: 'GCSEs are graded 9–1 (9 is the highest). Grade 4 is the standard pass (equivalent to old grade C); Grade 5 is the strong pass. Most sixth forms require five or more Grade 4+ GCSEs including English and Maths. Effective GCSE revision starts 12–18 months before exams using active recall and past papers, not passive re-reading.',
    date: '2026-10-03',
    dateModified: '2026-10-03',
    readTime: '10 min read',
    tags: ['GCSE', 'UK Education', 'Revision', 'Exam Preparation', 'Secondary School', '2026', 'Grade Boundaries', 'Sixth Form'],
    faqs: [
      {
        q: 'What are the GCSE grade boundaries for 2026?',
        a: 'Grade boundaries are set each year by exam boards (AQA, Edexcel, OCR, WJEC) after marking is complete — they are not published in advance. Boundaries vary by subject and year, and are adjusted to account for exam difficulty. As a rough guide, Grade 7 typically requires around 65–70% on most papers; Grade 4 (the standard pass) typically requires 40–50%. Always check the exam board\'s official grade boundary tables after results day.',
      },
      {
        q: 'What is Grade 4 equivalent to in old GCSE grades?',
        a: 'Grade 4 in the 9–1 system is equivalent to a low Grade C in the old A*–G system. It is described as a "standard pass" and is the minimum acceptable grade for most employment and further education purposes. Grade 5 (the "strong pass") is equivalent to a high Grade C or low Grade B, and is increasingly used as the threshold by sixth forms and employers. Grade 7 is equivalent to old Grade A.',
      },
      {
        q: 'How many GCSEs do you need for sixth form?',
        a: 'Most sixth forms require a minimum of five GCSEs at Grade 4 or above, including English Language and Mathematics. Selective sixth forms typically require five or more GCSEs at Grade 5 or above, often with Grade 6 or 7 in the subjects the student wishes to study at A-level. The specific requirements vary by school — always check the admissions criteria for each sixth form your child is considering.',
      },
      {
        q: 'When do GCSE exams take place in 2026?',
        a: 'GCSE exams in 2026 take place from mid-May to late June. Most papers are scheduled across a six-week window, with English Language, English Literature, and Mathematics papers typically sitting in the first two weeks. Results Day is in late August — in 2026 this falls on Thursday 20 August. Students sit exams at their own school and receive results by post and online simultaneously.',
      },
      {
        q: 'What subjects are compulsory for GCSE?',
        a: 'All students in England must study English Language, English Literature, and Mathematics — these three are compulsory. In addition, most schools require students to take at least one science GCSE (most take the combined science double award, which counts as two GCSEs). Many schools also require a modern foreign language and a humanities subject (History or Geography), though these are not legally mandated. Students typically choose 2–3 additional optional subjects from the rest of the curriculum.',
      },
      {
        q: 'What is the best way to revise for GCSEs?',
        a: 'The most effective revision strategies are active recall (testing yourself on material rather than re-reading notes), spaced repetition (revisiting topics at increasing intervals), and interleaving (mixing subjects or topics rather than studying one exhaustively before moving on). Past papers under timed conditions are the single most valuable revision activity — they build exam technique, reveal knowledge gaps, and reduce test anxiety. Passive re-reading and highlighting are among the least effective methods despite being the most popular.',
      },
      {
        q: 'How long before GCSEs should you start revising?',
        a: 'Meaningful GCSE revision should begin 12–18 months before the exams — in Year 10 for students taking GCSEs in Year 11. Light consolidation in Year 10 (30–45 minutes per day reviewing covered topics) compounds significantly by the time intensive revision begins in Year 11. Starting serious revision only in January of Year 11 (4 months before May exams) is possible but leaves very little margin for catching up on gaps.',
      },
      {
        q: 'Can you resit GCSEs?',
        a: 'Yes — GCSE resits are available each November for English Language and Mathematics only (the two most important GCSEs), and the full June series is available each summer for all subjects. Students can resit as many times as they want. Schools will usually allow students to resit in Year 12 if they missed the Grade 4 threshold, and independent candidates can sit any GCSE at an exam centre. The higher grade always stands on the certificate.',
      },
      {
        q: 'What is the difference between Foundation and Higher tier at GCSE?',
        a: 'Most GCSE subjects are tiered. Foundation tier covers grades 1–5; Higher tier covers grades 3–9. Students entered for Foundation tier cannot achieve above Grade 5, regardless of how well they do. Higher tier students can theoretically achieve any grade from 3–9. Schools typically recommend Higher tier for students targeting Grade 6 or above, and Foundation tier for those unlikely to achieve Grade 5. The decision is usually made in Year 10 or early Year 11.',
      },
      {
        q: 'What GCSE grades do universities look at?',
        a: 'Universities primarily look at A-level (or equivalent) results for undergraduate admissions, not GCSE grades. However, GCSE grades are used as a filter for competitive courses — medical schools, Oxbridge, and top Russell Group universities typically expect Grade 7 or above across most GCSEs as a baseline indicator of academic ability. Some degree apprenticeship programmes and employer-linked courses use GCSE grades more directly in selection.',
      },
    ],
    howToSteps: [
      { name: 'Understand your exam boards and specifications', text: 'For each GCSE subject, identify the exam board (AQA, Edexcel, OCR, WJEC) and download the specification from their website. The specification lists exactly what content can be tested — it is the most important revision document you have.' },
      { name: 'Start consolidation in Year 10', text: 'Light consolidation in Year 10 (30–45 minutes per day reviewing covered topics) compounds significantly. Most students who achieve Grade 7+ started active review 12–18 months before exams, not in the final term.' },
      { name: 'Build a revision timetable in Year 11', text: 'From September of Year 11, create a timetable allocating time across all subjects. Prioritise subjects where you have the most to gain — not the ones you find easiest. Use spaced repetition: revisit topics at increasing intervals rather than blocking one subject for days.' },
      { name: 'Use active recall, not passive re-reading', text: 'The most effective revision is self-testing — flashcards (Anki, Quizlet), past paper questions, and the "blank page" technique (write down everything you know about a topic without notes). Passive re-reading and highlighting are among the least effective methods despite being the most popular.' },
      { name: 'Complete past papers under timed conditions', text: 'Past papers are the single most valuable revision resource. Work through at least 3–4 papers per subject under exam conditions, check mark schemes carefully, and categorise your errors (knowledge gap vs. exam technique). Download papers free from exam board websites.' },
      { name: 'Review mock results and address specific gaps', text: 'Most schools run mock exams in November–December of Year 11. Treat mock results as a diagnostic — identify which topics cost you marks and revise those specifically, rather than re-covering material you already know.' },
      { name: 'Manage exam week logistics and mental performance', text: 'Organise your exam timetable in advance. Sleep at least 8 hours the night before each exam — sleep deprivation impairs working memory significantly. Eat breakfast. Arrive early. Read every question fully before writing.' },
    ],
    cta: {
      heading: 'Know your child\'s GCSE readiness today',
      body: 'Free adaptive assessment in English, Maths, Verbal and Non-Verbal Reasoning — instant standardised score and percentile ranking against UK norms.',
      label: 'Start free assessment',
      href: '/auth/register',
    },
  },
  {
    slug: 'habits-to-avoid-future-unemployment',
    title: '8 Habits Children Should Build Now to Avoid Future Unemployment',
    shortTitle: 'Habits Children Need Now to Avoid Future Unemployment',
    description:
      'Eight habits that protect children from future unemployment — AI literacy, critical thinking, money skills and real experience — backed by WEF and OECD.',
    tldr: 'McKinsey estimates 375 million workers globally — 14% of the workforce — will need to change occupations by 2030. But the skills hardest for AI to replicate are consistent across every major study: critical thinking, creativity, emotional intelligence, and initiative. These are not built by grades; they are built by habits formed early.',
    date: '2026-10-04',
    dateModified: '2026-10-04',
    readTime: '13 min read',
    tags: ['Child Development', 'Career Development', 'Future of Work', 'Digital Literacy', 'Automation', 'Parent Guide', 'Financial Literacy'],
    howToSteps: [
      { name: 'Build critical thinking habits', text: 'Make questioning a daily reflex. When your child reads news or watches content, ask "How do we know this?" and "Is there another explanation?" Structured debate, chess, and logic puzzles build this muscle from age 7 upward.' },
      { name: 'Develop digital and AI literacy', text: 'Start with Scratch or Code.org at age 8–12 to learn algorithmic thinking. Progress to Python basics and data tools at 12–15. By 15, introduce real projects using APIs and AI-assisted research so your child learns to direct and evaluate AI outputs critically.' },
      { name: 'Practise communication and emotional intelligence', text: 'Enrol children in team sports, drama, or debate clubs. At home, ask consistently: "How do you think that person felt?" and "What could you have done differently?" These build the empathy and conflict-resolution capacity that 92% of hiring managers rank above technical skills (LinkedIn, 2023).' },
      { name: 'Introduce financial literacy with real money', text: 'Give age-appropriate pocket money and use the three-jar system from age 6: spend, save, give. In adolescence, introduce basic budgeting, compound interest, and index fund concepts. OECD research shows financial literacy is learned in the family, not at school.' },
      { name: 'Cultivate self-directed learning', text: 'When your child is curious about something, ask "How could you find out more?" instead of answering immediately. Help them navigate online courses, books, and communities. This builds the learning-how-to-learn capacity that matters most as skill half-lives shorten to 2.5 years (IBM research).' },
      { name: 'Encourage an entrepreneurial mindset', text: 'Ask your child to notice a problem at school and propose a solution to a teacher. Start small: reorganise a shelf, fix a recurring issue, propose a process improvement. Completing a small initiative — however modest — trains the problem-noticing and action-taking loop.' },
      { name: 'Pursue real-world work experience', text: 'Arrange structured work placements from age 14–16. Target at least four employer contacts before age 16 — Education and Employers research shows this makes young people five times less likely to be NEET at 19. Use the Eduentry assessment to identify strengths and communicate readiness to employers.' },
      { name: 'Strengthen time management and self-discipline', text: 'Build small commitments followed through: 15 minutes of reading daily, one task completed before starting another, on time when promised. These micro-habits compound. The capacity to delay gratification — formed in childhood — is one of the strongest career outcome predictors in 40-year longitudinal research (Stanford).' },
    ],
    faqs: [
      {
        q: 'At what age should children start building these habits?',
        a: 'Earlier is better — but it is never too late. Foundational habits (curiosity, reading, taking responsibility) can begin at age 4–6. Financial literacy and digital literacy become concrete at 8–10. Real-world work experience produces the highest developmental return at 14–16. If your child is 12, there is still a great deal you can do. At 16, they are still early by most measures.',
      },
      {
        q: 'Which jobs will AI replace?',
        a: 'McKinsey Global Institute\'s 2023 analysis identified the highest automation risk in data entry and repetitive office work (78% automation potential), customer service roles (53%), and basic bookkeeping (47%). The most resilient roles are those requiring complex problem-solving, social intelligence, and creativity: nursing, therapy, software architecture, entrepreneurship, and education. Automation typically targets specific tasks within a job, not the entire role — so people who are strong on the tasks AI cannot replicate are well positioned.',
      },
      {
        q: 'Are school grades not enough?',
        a: 'Grades are necessary but not sufficient. Consider two candidates with identical academic records: what distinguishes them? Real-world experience, a problem-solving track record, and communication ability — exactly the habits covered here. LinkedIn\'s 2023 survey found 92% of hiring managers prioritise soft skills over technical qualifications. Grades open the door; these habits get you inside.',
      },
      {
        q: 'How do I teach financial literacy to a child?',
        a: 'The most effective method is real money with real decisions. Give age-appropriate pocket money and resist the urge to dictate how it is spent — but review choices together. A three-jar system (spend, save, give) works from age six. In adolescence, introduce basic budgeting, index fund concepts, and how credit works. OECD research consistently shows that financial literacy in young people is learned within the family, not at school.',
      },
      {
        q: 'Is entrepreneurship suitable for every child?',
        a: 'Entrepreneurship is not synonymous with starting a company. The underlying capability is: noticing a problem, generating a solution, and taking initiative — and that mindset is valuable whether a child becomes an employee, a manager, or an artist. The WEF\'s 2025 Workforce Report lists "entrepreneurial mindset" among the top 10 most sought-after competencies in future hiring. Not every child will become an entrepreneur; every child can learn to take initiative.',
      },
    ],
    cta: {
      heading: 'Find out where your child stands today',
      body: 'Free adaptive assessment for children aged 6–17. Standardised score in critical thinking, verbal and numerical reasoning — benchmarked internationally.',
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
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.post)
}
