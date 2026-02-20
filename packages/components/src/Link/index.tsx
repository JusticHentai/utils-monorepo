import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { LinkProps } from './interface'

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const {
    children,
    style,
    className,
    href,
    status = 'default',
    disabled,
    hoverable = true,
    icon,
    onClick,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('link')

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-hoverable`]: hoverable,
      [`${prefixCls}-status-${status}`]: status !== 'default',
    },
    className
  )

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    onClick?.(e)
  }

  return (
    <a
      ref={ref}
      className={classString}
      style={style}
      href={disabled ? undefined : href}
      onClick={handleClick}
      {...rest}
    >
      {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
      {children}
    </a>
  )
})

Link.displayName = 'Link'
export default Link
export type { LinkProps }
