import { action } from 'storybook/actions'
import onPopState from '../../../packages/element-utils/src/onPopState'

const basicDemo = () => {
  const stop = onPopState((e) => {
    action('popstate 触发')({
      state: e.state,
      url: window.location.href,
    })
  })

  action('onPopState')('已注册 popstate 监听（浏览器前进/后退时触发）')

  // 模拟 pushState 后 back
  history.pushState({ demo: true }, '', '#popstate-demo')
  setTimeout(() => {
    history.back()
  }, 500)

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 popstate 监听')
  }, 5000)
}

export default basicDemo
