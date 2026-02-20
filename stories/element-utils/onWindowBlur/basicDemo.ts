import { action } from 'storybook/actions'
import onWindowBlur from '../../../packages/element-utils/src/onWindowBlur'

const basicDemo = () => {
  const stop = onWindowBlur((e) => {
    action('窗口失焦')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onWindowBlur')('已注册 blur 监听（点击其他窗口或标签页时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 blur 监听')
  }, 10000)
}

export default basicDemo
