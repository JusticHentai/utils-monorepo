import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import reject from '../../../packages/js-utils/src/reject'

const rejectDemo = () => {
  const users = [
    { user: 'barney', age: 36, active: false },
    { user: 'fred', age: 40, active: true },
  ]
  action('reject 演示')({
    '排除 active 为 true 的': reject(users, (o) => o.active),
  })
}

export default rejectDemo
`,d=`import { action } from 'storybook/actions'
import reject from '../../../packages/js-utils/src/reject'

const edgeCaseDemo = () => {
  action('reject - 边界情况')({
    '过滤偶数': reject([1,2,3,4], n => n % 2 === 0), '空数组': reject([], () => true), '全部拒绝': reject([1,2], () => true)
  })
}

export default edgeCaseDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"reject",children:"reject"}),`
`,e.jsx(n.p,{children:"与 filter 相反，返回所有不满足谓词函数的元素"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reject"})," 与 filter 相反，返回所有不满足谓词函数的元素。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据转换和过滤"}),`
`,e.jsx(n.li,{children:"集合查询和检索"}),`
`,e.jsx(n.li,{children:"条件聚合计算"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"reject"})," 的基本使用效果。"]}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"collection"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要迭代的集合"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"predicate"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"每次迭代调用的函数"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"unknown"})]}),`
`,e.jsx(n.li,{children:"描述：返回过滤后的新数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"reject/index.ts"})," 导出 reject 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 与 filter 相反，返回所有不满足谓词函数的元素"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{u as default};
