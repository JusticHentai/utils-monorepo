import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createFcpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      // 只展示 FCP 指标
      if (metric.name !== METRIC_NAME.FCP) return

      action('FCP 指标')({
        value: `${metric.value.toFixed(2)} ms`,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
      })
    })

    setStopFn(stop)
    action('FCP 监控已启动')('FCP 通常在页面加载时已触发，刷新页面可看到效果')
  }
}

export default createFcpDemo
