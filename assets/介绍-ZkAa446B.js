import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import onPopState from '../../../packages/element-utils/src/onPopState'

const basicDemo = () => {
  const stop = onPopState((e) => {
    action('popstate 触发')({
      state: e.state,
      url: window.location.href,
    })
  })

  action('onPopState')('已注册 popstate 监听（浏览器前进/后退时触发）')

  // 模拟 pushState 后 back
  history.pushState({ demo: true }, '', '#popstate-demo')
  setTimeout(() => {
    history.back()
  }, 500)

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 popstate 监听')
  }, 5000)
}

export default basicDemo
`;function o(t){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onpopstate",children:"onPopState"}),`
`,e.jsx(n.p,{children:"监听浏览器 popstate 事件（前进/后退）。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onPopState"})," 监听 ",e.jsx(n.code,{children:"window"})," 上的 ",e.jsx(n.code,{children:"popstate"})," 事件，当用户点击浏览器前进/后退按钮或调用 ",e.jsx(n.code,{children:"history.back()"}),"/",e.jsx(n.code,{children:"history.forward()"})," 时触发。注意 ",e.jsx(n.code,{children:"pushState"}),"/",e.jsx(n.code,{children:"replaceState"})," 不会触发此事件。"]}),`
`,e.jsx(n.p,{children:"常用于 SPA 路由监控和行为追踪。"}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(c,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(e: PopStateEvent) => void"})}),e.jsxs("td",{children:["popstate 触发时的回调，",e.jsx("code",{children:"e.state"})," 包含历史记录状态"]})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"() => void"})," 清理函数。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),"：",e.jsx(n.code,{children:"index.ts"})," 封装 ",e.jsx(n.code,{children:"createEventListener(window, 'popstate', callback)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),"：仅浏览器导航（前进/后退）触发，",e.jsx(n.code,{children:"pushState"}),"/",e.jsx(n.code,{children:"replaceState"})," 不触发"]}),`
`]})]})}function x(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{x as default};
