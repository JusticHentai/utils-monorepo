import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import onLCP from '../../../packages/element-utils/src/onLCP'

export const createInitBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onLCP((metric) => {
      const entry = metric.entries[metric.entries.length - 1]
      action('LCP 指标')({
        时间: \`\${Math.round(metric.value)}ms\`,
        元素: entry?.element?.tagName || '未知',
        大小: entry?.size || '未知',
        URL: entry?.url || '无',
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('LCP 将在页面隐藏时报告最终值，或切换标签页触发')
  }
}
`,l=`import { action } from 'storybook/actions'
import onLCP from '../../../packages/element-utils/src/onLCP'

export const createInitAllChangesDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onLCP(
      (metric) => {
        const entry = metric.entries[metric.entries.length - 1]
        action('LCP 变化')({
          时间: \`\${Math.round(metric.value)}ms\`,
          元素: entry?.element?.tagName || '未知',
          rating: metric.rating,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('初始化成功（报告所有变化）')('每次 LCP 候选元素变化都会触发回调')
  }
}
`,d=`import { action } from 'storybook/actions'
import onLCP from '../../../packages/element-utils/src/onLCP'

export const createInitMetricDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onLCP((metric) => {
      // metric 包含完整信息：name, value, rating, delta, id, navigationType, entries
      const entry = metric.entries[metric.entries.length - 1]

      action('LCP Metric')({
        name: metric.name,
        value: \`\${Math.round(metric.value)}ms\`,
        rating: metric.rating,
        delta: \`\${Math.round(metric.delta)}ms\`,
        id: metric.id,
        navigationType: metric.navigationType,
        element: entry?.element?.tagName || '未知',
      })
    })

    setStopFn(stop)
    action('初始化成功')('LCP Metric 监控中，等待页面隐藏时报告...')
  }
}
`,o=`import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
    }

    action('清理完成')()
  }
}
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onlcp",children:"onLCP"}),`
`,n.jsx(e.p,{children:"监听 LCP (Largest Contentful Paint)。LCP 是最大内容绘制时间，衡量页面主要内容的加载速度。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onLCP"})," 是基于 ",n.jsx(e.code,{children:"PerformanceObserver"})," 封装的 LCP 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"LCP 指标：Core Web Vitals 三大核心指标之一"}),`
`,n.jsx(e.li,{children:"PerformanceObserver API：监听 largest-contentful-paint 类型"}),`
`,n.jsx(e.li,{children:"页面可见性：通常在页面隐藏时报告最终 LCP"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"LCP 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 2.5 秒"}),`
`,n.jsx(e.li,{children:"需要改进：2.5 - 4 秒"}),`
`,n.jsx(e.li,{children:"差：> 4 秒"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：收集用户真实 LCP 数据"}),`
`,n.jsx(e.li,{children:"性能优化：识别影响 LCP 的元素"}),`
`,n.jsx(e.li,{children:"A/B 测试：对比不同版本的 LCP 表现"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自动追踪 LCP 候选元素变化"}),`
`,n.jsx(e.li,{children:"支持选择报告最终值或所有变化"}),`
`,n.jsx(e.li,{children:"页面隐藏时自动报告"}),`
`]}),`
`,n.jsx(e.h2,{id:"监听-lcp最终值",children:"监听 LCP（最终值）"}),`
`,n.jsx(e.p,{children:"监听 LCP 指标，仅在页面隐藏时报告最终的 LCP 值。这是默认模式，适合生产环境收集用户真实体验数据。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"监听-lcp所有变化",children:"监听 LCP（所有变化）"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"reportAllChanges"})," 为 ",n.jsx(e.code,{children:"true"}),"，每次 LCP 候选元素变化时都会触发回调。适合开发调试阶段观察 LCP 的变化过程。"]}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"监听-lcpmetric-版本",children:"监听 LCP（Metric 版本）"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"onLCPMetric"})," 获取完整的 Metric 对象，包含 rating、delta、id、navigationType 等信息。适合需要完整性能数据的场景。"]}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(e.p,{children:"调用返回的清理函数停止 LCP 监听，释放资源。"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"onlcp-1",children:"onLCP"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnLCPCallback"})}),n.jsx("td",{children:"LCP 回调函数，参数为 LargestContentfulPaint"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"reportAllChanges"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"可选，是否报告所有变化，默认为 false"})]})]})]}),`
`,n.jsx(e.h3,{id:"onlcpmetric",children:"onLCPMetric"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnLCPMetricCallback"})}),n.jsx("td",{children:"LCP 回调函数，参数为完整的 LCPMetric 对象"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"OnLCPMetricOptions"})}),n.jsx("td",{children:"可选配置，包含 reportAllChanges"})]})]})]}),`
`,n.jsx(e.h3,{id:"lcpmetric-类型",children:"LCPMetric 类型"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"name"}),n.jsx("td",{children:n.jsx("code",{children:"MetricName.LCP"})}),n.jsx("td",{children:"指标名称"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"value"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"指标值（毫秒）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"rating"}),n.jsx("td",{children:n.jsx("code",{children:"MetricRating"})}),n.jsx("td",{children:"指标评级（good / needs-improvement / poor）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"delta"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"与上次值的差值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"id"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"唯一标识符"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"navigationType"}),n.jsx("td",{children:n.jsx("code",{children:"NAVIGATION_TYPE"})}),n.jsx("td",{children:"导航类型"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"entries"}),n.jsx("td",{children:n.jsx("code",{children:"LargestContentfulPaint[]"})}),n.jsx("td",{children:"相关的性能条目"})]})]})]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止观察"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 主函数实现，包含 onLCP 和 onLCPMetric"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"})," - 类型定义，包含 LCPMetric 接口"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createPerformanceObserver"})," 监听 ",n.jsx(e.code,{children:"largest-contentful-paint"})]}),`
`,n.jsx(e.li,{children:"记录最后一个 LCP 候选条目"}),`
`,n.jsxs(e.li,{children:["根据 ",n.jsx(e.code,{children:"reportAllChanges"})," 决定是否立即报告"]}),`
`,n.jsxs(e.li,{children:["监听 ",n.jsx(e.code,{children:"visibilitychange"})," 事件，页面隐藏时报告最终值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"onLCPMetric"})," 封装 ",n.jsx(e.code,{children:"onLCP"}),"，添加 rating、delta 等完整信息"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"LCP 可能多次更新，最后一个才是最终值"}),`
`,n.jsx(e.li,{children:"使用 visibilitychange 事件捕获页面隐藏时机"}),`
`,n.jsx(e.li,{children:"支持两种报告模式：最终值或所有变化"}),`
`,n.jsx(e.li,{children:"Metric 版本自动计算评级和增量"}),`
`]})]})}function C(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{C as default};
