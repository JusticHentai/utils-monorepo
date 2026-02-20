import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import defaultTo from '../../../packages/js-utils/src/defaultTo'

const basicDemo = () => {
  // 基础用法：null/undefined/NaN 返回默认值
  action('defaultTo - nullish 值返回默认值')({
    'defaultTo(1, 10)': defaultTo(1, 10),
    'defaultTo(null, 10)': defaultTo(null, 10),
    'defaultTo(undefined, 10)': defaultTo(undefined, 10),
    'defaultTo(NaN, 10)': defaultTo(NaN, 10),
  })

  // 关键：与 || 运算符的区别 — falsey 值 0, false, '' 不会被替换
  action('defaultTo - falsey 值保留（与 || 的区别）')({
    'defaultTo(0, 10)': defaultTo(0, 10),
    'defaultTo(false, true)': defaultTo(false, true),
    'defaultTo(\\'\\', \\'default\\')': defaultTo('', 'default'),
  })
}

export default basicDemo
`;function l(d){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"defaultto",children:"defaultTo"}),`
`,e.jsx(n.p,{children:"检查 value 是否为 null/undefined/NaN，如果是则返回默认值。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"defaultTo"})," 提供安全的默认值回退机制。当值为 ",e.jsx(n.code,{children:"null"}),"、",e.jsx(n.code,{children:"undefined"})," 或 ",e.jsx(n.code,{children:"NaN"})," 时返回指定的默认值。相比 ",e.jsx(n.code,{children:"||"})," 运算符，它不会将 ",e.jsx(n.code,{children:"0"})," 或 ",e.jsx(n.code,{children:"''"})," 视为假值。"]}),`
`,e.jsx(n.h2,{id:"提供默认值",children:"提供默认值"}),`
`,e.jsx(i,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"value"}),e.jsx("td",{children:e.jsx("code",{children:"T | null | undefined"})}),e.jsx("td",{children:"要检查的值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"defaultValue"}),e.jsx("td",{children:e.jsx("code",{children:"T"})}),e.jsx("td",{children:"默认值"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"T"})]}),`
`,e.jsx(n.li,{children:"描述：原值或默认值"}),`
`]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),": ",e.jsx(n.code,{children:"defaultTo/index.ts"})," 导出 ",e.jsx(n.code,{children:"defaultTo"})," 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),": 检查 value 是否为 null、undefined 或 NaN，是则返回 defaultValue"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),": ",e.jsx(n.code,{children:"Number.isNaN"})," 判断 NaN，",e.jsx(n.code,{children:"== null"})," 同时检查 null 和 undefined"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),": value → 检查是否为空值/NaN → 返回 value 或 defaultValue"]}),`
`]})]})}function x(d={}){const{wrapper:n}={...s(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(l,{...d})}):l(d)}export{x as default};
