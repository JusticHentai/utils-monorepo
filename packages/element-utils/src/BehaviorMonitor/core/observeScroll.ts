import createEventListener from '../../createEventListener'
import throttleFn from '../../throttle'
import type {
  BehaviorCallback,
  ObserveScrollOptions,
  StopListening,
} from '../interface'
import { BEHAVIOR_TYPE } from '../interface'

/**
 * 监控滚动行为
 * @param callback - 滚动事件回调函数
 * @param options - 配置选项
 * @returns 停止监听函数
 */
const observeScroll = (
  callback: BehaviorCallback,
  options?: ObserveScrollOptions
): StopListening => {
  const { throttleMs = 200, sampleRate = 1 } = options || {}

  const handler = throttleFn({
    cb: () => {
      if (sampleRate < 1 && Math.random() > sampleRate) return

      callback({
        type: BEHAVIOR_TYPE.SCROLL,
        timestamp: Date.now(),
        pageUrl: window.location.href,
        data: {
          scrollTop:
            document.documentElement.scrollTop || document.body.scrollTop,
          scrollLeft:
            document.documentElement.scrollLeft || document.body.scrollLeft,
          scrollHeight: document.documentElement.scrollHeight,
          scrollWidth: document.documentElement.scrollWidth,
          viewportHeight: window.innerHeight,
          viewportWidth: window.innerWidth,
        },
      })
    },
    duration: throttleMs,
    immediate: true,
  })

  return createEventListener(window, 'scroll', handler, { passive: true })
}

export default observeScroll
