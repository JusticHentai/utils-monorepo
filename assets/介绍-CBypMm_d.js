import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import iteratee from '../../../packages/js-utils/src/iteratee'

const iterateeDemo = () => {
  const users = [{ user: 'barney', age: 36 }, { user: 'fred', age: 40 }]
  action('iteratee 演示')({
    '字符串路径': users.map(iteratee('user')),
    '对象匹配': users.filter(iteratee({ user: 'barney' })),
    '数组匹配': users.filter(iteratee(['user', 'fred'])),
  })
}

export default iterateeDemo
`,d=`import { action } from 'storybook/actions'
import iteratee from '../../../packages/js-utils/src/iteratee'

const edgeCaseDemo = () => {
  action('iteratee - 边界情况')({
    说明: '验证 iteratee 的边界情况',
    空值测试: (() => { try { return iteratee() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
`;function t(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"iteratee",children:"iteratee"}),`
`,e.jsx(n.p,{children:"创建一个函数，返回给定参数的迭代器"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"iteratee"})," 创建一个函数，返回给定参数的迭代器。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据处理和转换"}),`
`,e.jsx(n.li,{children:"功能组合和增强"}),`
`,e.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"iteratee"})," 的基本使用效果。"]}),`
`,e.jsx(s,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转换的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"((...args: unknown[])"})]}),`
`,e.jsx(n.li,{children:"描述：返回迭代器函数"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"iteratee/index.ts"})," 导出 iteratee 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 创建一个函数，返回给定参数的迭代器"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{u as default};
