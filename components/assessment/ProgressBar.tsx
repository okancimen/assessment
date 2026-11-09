import { SUBJECT_LABELS, QUESTIONS_PER_SUBJECT, Subject } from '@/types'

interface ProgressBarProps {
  subjectIndex: number
  questionIndex: number
  currentSubject: Subject
  completedSubjects: Subject[]
  elapsed?: string
}

export default function ProgressBar({
  subjectIndex,
  questionIndex,
  currentSubject,
  completedSubjects,
  elapsed,
}: ProgressBarProps) {
  const totalSubjects = 4
  const sectionPercent = Math.round((questionIndex / QUESTIONS_PER_SUBJECT) * 100)
  const minsLeft = Math.max(1, Math.ceil((QUESTIONS_PER_SUBJECT - questionIndex) * 0.5))

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          {SUBJECT_LABELS[currentSubject]}
          <span className="text-gray-400 font-normal ml-1.5">· Phase {subjectIndex + 1} of {totalSubjects}</span>
        </span>
        <span className="text-xs text-gray-400">~{minsLeft} min left in this phase</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: totalSubjects }).map((_, i) => (
          <div key={i} className="flex-1 h-1.5 rounded-full overflow-hidden bg-gray-100">
            {i < completedSubjects.length ? (
              <div className="h-full w-full rounded-full bg-indigo-500" />
            ) : i === subjectIndex ? (
              <div
                className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                style={{ width: `${sectionPercent}%` }}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>Question {questionIndex + 1} of {QUESTIONS_PER_SUBJECT}</span>
        {elapsed && <span>{elapsed}</span>}
      </div>
    </div>
  )
}
