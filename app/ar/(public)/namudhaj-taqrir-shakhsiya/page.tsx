import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('ar')

export default function SamplePersonalityReport_ar_Page() {
  return <SamplePersonalityReport locale="ar" />
}
