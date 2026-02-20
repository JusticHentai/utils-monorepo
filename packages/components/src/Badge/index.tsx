import { forwardRef, useContext } from 'react'
import { ConfigContext } from '../ConfigProvider/context'
import { cs, isNumber } from '../_util'
import { BadgeProps } from './interface'

const Badge = forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const {
    style,
    className,
    children,
    count,
    dot,
    maxCount = 99,
    text,
    status,
    color,
    dotStyle,
    offset,
    ...rest
  } = props

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('badge')

  const renderBadge = () => {
    if (status) {
      return (
        <span
          className={cs(prefixCls, `${prefixCls}-status`, className)}
          style={style}
          ref={ref}
          {...rest}
        >
          <span
            className={cs(
              `${prefixCls}-status-dot`,
              `${prefixCls}-status-${status}`
            )}
            style={{ backgroundColor: color }}
          />
          {text && <span className={`${prefixCls}-status-text`}>{text}</span>}
        </span>
      )
    }

    const hasChildren = !!children

    const badge = (() => {
      if (dot) {
        const show = isNumber(count) ? count > 0 : !!count
        if (!show) return null
        return (
          <span
            className={`${prefixCls}-dot`}
            style={{
              backgroundColor: color,
              ...dotStyle,
              ...(offset
                ? { marginTop: offset[1], marginRight: -offset[0] }
                : {}),
            }}
          />
        )
      }

      if (count !== undefined && count !== null) {
        const displayCount =
          isNumber(count) && count > maxCount ? `${maxCount}+` : count
        if (isNumber(count) && count <= 0) return null
        return (
          <span
            className={`${prefixCls}-number`}
            style={{
              backgroundColor: color,
              ...dotStyle,
              ...(offset
                ? { marginTop: offset[1], marginRight: -offset[0] }
                : {}),
            }}
          >
            {displayCount}
          </span>
        )
      }

      if (text) {
        return (
          <span
            className={`${prefixCls}-text`}
            style={{ backgroundColor: color, ...dotStyle }}
          >
            {text}
          </span>
        )
      }

      return null
    })()

    if (!hasChildren) {
      return (
        <span
          ref={ref}
          className={cs(prefixCls, className)}
          style={style}
          {...rest}
        >
          {badge}
        </span>
      )
    }

    return (
      <span
        ref={ref}
        className={cs(prefixCls, `${prefixCls}-has-children`, className)}
        style={style}
        {...rest}
      >
        {children}
        {badge}
      </span>
    )
  }

  return renderBadge()
})

Badge.displayName = 'Badge'
export default Badge
export type { BadgeProps }
