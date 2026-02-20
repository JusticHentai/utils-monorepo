import { action } from 'storybook/actions'
import defer from '../../../packages/js-utils/src/defer'

const deferDemo = () => {
  action('defer - 同步代码先执行')('① 开始')

  // 传递额外参数给延迟函数
  defer((...args: unknown[]) => {
    action('defer - 延迟后执行，接收参数')({ args })
  }, 'arg1', 'arg2')

  action('defer - 同步代码继续')('② 结束（此时 defer 回调尚未执行）')
}

export default deferDemo
