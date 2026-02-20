import type { DependencyList } from 'react'
import { useRef } from 'react'

import { depsAreSame } from '../depsAreSame'

/**
 * 用于创建只初始化一次的对象，比 useMemo 更稳定
 * useMemo 不保证一定不会重新创建，useCreation 可以保证
 * @param factory - 创建对象的工厂函数
 * @param deps - 依赖数组
 * @returns 创建的对象

 */
const useCreation = <T>(factory: () => T, deps: DependencyList) => {
  const ref = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false,
  })

  /* eslint-disable react-hooks/refs */
  if (!ref.current.initialized || !depsAreSame(ref.current.deps, deps)) {
    ref.current = {
      deps,
      obj: factory(),
      initialized: true,
    }
  }

  return ref.current.obj as T
  /* eslint-enable react-hooks/refs */
}

export default useCreation
