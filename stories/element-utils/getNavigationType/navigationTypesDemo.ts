import { action } from 'storybook/actions'
import { NAVIGATION_TYPE } from '../../../packages/element-utils/src/getNavigationType/interface'

const navigationTypesDemo = () => {
  // 所有可能的导航类型及其含义
  const navigationTypes: Record<NAVIGATION_TYPE, string> = {
    [NAVIGATION_TYPE.NAVIGATE]: '常规导航 - 用户通过点击链接、输入 URL、表单提交等方式进入页面',
    [NAVIGATION_TYPE.RELOAD]: '页面刷新 - 用户按 F5、Ctrl+R 或点击刷新按钮',
    [NAVIGATION_TYPE.BACK_FORWARD]: '前进/后退 - 用户通过浏览器的前进或后退按钮导航',
    [NAVIGATION_TYPE.BACK_FORWARD_CACHE]: 'BFCache 恢复 - 页面从浏览器的后退/前进缓存中恢复',
    [NAVIGATION_TYPE.PRERENDER]: '预渲染激活 - 页面通过 Speculation Rules API 预渲染后激活',
  }

  action('所有导航类型说明')(navigationTypes)

  // 提示用户如何测试不同类型
  action('测试方法')({
    [NAVIGATION_TYPE.NAVIGATE]: '直接访问页面',
    [NAVIGATION_TYPE.RELOAD]: '按 F5 或点击刷新',
    [NAVIGATION_TYPE.BACK_FORWARD]: '先导航到其他页面，再点击后退',
    [NAVIGATION_TYPE.BACK_FORWARD_CACHE]: '导航到其他页面后快速后退（需浏览器支持）',
    [NAVIGATION_TYPE.PRERENDER]: '需要配置 Speculation Rules API',
  })
}

export default navigationTypesDemo
