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
  const subjectsDone = completedSubjects.length
  const overallPercent = Math.round(
    ((subjectsDone * QUESTIONS_PER_SUBJECT + questionIndex) / (totalSubjects * QUESTIONS_PER_SUBJECT)) * 100
  )

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          {SUBJECT_LABELS[currentSubject]}
          <span className="text-gray-400 font-normal ml-1.5">· Subject {subjectIndex + 1} of {totalSubjects}</span>
        </span>
        <span className="text-xs text-gray-400">{overallPercent}% overall</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden bg-gray-100">
        <div
          className="h-full rounded-full bg-indigo-500 transition-all duration-500"
          style={{ width: `${overallPercent}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>Question {questionIndex + 1} of {QUESTIONS_PER_SUBJECT}</span>
        {elapsed && <span>{elapsed}</span>}
      </div>
    </div>
  )
}
