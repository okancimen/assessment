import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('ru')

export default function SamplePersonalityReport_ru_Page() {
  return <SamplePersonalityReport locale="ru" />
}
