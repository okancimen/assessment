import Link from 'next/link'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const UAE_CONTENT: Record<string, React.ReactNode> = {

  'uae-cat4-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The CAT4 (Cognitive Abilities Test 4) is the most widely used academic assessment
        in British-curriculum schools across the UAE. If your child attends — or is applying to —
        a British-curriculum international school in Dubai, Abu Dhabi, Sharjah, or elsewhere
        in the Emirates, they will almost certainly sit the CAT4 at some point in their
        school career. Understanding what the CAT4 measures, how scores are reported, and
        how schools use results is essential for any family in the UAE school system.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the CAT4?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Cognitive Abilities Test 4 (CAT4) is published by GL Assessment, the UK&apos;s
          leading educational assessment company. It is designed to measure reasoning ability
          across four distinct cognitive domains — verbal, quantitative, nonverbal, and spatial —
          rather than academic knowledge in specific subjects. Because it is not a knowledge
          test, a child who has attended different schools in different countries, or whose
          home language is not English, can still be accurately assessed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          CAT4 is used in more than 3,000 schools in the UAE, Saudi Arabia, and across the
          wider Middle East and North Africa region. In the UAE specifically, it is used
          by most schools following the English National Curriculum, the British curriculum,
          or who use UK-derived assessment frameworks. It is administered from Year 3 upwards,
          with different levels of the test calibrated for different age groups.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The test is administered on paper or on a computer (CAT4 Digital), typically
          takes approximately 2.5 hours across two sessions, and is scored centrally by
          GL Assessment against a UK norm group. Schools receive detailed reports showing
          individual student scores and how each student compares to UK peers of the same age.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Four Batteries Explained</h2>
        <div className="space-y-5 mb-6">
          {[
            {
              battery: 'Verbal Battery',
              icon: '🔤',
              tests: 'Verbal Classification, Verbal Analogies',
              measures: 'The ability to reason with words, language concepts, and verbal relationships. A child who scores well on the verbal battery can identify patterns in how words relate to each other — for example, recognising that "doctor : hospital" has the same relationship as "pilot : cockpit."',
              note: 'Language-dependent. Non-native English speakers typically score lower on this battery. Schools should account for this when interpreting results for EAL students.',
            },
            {
              battery: 'Quantitative Battery',
              icon: '🔢',
              tests: 'Number Series, Number Analogies',
              measures: 'The ability to reason with numbers and numerical relationships. This is not a mathematics knowledge test — it does not test arithmetic or algebra. It tests whether a child can identify and extend numerical patterns and relationships.',
              note: 'Less language-dependent than the verbal battery. A child who is weak in English but strong in mathematical reasoning often performs better here than on the verbal battery.',
            },
            {
              battery: 'Nonverbal Battery',
              icon: '🔷',
              tests: 'Figure Classification, Figure Matrices',
              measures: 'The ability to reason with abstract shapes and patterns. Questions show sequences or groups of geometric figures and ask the child to identify which figure completes the pattern. Completely language-independent.',
              note: 'Often the fairest battery for EAL students. A high nonverbal score relative to verbal score can indicate strong reasoning ability that is being partially masked by language factors.',
            },
            {
              battery: 'Spatial Battery',
              icon: '🔮',
              tests: 'Figure Analysis (paper folding), Figure Recognition',
              measures: 'The ability to reason about 2D and 3D space — to mentally rotate, fold, or manipulate shapes. This battery is unique to CAT4 among major cognitive tests and measures a dimension of reasoning not captured by verbal, quantitative, or nonverbal tests.',
              note: 'Spatial ability is associated with success in STEM subjects, particularly mathematics, physics, and engineering. A high spatial score with lower verbal scores may indicate a student who will excel in technical subjects.',
            },
          ].map(({ battery, icon, tests, measures, note }) => (
            <div key={battery} className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{icon}</span>
                <div className="font-bold text-gray-900">{battery}</div>
              </div>
              <div className="text-xs text-indigo-600 font-medium mb-3">Tests: {tests}</div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">{measures}</p>
              <div className="bg-gray-50 rounded-lg px-4 py-3 text-xs text-gray-500 leading-relaxed">{note}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Scores Are Reported</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CAT4 reports Standard Age Scores (SAS) for each battery and a mean (overall) SAS.
          The SAS scale has a mean of 100 and a standard deviation of 15 — the same scale
          used by IQ tests and most professional cognitive assessments. This makes the
          scores directly comparable to other standardised assessments.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">SAS range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Stanine</th>
                <th className="text-left p-4 font-semibold text-gray-700">Description</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['127+', '9', 'Very High', '4%'],
                ['119–126', '8', 'High', '7%'],
                ['112–118', '7', 'Above Average', '12%'],
                ['104–111', '6', 'Slightly Above Average', '17%'],
                ['96–103', '5', 'Average', '20%'],
                ['89–95', '4', 'Slightly Below Average', '17%'],
                ['81–88', '3', 'Below Average', '12%'],
                ['74–80', '2', 'Low', '7%'],
                ['<74', '1', 'Very Low', '4%'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono text-indigo-700 font-medium">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-center">{row[1]}</td>
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[2]}</td>
                  <td className="p-4 text-gray-500">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          In addition to the SAS and stanine, CAT4 reports a CAT4 profile — a visual representation
          of the four battery scores relative to each other. A flat profile (all four batteries
          similar) is common. A jagged profile (significant differences between batteries) can
          indicate specific learning strengths or challenges and is a useful conversation starter
          with the child&apos;s school.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How UAE Schools Use CAT4 Results</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In the UAE context, CAT4 is used in three main ways:
        </p>
        <ul className="space-y-4 mb-4">
          <Bullet><strong>Admissions screening:</strong> Some schools use CAT4 (or a similar GL Assessment tool) as part of their admissions process, particularly for applications to Year 7+ (secondary entry). A mean SAS below a certain threshold — typically around 90–95 — may indicate that a child will struggle with the school&apos;s academic programme.</Bullet>
          <Bullet><strong>Setting and ability grouping:</strong> Many British-curriculum schools in the UAE use CAT4 to form ability groups (sets) in core subjects, particularly in Year 7 and Year 8. A child&apos;s CAT4 profile can inform which set they are placed in for Maths, English, and Science.</Bullet>
          <Bullet><strong>Identifying underachievement:</strong> One of CAT4&apos;s most powerful uses is identifying students who are performing below their cognitive potential. If a child scores a high SAS on CAT4 but is underperforming academically, this gap (sometimes called the &quot;potential-performance gap&quot;) triggers investigation — is there a learning difference? A wellbeing issue? A language barrier?</Bullet>
        </ul>
        <Callout color="emerald">
          <strong className="text-emerald-900">KHDA context:</strong> The Knowledge and Human Development
          Authority (KHDA) — which oversees private schools in Dubai — uses data from standardised
          assessments including CAT4 in its school inspection framework to evaluate whether schools
          are successfully stretching high-ability students and supporting those with additional needs.
          Schools that effectively use CAT4 data to close potential-performance gaps tend to receive
          stronger KHDA inspection ratings.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing for CAT4</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CAT4 is a reasoning test, not a knowledge test, which limits how much preparation
          is possible. However, familiarity with the question formats — particularly the
          nonverbal and spatial batteries — does produce modest score improvements.
          The most effective approach is:
        </p>
        <ul className="space-y-3">
          <Check>Expose your child to figure matrix and figure classification puzzles (IQ-style nonverbal reasoning books are widely available). These directly mirror the CAT4 nonverbal battery.</Check>
          <Check>Practice number series and number analogy questions. These mirror the CAT4 quantitative battery.</Check>
          <Check>For the spatial battery, building toys (Lego, Magformers), paper folding activities, and 3D spatial puzzles build the underlying skill over time.</Check>
          <Check>Do not attempt to &quot;prepare&quot; for the verbal battery through vocabulary drilling if English is not your child&apos;s first language. Schools should account for EAL status in interpreting verbal battery scores.</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-4">
          For more on how UAE schools use CAT4 scores in admissions and what to expect from the
          process, see our guide to{' '}
          <Link href="/blog/uae-british-curriculum-school-admissions" className="text-indigo-600 hover:underline">
            British curriculum school admissions in Dubai and Abu Dhabi
          </Link>.
        </p>
      </section>
    </>
  ),

  'uae-british-curriculum-school-admissions': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Getting a place at a top British-curriculum school in Dubai or Abu Dhabi is one of
        the most competitive admissions processes in global education. With demand consistently
        outpacing supply at the most sought-after schools — GEMS Wellington, Dubai College,
        Jumeirah English Speaking School (JESS), Dubai British School, and the British School
        Al Khubairat in Abu Dhabi — understanding the admissions process in detail is essential
        for families planning a move to the UAE or seeking a school transfer within it.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The UAE Private School Landscape</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The UAE has no free state schools for expatriate families — all non-UAE-national
          children attend fee-paying private schools. This means the entire expat community
          is channelled into a private school market that is both large (over 1,200 schools
          in the UAE as a whole) and highly stratified. Schools vary from budget-tier institutions
          (annual fees AED 10,000–20,000) to the most expensive and prestigious schools
          (fees AED 80,000–100,000+ per year).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          British-curriculum schools typically occupy the upper tier of this market. They follow
          the English National Curriculum, prepare students for GCSEs and A-levels (or the IB
          Diploma as an alternative at Sixth Form level), and are overseen by the KHDA in Dubai
          and ADEK (Abu Dhabi Department of Education and Knowledge) in Abu Dhabi.
          Most receive KHDA inspection ratings of &quot;Outstanding&quot; or &quot;Very Good.&quot;
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Entry Points and Waiting Lists</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most British-curriculum schools in the UAE have the most availability at the primary
          entry point (FS1/FS2, equivalent to Reception/Year 1 in England). Entry into Year 7
          (secondary school) is another common application point. Mid-year and mid-phase
          applications (e.g., Year 4, Year 9) are the most challenging because places only
          open up when a current student leaves.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Waiting lists at the most desirable schools can extend 12–24 months or longer.
          Families planning a relocation to the UAE should contact their target schools
          as early as possible — ideally before confirming the relocation — and should
          simultaneously apply to multiple schools to ensure at least one viable option.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">Relocation advice:</strong> In the UAE, school selection
          should inform your choice of residential area, not the other way around. Many British schools
          have school bus networks covering specific zones, and living outside the bus zone can mean
          daily commutes that are impractical. Map out your shortlisted schools before signing any
          rental contract.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Admissions Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The specific process varies by school, but a typical sequence for a British-curriculum
          school in the UAE looks like this:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { step: '1', title: 'Online registration', detail: 'Submit an expression of interest or formal application via the school\'s admissions portal. This does not guarantee a place — it registers your child for consideration when a place becomes available.' },
            { step: '2', title: 'Previous school reports', detail: 'Submit the last 2 years of school reports (in English if possible, or with certified translation). Schools look for consistent academic performance, effort ratings, and any teacher comments about learning support needs.' },
            { step: '3', title: 'Cognitive assessment (CAT4 or equivalent)', detail: 'Many schools require applicants to sit a cognitive assessment as part of the admissions process. This is typically the CAT4 for British-curriculum schools, sometimes combined with a reading and maths assessment pitched at the child\'s age/year group.' },
            { step: '4', title: 'Taster day or trial', detail: 'At secondary level especially, schools often invite shortlisted applicants for a taster day to observe the child in a classroom environment and assess their ability to integrate socially and academically.' },
            { step: '5', title: 'Interview or family meeting', detail: 'Some schools — particularly those with high academic selectivity — conduct a brief interview or family meeting. This assesses the family\'s understanding of the school\'s ethos and the child\'s motivation.' },
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Most Sought-After Schools</h2>
        <div className="space-y-4 mb-6">
          {[
            { school: 'Dubai College', area: 'Al Sufouh, Dubai', fee: 'AED 85,000+/yr', note: 'Selective secondary school (Year 7 entry only). Admissions test required. One of the most academically competitive British schools in the UAE.' },
            { school: 'GEMS Wellington Academy (multiple campuses)', area: 'Various, Dubai', fee: 'AED 50,000–80,000/yr', note: 'All-through British curriculum. Long waiting lists at primary level. Secondary admissions via CAT4 and interview.' },
            { school: 'Jumeirah English Speaking School (JESS)', area: 'Jumeirah / Arabian Ranches', fee: 'AED 55,000–70,000/yr', note: 'All-through British curriculum, KHDA Outstanding. Very long waiting lists. Apply as early as possible.' },
            { school: 'Dubai British School (DBS)', area: 'Springs, Dubai', fee: 'AED 50,000–65,000/yr', note: 'KHDA Outstanding. Popular with families in the Springs/Meadows area. Strong academic reputation.' },
            { school: 'British School Al Khubairat (BSAK)', area: 'Abu Dhabi', fee: 'AED 60,000–80,000/yr', note: 'The original British school in Abu Dhabi. Traditionally very popular with UK expat families. Long waiting lists.' },
          ].map(({ school, area, fee, note }) => (
            <div key={school} className="border border-gray-100 rounded-xl p-5">
              <div className="font-bold text-gray-900 mb-0.5">{school}</div>
              <div className="flex gap-3 text-xs font-medium mb-3">
                <span className="text-gray-400">{area}</span>
                <span className="text-indigo-600">{fee}</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">GCSE and A-Level Outcomes</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The top British schools in the UAE consistently produce GCSE and A-level results
          that rival or exceed leading UK independent schools. Dubai College, for example,
          has historically produced A-level results (A*–B rates) exceeding 90%, with
          significant proportions of students going on to Russell Group universities in the UK,
          Ivy League universities in the US, and top universities in Canada and Australia.
        </p>
        <p className="text-gray-700 leading-relaxed">
          When comparing schools, look beyond headline A-level results to the value-added score —
          how much progress students make relative to their prior attainment (including CAT4
          scores on entry). A school that achieves strong results with a highly selective intake
          is performing differently from one that achieves similar results while taking a much
          broader ability range. For a full explanation of the CAT4 assessment used throughout
          this process, see our{' '}
          <Link href="/blog/uae-cat4-test-guide" className="text-indigo-600 hover:underline">
            UAE CAT4 test guide
          </Link>. Once your child is enrolled, our{' '}
          <Link href="/blog/uae-gifted-programs-guide" className="text-indigo-600 hover:underline">
            guide to gifted programs in UAE schools
          </Link>{' '}
          explains how high-ability students are identified and supported.
        </p>
      </section>
    </>
  ),

  'uae-gifted-programs-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Gifted education in the UAE has developed significantly over the past decade,
        driven by both government policy and the demands of an internationally mobile
        expat community with high educational expectations. Whether your child attends
        an international school in Dubai or a school under the UAE Ministry of Education
        system, understanding how gifted identification works and what provision is available
        will help you advocate effectively for your child&apos;s needs.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Gifted Education in the UAE Government Framework</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The UAE federal government has made gifted and talented education a strategic priority.
          The Ministry of Education runs the National Programme for Gifted Students
          (Al Mawhiba), which identifies and supports academically gifted Emirati students
          from Year 5 onwards through a series of national assessments. The programme
          focuses particularly on STEM talent and offers scholarships, enrichment camps,
          and competitive participation in international Olympiads.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Al Mawhiba assessments include a combination of academic achievement testing
          and cognitive ability testing (reasoning tests similar in format to CAT4).
          Emirate-level programmes exist in Dubai (under KHDA) and Abu Dhabi (under ADEK)
          with slightly different structures but shared national standards.
        </p>
        <Callout>
          <strong className="text-indigo-900">For expat families:</strong> Al Mawhiba is primarily
          designed for UAE-national students. Expat families at international schools should
          focus on the gifted identification processes within their specific school, which are
          typically based on CAT4 data and teacher nomination.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How International Schools Identify Gifted Students</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          British-curriculum and IB schools in the UAE typically identify gifted and more
          able students using a combination of CAT4 scores, academic performance data,
          and teacher observation. A student is usually identified as &quot;more able&quot;
          or &quot;gifted&quot; if they score at stanine 7 or above (SAS 112+) on CAT4
          in one or more batteries, combined with academic performance in the top
          decile of their year group.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Schools that are rated Outstanding by KHDA are expected to demonstrate that
          they identify and cater for the full ability range — including their most
          able students. KHDA inspection reports specifically look for evidence that
          schools have a functioning G&T (Gifted and Talented) policy and that
          identified students are receiving appropriately challenging provision.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Identification criterion</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical threshold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['CAT4 mean SAS', '112+ (stanine 7+)'],
                ['CAT4 individual battery', '119+ (stanine 8+) in any battery'],
                ['Academic performance', 'Top 10–15% of year group in relevant subject'],
                ['Teacher nomination', 'Endorsed by 2+ subject teachers'],
                ['External assessment (WISC-V etc.)', 'IQ 120+ (school psychologist report)'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[0]}</td>
                  <td className="p-4 text-indigo-700 font-medium">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Gifted Provision Looks Like</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gifted provision in UAE international schools varies considerably by school budget,
          philosophy, and KHDA rating. Common approaches include:
        </p>
        <ul className="space-y-4 mb-4">
          <Bullet><strong>Differentiated instruction within the classroom:</strong> The most common approach at primary level. Gifted students are given more challenging tasks within the same classroom session — extension questions, open-ended investigations, and higher-order thinking tasks.</Bullet>
          <Bullet><strong>Ability grouping (setting):</strong> At secondary level, most British schools set students by ability in core subjects (Maths, English, Science). Being placed in top sets is the most immediate practical benefit of a high CAT4 score.</Bullet>
          <Bullet><strong>Subject acceleration:</strong> A student who is significantly ahead in one subject (typically Maths) may be accelerated to sit GCSE a year early or to study alongside an older year group.</Bullet>
          <Bullet><strong>Enrichment clubs and competitions:</strong> Most schools offer STEM clubs, Maths Olympiad preparation, debate, and other enrichment activities targeted at their most able students. International competitions (World Mathematics Team Championship, international Science Olympiads) are participated in by the leading schools.</Bullet>
          <Bullet><strong>External gifted programmes:</strong> Some families supplement school provision with external programmes — the GEMS talent development programme, NYUAD (New York University Abu Dhabi) outreach programmes, and various STEM camps offered during school holidays.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When School Provision Is Not Enough</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For highly gifted children (CAT4 SAS consistently 130+, or IQ assessments placing
          them in the 99th+ percentile), standard differentiation within a mainstream British
          school may not provide sufficient challenge. Options for families in this situation include:
        </p>
        <ul className="space-y-3">
          <Check>Request a formal meeting with the school&apos;s SENCO or G&T coordinator to discuss a personalised learning plan with specific challenging targets.</Check>
          <Check>Commission a private educational psychologist assessment (psychologists offering English-language WISC-V assessments are available in Dubai and Abu Dhabi) to obtain a formal IQ assessment that can be shared with the school.</Check>
          <Check>Consider online enrichment through programmes like Art of Problem Solving (for Maths), Stanford OHS (Online High School), or similar internationally recognised distance-learning enrichment programmes.</Check>
          <Check>Investigate whether the school can offer a formal acceleration pathway — sitting GCSE Mathematics in Year 9, for example, with A-level starting in Year 10.</Check>
        </ul>
      </section>
    </>
  ),

  'uae-international-school-entrance-exams': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The UAE is home to schools following a wide range of curricula — British, American,
        IB, Indian (CBSE and ICSE), French, German, and many others. Each curriculum tradition
        uses different entrance assessments, and understanding which test applies to which type
        of school can save families significant time and anxiety. This guide maps the major
        curriculum types to their entrance assessment processes and explains what to expect at each.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">British Curriculum Schools: CAT4 and GL Assessments</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          As covered in our <Link href="/blog/uae-cat4-test-guide" className="text-indigo-600 hover:text-indigo-800 underline">CAT4 guide</Link>, British-curriculum schools predominantly use the CAT4
          for admissions screening and internal setting. Entry assessments typically include:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>CAT4 (cognitive ability):</strong> The primary admissions assessment. Usually administered as a standalone session of 2–2.5 hours.</Bullet>
          <Bullet><strong>Progress in Reading Assessment (PiRA) or similar:</strong> A standardised reading age assessment given alongside CAT4 to assess English literacy level independently of cognitive ability.</Bullet>
          <Bullet><strong>Progress in Understanding Mathematics Assessment (PUMA):</strong> A mathematics achievement assessment corresponding to the English National Curriculum level for the applicant&apos;s year group.</Bullet>
          <Bullet><strong>Writing sample:</strong> Some schools ask for a brief piece of writing (fiction or non-fiction) to assess written English ability.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Key schools using this approach include GEMS Wellington, JESS, Dubai British School,
          and most other KHDA Outstanding-rated British schools.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">American Curriculum Schools: ERB and ISEE</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          American-curriculum private schools in the UAE — including American School of Dubai (ASD)
          and American Community School of Abu Dhabi (ACS) — typically use assessments from the
          Educational Records Bureau (ERB). The most common ERB assessment used for admissions
          is the ISEE (Independent School Entrance Exam, the same test used by US independent
          schools) or the IQAS (Independent Qualifications and Assessment Service) battery.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The ISEE for these schools is identical to the US version: verbal reasoning, quantitative
          reasoning, reading comprehension, mathematics achievement, and an unscored essay.
          The score is compared against a norm group of independent school applicants worldwide.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Some American-curriculum schools also accept SSAT scores. Both the ISEE and SSAT
          can be sat in the UAE at designated test centres in Dubai and Abu Dhabi.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">IB Schools: Academic Record and Assessment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          International Baccalaureate schools vary in how they assess admissions. Schools
          offering the IB Primary Years Programme (PYP) to the IB Diploma tend to use
          one of two approaches:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            { approach: 'Portfolio-based', desc: 'At primary level (PYP), many IB schools focus primarily on previous school reports, teacher references, and sometimes a brief sample of the child\'s work. No standardised test required.' },
            { approach: 'Assessment-based', desc: 'At secondary level (MYP and DP), some IB schools administer a bespoke entrance assessment or use the CAT4/ISEE to evaluate academic readiness for the IB curriculum.' },
          ].map(({ approach, desc }) => (
            <div key={approach} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{approach}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          For IB Diploma entry (Year 12), schools typically require strong IGCSE or equivalent
          results (5+ subjects at grade B/6 or above) rather than a separate entrance test.
          The IB Diploma is a demanding programme and schools use IGCSE or MYP grades as
          the primary evidence of readiness.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Indian Curriculum Schools: Board-Aligned Testing</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CBSE (Central Board of Secondary Education) and ICSE schools in the UAE — serving
          primarily the large South Asian expatriate community — use admissions processes
          aligned with their respective Indian board curricula. Entrance tests, when used,
          are typically school-designed assessments in English, Mathematics, and sometimes
          Science, pitched at the year group&apos;s expected knowledge level.
        </p>
        <p className="text-gray-700 leading-relaxed">
          These schools do not typically use CAT4 or ISEE. Academic selection is primarily
          based on previous school performance and subject knowledge tests. Fees at
          CBSE/ICSE schools are generally significantly lower than British or American
          schools, making them a popular choice for Indian expat families seeking
          a recognised Indian curriculum with university pathway options in India.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparation Across All School Types</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regardless of which school type and assessment format applies to your child,
          the foundational preparation is the same: strong verbal reasoning, mathematical
          reasoning, and reading comprehension skills transfer across all assessment formats.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Using a standardised adaptive assessment (like Eduentry) before applying gives you
          a baseline score on the same scale (mean 100, SD 15) used by CAT4, ISEE, and most
          other standardised admissions tests. This tells you whether your child is likely
          to be competitive at their target schools and which specific areas need the
          most preparation work before the admissions assessment.
        </p>
      </section>
    </>
  ),
}
