import { forwardRef, useContext, useEffect, useRef, useState } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import Portal from '../Portal'
import { cs, off, on } from '../_util'
import { ModalProps } from './interface'

const Modal = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    style,
    className,
    children,
    title,
    visible = false,
    okText = '确定',
    cancelText = '取消',
    okButtonProps,
    cancelButtonProps,
    width = 520,
    mask = true,
    maskClosable = true,
    maskStyle,
    closable = true,
    closeIcon,
    confirmLoading,
    footer,
    alignCenter = true,
    getPopupContainer,
    unmountOnExit = false,
    simple,
    onOk,
    onCancel,
    afterOpen,
    afterClose,
    zIndex = 1000,
    escToClose = true,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('modal')
  const [internalLoading, setInternalLoading] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (visible) {
      afterOpen?.()
      // 锁定滚动
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  useEffect(() => {
    if (!visible && afterClose) {
      afterClose()
    }
  }, [visible])

  useEffect(() => {
    if (!visible || !escToClose) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel?.(e as unknown as React.MouseEvent)
      }
    }
    on(document, 'keydown', handleKeyDown)
    return () => off(document, 'keydown', handleKeyDown)
  }, [visible, escToClose, onCancel])

  const handleOk = async (e: React.MouseEvent) => {
    if (onOk) {
      const result = onOk(e)
      if (result && (result as Promise<void>).then) {
        setInternalLoading(true)
        try {
          await result
        } finally {
          setInternalLoading(false)
        }
      }
    }
  }

  const handleMaskClick = (e: React.MouseEvent) => {
    if (maskClosable && e.target === wrapperRef.current) {
      onCancel?.(e)
    }
  }

  if (!visible && unmountOnExit) return null
  if (!visible) return null

  const isLoading = confirmLoading || internalLoading

  const renderFooter = () => {
    if (footer === null || simple) return null
    if (footer !== undefined)
      return <div className={`${prefixCls}-footer`}>{footer}</div>
    return (
      <div className={`${prefixCls}-footer`}>
        <button
          className={`${prefixCls}-btn ${prefixCls}-btn-cancel`}
          onClick={onCancel}
          {...cancelButtonProps}
        >
          {cancelText}
        </button>
        <button
          className={`${prefixCls}-btn ${prefixCls}-btn-ok`}
          onClick={handleOk}
          disabled={isLoading}
          {...okButtonProps}
        >
          {isLoading ? '...' : okText}
        </button>
      </div>
    )
  }

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-simple`]: simple,
      [`${prefixCls}-align-center`]: alignCenter,
    },
    className
  )

  return (
    <Portal getContainer={getPopupContainer}>
      {mask && (
        <div className={`${prefixCls}-mask`} style={{ ...maskStyle, zIndex }} />
      )}
      <div
        ref={wrapperRef}
        className={`${prefixCls}-wrapper`}
        style={{ zIndex }}
        onClick={handleMaskClick}
      >
        <div
          ref={ref}
          className={classString}
          style={{ width, ...style }}
          {...rest}
        >
          {title && (
            <div className={`${prefixCls}-header`}>
              <div className={`${prefixCls}-title`}>{title}</div>
            </div>
          )}
          {closable && (
            <span className={`${prefixCls}-close`} onClick={onCancel}>
              {closeIcon || '×'}
            </span>
          )}
          <div className={`${prefixCls}-body`}>{children}</div>
          {renderFooter()}
        </div>
      </div>
    </Portal>
  )
})

Modal.displayName = 'Modal'

// 静态方法
type ModalFuncType = 'confirm' | 'info' | 'success' | 'warning' | 'error'

function createModalMethod(_type: ModalFuncType) {
  return (
    _config: Omit<ModalProps, 'visible'> & { content?: React.ReactNode }
  ) => {
    // 简易实现：创建 DOM 节点并渲染
    // 在实际使用中需要 ReactDOM.render/createRoot
    console.warn(`Modal.${_type} 需要在应用层实现`)
    return {
      close: () => {},
      update: (_newConfig: Partial<ModalProps>) => {},
    }
  }
}

type ModalComponentType = typeof Modal & {
  confirm: ReturnType<typeof createModalMethod>
  info: ReturnType<typeof createModalMethod>
  success: ReturnType<typeof createModalMethod>
  warning: ReturnType<typeof createModalMethod>
  error: ReturnType<typeof createModalMethod>
}

const ModalComponent = Modal as ModalComponentType
ModalComponent.confirm = createModalMethod('confirm')
ModalComponent.info = createModalMethod('info')
ModalComponent.success = createModalMethod('success')
ModalComponent.warning = createModalMethod('warning')
ModalComponent.error = createModalMethod('error')

export default ModalComponent
export type { ModalProps }
