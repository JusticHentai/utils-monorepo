import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import isBoolean from '../../../packages/js-utils/src/isBoolean'

const isBooleanDemo = () => {
  action('isBoolean 演示')({
    'true': isBoolean(true),
    'false': isBoolean(false),
    '0': isBoolean(0),
    'null': isBoolean(null),
    '"true"': isBoolean('true'),
  })
}

export default isBooleanDemo
`,t=`import { action } from 'storybook/actions'
import isBoolean from '../../../packages/js-utils/src/isBoolean'

const edgeCaseDemo = () => {
  const results = {
    'true': isBoolean(true),
    'false': isBoolean(false),
    'Boolean(false)': isBoolean(Boolean(false)),
    '0': isBoolean(0),
    'null': isBoolean(null),
    '"true"字符串': isBoolean('true'),
  }

  action('isBoolean - 边界情况')(results)
}

export default edgeCaseDemo
`;function l(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"isboolean",children:"isBoolean"}),`
`,n.jsx(e.p,{children:"检查 value 是否是布尔值"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isBoolean"})," 检查 value 是否是布尔值。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"条件判断前的类型检查"}),`
`,n.jsx(e.li,{children:"数据验证和过滤"}),`
`,n.jsx(e.li,{children:"类型安全的分支处理"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsxs(e.p,{children:["点击按钮查看 ",n.jsx(e.code,{children:"isBoolean"})," 的基本使用效果。"]}),`
`,n.jsx(o,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"边界情况验证",children:"边界情况验证"}),`
`,n.jsx(e.p,{children:"验证各种边界条件下的行为表现。"}),`
`,n.jsx(o,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"unknown"})}),n.jsx("td",{children:"要检查的值"})]})})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["类型：",n.jsx(e.code,{children:"value is boolean"})]}),`
`,n.jsx(e.li,{children:"描述：如果是布尔值，返回 true"}),`
`]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),": ",n.jsx(e.code,{children:"isBoolean/index.ts"})," 导出 isBoolean 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),": 检查 value 是否是布尔值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),": 使用 Object.prototype.toString 进行类型判断"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数据流向"}),": 接收参数 → 处理逻辑 → 返回结果"]}),`
`]})]})}function u(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(l,{...s})}):l(s)}export{u as default};
