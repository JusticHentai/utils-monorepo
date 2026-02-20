import { action } from 'storybook/actions'
import BehaviorMonitor from '../../../packages/element-utils/src/BehaviorMonitor'

const breadcrumbDemo = () => {
  // 限制最大记录数为 5，模拟面包屑追踪
  const monitor = new BehaviorMonitor({ maxBehaviors: 5 })

  // 连续记录 8 条自定义行为
  for (let i = 1; i <= 8; i++) {
    monitor.trackCustom(`步骤 ${i}`, { step: i })
  }

  // 只保留最近 5 条
  const behaviors = monitor.getBehaviors()

  action('面包屑记录')(`记录了 8 条，保留最近 ${behaviors.length} 条`)
  action('行为列表')(behaviors)

  // 清空
  monitor.clear()
  action('清空后')(monitor.getBehaviors())
}

export default breadcrumbDemo
