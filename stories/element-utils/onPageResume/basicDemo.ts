import { action } from 'storybook/actions'
import onPageResume from '../../../packages/element-utils/src/onPageResume'

const basicDemo = () => {
  const stop = onPageResume((e) => {
    action('页面恢复')({
      type: e.type,
      timestamp: Date.now(),
    })
  })

  action('onPageResume')('已注册 resume 监听（页面从冻结状态恢复时触发）')

  setTimeout(() => {
    stop()
    action('清理完成')('已移除 resume 监听')
  }, 10000)
}

export default basicDemo
