import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import isNull from '../../../packages/js-utils/src/isNull'

const isNullDemo = () => {
  action('isNull 演示')({
    'null': isNull(null),
    'undefined': isNull(undefined),
    '0': isNull(0),
    '""': isNull(''),
    'false': isNull(false),
  })
}

export default isNullDemo
`,c=`import { action } from 'storybook/actions'
import isNull from '../../../packages/js-utils/src/isNull'

const edgeCaseDemo = () => {
  const results = {
    'null': isNull(null),
    'undefined': isNull(undefined),
    '0': isNull(0),
    '空字符串': isNull(''),
  }

  action('isNull - 边界情况')(results)
}

export default edgeCaseDemo
`;function i(s){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"isnull",children:"isNull"}),`
`,n.jsx(l.p,{children:"检查 value 是否是 null"}),`
`,n.jsx(l.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(l.p,{children:[n.jsx(l.code,{children:"isNull"})," 检查 value 是否是 null。"]}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(l.li,{children:"数据验证和过滤"}),`
`,n.jsx(l.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(l.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(l.p,{children:["点击按钮查看 ",n.jsx(l.code,{children:"isNull"})," 的基本使用效果。"]}),`
`,n.jsx(e,{language:"typescript",children:d}),`
`,n.jsx(l.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(l.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(l.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(l.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:["类型：",n.jsx(l.code,{children:"value is null"})]}),`
`,n.jsx(l.li,{children:"描述：如果是 null，返回 true"}),`
`]}),`
`,n.jsx(l.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"文件职责"}),": ",n.jsx(l.code,{children:"isNull/index.ts"})," 导出 isNull 函数"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"核心流程"}),": 检查 value 是否是 null"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"关键技术点"}),": 直接计算并返回结果"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(s={}){const{wrapper:l}={...r(),...s.components};return l?n.jsx(l,{...s,children:n.jsx(i,{...s})}):i(s)}export{a as default};
