import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-C_s77IFb.js";import{C as o}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const l=`import { action } from 'storybook/actions'

import { createMockLlmProvider, createUtilsAgent } from '../../../packages/utils-agent/src'

const agentFacadeDemo = async () => {
  const agent = createUtilsAgent({
    provider: createMockLlmProvider({
      responder: (request) => ({
        content: \`agent facade handled: \${request.messages.at(-1)?.content ?? ''}\`,
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
`,c=`import { action } from 'storybook/actions'

import {
  createAgentRuntime,
  createDefaultAgentWorkflow,
  createMockLlmProvider,
} from '../../../packages/utils-agent/src'

const workflowRuntimeDemo = async () => {
  const runtime = createAgentRuntime({
    provider: createMockLlmProvider({
      responder: (request, context) => ({
        content: \`workflow \${context.conversationId} handled \${request.messages.length} messages\`,
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
`,i=`import { action } from 'storybook/actions'

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
      content: \`tool result observed: \${toolMessage?.content ?? ''}\`,
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
`;function r(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"workflow-runtime",children:"workflow-runtime"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"utils-agent"})," 提供通用 LLM agent 的基础运行框架。当前实现已经拆成 ",e.jsx(n.code,{children:"workflow"})," 和 ",e.jsx(n.code,{children:"runtime"})," 两层："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"workflow"})," 定义执行步骤和步骤跳转。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"runtime"})," 持有运行状态，负责调用 provider、执行 capability、写入 memory、应用 policy。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"agent"})," 是对外门面，默认挂载内置 workflow。"]}),`
`]}),`
`,e.jsx(n.h2,{id:"agent-facade",children:"agent facade"}),`
`,e.jsxs(n.p,{children:["高层使用方式适合业务侧直接创建 agent 并调用 ",e.jsx(n.code,{children:"run"}),"。这里使用 ",e.jsx(n.code,{children:"MockLlmProvider"}),"，因此不需要真实 LLM API key。"]}),`
`,e.jsx(o,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"workflowruntime",children:"workflow/runtime"}),`
`,e.jsx(n.p,{children:"底层使用方式适合需要自定义 workflow、插入 checkpoint、streaming、approval、handoff 等步骤的场景。"}),`
`,e.jsx(o,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"tool-call",children:"tool call"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"capability"})," 是 agent 的工具层。provider 返回 ",e.jsx(n.code,{children:"toolCalls"})," 后，runtime 会执行对应 capability，再把工具结果作为 ",e.jsx(n.code,{children:"tool"})," message 放回模型上下文。"]}),`
`,e.jsx(o,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"provider"}),e.jsx("td",{children:e.jsx("code",{children:"LlmProvider"})}),e.jsx("td",{children:"模型供应商适配器，负责把标准请求转换为真实模型调用。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"capabilities"}),e.jsx("td",{children:e.jsx("code",{children:"AgentCapability[]"})}),e.jsx("td",{children:"工具注册列表，runtime 会按 provider 返回的 tool call 名称查找并执行。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"policy"}),e.jsx("td",{children:e.jsx("code",{children:"AgentPolicy"})}),e.jsx("td",{children:"运行前、模型调用前、工具调用前和输出后的 guardrail 钩子。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"memory"}),e.jsx("td",{children:e.jsx("code",{children:"AgentMemory"})}),e.jsx("td",{children:"会话历史读写接口，默认使用内存实现。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxToolRounds"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"单次 run 中允许的工具调用轮数。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxWorkflowSteps"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"workflow 最大跳转步数，用于防止错误 workflow 无限循环。"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"workflow/defaultWorkflow.ts"})," 定义默认流程，",e.jsx(n.code,{children:"runtime/AgentRuntime.ts"})," 执行具体节点逻辑，",e.jsx(n.code,{children:"runtime/executeWorkflow.ts"})," 负责步骤跳转。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": ",e.jsx(n.code,{children:"prepare"})," 读取 memory 并拼装消息，",e.jsx(n.code,{children:"callModel"})," 调 provider，",e.jsx(n.code,{children:"handleTools"})," 执行 capability，",e.jsx(n.code,{children:"finalize"})," 写回 memory 并产出结果。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": provider、policy、memory、capability 都通过接口注入，agent 核心不绑定具体模型服务。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 输入被规范化为 ",e.jsx(n.code,{children:"AgentWorkflowState"}),"，workflow step 持续更新 state，最终由 ",e.jsx(n.code,{children:"finalize"})," 生成 ",e.jsx(n.code,{children:"AgentRunOutput"}),"。"]}),`
`]})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
