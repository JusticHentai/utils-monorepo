import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import RequestMonitor from '../../../packages/element-utils/src/RequestMonitor'

export const monitor = new RequestMonitor({
  onRequest: (request) => {
    action('onRequest 回调')({
      url: request.url,
      method: request.method,
      status: request.status,
      duration: Math.round(request.duration || 0) + 'ms',
      success: request.success,
    })
  },
  onError: (error) => {
    action('onError 回调')({
      type: error.type,
      message: error.message,
      requestUrl: error.requestUrl,
    })
  },
  ignoreUrls: [/hot-update/],
})

export const createObserveAllDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = monitor.observeAll()
    setStopFn(stop)

    action('开启监控')('已开始监控 XHR + Fetch 请求')
  }
}
`,c=`import { action } from 'storybook/actions'
import { monitor } from './observeAllDemo'

export const createStopDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      monitor.stop()
      clearStopFn()
      action('停止监控')('已停止所有请求监控')
    } else {
      action('停止监控')('当前没有正在运行的监控')
    }
  }
}
`,i=`import { action } from 'storybook/actions'

const sendXHRDemo = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1')
  xhr.send()

  action('发送 XHR 请求')('GET https://jsonplaceholder.typicode.com/posts/1')
}

export default sendXHRDemo
`,l=`import { action } from 'storybook/actions'

const sendFetchDemo = () => {
  fetch('https://jsonplaceholder.typicode.com/users/1')

  action('发送 Fetch 请求')('GET https://jsonplaceholder.typicode.com/users/1')
}

export default sendFetchDemo
`,h=`import { action } from 'storybook/actions'
import { monitor } from './observeAllDemo'

const getStatsDemo = () => {
  const stats = monitor.getStats()
  const requests = monitor.getRequests()

  action('请求统计')({
    total: stats.total,
    success: stats.success,
    failed: stats.failed,
    avgDuration: Math.round(stats.avgDuration) + 'ms',
    slowRequests: stats.slowRequests,
    byStatus: stats.byStatus,
  })

  action('请求记录')(
    requests.map((r) => ({
      url: r.url,
      method: r.method,
      status: r.status,
      duration: Math.round(r.duration || 0) + 'ms',
      success: r.success,
    }))
  )
}

export default getStatsDemo
`,x=`import { action } from 'storybook/actions'
import { monitor } from './observeAllDemo'

const clearDemo = () => {
  monitor.clear()

  action('清空记录')('已清空所有请求记录')
}

export default clearDemo
`;function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"requestmonitor",children:"RequestMonitor"}),`
`,e.jsx(n.p,{children:"网络请求监控器，用于拦截和记录页面中的 XMLHttpRequest 和 Fetch 请求。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"RequestMonitor"})," 是一个基于 Class 的网络请求监控工具，通过代理 ",e.jsx(n.code,{children:"XMLHttpRequest.prototype"})," 和 ",e.jsx(n.code,{children:"window.fetch"})," 来拦截所有网络请求。"]}),`
`,e.jsx(n.p,{children:"核心能力包括："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"分别或同时监控 XHR 和 Fetch 请求"}),`
`,e.jsx(n.li,{children:"记录请求的 URL、方法、状态码、耗时、响应大小等信息"}),`
`,e.jsx(n.li,{children:"自动统计成功/失败/慢请求数量"}),`
`,e.jsx(n.li,{children:"支持 URL 忽略规则（字符串或正则）"}),`
`,e.jsx(n.li,{children:"错误和超时的回调通知"}),`
`]}),`
`,e.jsx(n.p,{children:"常用于前端性能监控、错误上报、请求日志采集等场景。通过拦截原生 API 实现零侵入式监控，无需修改业务代码。"}),`
`,e.jsx(n.h2,{id:"开启监控",children:"开启监控"}),`
`,e.jsxs(n.p,{children:["创建 ",e.jsx(n.code,{children:"RequestMonitor"})," 实例并调用 ",e.jsx(n.code,{children:"observeAll()"})," 同时监控 XHR 和 Fetch。也可以单独调用 ",e.jsx(n.code,{children:"observeXHR()"})," 或 ",e.jsx(n.code,{children:"observeFetch()"})," 按需监控。"]}),`
`,e.jsx(t,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"停止监控",children:"停止监控"}),`
`,e.jsxs(n.p,{children:["调用 ",e.jsx(n.code,{children:"stop()"})," 方法会还原被代理的原生 API，停止所有监控。"]}),`
`,e.jsx(t,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"发送-xhr-请求",children:"发送 XHR 请求"}),`
`,e.jsxs(n.p,{children:["在监控开启后发送 XHR 请求，",e.jsx(n.code,{children:"onRequest"})," 回调会自动触发并记录请求信息。"]}),`
`,e.jsx(t,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"发送-fetch-请求",children:"发送 Fetch 请求"}),`
`,e.jsx(n.p,{children:"在监控开启后发送 Fetch 请求，同样会被拦截并记录。"}),`
`,e.jsx(t,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"查看统计信息",children:"查看统计信息"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"getStats()"})," 获取请求统计（总数、成功/失败数、平均耗时、慢请求数、按状态码分布），通过 ",e.jsx(n.code,{children:"getRequests()"})," 获取所有请求记录。"]}),`
`,e.jsx(t,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"清空记录",children:"清空记录"}),`
`,e.jsxs(n.p,{children:["调用 ",e.jsx(n.code,{children:"clear()"})," 清空已记录的请求数据，统计信息归零。"]}),`
`,e.jsx(t,{language:"typescript",children:x}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs(n.h3,{id:"构造参数-requestmonitoroptions",children:["构造参数 ",e.jsx(n.code,{children:"RequestMonitorOptions"})]}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"onRequest"}),e.jsx("td",{children:e.jsx("code",{children:"(request: RequestInfo) => void"})}),e.jsx("td",{children:"请求完成时的回调"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"onError"}),e.jsx("td",{children:e.jsx("code",{children:"(error: RequestErrorInfo) => void"})}),e.jsx("td",{children:"请求错误时的回调（可选）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"ignoreUrls"}),e.jsx("td",{children:e.jsx("code",{children:"(string | RegExp)[]"})}),e.jsx("td",{children:"忽略的 URL 列表（可选）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"timeoutThreshold"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"超时阈值，单位 ms，默认 30000（可选）"})]})]})]}),`
`,e.jsx(n.h3,{id:"实例方法",children:"实例方法"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法"}),e.jsx("th",{children:"返回类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"observeXHR()"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"监控 XMLHttpRequest，返回停止函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"observeFetch()"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"监控 Fetch，返回停止函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"observeAll()"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"同时监控 XHR + Fetch，返回停止函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getStats()"}),e.jsx("td",{children:e.jsx("code",{children:"RequestStats"})}),e.jsx("td",{children:"获取请求统计信息"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getRequests()"}),e.jsx("td",{children:e.jsx("code",{children:"RequestInfo[]"})}),e.jsx("td",{children:"获取所有请求记录"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"clear()"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"清空请求记录"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"stop()"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"停止所有监控，还原原生 API"})]})]})]}),`
`,e.jsx(n.h3,{id:"requeststats-返回类型",children:"RequestStats 返回类型"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"字段"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"total"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"总请求数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"success"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"成功请求数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"failed"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"失败请求数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalDuration"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"总耗时 (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"avgDuration"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"平均耗时 (ms)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"slowRequests"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"慢请求数（>3s）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"byStatus"}),e.jsx("td",{children:e.jsx("code",{children:"Record<number, number>"})}),e.jsx("td",{children:"按状态码统计"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," — ",e.jsx(n.code,{children:"RequestMonitor"})," Class，管理监控生命周期、请求记录和统计"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," — 类型定义（RequestInfo、RequestErrorInfo、RequestMonitorOptions 等）"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeXHR.ts"})," — 代理 ",e.jsx(n.code,{children:"XMLHttpRequest.prototype.open/send/setRequestHeader"})," 拦截 XHR 请求"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeFetch.ts"})," — 代理 ",e.jsx(n.code,{children:"window.fetch"})," 拦截 Fetch 请求"]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),": 实例化时保存配置 → 调用 ",e.jsx(n.code,{children:"observeXHR/observeFetch/observeAll"})," 代理原生 API → 请求完成时收集信息并触发回调 → ",e.jsx(n.code,{children:"getStats"})," 遍历记录计算统计 → ",e.jsx(n.code,{children:"stop"})," 还原原生 API"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),": Monkey Patching 代理原生 API、",e.jsx(n.code,{children:"performance.now()"})," 高精度计时、",e.jsx(n.code,{children:"Response.clone()"})," 非破坏性读取响应体、",e.jsx(n.code,{children:"matchPattern"})," URL 匹配过滤"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据流向"}),": 浏览器发起请求 → 代理函数拦截 → 收集请求元数据 → 请求完成后构造 ",e.jsx(n.code,{children:"RequestInfo"})," → 推入 ",e.jsx(n.code,{children:"requests"})," 数组 + 触发 ",e.jsx(n.code,{children:"onRequest"})," 回调 → 失败时触发 ",e.jsx(n.code,{children:"onError"})," 回调"]}),`
`]}),`
`]})]})}function q(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{q as default};
