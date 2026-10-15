export interface InsightSection {
  heading: string
  body: string
}

export interface InsightPost {
  slug: string
  title: string
  description: string
  tag: 'High School Internship' | 'University Fellowship'
  readTime: string
  sections: InsightSection[]
  cta: { label: string; href: string }
}

export const INSIGHT_POSTS: InsightPost[] = [
  // ── HIGH SCHOOL INTERNSHIP ──────────────────────────────────────────────
  {
    slug: 'high-school-internship-benefits-university',
    title: 'How a High School Internship Changes Your University Application',
    description: 'Universities shortlist candidates who can demonstrate applied thinking outside the classroom. Here is what the data shows — and what you can do about it before Year 13.',
    tag: 'High School Internship',
    readTime: '5 min',
    sections: [
      {
        heading: 'Grades alone stopped being enough',
        body: `Admissions teams at competitive universities see thousands of predicted A students. The candidates who stand out are not the ones with the highest predicted grades — they are the ones who can point to something real: a project, a placement, a measurable output. A structured internship in Year 10 or Year 11 gives you exactly that.\n\nThe evidence is consistent. Students with documented, relevant work experience are better prepared for the academic demands of university, more confident in seminars, and statistically more likely to complete their degree. That is not an accident — it is because internships force you to apply knowledge under real constraints.`,
      },
      {
        heading: 'What universities actually look for',
        body: `Personal statements are full of claims: "I am passionate about technology", "I thrive in fast-paced environments." Admissions teams are trained to discount these without evidence.\n\nWhat moves the needle is specificity. "I worked on a client campaign for three weeks, wrote copy that was used in production, and analysed the results in a weekly review" is a sentence that ends interviews. It names a context, a contribution, and a reflective outcome — the three components admissions tutors are taught to look for.\n\nAn Eduentry internship placement is designed to generate exactly these kinds of reference points. You leave with a detailed assessment report, a placement record, and a format for talking about your experience.`,
      },
      {
        heading: 'The compounding advantage',
        body: `Work experience is not linear — it compounds. Students who do a placement in Year 10 have something to build on in Year 11. They know how to behave in a professional environment, they can reference real projects in applications, and they are less anxious in interview settings because they have already been in them.\n\nStudents who wait until after A-levels are starting from scratch at the same time as everyone else. The ones who started earlier are already two iterations ahead.`,
      },
      {
        heading: 'How the assessment works',
        body: `The Eduentry internship starts with a 34-question adaptive assessment across four subjects: verbal aptitude, numerical reasoning, soft skills, and domain knowledge in your chosen track (Technology, Business, Data Analytics, or Digital Marketing).\n\nYour results are compared against a global cohort of students your age. The report tells you where you are strong, where there is room to grow, and which track best fits your profile. Top performers are matched with real placements through our partner network.`,
      },
    ],
    cta: { label: 'Take the assessment free →', href: '/apply' },
  },
  {
    slug: 'how-to-get-tech-internship-before-university',
    title: 'Getting Real Tech Experience Before University: What Actually Works',
    description: 'Most advice tells you to learn to code. That is not enough. Here is what tech selectors actually measure — and how to prepare for a structured placement.',
    tag: 'High School Internship',
    readTime: '6 min',
    sections: [
      {
        heading: 'What "tech experience" actually means to a selector',
        body: `When a tech company reviews a student application, they are not looking for someone who has completed a Codecademy course. They are looking for applied thinking: can this person read a problem, break it into components, and reason about a solution?\n\nThat skill is measurable before you have written a single line of production code. It shows up in how you explain your approach to a logic puzzle, how you read a simple flowchart, and whether you understand why version control exists — not just that it does.`,
      },
      {
        heading: 'The three things the Eduentry tech assessment tests',
        body: `The Technology track domain section covers three areas that real tech selectors care about:\n\n1. **Algorithm logic** — not syntax, but the ability to trace through a process and predict an output. This is the foundation of every technical interview.\n\n2. **System concepts** — understanding what a database is for, what an API does, and why software teams use the tools they use. You do not need to have built anything; you need to understand the landscape.\n\n3. **Debugging reasoning** — given a description of what went wrong, can you identify the most likely cause? This is what engineers spend most of their time doing.`,
      },
      {
        heading: 'How to prepare in four weeks',
        body: `You do not need a computer science background. You need four weeks of deliberate practice:\n\n**Week 1:** Logic and sequences. Work through verbal reasoning exercises with a tech lens — pattern recognition, classification, analogies.\n\n**Week 2:** Number and data. Practice reading simple tables, calculating percentage changes, interpreting a bar chart accurately.\n\n**Week 3:** Tech concepts. Read the Wikipedia article on version control, HTTP, and relational databases. Understand the what and why at a paragraph level.\n\n**Week 4:** Mock assessment. Take the Eduentry practice questions and review every explanation, not just whether you got it right.`,
      },
      {
        heading: 'What happens after a strong result',
        body: `Students who score in the top 30% of the Technology track are matched with partner placements. These are not filing jobs — they are structured four-to-six week experiences inside real technology teams, with a named supervisor, a project brief, and a reference letter on completion.\n\nA strong Eduentry result also gives you something to reference in every future application: a verified domain score, not a self-reported claim.`,
      },
    ],
    cta: { label: 'Start the tech assessment →', href: '/apply' },
  },
  {
    slug: 'business-work-experience-high-school-uk',
    title: 'Business Work Experience at 16: From Placement to Portfolio',
    description: 'A week shadowing someone is not business work experience. Here is what a structured placement looks like — and what you should have to show for it.',
    tag: 'High School Internship',
    readTime: '5 min',
    sections: [
      {
        heading: 'Why most "work experience" does not count',
        body: `When universities and employers ask for work experience, they do not mean a week answering phones at a family friend's office. They mean documented engagement with real business problems: a task you were given, a process you contributed to, and an outcome you can describe.\n\nThe difference matters. A student who can say "I was given a competitor analysis brief and presented my findings to the commercial team" is describing experience. A student who says "I shadowed a manager for a week" is describing observation.`,
      },
      {
        heading: 'What the Eduentry business track assesses',
        body: `The Business track domain section tests the concepts that underpin real commercial decision-making:\n\n- **Market reasoning** — supply, demand, competition, and what makes a business model viable\n- **Financial literacy** — reading a profit and loss at a conceptual level, understanding margin and revenue\n- **Business case thinking** — given a scenario with competing priorities, which action maximises the outcome?\n- **Professional communication** — the right tone, the right channel, the right level of detail\n\nThese are not GCSE Business Studies questions. They are the questions a graduate trainee gets asked in week one.`,
      },
      {
        heading: 'Building a portfolio from a placement',
        body: `A placement that ends with nothing to show for it is a missed opportunity. Before you start, agree with your supervisor on three things:\n\n1. One task you will own end-to-end\n2. A way to measure whether it went well\n3. Permission to reference the outcome in applications\n\nEven a modest deliverable — a one-page market summary, a set of meeting notes, a simple analysis — becomes a portfolio item when you can describe what you were asked to do, what you did, and what happened as a result.`,
      },
      {
        heading: 'How Eduentry connects assessment to placement',
        body: `The assessment is not just a test — it generates a profile. Students who score well in the Business track are matched with placements in our partner network that fit their profile: commercial roles, research projects, and client-facing tasks inside real organisations.\n\nYou start the placement with a verified score that your supervisor can see. You leave with a reference tied to specific outcomes.`,
      },
    ],
    cta: { label: 'Assess your business readiness →', href: '/apply' },
  },
  {
    slug: 'digital-marketing-work-experience-student-reviews',
    title: 'Digital Marketing Work Experience: What You Will Actually Do',
    description: 'Posting on Instagram is not digital marketing work experience. Here is what a real placement involves — and how the Eduentry assessment measures your readiness for it.',
    tag: 'High School Internship',
    readTime: '5 min',
    sections: [
      {
        heading: 'The gap between social media and marketing',
        body: `Most students applying for digital marketing placements say some version of: "I manage social media accounts and I understand how algorithms work." Selectors hear this dozens of times a day.\n\nWhat they are actually looking for is different: can you read a campaign brief, interpret performance data, and make a recommendation? Can you distinguish between a reach problem and an engagement problem? Do you understand why click-through rate matters more than impressions in a performance campaign?\n\nThese are not advanced skills. They are the baseline for a productive placement.`,
      },
      {
        heading: 'What the Digital Marketing track assesses',
        body: `The Eduentry Digital Marketing domain section tests four areas:\n\n1. **Analytics interpretation** — reading a dashboard and identifying what the numbers mean for the next decision\n2. **Platform mechanics** — understanding reach, engagement, CTR, CPM, and conversion rate without confusing them\n3. **Content strategy** — matching message to audience to platform in a way that serves a defined objective\n4. **SEO fundamentals** — what keywords do, what backlinks are, and why site structure matters to a search engine\n\nThese map directly to what a junior team member is asked to do in a real digital marketing role.`,
      },
      {
        heading: 'What a real placement looks like',
        body: `Students on structured Eduentry digital marketing placements typically work on one of three types of task:\n\n- **Campaign analysis** — reviewing the results of a live campaign and writing a short report on what worked and what to change\n- **Content production** — writing copy or creating assets for a brief with specific brand guidelines and a measurable goal\n- **Audience research** — analysing customer behaviour data and producing a summary for the team\n\nEach task has a brief, a deadline, and a review. You end the placement with output you can show.`,
      },
      {
        heading: 'How to turn a placement into a reference',
        body: `At the end of your placement, ask your supervisor for a written reference that names the task you worked on and the outcome. Even one sentence — "She produced a competitor analysis that was used in our Q4 planning session" — is worth more than a generic "she was great to have on the team."\n\nPair that with your Eduentry assessment report and you have a verifiable record: your tested aptitude score and a real deliverable tied to a named organisation.`,
      },
    ],
    cta: { label: 'Take the marketing assessment →', href: '/apply' },
  },
  {
    slug: 'how-to-get-internship-no-experience-high-school',
    title: 'How to Get Your First Internship When You Have No Experience',
    description: 'The catch-22 of early careers: you need experience to get experience. Here is how to break the loop before you leave school.',
    tag: 'High School Internship',
    readTime: '5 min',
    sections: [
      {
        heading: 'Why the "no experience" problem is not what you think',
        body: `When companies say they want candidates with experience, they do not usually mean they want someone who has already done the exact job. They mean they want evidence that the candidate can function in a professional environment — that they can take a brief, do work, and produce an output without constant supervision.\n\nThat evidence does not have to come from a previous job. It can come from a school project with a measurable outcome, a competition, a personal initiative, or a verified assessment result that demonstrates the underlying aptitude.`,
      },
      {
        heading: 'What the Eduentry assessment replaces',
        body: `The Eduentry assessment is explicitly designed for students who have no prior work experience. There is no CV question, no requirement to list previous roles.\n\nInstead, it measures four things directly: how you reason with words, how you handle numbers, how you would behave in a professional situation, and how much you already know about your chosen field. A strong result in any of these is evidence that a selector can act on — even if you have never held a job.`,
      },
      {
        heading: 'Three things you can do this week',
        body: `**1. Take the assessment.** Your score is a credible data point. A 78th-percentile domain knowledge result in Technology is something you can reference in any application.\n\n**2. Build one specific output.** Pick a project you can complete in two weeks — a short report, a small website, a data analysis of something you care about. The quality matters less than having something concrete to describe.\n\n**3. Write the email.** Most high school students never contact companies directly. A short, specific email that says "I am studying for my GCSEs, I am interested in [field], I scored in the top quartile on the Eduentry assessment, and I would like to apply for a short placement" will be read by most people who receive it.`,
      },
      {
        heading: 'What happens after your first placement',
        body: `The first placement is the hardest. After it, you have a supervisor who can vouch for you, a piece of work you contributed to, and a story you can tell in every subsequent application.\n\nStudents who complete an Eduentry placement in Year 10 arrive at their Year 12 university interviews with two years of compounding experience and a reference from a real organisation. That is a structurally different application from a student who started looking for experience after their A-level results.`,
      },
    ],
    cta: { label: 'Start with no experience →', href: '/apply' },
  },
  {
    slug: 'how-to-differentiate-yourself-at-15',
    title: 'Standing Out at 16: Why the Assessment Matters More Than Your Grades',
    description: 'Every competitive applicant has good grades. The students who get the placements they want have something else — and it is measurable.',
    tag: 'High School Internship',
    readTime: '4 min',
    sections: [
      {
        heading: 'The problem with predicted grades',
        body: `At 15 or 16, almost every student applying for a competitive placement has good predicted grades. Selectors know this — which is why predicted grades have almost no discriminating power at the shortlisting stage.\n\nWhat selectors are actually looking for is a signal that works where grades do not: applied reasoning, professional judgment, domain curiosity. These are things a grade does not measure and that most students do not think to demonstrate.`,
      },
      {
        heading: 'What actually separates shortlisted candidates',
        body: `Based on Eduentry placement data, the students who consistently get shortlisted share three traits:\n\n1. **They can describe a specific interest with evidence.** Not "I am interested in technology" but "I have been building a small web scraper to track pricing data for a project I care about."\n\n2. **They have a verified aptitude signal.** A third-party assessment result is more credible than a self-reported skill claim, because it is harder to fabricate.\n\n3. **They apply early and follow up.** Most students wait until the closing date. The students who get placements apply early, write specific emails, and follow up once.`,
      },
      {
        heading: 'How the Eduentry report gives you a credible signal',
        body: `The Eduentry assessment generates a percentile score for each of the four subject areas, plus a track fit score that identifies which of the four career tracks best matches your profile.\n\nThat report is a concrete artefact. You can quote your domain knowledge score in an application email. You can attach it to a personal statement. You can reference it in an interview when someone asks how you know you are interested in data analytics — "I scored in the 82nd percentile on the Eduentry data analytics assessment" is a specific, verifiable answer.`,
      },
      {
        heading: 'The window closes faster than you think',
        body: `The students applying for the same placements as you next year will include students who have already done one. That is a hard gap to close in an interview.\n\nThe advantage of starting now — at 15 or 16 — is that you are still early enough to be the one who has done it first.`,
      },
    ],
    cta: { label: 'Get your Eduentry profile →', href: '/apply' },
  },

  // ── UNIVERSITY FELLOWSHIP ───────────────────────────────────────────────
  {
    slug: 'oecd-teenage-work-experience-career-outcomes',
    title: 'What OECD Career Data Means for Your Fellowship Application',
    description: 'Decades of OECD research show that structured work experience before 25 has an outsized effect on lifetime career trajectory. Here is what that means for a university student making decisions now.',
    tag: 'University Fellowship',
    readTime: '6 min',
    sections: [
      {
        heading: 'The OECD finding that changes the calculation',
        body: `The OECD's longitudinal career studies consistently identify structured work experience during education as one of the strongest predictors of early career acceleration. The mechanism is not mysterious: students who do real work alongside their studies arrive at their first job already knowing how to function in a professional environment.\n\nThe compounding effect is significant. Students who had structured placements before graduation report higher starting salaries, faster promotion to first management role, and lower rates of career change in the first five years — all relative to students with equivalent academic records but no structured experience.`,
      },
      {
        heading: 'Why "structured" is the key word',
        body: `Not all work experience produces these outcomes. Part-time bar work builds resilience and time management. An unstructured office attachment builds familiarity. Neither produces the career acceleration that the OECD studies identify.\n\nWhat does produce it is structured experience: a defined project, a named supervisor, explicit feedback loops, and a deliverable that exists after you leave. The Magenta Networks fellowship is built around exactly this model — 80% execution on live client deliverables, 20% mentorship from Singapore-based tech leads, with a Capstone Demo Day at the end.`,
      },
      {
        heading: 'What this means at university specifically',
        body: `The OECD data suggests that the optimal window for structured work experience is between 19 and 22 — years when you are credible enough to be given real work but still early enough that the learning compounds into the rest of your career.\n\nA fellowship in your second or placement year sits in the exact centre of this window. You are academically trained but not yet competing against experienced hires. The skills and references you build in a three-month fellowship become the foundation of every subsequent application.`,
      },
      {
        heading: 'The fellowship as a career investment',
        body: `The Magenta Networks fellowship is unpaid in the conventional sense — there is no salary. But the OECD framework suggests this is the wrong way to think about it. The investment is three months of applied work, the return is a verified deliverable, a named reference from a Singapore tech organisation, and an accelerated position on the career trajectory the data describes.\n\nFor most candidates, the question is not whether to do a fellowship — it is whether they score in the top 10% of the assessment to get selected.`,
      },
    ],
    cta: { label: 'Apply for the fellowship →', href: '/work-experience/apply' },
  },
  {
    slug: 'pisa-2025-work-experience-student-readiness',
    title: 'PISA 2025: The Skills Gap a Fellowship Can Close',
    description: 'PISA 2025 showed the steepest global decline in applied reasoning scores in the survey\'s history. Here is what that means for university students — and what structured work experience does about it.',
    tag: 'University Fellowship',
    readTime: '5 min',
    sections: [
      {
        heading: 'What PISA 2025 actually found',
        body: `PISA 2025 recorded the largest single-cycle drop in average reading and mathematics scores since the survey began in 2000. The decline was not confined to one region — it was broadly consistent across OECD member countries, with particularly sharp falls in applied reasoning and data interpretation.\n\nThe report's authors were explicit about the likely cause: a generation of students who had their critical development years disrupted, and an educational system that responded by narrowing the curriculum rather than broadening applied learning.`,
      },
      {
        heading: 'The applied reasoning gap',
        body: `The PISA finding that matters most for employers is the applied reasoning score — the ability to take an unfamiliar problem, reason from available data, and reach a defensible conclusion. This score dropped by a larger margin than domain knowledge scores, which means the gap between "knows the theory" and "can apply it under pressure" widened.\n\nThis is exactly what employers report when they interview new graduates: candidates who can recall content but struggle to act on it in conditions of ambiguity. A fellowship that puts you inside a real client engagement, with a real brief and a real deadline, is the most direct response to this gap.`,
      },
      {
        heading: 'What the Eduentry fellowship assessment tests',
        body: `The fellowship assessment is calibrated to first and second-year undergraduate level — harder than the high school internship assessment, and deliberately focused on the skills the PISA data identifies as declining.\n\nThe verbal reasoning section tests critical argument analysis, not word analogies. The numerical section tests data interpretation and financial ratio reasoning. The situational judgement section tests professional decision-making in ambiguous scenarios. The domain section tests applied knowledge in your fellowship track at a level that expects familiarity with the field.\n\nA strong result signals exactly what the PISA data says is scarce: applied reasoning capacity under realistic conditions.`,
      },
      {
        heading: 'Why now matters',
        body: `The PISA decline creates a specific opportunity for students who close the gap proactively. In a cohort where applied reasoning scores are lower on average, a candidate who has demonstrable applied experience stands out more sharply than they would have five years ago.\n\nThe fellowship is one of the fastest ways to close the gap — three months of real applied work, reviewed weekly by experienced practitioners, produces a more significant signal than any additional qualification.`,
      },
    ],
    cta: { label: 'Take the fellowship assessment →', href: '/work-experience/apply' },
  },
  {
    slug: 'how-to-find-internship-as-student',
    title: 'Finding a Fellowship That Actually Advances Your Career',
    description: 'Not all fellowships and internships are equal. Here is what separates the programmes that compound your career from the ones that waste three months.',
    tag: 'University Fellowship',
    readTime: '5 min',
    sections: [
      {
        heading: 'The three questions that separate good programmes from bad ones',
        body: `Most university students evaluate programmes on brand name, stipend, and location. These are not useless criteria, but they are the wrong primary filters.\n\nThe three questions that actually predict whether a programme will advance your career:\n\n1. **Will you own a deliverable?** If you cannot point to something concrete that exists because you worked on it, the experience will not survive a follow-up question in an interview.\n\n2. **Will you have a named supervisor who can give a specific reference?** Generic references from HR departments carry no weight. A specific reference from a senior practitioner who can describe your work does.\n\n3. **Will the skills compound?** A programme that exposes you to the tools, processes, and decision-making of a real team gives you something to build on. One that keeps you busy without exposure gives you nothing.`,
      },
      {
        heading: 'Red flags in programme descriptions',
        body: `These phrases in a programme description are signs of an experience that will not compound:\n\n- "You will shadow members of the team" — observation is not experience\n- "You will support projects across the business" — no ownership, no deliverable\n- "A great opportunity to learn about our culture" — culture is not a skill\n- "Flexible and varied role" — means undefined scope with no accountability\n\nContrast with: "You will be assigned a specific project within the [team], managed through Jira, with weekly reviews and a presentation at the end." That is a description of work.`,
      },
      {
        heading: 'How the Magenta Networks fellowship is structured',
        body: `The fellowship runs on a model designed to produce compounding experience:\n\n**80% execution.** You work on live client deliverables inside real Magenta Networks engagements, managed through Jira, GitHub, and Slack — the same stack used by the permanent team. Your outputs go into production, not into a drawer.\n\n**20% mentorship.** Weekly one-to-ones with Singapore-based tech and strategy leads. Explicit feedback on your work. A final Capstone Demo Day where you present your deliverables to Magenta Networks stakeholders.\n\n**Exit deliverable.** A verified fellowship certificate, a detailed skills report, and a reference from your named supervisor at Magenta Networks.`,
      },
      {
        heading: 'When to apply and what to expect',
        body: `The fellowship is selective — top 10% of assessment scores. The assessment takes 20 minutes and is free to take. You do not need a CV or prior work experience to apply.\n\nThe intake process is designed to identify applied reasoning capacity, not credentials. Students with strong assessment scores but no prior experience have been selected. Students with impressive CVs but weak assessment scores have not.`,
      },
    ],
    cta: { label: 'Apply for the fellowship →', href: '/work-experience/apply' },
  },
  {
    slug: 'oecd-teenage-part-time-work-benefits',
    title: 'Why a 3-Month Fellowship Beats a Part-Time Job for Your Career',
    description: 'OECD research on work experience distinguishes between structured and unstructured exposure. The difference in career outcomes is larger than most students expect.',
    tag: 'University Fellowship',
    readTime: '4 min',
    sections: [
      {
        heading: 'What the OECD says about unstructured work experience',
        body: `The OECD's research on youth employment consistently distinguishes between two types of work experience: structured placements in which the student has a defined role, a supervisor, and a specific learning objective — and unstructured exposure, which includes part-time service jobs, casual work, and general office support.\n\nBoth have value. Unstructured work builds financial independence, resilience, and an understanding of how organisations function at ground level. But the career acceleration effect — faster promotion, higher starting salary, greater job satisfaction at five years — is significantly stronger for structured experience.`,
      },
      {
        heading: 'Why part-time work does not produce the same signals',
        body: `A part-time job in a café or a retail shop is difficult to use in a professional application. You cannot easily describe a deliverable, because the work resets daily. You cannot point to a project, because there are no projects. You cannot ask your supervisor for a reference that names your contribution to a specific outcome.\n\nThis is not a criticism of part-time work — it is a description of what it is and what it is not. It builds certain capacities well. It does not produce the kind of signal that a graduate recruiter is looking for.`,
      },
      {
        heading: 'What three months of structured fellowship produces',
        body: `The OECD research suggests that three months of structured placement — with a defined project, explicit feedback, and a named supervisor — produces career outcomes equivalent to twelve or more months of unstructured exposure.\n\nThe mechanism is density: in three months inside a real client engagement, you make hundreds of professional decisions, receive explicit feedback on most of them, and produce work that exists after you leave. That density of applied experience is what compresses the learning curve.`,
      },
      {
        heading: 'The fellowship as a structured investment',
        body: `The Magenta Networks fellowship is designed around exactly the model the OECD identifies as high-return: defined deliverables, weekly supervisor feedback, a final presentation to stakeholders, and a verified exit record.\n\nFor a university student weighing a part-time job against a fellowship, the OECD framing is useful: both require time. One produces transferable credentials and a specific reference. The other produces income and general professional experience. Neither is wrong — but they are not equivalent if your goal is to accelerate your career trajectory.`,
      },
    ],
    cta: { label: 'View the fellowship structure →', href: '/work-experience' },
  },
]

export const INSIGHT_SLUGS = INSIGHT_POSTS.map(p => p.slug)
