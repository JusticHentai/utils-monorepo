import { useState } from 'react'

import type { BasicTarget } from '../domTarget'
import useEventListener from '../useEventListener'
import type { UseHoverOptions } from './interface'

export type { UseHoverOptions } from './interface'

/**
 * 监听 DOM 元素是否有鼠标悬停
 *
 * @param target - 目标元素
 * @param options - 配置项
 */
const useHover = (target: BasicTarget, options?: UseHoverOptions): boolean => {
  const { onEnter, onLeave, onChange } = options || {}

  const [isHovering, setIsHovering] = useState(false)

  useEventListener(
    'mouseenter',
    () => {
      onEnter?.()
      setIsHovering(true)
      onChange?.(true)
    },
    { target }
  )

  useEventListener(
    'mouseleave',
    () => {
      onLeave?.()
      setIsHovering(false)
      onChange?.(false)
    },
    { target }
  )

  return isHovering
}

export default useHover
