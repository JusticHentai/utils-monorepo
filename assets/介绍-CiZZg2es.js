import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import onPageFreeze from '../../../packages/element-utils/src/onPageFreeze'

const basicDemo = () => {
  const stop = onPageFreeze((e) => {
    action('页面冻结')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onPageFreeze')('已注册 freeze 监听（切换标签页或最小化窗口可能触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 freeze 监听')
  }, 10000)
}

export default basicDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onpagefreeze",children:"onPageFreeze"}),`
`,e.jsx(n.p,{children:"监听页面 freeze 事件（Page Lifecycle API）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onPageFreeze"})," 监听 ",e.jsx(n.code,{children:"document"})," 上的 ",e.jsx(n.code,{children:"freeze"})," 事件，该事件属于 Page Lifecycle API，当浏览器决定冻结页面（如长时间后台标签页）时触发。冻结的页面不会执行定时器和回调，是浏览器节省资源的一种机制。"]}),`
`,e.jsx(n.p,{children:"常用于在页面被冻结前保存状态或清理资源。"}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(e: Event) => void"})}),e.jsx("td",{children:"页面冻结时的回调函数"})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"() => void"})," 清理函数。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),"：",e.jsx(n.code,{children:"index.ts"})," 封装 ",e.jsx(n.code,{children:"createEventListener(document, 'freeze', callback)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),"：",e.jsx(n.code,{children:"freeze"})," 事件是 Page Lifecycle API 的一部分，仅在支持该 API 的浏览器中可用（主要是 Chrome）"]}),`
`]})]})}function j(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{j as default};
