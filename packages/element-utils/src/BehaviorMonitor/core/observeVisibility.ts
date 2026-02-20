import createEventListener from '../../createEventListener'
import type { BehaviorCallback, StopListening } from '../interface'
import { BEHAVIOR_TYPE } from '../interface'

/**
 * 监控页面可见性变化
 * @param callback - 可见性变化回调函数
 * @returns 停止监听函数
 */
const observeVisibility = (callback: BehaviorCallback): StopListening => {
  const handler = () => {
    callback({
      type: BEHAVIOR_TYPE.CUSTOM,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      data: {
        event: 'visibilitychange',
        visible: document.visibilityState === 'visible',
        visibilityState: document.visibilityState,
      },
    })
  }

  return createEventListener(document, 'visibilitychange', handler)
}

export default observeVisibility
