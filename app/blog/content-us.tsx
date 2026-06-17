import Link from 'next/link'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const US_CONTENT: Record<string, React.ReactNode> = {

  'gifted-program-testing-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Gifted and Talented (GT) programs are among the most sought-after placements in US public education —
        and the process for qualifying can be confusing for families navigating it for the first time.
        Unlike standardised academic tests where the highest score simply means the best grade, gifted
        identification typically involves multiple criteria, specific score thresholds, and decisions made
        by placement committees rather than a single number. This guide explains exactly how gifted programs
        work, what tests are used, what scores children need, and how to prepare effectively.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Gifted Program?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted programs in the United States exist in several formats, and the differences matter
          for how your child is identified and what placement looks like. The main types are:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { type: 'Pull-out enrichment', desc: 'Students remain in their regular classroom but are pulled out for specialist GT instruction for a set number of hours per week. The most common format in elementary school.' },
            { type: 'Self-contained GT classroom', desc: 'A dedicated GT class or cluster within a mainstream school, where identified gifted students spend the full school day together. More intensive separation from the general population.' },
            { type: 'Magnet GT school', desc: 'A dedicated school for gifted students, usually requiring an application and separate admissions test. Entry is typically the most competitive and requires the highest scores.' },
            { type: 'Gifted services within general education', desc: 'Some districts provide enrichment through differentiated instruction rather than separate placement. Identification still occurs but does not result in formal GT designation.' },
          ].map(({ type, desc }) => (
            <div key={type} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{type}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          Gifted education is not federally mandated in the United States. Each state sets its own
          definition of &quot;gifted,&quot; its own identification criteria, and its own funding levels.
          This means the process, the tests used, and the thresholds required vary significantly
          by state and even by school district. Always check your specific district&apos;s criteria first.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Children Are Identified for Gifted Programs</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most districts use a multi-criteria identification process rather than a single test score.
          A typical process looks like this:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Referral', detail: 'A teacher, parent, or the student themselves initiates a referral for gifted evaluation. Many districts have a formal referral window each year — typically in the fall.' },
            { step: '2', title: 'Screening assessment', detail: 'The district administers a group-administered screening test (such as the NNAT, CogAT, or OLSAT) to identify students who may qualify for further evaluation.' },
            { step: '3', title: 'Formal evaluation', detail: 'Students who screen above the threshold receive a more comprehensive assessment — often including an individually administered IQ test (WISC-V or Stanford-Binet) administered by a school psychologist.' },
            { step: '4', title: 'Placement committee', detail: 'A committee reviews the test results alongside teacher ratings, academic performance, portfolio evidence, and other criteria to make a placement recommendation.' },
          ].map(({ step, title, detail }) => (
            <div key={step} className="flex gap-4 p-5 rounded-xl border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center flex-shrink-0">{step}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{title}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Tests Used for Gifted Identification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Different districts and states use different assessments. Here are the tests your child is
          most likely to encounter, and what each one measures:
        </p>
        <div className="space-y-5">
          {[
            {
              name: 'CogAT (Cognitive Abilities Test)',
              publisher: 'Riverside Insights',
              detail: 'The most widely used group-administered gifted screening test in the US. Measures verbal reasoning (word analogies, sentence completion, verbal classification), quantitative reasoning (number analogies, number series), and nonverbal reasoning (figure matrices, paper folding, figure classification). Scores are reported as Age Scores, Standard Age Scores (SAS), and percentile ranks. For gifted eligibility, most districts require a composite score at the 95th+ percentile.',
            },
            {
              name: 'NWEA MAP Growth',
              publisher: 'Northwest Evaluation Association',
              detail: 'A computer-adaptive achievement test measuring Reading, Mathematics, Language Usage, and Science. Scores are reported as RIT (Rasch Unit) scores, with national norm tables by grade level. MAP is widely used for enrichment referrals and gifted identification in many districts. A score at the 95th+ percentile in a specific subject often triggers GT referral in districts that use MAP as their primary screening tool.',
            },
            {
              name: 'WISC-V (Wechsler Intelligence Scale for Children)',
              publisher: 'Pearson',
              detail: 'An individually administered IQ assessment administered by a licensed school or clinical psychologist. Produces a Full Scale IQ (FSIQ) and several composite scores (Verbal Comprehension, Visual Spatial, Fluid Reasoning, Working Memory, Processing Speed). Cannot be prepared for in the same way as achievement tests. Most gifted programs require an FSIQ ≥ 130 (98th+ percentile) for the most rigorous identification.',
            },
            {
              name: 'OLSAT (Otis-Lennon School Ability Test)',
              publisher: 'NCS Pearson',
              detail: 'Used primarily in New York City\'s Gifted & Talented program and some other districts. Measures verbal and nonverbal reasoning. NYC\'s Gifted & Talented program historically required a composite score at the 97th+ percentile for district-wide programs and the 99th+ percentile for citywide programs.',
            },
            {
              name: 'NNAT (Naglieri Nonverbal Ability Test)',
              publisher: 'Pearson',
              detail: 'A nonverbal reasoning test using abstract pattern matrices. Frequently used alongside the OLSAT or CogAT. Scores are language-independent, making it useful for English Language Learner populations. The NNAT-3 is the current edition.',
            },
          ].map(({ name, publisher, detail }) => (
            <div key={name} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-0.5">{name}</div>
              <div className="text-xs text-indigo-600 font-medium mb-3">{publisher}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Score Does Your Child Need?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The threshold varies significantly by program type and district. As a general guide:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Program type</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical percentile threshold</th>
                <th className="text-left p-4 font-semibold text-gray-700">Equivalent standardised score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Pull-out enrichment (typical district)', '90th–95th percentile', '120–125'],
                ['Self-contained GT classroom', '95th–97th percentile', '125–128'],
                ['Competitive magnet GT school', '97th–99th percentile', '128–135'],
                ['NYC Gifted & Talented (citywide)', '99th+ percentile', '135+'],
                ['Highly gifted / Davidson Academy-type programs', '99.9th percentile', '145+'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[0]}</td>
                  <td className="p-4 text-indigo-700 font-medium">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong className="text-indigo-900">Important:</strong> Many districts use multiple criteria —
          test scores are one input, not the only input. Some children who narrowly miss the numeric
          threshold are placed in GT programs based on strong teacher ratings, portfolio evidence,
          or other criteria. If your child is borderline, it is worth requesting a meeting with
          the GT coordinator to understand the full picture.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare Your Child</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Preparation for gifted testing is a nuanced subject. IQ assessments like the WISC-V are
          not coachable in any meaningful sense — they measure cognitive ability, not learned knowledge,
          and there are no practice materials that produce real improvement. Attempting to &quot;prepare&quot;
          for the WISC-V is unlikely to help and may backfire if the child becomes anxious about
          a test they cannot study for.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          CogAT, NNAT, and OLSAT are more preparation-responsive — because they test reasoning skills
          that are influenced by exposure and practice. Children who have practised matrix reasoning,
          pattern completion, and verbal analogies will perform better on these tests than children
          encountering them for the first time, all else being equal.
        </p>
        <ul className="space-y-4 mb-4">
          <Check><strong>Start with a diagnostic.</strong> Use a free standardised assessment (like Eduentry) to establish your child&apos;s current percentile position before investing in preparation materials. This tells you how far they are from the threshold and whether GT identification is a realistic near-term goal.</Check>
          <Check><strong>Practise the specific test format.</strong> Different tests use different item formats. CogAT verbal analogies look different from NNAT matrix questions. Use official practice materials or publisher-endorsed preparation books for the specific test your district uses.</Check>
          <Check><strong>Build underlying skills over time.</strong> Wide reading (for vocabulary and verbal battery), mathematical puzzles and number games (for quantitative battery), and spatial puzzles like Lego, tangrams, and chess (for nonverbal battery) build the underlying skills that feed into testing performance. These are more effective over a 12-month horizon than cramming in the 4 weeks before the test.</Check>
          <Check><strong>Practise on a computer.</strong> Most current gifted screening tests are computer-administered. Children who have only practised on paper sometimes struggle with the timing and interface of digital tests. Ensure your child is comfortable answering questions on a screen under timed conditions.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">If Your Child Doesn&apos;t Qualify</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not qualifying for a GT program does not mean your child is not bright, not curious,
          or not capable of exceptional academic performance. GT identification at age 5 or 7
          is a snapshot of a child&apos;s performance on specific tests at a specific moment —
          it is not a permanent ceiling.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Many children who do not qualify initially for GT programs at age 6 or 7 qualify on
          re-evaluation at age 8 or 9. Some of the most accomplished students in gifted programs
          were initially borderline. Focus on building the underlying skills and a love of learning —
          test scores will follow.
        </p>
      </section>
    </>
  ),

  'nwea-map-scores-explained': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        If your child&apos;s school uses NWEA MAP Growth tests, you have probably received a report
        showing a &quot;RIT score&quot; and a percentile — and wondered what these numbers actually mean.
        NWEA MAP is one of the most widely used adaptive assessments in US K–12 education, and the
        RIT score is genuinely useful information about your child&apos;s academic development.
        This guide explains what MAP tests measure, how to interpret RIT scores, what counts as
        on track or advanced, and how to use the results to support your child&apos;s learning.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the NWEA MAP Growth Test?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NWEA MAP (Measures of Academic Progress) Growth is a computer-adaptive achievement test
          developed by the Northwest Evaluation Association. It is used by more than 9 million
          students across the United States in grades K–12, and it measures academic performance
          in Reading, Mathematics, Language Usage, and (for some grades) Science.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Growth is administered on a computer and adapts in real time — if your child answers
          a question correctly, the next question is harder; if they answer incorrectly, the next
          question is easier. This adaptive format means the test is always calibrated to each
          individual child&apos;s level, rather than giving every student the same fixed questions.
          A third grader and a sixth grader can both take a MAP Reading test, and the test adapts
          to produce an accurate score for each — without either child facing questions that are
          uniformly too easy or too hard.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Most schools administer MAP Growth two or three times a year — typically in the fall,
          winter, and spring. This means you can track not just where your child is, but how
          quickly they are growing, which is often the most useful piece of information
          for understanding their academic trajectory.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a RIT Score?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The score MAP Growth produces is called a RIT score (short for Rasch Unit). This is not
          a percentage and it is not a grade-level equivalent. It is a position on an equal-interval
          scale that spans the entire K–12 curriculum — the same scale from kindergarten through
          12th grade.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A typical kindergartner begins the year with a Math RIT score around 140–150. By the end
          of 5th grade, the average student is around 210–215. By the end of 10th grade, the average
          is around 220–225. The scale is continuous and consistent: a RIT score of 210 in Math means
          exactly the same level of mathematical knowledge whether it belongs to a 4th grader or
          a 2nd grader.
        </p>
        <Callout>
          <strong className="text-indigo-900">The key insight about RIT scores:</strong> Because the scale
          is consistent across all grades, you can directly compare a child&apos;s RIT score to grade-level
          norms — and see not just whether they are at grade level, but how far ahead or behind. A 3rd grader
          with a Math RIT of 220 is performing at a level typical of 6th graders. A 6th grader with a
          Math RIT of 200 is performing at a level typical of 4th graders.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">RIT Score Benchmarks by Grade</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The following table shows NWEA&apos;s 2020 national norms — the average (mean) RIT scores
          for US students at the beginning of each grade year, plus what represents strong performance
          (approximately the 75th percentile).
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Grade</th>
                <th className="text-left p-4 font-semibold text-gray-700">Math (avg)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Math (75th %ile)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Reading (avg)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Reading (75th %ile)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['K (fall)', '144', '154', '139', '150'],
                ['Grade 1 (fall)', '163', '173', '158', '170'],
                ['Grade 2 (fall)', '178', '188', '169', '181'],
                ['Grade 3 (fall)', '188', '199', '177', '191'],
                ['Grade 4 (fall)', '197', '208', '185', '199'],
                ['Grade 5 (fall)', '205', '216', '191', '206'],
                ['Grade 6 (fall)', '211', '222', '197', '212'],
                ['Grade 7 (fall)', '215', '226', '201', '217'],
                ['Grade 8 (fall)', '218', '229', '204', '220'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="p-4 text-gray-600">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-400">Source: NWEA 2020 MAP Growth Norms for Student and School Achievement Status and Growth.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Percentile vs RIT: What&apos;s the Difference?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your child&apos;s MAP report shows both a RIT score and a percentile. They measure
          related but different things.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>RIT score</strong> is an absolute measure — it tells you where your child is
          on the K–12 knowledge continuum, regardless of grade. A RIT of 215 in Math always means
          the same level of mathematical understanding. It does not change based on what grade
          your child is in.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>percentile</strong> is a relative measure — it compares your child&apos;s
          RIT score to the national norm group for students in the same grade at the same point
          in the school year. A child in 5th grade with a Math RIT of 220 is at approximately
          the 80th percentile for 5th graders.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Both are useful, but for different questions. Use the RIT to understand the level of
          content your child is ready for (what should they be learning next?). Use the percentile
          to understand how your child compares to peers (is this child working above or below grade
          level compared to the national average?). For gifted identification, the percentile is
          the more commonly used metric.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Growth</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One of MAP&apos;s most valuable features is growth tracking. NWEA publishes norms not just
          for status (where is your child now?) but for growth (how much did your child grow?).
          The typical growth in Math RIT from fall to spring:
        </p>
        <ul className="space-y-2 mb-4">
          <Bullet><strong>Grades K–2:</strong> approximately 10–12 RIT points per year (rapid growth in early literacy and numeracy)</Bullet>
          <Bullet><strong>Grades 3–5:</strong> approximately 6–8 RIT points per year (growth slows as content becomes more complex)</Bullet>
          <Bullet><strong>Grades 6–8:</strong> approximately 3–5 RIT points per year (growth slows significantly in middle school)</Bullet>
          <Bullet><strong>Grades 9–12:</strong> approximately 1–3 RIT points per year (near the ceiling of the scale for advanced students)</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          A child who grows more than these typical norms — who gains 12 RIT points in Math when
          the average is 7 — is showing accelerated growth. A child who gains only 2 RIT points
          in a year when 7 is typical may need additional support in that subject, even if their
          absolute score is still above grade-level average.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">High MAP Scores and Gifted Identification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In many districts, a high MAP Growth score is one of the key indicators that triggers
          a gifted referral. Common thresholds are the 90th or 95th percentile in one or more
          subjects. If your child&apos;s MAP score is at or above these thresholds, it is worth
          asking your school explicitly whether a gifted evaluation referral is appropriate.
          Some districts automatically trigger this process; others require a parent or teacher
          to initiate it.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If your child scores at the 95th+ percentile on MAP, they are performing at a level
          significantly above their grade-level peers. This is strong evidence for gifted services
          — and if your district is not automatically acting on this, it is entirely reasonable
          to advocate proactively for evaluation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Low MAP Scores: What to Do</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A MAP score below the 25th percentile, or a growth trajectory that is significantly
          below the norm, suggests your child may need additional academic support. The first
          step is to speak with your child&apos;s teacher to understand whether the MAP result
          is consistent with classroom performance. MAP is one data point — if classroom
          performance is strong but MAP scores are low, the discrepancy itself is worth
          investigating.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Low MAP scores in Reading are often linked to gaps in phonics, fluency, or vocabulary
          rather than comprehension ability per se. Low MAP scores in Math are often linked to
          specific topic gaps (fractions, place value, operations) rather than broad mathematical
          weakness. The MAP Learning Continuum — available to parents through NWEA&apos;s website —
          maps each RIT score range to specific skills, making it possible to identify exactly
          what to work on.
        </p>
      </section>
    </>
  ),

  'isee-ssat-private-school-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        If your child is applying to independent (private) schools in the United States, there is a
        good chance they will need to take either the ISEE (Independent School Entrance Exam) or
        the SSAT (Secondary School Admission Test). Both are widely accepted, both test reasoning and
        academic skills, and both are significantly harder than most standardised tests students
        encounter in public school. Choosing the right test — and preparing for it correctly —
        can make a meaningful difference to your child&apos;s application. This guide covers
        everything you need to know.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are the ISEE and SSAT?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong>ISEE</strong> is administered by the Educational Records Bureau (ERB) and is accepted
          by more than 1,200 independent schools worldwide. The <strong>SSAT</strong> is administered by
          the Secondary School Admission Test Board and is accepted by over 2,600 independent schools.
          Both tests are used for grades 3 through 12, with different levels for different entry grades.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The key thing to know upfront: both tests compare your child only against other independent
          school applicants — not against the general student population. Independent school applicants
          as a group are a highly selected pool, so a score in the 50th percentile on the SSAT
          is the median of independent school applicants, not the median of all students.
          A score that would be &quot;average&quot; on a general-population test might fall in the
          30th–40th percentile on the SSAT simply because the applicant pool is academically stronger.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ISEE Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ISEE has five levels, each designed for a specific entry grade range:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-5">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Level</th>
                <th className="text-left p-4 font-semibold text-gray-700">Applying to grade</th>
                <th className="text-left p-4 font-semibold text-gray-700">Current grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Primary', '2nd, 3rd, or 4th grade', '1st, 2nd, or 3rd grade'],
                ['Lower', '5th or 6th grade', '4th or 5th grade'],
                ['Middle', '7th or 8th grade', '6th or 7th grade'],
                ['Upper', '9th–12th grade', '8th–11th grade'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-500">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ISEE (Lower through Upper levels) consists of five sections: Verbal Reasoning
          (synonyms and sentence completion), Quantitative Reasoning (word problems and
          quantitative comparisons), Reading Comprehension, Mathematics Achievement,
          and an Essay (unscored but sent to schools). Total testing time is approximately
          2 hours and 40 minutes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Scores are reported on a scale of 760–940 for each section, with a stanine score
          from 1 to 9 (where 5 is average, 7–9 is above average, and 9 is exceptional).
          Schools typically look primarily at the stanine, particularly stanines 7 and above
          for competitive schools.
        </p>
        <Callout>
          <strong className="text-indigo-900">Important ISEE rule:</strong> Students can only take the ISEE
          once per testing season (Fall, Winter, Spring). There are three testing seasons per year,
          meaning a student can take the ISEE a maximum of three times in a 12-month period.
          This makes strategic preparation especially important — there is no &quot;take it again
          next month&quot; option.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">SSAT Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The SSAT also has three levels for grades 3–11:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-5">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Level</th>
                <th className="text-left p-4 font-semibold text-gray-700">Current grade</th>
                <th className="text-left p-4 font-semibold text-gray-700">Score scale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Elementary', 'Grades 3–4', '900–1800'],
                ['Middle', 'Grades 5–7', '1320–2130'],
                ['Upper', 'Grades 8–11', '1500–2400'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-500 font-mono">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The SSAT (Middle and Upper levels) consists of five sections: Verbal (analogies and
          synonyms), Quantitative (two sections of math), Reading Comprehension, and an Essay
          (unscored). The verbal section is widely considered the most challenging part of
          the SSAT, with analogies requiring sophisticated vocabulary and logical reasoning.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Scores are reported as a scaled score and a percentile rank. Unlike general-population
          tests, the SSAT compares your child against other independent school applicants who
          have taken the test in the past three years — a significantly more competitive
          reference group.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">Guessing penalty:</strong> The SSAT deducts ¼ of a point
          for each incorrect answer (there is no penalty for skipped questions). Students who
          can eliminate even one or two obviously wrong answers should guess from the remaining
          options. Students who genuinely have no idea should skip rather than guess randomly.
          This is the opposite of the advice for many other standardised tests.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Differences Between ISEE and SSAT</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Factor</th>
                <th className="text-left p-4 font-semibold text-gray-700">ISEE</th>
                <th className="text-left p-4 font-semibold text-gray-700">SSAT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Retake frequency', 'Once per season (max 3×/year)', 'No limit (can retake monthly)'],
                ['Guessing penalty', 'No penalty', '−¼ point per wrong answer'],
                ['Verbal format', 'Synonyms + sentence completion', 'Analogies + synonyms'],
                ['Quantitative format', 'Quantitative reasoning + math achievement', 'Two quantitative sections (math)'],
                ['Scoring comparison group', 'Independent school applicants', 'Independent school applicants'],
                ['Accepted by', '1,200+ schools', '2,600+ schools'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Test Should My Child Take?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most important first step is to check your target school&apos;s preference. Most schools
          accept both, but some explicitly prefer one over the other. If your school has no preference,
          use the following guidelines:
        </p>
        <ul className="space-y-4">
          <Check><strong>Choose the ISEE</strong> if your child tends to guess randomly under pressure. The ISEE has no guessing penalty, which removes the need for a complex guessing strategy.</Check>
          <Check><strong>Choose the SSAT</strong> if your child may need multiple attempts. The unlimited retake policy gives families the flexibility to try again if the first result is not competitive.</Check>
          <Check><strong>Choose the ISEE</strong> if your child is stronger in reading comprehension than in vocabulary analogies. The ISEE&apos;s verbal section (synonyms + sentence completion) is considered more accessible than the SSAT&apos;s analogy format.</Check>
          <Check><strong>Consider both</strong> if your target schools accept either, your child has time to prepare for one, and you want the flexibility to submit the stronger result.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparation Timeline</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For most students, 3–6 months of structured preparation produces meaningful improvement on
          both tests. The verbal section (on both tests) responds well to vocabulary building over
          a longer horizon — 6–12 months of wide reading and deliberate vocabulary practice
          is more effective than intensive drilling in the month before the test.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The quantitative section responds to targeted content review: identify which math topics
          your child is weakest on (using a diagnostic assessment) and focus preparation time
          proportionally on gaps rather than strengths.
        </p>
        <p className="text-gray-700 leading-relaxed">
          In the final 6 weeks, shift to timed full practice tests under real conditions — same
          environment, same timing, no interruptions. Review every error systematically.
          The goal is not a perfect score but a score that accurately reflects your child&apos;s
          genuine academic ability for their target schools.
        </p>
      </section>
    </>
  ),

  'how-to-prepare-gifted-test': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Few things in education generate more parental anxiety than a gifted identification test.
        The pressure to perform, combined with the complex landscape of different tests used by
        different districts, makes preparation feel overwhelming. This guide cuts through the
        confusion: what gifted tests actually measure, which tests are preparation-responsive
        and which are not, and what a realistic, effective preparation plan looks like at home.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gifted Tests Actually Measure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not all gifted tests measure the same thing, and this matters enormously for how
          to approach preparation. Broadly, the tests used for gifted identification fall
          into two categories:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-2">Cognitive ability tests</div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">Tests like the WISC-V, Stanford-Binet, and Woodcock-Johnson measure fluid intelligence — the ability to reason abstractly, hold information in working memory, and solve novel problems without relying on prior knowledge. These are closer to IQ tests.</p>
            <div className="text-xs font-semibold text-amber-700 bg-amber-50 rounded-lg px-3 py-2">Limited preparation response — improvement through familiarity and anxiety reduction only</div>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-2">Academic reasoning tests</div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">Tests like the CogAT, NNAT, OLSAT, and MAP Growth measure reasoning skills that are influenced by both inherent ability and accumulated knowledge. They are not pure IQ tests — prior exposure to analogies, number series, and matrices genuinely matters.</p>
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">Moderate preparation response — targeted practice produces real improvement</div>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Understanding which type of test your district uses determines how much and what kind
          of preparation makes sense. If your child will be assessed with the WISC-V,
          anxiety management and familiarity with the testing process are more important
          than content drilling. If your child will take the CogAT or NNAT, structured
          practice with the specific question formats will produce genuine score improvement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Get a Baseline Before You Do Anything Else</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before purchasing any preparation materials, take a free standardised assessment
          to understand where your child currently stands. This serves two purposes:
          it tells you how far your child is from the target threshold (and whether
          a gifted identification is a realistic near-term goal), and it identifies
          which specific subjects need the most work.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry covers verbal reasoning, non-verbal reasoning, English, and mathematics —
          the same domains tested by CogAT and NWEA MAP — and produces a standardised score
          on the same scale (mean 100, SD 15) used by most US gifted assessments.
          A child who scores 120 on Eduentry (84th percentile) and needs to reach the
          95th percentile (SAS ~125) has a measurable gap to close over a realistic
          6–12 month preparation timeline.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">Rule of thumb:</strong> A child who is already at the
          90th+ percentile on a diagnostic can reasonably aim for the 95th+ percentile with
          6 months of targeted preparation. A child at the 70th percentile aiming for the 99th+
          percentile required by the most competitive programs is unlikely to close that gap
          through preparation alone — the gap reflects genuine ability differences at that point
          in the child&apos;s development.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Know Exactly Which Test Your Child Is Taking</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Different tests require completely different preparation. Using CogAT preparation
          materials when your child is actually taking the NNAT is not helpful — and may
          actively mislead you about their readiness.
        </p>
        <div className="space-y-4">
          {[
            {
              test: 'CogAT (Cognitive Abilities Test)',
              battery: 'Verbal, Quantitative, Nonverbal',
              prepApproach: 'Verbal battery: vocabulary, word analogies, sentence completion. Quantitative battery: number series, equation building, number analogies. Nonverbal battery: figure matrices, paper folding, figure classification. Use official CogAT practice materials (Riverside Insights) or publisher-endorsed books.',
            },
            {
              test: 'NNAT (Naglieri Nonverbal Ability Test)',
              battery: 'Nonverbal only (pattern matrices)',
              prepApproach: 'Practice visual pattern completion, figure series, and spatial reasoning. Books and apps focused on abstract matrix reasoning are directly relevant. The NNAT is 100% nonverbal — there is no verbal or math component to prepare for.',
            },
            {
              test: 'OLSAT (Otis-Lennon School Ability Test)',
              battery: 'Verbal and Nonverbal',
              prepApproach: 'Verbal section: following directions, antonyms, sentence arrangement, logical selection. Nonverbal section: pattern series, number inference, figural reasoning. The OLSAT verbal section is notably different from CogAT verbal — prepare with OLSAT-specific materials.',
            },
            {
              test: 'WISC-V (Wechsler Intelligence Scale)',
              battery: 'VCI, VSI, FRI, WMI, PSI',
              prepApproach: 'The WISC-V is individually administered by a psychologist and measures underlying cognitive ability. Formal preparation is not recommended — it can raise anxiety without improving performance. Focus on ensuring your child is well-rested, comfortable with the testing environment, and understands what to expect from the process.',
            },
          ].map(({ test, battery, prepApproach }) => (
            <div key={test} className="border border-gray-100 rounded-xl p-5">
              <div className="font-bold text-gray-900 mb-0.5">{test}</div>
              <div className="text-xs font-medium text-indigo-600 mb-3">Batteries: {battery}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{prepApproach}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Build Underlying Skills Over Time</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For preparation-responsive tests (CogAT, NNAT, OLSAT), the most effective preparation
          works over a 6–18 month horizon through building the underlying cognitive skills —
          not through cramming question formats in the final 4 weeks.
        </p>
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">For verbal battery performance</h3>
            <p className="text-gray-700 leading-relaxed">
              Wide reading is the most powerful lever. Children who read broadly across fiction,
              non-fiction, and complex texts from an early age develop vocabulary, analogical
              reasoning, and sentence-level comprehension that directly feed into verbal battery
              performance. Daily reading for 20–30 minutes, maintained consistently, outperforms
              any vocabulary flashcard programme over a 12-month horizon.
              Word games — Scrabble, Boggle, crossword puzzles, word analogy games — reinforce
              vocabulary in an engaging format.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">For quantitative battery performance</h3>
            <p className="text-gray-700 leading-relaxed">
              The quantitative battery tests mathematical reasoning, not computation. Daily
              mental arithmetic, number puzzle books (like KenKen, Sudoku, and number series
              worksheets), and mathematical games that require logical deduction all build
              the quantitative reasoning skills the CogAT tests. Mathematical board games
              — Blokus, SET, Sequence, Prime Climb — are particularly effective because
              they develop reasoning in a motivating, low-pressure environment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">For nonverbal / spatial battery performance</h3>
            <p className="text-gray-700 leading-relaxed">
              Spatial reasoning skills are developed through hands-on manipulation of
              physical and visual objects. Lego (particularly complex technical sets),
              tangram puzzles, 3D shape toys, chess, origami, and visual pattern
              activities all build spatial reasoning. These activities are especially
              effective for younger children (ages 5–9) whose spatial skills are
              still developing rapidly. For older children, dedicated matrix
              reasoning practice books provide direct preparation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Practise Under Real Conditions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted tests are administered in unfamiliar settings — often a school office or testing
          room — under timed conditions, with an adult the child may not know. Young children
          in particular can underperform significantly when the testing environment is new.
          Reducing the novelty of the environment and format is one of the most effective
          preparation strategies for young test-takers.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Practise the specific format your child will face — on a computer if the test
          is computer-administered, on paper if it is paper-administered. Sit with your
          child for a few sessions to establish comfort with timed practice, then move
          to independent practice under real timing. Discuss what the testing day will
          look like so there are no surprises.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For very young children (ages 4–6), anxiety management is the most important
          preparation of all. A child who is calm, well-rested, and confident will
          consistently outperform their anxious preparation on test day.
          Emphasise that the test is &quot;fun puzzles&quot; and that there is no
          right or wrong result — it is just a chance for the school to understand
          how their mind works.
        </p>
      </section>
    </>
  ),
}
