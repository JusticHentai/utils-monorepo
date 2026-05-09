import { action } from 'storybook/actions'

import { createMockLlmProvider, createUtilsAgent } from '../../../packages/utils-agent/src'

const agentFacadeDemo = async () => {
  const agent = createUtilsAgent({
    provider: createMockLlmProvider({
      responder: (request) => ({
        content: `agent facade handled: ${request.messages.at(-1)?.content ?? ''}`,
        usage: {
          inputTokens: request.messages.length,
          outputTokens: 7,
          totalTokens: request.messages.length + 7,
        },
      }),
    }),
    metadata: {
      source: 'storybook',
    },
  })

  const result = await agent.run('请用 mock provider 运行一次最小 agent')

  action('createUtilsAgent result')({
    content: result.content,
    conversationId: result.conversationId,
    messageCount: result.messages.length,
    metadata: result.metadata,
    usage: result.usage,
  })
}

export default agentFacadeDemo
