import { action } from 'storybook/actions'
import { NavigationType } from '../../../packages/element-utils/src/getNavigationType/interface'

const navigationTypesDemo = () => {
  // 所有可能的导航类型及其含义
  const navigationTypes: Record<NavigationType, string> = {
    [NavigationType.Navigate]: '常规导航 - 用户通过点击链接、输入 URL、表单提交等方式进入页面',
    [NavigationType.Reload]: '页面刷新 - 用户按 F5、Ctrl+R 或点击刷新按钮',
    [NavigationType.BackForward]: '前进/后退 - 用户通过浏览器的前进或后退按钮导航',
    [NavigationType.BackForwardCache]: 'BFCache 恢复 - 页面从浏览器的后退/前进缓存中恢复',
    [NavigationType.Prerender]: '预渲染激活 - 页面通过 Speculation Rules API 预渲染后激活',
  }

  action('所有导航类型说明')(navigationTypes)

  // 提示用户如何测试不同类型
  action('测试方法')({
    [NavigationType.Navigate]: '直接访问页面',
    [NavigationType.Reload]: '按 F5 或点击刷新',
    [NavigationType.BackForward]: '先导航到其他页面，再点击后退',
    [NavigationType.BackForwardCache]: '导航到其他页面后快速后退（需浏览器支持）',
    [NavigationType.Prerender]: '需要配置 Speculation Rules API',
  })
}

export default navigationTypesDemo
