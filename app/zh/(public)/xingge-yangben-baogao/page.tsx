import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('zh')

export default function SamplePersonalityReport_zh_Page() {
  return <SamplePersonalityReport locale="zh" />
}
