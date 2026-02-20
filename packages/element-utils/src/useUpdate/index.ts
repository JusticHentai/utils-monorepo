import { useCallback, useState } from 'react'

/**
 * 强制组件重新渲染的 Hook
 * @returns 触发重新渲染的函数
 *
 * @example
 * ```tsx
 * const update = useUpdate()
 *
 * <button onClick={update}>强制更新</button>
 * ```
 */
const useUpdate = () => {
  const [, setState] = useState({})

  return useCallback(() => setState({}), [])
}

export default useUpdate
