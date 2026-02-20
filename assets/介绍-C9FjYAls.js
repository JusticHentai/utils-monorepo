import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import onPageResume from '../../../packages/element-utils/src/onPageResume'

const basicDemo = () => {
  const stop = onPageResume((e) => {
    action('页面恢复')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onPageResume')('已注册 resume 监听（页面从冻结状态恢复时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 resume 监听')
  }, 10000)
}

export default basicDemo
`;function c(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onpageresume",children:"onPageResume"}),`
`,e.jsx(n.p,{children:"监听页面 resume 事件（Page Lifecycle API）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onPageResume"})," 监听 ",e.jsx(n.code,{children:"document"})," 上的 ",e.jsx(n.code,{children:"resume"})," 事件，当页面从冻结状态恢复时触发。与 ",e.jsx(n.code,{children:"onPageFreeze"})," 对应，用于恢复冻结前暂停的操作。"]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(o,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(e: Event) => void"})}),e.jsx("td",{children:"页面从冻结恢复时的回调函数"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"() => void"})," 清理函数。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),"：",e.jsx(n.code,{children:"index.ts"})," 封装 ",e.jsx(n.code,{children:"createEventListener(document, 'resume', callback)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),"：",e.jsx(n.code,{children:"resume"})," 是 Page Lifecycle API 的一部分，与 ",e.jsx(n.code,{children:"freeze"})," 事件配对使用"]}),`
`]})]})}function m(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{m as default};
