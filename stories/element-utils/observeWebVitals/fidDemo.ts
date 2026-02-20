import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createFidDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 FID 指标
      if (metric.name !== METRIC_NAME.FID) return

      const entry = metric.entries[0] as PerformanceEventTiming

      action('FID 指标')({
        value: `${metric.value.toFixed(2)} ms`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        eventName: entry?.name,
      })
    })

    setStopFn(stop)
    action('FID 监控已启动')('在页面上进行首次交互（点击、按键等）触发 FID（已被 INP 取代）')
  }
}

export default createFidDemo
