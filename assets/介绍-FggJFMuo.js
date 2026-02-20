import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import attempt from '../../../packages/js-utils/src/attempt'

const successDemo = () => {
  // 成功执行返回结果
  const result1 = attempt(() => JSON.parse('{"name":"Alice","age":25}'))
  action('attempt - JSON 解析成功')({
    结果: result1,
    是Error: result1 instanceof Error,
  })

  // 传递额外参数
  const result2 = attempt((a: number, b: number) => a + b, 10, 20)
  action('attempt - 传递额外参数')({
    参数: [10, 20],
    结果: result2,
    说明: '将额外参数传递给目标函数',
  })

  // 返回简单值
  const result3 = attempt(() => 'hello')
  action('attempt - 返回简单值')({
    结果: result3,
  })
}

export default successDemo
`,i=`import { action } from 'storybook/actions'
import attempt from '../../../packages/js-utils/src/attempt'

const errorDemo = () => {
  // 捕获 JSON 解析错误
  const result1 = attempt(() => JSON.parse('invalid json'))
  action('attempt - 捕获 JSON 解析错误')({
    是Error: result1 instanceof Error,
    错误信息: result1 instanceof Error ? result1.message : result1,
  })

  // 非 Error 抛出值被转换为 Error 对象
  const result2 = attempt(() => { throw 'string error' })
  action('attempt - 非 Error 值被转换为 Error')({
    是Error: result2 instanceof Error,
    错误信息: result2 instanceof Error ? result2.message : result2,
    说明: '抛出的字符串被包装为 Error 对象',
  })

  // 自定义 Error 类型被保留
  class CustomError extends Error {
    code = 'CUSTOM_001'
  }
  const result3 = attempt(() => { throw new CustomError('自定义错误') })
  action('attempt - 保留自定义 Error 类型')({
    是Error: result3 instanceof Error,
    是CustomError: result3 instanceof CustomError,
    错误信息: result3 instanceof Error ? result3.message : result3,
  })
}

export default errorDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(n.h1,{id:"attempt",children:"attempt"}),`
`,r.jsx(n.p,{children:"尝试调用函数，返回结果或错误对象。"}),`
`,r.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(n.p,{children:[r.jsx(n.code,{children:"attempt"})," 尝试执行给定的函数，如果成功则返回执行结果，如果抛出异常则返回 Error 对象而不是让异常传播。非 Error 类型的抛出值会被自动转换为 Error 对象，自定义 Error 子类会被保留。"]}),`
`,r.jsxs(n.p,{children:[r.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsx(n.li,{children:"安全执行可能出错的操作（如 JSON 解析）而无需 try-catch"}),`
`,r.jsx(n.li,{children:"简化错误处理逻辑"}),`
`,r.jsx(n.li,{children:"函数式编程中的错误处理"}),`
`]}),`
`,r.jsx(n.h2,{id:"成功执行",children:"成功执行"}),`
`,r.jsx(n.p,{children:"支持返回函数结果和传递额外参数。"}),`
`,r.jsx(e,{language:"typescript",children:c}),`
`,r.jsx(n.h2,{id:"错误捕获",children:"错误捕获"}),`
`,r.jsx(n.p,{children:"捕获各类错误：标准错误、字符串抛出值（自动转 Error）、自定义 Error 子类。"}),`
`,r.jsx(e,{language:"typescript",children:i}),`
`,r.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"func"}),r.jsx("td",{children:r.jsx("code",{children:"(...args: unknown[]) => T"})}),r.jsx("td",{children:"要尝试调用的函数"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"...args"}),r.jsx("td",{children:r.jsx("code",{children:"unknown[]"})}),r.jsx("td",{children:"传递给函数的参数"})]})]})]}),`
`,r.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,r.jsxs(n.ul,{children:[`
`,r.jsxs(n.li,{children:["类型：",r.jsx(n.code,{children:"T | Error"})]}),`
`,r.jsx(n.li,{children:"描述：函数返回值或 Error 对象"}),`
`]}),`
`,r.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"文件职责"}),": ",r.jsx(n.code,{children:"attempt/index.ts"})," 导出 attempt 函数"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"核心流程"}),": try-catch 包裹函数调用，成功返回结果，失败返回 Error"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"关键技术点"}),": ",r.jsx(n.code,{children:"instanceof Error"})," 判断，非 Error 值用 ",r.jsx(n.code,{children:"new Error(String(error))"})," 包装"]}),`
`,r.jsxs(n.li,{children:[r.jsx(n.strong,{children:"数据流向"}),": 调用 func(...args) → 成功返回结果 / 失败捕获异常 → 返回 Error 对象"]}),`
`]})]})}function m(t={}){const{wrapper:n}={...o(),...t.components};return n?r.jsx(n,{...t,children:r.jsx(s,{...t})}):s(t)}export{m as default};
