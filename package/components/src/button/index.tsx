import { ForwardedRef, forwardRef, MouseEvent, useRef } from 'react'
import useMergeProps from '../hooks/useMergeProps'
import mergeChildren from '../utils/mergeChildren'
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

  // 父组件传入一个 ref，子组件将元素挂到这个变量上给父组件使用
  const innerButtonRef = useRef<HTMLButtonElement>(null)
  const buttonRef = ref || innerButtonRef

  // 点击事件处理
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
