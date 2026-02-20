import React, { forwardRef, ReactElement, useContext } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Spin from '../Spin'
import { TimelineItemProps, TimelineProps } from './interface'
import Item from './item'

const getDefaultPosition = (
  position: string | undefined,
  index: number,
  mode: string,
  direction: string
) => {
  let map = ['left', 'right']
  if (direction === 'horizontal') {
    map = ['top', 'bottom']
  }
  const res = mode === 'alternate' ? position || map[index % 2] : mode
  return map.indexOf(res!) > -1 ? res : map[0]
}

const defaultProps: Partial<TimelineProps> = {
  mode: 'left',
  direction: 'vertical',
  pendingDot: <Spin size={12} />,
  labelPosition: 'same',
}

function Timeline(baseProps: TimelineProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<TimelineProps>(
    baseProps,
    defaultProps as TimelineProps,
    (componentConfig?.Timeline ?? {}) as TimelineProps
  )
  const {
    className,
    mode,
    reverse,
    children,
    style,
    direction,
    pending,
    labelPosition,
    pendingDot,
    ...rest
  } = props

  const prefixCls = getPrefixCls('timeline')

  const items: ReactElement[] =
    (React.Children.map(children as any, (child: ReactElement) => {
      if (child && child.type && (child.type as typeof Item).isTimelineItem) {
        return child
      }
      return null
    }) as ReactElement[]) || []

  if (pending) {
    items.push(
      <Item lineType="dashed" dot={pendingDot} key="__pending__">
        {pending === true ? '' : pending}
      </Item>
    )
  }

  if (reverse) {
    items.reverse()
  }

  return (
    <div
      role="list"
      {...rest}
      ref={ref}
      className={cs(
        prefixCls,
        `${prefixCls}-${mode}`,
        `${prefixCls}-direction-${direction}`,
        className
      )}
      style={style}
    >
      {items.map((child: ReactElement, index) => {
        if (!child) return null
        const childProps = child.props as Record<string, any>
        const { position } = childProps
        let lineType = childProps.lineType
        if (pending) {
          if (reverse) {
            if (index === 0) lineType = 'dashed'
          } else if (items.length - 2 === index) {
            lineType = 'dashed'
          }
        }
        return React.cloneElement(child as React.ReactElement<Record<string, any>>, {
          key: child.key || index,
          className: cs(childProps.className, {
            [`${prefixCls}-item-last`]: items.length - 1 === index,
          }),
          labelPosition,
          position: getDefaultPosition(position, index, mode!, direction!),
          direction,
          lineType,
        })
      })}
    </div>
  )
}

const ForwardRefTimeline = forwardRef(Timeline)

const TimelineComponent = ForwardRefTimeline as typeof ForwardRefTimeline & {
  Item: typeof Item
}

TimelineComponent.displayName = 'Timeline'
TimelineComponent.Item = Item

export default TimelineComponent
export type { TimelineItemProps, TimelineProps }
