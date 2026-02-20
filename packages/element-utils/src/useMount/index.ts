import type { EffectCallback } from 'react'
import { useEffect } from 'react'

type MountCallback = EffectCallback | (() => Promise<void | (() => void)>)

/**
 * 在组件挂载时执行回调函数，只执行一次
 * @param fn - 挂载时执行的回调函数，支持异步函数
 */
const useMount = (fn: MountCallback) => {
  useEffect(() => {
    const result = fn?.()
    // 如果 fn 返回 Promise，不作为清理函数返回
    if (
      result &&
      typeof result === 'object' &&
      typeof (result as any).then === 'function'
    ) {
      return
    }
    return result as ReturnType<EffectCallback>
  }, [])
}

export default useMount
