import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-C_s77IFb.js";import{C as s}from"./blocks-yt1LEit5.js";import"./iframe-6Q00UePB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BMbbdbFD.js";const c=`import { action } from 'storybook/actions'

import EarlyErrorQueue, {
  EARLY_ERROR_TYPE,
} from '../../../packages/element-utils/src/earlyErrorQueue'

const queueDemo = () => {
  const queue = new EarlyErrorQueue({
    maxCount: 2,
    maxBytes: 4096,
  })
  const timestamp = Date.now()

  queue.push({
    type: EARLY_ERROR_TYPE.JS,
    message: 'Cannot read properties of undefined',
    timestamp,
    pageUrl: 'https://example.com/?token=secret&tab=home',
    userAgent: navigator.userAgent,
    count: 1,
    firstSeen: timestamp,
    lastSeen: timestamp,
    filename: 'https://cdn.example.com/app.js?token=secret',
    lineno: 10,
    colno: 20,
    stack: 'Error: Cannot read properties of undefined\\n    at Home.tsx:10:20',
  })

  queue.push({
    type: EARLY_ERROR_TYPE.JS,
    message: 'Cannot read properties of undefined',
    timestamp: timestamp + 1,
    pageUrl: 'https://example.com/?token=secret&tab=home',
    userAgent: navigator.userAgent,
    count: 1,
    firstSeen: timestamp + 1,
    lastSeen: timestamp + 1,
    filename: 'https://cdn.example.com/app.js?token=secret',
    lineno: 10,
    colno: 20,
    stack: 'Error: Cannot read properties of undefined\\n    at Home.tsx:10:20',
  })

  queue.push({
    type: EARLY_ERROR_TYPE.RESOURCE,
    message: 'Failed to load script: https://cdn.example.com/missing.js',
    timestamp: timestamp + 2,
    pageUrl: location.href,
    userAgent: navigator.userAgent,
    count: 1,
    firstSeen: timestamp + 2,
    lastSeen: timestamp + 2,
    tagName: 'SCRIPT',
    resourceUrl: 'https://cdn.example.com/missing.js?sid=secret',
  })

  action('队列内容')(queue.peek())
}

export default queueDemo
`,i=`import { action } from 'storybook/actions'

import {
  EARLY_ERROR_TYPE,
  type EarlyErrorGlobalQueue,
} from '../../../packages/element-utils/src/earlyErrorQueue'

declare global {
  interface Window {
    __EARLY_ERROR_QUEUE__?: EarlyErrorGlobalQueue
  }
}

const createBootstrapDemo = () => {
  return () => {
    const events: ReturnType<EarlyErrorGlobalQueue['take']> = []

    window.__EARLY_ERROR_QUEUE__ = {
      push: (event) => {
        const timestamp = Date.now()
        const stack = 'stack' in event ? event.stack : undefined

        events.push({
          type: EARLY_ERROR_TYPE.JS,
          message: String(event.message ?? 'storybook early error'),
          timestamp,
          pageUrl: location.href,
          userAgent: navigator.userAgent,
          count: 1,
          firstSeen: timestamp,
          lastSeen: timestamp,
          stack: String(stack ?? '').slice(0, 8192),
        })
      },
      take: () => {
        const copy = events.slice()
        events.length = 0
        return copy
      },
      peek: () => events.slice(),
      stop: () => action('bootstrap stop')('已停止早期监听'),
      getStats: () => ({
        count: events.length,
        bytes: JSON.stringify(events).length,
        dropped: 0,
      }),
    }

    window.__EARLY_ERROR_QUEUE__.push({
      type: EARLY_ERROR_TYPE.JS,
      message: 'script 加载前的错误',
      stack: 'Error: script 加载前的错误\\n    at inline-script:1:1',
    })

    Promise.reject(new Error('script 加载前的 Promise rejection')).catch(
      (error: Error) => {
        window.__EARLY_ERROR_QUEUE__?.push({
          type: EARLY_ERROR_TYPE.UNHANDLED_REJECTION,
          message: error.message,
          stack: error.stack,
        })
      }
    )

    action('bootstrap 队列')({
      events: window.__EARLY_ERROR_QUEUE__.peek?.(),
      stats: window.__EARLY_ERROR_QUEUE__.getStats?.(),
    })
  }
}

export default createBootstrapDemo
`,l=`import { action } from 'storybook/actions'

import EarlyErrorQueue, {
  EARLY_ERROR_FLUSH_REASON,
  EARLY_ERROR_TRANSPORT,
} from '../../../packages/element-utils/src/earlyErrorQueue'

const createFlushDemo = () => {
  return async () => {
    const queue = new EarlyErrorQueue()
    const capturedCount = queue.captureGlobal()

    const result = await queue.flush({
      url: '/storybook/mock-monitor/errors',
      transport: EARLY_ERROR_TRANSPORT.FETCH,
      reason: EARLY_ERROR_FLUSH_REASON.INIT,
      context: {
        appId: 'storybook-demo',
        release: '2026.05.12-demo',
        route: location.pathname,
        userId: 'storybook-user',
        sessionId: 'storybook-session',
        platform: 'web',
      },
      beforeSend: (payload) => {
        action('flush payload')(payload)
        return false
      },
    })

    action('flush 结果')({
      capturedCount,
      result,
    })
  }
}

export default createFlushDemo
`,o=`/* eslint-disable */
// @ts-nocheck

/**
 * Copy-only inline bootstrap.
 *
 * 这个文件不是模块入口，目标是直接复制到 HTML head 的 inline script 中。
 * 它只做早期错误捕获、有界缓存、隐私过滤和全局暴露，不依赖任何 import。
 */
;(function () {
  var GLOBAL_NAME = '__EARLY_ERROR_QUEUE__'
  var MAX_COUNT = 50
  var MAX_BYTES = 48 * 1024
  var MAX_AGE = 60 * 1000
  var MAX_STACK = 8 * 1024
  var MAX_MESSAGE = 1000
  var MAX_HTML = 300
  var SENSITIVE_KEYS =
    /token|ticket|sid|session|password|passwd|phone|mobile|email|idcard|identity|search|keyword|query/i
  var installedAt = Date.now ? Date.now() : +new Date()
  var queue = []
  var dropped = 0
  var bytes = 0
  var keys = {}
  var reportingObserver = null

  function now() {
    return Date.now ? Date.now() : +new Date()
  }

  function safeString(value) {
    if (value === undefined) return ''
    if (value === null) return 'null'
    if (typeof value === 'string') return value

    try {
      return JSON.stringify(value)
    } catch (_) {
      return String(value)
    }
  }

  function estimateBytes(value) {
    return safeString(value).length
  }

  function sanitizeUrl(url) {
    if (!url) return ''

    try {
      var parsedUrl = new URL(String(url), location.href)
      var params = parsedUrl.searchParams
      var keysList = []

      params.forEach(function (_value, key) {
        keysList.push(key)
      })

      for (var i = 0; i < keysList.length; i += 1) {
        if (SENSITIVE_KEYS.test(keysList[i])) {
          params.set(keysList[i], '[Filtered]')
        }
      }

      return parsedUrl.toString().slice(0, MAX_MESSAGE)
    } catch (_) {
      return String(url).slice(0, MAX_MESSAGE)
    }
  }

  function getViewport() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  function getConnection() {
    var connection = navigator.connection
    if (!connection) return undefined

    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    }
  }

  function createBase() {
    var timestamp = now()

    return {
      timestamp: timestamp,
      pageUrl: sanitizeUrl(location.href),
      userAgent: navigator.userAgent,
      viewport: getViewport(),
      connection: getConnection(),
      count: 1,
      firstSeen: timestamp,
      lastSeen: timestamp,
    }
  }

  function normalizeReason(reason) {
    if (reason instanceof Error) {
      return {
        message: String(reason.message || reason).slice(0, MAX_MESSAGE),
        stack: reason.stack
          ? String(reason.stack).slice(0, MAX_STACK)
          : undefined,
        reasonType: 'error',
      }
    }

    if (typeof reason === 'string') {
      return {
        message: reason.slice(0, MAX_MESSAGE),
        reasonType: 'string',
      }
    }

    return {
      message: safeString(reason).slice(0, MAX_MESSAGE),
      reasonType: reason === null ? 'null' : typeof reason,
    }
  }

  function getStackTop(stack) {
    return String(stack || '').split('\\n')[0] || ''
  }

  function getKey(event) {
    if (event.type === 'resource_error') {
      return [event.type, event.tagName, event.resourceUrl, event.message].join(
        '|'
      )
    }

    if (event.type === 'js_error') {
      return [
        event.type,
        event.message,
        event.filename,
        event.lineno,
        event.colno,
        getStackTop(event.stack),
      ].join('|')
    }

    if (event.type === 'unhandled_rejection') {
      return [event.type, event.message, getStackTop(event.stack)].join('|')
    }

    return [event.type, event.reportType, event.reportUrl, event.message].join(
      '|'
    )
  }

  function recalculateBytes() {
    bytes = estimateBytes(queue)
  }

  function trimQueue() {
    recalculateBytes()

    while (queue.length > MAX_COUNT || bytes > MAX_BYTES) {
      var removed = queue.shift()

      if (removed) {
        delete keys[getKey(removed)]
        dropped += 1
      }

      recalculateBytes()
    }
  }

  function push(event) {
    try {
      if (now() - installedAt > MAX_AGE) return

      event.message = safeString(event.message).slice(0, MAX_MESSAGE)
      event.pageUrl = sanitizeUrl(event.pageUrl || location.href)
      event.filename = sanitizeUrl(event.filename)
      event.resourceUrl = sanitizeUrl(event.resourceUrl)
      event.reportUrl = sanitizeUrl(event.reportUrl)
      event.stack = event.stack
        ? String(event.stack).slice(0, MAX_STACK)
        : undefined
      event.outerHTML = event.outerHTML
        ? String(event.outerHTML).slice(0, MAX_HTML)
        : undefined

      var key = getKey(event)
      var existing = keys[key]

      if (existing) {
        existing.count += 1
        existing.lastSeen = event.timestamp || now()
        recalculateBytes()
        return
      }

      queue.push(event)
      keys[key] = event
      trimQueue()
    } catch (_) {}
  }

  function onError(event) {
    var target = event.target || event.srcElement

    if (target && target !== window && target.tagName) {
      var url = target.src || target.href || ''

      push({
        type: 'resource_error',
        message:
          'Failed to load ' + String(target.tagName).toLowerCase() + ': ' + url,
        tagName: target.tagName,
        resourceUrl: url,
        outerHTML: target.outerHTML,
        timestamp: now(),
        pageUrl: location.href,
        userAgent: navigator.userAgent,
        viewport: getViewport(),
        connection: getConnection(),
        count: 1,
        firstSeen: now(),
        lastSeen: now(),
      })
      return
    }

    if (event.message) {
      var normalized = normalizeReason(event.error)
      var base = createBase()

      push({
        type: 'js_error',
        message: event.message || normalized.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: normalized.stack,
        timestamp: base.timestamp,
        pageUrl: base.pageUrl,
        userAgent: base.userAgent,
        viewport: base.viewport,
        connection: base.connection,
        count: base.count,
        firstSeen: base.firstSeen,
        lastSeen: base.lastSeen,
      })
    }
  }

  function onUnhandledRejection(event) {
    var normalized = normalizeReason(event.reason)
    var base = createBase()

    push({
      type: 'unhandled_rejection',
      message: normalized.message,
      reasonType: normalized.reasonType,
      stack: normalized.stack,
      timestamp: base.timestamp,
      pageUrl: base.pageUrl,
      userAgent: base.userAgent,
      viewport: base.viewport,
      connection: base.connection,
      count: base.count,
      firstSeen: base.firstSeen,
      lastSeen: base.lastSeen,
    })
  }

  function installReportingObserver() {
    if (!('ReportingObserver' in window)) return

    try {
      reportingObserver = new ReportingObserver(
        function (reports) {
          for (var i = 0; i < reports.length; i += 1) {
            var report = reports[i]
            var body =
              report.body && report.body.toJSON
                ? report.body.toJSON()
                : report.body
            var base = createBase()

            push({
              type: 'browser_report',
              message: report.type
                ? 'Browser report: ' + report.type
                : 'Browser report',
              reportType: report.type,
              reportUrl: report.url,
              body: body,
              timestamp: base.timestamp,
              pageUrl: base.pageUrl,
              userAgent: base.userAgent,
              viewport: base.viewport,
              connection: base.connection,
              count: base.count,
              firstSeen: base.firstSeen,
              lastSeen: base.lastSeen,
            })
          }
        },
        { buffered: true }
      )

      reportingObserver.observe()
    } catch (_) {}
  }

  function stop() {
    window.removeEventListener('error', onError, true)
    window.removeEventListener('unhandledrejection', onUnhandledRejection)

    if (reportingObserver && reportingObserver.disconnect) {
      reportingObserver.disconnect()
    }
  }

  window[GLOBAL_NAME] = {
    push: function (event) {
      var base = createBase()
      push({
        timestamp: base.timestamp,
        pageUrl: base.pageUrl,
        userAgent: base.userAgent,
        viewport: base.viewport,
        connection: base.connection,
        count: base.count,
        firstSeen: base.firstSeen,
        lastSeen: base.lastSeen,
        type: event.type || 'js_error',
        message: event.message || 'Unknown early error',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.stack,
        tagName: event.tagName,
        resourceUrl: event.resourceUrl || event.url,
        outerHTML: event.outerHTML,
        reasonType: event.reasonType,
        reportType: event.reportType,
        reportUrl: event.reportUrl,
        body: event.body,
        extra: event.extra,
      })
    },
    take: function () {
      var copy = queue.slice()
      queue.length = 0
      keys = {}
      bytes = 0
      return copy
    },
    peek: function () {
      return queue.slice()
    },
    stop: stop,
    getStats: function () {
      return {
        count: queue.length,
        bytes: bytes,
        dropped: dropped,
      }
    },
  }

  window.addEventListener('error', onError, true)
  window.addEventListener('unhandledrejection', onUnhandledRejection)
  installReportingObserver()
})()
`;function d(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"earlyerrorqueue",children:"earlyErrorQueue"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"earlyErrorQueue"})," 用于处理监控 SDK 初始化前发生的早期错误。它配合一段可直接复制到 HTML head 的 inline bootstrap 使用：bootstrap 先捕获 ",e.jsx(n.code,{children:"error"}),"、资源加载失败、",e.jsx(n.code,{children:"unhandledrejection"})," 和 Reporting API 报告；完整 SDK 初始化后再接管队列、补齐上下文并统一发送。"]}),`
`,e.jsx(n.h2,{id:"队列去重和限制",children:"队列去重和限制"}),`
`,e.jsxs(n.p,{children:["队列是有界 ring buffer，会限制条数、估算字节数和存活时间。同一错误重复出现时会合并 ",e.jsx(n.code,{children:"count"}),"，URL 会在进入队列前过滤常见敏感 query。"]}),`
`,e.jsx(s,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"inline-bootstrap",children:"inline bootstrap"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"script.tsx"})," 不是 import 入口，它是 copy-only 片段。实际落地时将文件中的 IIFE 复制到业务首个 script 之前，越早执行越能覆盖首屏白屏前的错误。"]}),`
`,e.jsx(s,{language:"typescript",children:o}),`
`,e.jsxs(n.p,{children:["Storybook 中为了避免直接安装全局监听，使用模拟队列演示 bootstrap 暴露的 ",e.jsx(n.code,{children:"window.__EARLY_ERROR_QUEUE__"})," 结构。"]}),`
`,e.jsx(s,{language:"typescript",children:i}),`
`,e.jsx(n.h2,{id:"接管并-flush",children:"接管并 flush"}),`
`,e.jsxs(n.p,{children:["SDK 初始化完成后创建 ",e.jsx(n.code,{children:"EarlyErrorQueue"}),"，调用 ",e.jsx(n.code,{children:"captureGlobal()"})," 读取并停止全局 bootstrap 监听，再通过 ",e.jsx(n.code,{children:"flush()"})," 补齐 ",e.jsx(n.code,{children:"appId"}),"、",e.jsx(n.code,{children:"release"}),"、",e.jsx(n.code,{children:"route"}),"、",e.jsx(n.code,{children:"userId"})," 等上下文。"]}),`
`,e.jsx(s,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"源码文件说明",children:"源码文件说明"}),`
`,e.jsx(n.h3,{id:"对外入口",children:"对外入口"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"关键点"}),e.jsx("th",{children:"使用方式"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"src/earlyErrorQueue/index.ts"})}),e.jsx("td",{children:"可被业务 SDK 正常 import 的接管层。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["封装 ",e.jsx("code",{children:"EarlyErrorQueue"})," 类，提供 ",e.jsx("code",{children:"push"}),`、
`,e.jsx("code",{children:"captureGlobal"}),"、",e.jsx("code",{children:"take"}),"、",e.jsx("code",{children:"peek"}),`、
`,e.jsx("code",{children:"clear"}),"、",e.jsx("code",{children:"createPayload"}),"、",e.jsx("code",{children:"flush"}),`。
队列数组、去重 `,e.jsx("code",{children:"Map"}),`、字节统计和丢弃计数都由 class
私有字段维护。`]})}),e.jsx("td",{children:e.jsx(n.p,{children:`完整监控 SDK 初始化完成后 import 它，接管 inline bootstrap
中的全局队列并发送。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"src/earlyErrorQueue/interface.ts"})}),e.jsx("td",{children:"集中定义公共类型、枚举和 payload 协议。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["包含 ",e.jsx("code",{children:"EARLY_ERROR_TYPE"}),"、",e.jsx("code",{children:"EARLY_ERROR_TRANSPORT"}),`、
`,e.jsx("code",{children:"EARLY_ERROR_FLUSH_REASON"}),`、事件联合类型、队列配置、 flush
配置、发送结果、默认限制常量和全局队列协议。`]})}),e.jsx("td",{children:e.jsx(n.p,{children:"业务侧需要约束上报上下文、payload 或自定义过滤函数时从这里引用类型。"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"src/earlyErrorQueue/script.tsx"})}),e.jsx("td",{children:"copy-only inline bootstrap 片段。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["不作为模块 import。它直接安装 ",e.jsx("code",{children:"error"}),`、
`,e.jsx("code",{children:"unhandledrejection"}),` 和 Reporting API 监听，并暴露
`,e.jsxs("code",{children:["window.",e.jsx(n.strong,{children:"EARLY_ERROR_QUEUE"})]}),"。"]})}),e.jsx("td",{children:"复制到 HTML head 的首个业务 script 前，越早执行越能捕获首屏错误。"})]})]})]}),`
`,e.jsx(n.h3,{id:"core-文件",children:"core 文件"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"关键点"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"core/sanitizeEvent.ts"})}),e.jsx("td",{children:"入队前清洗事件。"}),e.jsx("td",{children:e.jsx(n.p,{children:`统一截断 message、stack、outerHTML，并对
pageUrl、filename、resourceUrl、 reportUrl 做敏感 query 过滤。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"core/sanitizeUrl.ts"})}),e.jsx("td",{children:"URL 隐私过滤。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["用 ",e.jsx("code",{children:"URL"})," 和 ",e.jsx("code",{children:"searchParams"}),` 解析 query；相对 URL
依赖调用方传入 `,e.jsx("code",{children:"baseUrl"}),`。命中敏感 key 时替换为
`,e.jsx("code",{children:"[Filtered]"}),"；解析失败时安全截断字符串。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"../isBrowser/index.ts"})}),e.jsx("td",{children:"公共工具，判断浏览器运行环境。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["TS 模块统一复用它判断 ",e.jsx("code",{children:"window"})," / ",e.jsx("code",{children:"document"}),`
是否存在，避免每个 helper 重复写环境探测。copy-only script 因为不能
import，保留自包含判断。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"core/getErrorKey.ts"})}),e.jsx("td",{children:"生成去重 key。"}),e.jsx("td",{children:e.jsx(n.p,{children:`JS 错误使用 type、message、filename、lineno、colno、stackTop；
资源错误使用 type、tagName、resourceUrl、message；Promise 和 Reporting
API 使用各自可稳定定位的字段。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"../estimateBytes/index.ts"})}),e.jsx("td",{children:"公共工具，估算队列和 payload 体积。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["优先使用 ",e.jsx("code",{children:"TextEncoder"})," 计算字节数，缺失时降级为字符串长度。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"../safeStringify/index.ts"})}),e.jsx("td",{children:"公共工具，安全序列化未知对象。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["处理循环引用，避免错误原因或队列估算时因为 ",e.jsx("code",{children:"JSON.stringify"}),`
失败而影响页面。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"../truncateText/index.ts"})}),e.jsx("td",{children:"公共工具，按最大长度硬截断文本。"}),e.jsx("td",{children:e.jsx(n.p,{children:`不追加省略号，供
message、stack、outerHTML、URL、序列化后的未知错误原因复用，保证 payload
字段严格受长度限制。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"../supportFetch/index.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["公共工具，判断 ",e.jsx("code",{children:"fetch"})," 是否可调用。"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"sendEarlyErrorPayload"}),` 的 fetch 分支复用它，避免散落
`,e.jsx("code",{children:"typeof fetch"})," 判断。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"../supportSendBeacon/index.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["公共工具，判断 ",e.jsx("code",{children:"navigator.sendBeacon"})," 是否可调用。"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["内部先复用 ",e.jsx("code",{children:"isBrowser()"}),"，beacon 分支只关心是否可尝试发送。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"core/normalizeUnknownError.ts"})}),e.jsx("td",{children:"标准化未知错误原因。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["将 ",e.jsx("code",{children:"Error"}),`、字符串、对象、null、基础类型统一转换为 message、
stack 和 reasonType，主要服务 Promise rejection。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"browser/createBaseEvent.ts"})}),e.jsx("td",{children:"生成早期事件通用字段。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[`采集 timestamp、pageUrl、userAgent、viewport、connection、count、
firstSeen、lastSeen，保证所有事件结构一致。浏览器环境判断复用
`,e.jsx("code",{children:"isBrowser()"}),`，SSR 或非浏览器环境下返回空 URL、空 userAgent
或 undefined 快照。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"browser/createEvents.ts"})}),e.jsx("td",{children:"从浏览器事件生成标准早期错误事件。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["提供 ",e.jsx("code",{children:"createErrorEvent"}),`、
`,e.jsx("code",{children:"createUnhandledRejectionEvent"}),`、
`,e.jsx("code",{children:"createBrowserReportEvent"}),`。当前主要给后续扩展和测试复用，
inline script 为了可复制性保留了独立实现。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"browser/takeGlobalEarlyErrors.ts"})}),e.jsx("td",{children:"读取 window 全局 bootstrap 队列。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["默认读取 ",e.jsxs("code",{children:["window.",e.jsx(n.strong,{children:"EARLY_ERROR_QUEUE"})]}),"，调用"," ",`
`,e.jsx("code",{children:"take()"}),`
清空早期队列，并默认调用 `,e.jsx("code",{children:"stop()"})," 移除 bootstrap 监听。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"browser/enrichEarlyErrors.ts"})}),e.jsx("td",{children:"补齐初始化后的业务上下文。"}),e.jsx("td",{children:e.jsx(n.p,{children:`将
appId、release、buildId、route、userId、sessionId、experiment、platform
等上下文合并到早期事件上，并追加 flushedAt、flushReason、source。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"transport/sendEarlyErrorPayload.ts"})}),e.jsx("td",{children:"发送早期错误 payload。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[`常规阶段使用 fetch；页面隐藏或关闭阶段可用 sendBeacon，失败后降级为
`,e.jsx("code",{children:"fetch keepalive"}),"。小包限制按 ",e.jsx("code",{children:"60 KiB"})," 处理。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"storybook-文件说明",children:"Storybook 文件说明"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"文件"}),e.jsx("th",{children:"职责"}),e.jsx("th",{children:"展示内容"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stories/element-utils/earlyErrorQueue/index.stories.ts"})}),e.jsx("td",{children:"Storybook 注册入口。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["配置 title、component、layout 和 ",e.jsx("code",{children:"Demo"}),` 导出，让 Storybook
能加载 当前工具页面。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stories/element-utils/earlyErrorQueue/index.tsx"})}),e.jsx("td",{children:"演示组件入口。"}),e.jsx("td",{children:e.jsx(n.p,{children:`渲染三个按钮：队列去重和限制、模拟 inline bootstrap、接管并 flush。
它只组合 demo，不承载核心业务逻辑。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stories/element-utils/earlyErrorQueue/queueDemo.ts"})}),e.jsx("td",{children:"演示内存队列能力。"}),e.jsx("td",{children:e.jsx(n.p,{children:`构造重复 JS 错误和资源错误，展示去重计数、敏感 URL
过滤、最大条数限制后的 队列内容。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stories/element-utils/earlyErrorQueue/bootstrapDemo.ts"})}),e.jsx("td",{children:"模拟 inline bootstrap 暴露的全局协议。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["构造一个最小版 ",e.jsxs("code",{children:["window.",e.jsx(n.strong,{children:"EARLY_ERROR_QUEUE"})]}),`，
演示早期错误如何先进入全局队列。Storybook 中不直接执行真实 bootstrap，
避免污染全局监听。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stories/element-utils/earlyErrorQueue/flushDemo.ts"})}),e.jsx("td",{children:"演示 SDK 初始化后的接管流程。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["调用 ",e.jsx("code",{children:"captureGlobal()"})," 读取全局队列，再用"," ",`
`,e.jsx("code",{children:"flush()"}),`
补齐
appId、release、route、userId、sessionId、platform。为了避免真实请求，
demo 在 `,e.jsx("code",{children:"beforeSend"})," 中输出 payload 并取消发送。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stories/element-utils/earlyErrorQueue/介绍.mdx"})}),e.jsx("td",{children:"文档页。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[`解释能力边界、使用流程、参数、返回值、源码文件职责、Storybook 文件职责和
数据流向，并通过 `,e.jsx("code",{children:"?raw"})," 展示 demo 与 copy-only script 源码。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"函数级导读",children:"函数级导读"}),`
`,e.jsx(n.p,{children:"这一节用于回答“每个函数到底做了什么”。源码里只保留必要注释，完整导读放在 Storybook 文档里，避免 copy-only 脚本变重。"}),`
`,e.jsx(n.h3,{id:"earlyerrorqueue-类",children:"EarlyErrorQueue 类"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"输入"}),e.jsx("th",{children:"输出"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"为什么需要"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"constructor(options)"})}),e.jsx("td",{children:e.jsx("code",{children:"EarlyErrorQueueOptions"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"EarlyErrorQueue"})," 实例"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`合并 maxCount、maxBytes、maxAge、beforeEnqueue 等运行时配置，并创建
`,e.jsx("code",{children:"queue"}),"、",e.jsx("code",{children:"keys"}),"、",e.jsx("code",{children:"bytes"}),`、
`,e.jsx("code",{children:"dropped"})," 这些实例私有状态。"]})}),e.jsx("td",{children:e.jsx(n.p,{children:"让 SDK 侧可以用统一类管理早期错误，而不是直接操作底层数组和全局变量。"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"push(event)"})}),e.jsx("td",{children:e.jsx("code",{children:"EarlyErrorEvent"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx(n.p,{children:"把一个已标准化的早期错误推入内部队列。实际入队前会经过清洗、过滤、去重和队列裁剪。"})}),e.jsx("td",{children:e.jsx(n.p,{children:`用于 SDK 主动补充早期错误，或把测试/业务自定义错误接入同一套 flush
流程。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"captureGlobal()"})}),e.jsx("td",{children:"无"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["调用 ",e.jsx("code",{children:"takeGlobalEarlyErrors()"}),` 读取
`,e.jsxs("code",{children:["window.",e.jsx(n.strong,{children:"EARLY_ERROR_QUEUE"})]}),`
，把全局队列中的事件逐条推入内部队列。`]})}),e.jsx("td",{children:e.jsx(n.p,{children:`这是 inline bootstrap 和完整 SDK 的交接点。SDK 初始化完成后，通过它拿回
bootstrap 暂存的错误。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"take()"})}),e.jsx("td",{children:"无"}),e.jsx("td",{children:e.jsx("code",{children:"EarlyErrorEvent[]"})}),e.jsx("td",{children:"返回当前队列副本，并清空内部队列。"}),e.jsx("td",{children:"避免同一批早期错误被重复上报。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"peek()"})}),e.jsx("td",{children:"无"}),e.jsx("td",{children:e.jsx("code",{children:"EarlyErrorEvent[]"})}),e.jsx("td",{children:"返回当前队列副本，但不清空。"}),e.jsx("td",{children:"用于调试、Storybook 展示、上报前预览。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:"无"}),e.jsx("td",{children:e.jsx("code",{children:"void"})}),e.jsx("td",{children:"清空队列、去重索引和当前字节统计。"}),e.jsx("td",{children:"用于业务主动放弃早期错误，或测试用例重置状态。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createPayload(options)"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["flush 配置中除 ",e.jsx("code",{children:"url"}),"、",e.jsx("code",{children:"transport"}),`、
`,e.jsx("code",{children:"credentials"}),`
外的字段`]})}),e.jsx("td",{children:e.jsx("code",{children:"EarlyErrorPayload"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["读取当前队列统计，调用 ",e.jsx("code",{children:"take()"}),` 清空队列，再用
`,e.jsx("code",{children:"enrichEarlyErrors()"}),` 补齐业务上下文，最后组装
source、reason、context、 events、stats。`]})}),e.jsx("td",{children:"把“缓存的事实事件”转换成“后端可落库、可排查的上报载荷”。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"flush(options)"})}),e.jsx("td",{children:e.jsx("code",{children:"FlushEarlyErrorsOptions"})}),e.jsx("td",{children:e.jsx("code",{children:"Promise<EarlyErrorSendResult>"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["先创建 payload，再执行 ",e.jsx("code",{children:"beforeSend"}),`。如果返回
false，则取消发送；否则调用
`,e.jsx("code",{children:"sendEarlyErrorPayload()"})," 发送。"]})}),e.jsx("td",{children:e.jsx(n.p,{children:`提供 SDK
初始化后的完整上报动作，同时给业务保留最后的过滤、脱敏、改写机会。`})})]})]})]}),`
`,e.jsx(n.h3,{id:"earlyerrorqueue-实例状态和队列逻辑",children:"EarlyErrorQueue 实例状态和队列逻辑"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"状态"}),e.jsx("th",{children:"类型 / 初始值"}),e.jsx("th",{children:"写入位置"}),e.jsx("th",{children:"读取位置"}),e.jsx("th",{children:"不变量"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"options"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["由入参 ",e.jsx("code",{children:"options"})," 和默认常量合并出的实例私有配置"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["只在 ",e.jsx("code",{children:"constructor"})," 中写入一次"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"push"}),"、",e.jsx("code",{children:"trimQueue"}),"、",e.jsx("code",{children:"sanitizeEvent"})]})}),e.jsx("td",{children:"队列生命周期内不再变化，保证一次实例使用一套容量和清洗规则。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"installedAt"})}),e.jsx("td",{children:e.jsx("code",{children:"Date.now()"})}),e.jsx("td",{children:"创建队列实例时写入一次"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"push"})," 中和当前时间比较"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["超过 ",e.jsx("code",{children:"maxAge"})," 后新事件直接拒绝入队，已有队列不被自动清空。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"queue"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"EarlyErrorEvent[]"}),"，初始为空数组"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"push"})," 追加新事件，",e.jsx("code",{children:"removeFirst"}),` 移除旧事件，
`,e.jsx("code",{children:"take"}),"/",e.jsx("code",{children:"clear"})," 清空"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"peek"}),"、",e.jsx("code",{children:"take"}),"、",e.jsx("code",{children:"getStats"}),`、
`,e.jsx("code",{children:"estimateBytes"}),"、",e.jsx("code",{children:"trimQueue"})]})}),e.jsx("td",{children:e.jsx(n.p,{children:"只保存去重后的代表事件；同类重复错误不新增数组项，只更新已有事件。"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"keys"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"Map<string, EarlyErrorEvent>"}),"，初始为空"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"push"})," 对新事件 ",e.jsx("code",{children:"set"}),"，",e.jsx("code",{children:"removeFirst"}),`
删除旧事件 key，`,e.jsx("code",{children:"take"}),"/",e.jsx("code",{children:"clear"})," 清空"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"push"})," 用 ",e.jsx("code",{children:"keys.get(key)"})," 判断是否为重复错误"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["必须和 ",e.jsx("code",{children:"queue"})," 同步；队列移除事件时必须删除对应 key。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"bytes"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"number"}),"，初始为 ",e.jsx("code",{children:"0"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"recalculateBytes"})," 重算，",e.jsx("code",{children:"take"}),"/",e.jsx("code",{children:"clear"}),`
置为 `,e.jsx("code",{children:"0"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"trimQueue"})," 判断是否超过 ",e.jsx("code",{children:"maxBytes"}),`，
`,e.jsx("code",{children:"getStats"})," 返回统计"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["通过 ",e.jsx("code",{children:"estimateBytes(queue)"}),` 基于整个队列重算，避免手动累加在
去重更新、删除旧事件后出现偏差。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"dropped"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"number"}),"，初始为 ",e.jsx("code",{children:"0"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["只在 ",e.jsx("code",{children:"removeFirst"})," 因容量裁剪丢弃旧事件时增加"]})}),e.jsx("td",{children:e.jsx("code",{children:"getStats"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"beforeEnqueue"})," 返回 false、超过 ",e.jsx("code",{children:"maxAge"}),`
拒绝入队都不增加 dropped；它只表示容量限制导致的本地丢弃。`]})})]})]})]}),`
`,e.jsx(n.h4,{id:"pushevent-执行路径",children:"push(event) 执行路径"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"顺序"}),e.jsx("th",{children:"代码动作"}),e.jsx("th",{children:"读取状态"}),e.jsx("th",{children:"写入状态 / 返回"}),e.jsx("th",{children:"原因"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsxs(n.p,{children:["比较 ",e.jsx("code",{children:"Date.now() - installedAt"})," 和",e.jsx("code",{children:"options.maxAge"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"installedAt"}),"、",e.jsx("code",{children:"options.maxAge"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["超时直接 ",e.jsx("code",{children:"return false"}),"，不清洗、不去重、不改队列"]})}),e.jsx("td",{children:"早期错误队列只接收初始化窗口期内的事件。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"2"}),e.jsx("td",{children:e.jsxs(n.p,{children:["调用 ",e.jsx("code",{children:"sanitizeEvent(event, options)"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"options.maxMessageLength"}),"、",e.jsx("code",{children:"maxStackLength"}),`、
`,e.jsx("code",{children:"maxHtmlLength"}),"、",e.jsx("code",{children:"sensitiveKeys"})]})}),e.jsx("td",{children:"得到脱敏、截断后的事件副本"}),e.jsx("td",{children:"敏感 URL 和超长字段不能先进入队列再处理。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"3"}),e.jsx("td",{children:e.jsxs(n.p,{children:["如果存在 ",e.jsx("code",{children:"beforeEnqueue"}),"，用清洗后的事件调用它"]})}),e.jsx("td",{children:e.jsx("code",{children:"options.beforeEnqueue"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["返回事件则继续；返回 ",e.jsx("code",{children:"false"})," 时 ",e.jsx("code",{children:"return false"})]})}),e.jsx("td",{children:"给业务最后一次过滤或补字段机会。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"4"}),e.jsx("td",{children:e.jsxs(n.p,{children:["调用 ",e.jsx("code",{children:"getErrorKey(filteredEvent)"}),`，再
`,e.jsx("code",{children:"keys.get(key)"})]})}),e.jsx("td",{children:e.jsx("code",{children:"keys"})}),e.jsx("td",{children:"没有直接写入；只判断是否命中已有事件"}),e.jsx("td",{children:"用稳定 key 把同类错误聚合成一条。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5A"}),e.jsx("td",{children:"命中已有事件"}),e.jsx("td",{children:e.jsx("code",{children:"existingEvent"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"existingEvent.count += 1"}),`，
`,e.jsx("code",{children:"existingEvent.lastSeen = filteredEvent.timestamp"}),"， 然后重算"," ",`
`,e.jsx("code",{children:"bytes"})," 并 ",e.jsx("code",{children:"return true"})]})}),e.jsx("td",{children:"重复错误只更新次数和最近时间，不增加队列长度。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"5B"}),e.jsx("td",{children:"没有命中已有事件"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue"}),"、",e.jsx("code",{children:"keys"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue.push(filteredEvent)"}),`，
`,e.jsx("code",{children:"keys.set(key, filteredEvent)"}),`，然后进入
`,e.jsx("code",{children:"trimQueue()"})]})}),e.jsx("td",{children:"新错误成为队列中的代表事件，并建立去重索引。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"6"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"trimQueue()"})," 先重算 ",e.jsx("code",{children:"bytes"}),"，再按条数和字节数裁剪"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue.length"}),"、",e.jsx("code",{children:"bytes"}),`、
`,e.jsx("code",{children:"options.maxCount"}),"、",e.jsx("code",{children:"options.maxBytes"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["超限时循环调用 ",e.jsx("code",{children:"removeFirst()"}),`；最终
`,e.jsx("code",{children:"return true"})]})}),e.jsx("td",{children:"保留最近错误，避免早期异常把内存或 payload 撑爆。"})]})]})]}),`
`,e.jsx(n.h4,{id:"裁剪读取和清理路径",children:"裁剪、读取和清理路径"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"具体逻辑"}),e.jsx("th",{children:"状态变化"}),e.jsx("th",{children:"语义"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"recalculateBytes()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["用 ",e.jsx("code",{children:"estimateBytes(queue)"})," 对整个队列重新估算字节数"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["覆盖写入 ",e.jsx("code",{children:"bytes"})]})}),e.jsx("td",{children:"队列内容变化后统一重算，避免增量维护出错。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"removeFirst()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue.shift()"}),` 取出最旧事件；如果存在，删除它的
`,e.jsx("code",{children:"keys"})," 条目，",e.jsx("code",{children:"dropped += 1"}),"，再重算字节数"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue"})," 变短，",e.jsx("code",{children:"keys"}),` 删除旧 key，
`,e.jsx("code",{children:"dropped"})," 增加，",e.jsx("code",{children:"bytes"})," 更新"]})}),e.jsx("td",{children:"容量超限时丢弃最旧事件，同时保持去重索引不悬空。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"trimQueue()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["先重算 ",e.jsx("code",{children:"bytes"}),"；只要 ",e.jsx("code",{children:"queue.length > maxCount"}),`
或 `,e.jsx("code",{children:"bytes > maxBytes"}),`，就持续调用
`,e.jsx("code",{children:"removeFirst()"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["可能多次修改 ",e.jsx("code",{children:"queue"}),"、",e.jsx("code",{children:"keys"}),"、",e.jsx("code",{children:"dropped"}),`
、`,e.jsx("code",{children:"bytes"})]})}),e.jsx("td",{children:"同时满足条数上限和 payload 体积上限。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"take()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["先 ",e.jsx("code",{children:"queue.slice()"}),` 复制当前事件，再清空数组、map 和
`,e.jsx("code",{children:"bytes"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue.length = 0"}),"，",e.jsx("code",{children:"keys.clear()"}),`，
`,e.jsx("code",{children:"bytes = 0"})]})}),e.jsx("td",{children:"读取后清空，保证同一批早期错误只被上报一次。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"peek()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["返回 ",e.jsx("code",{children:"queue.slice()"})]})}),e.jsx("td",{children:"不修改任何状态"}),e.jsx("td",{children:"用于调试或预览，不消费队列。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"clear()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["清空数组、map 和 ",e.jsx("code",{children:"bytes"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"queue.length = 0"}),"，",e.jsx("code",{children:"keys.clear()"}),`，
`,e.jsx("code",{children:"bytes = 0"})]})}),e.jsx("td",{children:e.jsxs(n.p,{children:["主动放弃当前缓存；不会重置 ",e.jsx("code",{children:"dropped"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getStats()"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["返回 ",e.jsx("code",{children:"queue.length"}),"、",e.jsx("code",{children:"bytes"}),"、",e.jsx("code",{children:"dropped"})]})}),e.jsx("td",{children:"不修改任何状态"}),e.jsx("td",{children:"让 payload 能告诉后端当前缓存量和是否发生过本地容量丢弃。"})]})]})]}),`
`,e.jsx(n.h3,{id:"事件清洗和标准化函数",children:"事件清洗和标准化函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"所在文件"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"为什么这样做"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sanitizeEvent(event, options)"})}),e.jsx("td",{children:e.jsx("code",{children:"core/sanitizeEvent.ts"})}),e.jsx("td",{children:e.jsx(n.p,{children:`按事件类型分别处理字段：JS 错误处理 filename/stack；资源错误处理
resourceUrl/outerHTML；Promise 错误处理 stack；Reporting API 处理
reportUrl/body。`})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`入队前先脱敏和截断，避免敏感信息进入内存队列，也避免队列体积失控。
截断统一复用 `,e.jsx("code",{children:"truncateText"}),`，不在当前文件重复维护
`,e.jsx("code",{children:"slice(0, maxLength)"})," helper。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sanitizeUrl(url, sensitiveKeys, maxLength, baseUrl)"})}),e.jsx("td",{children:e.jsx("code",{children:"core/sanitizeUrl.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["尝试用 ",e.jsx("code",{children:"new URL(url, baseUrl)"}),` 解析 URL，遍历 query
key，命中敏感规则时替换值；解析失败时把原字符串交给`," ",`
`,e.jsx("code",{children:"truncateText"})," 硬截断返回。"]})}),e.jsx("td",{children:"URL 常常带 token、session、手机号、搜索词，必须在本地提前过滤。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getErrorKey(event)"})}),e.jsx("td",{children:e.jsx("code",{children:"core/getErrorKey.ts"})}),e.jsx("td",{children:"按事件类型选择稳定字段拼接去重 key。"}),e.jsx("td",{children:e.jsx(n.p,{children:"早期错误可能短时间高频重复，合并计数比重复上报更有价值，也更省请求体积。"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getStackTop(stack)"})}),e.jsx("td",{children:e.jsx("code",{children:"core/getErrorKey.ts"})}),e.jsx("td",{children:"取堆栈第一行。"}),e.jsx("td",{children:"第一行通常足以参与 fingerprint，且比完整 stack 更稳定、更轻。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"safeStringify(value)"})}),e.jsx("td",{children:e.jsx("code",{children:"../safeStringify/index.ts"})}),e.jsx("td",{children:"序列化未知对象，并用 seen 数组处理循环引用。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["这是 ",e.jsx("code",{children:"element-utils"})," ",`
公共工具；错误原因可能是任意对象，不能因为序列化失败影响监控代码本身。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"estimateBytes(value)"})}),e.jsx("td",{children:e.jsx("code",{children:"../estimateBytes/index.ts"})}),e.jsx("td",{children:"把值安全转成字符串后估算字节数。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["这是 ",e.jsx("code",{children:"element-utils"}),` 公共工具；用于限制队列总大小和判断
beacon/keepalive payload 是否过大。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"normalizeUnknownError(value)"})}),e.jsx("td",{children:e.jsx("code",{children:"core/normalizeUnknownError.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`根据 unknown 的实际类型生成 message、stack、reasonType。Error 取
message/stack；对象走 safeStringify；其他类型走
String；所有文本输出统一经过
`,e.jsx("code",{children:"truncateText"}),"。"]})}),e.jsx("td",{children:e.jsx(n.p,{children:"Promise rejection 的 reason 不保证是 Error，需要统一成可上报结构。"})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createBaseEvent()"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createBaseEvent.ts"})}),e.jsx("td",{children:e.jsx(n.p,{children:`生成
timestamp、pageUrl、userAgent、viewport、connection、count、firstSeen、
lastSeen。`})}),e.jsx("td",{children:"所有错误事件都需要这些基础字段，集中生成可以保证结构一致。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getViewport()"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createBaseEvent.ts"})}),e.jsx("td",{children:"读取 window.innerWidth 和 window.innerHeight。"}),e.jsx("td",{children:"早期错误常和设备视口相关，例如移动端首屏资源或布局问题。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"getConnection()"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createBaseEvent.ts"})}),e.jsx("td",{children:e.jsx(n.p,{children:"读取 navigator.connection 中的 effectiveType、downlink、rtt、saveData。"})}),e.jsx("td",{children:"资源加载失败和慢网环境强相关，网络快照有排查价值。"})]})]})]}),`
`,e.jsx(n.h3,{id:"浏览器事件转换函数",children:"浏览器事件转换函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"所在文件"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"适用场景"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"isResourceTarget(target)"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createEvents.ts"})}),e.jsx("td",{children:"判断事件 target 是否带有 tagName，从而识别资源加载错误。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["区分 ",e.jsx("code",{children:"ErrorEvent"})," 和资源元素触发的 ",e.jsx("code",{children:"error"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createErrorEvent(event)"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createEvents.ts"})}),e.jsx("td",{children:e.jsx(n.p,{children:`如果 target 是资源元素，生成 resource_error；如果是 ErrorEvent，生成
js_error； 否则返回 null。`})}),e.jsx("td",{children:"后续如要把正式 SDK 监听和早期队列复用同一转换逻辑，可直接使用它。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createUnhandledRejectionEvent(event)"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createEvents.ts"})}),e.jsx("td",{children:e.jsx(n.p,{children:"读取 PromiseRejectionEvent.reason，标准化后生成 unhandled_rejection。"})}),e.jsx("td",{children:"处理初始化阶段未 catch 的 Promise。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createBrowserReportEvent(report)"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/createEvents.ts"})}),e.jsx("td",{children:"把 Reporting API report 转成 browser_report，兼容 body.toJSON。"}),e.jsx("td",{children:"收集 CSP、弃用 API、浏览器干预等平台报告。"})]})]})]}),`
`,e.jsx(n.h3,{id:"上下文和发送函数",children:"上下文和发送函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"所在文件"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"失败策略"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"takeGlobalEarlyErrors(options)"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/takeGlobalEarlyErrors.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["先通过 ",e.jsx("code",{children:"isBrowser()"}),` 确认可以访问 window，再从 window
上取指定全局队列，调用 `,e.jsx("code",{children:"take()"}),` 读取并清空。默认读取后调用
`,e.jsx("code",{children:"stop()"}),"，让完整 SDK 接管后不再重复监听。"]})}),e.jsx("td",{children:"非浏览器环境或没有全局队列时返回空数组。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"enrichEarlyErrors(events, context, reason)"})}),e.jsx("td",{children:e.jsx("code",{children:"browser/enrichEarlyErrors.ts"})}),e.jsx("td",{children:e.jsx(n.p,{children:`给每个事件补 appId、release、route、userId、sessionId 等上下文，并追加
flushedAt、flushReason、source。`})}),e.jsx("td",{children:e.jsxs(n.p,{children:["如果没传 route，会在 ",e.jsx("code",{children:"isBrowser()"}),` 为 true 后 fallback 到
`,e.jsx("code",{children:"window.location.pathname"}),"；userId 默认为 anonymous。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sendEarlyErrorPayload(url, payload, transport, credentials)"})}),e.jsx("td",{children:e.jsx("code",{children:"transport/sendEarlyErrorPayload.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["将 payload 通过 ",e.jsx("code",{children:"safeStringify"}),` 序列化，估算体积，根据
transport 选择 fetch 或 beacon 发送。`]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[`空事件直接返回成功；beacon 分支先用
`,e.jsx("code",{children:"supportSendBeacon()"}),` 判断能力，不可用或失败时降级 keepalive
fetch。`]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"postByFetch(url, body, credentials, keepalive)"})}),e.jsx("td",{children:e.jsx("code",{children:"transport/sendEarlyErrorPayload.ts"})}),e.jsx("td",{children:"使用 POST JSON 发送，支持 credentials 和 keepalive。"}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"supportFetch()"})," 为 false 或请求异常时返回 false。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"postByBeacon(url, body, bytes)"})}),e.jsx("td",{children:e.jsx("code",{children:"transport/sendEarlyErrorPayload.ts"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["用 Blob 包装 JSON，通过 ",e.jsx("code",{children:"window.navigator.sendBeacon"})," 发送。"]})}),e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"supportSendBeacon()"}),` 为 false、超过 60 KiB 或异常时返回
false。`]})})]})]})]}),`
`,e.jsx(n.h3,{id:"scripttsx-内部函数",children:"script.tsx 内部函数"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"函数"}),e.jsx("th",{children:"做了什么"}),e.jsx("th",{children:"和 TS 版本的关系"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"IIFE"})}),e.jsx("td",{children:e.jsx(n.p,{children:`文件主体是立即执行函数，浏览器解析到 script 后立刻安装监听，同时把
queue、keys、 bytes、dropped 等变量限制在局部作用域。`})}),e.jsx("td",{children:"它是 copy-only 版本，不能 import TS core 文件。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"now()"})}),e.jsx("td",{children:"优先使用 Date.now，老环境降级为 +new Date。"}),e.jsx("td",{children:"对应 TS 版本里直接使用 Date.now。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"safeString(value)"})}),e.jsx("td",{children:"把未知值转换成字符串，JSON 失败时降级 String。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 ",e.jsx("code",{children:"safeStringify"})," 的轻量版本。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"estimateBytes(value)"})}),e.jsx("td",{children:"用字符串长度估算体积。"}),e.jsx("td",{children:e.jsx(n.p,{children:`inline bootstrap 为了体积更小，没有引入 TextEncoder 逻辑；正式 TS
版本估算更准确。`})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"sanitizeUrl(url)"})}),e.jsx("td",{children:"过滤敏感 query 并截断 URL。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"sanitizeUrl"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"getViewport()"})," / ",e.jsx("code",{children:"getConnection()"})]})}),e.jsx("td",{children:"采集视口和网络快照。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"createBaseEvent"})," 内部辅助函数。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"createBase()"})}),e.jsx("td",{children:e.jsx(n.p,{children:`生成
timestamp、pageUrl、userAgent、viewport、connection、count、firstSeen、lastSeen。`})}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"createBaseEvent"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"normalizeReason(reason)"})}),e.jsx("td",{children:"把 Promise rejection reason 转换成 message、stack、reasonType。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"normalizeUnknownError"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"getStackTop(stack)"})," / ",e.jsx("code",{children:"getKey(event)"})]})}),e.jsx("td",{children:"生成去重 key，重复错误会合并计数。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"getErrorKey"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(n.p,{children:[e.jsx("code",{children:"recalculateBytes()"})," / ",e.jsx("code",{children:"trimQueue()"})]})}),e.jsx("td",{children:"重算队列体积，并在超出条数或字节限制时移除旧事件。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"EarlyErrorQueue"})," class 的私有方法。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"push(event)"})}),e.jsx("td",{children:"入队前做 maxAge 判断、字段截断、URL 过滤、去重合并和队列裁剪。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本队列的 ",e.jsx("code",{children:"push"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onError(event)"})}),e.jsx("td",{children:e.jsx(n.p,{children:`捕获资源加载错误和 JS 运行时错误。target 不是 window 且有 tagName
时按资源错误处理； ErrorEvent 按 JS 错误处理。`})}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"createErrorEvent"})," 的逻辑。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"onUnhandledRejection(event)"})}),e.jsx("td",{children:"捕获未处理 Promise rejection，并推入 unhandled_rejection。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"createUnhandledRejectionEvent"}),"。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"installReportingObserver()"})}),e.jsx("td",{children:"在支持 ReportingObserver 的浏览器中收集 buffered reports。"}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 版本 ",e.jsx("code",{children:"createBrowserReportEvent"})," 可支持的数据结构。"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"stop()"})}),e.jsx("td",{children:"移除 error 和 unhandledrejection 监听，并断开 ReportingObserver。"}),e.jsx("td",{children:"完整 SDK 接管后通过全局队列的 stop 调用它。"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"window[GLOBAL_NAME]"})}),e.jsx("td",{children:e.jsx(n.p,{children:`暴露 push、take、peek、stop、getStats。完整 SDK
通过这个协议接管早期错误。`})}),e.jsx("td",{children:e.jsxs(n.p,{children:["对应 TS 类型 ",e.jsx("code",{children:"EarlyErrorGlobalQueue"}),"。"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"maxCount"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["最大缓存条数，默认 ",e.jsx("code",{children:"50"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxBytes"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["最大估算字节数，默认 ",e.jsx("code",{children:"48 KiB"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"maxAge"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["最大存活时间，默认 ",e.jsx("code",{children:"60000ms"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"beforeEnqueue"}),e.jsx("td",{children:e.jsx("code",{children:"(event) => event | false"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["入队前过滤或改写事件，返回 ",e.jsx("code",{children:"false"})," 时丢弃"]})})]})]})]}),`
`,e.jsx(n.h2,{id:"返回值",children:"返回值"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"captureGlobal"}),e.jsx("td",{children:e.jsx("code",{children:"() => number"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["接管 ",e.jsxs("code",{children:["window.",e.jsx(n.strong,{children:"EARLY_ERROR_QUEUE"})]})," 并返回读取条数"]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"flush"}),e.jsx("td",{children:e.jsx("code",{children:"(options) => Promise<EarlyErrorSendResult>"})}),e.jsx("td",{children:e.jsxs(n.p,{children:["补上下文并发送，支持 ",e.jsx("code",{children:"fetch"})," 和 ",e.jsx("code",{children:"sendBeacon"})]})})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"take"}),e.jsx("td",{children:e.jsx("code",{children:"() => EarlyErrorEvent[]"})}),e.jsx("td",{children:"读取并清空队列"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"文件职责"}),"：",e.jsx(n.code,{children:"script.tsx"})," 提供 copy-only inline bootstrap；",e.jsx(n.code,{children:"index.ts"})," 提供可 import 的 SDK 接管类，并用 class 私有字段负责有界队列、去重和统计；",e.jsx(n.code,{children:"browser/**"})," 负责读取浏览器事件、全局队列和运行时上下文；",e.jsx(n.code,{children:"transport/sendEarlyErrorPayload.ts"})," 负责 fetch/beacon 发送；",e.jsx(n.code,{children:"core/**"})," 只保留清洗、去重 key、未知错误标准化这类纯逻辑 helper。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"核心流程"}),"：HTML head 先执行 bootstrap，错误进入全局队列；SDK 初始化后 ",e.jsx(n.code,{children:"captureGlobal()"})," 取走事件；",e.jsx(n.code,{children:"flush()"})," 调用 ",e.jsx(n.code,{children:"enrichEarlyErrors()"})," 补业务上下文后发送。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"关键技术点"}),"：资源错误必须通过捕获阶段监听；队列满时丢弃最旧事件；入队前做 URL 敏感参数过滤；页面隐藏时可选 ",e.jsx(n.code,{children:"sendBeacon"}),"，失败后降级 ",e.jsx(n.code,{children:"fetch keepalive"}),"。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"数据流向"}),"：浏览器事件 → bootstrap 全局队列 → ",e.jsx(n.code,{children:"EarlyErrorQueue"})," 内存队列 → enriched payload → 后端监控接口。"]}),`
`]})]})}function y(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{y as default};
