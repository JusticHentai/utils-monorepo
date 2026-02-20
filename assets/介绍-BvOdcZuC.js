import{j as r}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-Dgaj45eM.js";import{C as o}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const i=`import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const initDemo = () => {
  const monitor = new ErrorMonitor()

  const stop = monitor.observe((error) => {
    action('捕获错误')({
      type: error.type,
      message: error.message,
      timestamp: error.timestamp,
    })
  })

  action('开始监听')('已启动 JS / Resource / Promise 错误监控')

  // 5秒后停止监控
  setTimeout(() => {
    stop()
    action('监控状态')('已停止')
  }, 5000)
}

export default initDemo
`,d=`import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const resourceErrorDemo = () => {
  const monitor = new ErrorMonitor({
    jsError: false,
    promiseError: false,
    resourceError: true,
  })

  const stop = monitor.observe((error) => {
    action('捕获资源错误')(error)
  })

  const img = document.createElement('img')
  img.src = 'https://example.invalid/not-exist.png'
  document.body.appendChild(img)

  img.addEventListener('error', () => {
    document.body.removeChild(img)
    stop()
    action('演示完成')('已触发图片加载失败并停止监听')
  })
}

export default resourceErrorDemo
`,t=`import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const consoleErrorDemo = () => {
  const monitor = new ErrorMonitor({
    consoleError: true,
    jsError: false,
    resourceError: false,
    promiseError: false,
  })

  const stop = monitor.observe((error) => {
    action('捕获 console.error')(error)
  })

  console.error('模拟的 console.error 输出', { statusCode: 500 })

  stop()
  action('演示完成')('已捕获 console.error 并停止监听')
}

export default consoleErrorDemo
`,l=`import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'
import { ERROR_TYPE } from '../../../packages/element-utils/src/ErrorMonitor/interface'

const errorFilterDemo = () => {
  const monitor = new ErrorMonitor({
    consoleError: true,
    errorFilter: (error) => {
      if (error.type === ERROR_TYPE.CONSOLE && error.message.includes('忽略')) {
        action('被过滤')('该 console.error 被 errorFilter 拦截')
        return false
      }
      return true
    },
  })

  const stop = monitor.observe((error) => {
    action('通过过滤的错误')(error)
  })

  console.error('这条会被忽略')
  console.error('这条会通过过滤器')

  stop()
  action('演示完成')('errorFilter 过滤了包含"忽略"的错误')
}

export default errorFilterDemo
`,h=`import { action } from 'storybook/actions'

const cleanupDemo = (stop: (() => void) | null) => {
  if (stop) {
    stop()
    action('停止监听')('已停止所有错误监控')
  } else {
    action('提示')('当前没有正在进行的监听')
  }
}

export default cleanupDemo
`,j=`import { action } from 'storybook/actions'
import ErrorMonitor from '../../../packages/element-utils/src/ErrorMonitor'

const preCollectDemo = () => {
  // 1. 模拟提前收集（实际场景中 preCollectErrors.ts 的代码已内联在 <head> 中）
  // 这里手动模拟预收集逻辑
  const errors: { type: string; message: string; timestamp: number }[] = []
  ;(window as any).__PRE_COLLECTED_ERRORS__ = errors

  const onError = (event: ErrorEvent | Event) => {
    if (event instanceof ErrorEvent && event.message) {
      errors.push({
        type: 'JS',
        message: event.message,
        timestamp: Date.now(),
      })
    }
  }

  const onUnhandledRejection = (event: PromiseRejectionEvent) => {
    errors.push({
      type: 'PROMISE',
      message:
        event.reason instanceof Error
          ? event.reason.message
          : String(event.reason),
      timestamp: Date.now(),
    })
  }

  window.addEventListener('error', onError, true)
  window.addEventListener('unhandledrejection', onUnhandledRejection)

  action('预收集')('已启动提前错误收集')

  // 2. 模拟在 script 加载前发生的错误
  setTimeout(() => {
    throw new Error('script 加载前的错误')
  }, 100)

  // 3. 模拟 script 加载完成后，取出已收集的错误并上报
  setTimeout(() => {
    const preErrors = (window as any).__PRE_COLLECTED_ERRORS__ || []
    action('预收集结果')(\`共收集到 \${preErrors.length} 个错误\`)

    preErrors.forEach((error: any) => {
      action('预收集的错误')({
        type: error.type,
        message: error.message,
        timestamp: error.timestamp,
      })
    })

    // 4. 停止预收集，切换到正式监控
    window.removeEventListener('error', onError, true)
    window.removeEventListener('unhandledrejection', onUnhandledRejection)
    ;(window as any).__PRE_COLLECTED_ERRORS__ = []

    const monitor = new ErrorMonitor()
    monitor.observe((error) => {
      action('正式监控捕获')({
        type: error.type,
        message: error.message,
      })
    })

    action('监控状态')('已从预收集切换到正式监控')

    setTimeout(() => {
      monitor.stop()
      action('监控状态')('已停止')
    }, 5000)
  }, 1000)
}

export default preCollectDemo
`;function s(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errormonitor",children:"ErrorMonitor"}),`
`,r.jsx(e.p,{children:"统一监控页面中的 JS 运行时错误、资源加载错误、Promise 未捕获拒绝和 console.error 调用。"}),`
`,r.jsx(e.h2,{id:"详细介绍",children:"详细介绍"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"ErrorMonitor"})," 是一个前端错误监控类，将四种常见的错误捕获方式封装为统一的回调接口。通过 ",r.jsx(e.code,{children:"new ErrorMonitor(options)"})," 创建实例，调用 ",r.jsx(e.code,{children:"observe(callback)"})," 开始监听，返回一个停止函数用于清理所有事件监听器。"]}),`
`,r.jsx(e.p,{children:"底层分别通过以下机制捕获不同类型的错误："}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"JS 错误"}),"：",r.jsx(e.code,{children:"window.addEventListener('error')"})," — 捕获运行时异常"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"资源错误"}),"：",r.jsx(e.code,{children:"window.addEventListener('error', handler, true)"})," — 在捕获阶段拦截资源加载失败（",r.jsx(e.code,{children:"<script>"}),"、",r.jsx(e.code,{children:"<link>"}),"、",r.jsx(e.code,{children:"<img>"})," 等）"]}),`
`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsxs(e.p,{children:["资源加载错误本质上也是 ",r.jsx(e.code,{children:"error"})," 事件的一种，和 JS 运行时错误触发的是同一个事件类型。区别在于：JS 错误的 ",r.jsx(e.code,{children:"error"})," 事件会冒泡到 ",r.jsx(e.code,{children:"window"}),"，而资源加载错误",r.jsx(e.strong,{children:"不会冒泡"}),"，只能在捕获阶段拦截。因此 ",r.jsx(e.code,{children:"observeResourceError"})," 使用 ",r.jsx(e.code,{children:"addEventListener('error', handler, true)"})," 第三个参数 ",r.jsx(e.code,{children:"true"})," 启用捕获模式，并通过判断 ",r.jsx(e.code,{children:"event.target.tagName"})," 是否属于资源标签（SCRIPT/LINK/IMG/VIDEO/AUDIO）来区分两者。"]}),`
`]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Promise 错误"}),"：",r.jsx(e.code,{children:"window.addEventListener('unhandledrejection')"})," — 捕获未处理的 Promise 拒绝"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.strong,{children:"Console 错误"}),"：劫持 ",r.jsx(e.code,{children:"console.error"})," 方法 — 拦截控制台错误输出"]}),`
`]}),`
`,r.jsx(e.p,{children:"常见使用场景：前端异常监控上报、错误日志收集、生产环境质量监控。"}),`
`,r.jsx(e.h2,{id:"基础监听",children:"基础监听"}),`
`,r.jsxs(e.p,{children:["通过 ",r.jsx(e.code,{children:"new ErrorMonitor()"})," 创建实例，调用 ",r.jsx(e.code,{children:"observe(callback)"})," 即可开始监听，默认启用 JS / Resource / Promise 三种错误监控。返回的清理函数用于停止所有监听。"]}),`
`,r.jsx(o,{language:"typescript",children:i}),`
`,r.jsx(e.h2,{id:"资源加载错误监听",children:"资源加载错误监听"}),`
`,r.jsxs(e.p,{children:["通过动态创建一个指向不存在地址的 ",r.jsx(e.code,{children:"<img>"})," 标签来模拟资源加载失败。",r.jsx(e.code,{children:"observeResourceError"})," 在捕获阶段监听 ",r.jsx(e.code,{children:"error"})," 事件，通过 ",r.jsx(e.code,{children:"event.target.tagName"})," 判断是否为资源标签（SCRIPT/LINK/IMG/VIDEO/AUDIO），从而区分资源错误和 JS 运行时错误。"]}),`
`,r.jsx(o,{language:"typescript",children:d}),`
`,r.jsx(e.h2,{id:"console-错误监听",children:"Console 错误监听"}),`
`,r.jsxs(e.p,{children:["通过 ",r.jsx(e.code,{children:"consoleError: true"})," 开启 console.error 监控。可以单独开启某一类错误，关闭其他类型。"]}),`
`,r.jsx(o,{language:"typescript",children:t}),`
`,r.jsx(e.h2,{id:"错误过滤",children:"错误过滤"}),`
`,r.jsxs(e.p,{children:["通过 ",r.jsx(e.code,{children:"errorFilter"})," 可以对捕获的错误进行过滤，返回 ",r.jsx(e.code,{children:"false"})," 则忽略该错误。",r.jsx(e.code,{children:"errorFilter"})," 接收完整的 ",r.jsx(e.code,{children:"ErrorInfo"})," 对象，可以基于错误类型、消息内容、页面 URL 等任意字段进行判断。"]}),`
`,r.jsx(o,{language:"typescript",children:l}),`
`,r.jsx(e.h2,{id:"停止监听",children:"停止监听"}),`
`,r.jsxs(e.p,{children:["调用 ",r.jsx(e.code,{children:"observe()"})," 返回的清理函数即可停止所有错误监控，移除事件监听器并恢复被劫持的 ",r.jsx(e.code,{children:"console.error"}),"。"]}),`
`,r.jsx(o,{language:"typescript",children:h}),`
`,r.jsx(e.h2,{id:"提前收集错误",children:"提前收集错误"}),`
`,r.jsx(e.p,{children:"在实际场景中，业务 script 可能体积较大，加载需要一定时间。而在 script 加载完成之前，页面就可能已经产生了错误（如其他 script 报错、资源加载失败等）。这些错误如果没有提前捕获，就会丢失。"}),`
`,r.jsxs(e.p,{children:[r.jsx(e.code,{children:"preCollectErrors"})," 就是用来解决这个问题的：将 ",r.jsx(e.code,{children:"core/preCollectErrors.ts"})," 中的代码",r.jsxs(e.strong,{children:["直接复制内联到 HTML 的 ",r.jsx(e.code,{children:"<head>"})," 中"]}),"，在所有业务 script 之前执行。它是一个纯 ES5 的 IIFE（立即执行函数），不依赖任何模块系统，复制即可用。"]}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"工作原理："})}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:["立即挂载轻量级的 ",r.jsx(e.code,{children:"error"}),"（捕获阶段）和 ",r.jsx(e.code,{children:"unhandledrejection"})," 监听"]}),`
`,r.jsxs(e.li,{children:["将捕获的错误暂存到 ",r.jsx(e.code,{children:"window.__PRE_COLLECTED_ERRORS__"})," 数组中"]}),`
`,r.jsx(e.li,{children:"同时覆盖三种错误类型：JS 运行时错误、资源加载错误（SCRIPT/LINK/IMG/VIDEO/AUDIO）、Promise 未捕获拒绝"}),`
`]}),`
`,r.jsxs(e.blockquote,{children:[`
`,r.jsx(e.p,{children:r.jsxs(e.strong,{children:["为什么用捕获阶段 + ",r.jsx(e.code,{children:"target !== window"})," 区分错误类型？"]})}),`
`,r.jsxs(e.p,{children:["因为使用 ",r.jsx(e.code,{children:"addEventListener('error', handler, true)"})," 捕获模式后，JS 运行时错误和资源加载错误都会进入同一个 handler。两者的区别在于：JS 运行时错误的 ",r.jsx(e.code,{children:"event.target"})," 是 ",r.jsx(e.code,{children:"window"}),"，而资源加载错误的 ",r.jsx(e.code,{children:"event.target"})," 是触发错误的具体 DOM 元素（如 ",r.jsx(e.code,{children:"<script>"}),"、",r.jsx(e.code,{children:"<img>"}),"）。因此通过 ",r.jsx(e.code,{children:"target !== window"})," 判断即可将两者区分开来，避免把 JS 错误误判为资源错误。"]}),`
`]}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"暴露的全局变量："})}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"window.__PRE_COLLECTED_ERRORS__"}),"：错误暂存数组，主 script 加载后从中读取"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"window.__STOP_PRE_COLLECT__()"}),"：停止预收集的函数，切换到正式监控后调用"]}),`
`]}),`
`,r.jsx(e.p,{children:r.jsx(e.strong,{children:"使用步骤："})}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:["将 ",r.jsx(e.code,{children:"core/preCollectErrors.ts"})," 中的代码复制内联到 ",r.jsx(e.code,{children:"<head>"})," 中（在业务 script 之前）"]}),`
`,r.jsxs(e.li,{children:["主 script 加载后，从 ",r.jsx(e.code,{children:"window.__PRE_COLLECTED_ERRORS__"})," 取出错误进行上报"]}),`
`,r.jsxs(e.li,{children:["调用 ",r.jsx(e.code,{children:"window.__STOP_PRE_COLLECT__()"})," 停止预收集，清空数组，切换到 ",r.jsx(e.code,{children:"ErrorMonitor"})," 正式监控"]}),`
`]}),`
`,r.jsx(o,{language:"typescript",children:j}),`
`,r.jsx(e.h2,{id:"参数介绍",children:"参数介绍"}),`
`,r.jsx(e.h3,{id:"errormonitoroptions构造参数",children:"ErrorMonitorOptions（构造参数）"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"参数名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"jsError"}),r.jsx("td",{children:r.jsx("code",{children:"boolean"})}),r.jsxs("td",{children:["是否监控 JS 运行时错误，默认 ",r.jsx("code",{children:"true"})]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"resourceError"}),r.jsx("td",{children:r.jsx("code",{children:"boolean"})}),r.jsxs("td",{children:["是否监控资源加载错误，默认 ",r.jsx("code",{children:"true"})]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"promiseError"}),r.jsx("td",{children:r.jsx("code",{children:"boolean"})}),r.jsxs("td",{children:["是否监控 Promise 未捕获拒绝，默认 ",r.jsx("code",{children:"true"})]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"consoleError"}),r.jsx("td",{children:r.jsx("code",{children:"boolean"})}),r.jsxs("td",{children:["是否监控 console.error，默认 ",r.jsx("code",{children:"false"})]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"errorFilter"}),r.jsx("td",{children:r.jsx("code",{children:"(error: ErrorInfo) => boolean"})}),r.jsxs("td",{children:["错误过滤器，返回 ",r.jsx("code",{children:"false"})," 则忽略该错误"]})]})]})]}),`
`,r.jsx(e.h3,{id:"实例方法",children:"实例方法"}),`
`,r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"方法名"}),r.jsx("th",{children:"类型"}),r.jsx("th",{children:"描述"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"observe(callback)"}),r.jsx("td",{children:r.jsx("code",{children:"(callback: ErrorCallback) => StopListening"})}),r.jsx("td",{children:"开始监控所有错误，返回停止函数"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"stop()"}),r.jsx("td",{children:r.jsx("code",{children:"() => void"})}),r.jsx("td",{children:"停止所有监听"})]})]})]}),`
`,r.jsx(e.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:[`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"文件职责"}),"："]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"index.ts"}),"：ErrorMonitor 类，接收配置，按配置启动各类监听，返回统一的停止函数"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"interface.ts"}),"：类型定义，包含 ",r.jsx(e.code,{children:"ErrorInfo"}),"、",r.jsx(e.code,{children:"JSErrorInfo"}),"、",r.jsx(e.code,{children:"ResourceErrorInfo"}),"、",r.jsx(e.code,{children:"PromiseErrorInfo"}),"、",r.jsx(e.code,{children:"ConsoleErrorInfo"})," 及配置项"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"core/observeJSError.ts"}),"：通过 ",r.jsx(e.code,{children:"window error"})," 事件捕获 JS 运行时错误"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"core/observeResourceError.ts"}),"：通过捕获阶段的 ",r.jsx(e.code,{children:"error"})," 事件监听资源加载失败"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"core/observePromiseError.ts"}),"：通过 ",r.jsx(e.code,{children:"unhandledrejection"})," 事件捕获 Promise 错误"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"core/observeConsoleError.ts"}),"：通过劫持 ",r.jsx(e.code,{children:"console.error"})," 拦截控制台错误"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"core/preCollectErrors.ts"}),"：在 script 加载前提前收集错误，暂存到 ",r.jsx(e.code,{children:"window.__PRE_COLLECTED_ERRORS__"}),"，待主 script 加载后取出上报"]}),`
`]}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"核心流程"}),"："]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["构造函数接收 ",r.jsx(e.code,{children:"ErrorMonitorOptions"})," 配置"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"observe(callback)"})," 解构配置项，根据开关决定启动哪些 observe 函数"]}),`
`,r.jsxs(e.li,{children:["用 ",r.jsx(e.code,{children:"wrappedCallback"})," 包装回调，插入 ",r.jsx(e.code,{children:"errorFilter"})," 过滤逻辑"]}),`
`,r.jsxs(e.li,{children:["每个 observe 函数返回各自的 ",r.jsx(e.code,{children:"StopListening"}),"，统一收集到 ",r.jsx(e.code,{children:"stoppers"})," 数组"]}),`
`,r.jsx(e.li,{children:"返回的清理函数遍历调用所有 stopper"}),`
`]}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsxs(e.p,{children:[r.jsx(e.strong,{children:"关键技术点"}),"："]}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:["资源加载错误不冒泡，必须在",r.jsx(e.strong,{children:"捕获阶段"}),"（",r.jsx(e.code,{children:"addEventListener"})," 第三个参数 ",r.jsx(e.code,{children:"true"}),"）监听"]}),`
`,r.jsxs(e.li,{children:[r.jsx(e.code,{children:"console.error"})," 监控通过劫持原始方法实现，清理时恢复原方法引用"]}),`
`,r.jsxs(e.li,{children:["Promise 错误通过类型守卫区分 ",r.jsx(e.code,{children:"reason"})," 类型，提取不同格式的错误信息"]}),`
`,r.jsxs(e.li,{children:["所有错误信息统一包含 ",r.jsx(e.code,{children:"type"}),"、",r.jsx(e.code,{children:"message"}),"、",r.jsx(e.code,{children:"timestamp"}),"、",r.jsx(e.code,{children:"pageUrl"}),"、",r.jsx(e.code,{children:"userAgent"})," 基础字段"]}),`
`]}),`
`]}),`
`]})]})}function g(n={}){const{wrapper:e}={...c(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(s,{...n})}):s(n)}export{g as default};
