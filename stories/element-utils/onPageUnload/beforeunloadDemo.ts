import { action } from 'storybook/actions'
import onPageUnload from '../../../packages/element-utils/src/onPageUnload'

/**
 * 使用 beforeunload 事件监听页面卸载
 */
const beforeunloadDemo = () => {
  const stop = onPageUnload(() => {
    action('页面卸载')('beforeunload 事件触发')
  }, false)

  action('开始监听')('使用 beforeunload 事件（可显示确认对话框）')

  return stop
}

export default beforeunloadDemo
