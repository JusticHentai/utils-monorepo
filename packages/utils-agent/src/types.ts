export type AgentMetadata = Record<string, unknown>

export type AgentMessageRole = 'system' | 'user' | 'assistant' | 'tool'

export interface AgentMessage {
  role: AgentMessageRole
  content: string
  name?: string
  metadata?: AgentMetadata
}

export interface AgentRunInput {
  content: string
  conversationId?: string
  messages?: AgentMessage[]
  metadata?: AgentMetadata
  signal?: AbortSignal
}

export interface AgentRunContext {
  runId: string
  conversationId: string
  startedAt: Date
  metadata: AgentMetadata
  signal?: AbortSignal
}

export interface LlmUsage {
  inputTokens?: number
  outputTokens?: number
  totalTokens?: number
}

export interface AgentCapabilityDescriptor {
  name: string
  description: string
  parameters?: Record<string, unknown>
}

export interface AgentToolCall {
  id?: string
  name: string
  arguments?: Record<string, unknown>
}

export interface AgentToolResult {
  call: AgentToolCall
  content: string
  ok: boolean
}

export interface LlmRequest {
  messages: AgentMessage[]
  model?: string
  temperature?: number
  maxTokens?: number
  tools?: AgentCapabilityDescriptor[]
}

export interface LlmResponse {
  content: string
  usage?: LlmUsage
  toolCalls?: AgentToolCall[]
  raw?: unknown
}

export interface LlmProvider {
  name: string
  complete(request: LlmRequest, context: AgentRunContext): Promise<LlmResponse>
}

export interface AgentCapability<TInput extends Record<string, unknown> = Record<string, unknown>, TOutput = unknown> {
  name: string
  description: string
  parameters?: Record<string, unknown>
  execute(input: TInput, context: AgentRunContext): Promise<TOutput> | TOutput
}

export interface AgentCapabilityRegistry {
  add(capability: AgentCapability): AgentCapabilityRegistry
  get(name: string): AgentCapability | undefined
  list(): AgentCapability[]
  descriptors(): AgentCapabilityDescriptor[]
}

export interface AgentMemory {
  load(conversationId: string): Promise<AgentMessage[]>
  append(conversationId: string, messages: AgentMessage[]): Promise<void>
  clear?(conversationId: string): Promise<void>
}

export interface AgentPolicy {
  beforeRun?(input: AgentRunInput, context: AgentRunContext): Promise<void> | void
  beforeProvider?(request: LlmRequest, context: AgentRunContext): Promise<LlmRequest> | LlmRequest
  beforeCapability?(
    call: AgentToolCall,
    capability: AgentCapability,
    context: AgentRunContext,
  ): Promise<void> | void
  afterRun?(output: AgentRunOutput, context: AgentRunContext): Promise<AgentRunOutput> | AgentRunOutput
}

export interface UtilsAgentOptions {
  provider: LlmProvider
  model?: string
  systemPrompt?: string
  capabilities?: AgentCapability[]
  policy?: AgentPolicy
  memory?: AgentMemory
  temperature?: number
  maxTokens?: number
  maxToolRounds?: number
  maxWorkflowSteps?: number
  metadata?: AgentMetadata
}

export interface AgentRunOutput {
  id: string
  conversationId: string
  content: string
  messages: AgentMessage[]
  toolResults: AgentToolResult[]
  usage?: LlmUsage
  metadata: AgentMetadata
}
