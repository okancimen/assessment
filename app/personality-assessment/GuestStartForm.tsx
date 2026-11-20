'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Strings = {
  namePlaceholder: string
  agePlaceholder: string
  submitLabel: string
  loadingLabel: string
  disclaimer: string
  errorFallback: string
  tiers: [string, string, string, string]
  resumeHeading: string
  resumeSub: string
  resumeCta: string
  resumeStartNew: string
}

const STRINGS: Record<string, Strings> = {
  en: {
    namePlaceholder: "Child's name (optional)",
    agePlaceholder: 'Age',
    submitLabel: 'Start Free Assessment',
    loadingLabel: 'Starting…',
    disclaimer: 'No account needed · free · no sign-up required',
    errorFallback: 'Something went wrong. Please try again.',
    tiers: ['Junior (6–9)', 'Intermediate (10–13)', 'Adolescent (14–17)', 'Young Adult (18–20)'],
    resumeHeading: "'s assessment is in progress",
    resumeSub: 'Pick up exactly where you left off — your answers are saved.',
    resumeCta: 'Continue assessment →',
    resumeStartNew: 'Start a new one instead',
  },
  tr: {
    namePlaceholder: 'Çocuğun adı (isteğe bağlı)',
    agePlaceholder: 'Yaş',
    submitLabel: 'Ücretsiz Değerlendirmeyi Başlat',
    loadingLabel: 'Başlatılıyor…',
    disclaimer: 'Hesap gerekmez · ücretsiz',
    errorFallback: 'Bir hata oluştu. Lütfen tekrar deneyin.',
    tiers: ['Küçük (6–9)', 'Orta (10–13)', 'Ergen (14–17)', 'Genç Yetişkin (18–20)'],
    resumeHeading: 'ın değerlendirmesi devam ediyor',
    resumeSub: 'Kaldığınız yerden devam edin — cevaplarınız kaydedildi.',
    resumeCta: 'Değerlendirmeye devam et →',
    resumeStartNew: 'Yeni bir tane başlat',
  },
  fr: {
    namePlaceholder: "Prénom de l'enfant (facultatif)",
    agePlaceholder: 'Âge',
    submitLabel: "Commencer l'évaluation gratuite",
    loadingLabel: 'Démarrage…',
    disclaimer: 'Sans compte · gratuit',
    errorFallback: 'Une erreur est survenue. Veuillez réessayer.',
    tiers: ['Junior (6–9)', 'Intermédiaire (10–13)', 'Adolescent (14–17)', 'Jeune adulte (18–20)'],
    resumeHeading: ' — évaluation en cours',
    resumeSub: 'Reprenez exactement là où vous vous étiez arrêté.',
    resumeCta: "Continuer l'évaluation →",
    resumeStartNew: 'Recommencer depuis le début',
  },
  es: {
    namePlaceholder: 'Nombre del niño/a (opcional)',
    agePlaceholder: 'Edad',
    submitLabel: 'Iniciar evaluación gratuita',
    loadingLabel: 'Iniciando…',
    disclaimer: 'Sin cuenta · gratuito',
    errorFallback: 'Algo salió mal. Por favor inténtalo de nuevo.',
    tiers: ['Junior (6–9)', 'Intermedio (10–13)', 'Adolescente (14–17)', 'Adulto joven (18–20)'],
    resumeHeading: ' — evaluación en curso',
    resumeSub: 'Continúa exactamente donde lo dejaste — tus respuestas están guardadas.',
    resumeCta: 'Continuar evaluación →',
    resumeStartNew: 'Empezar una nueva',
  },
  ar: {
    namePlaceholder: 'اسم الطفل (اختياري)',
    agePlaceholder: 'العمر',
    submitLabel: 'ابدأ التقييم المجاني',
    loadingLabel: '…جارٍ البدء',
    disclaimer: 'لا حاجة لحساب · مجاني',
    errorFallback: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    tiers: ['صغار (6–9)', 'متوسط (10–13)', 'مراهق (14–17)', 'شاب بالغ (18–20)'],
    resumeHeading: ' — التقييم جارٍ',
    resumeSub: 'تابع من حيث توقفت — إجاباتك محفوظة.',
    resumeCta: '← متابعة التقييم',
    resumeStartNew: 'ابدأ تقييماً جديداً',
  },
  ru: {
    namePlaceholder: 'Имя ребёнка (необязательно)',
    agePlaceholder: 'Возраст',
    submitLabel: 'Начать бесплатную оценку',
    loadingLabel: 'Запуск…',
    disclaimer: 'Без регистрации · бесплатно',
    errorFallback: 'Что-то пошло не так. Попробуйте ещё раз.',
    tiers: ['Младший (6–9)', 'Средний (10–13)', 'Подростковый (14–17)', 'Молодой взрослый (18–20)'],
    resumeHeading: ' — оценка в процессе',
    resumeSub: 'Продолжите с того места, где остановились — ответы сохранены.',
    resumeCta: 'Продолжить оценку →',
    resumeStartNew: 'Начать заново',
  },
  zh: {
    namePlaceholder: '孩子的名字（可选）',
    agePlaceholder: '年龄',
    submitLabel: '开始免费测评',
    loadingLabel: '启动中…',
    disclaimer: '无需注册 · 免费',
    errorFallback: '出现错误，请重试。',
    tiers: ['初级（6–9岁）', '中级（10–13岁）', '青少年（14–17岁）', '青年（18–20岁）'],
    resumeHeading: '的测评正在进行中',
    resumeSub: '从上次中断的地方继续——您的答案已保存。',
    resumeCta: '继续测评 →',
    resumeStartNew: '重新开始',
  },
}

interface ResumeMeta { assessmentId: string; name: string }

function getTierInfo(ageStr: string): { index: 0 | 1 | 2 | 3; count: number; minutes: string } | null {
  const a = Number(ageStr)
  if (!a || a < 6 || a > 20) return null
  if (a <= 9)  return { index: 0, count: 24, minutes: '~4 min' }
  if (a <= 13) return { index: 1, count: 30, minutes: '~5 min' }
  if (a <= 17) return { index: 2, count: 40, minutes: '~7 min' }
  return { index: 3, count: 48, minutes: '~8 min' }
}

export default function GuestStartForm({ locale = 'en' }: { locale?: string }) {
  const router = useRouter()
  const s = STRINGS[locale] ?? STRINGS.en
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [resumeSessions, setResumeSessions] = useState<ResumeMeta[]>([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const sessions: ResumeMeta[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (!key?.startsWith('guestPersMeta_')) continue
      try {
        const meta = JSON.parse(localStorage.getItem(key) ?? '{}') as ResumeMeta
        if (meta.assessmentId && meta.name) sessions.push(meta)
      } catch { /* ignore corrupt entries */ }
    }
    setResumeSessions(sessions)
    setShowForm(sessions.length === 0)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const res = await fetch('/api/personality/guest-start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim(), age: Number(age) }),
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok) {
      setError(data.error ?? s.errorFallback)
      setLoading(false)
      return
    }
    const sessionName = name.trim() || 'your child'
    if (data.guestToken) {
      localStorage.setItem(`guestPersTok_${data.assessmentId}`, data.guestToken)
    }
    localStorage.setItem(`guestPersMeta_${data.assessmentId}`, JSON.stringify({ assessmentId: data.assessmentId, name: sessionName }))
    const localeParam = locale !== 'en' ? `?locale=${locale}` : ''
    router.push(`/personality-assessment/question/${data.assessmentId}${localeParam}`)
  }

  const tierInfo = getTierInfo(age)

  if (resumeSessions.length > 0 && !showForm) {
    return (
      <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
        {resumeSessions.map((session) => (
          <div key={session.assessmentId} className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 text-left space-y-3">
            <div>
              <p className="font-bold text-[#1d1d1f] text-base">
                {session.name}{s.resumeHeading}
              </p>
              <p className="text-sm text-[#6e6e73] mt-0.5">{s.resumeSub}</p>
            </div>
            <button
              onClick={() => router.push(`/personality-assessment/question/${session.assessmentId}${locale !== 'en' ? `?locale=${locale}` : ''}`)}
              className="w-full bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              {s.resumeCta}
            </button>
          </div>
        ))}
        <button
          onClick={() => setShowForm(true)}
          className="text-sm text-[#6e6e73] hover:text-[#1d1d1f] py-1 transition-colors"
        >
          {s.resumeStartNew}
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      toolname="start_personality_assessment"
      tooldescription="Start a free VIA Character Strengths personality assessment for a child. Enter the child's name and age to begin."
      toolautosubmit
      className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={s.namePlaceholder}
          toolparamdescription="The child's first name (optional)"
          className="flex-1 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-white"
        />
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min={6}
          max={20}
          placeholder={s.agePlaceholder}
          toolparamdescription="The child's age in years (6 to 20)"
          className="w-full sm:w-20 flex-shrink-0 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-white"
        />
      </div>
      {tierInfo && (
        <p className="text-xs text-indigo-600 self-start -mt-2">
          <span className="font-semibold">{s.tiers[tierInfo.index]}</span>
          {' · '}{tierInfo.count} questions · {tierInfo.minutes}
        </p>
      )}
      {error && <p className="text-xs text-red-500 text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-indigo-200 disabled:opacity-60"
      >
        {loading ? s.loadingLabel : s.submitLabel}
      </button>
      <p className="text-xs text-[#6e6e73]">{s.disclaimer}</p>
    </form>
  )
}
