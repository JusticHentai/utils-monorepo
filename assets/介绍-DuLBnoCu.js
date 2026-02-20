import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import toSafeInteger from '../../../packages/js-utils/src/toSafeInteger'

const toSafeIntegerDemo = () => {
  action('toSafeInteger 演示')({
    '3.2': toSafeInteger(3.2),
    'Number.MIN_VALUE': toSafeInteger(Number.MIN_VALUE),
    'Infinity': toSafeInteger(Infinity),
    '-Infinity': toSafeInteger(-Infinity),
    '"3.2"': toSafeInteger('3.2'),
  })
}

export default toSafeIntegerDemo
`,c=`import { action } from 'storybook/actions'
import toSafeInteger from '../../../packages/js-utils/src/toSafeInteger'

const edgeCaseDemo = () => {
  action('toSafeInteger - 边界情况')({
    '3.2': toSafeInteger(3.2), 'Infinity': toSafeInteger(Infinity), '-Infinity': toSafeInteger(-Infinity), '"3.2"': toSafeInteger('3.2')
  })
}

export default edgeCaseDemo
`;function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"tosafeinteger",children:"toSafeInteger"}),`
`,e.jsx(n.p,{children:"将 value 转换为安全整数"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"toSafeInteger"})," 将 value 转换为安全整数。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据类型标准化"}),`
`,e.jsx(n.li,{children:"用户输入处理"}),`
`,e.jsx(n.li,{children:"跨模块数据传递前的格式统一"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"toSafeInteger"})," 的基本使用效果。"]}),`
`,e.jsx(r,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(r,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转换的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"描述：返回转换后的安全整数"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"toSafeInteger/index.ts"})," 导出 toSafeInteger 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 将 value 转换为安全整数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
