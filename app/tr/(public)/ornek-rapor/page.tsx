import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/tr'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportTRPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="px-6 pt-8 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Çocuğunuzun alacağı değerlendirme raporu — ücretsiz, 45 dakikalık çevrimiçi bir değerlendirmeden</h1>
      </div>
      <SampleReport content={content} />
    </div>
  )
}
