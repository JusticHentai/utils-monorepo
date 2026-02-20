import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as d}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import addClipboard from '../../../packages/element-utils/src/addClipboard'

const basicDemo = async () => {
  const [res, err] = await addClipboard('Hello World')
  action('复制文本到剪贴板')({ success: res, error: err })
}

export default basicDemo
`;function i(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"addclipboard",children:"addClipboard"}),`
`,n.jsx(r.p,{children:"将文本复制到剪贴板的异步函数。"}),`
`,n.jsx(r.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(r.p,{children:["addClipboard 是一个剪贴板操作函数，核心作用是：",n.jsx(r.strong,{children:"将指定文本复制到系统剪贴板"}),"。"]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"navigator.clipboard.writeText()"}),"：现代浏览器剪贴板 API"]}),`
`,n.jsx(r.li,{children:"Promise：异步操作包装"}),`
`,n.jsxs(r.li,{children:["元组返回：",n.jsx(r.code,{children:"[success, error]"})," 形式便于错误处理"]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"复制链接：一键复制分享链接"}),`
`,n.jsx(r.li,{children:"复制代码：代码块的复制功能"}),`
`,n.jsx(r.li,{children:"复制文本：复制表格单元格、ID 等内容"}),`
`,n.jsx(r.li,{children:"邀请码：复制邀请码或优惠券"}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"注意事项"}),"："]}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"需要 HTTPS 或 localhost 环境"}),`
`,n.jsx(r.li,{children:"需要用户交互触发（点击事件等）"}),`
`,n.jsx(r.li,{children:"需要用户授权剪贴板权限"}),`
`]}),`
`,n.jsx(r.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(d,{language:"typescript",children:l}),`
`,n.jsx(r.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"text"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"要复制到剪贴板的文本内容"})]})})]}),`
`,n.jsx(r.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["类型：",n.jsx(r.code,{children:"Promise<[boolean, any]>"})]}),`
`,n.jsxs(r.li,{children:["描述：元组形式，",n.jsx(r.code,{children:"[success, error]"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["成功：",n.jsx(r.code,{children:"[true, undefined]"})]}),`
`,n.jsxs(r.li,{children:["失败：",n.jsx(r.code,{children:"[false, Error]"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(r.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(r.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"index.ts"})," - 唯一源文件，包含 addClipboard 函数实现"]}),`
`]}),`
`,n.jsx(r.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(r.ol,{children:[`
`,n.jsxs(r.li,{children:["调用 ",n.jsx(r.code,{children:"navigator.clipboard.writeText(text)"})]}),`
`,n.jsxs(r.li,{children:["成功则返回 ",n.jsx(r.code,{children:"[true, undefined]"})]}),`
`,n.jsxs(r.li,{children:["失败则捕获错误，返回 ",n.jsx(r.code,{children:"[false, error]"})]}),`
`]}),`
`,n.jsx(r.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:["使用 Clipboard API：",n.jsx(r.code,{children:"navigator.clipboard.writeText(text)"})]}),`
`,n.jsx(r.li,{children:"返回元组而非 reject，调用方无需 try/catch"}),`
`,n.jsx(r.li,{children:"Clipboard API 是异步的，返回 Promise"}),`
`]})]})}function a(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{a as default};
