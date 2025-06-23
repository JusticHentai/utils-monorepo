import { useMemo } from 'react'

/**
 * 合并属性
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
