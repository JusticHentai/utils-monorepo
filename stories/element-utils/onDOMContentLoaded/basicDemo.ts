import { action } from 'storybook/actions'
import onDOMContentLoaded from '../../../packages/element-utils/src/onDOMContentLoaded'

const basicDemo = () => {
  const stop = onDOMContentLoaded((e) => {
    action('DOMContentLoaded 触发')({
      type: e.type,
      readyState: document.readyState,
      timestamp: Date.now(),
    })
  })

  action('onDOMContentLoaded')('已注册监听（若 DOM 已就绪则立即触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 DOMContentLoaded 监听')
  }, 3000)
}

export default basicDemo
