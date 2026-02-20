import { action } from 'storybook/actions'
import type LongTaskObserver from '../../../packages/element-utils/src/longTaskMonitor'

export const createStopObserveDemo = (
  getObserver: () => LongTaskObserver | null,
  clearObserver: () => void
) => {
  return () => {
    const observer = getObserver()

    if (observer) {
      // 停止前获取统计信息
      const stats = observer.getStats()
      observer.stop()
      observer.clear()
      clearObserver()

      action('停止监听')({
        message: '长任务监听已停止',
        finalStats: {
          count: stats.count,
          totalDuration: `${stats.totalDuration.toFixed(2)}ms`,
          maxDuration: `${stats.maxDuration.toFixed(2)}ms`,
          avgDuration: `${stats.avgDuration.toFixed(2)}ms`,
        },
      })
    } else {
      action('停止监听')('当前没有活动的监听器')
    }
  }
}
