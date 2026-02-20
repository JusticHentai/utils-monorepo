import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import onWindowBlur from '../../../packages/element-utils/src/onWindowBlur'

const basicDemo = () => {
  const stop = onWindowBlur((e) => {
    action('窗口失焦')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onWindowBlur')('已注册 blur 监听（点击其他窗口或标签页时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 blur 监听')
  }, 10000)
}

export default basicDemo
`;function i(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onwindowblur",children:"onWindowBlur"}),`
`,n.jsx(e.p,{children:"监听窗口 blur 事件（失焦）。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onWindowBlur"})," 监听 ",n.jsx(e.code,{children:"window"})," 上的 ",n.jsx(e.code,{children:"blur"})," 事件，当窗口失去焦点时触发。常与 ",n.jsx(e.code,{children:"onWindowFocus"})," 配对使用，用于追踪用户是否在当前页面活跃。"]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(e: FocusEvent) => void"})}),n.jsx("td",{children:"窗口失焦时的回调函数"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回 ",n.jsx(e.code,{children:"() => void"})," 清理函数。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),"：",n.jsx(e.code,{children:"index.ts"})," 封装 ",n.jsx(e.code,{children:"createEventListener(window, 'blur', callback)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：与 ",n.jsx(e.code,{children:"visibilitychange"})," 不同，",n.jsx(e.code,{children:"blur"})," 仅表示窗口焦点变化，页面仍然可见"]}),`
`]})]})}function a(o={}){const{wrapper:e}={...r(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(i,{...o})}):i(o)}export{a as default};
