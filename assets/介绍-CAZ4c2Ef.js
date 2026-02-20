import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as d}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import onINP from '../../../packages/element-utils/src/onINP'

export const createInitBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onINP((metric) => {
      const entry = metric.entries[0] as PerformanceEventTiming
      action('INP 指标')({
        延迟: \`\${Math.round(metric.value)}ms\`,
        类型: entry?.name || '未知',
        目标: entry?.target?.nodeName || '未知',
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('INP 将在页面隐藏时报告，点击/键盘/触摸操作会触发交互')
  }
}
`,l=`import { action } from 'storybook/actions'
import onINP from '../../../packages/element-utils/src/onINP'

export const createInitAllChangesDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onINP(
      (metric) => {
        const entry = metric.entries[0] as PerformanceEventTiming
        action('INP 变化')({
          延迟: \`\${Math.round(metric.value)}ms\`,
          类型: entry?.name || '未知',
          目标: entry?.target?.nodeName || '未知',
          rating: metric.rating,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('初始化成功')('INP 每次变化都会报告，进行点击/键盘操作查看变化')
  }
}
`,t=`import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('清理完成')('INP 监听已停止')
    } else {
      action('提示')('没有正在运行的监听')
    }
  }
}
`;function r(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...d(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"oninp",children:"onINP"}),`
`,n.jsx(e.p,{children:"监听 INP (Interaction to Next Paint)。INP 衡量页面整体响应性，是取代 FID 成为 Core Web Vitals 的新指标。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onINP"})," 是基于 ",n.jsx(e.code,{children:"PerformanceObserver"})," 封装的 INP 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"INP 指标：2024 年 3 月取代 FID 成为 Core Web Vitals 核心指标"}),`
`,n.jsx(e.li,{children:"PerformanceObserver API：监听 event 类型，获取用户交互事件"}),`
`,n.jsx(e.li,{children:"第 98 百分位计算：INP 取所有交互延迟的第 98 百分位值"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"INP vs FID"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"FID 只测量首次输入延迟"}),`
`,n.jsx(e.li,{children:"INP 测量页面整个生命周期内所有交互的响应性"}),`
`,n.jsx(e.li,{children:"INP 更能反映用户的真实体验"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"INP 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 200ms"}),`
`,n.jsx(e.li,{children:"需要改进：200 - 500ms"}),`
`,n.jsx(e.li,{children:"差：> 500ms"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：收集用户真实交互响应数据"}),`
`,n.jsx(e.li,{children:"性能优化：识别慢交互的原因"}),`
`,n.jsx(e.li,{children:"A/B 测试：对比不同版本的交互响应性"}),`
`]}),`
`,n.jsx(e.h2,{id:"监听-inp最终值",children:"监听 INP（最终值）"}),`
`,n.jsx(e.p,{children:"监听 INP 指标，仅在页面隐藏时报告最终的 INP 值。这是默认模式，适合生产环境收集用户真实体验数据。"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"监听-inp所有变化",children:"监听 INP（所有变化）"}),`
`,n.jsxs(e.p,{children:["设置 ",n.jsx(e.code,{children:"reportAllChanges"})," 为 ",n.jsx(e.code,{children:"true"}),"，每次 INP 值变化时都会触发回调。适合开发调试阶段观察 INP 的变化过程。"]}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(e.p,{children:"调用返回的清理函数停止 INP 监听，释放资源。"}),`
`,n.jsx(s,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnINPCallback"})}),n.jsx("td",{children:"INP 回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"OnINPOptions"})}),n.jsx("td",{children:"可选，配置选项"})]})]})]}),`
`,n.jsx(e.h3,{id:"oninpoptions",children:"OnINPOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"reportAllChanges"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"false"}),n.jsx("td",{children:"是否报告所有变化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"durationThreshold"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"40"}),n.jsx("td",{children:"持续时间阈值（ms），低于此值的交互被忽略"})]})]})]}),`
`,n.jsx(e.h3,{id:"oninpcallback",children:"OnINPCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnINPCallback = (entry: PerformanceEventTiming) => void
`})}),`
`,n.jsx(e.p,{children:"回调参数 entry 包含："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"duration"}),": 交互延迟时间（毫秒）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name"}),": 事件类型（click、keydown 等）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"target"}),": 触发交互的 DOM 元素"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"processingStart"}),": 开始处理时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"processingEnd"}),": 处理结束时间"]}),`
`]}),`
`,n.jsx(e.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止观察"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"})," - 主函数实现"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"})," - 类型定义"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createPerformanceObserver"})," 监听 ",n.jsx(e.code,{children:"event"})," 类型"]}),`
`,n.jsxs(e.li,{children:["记录所有交互的延迟到 ",n.jsx(e.code,{children:"interactionMap"})]}),`
`,n.jsx(e.li,{children:"维护最长的 10 个交互延迟列表"}),`
`,n.jsx(e.li,{children:"计算第 98 百分位作为 INP 值"}),`
`,n.jsxs(e.li,{children:["根据 ",n.jsx(e.code,{children:"reportAllChanges"})," 决定是否立即报告"]}),`
`,n.jsxs(e.li,{children:["监听 ",n.jsx(e.code,{children:"visibilitychange"})," 事件，页面隐藏时报告最终值"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"interactionId"})," 区分不同交互"]}),`
`,n.jsx(e.li,{children:"同一交互多次触发时只取最长延迟"}),`
`,n.jsx(e.li,{children:"使用第 98 百分位算法计算 INP"}),`
`,n.jsx(e.li,{children:"BFCache 恢复时重置状态"}),`
`]}),`
`,n.jsx(e.h2,{id:"interactionid-详解",children:"interactionId 详解"}),`
`,n.jsx(e.h3,{id:"为什么要过滤没有-interactionid-的条目",children:"为什么要过滤没有 interactionId 的条目？"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 忽略没有 interactionId 的条目
if (!entry.interactionId) continue
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"interactionId"})," 是用于标识用户交互的唯一 ID。忽略没有 ",n.jsx(e.code,{children:"interactionId"})," 的条目是因为："]}),`
`,n.jsx(e.h3,{id:"1-并非所有-event-条目都代表用户交互",children:"1. 并非所有 event 条目都代表用户交互"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"PerformanceObserver"})," 监听 ",n.jsx(e.code,{children:"event"})," 类型时会捕获很多事件，但只有",n.jsx(e.strong,{children:"真正的用户交互"}),"才会有 ",n.jsx(e.code,{children:"interactionId"}),"："]}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"事件类型"}),n.jsx("th",{children:"有 interactionId"}),n.jsx("th",{children:"说明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"click"})}),n.jsx("td",{children:"✅"}),n.jsx("td",{children:"用户点击"})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:[n.jsx("code",{children:"keydown"}),"/",n.jsx("code",{children:"keyup"})]}),n.jsx("td",{children:"✅"}),n.jsx("td",{children:"键盘输入"})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:[n.jsx("code",{children:"pointerdown"}),"/",n.jsx("code",{children:"pointerup"})]}),n.jsx("td",{children:"✅"}),n.jsx("td",{children:"触摸/鼠标交互"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"mousemove"})}),n.jsx("td",{children:"❌"}),n.jsx("td",{children:"鼠标移动（非交互）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"scroll"})}),n.jsx("td",{children:"❌"}),n.jsx("td",{children:"滚动事件（非交互）"})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:[n.jsx("code",{children:"focus"}),"/",n.jsx("code",{children:"blur"})]}),n.jsx("td",{children:"❌"}),n.jsx("td",{children:"焦点变化（非交互）"})]})]})]}),`
`,n.jsx(e.h3,{id:"2-同一交互可能触发多个事件",children:"2. 同一交互可能触发多个事件"}),`
`,n.jsxs(e.p,{children:["一次点击会触发多个事件（",n.jsx(e.code,{children:"pointerdown"})," → ",n.jsx(e.code,{children:"mousedown"})," → ",n.jsx(e.code,{children:"pointerup"})," → ",n.jsx(e.code,{children:"mouseup"})," → ",n.jsx(e.code,{children:"click"}),"），它们共享同一个 ",n.jsx(e.code,{children:"interactionId"}),"，这样可以："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 对于同一个交互，只记录最长的延迟
if (existingLatency === undefined || duration > existingLatency) {
  interactionMap.set(entry.interactionId, duration)
}
`})}),`
`,n.jsx(e.h3,{id:"3-inp-只关心用户交互",children:"3. INP 只关心用户交互"}),`
`,n.jsxs(e.p,{children:['INP 的定义是"交互到下一次绘制"的延迟，只有真正的用户交互才应该被计入 INP 指标。没有 ',n.jsx(e.code,{children:"interactionId"})," 的事件不算用户交互，不应影响 INP 计算。"]}),`
`,n.jsx(e.h2,{id:"p98第-98-百分位详解",children:"P98（第 98 百分位）详解"}),`
`,n.jsx(e.h3,{id:"为什么使用-p98",children:"为什么使用 P98？"}),`
`,n.jsx(e.p,{children:"INP 使用第 98 百分位而不是最大值或平均值，主要原因："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"排除异常值"}),"：网页可能有极端的慢交互（如用户切换标签页后回来），使用 P98 可以排除最坏的 2% 异常情况"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"反映真实体验"}),"：P98 意味着 98% 的交互都比这个值更快，能代表绝大多数用户的实际体验"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"避免单次偶发问题的影响"}),"：一次网络抖动或系统卡顿不会严重影响整体指标"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Google 官方标准"}),"：这是 Chrome 团队定义 INP 指标时采用的标准算法"]}),`
`]}),`
`,n.jsx(e.h3,{id:"p98-计算公式",children:"P98 计算公式"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`P98 索引 = floor(交互总数 / 50)
`})}),`
`,n.jsx(e.p,{children:"这意味着："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1-49 次交互：取最大值（索引 0）"}),`
`,n.jsx(e.li,{children:"50-99 次交互：取第 2 大值（索引 1）"}),`
`,n.jsx(e.li,{children:"100-149 次交互：取第 3 大值（索引 2）"}),`
`,n.jsx(e.li,{children:"以此类推..."}),`
`]}),`
`,n.jsx(e.h3,{id:"代码实现解析",children:"代码实现解析"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// 常量定义：最多保留 10 个最长交互
const MAX_INTERACTIONS = 10

// 计算 INP 的核心函数
const computeINP = (): number => {
  const interactionCount = Math.min(
    longestInteractions.length,
    MAX_INTERACTIONS
  )

  if (interactionCount === 0) return 0

  // 按延迟从大到小排序
  longestInteractions.sort((a, b) => b.latency - a.latency)

  // 计算第 98 百分位索引
  // 交互数少于 50 个时，floor(n/50) = 0，取最大值
  const idx = Math.min(
    longestInteractions.length - 1,
    Math.floor(interactionCount / 50)
  )

  return longestInteractions[idx]?.latency || 0
}
`})}),`
`,n.jsx(e.h3,{id:"为什么只保留-10-个交互",children:"为什么只保留 10 个交互？"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"MAX_INTERACTIONS = 10"})," 的设计考量："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"内存优化"}),"：页面生命周期内可能有成百上千次交互，全部存储会消耗大量内存"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"P98 只需要最慢的几个"}),"：对于 500 次以内的交互，P98 最多需要第 10 大的值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"实际场景足够"}),"：大多数页面会话不会超过 500 次有意义的交互"]}),`
`]}),`
`,n.jsx(e.h3,{id:"交互次数与-p98-对照表",children:"交互次数与 P98 对照表"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"交互次数"}),n.jsx("th",{children:"P98 索引"}),n.jsx("th",{children:"取值说明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"1-49"}),n.jsx("td",{children:"0"}),n.jsx("td",{children:"最大值"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"50-99"}),n.jsx("td",{children:"1"}),n.jsx("td",{children:"第 2 大"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"100-149"}),n.jsx("td",{children:"2"}),n.jsx("td",{children:"第 3 大"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"150-199"}),n.jsx("td",{children:"3"}),n.jsx("td",{children:"第 4 大"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"..."}),n.jsx("td",{children:"..."}),n.jsx("td",{children:"..."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"450-499"}),n.jsx("td",{children:"9"}),n.jsx("td",{children:"第 10 大"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"500+"}),n.jsx("td",{children:"10"}),n.jsx("td",{children:"需要更多存储（当前实现限制为 10）"})]})]})]}),`
`,n.jsx(e.h3,{id:"与其他百分位的对比",children:"与其他百分位的对比"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"百分位"}),n.jsx("th",{children:"特点"}),n.jsx("th",{children:"适用场景"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"P50（中位数）"}),n.jsx("td",{children:"一半交互比这快"}),n.jsx("td",{children:'了解"典型"体验'})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"P75"}),n.jsx("td",{children:"75% 交互比这快"}),n.jsx("td",{children:"常规性能监控"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"P90"}),n.jsx("td",{children:"90% 交互比这快"}),n.jsx("td",{children:"性能敏感的应用"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:"P98"})}),n.jsx("td",{children:"98% 交互比这快"}),n.jsx("td",{children:n.jsx("strong",{children:"INP 官方标准"})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"P99/最大值"}),n.jsx("td",{children:"几乎所有交互"}),n.jsx("td",{children:"易受异常值影响"})]})]})]}),`
`,n.jsx(e.h3,{id:"实际示例",children:"实际示例"}),`
`,n.jsx(e.p,{children:"假设一个页面会话中有 60 次交互，延迟从高到低排序为："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`[500ms, 300ms, 250ms, 200ms, 180ms, 150ms, 120ms, 100ms, 80ms, 60ms, ...]
`})}),`
`,n.jsx(e.p,{children:"P98 计算："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"idx = Math.floor(60 / 50) = 1"})}),`
`,n.jsxs(e.li,{children:["INP = 第 2 大值 = ",n.jsx(e.strong,{children:"300ms"})]}),`
`]}),`
`,n.jsx(e.p,{children:"这意味着 98% 的交互（约 59 次）响应时间都在 300ms 以内。"})]})}function m(i={}){const{wrapper:e}={...d(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{m as default};
