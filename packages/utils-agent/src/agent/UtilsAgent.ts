import { createAgentRuntime, AgentRuntime } from '../runtime/AgentRuntime'
import { createDefaultAgentWorkflow } from '../workflow/defaultWorkflow'
import type { AgentRunInput, AgentRunOutput, UtilsAgentOptions } from '../types'

export class UtilsAgent {
  private readonly runtime: AgentRuntime
  private readonly workflow = createDefaultAgentWorkflow()

  constructor(options: UtilsAgentOptions) {
    this.runtime = createAgentRuntime(options)
  }

  async run(rawInput: string | AgentRunInput): Promise<AgentRunOutput> {
    return this.runtime.run(this.workflow, rawInput)
  }
}

export const createUtilsAgent = (options: UtilsAgentOptions): UtilsAgent => new UtilsAgent(options)
