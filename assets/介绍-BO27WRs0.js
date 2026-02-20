import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import filter from '../../../packages/js-utils/src/filter'

const filterDemo = () => {
  // 基础：返回偶数元素
  action('filter - 返回偶数')(
    filter([1, 2, 3], (n) => n % 2 === 0),
  )

  // 对象数组过滤
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true },
  ]
  action('filter - 对象数组过滤活跃用户')(
    filter(users, (u) => u.active),
  )

  // 空数组返回空数组
  action('filter - 空数组')({
    结果: filter([], () => true),
  })
}

export default filterDemo
`,l=`import { action } from 'storybook/actions'
import reject from '../../../packages/js-utils/src/reject'

const rejectDemo = () => {
  const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true },
  ]

  action('reject - 排除活跃用户')(reject(users, (u) => u.active))
}

export default rejectDemo
`;function i(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"filter",children:"filter"}),`
`,e.jsxs(n.p,{children:["返回所有满足谓词函数的元素，同时提供 ",e.jsx(n.code,{children:"reject"})," 返回不满足的元素。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"filter"})," 遍历集合返回所有使谓词函数返回 true 的元素。",e.jsx(n.code,{children:"reject"})," 是 ",e.jsx(n.code,{children:"filter"})," 的反向操作，返回谓词函数返回 false 的元素。支持函数、对象匹配、属性简写等多种谓词形式。"]}),`
`,e.jsx(n.h2,{id:"filter---过滤满足条件的",children:"filter - 过滤满足条件的"}),`
`,e.jsx(t,{language:"typescript",children:s}),`
`,e.jsx(n.h2,{id:"reject---排除满足条件的",children:"reject - 排除满足条件的"}),`
`,e.jsx(t,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要过滤的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"predicate"}),e.jsx("td",{children:e.jsx("code",{children:"(value: T) => boolean"})}),e.jsx("td",{children:"谓词函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T[]"})]}),`
`,e.jsx(n.li,{children:"描述：过滤后的数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"filter/index.ts"})," 导出 filter（default）和 reject（named）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 遍历集合，收集满足（或不满足）谓词的元素"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 谓词函数标准化、支持多种简写形式"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 集合元素 → 谓词判断 → 满足则收集 → 返回新数组"]}),`
`]})]})}function m(r={}){const{wrapper:n}={...c(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{m as default};
