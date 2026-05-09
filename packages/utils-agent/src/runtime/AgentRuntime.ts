import { createCapabilityRegistry } from '../capabilities/CapabilityRegistry'
import { InMemoryAgentMemory } from '../memory/InMemoryAgentMemory'
import { createDefaultAgentPolicy } from '../policies/defaultPolicy'
import { buildLlmRequestMessages } from './prompt'
import { createRunContext } from './createRunContext'
import { executeToolCalls } from './tooling'
import { AgentError } from '../errors/AgentError'
import type {
  AgentCapabilityRegistry,
  AgentMessage,
  AgentPolicy,
  AgentRunContext,
  AgentRunInput,
  AgentRunOutput,
  LlmRequest,
  UtilsAgentOptions,
} from '../types'
import type { AgentWorkflowState } from '../workflow/types'
import { executeWorkflow } from './executeWorkflow'
import type { AgentWorkflow } from '../workflow/types'

const normalizeRunInput = (input: string | AgentRunInput): AgentRunInput =>
  typeof input === 'string' ? { content: input } : input

export class AgentRuntime {
  readonly options: UtilsAgentOptions
  readonly registry: AgentCapabilityRegistry
  readonly memory: InMemoryAgentMemory | NonNullable<UtilsAgentOptions['memory']>
  readonly policy: AgentPolicy | undefined

  constructor(options: UtilsAgentOptions) {
    this.options = {
      policy: createDefaultAgentPolicy(),
      memory: new InMemoryAgentMemory(),
      maxToolRounds: 1,
      maxWorkflowSteps: 64,
      ...options,
    }
    this.registry = createCapabilityRegistry(this.options.capabilities)
    this.memory = this.options.memory ?? new InMemoryAgentMemory()
    this.policy = this.options.policy
  }

  async run(workflow: AgentWorkflow, rawInput: string | AgentRunInput): Promise<AgentRunOutput> {
    const input = normalizeRunInput(rawInput)
    const context = createRunContext(input, this.options)
    const state: AgentWorkflowState = {
      input,
      context,
      history: [],
      messages: [],
      inputMessage: {
        role: 'user',
        content: input.content,
      },
      toolResults: [],
      round: 0,
    }

    await executeWorkflow(workflow, state, this)

    if (!state.output) {
      throw new AgentError('Workflow finished without producing output.', {
        code: 'AGENT_WORKFLOW_ERROR',
      })
    }

    return state.output
  }

  async prepare(state: AgentWorkflowState) {
    await this.policy?.beforeRun?.(state.input, state.context)

    state.history = await this.memory.load(state.context.conversationId)
    state.messages = buildLlmRequestMessages({
      systemPrompt: this.options.systemPrompt,
      history: state.history,
      injectedMessages: state.input.messages,
      input: state.inputMessage,
    })

    return undefined
  }

  async callModel(state: AgentWorkflowState) {
    const request = await this.applyBeforeProvider(
      {
        messages: state.messages,
        model: this.options.model,
        temperature: this.options.temperature,
        maxTokens: this.options.maxTokens,
        tools: this.registry.descriptors(),
      },
      state.context,
    )

    state.request = request
    state.response = await this.options.provider.complete(request, state.context)

    return undefined
  }

  async handleTools(state: AgentWorkflowState) {
    if (!state.response?.toolCalls?.length || state.round >= (this.options.maxToolRounds ?? 0)) {
      return {
        next: 'finalize',
      }
    }

    const currentToolResults = await executeToolCalls({
      calls: state.response.toolCalls,
      registry: this.registry,
      policy: this.policy,
      context: state.context,
    })

    state.toolResults.push(...currentToolResults)
    state.messages = [
      ...state.messages,
      {
        role: 'assistant',
        content: state.response.content,
      },
      ...currentToolResults.map<AgentMessage>((result) => ({
        role: 'tool',
        name: result.call.name,
        content: result.content,
      })),
    ]
    state.round += 1

    return {
      next: 'callModel',
    }
  }

  async finalize(state: AgentWorkflowState) {
    if (!state.response) {
      throw new AgentError('Workflow finalized before a model response was available.', {
        code: 'AGENT_WORKFLOW_ERROR',
      })
    }

    const assistantMessage: AgentMessage = {
      role: 'assistant',
      content: state.response.content,
    }
    const output: AgentRunOutput = {
      id: state.context.runId,
      conversationId: state.context.conversationId,
      content: state.response.content,
      messages: [...state.messages, assistantMessage],
      toolResults: state.toolResults,
      usage: state.response.usage,
      metadata: {
        provider: this.options.provider.name,
        ...state.context.metadata,
      },
    }
    const finalOutput = (await this.policy?.afterRun?.(output, state.context)) ?? output

    await this.memory.append(state.context.conversationId, [
      state.inputMessage,
      {
        role: 'assistant',
        content: finalOutput.content,
      },
    ])

    state.output = finalOutput

    return {
      stop: true,
      state: {
        output: finalOutput,
      },
    }
  }

  async applyBeforeProvider(request: LlmRequest, context: AgentRunContext): Promise<LlmRequest> {
    return (await this.policy?.beforeProvider?.(request, context)) ?? request
  }

  getMaxWorkflowSteps(): number {
    return this.options.maxWorkflowSteps ?? 64
  }
}

export const createAgentRuntime = (options: UtilsAgentOptions): AgentRuntime => new AgentRuntime(options)
