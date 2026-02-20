import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import onTTFB from '../../../packages/element-utils/src/onTTFB'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onTTFB((metric) => {
      const entry = metric.entries[0] as PerformanceNavigationTiming
      action('TTFB 指标')({
        TTFB: \`\${Math.round(metric.value)}ms\`,
        DNS查询: \`\${Math.round((entry?.domainLookupEnd || 0) - (entry?.domainLookupStart || 0))}ms\`,
        TCP连接: \`\${Math.round((entry?.connectEnd || 0) - (entry?.connectStart || 0))}ms\`,
        rating: metric.rating,
        导航类型: metric.navigationType,
      })
    })

    setStopFn(stop ?? null)
    action('初始化成功')('TTFB 将在页面加载完成后报告')
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
      action('清理完成')('TTFB 监听已停止')
    } else {
      action('提示')('没有正在运行的监听')
    }
  }
}
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onttfb",children:"onTTFB"}),`
`,n.jsx(e.p,{children:"监听 TTFB (Time to First Byte)。TTFB 衡量从请求开始到收到第一个字节的时间，是服务器响应速度的重要指标。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onTTFB"})," 是基于 Navigation Timing API 封装的 TTFB 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TTFB 指标：衡量服务器响应速度的关键指标"}),`
`,n.jsx(e.li,{children:"Navigation Timing API：获取页面导航性能数据"}),`
`,n.jsx(e.li,{children:"PerformanceNavigationTiming：包含完整的导航时间线数据"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"TTFB 组成部分"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"DNS 查询时间"}),`
`,n.jsx(e.li,{children:"TCP 连接时间"}),`
`,n.jsx(e.li,{children:"SSL 握手时间（HTTPS）"}),`
`,n.jsx(e.li,{children:"请求发送到首字节响应时间"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"TTFB 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 800ms"}),`
`,n.jsx(e.li,{children:"需要改进：800ms - 1.8s"}),`
`,n.jsx(e.li,{children:"差：> 1.8s"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"服务器性能监控：评估后端响应速度"}),`
`,n.jsx(e.li,{children:"CDN 效果验证：对比使用 CDN 前后的 TTFB"}),`
`,n.jsx(e.li,{children:"网络诊断：分析各阶段耗时定位瓶颈"}),`
`]}),`
`,n.jsx(e.h2,{id:"监听-ttfb",children:"监听 TTFB"}),`
`,n.jsx(e.p,{children:"监听 TTFB 指标，获取完整的导航时间数据。"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(e.p,{children:"调用返回的清理函数停止 TTFB 监听，释放资源。"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnTTFBCallback"})}),n.jsx("td",{children:"TTFB 回调函数"})]})})]}),`
`,n.jsx(e.h3,{id:"onttfbcallback",children:"OnTTFBCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnTTFBCallback = (entry: PerformanceNavigationTiming) => void
`})}),`
`,n.jsx(e.p,{children:"回调参数 entry 包含："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"responseStart"}),": TTFB 时间（毫秒）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"domainLookupStart/End"}),": DNS 查询时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"connectStart/End"}),": TCP 连接时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"requestStart"}),": 请求开始时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type"}),": 导航类型（navigate、reload、back_forward 等）"]}),`
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
`,n.jsxs(e.li,{children:["检查 ",n.jsx(e.code,{children:"document.readyState"})," 状态"]}),`
`,n.jsx(e.li,{children:"如果已加载完成，直接获取 navigation entry"}),`
`,n.jsxs(e.li,{children:["否则监听 ",n.jsx(e.code,{children:"load"})," 事件后获取"]}),`
`,n.jsxs(e.li,{children:["从 ",n.jsx(e.code,{children:"performance.getEntriesByType('navigation')"})," 获取数据"]}),`
`,n.jsx(e.li,{children:"监听 BFCache 恢复事件，重新上报"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"PerformanceNavigationTiming"})," 获取完整时间线"]}),`
`,n.jsx(e.li,{children:"区分页面已加载和未加载两种情况"}),`
`,n.jsx(e.li,{children:"BFCache 恢复时重置并重新上报"}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"responseStart"})," 作为 TTFB 值"]}),`
`]})]})}function p(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
