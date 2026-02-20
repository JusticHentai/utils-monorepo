import { useEffect } from 'react'

import { getTargetElement } from '../domTarget'
import { genKeyFormatter, isValidKeyType } from '../onKeyPress'
import useLatest from '../useLatest'
import type {
  KeyEvent,
  KeyFilter,
  KeyType,
  UseKeyPressOptions,
} from './interface'

export type {
  KeyEvent,
  KeyFilter,
  KeyType,
  Target,
  UseKeyPressOptions,
} from './interface'

const defaultEvents: KeyEvent[] = ['keydown']

/**
 * 监听键盘按键
 *
 * @param keyFilter - 按键过滤器
 * @param eventHandler - 事件处理函数
 * @param options - 配置项
 */
const useKeyPress = (
  keyFilter: KeyFilter,
  eventHandler: (event: KeyboardEvent, key: KeyType) => void,
  options?: UseKeyPressOptions
) => {
  const {
    events = defaultEvents,
    target,
    exactMatch = false,
    useCapture = false,
  } = options || {}
  const eventHandlerRef = useLatest(eventHandler)
  const keyFilterRef = useLatest(keyFilter)
  const eventsRef = useLatest(events)

  useEffect(() => {
    const el = getTargetElement(target, window)
    if (!el) return

    const currentEvents = eventsRef.current

    const callbackHandler = (event: Event) => {
      const keyEvent = event as KeyboardEvent
      const genGuard = genKeyFormatter(keyFilterRef.current, exactMatch)
      const keyGuard = genGuard(keyEvent)
      const firedKey = isValidKeyType(keyGuard) ? keyGuard : keyEvent.key

      if (keyGuard) {
        return eventHandlerRef.current?.(keyEvent, firedKey)
      }
    }

    for (const eventName of currentEvents) {
      el?.addEventListener?.(eventName, callbackHandler, useCapture)
    }

    return () => {
      for (const eventName of currentEvents) {
        el?.removeEventListener?.(eventName, callbackHandler, useCapture)
      }
    }
  }, [target, exactMatch, useCapture, keyFilterRef, eventHandlerRef, eventsRef])
}

export default useKeyPress
