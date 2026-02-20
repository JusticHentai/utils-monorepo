import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import inRange from '../../../packages/js-utils/src/inRange'

const basicDemo = () => {
  // 只传 end（start 默认为 0）
  action('inRange - 只传 end')({
    'inRange(3, 5)': inRange(3, 5),
    'inRange(5, 5)': inRange(5, 5),
    'inRange(6, 5)': inRange(6, 5),
  })

  // start 和 end
  action('inRange - start 和 end')({
    'inRange(1, 1, 5)': inRange(1, 1, 5),
    'inRange(3, 1, 5)': inRange(3, 1, 5),
    'inRange(0, 1, 5)': inRange(0, 1, 5),
    'inRange(5, 1, 5)': inRange(5, 1, 5),
  })

  // start > end 时自动交换
  action('inRange - 自动交换 start/end')({
    'inRange(2, 5, 1)': inRange(2, 5, 1),
    'inRange(-3, -2, -6)': inRange(-3, -2, -6),
  })

  // 浮点数
  action('inRange - 浮点数')({
    'inRange(0.5, 5)': inRange(0.5, 5),
    'inRange(1.2, 1, 5)': inRange(1.2, 1, 5),
    'inRange(5.2, 5)': inRange(5.2, 5),
    'inRange(0.5, 1, 5)': inRange(0.5, 1, 5),
  })
}

export default basicDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"inrange",children:"inRange"}),`
`,n.jsx(e.p,{children:"检查数值是否在指定范围内。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"inRange"})," 检查数字是否在 [start, end) 范围内。如果只传两个参数，则范围为 [0, end)。如果 start > end，参数会自动交换。"]}),`
`,n.jsx(e.h2,{id:"范围检查",children:"范围检查"}),`
`,n.jsx(d,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"number"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"要检查的数字"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"start"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"范围起点（默认0）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"end"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"范围终点"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"boolean"})]}),`
`,n.jsx(e.li,{children:"描述：是否在范围内"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"inRange/index.ts"})," 导出 ",n.jsx(e.code,{children:"inRange"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 标准化参数（处理两参数和参数交换情况），检查 number >= start && number < end"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 参数重载处理"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": number + start + end → 标准化 → 范围检查 → 返回布尔值"]}),`
`]})]})}function j(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{j as default};
