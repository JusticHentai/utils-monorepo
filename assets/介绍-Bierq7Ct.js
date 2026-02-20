import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import flip from '../../../packages/js-utils/src/flip'

const basicDemo = () => {
  const fn = (...args: unknown[]) => args

  // 翻转参数顺序
  const flipped = flip(fn)
  action('flip - 翻转参数顺序')({
    'fn("a","b","c","d")': fn('a', 'b', 'c', 'd'),
    'flipped("a","b","c","d")': flipped('a', 'b', 'c', 'd'),
  })

  // 实际应用：翻转比较函数
  const divide = (a: number, b: number) => a / b
  const flippedDivide = flip(divide)
  action('flip - 翻转除法参数')({
    'divide(10, 2)': divide(10, 2),
    'flippedDivide(10, 2)': flippedDivide(10, 2),
  })
}

export default basicDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"flip",children:"flip"}),`
`,n.jsx(e.p,{children:"创建一个翻转接收参数顺序的函数。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"flip"})," 创建一个新函数，调用时将参数顺序反转后传递给原函数。在函数组合和适配器模式中很有用。"]}),`
`,n.jsx(e.h2,{id:"翻转参数顺序",children:"翻转参数顺序"}),`
`,n.jsx(d,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"T extends (...args: any[]) => any"})}),n.jsx("td",{children:"要翻转参数的函数"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"(...args) => ReturnType<T>"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"flip/index.ts"})," 导出 ",n.jsx(e.code,{children:"flip"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 返回新函数，将 args 数组 reverse 后传给原函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": ",n.jsx(e.code,{children:"Array.prototype.reverse"}),"、",n.jsx(e.code,{children:"Function.prototype.apply"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 参数数组 → reverse → 传递给原函数"]}),`
`]})]})}function j(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{j as default};
