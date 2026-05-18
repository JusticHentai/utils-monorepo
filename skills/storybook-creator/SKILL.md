---
name: storybook-creator
description: 为工具函数创建 Storybook 演示和文档时使用。当用户需要为 packages 下的工具创建新的 Storybook story、编写演示代码或生成工具文档时，应触发此技能。
---

# Storybook Creator

## 概览

为 `packages/{packageName}/src/{toolName}` 下的工具函数创建完整的 Storybook 演示和文档。

工具分为两大类，创建模式不同：
- **普通工具**（纯函数、DOM 操作类）：demo 文件为 `.ts`，通过按钮点击调用
- **React Hook 工具**（`use*` 开头）：demo 文件为 `.tsx`，以自定义 hook 形式封装，在组件中直接使用

## 开始前检查

在创建或改造 `stories/{packageName}/{toolName}` 前：

- 如果存在 `packages/{packageName}/AGENTS.md`，先遵循其中对 Storybook 的包级规则。
- 如果存在 `packages/{packageName}/docs/tool-index/README.md`，读总览并按需打开相关分类索引，确认文档中提到的依赖工具和模块边界准确。
- Storybook 文档要服务开发者理解源码，不只介绍用法。默认拆成两层：`介绍.mdx` 讲使用、协议、数据流和场景；`源码.mdx` 用短代码块引用源码片段，并在每段代码后按实现顺序解释状态、分支、副作用和返回路径。
- 新增或调整 demo 后，`介绍.mdx` 的 “Storybook 文件说明” 要逐个说明当前目录下每个 story/demo 文件的职责。

## 目录结构

源码目录：`packages/{packageName}/src/{toolName}/**`
Storybook 目录：`stories/{packageName}/{toolName}/**`

### 普通工具文件结构

```bash
stories/{packageName}/
  |--- {toolName}/
      |--- 介绍.mdx           # 文档说明
      |--- 源码.mdx           # 源码引用和实现导读
      |--- index.stories.ts   # Storybook 配置
      |--- index.tsx          # 演示组件入口
      |--- xxxDemo.ts         # Demo 文件1
      |--- yyyDemo.ts         # Demo 文件2
```

### React Hook 工具文件结构

```bash
stories/{packageName}/
  |--- {hookName}/
      |--- 介绍.mdx             # 文档说明
      |--- 源码.mdx             # 源码引用和实现导读
      |--- index.stories.ts     # Storybook 配置
      |--- index.tsx            # 演示组件入口（组合所有 demo hook）
      |--- basicDemo.tsx        # Demo 文件1（自定义 hook）
      |--- advancedDemo.tsx     # Demo 文件2（自定义 hook）
```

**关键区别**：Hook demo 文件使用 `.tsx` 扩展名，因为它们是自定义 hook，需要在 React 组件上下文中运行。

## 创建步骤

### 1. 创建 index.stories.ts

```ts
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
```

---

## 普通工具模式

### 2. 创建 index.tsx

**关键规则**: 
- `index.tsx` 负责按钮点击调用 demo
- **禁止在 demo 中使用 `position: fixed` 创建元素**，会遮挡按钮
- 需要可视化元素时，在 `index.tsx` 中使用 React 状态管理渲染
- 有 demo 间通用变量时（如清理函数、共享状态），在 `index.tsx` 中定义和管理


#### 无可视化元素示例

```tsx
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
```

#### 有可视化元素示例

**关键规则**: 
- `index.tsx` 只负责渲染按钮和演示区域，保持尽量没有逻辑
- 所有业务逻辑（初始化、清理、回调处理）都放在 demo 文件中
- demo 通过 `document.getElementById` 获取 DOM 元素
- 通用变量（如清理函数）在 `index.tsx` 中定义，通过闭包传递给 demo

**index.tsx（仅渲染，传递通用变量）**：

```tsx
import '../../.css/index.css'
import { createInitDemo } from './initDemo'
import { createCleanupDemo } from './cleanupDemo'

// 通用变量在 index.tsx 中定义
let stopFn: (() => void) | null = null

// 通过 getter/setter 传递变量，避免工厂函数闭包捕获初始值
const initDemo = createInitDemo(
  () => stopFn,
  (fn) => { stopFn = fn }
)
const cleanupDemo = createCleanupDemo(
  () => stopFn,
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
```

**initDemo.ts（初始化逻辑）**：

```ts
import { action } from 'storybook/actions'
import toolName from '../../../packages/{packageName}/src/{toolName}'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStopFn = getStopFn()
    if (prevStopFn) prevStopFn()
    const container = document.getElementById('container') as HTMLElement

    const stopFn = toolName(container, (result) => {
      action('回调触发')(result)
    })

    setStopFn(stopFn)
    action('初始化成功')('描述信息')
  }
}
```

**cleanupDemo.ts（清理逻辑）**：

```ts
import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
    } 

    action('清理完成')()
  }
}
```

#### 多个演示元素示例

```tsx
{/* 演示区域 - 多个元素使用 flex 布局，通过 id 区分 */}
<div className="area flex">
  <div id="basic" className="card">
    基础示例
  </div>
  <div id="advanced" className="card">
    高级示例
  </div>
</div>
```

### 3. 创建 Demo 文件

**关键规则**: 
- demo 文件使用 `.ts` 扩展名
- 使用 `action` 输出结果
- 每个 demo 文件对应工具的一个功能, 禁止合并多个功能到一个 demo 文件中
- 禁止使用 `position: fixed` 或 `document.body.appendChild` 创建遮挡元素

#### 纯函数 demo（推荐）

```ts
import { action } from 'storybook/actions'
import toolName from '../../../packages/{packageName}/src/{toolName}'

const xxxDemo = () => {
  const result = toolName(/* 参数 */)

  action('输出标题')(result)
}

export default xxxDemo
```

#### 需要操作 DOM 元素的 demo

当 demo 需要操作 DOM 元素时，元素应在 `index.tsx` 中创建，demo 通过 document.getElementById 获取：

```ts
import { action } from 'storybook/actions'

const xxxDemo = () => {
  const container = document.getElementById('element') as HTMLElement

  container.style.background = '#f00'
  action('操作成功')('描述信息')
}

export default xxxDemo
```

类型工具 Demo 示例：

```ts
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
```

---

## React Hook 工具模式

当工具是 React Hook（`use*` 开头）时，使用以下模式。Hook 需要在 React 组件上下文中运行，因此 demo 模式和普通工具不同。

### 2. 创建 index.tsx

**关键规则**:
- `index.tsx` 是主演示组件，负责组合所有 demo hook 并渲染 UI
- 从各 demo 文件导入自定义 hook，获取操作方法和状态
- 使用 `className="button"` 渲染操作按钮
- 使用 React 状态渲染可视化反馈区域

#### 简单 Hook 示例（单 demo，逻辑直接写在 index.tsx）

当 Hook 功能单一、demo 只有一个时，可以直接在 `index.tsx` 中编写逻辑，无需拆分 demo 文件：

```tsx
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
```

#### 复杂 Hook 示例（多 demo，拆分 demo 文件）

当 Hook 有多个功能点需要分别演示时，每个功能拆分为一个 demo hook 文件：

```tsx
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
```

#### 带状态展示的 Hook 示例

当 Hook 返回状态需要可视化展示时：

```tsx
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
```

### 3. 创建 Demo 文件（Hook 模式）

**关键规则**:
- demo 文件使用 `.tsx` 扩展名（因为是自定义 hook，需 React 上下文）
- 每个 demo 文件导出一个自定义 hook 函数（`useXxxDemo`）
- hook 内部调用目标工具 hook，返回操作方法供 `index.tsx` 使用
- 使用 `action` 输出结果
- 每个 demo 文件对应工具的一个功能，禁止合并多个功能

```tsx
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
```

---

### 4. 创建 介绍.mdx 文档

#### 普通工具 mdx

```mdx
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
```

#### React Hook 工具 mdx

**关键区别**：
- Hook 如果只有 index.tsx 没有独立 demo 文件，直接用 `./index.tsx?raw` 引入源码
- Hook 有独立 demo 文件时，用 `./xxxDemo.tsx?raw` 引入（注意 `.tsx` 扩展名）

```mdx
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
```

## 代码展示规范

**关键规则**: demo 和介绍页优先使用 `?raw` 引用完整 demo 源码，代码展示自动更新：

```mdx
import xxxDemo from './xxxDemo?raw'
import { CodeOrSourceMdx } from '@storybook/addon-docs/blocks'

<CodeOrSourceMdx language="typescript">
  {xxxDemo}
</CodeOrSourceMdx>
```

`源码.mdx` 是实现导读页，不要把一个完整源码文件直接展示出来再写一堆总览。主体必须使用“小代码块 + 紧邻解释”的形式：

- 每个代码块只放一个逻辑片段，通常 5-20 行；超过 30 行时继续拆。
- 代码块前标明源码位置，例如 `源码位置：packages/foo/src/bar.ts`。
- 代码块后立刻解释这段代码的读写状态、条件分支、副作用、返回值或不变量。
- 可以在页面末尾放完整 `?raw` 源码作为附录，但不能作为主体导读。

### 源码导读关键节点

`源码.mdx` 的每个核心片段必须按开发者调试源码时真正关心的问题解释。不要只写“这里做清洗”“这里做过滤”“这里做兜底”这类抽象词；如果使用术语，必须在紧邻解释里定义它。

每个关键代码块后优先回答这些节点：

1. **阶段名称**：这段处在什么阶段，名称要具体。例如写“入队前 maxAge 过滤与字段清洗”，不要写“早期拒绝和清洗”。
2. **术语定义**：解释标题里的术语。比如“字段清洗”具体指截断 `message/stack/outerHTML`、脱敏 URL query、为空值兜底；“拒绝”具体指返回 `false` 且不写状态。
3. **输入和来源**：这段读取了哪些入参、class 字段、闭包变量、全局对象或 helper 返回值。
4. **状态读写**：明确哪些状态会写、哪些不会写。例如 `queue/keys/bytes/dropped` 是否变化。
5. **数据变化**：说明数据从什么形状变成什么形状，例如原始事件变成脱敏后的事件、重复事件变成已有事件的 `count/lastSeen` 更新。
6. **返回语义**：解释 `true/false/null/[]/success` 等返回值代表业务上的什么结果，不要只复述代码。
7. **边界分支**：说明超时、空值、重复、超限、能力不存在、异常、取消发送等分支怎么走。
8. **设计原因**：解释为什么这样处理，例如为什么先读 stats 再 take、为什么 bytes 整体重算、为什么 beacon 失败后 keepalive fetch。

如果一个片段涉及对象组装，先说明局部变量如何算出，再说明对象字段结构；不要把多行 helper 调用塞在对象字段里再让文档解释一大坨表达式。

### 源码.mdx 自检清单

提交 `源码.mdx` 前按下面清单自检，任一项不满足就继续拆分或改写：

- 标题能定位到具体阶段、函数或分支，不使用只有抽象含义的“概览/清洗/过滤/兜底”。
- 每个代码块后 1-3 段内解释完对应代码，不把解释集中放在大代码块后面。
- 每个核心函数至少说清输入来源、状态读写、关键分支、返回语义和失败/空值行为。
- 遇到 class 字段、闭包变量、Map/Set/数组、DOM/global、监听器、网络请求时，明确是否读写或触发副作用。
- 布尔值、`null`、空数组、`success` 等返回结果必须解释业务含义。
- 涉及队列、缓存、去重、容量裁剪、重试、降级时，必须写出内部不变量。
- 如果文档读完仍需要打开源码才能理解实现顺序，说明解释粒度不够，需要继续按源码执行顺序拆。

## 开发者文档深度规范

Storybook 文档的目标读者默认是开发者，不只是最终使用者。默认使用两层文档：

- `介绍.mdx`：讲工具用途、调用协议、参数、返回值、主要数据流、demo 和 Storybook 文件职责。
- `源码.mdx`：讲源码实现。必须引用真实源码，并按代码顺序解释状态、分支、副作用、返回路径和不变量。

复杂工具不要把所有源码级解释塞进 `介绍.mdx`；源码导读放到 `源码.mdx`，避免介绍页变成又长又散的总览。

### 禁止概览填充

文档不能用大量“概览、简介、优势、适用场景”替代源码逻辑说明。除开头一句话外，每个主要章节都必须回答真实代码问题：

- 这个函数创建或持有哪些状态？
- 每个状态在哪里被读、在哪里被写？
- 入口参数先经过哪些转换、校验、过滤？
- 有哪些分支条件，每个分支返回什么？
- 哪些步骤会改变 class 字段、闭包变量、DOM、全局对象、计时器、监听器或网络请求？
- 失败、空值、重复调用、超限时的行为是什么？

如果一段文字不能指向具体变量、函数、分支或副作用，通常应删除或改写。

### 必须包含的开发者视角内容

每个工具的 `介绍.mdx` 至少包含以下信息：

1. **模块边界**：说明当前工具和相邻工具/模块的职责分界，哪些事情由当前工具做，哪些事情交给依赖或调用方。
2. **数据结构**：列出核心 class 字段、闭包变量、数组、Map、Set、队列、状态对象、返回对象、配置对象等数据结构，并说明它们的读写时机。
3. **数据流**：说明输入如何被转换、校验、传递、输出；复杂流程优先使用 mermaid `flowchart`。
4. **执行流程**：按真实代码执行顺序解释关键步骤，避免只写抽象概念。
5. **函数/模块职责**：每个源码文件、核心函数、demo 文件分别干什么，为什么要这样拆。
6. **关键实现取舍**：解释为什么使用某个 API、算法或降级策略，例如 `TextEncoder`、`Map` 去重、队列裁剪、class 私有状态、copy-only script 等。
7. **边界行为**：说明空值、异常、老环境降级、重复调用、清理逻辑、失败兜底等情况。
8. **复杂度和限制**：对涉及遍历、缓存、队列、递归、编码、DOM 监听的工具，说明时间/空间复杂度和不适用场景。

每个工具的 `源码.mdx` 至少包含以下信息：

1. **片段引用**：按执行顺序引用真实源码片段，每段代码块前标源码位置，代码块后紧跟解释；不要用一整块源码替代导读。
2. **阅读顺序**：列出建议先读哪些文件、再读哪些文件，说明原因。
3. **逐段导读**：按源码顺序解释 import、默认配置、状态变量、内部函数、导出 API。
4. **状态读写**：说明闭包变量、类字段、Map/Set/数组、计时器、监听器等状态在哪里读写。
5. **分支和副作用**：列出提前返回、异常兜底、容量裁剪、网络发送、DOM/global 读写等行为。
6. **术语解释**：对容易误解的变量名给出定义，例如 `dropped` 表示“因容量限制被丢弃的旧事件数”。

### 核心函数逻辑拆解规则

对每个核心函数，不能只写“一句话职责”。必须至少写清下面内容，优先用 HTML table：

1. **状态表**：列出函数创建或依赖的关键变量，例如 `queue`、`keys`、`bytes`、`dropped`、`timer`、`observer`、`cleanup`。每个变量要说明类型、初始值、写入位置、读取位置、保持的不变量。
2. **执行步骤表**：按源码顺序列出步骤，包含条件判断、调用的 helper、读写的状态、返回值或副作用。
3. **分支表**：列出提前返回、异常兜底、重复数据、空数据、超限、能力不存在等分支。
4. **状态变化表**：对会修改 class 字段或闭包状态的函数，写明每次调用前后哪些字段可能变化。
5. **不变量**：写清工具依赖的内部一致性，例如 `queue` 和 `keys` 必须同步、`bytes` 必须在队列变化后重算、`stop` 必须幂等。

示例要求：介绍 `EarlyErrorQueue` 这类有实例状态的工具时，不能只写“创建队列并提供 push/take/peek/clear”。必须说明：

- class 的私有字段在哪里创建，例如 `queue: EarlyErrorEvent[]`、`keys: Map<string, EarlyErrorEvent>`、`bytes`、`dropped`、`installedAt`、运行时配置。
- `queue` 保存哪些事件，何时 push/shift/清空。
- `keys` 如何配合 `getErrorKey` 去重，何时 set/delete/clear。
- `bytes` 何时通过 `estimateBytes(queue)` 重算，为什么不在每次字段变化时手动累加。
- `dropped` 只在容量裁剪丢弃旧事件时增加，`beforeEnqueue` 返回 false 不计入 dropped。
- `push` 的真实顺序：maxAge 检查 → sanitizeEvent → beforeEnqueue → getErrorKey → 命中已有事件则累加 → 新事件入队 → trimQueue。
- `take` 为什么要 slice 后清空，以及它和 `peek` 的语义差异。
- 如果工具对外是 class，不要在文档中把实例状态描述为 `core` 闭包工厂；`core` 片段应按纯逻辑 helper 或明确的 effect 边界解释。

### 推荐章节结构

普通工具文档建议按以下结构组织：

```mdx
# toolName

一句话说明工具解决的问题。

## 开发者视角

工具在工程里扮演什么角色，输入/输出契约是什么，通常被谁调用。

## 模块边界

使用 HTML table 说明当前工具、依赖工具、调用方之间的职责分界。

## 数据结构

使用 HTML table 说明核心数据结构、类型、来源、读写方式和设计原因。

## 核心函数逻辑

按函数逐个说明状态、执行步骤、分支、状态变化和不变量。不要写成概览。

## 数据流

复杂流程使用 mermaid flowchart；简单流程可用有序列表。数据流必须连接到具体函数调用和状态变化。

## 用例

每个 demo 只演示一个能力，并用 `?raw` 展示源码。

## 参数介绍

使用 HTML table 说明入参和配置。

## 返回值

使用 HTML table 说明返回结构。

## 函数级导读

使用 HTML table 逐个解释核心函数的职责、调用关系、读写状态和返回路径。

## 逐行实现拆解

对关键代码片段做开发者导读，解释每段代码在流程中的作用。

## Storybook 文件说明

逐个说明 `index.stories.ts`、`index.tsx`、demo 文件、`介绍.mdx` 的职责。

## 实现取舍

说明关键 API/算法/降级策略、复杂度、限制和不适用场景。
```

`源码.mdx` 建议按以下结构组织：

```mdx
# toolName 源码

## 阅读顺序

说明先读哪个文件、每个文件解决什么问题。

## packages/{packageName}/src/{toolName}/index.ts

### 1. 创建状态

```ts
const state = ...
```

这段代码解释：
- 读了哪些入参或默认值
- 创建了哪些状态
- 后续哪些函数会写这些状态

### 2. 写入分支

```ts
if (...) return ...
```

这段代码解释：
- 分支条件是什么
- 命中分支时返回什么
- 是否会产生副作用

## 术语和不变量

解释变量命名、状态一致性和容易误解的行为。

## 完整源码附录（可选）

复杂文件可以在最后用 `?raw` + `CodeOrSourceMdx` 放完整源码，方便复制对照；附录不能替代上面的片段导读。
```

### 文档写法要求

- 不要只写营销式描述，例如“简单易用”“功能强大”。必须落到数据结构、数据流和代码执行顺序。
- 不要把逐行解释塞进源码注释；源码注释只解释不明显的设计原因，教学型解释放在 Storybook。
- `源码.mdx` 的主体必须是短代码块引用和紧邻解释；禁止“先贴完整文件源码，再在下面写大段概览”。大段源码会让读者找不到解释对应的具体语句。
- `源码.mdx` 不要求机械解释每一行 import/export，但每个有实现含义的语句块都要解释；尤其是状态创建、状态写入、条件分支、循环、回调、清理和返回值。
- 表格使用 HTML table，不使用 Markdown 表格。
- 对 copy-only script，必须额外说明它为什么不能 import、全局协议是什么、安装/清理流程是什么、真实片段为什么不在 Storybook 中直接执行。
- 对有共享状态的工具，必须说明状态创建位置、更新位置、清理位置，以及重复调用时的行为。

## Copy-only 脚本工具的 Storybook 规则

当工具目录中存在 `script.tsx`、`snippet.tsx` 等只用于复制到业务代码中的脚本片段时：

- 不要在 Storybook 中直接执行会安装全局监听、劫持原生 API 或污染 `window` 的真实片段，优先用 demo 文件模拟其公开协议。
- `介绍.mdx` 可以使用 `?raw` 展示 copy-only 文件源码，例如 `import scriptSource from '../../../packages/{packageName}/src/{toolName}/script.tsx?raw'`。
- 演示“接管”流程时，demo 应构造最小 mock 全局对象，再调用正式可 import 的 TypeScript API。
- 文档中明确写出该脚本“直接复制使用，不作为模块 import”。

## 表格规范

**关键规则**: 表格必须使用 HTML 格式，不使用 Markdown 表格语法：

```html
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
```

## 演示区域样式

### 禁止的样式模式

**关键规则**: 以下样式会导致元素遮挡按钮，**禁止使用**：

```ts
// ❌ 禁止：position: fixed 会遮挡按钮
container.style.cssText = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`
document.body.appendChild(container)
```

### 推荐的样式模式

**关键规则**: 
- 使用 `stories/.css/index.css` 中预定义的 class
- 将可视化元素放在按钮下方，使用 id 供 demo 获取

```tsx
// ✅ 推荐：使用预定义 class
<div className="area">
  <div id="container" className="card">
    目标元素
  </div>
</div>
```

### 可用的 CSS class

| Class | 说明 |
|-------|------|
| `area` | 演示区域容器，自带 margin-top: 40px |
| `card` | 基础卡片样式，渐变背景、圆角、居中文字 |
| `scroll-container` | 带滚动的容器，300x300，灰色背景 |
| `resizable` | 可调整大小的元素，支持拖拽调整 |
| `flex` | 多元素 flex 布局，自动换行 |

### 使用示例

```tsx
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
```
