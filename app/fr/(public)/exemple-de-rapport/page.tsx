import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/fr'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportFRPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <SampleReport content={content} />
    </div>
  )
}
