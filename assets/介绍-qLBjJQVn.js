import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import reverse from '../../../packages/js-utils/src/reverse'

const reverseDemo = () => {
  // 基本反转 (lodash: reverse([1,2,3]) => [3,2,1], returns same ref)
  const arr = [1, 2, 3]
  const result = reverse(arr)
  action('reverse - 反转结果')(result)

  // 验证原地修改：返回的是同一个数组引用
  action('reverse - 同一引用')(result === arr)
  action('reverse - 原数组已修改')(arr)

  // 字符串数组
  action('reverse - 字符串数组')(reverse(['a', 'b', 'c', 'd']))

  // 空数组
  action('reverse - 空数组')(reverse([]))

  // 含 null 的数组
  action('reverse - 含null')(reverse([0, 1, 2, null]))
}

export default reverseDemo`;function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"reverse",children:"reverse"}),`
`,e.jsx(n.p,{children:"反转数组（原地修改）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reverse"})," 反转数组元素顺序，直接修改并返回原数组。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数组倒序显示"}),`
`,e.jsx(n.li,{children:"栈操作"}),`
`,e.jsx(n.li,{children:"时间线倒序"}),`
`]}),`
`,e.jsx(n.h2,{id:"数组反转",children:"数组反转"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"reverse"})," 原地反转数组。"]}),`
`,e.jsx(l,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"array"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"要反转的数组"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T[]"})]}),`
`,e.jsx(n.li,{children:"描述：反转后的原数组"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"index.ts"})," 封装数组反转"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 调用 Array.prototype.reverse 原地修改"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 原地修改，返回同一数组引用"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 数组 → 反转操作 → 返回同一引用"]}),`
`]})]})}function a(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default};
