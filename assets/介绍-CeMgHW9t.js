import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isSafeInteger from '../../../packages/js-utils/src/isSafeInteger'

const isSafeIntegerDemo = () => {
  action('isSafeInteger 演示')({
    '3': isSafeInteger(3),
    'Number.MAX_SAFE_INTEGER': isSafeInteger(Number.MAX_SAFE_INTEGER),
    'Number.MAX_SAFE_INTEGER + 1': isSafeInteger(Number.MAX_SAFE_INTEGER + 1),
    '3.1': isSafeInteger(3.1),
    'Infinity': isSafeInteger(Infinity),
  })
}

export default isSafeIntegerDemo
`,l=`import { action } from 'storybook/actions'
import isSafeInteger from '../../../packages/js-utils/src/isSafeInteger'

const edgeCaseDemo = () => {
  const results = {
    '3': isSafeInteger(3),
    'MAX_SAFE_INTEGER': isSafeInteger(Number.MAX_SAFE_INTEGER),
    'MAX_SAFE_INTEGER+1': isSafeInteger(Number.MAX_SAFE_INTEGER + 1),
    '3.1': isSafeInteger(3.1),
    'Infinity': isSafeInteger(Infinity),
  }

  action('isSafeInteger - 边界情况')(results)
}

export default edgeCaseDemo
`;function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"issafeinteger",children:"isSafeInteger"}),`
`,e.jsx(n.p,{children:"检查 value 是否是安全整数"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isSafeInteger"})," 检查 value 是否是安全整数。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,e.jsx(n.li,{children:"数据验证和过滤"}),`
`,e.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"isSafeInteger"})," 的基本使用效果。"]}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(r,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要检查的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"value is number"})]}),`
`,e.jsx(n.li,{children:"描述：如果是安全整数，返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"isSafeInteger/index.ts"})," 导出 isSafeInteger 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是安全整数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function f(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{f as default};
