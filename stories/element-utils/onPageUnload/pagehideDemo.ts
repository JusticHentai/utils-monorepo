import { action } from 'storybook/actions'
import onPageUnload from '../../../packages/element-utils/src/onPageUnload'

/**
 * 使用 pagehide 事件监听页面卸载（推荐）
 */
const pagehideDemo = () => {
  const stop = onPageUnload(() => {
    action('页面卸载')('pagehide 事件触发')
  })

  action('开始监听')('使用 pagehide 事件（推荐，移动端更可靠）')

  return stop
}

export default pagehideDemo
