import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as e}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import isUrl from '../../../packages/element-utils/src/isUrl'

const isUrlDemo = () => {
  action('isUrl - https')(isUrl('https://example.com'))
  action('isUrl - http')(isUrl('http://example.com/path'))
  action('isUrl - 无协议')(isUrl('example.com'))
  action('isUrl - 空字符串')(isUrl(''))
  action('isUrl - 非URL')(isUrl('not a url'))
}

export default isUrlDemo
`;function r(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s.h1,{id:"isurl",children:"isUrl"}),`
`,n.jsx(s.p,{children:"检查字符串是否为合法的 URL。"}),`
`,n.jsx(s.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.code,{children:"isUrl"})," 检查给定字符串是否为合法的 URL 格式。"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"表单 URL 输入验证"}),`
`,n.jsx(s.li,{children:"链接合法性检查"}),`
`,n.jsx(s.li,{children:"数据清洗"}),`
`]}),`
`,n.jsx(s.h2,{id:"url-格式检测",children:"URL 格式检测"}),`
`,n.jsxs(s.p,{children:["使用 ",n.jsx(s.code,{children:"isUrl"})," 检查各种字符串是否为合法 URL。"]}),`
`,n.jsx(e,{language:"typescript",children:c}),`
`,n.jsx(s.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要检查的字符串"})]})})]}),`
`,n.jsx(s.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:["类型：",n.jsx(s.code,{children:"boolean"})]}),`
`,n.jsx(s.li,{children:"描述：是否为合法 URL"}),`
`]}),`
`,n.jsx(s.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"文件职责"}),": ",n.jsx(s.code,{children:"index.ts"})," 实现 URL 格式验证"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"核心流程"}),": 使用正则表达式或 URL 构造函数验证格式"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"关键技术点"}),": URL 格式正则匹配"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"数据流向"}),": 字符串 → 格式验证 → 返回布尔值"]}),`
`]})]})}function a(i={}){const{wrapper:s}={...l(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(r,{...i})}):r(i)}export{a as default};
