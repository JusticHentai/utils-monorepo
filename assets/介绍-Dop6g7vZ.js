import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import findLastKey from '../../../packages/js-utils/src/findLastKey'

const findLastKeyDemo = () => {
  const users = { barney: { age: 36, active: true }, fred: { age: 40, active: false }, pebbles: { age: 1, active: true } }
  action('findLastKey 演示')({
    '最后一个 active 为 true 的 key': findLastKey(users, (o) => o.active),
  })
}

export default findLastKeyDemo
`,c=`import { action } from 'storybook/actions'
import findLastKey from '../../../packages/js-utils/src/findLastKey'

const edgeCaseDemo = () => {
  action('findLastKey - 边界情况')({
    '找到': findLastKey({ a: 1, b: 2, c: 2 }, v => v === 2), '未找到': findLastKey({ a: 1 }, v => v === 5)
  })
}

export default edgeCaseDemo
`;function d(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"findlastkey",children:"findLastKey"}),`
`,n.jsx(e.p,{children:"类似 findKey，但从后向前遍历对象属性"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"findLastKey"})," 类似 findKey，但从后向前遍历对象属性。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"数据处理和转换"}),`
`,n.jsx(e.li,{children:"功能组合和增强"}),`
`,n.jsx(e.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"findLastKey"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要搜索的对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"predicate"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"每次迭代调用的函数"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"unknown"})]}),`
`,n.jsx(e.li,{children:"描述：返回匹配的键名，否则返回 undefined"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"findLastKey/index.ts"})," 导出 findLastKey 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 类似 findKey，但从后向前遍历对象属性"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function f(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(d,{...s})}):d(s)}export{f as default};
