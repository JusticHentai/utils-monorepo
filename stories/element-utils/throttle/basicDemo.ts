import { action } from 'storybook/actions'
import throttle from '../../../packages/element-utils/src/throttle'

let throttleFn: (() => void) | null = null

const basicDemo = () => {
  if (!throttleFn) {
    throttleFn = throttle({
      cb: () => {
        action('节流回调执行')('节流回调执行')
      },
      duration: 1000,
    })
  }

  throttleFn()
  action('节流函数（延迟执行）')('已触发节流函数，1秒后可再次执行')
}

export default basicDemo
