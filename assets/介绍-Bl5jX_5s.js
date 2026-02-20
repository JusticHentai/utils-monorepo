import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import onHashChange from '../../../packages/element-utils/src/onHashChange'

const basicDemo = () => {
  const stop = onHashChange((e) => {
    action('hashchange 触发')({
      oldURL: e.oldURL,
      newURL: e.newURL,
    })
  })

  action('onHashChange')('已注册 hashchange 监听，请手动修改 URL hash 测试')

  // 模拟 hash 变化
  const originalHash = window.location.hash
  window.location.hash = '#demo-test-' + Date.now()

  setTimeout(() => {
    window.location.hash = originalHash
    stop()
    action('清理完成')('已移除 hashchange 监听')
  }, 3000)
}

export default basicDemo
`;function s(h){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onhashchange",children:"onHashChange"}),`
`,n.jsx(e.p,{children:"监听 URL hash 变化事件。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onHashChange"})," 封装了 ",n.jsx(e.code,{children:"window"})," 上的 ",n.jsx(e.code,{children:"hashchange"})," 事件监听。当 URL 的 hash 部分发生变化时触发回调，回调参数为 ",n.jsx(e.code,{children:"HashChangeEvent"}),"，包含 ",n.jsx(e.code,{children:"oldURL"})," 和 ",n.jsx(e.code,{children:"newURL"}),"。"]}),`
`,n.jsxs(e.p,{children:["基于 ",n.jsx(e.code,{children:"createEventListener"})," 封装，返回清理函数。常用于 SPA 中基于 hash 的路由变化监听。"]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(o,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(e: HashChangeEvent) => void"})}),n.jsx("td",{children:"hash 变化时的回调函数"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回 ",n.jsx(e.code,{children:"() => void"})," 清理函数。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),"：",n.jsx(e.code,{children:"index.ts"})," 封装 ",n.jsx(e.code,{children:"createEventListener(window, 'hashchange', callback)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),"：注册 hashchange 事件监听，hash 变化时触发回调"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：",n.jsx(e.code,{children:"HashChangeEvent"})," 提供 ",n.jsx(e.code,{children:"oldURL"})," 和 ",n.jsx(e.code,{children:"newURL"})," 用于对比变化"]}),`
`]})]})}function j(h={}){const{wrapper:e}={...c(),...h.components};return e?n.jsx(e,{...h,children:n.jsx(s,{...h})}):s(h)}export{j as default};
