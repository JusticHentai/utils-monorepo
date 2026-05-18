/* eslint-disable */
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
    return String(stack || '').split('\n')[0] || ''
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
