import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import nth from '../../../packages/js-utils/src/nth'

const nthDemo = () => {
  const arr = ['a', 'b', 'c', 'd']

  // lodash 测试: 按索引获取元素
  action('nth - 正索引')({
    'nth(arr, 0)': nth(arr, 0),
    'nth(arr, 1)': nth(arr, 1),
    'nth(arr, 2)': nth(arr, 2),
    'nth(arr, 3)': nth(arr, 3),
  })

  // lodash 测试: 负索引
  action('nth - 负索引')({
    'nth(arr, -1)': nth(arr, -1),
    'nth(arr, -2)': nth(arr, -2),
    'nth(arr, -3)': nth(arr, -3),
    'nth(arr, -4)': nth(arr, -4),
    说明: '负索引从末尾开始: -1 => d, -2 => c, ...',
  })

  // lodash 测试: 默认返回第一个元素
  action('nth - 默认索引')({
    'nth(arr)': nth(arr),
    期望: 'a',
  })

  // lodash 测试: 空数组 / 超出范围
  action('nth - 边界')({
    'nth([], 0)': nth([], 0),
    'nth(arr, Infinity)': nth(arr, Infinity),
    'nth(arr, 4)': nth(arr, 4),
    说明: '空数组或超出范围返回 undefined',
  })
}

export default nthDemo`;function t(h){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"nth",children:"nth"}),`
`,n.jsx(r.p,{children:"获取数组中指定索引的元素。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"nth"})," 获取数组中第 n 个元素。n 为负数时从末尾计算。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"安全地获取数组元素"}),`
`,n.jsx(r.li,{children:"从末尾获取元素（负索引）"}),`
`,n.jsx(r.li,{children:"函数式数组访问"}),`
`]}),`
`,n.jsx(r.h2,{id:"按索引获取元素",children:"按索引获取元素"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"nth"})," 按索引获取数组元素，支持负数索引。"]}),`
`,n.jsx(e,{language:"typescript",children:i}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要获取元素的数组"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"索引位置，默认 0，负数从末尾计算"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"T | undefined"})]}),`
`,n.jsx(r.li,{children:"描述：指定索引处的元素"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 实现带负索引的数组元素访问"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 处理负数索引 → 转为正索引 → 返回对应元素"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 负索引转换（length + n）"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 数组 + 索引 → 索引转换 → 访问元素 → 返回值"]}),`
`]})]})}function a(h={}){const{wrapper:r}={...s(),...h.components};return r?n.jsx(r,{...h,children:n.jsx(t,{...h})}):t(h)}export{a as default};
