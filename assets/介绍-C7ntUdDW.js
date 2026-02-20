import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as l}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import onScroll from '../../../packages/element-utils/src/onScroll'

export const createStartListenDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    // 如果已经在监听，先停止
    const prevStopFn = getStopFn()
    if (prevStopFn) prevStopFn()

    const container = document.getElementById(
      'scroll-container'
    ) as HTMLElement

    const stopFn = onScroll(
      container,
      ({ x, y, direction }) => {
        action('滚动事件')({ x, y, direction })
      },
      { immediate: true }
    )

    setStopFn(stopFn)
    action('开始监听')('已开始监听滚动容器')
  }
}

export const createStopListenDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('停止监听')('已停止监听滚动')
    } else {
      action('停止监听')('当前没有监听中的滚动事件')
    }
  }
}
`,c=`import { action } from 'storybook/actions'
import onScroll from '../../../packages/element-utils/src/onScroll'

export const createThrottleDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    // 如果已经在监听，先停止
    const prevStopFn = getStopFn()
    if (prevStopFn) prevStopFn()

    const container = document.getElementById(
      'scroll-container'
    ) as HTMLElement

    const stopFn = onScroll(
      container,
      ({ x, y, direction }) => {
        action('节流滚动事件')({ x, y, direction, throttle: '100ms' })
      },
      { throttle: 100, immediate: true }
    )

    setStopFn(stopFn)
    action('开始节流监听')('已开始节流监听滚动容器（100ms）')
  }
}

export const createStopThrottleDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
      action('停止节流监听')('已停止节流监听滚动')
    } else {
      action('停止节流监听')('当前没有节流监听中的滚动事件')
    }
  }
}
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"onscroll",children:"onScroll"}),`
`,n.jsx(e.p,{children:"监听滚动事件，提供滚动位置和方向信息。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"onScroll"})," 是一个滚动事件监听工具，用于监听窗口（window）或指定 DOM 元素的滚动事件。它封装了原生滚动事件监听，并提供以下增强功能："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"滚动位置获取"}),"：实时获取水平和垂直滚动位置"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"滚动方向检测"}),"：自动计算滚动方向（上、下、左、右）"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"节流优化"}),"：内置节流功能，避免高频触发影响性能"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"被动事件支持"}),"：自动检测并使用 passive 事件监听，提升滚动性能"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"无限滚动加载"}),`
`,n.jsx(e.li,{children:"滚动动画效果"}),`
`,n.jsx(e.li,{children:"返回顶部按钮"}),`
`,n.jsx(e.li,{children:"导航栏显示/隐藏"}),`
`,n.jsx(e.li,{children:"滚动进度条"}),`
`]}),`
`,n.jsx(e.h2,{id:"基础用法",children:"基础用法"}),`
`,n.jsx(e.p,{children:"监听元素滚动，获取滚动位置和方向："}),`
`,n.jsx(t,{language:"typescript",children:i}),`
`,n.jsx(e.h2,{id:"节流监听",children:"节流监听"}),`
`,n.jsx(e.p,{children:"使用 throttle 选项减少回调触发频率，优化性能："}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"target"}),n.jsx("td",{children:n.jsx("code",{children:"EventTarget | null"})}),n.jsx("td",{children:"滚动目标，默认为 window"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"callback"}),n.jsx("td",{children:n.jsx("code",{children:"(params: ScrollParams) => void"})}),n.jsx("td",{children:"滚动回调函数"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"options"}),n.jsx("td",{children:n.jsx("code",{children:"OnScrollOptions"})}),n.jsx("td",{children:"配置选项（可选）"})]})]})]}),`
`,n.jsx(e.h2,{id:"onscrolloptions-配置",children:"OnScrollOptions 配置"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"默认值"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"throttle"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"0"}),n.jsx("td",{children:"节流时间（毫秒），0 表示不节流"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"immediate"}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:"false"}),n.jsx("td",{children:"是否立即执行一次回调"})]})]})]}),`
`,n.jsx(e.h2,{id:"scrollparams-回调参数",children:"ScrollParams 回调参数"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"参数名"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"x"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"水平滚动位置"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"y"}),n.jsx("td",{children:n.jsx("code",{children:"number"})}),n.jsx("td",{children:"垂直滚动位置"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"direction"}),n.jsx("td",{children:n.jsx("code",{children:"ScrollDirection"})}),n.jsx("td",{children:"滚动方向：'up' | 'down' | 'left' | 'right' | 'none'"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值",children:"返回值"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"返回值"}),n.jsx("th",{children:"类型"}),n.jsx("th",{children:"描述"})]})}),n.jsx("tbody",{children:n.jsxs("tr",{children:[n.jsx("td",{children:"cleanup"}),n.jsx("td",{children:n.jsx("code",{children:"() => void"})}),n.jsx("td",{children:"清理函数，调用后停止监听滚动事件"})]})})]}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件职责",children:"文件职责"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"index.ts"}),"：主入口文件，导出 ",n.jsx(e.code,{children:"onScroll"})," 函数"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"interface.ts"}),"：类型定义文件，定义 ",n.jsx(e.code,{children:"ScrollParams"}),"、",n.jsx(e.code,{children:"OnScrollOptions"})," 等类型"]}),`
`]}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"检查浏览器环境和目标元素有效性"}),`
`,n.jsx(e.li,{children:"初始化记录上一次滚动位置（lastX, lastY）"}),`
`,n.jsx(e.li,{children:"定义执行回调函数：获取当前滚动位置 → 计算滚动方向 → 调用用户回调 → 更新上次位置"}),`
`,n.jsx(e.li,{children:"根据 throttle 配置决定是否包装节流"}),`
`,n.jsx(e.li,{children:"如果设置 immediate，立即执行一次回调"}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"createEventListener"})," 添加滚动事件监听"]}),`
`,n.jsx(e.li,{children:"返回清理函数用于移除监听"}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"getScrollPosition"}),"：获取目标元素的滚动位置"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"getScrollDirection"}),"：根据位置变化计算滚动方向"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"throttle"}),"：节流函数，控制回调触发频率"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"supportPassiveEvents"}),"：检测是否支持 passive 事件，优化滚动性能"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"createEventListener"}),"：封装事件监听，自动返回清理函数"]}),`
`]}),`
`,n.jsx(e.h3,{id:"数据流向",children:"数据流向"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`滚动事件触发 → handler（可能节流）→ executeCallback
  → getScrollPosition（获取位置）
  → getScrollDirection（计算方向）
  → callback（用户回调）
  → 更新 lastX/lastY
`})})]})}function p(r={}){const{wrapper:e}={...l(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{p as default};
