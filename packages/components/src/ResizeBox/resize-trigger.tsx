import React, { forwardRef, useContext } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'

interface ResizeTriggerProps {
  className?: string
  style?: React.CSSProperties
  direction: 'horizontal' | 'vertical'
  icon?: React.ReactNode
  resizable?: boolean
  collapsible?: {
    prev?:
      | boolean
      | {
          icon?: React.ReactNode
          onClick?: (
            e: React.MouseEvent,
            collapsed: boolean,
            activeDirection: 'prev' | 'next'
          ) => void
        }
    next?:
      | boolean
      | {
          icon?: React.ReactNode
          onClick?: (
            e: React.MouseEvent,
            collapsed: boolean,
            activeDirection: 'prev' | 'next'
          ) => void
        }
  }
  renderChildren?: (
    prev: React.ReactNode,
    trigger: React.ReactNode,
    next: React.ReactNode
  ) => React.ReactNode
  onMouseDown?: (e: React.MouseEvent) => void
  onResize?: (size: { width: number; height: number }) => void
  onCollapse?: (e: React.MouseEvent, direction: 'prev' | 'next') => void
}

const defaultDragIcon = (
  <svg viewBox="0 0 12 22" width="12" height="22" fill="currentColor">
    <circle cx="3" cy="3" r="1.5" />
    <circle cx="9" cy="3" r="1.5" />
    <circle cx="3" cy="11" r="1.5" />
    <circle cx="9" cy="11" r="1.5" />
    <circle cx="3" cy="19" r="1.5" />
    <circle cx="9" cy="19" r="1.5" />
  </svg>
)

const ResizeTrigger = forwardRef<HTMLDivElement, ResizeTriggerProps>(
  (props, ref) => {
    const {
      className,
      style,
      direction,
      icon,
      resizable = true,
      collapsible,
      renderChildren,
      onMouseDown,
      onResize: _onResize,
      onCollapse,
    } = props

    const { getPrefixCls } = useContext(ConfigContext)
    const prefixCls = getPrefixCls('resize-trigger')
    const isHorizontal = direction === 'horizontal'

    const triggerIcon = icon || defaultDragIcon

    const prevBtn = collapsible?.prev ? (
      <span
        className={`${prefixCls}-collapse-prev`}
        onClick={(e) => onCollapse?.(e, 'prev')}
      >
        {isHorizontal ? '◀' : '▲'}
      </span>
    ) : null

    const nextBtn = collapsible?.next ? (
      <span
        className={`${prefixCls}-collapse-next`}
        onClick={(e) => onCollapse?.(e, 'next')}
      >
        {isHorizontal ? '▶' : '▼'}
      </span>
    ) : null

    const triggerNode = resizable ? (
      <span className={`${prefixCls}-icon`}>{triggerIcon}</span>
    ) : null

    const content = renderChildren ? (
      renderChildren(prevBtn, triggerNode, nextBtn)
    ) : (
      <>
        {prevBtn}
        {triggerNode}
        {nextBtn}
      </>
    )

    return (
      <div
        ref={ref}
        className={cs(prefixCls, `${prefixCls}-${direction}`, className)}
        style={{ cursor: isHorizontal ? 'col-resize' : 'row-resize', ...style }}
        onMouseDown={onMouseDown}
      >
        {content}
      </div>
    )
  }
)

ResizeTrigger.displayName = 'ResizeTrigger'

export default ResizeTrigger
