import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`---
name: storybook-creator
description: 为工具函数创建 Storybook 演示和文档时使用。当用户需要为 packages 下的工具创建新的 Storybook story、编写演示代码或生成工具文档时，应触发此技能。
---

# Storybook Creator

## 概览

为 \`packages/{packageName}/src/{toolName}\` 下的工具函数创建完整的 Storybook 演示和文档。

工具分为两大类，创建模式不同：
- **普通工具**（纯函数、DOM 操作类）：demo 文件为 \`.ts\`，通过按钮点击调用
- **React Hook 工具**（\`use*\` 开头）：demo 文件为 \`.tsx\`，以自定义 hook 形式封装，在组件中直接使用

## 目录结构

源码目录：\`packages/{packageName}/src/{toolName}/**\`
Storybook 目录：\`stories/{packageName}/{toolName}/**\`

### 普通工具文件结构

\`\`\`bash
stories/{packageName}/
  |--- {toolName}/
      |--- 介绍.mdx           # 文档说明
      |--- index.stories.ts   # Storybook 配置
      |--- index.tsx          # 演示组件入口
      |--- xxxDemo.ts         # Demo 文件1
      |--- yyyDemo.ts         # Demo 文件2
\`\`\`

### React Hook 工具文件结构

\`\`\`bash
stories/{packageName}/
  |--- {hookName}/
      |--- 介绍.mdx             # 文档说明
      |--- index.stories.ts     # Storybook 配置
      |--- index.tsx            # 演示组件入口（组合所有 demo hook）
      |--- basicDemo.tsx        # Demo 文件1（自定义 hook）
      |--- advancedDemo.tsx     # Demo 文件2（自定义 hook）
\`\`\`

**关键区别**：Hook demo 文件使用 \`.tsx\` 扩展名，因为它们是自定义 hook，需要在 React 组件上下文中运行。

## 创建步骤

### 1. 创建 index.stories.ts

\`\`\`ts
import {ToolName}Demo from './index'

export default {
  title: '{packageName}/{toolName}',
  component: {ToolName}Demo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export const Demo = {}
\`\`\`

---

## 普通工具模式

### 2. 创建 index.tsx

**关键规则**: 
- \`index.tsx\` 负责按钮点击调用 demo
- **禁止在 demo 中使用 \`position: fixed\` 创建元素**，会遮挡按钮
- 需要可视化元素时，在 \`index.tsx\` 中使用 React 状态管理渲染
- 有 demo 间通用变量时（如清理函数、共享状态），在 \`index.tsx\` 中定义和管理


#### 无可视化元素示例

\`\`\`tsx
import '../../.css/index.css'
import xxxDemo from './xxxDemo'
import yyyDemo from './yyyDemo'

const {ToolName}Demo = () => {
  return (
    <div>
      <div className="button" onClick={xxxDemo}>
        用例1按钮文字
      </div>
      <div className="button" onClick={yyyDemo}>
        用例2按钮文字
      </div>
    </div>
  )
}

export default {ToolName}Demo
\`\`\`

#### 有可视化元素示例

**关键规则**: 
- \`index.tsx\` 只负责渲染按钮和演示区域，保持尽量没有逻辑
- 所有业务逻辑（初始化、清理、回调处理）都放在 demo 文件中
- demo 通过 \`document.getElementById\` 获取 DOM 元素
- 通用变量（如清理函数）在 \`index.tsx\` 中定义，通过闭包传递给 demo

**index.tsx（仅渲染，传递通用变量）**：

\`\`\`tsx
import '../../.css/index.css'
import { createInitDemo } from './initDemo'
import { createCleanupDemo } from './cleanupDemo'

// 通用变量在 index.tsx 中定义
let stopFn: (() => void) | null = null

// 通过工厂函数传递变量
const initDemo = createInitDemo(
  stopFn,
  (fn) => { stopFn = fn }
)
const cleanupDemo = createCleanupDemo(
  stopFn,
  () => { stopFn = null }
)

const {ToolName}Demo = () => {
  return (
    <div>
      <div className="button" onClick={initDemo}>
        初始化示例
      </div>
      <div className="button" onClick={cleanupDemo}>
        清理示例
      </div>

      {/* 演示区域 - 放在按钮下方，避免遮挡 */}
      <div className="area">
        <div id="container" className="card">
          目标元素
        </div>
      </div>
    </div>
  )
}

export default {ToolName}Demo
\`\`\`

**initDemo.ts（初始化逻辑）**：

\`\`\`ts
import { action } from 'storybook/actions'
import toolName from '../../../packages/{packageName}/src/{toolName}'

export const createInitDemo = (
  prevStopFn: (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    if (prevStopFn) prevStopFn()
    const container = document.getElementById('container') as HTMLElement

    const stopFn = toolName(container, (result) => {
      action('回调触发')(result)
    })

    setStopFn(stopFn)
    action('初始化成功')('描述信息')
  }
}
\`\`\`

**cleanupDemo.ts（清理逻辑）**：

\`\`\`ts
import { action } from 'storybook/actions'

export const createCleanupDemo = (
  stopFn: (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    if (stopFn) {
      stopFn()
      clearStopFn()
    } 

    action('清理完成')()
  }
}
\`\`\`

#### 多个演示元素示例

\`\`\`tsx
{/* 演示区域 - 多个元素使用 flex 布局，通过 id 区分 */}
<div className="area flex">
  <div id="basic" className="card">
    基础示例
  </div>
  <div id="advanced" className="card">
    高级示例
  </div>
</div>
\`\`\`

### 3. 创建 Demo 文件

**关键规则**: 
- demo 文件使用 \`.ts\` 扩展名
- 使用 \`action\` 输出结果
- 每个 demo 文件对应工具的一个功能, 禁止合并多个功能到一个 demo 文件中
- 禁止使用 \`position: fixed\` 或 \`document.body.appendChild\` 创建遮挡元素

#### 纯函数 demo（推荐）

\`\`\`ts
import { action } from 'storybook/actions'
import toolName from '../../../packages/{packageName}/src/{toolName}'

const xxxDemo = () => {
  const result = toolName(/* 参数 */)

  action('输出标题')(result)
}

export default xxxDemo
\`\`\`

#### 需要操作 DOM 元素的 demo

当 demo 需要操作 DOM 元素时，元素应在 \`index.tsx\` 中创建，demo 通过 document.getElementById 获取：

\`\`\`ts
import { action } from 'storybook/actions'

const xxxDemo = () => {
  const container = document.getElementById('element') as HTMLElement

  container.style.background = '#f00'
  action('操作成功')('描述信息')
}

export default xxxDemo
\`\`\`

类型工具 Demo 示例：

\`\`\`ts
import { action } from 'storybook/actions'
import TypeName from '../../../packages/{packageName}/src/{TypeName}'

interface Example {
  name: string
  nested: {
    value: number
  }
}

const xxxDemo = () => {
  // 类型使用示例
  type Result = TypeName<Example, ['nested', 'value']>

  const data: Result = {
    name: 'test',
    nested: {
      // value 现在是可选的
    },
  }

  action('TypeName 使用示例')(data)
}

export default xxxDemo
\`\`\`

---

## React Hook 工具模式

当工具是 React Hook（\`use*\` 开头）时，使用以下模式。Hook 需要在 React 组件上下文中运行，因此 demo 模式和普通工具不同。

### 2. 创建 index.tsx

**关键规则**:
- \`index.tsx\` 是主演示组件，负责组合所有 demo hook 并渲染 UI
- 从各 demo 文件导入自定义 hook，获取操作方法和状态
- 使用 \`className="button"\` 渲染操作按钮
- 使用 React 状态渲染可视化反馈区域

#### 简单 Hook 示例（单 demo，逻辑直接写在 index.tsx）

当 Hook 功能单一、demo 只有一个时，可以直接在 \`index.tsx\` 中编写逻辑，无需拆分 demo 文件：

\`\`\`tsx
import '../../.css/index.css'
import { useState } from 'react'
import useHookName from '../../../packages/{packageName}/src/{hookName}'
import { action } from 'storybook/actions'

const UseHookNameDemo = () => {
  const [value, setValue] = useState('')

  useHookName(
    () => {
      action('hook 触发')({ value })
    },
    [value],
    { delay: 500 }
  )

  return (
    <div>
      <input
        placeholder="输入内容..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: 8, width: 200, marginBottom: 20 }}
      />

      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>当前值: {value}</p>
      </div>
    </div>
  )
}

export default UseHookNameDemo
\`\`\`

#### 复杂 Hook 示例（多 demo，拆分 demo 文件）

当 Hook 有多个功能点需要分别演示时，每个功能拆分为一个 demo hook 文件：

\`\`\`tsx
import '../../.css/index.css'
import useBasicDemo from './basicDemo.tsx'
import useAdvancedDemo from './advancedDemo.tsx'

const UseHookNameDemo = () => {
  const { trigger, cancel } = useBasicDemo()
  const { trigger: triggerAdvanced } = useAdvancedDemo()

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础用法</div>
      <div className="button" onClick={trigger}>
        触发基础功能
      </div>
      <div className="button" onClick={cancel}>
        取消
      </div>

      <div style={{ margin: '16px 0', fontWeight: 'bold' }}>高级用法</div>
      <div className="button" onClick={triggerAdvanced}>
        触发高级功能
      </div>
    </div>
  )
}

export default UseHookNameDemo
\`\`\`

#### 带状态展示的 Hook 示例

当 Hook 返回状态需要可视化展示时：

\`\`\`tsx
import '../../.css/index.css'
import { action } from 'storybook/actions'
import useHookName from '../../../packages/{packageName}/src/{hookName}'

const UseHookNameDemo = () => {
  const [state, { setTrue, setFalse, toggle }] = useHookName(false)

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        当前值：
        <span style={{ color: state ? '#52c41a' : '#ff4d4f' }}>
          {String(state)}
        </span>
      </div>
      <div
        className="button"
        onClick={() => {
          toggle()
          action('toggle')(!state)
        }}
      >
        Toggle
      </div>
      <div
        className="button"
        onClick={() => {
          setTrue()
          action('setTrue')('设置为 true')
        }}
      >
        Set True
      </div>
    </div>
  )
}

export default UseHookNameDemo
\`\`\`

### 3. 创建 Demo 文件（Hook 模式）

**关键规则**:
- demo 文件使用 \`.tsx\` 扩展名（因为是自定义 hook，需 React 上下文）
- 每个 demo 文件导出一个自定义 hook 函数（\`useXxxDemo\`）
- hook 内部调用目标工具 hook，返回操作方法供 \`index.tsx\` 使用
- 使用 \`action\` 输出结果
- 每个 demo 文件对应工具的一个功能，禁止合并多个功能

\`\`\`tsx
import { action } from 'storybook/actions'
import useHookName from '../../../packages/{packageName}/src/{hookName}'

const useBasicDemo = () => {
  const { run, cancel } = useHookName(
    (value: string) => {
      action('回调执行')(value)
    },
    { delay: 1000 }
  )

  const trigger = () => {
    run('触发时间: ' + new Date().toLocaleTimeString())
    action('触发')('已触发')
  }

  const cancelAction = () => {
    cancel()
    action('取消')('已取消')
  }

  return {
    trigger,
    cancel: cancelAction,
  }
}

export default useBasicDemo
\`\`\`

---

### 4. 创建 介绍.mdx 文档

#### 普通工具 mdx

\`\`\`mdx
import xxxDemo from './xxxDemo?raw'
import yyyDemo from './yyyDemo?raw'
import { CodeOrSourceMdx } from '@storybook/addon-docs/blocks'

# toolName

工具简介描述。

## 详细介绍

工具是什么
工具涉及的知识点是什么
一般用在什么场景, 以及使用原因或优势

## 用例1标题

用例1介绍，包含工具的底层原理和当前场景应用的原因

<CodeOrSourceMdx language="typescript">
  {xxxDemo}
</CodeOrSourceMdx>

## 用例2标题

用例2介绍，包含工具的底层原理和当前场景应用的原因

<CodeOrSourceMdx language="typescript">
  {yyyDemo}
</CodeOrSourceMdx>

## 参数介绍

参数需要包含：
- 工具的入参
- 工具的返回类型
- 如果工具支持 ts 泛型也需要展示

<table>
  <thead>
    <tr>
      <th>参数名</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>param1</td>
      <td><code>ParamType</code></td>
      <td>参数描述</td>
    </tr>
  </tbody>
</table>

## 具体实现原理

**关键规则**: 实现原理说明需包含以下要素，帮助读者快速理解源码：

1. **文件职责**: 列出每个源码文件的职责和作用
2. **核心流程**: 用简洁语言描述主要执行流程
3. **关键技术点**: 说明使用的核心 API、算法或设计模式
4. **数据流向**: 描述数据如何在函数/模块间传递
\`\`\`

#### React Hook 工具 mdx

**关键区别**：
- Hook 如果只有 index.tsx 没有独立 demo 文件，直接用 \`./index.tsx?raw\` 引入源码
- Hook 有独立 demo 文件时，用 \`./xxxDemo.tsx?raw\` 引入（注意 \`.tsx\` 扩展名）

\`\`\`mdx
import basicDemo from './basicDemo.tsx?raw'
import advancedDemo from './advancedDemo.tsx?raw'
import { CodeOrSourceMdx } from '@storybook/addon-docs/blocks'

# hookName

Hook 简介描述。

## 详细介绍

Hook 是什么
Hook 涉及的知识点是什么
一般用在什么场景, 以及使用原因或优势

## 基础用法

用例介绍，包含 Hook 的底层原理和当前场景应用的原因

<CodeOrSourceMdx language="typescript">
  {basicDemo}
</CodeOrSourceMdx>

## 高级用法

用例介绍，包含 Hook 的底层原理和当前场景应用的原因

<CodeOrSourceMdx language="typescript">
  {advancedDemo}
</CodeOrSourceMdx>

## 参数介绍

<table>
  <thead>
    <tr>
      <th>参数名</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>param1</td>
      <td><code>ParamType</code></td>
      <td>参数描述</td>
    </tr>
  </tbody>
</table>

## 返回值

如果 Hook 有返回值，使用表格说明：

<table>
  <thead>
    <tr>
      <th>属性名</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>run</td>
      <td><code>(...args) =&gt; void</code></td>
      <td>方法描述</td>
    </tr>
  </tbody>
</table>

## 具体实现原理

**关键规则**: 实现原理说明需包含以下要素，帮助读者快速理解源码：

1. **文件职责**: 列出每个源码文件的职责和作用
2. **核心流程**: 用简洁语言描述主要执行流程
3. **关键技术点**: 说明使用的核心 API、算法或设计模式
4. **数据流向**: 描述数据如何在函数/模块间传递
\`\`\`

## 代码展示规范

**关键规则**: 使用 \`?raw\` 引用源码，代码展示自动更新：

\`\`\`mdx
import xxxDemo from './xxxDemo?raw'
import { CodeOrSourceMdx } from '@storybook/addon-docs/blocks'

<CodeOrSourceMdx language="typescript">
  {xxxDemo}
</CodeOrSourceMdx>
\`\`\`

## 表格规范

**关键规则**: 表格必须使用 HTML 格式，不使用 Markdown 表格语法：

\`\`\`html
<table>
  <thead>
    <tr>
      <th>参数名</th>
      <th>类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>param1</td>
      <td><code>string</code></td>
      <td>参数描述</td>
    </tr>
  </tbody>
</table>
\`\`\`

## 演示区域样式

### 禁止的样式模式

**关键规则**: 以下样式会导致元素遮挡按钮，**禁止使用**：

\`\`\`ts
// ❌ 禁止：position: fixed 会遮挡按钮
container.style.cssText = \`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
\`
document.body.appendChild(container)
\`\`\`

### 推荐的样式模式

**关键规则**: 
- 使用 \`stories/.css/index.css\` 中预定义的 class
- 将可视化元素放在按钮下方，使用 id 供 demo 获取

\`\`\`tsx
// ✅ 推荐：使用预定义 class
<div className="area">
  <div id="container" className="card">
    目标元素
  </div>
</div>
\`\`\`

### 可用的 CSS class

| Class | 说明 |
|-------|------|
| \`area\` | 演示区域容器，自带 margin-top: 40px |
| \`card\` | 基础卡片样式，渐变背景、圆角、居中文字 |
| \`scroll-container\` | 带滚动的容器，300x300，灰色背景 |
| \`resizable\` | 可调整大小的元素，支持拖拽调整 |
| \`flex\` | 多元素 flex 布局，自动换行 |

### 使用示例

\`\`\`tsx
import '../../.css/index.css'

// 单个演示元素
<div className="area">
  <div id="container" className="card">
    目标元素
  </div>
</div>

// 多个演示元素
<div className="area flex">
  <div id="basic" className="card">基础示例</div>
  <div id="advanced" className="card">高级示例</div>
</div>

// 带滚动的容器
<div className="area">
  <div id="scroll" className="scroll-container">
    {/* 滚动内容 */}
  </div>
</div>

// 可调整大小的元素
<div className="area">
  <div id="resize" className="resizable card">
    拖拽调整大小
  </div>
</div>
\`\`\`
`;function t(e){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...a(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"storybook-creator",children:"storybook-creator"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Storybook 文档创建规范"}),`
`]}),`
`,n.jsx(o.h2,{id:"skillmd",children:"SKILL.md"}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"点击展开 SKILL.md 源码"}),n.jsx(s,{language:"markdown",children:d})]}),`
`,n.jsx(o.h2,{id:"技能详解",children:"技能详解"}),`
`,n.jsx(o.h3,{id:"概述",children:"概述"}),`
`,n.jsxs(o.p,{children:["为 ",n.jsx(o.code,{children:"packages/{packageName}/src/{toolName}"})," 下的工具函数创建完整的 Storybook 演示和文档时使用此技能。"]}),`
`,n.jsx(o.h3,{id:"核心功能",children:"核心功能"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"自动生成 Story"}),"：根据工具函数的类型签名和导出，自动创建对应的 ",n.jsx(o.code,{children:".mdx"})," 文档和 ",n.jsx(o.code,{children:".stories.tsx"})," 演示"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"统一文档格式"}),"：确保所有工具的 Storybook 文档遵循相同的结构和风格"]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"演示代码生成"}),"：为每个工具函数生成可交互的演示组件"]}),`
`]}),`
`,n.jsx(o.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"为新开发的工具函数创建 Storybook story"}),`
`,n.jsx(o.li,{children:"编写工具函数的演示代码"}),`
`,n.jsx(o.li,{children:"生成工具函数的文档页面"}),`
`]})]})}function p(e={}){const{wrapper:o}={...a(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{p as default};
