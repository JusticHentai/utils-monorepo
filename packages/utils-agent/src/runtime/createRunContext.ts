import type { AgentRunContext, AgentRunInput, UtilsAgentOptions } from '../types'

const createId = (): string => {
  const cryptoApi = globalThis.crypto

  if (cryptoApi?.randomUUID) {
    return cryptoApi.randomUUID()
  }

  return `run-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

export const createRunContext = (
  input: AgentRunInput,
  options: Pick<UtilsAgentOptions, 'metadata'> = {},
): AgentRunContext => ({
  runId: createId(),
  conversationId: input.conversationId ?? createId(),
  startedAt: new Date(),
  metadata: {
    ...options.metadata,
    ...input.metadata,
  },
  signal: input.signal,
})
