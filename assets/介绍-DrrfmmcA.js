import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import unary from '../../../packages/js-utils/src/unary'

const unaryDemo = () => {
  action('unary 演示')({
    'parseInt 映射': ['6', '8', '10'].map(unary(parseInt)),
    说明: '限制函数只接受一个参数，避免 parseInt 的 radix 问题',
  })
}

export default unaryDemo
`,o=`import { action } from 'storybook/actions'
import unary from '../../../packages/js-utils/src/unary'

const edgeCaseDemo = () => {
  const nums = ['6', '8', '10'].map(unary(parseInt))
  action('unary - 边界情况')({
    '限制参数': nums,
    说明: 'parseInt 只接收一个参数，避免 radix 影响',
  })
}

export default edgeCaseDemo
`;function i(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"unary",children:"unary"}),`
`,n.jsx(r.p,{children:"创建一个最多接受一个参数的函数，忽略多余的参数"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"unary"})," 创建一个最多接受一个参数的函数，忽略多余的参数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"数据处理和转换"}),`
`,n.jsx(r.li,{children:"功能组合和增强"}),`
`,n.jsx(r.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"unary"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:o}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要限制参数的函数"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"unknown"})]}),`
`,n.jsx(r.li,{children:"描述：返回新的限制函数"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"unary/index.ts"})," 导出 unary 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 创建一个最多接受一个参数的函数，忽略多余的参数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(s={}){const{wrapper:r}={...c(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(i,{...s})}):i(s)}export{u as default};
