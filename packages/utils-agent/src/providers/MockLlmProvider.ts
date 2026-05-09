import type { AgentRunContext, LlmProvider, LlmRequest, LlmResponse } from '../types'

export interface MockLlmProviderOptions {
  name?: string
  responder?: (request: LlmRequest, context: AgentRunContext) => LlmResponse | Promise<LlmResponse>
}

export class MockLlmProvider implements LlmProvider {
  readonly name: string
  private readonly responder?: MockLlmProviderOptions['responder']

  constructor(options: MockLlmProviderOptions = {}) {
    this.name = options.name ?? 'mock'
    this.responder = options.responder
  }

  async complete(request: LlmRequest, context: AgentRunContext): Promise<LlmResponse> {
    if (this.responder) {
      return this.responder(request, context)
    }

    const latestUserMessage = [...request.messages].reverse().find((message) => message.role === 'user')

    return {
      content: `[${this.name}] ${latestUserMessage?.content ?? ''}`,
      usage: {
        inputTokens: request.messages.length,
        outputTokens: 1,
        totalTokens: request.messages.length + 1,
      },
    }
  }
}

export const createMockLlmProvider = (options?: MockLlmProviderOptions): MockLlmProvider =>
  new MockLlmProvider(options)
