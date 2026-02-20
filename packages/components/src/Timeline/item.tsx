import React, { forwardRef, useContext, useEffect, useRef } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import { TimelineItemProps } from './interface'

const defaultProps: Partial<TimelineItemProps> = {
  dotType: 'solid',
  lineType: 'solid',
}

function Item(baseProps: TimelineItemProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<TimelineItemProps>(
    baseProps,
    defaultProps as TimelineItemProps,
    (componentConfig?.['Timeline.Item'] ?? {}) as TimelineItemProps
  )

  const {
    children,
    className,
    style,
    label,
    position,
    dot,
    dotColor,
    dotType,
    lineType,
    lineColor,
    direction,
    labelPosition,
    autoFixDotSize = true,
    ...rest
  } = props

  const dotRef = useRef<HTMLDivElement>(null)
  const prefixCls = getPrefixCls('timeline')

  useEffect(() => {
    if (autoFixDotSize && dotRef.current) {
      const dotWidth = dotRef.current.offsetWidth
      const scale = 16 / dotWidth
      if (scale < 1) {
        dotRef.current.style.transform = `translateX(-50%) translateY(-50%) scale(${scale})`
      }
    }
  }, [autoFixDotSize, dot])

  const labelDom = label && (
    <div className={`${prefixCls}-item-label`}>{label}</div>
  )

  return (
    <div
      ref={ref}
      role="listitem"
      {...rest}
      className={cs(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-${direction}-${position}`]: direction,
          [`${prefixCls}-item-label-${labelPosition}`]: labelPosition,
        },
        className
      )}
      style={style}
    >
      <div className={`${prefixCls}-item-dot-wrapper`}>
        <div
          className={`${prefixCls}-item-dot-line ${prefixCls}-item-dot-line-is-${direction}`}
          style={{
            [direction === 'horizontal' ? 'borderTopStyle' : 'borderLeftStyle']:
              lineType,
            ...(lineColor ? { borderColor: lineColor } : {}),
          }}
        />
        <div className={`${prefixCls}-item-dot-content`}>
          {dot ? (
            <div className={`${prefixCls}-item-dot-custom`} ref={dotRef}>
              {dot}
            </div>
          ) : (
            <div
              className={cs(
                `${prefixCls}-item-dot`,
                `${prefixCls}-item-dot-${dotType}`
              )}
              style={
                dotType === 'solid'
                  ? { backgroundColor: dotColor }
                  : { borderColor: dotColor }
              }
            />
          )}
        </div>
      </div>
      <div className={`${prefixCls}-item-content-wrapper`}>
        {children && (
          <div className={`${prefixCls}-item-content`}>{children}</div>
        )}
        {labelPosition !== 'relative' && labelDom}
      </div>
      {labelPosition === 'relative' && labelDom}
    </div>
  )
}

const ForwardRefItem = forwardRef(Item)

const TimelineItem = ForwardRefItem as typeof ForwardRefItem & {
  isTimelineItem?: boolean
}

TimelineItem.displayName = 'TimelineItem'
TimelineItem.isTimelineItem = true

export default TimelineItem
