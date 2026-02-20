import { action } from 'storybook/actions'
import onFID from '../../../packages/element-utils/src/onFID'

export const createInitMetricDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onFID((metric) => {
      // metric 包含完整信息：name, value, rating, delta, id, navigationType, entries
      const entry = metric.entries[0]

      action('FID Metric')({
        name: metric.name,
        value: `${Math.round(metric.value)}ms`,
        rating: metric.rating,
        delta: `${Math.round(metric.delta)}ms`,
        id: metric.id,
        navigationType: metric.navigationType,
        eventType: entry?.name || '未知',
      })
    })

    setStopFn(stop)
    action('初始化成功')('FID Metric 监控中，请进行页面交互...')
  }
}
