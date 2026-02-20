import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import getPaintMetrics from '../../../packages/element-utils/src/getPaintMetrics'

const basicDemo = () => {
  const metrics = getPaintMetrics()

  if (!metrics) {
    action('getPaintMetrics')('Paint Timing 数据不可用')
    return
  }

  action('绘制性能指标')({
    'FP (First Paint)': \`\${Math.round(metrics.FP)}ms\`,
    'FP 评级': metrics.FPRating,
    'FCP (First Contentful Paint)': \`\${Math.round(metrics.FCP)}ms\`,
    'FCP 评级': metrics.FCPRating,
  })
}

export default basicDemo
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"getpaintmetrics",children:"getPaintMetrics"}),`
`,n.jsx(e.p,{children:"获取绘制性能指标（FP / FCP）。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getPaintMetrics"})," 基于 Paint Timing API 获取首次绘制（FP）和首次内容绘制（FCP）时间，并通过 ",n.jsx(e.code,{children:"getMetricRating"})," 计算评级。"]}),`
`,n.jsxs(e.p,{children:["FP 是浏览器首次将像素渲染到屏幕的时间，FCP 是首次渲染 DOM 内容（文本、图片等）的时间。两者都基于 ",n.jsx(e.code,{children:"performance.getEntriesByType('paint')"})," 获取。"]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"FP"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"First Paint 时间 (ms)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FCP"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"First Contentful Paint 时间 (ms)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FPRating"}),n.jsx("td",{children:n.jsx("code",{children:"MetricRating"})}),n.jsx("td",{children:"FP 评级 (good / needs-improvement / poor)"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"FCPRating"}),n.jsx("td",{children:n.jsx("code",{children:"MetricRating"})}),n.jsx("td",{children:"FCP 评级"})]})]})]}),`
`,n.jsxs(e.p,{children:["如果 Performance API 或 Paint Timing 数据不可用则返回 ",n.jsx(e.code,{children:"undefined"}),"。"]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文件职责"}),"：",n.jsx(e.code,{children:"index.ts"})," 从 paint 和 navigation 条目计算 FP/FCP 时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"核心流程"}),"：通过 ",n.jsx(e.code,{children:"performance.getEntriesByType('paint')"})," 找到 ",n.jsx(e.code,{children:"first-paint"})," 和 ",n.jsx(e.code,{children:"first-contentful-paint"})," 条目，减去 ",n.jsx(e.code,{children:"fetchStart"})," 得到相对时间"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关键技术点"}),"：使用 ",n.jsx(e.code,{children:"getMetricRating"})," 对 FP/FCP 进行评级"]}),`
`]})]})}function a(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{a as default};
