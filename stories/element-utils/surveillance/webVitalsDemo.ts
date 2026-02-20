import { action } from 'storybook/actions'
import WebVitalsMonitor from '../../../packages/element-utils/src/WebVitalsMonitor'

const webVitalsDemo = () => {
  const monitor = new WebVitalsMonitor({ reportAllChanges: true })

  const stop = monitor.observe((metric) => {
    action(`Web Vitals - ${metric.name}`)({
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    })
  })

  action('Web Vitals 监控')('已启动统一监控，包含 LCP、FID、CLS、FCP、FP、INP、TTFB')

  // 5秒后停止监控
  setTimeout(() => {
    stop()
    action('Web Vitals 监控')('已停止所有监控')
  }, 5000)
}

export default webVitalsDemo
