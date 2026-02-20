import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as c}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const t=`import { action } from 'storybook/actions'
import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

let cleanup: (() => void) | null = null

export const initBasicDemo = (element: HTMLElement) => {
  if (cleanup) {
    cleanup()
  }

  cleanup = scrollBottom(element, () => {
    action('滚动回调')('滚动到底部')
  })

  action('添加滚动监听')('已添加基础滚动监听')
}

export const removeBasicDemo = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
    action('移除滚动监听')('已移除基础滚动监听')
  } else {
    action('提示')('未添加监听')
  }
}
`,r=`import { action } from 'storybook/actions'
import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

let cleanup: (() => void) | null = null

export const initThresholdDemo = (element: HTMLElement) => {
  if (cleanup) {
    cleanup()
  }

  cleanup = scrollBottom(
    element,
    () => {
      action('滚动回调')('接近底部 50px')
    },
    { threshold: 50 }
  )

  action('添加滚动监听（带阈值）')('已添加滚动监听（阈值 50px）')
}

export const removeThresholdDemo = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
    action('移除滚动监听')('已移除阈值滚动监听')
  } else {
    action('提示')('未添加监听')
  }
}
`,o=`import { action } from 'storybook/actions'
import scrollBottom from '../../../packages/element-utils/src/scrollBottom'

let cleanup: (() => void) | null = null

export const initThrottleDemo = (element: HTMLElement) => {
  if (cleanup) {
    cleanup()
  }

  cleanup = scrollBottom(
    element,
    () => {
      action('滚动回调')('滚动到底部（节流 100ms）')
    },
    { threshold: 30, throttle: 100 }
  )

  action('添加滚动监听（带节流）')('已添加滚动监听（阈值 30px，节流 100ms）')
}

export const removeThrottleDemo = () => {
  if (cleanup) {
    cleanup()
    cleanup = null
    action('移除滚动监听')('已移除节流滚动监听')
  } else {
    action('提示')('未添加监听')
  }
}
`;function s(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"scrollbottom",children:"scrollBottom"}),`
`,n.jsx(l.p,{children:"监听元素滚动到底部事件。"}),`
`,n.jsx(l.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(l.p,{children:["scrollBottom 是一个滚动监听函数，核心作用是：",n.jsx(l.strong,{children:"监听指定元素滚动到底部时触发回调"}),"。"]}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"涉及的知识点"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"scroll 事件：监听滚动位置变化"}),`
`,n.jsx(l.li,{children:"scrollTop/scrollHeight/clientHeight：滚动位置计算"}),`
`,n.jsx(l.li,{children:"阈值判断：提前触发（距离底部还有 N 像素时触发）"}),`
`,n.jsx(l.li,{children:"节流优化：减少滚动事件频繁触发"}),`
`]}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"无限滚动：滚动到底部加载更多数据"}),`
`,n.jsx(l.li,{children:"懒加载：滚动到底部加载下一页内容"}),`
`,n.jsx(l.li,{children:"阅读进度：检测用户是否阅读完全文"}),`
`,n.jsx(l.li,{children:"表格滚动：固定表头的表格加载更多"}),`
`]}),`
`,n.jsxs(l.p,{children:[n.jsx(l.strong,{children:"优势"}),"："]}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"支持自定义阈值，可提前触发"}),`
`,n.jsx(l.li,{children:"支持节流，优化高频滚动性能"}),`
`,n.jsx(l.li,{children:"返回清理函数，便于组件卸载时移除监听"}),`
`,n.jsx(l.li,{children:"内部复用 onScroll 工具，自动获得 passive 事件优化"}),`
`]}),`
`,n.jsx(l.h2,{id:"基础示例",children:"基础示例"}),`
`,n.jsx(c,{language:"typescript",children:t}),`
`,n.jsx(l.h2,{id:"带阈值监听",children:"带阈值监听"}),`
`,n.jsx(c,{language:"typescript",children:r}),`
`,n.jsx(l.h2,{id:"带节流监听",children:"带节流监听"}),`
`,n.jsx(c,{language:"typescript",children:o}),`
`,n.jsx(l.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"element"}),n.jsx("td",{children:n.jsx("code",{children:"HTMLElement"})}),n.jsx("td",{children:"需要监听的 DOM 元素"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"cb"}),n.jsx("td",{children:n.jsx("code",{children:"ScrollBottomCallback"})}),n.jsx("td",{children:"滚动到底部时触发的回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"ScrollBottomOptions"})}),n.jsx("td",{children:"配置选项（可选）"})]})]})]}),`
`,n.jsx(l.h3,{id:"scrollbottomoptions",children:"ScrollBottomOptions"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"threshold"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"0"}),n.jsx("td",{children:"滚动到底部的阈值（像素），0 表示严格底部"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"throttle"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"0"}),n.jsx("td",{children:"节流时间（毫秒），0 表示不节流"})]})]})]}),`
`,n.jsx(l.h3,{id:"返回值",children:"返回值"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:["类型：",n.jsx(l.code,{children:"ScrollBottomCleanup"}),"（即 ",n.jsx(l.code,{children:"() => void"}),"）"]}),`
`,n.jsx(l.li,{children:"描述：移除事件监听的清理函数"}),`
`]}),`
`,n.jsx(l.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(l.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"文件"}),n.jsx("th",{children:"职责"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"index.ts"})}),n.jsx("td",{children:"主入口，scrollBottom 函数实现"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"interface.ts"})}),n.jsx("td",{children:"类型定义，包含 ScrollBottomCallback、ScrollBottomOptions、ScrollBottomCleanup"})]})]})]}),`
`,n.jsx(l.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(l.ol,{children:[`
`,n.jsx(l.li,{children:"内部调用 onScroll 工具绑定滚动监听"}),`
`,n.jsxs(l.li,{children:["每次滚动时计算：",n.jsx(l.code,{children:"scrollTop + clientHeight >= scrollHeight - threshold"})]}),`
`,n.jsx(l.li,{children:"满足条件则触发回调"}),`
`,n.jsx(l.li,{children:"返回 onScroll 的清理函数"}),`
`]}),`
`,n.jsx(l.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:["判断公式：",n.jsx(l.code,{children:"scrollTop >= scrollHeight - clientHeight - threshold"})]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.code,{children:"scrollTop"}),"：已滚动的距离"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.code,{children:"scrollHeight"}),"：内容总高度"]}),`
`,n.jsxs(l.li,{children:[n.jsx(l.code,{children:"clientHeight"}),"：可视区域高度"]}),`
`,n.jsx(l.li,{children:"threshold 为正数时提前触发，为 0 时到达底部触发"}),`
`,n.jsx(l.li,{children:"复用 onScroll 工具，自动支持 passive 事件和节流"}),`
`]})]})}function p(e={}){const{wrapper:l}={...i(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(s,{...e})}):s(e)}export{p as default};
