import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import isUrl from '../../../packages/element-utils/src/isUrl'

const basicDemo = () => {
  const url = new URL('https://example.com/path?query=1')
  const result = isUrl(url)

  action('isUrl 检测 URL 实例')({
    input: url.toString(),
    isUrl: result,
  })
}

export default basicDemo
`,l=`import { action } from 'storybook/actions'
import isUrl from '../../../packages/element-utils/src/isUrl'

const stringDemo = () => {
  const testCases = [
    { input: 'https://example.com', type: 'string' },
    { input: 123, type: 'number' },
    { input: null, type: 'null' },
    { input: { url: 'https://example.com' }, type: 'object' },
  ]

  const results = testCases.map(({ input, type }) => ({
    type,
    isUrl: isUrl(input),
  }))

  action('isUrl 检测非 URL 类型')(results)
}

export default stringDemo
`;function i(s){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isurl",children:"isUrl"}),`
`,n.jsxs(e.p,{children:["判断传入的值是否是 ",n.jsx(e.code,{children:"URL"})," 实例。"]}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isUrl"})," 是一个类型守卫函数，使用 ",n.jsx(e.code,{children:"instanceof URL"})," 判断目标是否为浏览器原生 ",n.jsx(e.code,{children:"URL"})," 对象实例。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"URL"})," 是 Web API 提供的接口，用于解析、构造和编码 URL。在 Fetch API 中，请求的 ",n.jsx(e.code,{children:"input"})," 参数可以是 ",n.jsx(e.code,{children:"string"}),"、",n.jsx(e.code,{children:"URL"})," 或 ",n.jsx(e.code,{children:"Request"})," 对象，因此需要通过类型判断来正确提取 URL 字符串。"]}),`
`,n.jsx(e.p,{children:"常用于请求监控、路由处理等需要区分 URL 类型的场景。"}),`
`,n.jsx(e.h2,{id:"检测-url-实例",children:"检测 URL 实例"}),`
`,n.jsxs(e.p,{children:["传入通过 ",n.jsx(e.code,{children:"new URL()"})," 构造的对象，返回 ",n.jsx(e.code,{children:"true"}),"，同时 TypeScript 会将类型收窄为 ",n.jsx(e.code,{children:"URL"}),"。"]}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"检测非-url-类型",children:"检测非 URL 类型"}),`
`,n.jsxs(e.p,{children:["传入字符串、数字、null、普通对象等非 ",n.jsx(e.code,{children:"URL"})," 实例的值，均返回 ",n.jsx(e.code,{children:"false"}),"。"]}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"obj"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"待判断的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsxs("td",{children:["是否为 URL 实例，同时作为 ",n.jsx("code",{children:"obj is URL"})," 类型守卫"]})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"isUrl/index.ts"})," 为唯一源码文件，提供类型守卫函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 使用 ",n.jsx(e.code,{children:"instanceof URL"})," 检查对象是否为 ",n.jsx(e.code,{children:"URL"})," 构造函数的实例"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": TypeScript 类型谓词 ",n.jsx(e.code,{children:"obj is URL"}),"，在返回 ",n.jsx(e.code,{children:"true"})," 时自动收窄类型"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 传入任意值 → ",n.jsx(e.code,{children:"instanceof"})," 判断 → 返回布尔值并收窄类型"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...c(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{u as default};
