import { action } from 'storybook/actions'
import onINP from '../../../packages/element-utils/src/onINP'

export const createInitBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onINP((metric) => {
      const entry = metric.entries[0] as PerformanceEventTiming
      action('INP 指标')({
        延迟: `${Math.round(metric.value)}ms`,
        类型: entry?.name || '未知',
        目标: entry?.target?.nodeName || '未知',
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('INP 将在页面隐藏时报告，点击/键盘/触摸操作会触发交互')
  }
}
