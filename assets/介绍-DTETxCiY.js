import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import PageLifecycleMonitor from '../../../packages/element-utils/src/PageLifecycleMonitor'

const basicDemo = () => {
  const monitor = new PageLifecycleMonitor({
    DOMContentLoaded: (e) => {
      action('DOMContentLoaded')({ readyState: document.readyState })
    },
    load: (e) => {
      action('load')({ readyState: document.readyState })
    },
    focus: () => {
      action('focus')('窗口获得焦点')
    },
    blur: () => {
      action('blur')('窗口失去焦点')
    },
    visibilitychange: () => {
      action('visibilitychange')({ state: document.visibilityState })
    },
    popstate: (e) => {
      action('popstate')({ state: (e as PopStateEvent)?.state })
    },
    hashchange: (e) => {
      action('hashchange')({ newURL: (e as HashChangeEvent)?.newURL })
    },
  })

  const stop = monitor.observe()
  action('PageLifecycleMonitor')('已启动页面生命周期监控')

  setTimeout(() => {
    stop()
    action('清理完成')('已停止所有生命周期监听')
  }, 15000)
}

export default basicDemo
`,t=`import { action } from 'storybook/actions'
import PageLifecycleMonitor from '../../../packages/element-utils/src/PageLifecycleMonitor'

const customHandlersDemo = () => {
  const monitor = new PageLifecycleMonitor({
    pageshow: (e) => {
      const event = e as PageTransitionEvent
      action('pageshow')({
        persisted: event?.persisted,
        fromBFCache: event?.persisted,
      })
    },
    pagehide: (e) => {
      const event = e as PageTransitionEvent
      action('pagehide')({
        persisted: event?.persisted,
      })
    },
    online: () => {
      action('网络状态')('已恢复连接')
    },
    offline: () => {
      action('网络状态')('已断开连接')
    },
    freeze: () => {
      action('freeze')('页面已冻结')
    },
    resume: () => {
      action('resume')('页面已恢复')
    },
  })

  const stop = monitor.observe()
  action('自定义处理器')('已启动 pageshow/pagehide/网络/冻结 监听')

  setTimeout(() => {
    stop()
    action('清理完成')('已停止监听')
  }, 15000)
}

export default customHandlersDemo
`;function d(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"pagelifecyclemonitor",children:"PageLifecycleMonitor"}),`
`,e.jsx(n.p,{children:"页面生命周期事件统一监控器。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"PageLifecycleMonitor"})," 统一监听浏览器页面生命周期的所有关键事件，包括："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文档就绪"}),"：DOMContentLoaded、load"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"页面卸载"}),"：beforeunload、unload"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"页面展示/隐藏"}),"：pageshow、pagehide、visibilitychange"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"窗口焦点"}),"：focus、blur"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"网络状态"}),"：online、offline"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"路由变化"}),"：popstate、hashchange"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"页面冻结"}),"：freeze、resume（Page Lifecycle API）"]}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"SSR 环境检测"})}),`
`]}),`
`,e.jsxs(n.p,{children:["通过构造函数传入自定义处理器覆盖默认行为，未提供处理器的事件使用默认的 ",e.jsx(n.code,{children:"console.info"})," 日志输出。"]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["创建 ",e.jsx(n.code,{children:"PageLifecycleMonitor"})," 实例并传入感兴趣的事件处理器，调用 ",e.jsx(n.code,{children:"observe()"})," 启动监控，返回停止函数。"]}),`
`,e.jsx(i,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"自定义事件处理器",children:"自定义事件处理器"}),`
`,e.jsx(n.p,{children:"可以只监听部分事件，如 pageshow/pagehide、网络状态变化、页面冻结/恢复等。"}),`
`,e.jsx(i,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"构造参数-pagelifecyclehandlers",children:"构造参数 PageLifecycleHandlers"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"事件名"}),e.jsx("th",{children:"回调类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"DOMContentLoaded"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"DOM 解析完成"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"load"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"页面及资源加载完成"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"beforeunload"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: BeforeUnloadEvent) => void"})}),e.jsx("td",{children:"页面即将卸载"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"unload"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"页面卸载"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pageshow"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: PageTransitionEvent) => void"})}),e.jsx("td",{children:"页面展示（含 BFCache 恢复）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"pagehide"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: PageTransitionEvent) => void"})}),e.jsx("td",{children:"页面隐藏"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"visibilitychange"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"页面可见性变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"focus"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: FocusEvent) => void"})}),e.jsx("td",{children:"窗口获得焦点"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"blur"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: FocusEvent) => void"})}),e.jsx("td",{children:"窗口失去焦点"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"online"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"网络恢复连接"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"offline"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"网络断开连接"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"popstate"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: PopStateEvent) => void"})}),e.jsx("td",{children:"浏览器前进/后退"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"hashchange"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: HashChangeEvent) => void"})}),e.jsx("td",{children:"URL hash 变化"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"freeze"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"页面被冻结"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"resume"}),e.jsx("td",{children:e.jsx("code",{children:"(e?: Event) => void"})}),e.jsx("td",{children:"页面从冻结中恢复"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ssr"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"SSR 环境检测"})]})]})]}),`
`,e.jsx(n.h3,{id:"实例方法",children:"实例方法"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法名"}),e.jsx("th",{children:"返回类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"observe()"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"启动监控，返回停止函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop()"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"停止所有监听"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：PageLifecycleMonitor 类，统一注册所有生命周期事件监听"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"}),"：事件枚举（PAGE_LIFECYCLE_EVENT）、处理器类型（PageLifecycleHandlers）、默认处理器"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"构造函数接收自定义处理器"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"observe()"})," 依次调用各个 ",e.jsx(n.code,{children:"onXxx"})," 工具注册事件监听，收集清理函数"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"getHandler(event)"})," 查找用户处理器或使用默认处理器"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stop()"})," 遍历所有清理函数"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),"："]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["非浏览器环境（SSR）时触发 ",e.jsx(n.code,{children:"ssr"})," 处理器并直接返回"]}),`
`,e.jsxs(n.li,{children:["网络状态通过 ",e.jsx(n.code,{children:"onNetworkChange"})," 复用实现，将 ",e.jsx(n.code,{children:"online"}),"/",e.jsx(n.code,{children:"offline"})," 映射为布尔值"]}),`
`,e.jsxs(n.li,{children:["默认处理器仅打印 ",e.jsx(n.code,{children:"console.info"})," 日志"]}),`
`]}),`
`]}),`
`]})]})}function p(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(d,{...s})}):d(s)}export{p as default};
