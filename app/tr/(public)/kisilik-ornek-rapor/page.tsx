import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('tr')

export default function SamplePersonalityReport_tr_Page() {
  return <SamplePersonalityReport locale="tr" />
}
