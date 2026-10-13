import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('fr')

export default function SamplePersonalityReport_fr_Page() {
  return <SamplePersonalityReport locale="fr" />
}
