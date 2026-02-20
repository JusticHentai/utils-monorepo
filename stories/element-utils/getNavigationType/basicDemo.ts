import { action } from 'storybook/actions'
import getNavigationType from '../../../packages/element-utils/src/getNavigationType'
import { NavigationType } from '../../../packages/element-utils/src/getNavigationType/interface'

const basicDemo = () => {
  const navigationType = getNavigationType()

  action('当前导航类型')(navigationType)

  // 枚举值比较示例
  if (navigationType === NavigationType.Navigate) {
    action('这是一次常规导航')('用户通过链接或地址栏进入')
  } else if (navigationType === NavigationType.Reload) {
    action('这是一次页面刷新')('用户按了 F5 或刷新按钮')
  } else if (navigationType === NavigationType.BackForward) {
    action('这是前进/后退导航')('用户使用了浏览器导航按钮')
  } else if (navigationType === NavigationType.BackForwardCache) {
    action('从 BFCache 恢复')('页面从缓存中快速恢复')
  }

  // 获取原始 Performance Navigation 信息
  const navigation = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming

  if (navigation) {
    action('原始 Navigation 信息')({
      type: navigation.type,
      transferSize: navigation.transferSize,
      redirectCount: navigation.redirectCount,
    })
  }
}

export default basicDemo
