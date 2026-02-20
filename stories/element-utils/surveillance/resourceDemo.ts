import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const resourceDemo = () => {
  const monitor = new ResourceMonitor({
    filter: (entry) => !entry.name.includes('hot-update'),
  })

  action('资源监控')('已启动')

  // 实时监控新资源加载
  const stop = monitor.observe((resources) => {
    resources.forEach((r) => {
      action(`新资源 - ${r.initiatorType}`)({
        name: r.name.split('/').pop(),
        duration: `${Math.round(r.duration)}ms`,
        size: r.transferSize > 0 ? `${(r.transferSize / 1024).toFixed(1)}KB` : 'cached',
        fromCache: r.fromCache,
      })
    })
  })

  // 获取已加载的全部资源
  const allResources = monitor.getMetrics()
  action('已加载资源总数')(allResources.length)
  action('已加载资源（前5个）')(
    allResources.slice(0, 5).map((r) => ({
      name: r.name.split('/').pop(),
      type: r.initiatorType,
      duration: `${Math.round(r.duration)}ms`,
    }))
  )

  // 资源统计
  const stats = monitor.getStats()
  action('资源统计')({
    total: stats.total,
    cached: stats.cached,
    totalSize: `${(stats.totalSize / 1024).toFixed(1)}KB`,
    totalDuration: `${Math.round(stats.totalDuration)}ms`,
    byType: stats.byType,
  })

  // 慢资源（超过 500ms）
  const slowResources = monitor.getSlowResources(500)
  action('慢资源（>500ms）')(
    slowResources.length > 0
      ? slowResources.map((r) => ({
          name: r.name.split('/').pop(),
          duration: `${Math.round(r.duration)}ms`,
        }))
      : '无慢资源'
  )

  // 大资源（超过 100KB）
  const largeResources = monitor.getLargeResources(100 * 1024)
  action('大资源（>100KB）')(
    largeResources.length > 0
      ? largeResources.map((r) => ({
          name: r.name.split('/').pop(),
          size: `${(r.transferSize / 1024).toFixed(1)}KB`,
        }))
      : '无大资源'
  )

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('资源监控')('已停止')
  }, 5000)
}

export default resourceDemo
