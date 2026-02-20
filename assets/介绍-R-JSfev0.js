import{j as s}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as l}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import stubFalse from '../../../packages/js-utils/src/stubFalse'

const stubFalseDemo = () => {
  const result1 = stubFalse()
  const result2 = stubFalse()

  action('stubFalse 演示')({
    '返回值1': result1,
    '返回值2': result2,
    '两次返回是否同一引用': result1 === result2,
  })
}

export default stubFalseDemo
`,c=`import { action } from 'storybook/actions'
import stubFalse from '../../../packages/js-utils/src/stubFalse'

const edgeCaseDemo = () => {
  const r1 = stubFalse()
  const r2 = stubFalse()
  action('stubFalse - 边界情况')({
    '返回值': r1,
    '类型': typeof r1,
    '严格等于 false': r1 === false,
    '两次调用结果相等': r1 === r2,
  })
}

export default edgeCaseDemo
`;function r(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsx(n.h1,{id:"stubfalse",children:"stubFalse"}),`
`,s.jsx(n.p,{children:"返回 false 的函数"}),`
`,s.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,s.jsxs(n.p,{children:[s.jsx(n.code,{children:"stubFalse"})," 返回 false 的函数。"]}),`
`,s.jsxs(n.p,{children:[s.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsx(n.li,{children:"数据处理和转换"}),`
`,s.jsx(n.li,{children:"功能组合和增强"}),`
`,s.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,s.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,s.jsxs(n.p,{children:["点击按钮查看 ",s.jsx(n.code,{children:"stubFalse"})," 的基本使用效果。"]}),`
`,s.jsx(l,{language:"typescript",children:i}),`
`,s.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,s.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,s.jsx(l,{language:"typescript",children:c}),`
`,s.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"参数名"}),s.jsx("th",{children:"类型"}),s.jsx("th",{children:"描述"})]})}),s.jsx("tbody",{children:s.jsxs("tr",{children:[s.jsx("td",{children:"-"}),s.jsx("td",{children:"-"}),s.jsx("td",{children:"无参数"})]})})]}),`
`,s.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,s.jsxs(n.ul,{children:[`
`,s.jsxs(n.li,{children:["类型：",s.jsx(n.code,{children:"false"})]}),`
`,s.jsx(n.li,{children:"描述：返回 false"}),`
`]}),`
`,s.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,s.jsxs(n.ol,{children:[`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"文件职责"}),": ",s.jsx(n.code,{children:"stubFalse/index.ts"})," 导出 stubFalse 函数"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"核心流程"}),": 返回 false 的函数"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,s.jsxs(n.li,{children:[s.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(e={}){const{wrapper:n}={...t(),...e.components};return n?s.jsx(n,{...e,children:s.jsx(r,{...e})}):r(e)}export{u as default};
