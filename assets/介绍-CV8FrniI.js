import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'

export const createBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      action(\`\${metric.name} 指标\`)({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        entriesCount: metric.entries.length,
      })
    })

    setStopFn(stop)
    action('监控已启动')('所有 Web Vitals 指标监控中，点击"停止监控"按钮可手动停止')
  }
}

export default createBasicDemo
`,d=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createLcpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals(
      (metric) => {
        // 只展示 LCP 指标
        if (metric.name !== METRIC_NAME.LCP) return

        const entry = metric.entries[
          metric.entries.length - 1
        ] as LargestContentfulPaint

        action('LCP 指标')({
          value: \`\${metric.value.toFixed(2)} ms\`,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          element: entry?.element?.tagName,
          url: entry?.url,
          size: entry?.size,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('LCP 监控已启动')('等待页面加载，点击"停止监控"按钮可手动停止')
  }
}

export default createLcpDemo
`,o=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createInpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals(
      (metric) => {
        // 只展示 INP 指标
        if (metric.name !== METRIC_NAME.INP) return

        const entry = metric.entries[0] as PerformanceEventTiming

        action('INP 指标')({
          value: \`\${metric.value} ms\`,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          eventName: entry?.name,
          startTime: entry?.startTime,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('INP 监控已启动')('请进行页面交互（点击、输入等），点击"停止监控"按钮可手动停止')
  }
}

export default createInpDemo
`,l=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createClsDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals(
      (metric) => {
        // 只展示 CLS 指标
        if (metric.name !== METRIC_NAME.CLS) return

        action('CLS 指标')({
          value: metric.value.toFixed(4),
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          entriesCount: metric.entries.length,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('CLS 监控已启动')('请滚动页面或触发布局变化，点击"停止监控"按钮可手动停止')
  }
}

export default createClsDemo
`,a=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createFcpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 FCP 指标
      if (metric.name !== METRIC_NAME.FCP) return

      action('FCP 指标')({
        value: \`\${metric.value.toFixed(2)} ms\`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      })
    })

    setStopFn(stop)
    action('FCP 监控已启动')('FCP 通常在页面加载时已触发，刷新页面可看到效果')
  }
}

export default createFcpDemo
`,h=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createTtfbDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 TTFB 指标
      if (metric.name !== METRIC_NAME.TTFB) return

      const entry = metric.entries[0] as PerformanceNavigationTiming

      action('TTFB 指标')({
        value: \`\${metric.value.toFixed(2)} ms\`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        dnsLookup: \`\${((entry?.domainLookupEnd || 0) - (entry?.domainLookupStart || 0)).toFixed(2)} ms\`,
        tcpConnect: \`\${((entry?.connectEnd || 0) - (entry?.connectStart || 0)).toFixed(2)} ms\`,
      })
    })

    setStopFn(stop)
    action('TTFB 监控已启动')('TTFB 在页面加载完成后报告')
  }
}

export default createTtfbDemo
`,x=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createFpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 FP 指标
      if (metric.name !== METRIC_NAME.FP) return

      action('FP 指标')({
        value: \`\${metric.value.toFixed(2)} ms\`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      })
    })

    setStopFn(stop)
    action('FP 监控已启动')('FP 在首次绘制时报告，刷新页面可看到效果')
  }
}

export default createFpDemo
`,j=`import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createFidDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 FID 指标
      if (metric.name !== METRIC_NAME.FID) return

      const entry = metric.entries[0] as PerformanceEventTiming

      action('FID 指标')({
        value: \`\${metric.value.toFixed(2)} ms\`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        eventName: entry?.name,
      })
    })

    setStopFn(stop)
    action('FID 监控已启动')('在页面上进行首次交互（点击、按键等）触发 FID（已被 INP 取代）')
  }
}

export default createFidDemo
`,p=`import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('监控已停止')('已停止所有指标监控')
    } else {
      action('无需清理')('当前没有正在运行的监控')
    }
  }
}

export default createCleanupDemo
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"observewebvitals",children:"observeWebVitals"}),`
`,n.jsx(e.p,{children:"一次性监控所有 Web Vitals 核心性能指标，返回包含 rating、delta、id 等完整信息的 Metric 对象。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"observeWebVitals"})," 是一个统一的 Web Vitals 监控工具，内部引用了各个独立的性能监控函数（",n.jsx(e.code,{children:"onLCP"}),"、",n.jsx(e.code,{children:"onFID"}),"、",n.jsx(e.code,{children:"onCLS"}),"、",n.jsx(e.code,{children:"onFCP"}),"、",n.jsx(e.code,{children:"onINP"}),"、",n.jsx(e.code,{children:"onTTFB"}),"、",n.jsx(e.code,{children:"onFP"}),"），提供一站式的性能指标收集能力。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Web Vitals 是什么？"})}),`
`,n.jsx(e.p,{children:"Web Vitals 是 Google 提出的一组衡量网页用户体验的核心指标，用于量化页面加载速度、交互响应性和视觉稳定性。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"支持的指标："})}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"指标"}),n.jsx("th",{children:"全称"}),n.jsx("th",{children:"含义"}),n.jsx("th",{children:"核心指标"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"LCP"})}),n.jsx("td",{children:"Largest Contentful Paint"}),n.jsx("td",{children:"最大内容绘制时间"}),n.jsx("td",{children:"✅"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"INP"})}),n.jsx("td",{children:"Interaction to Next Paint"}),n.jsx("td",{children:"交互到下一帧绘制"}),n.jsx("td",{children:"✅"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"CLS"})}),n.jsx("td",{children:"Cumulative Layout Shift"}),n.jsx("td",{children:"累积布局偏移"}),n.jsx("td",{children:"✅"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FCP"}),n.jsx("td",{children:"First Contentful Paint"}),n.jsx("td",{children:"首次内容绘制"}),n.jsx("td",{})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"TTFB"}),n.jsx("td",{children:"Time to First Byte"}),n.jsx("td",{children:"首字节时间"}),n.jsx("td",{})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FP"}),n.jsx("td",{children:"First Paint"}),n.jsx("td",{children:"首次绘制"}),n.jsx("td",{})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FID"}),n.jsx("td",{children:"First Input Delay"}),n.jsx("td",{children:"首次输入延迟（已被 INP 取代）"}),n.jsx("td",{})]})]})]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"应用场景："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"前端性能监控系统"}),`
`,n.jsx(e.li,{children:"用户体验分析"}),`
`,n.jsx(e.li,{children:"性能优化效果验证"}),`
`,n.jsx(e.li,{children:"Core Web Vitals 达标检测"}),`
`]}),`
`,n.jsx(e.h2,{id:"监控所有指标",children:"监控所有指标"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"observeWebVitals"})," 一次性监控所有 Web Vitals 指标，返回包含完整信息的 ",n.jsx(e.code,{children:"WebVitalsMetric"})," 对象。"]}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"只监控-lcp",children:"只监控 LCP"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 LCP 指标。LCP 衡量页面主要内容的加载速度，良好的 LCP 应在 2.5 秒内完成。"]}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"只监控-inp",children:"只监控 INP"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 INP 指标。INP 测量用户交互后页面响应的延迟，良好的 INP 应在 200ms 以内。"]}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"只监控-cls",children:"只监控 CLS"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 CLS 指标。CLS 衡量页面视觉稳定性，良好的 CLS 分数应低于 0.1。"]}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"只监控-fcp",children:"只监控 FCP"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 FCP 指标。FCP 衡量首次内容绘制时间，良好的 FCP 应在 1.8 秒内完成。"]}),`
`,n.jsx(t,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"只监控-ttfb",children:"只监控 TTFB"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 TTFB 指标。TTFB 衡量服务器响应时间，良好的 TTFB 应在 800ms 以内。"]}),`
`,n.jsx(t,{language:"typescript",children:h}),`
`,n.jsx(e.h2,{id:"只监控-fp",children:"只监控 FP"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 FP 指标。FP 衡量首次绘制时间，良好的 FP 应在 1 秒内完成。"]}),`
`,n.jsx(t,{language:"typescript",children:x}),`
`,n.jsx(e.h2,{id:"只监控-fid",children:"只监控 FID"}),`
`,n.jsxs(e.p,{children:["通过 ",n.jsx(e.code,{children:"observeWebVitals"})," 监控并过滤出 FID 指标。FID 衡量首次输入延迟，良好的 FID 应在 100ms 以内。注意：FID 已被 INP 取代。"]}),`
`,n.jsx(t,{language:"typescript",children:j}),`
`,n.jsx(e.h2,{id:"停止监控",children:"停止监控"}),`
`,n.jsx(e.p,{children:"调用返回的停止函数可以清理所有监听器，释放资源。"}),`
`,n.jsx(t,{language:"typescript",children:p}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"WebVitalsCallback"})}),n.jsx("td",{children:"指标回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"ObserveWebVitalsOptions"})}),n.jsx("td",{children:"配置选项（可选）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"返回值"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"停止监控函数"})]})]})]}),`
`,n.jsx(e.h2,{id:"observewebvitalsoptions-配置",children:"ObserveWebVitalsOptions 配置"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"reportAllChanges"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"false"}),n.jsx("td",{children:"是否报告所有变化（针对 LCP、CLS、INP）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"durationThreshold"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"40"}),n.jsx("td",{children:"INP 持续时间阈值（ms）"})]})]})]}),`
`,n.jsx(e.h2,{id:"webvitalsmetric-回调参数",children:"WebVitalsMetric 回调参数"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"name"}),n.jsx("td",{children:n.jsx("code",{children:"METRIC_NAME"})}),n.jsx("td",{children:"指标名称（LCP、INP、CLS 等）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"指标值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"rating"}),n.jsx("td",{children:n.jsx("code",{children:"METRIC_RATING"})}),n.jsx("td",{children:"指标评级（good、needs-improvement、poor）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"delta"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"与上次值的差值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"id"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"唯一标识符"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"navigationType"}),n.jsx("td",{children:n.jsx("code",{children:"NAVIGATION_TYPE"})}),n.jsx("td",{children:"导航类型（navigate、reload、back-forward 等）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"entries"}),n.jsx("td",{children:n.jsx("code",{children:"PerformanceEntry[]"})}),n.jsx("td",{children:"相关的所有性能条目"})]})]})]}),`
`,n.jsx(e.h2,{id:"独立监控函数",children:"独立监控函数"}),`
`,n.jsx(e.p,{children:"每个指标都可以单独导入使用，回调返回完整的 Metric 对象（包含 rating、delta、id 等信息）："}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"函数"}),n.jsx("th",{children:"监控指标"}),n.jsx("th",{children:"回调参数类型"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onLCP"})}),n.jsx("td",{children:"LCP"}),n.jsx("td",{children:n.jsx("code",{children:"LCPMetric"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onINP"})}),n.jsx("td",{children:"INP"}),n.jsx("td",{children:n.jsx("code",{children:"INPMetric"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onCLS"})}),n.jsx("td",{children:"CLS"}),n.jsx("td",{children:n.jsx("code",{children:"CLSMetric"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onFCP"})}),n.jsx("td",{children:"FCP"}),n.jsx("td",{children:n.jsx("code",{children:"FCPMetric"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onTTFB"})}),n.jsx("td",{children:"TTFB"}),n.jsx("td",{children:n.jsx("code",{children:"TTFBMetric"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onFP"})}),n.jsx("td",{children:"FP"}),n.jsx("td",{children:n.jsx("code",{children:"FPMetric"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"onFID"})}),n.jsx("td",{children:"FID"}),n.jsx("td",{children:n.jsx("code",{children:"FIDMetric"})})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"文件职责："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"observeWebVitals/index.ts"}),": 主函数，统一调用各指标监控函数，返回停止函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"observeWebVitals/interface.ts"}),": WebVitalsMetric 和配置类型定义"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onLCP/index.ts"}),": LCP 监控实现，监听 largest-contentful-paint"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onINP/index.ts"}),": INP 监控实现，使用 P98 算法计算"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onCLS/index.ts"}),": CLS 监控实现，累积计算布局偏移"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onFCP/index.ts"}),": FCP 监控实现，监听 paint 事件"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onTTFB/index.ts"}),": TTFB 监控实现，获取导航时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onFP/index.ts"}),": FP 监控实现，监听首次绘制"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onFID/index.ts"}),": FID 监控实现，监听首次输入"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"核心流程："})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"检查浏览器是否支持对应的 PerformanceObserver entryType"}),`
`,n.jsx(e.li,{children:"为每个支持的指标创建独立的监听器"}),`
`,n.jsx(e.li,{children:"创建基础 Metric 对象，包含 id、navigationType 等"}),`
`,n.jsx(e.li,{children:"指标触发时计算 value、delta、rating，更新 entries"}),`
`,n.jsx(e.li,{children:"调用回调函数返回完整的 WebVitalsMetric"}),`
`,n.jsx(e.li,{children:"返回停止函数，调用时批量清理所有监听器"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"关键技术点："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"supportEntryType"})," 检查浏览器兼容性"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createPerformanceObserver"})," 工厂函数创建监听器"]}),`
`,n.jsxs(e.li,{children:["支持 ",n.jsx(e.code,{children:"buffered: true"})," 获取历史条目"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"getMetricRating"})," 计算指标评级"]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"onBFCacheRestore"})," 处理 BFCache 恢复场景"]}),`
`,n.jsx(e.li,{children:"INP 使用第 98 百分位算法计算最终值"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"数据流向："})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`supportEntryType 检查 → PerformanceObserver → 独立监控函数(onLCP等) → Metric 对象 → 回调函数
`})})]})}function f(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{f as default};
