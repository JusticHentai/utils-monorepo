import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import onPageShow from '../../../packages/element-utils/src/onPageShow'

const basicDemo = () => {
  const stop = onPageShow((e) => {
    action('pageshow 触发')({
      persisted: e.persisted,
      fromBFCache: e.persisted,
      timestamp: Date.now(),
    })
  })

  action('onPageShow')('已注册 pageshow 监听（页面显示或从 BFCache 恢复时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 pageshow 监听')
  }, 10000)
}

export default basicDemo
`;function o(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"onpageshow",children:"onPageShow"}),`
`,e.jsx(n.p,{children:"监听 pageshow 事件。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"onPageShow"})," 监听 ",e.jsx(n.code,{children:"window"})," 上的 ",e.jsx(n.code,{children:"pageshow"})," 事件。该事件在页面首次加载和从 BFCache 恢复时都会触发。回调参数为 ",e.jsx(n.code,{children:"PageTransitionEvent"}),"，",e.jsx(n.code,{children:"persisted"})," 为 ",e.jsx(n.code,{children:"true"})," 表示页面从 BFCache 恢复。"]}),`
`,e.jsx(n.p,{children:"常用于 Web Vitals 监控中检测 BFCache 恢复后重新上报性能指标。"}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsx(c,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"(e: PageTransitionEvent) => void"})}),e.jsxs("td",{children:["页面显示时的回调，",e.jsx("code",{children:"e.persisted"})," 表示是否从 BFCache 恢复"]})]})})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs(n.p,{children:["返回 ",e.jsx(n.code,{children:"() => void"})," 清理函数。"]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),"：",e.jsx(n.code,{children:"index.ts"})," 封装 ",e.jsx(n.code,{children:"createEventListener(window, 'pageshow', callback)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),"：",e.jsx(n.code,{children:"persisted"})," 属性区分首次加载和 BFCache 恢复"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{j as default};
