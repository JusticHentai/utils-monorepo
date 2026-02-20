import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import onFID from '../../../packages/element-utils/src/onFID'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFID((metric) => {
      const entry = metric.entries[0] as PerformanceEventTiming
      action('FID 指标')({
        延迟: \`\${Math.round(metric.value)}ms\`,
        事件类型: entry?.name || '未知',
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('在页面上进行首次交互（点击、按键等）触发 FID')
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
    }

    action('清理完成')()
  }
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onfid",children:"onFID"}),`
`,n.jsx(e.p,{children:"监听 FID (First Input Delay)。FID 是首次输入延迟，衡量页面首次交互的响应性。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onFID"})," 是基于 ",n.jsx(e.code,{children:"PerformanceObserver"})," 封装的 FID 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"FID 指标：Core Web Vitals 三大核心指标之一"}),`
`,n.jsx(e.li,{children:"PerformanceObserver API：监听 first-input 类型"}),`
`,n.jsx(e.li,{children:"输入延迟：从用户首次交互到浏览器开始处理的时间差"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"FID 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 100 毫秒"}),`
`,n.jsx(e.li,{children:"需要改进：100 - 300 毫秒"}),`
`,n.jsx(e.li,{children:"差：> 300 毫秒"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：收集用户真实首次交互延迟"}),`
`,n.jsx(e.li,{children:"主线程优化：识别阻塞主线程的脚本"}),`
`,n.jsx(e.li,{children:"用户体验分析：评估页面交互响应性"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"只触发一次，精确捕获首次交互"}),`
`,n.jsx(e.li,{children:"自动计算输入延迟"}),`
`,n.jsx(e.li,{children:"区分交互类型（点击、按键等）"}),`
`]}),`
`,n.jsx(e.h2,{id:"初始化监听",children:"初始化监听"}),`
`,n.jsx(i,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(i,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnFIDCallback"})}),n.jsx("td",{children:"FID 回调函数"})]})})]}),`
`,n.jsx(e.h3,{id:"onfidcallback",children:"OnFIDCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnFIDCallback = (entry: PerformanceEntry) => void
`})}),`
`,n.jsx(e.p,{children:"回调参数 entry 包含："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"startTime"}),": 用户交互开始时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"processingStart"}),": 浏览器开始处理时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name"}),": 事件类型（如 pointerdown、keydown）"]}),`
`,n.jsx(e.li,{children:"FID = processingStart - startTime"}),`
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
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createPerformanceObserver"})," 监听 ",n.jsx(e.code,{children:"first-input"})]}),`
`,n.jsx(e.li,{children:"首次交互时触发回调"}),`
`,n.jsx(e.li,{children:"触发后自动停止观察"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"FID 只能测量首次交互，之后的交互不计入"}),`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"processingStart - startTime"})," 计算延迟"]}),`
`,n.jsxs(e.li,{children:["触发后自动调用 ",n.jsx(e.code,{children:"stop()"})," 停止监听"]}),`
`]})]})}function p(r={}){const{wrapper:e}={...c(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{p as default};
