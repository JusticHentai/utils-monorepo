import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const h=`import { action } from 'storybook/actions'
import isLength from '../../../packages/js-utils/src/isLength'

const isLengthDemo = () => {
  action('isLength 演示')({
    '3': isLength(3),
    '0': isLength(0),
    '-1': isLength(-1),
    'Number.MAX_SAFE_INTEGER': isLength(Number.MAX_SAFE_INTEGER),
    'Infinity': isLength(Infinity),
  })
}

export default isLengthDemo
`,l=`import { action } from 'storybook/actions'
import isLength from '../../../packages/js-utils/src/isLength'

const edgeCaseDemo = () => {
  const results = {
    '3': isLength(3),
    '0': isLength(0),
    '-1': isLength(-1),
    '1.5': isLength(1.5),
    'Infinity': isLength(Infinity),
    'MAX_SAFE_INTEGER': isLength(Number.MAX_SAFE_INTEGER),
  }

  action('isLength - 边界情况')(results)
}

export default edgeCaseDemo
`;function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"islength",children:"isLength"}),`
`,n.jsx(e.p,{children:"检查 value 是否是有效的类数组长度"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isLength"})," 检查 value 是否是有效的类数组长度。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(e.li,{children:"数据验证和过滤"}),`
`,n.jsx(e.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"isLength"})," 的基本使用效果。"]}),`
`,n.jsx(i,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"value is number"})]}),`
`,n.jsx(e.li,{children:"描述：如果是有效长度，返回 true"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"isLength/index.ts"})," 导出 isLength 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 检查 value 是否是有效的类数组长度"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{a as default};
