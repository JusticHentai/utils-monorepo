import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

export const createObserveDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = monitor.observe((resources) => {
      action('资源加载回调')(resources)
    })

    setStopFn(stop)
    action('开始监听')('已启动资源加载监控，新加载的资源将批量回调上报')
  }
}
`,i=`import { action } from 'storybook/actions'

export const createStopObserveDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()

    if (stopFn) {
      stopFn()
      clearStopFn()
      action('停止监听')('已停止资源加载监控')
    } else {
      action('停止监听')('当前没有正在运行的监听')
    }
  }
}
`,d=`import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

const getMetricsDemo = () => {
  const metrics = monitor.getMetrics()

  action('资源指标')(metrics)
  action('资源总数')(metrics.length)
}

export default getMetricsDemo
`,l=`import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

const getStatsDemo = () => {
  const stats = monitor.getStats()

  action('资源统计')(stats)
}

export default getStatsDemo
`,h=`import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

const getSlowResourcesDemo = () => {
  const slowResources = monitor.getSlowResources(100)

  action('慢资源列表（阈值 100ms）')(slowResources)
  action('慢资源数量')(slowResources.length)
}

export default getSlowResourcesDemo
`,x=`import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

const getLargeResourcesDemo = () => {
  const largeResources = monitor.getLargeResources(50 * 1024)

  action('大资源列表（阈值 50KB）')(largeResources)
  action('大资源数量')(largeResources.length)
}

export default getLargeResourcesDemo
`;function c(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"resourcemonitor",children:"ResourceMonitor"}),`
`,e.jsxs(n.p,{children:["基于 ",e.jsx(n.code,{children:"PerformanceObserver"})," API 的页面资源加载监控类，通过实例化后调用方法完成资源监控和分析。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["ResourceMonitor 封装了浏览器 Performance API，提供资源加载的实时监听和历史查询能力。底层使用 ",e.jsx(n.code,{children:"PerformanceObserver"})," 监听 ",e.jsx(n.code,{children:"resource"})," 类型条目，结合 ",e.jsx(n.code,{children:"createBatch"})," 实现批量聚合上报，避免高频回调。"]}),`
`,e.jsx(n.p,{children:"适用场景："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"前端性能监控系统中的资源加载数据采集"}),`
`,e.jsx(n.li,{children:"页面性能分析，定位慢资源和大资源"}),`
`,e.jsx(n.li,{children:"资源加载统计和缓存命中率分析"}),`
`]}),`
`,e.jsx(n.p,{children:"核心优势："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["实例化时传入 ",e.jsx(n.code,{children:"filter"}),"，后续所有操作自动应用，无需重复传参"]}),`
`,e.jsxs(n.li,{children:["查询方法（",e.jsx(n.code,{children:"getStats"}),"、",e.jsx(n.code,{children:"getSlowResources"}),"、",e.jsx(n.code,{children:"getLargeResources"}),"）基于 ",e.jsx(n.code,{children:"getMetrics"})," 结果二次处理，避免重复查询"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"observe"})," 内置批量聚合和页面卸载时自动 flush"]}),`
`]}),`
`,e.jsx(n.h2,{id:"开始监听资源加载",children:"开始监听资源加载"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"observe"})," 方法启动实时监控，基于 ",e.jsx(n.code,{children:"PerformanceObserver"})," 监听新加载的资源。内部使用 ",e.jsx(n.code,{children:"createBatch"})," 将资源条目批量聚合后回调，默认攒满 10 条或延迟 1 秒触发。返回停止函数用于清理。"]}),`
`,e.jsx(s,{language:"typescript",children:t}),`
`,e.jsx(n.h2,{id:"停止监听",children:"停止监听"}),`
`,e.jsxs(n.p,{children:["调用 ",e.jsx(n.code,{children:"observe"})," 返回的函数停止监听，会自动 flush 剩余批次、断开 observer、移除 pagehide 事件。"]}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"获取资源指标",children:"获取资源指标"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"getMetrics"})," 一次性获取当前页面所有已加载资源的性能数据快照。底层调用 ",e.jsx(n.code,{children:"performance.getEntriesByType('resource')"})," 并通过 ",e.jsx(n.code,{children:"parseResourceEntry"})," 解析为结构化的 ",e.jsx(n.code,{children:"ResourceMetrics"})," 对象，包含 DNS、TCP、TLS、TTFB、下载耗时等细分指标。"]}),`
`,e.jsx(s,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"获取资源统计",children:"获取资源统计"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"getStats"})," 获取资源的聚合统计信息，包括总数、缓存数、总大小、总耗时，以及按 ",e.jsx(n.code,{children:"initiatorType"}),"（script/img/fetch 等）分组的明细。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"获取慢资源",children:"获取慢资源"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"getSlowResources"})," 筛选 ",e.jsx(n.code,{children:"duration"})," 超过指定阈值的资源，用于定位加载缓慢的请求。默认阈值 1000ms，demo 中使用 100ms 以便在 Storybook 环境中看到结果。"]}),`
`,e.jsx(s,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"获取大资源",children:"获取大资源"}),`
`,e.jsxs(n.p,{children:["通过 ",e.jsx(n.code,{children:"getLargeResources"})," 筛选 ",e.jsx(n.code,{children:"transferSize"})," 超过指定阈值的资源，用于发现体积过大的文件。默认阈值 500KB，demo 中使用 50KB。"]}),`
`,e.jsx(s,{language:"typescript",children:x}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"构造函数",children:"构造函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceMonitorOptions"})}),e.jsx("td",{children:"可选配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.filter"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceFilter"})}),e.jsx("td",{children:"资源过滤函数，实例级别生效"})]})]})]}),`
`,e.jsx(n.h3,{id:"observe-方法",children:"observe 方法"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"callback"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceCallback"})}),e.jsx("td",{children:"资源加载回调函数"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceMonitorOptions"})}),e.jsx("td",{children:"可选配置，可覆盖实例级配置"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.reportExisting"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"是否上报已存在的资源，默认 true"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.batchSize"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"批量大小，默认 10"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.batchDelay"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"批量延迟（ms），默认 1000"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法"}),e.jsx("th",{children:"返回类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"getMetrics()"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceMetrics[]"})}),e.jsx("td",{children:"所有已加载资源的性能指标"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getStats()"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceStats"})}),e.jsx("td",{children:"资源统计信息"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getSlowResources(threshold?)"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceMetrics[]"})}),e.jsx("td",{children:"慢资源列表，threshold 默认 1000ms"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getLargeResources(threshold?)"}),e.jsx("td",{children:e.jsx("code",{children:"ResourceMetrics[]"})}),e.jsx("td",{children:"大资源列表，threshold 默认 500KB"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"observe(callback, options?)"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"停止监听函数"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"文件职责："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"}),"：ResourceMonitor 类，持有实例级 filter，组装各 core 方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/observeResource.ts"}),"：observe 核心实现，串联 createBatch + createPerformanceObserver + createEventListener"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/getResourceMetrics.ts"}),"：通过 performance.getEntriesByType 查询并解析资源条目"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/getResourceStats.ts"}),"：遍历资源数据生成聚合统计"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/getSlowResources.ts"}),"：按 duration 阈值过滤"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/getLargeResources.ts"}),"：按 transferSize 阈值过滤"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"core/parseResourceEntry.ts"}),"：将 PerformanceResourceTiming 解析为 ResourceMetrics"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"核心流程："})}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"实例化时存储 filter 配置"}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"observe"})," 调用时，先通过 ",e.jsx(n.code,{children:"getResourceMetrics"})," 上报已有资源，再通过 ",e.jsx(n.code,{children:"createPerformanceObserver"})," 监听增量"]}),`
`,e.jsxs(n.li,{children:["增量资源通过 ",e.jsx(n.code,{children:"createBatch"})," 聚合，达到 batchSize 或 batchDelay 后批量回调"]}),`
`,e.jsxs(n.li,{children:["页面 pagehide 时通过 ",e.jsx(n.code,{children:"createEventListener"})," 注册的监听自动 flush 剩余批次"]}),`
`,e.jsx(n.li,{children:"查询方法（getStats/getSlowResources/getLargeResources）基于 getMetrics 的结果二次处理"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键技术点："})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"PerformanceObserver"})," API 监听 resource 类型条目"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"createBatch"})," 批量聚合避免高频回调"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"parseResourceEntry"})," 从原生 timing 数据计算 DNS/TCP/TLS/TTFB/下载等细分耗时"]}),`
`,e.jsxs(n.li,{children:["通过 ",e.jsx(n.code,{children:"transferSize === 0"})," 判断缓存命中"]}),`
`]})]})}function R(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(c,{...r})}):c(r)}export{R as default};
