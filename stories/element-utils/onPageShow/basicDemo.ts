import { action } from 'storybook/actions'
import onPageShow from '../../../packages/element-utils/src/onPageShow'

const basicDemo = () => {
  const stop = onPageShow((e) => {
    action('pageshow 触发')({
      persisted: e.persisted,
      fromBFCache: e.persisted,
      timestamp: Date.now(),
    })
  })

  action('onPageShow')('已注册 pageshow 监听（页面显示或从 BFCache 恢复时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 pageshow 监听')
  }, 10000)
}

export default basicDemo
