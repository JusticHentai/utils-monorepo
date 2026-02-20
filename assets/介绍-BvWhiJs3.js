import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import secondsToHHMMSS from '../../../packages/js-utils/src/secondsToHHMMSS'

const normalDemo = () => {
  const res = secondsToHHMMSS(126)
  action('126 秒转换结果')(res) // [0, 0, 0, 2, 0, 6] 表示 00:02:06
}

export default normalDemo
`;function e(s){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"secondstohhmmss",children:"secondsToHHMMSS"}),`
`,n.jsx(o.p,{children:"secondsToHHMMSS 是一个用于将秒数转换为时分秒数字数组的函数。"}),`
`,n.jsx(o.h2,{id:"使用示例",children:"使用示例"}),`
`,n.jsx(c,{language:"typescript",children:i}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(o.h3,{id:"seconds",children:"seconds"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"number"})]}),`
`,n.jsx(o.li,{children:"描述：要转换的秒数"}),`
`]}),`
`,n.jsx(o.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:["类型：",n.jsx(o.code,{children:"number[]"})]}),`
`,n.jsx(o.li,{children:"描述：数字数组格式的时间 [时, 时, 分, 分, 秒, 秒]"}),`
`,n.jsx(o.li,{children:"示例：126秒 → [0, 0, 0, 2, 0, 6] 表示 00:02:06"}),`
`]})]})}function j(s={}){const{wrapper:o}={...r(),...s.components};return o?n.jsx(o,{...s,children:n.jsx(e,{...s})}):e(s)}export{j as default};
