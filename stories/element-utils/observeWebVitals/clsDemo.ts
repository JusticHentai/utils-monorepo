import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/WebVitalsMonitor'
import { METRIC_NAME } from '../../../packages/element-utils/src/WebVitalsMonitor/interface'

export const createClsDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals(
      (metric) => {
        // 只展示 CLS 指标
        if (metric.name !== METRIC_NAME.CLS) return

        action('CLS 指标')({
          value: metric.value.toFixed(4),
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id,
          navigationType: metric.navigationType,
          entriesCount: metric.entries.length,
        })
      },
      { reportAllChanges: true }
    )

    setStopFn(stop)
    action('CLS 监控已启动')('请滚动页面或触发布局变化，点击"停止监控"按钮可手动停止')
  }
}

export default createClsDemo
