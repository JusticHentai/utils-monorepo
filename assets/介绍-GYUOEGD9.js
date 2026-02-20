import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import includes from '../../../packages/js-utils/src/includes'

const basicDemo = () => {
  // 数组查找
  action('includes - 数组查找')({
    '包含 3': includes([1, 2, 3, 4], 3),
    '不包含 5': includes([1, 2, 3, 4], 5),
  })

  // 字符串查找
  action('includes - 字符串查找')({
    '包含 "bc"': includes('abc', 'bc'),
    '不包含 "d"': includes('abc', 'd'),
  })

  // fromIndex 指定起始位置
  action('includes - fromIndex')({
    'includes([1,2,3], 1, 2)': includes([1, 2, 3], 1, 2),
    '浮点数 fromIndex 截断': includes([1, 2, 3, 4], 2, 1.2),
  })

  // 空集合返回 false
  action('includes - 空集合')({
    '空数组': includes([], 1),
    '空字符串': includes('', 'a'),
  })
}

export default basicDemo
`;function c(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"includes",children:"includes"}),`
`,n.jsx(e.p,{children:"检查集合中是否包含指定值。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"includes"})," 检查值是否在集合（数组或字符串）中。使用 SameValueZero 比较。支持 fromIndex 指定起始搜索位置。"]}),`
`,n.jsx(e.h2,{id:"检查包含关系",children:"检查包含关系"}),`
`,n.jsx(d,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"collection"}),n.jsx("td",{children:n.jsx("code",{children:"T[] | string"})}),n.jsx("td",{children:"集合"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要搜索的值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"fromIndex"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"起始位置（默认0）"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"描述：是否包含"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"includes/index.ts"})," 导出 ",n.jsx(e.code,{children:"includes"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 根据 collection 类型选择数组或字符串的搜索方式"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": SameValueZero 比较、fromIndex 支持"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": collection + value → 搜索 → 返回布尔值"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(c,{...s})}):c(s)}export{u as default};
