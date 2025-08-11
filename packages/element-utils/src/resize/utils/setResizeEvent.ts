import debounce from '../../debounce'
import { Options } from '../interface'
import update from './update'

/**
 * 设置 resize 事件
 */
const setResizeEvent = (options: Options) => {
  const { debounce: duration } = options

  if (!duration) {
    window.addEventListener('resize', () => update(options))

    return
  }

  const debounceUpdate = debounce({
    cb: update,
    duration,
    immediate: false,
  })

  window.addEventListener('resize', () => debounceUpdate(options))
}

export default setResizeEvent
