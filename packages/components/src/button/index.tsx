import { mergeChildren } from '@justichentai/element-utils'
import { ForwardedRef, forwardRef, MouseEvent, useRef } from 'react'
import useMergeProps from '../hooks/useMergeProps'
import { defaultProps, name } from './config'
import { BtnShape, BtnSize, BtnStatus, BtnType, ButtonProps } from './interface'
import ButtonStyle from './style'

const Button = (
  baseProps: ButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) => {
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, {})
  const {
    onClick,
    disabled,
    loading,
    icon,
    children,
    htmlType,
    type = BtnType.Default,
    size = BtnSize.Default,
    status = BtnStatus.Default,
    shape = BtnShape.Square,
    long,
    iconOnly,
    ...rest
  } = props

  const innerButtonRef = useRef<HTMLButtonElement>(null)
  const buttonRef = ref || innerButtonRef

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      e?.preventDefault?.()
      return
    }
    onClick?.(e)
  }

  const isIconOnly = iconOnly ?? (!!icon && !children)

  return (
    <ButtonStyle
      ref={buttonRef}
      {...(rest as any)}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      $btnType={type}
      $size={size}
      $status={status}
      $shape={shape}
      $long={long}
      $loading={loading}
      $iconOnly={isIconOnly}
      $disabled={disabled}
    >
      {loading ? <div>todo</div> : icon}
      {mergeChildren(children)}
    </ButtonStyle>
  )
}

const ForwardRefButton = forwardRef<HTMLButtonElement, ButtonProps>(Button)
ForwardRefButton.displayName = name
export default ForwardRefButton
