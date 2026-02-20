import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const x=`import { action } from 'storybook/actions'
import isRegExp from '../../../packages/js-utils/src/isRegExp'

const isRegExpDemo = () => {
  action('isRegExp 演示')({
    '/abc/': isRegExp(/abc/),
    'new RegExp("abc")': isRegExp(new RegExp('abc')),
    '"abc"': isRegExp('abc'),
    '{}': isRegExp({}),
  })
}

export default isRegExpDemo
`,l=`import { action } from 'storybook/actions'
import isRegExp from '../../../packages/js-utils/src/isRegExp'

const edgeCaseDemo = () => {
  const results = {
    '/abc/': isRegExp(/abc/),
    'new RegExp': isRegExp(new RegExp('abc')),
    '字符串/abc/': isRegExp('/abc/'),
    'null': isRegExp(null),
  }

  action('isRegExp - 边界情况')(results)
}

export default edgeCaseDemo
`;function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isregexp",children:"isRegExp"}),`
`,e.jsx(n.p,{children:"检查 value 是否是 RegExp 对象"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"isRegExp"})," 检查 value 是否是 RegExp 对象。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"条件判断前的类型检查"}),`
`,e.jsx(n.li,{children:"数据验证和过滤"}),`
`,e.jsx(n.li,{children:"类型安全的分支处理"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"isRegExp"})," 的基本使用效果。"]}),`
`,e.jsx(i,{language:"typescript",children:x}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(i,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要检查的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"value is RegExp"})]}),`
`,e.jsx(n.li,{children:"描述：如果是 RegExp，返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"isRegExp/index.ts"})," 导出 isRegExp 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否是 RegExp 对象"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用 Object.prototype.toString 进行类型判断"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function g(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{g as default};
