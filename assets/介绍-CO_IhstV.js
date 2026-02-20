import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import initial from '../../../packages/js-utils/src/initial'

const basicDemo = () => {
  // 排除最后一个元素
  action('initial - 排除最后一个元素')(
    initial([1, 2, 3]),
  )

  // 空数组
  action('initial - 空数组')(
    initial([]),
  )

  // 作为 map 迭代器
  action('initial - 作为 map 迭代器')(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]].map(initial),
  )
}

export default basicDemo
`;function e(s){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"initial",children:"initial"}),`
`,n.jsx(i.p,{children:"获取数组中除最后一个元素外的所有元素。"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"initial"})," 返回数组中除最后一个元素外的所有元素。与 ",n.jsx(i.code,{children:"tail"}),"（去头）相对应。"]}),`
`,n.jsx(i.h2,{id:"去除最后一个元素",children:"去除最后一个元素"}),`
`,n.jsx(l,{language:"typescript",children:t}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"array"}),n.jsx("td",{children:n.jsx("code",{children:"T[]"})}),n.jsx("td",{children:"数组"})]})})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"T[]"})]}),`
`,n.jsx(i.li,{children:"描述：去除最后一个元素的新数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"initial/index.ts"})," 导出 ",n.jsx(i.code,{children:"initial"})," 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 使用 slice(0, -1) 返回除最后一个元素外的所有元素"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": ",n.jsx(i.code,{children:"Array.prototype.slice"})]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 数组 → slice(0, -1) → 返回新数组"]}),`
`]})]})}function a(s={}){const{wrapper:i}={...r(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(e,{...s})}):e(s)}export{a as default};
