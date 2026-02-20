import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import escapeRegExp from '../../../packages/js-utils/src/escapeRegExp'

const escapeRegExpDemo = () => {
  action('escapeRegExp 演示')({
    '转义 "[lodash](https://lodash.com/)"': escapeRegExp('[lodash](https://lodash.com/)'),
  })
}

export default escapeRegExpDemo
`,d=`import { action } from 'storybook/actions'
import escapeRegExp from '../../../packages/js-utils/src/escapeRegExp'

const edgeCaseDemo = () => {
  action('escapeRegExp - 边界情况')({
    '特殊字符': escapeRegExp('[lodash](https://lodash.com/)'), '无特殊字符': escapeRegExp('hello'), '空字符串': escapeRegExp('')
  })
}

export default edgeCaseDemo
`;function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"escaperegexp",children:"escapeRegExp"}),`
`,e.jsx(n.p,{children:"转义 RegExp 特殊字符"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"escapeRegExp"})," 转义 RegExp 特殊字符。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"常用场景"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"数据处理和转换"}),`
`,e.jsx(n.li,{children:"功能组合和增强"}),`
`,e.jsx(n.li,{children:"简化常见操作"}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["点击按钮查看 ",e.jsx(n.code,{children:"escapeRegExp"})," 的基本使用效果。"]}),`
`,e.jsx(c,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,e.jsx(n.p,{children:"验证各种边界条件下的行为表现。"}),`
`,e.jsx(c,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"string"}),e.jsx("td",{children:e.jsx("code",{children:"unknown"})}),e.jsx("td",{children:"要转义的字符串"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"string"})]}),`
`,e.jsx(n.li,{children:"描述：返回转义后的字符串"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"escapeRegExp/index.ts"})," 导出 escapeRegExp 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 转义 RegExp 特殊字符"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 使用正则表达式匹配"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
