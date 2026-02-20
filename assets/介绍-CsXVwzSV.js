import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as r}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import onFP from '../../../packages/element-utils/src/onFP'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFP((metric) => {
      action('FP 指标')({
        时间: \`\${Math.round(metric.value)}ms\`,
        名称: metric.name,
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('FP 将在首次绘制时报告')
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
      action('清理完成')('FP 监听已停止')
    } else {
      action('提示')('没有正在运行的监听')
    }
  }
}
`;function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onfp",children:"onFP"}),`
`,n.jsx(e.p,{children:"监听 FP (First Paint)。FP 衡量从导航开始到浏览器首次在屏幕上渲染像素的时间。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onFP"})," 是基于 ",n.jsx(e.code,{children:"PerformanceObserver"})," 封装的 FP 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"FP 指标：首次绘制时间，包括任何用户可见的内容（如背景色）"}),`
`,n.jsx(e.li,{children:"PerformanceObserver API：监听 paint 类型"}),`
`,n.jsx(e.li,{children:"FP vs FCP：FP 是任何绘制，FCP 是首次内容绘制"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"FP 与 FCP 的区别"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"FP (First Paint)：首次渲染任何像素（包括背景色）"}),`
`,n.jsx(e.li,{children:"FCP (First Contentful Paint)：首次渲染文本、图片等有意义内容"}),`
`,n.jsx(e.li,{children:"通常 FP ≤ FCP，两者差距反映页面内容加载效率"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"FP 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 1s"}),`
`,n.jsx(e.li,{children:"需要改进：1s - 2.5s"}),`
`,n.jsx(e.li,{children:"差：> 2.5s"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"白屏时间监控：FP 是用户看到页面变化的最早时间"}),`
`,n.jsx(e.li,{children:"性能优化：优化关键渲染路径减少 FP 时间"}),`
`,n.jsx(e.li,{children:"用户体验分析：结合 FCP 分析页面加载感知"}),`
`]}),`
`,n.jsx(e.h2,{id:"监听-fp",children:"监听 FP"}),`
`,n.jsx(e.p,{children:"监听 FP 指标，获取首次绘制时间。"}),`
`,n.jsx(r,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(e.p,{children:"调用返回的清理函数停止 FP 监听，释放资源。"}),`
`,n.jsx(r,{language:"typescript",children:t}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnFPCallback"})}),n.jsx("td",{children:"FP 回调函数"})]})})]}),`
`,n.jsx(e.h3,{id:"onfpcallback",children:"OnFPCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnFPCallback = (entry: PerformancePaintTiming) => void
`})}),`
`,n.jsx(e.p,{children:"回调参数 entry 包含："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"startTime"}),": FP 时间（毫秒）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"name"}),": 固定为 'first-paint'"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"entryType"}),": 固定为 'paint'"]}),`
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
`,n.jsxs(e.li,{children:["遍历 entries 查找 ",n.jsx(e.code,{children:"name === 'first-paint'"})," 的条目"]}),`
`,n.jsx(e.li,{children:"找到后触发回调并停止观察"}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"reported"})," 标志确保只报告一次"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"paint 类型会同时触发 first-paint 和 first-contentful-paint"}),`
`,n.jsxs(e.li,{children:["通过 ",n.jsx(e.code,{children:"name"})," 属性区分 FP 和 FCP"]}),`
`,n.jsx(e.li,{children:"FP 只会发生一次，找到后立即停止观察"}),`
`]})]})}function p(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{p as default};
