import Link from 'next/link'
import { Bullet, Callout, Check } from './blog-components'

export const UK_CONTENT_NETHERLANDS: Record<string, React.ReactNode> = {

  'netherlands-cito-toets-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        At the end of Dutch primary school, every child in Group 8 sits a standardised placement test —
        known until 2024 as the Cito Eindtoets and now officially called the Doorstroomtoets. The outcome
        of this test, combined with the teacher&apos;s recommendation, determines which level of secondary
        education a child enters. Understanding how the scoring works, what the thresholds mean, and how
        the teacher&apos;s advice interacts with the test result is essential for any family navigating the
        Dutch primary-to-secondary transition.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is the Doorstroomtoets?</h2>
        <p><strong>The Doorstroomtoets is a national standardised test taken by Dutch children in Group 8 (age 11–12), producing a score on a scale from 500 to 550.</strong> A score of 545 or above is generally associated with a recommendation for VWO, the highest level of Dutch secondary education.</p>
        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
          The test replaced the well-known Cito Eindtoets in the 2023–24 school year as part of a broader
          reform aimed at reducing socioeconomic bias in school placement. Like its predecessor, it assesses
          language, mathematics, and reading comprehension. Unlike the old Cito, the Doorstroomtoets is
          taken in February (rather than April or May), meaning the teacher&apos;s recommendation must be
          issued before the test result arrives — reversing the previous order in which the test score
          informed the teacher&apos;s advice.
        </p>
        <Callout>
          <strong className="text-indigo-900">Key change since 2024:</strong> The schooladvies (teacher&apos;s
          recommendation) is now issued before the Doorstroomtoets result is known. If the test result is
          higher than the initial advice, the school must reconsider the recommendation upward (bijstellen).
          If lower, the school may keep the original recommendation unchanged.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Score Ranges and Secondary School Levels</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The 500–550 scale is designed so the average Group 8 pupil scores around 535. The score bands
          correspond to the main levels of Dutch secondary education, though exact thresholds vary by school
          and region.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Score Range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical Recommendation</th>
                <th className="text-left p-4 font-semibold text-gray-700">Secondary Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['545–550', 'VWO', 'Pre-university (6 years, direct entry to university)'],
                ['537–544', 'Havo / Havo–VWO', 'Higher general secondary (5 years, entry to HBO / university of applied sciences)'],
                ['525–536', 'Vmbo-TL / Havo–Vmbo', 'Upper-track vocational / general secondary'],
                ['500–524', 'Vmbo (kb/bb/gl)', 'Vocational secondary — practical tracks'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-800 font-medium">{row[1]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          These are indicative bands, not hard cut-offs. Individual secondary schools set their own
          admissions criteria, and many accept pupils within one level of their stated recommendation.
          A child with a 544 is often admitted to VWO if the teacher&apos;s advice supports it.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of the Schooladvies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The schooladvies — the formal written recommendation from the Group 8 teacher or school — carries
          equal legal weight to the test score in determining secondary placement. The advice is based on
          observations of the child across the entire primary school career: cognitive performance, work
          habits, motivation, social development, and learning attitude. It is not simply a translation of
          marks into a level.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Under the 2024 reforms, if the Doorstroomtoets result is higher than the schooladvies, the school
          is legally obliged to review the recommendation within ten school days. In practice, this review
          frequently leads to an upward revision (bijstelling), particularly where the original advice was
          borderline. Schools are not obliged to revise downward if the test result is lower than the advice.
        </p>
        <Callout>
          <strong className="text-indigo-900">Important for parents:</strong> If you believe your child&apos;s
          school advice underestimates their ability, the Doorstroomtoets is your most reliable lever —
          a score above the schooladvies threshold triggers a mandatory review. You are entitled to a
          formal meeting (gesprek) to discuss the outcome.
        </Callout>
        <div className="mt-4 space-y-2">
          <Bullet>Schooladvies is issued in February, before the Doorstroomtoets result arrives</Bullet>
          <Bullet>If the test score is higher, the school must reconsider within 10 school days</Bullet>
          <Bullet>Parents can request a written explanation (motivering) for any advice</Bullet>
          <Bullet>A combined Havo/VWO recommendation allows entry to either level after Year 1 of secondary school</Bullet>
          <Bullet>Approximately 15% of pupils receive a combined (dubbel) recommendation spanning two levels</Bullet>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Prepare Your Child</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Doorstroomtoets is not an exam that rewards cramming, but it does reward familiarity with
          question formats and comfortable time management. The test covers material from the entire
          primary school curriculum, so any gaps in maths fundamentals or reading comprehension will show.
        </p>
        <div className="space-y-2">
          <Check>Review Dutch language skills — reading comprehension, vocabulary, and spelling</Check>
          <Check>Consolidate maths: fractions, percentages, measurement, and word problems</Check>
          <Check>Work through practice Cito or Doorstroomtoets papers under timed conditions</Check>
          <Check>Maintain open conversations about the test to reduce anxiety — the schooladvies can protect your child even if the test day goes badly</Check>
          <Check>Ensure your child knows what to do when stuck: move on, return later, do not leave blanks</Check>
        </div>
        <p className="text-gray-700 leading-relaxed mt-4">
          Most primary schools provide preparation materials. Commercial test-prep services exist in the
          Netherlands but are less prevalent than in the UK 11+ market. A child who is working steadily
          at the appropriate curriculum level typically does not need external tutoring.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/netherlands-vwo-gymnasium-guide', tag: 'Guide', title: 'VWO and Gymnasium in the Netherlands: Entry Requirements and How to Qualify' },
            { href: '/blog/netherlands-gifted-education-hoogbegaafd', tag: 'Assessment', title: 'Gifted Education in the Netherlands: Hoogbegaafdheid, WISC-V and What Schools Offer' },
            { href: '/blog/what-is-a-standardised-score', tag: 'Guide', title: 'What Is a Standardised Score? A Plain-English Explanation' },
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

  'netherlands-vwo-gymnasium-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        VWO — Voorbereidend Wetenschappelijk Onderwijs — is the highest level of Dutch secondary education
        and the direct route to university. Spanning six years, it culminates in a national examination
        (eindexamen) that grants direct access to Dutch universities (WO). For ambitious families in the
        Netherlands, understanding what VWO entails, how Gymnasium differs, what the entry requirements
        are, and what life inside a VWO school actually looks like is the foundation for making the right
        secondary school choice.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is VWO?</h2>
        <p><strong>VWO is the six-year pre-university track in the Dutch secondary school system, attended by approximately 20% of Dutch students and offering direct entry to Dutch universities (WO) on completion.</strong> It is the only secondary route that leads straight to an academische bachelor programme without an intermediate step.</p>
        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
          Dutch secondary education is divided into three main streams: VMBO (four years, primarily
          vocational), HAVO (five years, leading to HBO/universities of applied sciences), and VWO (six
          years, leading to WO universities). VWO itself has two main variants: Atheneum and Gymnasium.
          Both lead to the same university entrance qualification; the difference lies in the compulsory
          curriculum.
        </p>
        <Callout>
          <strong className="text-indigo-900">VWO vs Gymnasium:</strong> Atheneum is the standard VWO
          track — modern languages, sciences, and humanities. Gymnasium adds compulsory Latin and/or
          Greek, and many Gymnasium schools have a distinct academic culture with an emphasis on classical
          learning. Both routes are equally valid for Dutch university admission.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Entry Requirements for VWO</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Entry to VWO requires a combination of a favourable schooladvies from the Group 8 teacher and
          a Doorstroomtoets score in the VWO range. There is no competitive entrance examination in most
          Dutch state VWO schools — placement is by recommendation and test score, not by selective
          interview.
        </p>
        <div className="space-y-2 mb-6">
          <Bullet>Doorstroomtoets score of approximately 545–550 (the precise threshold varies by school and year)</Bullet>
          <Bullet>A schooladvies of VWO or VWO/HAVO (a combined borderline recommendation)</Bullet>
          <Bullet>Some Gymnasium schools additionally require a separate intake assessment or interview</Bullet>
          <Bullet>Where a combined HAVO/VWO recommendation is issued, children can transfer to VWO after Year 1 (brugklas) based on performance</Bullet>
        </div>
        <p className="text-gray-700 leading-relaxed">
          In oversubscribed areas — particularly Amsterdam, Utrecht, and parts of The Hague — some VWO
          schools use a lottery (loting) among qualified applicants when demand exceeds places. This makes
          early research into school preferences important, as families may need to rank multiple schools.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Gymnasium: Latin, Greek, and Academic Culture</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gymnasium schools are a subset of VWO schools where Latin and/or Ancient Greek are compulsory
          subjects. There are approximately 60 Gymnasium schools in the Netherlands, most of them
          centuries-old institutions with strong academic traditions. Gymnasium is well regarded by Dutch
          universities and internationally for its rigour and the cognitive breadth its curriculum demands.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Children who attend Gymnasium typically take Latin from Year 1 of secondary school and may add
          Greek from Year 3 or 4. The classical language requirement does not replace modern language
          provision — students still study Dutch, English, French or German alongside Latin and Greek.
          The total subject load is consequently higher than Atheneum.
        </p>
        <Callout>
          <strong className="text-indigo-900">Gymnasium and university:</strong> Dutch research universities
          (UvA, Leiden, Utrecht, Delft, Erasmus) do not formally preference Gymnasium graduates over
          Atheneum graduates in admissions. However, certain competitive programmes — medicine, law, the
          liberal arts colleges — have selective entry processes where the Gymnasium profile can
          distinguish an application.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Inside a VWO School: What to Expect</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          VWO runs from Year 1 (age 12) to Year 6 (age 17–18). The first one or two years are often a
          bridging period (brugklas or onderbouw) where the level is confirmed and pupils on combined
          recommendations are streamed. The upper school (bovenbouw, Years 4–6) is structured around
          subject profiles (profielen) that determine the mix of compulsory and optional subjects for the
          final examination.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { profile: 'Natuur & Techniek (NT)', detail: 'Sciences and mathematics focus — physics, chemistry, advanced maths. Pathway to engineering, medicine, and natural sciences.' },
            { profile: 'Natuur & Gezondheid (NG)', detail: 'Life sciences focus — biology, chemistry, mathematics. Pathway to medicine, veterinary science, psychology.' },
            { profile: 'Economie & Maatschappij (EM)', detail: 'Economics and social sciences — economics, geography, history, management. Pathway to business, law, social sciences.' },
            { profile: 'Cultuur & Maatschappij (CM)', detail: 'Humanities focus — languages, arts, history, philosophy. Pathway to humanities, law, international studies.' },
          ].map(({ profile, detail }) => (
            <div key={profile} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{profile}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          The eindexamen in Year 6 consists of a school examination (schoolexamen) component, which runs
          throughout Years 4–6, and a central written examination (centraal examen) set nationally by the
          College voor Toetsen en Examens (CvTE). Both components count equally toward the final grade
          in each subject. Passing requires a minimum average and no more than one subject failed below
          the minimum threshold.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/netherlands-cito-toets-guide', tag: 'Guide', title: 'Cito Toets & Doorstroomtoets Guide: What Dutch Primary School Scores Mean' },
            { href: '/blog/netherlands-gifted-education-hoogbegaafd', tag: 'Assessment', title: 'Gifted Education in the Netherlands: Hoogbegaafdheid, WISC-V and What Schools Offer' },
            { href: '/blog/netherlands-international-school-admissions', tag: 'Guide', title: 'International School Admissions in the Netherlands: CAT4, IB and How Entry Works' },
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

  'netherlands-gifted-education-hoogbegaafd': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The Netherlands has a long-standing research tradition in gifted education, yet provision in
        schools varies enormously. Families who suspect their child is gifted — or who have received a
        formal identification — often find themselves navigating an inconsistent landscape: some schools
        offer structured enrichment programmes, others offer little beyond goodwill. This guide explains
        how giftedness is defined and assessed in the Dutch system, what schools are required to provide,
        and how parents can advocate effectively for a child who needs more.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Hoogbegaafdheid?</h2>
        <p><strong>In the Netherlands, hoogbegaafdheid (giftedness) is formally defined as an IQ of 130 or above, typically assessed using the WISC-V (Wechsler Intelligence Scale for Children, Fifth Edition).</strong> Approximately 2–3% of Dutch children meet this threshold — an estimated 50,000–75,000 school-age children nationwide.</p>
        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
          Dutch usage of the term hoogbegaafd is stricter than in many other countries: it specifically
          refers to high general intelligence (IQ 130+), not exceptional talent in a single domain. A
          child with extraordinary mathematical ability but an average overall IQ would not typically be
          classified as hoogbegaafd in the formal sense, though they may receive domain-specific enrichment.
          The Dutch educational psychologist Franz Mönks&apos; triarchic model — which adds motivation and
          social environment to intelligence as components of giftedness — is widely cited in Dutch
          professional literature, but IQ assessment remains the operational gateway to most formal
          identification processes.
        </p>
        <Callout>
          <strong className="text-indigo-900">Key statistic:</strong> Research by the Nationaal
          Expertisecentrum Leerplanontwikkeling (SLO) estimates that approximately 2.3% of Dutch primary
          school children are hoogbegaafd. The vast majority — over 90% — attend mainstream schools
          without access to specialist gifted provision.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Giftedness Is Assessed: The WISC-V</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The WISC-V is the standard tool for cognitive assessment of children aged 6–16 in Dutch
          educational psychology. It produces a Full Scale IQ (FSIQ) as well as five primary index scores:
          Verbal Comprehension (VCI), Visual Spatial (VSI), Fluid Reasoning (FRI), Working Memory (WMI),
          and Processing Speed (PSI). A formal diagnosis of hoogbegaafdheid typically requires an FSIQ of
          130 or above, though some Dutch psychologists apply the criterion to the General Ability Index
          (GAI) — which excludes working memory and processing speed — where there is evidence of an
          uneven cognitive profile.
        </p>
        <div className="space-y-2 mb-6">
          <Bullet>WISC-V assessment in the Netherlands is typically conducted by a GZ-psycholoog (registered health psychologist) or orthopedagoog-generalist</Bullet>
          <Bullet>Schools can refer children through the school psychologist (schoolpsycholoog) or the school support team (ondersteuningsteam)</Bullet>
          <Bullet>Private assessment is available through specialist practices — typical cost ranges from €600 to €1,200</Bullet>
          <Bullet>Assessment via the school route is free but waiting times can be six months or longer in some regions</Bullet>
          <Bullet>A WISC-V report from a qualified assessor is normally required before a school will formally adjust curriculum provision</Bullet>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Many gifted children in the Netherlands are not formally identified. Underachievement, social
          withdrawal, or twice-exceptionality (a combination of giftedness and a learning difference such
          as dyslexia or ADHD) can mask high ability. If you observe a significant gap between your
          child&apos;s apparent reasoning ability and their school performance or engagement, requesting a
          WISC-V assessment is the right first step.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Schools Are Required to Provide</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Under the Dutch Passend Onderwijs framework (introduced 2014), schools have a legal duty of
          care (zorgplicht) to provide appropriate education for every pupil, including those with
          exceptional ability. This does not mandate gifted specialist provision — it requires the school
          to demonstrate that the educational offer is appropriate for the individual child.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In practice, provision ranges widely. The most common in-school approaches include:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { approach: 'Compacting', detail: 'Reducing the time a gifted child spends on standard curriculum tasks they have already mastered, freeing time for enrichment. Simple in principle; depends heavily on teacher capacity and willingness.' },
            { approach: 'Plusklas', detail: 'Enrichment group that meets one or two mornings per week, parallel to the main class. Pupils work on project-based, interdisciplinary challenges not tied to curriculum content. Available in approximately 60–70% of Dutch primary schools.' },
            { approach: 'Grade acceleration (versnelling)', detail: 'Skipping one school year. Effective for some children; requires school agreement and parental consent. Research evidence is broadly positive for academic outcomes when done thoughtfully.' },
            { approach: 'Specialist schools', detail: 'A small number of Dutch primary schools are fully oriented toward gifted education. Notable examples include the Steve JobsSchool model and Talent schools in major cities. Entry typically requires WISC-V 130+ evidence.' },
          ].map(({ approach, detail }) => (
            <div key={approach} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{approach}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout>
          <strong className="text-indigo-900">Secondary school:</strong> At secondary level, VWO and
          Gymnasium already provide a demanding curriculum for high-ability students. Some Gymnasium
          schools offer a Talent programme (Talentprogramma) or participate in the Junior University
          (Universiteit van Amsterdam, Utrecht University) whereby gifted pupils attend university
          lectures on Saturday mornings from age 10–12.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Advocating for Your Child</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Parents of gifted children in the Netherlands have more formal recourse than is often realised.
          If a school&apos;s provision is inadequate despite documented hoogbegaafdheid, families can escalate
          through the school&apos;s ondersteuningsteam, the regional Samenwerkingsverband (the special educational
          needs partnership that covers the school), or, as a last resort, the national complaints
          procedure (klachtencommissie).
        </p>
        <div className="space-y-2">
          <Check>Request a formal OPP (Ontwikkelingsperspectief) — the school&apos;s written plan for your child&apos;s educational development</Check>
          <Check>Ask for a copy of the school&apos;s beleid hoogbegaafdheid (gifted education policy) — all schools are required to have one</Check>
          <Check>Contact the Samenwerkingsverband if the school cannot meet the child&apos;s needs internally</Check>
          <Check>Consider NLO (Nederlandse Leerlingorganisaties) or Pharos for signposting to specialist support</Check>
          <Check>Keep written records of all meetings and agreements with the school</Check>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/netherlands-cito-toets-guide', tag: 'Guide', title: 'Cito Toets & Doorstroomtoets Guide: What Dutch Primary School Scores Mean' },
            { href: '/blog/netherlands-vwo-gymnasium-guide', tag: 'Guide', title: 'VWO and Gymnasium in the Netherlands: Entry Requirements and How to Qualify' },
            { href: '/blog/gifted-program-testing-guide', tag: 'Assessment', title: 'Gifted Program Testing: How to Prepare and What to Expect' },
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

  'netherlands-international-school-admissions': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The Netherlands is home to one of the densest concentrations of international schools in Europe —
        a legacy of its role as a hub for multinational headquarters, diplomatic missions, and
        international organisations. Schools in Amsterdam, The Hague, Rotterdam, and Eindhoven serve tens
        of thousands of internationally mobile families. Understanding how admissions work, what
        assessments are used, and how the IB Diploma fits into the landscape is essential for any family
        arriving in the Netherlands or choosing between the Dutch national system and an international
        school.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How International School Admissions Work in the Netherlands</h2>
        <p><strong>Most international schools in the Netherlands use the CAT4 (Cognitive Abilities Test, Fourth Edition) as their primary entry assessment, producing a Standard Age Score (SAS) with a mean of 100 and a standard deviation of 15.</strong> The Netherlands has the highest per-capita concentration of IB World Schools in Europe.</p>
        <p className="text-gray-700 leading-relaxed mt-4 mb-4">
          Unlike Dutch state school placement — which is governed by the schooladvies and Doorstroomtoets —
          international school admissions are largely at each school&apos;s discretion. Most schools use a
          combination of CAT4, previous school reports (preferably in English or Dutch), and in some cases
          a parent and student interview. Entry is not competitive in the same way as UK selective
          schools, but oversubscribed schools — particularly in Amsterdam — do use assessment results to
          manage cohort composition.
        </p>
        <Callout>
          <strong className="text-indigo-900">CAT4 benchmarks used by most Netherlands international schools:</strong> SAS 100+ for mainstream entry; SAS 112+ (approximately 80th percentile) typically required for gifted or enhanced programmes; SAS 85 or below may trigger a learning support assessment before an offer is made.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding CAT4 Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The CAT4 assesses four cognitive batteries: Verbal Reasoning, Quantitative Reasoning, Non-Verbal
          Reasoning, and Spatial Ability. Each battery produces a separate SAS score, and a combined
          overall SAS is calculated. Scores are age-standardised, meaning a child&apos;s result is compared
          to the performance of a nationally representative sample of their peers.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">SAS Range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Percentile Band</th>
                <th className="text-left p-4 font-semibold text-gray-700">Typical Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['127+', '96th–99th', 'Very high ability — may be referred to gifted programme or enrichment track'],
                ['112–126', '80th–95th', 'High ability — strong candidate for most international school programmes'],
                ['100–111', '50th–79th', 'Average to above average — mainstream international school entry'],
                ['85–99', '16th–49th', 'Below average — most schools will request further information or a support assessment'],
                ['Below 85', 'Below 16th', 'Low ability — school will assess whether the learning support offer is appropriate'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-800">{row[1]}</td>
                  <td className="p-4 text-gray-600 leading-relaxed">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          CAT4 is designed to be resistant to short-term coaching, but familiarity with the question
          format — particularly the abstract reasoning and spatial sections — meaningfully reduces
          errors caused by unfamiliarity. Children who have not previously encountered matrix-style
          questions or figure classification tasks often underperform relative to their true ability
          on first exposure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key International Schools in the Netherlands</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Netherlands has over 150 international schools, the majority offering the International
          Baccalaureate (IB) framework — Primary Years Programme (PYP), Middle Years Programme (MYP),
          and/or Diploma Programme (DP). A smaller number offer British curriculum (IGCSE and A-Level)
          or the American High School Diploma.
        </p>
        <div className="space-y-2 mb-6">
          <Bullet>Amsterdam: International School of Amsterdam (ISA), Amsterdam International Community School (AICS), British School of Amsterdam</Bullet>
          <Bullet>The Hague: American School of The Hague, International School of The Hague, Rijnlands Lyceum Wassenaar (bilingual VWO/IB)</Bullet>
          <Bullet>Rotterdam: Rotterdam International Secondary School (RISS), Wolfert Tweetalig</Bullet>
          <Bullet>Eindhoven: International School Eindhoven (ISE) — serves the ASML and high-tech corridor community</Bullet>
          <Bullet>Utrecht: International School Utrecht, Amersfoort International School</Bullet>
        </div>
        <Callout>
          <strong className="text-indigo-900">IB Diploma in the Netherlands:</strong> The IB Diploma is
          widely recognised by Dutch universities (WO). A total IB Diploma score of 28+ points is
          generally required for admission to Dutch research universities; competitive programmes
          (medicine, law at top institutions) typically expect 35–38 points. Dutch students from
          international IB schools sit alongside Dutch VWO graduates in university admissions without
          disadvantage.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dutch State School vs International School: Key Considerations</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For families who may remain in the Netherlands long-term, the Dutch state system — and
          particularly VWO — offers a rigorous, free education that leads directly to Dutch and European
          university entry. International schools offer continuity for families likely to move again,
          instruction in English, and an internationally portable qualification. The choice is rarely
          purely academic.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { heading: 'Dutch State School (VWO)', points: ['Free at point of use', 'Instruction in Dutch — fast language acquisition required', 'Leads to Dutch university (WO) entry', 'Deep integration into Dutch society', 'Doorstroomtoets + schooladvies entry'] },
            { heading: 'International School (IB)', points: ['Annual fees typically €10,000–€25,000', 'Instruction in English', 'IB Diploma — globally portable', 'International peer community', 'CAT4 entry assessment'] },
          ].map(({ heading, points }) => (
            <div key={heading} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-3">{heading}</div>
              <ul className="space-y-1">
                {points.map((p) => (
                  <li key={p} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-indigo-400 mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Continue Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { href: '/blog/netherlands-cito-toets-guide', tag: 'Guide', title: 'Cito Toets & Doorstroomtoets Guide: What Dutch Primary School Scores Mean' },
            { href: '/blog/netherlands-vwo-gymnasium-guide', tag: 'Guide', title: 'VWO and Gymnasium in the Netherlands: Entry Requirements and How to Qualify' },
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
