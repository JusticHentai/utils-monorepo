import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isHeaders from '../../../packages/element-utils/src/isHeaders'

const basicDemo = () => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'Bearer token',
  })

  const result = isHeaders(headers)

  action('isHeaders 检测 Headers 实例')({
    isHeaders: result,
  })
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import isHeaders from '../../../packages/element-utils/src/isHeaders'

const objectDemo = () => {
  const testCases = [
    { input: { 'Content-Type': 'application/json' }, type: 'plain object' },
    { input: [['Content-Type', 'application/json']], type: 'array' },
    { input: 'Content-Type: application/json', type: 'string' },
    { input: null, type: 'null' },
  ]

  const results = testCases.map(({ input, type }) => ({
    type,
    isHeaders: isHeaders(input),
  }))

  action('isHeaders 检测非 Headers 类型')(results)
}

export default objectDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isheaders",children:"isHeaders"}),`
`,e.jsxs(n.p,{children:["判断传入的值是否是 ",e.jsx(n.code,{children:"Headers"})," 实例。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isHeaders"})," 是一个类型守卫函数，使用 ",e.jsx(n.code,{children:"instanceof Headers"})," 判断目标是否为浏览器原生 ",e.jsx(n.code,{children:"Headers"})," 对象实例。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Headers"})," 是 Fetch API 的一部分，用于表示 HTTP 请求和响应的头信息。在处理请求配置时，",e.jsx(n.code,{children:"headers"})," 参数可能是 ",e.jsx(n.code,{children:"Headers"})," 实例、普通对象或二维数组，因此需要通过类型判断来选择正确的遍历方式。"]}),`
`,e.jsx(n.p,{children:"常用于请求监控、HTTP 客户端封装等需要解析请求头的场景。"}),`
`,e.jsx(n.h2,{id:"检测-headers-实例",children:"检测 Headers 实例"}),`
`,e.jsxs(n.p,{children:["传入通过 ",e.jsx(n.code,{children:"new Headers()"})," 构造的对象，返回 ",e.jsx(n.code,{children:"true"}),"，同时 TypeScript 会将类型收窄为 ",e.jsx(n.code,{children:"Headers"}),"。"]}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"检测非-headers-类型",children:"检测非 Headers 类型"}),`
`,e.jsxs(n.p,{children:["传入普通对象、数组、字符串、null 等非 ",e.jsx(n.code,{children:"Headers"})," 实例的值，均返回 ",e.jsx(n.code,{children:"false"}),"。"]}),`
`,e.jsx(r,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"obj"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"待判断的值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsxs("td",{children:["是否为 Headers 实例，同时作为 ",e.jsx("code",{children:"obj is Headers"})," 类型守卫"]})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"isHeaders/index.ts"})," 为唯一源码文件，提供类型守卫函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 使用 ",e.jsx(n.code,{children:"instanceof Headers"})," 检查对象是否为 ",e.jsx(n.code,{children:"Headers"})," 构造函数的实例"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": TypeScript 类型谓词 ",e.jsx(n.code,{children:"obj is Headers"}),"，在返回 ",e.jsx(n.code,{children:"true"})," 时自动收窄类型"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 传入任意值 → ",e.jsx(n.code,{children:"instanceof"})," 判断 → 返回布尔值并收窄类型"]}),`
`]})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{p as default};
