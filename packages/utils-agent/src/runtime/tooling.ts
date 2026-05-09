import { AgentToolError } from '../errors/AgentError'
import type {
  AgentCapabilityRegistry,
  AgentPolicy,
  AgentRunContext,
  AgentToolCall,
  AgentToolResult,
} from '../types'

export const serializeToolResult = (value: unknown): string => {
  if (typeof value === 'string') {
    return value
  }

  return JSON.stringify(value)
}

export const executeToolCalls = async (options: {
  calls: AgentToolCall[]
  registry: AgentCapabilityRegistry
  policy?: AgentPolicy
  context: AgentRunContext
}): Promise<AgentToolResult[]> => {
  const results: AgentToolResult[] = []

  for (const call of options.calls) {
    const capability = options.registry.get(call.name)

    if (!capability) {
      throw new AgentToolError(`Capability not found: ${call.name}`)
    }

    await options.policy?.beforeCapability?.(call, capability, options.context)

    try {
      const output = await capability.execute(call.arguments ?? {}, options.context)
      results.push({
        call,
        content: serializeToolResult(output),
        ok: true,
      })
    } catch (error) {
      throw new AgentToolError(`Capability failed: ${call.name}`, error)
    }
  }

  return results
}
