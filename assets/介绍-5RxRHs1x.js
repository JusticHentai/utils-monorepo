import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'

const fn = async (text: string) => {
  await sleep(1000)

  return \`\${text} success\`
}

const successDemo = async () => {
  const [res, err] = await asyncFormat<typeof fn>(fn)('成功用例')

  action('请求成功用例')({
    res,
    err,
  })
}

export default successDemo
`,d=`import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'

const fn = async (text: string) => {
  await sleep(1000)

  throw new Error(\`\${text} error\`)

  return \`\${text} error\`
}

const errorDemo = async () => {
  const [res, err] = await asyncFormat<typeof fn>(fn)('失败用例')

  action('请求失败用例')({
    res,
    err: err?.message,
  })
}

export default errorDemo
`;function i(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"asyncformat",children:"asyncFormat"}),`
`,n.jsxs(r.p,{children:["将异步函数转为返回 ",n.jsx(r.code,{children:"[result, error]"})," 元组形式的包装函数。"]}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:["asyncFormat 是一个函数包装器，核心作用是：",n.jsx(r.strong,{children:"将 async 函数的 resolve/reject 转为元组返回，避免 try/catch"}),"。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"高阶函数：接收函数返回函数"}),`
`,n.jsx(r.li,{children:"Promise 错误处理：try/catch 包装"}),`
`,n.jsxs(r.li,{children:["元组返回：",n.jsx(r.code,{children:"[data, error]"})," 形式"]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"灵感来源"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["Go 语言的错误处理风格：",n.jsx(r.code,{children:"data, err := fn()"})]}),`
`,n.jsx(r.li,{children:"await-to-js 库"}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"API 请求：统一处理成功和失败"}),`
`,n.jsx(r.li,{children:"文件操作：读写可能失败的操作"}),`
`,n.jsx(r.li,{children:"批量异步：并行请求时统一收集结果"}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"优势"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"避免大量 try/catch 嵌套"}),`
`,n.jsx(r.li,{children:"错误处理更直观"}),`
`,n.jsx(r.li,{children:"TypeScript 类型安全"}),`
`]}),`
`,n.jsx(r.h2,{id:"成功用例",children:"成功用例"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(r.h2,{id:"失败用例",children:"失败用例"}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"fn"}),n.jsx("td",{children:n.jsx("code",{children:"(...params: any[]) => Promise<any>"})}),n.jsx("td",{children:"需要包装的异步函数"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"(...params) => Promise<[data, undefined] | [undefined, error]>"})]}),`
`,n.jsxs(r.li,{children:["描述：包装后的函数，返回元组",`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["成功：",n.jsx(r.code,{children:"[data, undefined]"})]}),`
`,n.jsxs(r.li,{children:["失败：",n.jsx(r.code,{children:"[undefined, error]"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(r.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"index.ts"})," - 唯一源文件，包含 asyncFormat 函数实现"]}),`
`]}),`
`,n.jsx(r.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsx(r.li,{children:"返回一个新函数，接收原函数的参数"}),`
`,n.jsx(r.li,{children:"调用原函数时用 try/catch 包裹"}),`
`,n.jsxs(r.li,{children:["成功则返回 ",n.jsx(r.code,{children:"[result, undefined]"})]}),`
`,n.jsxs(r.li,{children:["捕获错误则返回 ",n.jsx(r.code,{children:"[undefined, error]"})]}),`
`]}),`
`,n.jsx(r.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["使用泛型 ",n.jsx(r.code,{children:"<Fn extends (...params: any[]) => Promise<any>>"})," 保留类型"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"Parameters<Fn>"})," 推断原函数参数类型"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"Awaited<ReturnType<Fn>>"})," 推断 Promise 解析后的类型"]}),`
`]})]})}function m(s={}){const{wrapper:r}={...c(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(i,{...s})}):i(s)}export{m as default};
