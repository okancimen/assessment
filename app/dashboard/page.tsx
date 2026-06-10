import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/dashboard/Navbar'
import { getAge, formatDate } from '@/lib/utils'
import { Child, Assessment } from '@/types'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  const { data: children } = await supabase
    .from('children')
    .select('*')
    .eq('parent_id', user.id)
    .order('created_at', { ascending: false })

  const childIds = (children || []).map((c: Child) => c.id)

  const { data: assessments } = childIds.length > 0
    ? await supabase
        .from('assessments')
        .select('*, children(name)')
        .in('child_id', childIds)
        .order('created_at', { ascending: false })
        .limit(10)
    : { data: [] }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name')
    .eq('id', user.id)
    .single()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Hello, {profile?.full_name?.split(' ')[0] || 'there'}
            </h1>
            <p className="text-gray-500 mt-1">Manage your children&apos;s assessments</p>
          </div>
          <Link
            href="/children/new"
            className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            + Add child
          </Link>
        </div>

        {/* Children */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Children</h2>
          {!children || children.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 border-dashed p-12 text-center">
              <p className="text-gray-400 mb-4">No children added yet</p>
              <Link
                href="/children/new"
                className="text-indigo-600 font-medium text-sm hover:underline"
              >
                Add your first child
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {children.map((child: Child) => (
                <Link key={child.id} href={`/children/${child.id}`}>
                  <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg mb-3">
                      {child.name[0].toUpperCase()}
                    </div>
                    <h3 className="font-semibold text-gray-900">{child.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Age {getAge(child.date_of_birth)} · Born {formatDate(child.date_of_birth)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Recent assessments */}
        {assessments && assessments.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent assessments</h2>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">Child</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">Date</th>
                    <th className="text-left px-5 py-3 text-gray-500 font-medium">Status</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {(assessments as (Assessment & { children: { name: string } })[]).map((a) => (
                    <tr key={a.id} className="border-b border-gray-50 last:border-0">
                      <td className="px-5 py-3 font-medium text-gray-900">{a.children?.name}</td>
                      <td className="px-5 py-3 text-gray-500">{formatDate(a.created_at)}</td>
                      <td className="px-5 py-3">
                        <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          a.status === 'completed' ? 'bg-emerald-50 text-emerald-700' :
                          a.status === 'in_progress' ? 'bg-amber-50 text-amber-700' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {a.status === 'in_progress' ? 'In progress' : a.status === 'completed' ? 'Completed' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-right">
                        {a.status === 'completed' ? (
                          <Link href={`/results/${a.id}`} className="text-indigo-600 hover:underline text-xs font-medium">
                            View results
                          </Link>
                        ) : a.status === 'in_progress' ? (
                          <Link href={`/assessment/${a.id}/question`} className="text-indigo-600 hover:underline text-xs font-medium">
                            Continue
                          </Link>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
