import Link from 'next/link'
import CtaLink from '@/components/ui/CtaLink'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const US_CONTENT: Record<string, React.ReactNode> = {

  'gifted-program-testing-guide': (
    <>
      <Callout>
        According to Eduentry, gifted identification in the US typically requires meeting score thresholds in the top 2–5% across multiple criteria — a single test is rarely sufficient. The standard pathway is: MAP or achievement screening (90th+ percentile) → CogAT group reasoning test (SAS 125–130+) → WISC-V individual evaluation (FSIQ 130+) → programme eligibility decision. Districts vary significantly; some accept a high CogAT alone, others require all three.
      </Callout>
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
      <Callout>
        According to Eduentry, a MAP RIT score represents the difficulty level at which a student answers approximately half of questions correctly. RIT scores are grade-independent: a Grade 3 student scoring RIT 210 in maths is performing at the same level as a Grade 5 student scoring RIT 210 — the scale is universal. A Fall score at or above the 90th percentile for grade typically triggers a district referral for gifted screening.
      </Callout>
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

      <div className="rounded-2xl bg-indigo-600 p-6 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex-1">
          <p className="font-bold text-white text-lg mb-1">See how your child compares to NWEA norms — free 45-min assessment</p>
          <p className="text-indigo-100 text-sm leading-relaxed">Eduentry uses the same adaptive IRT technology as MAP Growth, benchmarked against international peers across English, Mathematics, Verbal and Non-Verbal Reasoning. No registration required. Instant results.</p>
        </div>
        <CtaLink href="/academic-assessment" label="map_post_assessment_cta" className="shrink-0 bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors whitespace-nowrap text-center">
          Start free assessment →
        </CtaLink>
      </div>

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

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once you understand your child&apos;s RIT score, the natural next questions are what to do
          with it. If their score dropped from a previous test, see{' '}
          <Link href="/blog/nwea-map-score-dropped" className="text-indigo-600 hover:underline">
            why MAP scores drop and what to do next
          </Link>
          . For targeted improvement strategies, see our subject-specific guides:{' '}
          <Link
            href="/blog/how-to-improve-map-reading-score"
            className="text-indigo-600 hover:underline"
          >
            how to improve MAP Reading scores
          </Link>{' '}
          and{' '}
          <Link
            href="/blog/how-to-improve-map-math-score"
            className="text-indigo-600 hover:underline"
          >
            how to improve MAP Math scores
          </Link>
          . For a full evidence-based prep framework, see our{' '}
          <Link href="/blog/nwea-map-test-prep" className="text-indigo-600 hover:underline">
            NWEA MAP test prep guide
          </Link>
          . To quickly check whether a specific score is good for your child&apos;s grade, see{' '}
          <Link href="/blog/what-is-a-good-nwea-map-score" className="text-indigo-600 hover:underline">
            what is a good NWEA MAP score
          </Link>
          . To understand whether your child&apos;s score is growing at the right rate, see the{' '}
          <Link href="/blog/nwea-map-growth-norms" className="text-indigo-600 hover:underline">
            MAP growth norms guide
          </Link>
          .
        </p>
      </section>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 not-prose">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Convert your child&apos;s RIT score to a percentile</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Enter any RIT score and grade into our free calculator to see the exact national percentile and whether it meets your district&apos;s gifted cut-off.
          </p>
        </div>
        <Link
          href="/tools/nwea-rit-calculator"
          className="shrink-0 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap"
        >
          Open RIT Calculator →
        </Link>
      </div>
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

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 not-prose">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Start with a diagnostic benchmark</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Before purchasing prep materials, use a free adaptive assessment to identify your child&apos;s actual subject gaps across English, Maths, Verbal and Non-Verbal Reasoning — the four domains both tests draw on.
          </p>
        </div>
        <Link
          href="/academic-assessment"
          className="shrink-0 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap"
        >
          Free diagnostic assessment →
        </Link>
      </div>
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

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {[
            { href: '/blog/wisc-v-scores-explained', tag: 'Assessment Guide', title: 'WISC-V Scores Explained: Full Scale IQ, Index Scores, and Gifted Cut-Offs' },
            { href: '/blog/cogat-vs-nwea-map-gifted', tag: 'Comparison', title: 'CogAT vs. NWEA MAP for Gifted Identification: Which Test Matters More?' },
            { href: '/blog/cogat-scores-explained', tag: 'Assessment Guide', title: 'CogAT Scores Explained: SAS, Percentiles, and Gifted Programme Cut-Offs' },
            { href: '/blog/nwea-map-scores-explained', tag: 'Assessment Guide', title: 'NWEA MAP Scores Explained: RIT Scores, Grade Benchmarks, and Gifted Cut-Offs' },
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

  'cogat-scores-explained': (
    <>
      <Callout>
        According to Eduentry, the CogAT Standard Age Score (SAS) uses a mean of 100 and SD of 16 — slightly wider than the SD-15 scale used by WISC-V and Eduentry's own academic assessment. A CogAT SAS of 125 (94th percentile) is the minimum threshold for most district gifted programmes; highly selective programmes require SAS 130–132+ (98th–99th percentile). The correlation between CogAT composite SAS and WISC-V FSIQ is approximately r = 0.70 — strong, but not strong enough to substitute one for the other in formal eligibility decisions.
      </Callout>
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

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {[
            { href: '/blog/wisc-v-scores-explained', tag: 'Assessment Guide', title: 'WISC-V Scores Explained: Full Scale IQ, Index Scores, and Gifted Cut-Offs' },
            { href: '/blog/cogat-vs-nwea-map-gifted', tag: 'Comparison', title: 'CogAT vs. NWEA MAP for Gifted Identification: Which Test Matters More?' },
            { href: '/blog/gifted-program-testing-guide', tag: 'Parent Guide', title: 'US Gifted Program Testing: A Complete Parent\'s Guide' },
            { href: '/blog/nwea-map-scores-explained', tag: 'Assessment Guide', title: 'NWEA MAP Scores Explained: RIT Scores, Grade Benchmarks, and Gifted Cut-Offs' },
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

  'nwea-map-test-prep': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Most MAP test prep advice is wrong. Parents buy fixed-format practice sheets, children work through grade-level worksheets, and the score barely moves. The reason: NWEA MAP is an adaptive achievement test — it adjusts in real time to your child&apos;s level, tests content above and below their grade, and can&apos;t be beaten with test-taking strategies. What actually raises MAP scores is genuine mastery of curriculum content — and the research on how to build that mastery efficiently is specific and actionable.
      </p>
      <p className="text-gray-700 leading-relaxed mb-2">
        This guide covers what the evidence says works for Reading and Math RIT growth across all grades K–12, what the most common preparation mistakes are, and how to use your child&apos;s MAP report to target the right content.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        New to MAP? Read our{' '}
        <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">
          NWEA MAP scores guide
        </Link>{' '}
        first — it covers RIT scores, grade-level benchmarks, and percentile equivalents.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why MAP Is Different from Other Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most standardised tests give every student the same questions. MAP Growth adapts: if your child answers correctly, the next question is harder; if they answer incorrectly, it gets easier. After 40–53 questions, the algorithm has located your child&apos;s exact level on the continuous RIT scale — far more accurately than a fixed test could.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This adaptive structure has one critical implication for preparation: there is no fixed set of questions to practise. A Grade 5 student scoring at RIT 220 will see questions at the Grade 6–7 level. A Grade 5 student at RIT 195 will see Grade 3–4 content. The test goes where your child is — so preparation has to genuinely expand what your child knows, not rehearse what they already know.
        </p>
        <Callout>
          <strong className="text-indigo-900">The core rule of MAP prep:</strong> Every minute spent on content your child already knows is wasted. Every minute spent on content just above their current level produces measurable RIT gain. The goal is always to push the ceiling, not polish the floor.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The #1 Mistake: Preparing at Grade Level</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A Grade 4 student scoring at RIT 210 is already performing at a Grade 6–7 level in Math. Giving them Grade 4 practice packets teaches them nothing new — the MAP test will simply skip over that material and go to harder questions. The correct prep target is the content just above their current RIT, regardless of grade designation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          NWEA publishes a free resource called the{' '}
          <strong>MAP Learning Continuum</strong> — a breakdown of which skills and concepts appear at each RIT range for Reading, Math, and Language. Look up your child&apos;s most recent RIT score, find the next 5-point band, and use the Learning Continuum to identify the specific skills they should be building. This turns vague &quot;do more practice&quot; advice into a targeted list of skills to master.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Math RIT range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. grade equivalent</th>
                <th className="text-left p-4 font-semibold text-gray-700">Key content at this level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['161–180', 'Grade 1–2', 'Place value, single-digit multiplication, basic fractions'],
                ['181–200', 'Grade 3–4', 'Multi-digit multiplication, fraction operations, area/perimeter'],
                ['201–210', 'Grade 5', 'Decimal operations, ratio introduction, coordinate plane'],
                ['211–220', 'Grade 6–7', 'Proportional reasoning, algebra basics, negative numbers'],
                ['221–230', 'Grade 8', 'Linear equations, geometry proofs, statistical reasoning'],
                ['231+', 'Grade 9–12', 'Algebra II, functions, introductory calculus concepts'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-500 text-xs leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Reading has a parallel continuum. A child scoring RIT 215 in Reading is working with Grade 6–7 vocabulary, inference, and text structure — regardless of their school grade.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Actually Raises Reading RIT Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reading RIT gains come from two sources: vocabulary breadth and reading stamina. NWEA&apos;s own research, published in the <em>Journal of Research in Reading</em>, found that children who read for pleasure for 30 or more minutes per day gained 3–4 more RIT points per year than peers who did not — independent of instructional quality. The compounding effect over 3 years is significant: a child who consistently reads above grade level from Grade 3 will often score 10–15 RIT points above a peer who doesn&apos;t by Grade 6.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">Vocabulary depth, not breadth</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Reading questions rely heavily on academic vocabulary — words like &quot;infer,&quot; &quot;synthesise,&quot; &quot;nuanced,&quot; &quot;paradox,&quot; &quot;ambiguous.&quot; These words appear at predictable RIT levels. For Grades 4 and above, the most efficient reading prep is explicit vocabulary study focused on morphology: teaching roots, prefixes, and suffixes. A child who knows that &quot;-ject&quot; means &quot;throw&quot; can decode &quot;conjecture,&quot; &quot;dejected,&quot; and &quot;trajectory&quot; without having seen them before. This is more effective than memorising word lists, because one root unlocks 10–20 derived words.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">Reading at the right Lexile level</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reading texts that are too easy (below current level) does not advance reading ability. The optimal zone for growth is 100–200 Lexile points above the child&apos;s independent reading level — challenging enough to require effort but not so hard they lose comprehension. NWEA RIT scores map to Lexile levels (a child scoring RIT 215 in Reading is typically reading at a Lexile of around 800–900L). Use the Lexile framework to find books slightly above your child&apos;s level, then read alongside them for harder texts.
        </p>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 mb-4">
          <p className="font-semibold text-gray-900 mb-2 text-sm">Practical reading targets by grade</p>
          <div className="space-y-2">
            {[
              ['Grades K–2', 'Focus on fluency and decoding. Decodable readers + frequent read-alouds of books above independent level.'],
              ['Grades 3–5', 'Transition to chapter books. Series work (Harry Potter, Percy Jackson) builds stamina. Explicit vocabulary from chapter headings.'],
              ['Grades 6–8', 'Introduce non-fiction. Science American, National Geographic, quality journalism. Expose to argument structure and evidence-based writing.'],
              ['Grades 9–12', 'Literary criticism, primary sources, complex non-fiction. AP English reading lists are calibrated to the RIT 230+ range.'],
            ].map(([grade, tip]) => (
              <div key={grade} className="flex gap-3">
                <span className="text-xs font-semibold text-indigo-600 w-24 shrink-0 pt-0.5">{grade}</span>
                <span className="text-sm text-gray-600">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Actually Raises Math RIT Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Math tests two distinct skill types: procedural fluency (can your child compute accurately?) and conceptual reasoning (can your child apply mathematical thinking to novel problems?). Most home practice over-indexes on computation and under-indexes on problem-solving. The MAP test weights these roughly equally — so a child who is computation-fast but problem-solving-weak will plateau in the low-to-mid range for their grade.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">The single biggest Math barrier: fractions</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          For students in Grades 4–7, fraction fluency is the primary driver of Math RIT. NWEA data shows that fraction operations, equivalency, and ratio/proportion questions cluster heavily in the RIT 195–220 range — exactly where most students&apos; scores stall. A child who cannot fluidly add fractions with unlike denominators, convert between fractions and decimals, or work with ratios will hit a ceiling around RIT 205–210 regardless of their computation speed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The fix is targeted fraction work — not worksheets, but conceptual understanding. Start with visual models (fraction bars, area models). Ensure understanding before introducing the standard algorithm. Khan Academy&apos;s fraction units (5th Grade and 6th Grade) cover this well. Two weeks of focused fraction work can add 3–5 RIT points for a student who was stuck on this barrier.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">Algebra and proportional reasoning for Grades 6+</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          For middle and high school students, the RIT ceiling is set by algebraic reasoning. A student who can write and solve linear equations in one variable, work with proportional relationships, and interpret graphs will advance through the RIT 220–230 range. Students stuck below RIT 220 in Grade 7 are almost always missing the conceptual foundation of proportional reasoning — the transition from additive to multiplicative thinking.
        </p>

        <div className="rounded-2xl bg-indigo-600 p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1">
            <p className="font-bold text-white text-lg mb-1">Find exactly where your child is on the RIT scale — before you start prep</p>
            <p className="text-indigo-100 text-sm leading-relaxed">Eduentry&apos;s free adaptive assessment uses the same IRT technology as MAP Growth, benchmarked against NWEA norms. It gives you a Reading and Math score on the standard scale in under 45 minutes — so you know precisely which content band to target.</p>
          </div>
          <CtaLink href="/academic-assessment" label="map_prep_mid_cta" className="shrink-0 bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors whitespace-nowrap text-center">
            Start free assessment →
          </CtaLink>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Grade-by-Grade Preparation Priorities</h2>
        <div className="space-y-4">
          {[
            {
              grade: 'Kindergarten – Grade 2',
              reading: 'Phonemic awareness and decoding fluency. A child who reads slowly at the word level cannot focus on comprehension. Daily read-alouds of books above independent level build vocabulary passively.',
              math: 'Number sense: counting, skip-counting, place value to 1,000, basic addition and subtraction fact fluency. Do not rush to multiplication — a shaky number sense foundation causes problems at Grade 4.',
            },
            {
              grade: 'Grades 3–5',
              reading: 'Vocabulary depth (morphology) and reading stamina (30+ min/day). Transition from fiction-only to mixed fiction/non-fiction. Begin teaching inference explicitly: "what does the author imply but not state directly?"',
              math: 'Fraction fluency is the priority. Also: multiplication fact automaticity, long division, and beginning decimal work. Students who master fractions by end of Grade 5 are well-positioned for Grades 6–8.',
            },
            {
              grade: 'Grades 6–8',
              reading: 'Complex texts: argumentative essays, scientific writing, historical primary sources. Focus on identifying author purpose, bias, and evidence quality. Advanced vocabulary study (SAT-level word families).',
              math: 'Proportional reasoning, linear equations, integer operations, statistical reasoning. Khan Academy\'s Grade 6–8 content directly maps to MAP RIT 210–225. Introduce geometry proofs for students at RIT 220+.',
            },
            {
              grade: 'Grades 9–12',
              reading: 'AP English reading and analysis skills. Complex non-fiction at Lexile 1100L+. Focus on logical argument structure and evidence evaluation.',
              math: 'Algebra II, functions, exponential/logarithmic relationships, introductory statistics. MAP Science gains at this level come from chemistry and physics concept mastery.',
            },
          ].map(({ grade, reading, math }) => (
            <div key={grade} className="border border-gray-100 rounded-xl p-5">
              <div className="font-bold text-gray-900 mb-3">{grade}</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold text-indigo-600 mb-1">READING</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{reading}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-600 mb-1">MATH</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{math}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Your MAP Report for Targeted Prep</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The MAP Family Report includes a section called <strong>Goals</strong> that lists the specific skill areas your child is ready to learn next — derived directly from their RIT score and the NWEA Learning Continuum. This is the most actionable part of the report. Most parents skip it and focus on the RIT number; the Goals section is where the prep roadmap is.
        </p>
        <div className="space-y-3 mb-4">
          <Check><strong>Current RIT score:</strong> Your baseline. Note which testing window (fall/winter/spring) — scores are lower in fall and higher in spring as students learn through the year.</Check>
          <Check><strong>Projected growth:</strong> NWEA publishes expected growth per testing window by grade. If your child is growing faster than projected, they&apos;re accelerating. If slower, something is blocking progress.</Check>
          <Check><strong>Goal areas:</strong> These are the exact skill clusters to target. A child whose Goal area lists &quot;Operations and Algebraic Thinking — Multiplication and Division&quot; needs fluency with multi-digit multiplication, not algebra.</Check>
          <Check><strong>Lexile range:</strong> Listed on the Reading report. Use this to find books at the right level — 100–200 Lexile above the listed range for stretch reading.</Check>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Realistic improvement in one testing window (typically 12–16 weeks) is 3–6 RIT points with consistent, targeted practice. A jump of 8+ points is possible but unusual. Set expectations accordingly — MAP growth is a marathon, not a sprint.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Practice Is More Effective Than Fixed Practice</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Because MAP adapts to skill level, the closest form of effective practice is also adaptive — a system that gives harder questions when a child succeeds and easier ones when they struggle. Fixed-format worksheets at a set grade level will either be too easy (no challenge, no growth) or too hard (frustration, no learning). The adaptive approach finds and works at the productive zone automatically.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Eduentry&apos;s academic assessment uses the same 2-parameter Item Response Theory model as NWEA MAP — questions adapt in real time to your child&apos;s performance, and the final score is produced on the same standardised scale (mean 100, SD 15). Unlike MAP, which is administered at school on a schedule, you can use Eduentry any time — as a diagnostic before prep starts, and to track progress between school testing windows.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How many points can my child realistically gain on MAP in one testing window?',
              a: 'With consistent, targeted practice over 12–16 weeks, 3–6 RIT points is a realistic and meaningful gain. NWEA national norms show average organic growth of 4–6 points per year for Grade 3–5 students. Targeted preparation can accelerate this, but 8+ points in a single window is unusual. Focus on sustainable progress rather than a single-window score jump.',
            },
            {
              q: 'Should I tell my child they are preparing for the MAP test?',
              a: 'For younger children (K–3), frame it as reading and maths practice rather than test prep — the anxiety associated with testing can lower performance in adaptive assessments. For older children (Grade 4+), transparency usually helps: explain that the test is adaptive, that there are no "trick" questions, and that genuine understanding is the goal.',
            },
            {
              q: 'What is the best free resource for MAP Math prep?',
              a: 'Khan Academy is the closest free resource to NWEA\'s Learning Continuum. Use your child\'s RIT score to identify their current level (e.g., RIT 207 ≈ late Grade 5), then work through Khan\'s Grade 5–6 content rather than their school grade level. The adaptive exercises within Khan\'s Mastery Challenges are particularly good for building the procedural + conceptual balance MAP tests.',
            },
            {
              q: 'Does MAP test vocabulary specifically?',
              a: 'MAP Reading and Language tests vocabulary heavily — particularly Grades 4 and above. Questions test both direct vocabulary knowledge ("what does \'ambivalent\' mean?") and contextual usage ("which word most closely matches the author\'s meaning in paragraph 2?"). Building academic vocabulary through morphology study (root words, prefixes, suffixes) and wide reading is the most durable preparation approach.',
            },
            {
              q: 'How does the MAP test affect gifted program eligibility?',
              a: 'Many US school districts use MAP Growth scores as part of their gifted identification process. Most trigger a formal evaluation referral at the 90th or 95th percentile for the child\'s grade. The exact RIT that corresponds to these percentiles changes by grade — an 85th-percentile score in Grade 3 Reading is approximately RIT 211, while in Grade 6 it\'s approximately RIT 224. Check your district\'s specific threshold and compare your child\'s score using NWEA\'s published national norms.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-gray-700 leading-relaxed mb-6">
        For subject-specific improvement strategies, see{' '}
        <Link
          href="/blog/how-to-improve-map-reading-score"
          className="text-indigo-600 hover:underline"
        >
          how to improve your child&apos;s MAP Reading score
        </Link>{' '}
        and{' '}
        <Link
          href="/blog/how-to-improve-map-math-score"
          className="text-indigo-600 hover:underline"
        >
          how to improve your child&apos;s MAP Math score
        </Link>
        . If a score dropped unexpectedly, see{' '}
        <Link href="/blog/nwea-map-score-dropped" className="text-indigo-600 hover:underline">
          what a MAP score drop means and what to do
        </Link>
        .
      </p>

      <div className="rounded-2xl bg-indigo-600 p-6 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex-1">
          <p className="font-bold text-white text-lg mb-1">Know your child&apos;s RIT level before buying a single workbook</p>
          <p className="text-indigo-100 text-sm leading-relaxed">A free 45-minute adaptive assessment — same IRT technology as MAP Growth — tells you exactly which RIT band your child is in for Reading and Maths. No guesswork. No wasted practice time. Start with a clear baseline.</p>
        </div>
        <CtaLink href="/academic-assessment" label="map_prep_end_cta" className="shrink-0 bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors whitespace-nowrap text-center">
          Start free assessment →
        </CtaLink>
      </div>
    </>
  ),

  'singapore-gep-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Singapore&apos;s Gifted Education Programme (GEP) is the most selective state school enrichment programme in the world by population percentage. Approximately 1% of each Primary 3 cohort — around 1,000 students per year out of 40,000+ — gains entry. The selection process is rigorous, the cut-offs are never officially published, and most families begin thinking seriously about it after it is already too late to prepare. This guide explains how the GEP selection works, what it tests, and what preparation is actually effective.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the GEP and What Does It Offer?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Gifted Education Programme was introduced by the Singapore Ministry of Education (MOE) in 1984 to provide an enriched curriculum for children identified as gifted. GEP students attend one of nine designated GEP centres across Singapore, where they study an accelerated and enriched curriculum in English Language, Mathematics, and Science, alongside the General Programme taken by all Singaporean primary students.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The GEP curriculum is not simply faster — it is deeper and broader. GEP students are expected to work independently, think critically, and engage with open-ended problems that have no single correct answer. Primary 4–6 GEP students complete projects, read widely outside the standard syllabus, and develop research skills that most students encounter only at secondary level. The programme runs from Primary 4 to Primary 6 (ages 10–12).
        </p>
        <Callout>
          <strong className="text-indigo-900">Key fact:</strong> GEP selection occurs in Primary 3 (age 9), with a two-stage process. There is no second chance — a child identified later as gifted may be offered enrichment within their mainstream school, but re-entry to the formal GEP is not available after Primary 3.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Selection Process: Two Stages</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          GEP selection takes place annually in Primary 3. All Primary 3 students in MOE schools are automatically eligible and do not need to be nominated — every child in the cohort takes Stage 1.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">Stage 1: Screening Exercise</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stage 1 is administered in August of the Primary 3 year. All Primary 3 students sit two papers:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {[
            { subject: 'English Language', content: 'Comprehension passages with inference and vocabulary questions; short-answer components testing higher-order language skills. Questions are significantly more challenging than the P3 standard curriculum.' },
            { subject: 'Mathematics', content: 'Problem-solving questions requiring multi-step reasoning. Routine computation is not the focus — MOE tests mathematical thinking, pattern recognition, and unconventional problem-solving rather than standard algorithm application.' },
          ].map(({ subject, content }) => (
            <div key={subject} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{subject}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          Approximately the top 5% of the cohort by Stage 1 performance — around 2,000 students — are invited to Stage 2. MOE does not publish the exact cut-off score or percentage.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3 mt-6">Stage 2: Identification Exercise</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stage 2 takes place in October, approximately two months after Stage 1 results. Students invited to Stage 2 sit three papers:
        </p>
        <div className="space-y-3 mb-4">
          <Check><strong>English Language (Higher Order):</strong> Extended comprehension, vocabulary in depth, and short writing tasks. Questions test synthesis across multiple texts, figurative language interpretation, and the ability to identify implicit meaning.</Check>
          <Check><strong>Mathematics (Higher Order):</strong> Multi-step problem-solving, non-routine heuristics, and mathematical reasoning. Problems often involve working backwards, systematic listing, or constructing logical arguments — skills not explicitly taught in the mainstream P3 syllabus.</Check>
          <Check><strong>General Ability Test (GAT):</strong> This is the critical differentiator. The GAT is closest to an IQ-type test and measures verbal ability, quantitative reasoning, and spatial reasoning through pattern recognition, analogies, sequencing, and logical deduction. It is designed to be curriculum-independent and cannot be prepared for through syllabus study alone.</Check>
        </div>
        <p className="text-gray-700 leading-relaxed">
          From Stage 2, approximately 1% of the original cohort — around 1,000 students — are offered GEP places. Results are released in November. Parents who accept the offer receive a posting to one of the nine GEP centres, based on proximity and available places.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Nine GEP Centres</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">School</th>
                <th className="text-left p-4 font-semibold text-gray-700">Region</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Anglo-Chinese School (Primary)', 'Central'],
                ['Catholic High School (Primary)', 'Central/East'],
                ['Henry Park Primary School', 'West'],
                ['Nan Hua Primary School', 'South'],
                ['Nanyang Primary School', 'West'],
                ['Raffles Girls&apos; Primary School', 'Central'],
                ['Rosyth School', 'North-East'],
                ['Singapore Chinese Girls&apos; School (Primary)', 'Central'],
                ['Tao Nan School', 'East'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mt-3">GEP posting is to the centre nearest the child&apos;s home, subject to availability. Families do not choose their GEP centre; MOE determines the posting.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can Be Prepared For — and What Cannot</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The honest answer is that the General Ability Test cannot be meaningfully prepared for through curriculum study. It measures the reasoning abilities that your child has developed across their entire life — through reading, play, problem-solving, and conversation — not what they have been taught at school. Intensive tutoring for the GAT in the months before Stage 2 is unlikely to produce significant gains.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The English Language and Mathematics components are more amenable to preparation — but the preparation that works is deep, long-term enrichment, not last-minute drilling.
        </p>

        <div className="space-y-4">
          {[
            {
              area: 'English Language (preparable)',
              approach: 'Wide reading at and above P3–P4 level. Exposure to complex texts builds the vocabulary and inference skills tested. Short-answer practice on comprehension inference questions is useful from P2 onwards. The key is genuine comprehension work — identifying what the text implies, not just what it says.',
            },
            {
              area: 'Mathematics (preparable)',
              approach: 'Non-routine problem-solving heuristics: working backwards, making systematic lists, looking for patterns, drawing diagrams. The Singapore Maths curriculum already introduces these, but GEP problems are significantly harder. Books from the Mathematical Olympiad training series (e.g., Olympiad Trainer, Primary Mathematics Challenge) are calibrated to GEP-level difficulty.',
            },
            {
              area: 'General Ability Test (limited preparation)',
              approach: 'Puzzle and reasoning work — spatial puzzles, pattern recognition games, verbal analogies — can build familiarity with the test format without dramatically raising performance. The most effective long-term investment is broad intellectual enrichment: Lego, chess, strategy games, reading fiction with complex plots, and mathematical puzzles.',
            },
          ].map(({ area, approach }) => (
            <div key={area} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{area}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{approach}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-2xl bg-indigo-600 p-6 flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="flex-1">
          <p className="font-bold text-white text-lg mb-1">See how your child measures up on the skills GEP tests</p>
          <p className="text-indigo-100 text-sm leading-relaxed">Eduentry&apos;s free assessment covers verbal reasoning, numerical reasoning, and non-verbal (spatial) reasoning — the same three domains as the GEP General Ability Test. Takes 45 minutes. No registration needed. Results benchmarked against international norms.</p>
        </div>
        <CtaLink href="/academic-assessment" label="singapore_gep_mid_cta" className="shrink-0 bg-white text-indigo-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors whitespace-nowrap text-center">
          Start free assessment →
        </CtaLink>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">If Your Child Doesn&apos;t Get Into GEP</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not making the GEP is not an academic verdict. The GEP selects roughly the top 1% — children who just miss that threshold are often in the top 2–5%, highly capable, and well-served by strong mainstream schools. Singapore&apos;s mainstream primary system is itself among the highest-performing in the world; PISA consistently ranks Singapore first or second globally in Mathematics and Reading.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Children who are high-performing but outside GEP have several strong pathways. The PSLE Distinction Programme (formerly called Higher Mother Tongue streams) allows academically strong students to take more challenging language papers. Many mainstream primary schools have internal enrichment programmes. At secondary level, Integrated Programme (IP) schools — which lead directly to the IB Diploma or A-levels without the O-levels — are accessible based on PSLE results and attract many students who were not GEP.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Additionally, some families in Singapore explore international school education — particularly for children who may thrive in a less standardised curriculum. International schools in Singapore using the IB Primary Years Programme (PYP) or UK National Curriculum take a different approach to identifying and developing ability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What percentage of students get into GEP?',
              a: 'Approximately 1% of each Primary 3 cohort — around 1,000 students — are offered GEP places each year. Stage 1 shortlists the top ~5% (around 2,000 students) for Stage 2, from which the final ~1% is selected.',
            },
            {
              q: 'Can my child retake the GEP selection test?',
              a: 'No. The GEP selection exercise is conducted once, in Primary 3. There is no second-chance testing or late entry to the GEP programme. Children who are identified as gifted in later years may be supported through enrichment within their mainstream school, but the formal GEP is only accessible through the Primary 3 process.',
            },
            {
              q: 'What is the GEP General Ability Test?',
              a: 'The General Ability Test (GAT) is the third paper in Stage 2. It tests verbal ability (word analogies, vocabulary in context), quantitative reasoning (number patterns, mathematical logic), and spatial/visual reasoning (pattern recognition, matrices, visual sequences). It is designed to be curriculum-independent — it measures underlying reasoning ability rather than taught knowledge.',
            },
            {
              q: 'What happens to a GEP student at secondary school?',
              a: 'The GEP programme ends after Primary 6. GEP students sit the PSLE like all other Primary 6 students and are posted to secondary schools based on their PSLE results. Strong PSLE scores open access to IP schools (which lead to the IB Diploma or A-levels) or the Express stream with H3 subjects at O-level. GEP status itself does not guarantee a specific secondary school placement.',
            },
            {
              q: 'Are international school students eligible for GEP?',
              a: 'GEP selection is open to Singapore Permanent Residents and Citizens attending MOE mainstream schools. International school students are not eligible for the GEP selection exercise, as they do not attend MOE primary schools where the test is administered.',
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

  'nwea-map-score-dropped': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        A lower MAP score is alarming to see — but it doesn&apos;t always mean what parents think it
        means. Before concluding your child has fallen behind, it&apos;s worth understanding how MAP
        scores work, what a meaningful drop looks like, and what actually causes the most common
        declines. This guide walks through each step.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Not familiar with MAP RIT scores yet? Read our{' '}
        <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">
          NWEA MAP scores guide
        </Link>{' '}
        first — it covers how RIT scores work and what they mean by grade level.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Much of a Drop Is Normal?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Growth has a standard error of measurement (SEM) of approximately 3 RIT points. This
          means a score of 215 represents &ldquo;somewhere between 212 and 218&rdquo; — the test
          cannot resolve finer distinctions than that. A drop of 1–3 RIT points between consecutive
          tests may reflect nothing more than this natural statistical variation, not a real change
          in what your child knows.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Drop size</th>
                <th className="text-left p-4 font-semibold text-gray-700">Likely meaning</th>
                <th className="text-left p-4 font-semibold text-gray-700">What to do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['1–3 RIT points', 'Within measurement error; statistically indistinct from flat', 'Monitor next cycle — no immediate action needed'],
                ['4–6 RIT points (Fall-to-Fall)', 'Summer slide — common in Math, recovers by Spring', 'Normal; targeted math fluency work through autumn'],
                ['4–6 RIT points (Fall-to-Spring)', 'Possible specific skill gap or test-day conditions', 'Review Learning Continuum, identify stalled skill cluster'],
                ['7+ RIT points', 'Likely genuine regression — warrants investigation', 'Request teacher consultation; targeted intervention plan'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-500 text-xs leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Five Most Common Reasons MAP Scores Drop
        </h2>

        <h3 className="text-lg font-bold text-gray-900 mb-3">1. Summer learning loss</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most frequent cause of a lower Fall score compared to the previous Spring is summer
          learning loss — particularly in Math. NWEA research consistently shows elementary students
          lose an average of 2–3 Math RIT points over summer, with the effect largest in grades
          4–6. Reading scores are more resilient, especially for children who read during the
          summer, but some vocabulary and fluency loss is normal. If your child&apos;s Fall score is
          lower than last Spring by 4 RIT points or fewer, summer slide is the most likely
          explanation — and most children recover to Spring levels by the following Spring.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          2. Measurement error and test-day conditions
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Growth is highly sensitive to effort and test conditions. Because it&apos;s adaptive,
          a child who clicks through questions carelessly — or who is fatigued, ill, or not engaged
          — will reach a false floor faster than on a fixed test. A student who rushes the first 10
          questions will be assigned easier questions for the rest of the session, artificially
          deflating their score. Scores can vary meaningfully between morning and afternoon
          administration, or between a motivated child and one who wasn&apos;t.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">3. A genuine skill gap at the next level</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          As students progress through the RIT scale, they eventually encounter a content cluster
          they haven&apos;t mastered. A child who progressed steadily to RIT 210 in Math may plateau
          or dip when the test starts sampling heavy fractions and proportional reasoning content —
          which clusters precisely in the RIT 205–220 range. This doesn&apos;t mean they&apos;ve
          gone backward; it means they&apos;ve reached the ceiling of what they currently know and
          need targeted work to push through.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          4. A strand change in what&apos;s being tested
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Math samples across four content strands: Operations &amp; Algebraic Thinking, Number
          &amp; Operations, Measurement &amp; Data, and Geometry. A child strong in Algebra but weak
          in Geometry may score lower in a test window that sampled more geometry questions. NWEA
          provides subtest scores for each strand — compare these across tests to see if the drop is
          concentrated in one area or spread across all four.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          5. Growth plateau before a breakthrough
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Research on skill acquisition shows that progress is rarely linear — students consolidate,
          plateau, then jump. A flat or slightly lower score in one testing window followed by a
          larger gain in the next is common, especially at grade transitions when curriculum changes
          significantly. If the drop is modest and your child&apos;s teacher reports normal classroom
          performance, this is likely what&apos;s happening.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Tell Which Reason Applies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Three questions narrow it down quickly:
        </p>
        <div className="space-y-4 mb-6">
          {[
            ['When did the drop happen?', 'Spring → Fall drops are almost always summer slide. Fall → Spring drops during the school year are more significant.'],
            ['Which subtest dropped?', 'Request the strand-level breakdown. A drop in one strand (e.g., Operations) but not others points to a specific skill gap, not general regression.'],
            ['Was Math or Reading affected?', 'Math drops are more common and more recoverable. A Reading drop of 4+ points in a school-year window is less common and warrants faster attention.'],
          ].map(([q, a]) => (
            <div key={q} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-1 text-sm">{q}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
        <Callout>
          <strong className="text-indigo-900">
            The most useful thing to request from your child&apos;s teacher:
          </strong>{' '}
          the MAP Growth Learning Continuum report at your child&apos;s current RIT level. This
          shows exactly which skills they have mastered and which they haven&apos;t — turning a
          vague score drop into a specific list of what to work on.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do Next: A Practical Plan</h2>
        <div className="space-y-4 mb-6">
          {[
            ['Week 1–2: Diagnose', 'Request the strand-level subtest breakdown and the Learning Continuum report. Identify the specific skill cluster that dropped rather than treating the subject as a whole.'],
            ['Week 3–8: Targeted skill work', 'Address the specific skill gap — not a general "study more" approach. For Math fraction gaps: Khan Academy 5th–6th Grade fractions and visual fraction models. For Reading vocabulary gaps: morphology roots, Newsela at current Lexile, and 30 minutes of daily reading.'],
            ['Week 9–12: Build habits that sustain gains', 'The gains that stick are the ones built into daily routine. 20–30 minutes of subject-specific practice daily outperforms two-hour weekend sessions.'],
            ['Next test window: Compare strategically', 'Compare Fall-to-Spring (within a school year) to assess whether targeted intervention worked. Do not compare Spring-to-Fall and panic — summer slide makes that comparison misleading.'],
          ].map(([step, detail]) => (
            <div key={step} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
              <div className="text-indigo-600 font-bold text-sm w-36 shrink-0 pt-0.5">{step}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          For a full breakdown of what actually raises MAP scores, see our{' '}
          <Link href="/blog/nwea-map-test-prep" className="text-indigo-600 hover:underline">
            MAP test prep guide
          </Link>{' '}
          — and our subject-specific guides for{' '}
          <Link
            href="/blog/how-to-improve-map-reading-score"
            className="text-indigo-600 hover:underline"
          >
            MAP Reading improvement
          </Link>{' '}
          and{' '}
          <Link
            href="/blog/how-to-improve-map-math-score"
            className="text-indigo-600 hover:underline"
          >
            MAP Math improvement
          </Link>
          .
        </p>
      </section>
    </>
  ),

  'how-to-improve-map-reading-score': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Most MAP Reading advice is too generic to be useful: &ldquo;read more,&rdquo;
        &ldquo;build vocabulary,&rdquo; &ldquo;practise comprehension.&rdquo; This guide is more
        specific. It covers what MAP Reading actually tests, which interventions NWEA research shows
        move the needle, and what to do at each grade level — with the goal of raising your
        child&apos;s RIT score by 4–8 points in a 12–16 week window.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Need MAP Reading benchmarks first? See our{' '}
        <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">
          NWEA MAP scores by grade guide
        </Link>{' '}
        for average RIT scores and percentile equivalents. For Math strategies, see{' '}
        <Link
          href="/blog/how-to-improve-map-math-score"
          className="text-indigo-600 hover:underline"
        >
          how to improve MAP Math scores
        </Link>
        .
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What MAP Reading Actually Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Reading covers three main skill areas — and understanding which area your child
          struggles with is the first step to raising their score efficiently.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Skill area</th>
                <th className="text-left p-4 font-semibold text-gray-700">What it covers</th>
                <th className="text-left p-4 font-semibold text-gray-700">Starts dominating at</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Literary text', 'Story elements, character motivation, theme, figurative language, point of view', 'RIT 170–200'],
                ['Informational text', 'Main idea, text structure, author\'s purpose, evidence and claims', 'RIT 195–220'],
                ['Vocabulary', 'Words in context, academic language, word relationships, connotation', 'All levels, heaviest at RIT 200+'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-xs leading-relaxed">{row[1]}</td>
                  <td className="p-4 text-gray-500 text-xs">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          <strong className="text-indigo-900">The most important insight:</strong> above RIT 200,
          inference questions — drawing conclusions not explicitly stated in the text — make up the
          largest portion of the test. Students who can decode fluently but can&apos;t infer
          reliably will plateau in the RIT 200–215 range regardless of reading volume.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Lexile Method: Reading at the Right Level
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NWEA RIT scores map directly to Lexile levels — the same scale used to measure text
          complexity. Reading at the right Lexile level is probably the single most actionable thing
          a parent can do to support MAP Reading growth.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">MAP Reading RIT</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. Lexile range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Growth reading zone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['170–185', '200–500L', '400–600L — early chapter books, decodable series'],
                ['185–200', '500–700L', '700–800L — mid-series fiction, basic non-fiction'],
                ['200–215', '700–900L', '900–1000L — YA non-fiction, age-appropriate lit'],
                ['215–225', '900–1100L', '1050–1200L — middle school non-fiction, classics'],
                ['225+', '1100L+', '1200–1400L — AP-level non-fiction, primary sources'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-500 text-xs leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The growth reading zone is 100–200 Lexile above your child&apos;s current independent
          level. Reading only at current level maintains but does not advance reading ability.
          The family report NWEA sends after testing often includes a Lexile range — use that to
          select books and non-fiction articles.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Practical tools:</strong> Newsela adjusts non-fiction articles to a specific
          Lexile level — parents can find an article at exactly the right challenge level. CommonLit
          provides literary and informational texts with built-in comprehension questions. Both are
          free.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vocabulary: The Highest-Leverage Intervention
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Reading vocabulary questions use Tier 2 academic words — words like{' '}
          <em>infer, synthesise, ambiguous, paradox, contradict, nuance</em> — that appear across
          subjects and are rarely taught explicitly at school. These are what separate students at
          RIT 205 from students at RIT 215.
        </p>
        <h3 className="text-lg font-bold text-gray-900 mb-3">Why morphology beats word lists</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Memorising 20 words per week is inefficient. A child who learns the Latin root{' '}
          <strong>cred</strong> (believe) can decode <em>credible, incredible, credential,
          discredit, accredit</em> — five words unlocked by one root. One root per week, taught
          through real examples in reading, is more effective than a weekly flashcard set.
        </p>
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 mb-4">
          <p className="font-semibold text-gray-900 mb-3 text-sm">
            High-value roots to teach by grade level
          </p>
          <div className="space-y-2">
            {[
              ['Grades 3–4', 'pre-, re-, un-, -ful, -less, -tion — unlocks hundreds of common words'],
              ['Grades 5–6', 'micro-, macro-, -ology, trans-, inter- — academic and science vocabulary'],
              ['Grades 7–8', 'Latin roots: rupt, dict, ject, tract, scrib — unlocks Tier 2 academic vocabulary'],
              ['Grades 9+', 'Greek roots: chron, graph, logy, phon, bio — unlocks advanced academic and test vocabulary'],
            ].map(([grade, roots]) => (
              <div key={grade} className="flex gap-3">
                <span className="text-xs font-semibold text-indigo-600 w-24 shrink-0 pt-0.5">
                  {grade}
                </span>
                <span className="text-sm text-gray-600">{roots}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Inference Skills</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Inference is the single most tested skill on MAP Reading above RIT 200 — and the skill
          most poorly served by typical comprehension practice. Standard comprehension questions ask
          &ldquo;what happened in the story?&rdquo; MAP inference questions ask &ldquo;what can you
          conclude that the text does not directly state?&rdquo;
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most effective way to develop inference is through structured conversation during
          read-alouds, not written exercises. The <strong>QAR method</strong> (Question-Answer
          Relationship) teaches children to categorise questions by where the answer lives —
          &ldquo;right there&rdquo; (literal), &ldquo;think and search&rdquo; (inference within the
          text), or &ldquo;on my own&rdquo; (background knowledge). Practising QAR for 10 minutes
          during shared reading sessions, two to three times per week, builds the metacognitive
          awareness MAP Reading requires.
        </p>
        <Callout>
          <strong className="text-indigo-900">A simple inference habit to build at home:</strong>{' '}
          after reading any passage together, ask &ldquo;What did the author not say but want us to
          understand?&rdquo; Resist answering — wait for your child to reason aloud. This single
          question, practised consistently, develops more inference ability than most workbook
          exercises.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Realistic Improvement Looks Like
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Reading gains are slower than Math gains in the short term because they depend on
          accumulated vocabulary and schema. Typical growth with targeted effort over a 12–16 week
          window:
        </p>
        <div className="space-y-3 mb-6">
          {[
            ['Elementary (RIT 175–205)', '4–8 RIT points per year with daily reading at the right Lexile and morphology work'],
            ['Middle school (RIT 205–220)', '3–6 RIT points per year; vocabulary and inference work are the primary levers'],
            ['High school (RIT 220+)', '2–4 RIT points per year; gains come from non-fiction exposure and analytical reading'],
          ].map(([level, gain]) => (
            <div key={level} className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="font-semibold text-indigo-700 text-sm w-48 shrink-0">{level}</span>
              <span className="text-sm text-gray-600 leading-relaxed">{gain}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          For MAP Math improvement strategies, see{' '}
          <Link
            href="/blog/how-to-improve-map-math-score"
            className="text-indigo-600 hover:underline"
          >
            how to improve your child&apos;s MAP Math score
          </Link>
          . For the full test prep framework covering both subjects, see our{' '}
          <Link href="/blog/nwea-map-test-prep" className="text-indigo-600 hover:underline">
            NWEA MAP test prep guide
          </Link>
          .
        </p>
      </section>
    </>
  ),

  'how-to-improve-map-math-score': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        MAP Math improvement fails for one predictable reason: parents and tutors practise at the
        wrong level. A Grade 5 student scoring RIT 218 needs Grade 7 content, not Grade 5 — but
        most at-home practice defaults to grade-level worksheets the child already knows. This guide
        explains where to target, what the most common barriers are at each RIT band, and how to
        build a plan that actually moves the score.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        Not sure what your child&apos;s RIT score means? Start with our{' '}
        <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">
          NWEA MAP scores explained guide
        </Link>
        . For Reading strategies, see{' '}
        <Link
          href="/blog/how-to-improve-map-reading-score"
          className="text-indigo-600 hover:underline"
        >
          how to improve MAP Reading scores
        </Link>
        .
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What MAP Math Actually Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Math draws from four content domains, and the mix shifts as scores increase.
          Understanding which domain is holding your child back is more useful than general practice.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Domain</th>
                <th className="text-left p-4 font-semibold text-gray-700">Key skills</th>
                <th className="text-left p-4 font-semibold text-gray-700">Heavy RIT range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Operations & Algebraic Thinking', 'Computation, equations, word problems, patterns', 'All levels'],
                ['Number & Operations', 'Fractions, decimals, ratios, proportions, number sense', 'RIT 185–225'],
                ['Measurement & Data', 'Geometry, statistics, graphing, area/volume', 'RIT 195–220'],
                ['Real & Complex Numbers', 'Integers, rational numbers, functions, advanced algebra', 'RIT 220+'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 text-xs">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-xs leading-relaxed">{row[1]}</td>
                  <td className="p-4 text-gray-500 text-xs font-mono">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Math also tests two types of thinking at every level:{' '}
          <strong>procedural fluency</strong> (can your child compute accurately?) and{' '}
          <strong>conceptual reasoning</strong> (can your child apply mathematical thinking to a new
          situation?). Most at-home practice over-indexes on computation. MAP weights these roughly
          equally — a child who can execute procedures fast but can&apos;t reason through an
          unfamiliar problem will plateau regardless of practice volume.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The RIT Ladder: What Holds Students Back at Each Level
        </h2>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          Below RIT 185: Number sense and fact fluency
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Students at this level are building foundational arithmetic. The barrier is usually one of
          two things: weak place value understanding or fact fluency gaps (addition and subtraction
          not automatic). <strong>Intervention:</strong> number line work, base-10 blocks for place
          value, and timed-but-low-stress fact practice (3–5 minutes per day, not marathon
          sessions). Reflex Math and similar apps provide adaptive fact practice calibrated to
          automaticity, not just accuracy.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          RIT 185–205: The multiplication and fraction transition
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Students here have basic arithmetic but are hitting two barriers simultaneously:
          multiplication fluency and the introduction of fractions. Multi-digit multiplication errors
          compound into fraction errors, which compound into ratio errors. Fixing multiplication
          automaticity first — so cognitive load frees up for fractions — is the right sequence.
          Fraction introduction should use visual models (fraction bars, area models) before any
          procedural algorithm.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          RIT 205–220: The fraction barrier
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is where the majority of students stall. NWEA learning progression data shows that
          fraction operations, equivalency, and ratio/proportion questions cluster precisely in this
          range. A student who understands fractions procedurally (can execute &ldquo;flip and
          multiply&rdquo;) but not conceptually (cannot explain why dividing by ½ gives a larger
          number) will consistently struggle with MAP questions in this band.
        </p>
        <Callout>
          <strong className="text-indigo-900">
            The single best intervention for students stuck at RIT 205–215:
          </strong>{' '}
          two to three weeks of conceptual fraction work — visual fraction models, number lines, and
          real-world ratio problems — before reintroducing any procedure. Khan Academy&apos;s 5th
          and 6th Grade fraction units are the most efficient free resource for this.
        </Callout>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          RIT 215–225: Proportional reasoning
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The conceptual transition here is from additive thinking (&ldquo;how much more?&rdquo;)
          to multiplicative thinking (&ldquo;how many times as much?&rdquo;). Students who cannot
          fluently work with ratios, unit rates, and percent change will hit a ceiling at RIT
          218–222. Algebra readiness also becomes the growth lever: students need to represent
          mathematical relationships with variables, not just compute with numbers.
        </p>

        <h3 className="text-lg font-bold text-gray-900 mb-3">
          RIT 225+: Algebraic reasoning and functions
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At this level, procedural fluency is no longer the constraint — students need to reason
          about abstract relationships. Linear equations, slope, systems of equations, and function
          notation dominate. Students who have memorised procedures without building algebraic
          reasoning will score inconsistently here. The fix is problem-solving practice that requires
          setting up equations from real-world contexts, not executing procedures from a given
          equation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Word Problems: The Most Undervalued Practice Type
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Math questions are almost always presented in word problem or contextual format —
          rarely as naked computation. A child who practises only computation exercises will score
          significantly lower than their procedural ability justifies, because they struggle to
          extract the mathematical structure from a real-world context.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most effective word problem practice involves <strong>problem setup</strong> as a
          separate skill: identifying what operation is needed, what information is given, and what
          is being asked — before calculating anything. A useful habit is requiring your child to
          write the equation before computing, and checking that the equation matches the problem
          rather than just that the calculation is correct. This develops the reasoning MAP tests.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources by RIT Band</h2>
        <div className="space-y-3 mb-6">
          {[
            ['Below RIT 185', 'Reflex Math (fact fluency), Khan Academy Grade 2–3, base-10 block manipulatives'],
            ['RIT 185–205', 'Khan Academy Grades 4–5, Zearn (fraction visual models), multiplication fluency apps'],
            ['RIT 205–220', 'Khan Academy Grades 5–7 (fractions/ratios), NWEA Learning Continuum + Khan crosswalk, IXL Grade 6–7'],
            ['RIT 220–230', 'Khan Academy Grades 7–8, Art of Problem Solving Introduction series, DeltaMath'],
            ['RIT 230+', 'Art of Problem Solving, AMC 8/10 past papers (problem-solving reasoning), Khan Grade 8–9'],
          ].map(([band, resources]) => (
            <div key={band} className="flex gap-4 p-4 border border-gray-100 rounded-xl">
              <span className="font-mono font-semibold text-indigo-700 text-xs w-28 shrink-0 pt-0.5">
                {band}
              </span>
              <span className="text-sm text-gray-600 leading-relaxed">{resources}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Khan Academy alignment note:</strong> Khan Academy grade levels correspond to MAP
          grade equivalents, not RIT scores. A student at RIT 218 in Grade 5 should use Khan
          Academy Grade 7–8 content — not Grade 5 — to target growth. Cross-reference with the
          NWEA Learning Continuum for the most precise alignment.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Building a 12-Week Improvement Plan</h2>
        <div className="space-y-3 mb-4">
          {[
            ['Weeks 1–2', 'Diagnose: Look up your child\'s MAP subtest scores by strand. Identify the weakest area. Find their RIT band in the NWEA Learning Continuum.'],
            ['Weeks 3–6', 'Barrier work: Address the key skill gap identified (fractions, proportional reasoning, algebraic setup) — 20–30 min per day. Use visual models first, then procedures.'],
            ['Weeks 7–10', 'Word problem practice: Apply the same skill area in word problem contexts. Require the child to write the equation before calculating.'],
            ['Weeks 11–12', 'Mixed practice: Pull in skills from adjacent RIT bands. Timed but low-stress mixed review. Review any persistent errors conceptually before moving on.'],
          ].map(([week, detail]) => (
            <div key={week} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
              <div className="text-indigo-600 font-bold text-sm w-28 shrink-0 pt-0.5">{week}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          For Reading improvement strategies, see{' '}
          <Link
            href="/blog/how-to-improve-map-reading-score"
            className="text-indigo-600 hover:underline"
          >
            how to improve your child&apos;s MAP Reading score
          </Link>
          . For the full MAP preparation framework, see our{' '}
          <Link href="/blog/nwea-map-test-prep" className="text-indigo-600 hover:underline">
            NWEA MAP test prep guide
          </Link>
          .
        </p>
      </section>
    </>
  ),

  'child-personality-assessment-guide': (
    <>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Child Personality Assessment?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A child personality assessment measures character traits — the values, motivations, and behavioural tendencies that shape how a child engages with the world. It is not an IQ test, a clinical diagnosis, or a Myers-Briggs personality type. The most widely validated framework for children is the <strong>VIA (Values in Action) Character Strengths</strong> model, developed by positive psychologists Dr. Martin Seligman and Dr. Neal Mayerson.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike academic assessments — which measure what a child <em>can do</em> — a character strengths assessment reveals <em>who they are</em>: which traits they demonstrate most naturally, which deserve more development, and how those traits interact with their academic performance and social life.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry&apos;s free personality assessment is parent-rated: you answer on behalf of your child based on observed behaviour. This makes it accessible for children as young as 6 and removes the reading burden from younger children.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The 24 VIA Character Strengths Across 6 Virtues</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The VIA framework organises 24 character strengths into 6 virtue categories. Every child has all 24 to varying degrees — the assessment identifies which are most prominent.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Virtue</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Character Strengths</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Wisdom', 'Creativity, Curiosity, Judgement, Love of Learning, Perspective'],
                ['Courage', 'Bravery, Perseverance, Honesty, Zest'],
                ['Humanity', 'Love, Kindness, Social Intelligence'],
                ['Justice', 'Teamwork, Fairness, Leadership'],
                ['Temperance', 'Forgiveness, Humility, Prudence, Self-Regulation'],
                ['Transcendence', 'Appreciation of Beauty, Gratitude, Hope, Humour, Spirituality'],
              ].map(([virtue, strengths]) => (
                <tr key={virtue} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">{virtue}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{strengths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Research consistently links five of these strengths to academic outcomes: <strong>Curiosity</strong> and <strong>Love of Learning</strong> predict depth of engagement; <strong>Perseverance</strong> predicts performance under difficulty; <strong>Self-Regulation</strong> predicts study habits; and <strong>Zest</strong> predicts motivation and attendance. But all 24 matter — social intelligence drives peer collaboration, fairness shapes classroom behaviour, and hope predicts resilience after failure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Character Strengths Matter for Children</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A 2019 meta-analysis of 38 studies found that character strengths interventions in school settings produced significant improvements in academic performance, wellbeing, and engagement — independent of cognitive ability. A child with average cognitive scores but high perseverance and self-regulation consistently outperforms a child with higher cognitive scores but low self-regulation.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The practical implication: identifying and developing character strengths is not a soft alternative to academic work. It is a direct lever on academic outcomes, particularly as curriculum demands increase through secondary school and beyond.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Eduentry Personality Assessment Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The assessment is divided into four age-calibrated tiers, each with a different question set and question count:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Age Range</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Traits Measured</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Questions</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Approx. Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['6–9', '12 core traits', '24 questions', '~5 min'],
                ['10–13', '15 traits', '30 questions', '~7 min'],
                ['14–17', '20 traits', '40 questions', '~9 min'],
                ['18–20', 'All 24 traits', '48 questions', '~11 min'],
              ].map(([age, traits, qs, time]) => (
                <tr key={age} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">{age}</td>
                  <td className="border border-gray-200 px-4 py-2">{traits}</td>
                  <td className="border border-gray-200 px-4 py-2">{qs}</td>
                  <td className="border border-gray-200 px-4 py-2">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Each question uses a 1–5 star rating scale. You rate how strongly the statement applies to your child&apos;s everyday behaviour — for example: <em>&quot;My child sticks with difficult tasks until they are finished.&quot;</em> The parent-rating format is intentional: it captures observed behaviour rather than self-reported intentions, which produces more stable and actionable results for younger children.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What You Get: Signature Strengths vs Growth Areas</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The report organises results into three layers:
        </p>
        <ul className="list-none space-y-3 mb-6">
          <li className="flex gap-3">
            <span className="text-amber-500 font-bold mt-0.5">★</span>
            <div><strong>Signature Strengths (top 5):</strong> The traits your child demonstrates most naturally and consistently. VIA research shows that building on Signature Strengths produces faster development than targeting weaknesses directly.</div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-500 font-bold mt-0.5">↑</span>
            <div><strong>Growth Areas (bottom 3):</strong> The traits with the most development potential. These are not deficits — every child has all 24 strengths to some degree. One focused Growth Area at a time, with a concrete activity, is the most effective approach.</div>
          </li>
          <li className="flex gap-3">
            <span className="text-gray-500 font-bold mt-0.5">≡</span>
            <div><strong>Full 24-trait profile (account required, free):</strong> Shows scores for all 24 character strengths, peer benchmarking against your child&apos;s age group, and AI-generated development activities for each Signature Strength and Growth Area.</div>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The AI-generated activities are age-specific and strength-specific. For a 10-year-old whose top strength is Curiosity, a typical activity might be: <em>&quot;After reading or watching something together, ask one open-ended question and leave a deliberate pause — let your child fill the silence with their own questions.&quot;</em>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Personality Assessment vs Academic Assessment: What&apos;s the Difference?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These two assessments are complementary, not competing:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold"></th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Personality Assessment</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Academic Assessment</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['What it measures', 'Character traits and values', 'Cognitive ability and reasoning skills'],
                ['Who answers', 'Parent (observed behaviour)', 'Child (interactive questions)'],
                ['Output', 'Signature Strengths + Growth Areas', 'Standardised score + percentile by subject'],
                ['Best for', 'Motivation, resilience, social skills', 'Subject readiness, 11+ prep, gifted screening'],
                ['Ages', '6–20', '6–17'],
              ].map(([row, a, b]) => (
                <tr key={row} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium text-gray-700">{row}</td>
                  <td className="border border-gray-200 px-4 py-2">{a}</td>
                  <td className="border border-gray-200 px-4 py-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many parents run both: the academic assessment identifies <em>where</em> a child stands cognitively; the personality assessment identifies <em>how</em> they engage — their natural drive, their social approach, their resilience under pressure. Together, the two profiles give a more complete picture than either alone.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once you have the report, read our guide on{' '}
          <Link href="/blog/how-to-use-child-character-strengths-report" className="text-indigo-600 hover:underline">
            how to read your child&apos;s character strengths report
          </Link>{' '}
          — it covers how to interpret Signature Strengths, act on Growth Areas, and use the peer benchmarking data effectively. You can also explore{' '}
          <Link href="/blog/via-character-strengths-children" className="text-indigo-600 hover:underline">
            how VIA character strengths predict academic and life outcomes
          </Link>{' '}
          for the research behind the framework.
        </p>
      </section>
    </>
  ),

  'how-to-use-child-character-strengths-report': (
    <>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">You Have the Report — Now What?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          You&apos;ve completed the VIA character strengths assessment and you&apos;re looking at the results. The most common mistake parents make at this point is to focus immediately on the Growth Areas — the traits at the bottom of the list. This instinct is understandable but counterproductive. VIA research consistently shows that building on Signature Strengths produces faster, more sustained development than targeting weaknesses directly.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start with the top. Understand what each Signature Strength means in practice. Find it in your child&apos;s everyday behaviour. Only then consider which Growth Area to work on — and focus on one at a time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The 6 Virtues: What They Mean in Practice</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The 24 VIA strengths are organised into 6 virtue clusters. Understanding which virtue a strength belongs to tells you <em>how</em> it shows up in your child&apos;s life:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { virtue: 'Wisdom', colour: 'bg-blue-50 border-blue-200', desc: 'Knowledge-based strengths — how your child acquires and uses information. A child dominant in Wisdom strengths is naturally drawn to learning, asks "why?" constantly, and connects ideas across domains. Curiosity and Love of Learning live here.' },
            { virtue: 'Courage', colour: 'bg-orange-50 border-orange-200', desc: 'Emotional strengths that help children persist despite difficulty. Perseverance, Bravery, and Zest belong here. A child strong in Courage engages fully, recovers from setbacks quickly, and often takes on challenges that peers avoid.' },
            { virtue: 'Humanity', colour: 'bg-pink-50 border-pink-200', desc: 'Interpersonal strengths — how your child relates to others one-on-one. Kindness, Love, and Social Intelligence are here. A child dominant in Humanity is deeply empathetic, forms close friendships, and is naturally attuned to others\' emotions.' },
            { virtue: 'Justice', colour: 'bg-green-50 border-green-200', desc: 'Civic strengths — how your child operates in groups. Teamwork, Fairness, and Leadership belong here. Strong Justice strengths appear in children who take group dynamics seriously, advocate for peers, and take on organising roles.' },
            { virtue: 'Temperance', colour: 'bg-purple-50 border-purple-200', desc: 'Protective strengths that regulate excess. Self-Regulation, Prudence, Humility, and Forgiveness live here. These strengths help children manage impulses, think before acting, and recover from interpersonal friction.' },
            { virtue: 'Transcendence', colour: 'bg-yellow-50 border-yellow-200', desc: 'Meaning-making strengths that connect children to something larger than themselves. Gratitude, Hope, Humour, and Appreciation of Beauty are here. Strong Transcendence strengths often appear in children who find deep meaning in small things and maintain optimism through difficulty.' },
          ].map(({ virtue, colour, desc }) => (
            <div key={virtue} className={`border rounded-xl p-4 ${colour}`}>
              <h3 className="font-semibold text-gray-900 mb-1">{virtue}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Act on Signature Strengths</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For each of your child&apos;s top Signature Strengths, identify one activity or context where they can use it intentionally this week. The goal is not to create extra work — it is to notice existing opportunities and name them.
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-amber-50">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Signature Strength</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">School application</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Home activity</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Curiosity', 'Choose a rabbit-hole topic for a homework project', 'Ask one "why?" follow-up question after every read-aloud'],
                ['Perseverance', 'Set a "hard work" goal for one subject this term', 'Play a board game or puzzle that requires sustained effort'],
                ['Kindness', 'Identify one classmate who seems left out', 'Volunteer together for one hour per month'],
                ['Leadership', 'Nominate for a class role or group task lead', 'Plan and run a family activity from start to finish'],
                ['Creativity', 'Propose an alternative approach to a school project', 'One open-ended project per week — no instructions, no "correct" answer'],
                ['Self-Regulation', 'Set a pre-homework wind-down routine', 'Build a screen-time schedule together — child sets the rules'],
              ].map(([strength, school, home]) => (
                <tr key={strength} className="even:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 font-medium">{strength}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{school}</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">{home}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Work on a Growth Area</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Growth Areas are not character flaws — they are the traits with the most development runway. The most effective approach:
        </p>
        <ol className="list-none space-y-3 mb-6">
          {[
            ['Choose one', 'Pick the Growth Area most relevant to your child\'s current biggest challenge (not the lowest score overall).'],
            ['Find a micro-behaviour', 'Identify the smallest possible action that exercises that trait. For self-regulation: a 2-minute calm routine before a frustrating task. For humility: asking "what could I have done better?" after any competitive activity.'],
            ['Practise daily for 30 days', 'Character strengths develop through repeated activation, not occasional big efforts. One small habit practised consistently outperforms an intensive weekend focus.'],
            ['Use Signature Strengths as scaffolding', 'If your child\'s top strength is Creativity but their Growth Area is Prudence, introduce prudence through creative planning — designing a project timeline as a creative exercise rather than a chore.'],
          ].map(([title, desc], i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
              <div><strong>{title}:</strong> {desc}</div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Peer Benchmarking</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The peer percentile in your report shows how your child&apos;s score for each trait compares to other children the same age who have taken the assessment. A few principles for interpreting it:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
          <li><strong>50th percentile is average</strong> — not a problem. Half of all children score below this, half above.</li>
          <li><strong>Below 30th percentile</strong> in a Growth Area is worth a targeted activity, not concern.</li>
          <li><strong>Above 80th percentile</strong> in a Signature Strength confirms a genuinely prominent trait — lean into it.</li>
          <li><strong>Avoid comparing siblings</strong> using percentiles — different children, different profiles, different development paths.</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Peer benchmarking is most useful for calibrating parental expectations. A child at the 35th percentile for self-regulation is not abnormal — it&apos;s a development target with a realistic improvement path.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes When Reading the Report</h2>
        <ul className="list-none space-y-3 mb-4">
          {[
            ['Focusing only on Growth Areas', 'Strengths-first development consistently outperforms deficit-focused approaches in VIA research. Lead with what your child does well.'],
            ['Treating the results as fixed', 'Character strengths are not personality types. They respond to environment and deliberate practice. A low score today is a development opportunity, not a permanent label.'],
            ['Trying to fix everything at once', 'One Growth Area, one habit, 30 days. Scattered effort across multiple traits produces no measurable change.'],
            ['Not involving the child (for ages 10+)', 'Children who understand their own Signature Strengths are significantly more likely to use them intentionally. Frame the conversation around what they\'re already good at.'],
            ['Not retaking after 6–12 months', 'Without a follow-up assessment, you have no way to measure whether development activities are producing results. The comparison between two reports is the most motivating data point in the process.'],
          ].map(([mistake, fix]) => (
            <li key={mistake} className="flex gap-3">
              <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✗</span>
              <div><strong>{mistake}:</strong> {fix}</div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Haven&apos;t Taken the Assessment Yet?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The free VIA-backed personality assessment takes under 5 minutes, covers ages 6–20, and requires no account. You can also read our{' '}
          <Link href="/blog/child-personality-assessment-guide" className="text-indigo-600 hover:underline">
            complete guide to child personality assessments
          </Link>{' '}
          for an overview of the 24 VIA character strengths, the 6 virtues, and how the assessment is structured by age tier.
        </p>
      </section>
    </>
  ),

  'wisc-v-scores-explained': (
    <>
      <Callout>
        According to Eduentry, WISC-V uses a mean of 100 and SD of 15 for the Full Scale IQ (FSIQ) and all five index scores (VCI, VSI, FRI, WMI, PSI). The gifted threshold is FSIQ ≥ 130 for most district GT programmes and ≥ 132–135 for the most selective gifted magnet schools. A discrepancy of 23+ points between any two index scores is considered clinically significant and should prompt further evaluation — the most common pattern is high VCI with low PSI, typical in twice-exceptional (gifted + dyslexia or ADHD-PI) profiles.
      </Callout>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the WISC-V?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Wechsler Intelligence Scale for Children, Fifth Edition (WISC-V) is the most widely used individually administered IQ test for children ages 6 through 16 years 11 months. It is administered one-on-one by a licensed psychologist or school psychologist and produces a Full Scale IQ (FSIQ) plus five index scores covering different cognitive domains.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike group-administered tests such as the CogAT or NWEA MAP, the WISC-V is a clinical instrument. Its scores are used for gifted programme identification, learning disability diagnosis, educational planning, and special education eligibility decisions. A WISC-V report carries significant legal and diagnostic weight in US school systems.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The test was last updated in 2014 (WISC-V replaced WISC-IV), with a standardisation sample of over 2,200 children stratified to match US Census demographics. Scores are norm-referenced against children of the same age, reported on a scale with a mean of 100 and standard deviation of 15.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Scale IQ (FSIQ): What the Score Ranges Mean</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The FSIQ is derived from 7 of the 10 primary subtests and represents the best single-score summary of a child&apos;s overall cognitive ability. It uses the standard score scale: mean 100, standard deviation 15. Every 15 points up or down corresponds to one standard deviation — roughly the difference between the average and the 84th percentile.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">FSIQ Range</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Classification</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Percentile Range</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Gifted Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['145–160', 'Extremely High', '99.9th', 'Profoundly gifted — highly selective programmes, Davidson Academy'],
                ['135–144', 'Extremely High', '99th–99.8th', 'Highly gifted — most magnet GT programmes; MENSA eligible'],
                ['130–134', 'Very High / Gifted', '98th–99th', 'Standard gifted threshold in most US districts'],
                ['120–129', 'Superior', '91st–97th', 'High Average to Superior — borderline gifted consideration'],
                ['110–119', 'High Average', '75th–90th', 'Above average — enrichment programmes, but below GT threshold'],
                ['90–109', 'Average', '25th–74th', 'Typical range for general population'],
                ['80–89', 'Low Average', '9th–24th', 'Below average'],
                ['Below 80', 'Below Average', 'Below 9th', 'May indicate learning or cognitive differences'],
              ].map(([range, label, pct, note]) => (
                <tr key={range} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-gray-800">{range}</td>
                  <td className="px-4 py-3 text-gray-800">{label}</td>
                  <td className="px-4 py-3 text-gray-600">{pct}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          The 130 threshold for gifted identification is not arbitrary — it represents two standard deviations above the mean, encompassing approximately the top 2.3% of the population. Most US gifted programmes are designed to serve roughly this proportion of students.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Five WISC-V Index Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond the FSIQ, the WISC-V reports five primary index scores, each measuring a distinct aspect of cognitive functioning. Like the FSIQ, each index has a mean of 100 and standard deviation of 15. Understanding these index scores is essential for interpreting a complex profile — a child&apos;s FSIQ may not tell the full story.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Index</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Abbreviation</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">What It Measures</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Subtests</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Verbal Comprehension Index', 'VCI', 'Vocabulary, word knowledge, verbal analogical reasoning, and ability to express ideas in words', 'Similarities, Vocabulary (+ Information, Comprehension)'],
                ['Visual Spatial Index', 'VSI', 'Ability to evaluate visual details, understand spatial relationships, and rotate/manipulate visual patterns', 'Block Design, Visual Puzzles'],
                ['Fluid Reasoning Index', 'FRI', 'Abstract problem-solving, inductive and deductive reasoning, pattern completion without prior knowledge', 'Matrix Reasoning, Figure Weights (+ Picture Concepts, Arithmetic)'],
                ['Working Memory Index', 'WMI', 'Ability to hold, manipulate, and transform information in short-term memory', 'Digit Span, Picture Span (+ Letter-Number Sequencing)'],
                ['Processing Speed Index', 'PSI', 'Speed and accuracy of simple visual scanning and decision-making tasks under time pressure', 'Coding, Symbol Search (+ Cancellation)'],
              ].map(([name, abbr, desc, subtests]) => (
                <tr key={abbr} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-800">{name}</td>
                  <td className="px-4 py-3 font-mono text-indigo-700 font-bold">{abbr}</td>
                  <td className="px-4 py-3 text-gray-700 text-xs">{desc}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{subtests}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Among these, the <strong>Fluid Reasoning Index (FRI)</strong> is considered the strongest single predictor of academic and occupational achievement in the research literature, and the most direct measure of <em>g</em> (general cognitive ability). Many gifted coordinators pay close attention to FRI even when the FSIQ is slightly below the 130 threshold.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WISC-V Gifted Cut-Offs by Programme Type</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted cut-offs vary significantly by programme selectivity. There is no single national standard — each state and district sets its own criteria. The table below reflects the most common patterns across US programmes.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Programme Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Typical FSIQ Requirement</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Approx. Percentile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['District GT pull-out / enrichment', '125–130+', '95th–98th'],
                ['Self-contained GT classroom', '128–132+', '97th–98th'],
                ['Gifted magnet school (public)', '130–135+', '98th–99th'],
                ['Private gifted school admission', '130–140+', '98th–99.6th'],
                ['Talent search programmes (CTY, Duke TIP)', '125+ (plus SAT/ACT above-level)', '95th+'],
                ['Highly gifted / twice-exceptional support', '145+ (or discrepant profile)', '99.9th+'],
              ].map(([prog, fsiq, pct]) => (
                <tr key={prog} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">{prog}</td>
                  <td className="px-4 py-3 font-mono text-gray-800">{fsiq}</td>
                  <td className="px-4 py-3 text-gray-600">{pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          Always verify the specific criteria with your district&apos;s gifted coordinator. Many districts publish their gifted identification policies online. The FSIQ cut-off is often one of several criteria — MAP scores, CogAT scores, teacher ratings, and portfolio evidence may all be required.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">WISC-V vs. CogAT vs. NWEA MAP: What Each Measures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          These three assessments frequently appear together in gifted identification discussions, but they measure fundamentally different things and serve different functions in the identification process.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Assessment</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Administration</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Primary Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['WISC-V', 'IQ / Cognitive ability', 'Individual (psychologist)', 'Formal gifted identification, LD diagnosis, programme eligibility'],
                ['CogAT', 'Cognitive reasoning ability', 'Group (school-administered)', 'Gifted screening, academic programme placement'],
                ['NWEA MAP', 'Academic achievement', 'Group (school-administered)', 'Curriculum benchmarking, growth tracking, gifted referral trigger'],
              ].map(([test, type, admin, use]) => (
                <tr key={test} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-800">{test}</td>
                  <td className="px-4 py-3 text-gray-700">{type}</td>
                  <td className="px-4 py-3 text-gray-700">{admin}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The typical pathway is: high MAP scores trigger a CogAT referral; strong CogAT scores lead to a WISC-V evaluation; the WISC-V FSIQ determines formal gifted eligibility. Each step narrows the population and increases the precision of the assessment. For more on how CogAT and MAP compare in the gifted identification process, see our{' '}
          <Link href="/blog/cogat-vs-nwea-map-gifted" className="text-indigo-600 hover:underline">
            CogAT vs. NWEA MAP comparison guide
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens During a WISC-V Assessment?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A WISC-V evaluation is conducted one-on-one with a licensed psychologist in a quiet room, usually at the school or a private practice. The child works through 10 primary subtests, each targeting one of the five index domains. The session typically takes 65–80 minutes, with breaks as needed.
        </p>
        <ul className="list-none space-y-3 mb-6">
          {[
            ['Block Design', 'Reproducing geometric patterns using red-and-white blocks within a time limit (VSI)'],
            ['Similarities', 'Explaining how two words are alike, e.g., "How are a dog and a cat alike?" (VCI)'],
            ['Matrix Reasoning', 'Identifying the missing piece in a visual pattern matrix (FRI)'],
            ['Digit Span', 'Repeating number sequences forwards, backwards, and in ascending order (WMI)'],
            ['Coding', 'Matching symbols to numbers using a key as quickly as possible (PSI)'],
            ['Vocabulary', 'Defining single words presented orally and visually (VCI)'],
            ['Figure Weights', 'Determining what figure balances a scale using visual reasoning (FRI)'],
            ['Visual Puzzles', 'Identifying three puzzle pieces that combine to make a whole figure (VSI)'],
            ['Picture Span', 'Identifying previously shown pictures in the correct sequence (WMI)'],
            ['Symbol Search', 'Marking whether target symbols appear in a row of symbols (PSI)'],
          ].map(([name, desc]) => (
            <li key={name} className="flex gap-3">
              <span className="text-indigo-500 font-bold mt-0.5 flex-shrink-0">→</span>
              <div><strong>{name}:</strong> {desc}</div>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          After scoring, the psychologist produces a written report (typically 15–30 pages) and schedules a feedback session with parents. The report includes confidence intervals for each score and practical recommendations for school placement and instructional adjustments.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Interpret a Discrepant WISC-V Profile</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A &quot;discrepant profile&quot; means there is a statistically significant gap between two index scores — typically defined as 23 or more points (1.5 standard deviations). The WISC-V technical manual identifies discrepancies of this magnitude as occurring in fewer than 10% of the general population, making them clinically meaningful.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most common clinically significant discrepancy patterns and what they suggest:
        </p>
        <ul className="list-none space-y-3 mb-6">
          {[
            ['High VCI, Low PSI', 'Strong language and reasoning with slow processing speed. Common in gifted children with dyslexia or ADHD-PI (predominantly inattentive). Qualifies for extended time. FSIQ may be artificially suppressed — ask psychologist about GAI (General Ability Index) which excludes WMI and PSI.'],
            ['High FRI, Low WMI', 'Strong fluid reasoning with limited working memory. Characteristic of gifted students with ADHD. Excels at novel problems but struggles with multi-step procedures and rote memorisation.'],
            ['High VCI, Low FRI', 'Strong crystallised verbal knowledge with relatively weaker abstract reasoning. More common in children with rich language environments but less exposure to spatial-visual problem-solving.'],
            ['High FRI/VSI, Low VCI', 'Strong nonverbal reasoning with lower verbal scores. Common in English language learners and students with language processing differences. Often underlies underidentification of gifted ELL students.'],
          ].map(([pattern, meaning]) => (
            <li key={pattern} className="flex gap-3">
              <span className="text-amber-500 font-bold mt-0.5 flex-shrink-0">!</span>
              <div><strong>{pattern}:</strong> {meaning}</div>
            </li>
          ))}
        </ul>
        <Callout>
          When a large discrepancy exists, the FSIQ may not be the most meaningful score. Ask your psychologist about the General Ability Index (GAI), which is calculated from VCI and FRI only and is less affected by working memory or processing speed differences.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do After Getting WISC-V Results</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The WISC-V report is a tool for advocacy, not just a verdict. Here is how to use it effectively:
        </p>
        <ul className="list-none space-y-3 mb-4">
          {[
            ['Submit the full report to the gifted coordinator', 'Include the complete report, not just the summary page. Coordinators reviewing borderline FSIQ scores (e.g., 128–129) often make favourable decisions when the index score pattern shows strong FRI and VCI.'],
            ['Request a school psychologist meeting', 'If the WISC-V reveals a learning difference alongside giftedness (twice-exceptional profile), initiate an IEP or 504 process immediately. Gifted identification and special education services are not mutually exclusive.'],
            ['Use index scores to guide teachers', 'A child with high VCI but low PSI benefits from oral rather than written assessments, and should not be penalised for slow written output. A child with high FRI benefits from open-ended problem sets, not drill practice.'],
            ['Plan for reassessment', 'WISC-V scores are most valid for 3 years. If a child was tested in Grade 2 and scores were borderline, reassessment in Grade 4 or 5 may show higher scores reflecting developmental gains.'],
          ].map(([action, detail]) => (
            <li key={action} className="flex gap-3">
              <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
              <div><strong>{action}:</strong> {detail}</div>
            </li>
          ))}
        </ul>
      </section>
    </>
  ),

  'cogat-vs-nwea-map-gifted': (
    <>
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Each Test Actually Measures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Parents often ask whether their child needs to take both the CogAT and NWEA MAP, or whether a high score on one makes the other unnecessary. The answer starts with understanding that these two tests measure fundamentally different things — and that difference is precisely why many gifted programmes require both.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>NWEA MAP Growth</strong> is an academic achievement test. It measures what your child has learned in reading and mathematics relative to grade-level curriculum. Scores are reported as RIT (Rasch Unit) scores on a continuous scale — the same scale from Kindergarten through Grade 12. A high MAP score tells you that your child has mastered academic content significantly beyond their grade level.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>CogAT (Cognitive Abilities Test)</strong> is a cognitive reasoning test. It measures how your child thinks — specifically, verbal reasoning (analogies, sentence completion), quantitative reasoning (number series, equation building), and nonverbal reasoning (figure classification, paper folding). CogAT does not test curriculum content; it tests the cognitive machinery used to process and learn new information.
        </p>
        <Callout>
          The simplest way to remember the difference: MAP measures what your child knows. CogAT measures how efficiently they can learn new things.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CogAT vs. MAP: Side-by-Side Comparison</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">CogAT</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">NWEA MAP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['Test type', 'Cognitive ability / reasoning', 'Academic achievement'],
                ['What it measures', 'How the child reasons and learns', 'What the child has already learned'],
                ['Score scale', 'Standard Age Score (SAS), mean 100, SD 16', 'RIT score, grade-normed scale'],
                ['Gifted threshold', 'SAS ≥ 125–130 (≈95th–97th percentile)', 'RIT at 90th–95th percentile for grade'],
                ['Content tested', 'Verbal analogies, number series, matrix reasoning', 'Reading, mathematics curriculum (grade-adaptive)'],
                ['Administration', 'Group (40–60 min per battery)', 'Group (45–60 min per subject)'],
                ['Frequency', 'Once every 1–3 years', 'Two to three times per year'],
                ['Coaching effect', 'Minimal — measures reasoning, not content', 'Directly improvable through content study'],
                ['Role in gifted identification', 'Confirm cognitive ability (eligibility gate)', 'Initial screening / referral trigger'],
              ].map(([dim, cogat, map]) => (
                <tr key={dim} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-semibold text-gray-700">{dim}</td>
                  <td className="px-4 py-3 text-gray-700">{cogat}</td>
                  <td className="px-4 py-3 text-gray-700">{map}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Districts Use Both Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Using MAP alone for gifted identification has a known weakness: high MAP scores can result from intensive tutoring, strong prior schooling, or very high effort by an average-ability student. These students would struggle in an accelerated gifted programme designed for children with exceptional cognitive ability.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Using CogAT alone also has a weakness: it does not account for whether the child&apos;s ability is already translating into academic performance. A student with high CogAT but very average MAP may be underachieving — which is clinically meaningful — but placing them in an accelerated programme without addressing the root cause of underachievement often backfires.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The combination is more powerful than either alone: MAP confirms that exceptional cognitive ability is already producing above-grade academic performance; CogAT (or WISC-V) confirms that the performance reflects genuine cognitive capacity rather than drilling. Districts that use both tools are identifying children who are both <em>able</em> and <em>performing</em> — the group most likely to thrive in advanced placement.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When MAP Scores Lead to CogAT Testing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In most US districts that use a two-stage identification model, MAP is the first-stage screener and CogAT (or WISC-V) is the second-stage confirmation. The referral trigger varies by district, but the most common patterns are:
        </p>
        <ul className="list-none space-y-3 mb-6">
          {[
            ['90th percentile threshold', 'A MAP score at or above the 90th percentile for the child\'s grade triggers automatic referral for CogAT testing. This is the most common pattern in large public school districts.'],
            ['Two-subject threshold', 'Some districts require a child to score at the 85th+ percentile in both Reading AND Math MAP before a CogAT referral is triggered.'],
            ['Teacher nomination + MAP', 'A teacher nominates a child, and MAP scores at the 80th+ percentile support the nomination. The CogAT then serves as the objective confirmation step.'],
            ['Parent request + MAP', 'A parent requests evaluation, and MAP scores at or above the 85th percentile are required for the district to proceed with CogAT administration.'],
          ].map(([trigger, desc]) => (
            <li key={trigger} className="flex gap-3">
              <span className="text-indigo-500 font-bold mt-0.5 flex-shrink-0">→</span>
              <div><strong>{trigger}:</strong> {desc}</div>
            </li>
          ))}
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your child scores above the 90th percentile on MAP but has not been referred for CogAT testing, contact the gifted coordinator directly. In most districts, parent referral requests are a legitimate pathway — you do not have to wait for an automatic trigger. For context on what MAP percentile scores look like in RIT terms, see our{' '}
          <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">
            NWEA MAP RIT scores guide
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Score Correspondence: Does a High MAP Score Mean a High CogAT Score?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The correlation between MAP and CogAT scores is positive and moderate — roughly r = 0.55–0.65 in published research — meaning they measure related but distinct constructs. Practically, this means:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">MAP Percentile</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Expected CogAT SAS Range</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['99th', '125–145+', 'Very strong CogAT result likely — gifted confirmation expected'],
                ['95th–98th', '115–135', 'Strong CogAT likely, but not guaranteed — some students at this MAP level have CogAT SAS 110–119'],
                ['90th–94th', '108–128', 'Variable — this range produces the most spread on CogAT; some qualify, many do not'],
                ['80th–89th', '100–118', 'Average to above-average CogAT typical; below the gifted SAS threshold in most programmes'],
                ['Below 80th', '85–110', 'CogAT referral unlikely; average cognitive range expected'],
              ].map(([map, cogat, interp]) => (
                <tr key={map} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-gray-800">{map}</td>
                  <td className="px-4 py-3 text-gray-700">{cogat}</td>
                  <td className="px-4 py-3 text-gray-600 text-xs">{interp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          These are statistical expectations, not guarantees. Individual children regularly outperform or underperform this pattern. The 90th–94th MAP percentile range is the most unpredictable — a child in this zone may have CogAT scores anywhere from average to gifted-range, which is why the CogAT step exists.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When CogAT and MAP Results Conflict</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The two most meaningful conflict patterns have different implications and require different responses.
        </p>
        <ul className="list-none space-y-4 mb-6">
          {[
            {
              label: 'High MAP, average CogAT',
              badge: 'High achiever',
              text: 'MAP at 95th percentile, CogAT SAS 105–115. Interpretation: the child is performing at a high level — strong curriculum mastery, likely engaged and motivated — but the CogAT suggests the performance is not driven by unusual cognitive capacity. Most selective GT programmes will not qualify this child, but enrichment programmes and advanced coursework (above-grade-level classes) are appropriate. This is also the most common profile for students who have received intensive academic tutoring.',
            },
            {
              label: 'High CogAT, average MAP',
              badge: 'Underachieving gifted',
              text: 'CogAT SAS 130+, MAP at 70th–80th percentile. Interpretation: the child has strong cognitive capacity that is not yet translating into academic performance. This is the underachieving gifted pattern. Possible causes include ADHD, anxiety, a learning disability (twice-exceptional), disengagement, or poor study habits. This profile is often missed in pure-achievement-based screening systems. A district psychologist evaluation and gifted-specific intervention are strongly indicated.',
            },
          ].map(({ label, badge, text }) => (
            <li key={label} className="rounded-xl border border-gray-100 p-4">
              <div className="flex items-center gap-3 mb-2">
                <strong className="text-gray-900">{label}</strong>
                <span className="text-xs bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5">{badge}</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Different Gifted Programmes Require</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Programme requirements vary significantly. Before preparing your child, confirm what your specific district uses:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Programme Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Typically Uses MAP?</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Typically Uses CogAT?</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">May Require WISC-V?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ['District GT enrichment', 'Yes (screener)', 'Yes (confirmation)', 'Rare'],
                ['Gifted magnet school', 'Yes', 'Yes or NNAT/OLSAT', 'Sometimes'],
                ['Subject acceleration', 'Yes (primary criterion)', 'Sometimes', 'Rarely'],
                ['Grade skipping', 'Yes', 'Often', 'Often'],
                ['Private school admission (gifted)', 'Rarely', 'Sometimes', 'Often (WISC-V preferred)'],
                ['Talent search (CTY/Duke TIP)', 'Not directly', 'Sometimes (EXPLORE/SAT)', 'Not required'],
              ].map(([prog, map, cogat, wisc]) => (
                <tr key={prog} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">{prog}</td>
                  <td className="px-4 py-3 text-gray-700">{map}</td>
                  <td className="px-4 py-3 text-gray-700">{cogat}</td>
                  <td className="px-4 py-3 text-gray-700">{wisc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          For a detailed breakdown of WISC-V score requirements and index score interpretation, see our{' '}
          <Link href="/blog/wisc-v-scores-explained" className="text-indigo-600 hover:underline">
            WISC-V scores explained guide
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Gifted Evaluation Decision Flow</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Understanding the typical sequence helps parents know where their child is in the process and what the next step should be:
        </p>
        <ol className="list-none space-y-3 mb-4">
          {[
            ['MAP screening (Grades 2–4)', 'Most districts screen all students 2–3 times per year. Track scores after each window. A score at or above the 90th percentile puts the child in the referral pool.'],
            ['Gifted referral', 'Either automatic (score threshold met) or by parent/teacher nomination. The child is scheduled for the next CogAT administration window, usually once per year.'],
            ['CogAT administration', 'The school administers CogAT to all referred students in a group session. Results are typically returned within 4–6 weeks.'],
            ['CogAT interpretation and decision', 'If CogAT SAS meets the district threshold, the child qualifies. If borderline, other evidence (teacher ratings, portfolio, MAP scores) is considered. If the CogAT is below threshold despite high MAP, the district may offer enrichment rather than GT placement.'],
            ['WISC-V referral (selective programmes)', 'For magnet schools, highly selective GT programmes, or twice-exceptional assessments, a WISC-V administered by a licensed psychologist is the next step. Results are used alongside CogAT and MAP for final placement decisions.'],
          ].map(([step, desc], i) => (
            <li key={step} className="flex gap-3">
              <span className="text-indigo-600 font-bold mt-0.5 flex-shrink-0 w-5">{i + 1}.</span>
              <div><strong>{step}:</strong> {desc}</div>
            </li>
          ))}
        </ol>
      </section>
    </>
  ),

  'how-to-find-internship-as-a-student': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Every year, parents of high-achieving students hit the same wall: their child is motivated, capable, and ready — but the internship search goes nowhere. Most programmes say "experience preferred." Cold emails go unanswered. Local options are limited. The good news is that the internship landscape has shifted significantly since 2020. Remote, structured programmes now give students in Singapore, Dubai, Toronto, São Paulo, and London equal access to the same professional opportunities. This guide walks through exactly how to find and land the right placement.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Research from the National Association of Colleges and Employers consistently shows that students with professional experience before university receive job offers at significantly higher rates than peers without it. The advantage compounds: a student who starts building their professional profile at 15 arrives at their university application with evidence, references, and vocabulary that most 17-year-olds simply cannot match.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What a Student Internship Looks Like in 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          "Internship" covers a wider range of arrangements than most parents realise. Understanding the landscape before you search saves weeks of misdirected effort.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-indigo-50">
                <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Type</th>
                <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">What it involves</th>
                <th className="text-left p-3 font-semibold text-gray-900 border border-gray-200">Best for</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Local work shadowing', '1–2 weeks observing a professional in your area', 'Sector exploration, ages 14–15'],
                ['School-arranged placement', 'Coordinated by the school, often compulsory', 'First exposure, lower competition'],
                ['Large-company insight week', 'Structured 1-week programme at a major firm', 'Ages 16+, highly competitive'],
                ['Remote structured programme', 'Project-based work for a real company, fully remote', 'All ages, global access, strongest credentials'],
              ].map(([type, desc, best]) => (
                <tr key={type} className="border-b border-gray-100">
                  <td className="p-3 font-medium text-gray-900 border border-gray-200">{type}</td>
                  <td className="p-3 text-gray-700 border border-gray-200">{desc}</td>
                  <td className="p-3 text-gray-700 border border-gray-200">{best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          For parents outside the UK or US where large-company schemes are concentrated, remote structured programmes are the most accessible and most credential-generating option available.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Most Students Struggle to Find One</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The experience paradox is real: employers want students who have already demonstrated professional behaviour, but students need an opportunity to demonstrate it for the first time. Three structural barriers reinforce it:
        </p>
        <Bullet>
          <strong>Geographic concentration.</strong> The majority of formal student internship programmes are based in a handful of cities — London, New York, Singapore, Dubai. Students outside those hubs have far fewer options unless they pursue remote placements.
        </Bullet>
        <Bullet>
          <strong>Competitive entry.</strong> Structured programmes at reputable organisations — even those designed for school-age students — typically accept fewer than 30% of applicants. Students who apply with a blank CV and a generic covering letter rarely progress past the first filter.
        </Bullet>
        <Bullet>
          <strong>No objective evidence of potential.</strong> Without grades, references, or prior work history, it is genuinely difficult for an employer to differentiate between two equally enthusiastic 15-year-olds. Students who can supply a verified psychometric assessment score immediately separate themselves from the field.
        </Bullet>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Global Approach: Remote Structured Programmes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Remote project-based programmes have changed what is possible for students outside the traditional internship hubs. Instead of needing to be in London or New York, a motivated 16-year-old in Cairo, Kuala Lumpur, or Buenos Aires can now join the same cohort as a student in Singapore and work on the same live business brief.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What distinguishes a strong remote programme from a box-ticking exercise:
        </p>
        <Bullet><strong>Real deliverables.</strong> Students produce work — reports, analyses, strategies — that a real organisation actually uses, rather than completing training modules or reading case studies.</Bullet>
        <Bullet><strong>Senior feedback.</strong> Each deliverable is reviewed by an experienced professional, not an automated marking scheme. The feedback is the learning.</Bullet>
        <Bullet><strong>Verifiable credentials.</strong> The reference letter at the end names the organisation, the director, and the specific project. It can be independently verified. This is what makes it valuable in a university personal statement or a future job application.</Bullet>
        <Bullet><strong>Selective admission.</strong> A programme that accepts everyone is a programme that means nothing to an employer. Selectivity is what gives the credential its signal value.</Bullet>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The MGN Global Career Fellowship</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The MGN Global Career Fellowship — run by Magenta Networks, a Singapore-registered technology and talent group — places high-potential students aged 14–22 as Junior Consultants inside its portfolio companies. It is one of the few programmes of its type that is fully remote, year-round, and explicitly designed for students without prior professional experience.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">What Students Work On</h3>
        <p className="text-gray-700 leading-relaxed mb-4">Fellows are placed in one of four departments based on their aptitude profile and stated interest:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-4">
          {[
            { track: 'Marketing & Growth', examples: 'Competitive analysis, content strategy, SEO audits' },
            { track: 'Data & Research', examples: 'Market analysis, dashboards, survey design' },
            { track: 'Strategy & Operations', examples: 'Business models, process mapping, investor materials' },
            { track: 'Technology', examples: 'Feature specs, technical documentation, QA testing, AI direction' },
          ].map(({ track, examples }) => (
            <div key={track} className="border border-gray-100 rounded-xl p-4 bg-gray-50">
              <div className="font-semibold text-gray-900 text-sm mb-1">{track}</div>
              <div className="text-xs text-gray-600">{examples}</div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Programme Structure</h3>
        <Bullet><strong>Cohort size:</strong> Maximum 5 fellows per cohort — small enough for meaningful mentor contact.</Bullet>
        <Bullet><strong>Time commitment:</strong> 8–10 hours per week, fully asynchronous.</Bullet>
        <Bullet><strong>Cohort start dates:</strong> The 1st of every month, year-round. Students can pause during exam periods.</Bullet>
        <Bullet><strong>Mentor feedback:</strong> Senior review within 48 hours on every deliverable submitted.</Bullet>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">What Fellows Receive</h3>
        <Bullet><strong>International reference letter</strong> from the Managing Director — verifiable on LinkedIn.</Bullet>
        <Bullet><strong>Compiled work portfolio</strong> of completed project deliverables.</Bullet>
        <Bullet><strong>Professional vocabulary and frameworks</strong> transferred through real project cycles.</Bullet>

        <Callout>
          The Fellowship requires completion of an Eduentry psychometric assessment as part of the application process. The assessment (30 minutes) provides the aptitude data used to match each student to the right department track.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare Your Student's Application</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Selective programmes filter applications in three stages: initial screening, aptitude review, and offer. Most unsuccessful applications fail at stage one — not because the student lacks potential, but because the application does not communicate it clearly.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Complete the Eduentry Psychometric Assessment</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before any application, complete the Eduentry academic assessment. It takes 30 minutes and covers verbal reasoning, quantitative reasoning, English, and mathematics — the four domains most predictive of professional performance. The score is a required component of the MGN Fellowship application and provides objective evidence of aptitude that a blank CV cannot supply.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Build a One-Page CV</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          A student CV at this stage should cover: current school and predicted or achieved grades; extracurricular activities with any leadership roles; personal projects (a coding project, a blog, a business idea they have researched); and a two-line skills summary. Keep it to one page. Programmes that accept students aged 14–18 do not expect three pages of work history — they expect clarity and confidence.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 3: Write a Targeted Covering Letter</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Three paragraphs is the right length. Paragraph one: which department track the student is applying for, and one specific reason why. Paragraph two: one concrete example of a skill or project that is relevant to that track. Paragraph three: what the student wants to learn and contribute during the fellowship. Generic letters that could apply to any programme are filtered out in the first pass.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Apply for the Next Cohort</h3>
        <p className="text-gray-700 leading-relaxed">
          Cohorts start on the 1st of each month, with a five-business-day review after submission. Each cohort is capped at five fellows. Apply early — the next available cohort often fills before the month ends.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Your Student Walks Away With</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The tangible outputs of a completed fellowship distinguish it from most student work experience programmes:
        </p>
        <Bullet><strong>A verifiable reference letter.</strong> Signed by the Managing Director, verifiable on LinkedIn by any university admissions tutor or future employer who wants to check it.</Bullet>
        <Bullet><strong>A portfolio of real deliverables.</strong> Not "I observed a team meeting" — actual outputs: a competitive analysis, a market research report, a feature specification. Something a parent can read and a university can evaluate.</Bullet>
        <Bullet><strong>A department track credit.</strong> Students who complete the programme are designated as a Marketing Fellow, Data Fellow, Strategy Fellow, or Technology Fellow — a concrete credential that can be listed on a CV and personal statement.</Bullet>
        <Bullet><strong>Professional confidence.</strong> The single most consistent feedback from fellows and their parents is that the programme changes how a student talks about their interests in interviews and personal statements — because they have now actually done something professional, not just read about it.</Bullet>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {[
            { href: '/blog/early-internship-child-development-career', tag: 'Child Development', title: 'Why Internships at Early Ages Matter' },
            { href: '/blog/high-school-internship-benefits-university', tag: 'University Prep', title: 'Why High School Internships Matter for University Admissions' },
            { href: '/blog/how-to-get-internship-no-experience-high-school', tag: 'Application Guide', title: 'How to Get an Internship with No Experience' },
            { href: '/blog/how-to-get-tech-internship-before-university', tag: 'Tech Career', title: 'Tech Work Experience: How to Get a Placement Before University' },
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

  'what-is-a-good-nwea-map-score': (
    <>
      <Callout>
        &ldquo;Good&rdquo; is always grade-relative on MAP. A Math RIT score of 220 is at the 99th percentile for a Grade 3 student and below average for an 8th grader. Find your child&apos;s grade in the tables below before evaluating the score.
      </Callout>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Four Bands That Matter</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Rather than memorising percentile tables, most parents find it easier to think in four bands: <strong>below average</strong> (below the 25th percentile), <strong>on track</strong> (25th–74th percentile, near the national average), <strong>strong</strong> (75th–89th percentile), and <strong>gifted range</strong> (90th percentile and above). The gifted-range band is the one most parents are asking about — it is the threshold at which most US districts automatically initiate a gifted programme referral.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These bands are based on the NWEA 2020 national norming study — the most recently published norms, which remain the current reference for the 2025–26 school year. All scores are fall administration benchmarks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">MAP Math: Good Scores by Grade (Fall 2025–26)</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Grade</th>
                <th className="text-center p-3 font-semibold text-red-600">Below Average<br/><span className="font-normal text-xs">(&lt;25th %ile)</span></th>
                <th className="text-center p-3 font-semibold text-gray-700">On Track<br/><span className="font-normal text-xs">(50th %ile avg)</span></th>
                <th className="text-center p-3 font-semibold text-indigo-700">Strong<br/><span className="font-normal text-xs">(75th %ile)</span></th>
                <th className="text-center p-3 font-semibold text-purple-700">Gifted Range<br/><span className="font-normal text-xs">(90th %ile)</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kindergarten', '<137', '144', '154', '162+'],
                ['Grade 1', '<155', '163', '173', '181+'],
                ['Grade 2', '<170', '178', '188', '196+'],
                ['Grade 3', '<180', '188', '199', '208+'],
                ['Grade 4', '<190', '197', '208', '217+'],
                ['Grade 5', '<197', '205', '216', '225+'],
                ['Grade 6', '<203', '211', '222', '231+'],
                ['Grade 7', '<207', '215', '226', '235+'],
                ['Grade 8', '<211', '218', '229', '238+'],
                ['Grade 9', '<212', '220', '231', '240+'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-red-500 text-xs">{row[1]}</td>
                  <td className="p-3 text-center text-gray-700 font-medium">{row[2]}</td>
                  <td className="p-3 text-center text-indigo-600 font-medium">{row[3]}</td>
                  <td className="p-3 text-center text-purple-600 font-bold">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">Source: NWEA 2020 MAP Growth Norms for Student and School Achievement Status and Growth.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">MAP Reading: Good Scores by Grade (Fall 2025–26)</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Grade</th>
                <th className="text-center p-3 font-semibold text-red-600">Below Average<br/><span className="font-normal text-xs">(&lt;25th %ile)</span></th>
                <th className="text-center p-3 font-semibold text-gray-700">On Track<br/><span className="font-normal text-xs">(50th %ile avg)</span></th>
                <th className="text-center p-3 font-semibold text-indigo-700">Strong<br/><span className="font-normal text-xs">(75th %ile)</span></th>
                <th className="text-center p-3 font-semibold text-purple-700">Gifted Range<br/><span className="font-normal text-xs">(90th %ile)</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kindergarten', '<145', '155', '164', '172+'],
                ['Grade 1', '<158', '167', '177', '185+'],
                ['Grade 2', '<174', '182', '192', '201+'],
                ['Grade 3', '<182', '191', '202', '211+'],
                ['Grade 4', '<194', '203', '213', '222+'],
                ['Grade 5', '<200', '211', '221', '229+'],
                ['Grade 6', '<205', '214', '224', '231+'],
                ['Grade 7', '<209', '219', '228', '235+'],
                ['Grade 8', '<212', '221', '231', '237+'],
                ['Grade 9', '<213', '222', '232', '238+'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-red-500 text-xs">{row[1]}</td>
                  <td className="p-3 text-center text-gray-700 font-medium">{row[2]}</td>
                  <td className="p-3 text-center text-indigo-600 font-medium">{row[3]}</td>
                  <td className="p-3 text-center text-purple-600 font-bold">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">Source: NWEA 2020 MAP Growth Norms for Student and School Achievement Status and Growth.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do With Each Band</h2>
        <div className="space-y-4 mb-6">
          {[
            {
              band: 'Gifted Range (90th+ percentile)',
              color: 'bg-purple-50 border-purple-100',
              textColor: 'text-purple-700',
              action: 'Ask your school\'s gifted coordinator whether your child is automatically referred for evaluation — many districts require a parent to initiate it. Bring your MAP Family Report to the conversation. If your district uses CogAT alongside MAP, request that testing as well. See our guide to gifted programme testing.',
            },
            {
              band: 'Strong (75th–89th percentile)',
              color: 'bg-indigo-50 border-indigo-100',
              textColor: 'text-indigo-700',
              action: 'No urgent action needed. Consider enrichment in the strong subject — a subject-specific club, competition maths, or accelerated reading — to maintain momentum. Monitor the next test window to see whether the score moves toward gifted range. A student consistently at the 80th+ percentile who is not challenged may disengage.',
            },
            {
              band: 'On Track (25th–74th percentile)',
              color: 'bg-gray-50 border-gray-100',
              textColor: 'text-gray-700',
              action: 'Grade-level performance is appropriate. Focus on growth: is the gain between test windows matching the expected norm for the grade? A student at the 50th percentile showing below-expected growth may need support even though the absolute score looks average.',
            },
            {
              band: 'Below Average (below 25th percentile)',
              color: 'bg-red-50 border-red-100',
              textColor: 'text-red-700',
              action: 'Request a teacher conference and ask which specific skill gaps MAP identified. MAP reports include a Learning Continuum that maps each RIT range to exact skills — this is more useful than the score alone. Subject-specific support (targeted tutoring or online tools at the right Lexile/difficulty) is more effective than general preparation.',
            },
          ].map(({ band, color, textColor, action }) => (
            <div key={band} className={`rounded-xl border p-5 ${color}`}>
              <div className={`font-semibold mb-2 ${textColor}`}>{band}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{action}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why RIT Scores Must Always Be Read by Grade</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The RIT scale is continuous from Kindergarten through Grade 12 — which makes it easy to misread. A parent who sees RIT 220 and looks at an adult benchmark may feel reassured, but without comparing to the grade-level norm, the number is meaningless. The tables above are the correct reference point.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If your child&apos;s score falls exactly at the 50th percentile for their grade, it does not mean they are performing at exactly &ldquo;grade level&rdquo; in the way school grades imply. It means their MAP score matches the national average for students tested in the same grade at the same time of year. That is a different — and in some ways more useful — reference point. For a deeper explanation of how MAP scores work, see the <Link href="/blog/nwea-map-scores-explained" className="text-indigo-600 hover:underline">complete MAP scores guide</Link>.
        </p>
      </section>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 not-prose">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">Convert any RIT score to a percentile instantly</p>
          <p className="text-sm text-gray-600 leading-relaxed">Enter grade, subject, and RIT score into our free calculator — see the exact national percentile and the gifted cut-off for your district.</p>
        </div>
        <Link href="/tools/nwea-rit-calculator" className="shrink-0 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap">
          Open RIT Calculator →
        </Link>
      </div>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related NWEA Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {[
            { href: '/blog/nwea-map-scores-explained', tag: 'Full Guide', title: 'NWEA MAP Scores by Grade Level: RIT Charts, Averages & Gifted Cut-offs' },
            { href: '/blog/nwea-map-growth-norms', tag: 'Growth', title: 'NWEA MAP Growth Norms: How Much Should My Child\'s Score Increase?' },
            { href: '/blog/how-to-improve-map-math-score', tag: 'Math', title: 'How to Improve Your Child\'s MAP Math Score' },
            { href: '/blog/how-to-improve-map-reading-score', tag: 'Reading', title: 'How to Improve Your Child\'s MAP Reading Score' },
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

  'nwea-map-growth-norms': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        When your child&apos;s MAP score comes back, the first question is whether the score is good for their grade. But the second — and often more telling — question is whether their score is growing fast enough. A student who starts Grade 3 at the 60th percentile and ends Grade 4 at the 55th percentile has grown in absolute RIT points but lost ground relative to peers. Understanding growth norms turns a score report from a one-time snapshot into a trajectory.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are MAP Growth Norms?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          MAP Growth norms are published by NWEA and show the expected change in RIT score between two testing windows for students at various starting points. The most recent comprehensive norms are from the 2020 NWEA norming study, which remains the current reference for the 2025–26 school year.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Growth norms are separate from status norms (which show average scores at a point in time). A student who scores at the 70th percentile in fall and stays at the 70th percentile in spring has grown exactly as expected — their RIT score increased, but so did the cohort average. Staying at the same percentile over time means growing at the national average rate.
        </p>
        <Callout>
          <strong className="text-indigo-900">The key question growth norms answer:</strong> Is my child growing faster, at the same rate, or slower than the typical student who started at the same level?
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">MAP Math Growth Norms by Grade (Fall to Spring)</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Math growth is relatively consistent and predictable — each year builds on the previous year&apos;s curriculum, so well-taught students grow steadily. Growth decelerates as students move through middle school, not because learning slows, but because the RIT scale is calibrated to reflect that maths becomes denser and more difficult with each year.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Grade</th>
                <th className="text-center p-3 font-semibold text-gray-600">Fall Average RIT</th>
                <th className="text-center p-3 font-semibold text-gray-600">Spring Average RIT</th>
                <th className="text-center p-3 font-semibold text-indigo-700">Expected Gain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kindergarten', '144', '≈156', '≈11.5'],
                ['Grade 1', '163', '≈173', '≈9.9'],
                ['Grade 2', '178', '≈186', '≈8.2'],
                ['Grade 3', '188', '≈195', '≈7.4'],
                ['Grade 4', '197', '≈204', '≈7.0'],
                ['Grade 5', '205', '≈211', '≈6.4'],
                ['Grade 6', '211', '≈217', '≈5.7'],
                ['Grade 7', '215', '≈220', '≈4.5'],
                ['Grade 8', '218', '≈221', '≈3.4'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-gray-600">{row[1]}</td>
                  <td className="p-3 text-center text-gray-600">{row[2]}</td>
                  <td className="p-3 text-center text-indigo-600 font-bold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">Source: NWEA 2020 MAP Growth Norms. Spring averages and expected gains are approximate national mean projections.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">MAP Reading Growth Norms by Grade (Fall to Spring)</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          Reading growth follows a very different pattern from Math. Growth is rapid in Kindergarten through Grade 2 — the decoding and fluency phase — then decelerates sharply after Grade 3 as comprehension and vocabulary become the limiting factors. By Grade 7–8, a gain of even 2 RIT points over a full year is normal. This is not a sign of poor teaching or low effort; it reflects the nature of how reading comprehension develops.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-3">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-700">Grade</th>
                <th className="text-center p-3 font-semibold text-gray-600">Fall Average RIT</th>
                <th className="text-center p-3 font-semibold text-gray-600">Spring Average RIT</th>
                <th className="text-center p-3 font-semibold text-indigo-700">Expected Gain</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kindergarten', '155', '≈166', '≈11.0'],
                ['Grade 1', '167', '≈177', '≈10.0'],
                ['Grade 2', '182', '≈190', '≈8.4'],
                ['Grade 3', '191', '≈196', '≈5.1'],
                ['Grade 4', '203', '≈207', '≈4.2'],
                ['Grade 5', '211', '≈214', '≈3.0'],
                ['Grade 6', '214', '≈216', '≈2.2'],
                ['Grade 7', '219', '≈221', '≈1.9'],
                ['Grade 8', '221', '≈222', '≈1.3'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-3 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-3 text-center text-gray-600">{row[1]}</td>
                  <td className="p-3 text-center text-gray-600">{row[2]}</td>
                  <td className="p-3 text-center text-indigo-600 font-bold">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mb-6">Source: NWEA 2020 MAP Growth Norms. Spring averages and expected gains are approximate national mean projections.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Interpret Your Child&apos;s Growth</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Compare your child&apos;s fall-to-spring RIT gain to the expected value for their grade in the tables above. A useful rule of thumb:
        </p>
        <div className="space-y-3 mb-6">
          {[
            { label: 'Within 2 points of expected gain', desc: 'Growth is on track. No action needed beyond maintaining current habits.', color: 'bg-green-50 border-green-100', text: 'text-green-700' },
            { label: '3–5 points below expected gain', desc: 'Growth is below average. Worth discussing with the classroom teacher — ask whether MAP data showed specific skill gaps, and which subject area the shortfall was in.', color: 'bg-amber-50 border-amber-100', text: 'text-amber-700' },
            { label: 'More than 5 points below expected', desc: 'Significant growth gap. Request a teacher conference, ask about the MAP Learning Continuum report, and consider whether subject-specific support is appropriate. One slow test window is not a crisis; two consecutive below-expected windows are worth acting on.', color: 'bg-red-50 border-red-100', text: 'text-red-700' },
            { label: '3+ points above expected gain', desc: 'Strong growth. Maintain enrichment; consider whether the current level of challenge is sufficient. A student growing significantly faster than peers may benefit from acceleration or a gifted programme referral.', color: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-700' },
          ].map(({ label, desc, color, text }) => (
            <div key={label} className={`rounded-xl border p-4 ${color}`}>
              <div className={`font-semibold text-sm mb-1 ${text}`}>{label}</div>
              <p className="text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Does Reading Growth Slow After Grade 3?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Reading deceleration after Grade 3 catches many parents off guard. A child who gained 8 RIT points in Grade 2 and gains only 3 in Grade 5 may seem to be regressing — but they are not. The explanation is structural.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In Grades K–2, the primary skill being measured is decoding — turning letters into sounds and sounds into words. This skill develops rapidly with instruction and produces large RIT gains. After Grade 2–3, most students can decode fluently. Reading progress from this point onward depends on vocabulary, background knowledge, and the ability to infer meaning from complex text. These skills grow slowly because they require broad experience rather than focused instruction.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The practical implication: from Grade 4 onward, reading at a level slightly above the child&apos;s current comfort zone — books and articles that require effort but are not frustrating — produces more Reading RIT growth than anything else. For a grade-by-grade intervention plan, see our guide to <Link href="/blog/how-to-improve-map-reading-score" className="text-indigo-600 hover:underline">improving MAP Reading scores</Link>.
        </p>
      </section>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 not-prose">
        <div className="flex-1">
          <p className="font-semibold text-gray-900 mb-1">MAP tells you where your child stands in the US — this shows the world</p>
          <p className="text-sm text-gray-600 leading-relaxed">Eduentry benchmarks the same reasoning skills against an international peer group. Free, under an hour. See where your child stands beyond the US national average.</p>
        </div>
        <Link href="/your-childs-potential" className="shrink-0 bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-colors whitespace-nowrap">
          Get international benchmark →
        </Link>
      </div>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related NWEA Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {[
            { href: '/blog/nwea-map-scores-explained', tag: 'Full Guide', title: 'NWEA MAP Scores by Grade Level: RIT Charts, Averages & Gifted Cut-offs' },
            { href: '/blog/what-is-a-good-nwea-map-score', tag: 'Quick Reference', title: 'What Is a Good NWEA MAP Score? Grade-by-Grade Guide' },
            { href: '/blog/nwea-map-score-dropped', tag: 'Troubleshooting', title: 'Why Did My Child\'s MAP Score Drop?' },
            { href: '/blog/how-to-improve-map-reading-score', tag: 'Reading', title: 'How to Improve Your Child\'s MAP Reading Score' },
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
