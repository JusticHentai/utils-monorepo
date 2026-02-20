import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import stubString from '../../../packages/js-utils/src/stubString'

const stubStringDemo = () => {
  const result1 = stubString()
  const result2 = stubString()

  action('stubString 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubStringDemo
`,l=`import { action } from 'storybook/actions'
import stubString from '../../../packages/js-utils/src/stubString'

const edgeCaseDemo = () => {
  const r1 = stubString()
  action('stubString - 边界情况')({
    '返回值': JSON.stringify(r1),
    '类型': typeof r1,
    '长度为0': r1.length === 0,
    '严格等于空字符串': r1 === '',
  })
}

export default edgeCaseDemo
`;function i(r){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...e(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"stubstring",children:"stubString"}),`
`,n.jsx(s.p,{children:"返回空字符串的函数"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"stubString"})," 返回空字符串的函数。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"数据处理和转换"}),`
`,n.jsx(s.li,{children:"功能组合和增强"}),`
`,n.jsx(s.li,{children:"简化常见操作"}),`
`]}),`
`,n.jsx(s.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(s.p,{children:["点击按钮查看 ",n.jsx(s.code,{children:"stubString"})," 的基本使用效果。"]}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(s.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"-"}),n.jsx("td",{children:"-"}),n.jsx("td",{children:"无参数"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"''"})]}),`
`,n.jsx(s.li,{children:"描述：返回空字符串"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"stubString/index.ts"})," 导出 stubString 函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 返回空字符串的函数"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(r={}){const{wrapper:s}={...e(),...r.components};return s?n.jsx(s,{...r,children:n.jsx(i,{...r})}):i(r)}export{g as default};
