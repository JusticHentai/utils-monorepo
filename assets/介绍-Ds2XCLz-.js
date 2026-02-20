import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import type WrappedFunction from '../../../packages/js-utils/src/WrappedFunction'

// 创建一个简单的日志包装函数
const createLoggedFunction = <Fn extends (...args: any[]) => Promise<any>>(
  fn: Fn,
  name: string
): WrappedFunction<Fn> => {
  return async (...args) => {
    console.log(\`[\${name}] 开始执行，参数:\`, args)

    try {
      const result = await fn(...args)
      console.log(\`[\${name}] 执行成功，结果:\`, result)
      return [result, undefined]
    } catch (error) {
      console.log(\`[\${name}] 执行失败，错误:\`, error)
      return [undefined, error]
    }
  }
}

const basicDemo = async () => {
  // 原始异步函数
  const calculateSum = async (a: number, b: number) => {
    await new Promise((resolve) => setTimeout(resolve, 100)) // 模拟异步操作
    return a + b
  }

  const divide = async (a: number, b: number) => {
    if (b === 0) {
      throw new Error('除数不能为零')
    }
    return a / b
  }

  // 创建包装函数
  const loggedSum = createLoggedFunction(calculateSum, 'Sum')
  const loggedDivide = createLoggedFunction(divide, 'Divide')

  // 测试成功情况
  const [sumResult, sumError] = await loggedSum(10, 20)
  action('加法结果')({ result: sumResult, error: sumError })

  // 测试正常除法
  const [divideResult, divideError] = await loggedDivide(10, 2)
  action('除法结果')({ result: divideResult, error: divideError })

  // 测试除零错误
  const [errorResult, errorError] = await loggedDivide(10, 0)
  action('除零错误')({ result: errorResult, error: errorError })
}

export default basicDemo
`,i=`import { action } from 'storybook/actions'
import type WrappedFunction from '../../../packages/js-utils/src/WrappedFunction'

// 性能监控包装器
const createPerformanceWrapper = <Fn extends (...args: any[]) => Promise<any>>(
  fn: Fn
): WrappedFunction<Fn, { originalError: any; duration: number }> => {
  return async (...args) => {
    const startTime = performance.now()

    try {
      const result = await fn(...args)
      const duration = performance.now() - startTime
      console.log(\`函数执行耗时: \${duration.toFixed(2)}ms\`)
      return [result, undefined]
    } catch (error) {
      const duration = performance.now() - startTime
      return [undefined, { originalError: error, duration }]
    }
  }
}

// 缓存包装器
const createCacheWrapper = <Fn extends (...args: any[]) => Promise<any>>(
  fn: WrappedFunction<Fn>
): WrappedFunction<Fn> => {
  const cache = new Map<string, any>()

  return async (...args) => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      console.log('缓存命中:', key)
      return [cache.get(key), undefined]
    }

    const [result, error] = await fn(...args)

    if (result !== undefined) {
      cache.set(key, result)
      console.log('结果已缓存:', key)
    }

    return [result, error]
  }
}

const compositionDemo = async () => {
  // 原始函数：模拟耗时的 API 调用
  const fetchUserData = async (userId: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500)) // 模拟网络延迟

    if (userId <= 0) {
      throw new Error('无效的用户ID')
    }

    return {
      id: userId,
      name: \`User \${userId}\`,
      email: \`user\${userId}@example.com\`,
    }
  }

  // 组合多个包装器：性能监控 + 缓存
  const performanceWrapped = createPerformanceWrapper(fetchUserData)
  const cachedAndMonitored = createCacheWrapper(performanceWrapped)

  // 第一次调用（无缓存）
  console.log('=== 第一次调用 ===')
  const [result1, error1] = await cachedAndMonitored(1)
  action('第一次调用')({ result: result1, error: error1 })

  // 第二次调用相同参数（命中缓存）
  console.log('=== 第二次调用（相同参数）===')
  const [result2, error2] = await cachedAndMonitored(1)
  action('第二次调用（缓存）')({ result: result2, error: error2 })

  // 调用不同参数
  console.log('=== 调用不同参数 ===')
  const [result3, error3] = await cachedAndMonitored(2)
  action('不同参数调用')({ result: result3, error: error3 })

  // 测试错误情况
  console.log('=== 错误情况 ===')
  const [result4, error4] = await cachedAndMonitored(-1)
  action('错误情况')({ result: result4, error: error4 })
}

export default compositionDemo
`;function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"wrappedfunction",children:"WrappedFunction"}),`
`,n.jsxs(r.p,{children:["WrappedFunction 是一个通用的包装函数类型，用于定义接受原函数参数并返回 ",n.jsx(r.code,{children:"WrappedFunctionResult"})," 格式的函数。它是构建各种功能包装器（如日志、缓存、重试、超时等）的基础类型。"]}),`
`,n.jsx(r.h2,{id:"基础包装函数演示",children:"基础包装函数演示"}),`
`,n.jsx(o,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"函数组合演示",children:"函数组合演示"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"类型定义",children:"类型定义"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`type WrappedFunction<Fn extends BaseFunction, ErrorType = any> = (
  ...args: Parameters<Fn>
) => WrappedFunctionResult<Fn, ErrorType>
`})}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(r.h3,{id:"泛型参数",children:"泛型参数"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"Fn"})," - 被包装的函数类型，必须继承自 ",n.jsx(r.code,{children:"BaseFunction"})]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"ErrorType"})," - 错误类型，默认为 ",n.jsx(r.code,{children:"any"}),"，可以自定义具体的错误类型"]}),`
`]}),`
`,n.jsx(r.h3,{id:"函数签名",children:"函数签名"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"参数"}),": ",n.jsx(r.code,{children:"...args: Parameters<Fn>"})," - 接受原函数的所有参数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"返回值"}),": ",n.jsx(r.code,{children:"WrappedFunctionResult<Fn, ErrorType>"})," - 返回 ",n.jsx(r.code,{children:"[result, error]"})," 格式的 Promise"]}),`
`]}),`
`,n.jsx(r.h2,{id:"使用场景",children:"使用场景"}),`
`,n.jsxs(r.h3,{id:"1-日志包装器",children:["1. ",n.jsx(r.strong,{children:"日志包装器"})]}),`
`,n.jsx(r.p,{children:"为函数添加执行日志，记录参数、结果和错误信息。"}),`
`,n.jsxs(r.h3,{id:"2-性能监控",children:["2. ",n.jsx(r.strong,{children:"性能监控"})]}),`
`,n.jsx(r.p,{children:"监控函数执行时间，用于性能分析和优化。"}),`
`,n.jsxs(r.h3,{id:"3-缓存包装器",children:["3. ",n.jsx(r.strong,{children:"缓存包装器"})]}),`
`,n.jsx(r.p,{children:"为函数添加缓存功能，避免重复计算。"}),`
`,n.jsxs(r.h3,{id:"4-函数组合",children:["4. ",n.jsx(r.strong,{children:"函数组合"})]}),`
`,n.jsx(r.p,{children:"多个包装器可以组合使用，形成功能强大的处理链。"}),`
`,n.jsx(r.h2,{id:"设计优势",children:"设计优势"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"类型安全"}),": 完全保持原函数的参数和返回值类型"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"统一接口"}),": 所有包装函数都遵循相同的 ",n.jsx(r.code,{children:"[result, error]"})," 格式"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"可组合性"}),": 包装器可以相互组合，构建复杂的功能链"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"错误处理"}),": 统一的错误处理模式，避免异常抛出"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"扩展性"}),": 支持自定义错误类型，适应不同业务需求"]}),`
`]}),`
`,n.jsx(r.h2,{id:"相关类型",children:"相关类型"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"WrappedFunctionResult"})," - 包装函数的返回值类型"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"BaseFunction"})," - 基础函数类型约束"]}),`
`]}),`
`,n.jsx(r.h2,{id:"实际应用",children:"实际应用"}),`
`,n.jsxs(r.p,{children:["项目中的 ",n.jsx(r.code,{children:"retry"}),"、",n.jsx(r.code,{children:"timeout"})," 等工具函数都基于此类型构建，提供了一致的使用体验和错误处理模式。"]})]})}function x(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(s,{...e})}):s(e)}export{x as default};
