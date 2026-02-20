import { useLayoutEffect } from 'react'

import type { BasicTarget } from '../domTarget'
import { getTargetElement } from '../domTarget'
import { createResizeObserver } from '../observer'
import useRafState from '../useRafState'

type Size = { width: number; height: number }

/**
 * 监听 DOM 节点尺寸变化
 *
 * @param target - 目标元素
 *
 * @example
 * ```ts
 * const ref = useRef<HTMLDivElement>(null);
 * const size = useSize(ref);
 *
 * // size?.width
 * // size?.height
 * ```
 */
const useSize = (target: BasicTarget): Size | undefined => {
  const [state, setState] = useRafState<Size | undefined>(() => {
    const el = getTargetElement(target)
    return el ? { width: el.clientWidth, height: el.clientHeight } : undefined
  })

  useLayoutEffect(() => {
    const el = getTargetElement(target)

    if (!el) {
      return
    }

    const { stop } = createResizeObserver(el as Element, ({ target }) => {
      setState({ width: target.clientWidth, height: target.clientHeight })
    })

    return stop
  }, [target])

  return state
}

export default useSize
