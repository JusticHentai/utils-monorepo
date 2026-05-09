import assert from 'node:assert/strict'

import { createAgentRuntime, createDefaultAgentWorkflow, createMockLlmProvider, createUtilsAgent } from './src'

const runtime = createAgentRuntime({
  provider: createMockLlmProvider({
    responder: (request) => ({
      content: `mocked:${request.messages.at(-1)?.content ?? ''}`,
      usage: {
        inputTokens: request.messages.length,
        outputTokens: 1,
        totalTokens: request.messages.length + 1,
      },
    }),
  }),
})

const workflow = createDefaultAgentWorkflow()
const runtimeResult = await runtime.run(workflow, 'ping')

assert.equal(runtimeResult.content, 'mocked:ping')
assert.equal(runtimeResult.messages.at(-1)?.role, 'assistant')
assert.equal(runtimeResult.usage?.outputTokens, 1)

const agent = createUtilsAgent({
  provider: createMockLlmProvider(),
})

const agentResult = await agent.run('pong')

assert.equal(agentResult.content, '[mock] pong')

console.log('utils-agent minimal validation passed')
