import { useMemo } from 'react'

/**
 * 合并多个属性对象
 * @param propsList - 多个属性对象，后面的属性会覆盖前面的
 * @returns 合并后的属性
 */
const useMergeProps = <T extends Record<string, unknown>>(
  ...propsList: T[]
): T => {
  const mergeProps = useMemo(
    () => Object.assign({}, ...propsList) as T,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList
  )

  return mergeProps
}

export default useMergeProps
