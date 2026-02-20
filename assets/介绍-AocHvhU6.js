import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import size from '../../../packages/js-utils/src/size'

const sizeDemo = () => {
  // 数组长度 (lodash: size([1,2,3]) => 3)
  action('size - 数组')(size([1, 2, 3]))

  // 对象键数量 (lodash: size({one:1,two:2,three:3}) => 3)
  action('size - 对象')(size({ one: 1, two: 2, three: 3 }))

  // 字符串长度 (lodash: size('pebbles') => 7)
  action('size - 字符串')(size('pebbles'))

  // null/undefined 返回 0 (lodash: size(falsey) => 0)
  action('size - null')(size(null))
  action('size - undefined')(size(undefined))

  // 空集合
  action('size - 空数组')(size([]))
  action('size - 空对象')(size({}))
  action('size - 空字符串')(size(''))

  // 带length属性的对象不被当作array-like (lodash: size({length:-1}) => 1)
  action('size - 对象有length属性')(size({ length: -1 } as any))
}

export default sizeDemo`;function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"size",children:"size"}),`
`,n.jsx(e.p,{children:"返回集合的长度。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"size"})," 返回集合的大小。支持数组（length）、对象（键数量）和字符串（长度）。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"通用集合大小获取"}),`
`,n.jsx(e.li,{children:"替代手动判断类型再取长度"}),`
`,n.jsx(e.li,{children:"数据验证"}),`
`]}),`
`,n.jsx(e.h2,{id:"集合大小",children:"集合大小"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"size"})," 获取不同类型集合的大小。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"unknown[] | Record<string, unknown> | string | null"})}),n.jsx("td",{children:"要获取大小的集合"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"number"})]}),`
`,n.jsx(e.li,{children:"描述：集合的大小"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"index.ts"})," 实现通用集合大小获取"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 判断类型 → 数组/字符串取 length → 对象取 Object.keys.length"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 类型判断，null/undefined 处理"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 集合 → 类型判断 → 对应方式获取大小 → 返回数值"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...l(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
