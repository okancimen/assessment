import Link from 'next/link'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const NL_CONTENT: Record<string, React.ReactNode> = {

  'netherlands-cito-toets-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The Cito toets — now officially replaced by the Doorstroomtoets — is the most
        consequential assessment in a Dutch child&apos;s primary school career. Taken in group 8
        (the final year of basisschool, typically age 11–12), the result feeds directly into
        the school advice that determines which level of secondary education a child enters.
        This guide explains what the test measures, how scores work, what they mean for your
        child&apos;s secondary school options, and how families can best support their child
        through the process.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">From Cito Toets to Doorstroomtoets: What Changed?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For decades, the Cito Eindtoets Basisonderwijs was the standard primary school leaving
          assessment in the Netherlands. From 2024 onwards, this has been replaced by the
          Doorstroomtoets — a system change designed to reduce inequality and ensure that the
          test result plays a more transparent role in secondary school placement.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most significant change is timing: the Doorstroomtoets is now taken in February
          of group 8, and crucially, the school advice (schooladvies) from the teacher is issued
          before the test result. This means the teacher&apos;s professional judgement comes first,
          and the Doorstroomtoets serves to confirm or potentially upgrade that advice — but
          not to downgrade it. If a child scores significantly above their teacher advice level,
          the school is required to reconsider and may revise upward.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Multiple test providers are now approved for the Doorstroomtoets, including Cito,
          IEP, Route 8, and DIA. Schools choose which provider to use. The results from all
          providers are calibrated to the same national standard, so the choice of provider
          does not disadvantage or advantage students.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does the Test Measure?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Regardless of the provider, the Doorstroomtoets assesses three core domains:
        </p>
        <ul className="space-y-4 mb-6">
          <Bullet><strong>Taal (Language):</strong> Reading comprehension, vocabulary, spelling, and language usage. Children are expected to be able to read and interpret non-fiction texts, understand implicit meaning, and identify correct spelling and grammar. This is the largest domain by weighting.</Bullet>
          <Bullet><strong>Rekenen (Mathematics):</strong> Number operations, measurement, geometry, fractions, percentages, and applied problem-solving. The level tested corresponds to the group 8 curriculum, but the most challenging questions require multi-step reasoning rather than straightforward calculation.</Bullet>
          <Bullet><strong>Lezen (Reading fluency):</strong> Some providers include a separate reading fluency component, testing the speed and accuracy with which children can process written text. This is distinct from reading comprehension — it measures decoding automaticity.</Bullet>
        </ul>
        <Callout>
          <strong className="text-indigo-900">What the test does not measure:</strong> The Doorstroomtoets
          does not test history, geography, science, or social studies — despite these being part of
          the basisschool curriculum. It also does not test creativity, critical thinking, or learning
          potential in the way that a cognitive ability test (CAT4 or CogAT) would. It is an
          achievement test, not an ability test.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Scores Are Reported</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Cito provider reports a score on a scale from roughly 501 to 550, with a national
          average around 534–536 in most years. The score is converted to a
          &quot;score range&quot; that maps to recommended secondary school levels:
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Cito score range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Indicated secondary level</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. % of students</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['501–524', 'VMBO-Basisberoepsgerichte leerweg (BB)', '~15%'],
                ['525–528', 'VMBO-Kaderberoepsgerichte leerweg (KB)', '~10%'],
                ['529–533', 'VMBO-Theoretische leerweg (TL)', '~20%'],
                ['534–536', 'VMBO-TL / HAVO', '~15%'],
                ['537–539', 'HAVO', '~15%'],
                ['540–544', 'HAVO / VWO', '~15%'],
                ['545–550', 'VWO (including Gymnasium)', '~10%'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono text-indigo-700 font-medium">{row[0]}</td>
                  <td className="p-4 font-semibold text-gray-900 text-sm">{row[1]}</td>
                  <td className="p-4 text-gray-500">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          The IEP and Route 8 providers use different scoring scales, but all map to the same
          secondary level indicators. The national calibration ensures comparability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of the Schooladvies</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The schooladvies (school advice) is the teacher&apos;s formal recommendation for which
          secondary level a child should enter. It is issued by the school in February or March
          of group 8, before the Doorstroomtoets result arrives. The advice is legally binding
          in the sense that secondary schools use it as the primary placement criterion — but
          the Doorstroomtoets result can trigger a review.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          If the Doorstroomtoets result is higher than the schooladvies, the school must offer
          a heroverweging (reconsideration). The school is not obligated to raise the advice,
          but they must formally review it and document their reasoning. In practice, many schools
          do raise the advice when there is a significant gap.
        </p>
        <p className="text-gray-700 leading-relaxed">
          If the Doorstroomtoets result is lower than the schooladvies, the advice stands.
          The test can only help a child, not hurt them under the new system.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Support Your Child</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most effective preparation for the Doorstroomtoets is consistent academic engagement
          throughout the basisschool years — not intensive drilling in the weeks before the test.
          That said, targeted preparation in group 7 and early group 8 is entirely appropriate
          and widely practised.
        </p>
        <ul className="space-y-4 mb-4">
          <Check><strong>Practise past papers.</strong> Cito publishes practice tests and many schools use commercially available oefenboeken (practice books) matched to the test format. Working through timed practice questions familiarises children with the test structure and builds confidence.</Check>
          <Check><strong>Focus on taal first.</strong> Language is the most heavily weighted domain and often the area where children can make the most meaningful improvement through targeted reading and vocabulary work. Daily reading of age-appropriate texts — non-fiction as well as fiction — directly transfers to the test.</Check>
          <Check><strong>Address specific rekenen gaps.</strong> Use the school&apos;s methode (primary maths programme, such as Wereld in Getallen or Pluspunt) to identify which areas your child is weakest in. Fractions, percentages, and applied measurement are the most commonly challenging topics at group 8 level.</Check>
          <Check><strong>Talk to the teacher early.</strong> The schooladvies is heavily influenced by the teacher&apos;s professional judgement across all of group 8. Build a positive working relationship with the teacher and address any concerns about academic performance well before February.</Check>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What If the Advice Feels Wrong?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If you believe your child has been significantly under-advised, the process for
          seeking a review is as follows: wait for the Doorstroomtoets result, which arrives
          before the secondary school registration deadline. If the result indicates a higher
          level than the advice, formally request a heroverweging from the school.
        </p>
        <p className="text-gray-700 leading-relaxed">
          You can also engage an independent educational psychologist (orthopedagoog or
          psycholoog) for a cognitive assessment if you believe the school&apos;s advice
          systematically underestimates your child&apos;s potential. This is particularly
          relevant for children who may have a learning difference (dyslexia, attention
          difficulties) that has affected their classroom performance but not their
          underlying cognitive ability. For more on gifted identification and cognitive
          assessment in the Netherlands, see our{' '}
          <Link href="/blog/netherlands-gifted-education-hoogbegaafd" className="text-indigo-600 hover:underline">
            guide to gifted education (hoogbegaafd) in the Netherlands
          </Link>. If your child is heading to VWO, read our{' '}
          <Link href="/blog/netherlands-vwo-gymnasium-guide" className="text-indigo-600 hover:underline">
            VWO and Gymnasium entry guide
          </Link>.
        </p>
      </section>
    </>
  ),

  'netherlands-vwo-gymnasium-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        VWO (Voorbereidend Wetenschappelijk Onderwijs) and its prestige variant Gymnasium are
        the highest level of secondary education in the Netherlands — the route to Dutch university
        study and the equivalent of A-levels or the International Baccalaureate. Getting a VWO
        place requires not just a high Doorstroomtoets score but, increasingly, a strong performance
        at schools that run their own entrance procedures. This guide explains what VWO and Gymnasium
        are, how entry works, and how to maximise your child&apos;s chances of a place.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">VWO vs Gymnasium: What&apos;s the Difference?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          VWO is the academic track of Dutch secondary education, lasting 6 years and culminating
          in the VWO eindexamen — the national leaving examination that qualifies graduates for
          direct entry to Dutch universities (WO — Wetenschappelijk Onderwijs). Approximately
          17–20% of Dutch students enter the VWO stream.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Gymnasium is a variant of VWO that adds compulsory Latin and Ancient Greek to the
          curriculum. It is often (though not always) associated with older, more traditional
          school buildings and a strong academic culture. Gymnasium places are more limited
          and admission more competitive. Not all schools offer a Gymnasium stream — in some
          cities, there are dedicated Gymnasium schools that operate as essentially selective
          institutions.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Factor</th>
                <th className="text-left p-4 font-semibold text-gray-700">VWO</th>
                <th className="text-left p-4 font-semibold text-gray-700">Gymnasium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Duration', '6 years', '6 years'],
                ['Classical languages', 'Not required', 'Latin + Ancient Greek compulsory'],
                ['Entry threshold (Cito)', '545–550 typical', '545–550 + entrance procedure'],
                ['% of Dutch students', '~17–20%', '~5–7%'],
                ['University access', 'Yes — all WO faculties', 'Yes — all WO faculties'],
                ['Tweetalig (bilingual) option', 'Available at many schools', 'Available at some schools'],
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How VWO Admission Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The primary route into VWO is straightforward: a schooladvies of VWO (or HAVO/VWO)
          combined with a Doorstroomtoets score in the VWO range (typically 545+ on the Cito scale).
          Most VWO streams at comprehensive scholengemeenschappen (school communities) admit all
          students meeting these criteria on a first-come, first-served basis or by postcode lottery
          where oversubscribed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          However, the most academically prestigious VWO schools — particularly dedicated Gymnasium
          schools and schools with a strong Tweetalig VWO (TTO) programme — often run additional
          entrance procedures. These typically include:
        </p>
        <ul className="space-y-4 mb-4">
          <Bullet><strong>Intake gesprek:</strong> A conversation with the child (and sometimes the parents) with a member of the school&apos;s pastoral or admissions team. The school assesses motivation, character, and fit for the school&apos;s culture.</Bullet>
          <Bullet><strong>Taaltoets / cognitieve toets:</strong> Some Gymnasium schools administer a separate language or cognitive ability test alongside the schooladvies. This is more common in cities like Amsterdam (where competition for Gymnasium places is intense) and in schools with specialised programmes.</Bullet>
          <Bullet><strong>Portfolio or letter of motivation:</strong> A small number of schools ask for a brief statement of motivation or examples of the child&apos;s academic interests or extracurricular activities.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tweetalig VWO (TTO): Bilingual Education</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A significant number of Dutch VWO schools offer Tweetalig (bilingual) programmes in
          which approximately 50% of teaching time is delivered in English in the first three
          years, eventually progressing to CLIL (Content and Language Integrated Learning)
          throughout the full VWO programme. TTO schools are officially recognised and assessed
          by a European framework — they use the quality mark &quot;TTO keurmerk&quot; for verified
          programmes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Entry into a TTO programme typically requires the standard VWO schooladvies plus
          evidence of strong English language ability. Many schools require a separate English
          language test or assessment. For families who have an international background or
          who want to prepare their child for an English-medium university future, TTO is
          an excellent option.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">For international families:</strong> If English is your
          child&apos;s strongest language, a TTO programme may actually be easier to succeed in
          than a standard Dutch VWO — particularly in the early years. It also provides
          excellent preparation for English-medium higher education, including UK and US universities.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Role of the Basisschool in VWO Placement</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dutch primary schools vary significantly in the proportion of children they advise
          for VWO. In some areas — particularly in cities with concentrations of highly educated
          families — a majority of children at certain schools receive VWO advice. At other
          schools serving more mixed populations, the VWO rate may be 10–15% or lower.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Research consistently shows that the schooladvies is influenced not just by a child&apos;s
          academic performance but also by socioeconomic background — children from higher-income
          families with university-educated parents receive slightly higher advice on average,
          controlling for test scores. The Doorstroomtoets is intended to partially correct for
          this by providing an objective benchmark. If your child receives a schooladvies that
          seems lower than their Doorstroomtoets score suggests, the heroverweging process
          (formal reconsideration) is your next step.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">After VWO: University Pathways</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Completing VWO gives direct access to all Dutch universities (Universiteiten), as
          distinct from Hogescholen (Universities of Applied Sciences, HBO), which are accessible
          from HAVO. Dutch universities include the internationally ranked research universities
          such as Universiteit van Amsterdam, Leiden University, TU Delft, and Erasmus University.
        </p>
        <p className="text-gray-700 leading-relaxed">
          VWO also directly qualifies students for Honours programmes and selective degree
          programmes (like the University College liberal arts programmes at UvA, Utrecht,
          Groningen, and Maastricht) that require a VWO diploma specifically. Gymnasium graduates
          additionally qualify for classical studies programmes that require the classical
          language background. To understand what Doorstroomtoets score your child needs to
          receive a VWO schooladvies, read our{' '}
          <Link href="/blog/netherlands-cito-toets-guide" className="text-indigo-600 hover:underline">
            complete guide to the Doorstroomtoets and Cito toets
          </Link>.
        </p>
      </section>
    </>
  ),

  'netherlands-gifted-education-hoogbegaafd': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Hoogbegaafdheid — giftedness — is taken seriously in the Dutch education system, but
        the way it is identified, supported, and educated varies enormously between schools and
        municipalities. Unlike the UK or US, the Netherlands has no national standard for gifted
        identification or mandated gifted provision. This guide explains what gifted education
        looks like in the Netherlands, how children are identified, and what options are available
        for families whose children may be exceptionally able.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Hoogbegaafdheid?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In the Dutch educational context, hoogbegaafd typically refers to children with an
          IQ of 130 or above (98th+ percentile) — roughly the top 2% of the population. This
          aligns with international definitions used by organisations such as the World Council
          for Gifted and Talented Children. However, Dutch educators and psychologists often
          use a broader conception that includes not just cognitive ability but also
          characteristics like creative thinking, perfectionism, and heightened emotional sensitivity.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The term &quot;hoogbegaafd&quot; is sometimes used loosely in the Netherlands to mean
          any academically strong child, which can obscure the distinction between a child who
          is working 1–2 years above grade level (gifted, but not exceptionally so) and a child
          who is genuinely in the top 1–2% cognitively. For educational planning, the distinction
          matters: a child at the 90th percentile may thrive in a VWO stream with some enrichment;
          a child at the 99th+ percentile may need more specialised provision.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Children Are Identified</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Unlike the UK (where 11+ tests screen all children for grammar school) or the US
          (where district-administered tests screen for gifted programmes), the Netherlands
          has no universal gifted screening. Identification typically happens through one of
          these routes:
        </p>
        <div className="space-y-4 mb-6">
          {[
            { route: 'Teacher referral', detail: 'A class teacher notices that a child is consistently completing work far ahead of peers, appears bored or disengaged, or shows unusually sophisticated thinking. The teacher may suggest assessment.' },
            { route: 'Parent referral', detail: 'Parents who observe traits associated with giftedness at home — extreme curiosity, rapid learning, intense interests, emotional intensity — request that the school arrange assessment.' },
            { route: 'School-based screening', detail: 'Some progressive basisscholen use the NSCCT (Dutch Cognitive Capacity Test) or the Sidi Screeningstest to screen entire cohorts. This is not universal but is more common in schools with explicit gifted policies.' },
            { route: 'Private assessment', detail: 'Families who suspect giftedness can commission a private psychodiagnostisch onderzoek (psychoeducational assessment) from an orthopedagoog or kinder- en jeugdpsycholoog. This produces a full IQ score (usually WISC-V NL) and educational recommendations.' },
          ].map(({ route, detail }) => (
            <div key={route} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{route}</div>
              <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the WISC-V NL Measures</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The WISC-V (Wechsler Intelligence Scale for Children, 5th Edition) is the most commonly
          used intelligence assessment for Dutch children, administered by a licensed orthopedagoog
          or psycholoog. The Dutch standardisation (WISC-V NL) uses a Dutch norm group, so results
          reflect how a child compares to Dutch peers of the same age.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The assessment produces a Full Scale IQ (FSIQ) and five composite index scores:
          Verbaal Begrip (Verbal Comprehension), Visueel Ruimtelijk (Visual Spatial),
          Vloeiend Redeneren (Fluid Reasoning), Werkgeheugen (Working Memory), and
          Verwerkingssnelheid (Processing Speed). Most children assessed for potential
          giftedness score highest on Verbaal Begrip and Vloeiend Redeneren, with
          occasional significant gaps between indices (a profile rather than a flat score).
        </p>
        <Callout>
          <strong className="text-indigo-900">Score interpretation:</strong> A FSIQ of 130+ means the
          child scores at or above the 98th percentile compared to Dutch peers. A FSIQ of 120–129
          (hoogbegaafd grijsgebied or &quot;grey zone&quot;) is associated with significant academic
          acceleration but may not qualify for all specialist gifted provisions. Some Dutch
          psychologists use 125 as a working threshold for gifted identification in educational contexts.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Educational Provisions for Gifted Children</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Provision varies by municipality and school type. The main options available to
          Dutch families are:
        </p>
        <ul className="space-y-4 mb-4">
          <Bullet><strong>Plusklas (enrichment class):</strong> Many basisscholen offer a plusklas — a pull-out group for high-ability children that provides enrichment activities (usually 1–2 half-days per week) beyond the regular curriculum. The quality and depth of plusklas provision varies enormously between schools.</Bullet>
          <Bullet><strong>Compacten en verrijken (curriculum compaction):</strong> The regular curriculum is compacted for a gifted child (they complete core work in less time) and the freed-up time is used for deepening or extension work. This happens within the regular classroom.</Bullet>
          <Bullet><strong>Versnelling (grade skipping):</strong> Some children are accelerated one or more grade levels. This is done in consultation with the school, an orthopedagoog, and the parents. It is more accepted in the Netherlands than in some other countries.</Bullet>
          <Bullet><strong>Leonardoscholen:</strong> A small number of dedicated primary schools for gifted children (IQ 130+) operate in the Netherlands, often privately funded. The most notable is the Leonardo network in Amsterdam and other cities. Entry requires formal psychodiagnostisch assessment confirming IQ 130+.</Bullet>
          <Bullet><strong>VWO with enrichment:</strong> At secondary level, many schools offering VWO have a specific programme for exceptionally able students (often called Campus or Honours streams) that provides deepening beyond the standard VWO curriculum.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Underachievement and Twice-Exceptional Children</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A significant proportion of gifted children in the Netherlands are not identified
          because they are underachieving — performing at or near grade level despite having
          substantially higher cognitive potential. This happens for several reasons: the
          child finds the regular curriculum unchallenging and disengages; the child has an
          unrecognised learning difference (dyslexia, dyscalculia, or ADHD) that masks
          their ability; or the child has learned to avoid effort in environments where
          effort was never really required.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Twice-exceptional (2E) children — those who are both gifted and have a learning
          difference — are particularly likely to be missed by teacher referral. Their
          strengths and challenges can cancel each other out, leading teachers and parents
          to see a &quot;average&quot; child when the reality is a complex profile.
          Private psychodiagnostisch assessment is often the only way to identify this profile accurately.
          If your family attends an international school in the Netherlands, see also our guide to{' '}
          <Link href="/blog/netherlands-international-school-admissions" className="text-indigo-600 hover:underline">
            international school admissions in the Netherlands
          </Link>, which covers the CAT4 cognitive assessment that most British-curriculum schools use.
        </p>
      </section>
    </>
  ),

  'netherlands-international-school-admissions': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The Netherlands has one of the most developed international school ecosystems in Europe,
        centred on the expat-heavy cities of Amsterdam, The Hague, Rotterdam, and Eindhoven.
        With tens of thousands of international families living in the Netherlands — drawn by
        multinationals including ASML, Philips, Shell, Unilever, and dozens of international
        organisations — the international school sector has grown dramatically. But entry to
        the most sought-after schools is competitive, and the admissions process involves specific
        assessments families need to understand.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The International School Landscape</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          International schools in the Netherlands broadly fall into three categories:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { type: 'IB World Schools', desc: 'Schools offering the International Baccalaureate Primary Years Programme (PYP), Middle Years Programme (MYP), and/or Diploma Programme (DP). The IB Diploma is widely accepted by universities worldwide. Most prestigious international schools in the Netherlands are IB authorised.' },
            { type: 'British curriculum schools', desc: 'Schools following the English National Curriculum, leading to IGCSEs at 16 and A-levels or IB at 18. These are familiar to UK expat families and are common in The Hague (which has several British-origin schools due to the international organisations based there).' },
            { type: 'American curriculum schools', desc: 'Schools following a US curriculum, sometimes leading to the American High School Diploma or the International Baccalaureate. Less common than IB or British schools but present in Amsterdam and The Hague.' },
          ].map(({ type, desc }) => (
            <div key={type} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{type}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CAT4: The Key Admissions Assessment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Cognitive Abilities Test 4 (CAT4) — published by GL Assessment — is the most widely
          used admissions and setting assessment in British-curriculum international schools
          worldwide, including in the Netherlands. If your child is applying to a British
          curriculum school or a school that uses the British assessment tradition, there
          is a high probability they will sit the CAT4.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The CAT4 measures four reasoning batteries:
        </p>
        <ul className="space-y-3 mb-6">
          <Bullet><strong>Verbal battery:</strong> Verbal classification, verbal analogies. Measures reasoning with words and language concepts. Note: this battery is language-dependent and may disadvantage children who are not native English speakers.</Bullet>
          <Bullet><strong>Quantitative battery:</strong> Number series, number analogies. Measures reasoning with numbers and mathematical relationships. Less language-dependent than the verbal battery.</Bullet>
          <Bullet><strong>Nonverbal battery:</strong> Figure classification, figure matrices. Measures reasoning with abstract shapes and patterns. Language-independent.</Bullet>
          <Bullet><strong>Spatial battery:</strong> Figure analysis (paper folding), figure recognition. Measures spatial reasoning and mental rotation. Unique to CAT4 among major admissions tests.</Bullet>
        </ul>
        <Callout color="amber">
          <strong className="text-amber-800">For non-native English speakers:</strong> The CAT4 verbal
          battery disadvantages children whose home language is not English. Many schools are aware of
          this and weight the nonverbal and spatial batteries more heavily for EAL (English as Additional
          Language) students. Ask specifically how the school uses CAT4 results for EAL admissions.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Schools Use CAT4 Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          CAT4 produces Standard Age Scores (SAS) for each battery and a mean SAS overall.
          The scale has a mean of 100 and a standard deviation of 15 — the same as most
          standardised assessments including IQ tests. An SAS of 115+ is above average;
          125+ is very able; 130+ is highly able.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Schools use CAT4 in two main ways: for admissions screening (to assess whether
          a child will be able to access the curriculum and thrive in the school&apos;s
          academic environment) and for internal setting (to group students by ability
          in specific subjects). Most international schools in the Netherlands do not
          use a strict CAT4 cutoff for admissions, but they use the score as one
          of several factors alongside previous school reports, teacher references,
          and English language ability.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For the most competitive schools — particularly those with limited places and
          long waiting lists — a high CAT4 score (typically 115+ mean SAS) is effectively
          a prerequisite for a realistic admissions conversation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">English Language Assessment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most English-medium international schools assess English language ability separately
          from cognitive ability. Children who are not native English speakers may be assessed
          using IELT (International English Language Testing), BELA (Basic English Language
          Assessment), or a school-designed English language screening. Children who are admitted
          with lower English scores are often placed in EAL (English as an Additional Language)
          support programmes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For families considering international schools in the Netherlands, the most important
          advice is to apply early — waiting lists at popular schools such as the British School
          in the Netherlands (BSN), the International School of Amsterdam (ISA), and the American
          School of the Hague (ASH) can exceed 12–18 months. Register your interest as soon as
          you know you are relocating to the Netherlands, regardless of how far off the actual
          move date is.
        </p>
      </section>
    </>
  ),
}
