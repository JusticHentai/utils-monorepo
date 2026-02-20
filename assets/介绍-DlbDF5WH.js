import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import onPageHide from '../../../packages/element-utils/src/onPageHide'

const basicDemo = () => {
  const stop = onPageHide((e) => {
    action('pagehide 触发')({
      persisted: e.persisted,
      timestamp: Date.now(),
    })
  })

  action('onPageHide')('已注册 pagehide 监听（切换标签页或关闭页面时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 pagehide 监听')
  }, 10000)
}

export default basicDemo
`;function d(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onpagehide",children:"onPageHide"}),`
`,e.jsx(n.p,{children:"监听 pagehide 事件。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onPageHide"})," 监听 ",e.jsx(n.code,{children:"window"})," 上的 ",e.jsx(n.code,{children:"pagehide"})," 事件，在页面即将被隐藏或卸载时触发。回调参数为 ",e.jsx(n.code,{children:"PageTransitionEvent"}),"，其中 ",e.jsx(n.code,{children:"persisted"})," 属性表示页面是否可能进入 BFCache。"]}),`
`,e.jsxs(n.p,{children:["推荐使用 ",e.jsx(n.code,{children:"pagehide"})," 替代 ",e.jsx(n.code,{children:"unload"})," 事件，因为 ",e.jsx(n.code,{children:"unload"})," 会阻止 BFCache。常用于数据持久化和最终的数据上报。"]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(c,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(e: PageTransitionEvent) => void"})}),e.jsxs("td",{children:["页面隐藏时的回调函数，",e.jsx("code",{children:"e.persisted"})," 表示是否可能被缓存"]})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"() => void"})," 清理函数。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),"：",e.jsx(n.code,{children:"index.ts"})," 封装 ",e.jsx(n.code,{children:"createEventListener(window, 'pagehide', callback)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),"：",e.jsx(n.code,{children:"persisted"})," 为 ",e.jsx(n.code,{children:"true"})," 时页面进入 BFCache，后续可通过 ",e.jsx(n.code,{children:"pageshow"})," 事件恢复"]}),`
`]})]})}function j(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(d,{...i})}):d(i)}export{j as default};
