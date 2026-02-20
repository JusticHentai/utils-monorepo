import { action } from 'storybook/actions'
import onFID from '../../../packages/element-utils/src/onFID'

export const createInitDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFID((metric) => {
      const entry = metric.entries[0] as PerformanceEventTiming
      action('FID 指标')({
        延迟: `${Math.round(metric.value)}ms`,
        事件类型: entry?.name || '未知',
        rating: metric.rating,
      })
    })

    setStopFn(stop)
    action('初始化成功')('在页面上进行首次交互（点击、按键等）触发 FID')
  }
}
