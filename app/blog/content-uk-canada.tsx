import Link from 'next/link'
import { Bullet, Callout } from './blog-components'

export const UK_CONTENT_CANADA: Record<string, React.ReactNode> = {

  'canada-gifted-program-identification': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Canada has no single national framework for identifying gifted students. Each province sets its own
        criteria, uses different assessment tools, and offers different programmes — meaning a child identified
        as gifted in Ontario may not automatically qualify in British Columbia, and vice versa. This guide
        walks through how each major province approaches gifted identification, what assessments are used,
        and what the designation actually means in practice.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What &quot;Gifted&quot; Means in Canada</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Across all provinces, &quot;gifted&quot; refers broadly to students whose intellectual abilities
          are significantly above the norm for their age group. Most provinces anchor this to a cognitive
          assessment score, typically at or above the 98th percentile — corresponding to an IQ of
          approximately 130 on tests such as the WISC-V or CAS2. Approximately 2% of Canadian students
          are formally identified as gifted through provincial processes, though the actual prevalence of
          high ability is estimated higher.
        </p>
        <Callout>
          <strong className="text-indigo-900">Key figure:</strong> An IQ score of 130 sits at the 98th
          percentile, meaning the child scored higher than 98 out of every 100 peers. Most provincial
          processes use this threshold as a minimum criterion, though some require scores above 135 for
          access to specialised congregated classes.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Province-by-Province Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The identification process varies substantially depending on where a family lives. The table below
          summarises each major province&apos;s approach, the primary assessment tool used, and the typical
          eligibility threshold.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Province</th>
                <th className="text-left p-4 font-semibold text-gray-700">Process</th>
                <th className="text-left p-4 font-semibold text-gray-700">Primary Tool</th>
                <th className="text-left p-4 font-semibold text-gray-700">Threshold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Ontario', 'IPRC (Identification, Placement and Review Committee)', 'WISC-V or CAS2', 'IQ 130+'],
                ['British Columbia', 'School-based assessment — district varies', 'WISC-V (common)', 'IQ 130+'],
                ['Alberta', 'Multiple criteria — IQ, achievement, teacher input', 'WISC-V or CCAT', 'No single threshold'],
                ['Quebec', 'No provincial standard — school board discretion', 'Varies by board', 'Varies'],
                ['Manitoba', 'School division process, often IQ-anchored', 'WISC-V', 'IQ ~130'],
                ['Nova Scotia / other Atlantic', 'Limited formal programmes; enrichment focus', 'Varies', 'Varies'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                  <td className="p-4 text-gray-600 whitespace-nowrap">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">Ontario</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ontario&apos;s IPRC process is the most formalised in Canada. A school board committee reviews
          cognitive assessment data (typically WISC-V or CAS2 conducted by a psychologist), achievement
          data, and teacher reports. An IQ of 130 or above on the Full Scale IQ composite is the standard
          criterion. Once identified, the student receives an IEP and may be placed in a congregated
          gifted class or an enrichment withdrawal programme, depending on the board. Parents must consent
          to both assessment and placement, and may request a review annually.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">British Columbia</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          BC uses a school-based gifted designation (Special Needs Category Q) that triggers additional
          per-pupil funding. Assessment is typically conducted by a district psychologist using the WISC-V,
          with an IQ of 130+ as the practical threshold. However, districts vary in how readily they
          initiate assessments — some have significant waitlists, and private psychoeducational assessment
          is commonly used by families seeking timely results.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">Alberta and Other Provinces</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Alberta&apos;s approach is explicitly multi-criteria: cognitive scores, academic achievement,
          creativity, and teacher evidence all inform the identification. This means a child with an IQ
          of 125 combined with exceptional achievement and creative output may qualify, whereas a child
          scoring 132 but not showing exceptional classroom performance might receive enrichment rather
          than formal gifted placement. Quebec has no provincial standard at all — access to gifted or
          enrichment programmes depends entirely on the school board and, in many cases, the individual school.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Happens After Identification</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Identification without appropriate programme provision is of limited benefit. The quality and
          type of programme available after a gifted designation varies dramatically even within a single
          province. Common models include:
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Congregated gifted classes</strong> — students spend most or all of their school day
            in a class with other identified gifted students. Most common in Ontario (Toronto DSB, PDSB)
            and parts of BC. Often involves a separate application and sometimes a commute.
          </Bullet>
          <Bullet>
            <strong>Enrichment withdrawal programmes</strong> — students leave their regular class for
            part of the week for enrichment activities. Less intensive than congregated placement; more
            widely available.
          </Bullet>
          <Bullet>
            <strong>In-class differentiation</strong> — the classroom teacher is expected to provide
            differentiated tasks. Quality depends heavily on the individual teacher and school.
          </Bullet>
          <Bullet>
            <strong>Grade acceleration</strong> — permitted in most provinces but rarely proactively
            offered. Research consistently shows whole-grade acceleration has strong positive outcomes
            for intellectually gifted students, yet it remains underused across Canada.
          </Bullet>
        </div>
        <Callout>
          Families should request an IEP review meeting (in Ontario) or a student learning plan meeting
          (BC/Alberta) within the first term after identification to confirm what specific programme
          provision is in place — not just what designation has been assigned.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Initiate an Assessment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In most provinces, parents can request a psychoeducational assessment through the school board,
          or arrange one privately with a registered psychologist. Board assessments are free but may
          involve a wait of 6–18 months. Private assessments typically cost CAD $2,500–$4,500 and can
          be completed within a few weeks. Most boards accept private assessment reports from qualified
          psychologists for the purposes of IPRC or equivalent review.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The WISC-V (Wechsler Intelligence Scale for Children — Fifth Edition) is the most commonly
          used tool in Canada. It takes approximately 90 minutes to administer to children aged 6–16
          and produces a Full Scale IQ (FSIQ) along with five index scores covering verbal comprehension,
          visual spatial ability, fluid reasoning, working memory, and processing speed. The CAS2
          (Cognitive Assessment System, Second Edition) is an alternative used in some Ontario boards,
          particularly valued for identifying twice-exceptional students.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/canada-ontario-gifted-testing-guide', tag: 'Guide', title: 'Ontario Gifted Testing Guide: IPRC, WISC-V and How the Identification Process Works' },
            { href: '/blog/gifted-program-testing-guide', tag: 'Guide', title: 'Gifted Program Testing Guide: What Every Parent Needs to Know' },
            { href: '/blog/what-is-a-standardised-score', tag: 'Explainer', title: 'What Is a Standardised Score? Percentiles, Standard Deviations and What They Mean' },
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

  'canada-ontario-gifted-testing-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Ontario is the only Canadian province with a fully formalised, legislated gifted identification
        process. The IPRC (Identification, Placement and Review Committee) process, governed under
        Regulation 181/98, gives parents rights that do not exist elsewhere in Canada — including the
        right to request an assessment, the right to be present at committee meetings, and the right to
        appeal placements. This guide explains every stage of the process, the tests involved, and what
        families should do to navigate it effectively.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The IPRC Process: Step by Step</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The IPRC is a school board committee that formally identifies whether a student has an
          exceptionality — including Gifted — and determines the most appropriate placement. It is
          the only body in Ontario that can issue a formal Gifted designation.
        </p>
        <Callout>
          <strong className="text-indigo-900">Parent trigger:</strong> Under Ontario Regulation 181/98,
          a parent may formally request an IPRC referral in writing at any time. The principal must
          respond within 15 school days. You do not need to wait for the school to initiate the process.
        </Callout>
        <div className="space-y-3 mt-4 mb-6">
          <Bullet>
            <strong>Step 1 — Referral:</strong> The principal refers the student to the IPRC, either
            on the school&apos;s initiative or following a written parental request.
          </Bullet>
          <Bullet>
            <strong>Step 2 — Assessment:</strong> The board arranges a psychoeducational assessment,
            typically conducted by a board psychologist. This usually includes an individual IQ test
            (WISC-V or CAS2) and an academic achievement measure.
          </Bullet>
          <Bullet>
            <strong>Step 3 — IPRC Meeting:</strong> The committee reviews assessment results, teacher
            reports, and any information provided by parents. Parents are invited to attend and may bring
            an advocate or support person.
          </Bullet>
          <Bullet>
            <strong>Step 4 — Statement of Decision:</strong> The committee issues a written decision
            identifying or not identifying the student as Gifted, and recommending a placement. Parents
            must consent to the placement.
          </Bullet>
          <Bullet>
            <strong>Step 5 — IEP Development:</strong> If identified, the school develops an Individual
            Education Plan within 30 school days, outlining programme modifications and accommodations.
          </Bullet>
          <Bullet>
            <strong>Step 6 — Annual Review:</strong> The IPRC reviews the placement at least annually.
            Parents may request a review at any time.
          </Bullet>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The WISC-V: What It Measures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Wechsler Intelligence Scale for Children — Fifth Edition (WISC-V) is an individually
          administered intelligence test for children aged 6 to 16 years 11 months. It takes
          approximately 65–90 minutes to administer and is the most widely used cognitive assessment
          in Ontario school boards. The WISC-V produces a Full Scale IQ (FSIQ) and five primary
          index scores:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { index: 'Verbal Comprehension Index (VCI)', detail: 'Measures acquired knowledge, verbal reasoning, and comprehension of verbal information. Key subtests: Similarities, Vocabulary.' },
            { index: 'Visual Spatial Index (VSI)', detail: 'Measures ability to evaluate visual details and understand spatial relationships. Key subtests: Block Design, Visual Puzzles.' },
            { index: 'Fluid Reasoning Index (FRI)', detail: 'Measures ability to detect underlying conceptual relationships among visual objects and use reasoning. Key subtests: Matrix Reasoning, Figure Weights.' },
            { index: 'Working Memory Index (WMI)', detail: 'Measures ability to register, maintain, and manipulate visual and auditory information in active memory. Key subtests: Digit Span, Picture Span.' },
            { index: 'Processing Speed Index (PSI)', detail: 'Measures speed and accuracy of visual scanning and sequencing. Key subtests: Coding, Symbol Search.' },
            { index: 'Full Scale IQ (FSIQ)', detail: 'Composite of all five indexes. This is the single score most commonly cited in IPRC decisions. An FSIQ of 130 or above (98th percentile) is the standard threshold.' },
          ].map(({ index, detail }) => (
            <div key={index} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2 text-sm">{index}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout>
          Some gifted children show significant variation across index scores — for example, an
          exceptionally high VCI (145) alongside a lower PSI (115). In these cases, the FSIQ may
          underestimate true intellectual ability. Request that the psychologist discuss the index
          profile in detail, not just the composite score.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Group Screening: The CCAT</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before arranging an individual WISC-V assessment, many Ontario school boards use the
          Canadian Cognitive Abilities Test (CCAT) as a group screening instrument. Administered
          to an entire class or grade, the CCAT identifies students whose scores suggest further
          individual assessment is warranted. It is not sufficient on its own for a Gifted IPRC
          identification — it is a filter, not a diagnostic instrument.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The CCAT produces three cluster scores — Verbal, Quantitative, and Non-Verbal — and an
          overall Standard Age Score. A score at or above the 95th percentile on the CCAT typically
          triggers a referral for individual assessment. Parents whose children score high on the
          CCAT should be aware that a group test score alone does not determine gifted identification.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If your child has not been screened by the school but you suspect high ability, you can
          request a private psychoeducational assessment directly. Most Ontario boards accept
          private WISC-V reports from registered psychologists (R.Psych. or C.Psych.) for IPRC
          consideration, though the board may conduct its own assessment before convening the committee.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gifted Placements in Ontario</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Once a Gifted identification is made, the IPRC must recommend a placement. Ontario offers
          two primary models:
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Congregated Gifted Class:</strong> Students spend all or most of their day in a
            class composed entirely of identified gifted students. Toronto DSB, Peel DSB, and Ottawa-
            Carleton DSB all operate congregated gifted programmes. These typically require an
            application process and may involve travel to a different school. The curriculum is enriched
            and accelerated — not simply &quot;more of the same.&quot;
          </Bullet>
          <Bullet>
            <strong>Enrichment Withdrawal:</strong> Students remain in their home school and regular
            class, but are withdrawn for part of the week to attend enrichment sessions with a specialist
            teacher. Quality and frequency vary significantly by board and school.
          </Bullet>
          <Bullet>
            <strong>In-School Accommodation:</strong> Where neither of the above is available or
            appropriate, the IEP may specify in-class differentiation, modified learning expectations,
            or independent study arrangements.
          </Bullet>
        </div>
        <Callout>
          Parents have the right to refuse a proposed placement without losing the Gifted identification.
          You can consent to the identification while requesting a different placement — for example,
          accepting the Gifted designation but declining a congregated class in favour of enrichment at
          your home school. This must be negotiated with the board at the IPRC meeting.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/canada-gifted-program-identification', tag: 'Guide', title: 'Gifted Program Identification in Canada: A Province-by-Province Guide' },
            { href: '/blog/canada-private-school-entrance-exams', tag: 'Guide', title: 'Canadian Private School Entrance Exams: ISEE, SSAT and How Top Schools Select Students' },
            { href: '/blog/gifted-program-testing-guide', tag: 'Guide', title: 'Gifted Program Testing Guide: What Every Parent Needs to Know' },
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

  'canada-private-school-entrance-exams': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Canada&apos;s leading independent schools are highly competitive, and most use standardised
        admissions tests to help compare applicants from different school systems, cities, and countries.
        Understanding which tests are used, how they are scored, and what score a competitive applicant
        needs is essential groundwork for any family considering independent school admission in Canada.
        This guide covers the ISEE, the SSAT, and the role school-specific entrance examinations play
        alongside them.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">ISEE vs SSAT: Which Test Is Used Where</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The two principal admissions tests used by Canadian independent schools are the ISEE
          (Independent School Entrance Examination) and the SSAT (Secondary School Admission Test).
          Both are designed by US-based non-profits and are accepted by most North American independent
          schools, though individual schools specify which they prefer or require.
        </p>
        <Callout>
          <strong className="text-indigo-900">Check before you register:</strong> Upper Canada College,
          Bishop Strachan School, and Havergal College all specify their preferred tests on their
          admissions pages. Some schools accept both; others require one specifically. Register for the
          wrong test and you may need to sit a second examination at short notice.
        </Callout>
        <div className="grid sm:grid-cols-2 gap-4 mb-6 mt-4">
          {[
            { test: 'ISEE (Independent School Entrance Examination)', detail: 'Administered by ERB. Scores reported as stanines (1–9) within grade-level norm groups. Competitive applicants to top Canadian schools typically need stanine 7–9 (top 23%). Does not penalise for guessing on most question types. Five levels: Primary, Lower, Middle, Upper, and a separate Level for Grade 8 entry.' },
            { test: 'SSAT (Secondary School Admission Test)', detail: 'Administered by SSATB. Scores reported as percentile ranks within a highly self-selected norm group (students who have taken the SSAT are inherently above average). A 75th percentile SSAT score is equivalent to a very high raw score. There is a guessing penalty (¼ point deducted per wrong answer).' },
          ].map(({ test, detail }) => (
            <div key={test} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{test}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Score Targets at Top Canadian Schools</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Canadian independent schools do not publish official cut-off scores — admissions decisions
          are holistic and consider interview performance, school reports, extracurricular record,
          and in many cases an additional school-specific entrance examination. However, admissions
          consultants and published research point to consistent benchmarks for competitive applicants.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">School</th>
                <th className="text-left p-4 font-semibold text-gray-700">City</th>
                <th className="text-left p-4 font-semibold text-gray-700">Test(s) Accepted</th>
                <th className="text-left p-4 font-semibold text-gray-700">Indicative Score Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Upper Canada College', 'Toronto', 'ISEE / SSAT', 'ISEE stanine 7–9 (85th+ percentile)'],
                ['Bishop Strachan School', 'Toronto', 'ISEE / SSAT', 'ISEE stanine 7–9'],
                ['Havergal College', 'Toronto', 'ISEE / SSAT', 'ISEE stanine 6–9'],
                ['Crescent School', 'Toronto', 'ISEE / School exam', 'ISEE stanine 6+'],
                ['Shawnigan Lake School', 'BC', 'SSAT preferred', 'SSAT 65th+ percentile (self-selected norm)'],
                ['St. George\'s School', 'Vancouver', 'ISEE / SSAT', 'ISEE stanine 6–9'],
                ['Lower Canada College', 'Montreal', 'ISEE / SSAT / School', 'Varies — school exam weighted heavily'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed text-sm italic">
          Score targets are indicative only and based on publicly available admissions guidance.
          Contact schools directly for current requirements.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding ISEE Stanine Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ISEE reports scores as stanines — a nine-point scale derived from the normal distribution.
          Unlike a raw score or percentile, a stanine communicates a band of performance rather than a
          precise rank, which makes it easier for admissions committees to interpret without over-weighting
          small point differences.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Stanine</th>
                <th className="text-left p-4 font-semibold text-gray-700">Percentile Range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['9', '96th–99th', 'Very high — top 4% of applicant norm group'],
                ['8', '89th–95th', 'High'],
                ['7', '77th–88th', 'Above average — competitive for most top schools'],
                ['6', '60th–76th', 'Above average — competitive for many schools'],
                ['5', '40th–59th', 'Average'],
                ['4', '23rd–39th', 'Below average'],
                ['1–3', 'Below 23rd', 'Well below average'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          ISEE norm groups are based on all students who have taken that level of the test in the
          preceding three years — a genuinely representative sample, not a self-selected group of
          high achievers. This makes ISEE stanines directly comparable across years and schools.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">School-Specific Entrance Examinations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many Canadian independent schools administer their own entrance examination in addition to
          or instead of ISEE/SSAT. These are typically conducted on the school&apos;s premises during
          the admissions open day or a dedicated assessment session in January or February.
          School-specific exams generally test English comprehension, writing, and mathematics at a
          level aligned with the entry grade. Some schools also include a cognitive reasoning component.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          At schools that use both a standardised test and a school-specific examination, admissions
          teams typically weight the school exam more heavily — it assesses performance under the
          specific conditions and in the specific format that the school values, and allows direct
          comparison among students who all sat the same paper on the same day.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Preparation for school-specific examinations should focus on the school&apos;s stated curriculum
          level for the entry grade, timed writing practice, and mathematical problem-solving. Unlike
          ISEE preparation, which benefits from specific test-taking strategy training (guessing policy,
          timing, question-type recognition), school exam preparation is more effectively addressed
          through broad curriculum consolidation and writing fluency.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/canada-gifted-program-identification', tag: 'Guide', title: 'Gifted Program Identification in Canada: A Province-by-Province Guide' },
            { href: '/blog/canada-ontario-gifted-testing-guide', tag: 'Guide', title: 'Ontario Gifted Testing Guide: IPRC, WISC-V and How the Identification Process Works' },
            { href: '/blog/isee-ssat-private-school-guide', tag: 'Guide', title: 'ISEE and SSAT Guide: How Private School Admissions Tests Work' },
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

  'canada-french-immersion-selective-programs': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        French Immersion and other selective public programmes offer Canadian families meaningful
        educational alternatives within the public system — without the cost of private schooling.
        But navigating the entry processes requires understanding which programmes are truly selective
        (and which are simply first-come, first-served), what the IB Diploma demands, and how to
        evaluate whether a particular programme is the right fit for your child. This guide covers
        French Immersion at both entry points, IB programmes at public schools, and other selective
        public programme types across the major provinces.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Early vs Late French Immersion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          French Immersion is available in most Canadian provinces and is the single most popular
          alternative programme within the public system. The key distinction families face is between
          Early French Immersion (EFI) — which begins in Kindergarten or Grade 1 — and Late French
          Immersion (LFI) — which typically begins in Grade 6 or 7.
        </p>
        <Callout>
          <strong className="text-indigo-900">Entry process:</strong> EFI is first-come, first-served
          in the vast majority of Canadian school boards. There is no entrance examination and no
          academic selection — demand for spots consistently exceeds supply, and many boards use
          registration lotteries. Register as early as your board allows. LFI varies: some boards
          are open-entry, others use an interview or language aptitude screening.
        </Callout>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6 mt-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Programme</th>
                <th className="text-left p-4 font-semibold text-gray-700">Entry Grade</th>
                <th className="text-left p-4 font-semibold text-gray-700">Selection Process</th>
                <th className="text-left p-4 font-semibold text-gray-700">Language of Instruction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Early French Immersion (EFI)', 'Kindergarten or Grade 1', 'First-come, first-served / lottery', '100% French (K–1), declining to ~50% by Grade 6'],
                ['Late French Immersion (LFI)', 'Grade 6 or 7', 'Open entry or aptitude screening (varies by board)', '~80% French at entry, then ~50%'],
                ['Extended French', 'Grade 4 (some boards)', 'Often first-come, first-served', '~50% French throughout'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600 whitespace-nowrap">{row[1]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[2]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Research consistently shows that early entry to French Immersion leads to higher overall
          French proficiency by secondary school. However, late immersion students — who enter with
          stronger literacy skills in English — often catch up to EFI peers in French oral proficiency
          within two to three years. The choice between EFI and LFI is better made on the basis of
          your child&apos;s learning profile and your family&apos;s priorities than on perceived prestige of entry point.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">IB Programmes at Public Schools in Canada</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The International Baccalaureate (IB) offers four programmes: the Primary Years Programme (PYP,
          ages 3–12), the Middle Years Programme (MYP, ages 11–16), the Diploma Programme (DP, ages 16–19),
          and the Career-related Programme (CP). In Canada, the most commonly offered public IB programmes
          are the Diploma Programme and, increasingly, the MYP as a feeder to the DP.
        </p>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">Entry to IB at Public Schools</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          IB Diploma Programme schools in BC, Ontario, and Quebec that operate within the public system
          are highly competitive. Entry is typically at Grade 11 (Ontario) or Grade 10 (BC) and requires
          a competitive application, including a strong academic transcript (typically 85%+ average),
          teacher references, a personal statement, and sometimes an interview.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>British Columbia:</strong> BC has more IB World Schools per capita than any other
            Canadian province. Many are public and offer the DP competitively. Burnaby, Vancouver, and
            Victoria school districts all have well-regarded IB DP programmes accessible to resident students.
          </Bullet>
          <Bullet>
            <strong>Ontario:</strong> Toronto DSB, YRDSB, and Peel DSB all have IB DP schools. Entry
            is competitive; applicants typically need a Grade 9–10 average above 85% and strong
            recommendations. Some schools operate a connected MYP programme that feeds directly into the DP.
          </Bullet>
          <Bullet>
            <strong>Quebec:</strong> IB programmes in Quebec are offered in English-language public and
            private schools. Given Quebec&apos;s distinct education system, IB operates somewhat differently —
            the DP runs alongside the CEGEP preparation cycle, and students may choose IB as a route to
            anglophone university admission.
          </Bullet>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">IB Diploma Scores and Canadian University Entry</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The IB Diploma is scored out of 45 points (up to 42 from six subject groups plus up to 3
          bonus points from the Extended Essay and Theory of Knowledge matrix). Canadian universities
          have developed IB-specific admission requirements:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">University</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical IB DP Minimum</th>
                <th className="text-left p-4 font-semibold text-gray-700">Competitive Programme Requirement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['University of Toronto (general)', '24 points (diploma required)', '~38–42 for Engineering / Life Sciences'],
                ['UBC Vancouver', '24 points minimum', '~35+ for competitive faculties'],
                ['McGill University', '26 points', '~36–38 for Medicine / Law pathway programmes'],
                ['Queen\'s University', '24 points', '~33–36 competitive'],
                ['University of Waterloo (CS/Engineering)', '30+ typically', '~38+ highly competitive'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout>
          A score of 35+ is broadly considered competitive for entry to any Canadian university programme,
          including competitive faculties. A score of 40+ places a student in the top 5% of all IB
          Diploma candidates globally and is competitive for any programme in Canada.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Other Selective Public Programmes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond French Immersion and IB, Canada&apos;s major urban school boards offer a range of
          other selective public programmes. Awareness of these options is low among families new to
          the Canadian system, and many have application deadlines in December or January of the year
          preceding entry.
        </p>
        <div className="space-y-3 mb-6">
          <Bullet>
            <strong>Arts Focus Programmes</strong> (Toronto DSB Claude Watson, Etobicoke School of the
            Arts): competitive entry through audition and academic review. Strong programmes for musically
            or artistically talented students who do not qualify for or do not want gifted placement.
          </Bullet>
          <Bullet>
            <strong>Science and Technology Focus Programmes</strong> (various Ontario and BC boards):
            enriched STEM curriculum with project-based learning. Entry is competitive, typically requiring
            a strong Grade 8 academic average and sometimes an essay or interview.
          </Bullet>
          <Bullet>
            <strong>Alternative Schools</strong> (Toronto DSB and others): structured around specific
            pedagogical philosophies — democratic education, Montessori, environmental focus. Most are
            open-entry but have long waitlists. Not selective on academic criteria.
          </Bullet>
          <Bullet>
            <strong>Sports Focus Programmes</strong> (Hockey Canada school programmes, various provincial
            boards): combine standard curriculum with intensive athletic training and travel accommodations.
            Entry is via athletic performance, not academic criteria.
          </Bullet>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/canada-gifted-program-identification', tag: 'Guide', title: 'Gifted Program Identification in Canada: A Province-by-Province Guide' },
            { href: '/blog/canada-ontario-gifted-testing-guide', tag: 'Guide', title: 'Ontario Gifted Testing Guide: IPRC, WISC-V and How the Identification Process Works' },
            { href: '/blog/global-academic-benchmarks-report-2026', tag: 'Research', title: 'Global Academic Benchmarks Report 2026' },
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
