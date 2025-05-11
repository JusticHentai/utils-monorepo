import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef, useMemo } from 'react'

import { RowContext } from '@/Grid/context'
import { isArray } from '@justichentai/js-utils'
import { RowProps, rowPropsDefault } from './interface'
import RowStyle from './style'

const Row = forwardRef<HTMLDivElement, RowProps>((baseProps, ref) => {
  const { gutter, justify, align, children, ...rest } = useMergeProps<RowProps>(
    baseProps,
    rowPropsDefault,
    {}
  )

  // 处理栅格间隔逻辑
  // 1. 无间隔时返回[0, 0]
  // 2. 数组格式时直接返回[水平间隔, 垂直间隔]
  // 3. 数字格式时返回[数字值, 0]
  const [gutterHorizontal, gutterVertical] = useMemo(() => {
    if (!gutter) {
      return [0, 0]
    }

    if (isArray(gutter)) {
      return gutter
    }

    return [gutter, 0]
  }, [gutter])

  // 计算垂直方向负边距
  // 用于抵消子列元素的内边距，实现栅格对齐
  const marginVertical = useMemo(() => gutterVertical / -2, [gutterVertical])

  return (
    <RowStyle
      ref={ref}
      {...rest}
      $marginVertical={marginVertical}
      $justify={justify}
      $align={align}
    >
      {/* 通过Context向所有子Col组件传递栅格间隔配置 */}
      <RowContext.Provider value={{ gutterHorizontal, gutterVertical }}>
        {children}
      </RowContext.Provider>
    </RowStyle>
  )
})

Row.displayName = 'Row'

export default Row
