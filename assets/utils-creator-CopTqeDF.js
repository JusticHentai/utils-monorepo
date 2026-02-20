import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`---
name: utils-creator
description: 在 packages 下创建或修改工具函数时使用。当用户需要新增工具函数、修改现有工具或重构工具模块时，应触发此技能。
---

# 工具函数开发规范

## 概览

在 \`packages\` 下开发工具函数的指导规范，确保工具库的一致性和可维护性。

**适用场景**：
- 新增工具函数
- 修改现有工具函数
- 重构工具模块

**不适用场景**：
- 编写 Storybook 文档（使用 storybook-creator skill）
- 配置构建工具

## 目录结构

每个工具函数应遵循以下目录结构：

\`\`\`
packages/{packageName}/src/
├── {toolName}/                  # 工具目录（使用 camelCase 命名）
│   ├── index.ts                 # 主入口文件，导出工具函数
│   ├── interface.ts             # 类型定义文件（如有复杂类型）
│   ├── utils/                   # 辅助工具函数（非核心逻辑）
│   │   ├── {util1}.ts
│   │   └── {util2}.ts
│   └── core/                    # 核心实现（如需拆分复杂逻辑）
│       ├── {helper1}.ts
│       └── {helper2}.ts
└── index.ts                     # 包入口，统一导出所有工具
\`\`\`

## 创建步骤

### 1. 创建主入口 index.ts

使用 \`export default\` 导出主函数：

\`\`\`typescript
// packages/{packageName}/src/{toolName}/index.ts

/**
 * {功能描述}
 * @param options - {参数说明}
 * @returns {返回值说明}
 */
const {toolName} = (options: {ToolName}Options): {ReturnType} => {
  // 实现
}

export default {toolName}
\`\`\`

### 2. 创建类型定义 interface.ts

复杂类型应抽离到 \`interface.ts\`：

\`\`\`typescript
// packages/{packageName}/src/{toolName}/interface.ts

/** {常量说明} */
export const {CONSTANT_NAME} = {constantValue}

/** {枚举说明} */
export enum {EnumName} {
  /** {枚举值1说明} */
  {EnumValue1} = '{enumValue1}',
  /** {枚举值2说明} */
  {EnumValue2} = '{enumValue2}',
}

/** 配置选项 */
export interface {ToolName}Options {
  /** {param1说明} */
  {param1}: {Type1}
  /** {param2说明}（可选），默认值：{defaultValue} */
  {param2}?: {Type2}
  /** {param3说明}，使用枚举类型 */
  {param3}?: {EnumName}
}

/** 返回值类型 */
export interface {ToolName}Result {
  /** {字段说明} */
  {field1}: {FieldType}
}
\`\`\`

**默认值处理**：
\`\`\`typescript
const {toolName} = (options: {ToolName}Options): {ReturnType} => {
  const { {param1}, {param2} = {DEFAULT_VALUE} } = options
  // 实现
}
\`\`\`

### 3. 添加包入口导出

在包的 \`src/index.ts\` 中统一导出：

\`\`\`typescript
// packages/{packageName}/src/index.ts

// 导出函数
export { default as {toolName} } from './{toolName}'

// 导出类型（使用 export type）
export type { {ToolName}Options } from './{toolName}/interface'
\`\`\`

### 4. 配置 package.json exports

在 \`package.json\` 的 \`exports\` 字段中添加子路径导出：

\`\`\`json
{
  "exports": {
    "./{toolName}": {
      "types": "./dist/{toolName}/index.d.ts",
      "import": "./dist/{toolName}/index.js"
    }
  }
}
\`\`\`

## 示例

### 简单工具函数

无需配置参数的简单函数：

\`\`\`typescript
// packages/{packageName}/src/{toolName}/index.ts

/**
 * {功能描述}
 * @param {paramName} - {参数说明}
 */
const {toolName} = ({paramName}: {ParamType}): {ReturnType} => {
  // 实现
}

export default {toolName}
\`\`\`

### 带配置的工具函数

需要多个参数的函数，使用配置对象：

\`\`\`typescript
// packages/{packageName}/src/{toolName}/interface.ts
export interface {ToolName}Options {
  /** {param1说明} */
  {param1}: {Type1}
  /** {param2说明} */
  {param2}: {Type2}
}

// packages/{packageName}/src/{toolName}/index.ts
import { {ToolName}Options } from './interface'

/**
 * {功能描述}
 */
const {toolName} = ({ {param1}, {param2} }: {ToolName}Options): {ReturnType} => {
  // 实现
}

export default {toolName}
\`\`\`

### 复杂工具（Class）

需要维护状态的复杂工具：

\`\`\`typescript
// packages/{packageName}/src/{toolName}/index.ts
import { {ToolName}Options } from './interface'

/**
 * {类描述}
 *
 * 功能特性：
 * - {特性1}
 * - {特性2}
 */
export default class {ToolName} {
  constructor(options: {ToolName}Options = {}) {
    // 初始化
  }

  /**
   * {方法描述}
   * @param options - {参数说明}
   */
  {methodName} = (options: {MethodOptions}) => {
    // 实现
  }
}
\`\`\`

## 最佳实践

1. **单一职责**：每个工具函数只做一件事
2. **参数对象化**：超过 2 个参数时使用配置对象
3. **类型安全**：充分利用 TypeScript 类型系统
4. **避免副作用**：纯函数优先，有副作用需在注释中说明
5. **边界处理**：考虑边界情况和异常输入
6. **JSDoc 注释**：函数必须有注释说明功能、参数和返回值
7. **接口注释**：接口属性必须有注释说明用途
8. **行内注释**：复杂逻辑应添加注释解释原因
9. **内部复用**：优先从 \`@packages\` 下已有工具中引用，避免重复实现
10. **错误处理**：错误应返回错误对象，禁止直接抛出未处理的异常
11. **减少嵌套**：使用早返回（Early Return）模式减少代码嵌套层级
12. **泛型处理**：通用类型使用泛型，特定类型在工具内部处理，避免调用方断言

## 泛型类型处理规范

TypeScript 类型应在工具内部处理好，**确保调用方无需手动断言**。

### 1. 通用工具使用泛型

当工具支持多种类型时，使用泛型让调用方指定具体类型：

\`\`\`typescript
// ✅ 推荐：通用工具支持泛型
export type Callback<T = unknown> = (data: T) => void

const createObserver = <T = unknown>(
  callback: Callback<T>
): Observer => {
  // 内部处理类型转换
  const handler = (data: unknown) => {
    callback(data as T)
  }
  // ...
}

// 调用方指定具体类型，无需断言
createObserver<LargestContentfulPaint>((entry) => {
  console.log(entry.element) // 类型正确，无需断言
})
\`\`\`

### 2. 特定工具内部处理类型

当工具返回特定类型时，在工具内部处理好泛型，调用方无需关心：

\`\`\`typescript
// ✅ 推荐：特定工具内部处理泛型
const onLCP = (callback: (entry: LargestContentfulPaint) => void) => {
  // 内部指定泛型类型
  return createObserver<LargestContentfulPaint>('lcp', callback)
}

// 调用方直接使用，类型自动推断
onLCP((entry) => {
  console.log(entry.element) // 类型正确
})
\`\`\`

### 3. 禁止调用方断言

调用方不应手动断言类型，这表明工具类型设计有问题：

\`\`\`typescript
// ❌ 避免：调用方需要断言
const onLCP = (callback: (entry: PerformanceEntry) => void) => {
  return createObserver('lcp', callback)
}

onLCP((entry) => {
  // 调用方被迫断言，说明工具类型设计不合理
  console.log((entry as LargestContentfulPaint).element)
})

// ✅ 推荐：工具内部处理好类型
const onLCP = (callback: (entry: LargestContentfulPaint) => void) => {
  return createObserver<LargestContentfulPaint>('lcp', callback)
}

onLCP((entry) => {
  console.log(entry.element) // 直接使用，无需断言
})
\`\`\`

### 4. 优先使用官方类型

浏览器 API 相关类型优先使用 TypeScript 内置的官方类型：

\`\`\`typescript
// ❌ 避免：自定义重复类型
interface LCPEntry extends PerformanceEntry {
  element?: Element
  size?: number
}

// ✅ 推荐：使用官方类型
// LargestContentfulPaint 已在 lib.dom.d.ts 中定义
type OnLCPCallback = (entry: LargestContentfulPaint) => void
\`\`\`

## 减少嵌套规范

深层嵌套会降低代码可读性，应通过以下方式减少嵌套：

### 1. 早返回模式（Early Return）

使用 \`return\` / \`continue\` / \`break\` 提前退出，避免深层嵌套：

\`\`\`typescript
// ❌ 避免：深层嵌套
const processData = (data: Data | null) => {
  if (data) {
    if (data.items) {
      if (data.items.length > 0) {
        // 处理逻辑...
      }
    }
  }
}

// ✅ 推荐：早返回
const processData = (data: Data | null) => {
  if (!data) return
  if (!data.items) return
  if (data.items.length === 0) return

  // 处理逻辑...
}
\`\`\`

### 2. 循环中使用 continue/break

\`\`\`typescript
// ❌ 避免
for (const item of items) {
  if (item.isValid) {
    if (item.shouldProcess) {
      // 处理逻辑...
    }
  }
}

// ✅ 推荐
for (const item of items) {
  if (!item.isValid) continue
  if (!item.shouldProcess) continue

  // 处理逻辑...
}
\`\`\`

### 3. 提取子函数减少嵌套

将深层嵌套的逻辑封装为独立函数：

\`\`\`typescript
// ❌ 避免：嵌套过深
const handleResponse = (response: Response) => {
  if (response.ok) {
    const data = response.data
    if (data.users) {
      data.users.forEach(user => {
        if (user.active) {
          // 复杂处理逻辑...
        }
      })
    }
  }
}

// ✅ 推荐：提取子函数
const processActiveUser = (user: User) => {
  if (!user.active) return
  // 复杂处理逻辑...
}

const handleResponse = (response: Response) => {
  if (!response.ok) return
  if (!response.data.users) return

  response.data.users.forEach(processActiveUser)
}
\`\`\`

### 4. 复杂条件提取为变量

当 \`if\` 条件包含复杂表达式时，应提取为语义化变量，提高可读性：

\`\`\`typescript
// ❌ 避免：条件嵌套在 if 中
const handler = (event: Event) => {
  const targets = Array.isArray(target) ? target : [target]

  if (
    targets.some((item) => {
      const targetElement = getTargetElement(item)
      return !targetElement || targetElement.contains(event.target as Node)
    })
  ) {
    return
  }

  onClickAway(event)
}

// ✅ 推荐：提取为语义化变量
const handler = (event: Event) => {
  const targets = Array.isArray(target) ? target : [target]

  const isInsideTarget = targets.some((item) => {
    const targetElement = getTargetElement(item)
    return !targetElement || targetElement.contains(event.target as Node)
  })

  if (isInsideTarget) return

  onClickAway(event)
}
\`\`\`

### 5. 嵌套层级限制

- 函数内嵌套层级不宜超过 **3 层**
- 超过 3 层时应考虑提取子函数或重构逻辑

## 内部依赖引用规范

当工具函数需要使用已存在于 \`@packages\` 下的功能时，**必须**直接引用，禁止重复实现。

**引用方式（按优先级排序）**：

\`\`\`typescript
// ✅ 推荐：子路径引入（支持 tree-shaking）
import debounce from '@justichentai/js-utils/debounce'
import throttle from '@justichentai/js-utils/throttle'

// ✅ 可用：具名导入（支持 tree-shaking）
import { debounce, throttle } from '@justichentai/js-utils'

// ❌ 避免：导入整个包后解构（不利于 tree-shaking）
import * as jsUtils from '@justichentai/js-utils'
const { debounce } = jsUtils
\`\`\`

## 枚举使用规范

当代码中需要使用固定的字符串值集合时，**必须**使用枚举（enum），禁止直接使用字符串字面量。

### 1. 定义枚举

枚举应定义在 \`interface.ts\` 中，枚举名使用 \`UPPER_SNAKE_CASE\` 常量格式，key 使用大写，并添加完整的 JSDoc 注释。

**优先使用默认数值**：当枚举值不需要对外暴露具体含义（如序列化、接口传输）时，直接使用默认数值，不需要用字符串映射：

\`\`\`typescript
// ✅ 推荐：默认数值枚举（仅用于内部类型区分）
/** 错误类型 */
export enum ERROR_TYPE {
  /** JavaScript 运行时错误 */
  JS,
  /** 资源加载错误 */
  RESOURCE,
  /** Promise 未处理拒绝错误 */
  PROMISE,
  /** console.error 调用 */
  CONSOLE,
}
\`\`\`

**需要字符串映射的场景**：当枚举值需要用于日志输出、接口传输、JSON 序列化等外部可见场景时，使用字符串映射：

\`\`\`typescript
// ✅ 推荐：字符串枚举（值需要对外暴露）
/** Web Vitals 指标名称 */
export enum METRIC_NAME {
  /** LCP (Largest Contentful Paint) 最大内容绘制 */
  LCP = 'LCP',
  /** FID (First Input Delay) 首次输入延迟 */
  FID = 'FID',
  /** CLS (Cumulative Layout Shift) 累积布局偏移 */
  CLS = 'CLS',
}

/** 指标评级 */
export enum METRIC_RATING {
  /** 性能良好 */
  GOOD = 'good',
  /** 需要改进 */
  NEEDS_IMPROVEMENT = 'needs-improvement',
  /** 性能较差 */
  POOR = 'poor',
}
\`\`\`

### 2. 使用枚举替代字符串

\`\`\`typescript
// ❌ 避免：直接使用字符串字面量
callback({ name: 'LCP', value, entry })
callback({ name: 'FID', value, entry })
callback({ name: 'CLS', value, entry })

// ✅ 推荐：使用枚举
import { METRIC_NAME } from './interface'

callback({ name: METRIC_NAME.LCP, value, entry })
callback({ name: METRIC_NAME.FID, value, entry })
callback({ name: METRIC_NAME.CLS, value, entry })
\`\`\`

### 3. 复用已有枚举

当其他模块已定义相关枚举时，应直接引用，避免重复定义：

\`\`\`typescript
// ❌ 避免：重复定义枚举
enum METRIC_NAME {
  LCP = 'LCP',
  // ...
}

// ✅ 推荐：引用已有枚举
import { METRIC_NAME } from '../getMetricRating/interface'
\`\`\`

### 4. 枚举的优势

- **类型安全**：编译时检查，避免拼写错误
- **自动补全**：IDE 支持智能提示
- **易于重构**：修改枚举值会自动更新所有引用
- **代码可读性**：语义化命名比字符串更清晰

## React Hooks 开发规范

开发 React Hooks 时需遵循 React Compiler 的规则，确保 Hooks 能被正确优化。

### 1. 禁止在渲染阶段更新 Ref

Ref 的 \`current\` 属性只能在 \`useEffect\` 或事件处理函数中更新，不能在渲染阶段直接赋值：

\`\`\`typescript
// ❌ 错误：渲染阶段更新 ref
const useLatest = <T>(value: T) => {
  const ref = useRef(value)
  ref.current = value  // 违反 React Compiler 规则
  return ref
}

// ✅ 正确：在 useEffect 中更新 ref
const useLatest = <T>(value: T) => {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  })
  return ref
}
\`\`\`

### 2. useMemo 依赖必须完整

\`useMemo\` 和 \`useCallback\` 的依赖数组必须包含所有在回调中使用的响应式值：

\`\`\`typescript
// ❌ 错误：依赖数组不完整
const actions = useMemo(() => {
  const toggle = () => setState(s => s === defaultValue ? reverseValue : defaultValue)
  return { toggle }
}, [])  // 缺少 defaultValue 和 reverseValue

// ✅ 正确：声明完整依赖
const toggle = useMemo(
  () => () => setState(s => s === defaultValue ? reverseValue : defaultValue),
  [defaultValue, reverseValue]
)
\`\`\`

### 3. 事件监听使用 createEventListener

添加/移除事件监听时，使用 \`createEventListener\` 工具函数，避免手动管理：

\`\`\`typescript
// ❌ 避免：手动管理事件监听
useEffect(() => {
  document.addEventListener('click', handler)
  return () => {
    document.removeEventListener('click', handler)
  }
}, [])

// ✅ 推荐：使用 createEventListener
import createEventListener from '../createEventListener'

useEffect(() => {
  const cleanup = createEventListener(document, 'click', handler)
  return cleanup
}, [])

// ✅ 推荐：多个事件监听
useEffect(() => {
  const cleanups = eventNames.map(event =>
    createEventListener(document, event, handler)
  )
  return () => cleanups.forEach(cleanup => cleanup())
}, [])
\`\`\`

### 4. 使用 useLatest 保持回调最新引用

避免闭包陷阱，使用 \`useLatest\` 获取最新的回调或值：

\`\`\`typescript
// ❌ 避免：闭包陷阱
const useClickAway = (onClickAway: () => void, target: Element) => {
  useEffect(() => {
    const handler = () => onClickAway()  // 可能获取到旧的 onClickAway
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])  // 依赖数组为空，onClickAway 不会更新
}

// ✅ 推荐：使用 useLatest
import useLatest from '../useLatest'

const useClickAway = (onClickAway: () => void, target: Element) => {
  const onClickAwayRef = useLatest(onClickAway)

  useEffect(() => {
    const handler = () => onClickAwayRef.current()  // 始终获取最新的回调
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [onClickAwayRef])
}
\`\`\`

### 5. Hooks 检查清单

开发 React Hooks 时，额外确保：

- [ ] Ref 更新放在 \`useEffect\` 中，不在渲染阶段直接赋值
- [ ] \`useMemo\` / \`useCallback\` 依赖数组完整
- [ ] 事件监听使用 \`createEventListener\` 工具函数
- [ ] 回调函数使用 \`useLatest\` 避免闭包问题
- [ ] 遵循 React Compiler 的 ESLint 规则

## 检查清单

新增工具函数时，确保完成以下步骤：

- [ ] 创建工具目录 \`src/{toolName}/\`
- [ ] 编写主入口 \`index.ts\`
- [ ] 抽离类型定义到 \`interface.ts\`（如需要）
- [ ] 添加完整的 JSDoc 注释
- [ ] 在 \`src/index.ts\` 中添加导出
- [ ] 在 \`package.json\` 的 \`exports\` 中添加子路径
`;function a(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"utils-creator",children:"utils-creator"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"工具函数开发规范"}),`
`]}),`
`,n.jsx(e.h2,{id:"skillmd",children:"SKILL.md"}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"点击展开 SKILL.md 源码"}),n.jsx(s,{language:"markdown",children:o})]}),`
`,n.jsx(e.h2,{id:"技能详解",children:"技能详解"}),`
`,n.jsx(e.h3,{id:"概述",children:"概述"}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"packages"})," 下开发工具函数的指导规范，确保工具库的一致性和可维护性。"]}),`
`,n.jsx(e.h3,{id:"核心功能",children:"核心功能"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"统一开发规范"}),"：为工具函数开发提供标准化的目录结构和编码规范"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"模块化设计"}),"：指导如何正确拆分和组织工具函数模块"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"类型安全"}),"：确保所有工具函数具有完整的 TypeScript 类型定义"]}),`
`]}),`
`,n.jsx(e.h3,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["在 ",n.jsx(e.code,{children:"packages"})," 下新增工具函数"]}),`
`,n.jsx(e.li,{children:"修改或重构现有工具模块"}),`
`,n.jsx(e.li,{children:"需要了解工具函数的组织规范"}),`
`]})]})}function d(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(a,{...t})}):a(t)}export{d as default};
