import { action } from 'storybook/actions'
import throttle from '../../../packages/element-utils/src/throttle'

let throttleFn: (() => void) | null = null

const immediateDemo = () => {
  if (!throttleFn) {
    throttleFn = throttle({
      cb: () => {
        action('立即执行回调')('立即执行回调')
      },
      duration: 1000,
      immediate: true,
    })
  }

  throttleFn()
  action('节流函数（立即执行）')('立即执行回调，1秒内再次调用会被忽略')
}

export default immediateDemo
