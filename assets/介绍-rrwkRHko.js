import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isObjectLike from '../../../packages/js-utils/src/isObjectLike'

const isObjectLikeDemo = () => {
  action('isObjectLike 演示')({
    '{}': isObjectLike({}),
    '[1, 2, 3]': isObjectLike([1, 2, 3]),
    'null': isObjectLike(null),
    '函数': isObjectLike(() => {}),
    '"string"': isObjectLike('string'),
  })
}

export default isObjectLikeDemo
`,l=`import { action } from 'storybook/actions'
import isObjectLike from '../../../packages/js-utils/src/isObjectLike'

const edgeCaseDemo = () => {
  const results = {
    '{}': isObjectLike({}),
    '[]': isObjectLike([]),
    '函数': isObjectLike(() => {}),
    'null': isObjectLike(null),
    '1': isObjectLike(1),
  }

  action('isObjectLike - 边界情况')(results)
}

export default edgeCaseDemo
`;function c(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isobjectlike",children:"isObjectLike"}),`
`,e.jsx(n.p,{children:"检查 value 是否是类对象"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isObjectLike"})," 检查 value 是否是类对象。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,e.jsx(n.li,{children:"数据验证和过滤"}),`
`,e.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"isObjectLike"})," 的基本使用效果。"]}),`
`,e.jsx(s,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要检查的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"value is object"})]}),`
`,e.jsx(n.li,{children:"描述：如果是类对象，返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"isObjectLike/index.ts"})," 导出 isObjectLike 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是类对象"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 typeof 运算符进行类型检查"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{u as default};
