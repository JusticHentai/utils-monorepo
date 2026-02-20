import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import parseTime from '../../../packages/js-utils/src/parseTime'

const normalDemo = () => {
  const now = Date.now()
  const result = parseTime(now)

  action('解析当前时间')(result)
}

export default normalDemo
`;function d(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"parsetime",children:"parseTime"}),`
`,e.jsx(n.p,{children:"parseTime 是一个用于解析时间戳的函数，将时间戳解析为年、月、日、时、分、秒各个时间组成部分。"}),`
`,e.jsx(n.h2,{id:"使用示例",children:"使用示例"}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"time",children:"time"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["类型：",e.jsx(n.code,{children:"number"})]}),`
`,e.jsx(n.li,{children:"描述：时间戳（毫秒级）"}),`
`]}),`
`,e.jsx(n.h2,{id:"返回值-parsetimeresult",children:"返回值 ParseTimeResult"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"time"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"原始时间戳"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"year"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"年"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"month"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"月（1-12）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"day"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"日（1-31）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"hour"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"小时（0-23）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"minutes"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"分钟（0-59）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"second"})}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"秒（0-59）"})]})]})]})]})}function m(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{m as default};
