import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isElement from '../../../packages/js-utils/src/isElement'

const isElementDemo = () => {
  action('isElement 演示')({
    'document.body': isElement(document.body),
    'document.createElement("div")': isElement(document.createElement('div')),
    '"<div>"': isElement('<div>'),
    '{}': isElement({}),
  })
}

export default isElementDemo
`,d=`import { action } from 'storybook/actions'
import isElement from '../../../packages/js-utils/src/isElement'

const edgeCaseDemo = () => {
  const results = {
    'document.body': isElement(document.body),
    'div 元素': isElement(document.createElement('div')),
    '普通对象': isElement({ nodeType: 1 }),
    'null': isElement(null),
  }

  action('isElement - 边界情况')(results)
}

export default edgeCaseDemo
`;function t(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"iselement",children:"isElement"}),`
`,e.jsx(n.p,{children:"检查 value 是否是 DOM 元素"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isElement"})," 检查 value 是否是 DOM 元素。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,e.jsx(n.li,{children:"数据验证和过滤"}),`
`,e.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"isElement"})," 的基本使用效果。"]}),`
`,e.jsx(i,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(i,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要检查的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"value is Element"})]}),`
`,e.jsx(n.li,{children:"描述：如果是 DOM 元素，返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"isElement/index.ts"})," 导出 isElement 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是 DOM 元素"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function a(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{a as default};
