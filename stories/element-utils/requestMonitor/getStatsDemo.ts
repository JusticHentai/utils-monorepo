import { action } from 'storybook/actions'
import { monitor } from './observeAllDemo'

const getStatsDemo = () => {
  const stats = monitor.getStats()
  const requests = monitor.getRequests()

  action('请求统计')({
    total: stats.total,
    success: stats.success,
    failed: stats.failed,
    avgDuration: Math.round(stats.avgDuration) + 'ms',
    slowRequests: stats.slowRequests,
    byStatus: stats.byStatus,
  })

  action('请求记录')(
    requests.map((r) => ({
      url: r.url,
      method: r.method,
      status: r.status,
      duration: Math.round(r.duration || 0) + 'ms',
      success: r.success,
    }))
  )
}

export default getStatsDemo
