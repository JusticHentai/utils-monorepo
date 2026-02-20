import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import result from '../../../packages/js-utils/src/result'

const resultDemo = () => {
  // 基本值获取 (lodash: result({a:1}, 'a') => 1)
  action('result - 基本值')(result({ a: 1, b: 2 }, 'a'))

  // 函数自动调用 (lodash: result({b: stubB}, 'b') => 'b')
  const obj = { greet: () => 'Hello!' }
  action('result - 函数自动调用')(result(obj, 'greet'))

  // 深层路径 (lodash: result({a:{b:2}}, 'a.b') => 2)
  action('result - 深层路径')(result({ a: { b: { c: 3 } } }, 'a.b.c'))

  // 数组路径 (lodash: result({a:{b:2}}, ['a','b']) => 2)
  action('result - 数组路径')(result({ a: { b: 42 } }, ['a', 'b']))

  // 默认值 (lodash: result({}, 'x.y.z', 'default') => 'default')
  action('result - 默认值')(result({}, 'x.y.z', 'default'))

  // 默认值也可以是函数 (lodash: 返回调用结果)
  action('result - 不存在+默认值')(result({ a: {} }, 'a.b', 'fallback'))

  // null 对象返回 defaultValue
  action('result - null对象')(result(null as any, 'a', 'safe'))

  // 深层嵌套函数自动调用 (lodash test: value.a is a function returning {b: fn})
  const nested = { a: { b: function() { return 'called' } } }
  action('result - 嵌套函数调用')(result(nested, 'a.b'))
}

export default resultDemo`;function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"result",children:"result"}),`
`,n.jsx(e.p,{children:"解析对象指定路径的值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"result"})," 解析对象指定路径的值，如果值是函数则调用并返回结果，值为 undefined 时返回默认值。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"安全地获取嵌套属性"}),`
`,n.jsx(e.li,{children:"自动调用方法属性"}),`
`,n.jsx(e.li,{children:"带默认值的属性访问"}),`
`]}),`
`,n.jsx(e.h2,{id:"路径值解析",children:"路径值解析"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"result"})," 解析对象路径上的值，支持自动调用函数和默认值。"]}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"Record<string, unknown>"})}),n.jsx("td",{children:"要解析的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"属性路径"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"defaultValue"}),n.jsx("td",{children:n.jsx("code",{children:"T"})}),n.jsx("td",{children:"可选默认值"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"unknown"})]}),`
`,n.jsx(e.li,{children:"描述：路径上的值（函数则为调用结果）"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现带函数调用的路径解析"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 解析路径 → 逐级访问 → 如果值是函数则调用 → undefined 时返回默认值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 路径解析、函数类型检测与自动调用、默认值回退"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 对象 + 路径 → 逐级访问 → 函数调用/取值 → 返回结果"]}),`
`]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{x as default};
