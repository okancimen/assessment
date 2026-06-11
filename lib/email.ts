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

  const from = process.env.EMAIL_FROM ?? 'AcademIQ <onboarding@resend.dev>'

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
            AcademIQ &middot; AI-powered adaptive academic assessment
          </p>
        </div>
      `,
    }),
  })
}
