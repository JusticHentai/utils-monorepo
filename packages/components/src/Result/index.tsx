import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs } from '../_util'
import { ResultProps } from './interface'

const statusIcons: Record<string, string> = {
  success: '✓',
  error: '✗',
  info: 'i',
  warning: '!',
  '404': '404',
  '403': '403',
  '500': '500',
}

const Result = forwardRef<HTMLDivElement, ResultProps>((props, ref) => {
  const {
    style,
    className,
    status = 'info',
    title,
    subTitle,
    icon,
    extra,
    children,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('result')

  const classString = cs(
    prefixCls,
    { [`${prefixCls}-is-${status}`]: status },
    className
  )

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      <div className={`${prefixCls}-icon`}>
        {icon ||
          (status && (
            <span className={`${prefixCls}-icon-${status}`}>
              {statusIcons[status]}
            </span>
          ))}
      </div>
      {title && <div className={`${prefixCls}-title`}>{title}</div>}
      {subTitle && <div className={`${prefixCls}-subtitle`}>{subTitle}</div>}
      {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
      {children && <div className={`${prefixCls}-content`}>{children}</div>}
    </div>
  )
})

Result.displayName = 'Result'
export default Result
export type { ResultProps }
