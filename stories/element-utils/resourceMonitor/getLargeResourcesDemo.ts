import { action } from 'storybook/actions'
import ResourceMonitor from '../../../packages/element-utils/src/ResourceMonitor'

const monitor = new ResourceMonitor()

const getLargeResourcesDemo = () => {
  const largeResources = monitor.getLargeResources(50 * 1024)

  action('大资源列表（阈值 50KB）')(largeResources)
  action('大资源数量')(largeResources.length)
}

export default getLargeResourcesDemo
