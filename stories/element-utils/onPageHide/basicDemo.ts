import { action } from 'storybook/actions'
import onPageHide from '../../../packages/element-utils/src/onPageHide'

const basicDemo = () => {
  const stop = onPageHide((e) => {
    action('pagehide 触发')({
      persisted: e.persisted,
      timestamp: Date.now(),
    })
  })

  action('onPageHide')('已注册 pagehide 监听（切换标签页或关闭页面时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 pagehide 监听')
  }, 10000)
}

export default basicDemo
