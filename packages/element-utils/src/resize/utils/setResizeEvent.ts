import debounce from '../../debounce'
import { ResizeOptions } from '../interface'
import update from './update'

/**
 * 设置 resize 和 orientationchange 事件, 返回清理函数
 */
const setResizeEvent = (options: ResizeOptions): (() => void) => {
  const { debounce: duration } = options

  const handler = !duration
    ? () => update(options)
    : debounce({
        cb: update,
        duration,
        immediate: false,
      })

  const resizeHandler = () => handler(options)

  window.addEventListener('resize', resizeHandler)
  window.addEventListener('orientationchange', resizeHandler)

  return () => {
    window.removeEventListener('resize', resizeHandler)
    window.removeEventListener('orientationchange', resizeHandler)
  }
}

export default setResizeEvent
