import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import onUnload from '../../../packages/element-utils/src/onUnload'

const basicDemo = () => {
  const stop = onUnload((e) => {
    action('unload 触发')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onUnload')('已注册 unload 监听（页面卸载时触发，注意会阻止 BFCache）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 unload 监听')
  }, 10000)
}

export default basicDemo
`;function d(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...c(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onunload",children:"onUnload"}),`
`,n.jsx(e.p,{children:"监听窗口 unload 事件。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onUnload"})," 监听 ",n.jsx(e.code,{children:"window"})," 上的 ",n.jsx(e.code,{children:"unload"})," 事件，在页面卸载时触发。注意：使用 ",n.jsx(e.code,{children:"unload"})," 事件会阻止浏览器将页面存入 BFCache，建议优先使用 ",n.jsx(e.code,{children:"onPageHide"})," 替代。"]}),`
`,n.jsx(e.p,{children:"仅在确实需要在页面完全卸载时执行清理操作时使用。"}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(i,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(e: Event) => void"})}),n.jsx("td",{children:"页面卸载时的回调函数"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回 ",n.jsx(e.code,{children:"() => void"})," 清理函数。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),"：",n.jsx(e.code,{children:"index.ts"})," 封装 ",n.jsx(e.code,{children:"createEventListener(window, 'unload', callback)"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：",n.jsx(e.code,{children:"unload"})," 事件会阻止 BFCache，生产环境建议使用 ",n.jsx(e.code,{children:"pagehide"})," 替代"]}),`
`]})]})}function j(o={}){const{wrapper:e}={...c(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(d,{...o})}):d(o)}export{j as default};
