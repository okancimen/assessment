import Link from 'next/link'
import { Bullet, Callout, Check, Cross } from './blog-components'

export const UK_CONTENT: Record<string, React.ReactNode> = {

  'global-academic-benchmarks-report-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Predicting and tracking student placement success requires an understanding of cross-border data metrics.
        As regional and international educational boards integrate adaptive digital testing models, standard
        cut-off expectations are shifting significantly. This report details the global performance parameters,
        standardised testing trends, and milestone targets across primary, secondary, and pre-university systems
        for the 2026 academic cycle — drawing on data from the OECD, GL Assessment, the College Board, and IEA.
      </p>
      <p className="text-gray-700 leading-relaxed">
        For families navigating international school transitions, selective admissions, or simply trying to
        understand where their child stands globally, the numbers in this report provide the benchmarks
        that schools and admissions teams are actually using. Raw percentages and national grades are
        increasingly insufficient context. The emerging standard is a standardised percentile rank within
        a demographically and age-matched cohort — and this report explains what those ranks look like
        in practice across the world&apos;s major educational systems.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 Global Performance Baselines &amp; Data-Driven Milestones</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To evaluate student trajectories accurately, educational consultants analyse raw scores translated into
          standardised metrics. Standardised modelling removes discrepancies across varying global test
          conditions by establishing a consistent global mean. The benchmarks below represent the performance
          thresholds that distinguish competitive applicants from the broader population in each system.
        </p>
        <ul className="space-y-5 mb-6">
          <Bullet>
            <strong>11+ Verbal Reasoning Trend (2026):</strong> Across competitive UK and international grammar
            pathways, the baseline Standardised Age Score (SAS) is anchored at 100. Top-tier selective placement
            generally requires an SAS threshold between 115 and 121. For the most oversubscribed London schools
            — Queen Elizabeth&apos;s Boys (Barnet) and The Henrietta Barnett School — competitive scores
            regularly fall between 127 and 132, placing candidates well above the 98th percentile.
          </Bullet>
          <Bullet>
            <strong>Global Mathematics Competency (PISA/TIMSS 2026 Baselines):</strong> Top-performing
            international hubs including Singapore, Hong Kong, and Estonia maintain a mathematics scale score
            of 540–575, compared to the OECD median of 472. The UK national average sits at approximately
            495–510 depending on the year. Students targeting international school entry or scholarship
            programmes typically need to demonstrate performance in the 90th percentile or above
            relative to their national cohort.
          </Bullet>
          <Bullet>
            <strong>The Pre-University Shift (Digital SAT Adaptive Testing):</strong> Following full
            digitisation of US college entry frameworks, the median score for the top 10% of global applicants
            has consolidated at 1480+ on the Digital SAT, with an average sub-score of 720+ in Evidence-Based
            Reading and Writing. The shift to adaptive Multi-Stage Testing (MST) has increased the importance
            of first-module accuracy — early errors route students to a lower-difficulty second module, capping
            their maximum possible score.
          </Bullet>
          <Bullet>
            <strong>IB Diploma Programme (2026 cohort):</strong> The worldwide average IB score has remained
            stable at approximately 29–30 points out of 45. Students targeting elite universities in the UK
            (Oxford, Imperial, UCL) or internationally require 40+ points with specific Higher Level subject
            requirements. The 40-point threshold places a student comfortably above the 90th percentile
            of the global IB cohort.
          </Bullet>
        </ul>
        <Callout>
          <strong className="text-indigo-900">Key takeaway:</strong> Raw scores are increasingly obsolete as
          a planning metric. Educational institutions now prioritise percentile rankings adjusted for age
          and demographic cohorts. For international transitions or selective admissions, a student should
          track in the 85th percentile or higher within their specific target curriculum to be considered
          genuinely competitive. Below the 75th percentile, the gap to selective school entry is measurable
          and typically requires 12–18 months of targeted intervention to close.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Admissions Frameworks and Standardised Baselines</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Different tiers of education rely on entirely different assessment ecosystems. A family moving from
          the UK to the US, or from Southeast Asia to Europe, cannot simply translate a grade or percentage —
          the frameworks themselves are incommensurable without standardised conversion. The table below
          outlines the core international benchmarks across primary, secondary, and pre-university checkpoints.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Assessment Tier</th>
                <th className="text-left p-4 font-semibold text-gray-700">Core Metric</th>
                <th className="text-left p-4 font-semibold text-gray-700">2026 Competitive Baseline</th>
                <th className="text-left p-4 font-semibold text-gray-700">Assessment Engine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Primary Admissions (Age 11+)', 'Standardised Age Score (SAS)', '115–121+', 'GL Assessment / CEM / ISEB'],
                ['Middle Years Baseline (Age 14–15)', 'Scale Scores / Proficiency Bands', 'Level 4+ (PISA Baseline)', 'OECD / National Assessment Frameworks'],
                ['US University Track', 'Digital Scale Score (400–1600)', '1450+ (Ivy Average: 1540+)', 'College Board (Digital SAT)'],
                ['UK/Commonwealth University Track', 'Grade Boundaries (A*–U / 9–1)', '3× A-Level at A*/A', 'UCAS / Pearson / Cambridge'],
                ['IB Diploma', 'Points (1–45)', '40+ points', 'IB Organisation (Geneva)'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  {row.map((cell, i) => (
                    <td key={i} className={`p-4 ${i === 0 ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The AI-Driven Assessment Revolution</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most significant structural change in educational assessment since 2023 has been the integration
          of AI-generated question banks into adaptive testing platforms. Historically, standardised tests relied
          entirely on empirically calibrated item banks — questions that had been trialled on thousands of
          students to establish their precise difficulty and discrimination parameters. This required years
          of norming work and significant institutional investment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          AI-generated questions — calibrated algorithmically using large language models trained on existing
          item banks — can now approximate the psychometric properties of traditional items at a fraction
          of the cost and time. The practical consequence is a significant democratisation of adaptive
          assessment: platforms that previously required school-level contracts or significant fees are
          now available to individual families.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The tradeoff is measurement precision. An empirically calibrated item has a known standard error;
          an AI-generated item&apos;s difficulty is estimated rather than measured. For families using
          AI-generated assessments as a diagnostic and progress tool — rather than as a formal placement test —
          this tradeoff is entirely acceptable. The score provides a meaningful directional benchmark;
          it should not be treated as equivalent to a proctored GL Assessment or CAT4 result.
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">For families using Eduentry:</strong> Treat the standardised
          score as a diagnostic benchmark — accurate for identifying strengths, gaps, and approximate
          percentile position. For formal placement decisions or 11+ admissions, a proctored assessment
          administered by a trained professional remains the gold standard.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Analysis of Major Global Testing Engines</h2>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. K-12 Multi-Stage Adaptive Testing (MST)</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Digital SAT and ISEB Common Pre-Test have both transitioned fully to Multi-Stage Adaptive
          Testing models. Unlike Item Response Theory (IRT) CAT — where each question is selected
          individually — MST uses pre-assembled modules of questions. A student&apos;s performance on the
          initial module determines which of two or three pre-built second modules they receive.
          The practical implication: early-stage accuracy determines the score ceiling.
        </p>
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 font-semibold text-gray-800 shadow-sm text-sm text-center">
              Module 1: Mixed-Difficulty Baseline
            </div>
          </div>
          <div className="flex justify-center text-gray-300 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="12" y1="4" x2="12" y2="20" /><polyline points="6 14 12 20 18 14" />
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-sm font-medium text-emerald-600 mb-2">High Accuracy (≥ 70%)</div>
              <div className="bg-white border border-emerald-200 rounded-xl px-4 py-3 text-sm text-gray-700">Module 2: Hard Module → Score ceiling 1600</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-amber-600 mb-2">Lower Accuracy (&lt; 70%)</div>
              <div className="bg-white border border-amber-200 rounded-xl px-4 py-3 text-sm text-gray-700">Module 2: Easy Module → Score ceiling ~1350</div>
            </div>
          </div>
        </div>
        <Callout color="amber">
          <strong className="text-amber-800">Strategic risk:</strong> A student who makes unforced errors
          in Module 1 routes to the lower-difficulty second module. Even a perfect score in Module 2 cannot
          recover the maximum possible scale score. Preparation for MST-based assessments must prioritise
          accuracy in early questions over speed.
        </Callout>
        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2. Standardised Age Score (SAS) Systems</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Used in GL Assessment&apos;s 11+ products, SAS normalises outcomes to account for the development
          gap between the oldest and youngest students in a cohort. A September-born child entering Year 6
          is almost 11; an August-born child in the same cohort may be only 10 years and 1 month old.
          Research consistently shows that the youngest children in a year group underperform their
          older classmates on standardised tests — not because of lower ability, but because of
          developmental lag that resolves as they age.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The SAS formula applies an age adjustment in months, comparing each child only against others
          born in the same month range. A raw score of 43 correct answers translates to a higher SAS
          for an August-born child than for a September-born child who answered the same questions
          correctly, because the bar is calibrated relative to the child&apos;s actual age. Parents
          of summer-born children should note that this adjustment is meant to level the field
          — but it is not a guarantee that summer-born children perform equally to autumn-born
          children in practice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Subject Adaptations and Curriculum Weightings</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-3">Mathematics &amp; Quantitative Logic</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>The trend:</strong> Abstract calculation is declining in favour of applied data handling,
              statistical interpretation, and multi-step non-routine problem solving.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Benchmark:</strong> High-tier performance requires procedural fluency up to two years
              ahead of the chronological grade level, with strong emphasis on interpreting real-world data.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-3">Verbal and Textual Analysis</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>The trend:</strong> Structural grammar tracking has declined in favour of advanced
              context decoding, inference, and synthesis across multiple conflicting texts.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Benchmark:</strong> Students are tested on high-density non-fiction passages with
              questions targeting implicit author intent — a skill rarely developed in standard school English.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-3">Spatial and Non-Verbal Reasoning</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>The trend:</strong> Non-verbal assessments increasingly use animated or dynamic stimuli
              in digital formats, testing mental rotation of 3D objects rather than 2D shapes alone.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Benchmark:</strong> Performance above the 90th percentile requires rapid and accurate
              pattern recognition — a skill that responds moderately to targeted practice.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-3">Scientific Reasoning</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong>The trend:</strong> In international frameworks (PISA, TIMSS), scientific literacy
              now emphasises experimental design critique and data interpretation over factual recall.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Benchmark:</strong> PISA Level 5 scientific literacy (top 8% globally) requires
              students to identify scientific questions in complex everyday contexts — not just recall facts.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Roadmap for International Academic Readiness</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Diagnostic Benchmarking', when: '18–24 Months Out', detail: 'Run a full diagnostic assessment covering all core subjects. Establish current standardised scores and percentile positions before purchasing any preparation materials. Without a baseline, preparation is untargeted.' },
            { step: '2', title: 'Curriculum Gap Mapping', when: '12–18 Months Out', detail: 'Compare your child\'s diagnostic profile against the target curriculum standard. Identify which subjects are on track, which are ahead, and which show a deficit. Allocate preparation time proportionally to gaps — not to strengths.' },
            { step: '3', title: 'Adaptive Testing Familiarisation', when: '6–12 Months Out', detail: 'Introduce digital, time-restricted adaptive practice. Children who have only practised with paper books often struggle with computer-based adaptive tests — not because of ability, but because of unfamiliarity with the format.' },
            { step: '4', title: 'Pacing and Accuracy Drills', when: '3–6 Months Out', detail: 'Implement strict per-question time targets. For GL Assessment 11+ papers: approximately 60 seconds per question. For Digital SAT: approximately 75 seconds per question. Time awareness under real conditions must be developed early.' },
            { step: '5', title: 'Target Score Calibration', when: 'Final Month', detail: 'Analyse all mock results through percentile bands, not raw percentages. Calibrate final school selection strategy based on verified 85th–95th percentile performance. Avoid adding new schools or changing strategy in the final 4 weeks.' },
          ].map(({ step, title, when, detail }) => (
            <div key={step} className="flex gap-4 p-5 rounded-xl border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center flex-shrink-0">{step}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-gray-900">{title}</span>
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">{when}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">References</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>OECD — PISA 2022 International Results in Mathematics, Reading and Science.</li>
          <li>IEA — TIMSS 2023 International Results in Mathematics and Science.</li>
          <li>The College Board — 2025–2026 Report on Digital SAT Performance Metrics and Cohort Scaling.</li>
          <li>GL Assessment — Technical Manual for Standardised Age Score Computation (2025 edition).</li>
          <li>IB Organisation — Annual Statistical Bulletin 2025, Diploma Programme candidate performance data.</li>
        </ul>
      </section>
    </>
  ),

  'how-to-prepare-for-11-plus': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The 11+ is one of the most misunderstood exams in primary education. Many families start too late,
        focus on the wrong subjects, or burn their child out with relentless drilling long before the exam
        arrives. This guide gives you a research-backed, practical framework for 11+ preparation at home —
        covering the right timeline, a subject-by-subject approach, how to use mock tests effectively,
        and how to keep the whole process manageable for your child.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the 11+ Actually Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The 11+ is not a single exam — it varies significantly depending on which exam board your target
          school uses. Before buying a single practice book, check which board your school works with,
          because this determines which subjects matter most and how they are tested.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { subject: 'Verbal Reasoning', detail: 'Problem-solving with words — analogies, word codes, classifications, sequences. This is the subject most children find least familiar because it is almost never taught in school. It requires specific, targeted preparation.' },
            { subject: 'Non-Verbal Reasoning', detail: 'Pattern recognition and abstract thinking using shapes and symbols. It tests spatial and logical intelligence rather than curriculum knowledge. It is harder to improve through practice than VR, but familiarity with question types meaningfully reduces errors.' },
            { subject: 'English', detail: 'Reading comprehension, grammar, vocabulary, and sometimes creative writing. Closely tied to the school curriculum, but exam technique — answering in full sentences, quoting the text — must be explicitly practised.' },
            { subject: 'Mathematics', detail: 'Number, fractions, algebra, geometry, and problem-solving. 11+ maths typically sits 12–18 months ahead of the Year 5/6 school curriculum. Speed without a calculator is essential.' },
          ].map(({ subject, detail }) => (
            <div key={subject} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{subject}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout>
          <strong className="text-indigo-900">GL Assessment</strong> (used in Kent, Essex, Hertfordshire
          and many individual schools) tests all four subjects separately. <strong>CEM</strong> (used in
          Buckinghamshire, Birmingham and some others) blends verbal ability, numerical reasoning, and
          spatial skills without labelling them by subject. <strong>ISEB</strong> tests English and Maths
          only. Always check your target school directly before buying preparation materials.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Start — and When Not To</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most educational specialists recommend beginning structured preparation 12–18 months before the
          exam. For most grammar schools, the 11+ is taken in September or October of Year 6, meaning
          serious preparation should begin in Year 4 or early Year 5. Starting before 18 months is usually
          counter-productive: children experience burnout well before the exam, and early preparation
          is forgotten if not regularly maintained.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          The most common mistake families make is starting with practice papers immediately, before
          establishing where their child currently stands. A diagnostic assessment first — covering all
          four subjects and producing a standardised score — tells you where the real gaps are. This
          prevents spending months drilling a subject the child has already mastered.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Timeframe</th>
                <th className="text-left p-4 font-semibold text-gray-700">Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['18+ months out', 'Run a baseline diagnostic assessment. Identify your child\'s standardised score and percentile. Don\'t buy practice books yet. Read widely every day.'],
                ['12–18 months out', 'Gentle familiarisation — one subject at a time. Focus on understanding concepts, not drilling. 20–30 minutes three times a week.'],
                ['6–12 months out', 'Structured weekly practice across all four subjects. First timed papers. Review every error together — understanding why matters more than the mark.'],
                ['3–6 months out', 'Full mock papers under real exam conditions. Identify remaining weak question types. Targeted revision on specific areas.'],
                ['6–8 weeks out', 'Final push on weak areas only. Re-test with a fresh diagnostic to measure progress. Reduce volume, maintain sharpness.'],
                ['Exam week', 'No new material. Light review, plenty of sleep, confidence-building. Review what your child is good at — not what worries them.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600 text-sm leading-relaxed">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-5">Subject-by-Subject Preparation</h2>

        <div className="space-y-7">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verbal Reasoning</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Verbal reasoning is the most teachable subject in the 11+. There are approximately 21 distinct
              question types in GL Assessment papers — analogies, codes, hidden words, odd-one-out, number
              series, and more. Every type is finite and pattern-based. Work through each type separately
              before mixing them in timed papers. Children who practise mixed papers too early confuse
              question types, which is one of the most common error patterns in the real exam.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vocabulary is the hidden foundation. A child who has never encountered the word
              &quot;amiable&quot; cannot answer a synonym question about it, regardless of how much
              verbal reasoning technique they have drilled. Wide reading — fiction, non-fiction, newspapers,
              magazines — is the most effective vocabulary-building strategy. Consider daily
              &quot;word of the day&quot; discussions and a dedicated vocabulary notebook.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Verbal Reasoning</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              NVR is the hardest subject to dramatically improve through practice, because it tests
              spatial and fluid intelligence rather than learned knowledge. However, familiarity with
              question formats — matrices, series, reflections, rotations, figure types — meaningfully
              reduces errors caused by confusion about what is being asked. Use visual practice books
              rather than text-heavy ones. For children who struggle with spatial reasoning, Lego,
              tangrams, and 3D puzzles are genuinely useful preparation activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Timing is critical in NVR: GL Assessment typically allocates around 50 seconds per
              question. Children who &quot;get stuck&quot; on a hard matrix and spend three minutes
              on it lose more marks from unanswered questions than from the single wrong answer.
              Teach your child to mark a difficult question and move on, returning at the end.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">English</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Wide reading remains the single most effective preparation for 11+ English — more effective
              than practice papers alone. Children who read broadly across fiction, non-fiction, and
              journalism develop the vocabulary, comprehension stamina, and implicit grammatical instinct
              that exam technique cannot fully substitute. Aim for 20–30 minutes of reading every day,
              across a range of genres.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For comprehension technique, teach your child three principles: answer in complete sentences
              that include the question; always support with a quote from the text; and read every question
              before reading the passage, so they know what to look for. Creative writing in the 11+
              rewards structure and ambitious vocabulary — practise planning a piece (introduction,
              three paragraphs, conclusion) before writing it.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mathematics</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              11+ maths typically covers content that is 12–18 months ahead of the standard Year 5/6
              school curriculum. The key topics to prioritise are: fractions (operations, equivalence,
              mixed numbers), percentages (of amounts, percentage change), ratio and proportion,
              basic algebra (solving for x, substitution), area and perimeter (including compound shapes),
              and data handling (averages, pie charts, probability). Multi-step word problems are
              consistently the area where children lose most marks.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Speed without a calculator is essential. Practice mental arithmetic every day — not as a
              formal exercise, but through daily activities like mental calculation of change, doubling
              and halving prices, or quick percentage estimation. Children who are slow at basic arithmetic
              run out of time on maths papers even when they know the method.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Building a Sustainable Weekly Routine</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most damaging preparation pattern is unpredictable — intense for a few weeks, then nothing
          for a month, then intense again. Consistent, modest practice outperforms erratic heavy practice
          by a significant margin, both for retention and for managing your child&apos;s anxiety levels.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A realistic weekly routine in the 6–12 months before the exam looks like this:
          two 45-minute sessions per week covering individual question types or specific topics,
          plus one longer session (60–75 minutes) for a partial or full timed paper, followed by
          a structured review of errors. That is approximately three hours of focused preparation
          per week — manageable alongside school homework without crowding out childhood.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Rotate subjects rather than drilling one to exhaustion. If your child struggled with verbal
          reasoning codes last week, this week focus on non-verbal matrix questions — then return to
          codes next week. Spaced repetition consolidates learning more effectively than massed practice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use Mock Tests Effectively</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mock exams are only useful if they are treated exactly like the real exam. This means: a quiet
          room, a proper desk, strict timing with no stopping, and no help during the test. Children
          who have practised with unlimited time or with a parent sitting next to them are often
          unprepared for the psychological pressure of the real exam environment.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start introducing timed mock papers 6 months before the exam. In the final 3 months, aim for
          one full mock per fortnight. After every mock, review every error together — but focus on
          understanding the correct method, not on the mark. A child who understands why they got
          question 14 wrong is more prepared for the exam than one who simply knows the score.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">Use percentile, not percentage.</strong> A score of 72%
          correct only tells you what fraction of questions your child answered. It tells you nothing
          about whether that was a good performance or a poor one relative to other children. Always
          compare against standardised percentile data — a score of 72% might place your child in
          the 80th percentile or the 40th percentile depending on the paper&apos;s difficulty.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Exam Pressure</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Anxiety is one of the biggest performance inhibitors in children sitting the 11+. A child
          who is well-prepared but highly anxious will consistently underperform in exam conditions
          compared to a slightly less-prepared child who is relaxed and confident. Managing the
          emotional side of 11+ preparation is not separate from academic preparation — it is
          part of it.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Signs of problematic anxiety include sleep disruption, refusing to practise, emotional
          outbursts after poor mock results, or physical complaints (headaches, stomach aches) on
          practice days. If these appear, reduce the practice volume immediately and reintroduce
          a more gradual schedule.
        </p>
        <p className="text-gray-700 leading-relaxed">
          On the day before the exam: no new material, no practice papers. Light activity, a normal
          evening routine, an early bedtime. Remind your child that their best is enough — and that
          a grammar school is one pathway, not the only one. Children who sit the 11+ believing
          their entire future depends on it underperform. Children who sit it relaxed and curious
          perform at or above their practice level.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The First Step: Get a Baseline Score</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before buying any practice book or engaging a tutor, take a free diagnostic assessment.
          This tells you exactly where your child currently stands — which subjects are strong,
          which have gaps, and what their current standardised percentile position is.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Eduentry covers all four 11+ subjects (English, Mathematics, Verbal Reasoning, Non-Verbal
          Reasoning) and produces a standardised score on the same scale (mean 100, SD 15) used
          by GL Assessment. Not sure what a standardised score means?{' '}
          <Link href="/blog/what-is-a-standardised-score" className="text-indigo-600 hover:underline">
            Our guide to standardised scores
          </Link>{' '}
          explains exactly how to read and use your child&apos;s results. Retesting every 3–4 months
          tracks real progress over time.
        </p>
      </section>
    </>
  ),

  'what-is-a-standardised-score': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        If your child has sat an educational assessment recently — an 11+ mock, a CAT4 test at school,
        or an online diagnostic — you have probably encountered a &ldquo;standardised score&rdquo; alongside
        the raw percentage. Most parents ignore the standardised score and focus on the percentage.
        That is the wrong instinct. Here is what a standardised score actually means, why it tells you
        far more than a percentage, and how to interpret it for decisions about your child&apos;s education.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem with Raw Scores</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A raw score — say, 43 out of 60 — tells you one thing: your child answered 72% of the questions
          correctly on this particular test on this particular day. It does not tell you whether the test
          was easy or hard. It does not tell you how other children at the same age performed. It does not
          tell you whether 72% represents strong performance or weak performance for a child of that age.
          And it does not allow any meaningful comparison between this test and a different test your child
          takes in three months.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          These are precisely the questions that parents preparing for selective admissions — or simply
          trying to understand how their child is progressing — need to answer. Raw scores cannot answer
          them. Standardised scores can.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A standardised score transforms a raw score into a number that accounts for age, test difficulty,
          and the performance of a reference population. Two children who both answer 43 out of 60 questions
          correctly may receive very different standardised scores if one is 18 months older than the other,
          or if they sat tests of different difficulties. The standardised score puts them on a level
          playing field — comparing each child only against others of the same age.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Standardised Scale</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Almost all UK standardised assessments — including GL Assessment&apos;s 11+, CAT4, NFER, and
          Eduentry — use the same scale: a mean (average) of 100 and a standard deviation of 15.
          This is sometimes called the &quot;standard score&quot; scale and it is the same scale used
          by Wechsler IQ tests, the Stanford-Binet, and most professional psychometric assessments.
          This shared scale makes comparisons meaningful: a score of 115 on Eduentry and a score
          of 115 on a CAT4 test represent the same relative position within the same-age population.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">100</div>
            <div className="text-sm text-indigo-600 font-medium">Mean (average)</div>
            <div className="text-xs text-gray-500 mt-1">50th percentile</div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">15</div>
            <div className="text-sm text-indigo-600 font-medium">Standard deviation</div>
            <div className="text-xs text-gray-500 mt-1">the unit of spread</div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">68%</div>
            <div className="text-sm text-indigo-600 font-medium">Score between 85–115</div>
            <div className="text-xs text-gray-500 mt-1">within one SD</div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Score range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Classification</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. percentile</th>
                <th className="text-left p-4 font-semibold text-gray-700">% of population</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['130+', 'Very Superior', 'Top 2%', '~2%'],
                ['120–129', 'Superior', '91st–98th', '~7%'],
                ['110–119', 'Above Average', '75th–91st', '~16%'],
                ['95–109', 'Average', '37th–63rd', '~25%'],
                ['85–94', 'Below Average', '16th–36th', '~16%'],
                ['70–84', 'Low Average / Needs Support', '2nd–15th', '~14%'],
              ].map(([range, label, pct, pop]) => (
                <tr key={range} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono font-semibold text-gray-900">{range}</td>
                  <td className="p-4 text-gray-700">{label}</td>
                  <td className="p-4 text-gray-500">{pct}</td>
                  <td className="p-4 text-gray-400">{pop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          An important property of this scale: because the standard deviation is 15, each 15-point step
          represents exactly one standard deviation. A score of 115 (one SD above the mean) is approximately
          the 84th percentile. A score of 130 (two SDs above the mean) is approximately the 98th percentile.
          These relationships are consistent across all assessments that use this scale.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Percentile?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The percentile is the most intuitive way to interpret a standardised score. Your child&apos;s
          percentile tells you what percentage of children of the same age they performed better than.
          A score in the <strong>84th percentile</strong> means your child performed better than 84%
          of children their age — and was outperformed by 16%.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          There are two common misconceptions about percentiles worth addressing. First: the 50th percentile
          is not a &quot;bad&quot; score — it means exactly average, better than half and worse than half.
          Many parents see a score in the 50th percentile and assume their child is struggling. They are not;
          they are performing at the population median. Second: percentile is not the same as percentage.
          A child who answers 70% of questions correctly may be in the 85th percentile if the test was hard,
          or the 30th percentile if the test was easy.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-700 mb-4">
          {[
            ['Standardised score 130', '98th percentile', 'Top 2% of same-age children'],
            ['Standardised score 120', '91st percentile', 'Top 9%'],
            ['Standardised score 115', '84th percentile', 'Competitive grammar school range'],
            ['Standardised score 110', '75th percentile', 'Above average'],
            ['Standardised score 100', '50th percentile', 'Exactly average'],
            ['Standardised score 90', '25th percentile', 'Below average'],
          ].map(([score, pct, note]) => (
            <li key={score} className="flex justify-between items-center border-b border-gray-50 pb-2">
              <span className="font-medium">{score}</span>
              <span className="text-indigo-600 font-medium">{pct}</span>
              <span className="text-gray-400 text-xs">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Standardised Age Score (SAS)?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The SAS is the specific standardised score format used by GL Assessment in the 11+ exam.
          It introduces one additional adjustment: the child&apos;s exact age in months at the time
          of the test.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          This matters because children taking the 11+ in September of Year 6 range in age from
          approximately 10 years and 2 months to 11 years and 1 month — a developmental difference
          that is significant at this age. Research consistently shows that the oldest children
          in a cohort outperform the youngest on standardised tests, not because of greater
          ability, but because of developmental advantage.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The SAS formula compares each child only against others born in the same month range
          — typically within a two-month window. A child born in August who answers 43 questions
          correctly may receive a higher SAS than a September-born child who also answered 43
          correctly, because the bar is set relative to August-born children. The SAS effectively
          gives summer-born children a fair chance despite their younger age.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">Practical implication for parents:</strong> If your child
          is summer-born, do not panic when a September-born classmate seems to be performing better
          in practice papers. The SAS adjusts for this. What matters is your child&apos;s performance
          relative to children born in the same month range — not relative to the whole cohort.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Standardised Scores Are Calculated</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          For parents curious about the mechanics: most modern standardised assessments use
          Item Response Theory (IRT) to calculate scores, rather than simply counting the
          number of correct answers. IRT estimates the child&apos;s underlying ability level
          (often denoted θ, &quot;theta&quot;) based on which specific questions were answered
          correctly and incorrectly — not just how many.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In a 2-Parameter Logistic (2PL) IRT model, each question has a difficulty parameter
          and a discrimination parameter. Getting a hard question right provides stronger evidence
          of high ability than getting an easy question right. Getting an easy question wrong
          is stronger evidence of low ability than getting a hard question wrong.
          After estimating theta from the pattern of responses, the score is converted
          to the standardised scale (mean 100, SD 15) using a linear transformation.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The practical implication: on an adaptive test like Eduentry, getting early questions
          right matters slightly more than it would on a fixed test, because early responses
          have greater influence on the initial theta estimate. This is why maintaining composure
          and accuracy in the opening questions — rather than rushing to &quot;save time&quot;
          for later — is important strategy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Score Is Needed for Grammar School?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Grammar school cut-offs vary by area, school, and year — but the following ranges
          apply as general benchmarks for 2026 entry:
        </p>
        <ul className="space-y-3 mb-5">
          <Bullet><strong>SAS 111–114:</strong> Borderline at many schools. May be placed on a selective register but below the competitive cutoff. Distance from school becomes the deciding factor.</Bullet>
          <Bullet><strong>SAS 115–120:</strong> Comfortably within the selective range for most grammar schools in Kent, Essex, and Hertfordshire. Strong enough to be offered a place at most schools in these areas if within catchment.</Bullet>
          <Bullet><strong>SAS 121–128:</strong> Required for the most competitive grammar schools, including those in Sutton, Buckinghamshire, and selective schools in Birmingham.</Bullet>
          <Bullet><strong>SAS 128+:</strong> Needed for the most oversubscribed London schools — Queen Elizabeth&apos;s Boys (Barnet) and The Henrietta Barnett School — where demand far exceeds supply even at very high scores.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          For a full breakdown by area, see our{' '}
          <Link href="/blog/grammar-school-entry-requirements-2026" className="text-indigo-600 hover:underline">
            Grammar School Entry Requirements 2026
          </Link>{' '}
          guide, which covers every major grammar school area in England with specific score benchmarks.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do with Your Child&apos;s Score</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When you receive a standardised score, the most important thing to do is resist interpreting
          it as a fixed characteristic of your child. A score at the 65th percentile today does not mean
          your child will be at the 65th percentile in 12 months. Standardised scores at this age are
          genuinely responsive to targeted preparation — particularly in verbal reasoning and maths,
          which are the most coachable subjects.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Use the score diagnostically. A child scoring below 95 in verbal reasoning and above 115 in
          mathematics needs a completely different preparation plan than a child scoring 108 across
          all four subjects. The percentile tells you where they are. The subject breakdown tells
          you what to work on. For a subject-by-subject breakdown of verbal reasoning specifically,
          see our{' '}
          <Link href="/blog/verbal-reasoning-11-plus-guide" className="text-indigo-600 hover:underline">
            verbal reasoning question types guide
          </Link>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Re-test every 3–4 months to measure genuine progress. Month-to-month variation is largely noise.
          A 3–4 month gap allows enough time for real changes in performance to show in the score —
          and enough time for preparation to have had a measurable effect.
        </p>
      </section>
    </>
  ),

  'verbal-reasoning-11-plus-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Verbal reasoning is the subject that surprises families most during 11+ preparation. Parents
        who were excellent students themselves often find it unfamiliar, and children who are strong
        at English sometimes struggle with it initially because it tests a completely different skill
        — not reading ability, but logical problem-solving with words. The good news: verbal reasoning
        is highly pattern-based. The question types are finite, learnable, and respond well to systematic
        practice. This guide covers every major question type with worked examples, a preparation plan,
        and the most common errors to avoid.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Verbal Reasoning Actually Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Verbal reasoning tests a child&apos;s ability to think logically using language — to identify
          relationships between words, spot patterns in letter and number sequences, and solve problems
          that involve both linguistic and logical reasoning simultaneously. It is distinct from English
          comprehension or grammar in an important way: verbal reasoning requires minimal literary
          knowledge. A child does not need to have read widely or studied grammar rules to excel at
          verbal reasoning. They need to be quick, systematic, and accurate at pattern recognition.
        </p>
        <p className="text-gray-700 leading-relaxed">
          GL Assessment 11+ papers typically contain 50–80 verbal reasoning questions to be completed
          in 45–50 minutes — approximately one question per minute. Speed and accuracy together
          are essential. A child who knows every question type but is slow will run out of time.
          A child who is fast but careless will make errors on questions they understand.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Main Question Types</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          GL Assessment verbal reasoning papers use a recognised set of question types, each with
          its own logic. The key to preparation is working through each type separately until it
          is comfortable, then mixing them in timed practice.
        </p>
        {[
          {
            type: '1. Word Analogies',
            desc: 'Identify the relationship between the first pair of words and apply it to complete the second pair.',
            example: 'HOT is to COLD as FAST is to ___',
            answer: 'SLOW — both pairs are opposites (antonyms)',
            tip: 'Name the relationship out loud before looking at the options: "opposite," "type of," "part of," "used for." Then apply that relationship. Never assume the relationship — verify it.',
          },
          {
            type: '2. Odd One Out',
            desc: 'Find the word that does not belong in the group.',
            example: 'apple  banana  carrot  pear  grape',
            answer: 'CARROT — a vegetable; all others are fruits',
            tip: 'Try multiple categories: food type, colour, shape, number of syllables, alphabetical pattern. The trap answer is usually one that fits a plausible but wrong category. Always look for the most fundamental difference.',
          },
          {
            type: '3. Word Codes',
            desc: 'Work out a letter-substitution or shift code from a given example, then apply it.',
            example: 'If CAT is coded as DBU, what is DOG coded as?',
            answer: 'EPH — each letter shifted +1 in the alphabet (C→D, A→B, T→U)',
            tip: 'Find the pattern by checking at least two letter pairs before applying the rule. Common patterns: shift forward or backward by a fixed amount, reverse letter order, use alphabet position numbers.',
          },
          {
            type: '4. Hidden Words',
            desc: 'Find a real word hidden at the boundary between two adjacent words in a sentence.',
            example: '"She sat by the east gate" contains a hidden 4-letter word',
            answer: 'EAST → no; look at "the east": thEAST → EAST. Or "by the": byTHE → no. Here: "at" + "e" → ATE (3 letters). Scan each boundary systematically.',
            tip: 'Work left to right, checking each word boundary. Take the last 1–3 letters of a word and add the first 1–2 letters of the next. Practise until this scan becomes automatic.',
          },
          {
            type: '5. Word Sequences and Letter Series',
            desc: 'Identify the next item in a series of words or letters following a logical pattern.',
            example: 'AB, CD, EF, ___',
            answer: 'GH — consecutive letter pairs moving forward through the alphabet',
            tip: 'Convert letters to their alphabet positions (A=1, B=2, etc.) if the pattern is not immediately obvious. Many series involve +2, +3, or alternating steps rather than simple +1 progression.',
          },
          {
            type: '6. Synonyms and Antonyms',
            desc: 'Choose the word most similar to (synonym) or most opposite to (antonym) a given word.',
            example: 'Which word is most similar to ELATED? → miserable / delighted / confused / exhausted',
            answer: 'DELIGHTED — both mean very happy. "Miserable" is its antonym.',
            tip: 'Read the instruction carefully every time — "most similar" and "most opposite" require opposite reasoning. Wide vocabulary is the only reliable preparation: drills and games beat flashcards.',
          },
          {
            type: '7. Compound Words and Word Building',
            desc: 'Find a word that can follow the first word and precede the second to make two compound words.',
            example: 'DOOR ( ___ ) WORK',
            answer: 'FRAME — DOORFRAME and FRAMEWORK are both real compound words',
            tip: 'Test common bridge words first: WORK, SIDE, LINE, BOOK, HOUSE, LIGHT. If none fit, try less common ones. Always verify both combinations are real words.',
          },
          {
            type: '8. Missing Letters',
            desc: 'Identify the missing letter that completes both given words simultaneously.',
            example: 'P _ N   and   B _ T',
            answer: 'A — PAN and BAT (or PEN and BET, PIN and BIT — the pattern requires one letter to make both words valid)',
            tip: 'Mentally test each vowel (A, E, I, O, U) first, then common consonants. Look at both words simultaneously — each letter must produce a valid word in both positions.',
          },
        ].map(({ type, desc, example, answer, tip }) => (
          <div key={type} className="border border-gray-100 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-gray-900 mb-1">{type}</h3>
            <p className="text-sm text-gray-500 mb-4">{desc}</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Example</div>
              <div className="font-mono text-gray-800 text-sm mb-2">{example}</div>
              <div className="text-xs text-emerald-700 font-semibold leading-relaxed">Answer: {answer}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5 flex-shrink-0 h-fit">Tip</span>
              <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Building Vocabulary: The Hidden Lever</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Vocabulary is the foundation beneath verbal reasoning skill. A child who encounters &quot;elated,&quot;
          &quot;obstinate,&quot; or &quot;benevolent&quot; for the first time in a synonym question cannot
          answer it correctly regardless of how well they understand the question type. The vocabulary
          gap between children of the same age who read widely and those who read infrequently
          is substantial — and it explains much of the variation in verbal reasoning scores
          that seems otherwise inexplicable.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The most effective vocabulary-building strategy is wide, consistent reading — fiction and
          non-fiction, books and quality news sources, across a range of genres and difficulty levels.
          Twenty minutes a day, maintained for 12 months, produces more measurable improvement in
          verbal reasoning scores than any dedicated vocabulary workbook.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Supplementary strategies: a &quot;word of the day&quot; notebook (5 new words per week,
          each used in two sentences); word family trees (elate → elated → elation → elating);
          and deliberate use of unfamiliar words in conversation. Word games — Scrabble, Boggle,
          crosswords — build vocabulary engagement without the pressure of formal study.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For a complete preparation timeline and strategy covering all four 11+ subjects, see our{' '}
          <Link href="/blog/how-to-prepare-for-11-plus" className="text-indigo-600 hover:underline">
            full guide to preparing for the 11+ at home
          </Link>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
        <ul className="space-y-4">
          <Cross><strong>Not reading all four options.</strong> Many children mark the first answer that looks plausible without checking the others. Often a later option is more precisely correct — especially in synonym/antonym questions.</Cross>
          <Cross><strong>Spending too long on one question.</strong> GL Assessment VR papers allow approximately one minute per question. Mark any question that takes more than 90 seconds and return to it at the end. An unanswered question scores zero; a guessed answer has a 25% chance of being correct.</Cross>
          <Cross><strong>Confusing question types.</strong> Children who practise mixed papers before mastering individual types often misread questions — approaching a word code question as if it were an analogy. Work through each type to fluency before mixing.</Cross>
          <Cross><strong>Relying entirely on drilling.</strong> Drilling question types improves technique. Drilling cannot substitute for vocabulary. Both are necessary. Families who drill constantly but do not encourage reading hit a ceiling in their child&apos;s verbal reasoning improvement.</Cross>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect on Test Day</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most 11+ verbal reasoning papers are presented digitally or on paper in an exam hall environment.
          Children are given specific instructions at the start — including whether guessing is penalised
          (GL Assessment does not penalise guessing; answer every question).
        </p>
        <p className="text-gray-700 leading-relaxed">
          The key exam-day skill is time management. Practise with a clearly visible clock or timer.
          Teach your child to check the time after every 10 questions — if behind pace, skip a hard
          question and return later. If ahead, slow down and re-read answers. Children who practise
          with no time pressure are genuinely unprepared for the pace of the real exam.
        </p>
      </section>
    </>
  ),

  'grammar-school-entry-requirements-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        &ldquo;What score does my child need?&rdquo; is the first question every family preparing for
        the 11+ wants answered. The honest answer is: it depends on the area, the specific school,
        and the competitiveness of that year&apos;s cohort. But there are clear benchmarks — and this
        guide covers them all. From the exam board each area uses to the specific SAS ranges needed
        for the most selective schools, here is everything a family needs to understand about
        grammar school entry requirements in 2026.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Grammar School Selection Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Grammar schools in England are legally permitted to select their entire intake by academic
          ability under the School Standards and Framework Act 1998. This sets them apart from all
          other state schools, which must admit without selecting by ability. Most grammar schools
          use the 11+ exam — taken in September or October of Year 6 — as the primary selection
          instrument. A child who scores above the school&apos;s formal pass mark is placed on the
          &quot;selective register.&quot;
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Being on the selective register is necessary but not sufficient for a place. Oversubscribed
          schools — which is most grammar schools in competitive areas — then rank selective applicants
          by secondary criteria. These typically prioritise, in order: looked-after children; siblings
          already at the school; proximity to the school (measured as straight-line distance from
          home to school). At the most competitive schools in London, a child can score 125 on the
          SAS and still fail to get a place because children who scored 128 live closer.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is why families in competitive areas — particularly London — need to understand that
          the pass mark and the competitive score are two different numbers. The pass mark is the
          floor. The competitive score is what actually gets a place at a specific oversubscribed school.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Exam Boards Are Used?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            { board: 'GL Assessment', areas: 'Kent, Essex, Hertfordshire, most individual schools', notes: 'Produces a Standardised Age Score (SAS), adjusted for age in months. Tests Verbal Reasoning, Non-Verbal Reasoning, English and Maths in separate papers. The most widely used 11+ format in England.' },
            { board: 'CEM (Durham University)', areas: 'Buckinghamshire, some Birmingham schools, some others', notes: 'Produces an age-standardised score. Questions blend verbal ability, numerical reasoning, and spatial reasoning without labelling by subject. Deliberately harder to prepare for using standard VR practice papers.' },
            { board: 'ISEB Common Pre-Test', areas: 'Independent schools and some selective academies', notes: 'Tests English, Maths, Verbal Reasoning and Non-Verbal Reasoning separately. Used for both 11+ and 13+ entry at independent schools. Computer-adaptive format.' },
            { board: 'School-set papers', areas: "King Edward's Foundation (Birmingham), some London schools", notes: 'Written by the school. Typically tests English and Mathematics at a level significantly above the National Curriculum. Harder to prepare for because there are no official practice materials.' },
          ].map(({ board, areas, notes }) => (
            <div key={board} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-1">{board}</div>
              <div className="text-xs font-medium text-indigo-600 mb-2">{areas}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Area-by-Area Score Benchmarks 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-5">
          The following ranges are indicative based on typical pass marks and historical competition
          levels. Individual school cut-offs change year to year based on the cohort. Always
          check your target school&apos;s published admissions policy directly.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Area</th>
                <th className="text-left p-4 font-semibold text-gray-700">Exam Board</th>
                <th className="text-left p-4 font-semibold text-gray-700">Target SAS</th>
                <th className="text-left p-4 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Kent', 'GL Assessment', '115–121', '32 grammar schools. Cut-offs vary by school and town. Judd and Tonbridge Grammar are among the most competitive.'],
                ['Buckinghamshire', 'CEM', '118+', '13 schools. Fully selective county. The test is harder to prepare for than GL Assessment papers.'],
                ['London (Barnet)', 'GL Assessment', '121–132', 'QE Boys and Henrietta Barnett are among the most selective state schools in England.'],
                ['London (Sutton)', 'GL Assessment', '118–125', 'Nonsuch, Wallington, Wilson\'s, Sutton Grammar. Sutton Consortium shares one test.'],
                ['Birmingham (KE Foundation)', 'Own papers', '119+', 'King Edward\'s Foundation schools are highly selective with school-set English and Maths papers.'],
                ['Essex', 'GL Assessment', '112–118', 'Colchester Royal Grammar, Westcliff High. Lower competition than London or Kent.'],
                ['Hertfordshire', 'GL Assessment', '111–115', 'Dame Alice Owen\'s, Watford Grammar (Boys/Girls). Distance is a key tie-breaker.'],
                ['Gloucestershire', 'GL Assessment', '113–118', 'Pate\'s Grammar is most selective. All four schools use GL Assessment.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-gray-900">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                  <td className="p-4 font-mono font-semibold text-indigo-700">{row[2]}</td>
                  <td className="p-4 text-gray-500 text-xs leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Counts as a Competitive Score?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          There is an important distinction between passing the 11+ and being competitive for a place.
          Passing — scoring above the formal pass mark — means a child is academically suitable for
          grammar school education. Being competitive means scoring high enough to actually secure a
          place at a specific oversubscribed school, given the secondary criteria.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In less competitive areas (parts of Essex, Hertfordshire, Gloucestershire), passing and being
          competitive are roughly the same: most children who score above the pass mark and live within
          a reasonable distance get a place. In highly competitive areas (London, top Kent schools,
          Buckinghamshire), the competitive score is significantly above the published pass mark.
          At Queen Elizabeth&apos;s Boys, for example, the pass mark might be SAS 111, but the
          median offered applicant scores closer to 127–130.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Borderline Zone</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Most schools operate an informal borderline band — typically 2–4 SAS points either side
          of the published pass mark. Children who fall within this band are considered &quot;borderline&quot;
          and may be offered a place through the normal secondary criteria process (siblings, distance)
          if they live sufficiently close to the school.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Being in the borderline band is not the same as failing. Many children in this range are
          offered places at their first-choice school because their secondary criteria are strong
          (for example, they live within half a mile of the school). It is worth researching
          the distance criterion for each target school: some schools publish data on
          the maximum distance at which a place was offered in the previous year.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Appeals Process</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          If your child is not offered a place at a grammar school for which they sat the 11+,
          you have the right to appeal. Appeals are heard by an independent panel and can succeed
          on two grounds: either the admissions authority made an error in applying their published
          criteria (a &quot;procedural error&quot; appeal), or the child&apos;s interests in attending
          the school outweigh the school&apos;s interest in limiting class sizes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          In practice, grammar school appeals are harder to win than non-selective school appeals
          because the school can legitimately argue that the child&apos;s score means they are not
          suitable for the grammar school curriculum. However, appeals can succeed — particularly
          where there is compelling evidence that the child&apos;s result was not representative
          of their true ability: for example, if they were ill on the day of the exam
          and can provide medical evidence.
        </p>
        <p className="text-gray-700 leading-relaxed">
          An independent standardised assessment taken around the time of the 11+ — showing
          a higher score than the official result — is one of the most useful pieces of evidence
          in a grammar school appeal. It provides an objective, third-party benchmark suggesting
          the exam result was an underperformance.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What If Your Child Doesn&apos;t Pass?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Not passing the 11+ does not mean your child cannot access an excellent secondary education.
          In most areas, the majority of children attend good or outstanding comprehensive schools
          that provide strong academic outcomes. Many children who do not pass the 11+ at 11 gain
          entry to sixth form at grammar schools at 16, where the selection is typically by
          GCSE grade rather than an entrance exam.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Some independent schools also offer means-tested bursaries that make grammar school
          alternatives accessible to families who could not otherwise afford them. If your child
          narrowly misses the 11+, it is worth investigating these options alongside the
          strong comprehensive schools in your area.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Eduentry Scores Relate to the 11+</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry uses the same standardised scale as GL Assessment (mean 100, standard deviation 15).
          An Eduentry score of 115 places a child at the 84th percentile — which corresponds to
          the competitive entry range for most grammar schools outside London. An Eduentry score
          of 121 corresponds to approximately the 92nd percentile — competitive for the majority
          of selective schools in England.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The key caveat: Eduentry&apos;s questions are AI-generated and have not been empirically
          normed on large populations. The score reflects the standardised scale, not a precise
          GL Assessment SAS equivalent. Use Eduentry scores as a directional benchmark and a
          progress-tracking tool — not as a definitive prediction of 11+ performance. For a full
          explanation of how standardised scores work and what percentiles mean,{' '}
          <Link href="/blog/what-is-a-standardised-score" className="text-indigo-600 hover:underline">
            read our standardised score guide
          </Link>. For a step-by-step home preparation plan, see our{' '}
          <Link href="/blog/how-to-prepare-for-11-plus" className="text-indigo-600 hover:underline">
            complete guide to preparing for the 11+ at home
          </Link>.
        </p>
      </section>
    </>
  ),
}
