import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const s=`import { action } from 'storybook/actions'
import onWindowLoaded from '../../../packages/element-utils/src/onWindowLoaded'

const basicDemo = () => {
  const stop = onWindowLoaded((e) => {
    action('窗口加载完成')({
      type: e.type,
      readyState: document.readyState,
      timestamp: Date.now(),
    })
  })

  action('onWindowLoaded')('已注册 load 监听（若已加载完成则延迟一个微任务后执行）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 load 监听')
  }, 5000)
}

export default basicDemo
`;function o(d){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...i(),...d.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onwindowloaded",children:"onWindowLoaded"}),`
`,n.jsx(e.p,{children:"在窗口加载完成时执行回调。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onWindowLoaded"})," 用于监听 ",n.jsx(e.code,{children:"window"})," 的 ",n.jsx(e.code,{children:"load"})," 事件。如果页面尚未加载完成（",n.jsx(e.code,{children:"document.readyState !== 'complete'"}),"），则注册事件监听；否则延迟一个宏任务后立即执行回调。"]}),`
`,n.jsxs(e.p,{children:["延迟执行的目的是确保浏览器在 ",n.jsx(e.code,{children:"load"})," 事件触发后完成所有同步的性能条目（如 ",n.jsx(e.code,{children:"PerformanceNavigationTiming"}),"）写入，避免回调中读取到不完整的性能数据。"]}),`
`,n.jsx(e.p,{children:"常用于性能监控中采集导航性能指标。"}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(c,{language:"typescript",children:s}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(e: Event) => void"})}),n.jsx("td",{children:"窗口加载完成时的回调函数"})]})})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs(e.p,{children:["返回 ",n.jsx(e.code,{children:"() => void"})," 清理函数。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),"：",n.jsx(e.code,{children:"index.ts"})," 判断 ",n.jsx(e.code,{children:"document.readyState"})," 决定是监听还是延迟执行"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),"：readyState 不为 ",n.jsx(e.code,{children:"complete"})," 时通过 ",n.jsx(e.code,{children:"createEventListener"})," 注册 load 监听，否则通过 ",n.jsx(e.code,{children:"await sleep(0)"})," 延迟后执行回调"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：使用 ",n.jsx(e.code,{children:"sleep(0)"})," 延迟确保浏览器性能条目写入完成后再执行回调，避免读取不完整的性能数据"]}),`
`]})]})}function j(d={}){const{wrapper:e}={...i(),...d.components};return e?n.jsx(e,{...d,children:n.jsx(o,{...d})}):o(d)}export{j as default};
