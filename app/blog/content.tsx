import Link from 'next/link'

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
        <span className="w-2 h-2 rounded-full bg-indigo-500 block" />
      </span>
      <span className="text-gray-700 leading-relaxed">{children}</span>
    </li>
  )
}

function Callout({ color = 'indigo', children }: { color?: 'indigo' | 'amber' | 'emerald'; children: React.ReactNode }) {
  const styles = {
    indigo: 'bg-indigo-50 border-indigo-100',
    amber: 'bg-amber-50 border-amber-100',
    emerald: 'bg-emerald-50 border-emerald-100',
  }
  return (
    <div className={`${styles[color]} border rounded-2xl p-6`}>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  )
}

const CONTENT: Record<string, React.ReactNode> = {
  'global-academic-benchmarks-report-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Predicting and tracking student placement success requires an understanding of cross-border data metrics.
        As regional and international educational boards integrate adaptive digital testing models, standard
        cut-off expectations are shifting. This report details the global performance parameters, standardised
        testing trends, and milestone targets across primary, secondary, and pre-university systems for the
        2026 academic cycle.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">2026 Global Performance Baselines &amp; Data-Driven Milestones</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          To evaluate student trajectories accurately, educational consultants analyse raw scores translated into
          standardised metrics. Standardised modelling removes discrepancies across varying global test
          conditions by establishing an immutable global mean.
        </p>
        <ul className="space-y-5 mb-6">
          <Bullet>
            <strong>11+ Verbal Reasoning Trend (2026):</strong> Across competitive UK and international grammar
            pathways, the baseline Standardised Age Score (SAS) is anchored at 100. Top-tier selective placement
            generally requires an SAS threshold between 115 and 121.
          </Bullet>
          <Bullet>
            <strong>Global Mathematics Competency (PISA/TIMSS Benchmarks):</strong> Based on multi-year
            aggregate data, top-performing international hubs (Singapore, Hong Kong, Estonia) maintain a
            mathematics scale score of 540–575, compared to the OECD median of 472.
          </Bullet>
          <Bullet>
            <strong>The Pre-University Shift (SAT/ACT Adaptive Testing):</strong> Following full
            digitisation of international college entry frameworks, the median score for the top 10% of
            global applicants has consolidated at 1480+ on the Digital SAT, with an average sub-score
            of 720+ in Evidence-Based Reading and Writing.
          </Bullet>
        </ul>
        <Callout>
          <strong className="text-indigo-900">Key takeaway:</strong> Raw scores are increasingly obsolete.
          Educational institutions now prioritise percentile ranking metrics adjusted for age and demographic
          cohorts. For international transitions, a student must track in the 85th percentile or higher within
          their specific target curriculum to be considered competitive for selective admissions.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Admissions Frameworks and Standardised Baselines</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Different tiers of education rely on entirely different assessment ecosystems. The table below outlines
          the core international benchmarks across primary, secondary, and pre-university checkpoints.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Assessment Tier</th>
                <th className="text-left p-4 font-semibold text-gray-700">Core Standardised Metrics</th>
                <th className="text-left p-4 font-semibold text-gray-700">2026 Global Competitive Baseline</th>
                <th className="text-left p-4 font-semibold text-gray-700">Assessment Engine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['Primary Admissions (Age 11+)', 'Standardised Age Score (SAS)', '115–121+', 'GL Assessment / CEM / ISEB'],
                ['Middle Years Baseline (Age 14–15)', 'Scale Scores / Proficiency Bands', 'Level 4+ (PISA Baseline)', 'OECD / National Assessment Frameworks'],
                ['US/International University Track', 'Digital Scale Score (400–1600)', '1450+ (Ivy Plus Average: 1540+)', 'College Board (Digital SAT)'],
                ['UK / Commonwealth University Track', 'Grade Boundaries (A*–U / 9–1)', 'Minimum 3 A-Level Predictions at A*/A', 'UCAS / Pearson Edexcel / Cambridge'],
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Analysis of Major Global Testing Engines</h2>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. K-12 Multi-Stage Adaptive Testing (MST)</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Modern standardised test engines, notably the Digital SAT and the ISEB Common Pre-Test, have completely
          transitioned to Multi-Stage Adaptive Testing models. A student&apos;s performance on the initial module
          determines the algorithmic difficulty of the subsequent module.
        </p>
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 font-semibold text-gray-800 shadow-sm text-sm text-center">
              Module 1: Baseline Question Mix
            </div>
          </div>
          <div className="flex justify-center text-gray-300 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="4" x2="12" y2="20" />
              <polyline points="6 14 12 20 18 14" />
            </svg>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-sm font-medium text-emerald-600 mb-2">High Accuracy Performance</div>
              <div className="bg-white border border-emerald-200 rounded-xl px-4 py-3 text-sm text-gray-700">Module 2: Advanced Questions Route</div>
              <div className="text-xs text-emerald-600 mt-2">↑ Higher score ceiling range</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-amber-600 mb-2">Lower Accuracy Performance</div>
              <div className="bg-white border border-amber-200 rounded-xl px-4 py-3 text-sm text-gray-700">Module 2: Standard Questions Route</div>
              <div className="text-xs text-amber-600 mt-2">Capped max score threshold</div>
            </div>
          </div>
        </div>
        <Callout color="amber">
          <strong className="text-amber-800">Strategic risk:</strong> If a student makes unforced errors in
          Module 1, the algorithm routes them to a lower-difficulty Module 2. This caps their maximum possible
          scale score, regardless of whether they achieve perfect accuracy in the second phase.
        </Callout>
        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">2. Standardised Age Score (SAS) Systems</h3>
        <p className="text-gray-700 leading-relaxed">
          Used primarily in lower secondary and grammar entry models, SAS normalises outcomes to account for
          development gaps between the oldest and youngest students in a cohort. A 10-month age gap equals
          significant vocabulary variance. The formula factors in chronological age in months to generate a
          standard deviation curve where 100 is the exact median.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Subject Adaptations and Curriculum Weightings</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-3">Mathematics &amp; Quantitative Logic</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <strong>The trend:</strong> Global standardisations are moving away from abstract calculations toward applied data handling and non-routine problem solving.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Benchmark indicator:</strong> High-tier performance bands require procedural fluency up to two years ahead of the child&apos;s chronological grade level.
            </p>
          </div>
          <div className="border border-gray-100 rounded-xl p-5">
            <div className="font-semibold text-gray-900 mb-3">Verbal and Textual Analysis</div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              <strong>The trend:</strong> Structural grammar tracking has dropped in favour of advanced context decoding and informational text analysis.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Benchmark indicator:</strong> Students are tested on high-density non-fiction passages, with questions targeting implicit author intent and synthesis of conflicting texts.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Roadmap for International Academic Readiness</h2>
        <div className="space-y-4">
          {[
            { step: '1', title: 'Curriculum Gap Mapping', when: '18–24 Months Out', detail: 'Run international diagnostic comparisons to identify systemic gaps in data handling or advanced textual interpretation.' },
            { step: '2', title: 'Adaptive Testing Familiarisation', when: '12 Months Out', detail: 'Move students off linear paper-based practice sets. Introduce digital, time-restricted platforms to build stamina for multi-stage adaptive algorithmic testing environments.' },
            { step: '3', title: 'Pacing Optimisation Intervals', when: '6 Months Out', detail: 'Implement strict per-question time limits (targeting a 60–90 second execution limit per quantitative item) to prevent performance drops from cognitive fatigue.' },
            { step: '4', title: 'Target Score Calibration', when: 'Exam Month', detail: 'Analyse final mock assessments strictly through percentile bands rather than percentage scores. Calibrate school selection based on verified 85th–95th percentile data ranges.' },
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
          <li>OECD — International Student Performance Metrics Matrix Database.</li>
          <li>The College Board — Annual Report on International Digital SAT Performance Metrics and Cohort Scaling.</li>
          <li>GL Assessment &amp; IEA — Trend reports on international mathematics, science, and linguistic standardisation standards.</li>
        </ul>
      </section>
    </>
  ),

  'how-to-prepare-for-11-plus': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        The 11+ is one of the most talked-about exams in primary education — and also one of the most misunderstood.
        Many families start preparation too late, focus on the wrong subjects, or burn their child out with
        excessive drilling. This guide gives you a clear, practical framework for 11+ preparation at home.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What the 11+ Actually Tests</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Depending on the exam board used by your target school, the 11+ tests some or all of the following four subjects:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {[
            { subject: 'Verbal Reasoning', detail: 'Problem-solving with words — analogies, word codes, classifications, sequences. Rarely taught in school; needs specific preparation.' },
            { subject: 'Non-Verbal Reasoning', detail: 'Pattern recognition and spatial thinking using shapes and symbols. Tests innate reasoning ability rather than curriculum knowledge.' },
            { subject: 'English', detail: 'Comprehension, grammar, vocabulary, and creative writing. Closely tied to school curriculum, but exam technique matters.' },
            { subject: 'Mathematics', detail: 'Number operations, algebra, geometry, fractions and data. Usually ahead of the school curriculum by 12–18 months.' },
          ].map(({ subject, detail }) => (
            <div key={subject} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-2">{subject}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <Callout>
          <strong className="text-indigo-900">Check your target school first.</strong> GL Assessment tests
          typically include all four subjects. CEM (used in Buckinghamshire and some others) tests verbal
          reasoning, numerical reasoning, and spatial reasoning without labelling them by subject. ISEB
          tests English and Maths only. The weighting varies significantly.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Start</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Most educational specialists recommend beginning structured preparation 12–18 months before the exam.
          For most grammar schools, the 11+ is taken in September or October of Year 6 — meaning serious
          preparation should begin in Year 4 or early Year 5. Starting earlier than 18 months is usually
          counter-productive; children experience burnout before the exam arrives.
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
                ['18+ months out', 'Run a baseline diagnostic. Identify your child\'s strengths and gaps across all four subjects. Don\'t buy practice books yet.'],
                ['12–18 months out', 'Gentle familiarisation — one subject per week. Focus on understanding concepts, not drilling. Read widely to build vocabulary.'],
                ['6–12 months out', 'Structured weekly practice. One timed paper per week across all subjects. Review mistakes together.'],
                ['3–6 months out', 'Full mock tests under real conditions. Identify remaining weak areas. Targeted revision on specific question types.'],
                ['Exam month', 'Consolidation only. No new material. Focus on confidence, sleep, and exam-day routine.'],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-gray-50/50">
                  <td className="p-4 font-semibold text-indigo-700 whitespace-nowrap">{row[0]}</td>
                  <td className="p-4 text-gray-600">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subject-by-Subject Preparation</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verbal Reasoning</h3>
            <p className="text-gray-700 leading-relaxed">
              This is the subject most children find least familiar. There are around 21 distinct question types (analogies,
              codes, hidden words, odd-one-out, number series, etc.) — the good news is they are finite and highly
              pattern-based. Work through each type separately before mixing them. Timing is critical: the GL Assessment
              pace is approximately one question per minute.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-Verbal Reasoning</h3>
            <p className="text-gray-700 leading-relaxed">
              NVR is the most difficult to directly improve through practice, because it tests spatial intelligence rather
              than learned knowledge. However, familiarity with question formats (matrices, series, rotations, reflections)
              meaningfully reduces errors. Use visual practice books rather than text-heavy ones.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">English</h3>
            <p className="text-gray-700 leading-relaxed">
              Wide reading is the single most powerful preparation tool for English. Children who read broadly across
              genres — fiction, non-fiction, newspapers — build the vocabulary and comprehension skills that exam practice
              alone can&apos;t match. For comprehension technique: teach your child to answer in complete sentences and
              always refer back to the text with a quote.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mathematics</h3>
            <p className="text-gray-700 leading-relaxed">
              11+ maths typically covers content taught in Years 6 and 7, so children usually need to get ahead of the
              school curriculum. Focus on fractions, percentages, ratios, basic algebra, and multi-step word problems.
              Time pressure is a common issue — practise working quickly without a calculator.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Preparation Mistakes</h2>
        <ul className="space-y-4">
          {[
            { mistake: 'Starting without a diagnostic', fix: 'Buying practice books before knowing where your child is wastes time on material they already know — and misses actual gaps.' },
            { mistake: 'Over-drilling one subject', fix: 'If your child is strong at English, spending most preparation time on English makes them stronger at something that already isn\'t the problem.' },
            { mistake: 'Too much, too soon', fix: 'More than 45 minutes of focused preparation per day is counter-productive for most children. Quality matters more than volume.' },
            { mistake: 'Skipping timed practice', fix: 'Many children know the material but run out of time. Practice under real conditions from at least 6 months out.' },
            { mistake: 'Measuring by percentage rather than percentile', fix: 'Getting 78% correct only matters relative to what other children got. Always track percentile, not percentage.' },
          ].map(({ mistake, fix }) => (
            <li key={mistake} className="flex gap-4 p-5 rounded-xl border border-gray-100">
              <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{mistake}</div>
                <p className="text-sm text-gray-500">{fix}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Start with a Baseline Assessment</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Before buying a single practice book, take a free diagnostic assessment to find out exactly where your child
          currently stands. This tells you which subjects need the most work and gives you a standardised score and
          percentile ranking — the same metrics used in real 11+ scoring.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Eduentry covers all four 11+ subjects (English, Mathematics, Verbal Reasoning, Non-Verbal Reasoning) and
          produces an international percentile ranking. Retesting every 3–4 months shows real progress, not just
          familiarity with the same practice paper.
        </p>
      </section>
    </>
  ),

  'what-is-a-standardised-score': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        If your child has taken an educational assessment, you&apos;ve probably seen a &ldquo;standardised score&rdquo;
        alongside the raw percentage. Here is what it actually means, why it matters, and how to interpret it.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Raw Score vs Standardised Score</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          A raw score — say, 43 out of 60 — only tells you what fraction of questions were answered correctly.
          It tells you nothing about whether the test was easy or hard, or how other children of the same age performed.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A standardised score adjusts for all of this. It places your child&apos;s performance on a consistent scale
          that accounts for age, test difficulty, and national norms. Two children who both score 43 out of 60 may end
          up with very different standardised scores if one is 18 months older than the other.
        </p>
        <Callout>
          <strong className="text-indigo-900">The key insight:</strong> A raw percentage tells you what your child
          answered correctly. A standardised score tells you how your child performed relative to all other children
          at the same age. For selective school admissions — where the question is always comparative — the
          standardised score is what actually matters.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Standardised Scale</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Most UK standardised assessments — including CAT4, NFER, and Eduentry — use the same scale:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">100</div>
            <div className="text-sm text-indigo-600 font-medium">Mean (average)</div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">15</div>
            <div className="text-sm text-indigo-600 font-medium">Standard deviation</div>
          </div>
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-1">68%</div>
            <div className="text-sm text-indigo-600 font-medium">Score between 85–115</div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Score range</th>
                <th className="text-left p-4 font-semibold text-gray-700">Classification</th>
                <th className="text-left p-4 font-semibold text-gray-700">Approx. percentile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                ['120+', 'Exceptional', 'Top 9%'],
                ['110–119', 'Above Average', '75th–91st'],
                ['95–109', 'Average', '37th–63rd'],
                ['85–94', 'Below Average', '16th–36th'],
                ['Below 85', 'Needs Support', 'Below 16th'],
              ].map(([range, label, pct]) => (
                <tr key={range} className="hover:bg-gray-50/50">
                  <td className="p-4 font-mono font-semibold text-gray-900">{range}</td>
                  <td className="p-4 text-gray-700">{label}</td>
                  <td className="p-4 text-gray-500">{pct}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Percentile?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Your child&apos;s percentile tells you how they compare to all other children at the same age.
          A score in the <strong>75th percentile</strong> means your child performed better than 75% of
          children at their age level.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Percentile and standardised score are related but not the same thing. Here are the approximate equivalents:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">
          {[
            ['Standardised score 130', '98th percentile'],
            ['Standardised score 120', '91st percentile'],
            ['Standardised score 115', '84th percentile'],
            ['Standardised score 110', '75th percentile'],
            ['Standardised score 100', '50th percentile (exactly average)'],
            ['Standardised score 90', '25th percentile'],
          ].map(([score, pct]) => (
            <li key={score} className="flex justify-between border-b border-gray-50 pb-2">
              <span className="font-medium">{score}</span>
              <span className="text-gray-500">{pct}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is a Standardised Age Score (SAS)?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The SAS is a specific type of standardised score used by GL Assessment in the 11+ exam. It introduces
          an additional adjustment: the child&apos;s age in months.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          A child born in September starts Year 6 at almost 11 years old. A child born in August is nearly a
          full year younger. The SAS adjusts for this by comparing children only against others born in the same
          month range, not against the whole cohort. This means a child born in August is not disadvantaged
          simply by being younger.
        </p>
        <Callout color="emerald">
          <strong className="text-emerald-900">In practice:</strong> Two children who answer exactly the same
          number of questions correctly can receive different SAS scores if they are different ages. The
          August-born child will typically receive a slightly higher SAS for the same raw performance, because
          the bar is adjusted for their younger age.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Score Is Needed for Grammar School?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Grammar school cut-offs vary by area and school, but as a general guide:
        </p>
        <ul className="space-y-3 mb-4">
          <Bullet><strong>SAS 111–114:</strong> Borderline / conditional pass at many schools. Often placed on a waiting list or ranked by secondary criteria.</Bullet>
          <Bullet><strong>SAS 115–120:</strong> Comfortably within the selective range for most grammar schools in Kent, Essex, and Hertfordshire.</Bullet>
          <Bullet><strong>SAS 121–130+:</strong> Required for the most competitive schools — London (Barnet and Sutton), Birmingham (King Edward&apos;s Foundation), and Buckinghamshire.</Bullet>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Read our full guide to <Link href="/blog/grammar-school-entry-requirements-2026" className="text-indigo-600 hover:underline">grammar school entry requirements in 2026</Link> for area-by-area benchmarks.
        </p>
      </section>
    </>
  ),

  'verbal-reasoning-11-plus-guide': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        Verbal reasoning is arguably the most unfamiliar part of the 11+ for parents helping at home.
        Unlike English or Maths, it involves question types that children rarely encounter in school.
        The good news: the question types are finite, learnable, and highly pattern-based.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Verbal Reasoning Tests</h2>
        <p className="text-gray-700 leading-relaxed">
          Verbal reasoning tests a child&apos;s ability to think logically with words — to spot relationships,
          decode patterns, and solve problems using language. It is distinct from English, which tests comprehension
          and grammar. Verbal reasoning does not require literary knowledge; it requires pattern recognition
          applied to words and letters.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Main Question Types</h2>

        {[
          {
            type: '1. Word Analogies',
            desc: 'Find the word that completes the relationship in the same way.',
            example: 'HOT is to COLD as FAST is to ___',
            answer: 'SLOW (opposites)',
            tip: 'Identify the relationship first (opposite, synonym, category, part-to-whole). Then apply the same relationship to the second pair.',
          },
          {
            type: '2. Odd One Out',
            desc: 'Find the word that does not belong in the group.',
            example: 'apple  banana  carrot  pear  grape',
            answer: 'CARROT (a vegetable, not a fruit)',
            tip: 'Try multiple categories — colour, size, type, spelling patterns, number of syllables. The intended category is usually the most obvious one.',
          },
          {
            type: '3. Word Codes',
            desc: 'Work out how letters are shifted or swapped to encode/decode a word.',
            example: 'If CAT = DBU, what does DOG = ?',
            answer: 'EPH (each letter shifted +1)',
            tip: 'Find the pattern by comparing corresponding letters. Always check more than one letter before applying your rule.',
          },
          {
            type: '4. Hidden Words',
            desc: 'Find a real word hidden across the end of one word and the beginning of the next.',
            example: '"the cats at the bar" contains a hidden 4-letter word',
            answer: 'CATS (c-A-T-S-at → "ATSA"? No — look at "cats at": s-A-T — "SAT") ',
            tip: 'Scan for 3–4 letter words at each word boundary. Work left to right systematically.',
          },
          {
            type: '5. Word Sequences',
            desc: 'Complete a series of words that follow a logical pattern.',
            example: 'AB, CD, EF, ___',
            answer: 'GH (consecutive letter pairs)',
            tip: 'Look at the alphabetical position of letters, not just the letter itself. A=1, B=2, etc.',
          },
          {
            type: '6. Synonyms and Antonyms',
            desc: 'Find the word most similar to (synonym) or opposite of (antonym) a given word.',
            example: 'Which word is most similar to ELATED? → miserable / delighted / confused / exhausted',
            answer: 'DELIGHTED',
            tip: 'Wide vocabulary is the only reliable preparation. Regular reading across a range of genres is more effective than flashcard drills.',
          },
        ].map(({ type, desc, example, answer, tip }) => (
          <div key={type} className="border border-gray-100 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-gray-900 mb-1">{type}</h3>
            <p className="text-sm text-gray-500 mb-4">{desc}</p>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Example</div>
              <div className="font-mono text-gray-800 text-sm mb-2">{example}</div>
              <div className="text-xs text-emerald-700 font-semibold">Answer: {answer}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5 flex-shrink-0">Tip</span>
              <p className="text-sm text-gray-600">{tip}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes</h2>
        <ul className="space-y-3">
          <Bullet><strong>Not reading all four options.</strong> Many children circle the first answer that looks right without checking the others. One of the remaining options is often more precisely correct.</Bullet>
          <Bullet><strong>Spending too long on hard questions.</strong> GL Assessment typically allows one question per minute. Mark a hard question and move on — come back if time allows.</Bullet>
          <Bullet><strong>Confusing synonym and antonym questions.</strong> Always re-read the instruction carefully. &ldquo;Most similar&rdquo; and &ldquo;most opposite&rdquo; require opposite reasoning.</Bullet>
          <Bullet><strong>Ignoring vocabulary development.</strong> No amount of practice on question formats replaces a wide vocabulary. A child who has never encountered &ldquo;elated&rdquo; cannot answer a question about it, regardless of technique.</Bullet>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Practise at Home</h2>
        <div className="space-y-4">
          {[
            { title: 'Work through one type at a time', detail: 'Introduce word analogies until they are comfortable, then move to odd-one-out. Mixing types before mastering each one creates confusion.' },
            { title: 'Time yourself from early on', detail: 'The GL Assessment pace is approximately one question per minute across 50–80 questions. Build speed from the start, not just in the final month.' },
            { title: 'Read broadly every day', detail: 'Vocabulary is the foundation. Fiction, non-fiction, newspapers — all of it builds the word bank that makes verbal reasoning easier.' },
            { title: 'Review errors carefully', detail: 'Understand why each wrong answer was wrong. Verbal reasoning errors often reveal a misunderstood category or question type that needs targeted work.' },
          ].map(({ title, detail }) => (
            <div key={title} className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-0.5">{title}</div>
                <p className="text-sm text-gray-500">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Callout>
        <strong className="text-indigo-900">Try a free verbal reasoning assessment.</strong> Eduentry&apos;s adaptive
        verbal reasoning test covers all major question types and produces a standardised score benchmarked against
        the 11+ standard — giving you an objective baseline before you start practice papers.
      </Callout>
    </>
  ),

  'grammar-school-entry-requirements-2026': (
    <>
      <p className="text-lg text-gray-600 leading-relaxed">
        &ldquo;What score does my child need?&rdquo; is the question every family preparing for the 11+ wants answered.
        The honest answer is: it depends on where you are and which schools you are applying to. But there are clear
        benchmarks — and this guide covers them.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Grammar School Selection Works</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Grammar schools in England are legally permitted to select their entire intake by academic ability.
          Most use the 11+ exam, taken in September or October of Year 6, as the primary selection test.
          Scoring above the school&apos;s pass mark puts a child on the selective register — but a high score
          alone does not guarantee a place if the school is oversubscribed.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Once all applicants above the pass mark are identified, places are allocated by secondary criteria —
          typically: siblings already at the school, then distance from home to school (straight-line or road,
          depending on the authority). In highly competitive areas, even an SAS of 130+ may not guarantee
          a first-choice school if the school is significantly oversubscribed.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Exam Boards Are Used?</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          {[
            { board: 'GL Assessment', areas: 'Kent, Essex, Hertfordshire, most individual schools', notes: 'Produces a Standardised Age Score (SAS). Separate verbal reasoning, non-verbal reasoning, English and maths papers.' },
            { board: 'CEM (Durham University)', areas: 'Buckinghamshire, some Birmingham schools, some others', notes: 'Produces an age-standardised score. Questions blend vocabulary, comprehension, numerical reasoning, and spatial reasoning without labelling by subject.' },
            { board: 'ISEB Common Pre-Test', areas: 'Independent schools and some selective academies', notes: 'Tests English, Maths, Verbal Reasoning and Non-Verbal Reasoning. Used for 11+ and 13+ entry.' },
            { board: 'School-set papers', areas: 'King Edward\'s Foundation (Birmingham), some London schools', notes: 'Written by the school. Typically tests English and Maths at a level significantly above the National Curriculum.' },
          ].map(({ board, areas, notes }) => (
            <div key={board} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-gray-900 mb-1">{board}</div>
              <div className="text-xs font-medium text-indigo-600 mb-2">{areas}</div>
              <p className="text-sm text-gray-500">{notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Area-by-Area Score Benchmarks</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          These are indicative ranges based on typical pass marks and historical competition levels. Exact cut-offs
          vary by school and year — always check with your target school directly.
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
                ['Kent', 'GL Assessment', '115–121', '32 grammar schools. Each school sets its own cut-off. Very competitive in Tonbridge and Maidstone areas.'],
                ['Buckinghamshire', 'CEM', '118+', '13 grammar schools. Age-standardised. Places go to the highest-scoring applicants.'],
                ['London (Barnet)', 'GL Assessment', '121–132', 'QE Boys and Henrietta Barnett are among the most selective state schools in England.'],
                ['London (Sutton)', 'GL Assessment', '118–125', 'Nonsuch, Wallington High, Wilson\'s, Sutton Grammar. Highly competitive catchments.'],
                ['Birmingham (KE Foundation)', 'Own papers', '119+', 'King Edward\'s Foundation schools set their own English and Maths exams. Extremely competitive.'],
                ['Essex', 'GL Assessment', '112–118', 'Colchester Royal Grammar, Colchester County High. Lower competition than London/Kent.'],
                ['Hertfordshire', 'GL Assessment', '111–115', 'Dame Alice Owen\'s, Watford Grammar (Boys/Girls). Distance from school is a key tie-breaker.'],
                ['Gloucestershire', 'GL Assessment', '113–118', 'Pate\'s Grammar (most selective), The Crypt, Sir Thomas Rich\'s.'],
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What If Your Child Is Borderline?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many schools operate a borderline band — typically ±2–3 SAS points around the formal cut-off. Children
          who fall within this band may be offered a place if secondary criteria are favourable (e.g., they live
          very close to the school, or have a sibling already attending).
        </p>
        <Callout color="amber">
          <strong className="text-amber-800">Important:</strong> A borderline result on the 11+ does not mean
          your child should not appeal. Many successful appeals are based on evidence of a strong performance on
          an alternative standardised assessment taken around the same time — supporting the argument that the
          exam result did not reflect the child&apos;s true ability.
        </Callout>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Eduentry Scores Map to 11+ Entry</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Eduentry uses the same standardised scale as GL Assessment (mean 100, standard deviation 15). An Eduentry
          score reflects the same band as an equivalent SAS. A child scoring 115 on Eduentry is, by that scale,
          performing in competitive grammar school territory.
        </p>
        <p className="text-gray-700 leading-relaxed">
          The important caveat: Eduentry questions are AI-generated and not empirically calibrated with large
          normed populations. The score reflects the scale, not a precise GL or CEM result. It is most useful as
          a regular progress benchmark — identifying which subjects need work and tracking improvement over time.
        </p>
      </section>
    </>
  ),
}

export function getBlogContent(slug: string): React.ReactNode {
  return CONTENT[slug] ?? null
}
