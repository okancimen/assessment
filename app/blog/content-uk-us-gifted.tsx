import Link from 'next/link'
import { Bullet, Callout, Check } from './blog-components'

export const UK_CONTENT_US_GIFTED: Record<string, React.ReactNode> = {

  'gifted-program-testing-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Gifted identification in the United States is decentralised, fragmented, and frequently misunderstood
        by families who are new to the process. Unlike the UK's 11+ or Australia's OC test, there is no
        national gifted exam — each state, and often each district, sets its own rules for who qualifies,
        which tests are used, and what services are provided. This guide explains how gifted identification
        actually works across the US, what scores are required, and how to navigate the process for your child.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Score Is Required for Gifted Programs?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Most US gifted programs require an IQ of 130 or above — the 98th percentile — for formal identification, though thresholds vary significantly by district and program type.</strong> New York City's Gifted &amp; Talented program has historically required the 99th percentile; pull-out enrichment programs typically accept the 90th–95th percentile.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          It helps to understand the three tiers of provision that exist across most states. Full-time
          self-contained gifted classrooms — where a child is placed in a dedicated class with other
          identified students — typically require the highest scores (97th–99th percentile). Part-time
          pull-out programs, where a child leaves class for enrichment sessions, generally accept the 90th–95th
          percentile. And informal differentiation within the regular classroom rarely has a formal cutoff
          but is typically extended to children in the top 10–15% of the class.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Program Type</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical Threshold</th>
                <th className="text-left p-4 font-semibold text-gray-700">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Full-time gifted classroom', '97th–99th percentile (IQ 130+)', 'NYC G&T, Texas PACE programs'],
                ['Magnet GT school', '95th–99th percentile', 'Thomas Jefferson HS, NYC Specialized HS'],
                ['Part-time pull-out enrichment', '90th–95th percentile (IQ 120+)', 'Most district-level GT programs'],
                ['Informal in-class enrichment', 'Top 10–15% of class', 'Teacher-directed differentiation'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-800 text-sm">{row[0]}</td>
                  <td className="p-4 text-indigo-700 text-sm font-medium">{row[1]}</td>
                  <td className="p-4 text-gray-500 text-sm">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong className="text-indigo-900">Important:</strong> gifted education is not federally mandated
          in the US. States like Texas and Georgia have strong mandated programs; others provide minimal
          funding or none at all. Even within states, district-to-district variation is enormous. Always
          check your specific district's policy before assuming your child qualifies or that services exist.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Tests Are Used for Gifted Identification?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The US gifted identification process typically involves two stages: a group-administered screening
          test followed by an individually administered IQ test for children who score above the initial
          threshold. The most common tests are:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              name: 'CogAT (Cognitive Abilities Test)',
              detail: 'The most widely used group screening test for gifted identification in the US. Measures verbal, quantitative, and nonverbal reasoning in three separate batteries. Standard Age Scores (mean 100, SD 16) and percentile ranks. Most districts use CogAT in Grades 2–3 as the first stage of identification.',
            },
            {
              name: 'WISC-V (Wechsler Intelligence Scale)',
              detail: 'The most common individual IQ test used for gifted identification. Administered one-on-one by a psychologist and produces a Full Scale IQ (FSIQ) plus index scores for verbal comprehension, fluid reasoning, working memory, and processing speed. The gold standard for formal gifted identification.',
            },
            {
              name: 'NWEA MAP Growth',
              detail: 'An adaptive achievement test used by many districts to identify academically advanced students. Reports RIT scores on a continuous scale. Gifted referral typically triggered at the 90th–95th percentile for the student\'s grade. See our MAP scores guide for RIT benchmarks.',
            },
            {
              name: 'OLSAT (Otis-Lennon School Ability Test)',
              detail: 'Used primarily in New York City for G&T identification, alongside the NNAT. Measures verbal and nonverbal reasoning skills. NYC has historically required the 99th percentile combined across OLSAT and NNAT for entry to citywide gifted programs.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{name}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Request Gifted Testing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most common entry point is a teacher referral, but parents can also initiate the process
          directly. Contact your child's school principal or the district's gifted coordinator and ask
          about the referral process and testing window — most districts test in the fall, so a late
          referral means waiting until the following year.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If the school is unresponsive, send a written request for evaluation. Many states require
          the district to respond within a defined timeframe when a written request is received.
          Document everything in writing. If the district declines testing and you believe your child
          qualifies, you have the right to commission an independent educational evaluation (IEE)
          with a private psychologist — typically at your own expense ($1,000–$3,000).
        </p>
        <Bullet>Check your state's gifted education mandate — some states require districts to identify and serve gifted students; others do not.</Bullet>
        <Bullet>Ask which test your district uses, and when the testing window opens.</Bullet>
        <Bullet>Request a copy of the referral criteria and score thresholds in writing.</Bullet>
        <Bullet>If privately testing, a licensed psychologist administering the WISC-V produces the most widely accepted results.</Bullet>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">High Achiever vs Gifted: An Important Distinction</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many parents are surprised to learn that high school grades are not a reliable proxy for giftedness.
          High achievers perform well because they work hard, follow instructions, and respond to praise.
          Genuinely gifted students often have unusually high reasoning ability that does not translate into
          consistently strong grades — particularly if they are bored, unchallenged, or twice-exceptional
          (gifted alongside a learning difference such as dyslexia or ADHD).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The CogAT and WISC-V are designed to measure underlying cognitive ability independently of
          academic performance. A child can score at the 99th percentile on a reasoning test while
          receiving mediocre grades — and the reverse is equally common. If you suspect your child is
          gifted but their grades do not reflect it, cognitive testing is the right next step rather
          than waiting for grades to improve.
        </p>
        <Callout>
          Giftedness is also frequently domain-specific. A child can score at the 99th percentile in verbal
          reasoning while being average in quantitative reasoning — this is called domain-specific giftedness
          and is actually more common than across-the-board high scores. The CogAT measures all three
          batteries separately for exactly this reason.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/nwea-map-scores-explained', tag: 'Assessment', title: 'NWEA MAP Scores Explained: What RIT Scores Mean and How to Interpret Your Child\'s Results' },
            { href: '/blog/how-to-prepare-gifted-test', tag: 'Guide', title: 'How to Prepare Your Child for a Gifted Test: A Practical Guide for US Families' },
            { href: '/blog/what-is-a-standardised-score', tag: 'Guide', title: 'What Is a Standardised Score? A Clear Guide for Parents' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),

  'nwea-map-scores-explained': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Every year, millions of US students sit the NWEA MAP Growth test — and every year, millions of
        parents receive a report with a RIT score and percentile rank that they do not fully understand.
        This guide explains what RIT scores actually mean, what counts as a good score at each grade level,
        which scores qualify for gifted identification, and how to track your child's growth over time.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a RIT Score?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>A RIT (Rasch Unit) score is a position on a continuous equal-interval scale that spans the entire K–12 curriculum — unlike a percentage correct, the same RIT score means the same level of knowledge regardless of grade.</strong> The national average in Grade 3 is approximately RIT 200 in Math; by Grade 8 this rises to approximately RIT 221.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Because the scale is continuous, you can track meaningful growth year over year. A child who
          scores RIT 205 in Grade 3 and RIT 218 in Grade 5 has grown 13 RIT points — above the national
          average growth of approximately 10–12 points over two years. This growth trajectory is often
          more informative than the absolute score: a child growing faster than projected is accelerating
          relative to peers, even if their current score is not yet in the top percentiles.
        </p>
        <Callout>
          <strong className="text-indigo-900">RIT scores grow, then plateau.</strong> Students typically
          gain 6–8 RIT points per year in the early grades (K–3), decelerating to around 3–5 points
          per year by Grade 6–7. This is normal — the scale is designed so that each RIT point represents
          a consistent increment of learning, which becomes harder to accumulate as students advance.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">RIT Score Benchmarks by Grade</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The table below shows approximate fall MAP Math RIT scores by grade and percentile, based on
          NWEA national norms. Reading and Language Usage follow similar patterns with slightly different
          absolute values.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left p-4 font-semibold text-gray-700">National Avg (50th %ile)</th>
                <th className="text-left p-4 font-semibold text-gray-700">75th %ile</th>
                <th className="text-left p-4 font-semibold text-gray-700">90th %ile</th>
                <th className="text-left p-4 font-semibold text-gray-700">95th %ile</th>
                <th className="text-left p-4 font-semibold text-gray-700">99th %ile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Grade 3', '~188', '~197', '~204', '~208', '~218'],
                ['Grade 4', '~197', '~206', '~214', '~218', '~228'],
                ['Grade 5', '~205', '~214', '~222', '~227', '~237'],
                ['Grade 6', '~211', '~220', '~228', '~233', '~243'],
                ['Grade 7', '~215', '~224', '~232', '~237', '~247'],
                ['Grade 8', '~218', '~228', '~236', '~241', '~251'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-800">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                  <td className="p-4 text-gray-600">{row[3]}</td>
                  <td className="p-4 text-indigo-700 font-medium">{row[4]}</td>
                  <td className="p-4 text-indigo-700 font-medium">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Note that the 95th and 99th percentile columns are highlighted — these are the thresholds
          most commonly used for gifted identification referrals. A Grade 5 student scoring Math RIT 227
          is at approximately the 95th percentile; RIT 237 is approximately the 99th percentile.
        </p>
      </section>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Wondering where your child stands globally?</p>
          <p className="text-sm text-gray-600">Our adaptive assessment benchmarks your child against international peers — the same rigorous standard as MAP, PISA, and GCSE — in under an hour.</p>
        </div>
        <a
          href="/your-childs-potential"
          className="shrink-0 inline-block bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors text-center"
        >
          See your child&apos;s potential →
        </a>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What MAP Score Qualifies for Gifted Programs?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most districts that use MAP for gifted referrals set the trigger at the 90th or 95th percentile
          for the child's grade. Exceeding this threshold does not automatically mean a child is identified
          as gifted — it typically triggers a referral for further evaluation, which may include an
          individual cognitive assessment like the WISC-V or CogAT.
        </p>
        <Bullet>90th percentile trigger: common for pull-out enrichment programs and gifted evaluation referrals</Bullet>
        <Bullet>95th percentile trigger: typical threshold for self-contained gifted classroom placement</Bullet>
        <Bullet>99th percentile: required for the most selective programs (NYC G&amp;T, competitive magnet schools)</Bullet>
        <Bullet>Check your district's specific policy — thresholds vary, and some districts use both MAP and a cognitive test together</Bullet>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use MAP Results at Home</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NWEA provides a Family Report after each testing window that translates your child's RIT score
          into grade-level context and projected growth. Most schools share this through a parent portal
          (PowerSchool, Infinite Campus) or as a printed report. If you cannot access results, contact
          your child's teacher directly.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The MAP Reading RIT score also links directly to Lexile measures, which are used to match
          children to appropriately challenging books. A student with a Reading RIT of 200 corresponds
          to roughly Lexile 500–600L. Use your child's Lexile range to choose books that stretch without
          frustrating — this is one of the most effective strategies for accelerating reading growth.
        </p>
        <Callout>
          MAP is an adaptive test of curriculum knowledge — it adjusts to your child's level in real time.
          Unlike aptitude tests, MAP directly measures content knowledge, so regular reading, maths
          practice, and science exposure genuinely improve scores. Cramming immediately before the test
          is ineffective; consistent engagement with learning over months is what moves the needle.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/gifted-program-testing-guide', tag: 'Guide', title: 'Gifted Program Testing Guide: How US Gifted Identification Works and How to Prepare' },
            { href: '/blog/how-to-prepare-gifted-test', tag: 'Guide', title: 'How to Prepare Your Child for a Gifted Test: A Practical Guide for US Families' },
            { href: '/blog/isee-ssat-private-school-guide', tag: 'Assessment', title: 'ISEE vs SSAT: The Complete Guide to Private School Entrance Exams in the US' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),

  'isee-ssat-private-school-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Applying to a US independent school almost always means sitting either the ISEE or the SSAT —
        but the two tests are structurally different, score differently, and suit different types of
        students. Choosing the wrong one, or misreading the score report, can undermine an otherwise
        strong application. This guide covers how each test works, what scores competitive schools expect,
        and how to decide which test gives your child the better chance.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ISEE vs SSAT: Key Differences at a Glance</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>The ISEE reports scores on a stanine scale from 1 to 9 — where 5 is the average among independent school applicants — while the SSAT reports a percentile rank comparing your child to other SSAT takers in the same grade over the past three years.</strong> Both scales mean your child is being compared to a selective, above-average peer group, not the general student population.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              name: 'ISEE (Independent School Entrance Exam)',
              detail: 'No guessing penalty — answer every question. Can be taken once per season (max 3 times per year). Five levels: Primary (Grade 2 entry), Lower (Grades 5–6), Middle (Grades 7–8), Upper (Grades 9–12). Scores reported as stanines (1–9) and scaled scores. Administered by ERB.',
            },
            {
              name: 'SSAT (Secondary School Admission Test)',
              detail: 'Guessing penalty: ¼ point deducted per wrong answer — strategic omission matters. No retake limit. Three levels: Elementary (Grades 3–4), Middle (Grades 5–7), Upper (Grades 8–11). Scores reported as percentile ranks (1–99). Verbal section uses analogies. Administered by SSATB.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{name}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout>
          <strong className="text-indigo-900">Which test should your child take?</strong> If your target
          schools accept either, consider your child's strengths: students who are strong at analogies
          may do better on the SSAT verbal; students who struggle with penalty-for-guessing pressure may
          prefer the ISEE's no-penalty format. Always check whether your target schools specify one test —
          many do, particularly at the Upper level.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Scores Do Competitive Schools Expect?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most competitive US independent schools expect a stanine of 6–7 on the ISEE (the 60th–77th
          percentile range among independent school applicants) or the 65th–75th percentile on the SSAT.
          Highly selective schools — Exeter, Andover, Groton, Harvard-Westlake — typically see admitted
          students with stanine 7–9 or 75th–99th percentile SSAT scores.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          It is critical to remember that these percentiles are relative to other independent school
          applicants, not the general US student population. An ISEE stanine 5 is the median among
          a group that is already academically above average. A stanine 7 on the ISEE corresponds to
          roughly the 77th percentile of independent school applicants — but would rank much higher
          compared to the general student population.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">ISEE Stanine</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx %ile Range</th>
                <th className="text-left p-4 font-semibold text-gray-700">School Selectivity Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['9', '96th–99th', 'Most selective (Exeter, Andover, Trinity)'],
                ['8', '89th–95th', 'Highly selective independent schools'],
                ['7', '77th–88th', 'Competitive independent schools'],
                ['6', '60th–76th', 'Moderately selective schools'],
                ['5', '40th–59th', 'Average applicant range'],
                ['1–4', 'Below 40th', 'Below typical applicant pool'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-bold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ISEE and SSAT Test Structure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both tests cover similar content — verbal reasoning, quantitative reasoning (mathematics),
          and reading comprehension — plus an essay. The ISEE adds a Mathematics Achievement section
          testing curriculum knowledge alongside the Quantitative Reasoning section. The SSAT omits
          this; its math section is reasoning-focused throughout.
        </p>
        <Bullet>ISEE verbal: synonyms and sentence completion (no analogies)</Bullet>
        <Bullet>SSAT verbal: analogies and synonyms — students unfamiliar with analogy formats often find this section harder</Bullet>
        <Bullet>Both tests include an unscored essay — read by admissions offices but not scored</Bullet>
        <Bullet>ISEE Primary level (Grades 2–4) is a shorter, lower-stakes screening tool different in format from the other levels</Bullet>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare Effectively</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Both the ISEE and SSAT reward a combination of verbal ability, mathematical reasoning, and
          reading speed. Preparation should begin 6–12 months before the target test date. Start with
          a diagnostic practice test from official materials (ERB for ISEE, SSATB for SSAT) to identify
          weak areas. For most students, vocabulary building and timed reading comprehension practice
          produce the largest score gains.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          For the SSAT specifically, students must also practise the penalty-for-guessing strategy:
          which questions to attempt and which to skip. A wrong answer on the SSAT costs more than
          an omission, so students who answer every question when unsure will score lower than students
          who develop a consistent skip strategy.
        </p>
        <Callout>
          Consider taking both tests on a trial basis if your schools accept either. A student who
          performs better on one format can then focus preparation on that test. Since the SSAT has
          no retake limit, some families take it multiple times across the testing season and submit
          only the best scores.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/gifted-program-testing-guide', tag: 'Guide', title: 'Gifted Program Testing Guide: How US Gifted Identification Works and How to Prepare' },
            { href: '/blog/nwea-map-scores-explained', tag: 'Assessment', title: 'NWEA MAP Scores Explained: What RIT Scores Mean and How to Interpret Your Child\'s Results' },
            { href: '/blog/how-to-prepare-gifted-test', tag: 'Guide', title: 'How to Prepare Your Child for a Gifted Test: A Practical Guide for US Families' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),

  'how-to-prepare-gifted-test': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        "Can you really prepare for a gifted test?" is the question almost every US parent asks when
        their child's school announces gifted screening. The honest answer depends entirely on which
        test is being administered. This guide explains what is actually trainable in the most common
        US gifted tests — CogAT, OLSAT, NNAT — how long to prepare, and how to build the specific
        skills that move the needle without undermining what the test is measuring.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Prepare for a Gifted Test?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Effective preparation for US gifted tests like the CogAT and OLSAT focuses on abstract reasoning skills rather than content memorisation, because these tests measure cognitive ability rather than learned knowledge.</strong> The most trainable components are matrix reasoning, spatial reasoning, and non-verbal pattern recognition — all of which respond to structured practice over a 3–6 month period.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The key distinction is between group-administered reasoning tests and individually administered
          IQ tests. Tests like the CogAT, NNAT, and OLSAT are more preparation-responsive — not because
          you can "game" them, but because familiarity with question formats, reduced test anxiety, and
          practised reasoning strategies produce genuine improvement. The WISC-V, administered individually
          by a psychologist, is far less preparation-responsive and there are no effective study materials
          for it.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              name: 'CogAT',
              detail: 'More preparation-responsive. Verbal battery: vocabulary building and word analogy practice. Quantitative battery: number series and puzzle books. Nonverbal battery: figure matrix and figure classification practice. Preparation over 6–12 months produces meaningful improvement.',
            },
            {
              name: 'NNAT (Naglieri Nonverbal Ability Test)',
              detail: 'Entirely nonverbal — measures pattern completion, reasoning by analogy, spatial visualisation, and serial reasoning using shapes and figures. No language required. Preparation focuses on matrix reasoning, pattern recognition, and spatial puzzle practice.',
            },
            {
              name: 'OLSAT (Otis-Lennon School Ability Test)',
              detail: 'Used primarily in NYC. Measures verbal and nonverbal reasoning. Verbal section includes following directions, antonyms, sentence completion. Nonverbal section includes figural analogies and series. Both sections respond to targeted practice.',
            },
            {
              name: 'WISC-V',
              detail: 'Individually administered by a psychologist. Not preparation-responsive in terms of content — there are no study materials and attempting to coach answers is counterproductive. Preparation should focus on reducing test anxiety and helping your child feel comfortable in a one-on-one assessment environment.',
            },
          ].map(({ name, detail }) => (
            <div key={name} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{name}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparation Timeline: 3–6 Months Is the Target Window</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cramming in the weeks before a gifted test produces minimal improvement. Cognitive skills
          develop over months, not days. The research consensus is that a 3–6 month horizon of
          consistent practice — not intensive drilling — produces the best results for group-administered
          reasoning tests.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Timeframe</th>
                <th className="text-left p-4 font-semibold text-gray-700">Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['6+ months out', 'Establish baseline: take a diagnostic practice test to identify which of the three batteries (verbal, quantitative, nonverbal) needs the most work. Don\'t buy study books yet.'],
                ['4–6 months out', 'Gentle familiarisation — one battery at a time. Focus on understanding question types, not drilling. 15–20 minutes, 3–4 times per week. Daily reading begins.'],
                ['2–4 months out', 'Structured weekly practice across all three batteries. First timed practice sessions. Review every error together — understanding why is more valuable than the answer.'],
                ['1–2 months out', 'Timed full-length practice tests. Identify remaining weak question types. Targeted skill work on specific gaps. Maintain confidence.'],
                ['Final 2 weeks', 'No new material. Light review only. Focus on routine, sleep, and reducing anxiety. Remind your child what they are good at.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subject-by-Subject Preparation Strategy</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verbal Reasoning (CogAT / OLSAT)</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Vocabulary is the foundation of verbal reasoning performance. A child who has not encountered
              a word cannot answer an analogy or synonym question about it, regardless of how much verbal
              reasoning technique they have practised. Wide reading — across fiction, non-fiction, and
              age-appropriate journalism — is the single most effective long-term vocabulary builder.
              Supplement with a deliberate vocabulary practice habit: daily word study, a vocabulary
              notebook, and discussion of unfamiliar words encountered in reading.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For the specific question formats (word analogies, classification, sentence completion),
              work through question types one at a time before mixing them in timed practice. Children
              who face mixed question types too early confuse formats, which is one of the most common
              error patterns.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantitative Reasoning (CogAT)</h3>
            <p className="text-gray-700 leading-relaxed">
              The CogAT quantitative battery tests number series, number puzzles, and equation building —
              not standard school maths. The most effective preparation is number puzzle books: KenKen,
              Sudoku, and logical number sequence puzzles. These develop the pattern-recognition and
              flexible numerical thinking that the quantitative battery rewards. Standard maths homework
              and worksheets are less effective because the battery is measuring reasoning, not arithmetic fluency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nonverbal Reasoning (CogAT / NNAT / OLSAT)</h3>
            <p className="text-gray-700 leading-relaxed">
              The nonverbal battery is the most commonly underestimated in preparation. It tests
              figure matrices, figure classification, paper folding, and spatial visualisation using
              shapes and symbols rather than words or numbers. Familiarity with question formats reduces
              errors caused by confusion about what is being asked, even if it does not dramatically
              change the underlying spatial ability being tested. Use visual practice books rather than
              text-heavy ones. For younger children, physical activities — Lego construction, tangrams,
              3D puzzles, and block patterns — are genuinely useful preparation that feels like play.
            </p>
          </div>
        </div>

        <Callout>
          <strong className="text-indigo-900">The most important rule:</strong> keep preparation low-pressure
          and positive. Children who associate gifted testing with anxiety, disappointing parents, or
          punishment for wrong answers will underperform relative to their true ability. The goal is
          to help your child feel familiar and confident on test day — not to push them to their
          cognitive limit the night before.
        </Callout>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/gifted-program-testing-guide', tag: 'Guide', title: 'Gifted Program Testing Guide: How US Gifted Identification Works and How to Prepare' },
            { href: '/blog/nwea-map-scores-explained', tag: 'Assessment', title: 'NWEA MAP Scores Explained: What RIT Scores Mean and How to Interpret Your Child\'s Results' },
            { href: '/blog/discover-child-strengths-free-academic-test', tag: 'Research', title: "Free Academic Test for Children: Discover Your Child's Strengths and Weaknesses" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="border border-gray-100 rounded-xl p-5 hover:border-indigo-100 transition-colors">
              <div className="text-xs font-semibold text-indigo-600 mb-2">{link.tag}</div>
              <div className="font-semibold text-gray-900 text-sm leading-snug">{link.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),

}
