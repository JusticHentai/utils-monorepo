# @justichentai/utils-agent

A Node.js TypeScript framework for a general-purpose LLM agent.

The package is intentionally split into hardened boundaries:

- `agent`: public facade and orchestration entry.
- `workflow`: step definitions and execution graph shape.
- `runtime`: run context, workflow executor, and tool/provider orchestration.
- `providers`: adapters for mock and HTTP LLM APIs.
- `capabilities`: typed tool registration and lookup.
- `policies`: guardrails before model calls and tool execution.
- `memory`: conversation state interface and in-memory implementation.
- `errors`: stable error classes for integration code.

## Minimal usage

```ts
import { createMockLlmProvider, createUtilsAgent } from '@justichentai/utils-agent'

const agent = createUtilsAgent({
  provider: createMockLlmProvider(),
})

const result = await agent.run('hello')
console.log(result.content)
```

## Workflow/runtime split

If you need direct access to the execution layers, use `createAgentRuntime` with
`createDefaultAgentWorkflow`.

## HTTP LLM provider

`createHttpLlmProvider` is an OpenAI-compatible chat-completions adapter by default.
You can provide custom request and response mappers when the API shape differs.

```ts
import { createHttpLlmProvider, createUtilsAgent } from '@justichentai/utils-agent'

const agent = createUtilsAgent({
  provider: createHttpLlmProvider({
    baseUrl: 'https://api.example.com',
    apiKey: process.env.LLM_API_KEY,
    model: 'your-model',
  }),
})
```
