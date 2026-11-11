import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/fr'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportFRPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="px-6 pt-8 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Le rapport que reçoit votre enfant — d&apos;une évaluation gratuite de 45 minutes en ligne</h1>
      </div>
      <SampleReport content={content} />
    </div>
  )
}
