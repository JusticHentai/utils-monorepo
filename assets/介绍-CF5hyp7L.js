import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import trim from '../../../packages/js-utils/src/trim'
import trimStart from '../../../packages/js-utils/src/trimStart'
import trimEnd from '../../../packages/js-utils/src/trimEnd'

const trimDemo = () => {
  action('trim - 默认空白')(trim('  hello  '))
  action('trim - 自定义字符')(trim('-_-hello-_-', '_-'))
  action('trimStart - 仅开头')(trimStart('  hello  '))
  action('trimStart - 自定义')(trimStart('-_-hello-_-', '_-'))
  action('trimEnd - 仅结尾')(trimEnd('  hello  '))
  action('trimEnd - 自定义')(trimEnd('-_-hello-_-', '_-'))
}

export default trimDemo
`;function t(i){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"trim",children:"trim"}),`
`,n.jsx(r.p,{children:"移除字符串两端的空白或指定字符。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:[n.jsx(r.code,{children:"trim"})," 移除字符串两端的空白字符或指定字符。",n.jsx(r.code,{children:"trimStart"})," 仅移除开头，",n.jsx(r.code,{children:"trimEnd"})," 仅移除结尾。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"用户输入清理"}),`
`,n.jsx(r.li,{children:"移除特定分隔符"}),`
`,n.jsx(r.li,{children:"文本预处理"}),`
`]}),`
`,n.jsx(r.h2,{id:"字符串修剪",children:"字符串修剪"}),`
`,n.jsxs(r.p,{children:["使用 ",n.jsx(r.code,{children:"trim"}),"、",n.jsx(r.code,{children:"trimStart"}),"、",n.jsx(r.code,{children:"trimEnd"})," 移除字符串两端的字符。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"str"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要修剪的字符串"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"chars"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"可选，要移除的字符集"})]})]})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"string"})]}),`
`,n.jsx(r.li,{children:"描述：修剪后的字符串"}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"文件职责"}),": ",n.jsx(r.code,{children:"index.ts"})," 提供 trim、trimStart、trimEnd"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"核心流程"}),": 无 chars 时使用原生 trim；有 chars 时构建正则匹配移除"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"关键技术点"}),": 自定义字符集转正则，分别处理开头和结尾"]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.strong,{children:"数据流向"}),": 字符串 + 字符集 → 正则匹配 → 移除匹配字符 → 返回结果"]}),`
`]})]})}function m(i={}){const{wrapper:r}={...s(),...i.components};return r?n.jsx(r,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
