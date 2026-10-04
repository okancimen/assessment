async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return
  const from = process.env.EMAIL_FROM ?? 'Eduentry <noreply@eduentry.com>'
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, html }),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Resend error ${res.status}: ${body}`)
  }
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

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eduentry.com'

const BTN = (href: string, label: string) =>
  `<a href="${href}" style="display:block;background:#4f46e5;color:#fff;text-decoration:none;text-align:center;padding:14px;border-radius:10px;font-weight:600;font-size:15px;margin-bottom:28px">${label}</a>`

const FOOTER = `<p style="color:#9ca3af;font-size:11px;text-align:center;margin:0">Eduentry · If you no longer want reminders, simply complete or ignore this assessment.</p>`

// ── No-child onboarding reminder ─────────────────────────────────────────────

export async function sendNoChildReminderEmail(opts: {
  to: string
  name: string
}): Promise<void> {
  const addChildUrl  = `${SITE}/dashboard`
  const sampleUrl    = `${SITE}/sample-report`
  const n = opts.name

  await sendEmail(
    opts.to,
    'See what your child is really capable of',
    `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
      <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">You're one step away</h1>
      <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${n}, you created an Eduentry account yesterday but haven't added your child yet. The assessment takes around 20 minutes and gives you a full cognitive profile — verbal reasoning, numeracy, and spatial thinking — benchmarked against children internationally.</p>
      <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Here's an example of what the report looks like:</p>
      ${BTN(sampleUrl, 'View sample report →')}
      <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Ready to get started? Add your child and begin the assessment from your dashboard:</p>
      ${BTN(addChildUrl, 'Add your child →')}
      <p style="color:#9ca3af;font-size:11px;text-align:center;margin:0">Eduentry · You're receiving this because you created an account. This is a one-time reminder.</p>
    </div>`
  )
}

// ── Academic reminder emails ──────────────────────────────────────────────────

export async function sendAcademicReminderEmail(opts: {
  to: string
  parentName: string
  childName: string
  assessmentId: string
  reminderNumber: 1 | 2 | 3
}): Promise<void> {
  const continueUrl = `${SITE}/assessment/${opts.assessmentId}/question`
  const sampleUrl   = 'https://eduentry.com/sample-report'
  const p  = opts.parentName
  const c  = opts.childName

  const variants: Record<1 | 2 | 3, { subject: string; html: string }> = {
    1: {
      subject: `${c} hasn't finished their assessment yet`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Just a quick nudge</h1>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${p}, ${c} started their Eduentry assessment yesterday but didn't quite finish. It only takes about 25 minutes and they can pick up right where they left off.</p>
        ${BTN(continueUrl, 'Continue assessment →')}
        <p style="color:#6b7280;font-size:14px;margin:0 0 12px">Once complete, you'll receive a detailed report showing exactly where ${c} stands — their strengths across verbal reasoning, numeracy, and problem-solving, and the areas where a little extra focus would make the biggest difference, benchmarked against children internationally.</p>
        ${BTN(sampleUrl, 'See a sample report →')}
        <p style="color:#6b7280;font-size:13px;margin:0 0 28px">No preparation needed — the assessment adjusts to their level automatically.</p>
        ${FOOTER}
      </div>`,
    },
    2: {
      subject: `Still time to complete ${c}'s assessment`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Still waiting</h1>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${p}, ${c}'s assessment is still waiting. It's been a week since they started — their progress is saved and they can continue any time from where they left off.</p>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">When they finish, you'll get a full report breaking down their performance across every area — not just a score, but a clear picture of where they're strong and where targeted support would help most.</p>
        ${BTN(sampleUrl, 'See what the report looks like →')}
        ${BTN(continueUrl, 'Continue assessment →')}
        ${FOOTER}
      </div>`,
    },
    3: {
      subject: `Last reminder: ${c}'s assessment expires soon`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Last reminder</h1>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${p}, this is our last reminder. ${c}'s in-progress assessment will be cleared after 30 days of inactivity — after that they'd need to start fresh.</p>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Parents who complete the assessment get a detailed breakdown like this — strengths, improvement areas, and a global percentile rank so you know exactly where ${c} stands, not just relative to their class but against children worldwide.</p>
        ${BTN(sampleUrl, 'See a sample report →')}
        ${BTN(continueUrl, 'Complete the assessment →')}
        <p style="color:#6b7280;font-size:13px;margin:0 0 28px">After this we won't send any further reminders.</p>
        ${FOOTER}
      </div>`,
    },
  }

  const { subject, html } = variants[opts.reminderNumber]
  await sendEmail(opts.to, subject, html)
}

// ── Internship reminder emails ────────────────────────────────────────────────

export async function sendInternshipReminderEmail(opts: {
  to: string
  name: string
  assessmentId: string
  reminderNumber: 1 | 2 | 3
}): Promise<void> {
  const continueUrl = `${SITE}/assessment/${opts.assessmentId}/question`
  const n = opts.name

  const variants: Record<1 | 2 | 3, { subject: string; html: string }> = {
    1: {
      subject: `You haven't finished your internship assessment`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Pick up where you left off</h1>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${n}, you started your Eduentry internship assessment yesterday but didn't quite finish. Your progress is saved — it should only take around 25 minutes to complete from where you left off.</p>
        ${BTN(continueUrl, 'Continue assessment →')}
        <p style="color:#6b7280;font-size:14px;margin:0 0 28px">Once you finish, you'll receive a full report showing your aptitude strengths, your track fit across Technology, Business, Data Analytics, and Digital Marketing — and the specific areas where you can improve before applying.</p>
        ${FOOTER}
      </div>`,
    },
    2: {
      subject: `Your internship assessment is still waiting`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Still time to finish</h1>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${n}, it's been a week since you started your assessment. Your progress is still saved — pick up right where you left off.</p>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Completing it gives you a detailed profile of your skills: where you're strongest, which internship track suits you best, and what to work on. Candidates who complete the assessment get matched to a track before the cohort closes.</p>
        ${BTN(continueUrl, 'Continue assessment →')}
        ${FOOTER}
      </div>`,
    },
    3: {
      subject: `Last reminder: your internship assessment expires soon`,
      html: `<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;color:#111827">
        <h1 style="font-size:20px;font-weight:700;margin:0 0 12px">Last reminder</h1>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Hi ${n}, this is our last reminder. Your in-progress assessment will be cleared after 30 days — after that you'd need to start from scratch.</p>
        <p style="color:#6b7280;font-size:14px;margin:0 0 20px">Finishing takes around 25 minutes and gives you a complete breakdown of your aptitude scores, track fit, and improvement areas — everything you need to understand where you stand as a candidate.</p>
        ${BTN(continueUrl, 'Complete your assessment →')}
        <p style="color:#6b7280;font-size:13px;margin:0 0 28px">After this we won't send any further reminders.</p>
        ${FOOTER}
      </div>`,
    },
  }

  const { subject, html } = variants[opts.reminderNumber]
  await sendEmail(opts.to, subject, html)
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
