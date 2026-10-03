import Link from 'next/link'
import { Bullet, Callout, Check } from './blog-components'

export const UK_CONTENT_UAE: Record<string, React.ReactNode> = {

  'uae-cat4-test-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        If your child is applying to a British-curriculum school in Dubai, Abu Dhabi, or elsewhere in
        the UAE, the CAT4 will almost certainly appear somewhere in the admissions or placement process.
        Yet most parents receive the report — a page of numbers, percentiles, and stanines — with little
        guidance on what any of it means. This guide explains exactly what the CAT4 measures, how scores
        are calculated, and how UAE schools use the results to make decisions about teaching groups,
        gifted identification, and admissions.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the CAT4 Score Report Actually Means</h2>
        <p><strong>CAT4 produces a Standard Age Score (SAS) with a mean of 100 and a standard deviation of 15 — the same scale used by most cognitive ability assessments worldwide.</strong> A score of exactly 100 means your child performed at the average for their age group. A score of 115 places them at the 84th percentile — better than 84 in every 100 children of the same age. A score of 127 reaches the 96th percentile.</p>
        <p className="text-gray-700 leading-relaxed mb-4 mt-4">
          CAT4 assesses four cognitive batteries, each producing its own SAS, which combine into an overall
          profile. Understanding the four batteries helps parents interpret which areas are strengths and
          which may need support.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { subject: 'Verbal Reasoning', detail: 'Measures the ability to reason and problem-solve using words. Closely linked to literacy and academic language. Children who read widely tend to score higher in this battery.' },
            { subject: 'Quantitative Reasoning', detail: 'Assesses number concepts, relationships, and numerical logic — but is not the same as school maths. It tests underlying mathematical reasoning rather than curriculum knowledge.' },
            { subject: 'Non-Verbal Reasoning', detail: 'Pattern recognition and abstract thinking using shapes and symbols. This battery is considered the purest measure of fluid intelligence and is less influenced by language background.' },
            { subject: 'Spatial Ability', detail: 'Tests the ability to visualise and mentally manipulate 2D and 3D shapes. Strongly predictive of performance in STEM subjects, particularly engineering and physical sciences.' },
          ].map(({ subject, detail }) => (
            <div key={subject} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{subject}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout>
          CAT4 also produces a <strong className="text-indigo-900">stanine score</strong> (1–9) alongside the SAS. Stanines 7, 8, and 9 correspond to the top 23% of the age-group population. Most UAE schools use stanine 7+ (SAS roughly 112+) as the threshold for gifted identification and enrichment programme eligibility. Stanine 5 represents the average band (SAS 96–104).
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How UAE Schools Use CAT4 Results</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In the UAE, CAT4 serves three distinct purposes depending on the school and the point in a
          child&apos;s education. Understanding which purpose applies to your situation is essential
          before interpreting a score report.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>
            <strong>Teaching group placement.</strong> The majority of British-curriculum schools in Dubai and Abu Dhabi use CAT4 to assign students to sets or streams within year groups. A significant gap between a child&apos;s SAS and a group&apos;s typical range can be a prompt to request a review or provide additional support.
          </Bullet>
          <Bullet>
            <strong>Gifted identification.</strong> KHDA (Knowledge and Human Development Authority) requires all Dubai schools to identify and make specific provision for high-ability students. CAT4 SAS 112+ (stanine 7+) is the most commonly applied threshold, though some schools set it higher at 120+ for accelerated programmes.
          </Bullet>
          <Bullet>
            <strong>Admissions decisions.</strong> A small number of UAE schools — including some rated Outstanding by KHDA — use CAT4 as a selective admissions instrument. Dubai College, for example, requires CAT4 SAS 115+ for Year 7 entry. Most schools use CAT4 alongside English and Maths assessments rather than as a standalone criterion.
          </Bullet>
        </ul>
        <Callout color="amber">
          CAT4 scores are <strong>not fixed</strong>. They measure reasoning at a point in time. A child&apos;s profile can shift meaningfully between assessments taken 12–18 months apart, particularly during the primary years. If your child scored below expectations, a reassessment rather than a fixed-ability assumption is the appropriate response.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Score Benchmarks UAE Parents Should Know</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">SAS Range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Stanine</th>
                <th className="text-left p-4 font-semibold text-gray-700">Percentile</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical Implication in UAE Schools</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['120+', '8–9', '91st+', 'Eligible for most gifted programmes; competitive for selective admissions'],
                ['112–119', '7', '79th–90th', 'KHDA gifted threshold; enrichment provision expected'],
                ['100–111', '5–6', '50th–76th', 'Average to above average; mainstream teaching groups'],
                ['89–99', '4', '24th–49th', 'Below average for age; some additional support may be appropriate'],
                ['Below 89', '1–3', 'Below 24th', 'May indicate learning needs; discuss with school SENCO'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 text-gray-600">{row[2]}</td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          CAT4 is administered by GL Assessment and is sat under timed conditions in school. Parents cannot
          request an independent CAT4 session — it is a school-administered assessment. If you want to
          understand your child&apos;s cognitive profile ahead of a school-administered CAT4, an independent
          standardised assessment covering the same four cognitive domains provides an equivalent and
          comparable baseline.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/uae-british-curriculum-school-admissions', tag: 'Guide', title: 'British Curriculum School Admissions in Dubai and Abu Dhabi: A Complete Guide' },
            { href: '/blog/uae-gifted-programs-guide', tag: 'Guide', title: 'Gifted Education in the UAE: How International Schools Identify High Ability Students' },
            { href: '/blog/what-is-a-standardised-score', tag: 'Guide', title: 'What Is a Standardised Score? Mean 100, Percentiles and SAS Bands Explained' },
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
        The UAE has one of the highest concentrations of international school students in the world, and
        its approach to gifted education reflects that. Regulatory requirements from KHDA and ADEK mean
        that unlike in many countries, gifted provision in UAE international schools is not left to
        individual school policy — it is mandated. This guide explains how UAE schools identify gifted
        and high-ability students, what provision they are required to offer, and how families can
        navigate the process to ensure their child&apos;s potential is recognised and supported.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How UAE Schools Identify Gifted Students</h2>
        <p><strong>UAE international schools identify gifted students primarily through CAT4, using a threshold of SAS 112+ (stanine 7 or above) as the standard criterion for high-ability classification.</strong> This places identified students in the top 21% of the age-group population — a threshold that is broadly consistent with KHDA&apos;s requirement that all Dubai schools demonstrate differentiated provision for their highest-attaining learners.</p>
        <p className="text-gray-700 leading-relaxed mb-4 mt-4">
          CAT4 is the dominant identification tool because it provides a standardised, curriculum-independent
          measure that works across the multilingual, multinational student populations typical of UAE
          international schools. A student who has recently arrived from another country and whose English
          is still developing can still achieve a high SAS on the non-verbal and spatial batteries —
          which is why profile analysis matters as much as the overall score.
        </p>
        <Callout>
          The MENA region&apos;s highest gifted identification rates are found in UAE international schools. A 2024 GL Assessment analysis found that UAE international school cohorts produce a higher proportion of CAT4 stanine 8–9 scores than equivalent cohorts in the UK — likely reflecting the self-selecting, educationally motivated families who choose UAE international education.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What KHDA Requires Schools to Provide</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          KHDA&apos;s inspection framework requires all Dubai schools to demonstrate that they identify
          students with high ability and provide differentiated learning experiences for them. This is
          not a recommendation — schools can be downgraded if inspectors find insufficient provision for
          their most able learners. The same requirement applies in Abu Dhabi under ADEK.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>
            <strong>Identification protocols</strong> — schools must document how they identify high-ability students, which assessments they use, and at what threshold. CAT4 is the most common instrument; some schools supplement it with teacher nomination and portfolio evidence.
          </Bullet>
          <Bullet>
            <strong>Curriculum differentiation</strong> — the learning programme for identified students must extend beyond the standard curriculum. This may include higher-level questioning, open-ended projects, independent research, or subject acceleration.
          </Bullet>
          <Bullet>
            <strong>Enrichment opportunities</strong> — extracurricular provision for high-ability students, such as Olympiad preparation, debating, research competitions, or STEM challenges, is viewed positively by KHDA inspectors.
          </Bullet>
          <Bullet>
            <strong>Reporting to parents</strong> — schools must communicate to parents when a child has been identified as high-ability and explain what provision is in place. If your child has a CAT4 SAS 112+ and you have not received a communication about gifted provision, you are entitled to ask the school directly.
          </Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enrichment Options Available in UAE International Schools</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The depth of gifted provision varies significantly between schools even within the same KHDA
          rating band. Outstanding-rated schools tend to offer the most developed programmes; the
          following options represent what is available at the better-resourced end of the market.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { prog: 'GEMS Scholar Programme', detail: 'Available across the GEMS network of schools in Dubai and Abu Dhabi. Provides accelerated curriculum pathways, research projects, and external competition entry for identified high-ability students.' },
            { prog: 'Subject Acceleration', detail: 'High-ability students can be moved up a year group for specific subjects (most commonly Maths and Science) while remaining with their age cohort for other subjects. Requires parental consent and strong CAT4 evidence.' },
            { prog: 'Olympiad and Competition Preparation', detail: 'Many UAE international schools enter students for the International Mathematical Olympiad, Science Olympiad, and regional debating competitions. Preparation is typically offered as an after-school club.' },
            { prog: 'Gifted and Talented Coordinators', detail: 'Larger schools employ a dedicated G&T coordinator who oversees identification, provision planning, and parent communication. If your school has one, this is your primary contact for gifted provision queries.' },
          ].map(({ prog, detail }) => (
            <div key={prog} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{prog}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout color="emerald">
          If you believe your child may be high ability but has not been identified by their school, an independent standardised cognitive assessment can provide the objective evidence needed to open a conversation with the school. CAT4-equivalent assessments covering the same four cognitive domains produce comparable SAS scores that schools can use for identification purposes.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/uae-cat4-test-guide', tag: 'Guide', title: 'CAT4 Test Guide for UAE Parents: What the Test Measures and How Scores Work' },
            { href: '/blog/dubai-gifted-schools-2026', tag: 'Guide', title: 'Finding a School in Dubai for Gifted Children: Top Programs and How to Apply in 2026' },
            { href: '/blog/uae-international-school-entrance-exams', tag: 'Assessment', title: 'UAE International School Entrance Exams: CAT4, ISEE, IB and What Each Curriculum Requires' },
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

  'uae-international-school-entrance-exams': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The UAE&apos;s international school landscape is defined by curriculum diversity. British, American,
        IB, French, Indian, and other national curricula all operate within the same city, and each carries
        its own entrance assessment requirements. Choosing the wrong curriculum for your child — or
        arriving at the admissions process without knowing what assessment to expect — is one of the most
        common and most avoidable mistakes UAE families make. This guide maps the entrance exam landscape
        across the major curriculum types and explains what competitive performance looks like at each.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Exam for Which Curriculum</h2>
        <p><strong>UAE international school entry typically requires one of three assessment types: CAT4 (used by British-curriculum schools), ISEE (used by American-curriculum schools), or internal assessment (used by most IB schools).</strong> The curriculum your child targets determines which assessment to prepare for — a child who sits the ISEE having prepared only for CAT4-style reasoning questions will be underprepared for the ISEE&apos;s verbal and maths sections, and vice versa.</p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mt-4 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Curriculum Type</th>
                <th className="text-left p-4 font-semibold text-gray-700">Primary Entry Assessment</th>
                <th className="text-left p-4 font-semibold text-gray-700">Competitive Threshold</th>
                <th className="text-left p-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['British (GCSE / A-Level)', 'CAT4 + English & Maths assessment', 'SAS 100+ general; SAS 112+ gifted track; SAS 115+ for selective schools (e.g. Dubai College)', 'CAT4 is administered in school; no independent sitting possible'],
                ['American (AP / Common Core)', 'ISEE (Independent School Entrance Exam)', 'Stanine 5+ for general entry; stanine 7+ for selective programmes', 'ISEE has four levels: Primary, Lower, Middle, Upper. Register via ERB (erblearn.org)'],
                ['IB (PYP / MYP / DP)', 'Internal assessment + previous school reports', 'No fixed threshold; school-specific. Strong reports + positive interview', 'IB schools use holistic review. CAT4 scores are accepted as supplementary evidence'],
                ['Indian (CBSE / ICSE)', 'Maths and English written test + previous reports', 'School-specific; typically above 70% on entry tests', 'Less use of standardised cognitive assessments; curriculum-knowledge tests more common'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-sm">{row[1]}</td>
                  <td className="p-4 text-gray-600 text-sm">{row[2]}</td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CAT4 vs ISEE: Key Differences for UAE Families</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CAT4 and ISEE are fundamentally different in what they measure and how they are scored. Families
          who have experienced one and are moving to the other frequently underestimate how different the
          preparation demands are.
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet>
            <strong>CAT4 measures cognitive ability, not curriculum knowledge.</strong> It is specifically designed to be independent of prior teaching. A student who has been in education in another country, in another language, can still perform strongly. The four batteries (verbal, quantitative, non-verbal, spatial) test reasoning, not recall.
          </Bullet>
          <Bullet>
            <strong>ISEE measures both reasoning and curriculum knowledge.</strong> The verbal section includes vocabulary questions that require specific word knowledge. The maths section tests grade-level content. A student with strong reasoning but gaps in American curriculum maths will underperform relative to their true ability.
          </Bullet>
          <Bullet>
            <strong>ISEE uses percentile ranks within applicant pools, not age norms.</strong> Because ISEE is taken primarily by students applying to selective schools, the comparison group is already above average — a stanine 5 on ISEE represents a higher raw performance than stanine 5 on a general population assessment.
          </Bullet>
          <Bullet>
            <strong>CAT4 scores are used by schools throughout a child&apos;s career</strong>, not just at entry. A score sits in a child&apos;s file and informs teaching group placement, gifted identification, and review meetings for years. ISEE results are typically used only for the admissions decision.
          </Bullet>
        </ul>
        <Callout>
          For families considering both British and American curriculum schools simultaneously, it is worth running a baseline cognitive assessment before committing to either ISEE or CAT4 preparation. A child&apos;s reasoning profile often indicates which assessment type will produce their strongest results.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Preparing for UAE International School Entry</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most effective preparation strategy depends on the assessment type, but two principles apply
          across all of them: establish a baseline early, and focus on understanding rather than drilling.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>Identify your target schools and confirm which assessment they use before beginning any preparation. This sounds obvious but is frequently overlooked.</Check>
          <Check>Run a baseline assessment 3–6 months before your target admissions window. This tells you where your child currently stands and where preparation effort is most needed.</Check>
          <Check>For CAT4: focus on question-type familiarity (particularly non-verbal and spatial, which are rarely encountered in everyday schoolwork) rather than content cramming.</Check>
          <Check>For ISEE: address vocabulary and grade-level maths gaps systematically. The verbal section rewards wide reading over the long term more than short-term drilling.</Check>
          <Check>Contact the school admissions office directly to ask about the specific format and timing of their entry assessment. Some schools use a shortened version of CAT4 or an internally developed test rather than the full instrument.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/uae-cat4-test-guide', tag: 'Guide', title: 'CAT4 Test Guide for UAE Parents: What the Test Measures and How Scores Work' },
            { href: '/blog/uae-british-curriculum-school-admissions', tag: 'Guide', title: 'British Curriculum School Admissions in Dubai and Abu Dhabi: A Complete Guide' },
            { href: '/blog/global-academic-benchmarks-report-2026', tag: 'Research', title: 'Global Academic Benchmarks Report 2026: Where Do Students Stand Internationally?' },
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

  'dubai-gifted-schools-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Dubai&apos;s international school market has grown to over 200 schools, but the number of institutions
        that offer genuinely enriched, differentiated provision for gifted children — and that have the
        admissions processes to match — remains much smaller. This guide identifies the schools in Dubai
        with the strongest reputations and most structured programmes for high-ability students in 2026,
        explains what entry to each typically requires, and gives families the practical guidance they need
        to apply successfully.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes a School &apos;Good for Gifted Children&apos; in Dubai</h2>
        <p><strong>The strongest schools for gifted children in Dubai combine KHDA Outstanding ratings with documented gifted identification protocols, meaningful curriculum extension, and a track record of high-ability students reaching top university destinations.</strong> A school can be KHDA Outstanding without offering exceptional gifted provision — the rating reflects overall quality across all students, not specifically high-ability provision.</p>
        <p className="text-gray-700 leading-relaxed mb-4 mt-4">
          When evaluating schools for a high-ability child, families should ask three specific questions
          beyond the KHDA rating: How does the school identify gifted students? What does the learning
          experience look like for an identified student on a typical Tuesday? And what are the recent
          university outcomes for the school&apos;s top academic cohort?
        </p>
        <Callout>
          KHDA inspection reports are publicly available at khda.gov.ae. The section on &apos;Achievement of Students with High Prior Attainment&apos; within each report is the most relevant section for families of gifted children — it describes specifically what the school does for its highest-attaining students and how well they progress relative to their potential.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Top Schools for Gifted Children in Dubai 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The following schools are consistently identified by educational consultants, inspection reports,
          and the outcome data for high-attaining students as the best options for gifted children in
          Dubai. Entry requirements and application timelines are current for the 2025–26 admissions cycle.
        </p>
        <div className="space-y-5 mb-6">
          {[
            {
              rank: '1',
              school: 'Dubai College',
              khda: 'Outstanding',
              why: 'The most academically selective school in Dubai, Dubai College operates on a grammar school model within the UAE. It admits only students who can demonstrate high academic ability — CAT4 SAS 115+ is the standard requirement for Year 7 entry — and its sixth-form outcomes consistently place it among the top British-curriculum schools in the MENA region.',
              entry: 'CAT4 SAS 115+ for Year 7. English and Maths assessment. Interview. Apply 18–24 months ahead.',
              fees: 'AED 60,000–75,000/year',
            },
            {
              rank: '2',
              school: 'GEMS Wellington International School',
              khda: 'Outstanding',
              why: 'GEMS Wellington operates the Scholar Programme — one of the most structured gifted provision frameworks in the UAE. Identified students (CAT4 SAS 112+) access an enriched curriculum pathway, external competition preparation, and university guidance from Year 9. The school has a large, well-resourced faculty and consistently strong A-Level outcomes.',
              entry: 'CAT4 + English and Maths assessment. No fixed SAS threshold for general admission, but Scholar Programme requires SAS 112+. Apply 12–18 months ahead.',
              fees: 'AED 55,000–85,000/year',
            },
            {
              rank: '3',
              school: 'Repton School Dubai',
              khda: 'Outstanding',
              why: 'A branch of the UK independent school Repton (founded 1557), Repton Dubai offers the combination of a strong British academic tradition and Dubai-specific enrichment. Gifted students benefit from small class sizes, access to Oxbridge preparation from Year 12, and a structured co-curricular programme. The school&apos;s non-verbal reasoning cohort consistently outperforms UK national norms.',
              entry: 'CAT4 + English and Maths assessment. Apply 12 months ahead for standard entry; earlier for Foundation and Year 7.',
              fees: 'AED 65,000–82,000/year',
            },
          ].map(({ rank, school, khda, why, entry, fees }) => (
            <div key={school} className="border border-gray-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">{rank}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="font-semibold text-gray-900 text-lg">{school}</div>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">{khda}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{why}</p>
                  <div className="text-sm text-gray-500 mb-1"><strong className="text-gray-700">Entry:</strong> {entry}</div>
                  <div className="text-sm text-gray-500"><strong className="text-gray-700">Fees:</strong> {fees}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Apply Successfully in 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Applications to Dubai&apos;s top schools for gifted children are governed by a combination of timing,
          documentation quality, and assessment performance. The following steps reflect current best
          practice for families targeting the schools above.
        </p>
        <ul className="space-y-3 mb-6">
          <Check>Run a baseline cognitive assessment at least 6 months before your target admissions window. For Dubai College Year 7 entry, this means testing in Year 5 at the latest. Knowing your child&apos;s current SAS allows you to identify whether preparation is needed and in which battery.</Check>
          <Check>Register interest on the school waiting list as early as possible — ideally 1–2 years ahead of target entry. Outstanding-rated Dubai schools fill Year 7 and Foundation places before the academic year&apos;s formal admissions cycle opens.</Check>
          <Check>Prepare school reports carefully: the most recent two years of reports matter most, but if your child&apos;s current school uses a non-standardised grading system, consider commissioning an independent assessment report that provides a CAT4-comparable SAS for the admissions pack.</Check>
          <Check>Do not wait for the school to contact you. After submitting an application, follow up every 2–3 months to confirm your place on the waiting list and express continued interest.</Check>
          <Check>If your child is assessed and does not receive an offer first time, ask the school for specific feedback on the assessment results. This allows targeted preparation for a re-application in the following cycle.</Check>
        </ul>
        <Callout color="amber">
          Dubai College is the only school in Dubai that publishes a specific CAT4 SAS threshold for admission (SAS 115+ for Year 7). For all other schools, the effective competitive threshold is determined by the profile of each year&apos;s applicant cohort rather than a fixed minimum score. In a strong year, this can mean that SAS 110 is insufficient for a school that would have accepted SAS 105 the previous year.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/uae-cat4-test-guide', tag: 'Guide', title: 'CAT4 Test Guide for UAE Parents: What the Test Measures and How Scores Work' },
            { href: '/blog/uae-gifted-programs-guide', tag: 'Guide', title: 'Gifted Education in the UAE: How International Schools Identify High Ability Students' },
            { href: '/blog/uae-british-curriculum-school-admissions', tag: 'Guide', title: 'British Curriculum School Admissions in Dubai and Abu Dhabi: A Complete Guide' },
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
