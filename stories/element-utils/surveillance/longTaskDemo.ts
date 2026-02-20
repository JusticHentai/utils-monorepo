import { action } from 'storybook/actions'
import LongTaskMonitor from '../../../packages/element-utils/src/LongTaskMonitor'

const longTaskDemo = () => {
  const monitor = new LongTaskMonitor()

  const stop = monitor.observe(
    (task) => {
      action('长任务检测')({
        name: task.name,
        duration: `${Math.round(task.duration)}ms`,
        startTime: `${Math.round(task.startTime)}ms`,
        attribution: task.attribution,
      })
    },
    { threshold: 50, reportExisting: true }
  )

  action('长任务监控')('已启动（阈值 50ms）')

  // 模拟长任务：阻塞主线程超过 50ms
  setTimeout(() => {
    action('模拟长任务')('开始执行 150ms 的同步计算...')
    const start = performance.now()
    while (performance.now() - start < 150) {
      // 阻塞主线程
    }
    action('模拟长任务')('计算完成')
  }, 500)

  // 3秒后获取统计数据
  setTimeout(() => {
    const stats = monitor.getStats()
    action('长任务统计')({
      count: stats.count,
      totalDuration: `${Math.round(stats.totalDuration)}ms`,
      maxDuration: `${Math.round(stats.maxDuration)}ms`,
      avgDuration: `${Math.round(stats.avgDuration)}ms`,
    })

    const tbt = monitor.calculateTBT()
    action('TBT (Total Blocking Time)')(`${Math.round(tbt)}ms`)
  }, 3000)

  // 5秒后停止
  setTimeout(() => {
    stop()
    action('长任务监控')('已停止')
  }, 5000)
}

export default longTaskDemo
