import type { AgentMessage } from '../types'

export const DEFAULT_SYSTEM_PROMPT = [
  'You are utils-agent, a general-purpose assistant for utility workflows.',
  'Follow the available policy and capability contracts.',
  'When a capability is unavailable, explain the limitation briefly instead of guessing.',
].join('\n')

export const buildLlmRequestMessages = (options: {
  systemPrompt?: string
  history: AgentMessage[]
  input: AgentMessage
  injectedMessages?: AgentMessage[]
}): AgentMessage[] => [
  {
    role: 'system',
    content: options.systemPrompt ?? DEFAULT_SYSTEM_PROMPT,
  },
  ...options.history,
  ...(options.injectedMessages ?? []),
  options.input,
]
