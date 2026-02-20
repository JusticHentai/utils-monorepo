import { action } from 'storybook/actions'
import onINP from '../../../packages/element-utils/src/onINP'

export const createInitAllChangesDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onINP(
      (metric) => {
        const entry = metric.entries[0] as PerformanceEventTiming
        action('INP 变化')({
          延迟: `${Math.round(metric.value)}ms`,
          类型: entry?.name || '未知',
          目标: entry?.target?.nodeName || '未知',
          rating: metric.rating,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('初始化成功')('INP 每次变化都会报告，进行点击/键盘操作查看变化')
  }
}
