import SamplePersonalityReport, { buildSamplePersonalityMetadata } from '@/components/sample-report/SamplePersonalityReport'

export const metadata = buildSamplePersonalityMetadata('es')

export default function SamplePersonalityReport_es_Page() {
  return <SamplePersonalityReport locale="es" />
}
