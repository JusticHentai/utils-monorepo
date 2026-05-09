import { AgentProviderError } from '../errors/AgentError'
import type { AgentRunContext, LlmProvider, LlmRequest, LlmResponse, LlmUsage } from '../types'

export interface HttpLlmProviderOptions {
  name?: string
  baseUrl: string
  endpoint?: string
  apiKey?: string
  model: string
  headers?: Record<string, string>
  timeoutMs?: number
  mapRequest?: (request: LlmRequest, context: AgentRunContext) => unknown
  mapResponse?: (payload: unknown) => LlmResponse
}

interface ChatCompletionPayload {
  choices?: Array<{
    message?: {
      content?: string | null
    }
  }>
  usage?: {
    prompt_tokens?: number
    completion_tokens?: number
    total_tokens?: number
  }
}

const normalizeUrl = (baseUrl: string, endpoint: string): string =>
  new URL(endpoint.replace(/^\//, ''), `${baseUrl.replace(/\/$/, '')}/`).toString()

const mapDefaultUsage = (usage: ChatCompletionPayload['usage']): LlmUsage | undefined => {
  if (!usage) {
    return undefined
  }

  return {
    inputTokens: usage.prompt_tokens,
    outputTokens: usage.completion_tokens,
    totalTokens: usage.total_tokens,
  }
}

export class HttpLlmProvider implements LlmProvider {
  readonly name: string
  private readonly options: HttpLlmProviderOptions

  constructor(options: HttpLlmProviderOptions) {
    this.name = options.name ?? 'http-llm'
    this.options = options
  }

  async complete(request: LlmRequest, context: AgentRunContext): Promise<LlmResponse> {
    const endpoint = this.options.endpoint ?? '/v1/chat/completions'
    const url = normalizeUrl(this.options.baseUrl, endpoint)
    const controller = new AbortController()
    const timeout = this.options.timeoutMs
      ? setTimeout(() => controller.abort(new Error('LLM provider request timed out.')), this.options.timeoutMs)
      : undefined

    context.signal?.addEventListener('abort', () => controller.abort(context.signal?.reason), {
      once: true,
    })

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(this.options.apiKey ? { authorization: `Bearer ${this.options.apiKey}` } : {}),
          ...this.options.headers,
        },
        body: JSON.stringify(this.options.mapRequest?.(request, context) ?? this.toDefaultBody(request)),
        signal: controller.signal,
      })

      if (!response.ok) {
        throw new AgentProviderError(`LLM provider failed with HTTP ${response.status}: ${await response.text()}`)
      }

      const payload = (await response.json()) as unknown
      return this.options.mapResponse?.(payload) ?? this.fromDefaultPayload(payload)
    } catch (error) {
      if (error instanceof AgentProviderError) {
        throw error
      }

      throw new AgentProviderError('LLM provider request failed.', error)
    } finally {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }

  private toDefaultBody(request: LlmRequest): unknown {
    return {
      model: request.model ?? this.options.model,
      messages: request.messages.map((message) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
      temperature: request.temperature,
      max_tokens: request.maxTokens,
    }
  }

  private fromDefaultPayload(payload: unknown): LlmResponse {
    const data = payload as ChatCompletionPayload
    const content = data.choices?.[0]?.message?.content

    if (typeof content !== 'string') {
      throw new AgentProviderError('LLM provider response does not contain message content.', payload)
    }

    return {
      content,
      usage: mapDefaultUsage(data.usage),
      raw: payload,
    }
  }
}

export const createHttpLlmProvider = (options: HttpLlmProviderOptions): HttpLlmProvider =>
  new HttpLlmProvider(options)
