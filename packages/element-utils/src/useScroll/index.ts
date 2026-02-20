import { useEffect } from 'react'

import createEventListener from '../createEventListener'
import { getTargetElement } from '../domTarget'
import useLatest from '../useLatest'
import useRafState from '../useRafState'
import type { Position, ScrollListenController, Target } from './interface'

export type { ScrollListenController, Target } from './interface'

/**
 * 监听元素的滚动位置
 *
 * @param target - 目标元素
 * @param shouldUpdate - 控制是否更新滚动信息
 *
 * @example
 * ```ts
 * const ref = useRef<HTMLDivElement>(null);
 * const scroll = useScroll(ref);
 *
 * // scroll?.left
 * // scroll?.top
 *
 * // 条件更新
 * const scroll = useScroll(ref, (val) => val.top < 100);
 * ```
 */
const useScroll = (
  target?: Target,
  shouldUpdate: ScrollListenController = () => true
): Position | undefined => {
  const [position, setPosition] = useRafState<Position>()

  const shouldUpdateRef = useLatest(shouldUpdate)

  useEffect(() => {
    const el = getTargetElement(target, document)

    if (!el) {
      return
    }

    const updatePosition = () => {
      let newPosition: Position
      if (el === document) {
        if (document.scrollingElement) {
          newPosition = {
            left: document.scrollingElement.scrollLeft,
            top: document.scrollingElement.scrollTop,
          }
        } else {
          // 兼容怪异模式
          newPosition = {
            left: Math.max(
              window.pageXOffset,
              document.documentElement.scrollLeft,
              document.body.scrollLeft
            ),
            top: Math.max(
              window.pageYOffset,
              document.documentElement.scrollTop,
              document.body.scrollTop
            ),
          }
        }
      } else {
        newPosition = {
          left: (el as Element).scrollLeft,
          top: (el as Element).scrollTop,
        }
      }

      if (shouldUpdateRef.current(newPosition)) {
        setPosition(newPosition)
      }
    }

    updatePosition()

    return createEventListener(el, 'scroll', updatePosition)
  }, [target])

  return position
}

export default useScroll
