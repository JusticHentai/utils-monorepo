import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import assignWith from '../../../packages/js-utils/src/assignWith'

const assignWithDemo = () => {
  action('assignWith 演示')({
    '自定义分配': assignWith(
      { a: 1, b: undefined },
      { a: 2, b: 3 },
      (objVal, srcVal) => objVal === undefined ? srcVal : objVal
    ),
  })
}

export default assignWithDemo
`,t=`import { action } from 'storybook/actions'
import assignWith from '../../../packages/js-utils/src/assignWith'

const edgeCaseDemo = () => {
  action('assignWith - 边界情况')({
    '自定义': assignWith({ a: 1 }, { a: 2, b: 3 }, (objVal, srcVal) => objVal !== undefined ? objVal : srcVal), '空对象': assignWith({}, {}, (o,s) => s)
  })
}

export default edgeCaseDemo
`;function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"assignwith",children:"assignWith"}),`
`,n.jsx(s.p,{children:"类似于 assign，但可以自定义分配逻辑"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"assignWith"})," 类似于 assign，但可以自定义分配逻辑。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"assignWith"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:t}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"object"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"目标对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"source"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"来源对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"customizer"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"自定义分配函数"})]})]})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"unknown"})]}),`
`,n.jsx(s.li,{children:"描述：返回目标对象"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"assignWith/index.ts"})," 导出 assignWith 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 类似于 assign，但可以自定义分配逻辑"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 使用循环遍历"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(i={}){const{wrapper:s}={...d(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{g as default};
