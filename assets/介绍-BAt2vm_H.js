import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import defaultsDeep from '../../../packages/js-utils/src/defaultsDeep'

const defaultsDeepDemo = () => {
  action('defaultsDeep 演示')({
    '深层默认值': defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }),
  })
}

export default defaultsDeepDemo
`,i=`import { action } from 'storybook/actions'
import defaultsDeep from '../../../packages/js-utils/src/defaultsDeep'

const edgeCaseDemo = () => {
  action('defaultsDeep - 边界情况')({
    '深层默认': defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }), '空对象': defaultsDeep({}, { a: 1 })
  })
}

export default edgeCaseDemo
`;function l(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"defaultsdeep",children:"defaultsDeep"}),`
`,e.jsx(n.p,{children:"类似 defaults，但会递归合并对象属性"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"defaultsDeep"})," 类似 defaults，但会递归合并对象属性。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据处理和转换"}),`
`,e.jsx(n.li,{children:"功能组合和增强"}),`
`,e.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"defaultsDeep"})," 的基本使用效果。"]}),`
`,e.jsx(d,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(d,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"object"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"目标对象"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"sources"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"来源对象"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"unknown"})]}),`
`,e.jsx(n.li,{children:"描述：返回修改后的 object"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"defaultsDeep/index.ts"})," 导出 defaultsDeep 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 类似 defaults，但会递归合并对象属性"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{p as default};
