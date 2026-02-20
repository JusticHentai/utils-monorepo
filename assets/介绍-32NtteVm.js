import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import stubArray from '../../../packages/js-utils/src/stubArray'

const stubArrayDemo = () => {
  const result1 = stubArray()
  const result2 = stubArray()

  action('stubArray 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubArrayDemo
`,l=`import { action } from 'storybook/actions'
import stubArray from '../../../packages/js-utils/src/stubArray'

const edgeCaseDemo = () => {
  const r1 = stubArray()
  const r2 = stubArray()
  action('stubArray - 边界情况')({
    '返回值': r1,
    '是数组': Array.isArray(r1),
    '长度为0': r1.length === 0,
    '两次返回不同引用': r1 !== r2,
  })
}

export default edgeCaseDemo
`;function t(s){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"stubarray",children:"stubArray"}),`
`,n.jsx(r.p,{children:"返回空数组的函数"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"stubArray"})," 返回空数组的函数。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"数据处理和转换"}),`
`,n.jsx(r.li,{children:"功能组合和增强"}),`
`,n.jsx(r.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(r.p,{children:["点击按钮查看 ",n.jsx(r.code,{children:"stubArray"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(r.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:l}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"-"}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"无参数"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"unknown[]"})]}),`
`,n.jsx(r.li,{children:"描述：返回新的空数组"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"stubArray/index.ts"})," 导出 stubArray 函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 返回空数组的函数"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(s={}){const{wrapper:r}={...i(),...s.components};return r?n.jsx(r,{...s,children:n.jsx(t,{...s})}):t(s)}export{u as default};
