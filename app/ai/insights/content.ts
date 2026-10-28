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
  {
    slug: 'how-to-pass-internship-aptitude-test',
    title: 'How to Pass an Internship Aptitude Test: What the Questions Actually Measure',
    description: 'Aptitude tests do not measure what you know — they measure how you think. Here is what each section is really testing and how to prepare for it.',
    tag: 'High School Internship',
    readTime: '7 min',
    sections: [
      {
        heading: 'Why aptitude tests are not knowledge tests',
        body: `Most students preparing for an internship aptitude test make the same mistake: they try to revise content. They read articles about business, brush up on maths, and review vocabulary lists. None of this is wrong, exactly, but it misses the point of what an aptitude test is designed to do.\n\nAptitude tests do not measure what you have been taught. They measure how you process information under mild time pressure. The verbal section is not testing your vocabulary — it is testing whether you can read a short passage carefully and draw only the conclusions the passage supports, without importing your own assumptions. The numerical section is not testing your ability to multiply — it is testing whether you can read a table or graph accurately and perform the exact calculation a question asks for, rather than the one you assume it means.\n\nThis distinction matters enormously for preparation. Revising content can help you feel more confident, but what actually moves your score is practising the cognitive habits the test is built to measure: precision, patience, and the willingness to check your reasoning against the question rather than against your instincts.`,
      },
      {
        heading: 'What verbal reasoning sections actually test',
        body: `A verbal reasoning section typically presents you with a short passage — usually two to four paragraphs — followed by a series of statements. For each statement, you are asked whether it is true, false, or impossible to determine from the passage alone. The last option is critical and almost always underused.\n\nStudents who perform poorly on verbal reasoning almost always do so for one of two reasons. Either they confirm statements that feel consistent with the passage's general theme without checking whether the passage explicitly supports them — or they mark statements as false because they contradict their own knowledge, even when the passage is simply silent on the matter.\n\nThe skill being tested is disciplined reading: the ability to evaluate a claim against only the evidence in front of you, not against what you believe to be true about the world. The best preparation for this is to practise on sample passages and, after each one, review every question you got wrong and ask specifically: did I import an assumption that the passage did not make? With enough practice, that reviewing habit becomes automatic, and your scores will reflect it.`,
      },
      {
        heading: 'What numerical reasoning sections actually test',
        body: `Numerical reasoning sections are built around tables, graphs, and charts. The calculations required are almost never difficult — percentages, ratios, basic arithmetic. The source of error is almost always reading the data incorrectly rather than calculating incorrectly.\n\nCommon failure modes include: misreading the units on a table axis (thousands versus millions is a common trap), answering the question you expected rather than the question asked, and rushing through a multi-step calculation and making an error in the first step that invalidates all subsequent work.\n\nThe most effective preparation is to work through practice questions slowly and deliberately. For every question, identify the data you need before you do any arithmetic — write it down if you can — then perform the calculation in order, checking each step. Many students who feel weak at numerical reasoning discover, after a week of deliberate practice, that their arithmetic is fine and the issue was simply reading accuracy. Timed practice is important, but only once you have established the right habits at an untimed pace. Speed follows accuracy; it almost never precedes it.\n\nFor the domain section specifically — whether that is Technology, Business, Data Analytics, or Digital Marketing — the calculation requirements are lighter but the contextual reasoning is heavier. You need to understand what a metric means before you can evaluate a question about it.`,
      },
      {
        heading: 'What situational judgement sections actually test',
        body: `Situational judgement tests present you with a workplace scenario — a difficult conversation, a competing priority, a colleague behaving inappropriately — and ask you to rank or select responses. Many students find these the easiest section. Many are wrong about that.\n\nThe answers that score highest in a professionally designed situational judgement test are not the ones that seem nicest or most decisive. They are the ones that reflect how effective professionals actually behave: gathering information before acting, addressing problems directly rather than avoiding them, prioritising the interests of the team and the work over personal comfort, and escalating appropriately when a situation exceeds your authority.\n\nThe failure mode here is social desirability bias — choosing the answer that seems like what a good person would do rather than what an effective professional would do. The difference is subtle but consistent: a good person might avoid a difficult conversation to preserve harmony; an effective professional has the conversation because harmony built on avoidance is not stable. Practise by reading the explanations for every answer, not just the correct one. Understanding why the second-ranked answer is worse than the first is often more instructive than identifying the best answer correctly.`,
      },
      {
        heading: 'A four-week plan that actually works',
        body: `The preparation structure that consistently produces the best results is short, daily practice rather than occasional long sessions. Thirty minutes every day for four weeks beats four hours every weekend because aptitude testing rewards cognitive habits, and habits are built through repetition, not through occasional effort.\n\nWeek one: start with untimed verbal reasoning practice. Read each passage twice, annotate the key claims, and evaluate every statement against the text alone. Review every error.\n\nWeek two: add numerical reasoning. Practise reading data carefully before calculating. Identify the failure mode in each wrong answer — was it a reading error or an arithmetic error?\n\nWeek three: bring both sections into timed practice. Use a stopwatch and work at approximately the pace the test requires. Identify where you feel rushed and slow down those specific steps.\n\nWeek four: take the Eduentry assessment. It is the most direct preparation for a real internship aptitude test because it is built on the same principles — domain-specific scenario questions rather than abstract puzzles. Review your results section by section and note where your reasoning was sound versus where you made assumptions the question did not support. That debrief is worth more than any additional revision session.`,
      },
    ],
    cta: { label: 'Take the Eduentry assessment →', href: '/apply' },
  },
  {
    slug: 'best-work-experience-year-10-uk',
    title: 'The Best Work Experience for Year 10 Students in the UK: What Actually Counts',
    description: 'The type of placement matters more than the brand name. Here is what makes work experience genuinely useful at 15 — and how to get it when you have no contacts.',
    tag: 'High School Internship',
    readTime: '7 min',
    sections: [
      {
        heading: 'Why most Year 10 work experience is wasted',
        body: `The standard Year 10 work experience week — one week, arranged by school, usually at a family connection's workplace — is one of the most universally under-exploited opportunities in British secondary education. Students arrive without a brief, spend the week watching people work, are given filing tasks or administrative support jobs that require no judgement, and leave with a broad sense of what an office smells like but nothing concrete to show for the time.\n\nThis is not entirely the student's fault. It is the structure that fails them. An unstructured observation week produces nothing that can be referenced in a personal statement, quoted in an interview, or built upon in a Year 11 application. It generates a line on a CV — "work experience, May 2024" — that any experienced reader will pass over without noting.\n\nThe evidence on work experience outcomes is consistent: structured experience, in which a student has a defined task, a specific output, and a supervisor who reviews their work, produces measurably better outcomes in both subsequent applications and interview performance. The brand name of the employer is almost entirely irrelevant compared to these structural factors.`,
      },
      {
        heading: 'What makes work experience "structured"',
        body: `Structured work experience has three components that distinguish it from observation. The first is a defined task: something you are responsible for completing, with a clear scope and a deadline. It does not have to be complex. A one-page summary of a competitor's product range is a task. Answering phones while someone else does real work is not.\n\nThe second component is a named supervisor: someone who has agreed to review your work, give you feedback on it, and write a reference that describes what you actually did. Generic references from HR teams that say "she was a pleasure to have on the team" are worth almost nothing in an application context. A specific sentence from a line manager — "she was asked to research and summarise three competitor pricing models, and her summary was used in our planning meeting" — is worth considerably more.\n\nThe third component is a tangible output: something that exists after you leave. It does not have to be impressive by professional standards. A short report, a data summary, a set of structured notes, a presentation slide deck — any of these constitutes an output. An output gives you something concrete to describe in applications and interviews. Without one, you are describing observation rather than experience, and experienced readers can tell the difference.`,
      },
      {
        heading: 'How to get structured experience when you have no contacts',
        body: `The most common barrier students cite is not having contacts in relevant industries. This is a real constraint, but it is a smaller one than most students assume. There are three routes that work regardless of network.\n\nThe first is cold outreach. A short, specific email to a local business — not a form letter, but a one-paragraph email that names the company, describes what you want to work on, and says when you are available — gets a positive response often enough to be worth sending to ten or fifteen companies. Most fifteen-year-olds never try this. Most companies that receive a specific, well-written request from a fifteen-year-old give it more consideration than a polished CV from a graduate.\n\nThe second is sector-specific schemes. Most FTSE 100 companies run formal Year 10 and Year 11 work experience weeks. HSBC, Deloitte, PwC, Barclays, Google, and many others have structured programmes with application processes. These are competitive but accessible. The Eduentry assessment report is a useful supporting document for these applications because it gives you a measurable signal of your aptitude that complements the personal statement.\n\nThe third is local SME outreach. Small and medium businesses are often more willing to give a student a real task than large organisations, because they are less likely to have a formal programme and more likely to need the extra hands. A well-targeted email to a local marketing agency, data consultancy, or tech business can produce a more genuinely structured experience than a week shadowing at a household name.`,
      },
      {
        heading: 'What to do before, during, and after the placement',
        body: `Before the placement, have one conversation with your supervisor about expectations. Ask: is there a specific task I will own? What does success look like for that task? How will I get feedback? These questions are not presumptuous — they are professional. They signal that you understand what structured work experience looks like, which is itself impressive at fifteen.\n\nDuring the placement, keep a short daily log: what did you work on, what decisions did you make, what did you observe that surprised you? This log becomes the raw material for every application and interview that follows. Without it, the details that matter most — the specific challenge, the specific decision, the specific outcome — fade in the weeks after the placement ends.\n\nAfter the placement, ask for a written reference before you leave the building. Ask specifically for a reference that names the task you worked on and an outcome, however modest. Then write a short reflection — two or three paragraphs — on what you did, what you learnt, and how it connects to what you want to study or do next. This reflection is the personal statement section on work experience, effectively pre-written.\n\nA Year 10 placement that follows this structure is worth significantly more than a Year 12 gap-week with a famous brand name. It gives you two additional years to build on it — and in competitive university and internship applications, that compounding time advantage is hard to overstate.`,
      },
    ],
    cta: { label: 'Get your internship readiness report →', href: '/apply' },
  },
  {
    slug: 'data-analytics-internship-students-uk',
    title: 'Data Analytics Internships for Students Under 18: What They Test and How to Get One',
    description: 'Data analytics internships at school age are rare but accessible. Here is what they actually involve, what skills are tested, and how to demonstrate data literacy before you have a degree.',
    tag: 'High School Internship',
    readTime: '7 min',
    sections: [
      {
        heading: 'What data analytics work actually looks like at student level',
        body: `The phrase "data analytics internship" covers a wide range of activities, and understanding the realistic scope for a sixteen-year-old is the first step to preparing effectively for one.\n\nAt student level, data analytics placements typically involve one or more of the following: cleaning a dataset (removing duplicates, correcting obvious errors, standardising formats), producing a summary table or chart from a provided dataset, writing a short commentary on what a dashboard shows and what it implies for a business decision, or researching and compiling data from public sources into a structured format. None of these requires a degree in statistics. All of them require careful attention, good judgement about what the data does and does not show, and the ability to communicate a finding clearly to someone who was not involved in producing it.\n\nWhat they do not typically involve at student level: building machine learning models, writing complex Python scripts, designing databases from scratch, or making recommendations with major commercial implications. Students sometimes disqualify themselves from applying for data placements because they assume the technical bar is higher than it is. The fundamental requirement is data literacy — the ability to work carefully with numbers and communicate what they mean — not advanced programming skill.`,
      },
      {
        heading: 'The skills that data selectors test at student level',
        body: `When a data team reviews a student application, they are evaluating three things. The first is numerical accuracy: can this person read a table correctly, perform a percentage calculation without error, and identify an outlier in a dataset? These seem basic, but many student applicants fail simple accuracy tests because they rush or because they are not in the habit of checking their work.\n\nThe second is interpretive judgement: given a dataset or a chart, can the student identify what is actually interesting rather than just what is numerically largest? A good data analyst does not report the biggest number — they report the number that most changes what a decision-maker should do. That judgement is exercised at every level of seniority and is the quality selectors most want to see evidence of.\n\nThe third is communication clarity: can the student translate a data finding into a sentence that a non-technical reader would understand and find actionable? This is harder than it sounds. Data people often default to describing the data rather than interpreting it — "the conversion rate was 3.2% last month" rather than "the conversion rate last month was lower than the previous three months and may indicate a problem with the new checkout flow." The second sentence is useful. The first is just a number.\n\nAll three of these skills are tested in the Eduentry Data Analytics domain section and can be developed through deliberate practice in the weeks before an application.`,
      },
      {
        heading: 'How to demonstrate data literacy without a degree',
        body: `The most effective way to demonstrate data literacy at student level is to produce one concrete, real piece of data work and be able to describe it specifically. It does not need to be technically impressive. A Google Sheets analysis of publicly available data — sports statistics, weather data, school performance tables, anything that genuinely interests you — that produces one clear, well-evidenced finding is enough to differentiate you from most student applicants.\n\nThe key elements that make this kind of project useful for applications are: you chose the data source yourself, you had a question you wanted to answer, you used at least one formula or calculation to produce an intermediate result, and you can describe what you found and why it was interesting. If you can say "I was curious about whether average GCSE scores correlated with school funding per pupil, so I pulled both datasets from the ONS, matched them by local authority, and produced a scatter chart — the correlation was weaker than I expected because of confounding factors" then you have demonstrated exactly the kind of thinking a data team wants to see.\n\nBeyond personal projects, the most useful credentials at this stage are completion certificates from Google's Data Analytics Certificate (free on Coursera's audit tier), Microsoft's Data Fundamentals certification (affordable and widely recognised), or even the completion of Khan Academy's statistics unit. These are not substitutes for demonstrated ability, but they provide credible third-party evidence that you have engaged seriously with the relevant concepts.`,
      },
      {
        heading: 'Where to find data analytics placements under 18 in the UK',
        body: `Data analytics internships for students under eighteen are less commonly advertised than other types of work experience, but they exist across a wider range of organisations than most students realise.\n\nThe most accessible route is through formal schemes at data-intensive organisations: the NHS Data and Analytics programmes, HMRC's data work experience offerings, large retailers like Tesco and ASOS that run student data weeks, and financial services firms including HSBC, Barclays, and insurance companies that have graduate-style pipeline programmes starting at sixth form age. Most of these have formal application processes and benefit from the kind of supporting evidence — a specific personal statement, an Eduentry assessment result — that demonstrates prepared intent rather than general interest.\n\nA second route is through smaller data consultancies and analytics agencies. These organisations often cannot offer the scale of a formal corporate scheme but frequently provide more genuinely structured work because a student placed with them may actually be contributing to live client work. A cold email to a local analytics consultancy that names a specific area of interest — retail data, health data, sports analytics — and references an Eduentry domain score is a more effective approach than a general expression of interest.\n\nThe third route is voluntary data work for charities and community organisations. Many charities hold datasets — donation records, programme outcomes, beneficiary data — that they lack the internal resource to analyse properly. Offering to produce a simple analysis report is a genuine service and produces a real output that can be referenced in subsequent applications.`,
      },
    ],
    cta: { label: 'Take the Data Analytics assessment →', href: '/apply' },
  },
  {
    slug: 'ucas-personal-statement-work-experience',
    title: 'How to Write About Work Experience in Your UCAS Personal Statement',
    description: 'Admissions teams look for context, contribution, and reflection — not a list of placements. Here is the structure that works, with example sentences.',
    tag: 'High School Internship',
    readTime: '7 min',
    sections: [
      {
        heading: 'Why most personal statements waste their work experience section',
        body: `The work experience section of a UCAS personal statement is one of the most consistently mishandled parts of an application. Students who have done meaningful placements routinely undersell them by describing what they observed rather than what they contributed. Students who have done less meaningful placements often compensate by over-claiming — describing generic administrative tasks as if they were strategic responsibilities.\n\nAdmissions tutors are experienced readers. They can tell within a sentence whether a student is describing something they genuinely engaged with or constructing a narrative around a week they spent filing and making tea. The consequence of over-claiming is worse than the consequence of honest modesty: an admissions interviewer who picks up an inconsistency between a personal statement claim and the student's account in person will question the reliability of the entire statement.\n\nThe three-part structure that admissions teams consistently respond to positively is: context, contribution, and reflection. Context establishes what the placement involved and what you were asked to do. Contribution describes what you actually did — specifically, not generically. Reflection explains what you took from the experience that connects to your academic or professional direction. This structure works because it matches the way admissions tutors are trained to evaluate evidence of applied learning.`,
      },
      {
        heading: 'The three-part structure: context, contribution, reflection',
        body: `Context means establishing the placement concisely and specifically. Not "I did work experience at a marketing agency," but "I spent two weeks at a small digital marketing agency working on a client campaign brief for a food retail client." The specificity signals that something real happened. Vague context signals that nothing memorable did.\n\nContribution means describing your role in terms of what you did, not what you were exposed to. The language of contribution is active: "I was asked to analyse," "I produced," "I wrote," "I presented," "I identified." The language of observation is passive: "I watched," "I sat in on," "I had the opportunity to see." One of these sentences belongs in a personal statement. The other belongs in a diary.\n\nReflection means connecting the placement to something larger — a question you are now more curious about, a skill you want to develop further, a concept from your A-level curriculum that you saw applied in practice. Reflection is where the personal statement earns its name. It is the part that is uniquely yours: no other applicant had your specific combination of placement experience and academic interest, and this is where that intersection becomes visible.\n\nA single well-structured paragraph using this framework is worth more than three paragraphs of vague description. Most personal statements have room for one or two such paragraphs, and students who fill them with this structure consistently receive better feedback in admissions interviews.`,
      },
      {
        heading: 'Example sentences that work — and ones that do not',
        body: `Sentences that work are specific, active, and connect to an intellectual or professional direction:\n\n"During a two-week placement at a data consultancy, I was asked to clean and summarise a customer dataset and present my findings to the analytics team — an experience that showed me how the statistical concepts I had studied in Maths were applied to real commercial decisions, and deepened my interest in how data quality affects the reliability of business insights."\n\n"I spent a week at a technology start-up in Year 11, where I was given a brief to research and compare three project management tools and produce a recommendation document — work that introduced me to how technology teams make procurement decisions and gave me a much more grounded understanding of the software development lifecycle I had only read about theoretically."\n\nSentences that do not work are generic, passive, and connect to nothing specific:\n\n"I did work experience at an accounting firm where I learned a lot about the business world and improved my communication skills."\n\n"I spent a week shadowing a manager at a tech company which gave me a better understanding of how the industry works."\n\nThe difference is not about the quality of the placement — it is about the quality of the writing. A modest placement described with precision and reflection reads better than an impressive placement described with vague enthusiasm.`,
      },
      {
        heading: 'How to reference an Eduentry assessment result specifically',
        body: `If you have completed an Eduentry assessment and have a readiness report, you have a concrete data point that can be referenced directly in a personal statement. Unlike most self-reported skills, your Eduentry score is a third-party measurement that an admissions team can take at face value.\n\nThe most effective way to reference it is to embed it in a reflection that connects your assessed aptitude to your academic direction. For example: "Having scored in the 84th percentile for the Technology domain on the Eduentry internship assessment, I was selected for a structured placement at a software development firm — an experience that confirmed both my technical aptitude and my interest in how software teams manage complexity."\n\nAlternatively, if you did not go on to a placement but used the assessment as a preparation tool: "After using the Eduentry assessment to identify gaps in my commercial awareness ahead of Year 12 applications, I developed a targeted reading practice and subsequently improved my understanding of the market reasoning questions that appeared in my school mock interviews."\n\nThe key is to use the assessment result as evidence for a claim rather than as a credential in itself. An admissions tutor does not know what Eduentry is — you need to contextualise it as a verified aptitude measurement. The phrase "third-party assessment" or "domain-specific aptitude test" is enough to establish credibility without requiring the reader to recognise the brand.`,
      },
    ],
    cta: { label: 'Get your assessment report →', href: '/apply' },
  },
  {
    slug: 'digital-marketing-internship-no-experience',
    title: 'Getting a Digital Marketing Internship with No Experience: From Assessment to Placement',
    description: 'You do not need a portfolio to get a digital marketing placement at 16. You need to understand what marketing actually is — and be able to show it.',
    tag: 'High School Internship',
    readTime: '7 min',
    sections: [
      {
        heading: 'What "digital marketing" actually means in a placement context',
        body: `Digital marketing is one of the most widely misunderstood fields by students applying for their first placement in it. Most applications reference experience with social media platforms, content creation, or a personal following. These are not irrelevant, but they describe consumer behaviour, not professional marketing practice.\n\nIn a real placement context, digital marketing involves decisions: which channel to use for which objective, how to allocate budget across a campaign, how to interpret performance data and adjust the campaign mid-flight, how to write copy that serves a specific goal for a specific audience rather than expressing a general brand sentiment. The tools change constantly — platforms introduce new formats, algorithms shift, attribution models evolve — but the underlying discipline of matching message to audience to channel to objective is stable, and it is this discipline that placements test and develop.\n\nA student who can explain why a brand selling luxury skincare to women over forty should not focus its budget on TikTok organic reach is demonstrating strategic digital marketing thinking. A student who says they can create engaging content for TikTok is describing a skill that has a great many competitors. The difference in how selectors respond to these two framings is significant.`,
      },
      {
        heading: 'The skills that actually matter — not posting on Instagram',
        body: `The skills that make a student placement candidate credible to a digital marketing team have almost nothing to do with the size of their personal social media presence. They fall into four categories.\n\nThe first is analytical literacy: the ability to read a marketing dashboard — sessions, conversions, bounce rate, CTR, CPM — understand what each metric means, and identify what a set of metrics is telling you about a campaign's performance. This can be developed by exploring Google Analytics demo accounts and reading marketing case studies that include performance data.\n\nThe second is copywriting instinct: the ability to write a headline, a call to action, or an email subject line that serves a specific goal for a specific audience. This is not about creative flair — it is about discipline. Short, specific, action-oriented copy outperforms long, clever copy in almost every measurable context, and understanding why is a skill a placement candidate can demonstrate.\n\nThe third is channel strategy: understanding when to use which platform and why, based on where the audience is and what format serves the communication objective. The fourth is compliance awareness: understanding GDPR as it applies to marketing communications, the ASA rules on influencer disclosure, and the basic rules about what claims you can and cannot make in advertising. Students who demonstrate these four skill areas stand out regardless of their personal social media history.`,
      },
      {
        heading: 'Going from zero to a credible application',
        body: `The most effective path from no experience to a credible digital marketing application has four steps, and none of them require a placement to begin with.\n\nStep one is completing Google's Digital Marketing and E-commerce Certificate on Coursera. This is free to audit and takes approximately forty hours. It covers SEO, paid ads, email marketing, analytics, and social media strategy at a foundational level. A certificate of completion is a credible third-party credential that an application can reference.\n\nStep two is building one concrete example of applied marketing thinking. This does not have to be a live campaign. It can be a documented analysis: choose a real brand, review their digital presence across two or three channels, identify one thing they are doing well, one thing they could improve, and how you would measure whether the improvement worked. Written up as a one-page document, this analysis demonstrates strategic thinking and is something you can share with a placement selector.\n\nStep three is completing the Eduentry Digital Marketing assessment. Your percentile score in the domain section is a third-party measurement of your marketing reasoning ability. A strong result — particularly in the analytics and campaign planning sections — tells a selector something concrete about your readiness that a personal statement cannot.\n\nStep four is targeted outreach to digital marketing agencies and in-house marketing teams. A short email that references your Google certification, your self-produced brand analysis, and your Eduentry domain score is a credible application from a student with no prior professional experience.`,
      },
      {
        heading: 'How to use the Eduentry result in your application',
        body: `The Eduentry Digital Marketing assessment tests exactly the areas that marketing selectors care about: SEO reasoning, analytics interpretation, campaign planning, content strategy, paid media logic, and compliance. Your result gives you a percentile score that places your performance against a global cohort of students your age.\n\nThe most effective way to use this result in an application is to quote it specifically and briefly: "I scored in the X percentile for the Eduentry Digital Marketing aptitude assessment, which covers SEO, paid media, analytics interpretation, and campaign planning." This sentence does three things: it names a third-party measurement, it describes what was measured, and it provides a number that places you in context.\n\nPair the score with your one-page brand analysis and your Google certificate of completion, and you have a credible application package from a student with no prior work experience. The three components together demonstrate that you have done specific, deliberate preparation rather than just expressing general enthusiasm for marketing.\n\nThe final step is the follow-up. Most students send one application and wait. Students who get placements often send ten, follow up once after a week, and adapt their approach based on any feedback they receive. The market for digital marketing placements at school age is not saturated — the combination of demonstrated analytical ability, a clear interest, and a direct, specific approach to outreach is rarer than it should be, and selectors respond to it.`,
      },
    ],
    cta: { label: 'Start the Digital Marketing assessment →', href: '/apply' },
  },
]

export const INSIGHT_SLUGS = INSIGHT_POSTS.map(p => p.slug)
