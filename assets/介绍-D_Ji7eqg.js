import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-Dgaj45eM.js";import{C as t}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const o=`import { action } from 'storybook/actions'
import { createIntersectionObserver } from '../../../packages/element-utils/src/observer'

let stopIntersectionObserver: (() => void) | null = null

const intersectionDemo = () => {
  const initIntersection = () => {
    // 先清理旧的
    if (stopIntersectionObserver) {
      stopIntersectionObserver()
    }

    const target = document.querySelector('#observer-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    const { stop, isActive } = createIntersectionObserver(
      target,
      ({ isIntersecting, intersectionRatio, target: el }) => {
        action('IntersectionObserver 回调')({
          isIntersecting,
          intersectionRatio: intersectionRatio.toFixed(2),
          targetId: (el as HTMLElement).id,
        })
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px',
      }
    )

    stopIntersectionObserver = stop
    action('IntersectionObserver')({
      status: '已开始监听',
      isActive,
      说明: '滚动页面使目标元素进出视口，观察回调触发',
    })
  }

  const stopIntersection = () => {
    if (stopIntersectionObserver) {
      stopIntersectionObserver()
      stopIntersectionObserver = null
      action('IntersectionObserver')('已停止监听')
    }
  }

  return {
    initIntersection,
    stopIntersection,
  }
}

export default intersectionDemo
`,c=`import { action } from 'storybook/actions'
import { createMutationObserver } from '../../../packages/element-utils/src/observer'

let stopMutationObserver: (() => void) | null = null
let mutationCount = 0

const mutationDemo = () => {
  const initMutation = () => {
    // 先清理旧的
    if (stopMutationObserver) {
      stopMutationObserver()
    }

    const target = document.querySelector('#mutation-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    const { stop, isActive } = createMutationObserver(
      target,
      (mutations) => {
        mutations.forEach((mutation) => {
          action('MutationObserver 回调')({
            type: mutation.type,
            addedNodes: mutation.addedNodes.length,
            removedNodes: mutation.removedNodes.length,
            attributeName: mutation.attributeName,
            oldValue: mutation.oldValue,
          })
        })
      },
      {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true,
        attributeOldValue: true,
      }
    )

    stopMutationObserver = stop
    action('MutationObserver')({
      status: '已开始监听',
      isActive,
      说明: '点击触发 DOM 变化按钮查看效果',
    })
  }

  const stopMutation = () => {
    if (stopMutationObserver) {
      stopMutationObserver()
      stopMutationObserver = null
      action('MutationObserver')('已停止监听')
    }
  }

  const triggerMutation = () => {
    const target = document.querySelector('#mutation-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    mutationCount++

    // 触发属性变化
    target.setAttribute('data-count', String(mutationCount))

    // 触发子节点变化
    const newChild = document.createElement('span')
    newChild.textContent = \` [新增内容 \${mutationCount}]\`
    newChild.style.color = '#007bff'
    target.appendChild(newChild)

    action('触发变化')({
      attributeChange: \`data-count = \${mutationCount}\`,
      childAdded: true,
    })
  }

  return {
    initMutation,
    stopMutation,
    triggerMutation,
  }
}

export default mutationDemo
`,d=`import { action } from 'storybook/actions'
import { createResizeObserver } from '../../../packages/element-utils/src/observer'
import getElementSize from '../../../packages/element-utils/src/getElementSize'

let stopResizeObserver: (() => void) | null = null

const resizeDemo = () => {
  const initResize = () => {
    // 先清理旧的
    if (stopResizeObserver) {
      stopResizeObserver()
    }

    const target = document.querySelector('#observer-target')
    if (!target) {
      action('错误')('未找到目标元素')
      return
    }

    // 获取初始尺寸
    const initialSize = getElementSize(target)
    action('初始尺寸')(initialSize)

    const { stop, isActive } = createResizeObserver(
      target,
      ({
        width,
        height,
        borderBoxWidth,
        borderBoxHeight,
        devicePixelContentBoxWidth,
        devicePixelContentBoxHeight,
      }) => {
        action('ResizeObserver 回调')({
          contentBox: { width: Math.round(width), height: Math.round(height) },
          borderBox: {
            width: Math.round(borderBoxWidth),
            height: Math.round(borderBoxHeight),
          },
          devicePixelContentBox: {
            width: Math.round(devicePixelContentBoxWidth),
            height: Math.round(devicePixelContentBoxHeight),
          },
        })
      }
    )

    stopResizeObserver = stop
    action('ResizeObserver')({
      status: '已开始监听',
      isActive,
      tip: '拖动目标元素右下角调整大小',
    })
  }

  const stopResize = () => {
    if (stopResizeObserver) {
      stopResizeObserver()
      stopResizeObserver = null
      action('ResizeObserver')('已停止监听')
    }
  }

  return {
    initResize,
    stopResize,
  }
}

export default resizeDemo
`,l=`import { action } from 'storybook/actions'
import { createPerformanceObserver } from '../../../packages/element-utils/src/observer'
import { supportEntryType } from '../../../packages/element-utils/src/supportPerformanceObserver'

const stopFunctions: Array<() => void> = []

const performanceDemo = () => {
  const initPerformance = () => {
    // 先清理旧的
    stopFunctions.forEach((stop) => stop())
    stopFunctions.length = 0

    // 监听 LCP
    if (supportEntryType('largest-contentful-paint')) {
      const { stop: stopLCP } = createPerformanceObserver(
        'largest-contentful-paint',
        (entries) => {
          const entry = entries[entries.length - 1]
          if (entry) {
            action('LCP (最大内容绘制)')({
              time: Math.round(entry.startTime) + 'ms',
              size: (entry as any).size,
              element: (entry as any).element?.tagName,
              说明: 'Largest Contentful Paint - 最大内容元素渲染时间',
            })
          }
        }
      )
      stopFunctions.push(stopLCP)
    }

    // 监听长任务
    if (supportEntryType('longtask')) {
      const { stop: stopLongTask } = createPerformanceObserver(
        'longtask',
        (entries) => {
          entries.forEach((entry) => {
            action('长任务')({
              duration: Math.round(entry.duration) + 'ms',
              startTime: Math.round(entry.startTime) + 'ms',
              说明: '超过 50ms 的任务会阻塞主线程',
            })
          })
        }
      )
      stopFunctions.push(stopLongTask)
    }

    // 监听资源加载
    if (supportEntryType('resource')) {
      const { stop: stopResource } = createPerformanceObserver(
        'resource',
        (entries) => {
          entries.forEach((entry) => {
            const resourceEntry = entry as PerformanceResourceTiming
            if (
              ['img', 'script', 'css', 'fetch', 'xmlhttprequest'].includes(
                resourceEntry.initiatorType
              )
            ) {
              action('资源加载')({
                name: resourceEntry.name.split('/').pop(),
                type: resourceEntry.initiatorType,
                duration: Math.round(resourceEntry.duration) + 'ms',
                transferSize: resourceEntry.transferSize + ' bytes',
              })
            }
          })
        }
      )
      stopFunctions.push(stopResource)
    }

    action('PerformanceObserver')({
      status: '已开始监听',
      listeners: stopFunctions.length,
      监听项: [
        supportEntryType('largest-contentful-paint') && 'LCP',
        supportEntryType('longtask') && '长任务',
        supportEntryType('resource') && '资源加载',
      ].filter(Boolean),
    })
  }

  const initCustomPerformance = () => {
    // 演示 createPerformanceObserver 的自定义用法
    stopFunctions.forEach((stop) => stop())
    stopFunctions.length = 0

    // 监听 mark 和 measure
    if (supportEntryType('mark')) {
      const { stop: stopMark } = createPerformanceObserver(
        'mark',
        (entries) => {
          entries.forEach((entry) => {
            action('Performance Mark')({
              name: entry.name,
              startTime: Math.round(entry.startTime) + 'ms',
            })
          })
        }
      )
      stopFunctions.push(stopMark)
    }

    if (supportEntryType('measure')) {
      const { stop: stopMeasure } = createPerformanceObserver(
        'measure',
        (entries) => {
          entries.forEach((entry) => {
            action('Performance Measure')({
              name: entry.name,
              duration: Math.round(entry.duration) + 'ms',
              startTime: Math.round(entry.startTime) + 'ms',
            })
          })
        }
      )
      stopFunctions.push(stopMeasure)
    }

    // 创建一些测试 mark 和 measure
    performance.mark('demo-start')
    setTimeout(() => {
      performance.mark('demo-end')
      performance.measure('demo-duration', 'demo-start', 'demo-end')
    }, 100)

    action('自定义性能监控')({
      status: '已开始监听 mark 和 measure',
      说明: '可以用于自定义性能打点',
    })
  }

  const stopPerformance = () => {
    stopFunctions.forEach((stop) => stop())
    stopFunctions.length = 0
    action('PerformanceObserver')('已停止所有监听')
  }

  return {
    initPerformance,
    initCustomPerformance,
    stopPerformance,
  }
}

export default performanceDemo
`;function s(r){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"observer-统一观察器工具库",children:"Observer 统一观察器工具库"}),`
`,n.jsx(e.p,{children:"Observer 是一个功能完善的浏览器观察器统一封装库，整合了多种原生 Web API，提供统一的接口和更好的开发体验。"}),`
`,n.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,n.jsx(e.p,{children:"Observer 工具库封装了浏览器原生的四种观察器 API："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"IntersectionObserver"}),": 用于异步监测元素与视口的交叉状态"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MutationObserver"}),": 用于监听 DOM 树的变化"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ResizeObserver"}),": 用于监听元素尺寸的变化"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PerformanceObserver"}),": 用于监听性能相关的指标"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"优势"}),"："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"统一的 API 设计，学习成本低"}),`
`,n.jsx(e.li,{children:"支持暂停/恢复，灵活控制观察行为"}),`
`,n.jsx(e.li,{children:"TypeScript 类型完善"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"相关独立工具"}),"："]}),`
`,n.jsx(e.p,{children:"基于这些 Observer 封装的便捷工具已拆分为独立模块："}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"分类"}),n.jsx("th",{children:"工具"}),n.jsx("th",{children:"说明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"IntersectionObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onEnterViewport"})}),n.jsx("td",{children:"一次性监听元素进入视口"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"IntersectionObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onLeaveViewport"})}),n.jsx("td",{children:"一次性监听元素离开视口"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"IntersectionObserver"}),n.jsx("td",{children:n.jsx("code",{children:"createLazyLoadObserver"})}),n.jsx("td",{children:"批量懒加载观察器"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"MutationObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onAttributeChange"})}),n.jsx("td",{children:"监听属性变化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"MutationObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onChildListChange"})}),n.jsx("td",{children:"监听子节点变化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"MutationObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onTextContentChange"})}),n.jsx("td",{children:"监听文本内容变化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ResizeObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onElementResize"})}),n.jsx("td",{children:"监听元素尺寸变化（带防抖）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ResizeObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onWidthChange"})}),n.jsx("td",{children:"监听宽度变化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"ResizeObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onHeightChange"})}),n.jsx("td",{children:"监听高度变化"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PerformanceObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onLCP"})}),n.jsx("td",{children:"监听 LCP 指标"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PerformanceObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onFID"})}),n.jsx("td",{children:"监听 FID 指标"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PerformanceObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onCLS"})}),n.jsx("td",{children:"监听 CLS 指标"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PerformanceObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onFCP"})}),n.jsx("td",{children:"监听 FCP 指标"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PerformanceObserver"}),n.jsx("td",{children:n.jsx("code",{children:"onLongTask"})}),n.jsx("td",{children:"监听长任务"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PerformanceObserver"}),n.jsx("td",{children:n.jsx("code",{children:"resourceMonitor"})}),n.jsx("td",{children:"监听资源加载"})]})]})]}),`
`,n.jsx(e.h2,{id:"intersectionobserver---元素可见性检测",children:"IntersectionObserver - 元素可见性检测"}),`
`,n.jsxs(e.p,{children:["用于监听元素与视口或祖先元素的交叉状态。底层使用浏览器原生 IntersectionObserver API，相比传统的 ",n.jsx(e.code,{children:"scroll + getBoundingClientRect()"})," 方案，性能更优，不会阻塞主线程。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"懒加载图片和组件"}),`
`,n.jsx(e.li,{children:"无限滚动列表"}),`
`,n.jsx(e.li,{children:"曝光统计埋点"}),`
`,n.jsx(e.li,{children:"动画触发（进入视口时播放）"}),`
`]}),`
`,n.jsx(t,{language:"typescript",children:o}),`
`,n.jsx(e.h2,{id:"mutationobserver---dom-变化监听",children:"MutationObserver - DOM 变化监听"}),`
`,n.jsx(e.p,{children:"用于监听 DOM 树的变化，包括子节点增删、属性变化、文本内容变化等。底层使用 MutationObserver API，采用微任务队列批量处理变化，避免频繁回调。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"监听第三方库对 DOM 的修改"}),`
`,n.jsx(e.li,{children:"实现撤销/重做功能"}),`
`,n.jsx(e.li,{children:"表单自动保存"}),`
`,n.jsx(e.li,{children:"富文本编辑器变化监听"}),`
`]}),`
`,n.jsx(t,{language:"typescript",children:c}),`
`,n.jsx(e.h2,{id:"resizeobserver---元素尺寸监听",children:"ResizeObserver - 元素尺寸监听"}),`
`,n.jsxs(e.p,{children:["用于监听元素尺寸变化，比 ",n.jsx(e.code,{children:"window.resize"})," 事件更精确。底层使用 ResizeObserver API，可以精确监听任意元素的尺寸变化。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"常用场景"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"响应式组件布局"}),`
`,n.jsx(e.li,{children:"图表/Canvas 自适应"}),`
`,n.jsx(e.li,{children:"虚拟列表高度计算"}),`
`,n.jsx(e.li,{children:"编辑器面板拖拽调整"}),`
`]}),`
`,n.jsx(t,{language:"typescript",children:d}),`
`,n.jsx(e.h2,{id:"performanceobserver---性能指标监控",children:"PerformanceObserver - 性能指标监控"}),`
`,n.jsx(e.p,{children:"用于监听 Web 性能指标，包括 Google 提出的核心 Web Vitals。底层使用 PerformanceObserver API，可以监听各种性能条目。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"核心指标说明"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"LCP (Largest Contentful Paint)"}),": 最大内容绘制，衡量加载性能，良好阈值 < 2.5s"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"FID (First Input Delay)"}),": 首次输入延迟，衡量交互性，良好阈值 < 100ms"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CLS (Cumulative Layout Shift)"}),": 累积布局偏移，衡量视觉稳定性，良好阈值 < 0.1"]}),`
`]}),`
`,n.jsx(t,{language:"typescript",children:l}),`
`,n.jsx(e.h2,{id:"api-参考",children:"API 参考"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"函数名"}),n.jsx("th",{children:"参数"}),n.jsx("th",{children:"描述"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"createIntersectionObserver"})}),n.jsx("td",{children:n.jsx("code",{children:"(target, callback, options?)"})}),n.jsx("td",{children:"创建可暂停的 IntersectionObserver"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"createMutationObserver"})}),n.jsx("td",{children:n.jsx("code",{children:"(target, callback, options?)"})}),n.jsx("td",{children:"创建可暂停的 MutationObserver"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"createResizeObserver"})}),n.jsx("td",{children:n.jsx("code",{children:"(target, callback, options?)"})}),n.jsx("td",{children:"创建可暂停的 ResizeObserver"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"createPerformanceObserver"})}),n.jsx("td",{children:n.jsx("code",{children:"(type, callback, options?)"})}),n.jsx("td",{children:"创建可暂停的 PerformanceObserver"})]})]})]}),`
`,n.jsx(e.h2,{id:"返回值类型",children:"返回值类型"}),`
`,n.jsxs(e.p,{children:["所有 ",n.jsx(e.code,{children:"create*Observer"})," 函数返回 ",n.jsx(e.code,{children:"PausableObserver"})," 对象："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface PausableObserver<T> {
  /** 观察器实例 */
  observer: T | null
  /** 是否正在观察 */
  isActive: boolean
  /** 暂停观察 */
  pause: () => void
  /** 恢复观察 */
  resume: () => void
  /** 停止并断开观察器 */
  stop: () => void
}
`})}),`
`,n.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,n.jsx(e.h3,{id:"文件结构",children:"文件结构"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`observer/
├── index.ts              # 统一导出入口
├── interface.ts          # 类型定义
└── core/
    ├── intersectionObserver.ts  # IntersectionObserver 封装
    ├── mutationObserver.ts      # MutationObserver 封装
    ├── resizeObserver.ts        # ResizeObserver 封装
    └── performanceObserver.ts   # PerformanceObserver 封装
`})}),`
`,n.jsx(e.h3,{id:"核心流程",children:"核心流程"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"create*Observer"})," 创建观察器实例"]}),`
`,n.jsx(e.li,{children:"观察器开始监听目标元素/事件"}),`
`,n.jsx(e.li,{children:"变化发生时触发用户回调函数"}),`
`,n.jsxs(e.li,{children:["支持 ",n.jsx(e.code,{children:"pause/resume"})," 暂停恢复观察"]}),`
`,n.jsxs(e.li,{children:["调用 ",n.jsx(e.code,{children:"stop"})," 停止观察"]}),`
`]}),`
`,n.jsx(e.h3,{id:"关键技术点",children:"关键技术点"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"IntersectionObserver"}),": 异步回调，不阻塞主线程"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"MutationObserver"}),": 微任务队列批量处理变化"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ResizeObserver"}),": 支持 content-box 和 border-box"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PerformanceObserver"}),": 支持 buffered 获取历史条目"]}),`
`]})]})}function m(r={}){const{wrapper:e}={...i(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(s,{...r})}):s(r)}export{m as default};
