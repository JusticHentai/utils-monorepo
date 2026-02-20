import type { DependencyList } from 'react'

/**
 * 比较两个依赖数组是否相同
 * @param oldDeps - 旧依赖数组
 * @param deps - 新依赖数组
 * @returns 如果相同返回 true
 */
export const depsAreSame = (
  oldDeps: DependencyList,
  deps: DependencyList
): boolean => {
  if (oldDeps === deps) return true

  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false
  }

  return true
}

export default depsAreSame
