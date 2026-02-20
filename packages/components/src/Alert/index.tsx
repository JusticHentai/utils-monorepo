import { forwardRef, useState } from 'react'
import { AlertProps, AlertType } from './interface'
import * as S from './style'

const iconMap: Record<AlertType, string> = {
  [AlertType.Info]: 'ℹ',
  [AlertType.Success]: '✓',
  [AlertType.Warning]: '⚠',
  [AlertType.Error]: '✗',
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const {
    style,
    className,
    children,
    type = AlertType.Info,
    title,
    content,
    closable,
    closeElement,
    icon,
    showIcon = true,
    banner,
    action,
    onClose,
    afterClose,
    ...rest
  } = props

  const [visible, setVisible] = useState(true)

  if (!visible) {
    afterClose?.()
    return null
  }

  const hasTitle = !!title

  const handleClose = (e: React.MouseEvent) => {
    setVisible(false)
    onClose?.(e)
  }

  return (
    <S.Wrapper
      ref={ref}
      $type={type}
      $banner={banner}
      $hasTitle={hasTitle}
      className={className}
      style={style}
      role="alert"
      {...rest}
    >
      {showIcon && (
        <S.IconWrapper $type={type} $hasTitle={hasTitle}>
          {icon || iconMap[type as AlertType]}
        </S.IconWrapper>
      )}
      <S.Body>
        {title && <S.Title $type={type}>{title}</S.Title>}
        {(content || children) && (
          <S.Content $type={type} $hasTitle={hasTitle}>
            {content || children}
          </S.Content>
        )}
      </S.Body>
      {action && <S.Action>{action}</S.Action>}
      {closable && (
        <S.CloseBtn onClick={handleClose}>{closeElement || '×'}</S.CloseBtn>
      )}
    </S.Wrapper>
  )
})

Alert.displayName = 'Alert'
export default Alert
export type { AlertProps }
