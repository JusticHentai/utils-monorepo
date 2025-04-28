import { mergeChildren } from '@justichentai/react-utils'
import { ForwardedRef, forwardRef, MouseEvent, useRef } from 'react'
import useMergeProps from '../hooks/useMergeProps'
import { defaultProps, name } from './config'
import { ButtonProps } from './interface'
import ButtonStyle from './style'

const Button = (
  baseProps: ButtonProps,
  ref?: ForwardedRef<HTMLButtonElement>
) => {
  // 处理 props
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, {})
  const { onClick, disabled, loading, icon, children, htmlType, ...rest } =
    props

  const innerButtonRef = useRef<HTMLButtonElement>(null)
  const buttonRef = ref || innerButtonRef

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (loading || disabled) {
      e?.preventDefault?.()

      return
    }

    onClick?.(e)
  }

  return (
    <ButtonStyle
      ref={buttonRef}
      {...rest}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {loading ? <div>todo</div> : icon}
      {mergeChildren(children)}
    </ButtonStyle>
  )
}

const ForwardRefButton = forwardRef<HTMLButtonElement, ButtonProps>(Button)
ForwardRefButton.displayName = name
export default ForwardRefButton
