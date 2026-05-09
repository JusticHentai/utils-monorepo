import type { AgentCapability } from '../types'

export const createEchoCapability = (): AgentCapability<{ text?: string }> => ({
  name: 'echo',
  description: 'Return the provided text. Useful for smoke tests and provider integration checks.',
  parameters: {
    type: 'object',
    properties: {
      text: {
        type: 'string',
      },
    },
  },
  execute(input) {
    return input.text ?? ''
  },
})
