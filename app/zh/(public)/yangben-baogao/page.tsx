import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/zh'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportZHPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <SampleReport content={content} />
    </div>
  )
}
