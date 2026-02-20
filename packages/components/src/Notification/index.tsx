import { forwardRef, useContext, useEffect, useRef } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { NotificationProps } from './interface'

const iconMap: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✗',
}

const NotificationItem = forwardRef<
  HTMLDivElement,
  NotificationProps & { onRemove?: () => void }
>((props, ref) => {
  const {
    style,
    className,
    title,
    content,
    type = 'info',
    duration = 3000,
    closable = true,
    icon,
    btn,
    showIcon = true,
    onClose,
    onRemove,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('notification')
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    if (duration > 0) {
      timerRef.current = setTimeout(() => {
        onClose?.()
        onRemove?.()
      }, duration)
    }
    return () => clearTimeout(timerRef.current)
  }, [duration, onClose, onRemove])

  const classString = cs(prefixCls, `${prefixCls}-${type}`, className)

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      {showIcon && (
        <span className={`${prefixCls}-icon`}>{icon || iconMap[type]}</span>
      )}
      <div className={`${prefixCls}-body`}>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {content && <div className={`${prefixCls}-content`}>{content}</div>}
      </div>
      {btn && <div className={`${prefixCls}-btn`}>{btn}</div>}
      {closable && (
        <span
          className={`${prefixCls}-close`}
          onClick={() => {
            onClose?.()
            onRemove?.()
          }}
        >
          ×
        </span>
      )}
    </div>
  )
})
NotificationItem.displayName = 'NotificationItem'

function createNotificationMethod(_type: NotificationProps['type']) {
  return (_config: NotificationProps) => {
    console.warn(
      'Notification 命令式 API 需要在应用层挂载 NotificationHolder 组件'
    )
    return { close: () => {} }
  }
}

const Notification = {
  info: createNotificationMethod('info'),
  success: createNotificationMethod('success'),
  warning: createNotificationMethod('warning'),
  error: createNotificationMethod('error'),
  clear: () => {},
}

export default Notification
export { NotificationItem }
export type { NotificationProps }
