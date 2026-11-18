'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Strings = {
  namePlaceholder: string
  agePlaceholder: string
  submitLabel: string
  loadingLabel: string
  disclaimer: string
  errorFallback: string
  tiers: [string, string, string, string]
}

const STRINGS: Record<string, Strings> = {
  en: {
    namePlaceholder: "Child's name (optional)",
    agePlaceholder: 'Age',
    submitLabel: 'Start Free Assessment',
    loadingLabel: 'Starting…',
    disclaimer: 'No account needed · Takes ~5 minutes',
    errorFallback: 'Something went wrong. Please try again.',
    tiers: ['Junior (6–9)', 'Intermediate (10–13)', 'Adolescent (14–17)', 'Young Adult (18–20)'],
  },
  tr: {
    namePlaceholder: 'Çocuğun adı (isteğe bağlı)',
    agePlaceholder: 'Yaş',
    submitLabel: 'Ücretsiz Değerlendirmeyi Başlat',
    loadingLabel: 'Başlatılıyor…',
    disclaimer: 'Hesap gerekmez · ~5 dakika sürer',
    errorFallback: 'Bir hata oluştu. Lütfen tekrar deneyin.',
    tiers: ['Küçük (6–9)', 'Orta (10–13)', 'Ergen (14–17)', 'Genç Yetişkin (18–20)'],
  },
  fr: {
    namePlaceholder: "Prénom de l'enfant (facultatif)",
    agePlaceholder: 'Âge',
    submitLabel: "Commencer l'évaluation gratuite",
    loadingLabel: 'Démarrage…',
    disclaimer: 'Sans compte · ~5 minutes',
    errorFallback: 'Une erreur est survenue. Veuillez réessayer.',
    tiers: ['Junior (6–9)', 'Intermédiaire (10–13)', 'Adolescent (14–17)', 'Jeune adulte (18–20)'],
  },
  es: {
    namePlaceholder: 'Nombre del niño/a (opcional)',
    agePlaceholder: 'Edad',
    submitLabel: 'Iniciar evaluación gratuita',
    loadingLabel: 'Iniciando…',
    disclaimer: 'Sin cuenta · ~5 minutos',
    errorFallback: 'Algo salió mal. Por favor inténtalo de nuevo.',
    tiers: ['Junior (6–9)', 'Intermedio (10–13)', 'Adolescente (14–17)', 'Adulto joven (18–20)'],
  },
  ar: {
    namePlaceholder: 'اسم الطفل (اختياري)',
    agePlaceholder: 'العمر',
    submitLabel: 'ابدأ التقييم المجاني',
    loadingLabel: '…جارٍ البدء',
    disclaimer: 'لا حاجة لحساب · ~٥ دقائق',
    errorFallback: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
    tiers: ['صغار (6–9)', 'متوسط (10–13)', 'مراهق (14–17)', 'شاب بالغ (18–20)'],
  },
  ru: {
    namePlaceholder: 'Имя ребёнка (необязательно)',
    agePlaceholder: 'Возраст',
    submitLabel: 'Начать бесплатную оценку',
    loadingLabel: 'Запуск…',
    disclaimer: 'Без регистрации · ~5 минут',
    errorFallback: 'Что-то пошло не так. Попробуйте ещё раз.',
    tiers: ['Младший (6–9)', 'Средний (10–13)', 'Подростковый (14–17)', 'Молодой взрослый (18–20)'],
  },
  zh: {
    namePlaceholder: '孩子的名字（可选）',
    agePlaceholder: '年龄',
    submitLabel: '开始免费测评',
    loadingLabel: '启动中…',
    disclaimer: '无需注册 · 约5分钟',
    errorFallback: '出现错误，请重试。',
    tiers: ['初级（6–9岁）', '中级（10–13岁）', '青少年（14–17岁）', '青年（18–20岁）'],
  },
}

export default function GuestStartForm({ locale = 'en' }: { locale?: string }) {
  const router = useRouter()
  const s = STRINGS[locale] ?? STRINGS.en
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    const localeParam = locale !== 'en' ? `?locale=${locale}` : ''
    router.push(`/personality-assessment/question/${data.assessmentId}${localeParam}`)
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
        <select
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          toolparamdescription="The child's age in years (6 to 20)"
          className="w-full sm:w-36 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] text-sm bg-white appearance-none"
        >
          <option value="" disabled>{s.agePlaceholder}</option>
          <optgroup label={s.tiers[0]}>
            {[6,7,8,9].map(n => <option key={n} value={n}>{n}</option>)}
          </optgroup>
          <optgroup label={s.tiers[1]}>
            {[10,11,12,13].map(n => <option key={n} value={n}>{n}</option>)}
          </optgroup>
          <optgroup label={s.tiers[2]}>
            {[14,15,16,17].map(n => <option key={n} value={n}>{n}</option>)}
          </optgroup>
          <optgroup label={s.tiers[3]}>
            {[18,19,20].map(n => <option key={n} value={n}>{n}</option>)}
          </optgroup>
        </select>
      </div>
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
