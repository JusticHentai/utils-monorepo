import { debounce } from '@justichentai/math'
import { InnerOptions } from '../types'
import update from './update'

/**
 * 设置 resize 事件
 */
export default function setResizeEvent(options: InnerOptions) {
  if (options.debounce) {
    const { duration, immediate } = options.debounce

    const myUpdate = debounce({
      cb: update,
      duration,
      immediate,
    })

    window.addEventListener('resize', () => {
      myUpdate(options)
    })
  } else {
    window.addEventListener('resize', () => {
      update(options)
    })
  }
}
