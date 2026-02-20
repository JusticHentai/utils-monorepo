import { forwardRef, useContext, useEffect, useRef } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { MessageHookReturnType, MessageProps } from './interface'

const iconMap: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✗',
  loading: '⟳',
}

const MessageItem = forwardRef<
  HTMLDivElement,
  MessageProps & { onRemove?: () => void }
>((props, ref) => {
  const {
    style,
    className,
    content,
    type = 'info',
    duration = 3000,
    closable,
    icon,
    showIcon = true,
    onClose,
    onRemove,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('message')
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
        <span className={`${prefixCls}-icon`}>
          {icon || iconMap[type] || ''}
        </span>
      )}
      <span className={`${prefixCls}-content`}>{content}</span>
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
MessageItem.displayName = 'MessageItem'

// 命令式 API 的简单实现
const messageList: Array<{
  id: string
  config: MessageProps
  remove: () => void
}> = []
let seed = 0

function addMessage(config: MessageProps): () => void {
  const id = config.id || `msg_${seed++}`
  // 在真实实现中应使用 createRoot 渲染到 DOM
  // 这里提供接口定义和框架
  const remove = () => {
    const index = messageList.findIndex((m) => m.id === id)
    if (index > -1) messageList.splice(index, 1)
  }
  messageList.push({ id, config, remove })
  console.warn('Message 命令式 API 需要在应用层挂载 MessageHolder 组件')
  return remove
}

function createMessageMethod(type: MessageProps['type']) {
  return (config: MessageProps | string): (() => void) => {
    const normalizedConfig =
      typeof config === 'string' ? { content: config } : config
    return addMessage({ ...normalizedConfig, type })
  }
}

const Message = {
  info: createMessageMethod('info'),
  success: createMessageMethod('success'),
  warning: createMessageMethod('warning'),
  error: createMessageMethod('error'),
  loading: createMessageMethod('loading'),
  normal: createMessageMethod('normal'),
  clear: () => {
    messageList.length = 0
  },
}

export default Message
export { MessageItem }
export type { MessageHookReturnType, MessageProps }
