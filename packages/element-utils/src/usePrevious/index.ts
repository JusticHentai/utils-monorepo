import { type RefObject, useCallback, useRef } from 'react'

/**
 * 获取状态的上一次值
 * 返回元组 [prev, update]，只有调用 update 时才会更新 prev
 *
 * @param state - 当前状态值
 * @returns [上一次的状态值 ref, 更新函数] - 首次渲染时 prev 为 undefined
 */
const usePrevious = <T>(state: T): [RefObject<T | undefined>, () => void] => {
  const prevRef = useRef<T>(undefined)

  const update = useCallback(() => {
    prevRef.current = state
  }, [state])

  return [prevRef, update]
}

export default usePrevious
