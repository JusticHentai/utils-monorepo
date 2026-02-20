import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/behaviorMonitor'

const trackCustomDemo = () => {
  const monitor = new BehaviorMonitor()

  // 记录自定义行为（无需调用 observe）
  const behavior1 = monitor.trackCustom('页面初始化', {
    loadTime: 1234,
    source: 'direct',
  })

  const behavior2 = monitor.trackCustom('功能使用', {
    feature: 'search',
    keyword: 'behavior monitor',
  })

  action('自定义行为 1')(behavior1)
  action('自定义行为 2')(behavior2)
  action('行为记录')(monitor.getBehaviors())
}

export default trackCustomDemo
