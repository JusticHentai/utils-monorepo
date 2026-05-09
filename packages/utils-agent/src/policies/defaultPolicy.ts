import { AgentPolicyError } from '../errors/AgentError'
import type { AgentPolicy } from '../types'

export interface DefaultAgentPolicyOptions {
  maxInputLength?: number
  deniedInputPatterns?: RegExp[]
}

export const createDefaultAgentPolicy = (options: DefaultAgentPolicyOptions = {}): AgentPolicy => {
  const maxInputLength = options.maxInputLength ?? 32_000
  const deniedInputPatterns = options.deniedInputPatterns ?? []

  return {
    beforeRun(input) {
      if (!input.content.trim()) {
        throw new AgentPolicyError('Input content cannot be empty.')
      }

      if (input.content.length > maxInputLength) {
        throw new AgentPolicyError(`Input content exceeds max length: ${maxInputLength}.`)
      }

      for (const pattern of deniedInputPatterns) {
        if (pattern.test(input.content)) {
          throw new AgentPolicyError(`Input content is denied by policy pattern: ${pattern.source}.`)
        }
      }
    },
  }
}
