import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/resourceMonitor'

const monitor = new ResourceMonitor()

const getStatsDemo = () => {
  const stats = monitor.getStats()

  action('资源统计')(stats)
}

export default getStatsDemo
