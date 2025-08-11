import { useMemo } from 'react'

/**
 * 合并属性
 * @param defaultProps 默认属性
 * @param props 属性
 * @returns 合并后的属性
 */
const useMergeProps = <D extends Partial<P>, P>(
  defaultProps: D,
  props: P
): P & D => {
  const mergeProps = useMemo(() => {
    return {
      ...defaultProps,
      ...props,
    }
  }, [defaultProps, props])

  return mergeProps
}

export default useMergeProps
