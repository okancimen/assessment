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
          scores directly comparable to other standardised assessments. For a full breakdown
          of how the scale maps to percentiles, see our{' '}
          <Link href="/11-plus-sas-scores" className="text-indigo-600 hover:underline font-medium">SAS scores explained</Link> guide.
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
        The UAE is home to some of the most competitive school admissions markets in the world. Dubai and
        Abu Dhabi together host hundreds of international schools, but demand for places at the best
        British-curriculum institutions significantly outstrips supply. Families who understand how the
        admissions process actually works — what documents are required, when to apply, what assessments
        are used, and how the KHDA rating system should be interpreted — consistently secure better
        outcomes than those who approach the process without preparation.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How KHDA Ratings Work and Why They Matter</h2>
        <p><strong>The Knowledge and Human Development Authority (KHDA) inspects every private school in Dubai on a four-level scale: Outstanding, Good, Acceptable, and Weak.</strong> These ratings are published publicly and updated after each inspection cycle, making them the single most reliable external quality signal available to families choosing a school in Dubai.</p>
        <p className="text-gray-700 leading-relaxed mb-4 mt-4">
          Abu Dhabi schools are inspected by ADEK (Abu Dhabi Department of Education and Knowledge) using
          a comparable framework. In both emirates, the highest-rated schools attract the most applications,
          meaning Outstanding-rated schools are typically oversubscribed by a factor of two or three to one.
        </p>
        <Callout>
          A school&apos;s KHDA rating reflects its most recent inspection. Schools can move between ratings — a school currently rated Good may have been Outstanding previously, or may be on an improvement trajectory. Always check the year of the most recent inspection report, not just the rating headline.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Top British-Curriculum Schools and Their Entry Requirements</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The following schools consistently attract the highest application volumes among British-curriculum
          families in the UAE. Entry requirements, fee ranges, and assessment formats are summarised below.
          All figures are indicative — always verify directly with the school admissions office, as these
          change each academic year.
        </p>
        <div className="space-y-4 mb-6">
          {[
            {
              school: 'GEMS Wellington International School, Dubai',
              khda: 'Outstanding',
              assessment: 'CAT4 + English and Maths assessment',
              fees: 'AED 55,000–85,000/year',
              note: 'One of the most oversubscribed British schools in Dubai. Waiting lists apply at most year groups.'
            },
            {
              school: 'Jumeirah English Speaking School (JESS), Dubai',
              khda: 'Outstanding',
              assessment: 'Internal assessment + interview for some year groups',
              fees: 'AED 50,000–72,000/year',
              note: 'Historically selective; places at Foundation and Year 7 entry are the most competitive.'
            },
            {
              school: 'Dubai College',
              khda: 'Outstanding',
              assessment: 'CAT4 SAS 115+ required for Year 7 entry',
              fees: 'AED 60,000–75,000/year',
              note: 'The most academically selective British school in Dubai. Entry is by competitive assessment only.'
            },
            {
              school: 'Repton School Dubai',
              khda: 'Outstanding',
              assessment: 'CAT4 + English and Maths assessment',
              fees: 'AED 65,000–82,000/year',
              note: 'UK boarding school tradition. Strong sixth-form outcomes. Apply 12–18 months ahead.'
            },
            {
              school: 'British School Al Khubairat (BSAK), Abu Dhabi',
              khda: 'Outstanding (ADEK)',
              assessment: 'Internal assessment + previous school reports',
              fees: 'AED 30,000–58,000/year',
              note: 'The most established British school in Abu Dhabi. Demand is highest at Foundation stage.'
            },
          ].map(({ school, khda, assessment, fees, note }) => (
            <div key={school} className="border border-gray-100 rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="font-semibold text-gray-900">{school}</div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{khda}</span>
              </div>
              <div className="text-sm text-gray-500 mb-1"><strong>Assessment:</strong> {assessment}</div>
              <div className="text-sm text-gray-500 mb-2"><strong>Fees:</strong> {fees}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Admissions Process Step by Step</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          British-curriculum school admissions in the UAE follow a broadly consistent process, though
          the exact timeline and requirements vary by school. The following sequence applies to the
          majority of outstanding-rated schools in Dubai and Abu Dhabi.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>Register your interest on the school&apos;s website — most schools maintain a waiting list and contact families when a place becomes available, regardless of when in the academic year you apply.</Check>
          <Check>Submit documentation: passport copies, Emirates ID, most recent school reports (typically the last two years), immunisation records, and any SEND or EAL documentation.</Check>
          <Check>Attend an assessment session — typically CAT4 or an internal English and Maths test. At the Foundation stage (Reception/FS1–FS2), this is usually an informal play-based observation rather than a formal test.</Check>
          <Check>Interview (for some schools, particularly at Year 7 entry and Sixth Form): usually a 20–30 minute conversation with the Head of Year or a senior academic.</Check>
          <Check>Receive an offer — conditional on the assessment outcomes and place availability. Offers are typically valid for 2–3 weeks. A registration deposit (AED 1,000–5,000) is required to hold the place.</Check>
        </ul>
        <Callout color="amber">
          Fee ranges quoted above are for the 2025–26 academic year. Annual fee increases of 3–6% are typical in UAE international schools, subject to KHDA/ADEK approval. Some schools charge additional fees for transport, uniform, and extracurricular activities that can add AED 5,000–15,000 per year.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/uae-cat4-test-guide', tag: 'Guide', title: 'CAT4 Test Guide for UAE Parents: What the Test Measures and How Scores Work' },
            { href: '/blog/uae-international-school-entrance-exams', tag: 'Assessment', title: 'UAE International School Entrance Exams: CAT4, ISEE, IB and What Each Curriculum Requires' },
            { href: '/blog/uae-gifted-programs-guide', tag: 'Guide', title: 'Gifted Education in the UAE: How International Schools Identify High Ability Students' },
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

  'dubai-gifted-schools-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Dubai has one of the most competitive international school markets in the world, and for families
        with academically able children, choosing the right school is a significant decision. Not all
        Outstanding-rated schools are equally strong at stretching their highest-ability students.
        This guide identifies the Dubai schools with the strongest track records for gifted and
        high-ability learners, explains what to look for in a KHDA inspection report, and walks
        through the 2026 admissions process.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes a Dubai School Good for Gifted Children?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          KHDA inspection reports rate schools across multiple categories. When evaluating a school
          for a gifted child, the specific section to read is the rating for <strong>"provision for
          students of determination and those with SEND"</strong> and separately the comments on
          <strong>"more able and gifted students."</strong> Outstanding schools are expected to show:
        </p>
        <ul className="space-y-3 mb-6">
          <Check>A formal gifted register with students identified using objective data (typically CAT4 stanine 7+ and academic attainment in the top decile)</Check>
          <Check>Subject acceleration or early examination entry where appropriate (e.g. GCSE in Year 9, A-level early)</Check>
          <Check>Enrichment programmes beyond the standard curriculum — Maths Olympiad preparation, debating, research projects, competitive science</Check>
          <Check>Above-expected academic progress for the most able group, measured across academic years</Check>
          <Check>Qualified SENCO/G&T coordinator who tracks gifted students individually</Check>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A school can be KHDA Outstanding overall and still receive a weaker rating for high-ability
          provision. Always read the full report, not just the headline rating.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Dubai Schools for Gifted Students</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The following British-curriculum schools have the strongest combination of KHDA Outstanding
          ratings, academic outcomes, and documented gifted provision. All use CAT4 as their primary
          admissions and monitoring tool.
        </p>

        <div className="space-y-6 mb-6">
          <div className="border border-gray-100 rounded-xl p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-gray-900 text-lg">Dubai College</h3>
              <span className="text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 flex-shrink-0 ml-3">Most selective</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">Year 7 entry only. Consistently rated Outstanding by KHDA and widely regarded as Dubai&apos;s most academically selective school. Accepts approximately 90–100 students per year from several hundred applicants. The admissions process involves CAT4 testing and a school visit; competitive applicants typically score SAS 120–130+ across batteries. A-level results place it among the top schools in the region.</p>
            <p className="text-sm text-gray-500">Curriculum: A-levels · Location: Al Quoz · Year 7–13 only</p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-2">JESS Arabia (Jumeirah English Speaking School)</h3>
            <p className="text-gray-600 text-sm mb-2">Two campuses: Jumeirah (FS–Year 13) and Arabian Ranches (FS–Year 9). Consistently Outstanding and known for rigorous academic standards and strong gifted and talented tracking from primary. Uses CAT4 throughout; students on the gifted register receive differentiated planning and enrichment. Strong Sixth Form outcomes and university destinations.</p>
            <p className="text-sm text-gray-500">Curriculum: British (GCSE + A-level) · Locations: Jumeirah and Arabian Ranches</p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-2">GEMS Wellington International School</h3>
            <p className="text-gray-600 text-sm mb-2">Outstanding KHDA rating. One of the largest British-curriculum schools in Dubai with strong academic tracking from Year 1. Offers a broad range of enrichment including competitive Maths, Science Olympiad preparation and an extensive extracurricular programme. Accepts from FS1; admissions assessments include CAT4 from Year 3 upwards.</p>
            <p className="text-sm text-gray-500">Curriculum: British (GCSE + A-level) · Location: Al Sufouh</p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Repton School Dubai</h3>
            <p className="text-gray-600 text-sm mb-2">The UAE campus of the UK independent school Repton. Outstanding KHDA rating. Selective at Sixth Form but accepts wider ability range in lower years. Known for strong pastoral provision alongside academics. Uses CAT4 for admissions from Year 3. Good track record for subject acceleration and early GCSE entry for academically advanced students.</p>
            <p className="text-sm text-gray-500">Curriculum: British (GCSE + A-level/IB) · Location: Nad Al Sheba</p>
          </div>

          <div className="border border-gray-100 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Kings&apos; School Dubai / Kings&apos; School Al Barsha</h3>
            <p className="text-gray-600 text-sm mb-2">Primary-focused Outstanding schools (FS1–Year 6) with a strong academic reputation and structured G&T programme. Uses CAT4 from Year 2 for monitoring and parent reporting. Consistently produces students who go on to competitive secondary schools including Dubai College. Good choice for younger gifted children where primary-level provision quality matters most.</p>
            <p className="text-sm text-gray-500">Curriculum: British · Locations: Umm Suqeim and Al Barsha · FS1–Year 6</p>
          </div>
        </div>

        <Callout>
          <strong className="text-indigo-900">Abu Dhabi note:</strong> For families in Abu Dhabi, BSAK (British School Al Khubairat) and Brighton College Abu Dhabi offer comparable gifted provision under the ADEK inspection framework. Both are Outstanding-rated and use CAT4 for admissions.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Read a KHDA Inspection Report</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          All KHDA inspection reports are available free at <strong>khda.gov.ae</strong>. Each school
          is inspected every 1–3 years. When reviewing a report for gifted suitability, look for:
        </p>
        <ul className="space-y-3 mb-4">
          <Bullet><strong>Overall effectiveness rating</strong> — Outstanding, Very Good, Good, Acceptable, Weak or Very Weak. Only Outstanding and Very Good schools are worth considering for a gifted child.</Bullet>
          <Bullet><strong>Students&apos; achievement section</strong> — look for "high achievers" or "most able" references. Are they described as making "strong" or "outstanding" progress, or just "acceptable"?</Bullet>
          <Bullet><strong>Teaching and learning quality</strong> — does the report mention that teachers plan differentiated work for high-ability students? Generic praise is less useful than specific evidence.</Bullet>
          <Bullet><strong>Leadership commentary</strong> — does the school have a strategy for gifted students? Is it mentioned as a strength or an area for development?</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          A school rated Outstanding four years ago may have changed significantly. Check the date
          of the most recent inspection and, if it is more than two years old, ask the school directly
          about any KHDA visits since then.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The 2026 Admissions Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most Dubai British-curriculum schools follow a similar admissions calendar:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>September–October 2026:</strong> Applications open for September 2027 entry. Visit school open days and submit enquiry forms. Popular schools receive more applications than they can interview.</Bullet>
          <Bullet><strong>November–January:</strong> CAT4 assessment appointments offered. The test takes approximately 45–60 minutes and is administered at the school. Bring school reports from the previous two years.</Bullet>
          <Bullet><strong>January–March 2027:</strong> Offers issued. Selective schools (Dubai College) make offers on strict merit rank order. Most other schools offer on availability and profile fit.</Bullet>
          <Bullet><strong>March–April 2027:</strong> Acceptance deadline. Places not accepted by the deadline are reallocated.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Apply to 3–4 schools simultaneously. Do not wait for one result before applying to another
          — popular schools close waiting lists quickly. For Dubai College, the application window is
          strictly limited; missing it means waiting another full year.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Benchmarking Before the Admissions Round</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CAT4 is a timed cognitive ability test covering verbal, quantitative, non-verbal and spatial
          reasoning. It is not a subject knowledge test — preparation in the traditional sense is
          limited. However, knowing your child&apos;s likely CAT4 performance in advance allows you
          to target schools realistically: applying to Dubai College with a child likely to score SAS
          100 will end in disappointment; applying to GEMS Wellington or Repton with SAS 115 is a
          strong position.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A standardised assessment before the admissions round gives you objective data to work with.
          Eduentry&apos;s free adaptive test produces a score on the same mean-100, SD-15 scale as CAT4
          — directly comparable. It takes under an hour and requires no registration. Use it as a
          starting point for realistic school targeting and to identify any cognitive areas worth
          developing before the formal assessment.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: '/blog/uae-cat4-test-guide', tag: 'Guide', title: 'UAE CAT4 Test Guide 2026: SAS Bands and School Requirements' },
            { href: '/blog/uae-gifted-programs-guide', tag: 'Guide', title: 'Gifted Programs in UAE International Schools' },
            { href: '/blog/uae-british-curriculum-school-admissions', tag: 'Guide', title: 'British Curriculum School Admissions in Dubai and Abu Dhabi' },
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

  'dubai-high-school-gcse-ib-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Raising a secondary-school-age child in Dubai means navigating an education landscape that differs fundamentally from most home countries. With over 100 KHDA-licensed schools in the city, the curriculum choice — GCSE and A Level, or IB Diploma? — is simultaneously a university strategy decision that every family must make independently.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Does Secondary School Work in Dubai?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Secondary education in Dubai is delivered by private international schools overseen by the KHDA (Knowledge and Human Development Authority). Government schools teach primarily in Arabic, making private international schools the only practical option for most expatriate families.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          At British-curriculum schools — the most common type in Dubai — secondary follows this structure:
        </p>
        <ul className="space-y-2 mb-4">
          <Bullet><strong>Year 7–9 (ages 11–14):</strong> Lower secondary; the years when core academic foundations are built.</Bullet>
          <Bullet><strong>Year 10–11 (ages 14–16):</strong> GCSE stage. Students select 8–10 subjects and sit GCSE examinations at the end of Year 11.</Bullet>
          <Bullet><strong>Year 12–13 (ages 16–18):</strong> Sixth Form / A Level. Students specialise in 3–4 A Level subjects; these results form the basis of university applications.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          At IB-curriculum schools, the IB Diploma Programme covers the final two years (ages 16–18) as an alternative to A Level.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">GCSE + A Level vs IB Diploma: Which Is Right for Your Child?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Choosing a curriculum in Dubai is effectively choosing a university pathway. Two main routes dominate:
        </p>
        <div className="overflow-x-auto mb-6 not-prose">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Criterion</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">GCSE + A Level</th>
                <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">IB Diploma</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Age range</td>
                <td className="border border-gray-200 px-4 py-2">14–18 (GCSE + A Level)</td>
                <td className="border border-gray-200 px-4 py-2">16–18 (DP only)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">UK universities</td>
                <td className="border border-gray-200 px-4 py-2">Direct route — strongest pathway</td>
                <td className="border border-gray-200 px-4 py-2">Accepted; sufficient for most programmes</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">US / Canada universities</td>
                <td className="border border-gray-200 px-4 py-2">Accepted</td>
                <td className="border border-gray-200 px-4 py-2">Strong pathway; treated like AP</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-medium">Subject breadth</td>
                <td className="border border-gray-200 px-4 py-2">Deep specialisation (3–4 subjects)</td>
                <td className="border border-gray-200 px-4 py-2">Broad programme (6 subjects + TOK/EE/CAS)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-medium">Best for</td>
                <td className="border border-gray-200 px-4 py-2">Clear target UK or Australian university</td>
                <td className="border border-gray-200 px-4 py-2">Global options, especially US/Canada/Netherlands</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Students with a clear target — a specific UK or Australian university — generally find A Level the cleaner route. Families keeping options open across multiple countries typically benefit from the IB&apos;s wider international recognition.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing a School: The KHDA Rating System</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          KHDA inspects Dubai&apos;s private schools annually and rates them across five levels: <strong>Outstanding</strong>, Very Good, Good, Acceptable, and Weak. This rating is the most reliable publicly available source for school quality comparison.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Outstanding-rated secondary schools offering British or IB curricula include:
        </p>
        <ul className="space-y-2 mb-4">
          <Bullet>GEMS Wellington International School — British curriculum, strong Sixth Form</Bullet>
          <Bullet>Jumeirah English Speaking School (JESS) — British curriculum</Bullet>
          <Bullet>Dubai College — British curriculum, secondary-only, selective entry</Bullet>
          <Bullet>Repton School Dubai — British curriculum, boarding option available</Bullet>
          <Bullet>GEMS World Academy — IB Diploma and MYP curriculum</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          Ratings are updated annually. Current listings are available on the KHDA&apos;s official website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">University Pathways from Dubai Secondary Schools</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A student graduating from a Dubai school with A Level or IB Diploma results has several clear routes:
        </p>
        <ul className="space-y-2 mb-6">
          <Bullet><strong>UK universities:</strong> Direct application through UCAS. A Level results are released in July; conditional offers are typically received earlier in the year.</Bullet>
          <Bullet><strong>US / Canada:</strong> Common App or direct university application. IB Diploma is particularly well recognised at US institutions and can earn college credit.</Bullet>
          <Bullet><strong>Netherlands / Europe:</strong> Many Dutch universities accept A Level and IB for English-taught programmes; additional language requirements may apply by country.</Bullet>
          <Bullet><strong>Australia:</strong> Australian universities accept both A Level and IB; specific grade thresholds vary by course and institution.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Benchmarking Your Child&apos;s Academic Level in Dubai</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          School grades in Dubai vary significantly across curricula and schools. A student&apos;s readiness for GCSE or IB — measured against international peers rather than classmates — is best assessed through a standardised tool independent of school grades.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Adaptive assessments in verbal reasoning, numerical reasoning, and spatial ability measure cognitive potential independent of curriculum. They show where a student sits globally and identify areas worth developing before high-stakes examinations.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          {[
            { href: '/blog/uae-british-curriculum-school-admissions', tag: 'Guide', title: 'British Curriculum School Admissions in Dubai and Abu Dhabi' },
            { href: '/blog/uae-cat4-test-guide', tag: 'Guide', title: 'UAE CAT4 Test Guide: SAS Bands and School Requirements' },
            { href: '/blog/dubai-high-school-gcse-ib-guide', tag: 'Guide', title: 'Dubai High School: GCSE, A Level & IB Guide for International Families' },
            { href: '/blog/how-does-your-child-compare-globally', tag: 'Benchmarking', title: 'How Does Your Child Compare Globally? PISA 2025 Results' },
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
