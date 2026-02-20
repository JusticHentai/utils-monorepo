import { action } from 'storybook/actions'
import onUnload from '../../../packages/element-utils/src/onUnload'

const basicDemo = () => {
  const stop = onUnload((e) => {
    action('unload 触发')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onUnload')('已注册 unload 监听（页面卸载时触发，注意会阻止 BFCache）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 unload 监听')
  }, 10000)
}

export default basicDemo
