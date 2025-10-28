import { Options } from './interface'

/**
 * 监听 visibilitychange 事件
 * @param options 事件回调
 * @returns 移除事件的函数
 */
const visibility = (options?: Options) => {
  const { visible, hidden } = options || {}

  const fn = () => {
    if (document.visibilityState === 'visible') {
      visible?.()
    } else {
      hidden?.()
    }
  }

  document.addEventListener('visibilitychange', fn)

  return () => document.removeEventListener('visibilitychange', fn)
}

export default visibility
