import { action } from 'storybook/actions'
import onWindowFocus from '../../../packages/element-utils/src/onWindowFocus'

const basicDemo = () => {
  const stop = onWindowFocus((e) => {
    action('窗口聚焦')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onWindowFocus')('已注册 focus 监听（点击回当前窗口时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 focus 监听')
  }, 10000)
}

export default basicDemo
