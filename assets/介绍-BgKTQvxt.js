import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import onDOMContentLoaded from '../../../packages/element-utils/src/onDOMContentLoaded'

const basicDemo = () => {
  const stop = onDOMContentLoaded((e) => {
    action('DOMContentLoaded 触发')({
      type: e.type,
      readyState: document.readyState,
      timestamp: Date.now(),
    })
  })

  action('onDOMContentLoaded')('已注册监听（若 DOM 已就绪则立即触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 DOMContentLoaded 监听')
  }, 3000)
}

export default basicDemo
`;function d(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"ondomcontentloaded",children:"onDOMContentLoaded"}),`
`,n.jsx(e.p,{children:"在 DOMContentLoaded 时执行回调。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onDOMContentLoaded"})," 用于监听浏览器 ",n.jsx(e.code,{children:"DOMContentLoaded"})," 事件。如果 DOM 尚在加载（",n.jsx(e.code,{children:"document.readyState === 'loading'"}),"），则注册事件监听；否则立即执行回调。"]}),`
`,n.jsxs(e.p,{children:["基于 ",n.jsx(e.code,{children:"createEventListener"})," 封装，返回清理函数用于移除监听。常用于需要在 DOM 解析完成后执行初始化逻辑的场景，比纯 ",n.jsx(e.code,{children:"DOMContentLoaded"})," 更安全，不会因为注册时机晚于事件触发而遗漏。"]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(c,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(e: Event) => void"})}),n.jsx("td",{children:"DOMContentLoaded 触发时的回调函数"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回 ",n.jsx(e.code,{children:"() => void"})," 清理函数，调用后移除事件监听。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),"：",n.jsx(e.code,{children:"index.ts"})," 判断 ",n.jsx(e.code,{children:"document.readyState"})," 决定是监听还是立即执行"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),"：readyState 为 ",n.jsx(e.code,{children:"loading"})," 时通过 ",n.jsx(e.code,{children:"createEventListener"})," 注册监听，否则手动构造 Event 并立即调用 callback"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：通过检查 ",n.jsx(e.code,{children:"readyState"})," 避免事件已触发后注册监听导致回调永远不执行的问题"]}),`
`]})]})}function j(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(d,{...t})}):d(t)}export{j as default};
