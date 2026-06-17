import Link from 'next/link'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const AU_CONTENT: Record<string, React.ReactNode> = {

  'australia-acer-scholarship-exam': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The ACER Scholarship Examination is Australia&apos;s most widely used independent school
        entrance and scholarship test. Run by the Australian Council for Educational Research,
        it is sat by tens of thousands of students each year in Years 5 through 10 — making it
        the single most important assessment most Australian families pursuing private school
        education will encounter. This guide explains how the exam works, what it measures,
        how scores are reported, and what effective preparation looks like.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the ACER Scholarship Examination?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ACER Scholarship Exam is a standardised test used by over 700 independent and
          Catholic schools across Australia to award scholarships and assess general academic
          aptitude for entry. It is not a curriculum test — it does not test what a child has
          been taught in school. Instead, it measures underlying reasoning ability through two
          core components:
        </p>
        <div className="space-y-3 mb-6">
          <Bullet><strong>Written Expression</strong> — a structured writing task assessing vocabulary, sentence construction, paragraph organisation, and overall communication quality.</Bullet>
          <Bullet><strong>Humanities (Reading and Verbal Reasoning)</strong> — reading comprehension passages, vocabulary in context, and verbal reasoning tasks.</Bullet>
          <Bullet><strong>Mathematics (Numerical Reasoning)</strong> — mathematical problem solving including arithmetic, fractions, percentages, geometry, and applied reasoning.</Bullet>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not all schools use all three components. Many schools combine Humanities and
          Mathematics only; some include all three. Checking with your target school is essential.
        </p>
        <Callout color="indigo">
          <strong>Key fact:</strong> The ACER Scholarship Exam is different from the ACER-designed
          state-based selective school tests (like the NSW Selective High School Placement Test
          and the GATE assessment in WA). It is specifically for independent and Catholic school
          scholarships and general entry assessment.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Year Levels and Test Versions</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ACER Scholarship Exam is offered at four year-level entry points:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Entry Year</th>
                <th className="text-left p-4 font-semibold text-gray-700">Tested in</th>
                <th className="text-left p-4 font-semibold text-gray-700">Student age (approx)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Year 7', 'Year 6 (prior year)', '11–12', 'Secondary school entry — most common entry point'],
                ['Year 8', 'Year 7', '12–13', 'Year 8 entry scholarships at some schools'],
                ['Year 9', 'Year 8', '13–14', 'Less common; some boarding school entry'],
                ['Year 10', 'Year 9', '14–15', 'Least common; senior school scholarships'],
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
        <p className="text-gray-700 leading-relaxed mb-4">
          The Year 7 entry exam (sat in Year 6, typically in June) is by far the most
          common. This is the primary pathway into secondary school at most Australian
          independent schools.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How ACER Scores Are Reported</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          ACER reports scores on a standardised scale from 0 to 100, with the mean
          set at 50 and a standard deviation of approximately 15. This differs from the
          UK Standardised Age Score (SAS) scale — an ACER score of 65 is roughly
          equivalent to a UK SAS of 115 (84th percentile).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Scores are age-standardised so children are compared against others at the same
          age, not just the same school year. Schools receive ranked results from ACER
          and use them alongside other criteria (interview, school report, extracurricular
          involvement) to make scholarship and admissions decisions.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">ACER score</th>
                <th className="text-left p-4 font-semibold text-gray-700">Percentile (approx)</th>
                <th className="text-left p-4 font-semibold text-gray-700">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['75+', '99th', 'Scholarship-competitive at top schools'],
                ['68–74', '95th–98th', 'Strong scholarship candidate at most schools'],
                ['60–67', '84th–95th', 'Competitive for entry; some scholarship consideration'],
                ['50–59', '50th–84th', 'Average range; entry at most independent schools'],
                ['Below 50', 'Below 50th', 'Below average for independent school applicants'],
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
        <Callout color="amber">
          <strong>Important:</strong> The comparison group for ACER scores is other independent
          school applicants — already a self-selecting academic population. An ACER score
          of 50 already implies above-average ability relative to the general student population.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Register</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Registration is through individual schools, not through ACER directly. You apply
          to the school, and the school nominates your child for the ACER exam. Schools set
          their own application deadlines — typically March to May for a June exam date.
          Most schools require a non-refundable application fee at registration.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          One ACER registration covers multiple schools. If you apply to five schools that
          all use the ACER Scholarship Exam, your child sits once and each school receives
          the same result. This makes the ACER system significantly more efficient than
          sitting five separate entrance tests.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Effective Preparation</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ACER Scholarship Exam is preparation-responsive, particularly the Mathematics
          and Humanities components. The Written Expression component benefits from
          structured writing practice rather than content knowledge.
        </p>
        <div className="space-y-4 mb-6">
          {[
            { area: 'Mathematics', advice: 'Focus on problem-solving reasoning, not rote calculation. ACER maths questions require applying concepts in unfamiliar contexts. Work through past ACER practice papers and targeted problem-solving books (AMC past papers at the accessible level are excellent). Ensure fractions, ratios, percentages, and basic geometry are fully solid.' },
            { area: 'Humanities / Reading', advice: 'Build wide vocabulary through varied reading — fiction, non-fiction, newspaper opinion pieces. Practise inference and evaluation questions specifically, as these are harder than recall questions and carry more weight in ACER marking. Timed comprehension practice is essential.' },
            { area: 'Written Expression', advice: 'Practise writing to a prompt under 25–30 minute timed conditions. ACER markers reward: a clear opening that establishes a position, developed paragraphs with specific detail, varied sentence structure, and a strong conclusion. Read model ACER responses in published preparation guides to understand the standard expected.' },
          ].map(({ area, advice }) => (
            <div key={area} className="p-5 rounded-xl border border-gray-100">
              <div className="font-semibold text-gray-900 mb-2">{area}</div>
              <p className="text-gray-600 text-sm leading-relaxed">{advice}</p>
            </div>
          ))}
        </div>
        <Callout color="emerald">
          <strong>Timeline:</strong> Start ACER preparation 12–18 months before the exam for
          meaningful results. Begin with a diagnostic assessment to identify gaps, then
          follow a structured programme covering all three components. The last 8–10 weeks
          before the exam should include full timed practice tests under exam conditions.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ACER vs Other Australian Entry Tests</h2>
        <div className="space-y-3 mb-6">
          <Check>ACER Scholarship Exam — used by independent/Catholic schools for scholarships and general entry assessment</Check>
          <Check>NSW Selective High School Placement Test — state government selective high schools in New South Wales</Check>
          <Check><Link href="/blog/australia-oc-test-guide" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">OC Test</Link> — NSW Opportunity Class placement (Year 5 entry)</Check>
          <Check><Link href="/blog/australia-gate-gifted-program" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">GATE Assessment</Link> — Western Australia&apos;s gifted and talented programme</Check>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          These tests are separate and sit different assessment frameworks. A child preparing
          for the ACER Scholarship Exam should use ACER-specific practice materials rather
          than NSW Selective or OC Test preparation resources, which target different
          content and question formats.
        </p>
      </section>
    </>
  ),

  'australia-oc-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The Opportunity Class (OC) Placement Test is a NSW government assessment that
        determines placement in Opportunity Classes — selective gifted education settings
        within regular government primary schools in New South Wales. Entry is for Year 5,
        meaning children sit the test in Year 4 (typically in July). This guide explains
        how the OC test works, what it measures, how offers are made, and how to prepare.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Opportunity Classes?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Opportunity Classes (OC classes) are selective Year 5–6 classes for high-ability
          students within mainstream NSW government primary schools. They are not separate
          schools — an OC class sits within a regular school and students participate in
          whole-school activities. However, the OC class follows an accelerated and enriched
          curriculum for core subjects, and children travel from across a large catchment
          area to attend.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are approximately 76 OC schools across NSW, concentrated in metropolitan
          Sydney and some regional cities. Each OC class has 30 places. Competition is
          intense — approximately 14,000 students apply each year for around 2,100 places.
        </p>
        <Callout color="indigo">
          OC classes are a two-year programme (Years 5 and 6 only). They are a stepping
          stone, not a permanent selective track. Many OC graduates go on to sit the NSW
          Selective High School test for Year 7 entry — the two preparation programmes
          overlap significantly.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the OC Test Measures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The OC Placement Test has four components, each weighted in the final placement score:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Component</th>
                <th className="text-left p-4 font-semibold text-gray-700">What it assesses</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. weight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Reading', 'Comprehension, vocabulary, inference, text structure', '27.5%'],
                ['Mathematical Reasoning', 'Applied maths, number, measurement, problem solving', '27.5%'],
                ['Thinking Skills', 'Abstract and verbal reasoning — the &quot;IQ-style&quot; component', '45%'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="p-4 text-gray-600" dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Thinking Skills is the largest component — it includes verbal reasoning (word
          analogies, logical sequences, embedded figures) and abstract/mathematical
          reasoning. Children who have never encountered this question type are at a
          significant disadvantage, making specific preparation highly worthwhile.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Placement Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NSW Education calculates a placement score by combining all components
          age-standardised. Students then nominate up to three OC schools in preference
          order. Offers are made in order of placement score, and students are allocated
          to their highest-preference school with an available place.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>Students can list up to 3 OC school preferences.</Bullet>
          <Bullet>Placement score, not school proximity, determines who receives an offer.</Bullet>
          <Bullet>There is no minimum score to apply — but the effective competitive threshold varies by school.</Bullet>
          <Bullet>Popular inner-city OC schools (e.g., Opportunity Class at Chatswood, Epping) are more competitive than regional OC schools.</Bullet>
        </div>
        <Callout color="amber">
          <strong>Key insight:</strong> If you apply to a highly competitive OC school as
          your first preference but your score is borderline, you may receive no offer at
          all rather than being offered your second preference. Research the typical score
          ranges at each school before ranking preferences.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The OC Test Timeline</h2>
        <div className="space-y-4 mb-6">
          {[
            { when: 'Term 1, Year 4 (Feb–Mar)', what: 'Applications open. Register via the NSW Department of Education portal.' },
            { when: 'March, Year 4', what: 'Application deadline (usually mid-March). Late applications are not accepted.' },
            { when: 'July, Year 4', what: 'OC Placement Test is held — students sit the exam at their home school.' },
            { when: 'October, Year 4', what: 'Results and offers released. Families accept or decline offers.' },
            { when: 'February, Year 5', what: 'OC class begins at the allocated school.' },
          ].map(({ when, what }) => (
            <div key={when} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-36 flex-shrink-0 text-sm font-semibold text-indigo-600">{when}</div>
              <p className="text-gray-700 text-sm leading-relaxed">{what}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare for the OC Test</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The OC test is highly preparation-responsive. The Reading and Mathematical
          Reasoning components reward curriculum mastery and practice under timed
          conditions. The Thinking Skills component — which carries the most weight —
          requires specific exposure to abstract reasoning and verbal reasoning formats
          that most Year 4 students have never seen in school.
        </p>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Thinking Skills — start early', detail: 'Introduce abstract reasoning question types (matrices, analogies, sequences) at least 12 months before the exam. Children improve dramatically with exposure — but only if they have enough time for the patterns to become automatic. Cramming Thinking Skills in the final month produces minimal improvement.' },
            { step: '2', title: 'Reading — build vocabulary and inference skills', detail: 'Wide reading is the foundation. Add structured comprehension practice using OC-style reading passages from Term 3 of Year 3 onwards. Inference questions (What does the author imply?) are worth more marks than recall questions and are harder to improve quickly.' },
            { step: '3', title: 'Mathematical Reasoning — go beyond school maths', detail: 'OC maths questions are harder than Year 4 school curriculum. Problem solving, multi-step reasoning, measurement applications, and basic algebra are all tested. Work through NAPLAN Year 5 papers and OC-specific maths practice books.' },
            { step: '4', title: 'Timed practice under exam conditions', detail: 'In the 8 weeks before the exam, do weekly full timed practice tests. Exam technique — pacing, process of elimination, not getting stuck on hard questions — accounts for a meaningful score difference at the margin.' },
          ].map(({ step, title, detail }) => (
            <div key={step} className="flex gap-4 p-5 rounded-xl border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">{step}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1 text-sm">{title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout color="emerald">
          <strong>Recommended preparation start:</strong> Begin in Term 3 of Year 3 (around 12 months
          before the exam). This gives enough time for Thinking Skills patterns to consolidate
          and for Reading vocabulary to develop meaningfully.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">OC vs NSW Selective High School Test</h2>
        <div className="space-y-3 mb-4">
          <Check>OC and Selective preparation overlap strongly — both test Reading, Maths, and Thinking Skills.</Check>
          <Check>Children who do well in OC are typically competitive for Selective High School entry two years later.</Check>
          <Check>The Selective High School test additionally includes a Writing component; the OC test does not.</Check>
          <Cross>Attending an OC class does not guarantee or significantly improve Selective High School placement — scores are independent.</Cross>
        </div>
        <p className="text-gray-700 leading-relaxed">
          See also: <Link href="/blog/australia-acer-scholarship-exam" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">ACER Scholarship Exam guide</Link> if
          you are also considering independent school entry alongside the OC pathway.
        </p>
      </section>
    </>
  ),

  'australia-gate-gifted-program': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        GATE — Gifted and Talented Education — is Western Australia&apos;s state government
        programme for academically gifted students. It provides selective enrichment
        programmes at participating government schools across WA, with entry through a
        formal assessment process. This guide covers how GATE works, the assessment
        process, score thresholds, and how to prepare your child for selection.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the GATE Programme?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Western Australian GATE programme identifies students with high intellectual
          ability and provides them with a differentiated and accelerated curriculum through
          designated GATE schools. Unlike NSW&apos;s OC and Selective system — which uses
          competitive ranked placement — WA GATE identifies a cohort of students who meet
          an ability threshold and then places them at GATE schools based on preference
          and proximity.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          GATE programmes operate at two levels:
        </p>
        <div className="space-y-3 mb-6">
          <Bullet><strong>Year 5 GATE (Primary Extension and Challenge — PEAC):</strong> Pull-out enrichment for students in Years 5 and 6. Students attend a PEAC centre one day per week for academic extension activities outside their regular school programme.</Bullet>
          <Bullet><strong>Year 7 GATE (Secondary Gifted programmes):</strong> Full-time selective classes at designated secondary schools from Year 7. Students travel to their GATE school rather than attending their local high school.</Bullet>
        </div>
        <Callout color="indigo">
          GATE selection is based on reaching an ability threshold — it is not a ranked
          competition for a fixed number of places. All students who meet the threshold
          are eligible for GATE placement. This differs from NSW&apos;s competitive ranked
          Selective and OC systems.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The GATE Assessment Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The GATE assessment is administered by the School Curriculum and Standards
          Authority (SCSA) and comprises two stages:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { stage: 'Stage 1', title: 'Group ability screening', detail: 'All interested students sit an initial group-administered reasoning test at their school. This is a cognitive abilities test measuring verbal, numerical, and abstract reasoning. Results are standardised and compared to WA norms. Students who score above the Stage 1 threshold are invited to Stage 2.' },
            { stage: 'Stage 2', title: 'Individual assessment', detail: 'Students who pass Stage 1 are individually assessed by a trained assessor using a standardised cognitive assessment battery. Stage 2 provides a more accurate and comprehensive measure of intellectual ability. Final GATE eligibility is determined from Stage 2 results.' },
          ].map(({ stage, title, detail }) => (
            <div key={stage} className="flex gap-4 p-5 rounded-xl border border-gray-100">
              <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 font-bold text-sm flex-shrink-0 h-fit">{stage}</div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{title}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ability threshold for GATE eligibility is approximately the 98th percentile
          (IQ equivalent of 130+), though SCSA does not publish exact cut scores. This means
          GATE is a relatively exclusive programme — approximately 2% of WA students qualify.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">GATE Timeline</h2>
        <div className="space-y-4 mb-6">
          {[
            { when: 'Term 3, Year 4', what: 'Applications open for Year 5 PEAC. Register via the SCSA portal.' },
            { when: 'Term 4, Year 4', what: 'Stage 1 group ability screening administered at the child\'s school.' },
            { when: 'Term 1, Year 5', what: 'Stage 2 individual assessment for students who passed Stage 1.' },
            { when: 'Term 1, Year 5', what: 'GATE eligibility letters issued. Families nominate PEAC centre preference.' },
            { when: 'Term 2, Year 5', what: 'PEAC programme begins (one day per week at the PEAC centre).' },
            { when: 'Year 6', what: 'Applications for Year 7 Secondary GATE open (separate process).' },
          ].map(({ when, what }) => (
            <div key={when} className="flex gap-4 p-4 rounded-xl border border-gray-100">
              <div className="w-40 flex-shrink-0 text-sm font-semibold text-indigo-600">{when}</div>
              <p className="text-gray-700 text-sm leading-relaxed">{what}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">GATE Schools in Western Australia</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Secondary GATE programmes are offered at designated government high schools across
          WA. Some of the most sought-after include:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">School</th>
                <th className="text-left p-4 font-semibold text-gray-700">Location</th>
                <th className="text-left p-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Perth Modern School', 'Subiaco, Perth', 'Selective — all students are GATE-identified; highest demand in WA'],
                ['Willetton Senior High School', 'Willetton, Perth', 'GATE stream within a larger school; Southern suburbs'],
                ['Rossmoyne Senior High School', 'Rossmoyne, Perth', 'GATE stream; consistently strong academic results'],
                ['John Curtin College of the Arts', 'Fremantle', 'Academic and arts-based GATE programme'],
                ['Shenton College', 'Shenton Park, Perth', 'GATE programme; Northern inner-city'],
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
        <Callout color="amber">
          <strong>Perth Modern School</strong> is the most selective GATE school in WA — it
          admits only GATE-eligible students and is routinely ranked the highest-performing
          government school in Australia. Demand significantly exceeds places; proximity
          is a tiebreaker.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Prepare for the GATE Assessment?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stage 1 is moderately preparation-responsive. Familiarising a child with abstract
          reasoning, verbal reasoning, and numerical reasoning question formats through
          practice genuinely improves performance — not because it raises IQ, but because
          it removes the disadvantage of unfamiliarity with question types.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Stage 2 is an individually administered cognitive assessment and is substantially
          less preparation-responsive. The best approach for Stage 2 is to ensure the
          child is well-rested, relaxed, and familiar with the idea of answering unusual
          puzzle-style questions — not to attempt intensive drilling.
        </p>
        <div className="space-y-3 mb-6">
          <Check>Practice abstract reasoning (matrices, odd-one-out, figure sequences) for Stage 1 from 6–9 months before.</Check>
          <Check>Build numerical reasoning fluency: number series, ratio, applied problem solving.</Check>
          <Check>Wide reading for vocabulary development — verbal reasoning is part of both stages.</Check>
          <Cross>Don&apos;t attempt to coach Stage 2 responses — it is individually administered and hard to &quot;game.&quot;</Cross>
          <Cross>Don&apos;t start intensive preparation less than 3 months before Stage 1 — insufficient time for reasoning skills to develop.</Cross>
        </div>
        <p className="text-gray-700 leading-relaxed">
          See also: <Link href="/blog/australia-acer-scholarship-exam" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">ACER Scholarship Exam guide</Link> if
          you are considering independent school entry alongside the GATE pathway — preparation
          for the two assessments overlaps significantly in the reasoning components.
        </p>
      </section>
    </>
  ),

  'australia-naplan-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        NAPLAN — the National Assessment Program: Literacy and Numeracy — is the assessment
        every Australian parent encounters, whether they seek it out or not. It is sat by all
        students in Years 3, 5, 7 and 9 at government and most non-government schools across
        Australia. Despite its ubiquity, NAPLAN results are widely misunderstood: what the
        scores actually mean, how to interpret them, and — crucially — what they cannot tell you.
        This guide covers all of it.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What NAPLAN Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NAPLAN assesses four domains across all year levels:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Domain</th>
                <th className="text-left p-4 font-semibold text-gray-700">What it covers</th>
                <th className="text-left p-4 font-semibold text-gray-700">Year levels</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Reading', 'Comprehension of fiction, non-fiction, and informational texts. Inference, interpretation, and vocabulary in context.', 'Years 3, 5, 7, 9'],
                ['Writing', 'One extended writing task — either persuasive or narrative. Marked on ideas, structure, vocabulary, and conventions.', 'Years 3, 5, 7, 9'],
                ['Language Conventions', 'Spelling, grammar, and punctuation. Multiple choice and short answer format.', 'Years 3, 5, 7, 9'],
                ['Numeracy', 'Number and algebra, measurement and geometry, statistics and probability. Non-calculator and calculator sections.', 'Years 3, 5, 7, 9'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="p-4 text-gray-600 text-sm">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout color="indigo">
          NAPLAN is a <strong>curriculum achievement test</strong>, not an ability or IQ test.
          It measures what a child has learned against the Australian Curriculum — not their
          underlying reasoning ability. This distinction matters when interpreting results.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How NAPLAN Scoring Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          From 2023, NAPLAN moved to a new four-level proficiency scale, replacing the
          previous Band 1–10 system. Results are now reported as:
        </p>
        <div className="space-y-3 mb-6">
          {[
            { level: 'Exceeding', color: 'bg-emerald-50 border-emerald-200 text-emerald-800', desc: 'The student is working above the challenging learning standards expected for the year level.' },
            { level: 'Strong', color: 'bg-indigo-50 border-indigo-200 text-indigo-800', desc: 'The student has a thorough understanding of the expected learning standards for the year level. This is where most students sit.' },
            { level: 'Developing', color: 'bg-amber-50 border-amber-200 text-amber-800', desc: 'The student is working towards the challenging learning standards expected for the year level.' },
            { level: 'Needs Additional Support', color: 'bg-rose-50 border-rose-200 text-rose-800', desc: 'The student is not yet demonstrating the literacy and numeracy skills expected for the year level. Schools must contact families to discuss support.' },
          ].map(({ level, color, desc }) => (
            <div key={level} className={`p-4 rounded-xl border ${color}`}>
              <div className="font-semibold mb-1">{level}</div>
              <p className="text-sm leading-relaxed opacity-90">{desc}</p>
            </div>
          ))}
        </div>
        <Callout color="amber">
          <strong>Important context:</strong> The national average sits in the <strong>Strong</strong> band
          for most domains and year levels. A &ldquo;Strong&rdquo; result is not a middling outcome —
          it means your child is meeting the expected standard.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When Is NAPLAN?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NAPLAN is held in March each year across a two-week testing window. Since 2022,
          all year levels sit NAPLAN online (paper-based available for exempted schools).
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>Tests are sat at school during normal hours — no special venue or registration required.</Bullet>
          <Bullet>Writing is usually held first, followed by Reading, Language Conventions, and Numeracy.</Bullet>
          <Bullet>Results are released to schools and families in June–July, approximately 3–4 months later.</Bullet>
          <Bullet>Parents receive an Individual Student Report showing results across all four domains with national comparison data.</Bullet>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What NAPLAN Results Can and Cannot Tell You</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/40">
            <div className="font-semibold text-emerald-800 mb-3">What NAPLAN can tell you</div>
            <div className="space-y-2">
              <Check>Whether your child is meeting curriculum expectations for their year level</Check>
              <Check>How your child compares to students nationally</Check>
              <Check>Which domains are stronger or weaker (Reading vs Numeracy)</Check>
              <Check>Progress over time — comparing Year 3, Year 5, and Year 7 results</Check>
            </div>
          </div>
          <div className="p-5 rounded-xl border border-rose-100 bg-rose-50/40">
            <div className="font-semibold text-rose-800 mb-3">What NAPLAN cannot tell you</div>
            <div className="space-y-2">
              <Cross>How your child will perform on selective entry tests (OC, ACER, GATE)</Cross>
              <Cross>Your child&apos;s underlying reasoning or intellectual ability</Cross>
              <Cross>Whether your child is suited for a gifted programme</Cross>
              <Cross>How your child compares internationally — NAPLAN is Australia-only</Cross>
            </div>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Families preparing for the{' '}
          <Link href="/blog/australia-oc-test-guide" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">NSW OC Test</Link>,{' '}
          <Link href="/blog/australia-acer-scholarship-exam" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">ACER Scholarship Exam</Link>, or{' '}
          <Link href="/blog/australia-gate-gifted-program" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-2">WA GATE assessment</Link>{' '}
          should use purpose-built preparation for those tests rather than NAPLAN practice materials.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Opt Out of NAPLAN?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yes. Parents can withdraw their child by notifying the school in writing before
          the test window. Withdrawal has no academic consequences and schools cannot
          penalise a student for not sitting.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          However, opting out removes a useful longitudinal data point. NAPLAN is most
          valuable when viewed as a series — comparing Year 3, Year 5, and Year 7 results
          shows whether a child is maintaining, improving, or falling relative to peers
          over time. A single result is a snapshot; the trend is the insight.
        </p>
        <Callout color="indigo">
          <strong>On anxiety:</strong> The evidence suggests well-prepared children with
          low-stakes framing (&ldquo;it&apos;s just to see what you know — you can&apos;t fail NAPLAN&rdquo;)
          experience minimal test anxiety. Over-preparation and high parental expectations
          are more consistently associated with anxiety than the test itself.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Schools Use NAPLAN for Selective Entry?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Some independent schools reference NAPLAN results as a supporting data point in
          admissions — not as the primary criterion. The main selective entry tests in
          Australia are entirely separate:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Test</th>
                <th className="text-left p-4 font-semibold text-gray-700">Uses NAPLAN?</th>
                <th className="text-left p-4 font-semibold text-gray-700">Primary selection tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['NSW Selective High School', 'No', 'NSW Selective Placement Test (separate)'],
                ['NSW OC Test', 'No', 'OC Placement Test (separate)'],
                ['WA GATE', 'No', 'Two-stage cognitive assessment (separate)'],
                ['ACER Scholarship', 'No', 'ACER Scholarship Exam (separate)'],
                ['Some independent schools', 'Sometimes', 'School-designed or ACER assessment'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[0]}</td>
                  {row.slice(1).map((cell, i) => (
                    <td key={i} className="p-4 text-gray-600 text-sm">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Support Your Child Around NAPLAN</h2>
        <div className="space-y-3 mb-6">
          <Check>Frame NAPLAN as a snapshot — not a test they can pass or fail.</Check>
          <Check>Ensure good sleep and a normal breakfast on test days.</Check>
          <Check>Read the Individual Student Report carefully — look at domain-level detail, not just the headline level.</Check>
          <Check>Use results to identify whether any area (e.g. numeracy) warrants targeted support before the next year level.</Check>
          <Cross>Don&apos;t buy NAPLAN &ldquo;preparation books&rdquo; for Year 2 students — broad reading and number fluency is more effective than test-specific drilling at this age.</Cross>
          <Cross>Don&apos;t compare NAPLAN results between children publicly — results are private and heavily context-dependent.</Cross>
        </div>
      </section>
    </>
  ),

}
