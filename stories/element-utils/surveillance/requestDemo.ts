import { action } from 'storybook/actions'
import RequestMonitor from '../../../packages/element-utils/src/RequestMonitor'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const requestDemo = () => {
  // 方式一：使用 RequestMonitor 监控所有网络请求
  const requestMonitor = new RequestMonitor({
    onRequest: (request) => {
      action('网络请求')({
        method: request.method,
        url: request.url.slice(0, 100),
        duration: `${request.duration}ms`,
        status: request.status,
        success: request.success,
      })
    },
    onError: (error) => {
      action('请求错误')({
        url: error.requestUrl,
        message: error.message,
      })
    },
    ignoreUrls: [/analytics/, /report/, /localhost/],
    timeoutThreshold: 30000,
  })

  requestMonitor.observeXHR()
  requestMonitor.observeFetch()

  action('请求监控')('已启动所有请求监控')

  // 资源加载监控
  const resourceMonitor = new ResourceMonitor()
  const stopResource = resourceMonitor.observe((resources) => {
    resources.forEach((r) => {
      action('资源加载')({
        name: r.name.split('/').pop(),
        type: r.initiatorType,
        duration: `${Math.round(r.duration)}ms`,
        size:
          r.transferSize > 0
            ? `${(r.transferSize / 1024).toFixed(1)}KB`
            : 'cached',
        fromCache: r.fromCache,
      })
    })
  })

  action('资源监控')('已启动资源加载监控')

  // 获取已加载的资源指标
  const allResources = resourceMonitor.getMetrics()
  action('已加载资源')(
    allResources.slice(0, 5).map((r) => ({
      name: r.name.split('/').pop(),
      type: r.initiatorType,
      duration: `${Math.round(r.duration)}ms`,
    }))
  )

  // 获取资源统计
  const resourceStats = resourceMonitor.getStats()
  action('资源统计')(resourceStats)

  // 发起测试请求
  setTimeout(() => {
    action('测试请求')('发起 fetch 请求')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        action('请求响应')(data)
      })
      .catch((err) => {
        action('请求失败')(err.message)
      })
  }, 500)

  // 获取请求统计
  setTimeout(() => {
    const summary = requestMonitor.getStats()
    action('请求统计汇总')({
      total: summary.total,
      success: summary.success,
      failed: summary.failed,
      avgDuration: `${Math.round(summary.avgDuration)}ms`,
    })
  }, 3000)

  // 5秒后停止监控
  setTimeout(() => {
    requestMonitor.stop()
    stopResource()
    action('请求监控')('已停止所有监控')
  }, 5000)
}

export default requestDemo
