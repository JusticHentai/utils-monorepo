import { action } from 'storybook/actions'
import type LongTaskObserver from '../../../packages/element-utils/src/longTaskMonitor'

/**
 * 获取长任务统计信息演示
 * 使用当前观察器实例获取已记录的长任务统计
 */
export const createGetStatsDemo = (
  getObserver: () => LongTaskObserver | null
) => {
  return () => {
    const observer = getObserver()

    if (!observer) {
      action('统计信息')({
        message: '请先点击"开始监听长任务"按钮',
      })
      return
    }

    const stats = observer.getStats()

    if (stats.count === 0) {
      action('统计信息')({
        message: '暂无记录的长任务',
        hint: '点击"触发长任务"按钮来生成一些长任务',
      })
    } else {
      action('统计信息')({
        count: stats.count,
        totalDuration: `${stats.totalDuration.toFixed(2)}ms`,
        maxDuration: `${stats.maxDuration.toFixed(2)}ms`,
        avgDuration: `${stats.avgDuration.toFixed(2)}ms`,
        entries: stats.entries.map((entry) => ({
          name: entry.name,
          duration: `${entry.duration.toFixed(2)}ms`,
          startTime: `${entry.startTime.toFixed(2)}ms`,
        })),
      })
    }
  }
}
