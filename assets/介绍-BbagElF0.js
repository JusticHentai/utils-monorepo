import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import onPageUnload from '../../../packages/element-utils/src/onPageUnload'

/**
 * 使用 pagehide 事件监听页面卸载（推荐）
 */
const pagehideDemo = () => {
  const stop = onPageUnload(() => {
    action('页面卸载')('pagehide 事件触发')
  })

  action('开始监听')('使用 pagehide 事件（推荐，移动端更可靠）')

  return stop
}

export default pagehideDemo
`,c=`import { action } from 'storybook/actions'
import onPageUnload from '../../../packages/element-utils/src/onPageUnload'

/**
 * 使用 beforeunload 事件监听页面卸载
 */
const beforeunloadDemo = () => {
  const stop = onPageUnload(() => {
    action('页面卸载')('beforeunload 事件触发')
  }, false)

  action('开始监听')('使用 beforeunload 事件（可显示确认对话框）')

  return stop
}

export default beforeunloadDemo
`,o=`import { action } from 'storybook/actions'

/**
 * 停止监听页面卸载
 */
const cleanupDemo = (stop: (() => void) | null) => {
  if (stop) {
    stop()
    action('停止监听')('已停止页面卸载监听')
  } else {
    action('提示')('当前没有正在进行的监听')
  }
}

export default cleanupDemo
`;function i(d){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...r(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onpageunload",children:"onPageUnload"}),`
`,n.jsx(e.p,{children:"监听页面卸载事件。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onPageUnload"})," 用于监听页面即将卸载的事件，可选择使用 ",n.jsx(e.code,{children:"pagehide"}),"（推荐）或 ",n.jsx(e.code,{children:"beforeunload"})," 事件。"]}),`
`,n.jsx(e.h3,{id:"底层原理",children:"底层原理"}),`
`,n.jsxs(e.p,{children:["通过监听 window 的 ",n.jsx(e.code,{children:"pagehide"})," 或 ",n.jsx(e.code,{children:"beforeunload"})," 事件来检测页面卸载。",n.jsx(e.code,{children:"pagehide"})," 事件在移动端更可靠，且不会阻止 BFCache（后退/前进缓存）。"]}),`
`,n.jsx(e.h3,{id:"常用场景",children:"常用场景"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"保存用户未保存的数据"}),`
`,n.jsx(e.li,{children:"清理资源（如 WebSocket 连接）"}),`
`,n.jsx(e.li,{children:"发送统计数据"}),`
`,n.jsx(e.li,{children:"显示确认对话框（仅 beforeunload）"}),`
`]}),`
`,n.jsx(e.h2,{id:"使用-pagehide-监听推荐",children:"使用 pagehide 监听（推荐）"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"pagehide"})," 事件在页面被隐藏时触发，包括用户导航离开或关闭标签页。在移动端比 ",n.jsx(e.code,{children:"beforeunload"})," 更可靠，且不会阻止浏览器的 BFCache。"]}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"使用-beforeunload-监听",children:"使用 beforeunload 监听"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"beforeunload"})," 事件可以显示确认对话框阻止用户离开，但会阻止 BFCache，影响页面返回时的加载速度。"]}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"停止监听",children:"停止监听"}),`
`,n.jsx(e.p,{children:"调用返回的清理函数即可停止监听。"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"卸载回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"useSafeMethod"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"是否使用 pagehide（推荐），默认 true"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止监听页面卸载事件"})]})})]}),`
`,n.jsx(e.h2,{id:"pagehide-vs-beforeunload",children:"pagehide vs beforeunload"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"特性"}),n.jsx("th",{children:"pagehide"}),n.jsx("th",{children:"beforeunload"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"移动端兼容性"}),n.jsx("td",{children:"✅ 更可靠"}),n.jsx("td",{children:"⚠️ 可能不触发"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"BFCache"}),n.jsx("td",{children:"✅ 不阻止"}),n.jsx("td",{children:"❌ 会阻止"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"确认对话框"}),n.jsx("td",{children:"❌ 不支持"}),n.jsx("td",{children:"✅ 支持"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"文件职责"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：主函数，根据参数选择监听事件类型"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：类型定义"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心流程"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["判断 ",n.jsx(e.code,{children:"useSafeMethod"})," 参数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"true"}),"：使用 ",n.jsx(e.code,{children:"createEventListener"})," 监听 ",n.jsx(e.code,{children:"pagehide"})," 事件"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"false"}),"：使用 ",n.jsx(e.code,{children:"createEventListener"})," 监听 ",n.jsx(e.code,{children:"beforeunload"})," 事件"]}),`
`,n.jsx(e.li,{children:"返回清理函数"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"关键技术点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"isBrowser()"})," 判断运行环境，SSR 安全"]}),`
`,n.jsxs(e.li,{children:["统一的事件监听器封装 ",n.jsx(e.code,{children:"createEventListener"})]}),`
`,n.jsxs(e.li,{children:["默认使用 ",n.jsx(e.code,{children:"pagehide"})," 以获得更好的移动端兼容性"]}),`
`]}),`
`]}),`
`]})]})}function u(d={}){const{wrapper:e}={...r(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(i,{...d})}):i(d)}export{u as default};
