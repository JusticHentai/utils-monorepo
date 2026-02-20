import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import has from '../../../packages/js-utils/src/has'

const basicDemo = () => {
  const obj = { a: { b: { c: 3 } } }
  action('has')({
    'a.b.c': has(obj, 'a.b.c'),
    'a.b.d': has(obj, 'a.b.d'),
    '["a", "b"]': has(obj, ['a', 'b']),
  })
}

export default basicDemo
`;function r(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"has",children:"has"}),`
`,n.jsx(s.p,{children:"检查对象是否有指定路径的直接属性。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"has"})," 检查对象是否拥有指定路径的直接（自有）属性。",n.jsx(s.code,{children:"hasIn"})," 则包括继承属性。支持嵌套路径（如 ",n.jsx(s.code,{children:"a.b.c"}),"）和数组索引。"]}),`
`,n.jsx(s.h2,{id:"检查属性路径",children:"检查属性路径"}),`
`,n.jsx(c,{language:"typescript",children:d}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"path"}),n.jsx("td",{children:n.jsx("code",{children:"string | string[]"})}),n.jsx("td",{children:"属性路径"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：是否存在"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"has/index.ts"})," 导出 has（default）和 hasIn（named）"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 解析路径字符串为数组，逐层检查属性是否存在"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": hasOwnProperty vs ",n.jsx(s.code,{children:"in"})," 操作符"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 路径解析 → 逐层深入对象 → 检查属性存在性 → 返回布尔值"]}),`
`]})]})}function a(e={}){const{wrapper:s}={...i(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(r,{...e})}):r(e)}export{a as default};
