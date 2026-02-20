import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import onFCP from '../../../packages/element-utils/src/onFCP'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFCP((metric) => {
      action('FCP 指标')({
        时间: \`\${Math.round(metric.value)}ms\`,
        名称: metric.name,
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('FCP 通常在页面加载时已经触发，刷新页面可看到效果')
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
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onfcp",children:"onFCP"}),`
`,n.jsx(e.p,{children:"监听 FCP (First Contentful Paint)。FCP 是首次内容绘制时间，衡量页面首次渲染内容的速度。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onFCP"})," 是基于 ",n.jsx(e.code,{children:"PerformanceObserver"})," 封装的 FCP 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"FCP 指标：页面首次绘制文本、图片、非空白 canvas 或 SVG 的时间"}),`
`,n.jsx(e.li,{children:"PerformanceObserver API：监听 paint 类型"}),`
`,n.jsx(e.li,{children:"与 LCP 区别：FCP 是首次内容绘制，LCP 是最大内容绘制"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"FCP 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 1.8 秒"}),`
`,n.jsx(e.li,{children:"需要改进：1.8 - 3 秒"}),`
`,n.jsx(e.li,{children:"差：> 3 秒"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：评估页面首次渲染速度"}),`
`,n.jsx(e.li,{children:"白屏优化：监控白屏时间"}),`
`,n.jsx(e.li,{children:"用户体验：了解用户首次看到内容的时间"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"一次性触发，精确捕获首次内容绘制"}),`
`,n.jsx(e.li,{children:"自动过滤 first-paint 只获取 first-contentful-paint"}),`
`,n.jsx(e.li,{children:"触发后自动停止监听"}),`
`]}),`
`,n.jsx(e.h2,{id:"初始化监听",children:"初始化监听"}),`
`,n.jsx(r,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnFCPCallback"})}),n.jsx("td",{children:"FCP 回调函数"})]})})]}),`
`,n.jsx(e.h3,{id:"onfcpcallback",children:"OnFCPCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnFCPCallback = (entry: PerformanceEntry) => void
`})}),`
`,n.jsx(e.p,{children:"回调参数 entry 包含："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"startTime"}),": FCP 时间（毫秒）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name"}),": 固定为 'first-contentful-paint'"]}),`
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
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createPerformanceObserver"})," 监听 ",n.jsx(e.code,{children:"paint"})," 类型"]}),`
`,n.jsxs(e.li,{children:["从 entries 中查找 ",n.jsx(e.code,{children:"name === 'first-contentful-paint'"})," 的条目"]}),`
`,n.jsx(e.li,{children:"找到后触发回调并停止监听"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"paint 类型会返回 first-paint 和 first-contentful-paint 两种"}),`
`,n.jsx(e.li,{children:"需要过滤只获取 first-contentful-paint"}),`
`,n.jsxs(e.li,{children:["触发后自动调用 ",n.jsx(e.code,{children:"stop()"})," 停止监听"]}),`
`]})]})}function p(i={}){const{wrapper:e}={...c(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
