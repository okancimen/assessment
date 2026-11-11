import SampleReport, { buildSampleReportMetadata } from '@/components/sample-report/SampleReport'
import content from '@/components/sample-report/content/zh'

export const metadata = buildSampleReportMetadata(content)

export default function SampleReportZHPage() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <div className="px-6 pt-8 max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">您孩子将获得的评估报告 — 来自免费的45分钟在线测试</h1>
      </div>
      <SampleReport content={content} />
    </div>
  )
}
