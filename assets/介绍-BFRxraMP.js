import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import isUndefined from '../../../packages/js-utils/src/isUndefined'

const isUndefinedDemo = () => {
  action('isUndefined 演示')({
    'undefined': isUndefined(undefined),
    'void 0': isUndefined(void 0),
    'null': isUndefined(null),
    '0': isUndefined(0),
    '""': isUndefined(''),
  })
}

export default isUndefinedDemo
`,c=`import { action } from 'storybook/actions'
import isUndefined from '../../../packages/js-utils/src/isUndefined'

const edgeCaseDemo = () => {
  const results = {
    'undefined': isUndefined(undefined),
    'void 0': isUndefined(void 0),
    'null': isUndefined(null),
    '0': isUndefined(0),
    '""': isUndefined(''),
  }

  action('isUndefined - 边界情况')(results)
}

export default edgeCaseDemo
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isundefined",children:"isUndefined"}),`
`,n.jsx(e.p,{children:"检查 value 是否是 undefined"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isUndefined"})," 检查 value 是否是 undefined。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(e.li,{children:"数据验证和过滤"}),`
`,n.jsx(e.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"isUndefined"})," 的基本使用效果。"]}),`
`,n.jsx(d,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(d,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"value is undefined"})]}),`
`,n.jsx(e.li,{children:"描述：如果是 undefined，返回 true"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"isUndefined/index.ts"})," 导出 isUndefined 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 检查 value 是否是 undefined"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{u as default};
