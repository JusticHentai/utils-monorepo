import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/resourceMonitor'

const monitor = new ResourceMonitor()

const getMetricsDemo = () => {
  const metrics = monitor.getMetrics()

  action('资源指标')(metrics)
  action('资源总数')(metrics.length)
}

export default getMetricsDemo
