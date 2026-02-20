import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const e=`import { action } from 'storybook/actions'
import tail from '../../../packages/js-utils/src/tail'

const tailDemo = () => {
  // 基础：排除首元素
  action('tail - 排除首元素')({
    输入: [1, 2, 3],
    结果: tail([1, 2, 3]),
  })

  // 空数组返回空
  action('tail - 空数组')({
    输入: [],
    结果: tail([]),
  })

  // 单元素 => 空数组
  action('tail - 单元素')({
    输入: [1],
    结果: tail([1]),
  })

  // 作为 map 的迭代器
  const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  action('tail - 用于 map 迭代')({
    输入: arrays,
    结果: arrays.map((arr) => tail(arr)),
  })

  // 返回新数组引用
  const original = [1, 2, 3]
  const result = tail(original)
  action('tail - 返回新数组（不修改原数组）')({
    原数组: original,
    结果: result,
    是否新引用: result !== original,
  })
}

export default tailDemo
`;function s(r){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"tail",children:"tail"}),`
`,n.jsx(i.p,{children:"获取除第一个元素外的所有元素。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"tail"})," 返回数组中除第一个元素外的所有元素（新数组）。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"递归处理（取头尾分离）"}),`
`,n.jsx(i.li,{children:"跳过首元素"}),`
`,n.jsx(i.li,{children:"函数式列表处理"}),`
`]}),`
`,n.jsx(i.h2,{id:"获取数组尾部",children:"获取数组尾部"}),`
`,n.jsxs(i.p,{children:["使用 ",n.jsx(i.code,{children:"tail"})," 获取除第一个元素外的所有元素。"]}),`
`,n.jsx(t,{language:"typescript",children:e}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"要处理的数组"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[]"})]}),`
`,n.jsx(i.li,{children:"描述：除第一个元素外的新数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"index.ts"})," 实现数组尾部获取"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 返回从索引1开始的数组切片"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": Array.prototype.slice(1) 创建新数组"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 数组 → slice(1) → 返回新数组"]}),`
`]})]})}function j(r={}){const{wrapper:i}={...l(),...r.components};return i?n.jsx(i,{...r,children:n.jsx(s,{...r})}):s(r)}export{j as default};
