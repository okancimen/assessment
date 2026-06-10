import { SUBJECTS, SUBJECT_LABELS, QUESTIONS_PER_SUBJECT, Subject } from '@/types'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  subjectIndex: number
  questionIndex: number
  currentSubject: Subject
  completedSubjects: Subject[]
}

export default function ProgressBar({
  subjectIndex,
  questionIndex,
  currentSubject,
  completedSubjects,
}: ProgressBarProps) {
  const totalQuestions = SUBJECTS.length * QUESTIONS_PER_SUBJECT
  const completedQuestions = completedSubjects.length * QUESTIONS_PER_SUBJECT + questionIndex
  const overallPercent = Math.round((completedQuestions / totalQuestions) * 100)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span className="font-medium text-gray-700">{SUBJECT_LABELS[currentSubject]}</span>
        <span>{questionIndex}/{QUESTIONS_PER_SUBJECT} questions</span>
      </div>

      {/* Subject steps */}
      <div className="flex items-center gap-1">
        {SUBJECTS.map((subject, i) => {
          const isComplete = completedSubjects.includes(subject)
          const isCurrent = subject === currentSubject
          return (
            <div key={subject} className="flex-1 flex items-center gap-1">
              <div
                className={cn(
                  'h-2 flex-1 rounded-full transition-all duration-500',
                  isComplete ? 'bg-indigo-600' :
                  isCurrent ? 'bg-indigo-300' :
                  'bg-gray-100'
                )}
              />
              {i < SUBJECTS.length - 1 && (
                <div className={cn(
                  'w-1.5 h-1.5 rounded-full flex-shrink-0',
                  isComplete ? 'bg-indigo-600' : 'bg-gray-200'
                )} />
              )}
            </div>
          )
        })}
      </div>

      {/* Subject labels */}
      <div className="flex justify-between">
        {SUBJECTS.map((subject) => {
          const isComplete = completedSubjects.includes(subject)
          const isCurrent = subject === currentSubject
          return (
            <span
              key={subject}
              className={cn(
                'text-xs',
                isComplete ? 'text-indigo-600 font-medium' :
                isCurrent ? 'text-gray-700 font-medium' :
                'text-gray-400'
              )}
            >
              {SUBJECT_LABELS[subject].split(' ')[0]}
            </span>
          )
        })}
      </div>

      <div className="text-xs text-gray-400 text-right">{overallPercent}% complete</div>
    </div>
  )
}
