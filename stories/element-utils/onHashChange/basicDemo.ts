import { action } from 'storybook/actions'
import onHashChange from '../../../packages/element-utils/src/onHashChange'

const basicDemo = () => {
  const stop = onHashChange((e) => {
    action('hashchange 触发')({
      oldURL: e.oldURL,
      newURL: e.newURL,
    })
  })

  action('onHashChange')('已注册 hashchange 监听，请手动修改 URL hash 测试')

  // 模拟 hash 变化
  const originalHash = window.location.hash
  window.location.hash = '#demo-test-' + Date.now()

  setTimeout(() => {
    window.location.hash = originalHash
    stop()
    action('清理完成')('已移除 hashchange 监听')
  }, 3000)
}

export default basicDemo
