declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

type GaEventName =
  | 'sign_up'
  | 'login'
  | 'add_child'
  | 'assessment_start'
  | 'assessment_begin'
  | 'assessment_complete'
  | 'results_view'
  | 'recommendation_generate'
  | 'print_results'
  | 'cta_click'

interface GaEventParams {
  method?: string
  child_id?: string
  assessment_id?: string
  standardized_score?: number
  label?: string
  [key: string]: string | number | boolean | undefined
}

export function trackEvent(name: GaEventName, params?: GaEventParams) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}
