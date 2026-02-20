import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const d=`import { action } from 'storybook/actions'
import onWindowFocus from '../../../packages/element-utils/src/onWindowFocus'

const basicDemo = () => {
  const stop = onWindowFocus((e) => {
    action('窗口聚焦')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onWindowFocus')('已注册 focus 监听（点击回当前窗口时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 focus 监听')
  }, 10000)
}

export default basicDemo
`;function s(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o.h1,{id:"onwindowfocus",children:"onWindowFocus"}),`
`,n.jsx(o.p,{children:"监听窗口 focus 事件（聚焦）。"}),`
`,n.jsx(o.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(o.p,{children:[n.jsx(o.code,{children:"onWindowFocus"})," 监听 ",n.jsx(o.code,{children:"window"})," 上的 ",n.jsx(o.code,{children:"focus"})," 事件，当窗口获得焦点时触发。常与 ",n.jsx(o.code,{children:"onWindowBlur"})," 配对使用，用于追踪用户活跃状态。"]}),`
`,n.jsx(o.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(i,{language:"typescript",children:d}),`
`,n.jsx(o.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(e: FocusEvent) => void"})}),n.jsx("td",{children:"窗口聚焦时的回调函数"})]})})]}),`
`,n.jsx(o.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(o.p,{children:["返回 ",n.jsx(o.code,{children:"() => void"})," 清理函数。"]}),`
`,n.jsx(o.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"文件职责"}),"：",n.jsx(o.code,{children:"index.ts"})," 封装 ",n.jsx(o.code,{children:"createEventListener(window, 'focus', callback)"})]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.strong,{children:"关键技术点"}),"：用于用户活跃度追踪，与 ",n.jsx(o.code,{children:"blur"})," 事件配合统计页面停留时间"]}),`
`]})]})}function a(e={}){const{wrapper:o}={...c(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(s,{...e})}):s(e)}export{a as default};
