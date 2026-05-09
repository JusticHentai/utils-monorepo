import type { AgentRunContext, AgentRunInput, AgentRunOutput, AgentToolResult, AgentMessage, LlmRequest, LlmResponse } from '../types'
import type { AgentRuntime } from '../runtime/AgentRuntime'

export interface AgentWorkflowState {
  input: AgentRunInput
  context: AgentRunContext
  history: AgentMessage[]
  messages: AgentMessage[]
  inputMessage: AgentMessage
  request?: LlmRequest
  response?: LlmResponse
  toolResults: AgentToolResult[]
  output?: AgentRunOutput
  round: number
}

export interface AgentWorkflowStepResult {
  state?: Partial<AgentWorkflowState>
  next?: string
  stop?: boolean
}

export interface AgentWorkflowStep {
  name: string
  run(
    state: AgentWorkflowState,
    runtime: AgentRuntime,
  ): Promise<AgentWorkflowStepResult | void> | AgentWorkflowStepResult | void
}

export interface AgentWorkflow {
  name: string
  entry: string
  steps: AgentWorkflowStep[]
}
