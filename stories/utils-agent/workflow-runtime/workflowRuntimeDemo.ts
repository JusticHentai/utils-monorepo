import { action } from 'storybook/actions'

import {
  createAgentRuntime,
  createDefaultAgentWorkflow,
  createMockLlmProvider,
} from '../../../packages/utils-agent/src'

const workflowRuntimeDemo = async () => {
  const runtime = createAgentRuntime({
    provider: createMockLlmProvider({
      responder: (request, context) => ({
        content: `workflow ${context.conversationId} handled ${request.messages.length} messages`,
        usage: {
          inputTokens: request.messages.length,
          outputTokens: 8,
          totalTokens: request.messages.length + 8,
        },
      }),
    }),
    maxWorkflowSteps: 16,
  })
  const workflow = createDefaultAgentWorkflow()
  const result = await runtime.run(workflow, {
    content: '直接运行 workflow/runtime',
    conversationId: 'storybook-workflow-demo',
  })

  action('workflow/runtime result')({
    id: result.id,
    conversationId: result.conversationId,
    content: result.content,
    messageRoles: result.messages.map((message) => message.role),
    usage: result.usage,
  })
}

export default workflowRuntimeDemo
