import { type NextRequest } from 'next/server'
import { GRAMMAR_AREAS } from '@/app/grammar-schools/data'
import { BLOG_POSTS } from '@/app/blog/posts'
import { BLOG_POSTS_ES } from '@/app/blog/posts-es'
import { BLOG_POSTS_TR } from '@/app/blog/posts-tr'
import { BLOG_POSTS_FR } from '@/app/blog/posts-fr'
import { BLOG_POSTS_AR } from '@/app/blog/posts-ar'
import { BLOG_POSTS_RU } from '@/app/blog/posts-ru'
import { BLOG_POSTS_ZH } from '@/app/blog/posts-zh'

const LOCALE_POSTS: Record<string, typeof BLOG_POSTS> = {
  en: BLOG_POSTS,
  es: BLOG_POSTS_ES,
  tr: BLOG_POSTS_TR,
  fr: BLOG_POSTS_FR,
  ar: BLOG_POSTS_AR,
  ru: BLOG_POSTS_RU,
  zh: BLOG_POSTS_ZH,
}

const LOCALE_BLOG_BASE: Record<string, string> = {
  en: 'https://eduentry.com/blog',
  es: 'https://eduentry.com/es/blog',
  tr: 'https://eduentry.com/tr/blog',
  fr: 'https://eduentry.com/fr/blog',
  ar: 'https://eduentry.com/ar/blog',
  ru: 'https://eduentry.com/ru/blog',
  zh: 'https://eduentry.com/zh/blog',
}

const ASSESSMENT_PHASES = [
  { phase: 'General Aptitude',   questions: 10, measures: 'Verbal reasoning, numerical reasoning, pattern recognition' },
  { phase: 'Domain Knowledge',   questions: 10, measures: 'Track-specific applied knowledge (varies by track)' },
  { phase: 'Workplace Skills',   questions: 8,  measures: 'Situational judgement, communication, teamwork under pressure' },
  { phase: 'Interest Profile',   questions: 6,  measures: 'Track alignment, motivation, learning style, role fit' },
]

const TRACKS = [
  {
    id: 'tech',
    name: 'Technology',
    url: 'https://eduentry.ai/tech',
    description: 'For students interested in software, IT, cybersecurity, UX, or data engineering internships.',
    domainTopics: [
      'Algorithm & Computational Thinking',
      'Data Types & Variables',
      'Loops & Conditionals',
      'Debugging & Error Analysis',
      'Software Development Lifecycle',
      'Cybersecurity Fundamentals',
      'Networking Basics',
      'UX & Interface Design',
      'Technology Tool Selection',
      'Tech Ethics & Digital Citizenship',
    ],
    sampleRoles: ['Junior Software Developer', 'IT Support Analyst', 'Cybersecurity Analyst', 'UX/UI Designer', 'Data Engineer'],
  },
  {
    id: 'business',
    name: 'Business',
    url: 'https://eduentry.ai/business',
    description: 'For students interested in finance, strategy, operations, or management internships.',
    domainTopics: [
      'Market Analysis',
      'Financial Literacy',
      'Business Case Reasoning',
      'SWOT & Competitive Analysis',
      'Customer & Stakeholder Thinking',
      'Operations & Process Thinking',
      'Business Strategy',
      'Negotiation & Influence',
      'Ethics & Corporate Responsibility',
      'Entrepreneurial Thinking',
    ],
    sampleRoles: ['Business Analyst', 'Junior Financial Analyst', 'Operations Coordinator', 'Strategy & Planning Analyst', 'HR Administrator'],
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    url: 'https://eduentry.ai/data-analytics',
    description: 'For students interested in data, statistics, SQL, and insight generation internships.',
    domainTopics: [
      'Chart & Graph Reading',
      'Descriptive Statistics',
      'Data Quality & Errors',
      'SQL & Querying Logic',
      'Correlation vs Causation',
      'A/B Testing Concepts',
      'Business Metric Interpretation',
      'Data Storytelling',
      'Predictive Thinking',
      'Data Ethics & Privacy',
    ],
    sampleRoles: ['Junior Data Analyst', 'Business Intelligence Analyst', 'Data Quality Analyst', 'Reporting Analyst'],
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    url: 'https://eduentry.ai/digital-marketing',
    description: 'For students interested in SEO, social media, content, and campaign internships.',
    domainTopics: [
      'SEO Fundamentals',
      'Social Media Strategy',
      'Content Marketing',
      'Paid Advertising (PPC)',
      'Email Marketing',
      'Analytics & Conversion',
      'Brand Positioning',
      'Influencer & Community Marketing',
      'Campaign Planning',
      'Marketing Ethics & Compliance',
    ],
    sampleRoles: ['Digital Marketing Assistant', 'Social Media Coordinator', 'SEO Analyst', 'Content Marketing Intern', 'PPC Analyst'],
  },
]

const SERVER_INFO = { name: 'Eduentry', version: '1.0' }
const PROTOCOL_VERSION = '2024-11-05'

// Approximate normal CDF for percentile calculation (mean 100, SD 15)
function scoreToPercentile(score: number): number {
  const z = (score - 100) / 15
  // Abramowitz and Stegun approximation
  const t = 1 / (1 + 0.2316419 * Math.abs(z))
  const poly =
    t * (0.319381530 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))))
  const phi = 1 - (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z) * poly
  return z >= 0 ? Math.round(phi * 100) : Math.round((1 - phi) * 100)
}

const SUBJECTS = [
  {
    id: 'english',
    name: 'English',
    url: 'https://eduentry.com/subjects/english',
    description: 'Comprehension, grammar, spelling, punctuation and vocabulary for ages 6–17.',
    relevance: 'Core UK 11+ subject. Tests reading comprehension, written language, vocabulary range, and grammar accuracy.',
  },
  {
    id: 'maths',
    name: 'Mathematics',
    url: 'https://eduentry.com/subjects/maths',
    description: 'Number, algebra, geometry, fractions and data handling benchmarked to PISA numeracy.',
    relevance: 'Core UK 11+ and grammar school subject. PISA-benchmarked, covers all National Curriculum strands for ages 6–17.',
  },
  {
    id: 'verbal-reasoning',
    name: 'Verbal Reasoning',
    url: 'https://eduentry.com/subjects/verbal-reasoning',
    description: 'Analogies, word relationships, sequencing and logic — tested in 11+ and grammar school exams.',
    relevance: 'Required by GL Assessment and most grammar school exams. Tests language-based logical thinking.',
  },
  {
    id: 'non-verbal-reasoning',
    name: 'Non-Verbal Reasoning',
    url: 'https://eduentry.com/subjects/non-verbal-reasoning',
    description: 'Pattern recognition, matrices, sequences and spatial reasoning.',
    relevance: 'Required by CEM (Buckinghamshire) and GL Assessment. Measures spatial intelligence independently of language.',
  },
]

function callTool(name: string, args: Record<string, unknown>): string {
  switch (name) {
    case 'explain_scoring': {
      const raw = args.score
      const score = typeof raw === 'number' ? raw : Number(raw)
      const locale = typeof args.locale === 'string' ? args.locale : 'en'
      const isEN = locale === 'en'
      if (isNaN(score) || score < 70 || score > 130) {
        return 'Score must be a number between 70 and 130. Eduentry uses a standardised scale with mean 100 and SD 15.'
      }
      const percentile = scoreToPercentile(score)
      let band: string
      if (score < 85) band = 'Needs Support'
      else if (score < 95) band = 'Below Average'
      else if (score < 110) band = 'Average'
      else if (score < 120) band = 'Above Average'
      else band = 'Exceptional'

      const base = `Score: ${score}\nBand: ${band}\nPercentile: approximately ${percentile}th\n\nEduentry scores use a standardised scale (mean 100, SD 15).`

      if (!isEN) return base

      let grammarNote: string
      if (score >= 130) grammarNote = 'Comfortably exceeds entry thresholds for the most selective grammar schools in England (North London, South London Sutton area).'
      else if (score >= 120) grammarNote = 'Exceeds competitive entry thresholds for most grammar schools in England.'
      else if (score >= 115) grammarNote = 'At or above the 84th percentile — the competitive entry threshold for most grammar schools outside London (Kent, Hertfordshire, Essex, Gloucestershire).'
      else if (score >= 110) grammarNote = 'Above average but below the typical competitive grammar school entry threshold of 115.'
      else grammarNote = 'Below the typical competitive grammar school entry threshold of 115 (84th percentile).'

      return `${base} A score of 115 = 84th percentile, the competitive threshold for most English grammar schools outside London.\n\n${grammarNote}`
    }

    case 'list_grammar_areas': {
      const locale = typeof args.locale === 'string' ? args.locale : 'en'
      if (locale !== 'en') {
        return 'Grammar school areas are UK-specific and only relevant for the English (en) locale.'
      }
      const areaSlug = typeof args.area === 'string' ? args.area : null
      const areas = areaSlug
        ? GRAMMAR_AREAS.filter((a) => a.slug === areaSlug)
        : GRAMMAR_AREAS

      if (areas.length === 0) {
        return `No grammar area found with slug "${areaSlug}". Available: ${GRAMMAR_AREAS.map((a) => a.slug).join(', ')}`
      }

      return JSON.stringify(
        areas.map((a) => ({
          area: a.name,
          slug: a.slug,
          url: `https://eduentry.com/grammar-schools/${a.slug}`,
          schoolCount: a.schoolCount,
          examBoard: a.examBoard,
          targetSAS: a.targetSAS,
          subjects: a.subjects,
          keyFact: a.keyFact,
          registrationNote: a.registrationNote,
        })),
        null,
        2,
      )
    }

    case 'list_subjects': {
      const locale = typeof args.locale === 'string' ? args.locale : 'en'
      const isEN = locale === 'en'
      const subjects = SUBJECTS.map(({ relevance, ...rest }) =>
        isEN ? { ...rest, relevance } : rest
      )
      return JSON.stringify(subjects, null, 2)
    }

    case 'list_tracks': {
      const trackId = typeof args.track === 'string' ? args.track : null
      const tracks = trackId ? TRACKS.filter((t) => t.id === trackId) : TRACKS

      if (tracks.length === 0) {
        return `No track found with id "${trackId}". Available: ${TRACKS.map((t) => t.id).join(', ')}`
      }

      const result = {
        assessment: {
          totalQuestions: 34,
          duration: '~35 minutes',
          phases: ASSESSMENT_PHASES,
        },
        tracks: tracks.map((t) => ({
          id: t.id,
          name: t.name,
          url: t.url,
          description: t.description,
          domainTopics: t.domainTopics,
          sampleRoles: t.sampleRoles,
        })),
      }

      return JSON.stringify(result, null, 2)
    }

    case 'list_blog_posts': {
      const locale = typeof args.locale === 'string' && args.locale in LOCALE_POSTS
        ? args.locale
        : 'en'
      const tag = typeof args.tag === 'string' ? args.tag.toLowerCase() : null
      const allPosts = LOCALE_POSTS[locale]
      const posts = tag
        ? allPosts.filter((p) => p.tags.some((t) => t.toLowerCase().includes(tag)))
        : allPosts
      const base = LOCALE_BLOG_BASE[locale]

      return JSON.stringify(
        posts.map((p) => ({
          slug: p.slug,
          url: `${base}/${p.slug}`,
          title: p.title,
          description: p.description,
          date: p.dateModified ?? p.date,
          readTime: p.readTime,
          tags: p.tags,
        })),
        null,
        2,
      )
    }

    default:
      return `Unknown tool: ${name}`
  }
}

const TOOLS = [
  {
    name: 'explain_scoring',
    description:
      'Explain what a standardised score means on Eduentry — percentile rank and performance band. UK grammar school entry context is included for locale=en only.',
    inputSchema: {
      type: 'object',
      properties: {
        score: {
          type: 'number',
          description: 'Standardised score between 70 and 130 (mean 100, SD 15)',
        },
        locale: {
          type: 'string',
          description: 'Locale of the page context. One of: en, es, tr, fr, ar, ru, zh. Defaults to en.',
        },
      },
      required: ['score'],
    },
  },
  {
    name: 'list_grammar_areas',
    description:
      'List UK grammar school areas with entry requirements, exam boards, and target SAS scores. UK-specific — only returns data for locale=en.',
    inputSchema: {
      type: 'object',
      properties: {
        locale: {
          type: 'string',
          description: 'Locale of the page context. Must be "en" to receive data; other locales return a not-applicable message.',
        },
        area: {
          type: 'string',
          description:
            'Optional area slug to retrieve a single area. Available: kent, buckinghamshire, birmingham, london-barnet, london-sutton, hertfordshire, essex, gloucestershire',
        },
      },
    },
  },
  {
    name: 'list_subjects',
    description:
      'List the four assessment subjects on Eduentry.com — English, Mathematics, Verbal Reasoning, Non-Verbal Reasoning. UK/11+ relevance notes are included for locale=en only.',
    inputSchema: {
      type: 'object',
      properties: {
        locale: {
          type: 'string',
          description: 'Locale of the page context. One of: en, es, tr, fr, ar, ru, zh. UK relevance notes only shown for en.',
        },
      },
    },
  },
  {
    name: 'list_tracks',
    description:
      'List the four Eduentry.ai internship readiness tracks (Technology, Business, Data Analytics, Digital Marketing) with domain topics, sample roles, and assessment phase structure. Optionally retrieve a single track by id.',
    inputSchema: {
      type: 'object',
      properties: {
        track: {
          type: 'string',
          description: 'Optional track id to retrieve a single track. Available: tech, business, data-analytics, digital-marketing',
        },
      },
    },
  },
  {
    name: 'list_blog_posts',
    description: 'List Eduentry blog posts. Supports all 7 locales (en, es, tr, fr, ar, ru, zh). Optionally filter by tag keyword.',
    inputSchema: {
      type: 'object',
      properties: {
        locale: {
          type: 'string',
          description: 'Locale code. One of: en (default), es, tr, fr, ar, ru, zh',
        },
        tag: {
          type: 'string',
          description: 'Optional tag keyword to filter posts (e.g. "grammar", "internship", "gifted")',
        },
      },
    },
  },
]

function handleMessage(msg: Record<string, unknown>): Record<string, unknown> | null {
  const { id, method, params } = msg as {
    id?: unknown
    method: string
    params?: Record<string, unknown>
  }

  // Notifications (no id) — acknowledge but return nothing
  if (id === undefined) return null

  switch (method) {
    case 'initialize':
      return {
        jsonrpc: '2.0',
        id,
        result: {
          protocolVersion: PROTOCOL_VERSION,
          capabilities: { tools: {} },
          serverInfo: SERVER_INFO,
        },
      }
    case 'ping':
      return { jsonrpc: '2.0', id, result: {} }
    case 'tools/list':
      return { jsonrpc: '2.0', id, result: { tools: TOOLS } }
    case 'tools/call': {
      const { name, arguments: toolArgs = {} } = (params ?? {}) as {
        name: string
        arguments?: Record<string, unknown>
      }
      const text = callTool(name, toolArgs)
      return {
        jsonrpc: '2.0',
        id,
        result: { content: [{ type: 'text', text }] },
      }
    }
    default:
      return {
        jsonrpc: '2.0',
        id,
        error: { code: -32601, message: 'Method not found' },
      }
  }
}

function toSSE(data: unknown): string {
  return `data: ${JSON.stringify(data)}\n\n`
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } },
      { status: 400 },
    )
  }

  const acceptSSE = request.headers.get('accept')?.includes('text/event-stream') ?? false
  const messages = Array.isArray(body) ? body : [body]
  const responses = messages
    .map((m) => handleMessage(m as Record<string, unknown>))
    .filter(Boolean) as Record<string, unknown>[]

  const single = !Array.isArray(body)
  const payload = single ? (responses[0] ?? null) : responses

  if (acceptSSE) {
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        if (payload !== null) {
          const items = Array.isArray(payload) ? payload : [payload]
          for (const item of items) {
            controller.enqueue(encoder.encode(toSSE(item)))
          }
        }
        controller.close()
      },
    })
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  }

  if (payload === null) return new Response(null, { status: 202 })
  return Response.json(payload)
}

// GET: SSE endpoint for server-initiated messages (stateless — we have none)
export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      controller.close()
    },
  })
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
    },
  })
}

export async function DELETE() {
  return new Response(null, { status: 200 })
}
