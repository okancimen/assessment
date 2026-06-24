async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return
  const from = process.env.EMAIL_FROM ?? 'Eduentry <noreply@eduentry.com>'
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, html }),
  })
}

export async function sendInternshipConfirmationEmail(opts: {
  to: string
  name: string
  track: string
}): Promise<void> {
  await sendEmail(
    opts.to,
    'Your internship application is received',
    `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
      <h1 style="font-size:22px;font-weight:700;margin:0 0 6px">Application Received</h1>
      <p style="color:#6b7280;margin:0 0 20px;font-size:14px">Hi ${opts.name}, your internship application for the <strong>${opts.track}</strong> track has been received.</p>
      <p style="color:#6b7280;font-size:14px;margin:0 0 28px">Your assessment is ready. Log in to Eduentry to start when you're ready — you can pause and resume at any time.</p>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'}/dashboard"
         style="display:block;background:#4f46e5;color:#fff;text-decoration:none;text-align:center;padding:15px;border-radius:10px;font-weight:600;font-size:15px;margin-bottom:28px">
        Go to dashboard →
      </a>
      <p style="color:#9ca3af;font-size:11px;text-align:center;margin:0">Eduentry · Internship Assessment Platform</p>
    </div>`
  )
}

export async function sendInternshipAdminAlertEmail(opts: {
  adminEmails: string[]
  applicantName: string
  track: string
  school: string
  assessmentId: string
}): Promise<void> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'
  for (const email of opts.adminEmails) {
    sendEmail(
      email,
      `New internship applicant: ${opts.applicantName}`,
      `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 16px">New Internship Application</h1>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:24px">
          <tr><td style="padding:6px 0;color:#6b7280;width:120px">Name</td><td style="padding:6px 0;font-weight:600">${opts.applicantName}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280">Track</td><td style="padding:6px 0;font-weight:600">${opts.track}</td></tr>
          <tr><td style="padding:6px 0;color:#6b7280">School</td><td style="padding:6px 0">${opts.school}</td></tr>
        </table>
        <a href="${siteUrl}/admin/internship/${opts.assessmentId}"
           style="display:block;background:#4f46e5;color:#fff;text-decoration:none;text-align:center;padding:14px;border-radius:10px;font-weight:600;font-size:14px;margin-bottom:28px">
          View candidate profile →
        </a>
        <p style="color:#9ca3af;font-size:11px;text-align:center;margin:0">Eduentry Admin</p>
      </div>`
    ).catch(() => {})
  }
}

export async function sendParentLinkNotificationEmail(opts: {
  to: string
  studentName: string
}): Promise<void> {
  await sendEmail(
    opts.to,
    `${opts.studentName} has registered for the internship assessment`,
    `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
      <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Your child has registered</h1>
      <p style="color:#6b7280;font-size:14px;margin:0 0 24px">${opts.studentName} has created an account and started their internship assessment on Eduentry. You can view their progress and results in your dashboard.</p>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'}/dashboard"
         style="display:block;background:#4f46e5;color:#fff;text-decoration:none;text-align:center;padding:14px;border-radius:10px;font-weight:600;font-size:14px">
        Go to dashboard →
      </a>
    </div>`
  )
}

interface ResultsEmailOptions {
  to: string
  childName: string
  overallScore: number
  scoreLabel: string
  resultsUrl: string
}

export async function sendResultsEmail(opts: ResultsEmailOptions): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  const from = process.env.EMAIL_FROM ?? 'Eduentry <noreply@eduentry.com>'

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: opts.to,
      subject: `${opts.childName}'s assessment results are ready`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
          <h1 style="font-size:22px;font-weight:700;margin:0 0 6px">${opts.childName}&rsquo;s Assessment Results</h1>
          <p style="color:#6b7280;margin:0 0 28px;font-size:14px">The adaptive assessment has been completed.</p>

          <div style="background:#f5f3ff;border-radius:14px;padding:24px;text-align:center;margin-bottom:28px">
            <div style="font-size:48px;font-weight:800;color:#4f46e5;line-height:1">${opts.overallScore}</div>
            <div style="color:#7c3aed;font-weight:600;margin-top:6px">${opts.scoreLabel}</div>
            <div style="color:#9ca3af;font-size:12px;margin-top:4px">Overall standardised score</div>
          </div>

          <a href="${opts.resultsUrl}"
             style="display:block;background:#4f46e5;color:#fff;text-decoration:none;text-align:center;
                    padding:15px;border-radius:10px;font-weight:600;font-size:15px;margin-bottom:28px">
            View Full Results &amp; Recommendations →
          </a>

          <p style="color:#9ca3af;font-size:11px;text-align:center;margin:0">
            Eduentry &middot; AI-powered adaptive academic assessment
          </p>
        </div>
      `,
    }),
  })
}
