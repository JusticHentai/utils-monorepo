import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

export const createStartObserveDemo = (
  getObserver: () => LongTaskObserver | null,
  setObserver: (obs: LongTaskObserver) => void
) => {
  return () => {
    // 如果已有观察器，先停止
    const prevObserver = getObserver()
    if (prevObserver) {
      prevObserver.stop()
    }

    // 创建新的观察器实例
    const observer = new LongTaskObserver()

    // 开始监听长任务
    observer.observe(
      (task) => {
        action('检测到长任务')({
          name: task.name,
          duration: \`\${task.duration.toFixed(2)}ms\`,
          startTime: \`\${task.startTime.toFixed(2)}ms\`,
          attribution: task.attribution,
        })
      },
      {
        threshold: 50, // 默认阈值 50ms
        reportExisting: true,
      }
    )

    setObserver(observer)
    action('开始监听')('长任务监听已启动，阈值: 50ms')
  }
}
`,c=`import { action } from 'storybook/actions'
import type LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

export const createStopObserveDemo = (
  getObserver: () => LongTaskObserver | null,
  clearObserver: () => void
) => {
  return () => {
    const observer = getObserver()

    if (observer) {
      // 停止前获取统计信息
      const stats = observer.getStats()
      observer.stop()
      observer.clear()
      clearObserver()

      action('停止监听')({
        message: '长任务监听已停止',
        finalStats: {
          count: stats.count,
          totalDuration: \`\${stats.totalDuration.toFixed(2)}ms\`,
          maxDuration: \`\${stats.maxDuration.toFixed(2)}ms\`,
          avgDuration: \`\${stats.avgDuration.toFixed(2)}ms\`,
        },
      })
    } else {
      action('停止监听')('当前没有活动的监听器')
    }
  }
}
`,d=`import { action } from 'storybook/actions'

/**
 * 触发长任务演示
 * 通过阻塞主线程来模拟长任务
 */
const triggerLongTaskDemo = () => {
  action('触发长任务')('开始执行 100ms 的阻塞任务...')

  const startTime = performance.now()

  // 阻塞主线程 100ms（超过 50ms 阈值会被检测为长任务）
  while (performance.now() - startTime < 100) {
    // 空循环阻塞主线程
  }

  const endTime = performance.now()
  const duration = endTime - startTime

  action('长任务完成')({
    actualDuration: \`\${duration.toFixed(2)}ms\`,
    message: '如果监听已启动，应该会在 Actions 面板看到检测到的长任务',
  })
}

export default triggerLongTaskDemo
`,l=`import { action } from 'storybook/actions'
import type LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

/**
 * 获取长任务统计信息演示
 * 使用当前观察器实例获取已记录的长任务统计
 */
export const createGetStatsDemo = (
  getObserver: () => LongTaskObserver | null
) => {
  return () => {
    const observer = getObserver()

    if (!observer) {
      action('统计信息')({
        message: '请先点击"开始监听长任务"按钮',
      })
      return
    }

    const stats = observer.getStats()

    if (stats.count === 0) {
      action('统计信息')({
        message: '暂无记录的长任务',
        hint: '点击"触发长任务"按钮来生成一些长任务',
      })
    } else {
      action('统计信息')({
        count: stats.count,
        totalDuration: \`\${stats.totalDuration.toFixed(2)}ms\`,
        maxDuration: \`\${stats.maxDuration.toFixed(2)}ms\`,
        avgDuration: \`\${stats.avgDuration.toFixed(2)}ms\`,
        entries: stats.entries.map((entry) => ({
          name: entry.name,
          duration: \`\${entry.duration.toFixed(2)}ms\`,
          startTime: \`\${entry.startTime.toFixed(2)}ms\`,
        })),
      })
    }
  }
}
`,a=`import { action } from 'storybook/actions'
import type LongTaskObserver from '../../../packages/element-utils/src/LongTaskMonitor'

/**
 * 计算总阻塞时间 (TBT) 演示
 * TBT 是所有长任务超过 50ms 的部分总和
 */
export const createCalculateTBTDemo = (
  getObserver: () => LongTaskObserver | null
) => {
  return () => {
    const observer = getObserver()

    if (!observer) {
      action('TBT 计算')({
        message: '请先点击"开始监听长任务"按钮',
      })
      return
    }

    // 计算从页面加载到当前时间的 TBT
    const tbt = observer.calculateTBT()

    action('TBT 计算结果')({
      tbt: \`\${tbt.toFixed(2)}ms\`,
      description: 'TBT (Total Blocking Time) 是所有长任务超过 50ms 的部分总和',
      formula: 'TBT = Σ(长任务持续时间 - 50ms)',
      goodThreshold: '< 200ms 为良好',
      needsImprovement: '200-600ms 需要改进',
      poor: '> 600ms 为较差',
    })
  }
}
`;function t(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"createlongtaskobserver",children:"createLongTaskObserver"}),`
`,n.jsx(e.p,{children:"创建长任务观察器实例，用于监控阻塞主线程超过 50ms 的任务。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"长任务 (Long Task)"})," 是指在主线程上执行时间超过 50ms 的任务。这类任务会阻塞用户交互，导致页面卡顿、响应延迟等问题。"]}),`
`,n.jsxs(e.p,{children:["该工具基于 ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming",rel:"nofollow",children:"Long Tasks API"})," 实现，提供以下能力："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"实时监控"}),"：通过 PerformanceObserver 实时捕获长任务"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"统计分析"}),"：自动统计长任务数量、总时长、最大时长、平均时长"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TBT 计算"}),"：计算总阻塞时间 (Total Blocking Time)，是 Web Vitals 重要指标之一"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"使用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控和优化"}),`
`,n.jsx(e.li,{children:"识别页面卡顿原因"}),`
`,n.jsx(e.li,{children:"Core Web Vitals 指标收集"}),`
`,n.jsx(e.li,{children:"用户体验分析"}),`
`]}),`
`,n.jsx(e.h2,{id:"开始监听长任务",children:"开始监听长任务"}),`
`,n.jsx(e.p,{children:"创建观察器实例并开始监听，每当检测到长任务时触发回调。"}),`
`,n.jsx(r,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"停止监听",children:"停止监听"}),`
`,n.jsx(e.p,{children:"停止监听并清理资源，可以获取最终的统计信息。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"触发长任务",children:"触发长任务"}),`
`,n.jsx(e.p,{children:"通过阻塞主线程来模拟长任务，用于测试监听功能。"}),`
`,n.jsx(r,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"获取统计信息",children:"获取统计信息"}),`
`,n.jsx(e.p,{children:"获取所有记录的长任务统计数据，包括数量、时长等信息。"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"计算-tbt",children:"计算 TBT"}),`
`,n.jsx(e.p,{children:"TBT (Total Blocking Time) 是 FCP 到 TTI 之间所有长任务阻塞部分的总和，是衡量页面交互性的重要指标。"}),`
`,n.jsx(r,{language:"typescript",children:a}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsx(e.h3,{id:"createlongtaskobserver-1",children:"createLongTaskObserver"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"返回值"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"observer"}),n.jsx("td",{children:n.jsx("code",{children:"LongTaskObserverInstance"})}),n.jsx("td",{children:"长任务观察器实例"})]})})]}),`
`,n.jsx(e.h3,{id:"observerobservecallback-options",children:"observer.observe(callback?, options?)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(task: LongTaskMetrics) => void"})}),n.jsx("td",{children:"可选，检测到长任务时的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.threshold"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"可选，持续时间阈值（ms），默认 50ms"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options.reportExisting"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"可选，是否上报已存在的长任务，默认 true"})]})]})]}),`
`,n.jsx(e.h3,{id:"observercalculatetbtfcptime-ttitime",children:"observer.calculateTBT(fcpTime?, ttiTime?)"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"fcpTime"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"可选，FCP 时间点，默认 0"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ttiTime"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"可选，TTI 时间点，默认 performance.now()"})]})]})]}),`
`,n.jsx(e.h3,{id:"longtaskmetrics",children:"LongTaskMetrics"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"name"}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:"任务名称"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"startTime"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"任务开始时间（相对于 navigationStart）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"duration"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"任务持续时间（ms）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"attribution"}),n.jsx("td",{children:n.jsx("code",{children:"TaskAttribution[]"})}),n.jsx("td",{children:"任务归因信息（来源容器等）"})]})]})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"文件职责"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：核心实现，包含观察器创建、监听、统计和 TBT 计算逻辑"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：类型定义，包含长任务指标、统计结果、配置选项等接口"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心流程"}),"："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"createLongTaskObserver()"})," 创建观察器实例"]}),`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"observe()"})," 通过 PerformanceObserver 监听 ",n.jsx(e.code,{children:"longtask"})," 类型条目"]}),`
`,n.jsx(e.li,{children:"检测到长任务时解析条目信息，存入内部缓存并触发回调"}),`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"getStats()"})," 或 ",n.jsx(e.code,{children:"calculateTBT()"})," 获取统计数据"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"关键技术点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"PerformanceObserver"})," API 监听 ",n.jsx(e.code,{children:"longtask"})," 类型"]}),`
`,n.jsx(e.li,{children:"长任务阈值默认 50ms（W3C 标准定义）"}),`
`,n.jsxs(e.li,{children:["TBT 计算公式：",n.jsx(e.code,{children:"Σ(duration - 50ms)"}),"，只计算超出 50ms 的部分"]}),`
`,n.jsxs(e.li,{children:["支持从 ",n.jsx(e.code,{children:"performance.getEntriesByType()"})," 获取历史长任务"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"数据流向"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`PerformanceObserver → parseLongTaskEntry → longTaskEntries[] → getStats/calculateTBT
`})})]})}function T(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{T as default};
