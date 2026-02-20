import { action } from 'storybook/actions'
import observeWebVitals from '../../../packages/element-utils/src/observeWebVitals'

export const createBasicDemo = (
  getStopFn: () => (() => void) | null,
  setStopFn: (fn: (() => void) | null) => void
) => {
  return () => {
    const prevStop = getStopFn()
    if (prevStop) prevStop()

    const stop = observeWebVitals((metric) => {
      action(`${metric.name} 指标`)({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
        entriesCount: metric.entries.length,
      })
    })

    setStopFn(stop)
    action('监控已启动')('所有 Web Vitals 指标监控中，点击"停止监控"按钮可手动停止')
  }
}

export default createBasicDemo
