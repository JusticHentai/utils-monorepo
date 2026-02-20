import { action } from 'storybook/actions'
import debounce from '../../../packages/element-utils/src/debounce'

let fn: (() => void) | null = null

export const initBasicDemo = () => {
  fn = debounce({
    cb: () => action('防抖回调执行')(),
    duration: 1000,
  })
  action('初始化防抖函数（延迟执行）')()
}

export const runBasicDemo = () => {
  if (!fn) {
    action('请先初始化')()
    return
  }
  fn()
  action('触发防抖函数')()
}
