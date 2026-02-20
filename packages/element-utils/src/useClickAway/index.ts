import { useEffect } from 'react'

import createEventListener from '../createEventListener'
import getTargetElement from '../domTarget'
import type { BasicTarget } from '../domTarget/interface'
import useLatest from '../useLatest'

import type { DocumentEventKey } from './interface'

/**
 * 监听目标元素外的点击事件
 *
 * @param onClickAway - 点击外部时的回调
 * @param target - 目标元素（支持数组）
 * @param eventName - 事件名称
 */
const useClickAway = <T extends Event = Event>(
  onClickAway: (event: T) => void,
  target: BasicTarget | BasicTarget[],
  eventName: DocumentEventKey | DocumentEventKey[] = 'click'
) => {
  const onClickAwayRef = useLatest(onClickAway)
  const eventNameRef = useLatest(eventName)

  useEffect(() => {
    const handler = (event: Event) => {
      const targets = Array.isArray(target) ? target : [target]

      const isInsideTarget = targets.some((item) => {
        const targetElement = getTargetElement(item)
        return !targetElement || targetElement.contains(event.target as Node)
      })

      if (isInsideTarget) return

      onClickAwayRef.current(event as T)
    }

    const eventNames = Array.isArray(eventNameRef.current)
      ? eventNameRef.current
      : [eventNameRef.current]

    const cleanups = eventNames.map((event) =>
      createEventListener(document, event, handler)
    )

    return () => {
      cleanups.forEach((cleanup) => cleanup())
    }
  }, [target, eventNameRef, onClickAwayRef])
}

export default useClickAway
