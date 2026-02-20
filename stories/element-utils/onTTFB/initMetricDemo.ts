import { action } from 'storybook/actions'
import onTTFB from '../../../packages/element-utils/src/onTTFB'

export const createInitMetricDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = onTTFB((metric) => {
      // metric 包含完整信息：name, value, rating, delta, id, navigationType, entries
      action('TTFB Metric')({
        name: metric.name,
        value: `${Math.round(metric.value)}ms`,
        rating: metric.rating,
        delta: `${Math.round(metric.delta)}ms`,
        id: metric.id,
        navigationType: metric.navigationType,
      })
    })

    setStopFn(stop)
    action('初始化成功')('TTFB Metric 监控中...')
  }
}
