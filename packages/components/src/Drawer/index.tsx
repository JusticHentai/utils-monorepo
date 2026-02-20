import { CSSProperties, forwardRef, useContext, useEffect } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Portal from '../Portal'
import { cs, off, on } from '../_util'
import { DrawerProps } from './interface'

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    style,
    className,
    children,
    title,
    visible = false,
    placement = 'right',
    width = 250,
    height = 250,
    mask = true,
    maskClosable = true,
    maskStyle,
    closable = true,
    closeIcon,
    footer,
    headerStyle,
    bodyStyle,
    okText = '确定',
    cancelText = '取消',
    zIndex = 1000,
    getPopupContainer,
    unmountOnExit = false,
    escToClose = true,
    onOk,
    onCancel,
    afterOpen,
    afterClose,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('drawer')

  useEffect(() => {
    if (visible) {
      afterOpen?.()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      afterClose?.()
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  useEffect(() => {
    if (!visible || !escToClose) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel?.(e as unknown as React.MouseEvent)
    }
    on(document, 'keydown', handleKeyDown)
    return () => off(document, 'keydown', handleKeyDown)
  }, [visible, escToClose, onCancel])

  if (!visible && unmountOnExit) return null
  if (!visible) return null

  const isHorizontal = placement === 'left' || placement === 'right'
  const sizeStyle: CSSProperties = isHorizontal ? { width } : { height }

  const classString = cs(prefixCls, `${prefixCls}-${placement}`, className)

  const renderFooter = () => {
    if (footer === null) return null
    if (footer !== undefined)
      return <div className={`${prefixCls}-footer`}>{footer}</div>
    return (
      <div className={`${prefixCls}-footer`}>
        <button
          className={`${prefixCls}-btn ${prefixCls}-btn-cancel`}
          onClick={onCancel}
        >
          {cancelText}
        </button>
        <button
          className={`${prefixCls}-btn ${prefixCls}-btn-ok`}
          onClick={onOk}
        >
          {okText}
        </button>
      </div>
    )
  }

  return (
    <Portal getContainer={getPopupContainer}>
      {mask && (
        <div
          className={`${prefixCls}-mask`}
          style={{ ...maskStyle, zIndex }}
          onClick={maskClosable ? onCancel : undefined}
        />
      )}
      <div
        ref={ref}
        className={classString}
        style={{ ...sizeStyle, zIndex, ...style }}
        {...rest}
      >
        {(title || closable) && (
          <div className={`${prefixCls}-header`} style={headerStyle}>
            {title && <div className={`${prefixCls}-title`}>{title}</div>}
            {closable && (
              <span className={`${prefixCls}-close`} onClick={onCancel}>
                {closeIcon || '×'}
              </span>
            )}
          </div>
        )}
        <div className={`${prefixCls}-body`} style={bodyStyle}>
          {children}
        </div>
        {renderFooter()}
      </div>
    </Portal>
  )
})

Drawer.displayName = 'Drawer'
export default Drawer
export type { DrawerProps }
