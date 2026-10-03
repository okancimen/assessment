import Link from 'next/link'
import { Bullet, Callout } from './blog-components'

export const UK_CONTENT_AUSTRALIA: Record<string, React.ReactNode> = {

  'australia-acer-scholarship-exam': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The ACER Scholarship Exam is the primary selection tool used by most Australian independent
        schools to award merit-based scholarships and assess academic potential. Unlike curriculum
        tests, it is designed to identify students who reason well under pressure — not just those
        who have been well-drilled. Understanding how the exam is structured, what the scores mean,
        and how to prepare effectively can make a significant difference to your child&apos;s
        outcome.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the ACER Scholarship Exam?</h2>
        <Callout>
          The ACER Scholarship Exam is offered at <strong>Year 5 entry</strong> (for students
          entering Year 6), <strong>Year 7 entry</strong> (for students entering Year 7), and{' '}
          <strong>Year 9/10 entry</strong> (for students entering senior school). Each sitting tests
          written expression alongside either mathematical or humanities reasoning skills. There is
          no fixed pass mark — schools rank applicants and award scholarships from the top of the
          field, typically the top 5–10% of sitting students.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          ACER (the Australian Council for Educational Research) designs and administers the exam
          centrally. Individual schools set their own scholarship criteria and award structures, but
          the underlying assessment instrument is standardised, which means a result from one sitting
          can be considered by multiple schools simultaneously.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Written Expression', detail: 'Students write a structured response to a stimulus — usually a prompt requiring a narrative or persuasive piece. It is marked on structure, vocabulary, ideas, and mechanics. Many students underperform here due to lack of planning practice.' },
            { label: 'Skills (Mathematical)', detail: 'Tests mathematical reasoning and problem-solving, not rote computation. Questions require students to apply concepts flexibly in novel contexts. Calculator use is not permitted.' },
            { label: 'Skills (Reading)', detail: 'Tests inference, vocabulary in context, and analysis of complex texts. Literary and non-literary passages are both used. Students are expected to go beyond literal comprehension.' },
            { label: 'Entry Levels', detail: 'Year 5/6 entry, Year 7 entry, and Year 9/10 entry sittings are available. Each tests age-appropriate content but uses the same ranking-based selection model.' },
          ].map(({ label, detail }) => (
            <div key={label} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{label}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Scores and Selection Work</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ACER reports scaled scores and percentile ranks rather than raw marks. Schools receive
          each applicant&apos;s score and rank them internally against the full scholarship applicant
          pool. Because there is no universal cut-off, a &quot;good&quot; score depends entirely on
          who else sat the exam at your target school in the same year.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Full scholarships (100% tuition) are typically awarded to students in the top 5% of
          applicants. Partial scholarships of 25–50% are more commonly available and go to students
          in roughly the top 5–10%. Many schools also award Academic Distinction awards — non-monetary
          recognition — to students in the top 10–15%. Strong performance in the written expression
          component can distinguish candidates with similar skills scores.
        </p>
        <Callout color="amber">
          <strong className="text-amber-900">Important:</strong> Each school has its own scholarship
          budget and award structure. A score that earns a full scholarship at one school may earn
          only a partial scholarship — or none — at a more competitive school. Always check each
          school&apos;s scholarship prospectus directly.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare Effectively</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Because the ACER exam tests reasoning rather than recall, preparation that focuses purely
          on drilling past papers rarely produces the best outcomes. The most effective preparation
          combines genuine skill-building with targeted practice on the specific question types used
          in the exam.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Written expression</strong> — practise planning and drafting under timed
            conditions. Allocate the first 5 minutes to a brief plan before writing. Ask a parent
            or teacher to mark structure and vocabulary separately to identify the weaker strand.
          </Bullet>
          <Bullet>
            <strong>Mathematical reasoning</strong> — work on unfamiliar problem types, not just
            curriculum topics already mastered. The exam rewards flexibility, so vary the problem
            formats regularly.
          </Bullet>
          <Bullet>
            <strong>Reading skills</strong> — read broadly across genres and practise answering
            inference and &quot;what does the author suggest?&quot; style questions. Avoid surface-level
            comprehension only.
          </Bullet>
          <Bullet>
            <strong>Timed conditions</strong> — introduce time pressure 6–8 weeks before the exam.
            Earlier, focus on understanding; later, focus on accuracy and pacing.
          </Bullet>
          <Bullet>
            <strong>Baseline diagnostic first</strong> — before buying preparation books, run a
            diagnostic to find where your child currently sits. This prevents over-preparing strong
            areas and under-preparing weak ones.
          </Bullet>
        </div>
        <Callout color="emerald">
          ACER publishes official practice materials. These are the closest approximation to real
          exam questions available and should form the core of any preparation programme — not
          generic comprehension books or curriculum maths workbooks.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Day and Logistics</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ACER Scholarship Exam is typically held on a single national sitting day in March or
          April each year (dates vary slightly). Students register directly with each school they
          wish to be considered for a scholarship at — not with ACER centrally. Registration
          deadlines are often in January or February, so check each school&apos;s scholarship page
          early.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The exam usually runs for approximately 2.5–3 hours in total across both components. Each
          section is separately timed. Students are expected to bring their own pencils and erasers;
          calculators and dictionaries are not permitted. Results are released to schools within
          a few weeks of the sitting date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/australia-oc-test-guide', tag: 'Guide', title: 'NSW Opportunity Class (OC) Test Guide: How It Works and How to Prepare' },
            { href: '/blog/australia-gate-gifted-program', tag: 'Assessment', title: 'GATE Western Australia: How the Gifted and Talented Programme Works' },
            { href: '/blog/australia-naplan-guide', tag: 'Guide', title: 'NAPLAN Guide for Parents: What It Is, How Scores Work and What to Do With the Results' },
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

  'australia-oc-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        NSW Opportunity Classes (OC) offer academically gifted students a selective learning
        environment within the state public school system, starting from Year 5. Entry is
        determined by a competitive test taken during Year 4. This guide explains how the OC
        test works, what scores are competitive, how placement zones affect offers, and what
        the most effective preparation looks like.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is an Opportunity Class?</h2>
        <Callout>
          Opportunity Classes run from Year 5 in selected NSW public primary schools. They are
          specifically designed for students with high academic potential and provide an enriched
          curriculum delivered at an accelerated pace. Entry is entirely based on the OC placement
          test result. There is no interview, portfolio submission, or school-based assessment —
          the test score and placement zone are the only factors.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          Approximately 4,500 OC places are available across NSW each year. Classes are typically
          capped at 30 students and are located within a regular public primary school — students
          attend the OC class for their core learning but may interact with the broader school
          community for sport, creative arts, and other activities.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          OC placement is one of the most competitive entry processes in Australian primary
          education. In high-demand areas such as Sydney&apos;s inner west, north shore, and
          western suburbs, the number of applicants can exceed available places by a ratio of
          10:1 or higher.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How the OC Test Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The OC placement test is taken in July of Year 4. It covers two main domains: thinking
          skills and reading. The thinking skills section includes verbal reasoning, numerical
          reasoning, and abstract reasoning components. The reading section assesses comprehension,
          inference, and vocabulary. Writing is not separately assessed in the OC test — this
          distinguishes it from the Year 7 selective high school test.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Component</th>
                <th className="text-left p-4 font-semibold text-gray-700">What It Assesses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Verbal Reasoning', 'Word relationships, analogies, classifications, and codes. Tests the ability to think logically with language.'],
                ['Numerical Reasoning', 'Number patterns, sequences, and mathematical problem-solving without a calculator.'],
                ['Abstract Reasoning', 'Pattern recognition using shapes and figures. Tests spatial and logical intelligence.'],
                ['Reading', 'Comprehension of literary and factual texts, inference, and vocabulary in context.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The maximum possible score is 300. Scores are reported on a scale from approximately
          0–300, with a mean set at 100 for the broader Year 4 population. A score of 240 or above
          is generally considered competitive for OC placement. In highly sought-after zones, the
          practical entry threshold for popular schools may be higher — often 250–260+.
        </p>
        <Callout color="amber">
          <strong className="text-amber-900">Note on scoring:</strong> The NSW Department of
          Education uses a combination of test score and distance-zone weighting to allocate places.
          A student&apos;s score is ranked against other applicants within their residential zone
          first, then against a broader pool for remaining places. Choosing which OC schools to
          list — and in what order — is a strategic decision that can affect the likelihood of
          receiving an offer.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Preparation is most effective when it starts 12–18 months before the test — meaning
          Year 3, or at the latest the beginning of Year 4. Beginning too late (less than 6 months
          out) leaves insufficient time to build the reasoning skills the test is specifically
          designed to measure.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Verbal reasoning</strong> — work through the 21 GL-style question types one
            category at a time before mixing them. Extensive reading is the best supporting
            strategy; vocabulary breadth is highly correlated with verbal reasoning performance.
          </Bullet>
          <Bullet>
            <strong>Numerical reasoning</strong> — go beyond school maths. The test assesses
            flexibility with numbers and pattern recognition, not just curriculum computation.
            Number puzzles, logic problems, and non-standard maths activities build this skill.
          </Bullet>
          <Bullet>
            <strong>Abstract reasoning</strong> — practise with matrices, series, and figure
            classification questions. These are the hardest to rapidly improve, so start early
            and use visual workbooks rather than text-heavy practice books.
          </Bullet>
          <Bullet>
            <strong>Reading</strong> — practise on passages slightly above your child&apos;s
            current reading level. Focus on inference questions: &quot;What does this suggest?&quot;
            and &quot;Why does the author use this word?&quot; rather than literal recall only.
          </Bullet>
          <Bullet>
            <strong>Run a diagnostic assessment early</strong> — standardised score reporting
            tells you where your child sits relative to the national Year 4 cohort and identifies
            the specific reasoning strands that need the most attention.
          </Bullet>
        </div>
        <Callout color="emerald">
          Past OC test papers are not publicly released by the NSW Department of Education.
          The best preparation materials are purpose-built OC preparation books and standardised
          practice tests that replicate the reasoning-heavy question style. Generic school
          curriculum workbooks are not sufficient on their own.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Offer Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Offers are made in October, approximately three months after the test sitting. Each
          student can list up to three OC schools in preference order. Placement is determined
          by ranking within residential zones — students living closer to a school are prioritised
          over equally-scored students living further away when places are limited.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If a student does not receive an offer in the main round, they may be placed on a
          waiting list. Waitlist movement does occur before and after the school year starts,
          but it is difficult to predict. Students who miss out on an OC placement remain in
          their local school and are eligible to apply for selective high school entry in Year 6.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/australia-acer-scholarship-exam', tag: 'Guide', title: 'ACER Scholarship Exam Guide: How It Works, Scores and How to Prepare' },
            { href: '/blog/australia-gate-gifted-program', tag: 'Assessment', title: 'GATE Western Australia: How the Gifted and Talented Programme Works' },
            { href: '/blog/nsw-opportunity-class-test-guide', tag: 'Guide', title: 'NSW Opportunity Class Test Guide' },
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

  'australia-gate-gifted-program': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Western Australia&apos;s Gifted and Talented Education (GATE) programme is one of the most
        rigorous selective education pathways in Australia. Entry uses a two-stage process that
        combines school nomination with a standardised cognitive ability test. This guide explains
        how the selection process works, what the test measures, the difference between program
        types, and what preparation is genuinely useful.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How the GATE Selection Process Works</h2>
        <Callout>
          GATE selection in WA uses a <strong>two-stage process</strong>. Stage one is a school
          nomination or self-nomination; stage two is the Selective Placement Test (SPT), a
          standardised cognitive ability assessment administered by the Department of Education.
          Both stages must be completed — students who are not nominated in stage one cannot
          proceed to the test. Approximately <strong>1.6% of WA students</strong> are placed in
          a GATE program, making it one of the most selective gifted education pathways in Australia.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stage one nominations are made by classroom teachers and school principals based on
          observed academic performance, intellectual curiosity, and learning characteristics
          consistent with high ability. Parents can also submit a self-nomination if they believe
          their child meets the criteria, regardless of whether the school has nominated them.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once nominated, students sit the Selective Placement Test — an ability assessment
          designed to measure reasoning potential rather than curriculum knowledge. Results are
          reported as standardised scores and percentile ranks. Placement decisions are made by
          the Department based on these scores and the availability of program places in the
          student&apos;s region.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">GATE Program Types</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are two main types of GATE placement in Western Australia, and they differ
          significantly in structure and intensity.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { label: 'Gifted and Talented (Whole-School)', detail: 'Students are placed in a dedicated GATE school where the entire cohort is selected. The curriculum is differentiated throughout. These schools are the most competitive and selective; places are extremely limited.' },
            { label: 'Subject Acceleration', detail: 'Students remain in their local school but are accelerated in specific subjects (typically mathematics or English) alongside older year groups. Less competitive than whole-school GATE but still requires a strong test result.' },
            { label: 'Primary Extension and Challenge (PEAC)', detail: 'A withdrawal enrichment programme — not a GATE programme per se, but a related pathway for students who score well on the test but are not placed in a full GATE programme. Students attend enrichment sessions one day per week.' },
            { label: 'Selective Academies', detail: 'Selective academic schools (academic extension programmes at secondary level) use a similar test-based selection process but are separate from the primary GATE pathway.' },
          ].map(({ label, detail }) => (
            <div key={label} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{label}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the GATE Test Assesses</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Selective Placement Test assesses three reasoning domains: abstract reasoning,
          verbal reasoning, and quantitative reasoning. It is a cognitive ability test, not a
          curriculum assessment — strong performance on NAPLAN or in the school classroom does
          not automatically translate to a competitive SPT score, and vice versa.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Abstract reasoning</strong> — pattern recognition and logical thinking using
            geometric figures and shapes. This component assesses fluid intelligence and is the
            hardest to improve through preparation alone.
          </Bullet>
          <Bullet>
            <strong>Verbal reasoning</strong> — word relationships, analogies, classifications,
            and inference. Vocabulary breadth supports performance here; wide reading is the
            best long-term preparation strategy.
          </Bullet>
          <Bullet>
            <strong>Quantitative reasoning</strong> — number patterns, mathematical logic, and
            problem-solving. Tests mathematical thinking rather than computation speed or
            curriculum knowledge.
          </Bullet>
        </div>
        <Callout color="amber">
          <strong className="text-amber-900">Important:</strong> Because the GATE test is a
          cognitive ability assessment rather than a curriculum test, &quot;teaching to the test&quot;
          through curriculum drilling is less effective than building genuine reasoning skills
          through varied intellectual activities over an extended period.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Support Your Child&apos;s Preparation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most effective preparation for the GATE test involves building reasoning capacity
          over time rather than intensive short-term drilling. Families who start thinking about
          preparation 12–18 months out have more options and typically see better outcomes than
          those who begin in the final weeks before the test.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            Run a standardised cognitive ability assessment early. This tells you your child&apos;s
            current reasoning profile and identifies which domain (abstract, verbal, or quantitative)
            has the most room for development.
          </Bullet>
          <Bullet>
            Prioritise reading across a broad range of text types — this builds the vocabulary
            and inferential reasoning that directly supports verbal reasoning performance.
          </Bullet>
          <Bullet>
            Use logic puzzles, Sudoku, spatial games, and mathematical investigation activities
            to build abstract and quantitative reasoning. These are more effective than past-paper
            drilling at this stage.
          </Bullet>
          <Bullet>
            In the 8–12 weeks before the test, introduce structured practice with ability-style
            questions in a timed format to build familiarity with the question types and pace.
          </Bullet>
          <Bullet>
            Focus the weeks immediately before the test on review and confidence-building rather
            than introducing new material.
          </Bullet>
        </div>
        <Callout color="emerald">
          Official GATE test preparation materials are not publicly released by the WA Department
          of Education. Purpose-built cognitive ability practice materials — specifically those
          designed for Australian selective school contexts — are the closest available equivalent.
          Avoid generic curriculum revision books, which do not replicate the test style.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/australia-acer-scholarship-exam', tag: 'Guide', title: 'ACER Scholarship Exam Guide: How It Works, Scores and How to Prepare' },
            { href: '/blog/australia-oc-test-guide', tag: 'Guide', title: 'NSW Opportunity Class (OC) Test Guide: How It Works and How to Prepare' },
            { href: '/blog/gifted-program-testing-guide', tag: 'Research', title: 'Gifted Program Testing Guide' },
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

  'australia-naplan-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        NAPLAN — the National Assessment Program: Literacy and Numeracy — is taken by every
        Australian student in Years 3, 5, 7, and 9. Many parents are unsure what NAPLAN results
        actually mean, how the proficiency levels work, and whether scores matter beyond the test
        itself. This guide explains the scoring system in plain terms, what strong results look
        like, and how NAPLAN performance relates to selective school pathways.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What NAPLAN Is — and What It Isn&apos;t</h2>
        <Callout>
          NAPLAN tests all Australian students in Years 3, 5, 7, and 9 in four domains: reading,
          writing, language conventions (spelling, grammar, and punctuation), and numeracy.
          Results are reported on a{' '}
          <strong>4-level proficiency scale</strong> (Needs Additional Support, Developing, Strong,
          Exceeding) and on a continuous national score scale. From 2023 onwards, NAPLAN is
          adaptive — the difficulty of each question adjusts based on preceding responses, allowing
          more precise measurement across the ability range.
        </Callout>
        <p className="text-gray-700 leading-relaxed mb-4">
          NAPLAN is a census — it is taken by virtually all Australian students, not a
          self-selected group sitting for selection. This is important because it means results are
          genuinely nationally normative. A student scored at the &quot;Exceeding&quot; level in
          Year 3 numeracy is performing above the vast majority of Year 3 students across the
          entire country.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          What NAPLAN does not measure: reasoning ability, creativity, non-academic talent, or
          learning potential more broadly. It is a curriculum-referenced assessment, not a
          cognitive ability test. Students can be strong NAPLAN performers but score modestly on
          selective placement tests — and vice versa.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How NAPLAN Scores Work</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          From 2023, NAPLAN proficiency levels replaced the previous 10-band scale. The four
          levels are defined relative to the expectations for each year group:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Proficiency Level</th>
                <th className="text-left p-4 font-semibold text-gray-700">What It Means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Exceeding', 'Performing well above the expectations for the year level. Roughly the top 10–15% of students nationally. In Year 3, this is a meaningful indicator of academic potential.'],
                ['Strong', 'Meeting and exceeding the expected standard for the year level. The majority of students fall here. Indicates solid curriculum attainment.'],
                ['Developing', 'Working towards meeting the expected standard. Does not indicate failure — many students at this level are on-track given their current year of schooling.'],
                ['Needs Additional Support', 'Below the minimum expected standard for the year level. Indicates a need for targeted support. Schools are expected to act on this result.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          In addition to proficiency levels, students receive a national score on a continuous
          scale. This score allows year-on-year comparisons and can be used to track individual
          growth across the four NAPLAN sittings. The score scale is common across year groups,
          so a Year 3 score can be directly compared to the same student&apos;s Year 5 result to
          measure genuine learning gain.
        </p>
        <Callout color="amber">
          <strong className="text-amber-900">Research finding:</strong> Strong NAPLAN performance
          (top 10%) in Year 3, particularly in numeracy and reading, is highly correlated with
          eligibility for selective school entry in Years 5–7. Schools and researchers use Year 3
          NAPLAN as an early indicator of academic potential — making it the earliest meaningful
          data point available for families considering selective school pathways.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">NAPLAN and Selective School Pathways</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NAPLAN scores are not used directly in NSW OC or selective high school selection, nor
          in most scholarship or GATE processes. Selection tests are separately administered and
          specifically designed for that purpose. However, NAPLAN serves several indirect
          roles in the selective school pipeline:
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Early signal</strong> — Year 3 NAPLAN results are the earliest standardised
            snapshot of a child&apos;s academic performance. Top-decile results in Year 3 are a
            meaningful early indicator that selective school entry may be realistic in Year 4/5.
          </Bullet>
          <Bullet>
            <strong>Curriculum gap identification</strong> — a Year 5 NAPLAN numeracy result
            reveals curriculum gaps that need to be addressed before sitting selective tests in
            Year 6. It is a useful diagnostic complement to reasoning-focused test preparation.
          </Bullet>
          <Bullet>
            <strong>Writing NAPLAN</strong> — the writing domain is tested annually and is the
            area of greatest decline nationally. Building writing skills through NAPLAN preparation
            directly supports performance in scholarship exams, which include a written expression
            component.
          </Bullet>
          <Bullet>
            <strong>School accountability data</strong> — families can access school-level NAPLAN
            data via the My School website to compare the academic profile of local schools,
            selective schools, and schools near OC program locations.
          </Bullet>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do With NAPLAN Results</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When your child&apos;s NAPLAN results arrive, avoid focusing solely on the overall
          proficiency level. The most useful information is in the domain-level breakdown and
          the national score. Ask:
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            Is performance consistent across all four domains, or are there specific strengths
            and weaknesses? A child who scores &quot;Exceeding&quot; in numeracy but &quot;Developing&quot;
            in writing needs a very different preparation focus from a child with the reverse profile.
          </Bullet>
          <Bullet>
            How does the national score compare to where your child needs to be for your target
            pathway? For NSW selective high schools, students typically need to be performing in
            the top 5–10% nationally. A Year 5 score well below that range is a signal that early
            and targeted preparation is needed.
          </Bullet>
          <Bullet>
            Has growth been consistent between sittings? A strong Year 3 result followed by a
            weaker Year 5 result may indicate a change in learning environment, engagement, or
            specific skill development that is worth investigating.
          </Bullet>
          <Bullet>
            Use the results to inform a structured preparation plan for the relevant selection
            test — not to make high-stakes decisions about your child&apos;s ability or future.
            NAPLAN is one data point, not a definitive measure.
          </Bullet>
        </div>
        <Callout color="emerald">
          Running a standardised cognitive ability assessment alongside NAPLAN gives families a
          much more complete picture. NAPLAN measures curriculum attainment; cognitive ability
          tests measure reasoning potential. Both together identify the students most likely to
          succeed in selective school entry processes — and those who may need targeted curriculum
          support to close the gap.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/australia-oc-test-guide', tag: 'Guide', title: 'NSW Opportunity Class (OC) Test Guide: How It Works and How to Prepare' },
            { href: '/blog/australia-acer-scholarship-exam', tag: 'Guide', title: 'ACER Scholarship Exam Guide: How It Works, Scores and How to Prepare' },
            { href: '/blog/what-is-a-standardised-score', tag: 'Research', title: 'What Is a Standardised Score?' },
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
