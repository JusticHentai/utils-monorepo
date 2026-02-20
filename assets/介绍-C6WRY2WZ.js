import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const r=`import { action } from 'storybook/actions'
import supportRequestIdleCallback from '../../../packages/element-utils/src/supportRequestIdleCallback'

const basicDemo = () => {
  const result = supportRequestIdleCallback()

  action('supportRequestIdleCallback 检测结果')({
    supported: result,
    message: result
      ? 'requestIdleCallback 可用，可以在浏览器空闲时执行任务'
      : 'requestIdleCallback 不可用，需要使用 setTimeout 降级',
  })

  // 如果支持，演示使用
  if (result) {
    requestIdleCallback(
      (deadline) => {
        action('requestIdleCallback 执行')({
          timeRemaining: deadline.timeRemaining(),
          didTimeout: deadline.didTimeout,
        })
      },
      { timeout: 1000 }
    )
  }
}

export default basicDemo
`;function s(l){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"supportrequestidlecallback",children:"supportRequestIdleCallback"}),`
`,e.jsx(n.p,{children:"检测浏览器是否支持 requestIdleCallback API。requestIdleCallback 用于在浏览器空闲时执行低优先级任务。"}),`
`,e.jsx(n.h2,{id:"什么是-requestidlecallback",children:"什么是 requestIdleCallback？"}),`
`,e.jsx(n.p,{children:"requestIdleCallback 是一个浏览器原生 API，用于在浏览器主线程空闲时执行回调函数："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`┌─────────────────────────────────────────────────────────────┐
│                    浏览器事件循环                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  帧开始 ──→ [JS执行] ──→ [样式计算] ──→ [布局] ──→ [绘制]   │
│     │                                              │        │
│     │      ┌──────────────────────────────────────┐│        │
│     │      │         空闲时间 (Idle Time)        ││        │
│     │      │   requestIdleCallback 在此执行      ││        │
│     │      └──────────────────────────────────────┘│        │
│     │                                              │        │
│     └──────────────── 16.67ms (60fps) ─────────────┘        │
│                           ↓                                 │
│                       下一帧开始                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`})}),`
`,e.jsx(n.h2,{id:"基础检测",children:"基础检测"}),`
`,e.jsx(n.p,{children:"检测当前浏览器是否支持 requestIdleCallback API，并演示其使用。"}),`
`,e.jsx(t,{language:"typescript",children:r}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"返回值"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否支持 requestIdleCallback API"})]})})]}),`
`,e.jsx(n.h2,{id:"idledeadline-对象",children:"IdleDeadline 对象"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性/方法"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"timeRemaining()"}),e.jsx("td",{children:e.jsx("code",{children:"() => number"})}),e.jsx("td",{children:"返回当前空闲期剩余的毫秒数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"didTimeout"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"回调是否因为超时而被调用"})]})]})]}),`
`,e.jsx(n.h2,{id:"主要使用场景",children:"主要使用场景"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"场景"}),e.jsx("th",{children:"说明"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"日志上报"}),e.jsx("td",{children:"在空闲时发送埋点数据"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"数据预加载"}),e.jsx("td",{children:"预先加载可能需要的数据"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"大量计算"}),e.jsx("td",{children:"分片执行耗时的计算任务"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"缓存清理"}),e.jsx("td",{children:"清理过期的缓存数据"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"离线数据同步"}),e.jsx("td",{children:"同步 IndexedDB 数据"})]})]})]}),`
`,e.jsx(n.h2,{id:"原生-api-用法",children:"原生 API 用法"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`// 基础使用
requestIdleCallback((deadline) => {
  // 检查剩余空闲时间
  while (deadline.timeRemaining() > 0) {
    // 执行低优先级任务
    doBackgroundWork()
  }
})

// 设置超时
requestIdleCallback((deadline) => {
  if (deadline.didTimeout) {
    // 超时了，必须执行
    doUrgentWork()
  } else {
    // 还在空闲期
    doBackgroundWork()
  }
}, { timeout: 2000 })

// 取消调度
const id = requestIdleCallback(callback)
cancelIdleCallback(id)
`})}),`
`,e.jsx(n.h2,{id:"任务分片示例",children:"任务分片示例"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import supportRequestIdleCallback from '@justichentai/element-utils/supportRequestIdleCallback'

const tasks = Array.from({ length: 1000 }, (_, i) => () => processItem(i))
let taskIndex = 0

function processTasks(deadline) {
  while (taskIndex < tasks.length && deadline.timeRemaining() > 0) {
    tasks[taskIndex]()
    taskIndex++
  }
  
  if (taskIndex < tasks.length) {
    requestIdleCallback(processTasks)
  }
}

if (supportRequestIdleCallback()) {
  requestIdleCallback(processTasks)
} else {
  // 降级方案
  tasks.forEach(task => setTimeout(task, 0))
}
`})}),`
`,e.jsx(n.h2,{id:"polyfill-实现",children:"Polyfill 实现"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`if (!('requestIdleCallback' in window)) {
  window.requestIdleCallback = (callback, options) => {
    const start = Date.now()
    return setTimeout(() => {
      callback({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
      })
    }, options?.timeout ?? 1)
  }
  
  window.cancelIdleCallback = (id) => clearTimeout(id)
}
`})}),`
`,e.jsx(n.h2,{id:"浏览器兼容性",children:"浏览器兼容性"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"浏览器"}),e.jsx("th",{children:"支持版本"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"Chrome"}),e.jsx("td",{children:"47+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Firefox"}),e.jsx("td",{children:"55+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Safari"}),e.jsx("td",{children:"❌ 不支持"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Edge"}),e.jsx("td",{children:"79+"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"IE"}),e.jsx("td",{children:"❌ 不支持"})]})]})]}),`
`,e.jsx(n.h2,{id:"检测原理",children:"检测原理"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import isBrowser from '../isBrowser'

const supportRequestIdleCallback = (): boolean => {
  return isBrowser() && 'requestIdleCallback' in window
}
`})}),`
`,e.jsxs(n.p,{children:["通过检测 ",e.jsx(n.code,{children:"window.requestIdleCallback"})," 是否存在来判断浏览器支持情况。"]}),`
`,e.jsx(n.h2,{id:"注意事项",children:"注意事项"}),`
`,e.jsxs(n.p,{children:["⚠️ ",e.jsx(n.strong,{children:"Safari 不支持 requestIdleCallback"}),"，需要使用 polyfill 或降级到 setTimeout。"]})]})}function j(l={}){const{wrapper:n}={...d(),...l.components};return n?e.jsx(n,{...l,children:e.jsx(s,{...l})}):s(l)}export{j as default};
