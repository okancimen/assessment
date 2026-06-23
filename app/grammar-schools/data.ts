export interface GrammarArea {
  slug: string
  name: string
  schoolCount: number
  examBoard: string
  targetSAS: string
  subjects: string[]
  schools: { name: string; type: string }[]
  description: string
  keyFact: string
  metaTitle: string
  metaDescription: string
  registrationNote: string
}

export const GRAMMAR_AREAS: GrammarArea[] = [
  {
    slug: 'kent',
    name: 'Kent',
    schoolCount: 32,
    examBoard: 'GL Assessment',
    targetSAS: '115–121',
    subjects: ['English', 'Verbal Reasoning', 'Maths', 'Non-Verbal Reasoning'],
    schools: [
      { name: 'The Judd School', type: 'Boys' },
      { name: 'Tonbridge Grammar School', type: 'Girls' },
      { name: 'Maidstone Grammar School', type: 'Boys' },
      { name: 'Invicta Grammar School', type: 'Girls' },
      { name: 'Weald of Kent Grammar School', type: 'Girls' },
      { name: "The Skinners' School", type: 'Boys' },
      { name: 'Simon Langton Grammar School for Boys', type: 'Boys' },
      { name: 'Simon Langton Girls Grammar School', type: 'Girls' },
    ],
    description: "Kent has more grammar schools than any other county in England — 32 selective schools across Maidstone, Tonbridge, Tunbridge Wells, Folkestone, Canterbury, and Medway. The county's 11+ is taken in September of Year 6, and results are released before the secondary school application deadline.",
    keyFact: 'The most grammar schools in England — 32 selective schools.',
    metaTitle: 'Kent Grammar Schools: 11+ Entry Requirements 2026',
    metaDescription: 'Grammar schools in Kent — entry requirements, SAS score thresholds, which subjects are tested, registration deadlines and how to prepare for the Kent 11+.',
    registrationNote: 'Registration typically opens in May of Year 5 and closes in June. The 11+ is held in September of Year 6.',
  },
  {
    slug: 'buckinghamshire',
    name: 'Buckinghamshire',
    schoolCount: 13,
    examBoard: 'CEM (Centre for Education and Monitoring)',
    targetSAS: '118+',
    subjects: ['Verbal Reasoning', 'Numerical Reasoning', 'Spatial Reasoning'],
    schools: [
      { name: 'Royal Latin School', type: 'Mixed' },
      { name: "Beaconsfield High School", type: 'Girls' },
      { name: "Dr Challoner's Grammar School", type: 'Boys' },
      { name: "Dr Challoner's High School", type: 'Girls' },
      { name: 'Aylesbury Grammar School', type: 'Boys' },
      { name: 'Aylesbury High School', type: 'Girls' },
    ],
    description: "Buckinghamshire is one of England's most fully selective areas — all secondary schools in the county are grammar or secondary modern, meaning the 11+ determines which school a child attends. The exam uses CEM-style questions that blend verbal ability, numerical reasoning, and spatial reasoning without labelling them by subject, making it harder to prepare for with standard practice papers.",
    keyFact: 'A fully selective county — every secondary school is selective or secondary modern.',
    metaTitle: 'Buckinghamshire Grammar Schools: Entry Requirements 2026',
    metaDescription: 'Grammar schools in Buckinghamshire — CEM exam format, score requirements, registration dates and how to prepare for the Bucks 11+.',
    registrationNote: 'Registration opens in April/May of Year 5. The 11+ is held in September of Year 6.',
  },
  {
    slug: 'birmingham',
    name: 'Birmingham',
    schoolCount: 5,
    examBoard: 'King Edward\'s Foundation own papers',
    targetSAS: '119+',
    subjects: ['English', 'Mathematics'],
    schools: [
      { name: "King Edward's School Birmingham", type: 'Boys (Independent)' },
      { name: 'King Edward VI High School for Girls', type: 'Girls (Independent)' },
      { name: 'King Edward VI Five Ways School', type: 'Mixed' },
      { name: 'King Edward VI Camp Hill School for Boys', type: 'Boys' },
      { name: 'King Edward VI Camp Hill School for Girls', type: 'Girls' },
    ],
    description: "Birmingham's grammar school landscape is dominated by the King Edward's Foundation, which operates some of the most academically selective schools in England. The Foundation schools set their own entrance papers rather than using GL Assessment or CEM, and the standard is significantly above the national curriculum. The independent KES schools require separate registration.",
    keyFact: 'King Edward\'s Foundation schools are among the most competitive in England.',
    metaTitle: 'Birmingham Grammar Schools: Entry Requirements 2026',
    metaDescription: "Grammar schools in Birmingham — King Edward's Foundation entry requirements, exam format, score expectations and how to prepare.",
    registrationNote: 'Registration for KE Foundation schools opens in September of Year 5. Entrance exams are held in November.',
  },
  {
    slug: 'london-barnet',
    name: 'North London (Barnet)',
    schoolCount: 3,
    examBoard: 'GL Assessment',
    targetSAS: '121–132',
    subjects: ['English', 'Maths', 'Verbal Reasoning', 'Non-Verbal Reasoning'],
    schools: [
      { name: "Queen Elizabeth's School", type: 'Boys' },
      { name: 'The Henrietta Barnett School', type: 'Girls' },
      { name: "St Michael's Catholic Grammar School", type: 'Mixed' },
    ],
    description: "The grammar schools in the London Borough of Barnet — particularly Queen Elizabeth's Boys and The Henrietta Barnett School — are consistently ranked among the most academically selective state schools in England. The competition is fierce: both schools regularly receive over 2,000 applications for around 120 places each.",
    keyFact: "QE Boys and Henrietta Barnett receive over 2,000 applications for ~120 places each.",
    metaTitle: 'Barnet Grammar Schools: 11+ Entry Requirements 2026',
    metaDescription: "Grammar schools in Barnet, North London — QE Boys, Henrietta Barnett and St Michael's. Entry requirements, SAS scores and how to prepare.",
    registrationNote: 'Registration opens in June of Year 5. The 11+ is held in September of Year 6.',
  },
  {
    slug: 'london-sutton',
    name: 'South London (Sutton)',
    schoolCount: 5,
    examBoard: 'GL Assessment',
    targetSAS: '118–125',
    subjects: ['English', 'Maths', 'Verbal Reasoning', 'Non-Verbal Reasoning'],
    schools: [
      { name: "Nonsuch High School for Girls", type: 'Girls' },
      { name: "Wallington High School for Girls", type: 'Girls' },
      { name: "Wallington County Grammar School", type: 'Boys' },
      { name: "Wilson's School", type: 'Boys' },
      { name: "Sutton Grammar School", type: 'Boys' },
    ],
    description: "The Sutton grammar schools form a cluster of highly selective state schools in South London. Nonsuch, Wallington, Wilson's and Sutton Grammar are all consistently among the top state schools in England by GCSE and A-level results. The Sutton Consortium runs a shared admissions test, meaning one registration covers multiple schools.",
    keyFact: 'The Sutton Consortium shares one admissions test across multiple schools.',
    metaTitle: 'Sutton Grammar Schools: 11+ Entry Requirements 2026',
    metaDescription: "Grammar schools in Sutton, South London — Nonsuch, Wallington, Wilson's, Sutton Grammar. Entry requirements, SAS scores and preparation advice.",
    registrationNote: 'The Sutton Consortium registration opens in June. The shared 11+ test is in September of Year 6.',
  },
  {
    slug: 'hertfordshire',
    name: 'Hertfordshire',
    schoolCount: 3,
    examBoard: 'GL Assessment',
    targetSAS: '111–115',
    subjects: ['English', 'Verbal Reasoning', 'Maths', 'Non-Verbal Reasoning'],
    schools: [
      { name: "Dame Alice Owen's School", type: 'Mixed' },
      { name: 'Watford Grammar School for Boys', type: 'Boys' },
      { name: 'Watford Grammar School for Girls', type: 'Girls' },
    ],
    description: "Hertfordshire has three selective schools — Dame Alice Owen's in Potters Bar and the two Watford Grammar schools. All three use GL Assessment papers. Dame Alice Owen's is particularly popular with families from North London who are outside the Barnet catchment, but distance from the school is a key tie-breaker once all pupils above the pass mark are identified.",
    keyFact: "Dame Alice Owen's is popular with North London families outside the Barnet catchment.",
    metaTitle: 'Hertfordshire Grammar Schools: Entry Requirements 2026',
    metaDescription: "Grammar schools in Hertfordshire — Dame Alice Owen's and Watford Grammar schools. Entry requirements, SAS score targets and preparation advice.",
    registrationNote: 'Registration for Hertfordshire selective schools opens in June of Year 5.',
  },
  {
    slug: 'essex',
    name: 'Essex',
    schoolCount: 4,
    examBoard: 'GL Assessment',
    targetSAS: '112–118',
    subjects: ['English', 'Verbal Reasoning', 'Maths', 'Non-Verbal Reasoning'],
    schools: [
      { name: 'Colchester Royal Grammar School', type: 'Boys' },
      { name: 'Colchester County High School for Girls', type: 'Girls' },
      { name: 'Westcliff High School for Boys', type: 'Boys' },
      { name: 'Westcliff High School for Girls', type: 'Girls' },
    ],
    description: "Essex has four selective grammar schools — two in Colchester and two in the Southend-on-Sea area (Westcliff). The competition is less intense than in Kent or London, but the schools are strong academic performers and entry is still competitive. Colchester Royal Grammar School is particularly well-regarded.",
    keyFact: 'Lower competition than London or Kent, but still strong academic schools.',
    metaTitle: 'Essex Grammar Schools: Entry Requirements 2026',
    metaDescription: 'Grammar schools in Essex — Colchester Royal Grammar, Westcliff High. Entry requirements, SAS score benchmarks and how to prepare for the Essex 11+.',
    registrationNote: 'Registration typically opens in May of Year 5.',
  },
  {
    slug: 'gloucestershire',
    name: 'Gloucestershire',
    schoolCount: 4,
    examBoard: 'GL Assessment',
    targetSAS: '113–118',
    subjects: ['English', 'Verbal Reasoning', 'Maths', 'Non-Verbal Reasoning'],
    schools: [
      { name: "Pate's Grammar School", type: 'Mixed' },
      { name: 'The Crypt School', type: 'Mixed' },
      { name: "Sir Thomas Rich's School", type: 'Boys' },
      { name: 'Denmark Road High School', type: 'Girls' },
    ],
    description: "Gloucestershire has four selective grammar schools, all based in Cheltenham and Gloucester. Pate's Grammar School is the most selective and is consistently ranked one of the best state schools in the South West. The county uses GL Assessment papers across all four subjects.",
    keyFact: "Pate's Grammar is consistently ranked one of the best state schools in England.",
    metaTitle: 'Gloucestershire Grammar Schools: Entry Requirements 2026',
    metaDescription: "Grammar schools in Gloucestershire — Pate's Grammar, The Crypt, Sir Thomas Rich's. Entry requirements, SAS benchmarks and 11+ preparation.",
    registrationNote: 'Registration for Gloucestershire grammar schools opens in March/April of Year 5.',
  },
]

export function getAreaBySlug(slug: string) {
  return GRAMMAR_AREAS.find((a) => a.slug === slug)
}
