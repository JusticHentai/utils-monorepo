/* eslint-disable */
// @ts-nocheck

/**
 * 提前收集错误（Pre-Collect Errors）
 *
 * 用于在主 script 加载完成前，提前挂载轻量级的错误监听，将错误暂存到数组中。
 * 等主 script 加载完成、ErrorMonitor 初始化后，可取出已收集的错误进行上报。
 *
 * 使用方式：将以下代码复制到 HTML 的 `<head>` 中的 `<script>` 标签内（在业务 script 之前），
 * 确保尽早捕获页面加载阶段的错误。
 *
 * @example
 * ```html
 * <head>
 *   <script>
 *     // 将下方代码复制到此处
 *   </script>
 *   <script src="your-app.js"></script>
 * </head>
 * ```
 *
 * @example
 * ```typescript
 * // 主 script 中取出已收集的错误
 * var errors = window.__PRE_COLLECTED_ERRORS__ || []
 * errors.forEach(function(error) { report(error) })
 * // 清空并切换到正式监控
 * window.__PRE_COLLECTED_ERRORS__ = []
 * ```
 */

;(function () {
  // 需要监听的资源标签列表，这些标签加载失败时会触发 error 事件
  var RESOURCE_TAGS = ['SCRIPT', 'LINK', 'IMG', 'VIDEO', 'AUDIO']

  // 错误暂存数组，所有在主 script 加载前捕获的错误都会 push 到这里
  var errors = []

  // 挂载到 window 上，供主 script 加载后读取
  window.__PRE_COLLECTED_ERRORS__ = errors

  /**
   * 统一处理 error 事件
   * 同时覆盖资源加载错误和 JS 运行时错误两种情况：
   * - 资源加载错误：event.target 是具体的 DOM 元素（如 script、img）
   * - JS 运行时错误：event.target 是 window，且 event.message 存在
   */
  function onError(event) {
    var target = event.target || event.srcElement

    // —— 资源加载错误 ——
    // 判断依据：target 不是 window 本身，且 tagName 属于资源标签列表
    // 为什么要判断 target !== window：
    //   因为这里使用了捕获模式（addEventListener 第三个参数 true）监听 error 事件，
    //   JS 运行时错误和资源加载错误都会被这个 handler 接收到。
    //   JS 运行时错误的 event.target 是 window；资源加载错误的 event.target 是触发错误的 DOM 元素（如 <script>、<img>）。
    //   通过 target !== window 将两者区分开，避免把 JS 错误误判为资源错误。
    // 资源错误不会冒泡，所以下方 addEventListener 使用了捕获模式（第三个参数 true）
    if (target && target !== window && RESOURCE_TAGS.indexOf(target.tagName) !== -1) {
      var resourceUrl = target.src || target.href || ''
      errors.push({
        type: 'RESOURCE',
        message: 'Failed to load ' + target.tagName.toLowerCase() + ': ' + resourceUrl,
        timestamp: Date.now(),
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        resourceUrl: resourceUrl,
        resourceType: target.tagName.toLowerCase(),
      })
      return
    }

    // —— JS 运行时错误 ——
    // 判断依据：event.message 存在，说明是 ErrorEvent（JS 执行异常）
    if (event.message) {
      var err = event.error
      errors.push({
        type: 'JS',
        message: event.message,
        timestamp: Date.now(),
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
        filename: event.filename, // 出错文件路径
        lineno: event.lineno,     // 出错行号
        colno: event.colno,       // 出错列号
        stack: err && err.stack ? err.stack : undefined, // 错误堆栈（如果有）
      })
    }
  }

  /**
   * 处理未捕获的 Promise 拒绝
   * 当 Promise 被 reject 但没有 .catch() 处理时，会触发 unhandledrejection 事件
   */
  function onUnhandledRejection(event) {
    var reason = event.reason
    var message = 'Unhandled Promise Rejection'
    var stack

    // 根据 reason 的类型提取错误信息
    if (reason instanceof Error) {
      // reason 是 Error 实例，直接取 message 和 stack
      message = reason.message
      stack = reason.stack
    } else if (typeof reason === 'string') {
      // reason 是字符串，直接作为 message
      message = reason
    } else if (reason && typeof reason === 'object') {
      // reason 是对象，尝试序列化为 JSON
      try {
        message = JSON.stringify(reason)
      } catch (e) {
        message = 'Unhandled Promise Rejection (unserializable)'
      }
    }

    errors.push({
      type: 'PROMISE',
      message: message,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      userAgent: navigator.userAgent,
      stack: stack,
      reason: reason,
    })
  }

  // 注册 error 监听（捕获阶段），同时拦截资源加载错误和 JS 运行时错误
  window.addEventListener('error', onError, true)

  // 注册 unhandledrejection 监听，捕获未处理的 Promise 拒绝
  window.addEventListener('unhandledrejection', onUnhandledRejection)

  // 暴露停止函数到 window 上，主 script 切换到正式监控后调用以移除预收集监听
  window.__STOP_PRE_COLLECT__ = function () {
    window.removeEventListener('error', onError, true)
    window.removeEventListener('unhandledrejection', onUnhandledRejection)
  }
})()
