import type { AgentMemory, AgentMessage } from '../types'

export class InMemoryAgentMemory implements AgentMemory {
  private readonly conversations = new Map<string, AgentMessage[]>()

  async load(conversationId: string): Promise<AgentMessage[]> {
    return [...(this.conversations.get(conversationId) ?? [])]
  }

  async append(conversationId: string, messages: AgentMessage[]): Promise<void> {
    const currentMessages = this.conversations.get(conversationId) ?? []
    this.conversations.set(conversationId, [...currentMessages, ...messages])
  }

  async clear(conversationId: string): Promise<void> {
    this.conversations.delete(conversationId)
  }
}
