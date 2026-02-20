import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createLcpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals(
      (metric) => {
        // 只展示 LCP 指标
        if (metric.name !== METRIC_NAME.LCP) return

        const entry = metric.entries[
          metric.entries.length - 1
        ] as LargestContentfulPaint

        action('LCP 指标')({
          value: `${metric.value.toFixed(2)} ms`,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          element: entry?.element?.tagName,
          url: entry?.url,
          size: entry?.size,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('LCP 监控已启动')('等待页面加载，点击"停止监控"按钮可手动停止')
  }
}

export default createLcpDemo
