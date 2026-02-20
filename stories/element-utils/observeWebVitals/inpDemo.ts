import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createInpDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals(
      (metric) => {
        // 只展示 INP 指标
        if (metric.name !== METRIC_NAME.INP) return

        const entry = metric.entries[0] as PerformanceEventTiming

        action('INP 指标')({
          value: `${metric.value} ms`,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          eventName: entry?.name,
          startTime: entry?.startTime,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('INP 监控已启动')('请进行页面交互（点击、输入等），点击"停止监控"按钮可手动停止')
  }
}

export default createInpDemo
