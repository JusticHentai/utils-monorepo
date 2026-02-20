import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/resourceMonitor'

const monitor = new ResourceMonitor()

const getSlowResourcesDemo = () => {
  const slowResources = monitor.getSlowResources(100)

  action('慢资源列表（阈值 100ms）')(slowResources)
  action('慢资源数量')(slowResources.length)
}

export default getSlowResourcesDemo
