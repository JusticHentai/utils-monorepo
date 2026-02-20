import createEventListener from '../../createEventListener'
import getElementInfo from '../../getElementInfo'
import type {
  BehaviorCallback,
  ObserveClickOptions,
  StopListening,
} from '../interface'
import { BEHAVIOR_TYPE } from '../interface'

/**
 * 监控点击行为
 * @param callback - 点击事件回调函数
 * @param options - 配置选项
 * @returns 停止监听函数
 */
const observeClick = (
  callback: BehaviorCallback,
  options?: ObserveClickOptions
): StopListening => {
  const { capture = true, sampleRate = 1 } = options || {}

  const handler = (event: MouseEvent) => {
    if (sampleRate < 1 && Math.random() > sampleRate) return

    const target = event.target as Element

    callback({
      type: BEHAVIOR_TYPE.CLICK,
      timestamp: Date.now(),
      pageUrl: window.location.href,
      target: getElementInfo(target),
      data: {
        x: event.clientX,
        y: event.clientY,
        button: event.button,
      },
    })
  }

  return createEventListener(document, 'click', handler, { capture })
}

export default observeClick
