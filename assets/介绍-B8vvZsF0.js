import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as s}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import onCLS from '../../../packages/element-utils/src/onCLS'

export const createInitBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onCLS((metric) => {
      action('CLS 指标')({
        累积值: metric.value.toFixed(4),
        偏移次数: metric.entries.length,
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('CLS 将在页面隐藏时报告最终值，或切换标签页触发')
  }
}
`,o=`import { action } from 'storybook/actions'
import onCLS from '../../../packages/element-utils/src/onCLS'

export const createInitAllChangesDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onCLS(
      (metric) => {
        action('CLS 变化')({
          当前值: metric.value.toFixed(4),
          偏移次数: metric.entries.length,
          rating: metric.rating,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('初始化成功（报告所有变化）')('每次布局偏移都会触发回调')
  }
}
`,c=`import { action } from 'storybook/actions'

const triggerLayoutShiftDemo = () => {
  // 创建一个会导致布局偏移的元素
  const element = document.createElement('div')
  element.style.cssText = \`
    position: relative;
    width: 200px;
    height: 100px;
    background: #ff6b6b;
    margin: 20px auto;
    transition: none;
  \`
  element.textContent = '布局偏移元素'
  document.body.insertBefore(element, document.body.firstChild)

  // 稍后移除，模拟布局偏移
  setTimeout(() => {
    element.remove()
    action('触发布局偏移')('元素已移除，可能产生布局偏移')
  }, 100)
}

export default triggerLayoutShiftDemo
`,d=`import { action } from 'storybook/actions'

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
`;function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"oncls",children:"onCLS"}),`
`,n.jsx(e.p,{children:"监听 CLS (Cumulative Layout Shift)。CLS 是累积布局偏移，衡量页面视觉稳定性。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onCLS"})," 是基于 ",n.jsx(e.code,{children:"PerformanceObserver"})," 封装的 CLS 性能指标监听工具。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"CLS 指标：Core Web Vitals 三大核心指标之一"}),`
`,n.jsx(e.li,{children:"布局偏移：元素在没有用户交互的情况下发生位置移动"}),`
`,n.jsx(e.li,{children:"Session Window：连续偏移的分组计算方式"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"CLS 评分标准"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"好：≤ 0.1"}),`
`,n.jsx(e.li,{children:"需要改进：0.1 - 0.25"}),`
`,n.jsx(e.li,{children:"差：> 0.25"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"性能监控：收集用户真实 CLS 数据"}),`
`,n.jsx(e.li,{children:"布局优化：识别导致布局偏移的元素"}),`
`,n.jsx(e.li,{children:"广告优化：监控广告加载对布局的影响"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"自动计算累积偏移值"}),`
`,n.jsx(e.li,{children:"基于 Session Window 算法"}),`
`,n.jsx(e.li,{children:"过滤用户输入导致的偏移"}),`
`]}),`
`,n.jsx(e.h2,{id:"监听-cls最终值",children:"监听 CLS（最终值）"}),`
`,n.jsx(s,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"监听-cls所有变化",children:"监听 CLS（所有变化）"}),`
`,n.jsx(s,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"触发布局偏移",children:"触发布局偏移"}),`
`,n.jsx(s,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"清理监听",children:"清理监听"}),`
`,n.jsx(s,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"OnCLSCallback"})}),n.jsx("td",{children:"CLS 回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"reportAllChanges"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"可选，是否报告所有变化，默认为 false"})]})]})]}),`
`,n.jsx(e.h3,{id:"onclscallback",children:"OnCLSCallback"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`type OnCLSCallback = (value: number, entries: PerformanceEntry[]) => void
`})}),`
`,n.jsx(e.p,{children:"回调参数："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value"}),": CLS 累积值"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"entries"}),": 导致 CLS 的布局偏移条目数组"]}),`
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
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createPerformanceObserver"})," 监听 ",n.jsx(e.code,{children:"layout-shift"})]}),`
`,n.jsxs(e.li,{children:["过滤 ",n.jsx(e.code,{children:"hadRecentInput"})," 为 true 的条目（用户输入导致的偏移）"]}),`
`,n.jsx(e.li,{children:"基于 Session Window 算法计算 CLS"}),`
`,n.jsx(e.li,{children:"取最大的 session 值作为 CLS"}),`
`]}),`
`,n.jsx(e.h3,{id:"session-window-算法",children:"Session Window 算法"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"连续偏移间隔不超过 1 秒"}),`
`,n.jsx(e.li,{children:"单个 session 总时长不超过 5 秒"}),`
`,n.jsx(e.li,{children:"超过阈值则开始新的 session"}),`
`,n.jsx(e.li,{children:"最终 CLS 取所有 session 中的最大值"}),`
`]})]})}function u(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{u as default};
