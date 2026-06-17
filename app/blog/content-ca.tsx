import Link from 'next/link'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const CA_CONTENT: Record<string, React.ReactNode> = {

  'canada-gifted-program-identification': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Canada does not have a uniform national gifted education system. Education is a
        provincial responsibility, and each of the ten provinces and three territories
        runs its own programme — with different definitions of giftedness, different
        identification processes, and very different levels of available provision.
        This guide provides a cross-Canada overview of how gifted identification works,
        what tests are used, and what families can expect when navigating the system.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Giftedness Is Defined in Canada</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most Canadian provinces use a definition of giftedness based on Ontario&apos;s
          influential framework, which defines a gifted student as one who demonstrates
          &quot;an unusually advanced degree of general intellectual ability that requires
          differentiated learning experiences of a depth and breadth beyond those normally
          provided in the regular school programme.&quot;
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In practice, the operational threshold in most provinces is an IQ of 130 or above
          (98th+ percentile on a standardised cognitive assessment), though several provinces
          use a broader definition that includes creativity, task commitment, and specific
          academic talent alongside raw cognitive scores.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Province</th>
                <th className="text-left p-4 font-semibold text-gray-700">Primary identification tool</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical threshold</th>
                <th className="text-left p-4 font-semibold text-gray-700">Programme type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Ontario', 'WISC-V + IPRC', 'IQ 130+ (Exceptionality)', 'Self-contained Gifted class'],
                ['British Columbia', 'WISC-V / Woodcock-Johnson', 'IQ 130+ or 2+ SD', 'In-class support or pullout'],
                ['Alberta', 'Multi-criteria (WISC + teacher + academic)', 'Top 2–3%', 'In-school or alternate programme'],
                ['Quebec', 'Multi-criteria', 'Varies by school board', 'Classes d&apos;excellence (English boards)'],
                ['Manitoba', 'Multi-criteria', 'No single threshold', 'In-school enrichment'],
                ['Saskatchewan', 'Multi-criteria', 'No single threshold', 'In-school differentiation'],
                ['Nova Scotia', 'WISC-V / multi-criteria', 'IQ 130+ preferred', 'Pullout / itinerant GT teacher'],
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
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Typical Identification Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          While processes vary by province and school board, a typical gifted identification
          process in Canada follows these steps:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Teacher or parent referral', detail: 'A classroom teacher or parent initiates the process by submitting a referral to the school principal or a designated resource teacher. Referrals typically include observations about the child\'s academic performance, learning characteristics, and any standardised assessment data already available.' },
            { step: '2', title: 'Screening', detail: 'The school or board may administer a group-administered cognitive screening test (such as the CCAT in Ontario, or a CogAT equivalent) to narrow the field before arranging full assessment. This step is not universal — some boards skip to full assessment based on teacher referral alone.' },
            { step: '3', title: 'Formal psychological assessment', detail: 'A board-employed or privately retained psychologist administers a full individually scored intelligence assessment — typically the WISC-V (Canadian norms), the Woodcock-Johnson IV, or the Stanford-Binet 5. This produces a FSIQ and composite scores.' },
            { step: '4', title: 'Identification meeting (Ontario: IPRC)', detail: 'In Ontario, an Identification, Placement, and Review Committee (IPRC) meeting reviews the assessment and determines whether to formally identify the student as "Gifted" (an exceptionality under Ontario\'s Education Act). Other provinces have less formalised committee structures but typically involve the school principal, resource teacher, and parents.' },
            { step: '5', title: 'Programme placement', detail: 'Once identified, the student is placed in the appropriate gifted programme — a self-contained gifted class, a pullout enrichment programme, or an enhanced in-class programme, depending on what the board offers.' },
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wait Times and Private Assessment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A significant challenge for Canadian families is wait times for publicly funded
          gifted assessment. In Ontario specifically, board psychologist wait lists can extend
          12–24 months in many districts. Similar delays occur in BC and Alberta.
          Families who cannot wait — or who want an independent assessment not contingent
          on a school referral — increasingly opt for private psychological assessment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Private psychological assessment in Canada (WISC-V or equivalent) typically costs
          CAD $2,500–$4,000 and takes one to three half-day sessions. A private assessment
          report can be submitted to the school board as supporting evidence for an
          identification request, though boards are not obligated to accept a private
          assessment in lieu of their own assessment process.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">Provincial rights:</strong> In Ontario, a parent
          can formally request an IPRC meeting as of right under the Education Act. The school
          must convene the meeting within 30 days. This is your strongest lever if the school
          has been unresponsive to your concerns about your child&apos;s academic needs.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When Moving Between Provinces</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Canada&apos;s decentralised education system creates complications for families who
          move between provinces. A child identified as Gifted in Ontario is not automatically
          recognised as gifted in BC or Alberta. Each province and school board may require
          a new assessment and identification process, even if the child already has a
          formal identification document and recent psychological assessment report.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When relocating, bring copies of all assessment reports, IEP or identification
          documents, and any programme reports from the previous province. Contact the
          receiving school board&apos;s special education department before the child starts
          school to understand what additional steps may be required. For the most detailed
          breakdown of the Ontario process specifically — the largest and most formalised
          system in Canada — see our{' '}
          <Link href="/blog/canada-ontario-gifted-testing-guide" className="text-indigo-600 hover:underline">
            Ontario gifted testing guide
          </Link>.
        </p>
      </section>
    </>
  ),

  'canada-ontario-gifted-testing-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Ontario&apos;s gifted education system is the most formalised in Canada — and for many
        families in Toronto, Ottawa, and other major Ontario cities, it is also the most
        competitive to access. The province&apos;s formal &quot;Gifted&quot; exceptionality designation,
        the IPRC process, and the dedicated self-contained gifted classes available in
        many school boards are unique in their depth and legal grounding. This guide
        explains exactly how the Ontario gifted identification system works.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Ontario Different</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ontario is the only Canadian province where giftedness is formally designated as
          an &quot;exceptionality&quot; under provincial education law — the Education Act, 1990.
          This legal status means that once a child is formally identified as Gifted through
          the IPRC process, the school board has a legal obligation to provide appropriate
          educational programming, documented in an Individual Education Plan (IEP).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many other provinces provide gifted services at the board&apos;s discretion and can
          withdraw or reduce programming based on budget. In Ontario, a formally identified
          Gifted student has stronger procedural protections — though not a guarantee of any
          specific placement type.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Assessment: WISC-V and CCAT</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Formal gifted identification in Ontario school boards is based primarily on an
          individually administered intelligence assessment. The most commonly used test
          is the WISC-V (Canadian norms). The assessment is administered by a registered
          school psychologist or psychological associate and produces:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>Full Scale IQ (FSIQ):</strong> The overall composite score. Gifted identification in Ontario typically requires an FSIQ of 130 or above (98th+ percentile).</Bullet>
          <Bullet><strong>Verbal Comprehension Index (VCI):</strong> Measures verbal reasoning and general language knowledge. Gifted children often score highest here.</Bullet>
          <Bullet><strong>Visual Spatial Index (VSI):</strong> Measures spatial reasoning and visual processing.</Bullet>
          <Bullet><strong>Fluid Reasoning Index (FRI):</strong> Measures the ability to solve novel problems and identify patterns. Often called &quot;g-loading&quot; — closely associated with general intelligence.</Bullet>
          <Bullet><strong>Working Memory Index (WMI):</strong> Measures short-term memory and the ability to hold and manipulate information. Sometimes an area of weakness even in gifted children, particularly those with ADHD.</Bullet>
          <Bullet><strong>Processing Speed Index (PSI):</strong> Measures the speed and accuracy of simple processing tasks. Gifted children frequently show a notable gap between their high VCI/FRI and lower PSI — this is expected and does not reduce overall gifted identification.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Prior to formal WISC-V assessment, many Ontario boards use the CCAT (Canadian Cognitive
          Abilities Test) — a group-administered screening test — to identify which students are
          most likely to score in the gifted range and should proceed to formal assessment.
          The CCAT is similar to the CogAT used in the US and produces standard age scores
          and national percentile rankings.
        </p>
        <Callout>
          <strong className="text-indigo-900">FSIQ and Extended Norms:</strong> Children who score at the
          ceiling of the WISC-V standard norms (FSIQ 160+) may be assessed using extended norms
          — a statistical approach that provides more differentiated scores at the extreme high end.
          If your child appears to be scoring at or near the ceiling on screening tests, ask the
          psychologist about extended norms.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The IPRC Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Identification, Placement, and Review Committee (IPRC) is the formal body that
          determines whether a student should be identified as exceptional and, if so, what
          educational placement is most appropriate. For gifted identification, the IPRC
          typically includes:
        </p>
        <ul className="space-y-3 mb-4">
          <Bullet>The school principal (or designate)</Bullet>
          <Bullet>One or more teachers with knowledge of the student</Bullet>
          <Bullet>The parent(s) or guardian(s)</Bullet>
          <Bullet>The student (if 16 or older)</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          The IPRC reviews the psychological assessment, teacher input, academic records,
          and any information the parents wish to provide. It then makes one of three decisions:
          identify as exceptional (Gifted), not identify, or defer pending additional information.
          Parents can appeal an IPRC decision to a Special Education Appeal Board (SEAB) — a
          route that is rarely used but exists as a formal recourse.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Following identification, the IPRC recommends a placement — most commonly a self-contained
          Gifted class (where the child spends the majority of the day with other identified gifted
          students) or a regular class with an IEP. The placement recommendation must also be
          reviewed annually.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gifted Programmes by Board</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted programme availability and structure varies by school board. The Toronto District
          School Board (TDSB) — the largest in Canada — operates self-contained gifted classes
          from Grade 4 through Grade 8 at designated schools across the city. These classes
          are accessible by application and are oversubscribed at the most desirable locations.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Ottawa-Carleton District School Board (OCDSB) offers a Gifted programme from
          Grade 4 with dedicated classes at selected schools. The York Region District School
          Board (YRDSB) similarly offers self-contained Gifted programming. Peel, Halton,
          Hamilton-Wentworth, and other boards have their own programme structures.
        </p>
        <p className="text-gray-700 leading-relaxed">
          At secondary level, Ontario&apos;s gifted students typically attend their neighbourhood
          school (with an IEP where appropriate) or apply to specialised arts and science
          programmes. There is no dedicated secondary-level Gifted track equivalent to the
          elementary self-contained model, though many gifted students access enriched or
          Advanced Placement (AP) courses within their secondary school. Families considering
          independent school as an alternative should read our{' '}
          <Link href="/blog/canada-private-school-entrance-exams" className="text-indigo-600 hover:underline">
            guide to Canadian private school entrance exams
          </Link>.
        </p>
      </section>
    </>
  ),

  'canada-private-school-entrance-exams': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Canada&apos;s independent (private) schools are among the most academically distinguished
        in the world. Schools like Upper Canada College (UCC), Havergal College, Trinity College
        School, Ridley College, and St. Michael&apos;s University School compete with elite British
        and American independent schools for university placement and alumni achievement.
        Entry to the most competitive of these schools requires preparation for a standardised
        entrance assessment — and understanding which test your target school uses is the
        first step.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Entrance Tests Do Canadian Private Schools Use?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike the UK (where the 11+ or ISEB Common Pre-Test is standard) or the US
          (where the ISEE and SSAT dominate), Canadian private schools use a mix of
          approaches:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { test: 'ISEE (Independent School Entrance Exam)', usage: 'Most widely used formal entrance exam at Canadian independent schools. The same test used by US independent schools. Accepted by essentially all Canadian private schools that require a standardised test. Administered at registered test centres (Canadian test centres exist in major cities) or via Flex testing at some schools.', schools: 'Upper Canada College, Havergal College, and many other Canadian independents.' },
            { test: 'SSAT (Secondary School Admission Test)', usage: 'Also accepted by most Canadian independent schools that accept ISEE. Some families prefer SSAT for its flexible retake policy (no limit on retakes, vs. ISEE\'s once-per-season rule). Canadian test centres exist in Toronto, Vancouver, Calgary, and other cities.', schools: 'Widely accepted alongside ISEE.' },
            { test: 'School-designed assessment', usage: 'Many Canadian independent schools — particularly at the junior school (Grade 1–6) entry level — use their own entrance assessments rather than ISEE/SSAT. These are typically ability tests (similar in format to CAT4 or CogAT) combined with reading and maths achievement assessments.', schools: 'Common at junior/middle school entry; varies significantly by school.' },
            { test: 'No test required', usage: 'Some Canadian private schools do not use a standardised admissions test at all, relying instead on previous school reports, teacher references, a trial period, and an interview. This is more common at the junior school entry level and at schools that do not select primarily on academic ability.', schools: 'More common at non-academically selective schools.' },
          ].map(({ test, usage, schools }) => (
            <div key={test} className="border border-gray-100 rounded-xl p-5">
              <div className="font-bold text-gray-900 mb-1">{test}</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{usage}</p>
              <div className="text-xs text-indigo-600 font-medium">Examples: {schools}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The ISEE in the Canadian Context</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ISEE is the same test that US independent school applicants use — there is no
          Canadian edition. The five sections (Verbal Reasoning, Quantitative Reasoning,
          Reading Comprehension, Mathematics Achievement, and Essay) are identical, and the
          score compares your child against the global pool of independent school applicants
          who have taken the test in the past three years.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This is an important point: independent school applicants worldwide are an
          academically selected group. A score at the 50th percentile on the ISEE is
          the median of a group that is already significantly above average compared
          to the general student population. Competitive Canadian independent schools
          typically look for applicants in the 60th–75th+ percentile range.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">School selectivity level</th>
                <th className="text-left p-4 font-semibold text-gray-700">Competitive ISEE stanine range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. percentile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Moderately selective', 'Stanine 5–6', '40th–60th %ile'],
                ['Selective', 'Stanine 6–7', '60th–75th %ile'],
                ['Highly selective', 'Stanine 7–8', '75th–88th %ile'],
                ['Most competitive (UCC, Havergal)', 'Stanine 8–9', '88th–99th %ile'],
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
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Application Process at Top Canadian Schools</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Applying to a top Canadian independent school is a multi-step process that typically
          unfolds over the year before entry:
        </p>
        <ul className="space-y-4 mb-4">
          <Check><strong>September–November:</strong> Open houses and school visits. Essential — most schools make admissions decisions that take account of demonstrated genuine interest. Attend as many open events as possible with your child.</Check>
          <Check><strong>November–December:</strong> Formal application submission, including previous school reports, teacher reference forms, and any standardised test scores already available.</Check>
          <Check><strong>November–January:</strong> ISEE or SSAT test date. Most schools request that the test is taken between October and January for September entry. Register early — popular test dates fill quickly.</Check>
          <Check><strong>January–February:</strong> Student interview and/or trial visit. Most highly selective schools conduct a formal interview with the applicant (and sometimes the family). This assesses character, curiosity, and fit for the school&apos;s culture — not academic ability, which the test already measures.</Check>
          <Check><strong>February–March:</strong> Offers issued. Most Canadian independent schools issue offers in February or March for September entry. Acceptance deadlines are typically 2–4 weeks after the offer.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing Effectively</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For the ISEE specifically, preparation should begin 4–6 months before the test date.
          The verbal section (synonyms and sentence completion) is widely considered the most
          challenging for Canadian students — particularly the vocabulary component, which
          reaches a level of breadth and precision that goes well beyond typical Grade 5–8
          classroom exposure.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Mathematics on the ISEE tests two distinct areas: Quantitative Reasoning
          (problem-solving and mathematical logic) and Mathematics Achievement
          (curriculum knowledge). The Mathematics Achievement section tests topics
          that may differ slightly from the provincial curriculum — particularly for
          students from Quebec or who have attended schools outside the anglophone
          curriculum mainstream. A diagnostic assessment before beginning preparation
          will identify any specific gaps in the mathematics curriculum that need addressing.
        </p>
      </section>
    </>
  ),

  'canada-french-immersion-selective-programs': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Canada has two unique features of its public education system that are often
        misunderstood by newcomers: French Immersion programmes (available in all provinces,
        offering education partly or fully in French) and a variety of specialised public
        school programmes — academic magnet schools, arts programmes, STEM schools, and
        more — that have their own admissions processes. For families seeking the best
        possible public education for their children without the cost of private school,
        understanding how to access these programmes is essential.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">French Immersion: What It Is and How to Get In</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          French Immersion is a publicly funded programme in which instruction is delivered
          partly or entirely in French, while following the provincial curriculum.
          It is available in all provinces and most territories. Students in French Immersion
          complete the same provincial curriculum as their English-programme peers but emerge
          bilingual — a significant advantage in Canada, where federal employment and many
          private sector roles value official bilingualism.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are two entry points: Early French Immersion (EFI), which begins in
          Kindergarten or Grade 1, and Late French Immersion (LFI), which begins in
          Grade 4, 5, or 6 depending on the province. EFI is more common and produces
          stronger French outcomes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          French Immersion is not a gifted programme and does not select on academic ability.
          Admission is typically first-come-first-served at the time of registration, with
          sibling priority at many boards. The key challenge is awareness and timing:
          EFI registration often opens in January for September entry, and popular schools
          fill within hours of registration opening.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">A common misconception:</strong> French Immersion is often
          assumed to be &quot;the gifted programme&quot; in provinces where it is academically
          overrepresented. In reality, FI is self-selecting — the families who register tend
          to be more educated and more intentional about schooling. The programme itself does
          not select on ability, and children of all cognitive profiles succeed in it when
          families are motivated and supportive.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Specialised Public School Programmes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Beyond French Immersion, many Canadian school boards offer specialised public
          programmes that are selectively admitted and provide a distinctly different
          academic experience. These vary enormously by province and board:
        </p>
        <div className="space-y-5 mb-4">
          {[
            {
              province: 'Ontario (Toronto)',
              programmes: [
                'TDSB Alternative Schools: Community-based schools with distinctive pedagogical approaches (child-centred learning, democratic decision-making). Not academically selective but require family commitment to the school\'s philosophy.',
                'Toronto French School (private): Internationally recognised, bilingual (French-English) school from Kindergarten to Grade 12. Competitive admissions, including a French language assessment.',
                'Specialised arts programmes: Many TDSB secondary schools have specialised arts programmes (Etobicoke School of the Arts, Earl Haig Secondary School\'s Claude Watson programme) with audition-based entry.',
              ],
            },
            {
              province: 'British Columbia (Vancouver)',
              programmes: [
                'Vancouver School Board Distributed Learning: Allows families to design a customised programme combining classroom, online, and home-based learning. Popular with gifted families who want curriculum flexibility.',
                'Britannia Secondary School\'s IB programme: Competitive IB Middle Years and Diploma programme within the public system.',
                'District-operated Gifted programmes: VSB operates gifted pullout programmes from Grade 4 with referral through formal assessment.',
              ],
            },
            {
              province: 'Quebec (Montreal)',
              programmes: [
                'Classes d\'excellence (English Montreal School Board): Academically selective classes in English-sector public schools. Admission typically requires an entrance assessment.',
                'Programme d\'éducation internationale (PEI): French-sector equivalent, preparing students for the IB Diploma. Selective entry from Secondary 1.',
                'Collèges d\'enseignement général et professionnel (CEGEP): Quebec\'s unique post-secondary institution between high school and university. Some programmes (Sciences, Commerce, Arts) are highly competitive and admission is based on high school marks.',
              ],
            },
          ].map(({ province, programmes }) => (
            <div key={province} className="border border-gray-100 rounded-xl p-5">
              <div className="font-bold text-gray-900 mb-3">{province}</div>
              <ul className="space-y-2">
                {programmes.map((p, i) => (
                  <li key={i} className="text-sm text-gray-600 leading-relaxed flex gap-2">
                    <span className="text-indigo-400 flex-shrink-0 mt-0.5">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Combining Programmes: What the Most Competitive Families Do</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many families in Canada combine multiple programme features to build the strongest
          possible educational pathway within the public system:
        </p>
        <ul className="space-y-4 mb-4">
          <Check><strong>French Immersion + Gifted:</strong> In Ontario, a child can be enrolled in French Immersion and also be formally identified as Gifted through the IPRC process. The board is then required to provide appropriate gifted programming within (or alongside) the Immersion pathway.</Check>
          <Check><strong>Public school + private enrichment:</strong> Many families supplement a strong public school with external enrichment programmes — online competitions (CEMC Waterloo Mathematics Contest, Science Olympiad Canada), private tutoring, and programmes like AoPS (Art of Problem Solving) for Maths.</Check>
          <Check><strong>IB in public school:</strong> The International Baccalaureate Diploma Programme is offered in many Canadian public secondary schools at no additional fee beyond normal school costs. Admission is typically selective (strong Grade 9–10 marks) but not as competitive as private school entry.</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Canada&apos;s public education system, at its best, is genuinely excellent — and the
          combination of French Immersion, formal Gifted identification, IB access, and
          selective public magnet programmes means that motivated families can construct
          a rigorous educational pathway without the substantial cost of private school.
          The key is early awareness, proactive advocacy, and consistent engagement with
          the school and school board.
        </p>
      </section>
    </>
  ),
}
