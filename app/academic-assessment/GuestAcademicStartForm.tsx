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
}

const STRINGS: Record<string, Strings> = {
  en: {
    namePlaceholder: "Child's first name",
    agePlaceholder: 'Age',
    submitLabel: 'Start Free Assessment',
    loadingLabel: 'Starting…',
    disclaimer: 'No account needed · first results in ~10 min',
    errorFallback: 'Something went wrong. Please try again.',
  },
  tr: {
    namePlaceholder: 'Çocuğun adı',
    agePlaceholder: 'Yaş',
    submitLabel: 'Ücretsiz Değerlendirmeyi Başlat',
    loadingLabel: 'Başlatılıyor…',
    disclaimer: 'Hesap gerekmez · ilk sonuçlar ~10 dakikada',
    errorFallback: 'Bir hata oluştu. Lütfen tekrar deneyin.',
  },
  fr: {
    namePlaceholder: "Prénom de l'enfant",
    agePlaceholder: 'Âge',
    submitLabel: "Commencer l'évaluation gratuite",
    loadingLabel: 'Démarrage…',
    disclaimer: 'Sans compte · premiers résultats en ~10 min',
    errorFallback: 'Une erreur est survenue. Veuillez réessayer.',
  },
  es: {
    namePlaceholder: 'Nombre del niño/a',
    agePlaceholder: 'Edad',
    submitLabel: 'Iniciar evaluación gratuita',
    loadingLabel: 'Iniciando…',
    disclaimer: 'Sin cuenta · primeros resultados en ~10 min',
    errorFallback: 'Algo salió mal. Por favor inténtalo de nuevo.',
  },
  ar: {
    namePlaceholder: 'اسم الطفل',
    agePlaceholder: 'العمر',
    submitLabel: 'ابدأ التقييم المجاني',
    loadingLabel: '…جارٍ البدء',
    disclaimer: 'لا حاجة لحساب · أول النتائج في ~١٠ دقائق',
    errorFallback: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
  },
  ru: {
    namePlaceholder: 'Имя ребёнка',
    agePlaceholder: 'Возраст',
    submitLabel: 'Начать бесплатную оценку',
    loadingLabel: 'Запуск…',
    disclaimer: 'Без регистрации · первые результаты через ~10 мин',
    errorFallback: 'Что-то пошло не так. Попробуйте ещё раз.',
  },
  zh: {
    namePlaceholder: '孩子的名字',
    agePlaceholder: '年龄',
    submitLabel: '开始免费测评',
    loadingLabel: '启动中…',
    disclaimer: '无需注册 · 约10分钟获得首项结果',
    errorFallback: '出现错误，请重试。',
  },
}

export default function GuestAcademicStartForm({ locale = 'en' }: { locale?: string }) {
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
    const res = await fetch('/api/assessment/guest-start', {
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
    // Set cookie client-side as well to guarantee it is present before navigation
    localStorage.setItem(`guestToken_${data.assessmentId}`, data.guestToken)
    router.push(`/assessment/${data.assessmentId}/question`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      toolname="start_academic_assessment"
      tooldescription="Start a free academic assessment for a child. Enter the child's name and age to begin."
      toolautosubmit
      className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto"
    >
      <div className="flex flex-row gap-3 w-full">
        <label htmlFor="guest-name" className="sr-only">{s.namePlaceholder}</label>
        <input
          id="guest-name"
          type="text"
          name="name"
          autoComplete="given-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={s.namePlaceholder}
          toolparamdescription="The child's first name"
          className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-white"
        />
        <label htmlFor="guest-age" className="sr-only">{s.agePlaceholder}</label>
        <input
          id="guest-age"
          type="number"
          name="age"
          autoComplete="off"
          inputMode="numeric"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min={6}
          max={20}
          placeholder={s.agePlaceholder}
          toolparamdescription="The child's age in years (6 to 20)"
          className="w-20 flex-shrink-0 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-white"
        />
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
