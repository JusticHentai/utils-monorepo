import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import onNetworkChange from '../../../packages/element-utils/src/onNetworkChange'

const initDemo = () => {
  const stop = onNetworkChange((online) => {
    action('网络状态变化')(online ? '在线' : '离线')
  })

  action('开始监听')('当前状态: ' + (navigator.onLine ? '在线' : '离线'))

  // 返回清理函数供后续调用
  return stop
}

export default initDemo
`,d=`import { action } from 'storybook/actions'

const cleanupDemo = (stop: (() => void) | null) => {
  if (stop) {
    stop()
    action('停止监听')('已停止网络监听')
  } else {
    action('提示')('当前没有正在进行的监听')
  }
}

export default cleanupDemo
`;function l(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onnetworkchange",children:"onNetworkChange"}),`
`,n.jsx(e.p,{children:"监听网络状态变化。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onNetworkChange"})," 用于监听浏览器网络连接状态的变化，当网络断开或恢复时触发回调。"]}),`
`,n.jsx(e.h3,{id:"底层原理",children:"底层原理"}),`
`,n.jsxs(e.p,{children:["通过监听 window 的 ",n.jsx(e.code,{children:"online"})," 和 ",n.jsx(e.code,{children:"offline"})," 事件来检测网络状态变化。这两个事件是浏览器原生提供的网络状态检测 API。"]}),`
`,n.jsx(e.h3,{id:"常用场景",children:"常用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"显示网络状态提示"}),`
`,n.jsx(e.li,{children:"网络恢复时自动重试请求"}),`
`,n.jsx(e.li,{children:"离线模式切换"}),`
`,n.jsx(e.li,{children:"数据同步功能"}),`
`]}),`
`,n.jsx(e.h2,{id:"开始监听",children:"开始监听"}),`
`,n.jsxs(e.p,{children:["调用 ",n.jsx(e.code,{children:"onNetworkChange"})," 并传入回调函数，当网络状态变化时会触发回调。返回一个清理函数用于停止监听。"]}),`
`,n.jsx(s,{language:"typescript",children:r}),`
`,n.jsx(e.h2,{id:"停止监听",children:"停止监听"}),`
`,n.jsx(e.p,{children:"调用返回的清理函数即可停止监听，释放事件监听器资源。"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(online: boolean) => void"})}),n.jsx("td",{children:"网络状态变化回调，参数为是否在线"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止监听网络状态变化"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"文件职责"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：主函数，负责注册和管理事件监听"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：类型定义"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心流程"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"createEventListener"})," 分别监听 ",n.jsx(e.code,{children:"online"})," 和 ",n.jsx(e.code,{children:"offline"})," 事件"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"online"})," 事件触发时回调 ",n.jsx(e.code,{children:"callback(true)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"offline"})," 事件触发时回调 ",n.jsx(e.code,{children:"callback(false)"})]}),`
`,n.jsx(e.li,{children:"返回清理函数，调用时移除所有事件监听器"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"关键技术点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"window.online"})," 和 ",n.jsx(e.code,{children:"window.offline"})," 原生事件"]}),`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"isBrowser()"})," 判断运行环境，SSR 安全"]}),`
`,n.jsx(e.li,{children:"统一的清理函数模式，防止内存泄漏"}),`
`]}),`
`]}),`
`]})]})}function p(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(l,{...i})}):l(i)}export{p as default};
