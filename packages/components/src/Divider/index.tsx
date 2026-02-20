import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { DividerProps } from './interface'

const Divider = forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    children,
    style,
    className,
    type = 'horizontal',
    orientation = 'center',
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('divider')

  const classString = cs(
    prefixCls,
    `${prefixCls}-${type}`,
    {
      [`${prefixCls}-with-text`]: !!children,
      [`${prefixCls}-with-text-${orientation}`]: !!children && orientation,
    },
    className
  )

  return (
    <div
      ref={ref}
      className={classString}
      style={style}
      role="separator"
      {...rest}
    >
      {children && type === 'horizontal' && (
        <span className={`${prefixCls}-text ${prefixCls}-text-${orientation}`}>
          {children}
        </span>
      )}
    </div>
  )
})

Divider.displayName = 'Divider'
export default Divider
export type { DividerProps }
