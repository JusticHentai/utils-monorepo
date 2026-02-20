import React, { forwardRef, useContext, useRef, useState } from 'react'
import cs from '../_util/classNames'
import { ConfigContext } from '../ConfigProvider/context'
import { CollapseContext } from './context'
import { CollapseItemProps } from './interface'

function CollapseItem(
  props: CollapseItemProps,
  ref: React.Ref<HTMLDivElement>
) {
  const {
    name,
    header,
    disabled,
    expandIcon,
    showExpandIcon = true,
    extra,
    contentStyle,
    destroyOnHide: itemDestroyOnHide,
    children,
    className,
    style,
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const {
    activeKeys,
    onToggle,
    expandIcon: ctxExpandIcon,
    expandIconPosition = 'left',
    triggerRegion,
    lazyload,
    destroyOnHide: ctxDestroyOnHide,
  } = useContext(CollapseContext)

  const prefixCls = getPrefixCls('collapse-item')
  const isActive = activeKeys.indexOf(name) > -1

  const shouldDestroy = itemDestroyOnHide ?? ctxDestroyOnHide
  const [hasRendered, setHasRendered] = useState(isActive)

  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState<string | number>(
    isActive ? 'auto' : 0
  )
  const prevActive = useRef(isActive)

  if (isActive && !hasRendered) {
    setHasRendered(true)
  }

  // handle animation
  React.useEffect(() => {
    if (isActive && !prevActive.current) {
      // expanding
      if (contentRef.current) {
        setContentHeight(0)
        requestAnimationFrame(() => {
          if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight)
            setTimeout(() => setContentHeight('auto'), 200)
          }
        })
      }
    } else if (!isActive && prevActive.current) {
      // collapsing
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
        requestAnimationFrame(() => {
          setContentHeight(0)
        })
      }
    }
    prevActive.current = isActive
  }, [isActive])

  const icon = expandIcon ?? ctxExpandIcon ?? (
    <span className={`${prefixCls}-icon-arrow`}>&#9656;</span>
  )

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return
    onToggle(name, e)
  }

  const headerClickHandler = triggerRegion === 'icon' ? undefined : handleClick
  const iconClickHandler = triggerRegion === 'icon' ? handleClick : undefined

  const shouldRender = shouldDestroy ? isActive : lazyload ? hasRendered : true

  return (
    <div
      ref={ref}
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-active`]: isActive,
          [`${prefixCls}-disabled`]: disabled,
        },
        className
      )}
      style={style}
    >
      <div
        className={cs(`${prefixCls}-header`, {
          [`${prefixCls}-header-icon-right`]: expandIconPosition === 'right',
        })}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-expanded={isActive}
        onClick={headerClickHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !disabled) {
            onToggle(name, e as unknown as React.MouseEvent)
          }
        }}
      >
        {showExpandIcon && (
          <span
            className={cs(`${prefixCls}-header-icon`, {
              [`${prefixCls}-header-icon-expanded`]: isActive,
            })}
            onClick={iconClickHandler}
          >
            {icon}
          </span>
        )}
        <span className={`${prefixCls}-header-title`}>{header}</span>
        {extra && <span className={`${prefixCls}-header-extra`}>{extra}</span>}
      </div>
      <div
        className={`${prefixCls}-content-box`}
        role="region"
        style={{
          height: contentHeight,
          overflow: 'hidden',
          transition: 'height 0.2s ease-in-out',
        }}
      >
        {shouldRender && (
          <div
            ref={contentRef}
            className={`${prefixCls}-content`}
            style={contentStyle}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

const ForwardRefItem = forwardRef(CollapseItem)

const CollapseItemComponent = ForwardRefItem as typeof ForwardRefItem & {
  isCollapseItem?: boolean
}

CollapseItemComponent.displayName = 'CollapseItem'
CollapseItemComponent.isCollapseItem = true

export default CollapseItemComponent
