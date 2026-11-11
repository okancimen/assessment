import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/ar'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportARPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="px-6 pt-8 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">هذا هو التقرير الذي يحصل عليه طفلك — من تقييم مجاني مدته 45 دقيقة عبر الإنترنت</h1>
      </div>
      <SampleReport content={content} />
    </div>
  )
}
