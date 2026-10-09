'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Navbar from '@/components/dashboard/Navbar'
import PublicFooter from '@/components/layout/PublicFooter'
import { trackEvent } from '@/lib/analytics'

type Locale = 'en' | 'fr' | 'es' | 'ar' | 'tr' | 'ru' | 'zh'

interface PageI18n {
  dir: 'ltr' | 'rtl'
  backToDashboard: string
  title: string
  subtitle: string
  nameLabel: string
  namePlaceholder: string
  dobLabel: string
  dobHint: string
  goalsLabel: string
  selectHint: string
  subjectsLabel: string
  outcomeLabel: string
  optionalHint: string
  outcomePlaceholder: string
  submitBtn: string
  ageError: string
  goals: Record<string, string>
  subjects: Record<string, string>
}

const TRANSLATIONS: Record<Locale, PageI18n> = {
  en: {
    dir: 'ltr',
    backToDashboard: '← Back to dashboard',
    title: 'Add a child',
    subtitle: 'Children must be aged 6–17 to take the assessment.',
    nameLabel: "Child's name",
    namePlaceholder: 'e.g. Emma',
    dobLabel: 'Date of birth',
    dobHint: 'Ages 6–17 only',
    goalsLabel: 'What are they preparing for?',
    selectHint: 'Select all that apply · Optional',
    subjectsLabel: 'Subjects they enjoy',
    outcomeLabel: 'What would a great outcome look like for you?',
    optionalHint: 'Optional',
    outcomePlaceholder: 'e.g. I want Emma to get into a grammar school by next September…',
    submitBtn: 'Add child',
    ageError: 'Child must be between 6 and 17 years old',
    goals: {
      '11plus': '11+ / Grammar school entry',
      private_school: 'Private school entrance exam',
      benchmark: 'Benchmark my child globally',
      internship: 'Internship / work readiness',
    },
    subjects: {
      maths: 'Maths', english: 'English', science: 'Science',
      history: 'History', languages: 'Languages', computing: 'Computing', business: 'Business',
    },
  },
  tr: {
    dir: 'ltr',
    backToDashboard: '← Panele dön',
    title: 'Çocuk ekle',
    subtitle: 'Değerlendirmeye katılmak için çocuğun 6–17 yaşları arasında olması gerekir.',
    nameLabel: 'Çocuğun adı',
    namePlaceholder: 'örn. Zeynep',
    dobLabel: 'Doğum tarihi',
    dobHint: 'Yalnızca 6–17 yaş',
    goalsLabel: 'Ne için hazırlanıyor?',
    selectHint: 'Uygun olanları seçin · İsteğe bağlı',
    subjectsLabel: 'Sevdiği dersler',
    outcomeLabel: 'İdeal bir sonuç sizin için nasıl görünür?',
    optionalHint: 'İsteğe bağlı',
    outcomePlaceholder: "örn. Zeynep'in Eylül'e kadar iyi bir okula girmesini istiyorum…",
    submitBtn: 'Çocuk ekle',
    ageError: 'Çocuk 6 ile 17 yaş arasında olmalıdır',
    goals: {
      '11plus': '11+ / Seçmeli okul sınavı',
      private_school: 'Özel okul giriş sınavı',
      benchmark: 'Çocuğumu küresel olarak kıyasla',
      internship: 'Staj / İş hayatına hazırlık',
    },
    subjects: {
      maths: 'Matematik', english: 'İngilizce', science: 'Fen',
      history: 'Tarih', languages: 'Yabancı Dil', computing: 'Bilişim', business: 'İşletme',
    },
  },
  fr: {
    dir: 'ltr',
    backToDashboard: '← Retour au tableau de bord',
    title: 'Ajouter un enfant',
    subtitle: "L'enfant doit avoir entre 6 et 17 ans pour passer l'évaluation.",
    nameLabel: "Prénom de l'enfant",
    namePlaceholder: 'ex. Emma',
    dobLabel: 'Date de naissance',
    dobHint: 'Âges 6–17 uniquement',
    goalsLabel: 'Pour quoi se prépare-t-il/elle ?',
    selectHint: "Sélectionnez tout ce qui s'applique · Facultatif",
    subjectsLabel: 'Matières préférées',
    outcomeLabel: 'À quoi ressemblerait un excellent résultat pour vous ?',
    optionalHint: 'Facultatif',
    outcomePlaceholder: "ex. Je veux qu'Emma intègre une école sélective en septembre…",
    submitBtn: "Ajouter l'enfant",
    ageError: "L'enfant doit avoir entre 6 et 17 ans",
    goals: {
      '11plus': '11+ / Entrée en école sélective',
      private_school: "Examen d'entrée en école privée",
      benchmark: "Évaluer mon enfant à l'échelle mondiale",
      internship: 'Stage / Préparation au travail',
    },
    subjects: {
      maths: 'Mathématiques', english: 'Anglais', science: 'Sciences',
      history: 'Histoire', languages: 'Langues', computing: 'Informatique', business: 'Commerce',
    },
  },
  es: {
    dir: 'ltr',
    backToDashboard: '← Volver al panel',
    title: 'Añadir un hijo/a',
    subtitle: 'El niño debe tener entre 6 y 17 años para realizar la evaluación.',
    nameLabel: 'Nombre del niño/a',
    namePlaceholder: 'p. ej. Emma',
    dobLabel: 'Fecha de nacimiento',
    dobHint: 'Solo edades 6–17',
    goalsLabel: '¿Para qué se están preparando?',
    selectHint: 'Selecciona todas las que correspondan · Opcional',
    subjectsLabel: 'Asignaturas que disfrutan',
    outcomeLabel: '¿Cómo sería un gran resultado para ti?',
    optionalHint: 'Opcional',
    outcomePlaceholder: 'p. ej. Quiero que Emma entre a una escuela de gramática para septiembre…',
    submitBtn: 'Añadir hijo/a',
    ageError: 'El niño debe tener entre 6 y 17 años',
    goals: {
      '11plus': '11+ / Acceso a escuela selectiva',
      private_school: 'Examen de acceso a escuela privada',
      benchmark: 'Evaluar a mi hijo/a globalmente',
      internship: 'Prácticas / Preparación laboral',
    },
    subjects: {
      maths: 'Matemáticas', english: 'Inglés', science: 'Ciencias',
      history: 'Historia', languages: 'Idiomas', computing: 'Informática', business: 'Negocios',
    },
  },
  ar: {
    dir: 'rtl',
    backToDashboard: '→ العودة إلى لوحة التحكم',
    title: 'إضافة طفل',
    subtitle: 'يجب أن يكون عمر الطفل بين 6 و17 سنة لإجراء التقييم.',
    nameLabel: 'اسم الطفل',
    namePlaceholder: 'مثال: سارة',
    dobLabel: 'تاريخ الميلاد',
    dobHint: 'الأعمار من 6 إلى 17 سنة فقط',
    goalsLabel: 'لماذا يستعدّ؟',
    selectHint: 'اختر كل ما ينطبق · اختياري',
    subjectsLabel: 'المواد التي يحبها',
    outcomeLabel: 'كيف يبدو النتيجة المثالية بالنسبة لك؟',
    optionalHint: 'اختياري',
    outcomePlaceholder: 'مثال: أريد أن تلتحق سارة بمدرسة متميزة في سبتمبر…',
    submitBtn: 'إضافة طفل',
    ageError: 'يجب أن يكون عمر الطفل بين 6 و17 سنة',
    goals: {
      '11plus': 'اختبار القبول في المدارس الحكومية المتميزة',
      private_school: 'اختبار دخول المدرسة الخاصة',
      benchmark: 'قياس مستوى طفلي عالمياً',
      internship: 'التدريب / الاستعداد لسوق العمل',
    },
    subjects: {
      maths: 'الرياضيات', english: 'الإنجليزية', science: 'العلوم',
      history: 'التاريخ', languages: 'اللغات', computing: 'الحوسبة', business: 'إدارة الأعمال',
    },
  },
  ru: {
    dir: 'ltr',
    backToDashboard: '← Вернуться на панель',
    title: 'Добавить ребёнка',
    subtitle: 'Для прохождения оценки ребёнок должен быть в возрасте от 6 до 17 лет.',
    nameLabel: 'Имя ребёнка',
    namePlaceholder: 'напр. Маша',
    dobLabel: 'Дата рождения',
    dobHint: 'Только возраст 6–17 лет',
    goalsLabel: 'К чему они готовятся?',
    selectHint: 'Выберите всё подходящее · Необязательно',
    subjectsLabel: 'Любимые предметы',
    outcomeLabel: 'Как выглядел бы для вас отличный результат?',
    optionalHint: 'Необязательно',
    outcomePlaceholder: 'напр. Я хочу, чтобы Маша поступила в хорошую школу к сентябрю…',
    submitBtn: 'Добавить ребёнка',
    ageError: 'Ребёнок должен быть в возрасте от 6 до 17 лет',
    goals: {
      '11plus': '11+ / Поступление в отборную школу',
      private_school: 'Вступительный экзамен в частную школу',
      benchmark: 'Сравнить успехи ребёнка с мировым уровнем',
      internship: 'Стажировка / Подготовка к работе',
    },
    subjects: {
      maths: 'Математика', english: 'Английский', science: 'Естественные науки',
      history: 'История', languages: 'Языки', computing: 'Информатика', business: 'Бизнес',
    },
  },
  zh: {
    dir: 'ltr',
    backToDashboard: '← 返回主页',
    title: '添加孩子',
    subtitle: '参加评估的孩子须在6至17岁之间。',
    nameLabel: '孩子的姓名',
    namePlaceholder: '例如：小明',
    dobLabel: '出生日期',
    dobHint: '仅限6–17岁',
    goalsLabel: '他们在准备什么？',
    selectHint: '选择所有适用项 · 可选',
    subjectsLabel: '喜欢的科目',
    outcomeLabel: '对您来说，理想的结果是什么样的？',
    optionalHint: '可选',
    outcomePlaceholder: '例如：我希望小明在九月前进入一所好学校…',
    submitBtn: '添加孩子',
    ageError: '孩子年龄须在6至17岁之间',
    goals: {
      '11plus': '11+ / 重点学校入学考试',
      private_school: '私立学校入学考试',
      benchmark: '全球基准测评',
      internship: '实习 / 职场准备',
    },
    subjects: {
      maths: '数学', english: '英语', science: '科学',
      history: '历史', languages: '外语', computing: '计算机', business: '商业',
    },
  },
}

function MultiSelect({
  options,
  selected,
  onChange,
}: {
  options: { value: string; label: string }[]
  selected: string[]
  onChange: (val: string[]) => void
}) {
  function toggle(value: string) {
    onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value])
  }
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = selected.includes(opt.value)
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              active
                ? 'bg-[#4F46E5] text-white border-[#4F46E5]'
                : 'bg-[#f5f5f7] text-[#1d1d1f] border-[#d2d2d7] hover:border-[#4F46E5]'
            }`}
          >
            {active && <span className="mr-1.5">✓</span>}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

export default function AddChildPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const locale = (searchParams.get('locale') ?? 'en') as Locale
  const t = TRANSLATIONS[locale] ?? TRANSLATIONS.en

  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [goals, setGoals] = useState<string[]>([])
  const [subjects, setSubjects] = useState<string[]>([])
  const [outcomeGoal, setOutcomeGoal] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const goalOptions = Object.entries(t.goals).map(([value, label]) => ({ value, label }))
  const subjectOptions = Object.entries(t.subjects).map(([value, label]) => ({ value, label }))

  const dashHref = locale === 'en' ? '/dashboard' : `/${locale}/dashboard`

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const age = Math.floor(
      (Date.now() - new Date(dateOfBirth).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    )
    if (age < 6 || age > 17) {
      setError(t.ageError)
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/children', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          date_of_birth: dateOfBirth,
          goals,
          subjects,
          outcome_goal: outcomeGoal.trim() || null,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      trackEvent('add_child')
      router.push(`${dashHref}?success=child-added`)
    } catch {
      setError('Network error. Please check your connection and try again.')
      setLoading(false)
    }
  }

  const minDate = new Date(Date.now() - 17 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const maxDate = new Date(Date.now() - 6 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col" dir={t.dir}>
      <Navbar locale={locale} />
      <main className="max-w-lg mx-auto px-6 py-10 w-full">
        <div className="mb-6">
          <Link href={dashHref} className="text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
            {t.backToDashboard}
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-[#d2d2d7] shadow-sm p-8">
          <h1 className="text-xl font-bold text-[#1d1d1f] mb-1 tracking-tight">{t.title}</h1>
          <p className="text-xs text-[#6e6e73] mb-6">{t.subtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">
                {t.nameLabel}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-[#f5f5f7]"
                placeholder={t.namePlaceholder}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-2 uppercase tracking-wide">
                {t.dobLabel}
              </label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                min={minDate}
                max={maxDate}
                className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] text-sm bg-[#f5f5f7]"
              />
              <p className="text-xs text-[#6e6e73] mt-1.5">{t.dobHint}</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-1 uppercase tracking-wide">
                {t.goalsLabel}
              </label>
              <p className="text-xs text-[#6e6e73] mb-3">{t.selectHint}</p>
              <MultiSelect options={goalOptions} selected={goals} onChange={setGoals} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-1 uppercase tracking-wide">
                {t.subjectsLabel}
              </label>
              <p className="text-xs text-[#6e6e73] mb-3">{t.selectHint}</p>
              <MultiSelect options={subjectOptions} selected={subjects} onChange={setSubjects} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1d1d1f] mb-1 uppercase tracking-wide">
                {t.outcomeLabel}
              </label>
              <p className="text-xs text-[#6e6e73] mb-2">{t.optionalHint}</p>
              <textarea
                value={outcomeGoal}
                onChange={(e) => setOutcomeGoal(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 rounded-2xl border border-[#d2d2d7] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent text-[#1d1d1f] placeholder-[#6e6e73] text-sm bg-[#f5f5f7] resize-none"
                placeholder={t.outcomePlaceholder}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-100 rounded-2xl px-4 py-3 text-xs text-red-600">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white" size="lg" loading={loading}>
              {t.submitBtn}
            </Button>
          </form>
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
