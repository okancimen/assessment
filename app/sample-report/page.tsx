import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/en'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PublicNav />
      <SampleReport content={content} />
      <PublicFooter />
    </div>
  )
}
