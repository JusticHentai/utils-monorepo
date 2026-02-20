import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import intersectionWith from '../../../packages/js-utils/src/intersectionWith'

const intersectionWithDemo = () => {
  const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }]
  const others = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
  action('intersectionWith 演示')({
    '自定义比较交集': intersectionWith(objects, others, (a, b) => a.x === b.x && a.y === b.y),
  })
}

export default intersectionWithDemo
`,o=`import { action } from 'storybook/actions'
import intersectionWith from '../../../packages/js-utils/src/intersectionWith'

const edgeCaseDemo = () => {
  action('intersectionWith - 边界情况')({
    '自定义比较': intersectionWith([{x:1},{x:2}], [{x:1}], (a,b) => a.x===b.x), '空数组': intersectionWith([], [{x:1}], (a,b) => a.x===b.x)
  })
}

export default edgeCaseDemo
`;function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i.h1,{id:"intersectionwith",children:"intersectionWith"}),`
`,n.jsx(i.p,{children:"根据比较函数进行交集运算"}),`
`,n.jsx(i.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"intersectionWith"})," 根据比较函数进行交集运算。"]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"数据处理和转换"}),`
`,n.jsx(i.li,{children:"功能组合和增强"}),`
`,n.jsx(i.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(i.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(i.p,{children:["点击按钮查看 ",n.jsx(i.code,{children:"intersectionWith"})," 的基本使用效果。"]}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(i.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(i.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(i.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"comparator"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"比较函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"arrays"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的数组列表"})]})]})]}),`
`,n.jsx(i.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["类型：",n.jsx(i.code,{children:"unknown"})]}),`
`,n.jsx(i.li,{children:"描述：返回交集数组"}),`
`]}),`
`,n.jsx(i.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"文件职责"}),": ",n.jsx(i.code,{children:"intersectionWith/index.ts"})," 导出 intersectionWith 函数"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"核心流程"}),": 根据比较函数进行交集运算"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function m(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
