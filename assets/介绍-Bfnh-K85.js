import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import isNumber from '../../../packages/js-utils/src/isNumber'

const numberDemo = () => {
  // 数字返回 true
  action('isNumber - 数字类型')({
    '3': isNumber(3),
    'Number.MIN_VALUE': isNumber(Number.MIN_VALUE),
    'Infinity': isNumber(Infinity),
  })

  // NaN 被排除（此实现与 lodash 不同）
  action('isNumber - NaN 被排除')({
    'NaN': isNumber(NaN),
    说明: '此实现排除 NaN，lodash 的 isNumber(NaN) 返回 true',
  })

  // 非数字返回 false
  action('isNumber - 非数字类型')({
    '"3"': isNumber('3'),
    'null': isNumber(null),
    'undefined': isNumber(undefined),
    '{}': isNumber({}),
  })
}

export default numberDemo
`;function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"isnumber",children:"isNumber"}),`
`,e.jsx(n.p,{children:"判断值是否为数字（排除 NaN）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"Object.prototype.toString"})," 检测值是否为 Number 类型，并排除 NaN。注意：此实现与 lodash 不同，lodash 的 ",e.jsx(n.code,{children:"isNumber(NaN)"})," 返回 ",e.jsx(n.code,{children:"true"}),"。"]}),`
`,e.jsx(n.h2,{id:"isnumber---类型检测",children:"isNumber - 类型检测"}),`
`,e.jsx(o,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"obj"}),e.jsx("td",{children:e.jsx("code",{children:"any"})}),e.jsx("td",{children:"要检测的值"})]})})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"描述：如果是数字（不含 NaN）返回 true"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"isNumber/index.ts"})," 导出 isNumber"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": toString 标签检查 + NaN 排除（",e.jsx(n.code,{children:"obj === obj"}),"）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": NaN 是唯一不等于自身的值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": value → toString → NaN check → 返回布尔值"]}),`
`]})]})}function j(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{j as default};
