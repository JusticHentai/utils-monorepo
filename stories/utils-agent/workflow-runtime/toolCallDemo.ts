import { action } from 'storybook/actions'

import {
  createEchoCapability,
  createMockLlmProvider,
  createUtilsAgent,
  type LlmRequest,
} from '../../../packages/utils-agent/src'

const createToolResponder = () => {
  let callCount = 0

  return (request: LlmRequest) => {
    callCount += 1

    if (callCount === 1) {
      return {
        content: 'need echo tool',
        toolCalls: [
          {
            id: 'call-echo',
            name: 'echo',
            arguments: {
              text: 'storybook echo result',
            },
          },
        ],
      }
    }

    const toolMessage = [...request.messages].reverse().find((message) => message.role === 'tool')

    return {
      content: `tool result observed: ${toolMessage?.content ?? ''}`,
      usage: {
        inputTokens: request.messages.length,
        outputTokens: 6,
        totalTokens: request.messages.length + 6,
      },
    }
  }
}

const toolCallDemo = async () => {
  const agent = createUtilsAgent({
    provider: createMockLlmProvider({
      responder: createToolResponder(),
    }),
    capabilities: [createEchoCapability()],
    maxToolRounds: 1,
  })

  const result = await agent.run('调用 echo capability')

  action('tool call result')({
    content: result.content,
    toolResults: result.toolResults,
    messageRoles: result.messages.map((message) => message.role),
  })
}

export default toolCallDemo
