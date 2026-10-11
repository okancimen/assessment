'use client'

import { useEffect } from 'react'

export default function WebMCPTools() {
  useEffect(() => {
    const ctx = document.modelContext
    if (!ctx) return

    // Persist the active assessment ID across page navigations within the session
    let activeId: string | null = sessionStorage.getItem('active_pa_id')

    ctx.registerTool({
      name: 'start_personality_assessment',
      description:
        'Start a free personality assessment for a child based on the VIA Character Strengths framework. Returns the total number of questions for the child\'s age tier. Store the assessmentId — it is required for submit_personality_answer and complete_personality_assessment.',
      inputSchema: {
        type: 'object',
        properties: {
          name: { type: 'string', description: "Child's first name" },
          age: { type: 'number', description: 'Age in years (6–20)' },
        },
        required: ['name', 'age'],
      },
      execute: async (args) => {
        const name = String(args.name ?? '').trim()
        const age = Number(args.age)
        const res = await fetch('/api/personality/guest-start', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, age }),
        })
        const data = await res.json() as { assessmentId?: string; totalQuestions?: number; error?: string }
        if (!res.ok) throw new Error(data.error ?? 'Failed to start assessment')
        activeId = data.assessmentId ?? null
        if (activeId) sessionStorage.setItem('active_pa_id', activeId)
        return { assessmentId: data.assessmentId, totalQuestions: data.totalQuestions }
      },
    })

    ctx.registerTool({
      name: 'submit_personality_answer',
      description:
        'Submit a 1–5 star rating for a personality survey question. Call start_personality_assessment first. 1 = rarely/never, 3 = sometimes, 5 = always/very much so.',
      inputSchema: {
        type: 'object',
        properties: {
          questionKey: {
            type: 'string',
            description: 'Question identifier shown on the page (e.g. "curiosity_1")',
          },
          score: {
            type: 'number',
            description: 'Integer rating from 1 to 5',
          },
        },
        required: ['questionKey', 'score'],
      },
      execute: async (args) => {
        const id = activeId ?? sessionStorage.getItem('active_pa_id')
        if (!id) throw new Error('No active assessment — call start_personality_assessment first')
        const res = await fetch(`/api/personality/${id}/answer`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ questionKey: args.questionKey, score: Number(args.score) }),
        })
        if (!res.ok) throw new Error('Failed to save answer')
        return { ok: true }
      },
      consequentialHint: true,
    })

    ctx.registerTool({
      name: 'complete_personality_assessment',
      description:
        'Finalise the assessment after all questions are answered. Computes VIA trait scores and triggers AI-generated report. Returns the top 5 strengths, 3 growth areas, and a link to the full results page.',
      inputSchema: {
        type: 'object',
        properties: {
          locale: {
            type: 'string',
            description: 'Language for the AI summary: en, tr, fr, es, ar, ru, or zh. Defaults to en.',
          },
        },
      },
      execute: async (args) => {
        const id = activeId ?? sessionStorage.getItem('active_pa_id')
        if (!id) throw new Error('No active assessment — call start_personality_assessment first')
        const locale = String(args.locale ?? 'en')
        const res = await fetch(`/api/personality/${id}/complete`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ locale }),
        })
        const data = await res.json() as { error?: string }
        if (!res.ok) throw new Error(data.error ?? 'Failed to complete assessment')
        sessionStorage.removeItem('active_pa_id')
        activeId = null
        return {
          ok: true,
          resultsUrl: `${window.location.origin}/strengths/${id}/results?locale=${locale}`,
        }
      },
      consequentialHint: true,
    })
  }, [])

  return null
}
