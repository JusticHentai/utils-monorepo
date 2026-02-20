import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const c=`import { action } from 'storybook/actions'
import resize from '../../../packages/element-utils/src/resize'
import { RESIZE_TYPE } from '../../../packages/element-utils/src/resize/interface'

export const createBasicDemo = (
  getCleanup: () => (() => void) | null,
  setCleanup: (fn: (() => void) | null) => void,
) => {
  return () => {
    const prev = getCleanup()
    if (prev) prev()

    const cleanup = resize({
      preset: { width: 1920, height: 1080 },
      type: RESIZE_TYPE.BOTH,
      cb: (ctx) => {
        const info = document.getElementById('resize-info')
        if (info) info.textContent = \`当前 ratio: \${ctx.ratio.toFixed(4)}\`

        action('resize 回调')({ ratio: ctx.ratio })
      },
    })

    setCleanup(cleanup)

    action('默认适配 (BOTH)')('已初始化, 预设 1920x1080, 取宽高最小比例')
  }
}
`,o=`import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getCleanup: () => (() => void) | null,
  clearCleanup: () => void,
) => {
  return () => {
    const cleanup = getCleanup()

    if (cleanup) {
      cleanup()
      clearCleanup()

      const info = document.getElementById('resize-info')
      if (info) info.textContent = '已销毁 resize 监听'

      action('销毁成功')('已移除 resize 和 orientationchange 事件监听')
    } else {
      action('销毁失败')('当前没有活跃的 resize 监听')
    }
  }
}
`,d=`import { action } from 'storybook/actions'
import resize from '../../../packages/element-utils/src/resize'
import { RESIZE_TYPE } from '../../../packages/element-utils/src/resize/interface'

export const createMaxRatioDemo = (
  getCleanup: () => (() => void) | null,
  setCleanup: (fn: (() => void) | null) => void,
) => {
  return () => {
    const prev = getCleanup()
    if (prev) prev()

    const cleanup = resize({
      preset: { width: 1920, height: 1080 },
      type: RESIZE_TYPE.BOTH,
      maxRatio: Infinity,
      cb: (ctx) => {
        const info = document.getElementById('resize-info')
        if (info) info.textContent = \`当前 ratio: \${ctx.ratio.toFixed(4)} (无上限)\`

        action('resize 回调')({ ratio: ctx.ratio })
      },
    })

    setCleanup(cleanup)

    action('允许放大 (maxRatio: Infinity)')(
      '已初始化, 大屏时 ratio 可超过 1',
    )
  }
}
`,l=`import { action } from 'storybook/actions'
import resize from '../../../packages/element-utils/src/resize'
import { RESIZE_TYPE } from '../../../packages/element-utils/src/resize/interface'

export const createWidthOnlyDemo = (
  getCleanup: () => (() => void) | null,
  setCleanup: (fn: (() => void) | null) => void,
) => {
  return () => {
    const prev = getCleanup()
    if (prev) prev()

    const cleanup = resize({
      preset: { width: 1920 },
      type: RESIZE_TYPE.WIDTH,
      debounce: 200,
      cb: (ctx) => {
        const info = document.getElementById('resize-info')
        if (info) info.textContent = \`当前 ratio: \${ctx.ratio.toFixed(4)} (仅宽度)\`

        action('resize 回调')({ ratio: ctx.ratio })
      },
    })

    setCleanup(cleanup)

    action('仅宽度适配 (WIDTH)')('已初始化, 仅按宽度比例适配, 防抖 200ms')
  }
}
`;function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"resize",children:"resize"}),`
`,e.jsxs(n.p,{children:["基于 rem 模式的响应式适配工具，通过动态计算设计稿与当前屏幕的缩放比例，自动设置 ",e.jsx(n.code,{children:"html"})," 的 ",e.jsx(n.code,{children:"fontSize"}),"，配合 CSS ",e.jsx(n.code,{children:"rem"})," 单位实现页面等比缩放。"]}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["resize 工具的核心思路是：根据预设的设计稿尺寸（默认 1920x1080）与当前浏览器窗口尺寸计算出一个缩放比例 ",e.jsx(n.code,{children:"ratio"}),"，然后将 ",e.jsx(n.code,{children:"html.style.fontSize"})," 设置为 ",e.jsx(n.code,{children:"100 * ratio + 'px'"}),"。开发时 CSS 中使用 ",e.jsx(n.code,{children:"rem"})," 单位（1rem = 设计稿中的 100px），即可实现页面元素随窗口大小等比缩放。"]}),`
`,e.jsx(n.p,{children:"典型应用场景包括："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据大屏"}),"：固定 1920x1080 设计稿，需要在不同分辨率显示器上等比展示"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PC 端响应式"}),"：需要在不同屏幕宽度下保持布局比例"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"全屏展示页"}),"：如汇报演示、看板等需要铺满屏幕的页面"]}),`
`]}),`
`,e.jsx(n.h2,{id:"默认适配-both-模式",children:"默认适配 (BOTH 模式)"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"RESIZE_TYPE.BOTH"})," 模式，同时考虑宽度和高度，取两者中较小的比例作为缩放系数，确保内容在任意比例屏幕上都不溢出。默认 ",e.jsx(n.code,{children:"maxRatio"})," 为 1，大屏不会放大。"]}),`
`,e.jsx(t,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"仅宽度适配-width-模式",children:"仅宽度适配 (WIDTH 模式)"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"RESIZE_TYPE.WIDTH"})," 模式，仅根据宽度计算比例，适合横向内容较多的页面。同时演示了 ",e.jsx(n.code,{children:"debounce: 200"})," 防抖配置，减少高频 resize 时的计算开销。"]}),`
`,e.jsx(t,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"允许放大-maxratio",children:"允许放大 (maxRatio)"}),`
`,e.jsxs(n.p,{children:["设置 ",e.jsx(n.code,{children:"maxRatio: Infinity"})," 后，当屏幕尺寸大于设计稿时，ratio 可以超过 1，内容会等比放大。适用于需要在超大屏幕上撑满显示的场景。"]}),`
`,e.jsx(t,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"销毁监听-cleanup",children:"销毁监听 (cleanup)"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"resize()"})," 返回一个 cleanup 函数，调用后会移除 ",e.jsx(n.code,{children:"resize"})," 和 ",e.jsx(n.code,{children:"orientationchange"})," 事件监听，避免在 SPA 路由切换时产生内存泄漏。"]}),`
`,e.jsx(t,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"默认值"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"options.preset"}),e.jsx("td",{children:e.jsx("code",{children:"{ width?: number; height?: number }"})}),e.jsx("td",{children:e.jsx("code",{children:"{ width: 1920, height: 1080 }"})}),e.jsx("td",{children:"预设的设计稿尺寸"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.type"}),e.jsx("td",{children:e.jsx("code",{children:"RESIZE_TYPE"})}),e.jsx("td",{children:e.jsx("code",{children:"RESIZE_TYPE.BOTH"})}),e.jsx("td",{children:"适配类型: WIDTH (仅宽度) / HEIGHT (仅高度) / BOTH (取最小比例)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.cb"}),e.jsx("td",{children:e.jsx("code",{children:"(ctx: ResizeOptions & { ratio: number }) => any"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"resize 时的回调函数，参数包含当前配置和计算出的比例"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.debounce"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"防抖时间（毫秒），减少高频触发"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.fullScreen"}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"-"}),e.jsx("td",{children:"body 是否设置全屏高度，处理移动端浏览器地址栏导致的高度问题"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"options.maxRatio"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsx("code",{children:"1"})}),e.jsx("td",{children:"最大缩放比例，默认 1 (大屏不放大)，设为 Infinity 则不限制"})]})]})]}),`
`,e.jsx(n.h3,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"cleanup 清理函数，调用后移除 resize 和 orientationchange 事件监听"})]})})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"文件职责"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"index.ts"})," — 入口文件，合并默认配置与用户配置，执行初始化并设置事件监听，返回 cleanup 函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"interface.ts"})," — 类型定义，包含 ",e.jsx(n.code,{children:"RESIZE_TYPE"})," 枚举、",e.jsx(n.code,{children:"ResizeOptions"})," 接口和默认配置"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"utils/getCurrentRatio.ts"})," — 根据适配类型和 maxRatio 计算当前缩放比例"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"utils/getScreenSize.ts"})," — 获取当前 ",e.jsx(n.code,{children:"html"})," 元素的 clientWidth/clientHeight"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"utils/setRemSize.ts"})," — 设置 ",e.jsx(n.code,{children:"html.style.fontSize = 100 * ratio + 'px'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"utils/setFullScreen.ts"})," — 设置 ",e.jsx(n.code,{children:"body.style.height"})," 为 ",e.jsx(n.code,{children:"window.innerHeight"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"utils/setResizeEvent.ts"})," — 注册 resize/orientationchange 事件（支持 debounce），返回清理函数"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"utils/update.ts"})," — 编排函数，依次执行：获取比例 → 设置 fontSize → 触发回调 → 设置全屏"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"核心流程"}),": ",e.jsx(n.code,{children:"resize(options)"})," → 合并配置 → ",e.jsx(n.code,{children:"update()"})," 初始化执行一次 → ",e.jsx(n.code,{children:"setResizeEvent()"})," 注册窗口事件 → 窗口变化时重新 ",e.jsx(n.code,{children:"update()"})," → 返回 cleanup 函数"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"关键技术点"}),": 以 100px 作为 rem 基准值简化换算（1rem = 设计稿 100px）；BOTH 模式取 ",e.jsx(n.code,{children:"Math.min(widthRatio, heightRatio, maxRatio)"})," 确保内容不溢出；支持 debounce 减少高频计算"]})]})}function m(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{m as default};
