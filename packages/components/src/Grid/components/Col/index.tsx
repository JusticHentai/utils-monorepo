import useMergeProps from '@/hooks/useMergeProps'
import { forwardRef, useContext, useMemo } from 'react'

import { RowContext } from '../../context'
import { ColProps, MAX } from './interface'
import ColStyle from './style'

const Col = forwardRef<HTMLDivElement, ColProps>((baseProps, ref) => {
  const { span, offset, pull, push, flex, children, ...rest } =
    useMergeProps<ColProps>(baseProps, {}, {})
  const { gutterHorizontal, gutterVertical } = useContext(RowContext)

  // 计算列内边距（栅格间隔的1/2分配至两侧）
  const [paddingHorizontal, paddingVertical] = useMemo(
    () => [gutterHorizontal / 2, gutterVertical / 2],
    [gutterHorizontal, gutterVertical]
  )
  // 计算列宽度百分比（基于24栅格体系）
  const $span = useMemo(
    () => (span ? `width: ${(span / MAX) * 100}%` : ''),
    [span]
  )
  // 计算列偏移量（左侧外边距百分比）
  const $offset = useMemo(
    () => (offset ? `margin-left: ${(offset / MAX) * 100}%` : ''),
    [offset]
  )
  const $pull = useMemo(
    () => (pull ? `right: ${(pull / MAX) * 100}%` : ''),
    [pull]
  )
  const $push = useMemo(
    () => (push ? `right: ${(push / MAX) * 100}%` : ''),
    [push]
  )
  const $flex = useMemo(() => `flex: ${flex ? flex : '0 0 auto'}`, [flex])

  return (
    <ColStyle
      ref={ref}
      {...rest}
      $paddingHorizontal={paddingHorizontal}
      $paddingVertical={paddingVertical}
      $span={$span}
      $offset={$offset}
      $pull={$pull}
      $push={$push}
      $flex={$flex}
    >
      {children}
    </ColStyle>
  )
})

Col.displayName = 'Col'

export default Col
