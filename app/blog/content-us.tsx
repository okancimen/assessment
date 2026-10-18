import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const US_CONTENT: Record<string, React.ReactNode> = {

  'gifted-program-testing-guide': (
    <>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Gifted Program?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A gifted program is a structured educational placement for children identified as academically advanced or cognitively exceptional, typically through ability and achievement tests such as CogAT, WISC-V, OLSAT, or NNAT. In the United States, gifted identification occurs at the district level and generally requires meeting score thresholds in the top 2–5% across multiple criteria — not a single test result.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          GT programs are among the most sought-after placements in US public education, and the qualification process can be confusing for families navigating it for the first time. This guide explains how gifted programs work, what tests are used, what scores children need, and how to prepare effectively.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted programs exist in several formats, and the differences matter for how your child is identified and what placement looks like. The main types are:
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
          test scores will follow. For a practical breakdown of how to build those skills systematically,
          see our{' '}
          <Link href="/blog/how-to-prepare-gifted-test" className="text-indigo-600 hover:underline">
            guide to preparing your child for gifted testing
          </Link>, and for more on how NWEA MAP scores factor into gifted referrals,{' '}
          <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">
            read our MAP scores guide
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/smart-child-bad-grades', tag: 'Guide', title: 'My Child Is Smart But Gets Bad Grades: What Parents Should Know' },
            { href: '/blog/what-is-a-standardised-score', tag: 'Explainer', title: 'What Is a Standardised Score?' },
            { href: '/blog/discover-school-age-childs-hidden-strengths', tag: 'Guide', title: "Discover Your School-Age Child's Hidden Strengths and Development Areas" },
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
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the NWEA MAP Growth Test?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NWEA MAP (Measures of Academic Progress) Growth is a computer-adaptive achievement test developed by the Northwest Evaluation Association. Used by more than 9 million students across US grades K–12, it measures Reading, Mathematics, Language Usage, and Science. Unlike fixed tests, MAP adapts in real time — each question adjusts to your child&apos;s level based on their previous answer, so the test is always accurately calibrated without questions that are uniformly too easy or too hard.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your child&apos;s school uses NWEA MAP Growth tests, you have probably received a report showing a &quot;RIT score&quot; and a percentile — and wondered what these numbers actually mean. This guide explains how to interpret RIT scores by grade level, what counts as average, strong, or gifted-range performance, and how to use the results to support your child&apos;s learning.
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
          A typical kindergartner begins the year with a Math RIT score around 140–150. By the start
          of 5th grade, the national average is 205. By 10th grade, the average is around 221. The scale
          is continuous and consistent: a RIT score of 210 in Math means exactly the same level of
          mathematical knowledge whether it belongs to a 4th grader or a 2nd grader.
        </p>
        <Callout>
          <strong className="text-indigo-900">The key insight about RIT scores:</strong> Because the scale
          is consistent across all grades, you can directly compare a child&apos;s RIT score to grade-level
          norms — and see not just whether they are at grade level, but how far ahead or behind. A 3rd grader
          with a Math RIT of 220 is performing at a level typical of 6th or 7th graders. A 6th grader with a
          Math RIT of 188 is performing at a level more typical of 3rd graders.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">MAP Math RIT Score Chart by Grade Level (2025–26)</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The table below shows fall RIT score benchmarks for Math from the NWEA 2020 national norming study — the most recently published national norms, which remain the current reference for 2025–26. The columns show the 25th, 50th (national average), 75th, and 90th percentiles.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Grade (fall)</th>
                <th className="text-center p-3 font-semibold text-gray-500">25th %ile</th>
                <th className="text-center p-3 font-semibold text-gray-700">50th %ile (avg)</th>
                <th className="text-center p-3 font-semibold text-indigo-700">75th %ile</th>
                <th className="text-center p-3 font-semibold text-purple-700">90th %ile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kindergarten', '137', '144', '154', '162'],
                ['Grade 1', '155', '163', '173', '181'],
                ['Grade 2', '170', '178', '188', '196'],
                ['Grade 3', '180', '188', '199', '208'],
                ['Grade 4', '190', '197', '208', '217'],
                ['Grade 5', '197', '205', '216', '225'],
                ['Grade 6', '203', '211', '222', '231'],
                ['Grade 7', '207', '215', '226', '235'],
                ['Grade 8', '211', '218', '229', '238'],
                ['Grade 9', '212', '220', '231', '240'],
                ['Grade 10', '213', '221', '232', '241'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-gray-500">{row[1]}</td>
                  <td className="p-3 text-center text-gray-700 font-medium">{row[2]}</td>
                  <td className="p-3 text-center text-indigo-600 font-medium">{row[3]}</td>
                  <td className="p-3 text-center text-purple-600 font-medium">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-2">Source: NWEA 2020 MAP Growth Norms for Student and School Achievement Status and Growth (most recently published national norms).</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">MAP Reading RIT Score Chart by Grade Level (2025–26)</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Fall Reading RIT benchmarks using the same NWEA 2020 national norms. Reading growth is faster in the early grades and slows considerably after Grade 6.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Grade (fall)</th>
                <th className="text-center p-3 font-semibold text-gray-500">25th %ile</th>
                <th className="text-center p-3 font-semibold text-gray-700">50th %ile (avg)</th>
                <th className="text-center p-3 font-semibold text-indigo-700">75th %ile</th>
                <th className="text-center p-3 font-semibold text-purple-700">90th %ile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kindergarten', '131', '139', '150', '160'],
                ['Grade 1', '149', '158', '170', '180'],
                ['Grade 2', '160', '169', '181', '192'],
                ['Grade 3', '167', '177', '191', '202'],
                ['Grade 4', '175', '185', '199', '210'],
                ['Grade 5', '181', '191', '206', '217'],
                ['Grade 6', '186', '197', '212', '223'],
                ['Grade 7', '190', '201', '217', '228'],
                ['Grade 8', '193', '204', '220', '232'],
                ['Grade 9', '195', '207', '222', '234'],
                ['Grade 10', '196', '210', '225', '236'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-gray-500">{row[1]}</td>
                  <td className="p-3 text-center text-gray-700 font-medium">{row[2]}</td>
                  <td className="p-3 text-center text-indigo-600 font-medium">{row[3]}</td>
                  <td className="p-3 text-center text-purple-600 font-medium">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Source: NWEA 2020 MAP Growth Norms for Student and School Achievement Status and Growth.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Good MAP Score by Grade?</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          &quot;Good&quot; depends on what you&apos;re asking. Here is a practical grade-by-grade breakdown for the most commonly tested grades, covering Math and Reading:
        </p>
        <div className="space-y-4">
          {[
            {
              grade: 'Grade 3 (fall)',
              math: { avg: 188, strong: 199, gifted: 208 },
              reading: { avg: 177, strong: 191, gifted: 202 },
              note: 'Grade 3 is the first year most districts use MAP for formal benchmarking. A Math score above 208 (≈90th percentile) is typically enough to trigger a gifted referral.',
            },
            {
              grade: 'Grade 4 (fall)',
              math: { avg: 197, strong: 208, gifted: 217 },
              reading: { avg: 185, strong: 199, gifted: 210 },
              note: 'A Reading score above 210 (≈90th percentile) in Grade 4 is an early indicator of strong reading comprehension. Most gifted programs look for 90th–95th percentile.',
            },
            {
              grade: 'Grade 5 (fall)',
              math: { avg: 205, strong: 216, gifted: 225 },
              reading: { avg: 191, strong: 206, gifted: 217 },
              note: 'By Grade 5, MAP scores begin to inform middle school course placements in many districts. A Math score of 225+ places a student at approximately the 90th percentile.',
            },
            {
              grade: 'Grade 6 (fall)',
              math: { avg: 211, strong: 222, gifted: 231 },
              reading: { avg: 197, strong: 212, gifted: 223 },
              note: 'Grade 6 is a pivotal year for Math acceleration. A score of 231+ (90th percentile) often qualifies students for pre-Algebra or Algebra 1 acceleration.',
            },
            {
              grade: 'Grade 7 (fall)',
              math: { avg: 215, strong: 226, gifted: 235 },
              reading: { avg: 201, strong: 217, gifted: 228 },
              note: 'Growth slows in middle school — gaining 3–5 RIT points from fall to spring is typical. A student growing faster than this is pulling ahead of peers.',
            },
            {
              grade: 'Grade 8 (fall)',
              math: { avg: 218, strong: 229, gifted: 238 },
              reading: { avg: 204, strong: 220, gifted: 232 },
              note: 'Grade 8 MAP scores correlate strongly with high school course readiness and SAT/ACT trajectory. A Math score of 238+ (90th percentile) indicates strong algebra readiness.',
            },
          ].map(({ grade, math, reading, note }) => (
            <div key={grade} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-3">{grade}</div>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Math RIT</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">National average</span><span className="font-mono font-medium text-gray-800">{math.avg}</span></div>
                    <div className="flex justify-between"><span className="text-indigo-600">Strong (75th %ile)</span><span className="font-mono font-medium text-indigo-600">{math.strong}</span></div>
                    <div className="flex justify-between"><span className="text-purple-600">Gifted range (90th %ile)</span><span className="font-mono font-medium text-purple-600">{math.gifted}</span></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Reading RIT</div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">National average</span><span className="font-mono font-medium text-gray-800">{reading.avg}</span></div>
                    <div className="flex justify-between"><span className="text-indigo-600">Strong (75th %ile)</span><span className="font-mono font-medium text-indigo-600">{reading.strong}</span></div>
                    <div className="flex justify-between"><span className="text-purple-600">Gifted range (90th %ile)</span><span className="font-mono font-medium text-purple-600">{reading.gifted}</span></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
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
          the 84th percentile for 5th graders nationally.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Both are useful, but for different questions. Use the RIT to understand the level of
          content your child is ready for (what should they be learning next?). Use the percentile
          to understand how your child compares to peers. For gifted identification and course
          acceleration, the percentile is the more commonly used metric.
        </p>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
          <div className="flex-1">
            <p className="font-semibold text-gray-900 mb-1">MAP tells you where your child sits in the US. How do they rank globally?</p>
            <p className="text-sm text-gray-600">Eduentry&apos;s free adaptive assessment covers the same verbal, quantitative, and reasoning skills — benchmarked against an international peer group. Under an hour, no registration required.</p>
          </div>
          <CtaLink href="/your-childs-potential" label="content_cta_map_international" className="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Get the global benchmark
          </CtaLink>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Growth: How Many RIT Points Should My Child Gain Per Year?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          One of MAP&apos;s most valuable features is growth tracking. NWEA publishes norms not just
          for status (where is your child now?) but for growth (how much did your child grow?).
          Typical Math RIT growth from fall to spring:
        </p>
        <ul className="space-y-2 mb-4">
          <Bullet><strong>Kindergarten:</strong> approximately 11–13 RIT points (the fastest growth period — foundational numeracy develops rapidly)</Bullet>
          <Bullet><strong>Grades 1–2:</strong> approximately 9–11 RIT points per year (continued rapid growth in early literacy and number sense)</Bullet>
          <Bullet><strong>Grades 3–5:</strong> approximately 5–8 RIT points per year (growth slows as content becomes more complex)</Bullet>
          <Bullet><strong>Grades 6–8:</strong> approximately 2–4 RIT points per year (growth slows significantly in middle school)</Bullet>
          <Bullet><strong>Grades 9–12:</strong> approximately 1–2 RIT points per year (near the upper range of the scale for many students)</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A child who grows more than these typical norms is accelerating relative to peers. A child who gains only 1–2 RIT points in a year when 6 is typical may need additional support in that subject, even if their absolute score is still above the grade-level average.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">Growth matters as much as status:</strong> A Grade 4 student at the 60th percentile who gains 12 RIT points in a year (well above typical) is on a stronger trajectory than a student at the 80th percentile who gains only 2 RIT points. The growth score predicts future performance as powerfully as the current score.
        </Callout>
      </section>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Strong MAP score — but how does it translate internationally?</p>
          <p className="text-sm text-gray-600">MAP norms are US-only. Eduentry benchmarks the same reasoning skills against top international peers — so you know if your child&apos;s score is competitive beyond the US.</p>
        </div>
        <a
          href="/your-childs-potential"
          className="shrink-0 inline-block bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors text-center"
        >
          See international ranking →
        </a>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">High MAP Scores and Gifted Identification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In many districts, a high MAP Growth score is one of the key indicators that triggers
          a gifted referral. Common thresholds are the 90th or 95th percentile in one or more
          subjects. Using the tables above, you can see the exact RIT score that corresponds to
          these percentiles for your child&apos;s grade. If your child is at or above the 90th
          percentile, it is worth asking your school explicitly whether a gifted evaluation
          referral is appropriate — some districts trigger this automatically, others require
          a parent to initiate it.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If your child scores at the 95th+ percentile on MAP, they are performing at a level
          significantly above their grade-level peers. This is strong evidence for gifted services.
          For a full overview of how that evaluation process works and which other tests are used
          alongside MAP, see our{' '}
          <Link href="/blog/gifted-program-testing-guide" className="text-indigo-600 hover:underline">
            gifted program testing guide
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Low MAP Scores: What to Do</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A MAP score below the 25th percentile, or a growth trajectory that is significantly
          below the norm, suggests your child may benefit from additional academic support. The first
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

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">MAP tells you what your child knows — this reveals who they are</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Eduentry&apos;s free personality assessment uses the VIA Character Strengths framework to identify your child&apos;s top strengths and growth areas. Parent-rated, ages 6–20, ~5 minutes. No account needed.
          </p>
        </div>
        <CtaLink href="/personality-assessment" label="map_post_personality_cta" className="shrink-0 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap">
          Discover character strengths →
        </CtaLink>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What is the highest possible MAP RIT score?',
              a: 'There is no hard ceiling on the RIT scale, but scores above 250 are extremely rare even among high-school students. A Grade 8 student scoring 250 in Math would be performing well above the 99th percentile. In practice, the vast majority of students score between 140 (Kindergarten start) and 240 (high-achieving high school senior). The test adapts to the student\'s level, so advanced students receive harder questions rather than the test "running out."',
            },
            {
              q: 'Can you fail the MAP test?',
              a: 'No. The MAP Growth test has no pass or fail. It is a measurement instrument, not a high-stakes exam. There is no minimum score and no consequence for a low score on the test itself — results inform instruction and identify students who may need support or acceleration. Students cannot "study" specifically for MAP; the test measures what they know at the time they take it.',
            },
            {
              q: 'What MAP score is needed for gifted programs?',
              a: 'Most districts that use MAP as part of gifted identification look for scores at or above the 90th percentile (or sometimes 95th percentile) for the student\'s grade. Using the tables above: in Grade 4, a Math RIT of 217 or higher (90th percentile) is typically enough to trigger a gifted referral. In Grade 5, Reading RIT 217 or higher meets the same threshold. Check your specific district\'s policy — thresholds vary significantly by state and district.',
            },
            {
              q: 'What does a MAP RIT score of 220 mean?',
              a: 'It depends on the grade. A Math RIT of 220 for a Grade 3 student is extraordinary — approximately the 99th percentile, equivalent to Grade 7–8 performance. For a Grade 7 student, RIT 220 is just above average (approximately the 55th percentile). For a Grade 9 student, it is below average. Always compare a RIT score to the grade-level norms in the tables above to determine what it means in context.',
            },
            {
              q: 'How often is the NWEA MAP test given?',
              a: 'Most schools administer MAP Growth two or three times per year — typically in fall (September–October), winter (January–February), and spring (April–May). Schools that test three times per year can track both mid-year growth and year-over-year growth. The fall administration is the most important for establishing a baseline and informing fall instructional planning.',
            },
            {
              q: 'How do MAP scores relate to ACT and SAT scores?',
              a: 'NWEA publishes linking studies that connect MAP Growth scores in Grades 3–8 to projected ACT and SAT performance. A Grade 8 Math RIT of 238 (90th percentile) is associated with a projected ACT Math score of approximately 24–25 (top third of test-takers). A Grade 5 Reading RIT of 217 (90th percentile) is associated with strong ACT English/Reading performance in high school. These are projections based on trajectory, not guarantees.',
            },
            {
              q: 'What is the MAP for Primary Grades (MPG) vs MAP Growth?',
              a: 'MAP Growth is designed for students in Grade 2 and above. MAP for Primary Grades (MPG) is a separate assessment for Kindergarten and Grade 1 that uses an audio-supported format, because young children cannot reliably read test questions independently. Both produce RIT scores on the same scale, allowing tracking from Kindergarten through Grade 12. If your child is in K–1, their school may use MPG rather than the standard MAP Growth test.',
            },
            {
              q: 'What is a Lexile range and how does it relate to MAP Reading?',
              a: 'MAP Reading RIT scores link directly to Lexile measures, which are used to match students to appropriately challenging books. A MAP Reading RIT of 177 (Grade 3 average) corresponds to roughly Lexile 500–650L. A Grade 5 student at the 75th percentile (RIT 206) corresponds to approximately Lexile 900–1050L. Parents can use their child\'s Lexile range from the MAP report to select books that challenge without frustrating.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
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

  'cogat-scores-explained': (
    <>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the CogAT?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The CogAT (Cognitive Abilities Test) is a group-administered reasoning assessment used by school districts across the United States to identify academically gifted students. Unlike achievement tests that measure what your child has learned, the CogAT measures how your child reasons — across verbal, quantitative, and nonverbal domains. It is developed by Riverside Assessments and is one of the most widely used gifted screening tools in American public education.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your child has been referred for gifted testing, or if your district conducts universal gifted screening, you will likely receive a report showing a Standard Age Score (SAS), a percentile rank, and a stanine for each of the three batteries and for the composite score. This guide explains exactly what each of those numbers means and how they relate to gifted program eligibility.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The CogAT is available in several forms (Form 7 and Form 8 are the most commonly used), with levels ranging from Kindergarten through Grade 12. The scoring system is consistent across all levels: the SAS is always age-normalised with a mean of 100 and a standard deviation of 16.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How CogAT Scores Are Reported</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A CogAT score report typically includes three types of scores, each conveying different information:
        </p>
        <div className="space-y-4 mb-5">
          {[
            {
              label: 'Standard Age Score (SAS)',
              desc: 'A normalised score with a mean of 100 and a standard deviation of 16. It directly reflects how your child compares to other children of the same age. The SAS is the primary number used for gifted identification. Because the scale is fixed, an SAS of 116 always means the 84th percentile, regardless of what grade your child is in.',
            },
            {
              label: 'Percentile Rank',
              desc: 'The percentage of same-age peers who scored at or below your child\'s level. A percentile of 90 means your child scored higher than 90% of age peers. Percentiles are most useful for comparing against gifted thresholds, which are typically stated in percentile terms.',
            },
            {
              label: 'Stanine',
              desc: 'A 1–9 scale that groups scores into broad bands. Stanine 5 is average. Stanines 8 and 9 are typically required for gifted program admission. They are useful because they acknowledge that small score differences within a band don\'t represent meaningful ability differences.',
            },
          ].map(({ label, desc }) => (
            <div key={label} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">{label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CogAT SAS Score to Percentile Conversion Table</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Because the CogAT SAS uses a fixed normal distribution (mean 100, SD 16), the conversion between SAS and percentile is consistent regardless of age or grade. Use this table to interpret your child&apos;s score report.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">SAS Score</th>
                <th className="text-center p-3 font-semibold text-gray-700">Percentile Rank</th>
                <th className="text-center p-3 font-semibold text-gray-700">Stanine</th>
                <th className="text-left p-3 font-semibold text-gray-700">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['148+',  '99.9th', '9', 'Exceptionally gifted'],
                ['132',   '97.7th', '9', 'Highly gifted'],
                ['128',   '96th',   '9', 'Highly gifted'],
                ['125',   '94th',   '8', 'Gifted (most selective programs)'],
                ['121',   '91st',   '8', 'Gifted (standard threshold)'],
                ['116',   '84th',   '7', 'Strong — above average'],
                ['108',   '69th',   '6', 'Above average'],
                ['100',   '50th',   '5', 'Average (national norm)'],
                ['92',    '31st',   '4', 'Below average'],
                ['84',    '16th',   '3', 'Low average'],
              ].map((row) => (
                <tr key={row[0]} className={`hover:bg-gray-50/50 ${row[2] === '9' ? 'bg-purple-50/30' : row[2] === '8' ? 'bg-indigo-50/30' : ''}`}>
                  <td className="p-3 font-mono font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-gray-700">{row[1]}</td>
                  <td className={`p-3 text-center font-semibold ${row[2] === '9' ? 'text-purple-700' : row[2] === '8' ? 'text-indigo-700' : 'text-gray-600'}`}>{row[2]}</td>
                  <td className="p-3 text-gray-600 text-sm">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Standard Age Score uses a fixed scale: mean 100, SD 16. Percentiles are derived from the normal distribution and are consistent across ages and grades.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What CogAT Score Is Needed for Gifted Programs?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted identification thresholds vary by district and program type. The most common cut-offs are the 90th and 95th percentiles, corresponding to CogAT SAS scores of approximately 121 and 126 respectively. Here is how requirements typically work across different program types:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-5">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Program type</th>
                <th className="text-center p-3 font-semibold text-gray-700">Typical threshold</th>
                <th className="text-center p-3 font-semibold text-gray-700">SAS equivalent</th>
                <th className="text-center p-3 font-semibold text-gray-700">Stanine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['District pull-out enrichment', '90th percentile', '~121', '8'],
                ['Self-contained GT classroom', '93rd–95th percentile', '~124–126', '8–9'],
                ['GT magnet school (district)', '95th–97th percentile', '~126–130', '8–9'],
                ['Highly selective programs (Davidson, CTY)', '97th–99th percentile', '~130–133', '9'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 text-gray-700">{row[0]}</td>
                  <td className="p-3 text-center text-gray-700">{row[1]}</td>
                  <td className="p-3 text-center font-mono font-semibold text-indigo-700">{row[2]}</td>
                  <td className="p-3 text-center font-semibold text-purple-700">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong className="text-indigo-900">Important:</strong> Most districts use the CogAT composite score as one input alongside achievement test scores (often NWEA MAP) and teacher recommendations. Meeting the CogAT threshold alone is not always sufficient — and some districts accept a high MAP score as an alternative pathway even without a CogAT above threshold.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Three CogAT Batteries: Verbal, Quantitative, and Nonverbal</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The CogAT produces separate SAS scores for each of its three batteries. Understanding the battery-level profile is often more useful than the composite score alone — it reveals where your child&apos;s reasoning strengths lie and which areas respond most to preparation.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-5">
          {[
            {
              battery: 'Verbal Battery (VB)',
              color: 'border-t-indigo-400 bg-indigo-50/30',
              subtests: 'Verbal Analogies, Sentence Completion, Verbal Classification',
              measures: 'Language-based reasoning, vocabulary depth, ability to identify relationships between words and concepts.',
              responsive: 'Most preparation-responsive — wide reading and deliberate vocabulary building produce genuine score gains over 6–12 months.',
            },
            {
              battery: 'Quantitative Battery (QB)',
              color: 'border-t-teal-400 bg-teal-50/30',
              subtests: 'Number Analogies, Number Puzzles, Number Series',
              measures: 'Numerical reasoning and quantitative relationships — not arithmetic fluency. Measures how your child spots patterns and rules in numbers.',
              responsive: 'Moderately preparation-responsive. Number series practice and puzzle books (KenKen, Sudoku) build the relevant skills.',
            },
            {
              battery: 'Nonverbal Battery (NB)',
              color: 'border-t-violet-400 bg-violet-50/30',
              subtests: 'Figure Matrices, Paper Folding, Figure Classification',
              measures: 'Abstract reasoning and spatial thinking using shapes only — no reading required. Often the most reliable indicator of underlying reasoning ability.',
              responsive: 'Preparation-responsive. Matrix reasoning books, tangrams, and spatial puzzle apps build the skills tested directly.',
            },
          ].map(({ battery, color, subtests, measures, responsive }) => (
            <div key={battery} className={`border border-t-4 border-gray-100 rounded-xl p-5 ${color}`}>
              <h3 className="font-semibold text-gray-900 mb-2">{battery}</h3>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Subtests</p>
              <p className="text-xs text-gray-600 mb-3">{subtests}</p>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">What it measures</p>
              <p className="text-xs text-gray-600 mb-3">{measures}</p>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Preparation</p>
              <p className="text-xs text-gray-600">{responsive}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Battery Score Profiles</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CogAT score reports use letter codes to describe the relationship between battery scores and the composite. This profile notation (e.g. &ldquo;7A (V+ Q- N)&rdquo;) summarises how evenly your child&apos;s abilities are distributed:
        </p>
        <ul className="space-y-2 mb-4">
          <Bullet><strong>A (no letter):</strong> All three batteries score within about 8 points of the composite. A relatively flat profile — no dramatic peaks or valleys.</Bullet>
          <Bullet><strong>V+ or V–:</strong> The Verbal battery score is significantly above (+) or below (–) the composite. A V– profile is common in ELL students or early readers; a V+ profile suggests strong language-based reasoning.</Bullet>
          <Bullet><strong>Q+ or Q–:</strong> The Quantitative battery is significantly above or below the composite. Q+ profiles are common in children with strong number sense.</Bullet>
          <Bullet><strong>N+ or N–:</strong> The Nonverbal battery is significantly above or below the composite. N+ profiles often indicate strong spatial and abstract reasoning relative to verbal ability.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Profiles matter for gifted identification because some programs weight specific batteries more heavily. A student with a composite SAS of 118 but an N+ (Nonverbal) SAS of 128 may still qualify for programmes that weight nonverbal reasoning heavily, even if the composite just misses the threshold.
        </p>
      </section>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">See how your child compares internationally</p>
          <p className="text-sm text-gray-600">Eduentry&apos;s adaptive assessment covers verbal, mathematical, and abstract reasoning — the same domains as the CogAT. Standardised score and percentile ranking against an international peer group, free, in under an hour.</p>
        </div>
        <CtaLink href="/academic-assessment" label="content_cta_cogat" className="shrink-0 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap">
          Start free assessment
        </CtaLink>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CogAT vs Other Gifted Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The CogAT is the most widely used gifted screening tool in US public schools, but it is not the only one. Here is how it compares to the other main tests you may encounter:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Test</th>
                <th className="text-left p-3 font-semibold text-gray-700">Format</th>
                <th className="text-left p-3 font-semibold text-gray-700">Score scale</th>
                <th className="text-left p-3 font-semibold text-gray-700">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['CogAT', 'Group, 3 batteries', 'SAS 100/SD16 + percentile + stanine', 'District-wide screening, gifted identification'],
                ['NNAT-3', 'Group, nonverbal only', 'Normalized Standard Score (NSS)', 'Language-neutral gifted screening'],
                ['OLSAT-8', 'Group, verbal + nonverbal', 'School Ability Index (SAI)', 'Districts using Otis-Lennon Assessment'],
                ['WISC-V', 'Individual, IQ', 'FSIQ 100/SD15 + index scores', 'Deep diagnostic cognitive assessment'],
                ['NWEA MAP', 'Group, achievement', 'RIT scale by subject', 'Academic achievement, not reasoning'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-gray-600">{row[1]}</td>
                  <td className="p-3 text-gray-600 font-mono text-xs">{row[2]}</td>
                  <td className="p-3 text-gray-600">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'My child scored SAS 119 — is that gifted?',
              a: 'An SAS of 119 places a child at approximately the 88th percentile, stanine 7. This is a strong score — well above average — but typically falls just below the 90th percentile threshold used by most gifted programs. Whether it qualifies depends on the specific district: some programs use the 88th percentile as their cut-off, some require 90th, and some consider the battery profile (if the Nonverbal battery is 125+, that may open additional pathways). Contact your district\'s gifted coordinator to check the specific threshold.',
            },
            {
              q: 'Can my child retake the CogAT?',
              a: 'Policies vary by district. Most districts allow a retest after a set waiting period (often 12–24 months) or after a significant life event that may have affected performance. Some districts automatically re-screen all students at certain grade levels. If you believe your child\'s score was not representative of their ability (illness on test day, significant anxiety, ELL background), speak to the school\'s gifted coordinator about retest options.',
            },
            {
              q: 'What does a high Nonverbal score mean if the Verbal score is lower?',
              a: 'A notably higher Nonverbal than Verbal score (N+ profile) often indicates strong underlying reasoning ability that is not yet fully expressed in language-based tasks. This profile is particularly common in: children who are still developing English fluency, early or reluctant readers, twice-exceptional (2e) children who have strong spatial/abstract reasoning but a language-related learning difference. A good gifted evaluator will consider the full profile rather than disqualifying a child based on a below-threshold Verbal score.',
            },
            {
              q: 'How long does the CogAT take?',
              a: 'The CogAT is typically administered over two or three sessions in a school day. Total testing time is approximately 90–120 minutes for the full form (all three batteries). Each battery takes 30–45 minutes. The test is not strictly timed in the same way as some assessments — the goal is to finish within a session, not to race against a clock.',
            },
            {
              q: 'What is a "qualified" CogAT score?',
              a: 'There is no universal meaning of "qualified" — it depends entirely on your district\'s specific gifted program criteria. The CogAT publisher does not define a gifted cut-off. Your district will specify which score(s) qualify a child for evaluation, screening, or direct placement. Always ask the district for the specific SAS or percentile threshold, not a general description like "above average."',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
}
