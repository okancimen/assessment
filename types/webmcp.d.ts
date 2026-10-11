import 'react'

declare module 'react' {
  interface FormHTMLAttributes<T> {
    toolname?: string
    tooldescription?: string
    toolautosubmit?: boolean
  }
  interface InputHTMLAttributes<T> {
    toolparamdescription?: string
  }
  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string
  }
  interface SelectHTMLAttributes<T> {
    toolparamdescription?: string
  }
}

interface ModelContextTool {
  name: string
  description: string
  inputSchema: Record<string, unknown>
  execute: (args: Record<string, unknown>) => Promise<unknown>
  readOnlyHint?: boolean
  untrustedContentHint?: boolean
  consequentialHint?: boolean
  debugging?: boolean
}

interface ModelContext extends EventTarget {
  registerTool(tool: ModelContextTool): Promise<void>
  getTools(options?: { fromOrigins?: string[] }): Promise<ModelContextTool[]>
  executeTool(
    tool: ModelContextTool,
    args: Record<string, unknown>,
    options?: { signal?: AbortSignal },
  ): Promise<unknown>
}

declare global {
  interface Document {
    modelContext?: ModelContext
  }
}
