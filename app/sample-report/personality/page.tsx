import PublicNav from '@/components/layout/PublicNav'
import PublicFooter from '@/components/layout/PublicFooter'
import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('en')

export default function SamplePersonalityReportPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <PublicNav />
      <SamplePersonalityReport locale="en" />
      <PublicFooter />
    </div>
  )
}
