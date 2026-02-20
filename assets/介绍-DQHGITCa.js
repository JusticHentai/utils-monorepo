import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import before from '../../../packages/js-utils/src/before'

const beforeDemo = () => {
  let count = 0
  const limited = before(3, () => ++count)
  limited(); limited(); limited(); limited()
  action('before 演示')({
    '限制 3 次调用，实际调用 4 次': count,
    说明: '只有前 2 次实际执行了函数',
  })
}

export default beforeDemo
`,c=`import { action } from 'storybook/actions'
import before from '../../../packages/js-utils/src/before'

const edgeCaseDemo = () => {
  let count = 0
  const limited = before(3, () => ++count)
  limited(); limited(); limited(); limited()
  action('before - 边界情况')({
    '限制3次调4次': count,
    说明: '只有前2次执行',
  })
}

export default edgeCaseDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"before",children:"before"}),`
`,n.jsx(e.p,{children:"创建一个函数，最多只能调用 n 次"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"before"})," 创建一个函数，最多只能调用 n 次。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据处理和转换"}),`
`,n.jsx(e.li,{children:"功能组合和增强"}),`
`,n.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"before"})," 的基本使用效果。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"n"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"在限制前允许调用的次数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"func"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要限制的函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"unknown"})]}),`
`,n.jsx(e.li,{children:"描述：返回新的限制函数"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"before/index.ts"})," 导出 before 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 创建一个函数，最多只能调用 n 次"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function f(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{f as default};
